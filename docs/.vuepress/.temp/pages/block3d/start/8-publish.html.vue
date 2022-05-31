<template><h1 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#发布面板">发布面板</RouterLink><ul><li><RouterLink to="#模块">模块：</RouterLink></li><li><RouterLink to="#应用">应用：</RouterLink></li><li><RouterLink to="#构建">构建：</RouterLink></li></ul></li><li><RouterLink to="#静态文件">静态文件</RouterLink></li></ul></nav>
<h2 id="发布面板" tabindex="-1"><a class="header-anchor" href="#发布面板" aria-hidden="true">#</a> 发布面板</h2>
<p>通过菜单栏-<code v-pre>下拉菜单</code>-<code v-pre>发布...</code>，可以打开发布面板（快捷键<code v-pre>Ctrl</code> + <code v-pre>P</code>）。发布面板用于将Block3D应用发布成可部署到服务器的静态文件。</p>
<p><img src="https://cdn.zjbku.com/start/publish-app.jpg" alt="publish-app"></p>
<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块：</h3>
<ul>
<li>Babylon - 底层引擎babylon.js，核心模块，默认勾选</li>
<li>PEP - 用于兼容触屏设置，建议始终勾选</li>
<li>glTF 2.0 Loader - 用于加载.gltf/.glb格式的文件</li>
<li>Obj Loader - 用于加载.obj格式的文件</li>
<li>Stl Loader - 用于加载.stl格式的文件</li>
<li>GUI - 如果用到GUI分类拼图，需要勾选</li>
<li>TweakPane - 如果用到TweakPane分类拼图，需要勾选</li>
</ul>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用：</h3>
<p>发布后会在项目文件下创建<code v-pre>index.html</code>，这里的设置与之相关。根据需要设置即可。</p>
<h3 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建：</h3>
<p>勾选<code v-pre>压缩JS文件</code>，会将生成的JS文件进行代码压缩。</p>
<h2 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件" aria-hidden="true">#</a> 静态文件</h2>
<p>点击<code v-pre>OK</code>按钮发布后，在项目文件夹下会增加<code v-pre>index.html</code>文件，在<code v-pre>assets/js</code>路径下会增加<code v-pre>main.js</code>和<code v-pre>virsual_logic.js</code>。<code v-pre>index.html</code>和<code v-pre>assets</code>文件夹就是最终部署所需的静态文件，直接上传到服务器，就可以通过网址访问。</p>
</template>
