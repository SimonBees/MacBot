import { contextBridge, ipcRenderer } from 'electron'

const electronAPI = {
  sendNotification: (title: string, body: string) =>
    ipcRenderer.invoke('send-notification', title, body),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  hideWindow: () => ipcRenderer.invoke('hide-window'),
  showWindow: () => ipcRenderer.invoke('show-window'),
}

contextBridge.exposeInMainWorld('electron', electronAPI)

export type ElectronAPI = typeof electronAPI
