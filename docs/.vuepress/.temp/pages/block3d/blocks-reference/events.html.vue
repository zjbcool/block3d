<template><h1 id="事件-events" tabindex="-1"><a class="header-anchor" href="#事件-events" aria-hidden="true">#</a> 事件 Events</h1>
<p>这类拼图提供了指针、键盘事件，以及自定义事件和射线，用于处理各种设备下的交互。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#pointer-event">pointer_event</RouterLink></li><li><RouterLink to="#picking-info">picking_info</RouterLink></li><li><RouterLink to="#keyboard-event">keyboard_event</RouterLink></li><li><RouterLink to="#get-key-input">get_key_input</RouterLink></li><li><RouterLink to="#event-create-action">event_create_action</RouterLink></li><li><RouterLink to="#event-add-actions">event_add_actions</RouterLink></li><li><RouterLink to="#create-custom-event">create_custom_event</RouterLink></li><li><RouterLink to="#dispatch-custom-event">dispatch_custom_event</RouterLink></li><li><RouterLink to="#add-custom-event-listener">add_custom_event_listener</RouterLink></li><li><RouterLink to="#create-ray">create_ray</RouterLink></li><li><RouterLink to="#ray-intersects-mesh">ray_intersects_mesh</RouterLink></li></ul></nav>
<h2 id="pointer-event" tabindex="-1"><a class="header-anchor" href="#pointer-event" aria-hidden="true">#</a> pointer_event</h2>
<p>指针事件。Block3D中的事件同时兼容PC设备和移动设备。</p>
<p><img src="https://cdn.zjbku.com/blocks/pointer_event.png" alt="pointer_event"></p>
<p>参数<code v-pre>ignorBackface</code>，勾选表示忽略网格背面。</p>
<p>事件类型：</p>
<ul>
<li>pointerdoubletap - 双击事件</li>
<li>pointerdown - 按下事件</li>
<li>pointermove - 移动事件</li>
<li>pointerpick - 单击事件</li>
<li>pointertap - 触摸事件</li>
<li>pointerup - 抬起事件</li>
<li>pointerwheel - 滚轮事件</li>
</ul>
<h2 id="picking-info" tabindex="-1"><a class="header-anchor" href="#picking-info" aria-hidden="true">#</a> picking_info</h2>
<p>返回拾取信息，用于<a href="#pointer-event">pointer_event</a>拼图和<a href="#ray-intersects-mesh">ray_intersects_mesh</a>拼图（通过这两个拼图的右键菜单<code v-pre>创建 picked</code>可快速创建<code v-pre>picking_info</code>拼图）。</p>
<p><img src="https://cdn.zjbku.com/blocks/picking_info.png" alt="picking_info"></p>
<p>参数：</p>
<ul>
<li>mesh - 拾取的网格</li>
<li>point - 点击位置的坐标</li>
<li>normal - 点击平面的法线</li>
</ul>
<h2 id="keyboard-event" tabindex="-1"><a class="header-anchor" href="#keyboard-event" aria-hidden="true">#</a> keyboard_event</h2>
<p>键盘事件。分类按下和抬起两种类型。参数<code v-pre>repeat</code>勾选时表示当一直按住键盘时，重复触发键盘事件；否则，只触发一次键盘事件。</p>
<p><img src="https://cdn.zjbku.com/blocks/keyboard_event.png" alt="keyboard_event"></p>
<h2 id="get-key-input" tabindex="-1"><a class="header-anchor" href="#get-key-input" aria-hidden="true">#</a> get_key_input</h2>
<p>用于返回键盘按键和按键代码。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_key_input.png" alt="get_key_input"></p>
<h2 id="event-create-action" tabindex="-1"><a class="header-anchor" href="#event-create-action" aria-hidden="true">#</a> event_create_action</h2>
<p>用于创建动作。动作是应用到网格，通过事件触发的行为。</p>
<p><img src="https://cdn.zjbku.com/blocks/event_create_action.png" alt="event_create_action"></p>
<p>动作的类型：</p>
<ul>
<li>doNothing - 无</li>
<li>setValue - 设置值</li>
<li>switchBoolean - 布尔切换</li>
<li>interpolateValue - 插值</li>
<li>incrementValue - 递增</li>
<li>executeCode - 执行代码</li>
<li>combine - 合并动作</li>
</ul>
<p>事件类型：</p>
<ul>
<li>nothing - 无</li>
<li>onPick - 点击事件</li>
<li>onDoublePick - 双击事件</li>
<li>onPickDown - 指针按下事件</li>
<li>onPickUp - 指针抬起事件</li>
<li>onPickOut - 按住，然后移出</li>
<li>onLeftPick - 鼠标左键点击</li>
<li>onRightPick - 鼠标右键点击</li>
<li>onCenterPick - 鼠标中键点击</li>
<li>onLongPress - 长按</li>
<li>onPointerOver - 指针经过事件</li>
<li>onPointerOut - 指针移出事件</li>
<li>onIntersectionEnter - 网格相交开始</li>
<li>onIntersectionExit - 网格相交结束</li>
</ul>
<h2 id="event-add-actions" tabindex="-1"><a class="header-anchor" href="#event-add-actions" aria-hidden="true">#</a> event_add_actions</h2>
<p>将动作指定给网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/event_add_actions.png" alt="event_add_actions"></p>
<p><code v-pre>actions</code>参数接收一个包含动作的数组。</p>
<h2 id="create-custom-event" tabindex="-1"><a class="header-anchor" href="#create-custom-event" aria-hidden="true">#</a> create_custom_event</h2>
<p>创建自定义事件。事件分3部分：事件、派发事件和监听事件。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_custom_event.png" alt="create_custom_event"></p>
<h2 id="dispatch-custom-event" tabindex="-1"><a class="header-anchor" href="#dispatch-custom-event" aria-hidden="true">#</a> dispatch_custom_event</h2>
<p>派发事件。向事件的监听者发出通知。</p>
<p><img src="https://cdn.zjbku.com/blocks/dispatch_custom_event.png" alt="dispatch_custom_event"></p>
<p><code v-pre>data</code>参数通过接收一个对象，可以在派发事件时携带参数。</p>
<h2 id="add-custom-event-listener" tabindex="-1"><a class="header-anchor" href="#add-custom-event-listener" aria-hidden="true">#</a> add_custom_event_listener</h2>
<p>监听事件。当事件触发时执行<code v-pre>do</code>插槽中的拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/add_custom_event_listener.png" alt="add_custom_event_listener"></p>
<h2 id="create-ray" tabindex="-1"><a class="header-anchor" href="#create-ray" aria-hidden="true">#</a> create_ray</h2>
<p>创建射线。射线是一条从场景中某点发出的有长度的虚拟射线。通常用于拾取网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_ray.png" alt="create_ray"></p>
<h2 id="ray-intersects-mesh" tabindex="-1"><a class="header-anchor" href="#ray-intersects-mesh" aria-hidden="true">#</a> ray_intersects_mesh</h2>
<p>检测射线与网格（或一组网格）是否相交，若相交执行<code v-pre>do</code>插槽中的拼图。交点信息可通过<a href="#picking-info">picking_info</a>拼图获取。</p>
<p><img src="https://cdn.zjbku.com/blocks/ray_intersects_mesh.png" alt="ray_intersects_mesh"></p>
</template>
