import{_ as e,c,o as a,a as t}from"./app.7818b0d9.js";const u=JSON.parse('{"title":"网格和材质","description":"","frontmatter":{},"headers":[{"level":2,"title":"设置网格变换属性","slug":"设置网格变换属性","link":"#设置网格变换属性","children":[]},{"level":2,"title":"创建地面","slug":"创建地面","link":"#创建地面","children":[]},{"level":2,"title":"创建材质","slug":"创建材质","link":"#创建材质","children":[]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"relativePath":"block3d/start/5-mesh-material.md"}'),o={name:"block3d/start/5-mesh-material.md"},d=t('<h1 id="网格和材质" tabindex="-1">网格和材质 <a class="header-anchor" href="#网格和材质" aria-hidden="true">#</a></h1><h2 id="设置网格变换属性" tabindex="-1">设置网格变换属性 <a class="header-anchor" href="#设置网格变换属性" aria-hidden="true">#</a></h2><p>在前面的教程中，我们发现角色刚加载时是背对着我们的。使用快捷键<code>Ctrl</code> + <code>I</code>打开场景查看器，选中导入模型的根节点<code>__root__</code></p><p><img src="https://cdn.zjbku.com/start/mesh-material.jpg" alt="mesh-material"></p><p>可以发现，角色背对我们的原因是，模型缩放属性的z值为-1。修复此问题，可以在<code>网格</code>分类的<code>变换</code>子类中，找到第一个<code>网格变换set_get_mesh_transform</code>拼图，将<code>__root__</code>的缩放改为<code>1,1,1</code>。此拼图用于设置和获取网格的变换属性，即位置、旋转、缩放。注意，此拼图要放到<code>资产管理器scene_assets_manager</code>拼图的&#39;完成&#39;插槽下，即当网格加载完成后执行此操作。</p><p><img src="https://cdn.zjbku.com/start/set-transform.jpg" alt="mesh-material-1"></p><h2 id="创建地面" tabindex="-1">创建地面 <a class="header-anchor" href="#创建地面" aria-hidden="true">#</a></h2><p>为了演示如何创建和操作网格，我们创建一个最简单的地面。使用网格分类的<code>创建网格create_mesh_set_shapes</code>拼图可以创建多种预置模型，其中包括我们需要的<code>地面</code>类型。</p><p>下面是创建地面网格并设置其参数的步骤：</p><ol><li>从网格分类中拖拽<code>创建网格create_mesh_set_shapes</code>拼图，从下拉菜单中选择<code>地面</code>类型</li><li>从对象分类中拖拽<code>创建对象object_create</code>拼图，快捷键<code>Shift</code> + <code>O</code>，取消勾选<code>空</code>，将其连接到<code>创建网格create_mesh_set_shapes</code>拼图的<code>选项</code>参数上</li><li>在<code>创建网格create_mesh_set_shapes</code>拼图上右键，点击末尾的<code>创建 &#39;选项&#39;</code></li><li>将右键创建的选项拼图拖拽到<code>创建对象object_create</code>拼图中。注意，此拼图仅在<code>创建对象object_create</code>拼图内部有效</li><li>将选项<code>宽度</code>值设为100，然后复制此拼图，将选项切换为<code>高度</code>，值同样为100，这样我们就创建一个宽高均为100的地面</li></ol><p><img src="https://cdn.zjbku.com/start/create-mesh-1.gif" alt="mesh-material-gif"></p><h2 id="创建材质" tabindex="-1">创建材质 <a class="header-anchor" href="#创建材质" aria-hidden="true">#</a></h2><p>材质可以通过三维软件导出，也可以在Block3D中创建。下面的示例中，使用<code>创建材质create_material</code>拼图创建了一个标准类型的材质，然后使用<code>材质属性material_properties_accessors</code>设置了漫反射颜色和高光颜色属性，最后，使用<code>网格属性mesh_properties_accessors</code>拼图将这个材质赋给了地面。</p><p><img src="https://cdn.zjbku.com/start/mesh-material.jpg" alt="mesh-material-10"></p><p>保存之后，发现地面变成了黑色。这是因为场景中还没有灯光，而标准材质并不受环境照明影响。</p><p><img src="https://cdn.zjbku.com/start/mesh-material-11.jpg" alt="mesh-material-11"></p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p>实时控制灯光和阴影。</p>',18),s=[d];function r(i,l,h,_,p,m){return a(),c("div",null,s)}const g=e(o,[["render",r]]);export{u as __pageData,g as default};