import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { AgentManager } from "./agentManager";

const FRONTEND_DEV_URL = process.env.MAAVA_FRONTEND_URL ?? "http://localhost:3000";
const PROTOCOL = "maava";

let mainWindow: BrowserWindow | null = null;
let agentManager: AgentManager;
let pendingDeepLink: string | null = null;

function parseInstallSlug(url: string): string | null {
  try {
    const parsed = new URL(url);
    // maava://install/<slug>
    const parts = [parsed.hostname, ...parsed.pathname.split("/")].filter(Boolean);
    if (parts[0] === "install" && parts[1]) return parts[1];
    return null;
  } catch {
    return null;
  }
}

function dispatchDeepLink(url: string): void {
  const slug = parseInstallSlug(url);
  if (!slug) return;
  if (mainWindow) {
    mainWindow.webContents.send("deeplink:install", slug);
    mainWindow.focus();
  } else {
    pendingDeepLink = slug;
  }
}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1240,
    height: 820,
    backgroundColor: "#0b0e14",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(FRONTEND_DEV_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../static/index.html"));
  }

  mainWindow.webContents.once("did-finish-load", () => {
    if (pendingDeepLink) {
      mainWindow?.webContents.send("deeplink:install", pendingDeepLink);
      pendingDeepLink = null;
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function registerIpcHandlers(): void {
  ipcMain.handle("agents:list", () => agentManager.listAgents());
  ipcMain.handle("agents:install", (_event, agentId: string) => agentManager.install(agentId));
  ipcMain.handle("agents:launch", (_event, agentId: string) => agentManager.launch(agentId));
  ipcMain.handle("agents:stop", (_event, agentId: string) => agentManager.stop(agentId));
  ipcMain.handle("agents:uninstall", (_event, agentId: string) => agentManager.uninstall(agentId));

  agentManager.onLog((agentId, line) => {
    mainWindow?.webContents.send("agents:log", agentId, line);
  });
  agentManager.onStateChange((agentId, state) => {
    mainWindow?.webContents.send("agents:state", agentId, state);
  });
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", (_event, argv) => {
    const deepLinkArg = argv.find((arg) => arg.startsWith(`${PROTOCOL}://`));
    if (deepLinkArg) dispatchDeepLink(deepLinkArg);
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.on("open-url", (event, url) => {
    event.preventDefault();
    dispatchDeepLink(url);
  });

  app.whenReady().then(() => {
    app.setAsDefaultProtocolClient(PROTOCOL);

    const bundledAgentsDir = app.isPackaged
      ? path.join(process.resourcesPath, "agents")
      : path.join(__dirname, "../agents");
    agentManager = new AgentManager(app.getPath("userData"), bundledAgentsDir);

    registerIpcHandlers();
    createWindow();

    const initialDeepLinkArg = process.argv.find((arg) => arg.startsWith(`${PROTOCOL}://`));
    if (initialDeepLinkArg) dispatchDeepLink(initialDeepLinkArg);

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
