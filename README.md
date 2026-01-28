# MacBot - macOS AI Assistant

An AI-powered desktop assistant built with Electron for macOS.

## Features

- 🤖 AI conversation integration
- 🖥️ Native macOS experience
- 📝 Hotkey activation (Cmd+Shift+M)
- 💬 Multi-turn conversation memory
- 🔔 System notification integration

## Tech Stack

- **Frontend Framework**: React + TypeScript
- **Desktop Framework**: Electron
- **UI Components**: Tailwind CSS
- **State Management**: Zustand
- **Build Tool**: Vite
- **CI/CD**: GitHub Actions

## Installation

### Download from Release

1. Go to [Releases](https://github.com/SimonBees/MacBot/releases)
2. Download the latest `MacBot-x.x.x.dmg`
3. Open the DMG file
4. Drag MacBot to Applications folder
5. Launch from Applications

### Build from Source

```bash
# Clone repository
git clone https://github.com/SimonBees/MacBot.git
cd MacBot

# Install dependencies
npm install

# Development mode
npm run dev

# Build for macOS
npm run build:mac
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build React renderer
npm run build:vite

# Build Electron main process
npm run build:electron

# Build macOS application
npm run build:mac
```

## Automatic Builds

New releases are automatically built using GitHub Actions when you push a version tag:

```bash
# Tag and push (triggers build and release)
git tag v1.0.0
git push origin v1.0.0
```

The workflow will:
1. Build the macOS application
2. Create a GitHub Release
3. Attach the DMG file

## Project Structure

```
MacBot/
├── .github/workflows/    # CI/CD workflows
├── src/
│   ├── main/            # Electron main process
│   ├── preload/         # Preload scripts
│   └── renderer/        # React renderer process
│       ├── components/   # React components
│       ├── store/       # Zustand state management
│       └── App.tsx      # Main app component
├── release/             # Built DMG files (generated)
├── dist/                # Vite renderer output (generated)
└── out-electron/        # Electron main output (generated)
```

## Hotkeys

- `Cmd+Shift+M`: Show/Hide MacBot window

## Roadmap

- [ ] AI API integration (OpenAI/Claude/GLM)
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Settings panel
- [ ] Export conversation history
- [ ] Custom themes
- [ ] Plugin system

## License

MIT License - see LICENSE file for details
