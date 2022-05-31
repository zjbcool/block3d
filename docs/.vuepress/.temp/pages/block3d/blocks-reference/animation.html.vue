<template><h1 id="动画-animation" tabindex="-1"><a class="header-anchor" href="#动画-animation" aria-hidden="true">#</a> 动画 Animation</h1>
<p>用于创建、获取和控制动画。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#get-animation-group-by-name">get_animation_group_by_name</RouterLink></li><li><RouterLink to="#set-get-animation-group-prop">set_get_animation_group_prop</RouterLink></li><li><RouterLink to="#animation-go-to-frame">animation_go_to_frame</RouterLink></li><li><RouterLink to="#animation-group-playback">animation_group_playback</RouterLink></li><li><RouterLink to="#animation-blending">animation_blending</RouterLink></li><li><RouterLink to="#transition-animation">transition_animation</RouterLink></li></ul></nav>
<h2 id="get-animation-group-by-name" tabindex="-1"><a class="header-anchor" href="#get-animation-group-by-name" aria-hidden="true">#</a> get_animation_group_by_name</h2>
<p>根据名称获取动画组。动画组是从三维软件导出的关键帧动画。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_animation_group_by_name.png" alt="get_animation_group_by_name"></p>
<h2 id="set-get-animation-group-prop" tabindex="-1"><a class="header-anchor" href="#set-get-animation-group-prop" aria-hidden="true">#</a> set_get_animation_group_prop</h2>
<p>用于设置或获取动画组属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_animation_group_prop.png" alt="set_get_animation_group_prop"></p>
<p>常用属性：</p>
<ul>
<li>from - 开始帧</li>
<li>isPlaying - 是否正在播放</li>
<li>isStarted - 是否已经开始</li>
<li>loopAnimation - 是否开启循环</li>
<li>speedRatio - 动画速度</li>
<li>to - 结果帧</li>
</ul>
<h2 id="animation-go-to-frame" tabindex="-1"><a class="header-anchor" href="#animation-go-to-frame" aria-hidden="true">#</a> animation_go_to_frame</h2>
<p>使动画组跳转到指定的帧。</p>
<p><img src="https://cdn.zjbku.com/blocks/animation_go_to_frame.png" alt="animation_go_to_frame"></p>
<h2 id="animation-group-playback" tabindex="-1"><a class="header-anchor" href="#animation-group-playback" aria-hidden="true">#</a> animation_group_playback</h2>
<p>动画回放控制。</p>
<p><img src="https://cdn.zjbku.com/blocks/animation_group_playback.png" alt="animation_group_playback"></p>
<p>参数：</p>
<ul>
<li>pause - 暂停</li>
<li>play - 播放</li>
<li>reset - 重置</li>
<li>restart - 重新开始</li>
<li>start - 开始</li>
<li>stop - 停止</li>
</ul>
<h2 id="animation-blending" tabindex="-1"><a class="header-anchor" href="#animation-blending" aria-hidden="true">#</a> animation_blending</h2>
<p>设置两个动画组之间的过渡。参数<code v-pre>blendingSpeed</code>控制过渡的速度。</p>
<p><img src="https://cdn.zjbku.com/blocks/animation_blending.png" alt="animation_blending"></p>
<h2 id="transition-animation" tabindex="-1"><a class="header-anchor" href="#transition-animation" aria-hidden="true">#</a> transition_animation</h2>
<p>用于实现过渡动画。</p>
<p><img src="https://cdn.zjbku.com/blocks/transition_animation.png" alt="transition_animation"></p>
<p>参数：</p>
<ul>
<li>object - 可动画对象，如网格、相机、灯光</li>
<li>key - 动画对象的属性，如position</li>
<li>value - 目标值</li>
<li>type - 值类型：Float, Vector2, Vector3, Color3</li>
<li>duration - 时长，单位秒</li>
<li>fps - 每秒帧数</li>
<li>easing - 过渡类型</li>
</ul>
</template>
