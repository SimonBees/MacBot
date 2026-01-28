# MacBot - Build Configuration

## Development vs Production

### Development Mode
```bash
npm run dev
```
- Starts Vite dev server on http://localhost:5173
- Electron loads from dev server
- Hot module replacement enabled
- DevTools automatically opened

### Production Build
```bash
npm run build:mac
```
- Compiles React app to `dist/` directory
- Compiles Electron main/preload to `out-electron/`
- Packages everything into macOS app bundle
- Output: `release/MacBot-1.0.0.dmg`

## Build Process

### Step 1: Build React Renderer
```bash
npm run build:vite
```
Creates:
```
dist/
├── index.html          # Main HTML file
├── assets/             # JS and CSS bundles
│   ├── index-xxx.js
│   └── index-xxx.css
└── vite.svg
```

### Step 2: Build Electron Main Process
```bash
npm run build:electron
```
Creates:
```
out-electron/
├── main/
│   └── index.js        # Compiled main process
└── preload/
    └── index.js        # Compiled preload script
```

### Step 3: Package macOS App
```bash
electron-builder --mac
```
Creates:
```
release/
└── MacBot-1.0.0.dmg    # Installable DMG file
```

## Loading Logic in Electron

In `src/main/index.ts`:
```typescript
const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  // Development: Load from Vite dev server
  mainWindow.loadURL('http://localhost:5173')
} else {
  // Production: Load from built files
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
}
```

## Important Notes

1. **Development**: Uses HTTP server, requires `npm run dev`
2. **Production**: Uses local files, requires `npm run build:mac`
3. The built app contains all dependencies (no internet needed)
4. Works offline after installation
