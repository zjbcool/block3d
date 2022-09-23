# 发布

[[toc]]

## 发布面板

通过菜单栏-`下拉菜单`-`发布...`，可以打开发布面板（快捷键`Ctrl` + `P`）。发布面板用于将Block3D应用发布成可部署到服务器的静态文件。

![publish-app](https://cdn.zjbku.com/start/publish-app.jpg)

### 模块：

- Babylon - 底层引擎babylon.js，核心模块，默认勾选
- PEP - 用于兼容触屏设置，建议始终勾选
- glTF 2.0 Loader - 用于加载.gltf/.glb格式的文件
- Obj Loader - 用于加载.obj格式的文件
- Stl Loader - 用于加载.stl格式的文件
- GUI - 如果用到GUI分类拼图，需要勾选
- TweakPane - 如果用到TweakPane分类拼图，需要勾选

### 应用：

发布后会在项目文件下创建`index.html`，这里的设置与之相关。根据需要设置即可。

### 构建：

勾选`压缩JS文件`，会将生成的JS文件进行代码压缩。

## 静态文件

点击`OK`按钮发布后，在项目文件夹下会增加`index.html`文件，在`assets/js`路径下会增加`main.js`和`virsual_logic.js`。`index.html`和`assets`文件夹就是最终部署所需的静态文件，直接上传到服务器，就可以通过网址访问。
