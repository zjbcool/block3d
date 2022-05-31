<template><h1 id="动画和事件" tabindex="-1"><a class="header-anchor" href="#动画和事件" aria-hidden="true">#</a> 动画和事件</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#动画">动画</RouterLink></li><li><RouterLink to="#事件">事件</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<p>在前面的教程中，我们导入了几段动画，现在我们来获取和控制这些动画。</p>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<p>在Block3D中这些动画片段被称为“动画组”AnimationGroup，在场景查看器的<code v-pre>Animation groups</code>下面可以看到所有导入的动画组。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event.jpg" alt="anim-event"></p>
<p>使用动画分类下的<code v-pre>get_animaiton_group_by_name</code>拼图可以获取这些动画组。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-1.png" alt="anim-event-1"></p>
<p>使用动画分类下的<code v-pre>animation_group_playback</code>拼图，可以控制动画组的播放。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-2.png" alt="anim-event-2"></p>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<p>下面我们事件分类下的键盘<code v-pre>keyboard_event</code>事件，来控制动画组的播放。</p>
<p>通过下面的方法，可以在浏览器的控制台（快捷键F12）看到按下的按键名称。<code v-pre>console_log</code>拼图在系统分类下，用于在控制台输出信息，多用于调试。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-3.png" alt="anim-event-3"></p>
<p>使用逻辑分类下的<code v-pre>controls_if</code>拼图和<code v-pre>logic_compare</code>拼图，判断用户按下的是哪一个按键。如果按下<code v-pre>w</code>，则播放跑步动画。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-4.png" alt="anim-event-4"></p>
<p>相反，如果抬起<code v-pre>w</code>，则停止跑步动画，播放等待动画。</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-5.png" alt="anim-event-5"></p>
<p>效果：</p>
<p><img src="https://cdn.zjbku.com/start/anim-event-6.gif" alt="anim-event-6"></p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>以上走马观花地对Block3D的主要模块做了介绍，教程到这里接近尾声。最后，介绍一下如何最终将所有工作发布为可以在网络上传播的Web3D应用。</p>
</template>
