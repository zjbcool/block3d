# 相机 Cameras

[[toc]]

## create_camera

创建相机拼图。可创建以下几种类型的相机：

### UniversalCamera 

漫游相机 可用于第一人称射击游戏，支持键盘、鼠标、触屏和游戏手柄。

![create_camera](https://cdn.zjbku.com/blocks/create_camera.png)

- name: 定义场景中相机的名称
- position: 定义相机在场景中的初始位置

### ArcRotateCamera 

环绕相机 该相机可围绕前方的目标位置进行旋转（俗称刷锅）。可通过鼠标或触摸事件控制。该相机就像围绕地球旋转的卫星一样，它与目标点的相对位置可通过3个参数控制： alpha (角度) 纬线上的旋转, beta (角度) 经线上的旋转，以及半径 radius 与目标点的距离.

![create_camera_arc](https://cdn.zjbku.com/blocks/create_camera_arc.png)

- name: 相机名称
- alpha: 定义相机沿纬线旋转的角度
- beta: 定义相机沿经线旋转的角度
- radius: 定义相机与目标点的位置
- target: 定义相机的目标点

### FollowCamera

跟随相机 该相机以一个网格为目标，在其运行时进行跟随。 存在漫游跟随相机和环绕跟随相机两个版本。

![create_camera_follow](https://cdn.zjbku.com/blocks/create_camera_follow.png)

- name: string 定义相机在场景中的名称
- position: Vector3 定义相机的位置

### AnaglyphUniversalCamera

该相机用于模拟立体渲染 (基于UniversalCamera)

![create_camera_anaglyph_universal](https://cdn.zjbku.com/blocks/create_camera_anaglyph_universal.png)

- name: string 相机名称
- position: Vector3 定义初始位置
- interaxialDistance: number 视差，定义两种颜色的距离

### AnaglyphArcRotateCamera

该相机用于模拟立体渲染 (基于ArcRotateCamera)

![create_camera_anaglyph_arc](https://cdn.zjbku.com/blocks/create_camera_anaglyph_arc.png)

- name: string 相机名称
- alpha: number 定义alpha角度
- beta: number 定义beta角度
- radius: number 定义半径
- target: Vector3 定义相机目标
- interaxialDistance: number 视差，定义两种颜色的距离

### DeviceOrienationCamera

重力感应相机 该相机专为响应设备的方向事件而设计，例如手机设备的向前向后，左右倾斜

![create_camera_device](https://cdn.zjbku.com/blocks/create_camera_device.png)

- name: string 相机名称
- position: Vector3 相机开始位置

## set_get_camera_prop

该拼图用于设置或获取相机属性。

![set_get_camera_prop](https://cdn.zjbku.com/blocks/set_get_camera_prop.png)

不同类型的相机，其属性并不完全一致。以下是一些通用属性：

- applyGravity - 开启重力
- angularSensibility - 转向敏感度，值越高越迟钝
- checkCollisions - 开启碰撞检测
- ellipsoid - 用于碰撞的椭圆球体，通过Vector3定义
- fov - 相机视野，单位是弧度
- inertia - 相机惯性，为1时没有惯性
- position - 相机位置
- target - 相机目标
- maxZ - 相机显示的最大距离
- minZ - 相机显示的最小距离
- speed - 速度
- touchAngularSensibility - 触屏设备上转向敏感度，值越高越迟钝
- touchMoveSensibility - 触屏设备上移动敏感度，值越高越迟钝

## set_get_active_camera

用于设置或获取当前激活相机。

![set_get_active_camera](https://cdn.zjbku.com/blocks/set_get_active_camera.png)

## remove_camera

删除相机。

![remove_camera](https://cdn.zjbku.com/blocks/remove_camera.png)

## autorotate_camera

为轨道相机添加自动旋转行为，当用户有任何操作时打断此行为。

参数：
- enabled - 控制自动旋转行为的开关
- speed - 控制旋转速度
- waitTime - 从用户无操作到启用自动旋转的等待时间，单位秒
- spinupTime - 从静止到旋转的加速时间，单位秒

![autorotate_camera](https://cdn.zjbku.com/blocks/autorotate_camera.png)

## bounce_camera

为轨道相机添加回弹行为，当达到最小距离和最大距离时触发此行为。该拼图可以防止相机穿过网格。

参数：
- duration - 回弹时长，单位秒
- minDistance - 最小距离
- maxDistance - 最大距离

![bounce_camera](https://cdn.zjbku.com/blocks/bounce_camera.png)

## zoom_camera

为轨道相机添加注视行为。该行为可使相机注视到目标网格。

参数：
- duration - 注视行为的时长，单位秒

通过点击拼图左上角的齿轮图标可启用相机结束动画时的回调插槽。

![zoom_camera](https://cdn.zjbku.com/blocks/zoom_camera.png)

## camera_control_enabled

用于控制相机控制器的开关。

![camera_control_enabled](https://cdn.zjbku.com/blocks/camera_control_enabled.png)

## camera_get_forward_ray

获取激活相机朝正前方发射的光线。这条光线返回的信息可用于获取相机前方的网格。

![camera_get_forward_ray](https://cdn.zjbku.com/blocks/camera_get_forward_ray.png)
