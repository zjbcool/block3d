# 加载资产

[[toc]]

Block3D支持`.babylon`、`.gltf/.glb`、`.stl`、`.obj`格式的3D资产导入。在实际开发中，我们一般使用前面两种。`.babylon`是Block3D底层引擎BabylonJS自带格式，需要在三维软件中安装相应版本的[插件](../../download/index.md)。`.gltf/.glb`是通用的Web3D格式，如果你是Blender用户，可以直接导出`.gltf/.glb`。

下面我们从Blender中以`.gltf/.glb`格式导出一组动画。

## 导出3D资产

我们从[Mixamo](https://www.mixamo.com/)网站下载一组`.fbx`格式的动画，包括：等待、跑步、后退、左移、右移。

![load-asset](https://cdn.zjbku.com/start/load-asset.jpg)

注意，在下载的时候，只需要下载一个带蒙皮的fbx，其它的都只要骨骼就可以了。

![load-asset-1](https://cdn.zjbku.com/start/load-asset-1.jpg)

然后，把所有fbx导入Blender。打开动作编辑器， 在动作列表中，可以看到所有加载进来的动画。

![load-asset-2](https://cdn.zjbku.com/start/load-asset-2.jpg)

依次选择并`Push Down`到非线性动画编辑器的轨道上。

![load-asset-3](https://cdn.zjbku.com/start/load-asset-3.jpg)

动画编辑完成！然后，只保留一套骨骼，其它的删除。保存，导出。导出设置保持默认，命名为`animation.glb`，保存到项目的`assets/scene`路径下。

![load-asset-4](https://cdn.zjbku.com/start/load-asset-4.jpg)

## 加载3D资产

接下来，我们将开始使用拼图，读者可依据下图的图标与名称对照表，从工具栏查找拼图

![category](https://cdn.zjbku.com/start/category.jpg)

将软件切换到Block3D，从工具栏中将场景分类的`assets_manager`拼图和`load_assset`拼图，拖拽到工作区。同样的操作重复无数次后，你可能会选择使用查找拼图功能，直接输入拼图名称创建。但是现在作为新手，还需要一个熟练的过程。

![load-asset-5-1](https://cdn.zjbku.com/start/load-asset-5-1.jpg)

接着，在变量分类下，点击`创建变量`按钮，创建一个名为`loadMesh`的变量。创建完成后，重新打开变量分类，就会出现刚创建的变量拼图。由于需要用户创建才会出现拼图，所以这类拼图被称为动态拼图。除了变量，函数分类也属于动态拼图。

![load-asset-6-1](https://cdn.zjbku.com/start/load-asset-6-1.jpg)

现在，像玩拼图游戏一样，将工作区中的拼图像这样连接。注意在`load_asset`拼图的下拉菜单中选择`mesh`类型，`url`参数添写正确的路径。随着深入学习，你会发现该拼图还用于加载贴图、JSON等资产。

![load-asset-7](https://cdn.zjbku.com/start/load-asset-7.png)

最后一步，点击菜单栏的`保存`按钮，快捷键`Ctrl` + `S`。如果一切正常，视图区就会显示加载的3D资产，按住鼠标左键可以观察场景。也许你会发现一些问题：相机距离太远，角色背对着我们。继续跟着教程，问题会迎刃而解。

![load-asset-8](https://cdn.zjbku.com/start/load-asset-8.jpg)


## 下一步

修改环境和相机。


