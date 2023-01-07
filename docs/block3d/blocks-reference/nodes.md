# 节点 Nodes

Block3D中的网格、相机、灯光都属于节点，它们有一些共同的属性和方法。

[[toc]]

## 节点

### 网格选择器 mesh_selector {#mesh-selector}

网格选择器，用于根据名称获取网格。

### 相机选择器 camera_selector {#camera-selector}

相机选择器，用于根据名称获取相机。

### 灯光选择器 light_selector {#light-selector}

灯光选择器，用于根据名称获取灯光。

### 获取节点 get_node_by_name {#get-node-by_name}

根据名称获取节点（网格、相机、灯光）。

### 获取所有节点 node_get_all {#node-get-all}

获取场景中所有指定类型的节点。

### 创建变换节点 create_transform_node {#create-transform-node}

创建一个不会被渲染出来的变换节点。把它作为其它物体的父级，可以控制这个物体的变换轴心。

## 关系

### 父级 node_parent {#node-parent}

设置或获取节点的父级。注意，该拼图不会保持子级在当前场景中的位置。父级为`null`表示解除父级。

### 获取子级 node_get_children {#node-get-children}

获取节点的子级。

参数：
- 子网格 - 该节点下所有层级中的所有网格节点
- 直接子级 - 该节点下直接子级的所有节点
- 所有子级 - 该节点下所有层级的所有节点

### 是否从属 node_is_child_of {#node-is-child-of}

判断节点A是否为节点B的子级。判断会递归直到找到父级或到达顶层父级。

## 启用

### 设置启用 node_set_enabled {#node-set-enabled}

设置节点是否可用（可渲染）。