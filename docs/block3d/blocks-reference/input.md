# 输入 Input

该分类用于处理各种设备的输入。

[[toc]]

## 虚拟摇杆

### 创建摇杆 create_virtual_joystick {#create-virtual-joystick}

用于创建虚拟摇杆。该拼图会创建一个浏览器窗口大小的画布，画布浮在绘制场景的画布之上，所以对场景的所有交互都会被遮挡。画布上可以绘制2个虚拟摇杆，默认为动态类型。左侧的摇杆可能会被拼图编辑器挡住，可以考虑发布后调试或最大化视图区调试。

参数：

- 位置 - 左或右
- 选项 - 配置选项

### 摇杆属性 virtual_joystick_properties_accessors {#virtual-joystick-properties-accessors}

属性：

- 偏移位置 - deltaPosition 获取位置的偏移值
- 仅限容器内 - limitToContainer 是否限制球头仅在摇杆容器范围内移动
- 是否按下 - pressed 是否摇杆已被按下
- 左右反转 - reverseLeftRight 设置或获取摇杆是否左右反转
- 上下反转 - reverseUpDown 设置或获取摇杆是否上下反转

访问器：

- 始终可见 - alwaysVisible 是否摇杆始终可见
- 容器大小 - containerSize 摇杆容器大小
- 球头大小 - puckSize 摇杆球头大小

### 固定摇杆 set_virtual_joystick_position {#set-virtual-joystick-position}

定义静态摇杆的位置。

### 隐藏/显示摇杆 set_virtual_joystick_visible {#set-virtual-joystick-visible}

设置摇杆是否可见。