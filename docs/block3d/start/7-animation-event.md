# 动画和事件

[[toc]]

在前面的教程中，我们导入了几段动画，现在我们来获取和控制这些动画。

## 动画

在Block3D中这些动画片段被称为“动画组”AnimationGroup，在场景查看器的`Animation groups`下面可以看到所有导入的动画组。

![anim-event](https://cdn.zjbku.com/start/anim-event.jpg)

使用动画分类下的`get_animaiton_group_by_name`拼图可以获取这些动画组。

![anim-event-1](https://cdn.zjbku.com/start/anim-event-1.png)

使用动画分类下的`animation_group_playback`拼图，可以控制动画组的播放。

![anim-event-2](https://cdn.zjbku.com/start/anim-event-2.png)

## 事件

下面我们事件分类下的键盘`keyboard_event`事件，来控制动画组的播放。

通过下面的方法，可以在浏览器的控制台（快捷键F12）看到按下的按键名称。`console_log`拼图在系统分类下，用于在控制台输出信息，多用于调试。

![anim-event-3](https://cdn.zjbku.com/start/anim-event-3.png)

使用逻辑分类下的`controls_if`拼图和`logic_compare`拼图，判断用户按下的是哪一个按键。如果按下`w`，则播放跑步动画。

![anim-event-4](https://cdn.zjbku.com/start/anim-event-4.png)

相反，如果抬起`w`，则停止跑步动画，播放等待动画。

![anim-event-5](https://cdn.zjbku.com/start/anim-event-5.png)

效果：

![anim-event-6](https://cdn.zjbku.com/start/anim-event-6.gif)

## 下一步

以上走马观花地对Block3D的主要模块做了介绍，教程到这里接近尾声。最后，介绍一下如何最终将所有工作发布为可以在网络上传播的Web3D应用。




