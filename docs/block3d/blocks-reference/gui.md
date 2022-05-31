# 界面 GUI

这类拼图用于加载通过GUI编辑器实现的用户界面，并操作界面中的控制器，实现交互。若使用了这类拼图，在发布时注意勾选`GUI`模块。

[[toc]]

## create_fullscreen_UI

用于从包含UI信息的json文件创建用户界面。json数据可通过[scene_load_asset](./scenes.md#scene-load-asset)拼图以二进制文件方式加载，然后通过[scene_get_loaded_from_asset](./scenes.md#scene-get-loaded-from-asset)拼图获取json数据。

![create_fullscreen_UI](https://cdn.zjbku.com/blocks/create_fullscreen_UI.png)

## gui_get_control

通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。

![gui_get_control](https://cdn.zjbku.com/blocks/gui_get_control.png)

## gui_control_prop

用于设置或获取控制器属性。

![gui_control_prop](https://cdn.zjbku.com/blocks/gui_control_prop.png)

常用属性：
- alpha - 不透明度
- isEnabled - 是否开启
- isVisible - 是否显示
- isPointerBlocker - 是否阻止指针事件
- scaleX - X缩放
- scaleY - Y缩放

你可以使用[object_member](./object.md#object-member)拼图直接控制任何属性。

## gui_get_control_value

获取控制器的值。

![gui_get_control_value](https://cdn.zjbku.com/blocks/gui_get_control_value.png)

## gui_get_child_controls

该拼图可以根据控制器类型获取某个控制器的子级控制器。

![gui_get_child_controls](https://cdn.zjbku.com/blocks/gui_get_child_controls.png)

## gui_event

UI事件。

![gui_event](https://cdn.zjbku.com/blocks/gui_event.png)

事件类型：
- pointerClick - 单击
- pointerDown - 按下
- pointerEnter - 进移入
- pointerMove - 移动
- pointerOut - 移出
- pointerUp - 抬起
- textChanged - 文本改变
- valueChanged - 值改变
- wheel - 滚轮

## gui_move_control_to_vector

使控制器绑定到场景中的某个点。可实现为三维物体添加标签的效果。

![gui_move_control_to_vector](https://cdn.zjbku.com/blocks/gui_move_control_to_vector.png)
