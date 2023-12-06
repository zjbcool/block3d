# 发布桌面应用

本文介绍利用electron将Block3D应用发布为跨平台的桌面应用。跟着以下步骤，不需要写任何一行代码，只需复制、粘贴即可。

[[toc]]

## 准备工作

1. 安装node.js（必须）

从官网<https://nodejs.org/>下载最新长期维护版（LTS）node.js，安装过程略。

2. 安装vsCode代码编辑器（可选）

从官网<https://code.visualstudio.com/>下载vsCode。也可以使用其它代码编辑器。使用代码编辑器为了后续对桌面应用进行深度订制。

## 步骤

### 1-打开命令行或终端

- windows系统在资源管理器的地址栏输入`cmd`，按回车打开命令行工具
- macOS从应用中打开终端，或者通过聚集搜索“终端”找到并打开

### 2-创建electron项目

创建项目之前，为了保证安装速度，可以通过修改环境变量设置为国内的安装镜像。

```sh
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```

windows系统从“我的电脑”右键菜单“属性”，打开“系统属性”面板，选择“高级”，打开“环境变量”，新建变量“ELECTRON_MIRROR”，值为“https://npmmirror.com/mirrors/electron/”。

macOS在终端执行：

```sh
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```
> 在终端执行`env`查看所有环境变量，确保设置成功。

创建electron项目，在命令行或终端执行：

```sh
npm init electron-app@latest my-app
```

执行命令后将在当前路径下创建`my-app`文件夹，并安装依赖。等待依赖安装完成，继续下一步。

### 3-发布桌面应用

首先，在Block3D中完成发布，将`index.html`和`assets`文件夹复制到`my-app/src`文件夹下，该文件夹下已有`index.html`，覆盖它即可。

然后，将工作路径切换到`my-app`，在命令行或终端执行：

```sh
cd my-app
```
最后，执行发布命令：

```sh
npm run publish
```

发布的桌面应用位于`my-app/out`。

## 订制应用

### 关闭开发者工具

默认开发者工具是打开的，要关闭它，用代码编辑器打开`my-app/src/index.js`，找到代码:

```js
mainWindow.webContents.openDevTools();
```
将其删除或注释掉即可。

### 订制图标

支持的图标格式：

|操作系统|格式 |尺寸 |
|:-------|:----|:----|
|macOS   |.icns|512\*512px(1024*1024Retina屏) |
|Windows |.ico |512\*512px |

用代码编辑器打开`my-app/forge.config.js`，指定图标路径。假设图标位于`my-app/images`文件夹下：

```js
module.exports = {
  // ...
  packagerConfig: {
    icon: '/images/icon' // 无需扩展名
  }
  // ...
}
```

> 参考：<https://www.electronforge.io/guides/create-and-add-icons>