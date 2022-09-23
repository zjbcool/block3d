# 节点 Nodes

Block3D中的网格、相机、灯光都属于节点，它们有一些共同的属性和方法。

[[toc]]

## mesh_selector

网格选择器，用于根据名称获取网格。

![mesh_selector](https://cdn.zjbku.com/blocks/mesh_selector.png)

## camera_selector

相机选择器，用于根据名称获取相机。

![camera_selector](https://cdn.zjbku.com/blocks/camera_selector.png)

## light_selector

灯光选择器，用于根据名称获取灯光。

![light_selector](https://cdn.zjbku.com/blocks/light_selector.png)

## create_transform_node

创建一个不会被渲染出来的变换节点。把它作为其它物体的父级，可以控制这个物体的变换轴心。

![create_transform_node](https://cdn.zjbku.com/blocks/create_transform_node.png)

## node_get_all

获取场景中所有指定类型的节点。

![node_get_all](https://cdn.zjbku.com/blocks/node_get_all.png)

## node_get_children

获取节点的子级。

![node_get_children](https://cdn.zjbku.com/blocks/node_get_children.png)

参数：
- childMeshes - 该节点下所有层级中的所有网格节点
- directChildren - 该节点下直接子级的所有节点
- allChildren - 该节点下所有层级的所有节点

## node_parent

设置或获取节点的父级。注意，该拼图不会保持子级在当前场景中的位置。父级为`null`表示解除父级。

![node_parent](https://cdn.zjbku.com/blocks/node_parent.png)

## node_is_child_of

判断节点A是否为节点B的子级。判断会递归直到找到父级或到达顶层父级。

![node_is_child_of](https://cdn.zjbku.com/blocks/node_is_child_of.png)

## node_set_enabled

设置节点是否可用（可渲染）。

![node_set_enabled](https://cdn.zjbku.com/blocks/node_set_enabled.png)

