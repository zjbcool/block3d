# 资产管理器

Block3D通过[资产管理器scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图向场景中加载各种类型的资产，包括网格、纹理、图片、二进制文件、音频等。

## 加载资产

场景分类下的[创建加载任务scene_create_loading_task](../blocks-reference/scenes.md#scene-create-loading-task)拼图用于创建加载任务，在《快速上手》[加载资产](../start/3-load-assets.html#加载3d资产)中已有介绍。此外，[获取资产scene_get_loaded_from_task](../blocks-reference/scenes.md#scene-get-loaded-from-task)拼图用于获取加载的资产。通过这些拼图可以加载以下资产：

1. 加载网格 - 加载`.babylon` `.glTF/.glb` `.stl` `.obj`等格式的网格，其中`.babylon`是默认格式，如果使用其它格式，需要注意在发布面板勾选相应的模块，见《快速上手》[发布面板](../start/8-publish.md)
2. 加载纹理 - 预加载体积较大的纹理、立方体纹理
3. 加载JSON - 可用于加载以`.json`文件保存的节点材质、GUI
4. 加载文本 - 可加载外部`.txt`文件

## 自定义加载界面

在用户等待资产加载的过程中，提供一个加载界面展示加载进度和展示LOGO，可以改善用户体验。使用场景分类下的`创建加载界面scene_create_loading_screen`拼图可以很方便地实现这个功能。

![assets-manager-5](/img/diving/loading-screen.jpg)

创建加载界面的选项中的`logo图片`需要将图片转为base64编码，可以使用`下拉菜单-工具-Base64编辑器`转换。

软件右侧边栏的插件选项卡提供了一个自定义加载界面的插件模板，你可以在此基础上实现更加个性化的加载界面。
