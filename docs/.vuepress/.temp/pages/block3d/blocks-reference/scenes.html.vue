<template><h1 id="场景-scenes" tabindex="-1"><a class="header-anchor" href="#场景-scenes" aria-hidden="true">#</a> 场景 Scenes</h1>
<p>这类拼图用于加载资产、创建环境、控制场景属性。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#scene-create-custom-preloader">scene_create_custom_preloader</RouterLink></li><li><RouterLink to="#scene-update-custom-preloader">scene_update_custom_preloader</RouterLink></li><li><RouterLink to="#scene-assets-manager">scene_assets_manager</RouterLink></li><li><RouterLink to="#scene-load-asset">scene_load_asset</RouterLink></li><li><RouterLink to="#scene-get-loaded-from-asset">scene_get_loaded_from_asset</RouterLink></li><li><RouterLink to="#scene-on-finish-load">scene_on_finish_load</RouterLink></li><li><RouterLink to="#set-scene-prop">set_scene_prop</RouterLink></li><li><RouterLink to="#scene-create-default-environment">scene_create_default_environment</RouterLink></li><li><RouterLink to="#scene-update-default-environment">scene_update_default_environment</RouterLink></li><li><RouterLink to="#scene-get-environment-prop">scene_get_environment_prop</RouterLink></li><li><RouterLink to="#app-fullscreen">app_fullscreen</RouterLink></li><li><RouterLink to="#app-pointer-lock">app_pointer_lock</RouterLink></li></ul></nav>
<h2 id="scene-create-custom-preloader" tabindex="-1"><a class="header-anchor" href="#scene-create-custom-preloader" aria-hidden="true">#</a> scene_create_custom_preloader</h2>
<p>创建一个自定义加载器，取代默认的加载器。需要取消勾选<a href="#scene-assets-manager">scene_assets_manager</a>拼图的<code v-pre>useDefaultPreloader</code>选项才能生效。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_create_custom_preloader.png" alt="scene_create_custom_preloader"></p>
<p><code v-pre>options</code>参数接收一个对象，其中包含控制加载器外观的属性和值：</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_create_custom_preloader_1.png" alt="scene_create_custom_preloader_1"></p>
<p>也可以通过修改项目文件夹下<code v-pre>assets/css/index.css</code>样式文件实现同样的效果，此时<code v-pre>options</code>不需要传递参数。相关的类名有：</p>
<ul>
<li>.preloader-background -  加载屏背景</li>
<li>.preloader-container - 加载器容器，控制大小</li>
<li>.preloader-bar - 进度条</li>
<li>.preloader-logo - LOGO</li>
</ul>
<h2 id="scene-update-custom-preloader" tabindex="-1"><a class="header-anchor" href="#scene-update-custom-preloader" aria-hidden="true">#</a> scene_update_custom_preloader</h2>
<p>更新加载器进度条和在加载完成时结束加载器。该拼图所需的<code v-pre>percentage</code>可以在<a href="#scene-assets-manager">scene_assets_manager</a>拼图的右键菜单中通过<code v-pre>创建 percentage</code>创建。</p>
<p>将更新加载器拼图放入<a href="#scene-assets-manager">scene_assets_manager</a>拼图的<code v-pre>on progress</code>插槽中；将结束加载器拼图放入<code v-pre>on ready</code>插槽中。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_update_custom_preloader.png" alt="scene_update_custom_preloader"></p>
<h2 id="scene-assets-manager" tabindex="-1"><a class="header-anchor" href="#scene-assets-manager" aria-hidden="true">#</a> scene_assets_manager</h2>
<p>该拼图用于加载Block3D应用所需的所有类型的资产。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_assets_manager.png" alt="scene_assets_manager"></p>
<p>参数：</p>
<ul>
<li>useDefaultPreload - 取消勾选可以使用自定义加载器，否则使用默认加载器</li>
<li>load assets - 在该插槽中使用<a href="#scene-load-asset">scene_load_asset</a>拼图各种资产</li>
<li>on progress - 资产加载进度</li>
<li>on load - 资产加载完成，但未渲染</li>
<li>on ready - 场景准备完成</li>
</ul>
<p>加载网格：</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_assets_manager_1.png" alt="scene_assets_manager_1"></p>
<h2 id="scene-load-asset" tabindex="-1"><a class="header-anchor" href="#scene-load-asset" aria-hidden="true">#</a> scene_load_asset</h2>
<p>用于创建加载任务，支持从本地或远程服务器加载资产。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_load_asset.png" alt="scene_load_asset"></p>
<p>资产类型：</p>
<ul>
<li>Mesh - 网格，3D场景，支持<code v-pre>.babylon</code> <code v-pre>.glTF/.glb</code> <code v-pre>.obj</code> <code v-pre>.stl</code></li>
<li>TextFile - <code v-pre>.txt</code>文本文件</li>
<li>BinaryFile - 二进制文件，如<code v-pre>.json</code> <code v-pre>.mp3</code></li>
<li>Image - 加载<code v-pre>HTMLImage</code></li>
<li>Texture - 加载普通贴图</li>
<li>CubeTexture - 加载立方体贴图</li>
<li>HDRCubeTexture - 加载HDR立方体贴图</li>
<li>EquiRectangularCubeTexture - 加载等矩柱状立方体贴图</li>
</ul>
<h2 id="scene-get-loaded-from-asset" tabindex="-1"><a class="header-anchor" href="#scene-get-loaded-from-asset" aria-hidden="true">#</a> scene_get_loaded_from_asset</h2>
<p>用于在加载任务成功后获取加载的资产。此拼图需要在<a href="#scene-assets-manager">scene_assets_manager</a>拼图的<code v-pre>on load</code>插槽或<a href="#scene-on-finish-load">scene_on_finish_load</a>拼图的回调插槽中运行。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_get_loaded_from_asset.png" alt="scene_get_loaded_from_asset"></p>
<p>返回结果：</p>
<ul>
<li>meshes - array 加载的网格</li>
<li>animationGroups - array 加载的动画组</li>
<li>skeletons - array 加载的骨骼</li>
<li>text - string 加载的文本内容</li>
<li>data - any 从二进制文件加载的数据</li>
<li>image - HTMLImage HTML的图片</li>
<li>texture - any 加载的纹理</li>
</ul>
<h2 id="scene-on-finish-load" tabindex="-1"><a class="header-anchor" href="#scene-on-finish-load" aria-hidden="true">#</a> scene_on_finish_load</h2>
<p>单个加载任务成功后执行插槽中的拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_on_finish_load.png" alt="scene_on_finish_load"></p>
<h2 id="set-scene-prop" tabindex="-1"><a class="header-anchor" href="#set-scene-prop" aria-hidden="true">#</a> set_scene_prop</h2>
<p>用于设置场景属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_scene_prop.png" alt="set_scene_prop"></p>
<p>常用属性：</p>
<ul>
<li>clearColor - 设置背景颜色</li>
<li>collisionEnabled - 开启碰撞检测</li>
<li>environmentTexture - 设置PBR材质的反射纹理</li>
<li>fogEnable - 开启雾效</li>
<li>gravity - 设置重力加速度</li>
</ul>
<h2 id="scene-create-default-environment" tabindex="-1"><a class="header-anchor" href="#scene-create-default-environment" aria-hidden="true">#</a> scene_create_default_environment</h2>
<p>创建环境，环境由天空盒和地面组成。Block3D有一个默认环境，使用此拼图会代替这个默认环境。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_create_default_environment.png" alt="scene_create_default_environment"></p>
<p><code v-pre>options</code>接收一个对象参数，其中包括创建默认环境的属性，其中的主要属性有：</p>
<ul>
<li>cameraContrast - 相机对比度</li>
<li>cameraExposure - 相机曝光度</li>
<li>createGround - 是否创建地面</li>
<li>createSkybox - 是否创建天空盒</li>
<li>environmentTexture - 环境纹理，用于HDR照明，影响PBR材质</li>
<li>groundColor - 地面颜色</li>
<li>groundSize - 地面大小</li>
<li>groundTexture - 地面纹理，默认是一张带透明通道的png图片</li>
<li>skyboxColor - 天空盒颜色</li>
<li>skyboxSize - 天空盒大小</li>
<li>skyboxTexture - 天空盒纹理，用于背景图片</li>
</ul>
<p>获取这些属性可以通过该拼图右键菜单<code v-pre>创建 option</code>创建。</p>
<h2 id="scene-update-default-environment" tabindex="-1"><a class="header-anchor" href="#scene-update-default-environment" aria-hidden="true">#</a> scene_update_default_environment</h2>
<p>该拼图用于更新默认环境的参数，不会取代默认环境。参数与<a href="#scene-create-default-environment">scene_create_default_environment</a>相同。该拼图需要在<a href="#scene-assets-manager">scene_assets_manager</a>拼图的<code v-pre>on load</code>插槽中执行。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_update_default_environment.png" alt="scene_update_default_environment"></p>
<h2 id="scene-get-environment-prop" tabindex="-1"><a class="header-anchor" href="#scene-get-environment-prop" aria-hidden="true">#</a> scene_get_environment_prop</h2>
<p>获取环境属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_get_environment_prop.png" alt="scene_get_environment_prop"></p>
<ul>
<li>ground - 获取地面网格</li>
<li>groundMaterial - 获取地面材质</li>
<li>groundTexture - 获取地面纹理</li>
<li>rootMesh - 环境根网格</li>
<li>skybox - 获取天空盒网格</li>
<li>skyboxMaterial - 获取天空盒材质</li>
<li>skyboxTexture - 获取天空盒纹理</li>
</ul>
<h2 id="app-fullscreen" tabindex="-1"><a class="header-anchor" href="#app-fullscreen" aria-hidden="true">#</a> app_fullscreen</h2>
<p>是否全屏。勾选<code v-pre>pointerLock</code>会锁定鼠标。</p>
<p><img src="https://cdn.zjbku.com/blocks/app_fullscreen.png" alt="app_fullscreen"></p>
<h2 id="app-pointer-lock" tabindex="-1"><a class="header-anchor" href="#app-pointer-lock" aria-hidden="true">#</a> app_pointer_lock</h2>
<p>是否锁定鼠标。</p>
<p><img src="https://cdn.zjbku.com/blocks/app_pointer_lock.png" alt="app_pointer_lock"></p>
</template>
