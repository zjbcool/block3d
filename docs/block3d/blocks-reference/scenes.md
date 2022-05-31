# 场景 Scenes

这类拼图用于加载资产、创建环境、控制场景属性。

[[toc]]


## scene_create_custom_preloader

创建一个自定义加载器，取代默认的加载器。需要取消勾选[scene_assets_manager](#scene-assets-manager)拼图的`useDefaultPreloader`选项才能生效。

![scene_create_custom_preloader](https://cdn.zjbku.com/blocks/scene_create_custom_preloader.png)

`options`参数接收一个对象，其中包含控制加载器外观的属性和值：

![scene_create_custom_preloader_1](https://cdn.zjbku.com/blocks/scene_create_custom_preloader_1.png)

也可以通过修改项目文件夹下`assets/css/index.css`样式文件实现同样的效果，此时`options`不需要传递参数。相关的类名有：

- .preloader-background -  加载屏背景
- .preloader-container - 加载器容器，控制大小
- .preloader-bar - 进度条
- .preloader-logo - LOGO

## scene_update_custom_preloader

更新加载器进度条和在加载完成时结束加载器。该拼图所需的`percentage`可以在[scene_assets_manager](#scene-assets-manager)拼图的右键菜单中通过`创建 percentage`创建。

将更新加载器拼图放入[scene_assets_manager](#scene-assets-manager)拼图的`on progress`插槽中；将结束加载器拼图放入`on ready`插槽中。

![scene_update_custom_preloader](https://cdn.zjbku.com/blocks/scene_update_custom_preloader.png)

## scene_assets_manager

该拼图用于加载Block3D应用所需的所有类型的资产。

![scene_assets_manager](https://cdn.zjbku.com/blocks/scene_assets_manager.png)

参数：
- useDefaultPreload - 取消勾选可以使用自定义加载器，否则使用默认加载器
- load assets - 在该插槽中使用[scene_load_asset](#scene-load-asset)拼图各种资产
- on progress - 资产加载进度
- on load - 资产加载完成，但未渲染
- on ready - 场景准备完成

加载网格：

![scene_assets_manager_1](https://cdn.zjbku.com/blocks/scene_assets_manager_1.png)

## scene_load_asset

用于创建加载任务，支持从本地或远程服务器加载资产。

![scene_load_asset](https://cdn.zjbku.com/blocks/scene_load_asset.png)

资产类型：

- Mesh - 网格，3D场景，支持`.babylon` `.glTF/.glb` `.obj` `.stl`
- TextFile - `.txt`文本文件
- BinaryFile - 二进制文件，如`.json` `.mp3`
- Image - 加载`HTMLImage`
- Texture - 加载普通贴图
- CubeTexture - 加载立方体贴图
- HDRCubeTexture - 加载HDR立方体贴图
- EquiRectangularCubeTexture - 加载等矩柱状立方体贴图

## scene_get_loaded_from_asset

用于在加载任务成功后获取加载的资产。此拼图需要在[scene_assets_manager](#scene-assets-manager)拼图的`on load`插槽或[scene_on_finish_load](#scene-on-finish-load)拼图的回调插槽中运行。

![scene_get_loaded_from_asset](https://cdn.zjbku.com/blocks/scene_get_loaded_from_asset.png)

返回结果：
- meshes - array 加载的网格
- animationGroups - array 加载的动画组
- skeletons - array 加载的骨骼
- text - string 加载的文本内容
- data - any 从二进制文件加载的数据
- image - HTMLImage HTML的图片
- texture - any 加载的纹理

## scene_on_finish_load

单个加载任务成功后执行插槽中的拼图。

![scene_on_finish_load](https://cdn.zjbku.com/blocks/scene_on_finish_load.png)

## set_scene_prop

用于设置场景属性。

![set_scene_prop](https://cdn.zjbku.com/blocks/set_scene_prop.png)

常用属性：
- clearColor - 设置背景颜色
- collisionEnabled - 开启碰撞检测
- environmentTexture - 设置PBR材质的反射纹理
- fogEnable - 开启雾效
- gravity - 设置重力加速度

## scene_create_default_environment

创建环境，环境由天空盒和地面组成。Block3D有一个默认环境，使用此拼图会代替这个默认环境。

![scene_create_default_environment](https://cdn.zjbku.com/blocks/scene_create_default_environment.png)

`options`接收一个对象参数，其中包括创建默认环境的属性，其中的主要属性有：
- cameraContrast - 相机对比度
- cameraExposure - 相机曝光度
- createGround - 是否创建地面
- createSkybox - 是否创建天空盒
- environmentTexture - 环境纹理，用于HDR照明，影响PBR材质
- groundColor - 地面颜色
- groundSize - 地面大小
- groundTexture - 地面纹理，默认是一张带透明通道的png图片
- skyboxColor - 天空盒颜色
- skyboxSize - 天空盒大小
- skyboxTexture - 天空盒纹理，用于背景图片

获取这些属性可以通过该拼图右键菜单`创建 option`创建。

## scene_update_default_environment

该拼图用于更新默认环境的参数，不会取代默认环境。参数与[scene_create_default_environment](#scene-create-default-environment)相同。该拼图需要在[scene_assets_manager](#scene-assets-manager)拼图的`on load`插槽中执行。

![scene_update_default_environment](https://cdn.zjbku.com/blocks/scene_update_default_environment.png)

## scene_get_environment_prop

获取环境属性。

![scene_get_environment_prop](https://cdn.zjbku.com/blocks/scene_get_environment_prop.png)

- ground - 获取地面网格
- groundMaterial - 获取地面材质
- groundTexture - 获取地面纹理
- rootMesh - 环境根网格
- skybox - 获取天空盒网格
- skyboxMaterial - 获取天空盒材质
- skyboxTexture - 获取天空盒纹理

## app_fullscreen

是否全屏。勾选`pointerLock`会锁定鼠标。

![app_fullscreen](https://cdn.zjbku.com/blocks/app_fullscreen.png)

## app_pointer_lock

是否锁定鼠标。

![app_pointer_lock](https://cdn.zjbku.com/blocks/app_pointer_lock.png)