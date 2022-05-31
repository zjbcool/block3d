<template><h1 id="节点-nodes" tabindex="-1"><a class="header-anchor" href="#节点-nodes" aria-hidden="true">#</a> 节点 Nodes</h1>
<p>Block3D中的网格、相机、灯光都属于节点，它们有一些共同的属性和方法。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#mesh-selector">mesh_selector</RouterLink></li><li><RouterLink to="#camera-selector">camera_selector</RouterLink></li><li><RouterLink to="#light-selector">light_selector</RouterLink></li><li><RouterLink to="#create-transform-node">create_transform_node</RouterLink></li><li><RouterLink to="#node-get-all">node_get_all</RouterLink></li><li><RouterLink to="#node-get-children">node_get_children</RouterLink></li><li><RouterLink to="#node-parent">node_parent</RouterLink></li><li><RouterLink to="#node-is-child-of">node_is_child_of</RouterLink></li><li><RouterLink to="#node-set-enabled">node_set_enabled</RouterLink></li></ul></nav>
<h2 id="mesh-selector" tabindex="-1"><a class="header-anchor" href="#mesh-selector" aria-hidden="true">#</a> mesh_selector</h2>
<p>网格选择器，用于根据名称获取网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_selector.png" alt="mesh_selector"></p>
<h2 id="camera-selector" tabindex="-1"><a class="header-anchor" href="#camera-selector" aria-hidden="true">#</a> camera_selector</h2>
<p>相机选择器，用于根据名称获取相机。</p>
<p><img src="https://cdn.zjbku.com/blocks/camera_selector.png" alt="camera_selector"></p>
<h2 id="light-selector" tabindex="-1"><a class="header-anchor" href="#light-selector" aria-hidden="true">#</a> light_selector</h2>
<p>灯光选择器，用于根据名称获取灯光。</p>
<p><img src="https://cdn.zjbku.com/blocks/light_selector.png" alt="light_selector"></p>
<h2 id="create-transform-node" tabindex="-1"><a class="header-anchor" href="#create-transform-node" aria-hidden="true">#</a> create_transform_node</h2>
<p>创建一个不会被渲染出来的变换节点。把它作为其它物体的父级，可以控制这个物体的变换轴心。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_transform_node.png" alt="create_transform_node"></p>
<h2 id="node-get-all" tabindex="-1"><a class="header-anchor" href="#node-get-all" aria-hidden="true">#</a> node_get_all</h2>
<p>获取场景中所有指定类型的节点。</p>
<p><img src="https://cdn.zjbku.com/blocks/node_get_all.png" alt="node_get_all"></p>
<h2 id="node-get-children" tabindex="-1"><a class="header-anchor" href="#node-get-children" aria-hidden="true">#</a> node_get_children</h2>
<p>获取节点的子级。</p>
<p><img src="https://cdn.zjbku.com/blocks/node_get_children.png" alt="node_get_children"></p>
<p>参数：</p>
<ul>
<li>childMeshes - 该节点下所有层级中的所有网格节点</li>
<li>directChildren - 该节点下直接子级的所有节点</li>
<li>allChildren - 该节点下所有层级的所有节点</li>
</ul>
<h2 id="node-parent" tabindex="-1"><a class="header-anchor" href="#node-parent" aria-hidden="true">#</a> node_parent</h2>
<p>设置或获取节点的父级。注意，该拼图不会保持子级在当前场景中的位置。父级为<code v-pre>null</code>表示解除父级。</p>
<p><img src="https://cdn.zjbku.com/blocks/node_parent.png" alt="node_parent"></p>
<h2 id="node-is-child-of" tabindex="-1"><a class="header-anchor" href="#node-is-child-of" aria-hidden="true">#</a> node_is_child_of</h2>
<p>判断节点A是否为节点B的子级。判断会递归直到找到父级或到达顶层父级。</p>
<p><img src="https://cdn.zjbku.com/blocks/node_is_child_of.png" alt="node_is_child_of"></p>
<h2 id="node-set-enabled" tabindex="-1"><a class="header-anchor" href="#node-set-enabled" aria-hidden="true">#</a> node_set_enabled</h2>
<p>设置节点是否可用（可渲染）。</p>
<p><img src="https://cdn.zjbku.com/blocks/node_set_enabled.png" alt="node_set_enabled"></p>
</template>
