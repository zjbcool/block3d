<template><h1 id="时间-time" tabindex="-1"><a class="header-anchor" href="#时间-time" aria-hidden="true">#</a> 时间 Time</h1>
<p>这类拼图用于控制时间。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#time-after">time_after</RouterLink></li><li><RouterLink to="#time-every-frame">time_every_frame</RouterLink></li><li><RouterLink to="#get-delta-time">get_delta_time</RouterLink></li><li><RouterLink to="#create-timer">create_timer</RouterLink></li><li><RouterLink to="#remove-timer">remove_timer</RouterLink></li></ul></nav>
<h2 id="time-after" tabindex="-1"><a class="header-anchor" href="#time-after" aria-hidden="true">#</a> time_after</h2>
<p>该拼图会在延迟指定时间后，执行<code v-pre>do</code>插槽中的拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/time_after.png" alt="time_after"></p>
<h2 id="time-every-frame" tabindex="-1"><a class="header-anchor" href="#time-every-frame" aria-hidden="true">#</a> time_every_frame</h2>
<p>该拼图会在每一帧渲染时，执行<code v-pre>do</code>插槽中的拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/time_every_frame.png" alt="time_every_frame"></p>
<h2 id="get-delta-time" tabindex="-1"><a class="header-anchor" href="#get-delta-time" aria-hidden="true">#</a> get_delta_time</h2>
<p>获取渲染帧上一帧和一下帧之间的时间长度，单位秒。该拼图用于<code v-pre>time_every_frame</code>拼图，它与速度相乘以实现顺畅的程序动画。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_delta_time.png" alt="get_delta_time"></p>
<h2 id="create-timer" tabindex="-1"><a class="header-anchor" href="#create-timer" aria-hidden="true">#</a> create_timer</h2>
<p>创建一个计时器，用于周期性地执行<code v-pre>do</code>插槽中的拼图。返回值是该计时器的ID，可用于销毁计时器。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_timer.png" alt="create_timer"></p>
<h2 id="remove-timer" tabindex="-1"><a class="header-anchor" href="#remove-timer" aria-hidden="true">#</a> remove_timer</h2>
<p>根据ID销毁计时器。</p>
<p><img src="https://cdn.zjbku.com/blocks/remove_timer.png" alt="remove_timer"></p>
</template>
