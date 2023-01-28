# 场景 Scenes

这类拼图用于加载资产、创建环境、控制场景属性。

[[toc]]

## 场景

### 场景属性 scene_properties_accessors {#scene-properties-accessors}

用于设置或获取场景属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

属性：
- 环境色 ambientColor - 定义用于模拟环境色的颜色，默认(0, 0, 0)
- 动画时间缩放 animationTimeScale - 设置或获取动画播放速度的统一缩放值
- 启用动画 animationsEnabled - 设置是否启用动画
- 启用音频 audioEnabled - 设置是否启用音频支持
- 背景色 clearColor - 定义颜色用于清除渲染缓存
- 启用碰撞 collisionsEnabled - 设置是否在当前场景中启用碰撞
- 默认光标 defaultCursor - 定义默认的HTML光标，默认为空
- 环境强度 environmentIntensity - 在所有PBR材质的环境强度。这会使IBL照明整体变暗或增强（反射和漫反射）。由于在大多数场景中，它们是相同的（多房间等除外），因此在此处设置比在所有材质中都更容易。
- 雾颜色 fogColor - 设置雾效颜色
- 雾强度 fogDensity - 设置雾效强度
- 雾终点 fogEnd - 设置雾效结束距离
- 雾起点 fogStart - 设置雾效开始距离
- 强制显示边界盒 forceShowBoundingBoxes - 设置是否渲染所有的边界盒
- 重力 gravity - 定义场景重力 (仅用于碰撞)
- 经过光标 hoverCursor - 定义HTML光标用于当经过交互元素时
- 启用镜头光晕 lensFlaresEnabled - 设置在当前场景中是否启用镜头光晕 lens flares
- 启用粒子 particlesEnabled - 设置在当前场景中是否启用粒子 particles
- 启用物理 physicsEnabled - 设置在当前场景中是否启用物理引擎 physic engines
- 启用后处理 postProcessesEnabled - 设置在当前场景中是否启用后处理 postprocesses
- 启用灯光探头 probesEnabled - 设置在当前场景中是否启用灯光探头 probes
- 启用精灵 spritesEnabled - 设置在当前场景中是否启用精灵 sprites
- 使用不依赖透明顺序 useOrderIndependentTransparency - 设置是否使用与顺序无关的透明度，尽管性能受到影响

访问器：
- 激活相机 activeCameras - 场景中所有的激活相机
- 环境贴图 environmentTexture - 用于所有PBR材质的反射纹理。因为在大多数情况下它们是共用的，所以在这里设置比在每个材质中分别设置都更方便。也可以在创建环境时设置它。
- 启用雾 fogEnabled - 设置是否在当前场景中启用雾效
- 雾模式 fogMode - 设置雾效模式0-无1-指数2-指数23-线性
- 启用灯光 lightsEnabled - 设置在当前场景中是否启用灯光 lights
- 启用阴影 shadowsEnabled - 设置在当前场景中是否启用阴影 shadows
- 启用骨骼 skeletonsEnabled - 设置在当前场景中是否启用骨骼 skeletons
- 启用纹理 texturesEnabled - 设置在当前场景中是否启用纹理 textures
- 使用右手坐标系 useRightHandedSystem - 设置或获取在当前场景中是否启用右手坐标系统Ω

## 环境

### 简易环境 scene_create_easy_environment {#scene-create-easy-environment}

简易环境。用于快速创建环境。环境由天空盒和地面组成，可根据需要选择是否创建。

该拼图需要用到位于`项目路径/assets/texture`下的3张贴图，使用该拼图时要确保以下贴图存在：

- 天空盒纹理 - assets/texture/backgroundSkybox.dds
- 地面纹理 - assets/texture/backgroundGround.png
- 环境贴图 - assets/texture/environment.dds

### 创建环境 scene_create_default_environment {#scene-create-default-environment}

创建环境。环境由天空盒和地面组成。

`选项`接收一个对象参数，其中包括创建环境的属性，属性有：

- 背景Y轴旋转backgroundYRotation - 背景沿场景的Y轴旋转。这有助于让场景的主光与背景对齐
- 镜头对比度cameraContrast - 场景对比度 默认1.6如果setupImageProcessing为true.
- 镜头曝光度cameraExposure - 场景曝光度 默认0.6如果setupImageProcessing为true.
- 创建地面createGround - 是否创建地面
- 创建天空盒createSkybox - 是否创建天空盒
- 启用地面反射enableGroundMirror - 创建镜面纹理结合到地面
- 启用地面阴影enableGroundShadow - 启用地面接收阴影
- 环境贴图environmentTexture - 场景中使用的环境贴图。可以是立方体纹理或者贴图地址，如果未指定纹理或地址，则从babylon远程服务器加载
- 地面颜色groundColor - 默认混入地面纹理的颜色 默认为clearColor
- 地面反射数量groundMirrorAmount - 指定地面镜面可见度
- 地面反射模糊粒度groundMirrorBlurKernel - 指定地面镜面模糊颗粒大小
- 地面反射衰减距离groundMirrorFallOffDistance - 指定地面镜面衰减距离。有助于减少反射大小
- 地面反射菲涅耳权重groundMirrorFresnelWeight - 指定地面镜面反射率权重。使用背景材质的标准权重来设置镜面的菲涅耳效应
- 地面反射大小比率groundMirrorSizeRatio - 指定地面镜面大小比率 默认0.3因为默认颗粒为64.
- 地面反射纹理类型groundMirrorTextureType - 指定地面镜面纹理类型
- 地面不透明度groundOpacity - 指定地面不透明度
- 地面阴影级别groundShadowLevel - 防止地面的阴影死黑
- 地面大小groundSize - 指定地面大小
- 地面纹理groundTexture - 用于地面的纹理。
- 地面Y轴偏移groundYBias - 指定一个地面垂直方向的偏移值，以确保物体与地面不会重叠
- 根位置rootPosition - 默认的根网络位置，如果autoSize不为true
- 创建图像处理setupImageProcessing - 在场景中创建图片后处理
- 自动大小sizeAuto - 自动计算适配场景的最佳元素尺寸
- 天空盒颜色skyboxColor - 默认混入天空纹理的颜色。默认为clearColor
- 天空盒大小skyboxSize - 指定天空盒大小
- 天空盒纹理skyboxTexture - 用于天空盒的纹理。
- 启用色调映射toneMappingEnabled - 指定在场景中是否启用toneMapping 默认true如果setupImageProcessing为true.


获取选项拼图可以通过该拼图右键菜单`创建 选项`创建。

### 更新环境 scene_update_default_environment {#scene-update-default-environment}

该拼图用于更新环境的参数，不会取代默认环境。参数与[scene_create_default_environment](#scene-create-default-environment)相同。

### 环境属性 scene_get_environment_prop {#scene-get-environment-prop}

获取环境属性。包括以下属性：

- 地面 ground - 获取地面网格
- 地面材质 groundMaterial - 获取地面材质
- 地面反射 groundMirror - 获取地面镜面
- 地面反射渲染列表 groundMirrorRenderList - 获取地面镜面渲染列表，以帮助在地面反射中添加网格
- 地面纹理 groundTexture - 获取地面纹理
- 根网格 rootMesh - 获取根网格
- 天空盒 skybox - 获取天空盒
- 天空盒材质 skyboxMaterial - 获取天空盒材质
- 天空盒纹理 skyboxTexture - 获取天空盒纹理

## 资产

### 创建加载界面 scene_create_loading_screen {#scene-create-loading-screen}

创建一个在加载资产时显示的用户界面，该界面会在加载完成后自动销毁。该拼图用于[资产管理器](#scene_assets_manager)拼图的`加载界面`参数。

`选项`参数接收一个对象，包含控制加载器外观的键值：

- 背景
- logo图片 - base64编码图片，可通过`菜单-工具-Base64编码器`获取上传图片的base64编码
- 进度条背景
- 进度条边框
- 进度条高度

也可以通过修改项目文件夹下`assets/css/index.css`样式文件实现同样的效果，此时`选项`不需要传递参数。相关的类名有：

- .preloader-background -  加载屏背景
- .preloader-container - 加载器容器，控制大小
- .preloader-bar - 进度条
- .preloader-logo - LOGO

### 资产管理器 scene_assets_manager {#scene-assets-manager}

用于加载各种类型的资产。

参数：
- 加载界面 - 为空表示不使用加载界面
- 加载 - 在该插槽中使用[创建加载任务scene_create_loading_task](#scene_create_loading_task)拼图加载资产
- 加载中 - 资产加载进度。点击齿轮图标，选中“启用加载中回调”开启，默认关闭
- 完成 - 资产加载完成，但未渲染

### 创建加载任务 scene_create_loading_task {#scene-create-loading-task}

用于创建加载任务。

资产类型：

- 网格Mesh - 网格，3D场景，支持`.babylon` `.glTF/.glb` `.obj` `.stl`
- 容器Container - 容器可以用来管理一个资产列表（如节点、摄像机、灯光、网格等）。这些资产与场景依然关联，但不被渲染。可以把容器想象成一个实体的水池
- 文本文件TextFile - `.txt`文本文件
- 二进制文件BinaryFile - 二进制文件，如`.json` `.mp3`
- 图片Image - 加载`HTMLImage`
- 纹理Texture - 加载普通贴图
- 立方体纹理CubeTexture - 加载立方体贴图
- HDR立方体纹理HDRCubeTexture - 加载HDR立方体贴图
- 等距圆柱立方体纹理EquiRectangularCubeTexture - 加载等矩柱状立方体贴图

### 获取资产 scene_get_loaded_from_task {#scene-get-loaded-from-task}

用于在加载任务成功后获取加载的资产。此拼图需要在[资产管理器scene_assets_manager](#scene-assets-manager)拼图的`完成`插槽中运行。

返回结果：
- 网格 - 加载的网格
- 容器 - 加载的容器
- 动画组 - 加载的动画组
- 骨骼 - 加载的骨骼
- 文本 - 加载的文本内容
- json - 加载的json
- 数据 - 从二进制文件加载的数据
- 图片 - HTML图片
- 纹理 - 加载的纹理

### 容器方法 scene_asset_container_methods {#scene-asset-container-methods}

该拼图包含加载容器任务的一些方法：

- 全部移入场景: 将容器中的全部资产添加到场景
- 全部移出场景: 移除包含在场景中的所有资产并将它们添加到容器中
- 实例化到场景: 实例化或克隆所有的网格并将新的网格添加到场景中。骨架和动画组都将被克隆
- 全部清出场景: 将容器中的所有资产从场景中移除

## 应用

### 全屏 app_fullscreen {#app-fullscreen}

是否全屏。勾选`指针锁定`会锁定鼠标。

### 指针锁定 app_pointer_lock {#app-pointer-lock}

是否锁定鼠标。

### 设置背景 app_set_background {#app-set-background}

设置应用程序的背景。值可以是CSS中设置`background`属性的任意有效值。

注意：使用此拼图时，不能同时使用天空盒背景。