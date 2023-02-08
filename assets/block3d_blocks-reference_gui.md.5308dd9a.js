import{_ as o,c as s,b as e,d as t,e as i,a as r,o as a,r as n}from"./app.0267f225.js";const $=JSON.parse('{"title":"界面 GUI","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建全屏UI gui_create_adt_for_fullscreen_ui","slug":"gui-create-adt-for-fullscreen-ui","link":"#gui-create-adt-for-fullscreen-ui","children":[]},{"level":2,"title":"创建全屏UI create_adt_for_fullscreen_ui","slug":"create-adt-for-fullscreen-ui","link":"#create-adt-for-fullscreen-ui","children":[]},{"level":2,"title":"创建网格纹理 create_adt_for_mesh_texture","slug":"create-adt-for-mesh-texture","link":"#create-adt-for-mesh-texture","children":[]},{"level":2,"title":"设置UI图层蒙板 set_ui_layer_mask","slug":"set-ui-layer-mask","link":"#set-ui-layer-mask","children":[]},{"level":2,"title":"销毁全屏UI gui_dispose_fullscreen_ui","slug":"gui-dispose-fullscreen-ui","link":"#gui-dispose-fullscreen-ui","children":[]},{"level":2,"title":"获取控件 gui_get_control_by_name","slug":"gui-get-control-by-name","link":"#gui-get-control-by-name","children":[]},{"level":2,"title":"获取控件 gui_get_control","slug":"gui-get-control","link":"#gui-get-control","children":[]},{"level":2,"title":"控件属性 gui_control_properties_accessors","slug":"gui-control-properties-accessors","link":"#gui-control-properties-accessors","children":[]},{"level":2,"title":"获取控件子级 gui_get_child_controls","slug":"gui-get-child-controls","link":"#gui-get-child-controls","children":[]},{"level":2,"title":"移动控件 gui_move_control_to_vector","slug":"gui-move-control-to-vector","link":"#gui-move-control-to-vector","children":[]}],"relativePath":"block3d/blocks-reference/gui.md"}'),c={name:"block3d/blocks-reference/gui.md"},_=e("h1",{id:"界面-gui",tabindex:"-1"},[t("界面 GUI "),e("a",{class:"header-anchor",href:"#界面-gui","aria-hidden":"true"},"#")],-1),u=e("p",null,[t("这类拼图用于加载通过GUI编辑器实现的用户界面，并操作界面中的控制器，实现交互。若使用了这类拼图，在发布时注意勾选"),e("code",null,"GUI"),t("模块。")],-1),d={class:"table-of-contents"},h=e("li",null,[e("a",{href:"#gui-create-adt-for-fullscreen-ui"},"创建全屏UI gui_create_adt_for_fullscreen_ui")],-1),g={href:"#create-adt-for-fullscreen-ui"},f=e("li",null,[e("a",{href:"#create-adt-for-mesh-texture"},"创建网格纹理 create_adt_for_mesh_texture")],-1),p=e("li",null,[e("a",{href:"#set-ui-layer-mask"},"设置UI图层蒙板 set_ui_layer_mask")],-1),m=e("li",null,[e("a",{href:"#gui-dispose-fullscreen-ui"},"销毁全屏UI gui_dispose_fullscreen_ui")],-1),b=e("li",null,[e("a",{href:"#gui-get-control-by-name"},"获取控件 gui_get_control_by_name")],-1),v={href:"#gui-get-control"},x=e("li",null,[e("a",{href:"#gui-control-properties-accessors"},"控件属性 gui_control_properties_accessors")],-1),I=e("li",null,[e("a",{href:"#gui-get-child-controls"},"获取控件子级 gui_get_child_controls")],-1),k=e("li",null,[e("a",{href:"#gui-move-control-to-vector"},"移动控件 gui_move_control_to_vector")],-1),U=e("h2",{id:"gui-create-adt-for-fullscreen-ui",tabindex:"-1"},[t("创建全屏UI gui_create_adt_for_fullscreen_ui "),e("a",{class:"header-anchor",href:"#gui-create-adt-for-fullscreen-ui","aria-hidden":"true"},"#")],-1),y=e("p",null,[t("用于从包含UI信息的json文件创建用户界面。json数据可通过"),e("a",{href:"./scenes.html#scene-load-asset"},"加载资产scene_load_asset"),t("拼图以二进制文件方式加载，然后通过"),e("a",{href:"./scenes.html#scene-get-loaded-from-asset"},"获取加载资产scene_get_loaded_from_asset"),t("拼图获取json数据。整个场景中只能有一个全屏UI。")],-1),T=e("ul",null,[e("li",null,"视网膜屏幕 - 用于在视网膜屏幕或高ppi（pixels per inch）屏幕上让UI显示更加清晰")],-1),P={id:"create-adt-for-fullscreen-ui",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#create-adt-for-fullscreen-ui","aria-hidden":"true"},"#",-1),C=r('<p>用于从包含UI信息的json文件创建用户界面。json数据可通过<a href="./scenes.html#scene-load-asset">加载资产scene_load_asset</a>拼图以二进制文件方式加载，然后通过<a href="./scenes.html#scene-get-loaded-from-asset">获取加载资产scene_get_loaded_from_asset</a>拼图获取json数据。</p><ul><li>视网膜屏幕 - 用于在视网膜屏幕或高ppi（pixels per inch）屏幕上让UI显示更加清晰</li></ul><h2 id="create-adt-for-mesh-texture" tabindex="-1">创建网格纹理 create_adt_for_mesh_texture <a class="header-anchor" href="#create-adt-for-mesh-texture" aria-hidden="true">#</a></h2><p>以投射模式创建一个新的高级动态纹理（附着在网格上），但不会为网格创建一个新的材质。需手动连接该纹理。</p><p>参数：</p><ul><li>网格 - 要应用纹理的网格</li><li>宽度 - 纹理宽度</li><li>高度 - 纹理高度</li><li>指针移动 - 是否纹理必须捕获指针移动事件</li><li>JSON - 包含纹理信息的json数据</li></ul><h2 id="set-ui-layer-mask" tabindex="-1">设置UI图层蒙板 set_ui_layer_mask <a class="header-anchor" href="#set-ui-layer-mask" aria-hidden="true">#</a></h2><p>定义图层蒙板用于将图层仅限于场景的某些相机。</p><h2 id="gui-dispose-fullscreen-ui" tabindex="-1">销毁全屏UI gui_dispose_fullscreen_ui <a class="header-anchor" href="#gui-dispose-fullscreen-ui" aria-hidden="true">#</a></h2><p>销毁全屏UI。</p><h2 id="gui-get-control-by-name" tabindex="-1">获取控件 gui_get_control_by_name <a class="header-anchor" href="#gui-get-control-by-name" aria-hidden="true">#</a></h2><p>通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。</p><p>该拼图还可用于获取<a href="#create-adt-for-mesh-texture">网格纹理</a>上的控件。点击该拼图齿轮图标打开高级选项，勾选开启网格纹理输入即可支持此功能。</p>',13),V={id:"gui-get-control",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#gui-get-control","aria-hidden":"true"},"#",-1),N=r('<p>通过名称获取UI中的控制器。控制器是用户创建的按钮、滑块等组件。</p><h2 id="gui-control-properties-accessors" tabindex="-1">控件属性 gui_control_properties_accessors <a class="header-anchor" href="#gui-control-properties-accessors" aria-hidden="true">#</a></h2><p>用于设置或获取控件属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为&quot;属性*&quot;。</p><p>属性：</p><ul><li>经过光标hoverCursor - 设置或获取当经过控件时使用的光标</li><li>当指针点击时onPointerClick - 当指针点击时触发事件</li><li>当指针按下时onPointerDown - 当指针按下时触发事件</li><li>当指针移入时onPointerEnter - 当指针移入时触发事件</li><li>当指针移动时onPointerMove - 当指针移动时触发事件</li><li>当指针移出时onPointerOut - 当指针移出时触发事件</li><li>当指针抬起时onPointerUp - 当指针抬起时触发事件</li><li>当滚轮滚动时onWheel - 当滚轮滚动时触发事件</li></ul><p>访问器：</p><ul><li>alpha - 设置或获取控件的不透明度（1为不透明；0为完全透明）</li><li>颜色color - 设置或获取前景色</li><li>已勾选isChecked - 设置或获取单选框是否勾选</li><li>已启用isEnabled - 设置或获取控件是否启用</li><li>可点击isHitTestVisible - 设置或获取控件是否可通过指针事件点击</li><li>可显示isVisible - 设置或获取控件是否可见</li><li>阻止指针事件isPointerBlocker - 设置或获取控件是否阻止指针事件</li><li>缩放XscaleX - 设置或获取控件在X轴的缩放比例</li><li>缩放YscaleY - 设置或获取控件在Y轴的缩放比例</li><li>源source - 设置或获取图片地址</li><li>文本text - 设置或获取要显示的文本</li><li>变换中心XtransformCenterX - 设置或获取X轴的变换中心点</li><li>变换中心YtransformCenterY - 设置或获取Y轴的变换中心点</li><li>值value - 设置或获取当前值</li></ul><p>还可以使用<a href="./object.html#object-member">object_member</a>拼图直接控制任何属性。</p><h2 id="gui-get-child-controls" tabindex="-1">获取控件子级 gui_get_child_controls <a class="header-anchor" href="#gui-get-child-controls" aria-hidden="true">#</a></h2><p>该拼图可以根据控制器类型获取某个控制器的子级控制器。</p><h2 id="gui-move-control-to-vector" tabindex="-1">移动控件 gui_move_control_to_vector <a class="header-anchor" href="#gui-move-control-to-vector" aria-hidden="true">#</a></h2><p>使控制器绑定到场景中的某个点。可实现为三维物体添加标签的效果。</p>',12);function A(B,X,Y,w,E,D){const l=n("Badge");return a(),s("div",null,[_,u,e("nav",d,[e("ul",null,[h,e("li",null,[e("a",g,[t("创建全屏UI create_adt_for_fullscreen_ui "),i(l,{type:"warning",text:"弃用"})])]),f,p,m,b,e("li",null,[e("a",v,[t("获取控件 gui_get_control "),i(l,{type:"warning",text:"弃用"})])]),x,I,k])]),U,y,T,e("h2",P,[t("创建全屏UI create_adt_for_fullscreen_ui "),i(l,{type:"warning",text:"弃用"}),t(),j]),C,e("h2",V,[t("获取控件 gui_get_control "),i(l,{type:"warning",text:"弃用"}),t(),S]),N])}const O=o(c,[["render",A]]);export{$ as __pageData,O as default};
