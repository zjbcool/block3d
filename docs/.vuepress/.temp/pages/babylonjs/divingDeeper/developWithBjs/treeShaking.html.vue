<template><h1 id="babylon-js-支持带有树摇的es6" tabindex="-1"><a class="header-anchor" href="#babylon-js-支持带有树摇的es6" aria-hidden="true">#</a> Babylon.js 支持带有树摇的ES6</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#可用包">可用包</RouterLink></li><li><RouterLink to="#基础示例">基础示例</RouterLink></li><li><RouterLink to="#基本用法">基本用法</RouterLink></li><li><RouterLink to="#npm">npm</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>NPM包管理器是定义和组织项目依赖的最佳方式之一。与传统的javascript开发（在HTML的'script'标签中包含一个脚本）相比，使用npm包可以让你使用Webpack或Browserify等工具来打包你的项目并（持续）交付。</p>
<p>我们现在正式支持我们的npm es6包，并将继续更新npm仓库的新版本，因为它们正在被开发。</p>
<p>请注意，通过使用es6包，你将需要依靠额外的工具来捆绑和测试你的库，但从好的方面看，你将能够树摇你的应用程序并减少其最终大小。</p>
<p>所有的babylon es6软件包都可以在npm范围内使用@babylonjs。</p>
<h2 id="可用包" tabindex="-1"><a class="header-anchor" href="#可用包" aria-hidden="true">#</a> 可用包</h2>
<p>我们将babylon.js的核心和模块作为npm包提供。以下是可用包：</p>
<ul>
<li><a href="https://www.npmjs.com/package/@babylonjs/core" target="_blank" rel="noopener noreferrer">@babylonjs/core<ExternalLinkIcon/></a> - Babylon的核心。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/materials" target="_blank" rel="noopener noreferrer">@babylonjs/materials<ExternalLinkIcon/></a> - Babylon支持的高级材质的集合。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/loaders" target="_blank" rel="noopener noreferrer">@babylonjs/loaders<ExternalLinkIcon/></a> - Babylon的所有官方加载器（OBJ、STL、glTF）。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/post-processes" target="_blank" rel="noopener noreferrer">@babylonjs/post-processes<ExternalLinkIcon/></a> - Babylon的后期处理。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/procedural-textures" target="_blank" rel="noopener noreferrer">@babylonjs/procedural-textures<ExternalLinkIcon/></a> - 官方支持的程序纹理。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/serializers" target="_blank" rel="noopener noreferrer">@babylonjs/serializers<ExternalLinkIcon/></a> - 场景/网格序列化器。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/gui" target="_blank" rel="noopener noreferrer">@babylonjs/gui<ExternalLinkIcon/></a> -Babylon.js GUI模块。</li>
<li><a href="https://www.npmjs.com/package/@babylonjs/inspector" target="_blank" rel="noopener noreferrer">@babylonjs/inspector<ExternalLinkIcon/></a> -独立的Babylon.js查看器。</li>
</ul>
<h2 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例" aria-hidden="true">#</a> 基础示例</h2>
<p>在这里可以找到一个模板项目，其中有一些关于如何使用es6模块的例子 - GitHub上的<a href="https://github.com/RaananW/babylonjs-webpack-es6" target="_blank" rel="noopener noreferrer">Babylon.js、webpack和es6模块<ExternalLinkIcon/></a>。这是一个项目的骨架，基于TypeScript、webpack和我们的es6模块。不同的场景（资产加载、物理学、简单场景）来展示模块加载和Babylon.js的不同方面。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p>由于ES6版本是由许多分离的文件组成的，消费这种包的通常方式是通过Webpack或其他捆绑器。下面的例子将用Webpack完成，但你可以依靠任何你熟悉的工具。</p>
<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2>
<p>安装最新预览版核心</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @babylonjs/core@5.0.0-alpha.60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
