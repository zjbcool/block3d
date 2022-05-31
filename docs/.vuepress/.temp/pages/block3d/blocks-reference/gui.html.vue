<template><h1 id="界面-gui" tabindex="-1"><a class="header-anchor" href="#界面-gui" aria-hidden="true">#</a> 界面 GUI</h1>
<p>这类拼图用于加载通过GUI编辑器实现的用户界面，并操作界面中的控制器，实现交互。若使用了这类拼图，在发布时注意勾选<code v-pre>GUI</code>模块。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#create-fullscreen-ui">create_fullscreen_UI</RouterLink></li><li><RouterLink to="#gui-get-control">gui_get_control</RouterLink></li><li><RouterLink to="#gui-control-prop">gui_control_prop</RouterLink></li><li><RouterLink to="#gui-get-control-value">gui_get_control_value</RouterLink></li><li><RouterLink to="#gui-get-child-controls">gui_get_child_controls</RouterLink></li><li><RouterLink to="#gui-event">gui_event</RouterLink></li><li><RouterLink to="#gui-move-control-to-vector">gui_move_control_to_vector</RouterLink></li></ul></nav>
<h2 id="create-fullscreen-ui" tabindex="-1"><a class="header-anchor" href="#create-fullscreen-ui" aria-hidden="true">#</a> create_fullscreen_UI</h2>
<p>用于从包含UI信息的json文件创建用户界面。json数据可通过<RouterLink to="/block3d/blocks-reference/scenes.html#scene-load-asset">scene_load_asset</RouterLink>拼图以二进制文件方式加载，然后通过<RouterLink to="/block3d/blocks-reference/scenes.html#scene-get-loaded-from-asset">scene_get_loaded_from_asset</RouterLink>拼图获取json数据。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_fullscreen_UI.png" alt="create_fullscreen_UI"></p>
<h2 id="gui-get-control" tabindex="-1"><a class="header-anchor" href="#gui-get-control" aria-hidden="true">#</a> gui_get_control</h2>
<p>通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_get_control.png" alt="gui_get_control"></p>
<h2 id="gui-control-prop" tabindex="-1"><a class="header-anchor" href="#gui-control-prop" aria-hidden="true">#</a> gui_control_prop</h2>
<p>用于设置或获取控制器属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_control_prop.png" alt="gui_control_prop"></p>
<p>常用属性：</p>
<ul>
<li>alpha - 不透明度</li>
<li>isEnabled - 是否开启</li>
<li>isVisible - 是否显示</li>
<li>isPointerBlocker - 是否阻止指针事件</li>
<li>scaleX - X缩放</li>
<li>scaleY - Y缩放</li>
</ul>
<p>你可以使用<RouterLink to="/block3d/blocks-reference/object.html#object-member">object_member</RouterLink>拼图直接控制任何属性。</p>
<h2 id="gui-get-control-value" tabindex="-1"><a class="header-anchor" href="#gui-get-control-value" aria-hidden="true">#</a> gui_get_control_value</h2>
<p>获取控制器的值。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_get_control_value.png" alt="gui_get_control_value"></p>
<h2 id="gui-get-child-controls" tabindex="-1"><a class="header-anchor" href="#gui-get-child-controls" aria-hidden="true">#</a> gui_get_child_controls</h2>
<p>该拼图可以根据控制器类型获取某个控制器的子级控制器。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_get_child_controls.png" alt="gui_get_child_controls"></p>
<h2 id="gui-event" tabindex="-1"><a class="header-anchor" href="#gui-event" aria-hidden="true">#</a> gui_event</h2>
<p>UI事件。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_event.png" alt="gui_event"></p>
<p>事件类型：</p>
<ul>
<li>pointerClick - 单击</li>
<li>pointerDown - 按下</li>
<li>pointerEnter - 进移入</li>
<li>pointerMove - 移动</li>
<li>pointerOut - 移出</li>
<li>pointerUp - 抬起</li>
<li>textChanged - 文本改变</li>
<li>valueChanged - 值改变</li>
<li>wheel - 滚轮</li>
</ul>
<h2 id="gui-move-control-to-vector" tabindex="-1"><a class="header-anchor" href="#gui-move-control-to-vector" aria-hidden="true">#</a> gui_move_control_to_vector</h2>
<p>使控制器绑定到场景中的某个点。可实现为三维物体添加标签的效果。</p>
<p><img src="https://cdn.zjbku.com/blocks/gui_move_control_to_vector.png" alt="gui_move_control_to_vector"></p>
</template>
