# 时间 Time

这类拼图用于控制时间。

[[toc]]

## 时间

### 获取时间 get_elapsed_time {#get-elapsed-time}

返回自1970年1月1日00:00:00 UTC以来经过的毫秒数。

### 延时 time_after {#time-after}

该拼图会在延迟指定时间后，执行`执行`插槽中的拼图。

### 创建间隔器 create_intervalometer {#create-intervalometer}

按照固定的时间间隔重复执行'执行'插槽中的拼图。

### 删除间隔器 remove_intervalometer {#remove-intervalometer}

取消间隔计时器。

### 每帧 time_every_frame <Badge type="warning" text="弃用" /> {#time-every-frame}

弃用。使用[监听场景事件 listen_scene_event](./events.md#listen-scene-event)代替。该拼图会在每一帧渲染时，执行`执行`插槽中的拼图。

### 获取帧时间差 get_delta_time {#get-delta-time}

获取当前帧与上一帧之间的时间差（单位毫秒）。该拼图用于[监听场景事件 listen_scene_event](./events.md#listen-scene-event)拼图，它与速度相乘以实现顺畅的程序动画。

## 计时器

### 创建计时器 create_advanced_timer {#create-advanced-timer}

创建一个高级计时器。

### 计时器属性 advanced_timer_properties_accessors {#advanced-timer-properties-accessors}

属性：
- 当每次计数：在每次计时器计算剩余时间时触发事件
- 当状态改变：当状态改变时触发事件
- 当计时取消：当计时器根据打断条件取消时触发事件
- 当计时结束：当计时器结束时触发事件

状态：
- 打断条件：设置计时器的打断条件

### 计时器方法 advanced_timer_methods {#advanced-timer-methods}

计时器方法。包括：

- 开始计时器：将启动计时器的一个新的迭代。每次只能运行一个计时器的实例。
- 结束计时器：将在下一刻强制停止计时。
- 销毁计时器：销毁计时器，释放所有资源。