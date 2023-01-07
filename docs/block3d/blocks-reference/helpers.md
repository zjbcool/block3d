# 辅助 Helpers <Badge text="pro"/>

这类拼图提供了一些开发中会用到的工具。

[[toc]]

## 显示坐标轴 display_axis {#display-axis}

该拼图用于显示坐标。如果`父级`参数为空，则显示世界坐标；如果指定为某个网格，则显示该网格的局部坐标。

## 添加检查器属性 add_inspectable_custom_properties {#add-inspectable-custom-properties}

向检查器中添加可查看的自定义属性。`属性`参数接收一个对象数组，对象成员可通过该拼图右键菜单-`创建 选项`创建。