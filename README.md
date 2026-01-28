# MacBot - macOS AI Assistant

基于 Electron 的 macOS 原生 AI 助手应用

## 功能特性

- 🤖 集成 AI 对话能力
- 🖥️ macOS 原生体验
- 📝 快捷键唤醒
- 💬 多轮对话记忆
- 🔔 系统通知集成

## 技术栈

- **前端框架**: React + TypeScript
- **桌面框架**: Electron
- **UI 组件库**: Tailwind CSS + shadcn/ui
- **状态管理**: Zustand
- **构建工具**: Vite

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建 macOS 应用
npm run build:mac
```

## 项目结构

```
MacBot/
├── src/
│   ├── main/           # Electron 主进程
│   ├── renderer/       # React 渲染进程
│   ├── shared/         # 共享代码
│   └── preload/        # 预加载脚本
├── resources/          # 静态资源
└── dist/               # 构建输出
```
