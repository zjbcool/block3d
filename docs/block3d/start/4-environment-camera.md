# 环境和相机

Block3D提供了默认的环境和相机，以方便用户快速进行开发。如果要覆盖这些设置，也轻而易举。

[[toc]]

## 场景查看器

在继续学习之前，先了解一下Block3D内置的场景查看器，它是Block3D底层引擎BabylonJS的一款开发工具，本身也是一个工具集。主要用于浏览、调试，作用类似于Blender的大纲和属性面板。

打开场景查看器通过菜单栏`下拉菜单`-`工具`-`场景查看器`，快捷键`Ctrl` + `I`

![inspector](/imgs/start/inspector.jpg)

出现在视图区右侧的就是场景查看器面板。可以看到一个空场景中存在节点、材质、纹理。

![inspector-1](/imgs/start/inspector-1.jpg)

## 默认环境

默认环境由一个天空盒（立方体）和一个地面组成。它们都各有材质，材质连接有贴图，其中地面为了实现边缘的平滑过渡使用了一张带有透明通道的`.png`格式的图片，背景和环境照明是`.dds`和`.env`格式的立方体贴图。

![skybox-ground](/imgs/start/skybox-ground.jpg)

修改默认环境最简便的方法是替换位于`assets/texture`路径下的这3张贴图，你可以使用[工具](../diving-deeper/tools.md)将全景图转换成`.dds`格式的背景立方体贴图，将HDR图片转换成`.env`格式的环境照明立方体贴图。

::: tip 注
立方体贴图是应用到立方体每个面的6张图片组成的无缝贴图，将其以`.dds`或`.env`格式封装成单个文件，更容易加载和使用。
:::

要控制天空盒的大小、位置、颜色，环境照明的强度，以及地面的各种参数，就需要使用场景分类下的`scene_create_default_environment`拼图自行创建环境，在创建时可以控制环境的所有参数。

![scene_create_default_environment](/imgs/blocks/scene_create_default_environment.png)

有关这部分内容，我们在深入学习时再研究，作为上手教程使用默认环境足够了。

## 默认相机

名为`defaultCamera`的默认相机是一种`ArcRotateCamera`类型的相机，可以围绕一个目标点进行环绕观察，也可称为“环绕相机”或“轨道相机”。使用相机分类下的`set_get_camera_prop`拼图，可以设置和获取它的所有参数。

![env-1](/imgs/start/env-1.jpg)

如果视图中你的模型看起来太远或太近，这是由于相机观察半径太大或太小所致，这时可以通过该拼图设置相机的半径`radius`和半径上限`upperRadiusLimit`参数，获得合理构图。

![set_get_camera_prop](/imgs/start/set_get_camera_prop.png)

## 下一步

创建网格和材质。
