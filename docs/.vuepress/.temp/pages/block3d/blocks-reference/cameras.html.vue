<template><h1 id="相机-cameras" tabindex="-1"><a class="header-anchor" href="#相机-cameras" aria-hidden="true">#</a> 相机 Cameras</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#create-camera">create_camera</RouterLink><ul><li><RouterLink to="#universalcamera">UniversalCamera</RouterLink></li><li><RouterLink to="#arcrotatecamera">ArcRotateCamera</RouterLink></li><li><RouterLink to="#followcamera">FollowCamera</RouterLink></li><li><RouterLink to="#anaglyphuniversalcamera">AnaglyphUniversalCamera</RouterLink></li><li><RouterLink to="#anaglypharcrotatecamera">AnaglyphArcRotateCamera</RouterLink></li><li><RouterLink to="#deviceorienationcamera">DeviceOrienationCamera</RouterLink></li></ul></li><li><RouterLink to="#set-get-camera-prop">set_get_camera_prop</RouterLink></li><li><RouterLink to="#set-get-active-camera">set_get_active_camera</RouterLink></li><li><RouterLink to="#remove-camera">remove_camera</RouterLink></li><li><RouterLink to="#autorotate-camera">autorotate_camera</RouterLink></li><li><RouterLink to="#bounce-camera">bounce_camera</RouterLink></li><li><RouterLink to="#zoom-camera">zoom_camera</RouterLink></li><li><RouterLink to="#camera-control-enabled">camera_control_enabled</RouterLink></li><li><RouterLink to="#camera-get-forward-ray">camera_get_forward_ray</RouterLink></li></ul></nav>
<h2 id="create-camera" tabindex="-1"><a class="header-anchor" href="#create-camera" aria-hidden="true">#</a> create_camera</h2>
<p>创建相机拼图。可创建以下几种类型的相机：</p>
<h3 id="universalcamera" tabindex="-1"><a class="header-anchor" href="#universalcamera" aria-hidden="true">#</a> UniversalCamera</h3>
<p>漫游相机 可用于第一人称射击游戏，支持键盘、鼠标、触屏和游戏手柄。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera.png" alt="create_camera"></p>
<ul>
<li>name: 定义场景中相机的名称</li>
<li>position: 定义相机在场景中的初始位置</li>
</ul>
<h3 id="arcrotatecamera" tabindex="-1"><a class="header-anchor" href="#arcrotatecamera" aria-hidden="true">#</a> ArcRotateCamera</h3>
<p>环绕相机 该相机可围绕前方的目标位置进行旋转（俗称刷锅）。可通过鼠标或触摸事件控制。该相机就像围绕地球旋转的卫星一样，它与目标点的相对位置可通过3个参数控制： alpha (角度) 纬线上的旋转, beta (角度) 经线上的旋转，以及半径 radius 与目标点的距离.</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera_arc.png" alt="create_camera_arc"></p>
<ul>
<li>name: 相机名称</li>
<li>alpha: 定义相机沿纬线旋转的角度</li>
<li>beta: 定义相机沿经线旋转的角度</li>
<li>radius: 定义相机与目标点的位置</li>
<li>target: 定义相机的目标点</li>
</ul>
<h3 id="followcamera" tabindex="-1"><a class="header-anchor" href="#followcamera" aria-hidden="true">#</a> FollowCamera</h3>
<p>跟随相机 该相机以一个网格为目标，在其运行时进行跟随。 存在漫游跟随相机和环绕跟随相机两个版本。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera_follow.png" alt="create_camera_follow"></p>
<ul>
<li>name: string 定义相机在场景中的名称</li>
<li>position: Vector3 定义相机的位置</li>
</ul>
<h3 id="anaglyphuniversalcamera" tabindex="-1"><a class="header-anchor" href="#anaglyphuniversalcamera" aria-hidden="true">#</a> AnaglyphUniversalCamera</h3>
<p>该相机用于模拟立体渲染 (基于UniversalCamera)</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera_anaglyph_universal.png" alt="create_camera_anaglyph_universal"></p>
<ul>
<li>name: string 相机名称</li>
<li>position: Vector3 定义初始位置</li>
<li>interaxialDistance: number 视差，定义两种颜色的距离</li>
</ul>
<h3 id="anaglypharcrotatecamera" tabindex="-1"><a class="header-anchor" href="#anaglypharcrotatecamera" aria-hidden="true">#</a> AnaglyphArcRotateCamera</h3>
<p>该相机用于模拟立体渲染 (基于ArcRotateCamera)</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera_anaglyph_arc.png" alt="create_camera_anaglyph_arc"></p>
<ul>
<li>name: string 相机名称</li>
<li>alpha: number 定义alpha角度</li>
<li>beta: number 定义beta角度</li>
<li>radius: number 定义半径</li>
<li>target: Vector3 定义相机目标</li>
<li>interaxialDistance: number 视差，定义两种颜色的距离</li>
</ul>
<h3 id="deviceorienationcamera" tabindex="-1"><a class="header-anchor" href="#deviceorienationcamera" aria-hidden="true">#</a> DeviceOrienationCamera</h3>
<p>重力感应相机 该相机专为响应设备的方向事件而设计，例如手机设备的向前向后，左右倾斜</p>
<p><img src="https://cdn.zjbku.com/blocks/create_camera_device.png" alt="create_camera_device"></p>
<ul>
<li>name: string 相机名称</li>
<li>position: Vector3 相机开始位置</li>
</ul>
<h2 id="set-get-camera-prop" tabindex="-1"><a class="header-anchor" href="#set-get-camera-prop" aria-hidden="true">#</a> set_get_camera_prop</h2>
<p>该拼图用于设置或获取相机属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_camera_prop.png" alt="set_get_camera_prop"></p>
<p>不同类型的相机，其属性并不完全一致。以下是一些通用属性：</p>
<ul>
<li>applyGravity - 开启重力</li>
<li>angularSensibility - 转向敏感度，值越高越迟钝</li>
<li>checkCollisions - 开启碰撞检测</li>
<li>ellipsoid - 用于碰撞的椭圆球体，通过Vector3定义</li>
<li>fov - 相机视野，单位是弧度</li>
<li>inertia - 相机惯性，为1时没有惯性</li>
<li>position - 相机位置</li>
<li>target - 相机目标</li>
<li>maxZ - 相机显示的最大距离</li>
<li>minZ - 相机显示的最小距离</li>
<li>speed - 速度</li>
<li>touchAngularSensibility - 触屏设备上转向敏感度，值越高越迟钝</li>
<li>touchMoveSensibility - 触屏设备上移动敏感度，值越高越迟钝</li>
</ul>
<h2 id="set-get-active-camera" tabindex="-1"><a class="header-anchor" href="#set-get-active-camera" aria-hidden="true">#</a> set_get_active_camera</h2>
<p>用于设置或获取当前激活相机。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_active_camera.png" alt="set_get_active_camera"></p>
<h2 id="remove-camera" tabindex="-1"><a class="header-anchor" href="#remove-camera" aria-hidden="true">#</a> remove_camera</h2>
<p>删除相机。</p>
<p><img src="https://cdn.zjbku.com/blocks/remove_camera.png" alt="remove_camera"></p>
<h2 id="autorotate-camera" tabindex="-1"><a class="header-anchor" href="#autorotate-camera" aria-hidden="true">#</a> autorotate_camera</h2>
<p>为轨道相机添加自动旋转行为，当用户有任何操作时打断此行为。</p>
<p>参数：</p>
<ul>
<li>enabled - 控制自动旋转行为的开关</li>
<li>speed - 控制旋转速度</li>
<li>waitTime - 从用户无操作到启用自动旋转的等待时间，单位秒</li>
<li>spinupTime - 从静止到旋转的加速时间，单位秒</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/autorotate_camera.png" alt="autorotate_camera"></p>
<h2 id="bounce-camera" tabindex="-1"><a class="header-anchor" href="#bounce-camera" aria-hidden="true">#</a> bounce_camera</h2>
<p>为轨道相机添加回弹行为，当达到最小距离和最大距离时触发此行为。该拼图可以防止相机穿过网格。</p>
<p>参数：</p>
<ul>
<li>duration - 回弹时长，单位秒</li>
<li>minDistance - 最小距离</li>
<li>maxDistance - 最大距离</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/bounce_camera.png" alt="bounce_camera"></p>
<h2 id="zoom-camera" tabindex="-1"><a class="header-anchor" href="#zoom-camera" aria-hidden="true">#</a> zoom_camera</h2>
<p>为轨道相机添加注视行为。该行为可使相机注视到目标网格。</p>
<p>参数：</p>
<ul>
<li>duration - 注视行为的时长，单位秒</li>
</ul>
<p>通过点击拼图左上角的齿轮图标可启用相机结束动画时的回调插槽。</p>
<p><img src="https://cdn.zjbku.com/blocks/zoom_camera.png" alt="zoom_camera"></p>
<h2 id="camera-control-enabled" tabindex="-1"><a class="header-anchor" href="#camera-control-enabled" aria-hidden="true">#</a> camera_control_enabled</h2>
<p>用于控制相机控制器的开关。</p>
<p><img src="https://cdn.zjbku.com/blocks/camera_control_enabled.png" alt="camera_control_enabled"></p>
<h2 id="camera-get-forward-ray" tabindex="-1"><a class="header-anchor" href="#camera-get-forward-ray" aria-hidden="true">#</a> camera_get_forward_ray</h2>
<p>获取激活相机朝正前方发射的光线。这条光线返回的信息可用于获取相机前方的网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/camera_get_forward_ray.png" alt="camera_get_forward_ray"></p>
</template>
