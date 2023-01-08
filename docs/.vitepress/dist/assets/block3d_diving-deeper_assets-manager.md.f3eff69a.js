import{_ as e,c as a,o as s,a as c}from"./app.a8a600a6.js";const m=JSON.parse('{"title":"资产管理器","description":"","frontmatter":{},"headers":[{"level":2,"title":"加载资产","slug":"加载资产","link":"#加载资产","children":[]},{"level":2,"title":"自定义加载界面","slug":"自定义加载界面","link":"#自定义加载界面","children":[]}],"relativePath":"block3d/diving-deeper/assets-manager.md"}'),t={name:"block3d/diving-deeper/assets-manager.md"},o=c('<h1 id="资产管理器" tabindex="-1">资产管理器 <a class="header-anchor" href="#资产管理器" aria-hidden="true">#</a></h1><p>Block3D通过<a href="./../blocks-reference/scenes.html#scene-assets-manager">资产管理器scene_assets_manager</a>拼图向场景中加载各种类型的资产，包括网格、纹理、图片、二进制文件、音频等。</p><h2 id="加载资产" tabindex="-1">加载资产 <a class="header-anchor" href="#加载资产" aria-hidden="true">#</a></h2><p>场景分类下的<a href="./../blocks-reference/scenes.html#scene-create-loading-task">创建加载任务scene_create_loading_task</a>拼图用于创建加载任务，在《快速上手》<a href="./../start/3-load-assets.html#加载3d资产">加载资产</a>中已有介绍。此外，<a href="./../blocks-reference/scenes.html#scene-get-loaded-from-task">获取资产scene_get_loaded_from_task</a>拼图用于获取加载的资产。通过这些拼图可以加载以下资产：</p><ol><li>加载网格 - 加载<code>.babylon</code> <code>.glTF/.glb</code> <code>.stl</code> <code>.obj</code>等格式的网格，其中<code>.babylon</code>是默认格式，如果使用其它格式，需要注意在发布面板勾选相应的模块，见《快速上手》<a href="./../start/8-publish.html">发布面板</a></li><li>加载纹理 - 预加载体积较大的纹理、立方体纹理</li><li>加载JSON - 可用于加载以<code>.json</code>文件保存的节点材质、GUI</li><li>加载文本 - 可加载外部<code>.txt</code>文件</li></ol><h2 id="自定义加载界面" tabindex="-1">自定义加载界面 <a class="header-anchor" href="#自定义加载界面" aria-hidden="true">#</a></h2><p>在用户等待资产加载的过程中，提供一个加载界面展示加载进度和展示LOGO，可以改善用户体验。使用场景分类下的<code>创建加载界面scene_create_loading_screen</code>拼图可以很方便地实现这个功能。</p><p><img src="https://cdn.zjbku.com/diving-deeper/loading-screen.jpg" alt="assets-manager-5"></p><p>创建加载界面的选项中的<code>logo图片</code>需要将图片转为base64编码，可以使用<code>下拉菜单-工具-Base64编辑器</code>转换。</p><p>软件右侧边栏的插件选项卡提供了一个自定义加载界面的插件模板，你可以在此基础上实现更加个性化的加载界面。</p>',10),d=[o];function r(n,l,i,_,h,p){return s(),a("div",null,d)}const f=e(t,[["render",r]]);export{m as __pageData,f as default};
