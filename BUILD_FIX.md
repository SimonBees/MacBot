# MacBot - Build Fix

## Problem Solved

Fixed "Unable to find Electron app" error by:
1. Separating Electron and Renderer build processes
2. Adding separate TypeScript config for Electron
3. Updating build scripts in package.json

## Build Commands

```bash
# Development
npm run dev

# Build for macOS
npm run build:mac

# Manual build steps
npm run build:vite      # Build React renderer to dist/
npm run build:electron  # Build Electron main/preload to out-electron/
```

## Build Output Structure

```
MacBot/
├── dist/              # Vite renderer output (React app)
├── out-electron/      # Electron main/preload compiled JS
└── release/           # Final packaged app (.dmg)
```

## Important Notes

- Development: Uses Vite dev server (http://localhost:5173)
- Production: Serves built files from dist/
- Electron main: Loads from out-electron/
- Preload scripts: Loaded from out-electron/preload/
