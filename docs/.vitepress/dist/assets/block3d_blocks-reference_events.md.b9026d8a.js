import{_ as e,c as i,o as t,a}from"./app.4d7dcf0a.js";const p=JSON.parse('{"title":"事件 Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"创建事件 create_custom_event","slug":"create-custom-event","link":"#create-custom-event","children":[]},{"level":3,"title":"触发事件 dispatch_custom_event","slug":"dispatch-custom-event","link":"#dispatch-custom-event","children":[]},{"level":3,"title":"监听事件 listen_custom_event","slug":"listen-custom-event","link":"#listen-custom-event","children":[]},{"level":3,"title":"监听指针事件 listen_pointer_event","slug":"listen-pointer-event","link":"#listen-pointer-event","children":[]},{"level":3,"title":"点击信息 picking_info","slug":"picking-info","link":"#picking-info","children":[]},{"level":3,"title":"获取法线 get_normal_from_picking_info","slug":"get-normal-from-picking-info","link":"#get-normal-from-picking-info","children":[]},{"level":3,"title":"监听键盘事件 listen_keyboard_event","slug":"listen-keyboard-event","link":"#listen-keyboard-event","children":[]},{"level":3,"title":"获取键 get_key_input","slug":"get-key-input","link":"#get-key-input","children":[]},{"level":3,"title":"监听场景事件 listen_scene_event","slug":"listen-scene-event","link":"#listen-scene-event","children":[]}]},{"level":2,"title":"动作","slug":"动作","link":"#动作","children":[{"level":3,"title":"创建动作 event_create_action","slug":"event-create-action","link":"#event-create-action","children":[]},{"level":3,"title":"添加动作 event_add_actions","slug":"event-add-actions","link":"#event-add-actions","children":[]}]},{"level":2,"title":"帧","slug":"帧","link":"#帧","children":[{"level":3,"title":"多帧 event_multi_frame","slug":"event-multi-frame","link":"#event-multi-frame","children":[]},{"level":3,"title":"下一帧 event_next_frame","slug":"event-next-frame","link":"#event-next-frame","children":[]},{"level":3,"title":"等待 event_await_delay","slug":"event-await-delay","link":"#event-await-delay","children":[]}]},{"level":2,"title":"射线","slug":"射线","link":"#射线","children":[{"level":3,"title":"创建射线 create_ray","slug":"create-ray","link":"#create-ray","children":[]},{"level":3,"title":"射线相交网格 ray_intersects_mesh","slug":"ray-intersects-mesh","link":"#ray-intersects-mesh","children":[]}]}],"relativePath":"block3d/blocks-reference/events.md"}'),n={name:"block3d/blocks-reference/events.md"},l=a('<h1 id="事件-events" tabindex="-1">事件 Events <a class="header-anchor" href="#事件-events" aria-hidden="true">#</a></h1><p>这类拼图提供了指针、键盘事件，以及自定义事件和射线，用于处理各种设备下的交互。</p><nav class="table-of-contents"><ul><li><a href="#事件">事件</a><ul><li><a href="#create-custom-event">创建事件 create_custom_event</a></li><li><a href="#dispatch-custom-event">触发事件 dispatch_custom_event</a></li><li><a href="#listen-custom-event">监听事件 listen_custom_event</a></li><li><a href="#listen-pointer-event">监听指针事件 listen_pointer_event</a></li><li><a href="#picking-info">点击信息 picking_info</a></li><li><a href="#get-normal-from-picking-info">获取法线 get_normal_from_picking_info</a></li><li><a href="#listen-keyboard-event">监听键盘事件 listen_keyboard_event</a></li><li><a href="#get-key-input">获取键 get_key_input</a></li><li><a href="#listen-scene-event">监听场景事件 listen_scene_event</a></li></ul></li><li><a href="#动作">动作</a><ul><li><a href="#event-create-action">创建动作 event_create_action</a></li><li><a href="#event-add-actions">添加动作 event_add_actions</a></li></ul></li><li><a href="#帧">帧</a><ul><li><a href="#event-multi-frame">多帧 event_multi_frame</a></li><li><a href="#event-next-frame">下一帧 event_next_frame</a></li><li><a href="#event-await-delay">等待 event_await_delay</a></li></ul></li><li><a href="#射线">射线</a><ul><li><a href="#create-ray">创建射线 create_ray</a></li><li><a href="#ray-intersects-mesh">射线相交网格 ray_intersects_mesh</a></li></ul></li></ul></nav><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><h3 id="create-custom-event" tabindex="-1">创建事件 create_custom_event <a class="header-anchor" href="#create-custom-event" aria-hidden="true">#</a></h3><p>创建一个事件。事件分3部分：事件、触发事件和监听事件。</p><h3 id="dispatch-custom-event" tabindex="-1">触发事件 dispatch_custom_event <a class="header-anchor" href="#dispatch-custom-event" aria-hidden="true">#</a></h3><p>向事件的监听者发出通知。</p><p><code>数据</code>参数通过接收一个对象，可以在派发事件时携带参数。</p><h3 id="listen-custom-event" tabindex="-1">监听事件 listen_custom_event <a class="header-anchor" href="#listen-custom-event" aria-hidden="true">#</a></h3><p>当事件触发时执行<code>执行</code>插槽中的拼图。</p><h3 id="listen-pointer-event" tabindex="-1">监听指针事件 listen_pointer_event <a class="header-anchor" href="#listen-pointer-event" aria-hidden="true">#</a></h3><p>用于监听指针事件。</p><p>参数<code>忽略背面</code>，勾选表示忽略网格背面。</p><p>事件类型：</p><ul><li>指针双击</li><li>指针按下</li><li>指针移动</li><li>指针单击</li><li>指针轻击</li><li>指针抬起</li><li>指针滚动</li></ul><h3 id="picking-info" tabindex="-1">点击信息 picking_info <a class="header-anchor" href="#picking-info" aria-hidden="true">#</a></h3><p>返回拾取信息，用于<a href="#pointer-event">pointer_event</a>拼图和<a href="#ray-intersects-mesh">ray_intersects_mesh</a>拼图（通过这两个拼图的右键菜单<code>创建 点击信息</code>可快速创建<code>picking_info</code>拼图）。</p><p>参数：</p><ul><li>点击信息</li><li>点击的网格</li><li>点击的位置</li><li>点击的法线</li></ul><h3 id="get-normal-from-picking-info" tabindex="-1">获取法线 get_normal_from_picking_info <a class="header-anchor" href="#get-normal-from-picking-info" aria-hidden="true">#</a></h3><p>获取点击击中的面的法线。注意，返回的法线始终朝向拾取射线。</p><ul><li>世界坐标 - 生成的法线是否使用世界坐标</li><li>顶点法线 - 是否使用顶点法线，而非法线贴图来计算法线</li><li>点击信息 - 点击事件信息</li></ul><h3 id="listen-keyboard-event" tabindex="-1">监听键盘事件 listen_keyboard_event <a class="header-anchor" href="#listen-keyboard-event" aria-hidden="true">#</a></h3><p>用于监听键盘的按下和抬起事件。参数<code>重复</code>勾选时表示当一直按住键盘时，重复触发键盘事件；否则，只触发一次键盘事件。</p><h3 id="get-key-input" tabindex="-1">获取键 get_key_input <a class="header-anchor" href="#get-key-input" aria-hidden="true">#</a></h3><p>用于返回键盘按键和按键代码。</p><h3 id="listen-scene-event" tabindex="-1">监听场景事件 listen_scene_event <a class="header-anchor" href="#listen-scene-event" aria-hidden="true">#</a></h3><p>监听场景事件。包括：</p><ul><li>场景渲染前 - 在场景渲染前触发此事件（紧跟在动画和物理之后），用于代替<code>每帧time_every_frame</code>拼图</li><li>场景就绪 - 当场景就绪时触发此事件</li></ul><h2 id="动作" tabindex="-1">动作 <a class="header-anchor" href="#动作" aria-hidden="true">#</a></h2><h3 id="event-create-action" tabindex="-1">创建动作 event_create_action <a class="header-anchor" href="#event-create-action" aria-hidden="true">#</a></h3><p>用于创建动作。动作是应用到网格，通过事件触发的行为。</p><p>动作的类型：</p><ul><li>无</li><li>设置值</li><li>切换布尔</li><li>插值</li><li>递增值</li><li>执行函数</li><li>合并</li></ul><p>事件类型：</p><ul><li>无</li><li>当点击</li><li>当双击</li><li>当点击按下</li><li>当点击抬起</li><li>当点击移出</li><li>当左键单击</li><li>当右键单击</li><li>当中键单击</li><li>当长按</li><li>当指针经过</li><li>当指针移出</li><li>当相交进入</li><li>当相交退出</li></ul><h3 id="event-add-actions" tabindex="-1">添加动作 event_add_actions <a class="header-anchor" href="#event-add-actions" aria-hidden="true">#</a></h3><p>将动作指定给网格。</p><p><code>动作</code>参数接收一个包含动作的数组。</p><h2 id="帧" tabindex="-1">帧 <a class="header-anchor" href="#帧" aria-hidden="true">#</a></h2><h3 id="event-multi-frame" tabindex="-1">多帧 event_multi_frame <a class="header-anchor" href="#event-multi-frame" aria-hidden="true">#</a></h3><p>用于处理跨帧逻辑。</p><h3 id="event-next-frame" tabindex="-1">下一帧 event_next_frame <a class="header-anchor" href="#event-next-frame" aria-hidden="true">#</a></h3><p>跳到下一渲染帧。仅用于多帧拼图内部。</p><h3 id="event-await-delay" tabindex="-1">等待 event_await_delay <a class="header-anchor" href="#event-await-delay" aria-hidden="true">#</a></h3><p>等待一段时间。仅用于多帧拼图内部。</p><h2 id="射线" tabindex="-1">射线 <a class="header-anchor" href="#射线" aria-hidden="true">#</a></h2><h3 id="create-ray" tabindex="-1">创建射线 create_ray <a class="header-anchor" href="#create-ray" aria-hidden="true">#</a></h3><p>创建射线。射线是一条从场景中某点发出的有长度的虚拟射线。通常用于拾取网格。</p><h3 id="ray-intersects-mesh" tabindex="-1">射线相交网格 ray_intersects_mesh <a class="header-anchor" href="#ray-intersects-mesh" aria-hidden="true">#</a></h3><p>检测射线与网格（或一组网格）是否相交，若相交执行<code>完成</code>插槽中的拼图。交点信息可通过<a href="#picking-info">picking_info</a>拼图获取。</p>',52),r=[l];function c(s,d,h,o,_,v){return t(),i("div",null,r)}const f=e(n,[["render",c]]);export{p as __pageData,f as default};
