# 网格 Meshes

该分类包含创建和操作网格的方法。

[[toc]]

## 网格

### 创建内置模型 mesh_create_set_shapes {#mesh-create-set-shapes}

该拼图用于创建基本的几何体网格，包括：立方体、球体、圆柱体、平面，以及直线等等。创建出来的网格会有一个默认的PBR材质。使用该拼图可以帮你快速搭建场景。

- `名字`参数可以帮助你在场景查看器中快速找到网格。
- `选项`接收一个对象类型的参数，用于控制网格的属性，这些属性根据网格类型而不尽相同。你可以通过在该拼图的右键菜单中执行`创建 选项`获取属性拼图。

### 网格属性 mesh_properties_accessors {#mesh-properties-accessors}

用于设置或获取网格属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

属性：
- 边颜色：edgesColor - 当边渲染开启时，定义边的颜色
- 与实例共享边：edgesShareWithInstances - 当为真时，对所有网格实例应用边渲染
- 边宽度：edgesWidth - 当边渲染开启时，定义边的宽度
- 椭圆体：ellipsoid - 使用碰撞引擎时，获取或设置用于模拟此网格的椭圆球体
- 椭圆体偏移：ellipsoidOffset - 使用碰撞引擎时，获取或设置用于模拟此网格的椭圆球体的偏移
- 可拾取：isPickable - 设置或获取网格是否可拾取
- 可显示：isVisible - 设置或获取网格是否可见（可渲染）
- 当碰撞时：onCollideObservable - 当与其它网格碰撞时触发此事件
- 当碰撞位置改变时：onCollisionPositionChangeObservable - 当碰撞位置发生改变时触发此事件
- 当销毁时：onDisposeObservable -当网格销毁时触发时此事件
- 描边颜色：outlineColor - 当渲染描边时，定义颜色值
- 描边宽度：outlineWidth - 当渲染描边时，定义描边宽度
- 叠加层不透明度：overlayAlpha - 当渲染叠加层时，定义不透明度
- 叠加层颜色：overlayColor - 当渲染叠加层时，定义颜色值
- 渲染描边：renderOutline - 设置或获取是否同时渲染描边
- 渲染叠加层：renderOverlay - 设置或获取是否同时渲染叠加层
- 显示边界盒：showBoundingBox - 设置或获取是否同时渲染边界盒

状态：
- 公告牌模式：billboardMode - 设置或获取公告牌模式 0	无	1	锁定X	2	锁定Y	4	锁定Z	7	锁定全部
- 检测碰撞：checkCollisions - 设置或获取网格是否可用于碰撞引擎
- 图层蒙板：layerMask - 设置或获取当前图层蒙板。默认0FFFFFFF
- 材质：material - 设置或获取材质
- 接收阴影：receiveShadows - 设置或获取此网格是否接收实时阴影
- 可见度：visibility - 在0到1之间设置或获取网格可见度

### 克隆网格 clone_mesh {#clone-mesh}

复制当前网格的属性，生成一个新的独立的网格物体。

### 创建网格实例 mesh_create_instance {#mesh-create-instance}

从当前网格创建一个新的网格实例。实例网格拥有独立的变换属性，其它属性与原网格共享。例如，所有的实例网格都共享一个材质。

### 设置网格父级 mesh_set_parent {#mesh-set-parent}

设置网格的父物体。该拼图与节点分类下的[node_parent](nodes.md#node-parent)拼图的不同之处在于，该拼图会保持子物体的在当前场景中的位置。

### 渲染边 mesh_render_edges {#mesh-render-edges}

为当前网格启用边线渲染模式。此模式可将网格的边线渲染出来。配合网格`边宽度` `边颜色`属性，可设置连线的线宽和颜色。

参数：
- 系数 - 定义检测一个面的两个角度的最大距离，默认值`0.95`

### 销毁网格 dispose_mesh {#dispose-mesh}

销毁网格，删除与该网格关联的资源。

参数：
- 含子级 - 销毁该网格的子级
- 含材质纹理 - 销毁该网格的材质和纹理

## 变换

### 变换属性 set_get_mesh_transform {#set-get-mesh-transform}

用于设置或获取网格的变换属性。

### 变换网格 translate_mesh {#translate-mesh}

在局部空间或世界空间移动网格。

参数：
- 网格 - 要移动的网格
- 轴 - 定义网格要沿哪个轴移动
- 距离 - 移动的距离
- 局部 - 勾选使用局部空间，否则使用世界空间

### 碰撞移动 move_mesh_with_collisions {#move-mesh-with-collisions}

使用碰撞引擎移动网格。意味着网格在移动时带有碰撞属性。

### 旋转网格 rotate_mesh {#rotate-mesh}

在局部空间或世界空间旋转网格。

参数：
- 网格 - 要移动的网格
- 轴 - 定义网格要沿哪个轴旋转
- 角度 - 旋转的角度
- 局部 - 勾选使用局部空间，否则使用世界空间

### POV旋转网格 rotate_mesh_pov {#rotate-mesh-pov}

以POV模式旋转网格。

参数：
- 网格 - 要移动的网格
- 俯仰 - 俯仰角度
- 偏航 - 偏航角度
- 旋转 - 旋转角度

### 设置网格方向 set_mesh_direction {#set-mesh-direction}

将此变换节点的旋转设置为给定的局部坐标轴。

### 获取网格方向 get_mesh_direction {#get-mesh-direction}

返回一个世界坐标空间的向量3，这个向量3是局部轴（在局部坐标空间下）旋转的结果。

- 轴：旋转的轴

### 网格面向 mesh_look_at {#mesh-look-at}

旋转网格使它朝向目标点。

### 拖拽网格 drag_mesh {#drag-mesh}

使一个网格可以被拖拽。`options`接收一个对象参数，用于控制拖拽行为，通过该拼图的右键菜单-`创建 option`，可创建属性拼图。这些属性包括：

- 拖拽轴 dragAxis - 拖拽模式，使网格沿指定的轴拖拽。如果未指定，则拖拽平面面向相机
- 拖拽面法线 dragPlaneNormal - 拖拽模式，使网格沿指定的平面拖拽，通过法线确定。
- 启用 enabled - 是否可拖拽
- 移动附加物体 moveAttached - 当拖拽时，网格是否移动。若为`false`网格会静止不动
- 更新拖拽面 updateDragPlane - 是否在拖拽过程中应更新拖拽平面的方向（默认：`true`）。
- 使用物体坐标拖拽 useObjectOrientationForDragging - 如果设置为`false`网格将以世界坐标拖拽（默认：`true`）

通过拼图左上角的高级选项，可以启用开始拖拽、拖拽和拖拽结束3种状态的回调插槽。

## 检测

### 检测点 check_point_behind_mesh {#check-point-behind-mesh}

检查场景中的某个点是否被网格遮挡。

### 检测网格相交 check_intersects_mesh {#check-intersects-mesh}

检查两个网格是否相交。

参数：
- 精确 - 高精确检测
- 含子级 - 是否包含子级

### 检测点相交 check_intersects_point {#check-intersects-point}

检查场景中的某个点是否位于网格内部。

## LOD

### 添加LOD等级 mesh_add_lod_level {#mesh-add-lod-level}

根据距离为网格添加LOD网格。也就是，网格会根据距离显示不同的精度，这有利用提高性能。

### 自动LOD mesh_auto_lod {#mesh-auto-lod}

根据给定的设置自动简化网格。

参数`设置`接收一个数组参数，数组的项是一个对象，对象可用的键值有：

- 品质 - 网格质量 0-1
- 距离 - 显示距离
- 优化网格 - 是否优化网格

