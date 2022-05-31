<template><h1 id="增量加载系统" tabindex="-1"><a class="header-anchor" href="#增量加载系统" aria-hidden="true">#</a> 增量加载系统</h1>
<h2 id="使用增量加载系统" tabindex="-1"><a class="header-anchor" href="#使用增量加载系统" aria-hidden="true">#</a> 使用增量加载系统</h2>
<p>为了支持增量加载（由v1.5.0版引入），你只需去<a href="https://github.com/BabylonJS/Exporters/tree/master/Tools/MakeIncremental" target="_blank" rel="noopener noreferrer">这个页面<ExternalLinkIcon/></a>，获得一个工具，将你的.babylon文件转换成.incremental.babylon文件以及相关资源（.babylonmeshdata和.babylongeometrydata文件）。</p>
<p>这些文件可以像标准的.babylon场景一样使用，只是它们将允许Babylon.js自由加载网格和贴图。这意味着网格和纹理不会在启动时被加载，而只是在它们变成活动的时候（当活动相机可以看到它们时）。</p>
<p>你必须把 <em>.babylonmeshdata</em> 和 <em>.babylongeometrydata</em> 文件与 <em>.incremental.babylon</em> 文件放在同一个文件夹中。</p>
<p><a href="https://playground.babylonjs.com/#JA1ND3#84" target="_blank" rel="noopener noreferrer">增量加载示例<ExternalLinkIcon/></a></p>
<h2 id="基于-node-js-的增量文件转换器" tabindex="-1"><a class="header-anchor" href="#基于-node-js-的增量文件转换器" aria-hidden="true">#</a> 基于 Node.js 的增量文件转换器</h2>
<p>这个脚本可以用来从babylon场景生成增量文件。它可以直接从节点运行，也可以集成到构建脚本中。关于如何安装和配置该脚本的更多信息可以在<a href="https://www.npmjs.com/package/babylonjs-make-incremental" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>找到。</p>
</template>
