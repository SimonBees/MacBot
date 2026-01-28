# MacBot - npm 安装问题解决

## 解决方案

### 1. 切换到淘宝 npm 镜像

```bash
# 查看当前镜像
npm config get registry

# 切换到淘宝镜像
npm config set registry https://registry.npmmirror.com

# 清除缓存
npm cache clean --force

# 重新安装
npm install
```

### 2. 如果还失败，尝试使用代理

```bash
# 设置代理（如果有）
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

# 安装后取消代理
npm config delete proxy
npm config delete https-proxy
```

### 3. 使用 yarn 替代 npm

```bash
# 安装 yarn
npm install -g yarn

# 使用淘宝镜像
yarn config set registry https://registry.npmmirror.com

# 安装依赖
yarn install

# 启动开发
yarn dev
```

## 推荐方案

使用 yarn + 淘宝镜像，通常更稳定：

```bash
npm install -g yarn
yarn config set registry https://registry.npmmirror.com
cd MacBot
yarn install
yarn dev
```
