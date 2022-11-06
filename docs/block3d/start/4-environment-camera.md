# 环境和相机

Block3D提供了默认的环境和相机，以方便用户快速进行开发。如果要覆盖这些设置，也轻而易举。

[[toc]]

## 检查器

在继续学习之前，先了解一下Block3D内置的检查器工具，它是Block3D底层引擎BabylonJS的一款开发工具，主要用于浏览、调试。

打开检查器通过菜单栏`下拉菜单`-`工具`-`检查器`，快捷键`Ctrl` + `I`

出现在视图区右侧的就是检查器面板。可以看到一个空场景中存在节点、材质、纹理。

![inspector](https://cdn.zjbku.com/start/inspector-2.png)

## 环境

环境由一个天空盒和一个地面组成，用于为场景提供背景和地面。创建环境可以使用场景分类下的[简易环境](../blocks-reference/scenes.md#scene-create-easy-environment)或[创建环境](../blocks-reference/scenes.md#scene-create-default-environment)拼图。默认地面带有一张`.png`格式的贴图`backgroundGround.png`；天空盒背景带有`.dds`（或`.env`）格式的立方体贴图`backgroundSkybox.dds`。这两张贴图位于项目文件夹的`assets/texture`中。

![skybox-ground](https://cdn.zjbku.com/start/skybox-ground.jpg)


使用位于下拉菜单-`工具`-`.hdr -> .env`的贴图转换工具可以制作自己的立方体贴图，也可以通过第三方[工具](../diving-deeper/tools.md)转换。

::: tip 注
立方体贴图是应用到立方体各个面的6张图片组成的无缝贴图，将这些贴图以`.dds`或`.env`格式封装成单个文件，以方便加载和使用。
:::

## 相机

名为`defaultCamera`的默认相机是一种`轨道相机`类型的相机，可以围绕一个目标点进行环绕观察，也可称为“环绕相机”。使用相机分类下的`相机属性`拼图，可以设置和获取它的所有参数。

如果视图中你的模型看起来太远或太近，这是由于相机观察半径太大或太小所致，这时可以通过该拼图设置相机的`半径`和`半径上限`参数，获得合理构图。

获取相机可以使用`节点`分类下带有相机图标的`相机选择器`拼图，或者该分类下的`获取节点`拼图。

![camera-properties-accessors](https://cdn.zjbku.com/start/camera-properties-accessors.jpeg)

## 下一步

创建网格和材质。
