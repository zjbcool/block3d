# 相机 Cameras

[[toc]]

## 相机

### 创建相机 create_camera {#create-camera}

创建相机拼图。可创建以下几种类型的相机：

#### 漫游相机 UniversalCamera {#UniversalCamera}

可用于第一人称射击游戏，支持键盘、鼠标、触屏和游戏手柄。

- 名字: 定义场景中相机的名称
- 位置: 定义相机在场景中的初始位置

#### 环绕相机 ArcRotateCamera {#ArcRotateCamera}

该相机可围绕前方的目标位置进行旋转（就像卫星绕行地球）。可通过鼠标或触摸事件控制。该相机就像围绕地球旋转的卫星一样，它与目标点的相对位置可通过3个参数控制： alpha (角度) 纬线上的旋转, beta (角度) 经线上的旋转，以及半径 radius 与目标点的距离.

- 名字: 相机名称
- 经度: 定义相机沿纬线旋转的角度
- 纬度: 定义相机沿经线旋转的角度
- 半径: 定义相机与目标点的位置
- 目标: 定义相机的目标点

#### 跟随相机 FollowCamera {#FollowCamera}

跟随相机 该相机以一个网格为目标，在其运行时进行跟随。 存在漫游跟随相机和环绕跟随相机两个版本。

- 名字: string 定义相机在场景中的名称
- 位置: Vector3 定义相机的位置

#### 立体漫游相机 AnaglyphUniversalCamera {#AnaglyphUniversalCamera}
 
立体漫游相机 该相机用于模拟立体渲染 (基于UniversalCamera)

- 名字: string 相机名称
- 位置: Vector3 定义初始位置
- 视差: number 视差，定义两种颜色的距离

#### 立体环绕相机 AnaglyphArcRotateCamera {#AnaglyphArcRotateCamera}

该相机用于模拟立体渲染 (基于ArcRotateCamera)

- 名字: 相机名称
- 经度: 定义相机沿纬线旋转的角度
- 纬度: 定义相机沿经线旋转的角度
- 半径: 定义相机与目标点的位置
- 目标: 定义相机的目标点
- 视差: 定义两种颜色的距离

#### 设备朝向相机 DeviceOrienationCamera {#DeviceOrienationCamera}

该相机专为响应设备的方向事件而设计，例如手机设备的向前向后，左右倾斜

- 名字: string 相机名称
- 位置: Vector3 相机开始位置

### 相机属性 camera_properties_accessors {#camera-properties-accessors}

用于设置或获取相机属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

不同类型的相机，其属性并不完全一致。

相机属性：
- 经度: alpha - number 定义相机沿经线方向的转动度数（弧度）
- 应用重力: applyGravity - 开启或关闭相机重力属性
- 转向敏感度: angularSensibility - 设置或获取鼠标转动的敏感度 (默认 2000.0) 值越高敏感度越低
- 纬度: beta - number 定义相机沿纬线方向的转动度数（弧度）
- 相机方向: cameraAcceleration - 定义相机能够以多快的速度加速来跟随它的目标。
- 相机旋转: cameraDirection - 定义相机正在移动的方向
- 检测碰撞: cameraRotation - 定义相机正在旋转的旋转值
- 相机加速度: checkCollisions - 开启或关闭相机与场景中其它物体的碰撞
- 碰撞半径: collisionRadius - 定义相机的碰撞半径。模拟一个围绕相机的椭球球体
- 椭球体: ellipsoid - 定义相机的椭球体碰撞体。用于模拟相机实体，如玩家的身体
- 椭球体偏移: ellipsoidOffset - 为椭球球在相机周围的位置定义一个偏移量。可用于将身体的中心点设在重心附近，而不是它的头部
- 视野: fov - 相机视野，单位弧度 (默认 0.8)
- 高度偏移: heightOffset - 定义相机与跟随物体之间的高度偏移。有助于从顶部跟踪物体（如汽车追逐飞机）
- 忽略父级缩放: ignoreParentScaling - 设置或获取一个布尔值，表示相机将不考虑父级的缩放。
- 惯性: inertia - 定义相机默认惯性
- 反转旋转速度: inverseRotationSpeed - 用于反转相机平移的速度乘数
- 反转旋转: invertRotation - 将鼠标移动方向反转为“自然”平移，而不是传统的直接平移
- 图层蒙板: layerMask - （数字）限制相机只有查看有相同图层蒙板的物体。
- 锁定目标: lockedTarget - 将相机的当前目标定义为一个物体或一个位置。请注意，锁定目标将禁用平移功能。
- 经度下限: lowerAlphaLimit - 最小经度弧度 可用于限制相机在场景中的移动
- 纬度下限: lowerBetaLimit - 最小纬度弧度 可用于限制相机在场景中的移动
- 高度偏移下限: lowerRadiusLimit - 相机距离目标的最小距离 (相机无法再靠近). 可用于限制相机在场景中的移动
- 半径下限: lowerRotationOffsetLimit - 相机位置相对于目标物体的最小角度。 可用于限制相机在场景中的移动
- 旋转偏移下限: lowerHeightOffsetLimit - 相机相对于目标物体的最小高度。可用于限制相机在场景中的移动
- 映射平移: mapPanning - boolean 定义相机是否排除y轴上的变换
- 最大相机速度: maxCameraSpeed - 定义相机跟随物体的最大速度。
- 最大Z: maxZ - 定义相机可以观察的最大距离
- 最小Z: minZ - 定义相机可以观察的最小距离
- 无旋转约束: noRotationConstraint - 为相机添加约束，阻止相机在所有方向和所有轴向上自由移动
- 平移轴: panningAxis - Vector3 定义允许平移的轴
- 平移距离限制: panningDistanceLimit -  定义最大平移距离 可用于让相机一直在场景中
- 平移惯性: panningInertia - number 定义平移时的惯性值 0 没有惯性；1 一直运动
- 平移源目标: panningOriginTarget - Vector3 定义平移前相机的目标
- 捏合转平移的最大距离: pinchToPanMaxDistance - number 定义用于衡量相机在平移模式与捏合/变焦模式下的距离。基本上，如果你的手指移动的距离超过这个距离，将被视为捏合模式。
- 半径: radius - number 定义相机距离目标点的半径
- 旋转: rotation - 定义当前相机的旋转值
- 旋转偏移: rotationOffset - 定义相机和相机所跟随物体间的旋转偏移
- 速度: speed - 定义当前相机的速度
- 目标屏幕偏移: targetScreenOffset - Vector2 定义相机目标点在屏幕上的偏移
- 经度上限: upperAlphaLimit -  最大经度弧度值可用于限制相机在场景中的移动
- 纬度上限: upperBetaLimit - number 最大纬度值 可用于限制相机在场景中的移动
- 高度偏移上限: upperHeightOffsetLimit - 相机位置相对于目标物体的最大允许高度。有助于限制相机在场景中的移动方式。
- 半径上限: upperRadiusLimit -  相机距离目标的最大距离 可用于限制相机在场景中的移动
- 旋转偏移上限: upperRotationOffsetLimit - 相对于目标物体，相机位置的最大允许角度。有助于限制相机在场景中的移动方式

相机状态：
- 转向敏感度X: angularSensibilityX - 获取或设置指针沿X轴的角度敏感度，或摄像机旋转的速度
- 转向敏感度Y: angularSensibilityY - 获取或设置指针沿Y轴的角度敏感度，或摄像机旋转的速度
- 世界位置: globalPosition - 获取相机的世界空间位置
- 位置: position - 定义相机在场景的位置（局部坐标）
- 后退键: keysDown - 设置或获取用于控制相机向后方移动的键盘按键列表
- 向下键: keysDownward - 设置或获取用于控制相机向下方移动的键盘按键列表
- 向左键: keysLeft - 设置或获取用于控制相机向左移动的键盘按键列表
- 向右键: keysRight - 设置或获取用于控制相机向右移动的键盘按键列表
- 左转键: keysRotateLeft - 设置或获取用于控制相机向左旋转的键盘按键列表
- 右转键: keysRotateRight - 设置或获取用于控制相机向右旋转的键盘按键列表
- 前进键: keysUp - 设置或获取用于控制相机向前移动的键盘按键列表
- 向上键: keysUpward - 设置或获取用于控制相机向上移动的键盘按键列表
- 目标: target - 定义相机的目标点
- 目标宿主: targetHost - 定义相机的目标网格，相机会在半径距离上看向此网格。注意此设置会禁用平移
- 触屏转向敏感度: touchAngularSensibility - 定义相机转向的触摸敏感度，值越高越快
- 触屏移动敏感度: touchMoveSensibility - 定义相机移动的触摸敏感度，值越高越快
- 自然捏合缩放: useNaturalPinchZoom - 获取或设置指针使用自然捏合缩放。当为true时，多点触控缩放将放大，这样在相机/目标点的平面上的任何物体都会随着手指的运动而完美缩放。
- 滚轮速度百分比: wheelDeltaPercentage - 设置或获取鼠标滚轮速度百分比或相机缩放的速度。它定义了在使用捏合变焦时，将当前相机.半径的百分比作为delta。
- 滚轮精度: wheelPrecision - 设置或获取鼠标滚轮的精度或相机缩放的速度

### 激活相机 set_get_active_camera {#set-get-active-camera}

用于设置或获取当前激活相机。

### 启用相机控制器 enable_disable_camera_control {#enable-disable-camera-control}

启用或禁用相机控制器。

### 相机方向 get_camera_direction {#get-camera-direction}

获取相机相对于指定局部轴的方向。

- 轴：定义参考轴以提供一个相对的方向

### 相机射线 camera_get_forward_ray {#get-camera-forward-ray}

获取激活相机朝正前方发射的光线。这条光线返回的信息可用于获取相机前方的网格。

### 销毁相机 dispose_camera {#dispose-camera}

销毁相机及相关资源。

## 环绕相机行为

### 自动环绕 autorotate_camera {#autorotate-camera}

为环绕相机添加自动旋转行为，当用户有任何操作时打断此行为。

参数：
- 启用 - 控制自动旋转行为的开关
- 速度 - 控制旋转速度
- 等待时间 - 从用户无操作到启用自动旋转的等待时间，单位秒
- 加速时间 - 从静止到旋转的加速时间，单位秒

### 回弹 bounce_camera {#bounce-camera}

为环绕相机添加回弹行为，当达到最小距离和最大距离时触发此行为。该拼图可以防止相机穿过网格。

参数：
- 时长 - 回弹时长，单位秒
- 最小距离 - 相机距离目标的最小距离
- 最大距离 - 相机距离目标的最大距离

### 注视 zoom_camera {#zoom-camera}

为环绕相机添加注视行为。该行为可使相机注视到目标网格。

参数：
- 时长 - 注视行为的时长，单位秒

通过点击拼图左上角的齿轮图标可启用相机结束动画时的回调插槽。
