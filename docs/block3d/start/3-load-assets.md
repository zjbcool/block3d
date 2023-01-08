# 加载资产



Block3D支持`.babylon`、`.gltf/.glb`、`.stl`、`.obj`格式的3D资产导入。在实际开发中，我们一般使用前面两种。`.babylon`是Block3D的默认3D资产格式；`.gltf/.glb`是通用的Web3D格式。

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

将软件切换到Block3D，从工具栏中将场景分类的`资产管理器assets_manager`拼图和`创建加载任务 scene_create_loading_task`拼图，拖拽到工作区。

![load-asset-5-1](https://cdn.zjbku.com/start/scene-assets.jpg)

然后，像玩拼图游戏一样，将拼图像连接起来。注意在`创建加载任务 scene_create_loading_task`拼图的`地址`参数中添写正确的路径。

![load-asset-5-1](https://cdn.zjbku.com/start/scene-assets-1.jpg)

最后一步，点击菜单栏的`执行`按钮，快捷键`Ctrl` + `E`。如果一切正常，视图区就会显示加载的3D资产，按住鼠标左键可以观察场景。也许你会发现一些问题：相机距离太远，角色背对着我们。继续跟着教程，问题会迎刃而解。

![load-asset-8](https://cdn.zjbku.com/start/load-asset-8.jpg)


## 下一步

修改环境和相机。


