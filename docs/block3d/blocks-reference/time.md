# 时间 Time

这类拼图用于控制时间。

[[toc]]

## time_after

该拼图会在延迟指定时间后，执行`do`插槽中的拼图。

![time_after](https://cdn.zjbku.com/blocks/time_after.png)

## time_every_frame

该拼图会在每一帧渲染时，执行`do`插槽中的拼图。

![time_every_frame](https://cdn.zjbku.com/blocks/time_every_frame.png)

## get_delta_time

获取渲染帧上一帧和一下帧之间的时间长度，单位秒。该拼图用于`time_every_frame`拼图，它与速度相乘以实现顺畅的程序动画。

![get_delta_time](https://cdn.zjbku.com/blocks/get_delta_time.png)

## create_timer

创建一个计时器，用于周期性地执行`do`插槽中的拼图。返回值是该计时器的ID，可用于销毁计时器。

![create_timer](https://cdn.zjbku.com/blocks/create_timer.png)

## remove_timer

根据ID销毁计时器。

![remove_timer](https://cdn.zjbku.com/blocks/remove_timer.png)
