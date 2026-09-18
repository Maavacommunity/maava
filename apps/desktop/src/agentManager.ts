import { spawn, spawnSync, ChildProcess } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, cpSync } from "node:fs";
import path from "node:path";
import type { AgentManifest, InstallStep } from "./agentRegistry";
import { agentCatalog, getManifest } from "./agentRegistry";

export type AgentStatus = "not-installed" | "installing" | "installed" | "running" | "error";

export interface AgentState {
  status: AgentStatus;
  installedAt?: string;
  error?: string;
}

export type LogListener = (agentId: string, line: string) => void;
export type StateListener = (agentId: string, state: AgentState) => void;

interface Paths {
  bundledAgentsDir: string; // ships inside the app, read-only
  userAgentsDir: string; // per-user install location (userData/agents)
  stateFile: string; // userData/agents-state.json
}

function isWindows(): boolean {
  return process.platform === "win32";
}

function findPythonExecutable(): string {
  const candidates = isWindows() ? ["python", "python3"] : ["python3", "python"];
  for (const candidate of candidates) {
    const result = spawnSync(candidate, ["--version"]);
    if (result.status === 0) return candidate;
  }
  throw new Error("No Python interpreter found on PATH (tried: " + candidates.join(", ") + ")");
}

function venvPython(workdir: string): string {
  return isWindows()
    ? path.join(workdir, ".venv", "Scripts", "python.exe")
    : path.join(workdir, ".venv", "bin", "python");
}

export class AgentManager {
  private paths: Paths;
  private state: Record<string, AgentState> = {};
  private running: Map<string, ChildProcess> = new Map();
  private logListeners: LogListener[] = [];
  private stateListeners: StateListener[] = [];

  constructor(userDataDir: string, bundledAgentsDir: string) {
    this.paths = {
      bundledAgentsDir,
      userAgentsDir: path.join(userDataDir, "agents"),
      stateFile: path.join(userDataDir, "agents-state.json"),
    };
    mkdirSync(this.paths.userAgentsDir, { recursive: true });
    this.loadState();
  }

  onLog(listener: LogListener): void {
    this.logListeners.push(listener);
  }

  onStateChange(listener: StateListener): void {
    this.stateListeners.push(listener);
  }

  private emitLog(agentId: string, line: string): void {
    for (const l of this.logListeners) l(agentId, line);
  }

  private setState(agentId: string, patch: Partial<AgentState>): void {
    const next: AgentState = { ...(this.state[agentId] ?? { status: "not-installed" }), ...patch };
    this.state[agentId] = next;
    this.saveState();
    for (const l of this.stateListeners) l(agentId, next);
  }

  private loadState(): void {
    if (existsSync(this.paths.stateFile)) {
      try {
        this.state = JSON.parse(readFileSync(this.paths.stateFile, "utf-8"));
      } catch {
        this.state = {};
      }
    }
  }

  private saveState(): void {
    writeFileSync(this.paths.stateFile, JSON.stringify(this.state, null, 2), "utf-8");
  }

  listAgents(): Array<AgentManifest & { state: AgentState }> {
    return agentCatalog.map((manifest) => ({
      ...manifest,
      state: this.state[manifest.id] ?? { status: "not-installed" },
    }));
  }

  private workdirFor(manifest: AgentManifest): string {
    return path.join(this.paths.userAgentsDir, manifest.id);
  }

  private runStep(command: string, args: string[], cwd: string, agentId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.emitLog(agentId, `$ ${command} ${args.join(" ")}`);
      const child = spawn(command, args, { cwd, shell: isWindows() });
      child.stdout?.on("data", (chunk) => {
        String(chunk).split(/\r?\n/).filter(Boolean).forEach((line) => this.emitLog(agentId, line));
      });
      child.stderr?.on("data", (chunk) => {
        String(chunk).split(/\r?\n/).filter(Boolean).forEach((line) => this.emitLog(agentId, line));
      });
      child.on("error", (err) => reject(err));
      child.on("close", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`${command} exited with code ${code}`));
      });
    });
  }

  private async runInstallStep(step: InstallStep, workdir: string, agentId: string): Promise<void> {
    switch (step.type) {
      case "venv": {
        const python = findPythonExecutable();
        await this.runStep(python, ["-m", "venv", ".venv"], workdir, agentId);
        return;
      }
      case "pip": {
        await this.runStep(venvPython(workdir), ["-m", "pip", ...step.args], workdir, agentId);
        return;
      }
      case "npm": {
        await this.runStep(isWindows() ? "npm.cmd" : "npm", step.args, workdir, agentId);
        return;
      }
      case "shell": {
        await this.runStep(step.command, step.args, workdir, agentId);
        return;
      }
    }
  }

  async install(agentId: string): Promise<void> {
    const manifest = getManifest(agentId);
    if (!manifest) throw new Error(`Unknown agent: ${agentId}`);

    const workdir = this.workdirFor(manifest);
    this.setState(agentId, { status: "installing", error: undefined });

    try {
      if (manifest.source.type === "bundled") {
        const src = path.join(this.paths.bundledAgentsDir, manifest.source.path);
        if (!existsSync(workdir)) {
          mkdirSync(path.dirname(workdir), { recursive: true });
          cpSync(src, workdir, { recursive: true });
        }
      } else {
        if (!existsSync(workdir)) {
          this.emitLog(agentId, `Cloning ${manifest.source.url}...`);
          await this.runStep("git", ["clone", "--depth", "1", manifest.source.url, workdir], this.paths.userAgentsDir, agentId);
        }
      }

      for (const step of manifest.install) {
        await this.runInstallStep(step, workdir, agentId);
      }

      this.setState(agentId, { status: "installed", installedAt: new Date().toISOString() });
      this.emitLog(agentId, "Install complete.");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      this.setState(agentId, { status: "error", error: message });
      this.emitLog(agentId, `Install failed: ${message}`);
      throw err;
    }
  }

  async launch(agentId: string): Promise<void> {
    const manifest = getManifest(agentId);
    if (!manifest) throw new Error(`Unknown agent: ${agentId}`);
    const workdir = this.workdirFor(manifest);
    if (!existsSync(workdir)) throw new Error("Agent is not installed yet.");

    const command = manifest.launch.command === "%PYTHON%" ? venvPython(workdir) : manifest.launch.command;

    this.setState(agentId, { status: "running" });
    this.emitLog(agentId, `$ ${command} ${manifest.launch.args.join(" ")}`);

    const child = spawn(command, manifest.launch.args, { cwd: workdir, shell: isWindows() });
    this.running.set(agentId, child);

    child.stdout?.on("data", (chunk) => {
      String(chunk).split(/\r?\n/).filter(Boolean).forEach((line) => this.emitLog(agentId, line));
    });
    child.stderr?.on("data", (chunk) => {
      String(chunk).split(/\r?\n/).filter(Boolean).forEach((line) => this.emitLog(agentId, line));
    });
    child.on("close", (code) => {
      this.running.delete(agentId);
      this.emitLog(agentId, `Process exited with code ${code}`);
      this.setState(agentId, { status: "installed" });
    });
  }

  stop(agentId: string): void {
    const child = this.running.get(agentId);
    if (child) {
      child.kill();
      this.running.delete(agentId);
      this.setState(agentId, { status: "installed" });
    }
  }

  uninstall(agentId: string): void {
    const manifest = getManifest(agentId);
    if (!manifest) throw new Error(`Unknown agent: ${agentId}`);
    this.stop(agentId);
    const workdir = this.workdirFor(manifest);
    if (existsSync(workdir)) rmSync(workdir, { recursive: true, force: true });
    this.setState(agentId, { status: "not-installed", installedAt: undefined, error: undefined });
  }
}
