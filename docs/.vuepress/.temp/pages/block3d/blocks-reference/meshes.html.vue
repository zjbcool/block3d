<template><h1 id="网格-meshes" tabindex="-1"><a class="header-anchor" href="#网格-meshes" aria-hidden="true">#</a> 网格 Meshes</h1>
<p>该分类包含创建和操作网格的方法。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#mesh-create-set-shapes">mesh_create_set_shapes</RouterLink></li><li><RouterLink to="#mesh-create-decal">mesh_create_decal</RouterLink></li><li><RouterLink to="#set-get-mesh-prop">set_get_mesh_prop</RouterLink></li><li><RouterLink to="#set-get-mesh-transform">set_get_mesh_transform</RouterLink></li><li><RouterLink to="#translate-mesh">translate_mesh</RouterLink></li><li><RouterLink to="#rotate-mesh">rotate_mesh</RouterLink></li><li><RouterLink to="#rotate-mesh-pov">rotate_mesh_pov</RouterLink></li><li><RouterLink to="#set-mesh-direction">set_mesh_direction</RouterLink></li><li><RouterLink to="#mesh-look-at">mesh_look_at</RouterLink></li><li><RouterLink to="#remove-mesh">remove_mesh</RouterLink></li><li><RouterLink to="#mesh-set-parent">mesh_set_parent</RouterLink></li><li><RouterLink to="#clone-mesh">clone_mesh</RouterLink></li><li><RouterLink to="#mesh-create-instance">mesh_create_instance</RouterLink></li><li><RouterLink to="#drag-mesh">drag_mesh</RouterLink></li><li><RouterLink to="#check-point-behind-mesh">check_point_behind_mesh</RouterLink></li><li><RouterLink to="#check-intersects-mesh">check_intersects_mesh</RouterLink></li><li><RouterLink to="#check-intersects-point">check_intersects_point</RouterLink></li><li><RouterLink to="#mesh-add-lod-level">mesh_add_lod_level</RouterLink></li><li><RouterLink to="#mesh-auto-lod">mesh_auto_lod</RouterLink></li><li><RouterLink to="#mesh-render-edges">mesh_render_edges</RouterLink></li></ul></nav>
<h2 id="mesh-create-set-shapes" tabindex="-1"><a class="header-anchor" href="#mesh-create-set-shapes" aria-hidden="true">#</a> mesh_create_set_shapes</h2>
<p>该拼图用于创建基本的几何体网格，包括：立方体、球体、圆柱体、平面，以及直线等等。创建出来的网格会有一个默认的PBR材质。使用该拼图可以帮你快速搭建场景，实现想法。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_create_set_shapes.png" alt="mesh_create_set_shapes"></p>
<p><code v-pre>name</code>参数可以帮助你在场景查看器中快速找到网格。</p>
<p><code v-pre>options</code>接收一个对象类型的参数，用于控制网格的属性，这些属性根据网格类型而不尽相同。你可以通过在该拼图的右键菜单中执行<code v-pre>创建 option</code>获取属性拼图。</p>
<h2 id="mesh-create-decal" tabindex="-1"><a class="header-anchor" href="#mesh-create-decal" aria-hidden="true">#</a> mesh_create_decal</h2>
<p>创建贴花。可以实现第一人称射击游戏中的弹孔、喷漆效果。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_create_decal.png" alt="mesh_create_decal"></p>
<p>参数：</p>
<ul>
<li>name - 名称</li>
<li>sourceMesh - 目标网格</li>
<li>textureUrl - 贴花图案路径</li>
<li>options - 对象参数
<ul>
<li>position - 生成的贴花网格的位置</li>
<li>normal - 贴花网格的法线方向</li>
<li>size - 贴花网格的大小</li>
<li>angle - 贴花网格的角度</li>
</ul>
</li>
</ul>
<h2 id="set-get-mesh-prop" tabindex="-1"><a class="header-anchor" href="#set-get-mesh-prop" aria-hidden="true">#</a> set_get_mesh_prop</h2>
<p>用于设置或获取网格属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_mesh_prop.png" alt="set_get_mesh_prop"></p>
<p>常用属性：</p>
<ul>
<li>checkCollisions - 是否开启碰撞检测</li>
<li>isPickable - 网格是否可拾取</li>
<li>isVisible - 网格是否可见</li>
<li>material - 材质</li>
<li>outlineColor - 轮廓颜色</li>
<li>outlineWidth - 轮廓宽度</li>
<li>overlayAlpha - 叠加层透明度</li>
<li>overlayColor - 叠加层颜色</li>
<li>receiveShadows - 网格是否阴影</li>
<li>renderOutline - 是否渲染轮廓</li>
<li>renderOverlay - 是否渲染叠加层</li>
<li>showBoundingBox - 是否显示边界框</li>
<li>visibility - 可见度</li>
</ul>
<h2 id="set-get-mesh-transform" tabindex="-1"><a class="header-anchor" href="#set-get-mesh-transform" aria-hidden="true">#</a> set_get_mesh_transform</h2>
<p>用于设置或获取网格的变换属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_mesh_transform.png" alt="set_get_mesh_transform"></p>
<h2 id="translate-mesh" tabindex="-1"><a class="header-anchor" href="#translate-mesh" aria-hidden="true">#</a> translate_mesh</h2>
<p>在局部空间或世界空间移动网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/translate_mesh.png" alt="translate_mesh"></p>
<p>参数：</p>
<ul>
<li>mesh - 要移动的网格</li>
<li>axis - 定义网格要沿哪个轴移动</li>
<li>distance - 移动的距离</li>
<li>local - 勾选使用局部空间，否则使用世界空间</li>
</ul>
<h2 id="rotate-mesh" tabindex="-1"><a class="header-anchor" href="#rotate-mesh" aria-hidden="true">#</a> rotate_mesh</h2>
<p>在局部空间或世界空间旋转网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/rotate_mesh.png" alt="rotate_mesh"></p>
<p>参数：</p>
<ul>
<li>mesh - 要移动的网格</li>
<li>axis - 定义网格要沿哪个轴旋转</li>
<li>degree - 旋转的角度</li>
<li>local - 勾选使用局部空间，否则使用世界空间</li>
</ul>
<h2 id="rotate-mesh-pov" tabindex="-1"><a class="header-anchor" href="#rotate-mesh-pov" aria-hidden="true">#</a> rotate_mesh_pov</h2>
<p>以POV模式旋转网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/rotate_mesh_pov.png" alt="rotate_mesh_pov"></p>
<p>参数：</p>
<ul>
<li>mesh - 要移动的网格</li>
<li>pitch - 俯仰角度</li>
<li>yaw - 偏航角度</li>
<li>roll - 旋转角度</li>
</ul>
<h2 id="set-mesh-direction" tabindex="-1"><a class="header-anchor" href="#set-mesh-direction" aria-hidden="true">#</a> set_mesh_direction</h2>
<p>将此变换节点的旋转设置为给定的局部坐标轴。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_mesh_direction.png" alt="set_mesh_direction"></p>
<h2 id="mesh-look-at" tabindex="-1"><a class="header-anchor" href="#mesh-look-at" aria-hidden="true">#</a> mesh_look_at</h2>
<p>旋转网格使它朝向目标点。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_look_at.png" alt="mesh_look_at"></p>
<h2 id="remove-mesh" tabindex="-1"><a class="header-anchor" href="#remove-mesh" aria-hidden="true">#</a> remove_mesh</h2>
<p>删除网格，如果勾选了<code v-pre>includeChildren</code>，则连同该网格的子级也删除。</p>
<p><img src="https://cdn.zjbku.com/blocks/remove_mesh.png" alt="remove_mesh"></p>
<h2 id="mesh-set-parent" tabindex="-1"><a class="header-anchor" href="#mesh-set-parent" aria-hidden="true">#</a> mesh_set_parent</h2>
<p>设置网格的父物体。该拼图与节点分类下的<RouterLink to="/block3d/blocks-reference/nodes.html#node-parent">node_parent</RouterLink>拼图的不同之处在于，该拼图会保持子物体的在当前场景中的位置。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_set_parent.png" alt="mesh_set_parent"></p>
<h2 id="clone-mesh" tabindex="-1"><a class="header-anchor" href="#clone-mesh" aria-hidden="true">#</a> clone_mesh</h2>
<p>复制当前网格的属性，生成一个新的独立的网格物体。</p>
<p><img src="https://cdn.zjbku.com/blocks/clone_mesh.png" alt="clone_mesh"></p>
<h2 id="mesh-create-instance" tabindex="-1"><a class="header-anchor" href="#mesh-create-instance" aria-hidden="true">#</a> mesh_create_instance</h2>
<p>从当前网格创建一个新的网格实例。实例网格拥有独立的变换属性，其它属性与原网格共享。例如，所有的实例网格都共享一个材质。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_create_instance.png" alt="mesh_create_instance"></p>
<h2 id="drag-mesh" tabindex="-1"><a class="header-anchor" href="#drag-mesh" aria-hidden="true">#</a> drag_mesh</h2>
<p>使一个网格可以被拖拽。<code v-pre>options</code>接收一个对象参数，用于控制拖拽行为，通过该拼图的右键菜单-<code v-pre>创建 option</code>，可创建属性拼图。这些属性包括：</p>
<ul>
<li>dragAxis - 拖拽模式，使网格沿指定的轴拖拽。如果未指定，则拖拽平面面向相机</li>
<li>dragPlaneNormal - 拖拽模式，使网格沿指定的平面拖拽，通过法线确定。</li>
<li>enabled - 是否可拖拽</li>
<li>moveAttached - 当拖拽时，网格是否移动。若为<code v-pre>false</code>网格会静止不动</li>
<li>updateDragPlane - 是否在拖拽过程中应更新拖拽平面的方向（默认：<code v-pre>true</code>）。</li>
<li>useObjectOrientationForDragging - 如果设置为<code v-pre>false</code>网格将以世界坐标拖拽（默认：<code v-pre>true</code>）</li>
</ul>
<p>通过拼图左上角的高级选项，可以启用开始拖拽、拖拽和拖拽结束3种状态的回调插槽。</p>
<p><img src="https://cdn.zjbku.com/blocks/drag_mesh.png" alt="drag_mesh"></p>
<h2 id="check-point-behind-mesh" tabindex="-1"><a class="header-anchor" href="#check-point-behind-mesh" aria-hidden="true">#</a> check_point_behind_mesh</h2>
<p>检查场景中的某个点是否被网格遮挡。</p>
<p><img src="https://cdn.zjbku.com/blocks/check_point_behind_mesh.png" alt="check_point_behind_mesh"></p>
<h2 id="check-intersects-mesh" tabindex="-1"><a class="header-anchor" href="#check-intersects-mesh" aria-hidden="true">#</a> check_intersects_mesh</h2>
<p>检查两个网格是否相交。</p>
<p>参数：</p>
<ul>
<li>precise - 高精确检测</li>
<li>includeChildren - 是否包含子级</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/check_intersects_mesh.png" alt="check_intersects_mesh"></p>
<h2 id="check-intersects-point" tabindex="-1"><a class="header-anchor" href="#check-intersects-point" aria-hidden="true">#</a> check_intersects_point</h2>
<p>检查场景中的某个点是否位于网格内部。</p>
<p><img src="https://cdn.zjbku.com/blocks/check_intersects_mesh.png" alt="check_intersects_mesh"></p>
<h2 id="mesh-add-lod-level" tabindex="-1"><a class="header-anchor" href="#mesh-add-lod-level" aria-hidden="true">#</a> mesh_add_lod_level</h2>
<p>根据距离为网格添加LOD网格。也就是，网格会根据距离显示不同的精度，这有利用提高性能。</p>
<p><img src="https://cdn.zjbku.com/blocks/mesh_add_lod_level.png" alt="mesh_add_lod_level"></p>
<h2 id="mesh-auto-lod" tabindex="-1"><a class="header-anchor" href="#mesh-auto-lod" aria-hidden="true">#</a> mesh_auto_lod</h2>
<p>根据给定的设置为网格自动简化网格。</p>
<p>参数<code v-pre>settings</code>接收一个数组参数，数组的项是一个对象，对象可用的键值有：</p>
<ul>
<li>quality - 网格质量 0-1</li>
<li>distance - 显示距离</li>
<li>optimizeMesh - 是否优化网格</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/mesh_auto_lod.png" alt="mesh_auto_lod"></p>
<h2 id="mesh-render-edges" tabindex="-1"><a class="header-anchor" href="#mesh-render-edges" aria-hidden="true">#</a> mesh_render_edges</h2>
<p>为当前网格启用边线渲染模式。此模式可将网格的边线渲染出来。配合网格<code v-pre>edgesWidth</code> <code v-pre>edgesColor</code>属性，可设置连线的线宽和颜色。</p>
<p>参数：</p>
<ul>
<li>epsilon - 定义检测一个面的两个角度的最大距离，默认值<code v-pre>0.95</code></li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/mesh_render_edges.png" alt="mesh_render_edges"></p>
</template>
