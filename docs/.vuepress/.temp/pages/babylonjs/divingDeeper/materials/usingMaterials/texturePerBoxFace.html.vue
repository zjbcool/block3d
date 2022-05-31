<template><h1 id="按面给材质" tabindex="-1"><a class="header-anchor" href="#按面给材质" aria-hidden="true">#</a> 按面给材质</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p>该方法仅在使用<code v-pre>MeshBuilder</code>方法创建网格时可用。</p>
<p>以下网格有可识别的面：盒子；圆柱体；挤压的多边形和多面体有可识别的面，并且在使用<code v-pre>MeshBuilder</code>方法创建它们的选项中具有<code v-pre>faceUV</code>和<code v-pre>faceColors</code>参数。这意味着它们的每个面都可以有不同的纹理或颜色。对于颜色来说，一个特定的颜色被映射到一个特定的面。对于纹理来说，图片文件的一部分被映射到一个特定的面。这可以用任何图片来完成，使用包含若干图片的纹理图集组合成一个图片文件通常很有用。</p>
<p>当你关注面的图片方向时，那么就有必要在图片文件中对独立的图片进行不同的方向处理。</p>
<p>在上述网格上使用这些方法，不能有子材质或子网格。</p>
<p>作为先决条件，你可能想在<a href="https://en.wikipedia.org/wiki/UV_mapping" target="_blank" rel="noopener noreferrer">维基百科<ExternalLinkIcon/></a>上了解更多关于UV贴图的信息。</p>
<p><a href="https://doc.babylonjs.com/divingDeeper/materials/using/texturePerBoxFace" target="_blank" rel="noopener noreferrer">https://doc.babylonjs.com/divingDeeper/materials/using/texturePerBoxFace<ExternalLinkIcon/></a></p>
</template>
