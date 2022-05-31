# TweakPane

该分类拼图用于实现参数调试面板，虽然Block3D内置的场景查看器具备调参功能，但是有时你可能也会需要可订制的参数面板。

[[toc]]

## create_tweak_pane

创建面板。参数`title`为面板标题，可以为空。只能创建一个面板。

![create_tweak_pane](https://cdn.zjbku.com/blocks/create_tweak_pane.png)

## pane_add_folder

在面板上添加折叠菜单，用于管理控件。参数`title`为面板标题，可以为空。

![pane_add_folder](https://cdn.zjbku.com/blocks/pane_add_folder.png)

## pane_add_slider

添加滑块控件。

参数：
- to - 用于指定折叠菜单，可以为空
- label - 该控件的标签名
- options - 滑块参数，接收一个对象参数，通过拼图右键菜单的`创建 option`可创建选项拼图
  - main - 最小值
  - max - 最大值
  - step - 步进值
  - value - 默认值
- onChange - 当控件的值发生改变时，执行该插槽中的拼图

![pane_add_slider](https://cdn.zjbku.com/blocks/pane_add_slider.png)

## pane_add_list

添加下拉菜单控件。

参数：
- to - 用于指定折叠菜单，可以为空
- label - 该控件的标签名
- options - 菜单项，接收一个对象参数，`key`为菜单选项，`value`为该选项的值
- onChange - 当控件的值发生改变时，执行该插槽中的拼图

![pane_add_list](https://cdn.zjbku.com/blocks/pane_add_list.png)

## pane_add_checkbox

添加单选框控件。

参数：
- to - 用于指定折叠菜单，可以为空
- label - 该控件的标签名
- checked - 单选框默认值
- onChange - 当控件的值发生改变时，执行该插槽中的拼图

![pane_add_checkbox](https://cdn.zjbku.com/blocks/pane_add_checkbox.png)

## pane_add_text

添加文本控件。

参数：
- to - 用于指定折叠菜单，可以为空
- label - 该控件的标签名
- text - 文本内容
- onChange - 当控件的值发生改变时，执行该插槽中的拼图

![pane_add_text](https://cdn.zjbku.com/blocks/pane_add_text.png)

## pane_add_color

添加拾色器控件。

参数：
- to - 用于指定折叠菜单，可以为空
- label - 该控件的标签名
- hex - 默认的16进制颜色值
- onChange - 当控件的值发生改变时，执行该插槽中的拼图
  
![pane_add_color](https://cdn.zjbku.com/blocks/pane_add_color.png)

## pane_add_button

添加按钮控件。

参数：
- to - 用于指定折叠菜单，可以为空
- title - 按钮名称
- onClick - 当触发按钮时，执行该插槽中的拼图

![pane_add_button](https://cdn.zjbku.com/blocks/pane_add_button.png)

## pane_get_value

获取控件的值。

![pane_get_value](https://cdn.zjbku.com/blocks/pane_get_value.png)