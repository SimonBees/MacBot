# MacBot - npm Installation Fix

## Solutions

### 1. Switch to Taobao npm Registry

```bash
# Check current registry
npm config get registry

# Switch to Taobao mirror
npm config set registry https://registry.npmmirror.com

# Clear cache
npm cache clean --force

# Reinstall
npm install
```

### 2. If Still Failing, Try Using Proxy

```bash
# Set proxy (if available)
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

# Cancel proxy after installation
npm config delete proxy
npm config delete https-proxy
```

### 3. Use yarn Instead of npm

```bash
# Install yarn
npm install -g yarn

# Set Taobao mirror
yarn config set registry https://registry.npmmirror.com

# Install dependencies
yarn install

# Start development
yarn dev
```

## Recommended Solution

Use yarn + Taobao registry for better stability:

```bash
npm install -g yarn
yarn config set registry https://registry.npmmirror.com
cd MacBot
yarn install
yarn dev
```
