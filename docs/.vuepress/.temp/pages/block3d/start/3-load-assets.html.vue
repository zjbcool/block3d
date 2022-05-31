<template><h1 id="加载资产" tabindex="-1"><a class="header-anchor" href="#加载资产" aria-hidden="true">#</a> 加载资产</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#导出3d资产">导出3D资产</RouterLink></li><li><RouterLink to="#加载3d资产">加载3D资产</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<p>Block3D支持<code v-pre>.babylon</code>、<code v-pre>.gltf/.glb</code>、<code v-pre>.stl</code>、<code v-pre>.obj</code>格式的3D资产导入。在实际开发中，我们一般使用前面两种。<code v-pre>.babylon</code>是Block3D底层引擎BabylonJS自带格式，需要在三维软件中安装相应版本的<RouterLink to="/download/">插件</RouterLink>。<code v-pre>.gltf/.glb</code>是通用的Web3D格式，如果你是Blender用户，可以直接导出<code v-pre>.gltf/.glb</code>。</p>
<p>下面我们从Blender中以<code v-pre>.gltf/.glb</code>格式导出一组动画。</p>
<h2 id="导出3d资产" tabindex="-1"><a class="header-anchor" href="#导出3d资产" aria-hidden="true">#</a> 导出3D资产</h2>
<p>我们从<a href="https://www.mixamo.com/" target="_blank" rel="noopener noreferrer">Mixamo<ExternalLinkIcon/></a>网站下载一组<code v-pre>.fbx</code>格式的动画，包括：等待、跑步、后退、左移、右移。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset.jpg" alt="load-asset"></p>
<p>注意，在下载的时候，只需要下载一个带蒙皮的fbx，其它的都只要骨骼就可以了。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-1.jpg" alt="load-asset-1"></p>
<p>然后，把所有fbx导入Blender。打开动作编辑器， 在动作列表中，可以看到所有加载进来的动画。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-2.jpg" alt="load-asset-2"></p>
<p>依次选择并<code v-pre>Push Down</code>到非线性动画编辑器的轨道上。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-3.jpg" alt="load-asset-3"></p>
<p>动画编辑完成！然后，只保留一套骨骼，其它的删除。保存，导出。导出设置保持默认，命名为<code v-pre>animation.glb</code>，保存到项目的<code v-pre>assets/scene</code>路径下。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-4.jpg" alt="load-asset-4"></p>
<h2 id="加载3d资产" tabindex="-1"><a class="header-anchor" href="#加载3d资产" aria-hidden="true">#</a> 加载3D资产</h2>
<p>接下来，我们将开始使用拼图，读者可依据下图的图标与名称对照表，从工具栏查找拼图</p>
<p><img src="https://cdn.zjbku.com/start/category.jpg" alt="category"></p>
<p>将软件切换到Block3D，从工具栏中将场景分类的<code v-pre>assets_manager</code>拼图和<code v-pre>load_assset</code>拼图，拖拽到工作区。同样的操作重复无数次后，你可能会选择使用查找拼图功能，直接输入拼图名称创建。但是现在作为新手，还需要一个熟练的过程。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-5-1.jpg" alt="load-asset-5-1"></p>
<p>接着，在变量分类下，点击<code v-pre>创建变量</code>按钮，创建一个名为<code v-pre>loadMesh</code>的变量。创建完成后，重新打开变量分类，就会出现刚创建的变量拼图。由于需要用户创建才会出现拼图，所以这类拼图被称为动态拼图。除了变量，函数分类也属于动态拼图。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-6-1.jpg" alt="load-asset-6-1"></p>
<p>现在，像玩拼图游戏一样，将工作区中的拼图像这样连接。注意在<code v-pre>load_asset</code>拼图的下拉菜单中选择<code v-pre>mesh</code>类型，<code v-pre>url</code>参数添写正确的路径。随着深入学习，你会发现该拼图还用于加载贴图、JSON等资产。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-7.png" alt="load-asset-7"></p>
<p>最后一步，点击菜单栏的<code v-pre>保存</code>按钮，快捷键<code v-pre>Ctrl</code> + <code v-pre>S</code>。如果一切正常，视图区就会显示加载的3D资产，按住鼠标左键可以观察场景。也许你会发现一些问题：相机距离太远，角色背对着我们。继续跟着教程，问题会迎刃而解。</p>
<p><img src="https://cdn.zjbku.com/start/load-asset-8.jpg" alt="load-asset-8"></p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>修改环境和相机。</p>
</template>
