# MacBot - macOS AI Assistant

An AI-powered desktop assistant built with Electron for macOS.

## Features

- 🤖 AI conversation integration
- 🖥️ Native macOS experience
- 📝 Hotkey activation
- 💬 Multi-turn conversation memory
- 🔔 System notification integration

## Tech Stack

- **Frontend Framework**: React + TypeScript
- **Desktop Framework**: Electron
- **UI Components**: Tailwind CSS
- **State Management**: Zustand
- **Build Tool**: Vite

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build macOS application
npm run build:mac
```

## Project Structure

```
MacBot/
├── src/
│   ├── main/           # Electron main process
│   ├── renderer/       # React renderer process
│   ├── shared/         # Shared code
│   └── preload/        # Preload scripts
├── resources/          # Static assets
└── dist/               # Build output
```
