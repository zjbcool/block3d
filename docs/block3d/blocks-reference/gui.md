# 界面 GUI

这类拼图用于加载通过GUI编辑器实现的用户界面，并操作界面中的控制器，实现交互。若使用了这类拼图，在发布时注意勾选`GUI`模块。

[[toc]]

## 创建全屏UI create_adt_for_fullscreen_ui {#create-adt-for-fullscreen-ui}

用于从包含UI信息的json文件创建用户界面。json数据可通过[加载资产scene_load_asset](./scenes.md#scene-load-asset)拼图以二进制文件方式加载，然后通过[获取加载资产scene_get_loaded_from_asset](./scenes.md#scene-get-loaded-from-asset)拼图获取json数据。

- 视网膜屏幕 - 用于在视网膜屏幕或高ppi（pixels per inch）屏幕上让UI显示更加清晰

## 创建网格纹理 create_adt_for_mesh_texture {#create-adt-for-mesh-texture}

以投射模式创建一个新的高级动态纹理（附着在网格上），但不会为网格创建一个新的材质。需手动连接该纹理。

参数：
- 网格 - 要应用纹理的网格
- 宽度 - 纹理宽度
- 高度 - 纹理高度
- 指针移动 - 是否纹理必须捕获指针移动事件
- JSON - 包含纹理信息的json数据

## 设置UI图层蒙板 set_ui_layer_mask {#set-ui-layer-mask}

定义图层蒙板用于将图层仅限于场景的某些相机。

## 获取控件 gui_get_control {#gui-get-control}

通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。

## 控件属性 gui_control_properties_accessors {#gui-control-properties-accessors}

用于设置或获取控件属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

属性：
- 经过光标hoverCursor - 设置或获取当经过控件时使用的光标
- 当指针点击时onPointerClick - 当指针点击时触发事件
- 当指针按下时onPointerDown - 当指针按下时触发事件
- 当指针移入时onPointerEnter - 当指针移入时触发事件
- 当指针移动时onPointerMove - 当指针移动时触发事件
- 当指针移出时onPointerOut - 当指针移出时触发事件
- 当指针抬起时onPointerUp - 当指针抬起时触发事件
- 当滚轮滚动时onWheel - 当滚轮滚动时触发事件

访问器：
- alpha - 设置或获取控件的不透明度（1为不透明；0为完全透明）
- 颜色color - 设置或获取前景色
- 已勾选isChecked - 设置或获取单选框是否勾选
- 已启用isEnabled - 设置或获取控件是否启用
- 可点击isHitTestVisible - 设置或获取控件是否可通过指针事件点击
- 可显示isVisible - 设置或获取控件是否可见
- 阻止指针事件isPointerBlocker - 设置或获取控件是否阻止指针事件
- 缩放XscaleX - 设置或获取控件在X轴的缩放比例
- 缩放YscaleY - 设置或获取控件在Y轴的缩放比例
- 源source - 设置或获取图片地址
- 文本text - 设置或获取要显示的文本
- 变换中心XtransformCenterX - 设置或获取X轴的变换中心点
- 变换中心YtransformCenterY - 设置或获取Y轴的变换中心点
- 值value - 设置或获取当前值

还可以使用[object_member](./object.md#object-member)拼图直接控制任何属性。

## 获取控件子级 gui_get_child_controls {#gui-get-child-controls}

该拼图可以根据控制器类型获取某个控制器的子级控制器。

## 移动控件 gui_move_control_to_vector {#gui-move-control-to-vector}

使控制器绑定到场景中的某个点。可实现为三维物体添加标签的效果。
