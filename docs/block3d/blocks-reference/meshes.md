# 网格 Meshes

该分类包含创建和操作网格的方法。

[[toc]]

## mesh_create_set_shapes

该拼图用于创建基本的几何体网格，包括：立方体、球体、圆柱体、平面，以及直线等等。创建出来的网格会有一个默认的PBR材质。使用该拼图可以帮你快速搭建场景，实现想法。

![mesh_create_set_shapes](https://cdn.zjbku.com/blocks/mesh_create_set_shapes.png)

`name`参数可以帮助你在场景查看器中快速找到网格。

`options`接收一个对象类型的参数，用于控制网格的属性，这些属性根据网格类型而不尽相同。你可以通过在该拼图的右键菜单中执行`创建 option`获取属性拼图。

## mesh_create_decal

创建贴花。可以实现第一人称射击游戏中的弹孔、喷漆效果。

![mesh_create_decal](https://cdn.zjbku.com/blocks/mesh_create_decal.png)

参数：
- name - 名称
- sourceMesh - 目标网格
- textureUrl - 贴花图案路径
- options - 对象参数
  - position - 生成的贴花网格的位置
  - normal - 贴花网格的法线方向
  - size - 贴花网格的大小
  - angle - 贴花网格的角度

## set_get_mesh_prop

用于设置或获取网格属性。

![set_get_mesh_prop](https://cdn.zjbku.com/blocks/set_get_mesh_prop.png)

常用属性：
- checkCollisions - 是否开启碰撞检测
- isPickable - 网格是否可拾取
- isVisible - 网格是否可见
- material - 材质
- outlineColor - 轮廓颜色
- outlineWidth - 轮廓宽度
- overlayAlpha - 叠加层透明度
- overlayColor - 叠加层颜色
- receiveShadows - 网格是否阴影
- renderOutline - 是否渲染轮廓
- renderOverlay - 是否渲染叠加层
- showBoundingBox - 是否显示边界框
- visibility - 可见度

## set_get_mesh_transform

用于设置或获取网格的变换属性。

![set_get_mesh_transform](https://cdn.zjbku.com/blocks/set_get_mesh_transform.png)

## translate_mesh

在局部空间或世界空间移动网格。

![translate_mesh](https://cdn.zjbku.com/blocks/translate_mesh.png)

参数：
- mesh - 要移动的网格
- axis - 定义网格要沿哪个轴移动
- distance - 移动的距离
- local - 勾选使用局部空间，否则使用世界空间

## rotate_mesh

在局部空间或世界空间旋转网格。

![rotate_mesh](https://cdn.zjbku.com/blocks/rotate_mesh.png)

参数：
- mesh - 要移动的网格
- axis - 定义网格要沿哪个轴旋转
- degree - 旋转的角度
- local - 勾选使用局部空间，否则使用世界空间

## rotate_mesh_pov

以POV模式旋转网格。

![rotate_mesh_pov](https://cdn.zjbku.com/blocks/rotate_mesh_pov.png)

参数：
- mesh - 要移动的网格
- pitch - 俯仰角度
- yaw - 偏航角度
- roll - 旋转角度

## set_mesh_direction

将此变换节点的旋转设置为给定的局部坐标轴。

![set_mesh_direction](https://cdn.zjbku.com/blocks/set_mesh_direction.png)

## mesh_look_at

旋转网格使它朝向目标点。

![mesh_look_at](https://cdn.zjbku.com/blocks/mesh_look_at.png)

## remove_mesh

删除网格，如果勾选了`includeChildren`，则连同该网格的子级也删除。

![remove_mesh](https://cdn.zjbku.com/blocks/remove_mesh.png)

## mesh_set_parent

设置网格的父物体。该拼图与节点分类下的[node_parent](nodes.md#node-parent)拼图的不同之处在于，该拼图会保持子物体的在当前场景中的位置。

![mesh_set_parent](https://cdn.zjbku.com/blocks/mesh_set_parent.png)

## clone_mesh

复制当前网格的属性，生成一个新的独立的网格物体。

![clone_mesh](https://cdn.zjbku.com/blocks/clone_mesh.png)

## mesh_create_instance

从当前网格创建一个新的网格实例。实例网格拥有独立的变换属性，其它属性与原网格共享。例如，所有的实例网格都共享一个材质。

![mesh_create_instance](https://cdn.zjbku.com/blocks/mesh_create_instance.png)

## drag_mesh

使一个网格可以被拖拽。`options`接收一个对象参数，用于控制拖拽行为，通过该拼图的右键菜单-`创建 option`，可创建属性拼图。这些属性包括：

- dragAxis - 拖拽模式，使网格沿指定的轴拖拽。如果未指定，则拖拽平面面向相机
- dragPlaneNormal - 拖拽模式，使网格沿指定的平面拖拽，通过法线确定。
- enabled - 是否可拖拽
- moveAttached - 当拖拽时，网格是否移动。若为`false`网格会静止不动
- updateDragPlane - 是否在拖拽过程中应更新拖拽平面的方向（默认：`true`）。
- useObjectOrientationForDragging - 如果设置为`false`网格将以世界坐标拖拽（默认：`true`）

通过拼图左上角的高级选项，可以启用开始拖拽、拖拽和拖拽结束3种状态的回调插槽。

![drag_mesh](https://cdn.zjbku.com/blocks/drag_mesh.png)

## check_point_behind_mesh

检查场景中的某个点是否被网格遮挡。

![check_point_behind_mesh](https://cdn.zjbku.com/blocks/check_point_behind_mesh.png)

## check_intersects_mesh

检查两个网格是否相交。

参数：
- precise - 高精确检测
- includeChildren - 是否包含子级

![check_intersects_mesh](https://cdn.zjbku.com/blocks/check_intersects_mesh.png)

## check_intersects_point

检查场景中的某个点是否位于网格内部。

![check_intersects_mesh](https://cdn.zjbku.com/blocks/check_intersects_mesh.png)

## mesh_add_lod_level

根据距离为网格添加LOD网格。也就是，网格会根据距离显示不同的精度，这有利用提高性能。

![mesh_add_lod_level](https://cdn.zjbku.com/blocks/mesh_add_lod_level.png)

## mesh_auto_lod

根据给定的设置自动简化网格。

参数`settings`接收一个数组参数，数组的项是一个对象，对象可用的键值有：

- quality - 网格质量 0-1
- distance - 显示距离
- optimizeMesh - 是否优化网格

![mesh_auto_lod](https://cdn.zjbku.com/blocks/mesh_auto_lod.png)

## mesh_render_edges

为当前网格启用边线渲染模式。此模式可将网格的边线渲染出来。配合网格`edgesWidth` `edgesColor`属性，可设置连线的线宽和颜色。

参数：
- epsilon - 定义检测一个面的两个角度的最大距离，默认值`0.95`

![mesh_render_edges](https://cdn.zjbku.com/blocks/mesh_render_edges.png)