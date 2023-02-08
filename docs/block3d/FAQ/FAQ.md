# 常见问题

## 系统安全警告和杀毒软件拦截

block3d可能因为软件数字证书问题被系统弹窗或杀软拦截，选择信任通过即可。

## 执行`block3d.exe`闪退

执行`block3d.exe`后没有自动打开浏览器，命令窗口闪退，出现这种问题可能是以下原因：
- windos：不支持win7
- macOS：不支持intel芯片的mac电脑
- `block3d`正在运行，查看任务管理器确认
- 确保将`chrome` `edge` `firefox`等现代浏览器设置为默认浏览器
- `3001`端口被占用
- 其它情况：在命令行或终端运行`block3d`，根据错误提示解决

## 是否支持c4d等三维软件

block3d可以导入`.babylon` `.gltf/.glb` `.stl` `.obj`格式的3D资产，只要能导出上述格式的三维软件都支持。

## 发布后的应用能在本地运行吗？

block3d最终发布是纯静态页面，一般需要部署到服务器才能运行。要在本地运行可以通过[electron](https://www.electronjs.org/)发布成桌面应用。

## Windows服务器上应用无法正常运行？

如果控制台提示.gltf .bin .glb .dds 等文件无法找到，可能是服务器缺少MIME类型，可按[此方法](https://jingyan.baidu.com/article/3ea51489b2ceea52e61bba24.html)添加以下文件扩展名MIME类型：

|扩展名 |	MIME类型|
|:-----|:-------|
|.gltf | model/gltf+json|
|.bin  | application/octet-stream|
|.glb  | model/gltf-binary|
|.dds  | image/vnd.ms-dds |

## 如何与`react` `vue`等前端框架集成

block3d最终发布的是静态页面，可以通过`iframe`的方式在任何前端框架中嵌入发布的block3d应用。