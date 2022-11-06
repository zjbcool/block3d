# 资产管理器

Block3D通过[资产管理器scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图向场景中加载各种类型的资产，包括网格、纹理、图片、二进制文件、音频等。

[[toc]]

## 加载资产

场景分类下的[加载资产scene_load_asset](../blocks-reference/scenes.md#scene-load-asset)拼图用于创建加载任务，在《快速上手》[加载资产](../start/3-load-assets.html#加载3d资产)中已有介绍。此外，[获取加载资产scene_get_loaded_from_asset](../blocks-reference/scenes.md#scene-get-loaded-from-asset)拼图用于获取加载的资产。通过这些拼图可以加载以下资产：

1. 加载网格 - 加载`.babylon` `.glTF/.glb` `.stl` `.obj`等格式的网格，其中`.babylon`是默认格式，如果使用其它格式，需要注意在发布面板勾选相应的模块，见《快速上手》[发布面板](../start/8-publish.md)
2. 加载纹理 - 预加载体积较大的纹理、立方体纹理
3. 加载JSON - 可用于加载以`.json`文件保存的节点材质、GUI
4. 加载文本 - 可加载外部`.txt`文件

![assets-manager-1](https://cdn.zjbku.com/diving-deeper/assets-manager-1-min.jpg)

:::tip 提示
注意，上面的示例中有一个从远程服务器地址加载json的任务，也就是说资产管理器拼图支持从本地或远程服务器加载资产。
:::

## 自定义加载界面

在用户等待资产加载的过程中，提供一个加载界面展示加载进度和展示LOGO，是个不错的选择。使用场景分类下的`创建加载界面scene_create_custom_preloader`拼图和`更新加载界面scene_update_custom_preloader`拼图可以很方便地实现这个功能。

![assets-manager-5](https://cdn.zjbku.com/diving-deeper/assets-manager-2-min.jpg)

创建加载界面的选项中的`logo图片`需要将图片转为base64编码，可以使用`下拉菜单-工具-Base64编辑器`转换。

更新加载器拼图的`进度`参数，可通过[资产管理器scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图右键菜单`创建 百分比`命令创建。
