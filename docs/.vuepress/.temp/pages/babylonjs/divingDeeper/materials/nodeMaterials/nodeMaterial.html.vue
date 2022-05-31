<template><h1 id="节点材质-node-material" tabindex="-1"><a class="header-anchor" href="#节点材质-node-material" aria-hidden="true">#</a> 节点材质 Node Material</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#使用代码创建节点材质">使用代码创建节点材质</RouterLink><ul><li><RouterLink to="#初始步骤">初始步骤</RouterLink></li><li><RouterLink to="#创建块">创建块</RouterLink></li><li><RouterLink to="#连接块">连接块</RouterLink></li><li><RouterLink to="#获取块">获取块</RouterLink></li><li><RouterLink to="#可用块列表">可用块列表</RouterLink></li><li><RouterLink to="#构建节点材质">构建节点材质</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></li><li><RouterLink to="#使用节点材质编辑器">使用节点材质编辑器</RouterLink><ul><li><RouterLink to="#custom-frames">Custom Frames</RouterLink></li><li><RouterLink to="#recreating-the-standardmaterial">Recreating the StandardMaterial</RouterLink></li><li><RouterLink to="#main-building-frames">Main building frames</RouterLink></li><li><RouterLink to="#additional-building-frames">Additional building frames</RouterLink></li><li><RouterLink to="#construction-notes">Construction notes</RouterLink></li><li><RouterLink to="#working-without-a-if-statement">Working without a if statement</RouterLink></li><li><RouterLink to="#discarding-the-fragment-based-on-alpha-cutoff-value">Discarding the fragment based on alpha cutoff value</RouterLink></li></ul></li><li><RouterLink to="#creating-pbr-materials">Creating PBR materials</RouterLink></li><li><RouterLink to="#creating-post-processes">Creating Post Processes</RouterLink></li><li><RouterLink to="#creating-procedural-textures">Creating Procedural textures</RouterLink></li><li><RouterLink to="#creating-particle-shaders">Creating Particle shaders</RouterLink></li><li><RouterLink to="#loading-from-a-file-saved-from-the-node-material-editor">Loading from a file saved from the Node Material Editor</RouterLink></li><li><RouterLink to="#sharing-unique-urls">Sharing unique URLs</RouterLink></li><li><RouterLink to="#loading-from-a-snippet-unique-url">Loading from a snippet (unique URL)</RouterLink></li><li><RouterLink to="#node-material-examples">Node material examples</RouterLink></li></ul></nav>
<p>节点材质是一种简单的、高度可定制的材质，你可以自己一块一块地构建。结合强大的基于节点的编辑器，你可以轻松地为你的Babylon.js场景创建惊人的自定义GPU着色器和特效。</p>
<p>节点材质允许你避免编写复杂的着色器语言代码，而是用简单的过程代替，即使用用户界面（节点材质编辑器）或通过在你的场景代码中创建和连接节点块（节点材质块）。</p>
<h2 id="使用代码创建节点材质" tabindex="-1"><a class="header-anchor" href="#使用代码创建节点材质" aria-hidden="true">#</a> 使用代码创建节点材质</h2>
<h3 id="初始步骤" tabindex="-1"><a class="header-anchor" href="#初始步骤" aria-hidden="true">#</a> 初始步骤</h3>
<h3 id="创建块" tabindex="-1"><a class="header-anchor" href="#创建块" aria-hidden="true">#</a> 创建块</h3>
<h3 id="连接块" tabindex="-1"><a class="header-anchor" href="#连接块" aria-hidden="true">#</a> 连接块</h3>
<h3 id="获取块" tabindex="-1"><a class="header-anchor" href="#获取块" aria-hidden="true">#</a> 获取块</h3>
<h3 id="可用块列表" tabindex="-1"><a class="header-anchor" href="#可用块列表" aria-hidden="true">#</a> 可用块列表</h3>
<h3 id="构建节点材质" tabindex="-1"><a class="header-anchor" href="#构建节点材质" aria-hidden="true">#</a> 构建节点材质</h3>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<h2 id="使用节点材质编辑器" tabindex="-1"><a class="header-anchor" href="#使用节点材质编辑器" aria-hidden="true">#</a> 使用节点材质编辑器</h2>
<h3 id="custom-frames" tabindex="-1"><a class="header-anchor" href="#custom-frames" aria-hidden="true">#</a> Custom Frames</h3>
<h4 id="平铺和偏移" tabindex="-1"><a class="header-anchor" href="#平铺和偏移" aria-hidden="true">#</a> 平铺和偏移</h4>
<h4 id="uv-twirl" tabindex="-1"><a class="header-anchor" href="#uv-twirl" aria-hidden="true">#</a> UV Twirl</h4>
<h4 id="screen-position" tabindex="-1"><a class="header-anchor" href="#screen-position" aria-hidden="true">#</a> Screen Position</h4>
<h3 id="recreating-the-standardmaterial" tabindex="-1"><a class="header-anchor" href="#recreating-the-standardmaterial" aria-hidden="true">#</a> Recreating the StandardMaterial</h3>
<h3 id="main-building-frames" tabindex="-1"><a class="header-anchor" href="#main-building-frames" aria-hidden="true">#</a> Main building frames</h3>
<h3 id="additional-building-frames" tabindex="-1"><a class="header-anchor" href="#additional-building-frames" aria-hidden="true">#</a> Additional building frames</h3>
<h3 id="construction-notes" tabindex="-1"><a class="header-anchor" href="#construction-notes" aria-hidden="true">#</a> Construction notes</h3>
<h3 id="working-without-a-if-statement" tabindex="-1"><a class="header-anchor" href="#working-without-a-if-statement" aria-hidden="true">#</a> Working without a if statement</h3>
<h3 id="discarding-the-fragment-based-on-alpha-cutoff-value" tabindex="-1"><a class="header-anchor" href="#discarding-the-fragment-based-on-alpha-cutoff-value" aria-hidden="true">#</a> Discarding the fragment based on alpha cutoff value</h3>
<h2 id="creating-pbr-materials" tabindex="-1"><a class="header-anchor" href="#creating-pbr-materials" aria-hidden="true">#</a> Creating PBR materials</h2>
<h2 id="creating-post-processes" tabindex="-1"><a class="header-anchor" href="#creating-post-processes" aria-hidden="true">#</a> Creating Post Processes</h2>
<h2 id="creating-procedural-textures" tabindex="-1"><a class="header-anchor" href="#creating-procedural-textures" aria-hidden="true">#</a> Creating Procedural textures</h2>
<h2 id="creating-particle-shaders" tabindex="-1"><a class="header-anchor" href="#creating-particle-shaders" aria-hidden="true">#</a> Creating Particle shaders</h2>
<h2 id="loading-from-a-file-saved-from-the-node-material-editor" tabindex="-1"><a class="header-anchor" href="#loading-from-a-file-saved-from-the-node-material-editor" aria-hidden="true">#</a> Loading from a file saved from the Node Material Editor</h2>
<h2 id="sharing-unique-urls" tabindex="-1"><a class="header-anchor" href="#sharing-unique-urls" aria-hidden="true">#</a> Sharing unique URLs</h2>
<h2 id="loading-from-a-snippet-unique-url" tabindex="-1"><a class="header-anchor" href="#loading-from-a-snippet-unique-url" aria-hidden="true">#</a> Loading from a snippet (unique URL)</h2>
<h2 id="node-material-examples" tabindex="-1"><a class="header-anchor" href="#node-material-examples" aria-hidden="true">#</a> Node material examples</h2>
</template>
