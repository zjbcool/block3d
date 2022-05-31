# 动画 Animation

用于创建、获取和控制动画。

[[toc]]

## get_animation_group_by_name

根据名称获取动画组。动画组是从三维软件导出的关键帧动画。

![get_animation_group_by_name](https://cdn.zjbku.com/blocks/get_animation_group_by_name.png)

## set_get_animation_group_prop

用于设置或获取动画组属性。

![set_get_animation_group_prop](https://cdn.zjbku.com/blocks/set_get_animation_group_prop.png)

常用属性：
- from - 开始帧
- isPlaying - 是否正在播放
- isStarted - 是否已经开始
- loopAnimation - 是否开启循环
- speedRatio - 动画速度
- to - 结果帧

## animation_go_to_frame

使动画组跳转到指定的帧。

![animation_go_to_frame](https://cdn.zjbku.com/blocks/animation_go_to_frame.png)

## animation_group_playback

动画回放控制。

![animation_group_playback](https://cdn.zjbku.com/blocks/animation_group_playback.png)

参数：
- pause - 暂停
- play - 播放
- reset - 重置
- restart - 重新开始
- start - 开始
- stop - 停止

## animation_blending

设置两个动画组之间的过渡。参数`blendingSpeed`控制过渡的速度。

![animation_blending](https://cdn.zjbku.com/blocks/animation_blending.png)

## transition_animation

用于实现过渡动画。

![transition_animation](https://cdn.zjbku.com/blocks/transition_animation.png)

参数：
- object - 可动画对象，如网格、相机、灯光
- key - 动画对象的属性，如position
- value - 目标值
- type - 值类型：Float, Vector2, Vector3, Color3
- duration - 时长，单位秒
- fps - 每秒帧数
- easing - 过渡类型
