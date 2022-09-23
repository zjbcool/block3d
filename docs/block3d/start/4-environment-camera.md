# 环境和相机

Block3D提供了默认的环境和相机，以方便用户快速进行开发。如果要覆盖这些设置，也轻而易举。

[[toc]]

## 场景查看器

在继续学习之前，先了解一下Block3D内置的场景查看器，它是Block3D底层引擎BabylonJS的一款开发工具，本身也是一个工具集。主要用于浏览、调试，作用类似于Blender的大纲和属性面板。

打开场景查看器通过菜单栏`下拉菜单`-`工具`-`场景查看器`，快捷键`Ctrl` + `I`

出现在视图区右侧的就是场景查看器面板。可以看到一个空场景中存在节点、材质、纹理。

![inspector](https://cdn.zjbku.com/start/inspector-2.png)

## 默认环境

默认环境由一个天空盒（立方体）和一个地面组成。它们各自带有材质，材质连接有贴图，其中地面为了实现边缘的平滑过渡使用了一张带有透明通道的`.png`格式的贴图`backgroundGround.png`；天空盒背景是`.dds`（或`.env`）格式的立方体贴图`backgroundSkybox.dds`。

![skybox-ground](https://cdn.zjbku.com/start/skybox-ground.jpg)

修改默认环境最简便的方法是替换位于`assets/texture`路径下的这两张贴图。你可以使用Block3D软件内部位于下拉菜单-`工具`-`.hdr -> .env`的贴图转换工具制作自己的立方体贴图，也可以通过第三方[工具](../diving-deeper/tools.md)转换。

::: tip 注
立方体贴图是应用到立方体各个面的6张图片组成的无缝贴图，将这些贴图以`.dds`或`.env`格式封装成单个文件，以方便加载和使用。
:::

要控制天空盒的大小、位置、颜色，环境照明的强度，以及地面的各种参数，需要使用场景分类下的[scene_create_default_environment](../blocks-reference/scenes.md#scene-create-default-environment)拼图或[scene_update_default_environment](../blocks-reference/scenes.md#scene-update-default-environment)拼图自行创建或更新环境，在创建或更新时可以控制环境的所有参数。

## 环境贴图

除了天空盒和地面两张贴图之外，默认还会加载一张用于为PBR材质提供环境照明的立方体贴图。默认的环境贴图位于`assets/texture/environment.dds`，你可以直接同名替换，或者使用[set_scene_prop](../blocks-reference/scenes.md#set-scene-prop)拼图指定一张新的。假如你有一张名为`studio.env`的环境贴图，要把它作为环境照明使用，可以使用如下拼图：

![update-env-texutre](https://cdn.zjbku.com/start/update-env-texutre.png)

## 默认相机

名为`defaultCamera`的默认相机是一种`ArcRotateCamera`类型的相机，可以围绕一个目标点进行环绕观察，也可称为“环绕相机”或“轨道相机”。使用相机分类下的`set_get_camera_prop`拼图，可以设置和获取它的所有参数。

![camera-set-prop](https://cdn.zjbku.com/start/camera-set-prop.jpg)

如果视图中你的模型看起来太远或太近，这是由于相机观察半径太大或太小所致，这时可以通过该拼图设置相机的半径`radius`和半径上限`upperRadiusLimit`参数，获得合理构图。

![set_get_camera_prop](https://cdn.zjbku.com/start/set_get_camera_prop.png)

## 下一步

创建网格和材质。
