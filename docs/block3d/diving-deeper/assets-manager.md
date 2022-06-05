# 资产管理器

Block3D通过资产管理器[scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图向场景中加载各种类型的资产，包括场景、纹理、图片、二进制文件、音频等。

[[toc]]

## 加载场景

Block3D支持`.babylon` `.glTF/.glb` `.stl` `.obj`等格式的3D场景，其中`.babylon`是默认格式，如果使用了默认以外的格式，只需注意发布时在发布面板勾选相应的模块即可，见《快速上手》[发布面板](../start/8-publish.md)。

使用[scene_load_asset](../blocks-reference/scenes.md#scene-load-asset)拼图可以载以上类型的场景。在《快速上手》[加载资产](../start/3-load-assets.html#加载3d资产)中已有介绍。此外，可以使用[scene_get_loaded_from_asset](../blocks-reference/scenes.md#scene-get-loaded-from-asset)拼图获取加载的资产内容。如下拼图：

![assets-manager-1](https://cdn.zjbku.com/diving-deeper/assets-manager-1.png)

## 加载贴图

对于多张贴图和较大的贴图提前进行预加载是正确的做法。

![assets-manager-2](https://cdn.zjbku.com/diving-deeper/assets-manager-2.png)

## 加载JSON

在Block3D中，UI和节点材质是通过外部编辑器导出`.json`文件，然后再加载到场景的。

![assets-manager-3](https://cdn.zjbku.com/diving-deeper/assets-manager-3.png)

## 加载文本

对于大文本可以通过加载外部`.txt`实现。

![assets-manager-4](https://cdn.zjbku.com/diving-deeper/assets-manager-4.png)

## 自定义加载器

制作一个加载界面一般都需要用代码实现，Block3D尽量简化这一步。

默认在[scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图上勾选`useDefaultPreloader`，将使用默认加载器。取消勾选后，用户可以使用[scene_create_custom_preloader](../blocks-reference/scenes.md#scene-create-custom-preloader)拼图定制个性化的加载器。

![scene_create_custom_preloader](https://cdn.zjbku.com/blocks/scene_create_custom_preloader_1.png)

然后分别在[scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图的`on progress` 和 `on ready`插槽中执行加载器的更新和完成。其中，更新加载器所需的`percentage`拼图通过[scene_assets_manager](../blocks-reference/scenes.md#scene-assets-manager)拼图右键菜单创建。

![assets-manager-5](https://cdn.zjbku.com/diving-deeper/assets-manager-5.png)