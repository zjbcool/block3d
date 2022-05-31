<template><h1 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#默认项目">默认项目</RouterLink></li><li><RouterLink to="#新建项目">新建项目</RouterLink></li><li><RouterLink to="#项目结构">项目结构</RouterLink></li><li><RouterLink to="#下一步">下一步</RouterLink></li></ul></nav>
<h2 id="默认项目" tabindex="-1"><a class="header-anchor" href="#默认项目" aria-hidden="true">#</a> 默认项目</h2>
<p>运行Block3D会打开一个名为<code v-pre>defaultProject</code>的默认启动项目，它是自动创建的，位于你刚刚设置的项目路径下。你可以直接从这个项目开始，或者创建一个新项目。</p>
<h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h2>
<p>点击菜单栏上的<code v-pre>新建</code>按钮</p>
<p><img src="https://cdn.zjbku.com/start/menu-1.jpg" alt="menu"></p>
<p>然后在打开的对话框中，输入项目名称即可新建项目。</p>
<p><img src="https://cdn.zjbku.com/start/create.jpg" alt="create"></p>
<ul>
<li><strong>项目名称</strong>：用于创建项目文件夹，支持中文，建议使用英文或者拼音。</li>
<li><strong>描述</strong>：会在项目文件夹下创建一个<code v-pre>README.md</code>文件，此文件随时可以用记事本或代码编辑器打开修改。</li>
<li><strong>在新窗口打开</strong>：如果勾选会在新窗口打开新建项目。</li>
</ul>
<p>描述可以在<code v-pre>打开项目</code>对话框中显示，以帮助了解项目详情</p>
<p><img src="https://cdn.zjbku.com/start/open.jpg" alt="open"></p>
<p>如果你已经设置了<RouterLink to="/block3d/start/install.html#%E8%AE%BE%E7%BD%AE%E9%A1%B9%E7%9B%AE%E8%B7%AF%E5%BE%84">项目路径</RouterLink>，在点击<strong>OK</strong>按钮后，会在你的项目路径下出现这个新创建的项目。你可以通过菜单栏-下拉菜单中的<code v-pre>打开文件夹</code>，或使用快捷键<code v-pre>Alt</code> + <code v-pre>Shift</code> + <code v-pre>R</code>，打开项目文件夹。</p>
<h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2>
<p>默认的项目结构：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>myProject
├─ assets
|  ├─ css
|  |  └─ index.css
|  ├─ js
|  |  └─ babylon.js
|  ├─ media
|  |  └─ logo.svg
|  ├─ scene
|  |  └─ scene.babylon
|  └─ texture
|     ├─ backgroundGround.png
|     ├─ backgroundSkybox.dds
|     ├─ environment.dds
|     └─ environmentSpecular.env
├─ workspace_backup
└─ workspace.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>assets - （不可变）静态资源文件夹
<ul>
<li>css - （不可变）样式文件夹</li>
<li>js - （不可变）javascript文件夹</li>
<li>media - （不可变）图标、媒体文件夹</li>
<li>scene - 3D资产文件夹</li>
<li>texture - （不可变）默认环境贴图文件夹
<ul>
<li>backgroundGround.png - 地面贴图</li>
<li>backgroundSkybox.dds - 天空盒背景</li>
<li>environment.dds - 环境反射贴图</li>
<li>environmentSpecular.env - 环境照明贴图</li>
</ul>
</li>
</ul>
</li>
<li>workspace_backup - （不可变）工作区备份文件夹，需要在<code v-pre>设置</code>中勾选<code v-pre>自动保存</code></li>
<li>workspace.json - （不可变）工作区文件，这个文件中保存了你在工作区编辑的拼图和代码</li>
</ul>
<p>在实际开发中，可能会用到很多3D资产，block3d并不会限制用户把所有3D资产统一堆放到<code v-pre>scene</code>文件夹中，用户可以在<code v-pre>assets</code>文件夹中任意创建文件夹存放3D资产。</p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步" aria-hidden="true">#</a> 下一步</h2>
<p>从<a href="https://www.mixamo.com/" target="_blank" rel="noopener noreferrer">Mixamo<ExternalLinkIcon/></a>下载一些动画，通过Blender导出.gltf/.glb，看一下block3d如何加载3D资产。</p>
</template>
