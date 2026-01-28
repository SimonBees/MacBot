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

## GitHub Actions Build

### Automatic Release

Push a version tag to trigger automatic build and release:

```bash
# Create and push tag
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will:
1. Build the macOS application
2. Create a GitHub Release
3. Attach the DMG file to the release

### Manual Trigger

You can also manually trigger a build from GitHub:
1. Go to Actions tab
2. Select "Build and Release" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

The DMG will be available in the Actions artifacts (30 days retention).

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
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
}
```

## Important Notes

1. **Development**: Uses HTTP server, requires `npm run dev`
2. **Production**: Uses local files, requires `npm run build:mac`
3. **GitHub Actions**: Builds for both x64 and arm64 (Universal binary)
4. The built app contains all dependencies (no internet needed)
5. Works offline after installation
