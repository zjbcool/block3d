<template><h1 id="网格和材质" tabindex="-1"><a class="header-anchor" href="#网格和材质" aria-hidden="true">#</a> 网格和材质</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#设置网格变换属性">设置网格变换属性</RouterLink></li><li><RouterLink to="#创建地面">创建地面</RouterLink></li><li><RouterLink to="#创建材质">创建材质</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<h2 id="设置网格变换属性" tabindex="-1"><a class="header-anchor" href="#设置网格变换属性" aria-hidden="true">#</a> 设置网格变换属性</h2>
<p>在前面的教程中，我们发现角色刚加载时是背对着我们的。使用快捷键<code v-pre>Ctrl</code> + <code v-pre>I</code>打开场景查看器，选中导入模型的根节点<code v-pre>__root__</code></p>
<p><img src="https://cdn.zjbku.com/start/mesh-material.jpg" alt="mesh-material"></p>
<p>可以发现，角色背对我们的原因是，模型缩放属性的z值为-1。修复此问题，可以在网格分类下，找到<code v-pre>set_get_mesh_transform</code>拼图</p>
<p><img src="https://cdn.zjbku.com/start/mesh-transform.jpg" alt="mesh-transform"></p>
<p>将<code v-pre>__root__</code>的缩放改为<code v-pre>1,1,1</code>。此拼图用于设置和获取网格的变换属性，即位置、旋转、缩放。注意，此拼图要放到<code v-pre>scene_assets_manager</code>拼图的'on finish'插槽下，否则会因为找不到<code v-pre>__root__</code>而报错。</p>
<p><img src="https://cdn.zjbku.com/start/mesh-material-1.png" alt="mesh-material-1"></p>
<h2 id="创建地面" tabindex="-1"><a class="header-anchor" href="#创建地面" aria-hidden="true">#</a> 创建地面</h2>
<p>为了演示如何创建和操作网格，我们创建一个最简单的地面。使用网格分类的<code v-pre>create_mesh_set_shapes</code>拼图可以创建多种预置模型，其中包括我们需要的<code v-pre>Ground</code>类型。</p>
<p>下面是创建地面网格并设置其参数的步骤：</p>
<ol>
<li>从网格分类中拖拽<code v-pre>create_mesh_set_shapes</code>拼图，从下拉菜单中选择<code v-pre>Ground</code>类型</li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-2.png" alt="mesh-material-2"></p>
<ol start="2">
<li>从对象分类中拖拽<code v-pre>object_create</code>拼图，快捷键<code v-pre>Shift</code> + <code v-pre>O</code>，取消勾选<code v-pre>isEmpty</code>，将其连接到<code v-pre>create_mesh_set_shapes</code>拼图的<code v-pre>options</code>参数上</li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-3.png" alt="mesh-material-3"></p>
<ol start="3">
<li>在<code v-pre>create_mesh_set_shapes</code>拼图上右键，点击末尾的<code v-pre>创建 'option'</code></li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-4.png" alt="mesh-material-4"></p>
<ol start="4">
<li>将右键创建的选项拼图拖拽到<code v-pre>object_create</code>拼图中。注意，此拼图仅在<code v-pre>object_create</code>拼图内部有效</li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-5.png" alt="mesh-material-5"></p>
<ol start="5">
<li>将选项<code v-pre>width</code>值设为100，然后复制此拼图，将选项切换为<code v-pre>height</code>，值同样为100，这样我们就创建一个宽高均为100的地面</li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-6.png" alt="mesh-material-6"></p>
<ol start="6">
<li>最后，我们将<code v-pre>create_mesh_set_shapes</code>拼图创建的地面保存到变量<code v-pre>ground</code>，以备后用。我们在<RouterLink to="/block3d/start/3-load-assets.html">加载资产</RouterLink>教程中介绍了通过点击按钮创建变量，然后再重新打开变量分类，把新出现的拼图拖拽到工作区。其实，使用快捷键<code v-pre>Shift</code> + <code v-pre>V</code>，可以直接在工作区创建变量。</li>
</ol>
<p><img src="https://cdn.zjbku.com/start/mesh-material-7.png" alt="mesh-material-7"></p>
<p>此时，场景中的地面是黑色的，因为还没有赋材质。并且，由于默认默认环境也有一个地面，两者重叠造成闪烁。为了解决它，我们使用一开始用来解决角色朝向问题的<code v-pre>set_get_mesh_transform</code>拼图，将地面的位置属性的y值稍微提高一点。以下两种方式效果相同：</p>
<p><img src="https://cdn.zjbku.com/start/mesh-material-8.png" alt="mesh-material-8"></p>
<h2 id="创建材质" tabindex="-1"><a class="header-anchor" href="#创建材质" aria-hidden="true">#</a> 创建材质</h2>
<p>创建材质过程要简单的多，因为<code v-pre>create_material</code>拼图，只有一个<code v-pre>name</code>参数。以下拼图创建了一个标准类型的材质，然后设置了漫反射颜色和高光颜色属性。</p>
<p><img src="https://cdn.zjbku.com/start/mesh-material-9.png" alt="mesh-material-9"></p>
<p>用来设置材质属性的拼图名为<code v-pre>set_get_material_prop</code>，根据不同类型的材质会显示不同类型的属性和默认值。</p>
<p>颜色目前有两个拼图<code v-pre>material_color3</code>和<code v-pre>material_color3_from_hex</code>，一个是RGB颜色，另一个是16进制的颜色。</p>
<p>材质创建完成后，使用网格分类下的<code v-pre>set_get_mesh_prop</code>拼图，在下拉菜单中找到<code v-pre>material</code>属性，将刚刚的材质赋给地面。</p>
<p><img src="https://cdn.zjbku.com/start/mesh-material-10.png" alt="mesh-material-10"></p>
<p>保存之后，发现地面仍然是黑色。这是因为场景中还没有灯光，而标准材质并不受HDR环境照明影响。</p>
<p><img src="https://cdn.zjbku.com/start/mesh-material-11.jpg" alt="mesh-material-11"></p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>实时控制灯光和阴影。</p>
</template>
