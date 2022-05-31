<template><h1 id="灯光和阴影" tabindex="-1"><a class="header-anchor" href="#灯光和阴影" aria-hidden="true">#</a> 灯光和阴影</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#创建灯光">创建灯光</RouterLink></li><li><RouterLink to="#创建阴影">创建阴影</RouterLink></li><li><RouterLink to="#调节灯光和阴影">调节灯光和阴影</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<h2 id="创建灯光" tabindex="-1"><a class="header-anchor" href="#创建灯光" aria-hidden="true">#</a> 创建灯光</h2>
<p>在灯光分类下找到<code v-pre>create_light</code>拼图，在下拉菜单中选择平行光<code v-pre>DirectionalLight</code>。对于方向<code v-pre>direction</code>参数先保持默认，稍后我们在场景中实时调节，再把最终的参数复制到这里。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow.png" alt="light-shadow"></p>
<p>使用<code v-pre>set_get_light_prop</code>拼图可以设置灯光的属性，如强度<code v-pre>intensity</code>、漫反射<code v-pre>diffuse</code>、位置<code v-pre>position</code>等</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-1.png" alt="light-shadow-1"></p>
<p>将创建灯光的拼图放在创建地面之前，以使灯光能对地面产生作用。有了灯光，地面的材质效果就表现出来了。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-2.jpg" alt="light-shadow-2"></p>
<h2 id="创建阴影" tabindex="-1"><a class="header-anchor" href="#创建阴影" aria-hidden="true">#</a> 创建阴影</h2>
<p>在灯光分类下找到<code v-pre>create_shadow</code>拼图，第一个参数是灯光，第二个参数是阴影贴图的大小。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-3.png" alt="light-shadow-3"></p>
<p>在三维软件中，要调出好看的阴影需要设置很多参数，Block3D中也一样。我们先不关注这些细节。要让阴影产生效果，还需要设置产生阴影的物体和接收阴影的物体。通过设置地面的<code v-pre>receiveShadow</code>属性为<code v-pre>true</code>，可以让地面接收阴影。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-4.png" alt="light-shadow-4"></p>
<p>使用<code v-pre>add_shadow_caster</code>拼图可以指定哪些物体产生阴影，这里自然是角色模型。通过场景查看器，或者在三维软件中查看，角色模型分为两部分。我们可以使用两次<code v-pre>add_shadow_caster</code>拼图，分别设置两个模型产生阴影。或者，使用循环执行这些重复性的操作：</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-5.png" alt="light-shadow-5"></p>
<p>其中，橘黄色的拼图名为<code v-pre>scene_get_loaded_asset</code>，位于场景分类，紧挨着<code v-pre>scene_load_asset</code>拼图。</p>
<p>设置完成之后，保存，阴影就出现了。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-6.jpg" alt="light-shadow-6"></p>
<h2 id="调节灯光和阴影" tabindex="-1"><a class="header-anchor" href="#调节灯光和阴影" aria-hidden="true">#</a> 调节灯光和阴影</h2>
<p>这个阴影颜色太黑，边缘也很硬。另外，灯光的位置和角度对阴影也有很大影响，前面我们故意忽略了这些细节，现在我们认真调节一下灯光和阴影的参数。</p>
<p>首先从菜单栏或使用快捷键<code v-pre>Ctrl</code> + <code v-pre>I</code>打开场景查看器，选中灯光，点击右侧的小眼睛图标，这时视图中的灯光会以实体的方式出现。点击场景查看器顶部的工具图标，可以切换为位移、旋转、缩放、边界盒控制器，这样就可以和在三维软件中一样自由控制灯光的位置和方向了。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-7.jpg" alt="light-shadow-7"></p>
<p>在下方的属性面板中，可以看到调节后的位置和方向参数。方向用于创建灯光时的<code v-pre>direction</code>参数；位置用于设置灯光的<code v-pre>position</code>属性。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-8.jpg" alt="light-shadow-8"></p>
<p>阴影面板中提供了控制阴影细节的参数。其中<code v-pre>darkness</code>控制阴影的明暗，<code v-pre>filter</code>用于选择阴影的过滤类型及相关参数。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-9.jpg" alt="light-shadow-9"></p>
<p>这些参数可以通过灯光分类下的<code v-pre>set_shadow_prop</code>拼图应用到阴影上。</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-10.png" alt="light-shadow-10"></p>
<p>调节后的灯光和阴影效果：</p>
<p><img src="https://cdn.zjbku.com/start/light-shadow-11.jpg" alt="light-shadow-11"></p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>让角色动起来！</p>
</template>
