# 事件 Events

这类拼图提供了指针、键盘事件，以及自定义事件和射线，用于处理各种设备下的交互。

[[toc]]

## 事件

### 创建事件 create_custom_event {#create-custom-event}

创建一个事件。事件分3部分：事件、触发事件和监听事件。

### 触发事件 dispatch_custom_event {#dispatch-custom-event}

向事件的监听者发出通知。

`数据`参数通过接收一个对象，可以在派发事件时携带参数。

### 监听事件 listen_custom_event {#listen-custom-event}

当事件触发时执行`执行`插槽中的拼图。

### 监听指针事件 listen_pointer_event {#listen-pointer-event}

用于监听指针事件。

参数`忽略背面`，勾选表示忽略网格背面。

事件类型：
- 指针双击
- 指针按下
- 指针移动
- 指针单击
- 指针轻击
- 指针抬起
- 指针滚动

### 点击信息 picking_info {#picking-info}

返回拾取信息，用于[pointer_event](#pointer-event)拼图和[ray_intersects_mesh](#ray-intersects-mesh)拼图（通过这两个拼图的右键菜单`创建 点击信息`可快速创建`picking_info`拼图）。

参数：
- 点击信息
- 点击的网格
- 点击的位置
- 点击的法线

### 获取法线 get_normal_from_picking_info {#get-normal-from-picking-info}

获取点击击中的面的法线。注意，返回的法线始终朝向拾取射线。

- 世界坐标 - 生成的法线是否使用世界坐标
- 顶点法线 - 是否使用顶点法线，而非法线贴图来计算法线
- 点击信息 - 点击事件信息

### 监听键盘事件 listen_keyboard_event {#listen-keyboard-event}

用于监听键盘的按下和抬起事件。参数`重复`勾选时表示当一直按住键盘时，重复触发键盘事件；否则，只触发一次键盘事件。

### 获取键 get_key_input {#get-key-input}

用于返回键盘按键和按键代码。

### 监听场景事件 listen_scene_event {#listen-scene-event}

监听场景事件。包括：

- 场景渲染前 - 在场景渲染前触发此事件（紧跟在动画和物理之后），用于代替`每帧time_every_frame`拼图
- 场景就绪 - 当场景就绪时触发此事件

## 动作

### 创建动作 event_create_action {#event-create-action}

用于创建动作。动作是应用到网格，通过事件触发的行为。

动作的类型：
- 无
- 设置值
- 切换布尔
- 插值
- 递增值
- 执行函数
- 合并

事件类型：
- 无
- 当点击
- 当双击
- 当点击按下
- 当点击抬起
- 当点击移出
- 当左键单击
- 当右键单击
- 当中键单击
- 当长按
- 当指针经过
- 当指针移出
- 当相交进入
- 当相交退出

### 添加动作 event_add_actions {#event-add-actions}

将动作指定给网格。

`动作`参数接收一个包含动作的数组。

## 帧

### 多帧 event_multi_frame {#event-multi-frame}

用于处理跨帧逻辑。

### 下一帧 event_next_frame {#event-next-frame}

跳到下一渲染帧。仅用于多帧拼图内部。

### 等待 event_await_delay {#event-await-delay}

等待一段时间。仅用于多帧拼图内部。

## 射线

### 创建射线 create_ray {#create-ray}

创建射线。射线是一条从场景中某点发出的有长度的虚拟射线。通常用于拾取网格。

### 射线相交网格 ray_intersects_mesh {#ray-intersects-mesh}

检测射线与网格（或一组网格）是否相交，若相交执行`完成`插槽中的拼图。交点信息可通过[picking_info](#picking-info)拼图获取。
