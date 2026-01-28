import { app, BrowserWindow, globalShortcut, Notification, ipcMain } from 'electron'
import * as path from 'path'

let mainWindow: BrowserWindow | null = null

const isDev = process.env.NODE_ENV !== 'production'

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Register global shortcut (Cmd+Shift+M)
function registerShortcuts() {
  const ret = globalShortcut.register('CommandOrControl+Shift+M', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide()
      } else {
        mainWindow.show()
        mainWindow.focus()
      }
    }
  })

  if (!ret) {
    console.error('Global shortcut registration failed')
  }
}

// Show notification
function showNotification(title: string, body: string) {
  new Notification({
    title,
    body,
    silent: false,
  }).show()
}

// App lifecycle
app.whenReady().then(() => {
  createWindow()
  registerShortcuts()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

// IPC handlers
ipcMain.handle('send-notification', async (_event, title: string, body: string) => {
  showNotification(title, body)
  return { success: true }
})

ipcMain.handle('minimize-window', async () => {
  if (mainWindow) {
    mainWindow.minimize()
  }
  return { success: true }
})

ipcMain.handle('hide-window', async () => {
  if (mainWindow) {
    mainWindow.hide()
  }
  return { success: true }
})

ipcMain.handle('show-window', async () => {
  if (mainWindow) {
    mainWindow.show()
    mainWindow.focus()
  }
  return { success: true }
})
