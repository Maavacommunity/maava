export type InstallStep =
  | { type: "venv" }
  | { type: "pip"; args: string[] }
  | { type: "npm"; args: string[] }
  | { type: "shell"; command: string; args: string[] };

export type AgentSource =
  | { type: "bundled"; path: string }
  | { type: "git"; url: string };

export interface AgentManifest {
  id: string;
  name: string;
  tagline: string;
  category: string;
  runtime: "python" | "node" | "system";
  source: AgentSource;
  install: InstallStep[];
  launch: { command: string; args: string[] };
}

/**
 * The local agent catalog. "bundled" agents ship inside the app and install
 * instantly (used to exercise the install/launch pipeline offline). "git"
 * agents are cloned from their upstream repo on install and require network
 * access plus the runtime declared in `install`.
 */
export const agentCatalog: AgentManifest[] = [
  {
    id: "hello-agent",
    name: "Hello Agent (Demo)",
    tagline: "Bundled demo agent used to verify install & launch work end to end.",
    category: "Demo",
    runtime: "python",
    source: { type: "bundled", path: "hello-agent" },
    install: [{ type: "venv" }],
    launch: { command: "%PYTHON%", args: ["main.py"] },
  },
  {
    id: "browser-use-ai",
    name: "Browser-Use AI",
    tagline: "Turn any LLM into a browser-controlling agent.",
    category: "Browser Automation",
    runtime: "python",
    source: { type: "git", url: "https://github.com/browser-use/browser-use.git" },
    install: [{ type: "venv" }, { type: "pip", args: ["install", "."] }],
    launch: { command: "%PYTHON%", args: ["-m", "browser_use"] },
  },
  {
    id: "comfyui",
    name: "ComfyUI",
    tagline: "Node-based image and video generation.",
    category: "Image & Video",
    runtime: "python",
    source: { type: "git", url: "https://github.com/comfyanonymous/ComfyUI.git" },
    install: [{ type: "venv" }, { type: "pip", args: ["install", "-r", "requirements.txt"] }],
    launch: { command: "%PYTHON%", args: ["main.py"] },
  },
  {
    id: "open-interpreter",
    name: "Open Interpreter",
    tagline: "A natural-language computer that can run code.",
    category: "Coding Assistants",
    runtime: "python",
    source: { type: "git", url: "https://github.com/OpenInterpreter/open-interpreter.git" },
    install: [{ type: "venv" }, { type: "pip", args: ["install", "."] }],
    launch: { command: "%PYTHON%", args: ["-m", "interpreter"] },
  },
  {
    id: "crewai-flow-runner",
    name: "CrewAI Flow Runner",
    tagline: "Coordinate a team of agents on one task.",
    category: "Multi-Agent",
    runtime: "python",
    source: { type: "git", url: "https://github.com/crewAIInc/crewAI.git" },
    install: [{ type: "venv" }, { type: "pip", args: ["install", "."] }],
    launch: { command: "%PYTHON%", args: ["-m", "crewai"] },
  },
];

export function getManifest(id: string): AgentManifest | undefined {
  return agentCatalog.find((a) => a.id === id);
}
