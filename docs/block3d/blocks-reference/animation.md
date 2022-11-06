# 动画 Animation

用于创建、获取和控制动画。

[[toc]]

## get_animation_group_by_name

根据名称获取动画组。动画组是从三维软件导出的关键帧动画。

## animation_group_properties_accessors

用于设置或获取动画组属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

属性：
- 当动画组结束时
- 当动画组循环时
- 当动画组暂停时
- 当动画组播放时

访问器：
- 开始帧
- 是否叠加
- 播放中
- 已开始
- 循环动画
- 速率
- 结束帧

## animation_group_playback

动画回放控制。

参数：
- 暂停
- 播放
- 重置
- 重新开始
- 开始
- 停止

## animation_go_to_frame

使动画组跳转到指定的帧。

## animation_blending

设置两个动画组之间的过渡。参数`混合速度`控制过渡的速度。

## transition_animation

过渡对象的属性值到一个目标值。若启用高级选项的回调，当动画结束时，执行回调插槽中的拼图。

参数：
- 对象 - 可动画对象，如网格、相机、灯光
- 键 - 动画对象的属性，如position
- 值 - 目标值
- 类型 - 值类型：Float, Vector2, Vector3, Color3
- 时长 - 时间长度，单位秒
- fps - 每秒帧数
- 缓动 - 过渡类型，缓动曲线参考：<https://easings.net/>
