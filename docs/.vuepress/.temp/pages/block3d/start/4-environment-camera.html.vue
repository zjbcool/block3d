<template><h1 id="环境和相机" tabindex="-1"><a class="header-anchor" href="#环境和相机" aria-hidden="true">#</a> 环境和相机</h1>
<p>Block3D提供了默认的环境和相机，以方便用户快速进行开发。如果要覆盖这些设置，也轻而易举。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#场景查看器">场景查看器</RouterLink></li><li><RouterLink to="#默认环境">默认环境</RouterLink></li><li><RouterLink to="#默认相机">默认相机</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<h2 id="场景查看器" tabindex="-1"><a class="header-anchor" href="#场景查看器" aria-hidden="true">#</a> 场景查看器</h2>
<p>在继续学习之前，先了解一下Block3D内置的场景查看器，它是Block3D底层引擎BabylonJS的一款开发工具，本身也是一个工具集。主要用于浏览、调试，作用类似于Blender的大纲和属性面板。</p>
<p>打开场景查看器通过菜单栏<code v-pre>下拉菜单</code>-<code v-pre>工具</code>-<code v-pre>场景查看器</code>，快捷键<code v-pre>Ctrl</code> + <code v-pre>I</code></p>
<p>出现在视图区右侧的就是场景查看器面板。可以看到一个空场景中存在节点、材质、纹理。</p>
<p><img src="https://cdn.zjbku.com/start/inspector-1.jpg" alt="inspector-1"></p>
<h2 id="默认环境" tabindex="-1"><a class="header-anchor" href="#默认环境" aria-hidden="true">#</a> 默认环境</h2>
<p>默认环境由一个天空盒（立方体）和一个地面组成。它们都各有材质，材质连接有贴图，其中地面为了实现边缘的平滑过渡使用了一张带有透明通道的<code v-pre>.png</code>格式的图片，背景和环境照明是<code v-pre>.dds</code>和<code v-pre>.env</code>格式的立方体贴图。</p>
<p><img src="https://cdn.zjbku.com/start/skybox-ground.jpg" alt="skybox-ground"></p>
<p>修改默认环境最简便的方法是替换位于<code v-pre>assets/texture</code>路径下的这3张贴图，你可以使用<RouterLink to="/block3d/diving-deeper/tools.html">工具</RouterLink>将全景图转换成<code v-pre>.dds</code>格式的背景立方体贴图，将HDR图片转换成<code v-pre>.env</code>格式的环境照明立方体贴图。</p>
<div class="custom-container tip"><p class="custom-container-title">注</p>
<p>立方体贴图是应用到立方体每个面的6张图片组成的无缝贴图，将其以<code v-pre>.dds</code>或<code v-pre>.env</code>格式封装成单个文件，更容易加载和使用。</p>
</div>
<p>要控制天空盒的大小、位置、颜色，环境照明的强度，以及地面的各种参数，就需要使用场景分类下的<code v-pre>scene_create_default_environment</code>拼图自行创建环境，在创建时可以控制环境的所有参数。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_create_default_environment.png" alt="scene_create_default_environment"></p>
<p>有关这部分内容，我们在深入学习时再研究，作为上手教程使用默认环境足够了。</p>
<h2 id="默认相机" tabindex="-1"><a class="header-anchor" href="#默认相机" aria-hidden="true">#</a> 默认相机</h2>
<p>名为<code v-pre>defaultCamera</code>的默认相机是一种<code v-pre>ArcRotateCamera</code>类型的相机，可以围绕一个目标点进行环绕观察，也可称为“环绕相机”或“轨道相机”。使用相机分类下的<code v-pre>set_get_camera_prop</code>拼图，可以设置和获取它的所有参数。</p>
<p><img src="https://cdn.zjbku.com/start/camera-set-prop.jpg" alt="camera-set-prop"></p>
<p>如果视图中你的模型看起来太远或太近，这是由于相机观察半径太大或太小所致，这时可以通过该拼图设置相机的半径<code v-pre>radius</code>和半径上限<code v-pre>upperRadiusLimit</code>参数，获得合理构图。</p>
<p><img src="https://cdn.zjbku.com/start/set_get_camera_prop.png" alt="set_get_camera_prop"></p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>创建网格和材质。</p>
</template>
