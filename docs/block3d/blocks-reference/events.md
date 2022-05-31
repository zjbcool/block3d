# 事件 Events

这类拼图提供了指针、键盘事件，以及自定义事件和射线，用于处理各种设备下的交互。

[[toc]]

## pointer_event

指针事件。Block3D中的事件同时兼容PC设备和移动设备。

![pointer_event](https://cdn.zjbku.com/blocks/pointer_event.png)

参数`ignorBackface`，勾选表示忽略网格背面。

事件类型：
- pointerdoubletap - 双击事件
- pointerdown - 按下事件
- pointermove - 移动事件
- pointerpick - 单击事件
- pointertap - 触摸事件
- pointerup - 抬起事件
- pointerwheel - 滚轮事件

## picking_info

返回拾取信息，用于[pointer_event](#pointer-event)拼图和[ray_intersects_mesh](#ray-intersects-mesh)拼图（通过这两个拼图的右键菜单`创建 picked`可快速创建`picking_info`拼图）。

![picking_info](https://cdn.zjbku.com/blocks/picking_info.png)

参数：
- mesh - 拾取的网格
- point - 点击位置的坐标
- normal - 点击平面的法线

## keyboard_event

键盘事件。分类按下和抬起两种类型。参数`repeat`勾选时表示当一直按住键盘时，重复触发键盘事件；否则，只触发一次键盘事件。

![keyboard_event](https://cdn.zjbku.com/blocks/keyboard_event.png)

## get_key_input

用于返回键盘按键和按键代码。

![get_key_input](https://cdn.zjbku.com/blocks/get_key_input.png)

## event_create_action

用于创建动作。动作是应用到网格，通过事件触发的行为。

![event_create_action](https://cdn.zjbku.com/blocks/event_create_action.png)

动作的类型：
- doNothing - 无
- setValue - 设置值
- switchBoolean - 布尔切换
- interpolateValue - 插值
- incrementValue - 递增
- executeCode - 执行代码
- combine - 合并动作

事件类型：
- nothing - 无
- onPick - 点击事件
- onDoublePick - 双击事件
- onPickDown - 指针按下事件
- onPickUp - 指针抬起事件
- onPickOut - 按住，然后移出
- onLeftPick - 鼠标左键点击
- onRightPick - 鼠标右键点击
- onCenterPick - 鼠标中键点击
- onLongPress - 长按
- onPointerOver - 指针经过事件
- onPointerOut - 指针移出事件
- onIntersectionEnter - 网格相交开始
- onIntersectionExit - 网格相交结束

## event_add_actions

将动作指定给网格。

![event_add_actions](https://cdn.zjbku.com/blocks/event_add_actions.png)

`actions`参数接收一个包含动作的数组。

## create_custom_event

创建自定义事件。事件分3部分：事件、派发事件和监听事件。

![create_custom_event](https://cdn.zjbku.com/blocks/create_custom_event.png)

## dispatch_custom_event

派发事件。向事件的监听者发出通知。

![dispatch_custom_event](https://cdn.zjbku.com/blocks/dispatch_custom_event.png)

`data`参数通过接收一个对象，可以在派发事件时携带参数。

## add_custom_event_listener

监听事件。当事件触发时执行`do`插槽中的拼图。

![add_custom_event_listener](https://cdn.zjbku.com/blocks/add_custom_event_listener.png)

## create_ray

创建射线。射线是一条从场景中某点发出的有长度的虚拟射线。通常用于拾取网格。

![create_ray](https://cdn.zjbku.com/blocks/create_ray.png)

## ray_intersects_mesh

检测射线与网格（或一组网格）是否相交，若相交执行`do`插槽中的拼图。交点信息可通过[picking_info](#picking-info)拼图获取。

![ray_intersects_mesh](https://cdn.zjbku.com/blocks/ray_intersects_mesh.png)