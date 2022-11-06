# 动画和事件

[[toc]]

在前面的教程中，我们导入了几段动画，现在我们来获取和控制这些动画。

## 动画

在Block3D中这些动画片段被称为“动画组”AnimationGroup，在场景查看器的`Animation groups`下面可以看到所有导入的动画组。

![anim-event](https://cdn.zjbku.com/start/anim-event.jpg)

使用动画分类下的`获取动画组get_animaiton_group_by_name`拼图和`动画组回放animation_group_playback`拼图，可以控制动画组的播放。

![anim-event-2](https://cdn.zjbku.com/start/anim-event-2-min.jpg)

此时，场景中的角色已经跑起来了。

## 事件

下面我们使用事件分类下的`键盘事件keyboard_event`拼图和`获取按键get_key_input`拼图来控制动画组的播放。

1. 当键盘按下时，如果按下的是`w`键，则播放跑步动画；
2. 当键盘抬起时，如果抬起的是`w`键，则停止动画。

其中，要用到逻辑分类下的`controls_if`拼图和`logic_compare`拼图，判断按键的值。

![anim-event-5](https://cdn.zjbku.com/start/anim-event-5-min.jpg)

效果：

![anim-event-6](https://cdn.zjbku.com/start/anim-event-6.gif)

## 下一步

以上走马观花地对Block3D的主要模块做了介绍，教程到这里接近尾声。最后，介绍一下如何最终将所有工作发布为可以在网络上传播的Web3D应用。




