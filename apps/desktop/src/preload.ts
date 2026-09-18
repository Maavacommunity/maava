import { contextBridge, ipcRenderer } from "electron";

const api = {
  listAgents: () => ipcRenderer.invoke("agents:list"),
  install: (agentId: string) => ipcRenderer.invoke("agents:install", agentId),
  launch: (agentId: string) => ipcRenderer.invoke("agents:launch", agentId),
  stop: (agentId: string) => ipcRenderer.invoke("agents:stop", agentId),
  uninstall: (agentId: string) => ipcRenderer.invoke("agents:uninstall", agentId),
  onLog: (callback: (agentId: string, line: string) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, agentId: string, line: string) => callback(agentId, line);
    ipcRenderer.on("agents:log", listener);
    return () => ipcRenderer.removeListener("agents:log", listener);
  },
  onStateChange: (callback: (agentId: string, state: unknown) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, agentId: string, state: unknown) => callback(agentId, state);
    ipcRenderer.on("agents:state", listener);
    return () => ipcRenderer.removeListener("agents:state", listener);
  },
  onDeepLinkInstall: (callback: (slug: string) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, slug: string) => callback(slug);
    ipcRenderer.on("deeplink:install", listener);
    return () => ipcRenderer.removeListener("deeplink:install", listener);
  },
};

contextBridge.exposeInMainWorld("maava", api);

export type MaavaApi = typeof api;
