// Electron API types from preload
export interface ElectronAPI {
  sendNotification: (title: string, body: string) => Promise<{ success: boolean }>
  minimizeWindow: () => Promise<{ success: boolean }>
  hideWindow: () => Promise<{ success: boolean }>
  showWindow: () => Promise<{ success: boolean }>
}

declare global {
  interface Window {
    electron: ElectronAPI
  }
}
