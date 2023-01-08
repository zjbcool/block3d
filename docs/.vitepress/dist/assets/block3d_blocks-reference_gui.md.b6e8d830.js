import{_ as e,c as l,o as i,a as r}from"./app.a8a600a6.js";const p=JSON.parse('{"title":"界面 GUI","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建全屏UI create_adt_for_fullscreen_ui","slug":"create-adt-for-fullscreen-ui","link":"#create-adt-for-fullscreen-ui","children":[]},{"level":2,"title":"创建网格纹理 create_adt_for_mesh_texture","slug":"create-adt-for-mesh-texture","link":"#create-adt-for-mesh-texture","children":[]},{"level":2,"title":"设置UI图层蒙板 set_ui_layer_mask","slug":"set-ui-layer-mask","link":"#set-ui-layer-mask","children":[]},{"level":2,"title":"获取控件 gui_get_control","slug":"gui-get-control","link":"#gui-get-control","children":[]},{"level":2,"title":"控件属性 gui_control_properties_accessors","slug":"gui-control-properties-accessors","link":"#gui-control-properties-accessors","children":[]},{"level":2,"title":"获取控件子级 gui_get_child_controls","slug":"gui-get-child-controls","link":"#gui-get-child-controls","children":[]},{"level":2,"title":"移动控件 gui_move_control_to_vector","slug":"gui-move-control-to-vector","link":"#gui-move-control-to-vector","children":[]}],"relativePath":"block3d/blocks-reference/gui.md"}'),t={name:"block3d/blocks-reference/gui.md"},o=r('<h1 id="界面-gui" tabindex="-1">界面 GUI <a class="header-anchor" href="#界面-gui" aria-hidden="true">#</a></h1><p>这类拼图用于加载通过GUI编辑器实现的用户界面，并操作界面中的控制器，实现交互。若使用了这类拼图，在发布时注意勾选<code>GUI</code>模块。</p><nav class="table-of-contents"><ul><li><a href="#create-adt-for-fullscreen-ui">创建全屏UI create_adt_for_fullscreen_ui</a></li><li><a href="#create-adt-for-mesh-texture">创建网格纹理 create_adt_for_mesh_texture</a></li><li><a href="#set-ui-layer-mask">设置UI图层蒙板 set_ui_layer_mask</a></li><li><a href="#gui-get-control">获取控件 gui_get_control</a></li><li><a href="#gui-control-properties-accessors">控件属性 gui_control_properties_accessors</a></li><li><a href="#gui-get-child-controls">获取控件子级 gui_get_child_controls</a></li><li><a href="#gui-move-control-to-vector">移动控件 gui_move_control_to_vector</a></li></ul></nav><h2 id="create-adt-for-fullscreen-ui" tabindex="-1">创建全屏UI create_adt_for_fullscreen_ui <a class="header-anchor" href="#create-adt-for-fullscreen-ui" aria-hidden="true">#</a></h2><p>用于从包含UI信息的json文件创建用户界面。json数据可通过<a href="./scenes.html#scene-load-asset">加载资产scene_load_asset</a>拼图以二进制文件方式加载，然后通过<a href="./scenes.html#scene-get-loaded-from-asset">获取加载资产scene_get_loaded_from_asset</a>拼图获取json数据。</p><ul><li>视网膜屏幕 - 用于在视网膜屏幕或高ppi（pixels per inch）屏幕上让UI显示更加清晰</li></ul><h2 id="create-adt-for-mesh-texture" tabindex="-1">创建网格纹理 create_adt_for_mesh_texture <a class="header-anchor" href="#create-adt-for-mesh-texture" aria-hidden="true">#</a></h2><p>以投射模式创建一个新的高级动态纹理（附着在网格上），但不会为网格创建一个新的材质。需手动连接该纹理。</p><p>参数：</p><ul><li>网格 - 要应用纹理的网格</li><li>宽度 - 纹理宽度</li><li>高度 - 纹理高度</li><li>指针移动 - 是否纹理必须捕获指针移动事件</li><li>JSON - 包含纹理信息的json数据</li></ul><h2 id="set-ui-layer-mask" tabindex="-1">设置UI图层蒙板 set_ui_layer_mask <a class="header-anchor" href="#set-ui-layer-mask" aria-hidden="true">#</a></h2><p>定义图层蒙板用于将图层仅限于场景的某些相机。</p><h2 id="gui-get-control" tabindex="-1">获取控件 gui_get_control <a class="header-anchor" href="#gui-get-control" aria-hidden="true">#</a></h2><p>通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。</p><h2 id="gui-control-properties-accessors" tabindex="-1">控件属性 gui_control_properties_accessors <a class="header-anchor" href="#gui-control-properties-accessors" aria-hidden="true">#</a></h2><p>用于设置或获取控件属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。</p><p>属性：</p><ul><li>经过光标hoverCursor - 设置或获取当经过控件时使用的光标</li><li>当指针点击时onPointerClick - 当指针点击时触发事件</li><li>当指针按下时onPointerDown - 当指针按下时触发事件</li><li>当指针移入时onPointerEnter - 当指针移入时触发事件</li><li>当指针移动时onPointerMove - 当指针移动时触发事件</li><li>当指针移出时onPointerOut - 当指针移出时触发事件</li><li>当指针抬起时onPointerUp - 当指针抬起时触发事件</li><li>当滚轮滚动时onWheel - 当滚轮滚动时触发事件</li></ul><p>状态：</p><ul><li>alpha - 设置或获取控件的不透明度（1为不透明；0为完全透明）</li><li>颜色color - 设置或获取前景色</li><li>已勾选isChecked - 设置或获取单选框是否勾选</li><li>已启用isEnabled - 设置或获取控件是否启用</li><li>可点击isHitTestVisible - 设置或获取控件是否可通过指针事件点击</li><li>可显示isVisible - 设置或获取控件是否可见</li><li>阻止指针事件isPointerBlocker - 设置或获取控件是否阻止指针事件</li><li>缩放XscaleX - 设置或获取控件在X轴的缩放比例</li><li>缩放YscaleY - 设置或获取控件在Y轴的缩放比例</li><li>源source - 设置或获取图片地址</li><li>文本text - 设置或获取要显示的文本</li><li>变换中心XtransformCenterX - 设置或获取X轴的变换中心点</li><li>变换中心YtransformCenterY - 设置或获取Y轴的变换中心点</li><li>值value - 设置或获取当前值</li></ul><p>还可以使用<a href="./object.html#object-member">object_member</a>拼图直接控制任何属性。</p><h2 id="gui-get-child-controls" tabindex="-1">获取控件子级 gui_get_child_controls <a class="header-anchor" href="#gui-get-child-controls" aria-hidden="true">#</a></h2><p>该拼图可以根据控制器类型获取某个控制器的子级控制器。</p><h2 id="gui-move-control-to-vector" tabindex="-1">移动控件 gui_move_control_to_vector <a class="header-anchor" href="#gui-move-control-to-vector" aria-hidden="true">#</a></h2><p>使控制器绑定到场景中的某个点。可实现为三维物体添加标签的效果。</p>',25),a=[o];function c(s,n,u,_,d,h){return i(),l("div",null,a)}const f=e(t,[["render",c]]);export{p as __pageData,f as default};