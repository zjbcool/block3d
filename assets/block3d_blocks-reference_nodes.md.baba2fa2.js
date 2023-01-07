import{_ as e,c as a,o as l,a as n}from"./app.a8a600a6.js";const p=JSON.parse('{"title":"节点 Nodes","description":"","frontmatter":{},"headers":[{"level":2,"title":"节点","slug":"节点","link":"#节点","children":[{"level":3,"title":"网格选择器 mesh_selector","slug":"mesh-selector","link":"#mesh-selector","children":[]},{"level":3,"title":"相机选择器 camera_selector","slug":"camera-selector","link":"#camera-selector","children":[]},{"level":3,"title":"灯光选择器 light_selector","slug":"light-selector","link":"#light-selector","children":[]},{"level":3,"title":"获取节点 get_node_by_name","slug":"get-node-by_name","link":"#get-node-by_name","children":[]},{"level":3,"title":"获取所有节点 node_get_all","slug":"node-get-all","link":"#node-get-all","children":[]},{"level":3,"title":"创建变换节点 create_transform_node","slug":"create-transform-node","link":"#create-transform-node","children":[]}]},{"level":2,"title":"关系","slug":"关系","link":"#关系","children":[{"level":3,"title":"父级 node_parent","slug":"node-parent","link":"#node-parent","children":[]},{"level":3,"title":"获取子级 node_get_children","slug":"node-get-children","link":"#node-get-children","children":[]},{"level":3,"title":"是否从属 node_is_child_of","slug":"node-is-child-of","link":"#node-is-child-of","children":[]}]},{"level":2,"title":"启用","slug":"启用","link":"#启用","children":[{"level":3,"title":"设置启用 node_set_enabled","slug":"node-set-enabled","link":"#node-set-enabled","children":[]}]}],"relativePath":"block3d/blocks-reference/nodes.md"}'),r={name:"block3d/blocks-reference/nodes.md"},d=n('<h1 id="节点-nodes" tabindex="-1">节点 Nodes <a class="header-anchor" href="#节点-nodes" aria-hidden="true">#</a></h1><p>Block3D中的网格、相机、灯光都属于节点，它们有一些共同的属性和方法。</p><nav class="table-of-contents"><ul><li><a href="#节点">节点</a><ul><li><a href="#mesh-selector">网格选择器 mesh_selector</a></li><li><a href="#camera-selector">相机选择器 camera_selector</a></li><li><a href="#light-selector">灯光选择器 light_selector</a></li><li><a href="#get-node-by_name">获取节点 get_node_by_name</a></li><li><a href="#node-get-all">获取所有节点 node_get_all</a></li><li><a href="#create-transform-node">创建变换节点 create_transform_node</a></li></ul></li><li><a href="#关系">关系</a><ul><li><a href="#node-parent">父级 node_parent</a></li><li><a href="#node-get-children">获取子级 node_get_children</a></li><li><a href="#node-is-child-of">是否从属 node_is_child_of</a></li></ul></li><li><a href="#启用">启用</a><ul><li><a href="#node-set-enabled">设置启用 node_set_enabled</a></li></ul></li></ul></nav><h2 id="节点" tabindex="-1">节点 <a class="header-anchor" href="#节点" aria-hidden="true">#</a></h2><h3 id="mesh-selector" tabindex="-1">网格选择器 mesh_selector <a class="header-anchor" href="#mesh-selector" aria-hidden="true">#</a></h3><p>网格选择器，用于根据名称获取网格。</p><h3 id="camera-selector" tabindex="-1">相机选择器 camera_selector <a class="header-anchor" href="#camera-selector" aria-hidden="true">#</a></h3><p>相机选择器，用于根据名称获取相机。</p><h3 id="light-selector" tabindex="-1">灯光选择器 light_selector <a class="header-anchor" href="#light-selector" aria-hidden="true">#</a></h3><p>灯光选择器，用于根据名称获取灯光。</p><h3 id="get-node-by_name" tabindex="-1">获取节点 get_node_by_name <a class="header-anchor" href="#get-node-by_name" aria-hidden="true">#</a></h3><p>根据名称获取节点（网格、相机、灯光）。</p><h3 id="node-get-all" tabindex="-1">获取所有节点 node_get_all <a class="header-anchor" href="#node-get-all" aria-hidden="true">#</a></h3><p>获取场景中所有指定类型的节点。</p><h3 id="create-transform-node" tabindex="-1">创建变换节点 create_transform_node <a class="header-anchor" href="#create-transform-node" aria-hidden="true">#</a></h3><p>创建一个不会被渲染出来的变换节点。把它作为其它物体的父级，可以控制这个物体的变换轴心。</p><h2 id="关系" tabindex="-1">关系 <a class="header-anchor" href="#关系" aria-hidden="true">#</a></h2><h3 id="node-parent" tabindex="-1">父级 node_parent <a class="header-anchor" href="#node-parent" aria-hidden="true">#</a></h3><p>设置或获取节点的父级。注意，该拼图不会保持子级在当前场景中的位置。父级为<code>null</code>表示解除父级。</p><h3 id="node-get-children" tabindex="-1">获取子级 node_get_children <a class="header-anchor" href="#node-get-children" aria-hidden="true">#</a></h3><p>获取节点的子级。</p><p>参数：</p><ul><li>子网格 - 该节点下所有层级中的所有网格节点</li><li>直接子级 - 该节点下直接子级的所有节点</li><li>所有子级 - 该节点下所有层级的所有节点</li></ul><h3 id="node-is-child-of" tabindex="-1">是否从属 node_is_child_of <a class="header-anchor" href="#node-is-child-of" aria-hidden="true">#</a></h3><p>判断节点A是否为节点B的子级。判断会递归直到找到父级或到达顶层父级。</p><h2 id="启用" tabindex="-1">启用 <a class="header-anchor" href="#启用" aria-hidden="true">#</a></h2><h3 id="node-set-enabled" tabindex="-1">设置启用 node_set_enabled <a class="header-anchor" href="#node-set-enabled" aria-hidden="true">#</a></h3><p>设置节点是否可用（可渲染）。</p>',28),t=[d];function i(o,h,s,c,_,f){return l(),a("div",null,t)}const u=e(r,[["render",i]]);export{p as __pageData,u as default};
