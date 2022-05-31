<template><h1 id="ktx2压缩纹理" tabindex="-1"><a class="header-anchor" href="#ktx2压缩纹理" aria-hidden="true">#</a> KTX2压缩纹理</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#使用压缩纹理格式">使用压缩纹理格式</RouterLink></li><li><RouterLink to="#ktx2-容器">KTX2 容器</RouterLink></li><li><RouterLink to="#babylon-js-支持-ktx2-文件">Babylon.js 支持 .ktx2 文件</RouterLink></li><li><RouterLink to="#工具">工具</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>使用GPU压缩纹理在计算机图形/游戏领域变得越来越重要，因为它允许在相同的内存预算内使用更多的资产，并通过减少GPU方面的缓存失误提供更好的性能。</p>
<p>请注意，我们说的是GPU压缩的纹理，意思是在GPU板上保持压缩的纹理。这与.png或.jpg文件不同，例如，后者也有压缩数据，但在发送到GPU之前必须进行扩展。</p>
<h2 id="使用压缩纹理格式" tabindex="-1"><a class="header-anchor" href="#使用压缩纹理格式" aria-hidden="true">#</a> 使用压缩纹理格式</h2>
<p>业界使用的压缩格式有很多（ASTC、DXT、PVRTC等），根据你的设备，它一般只支持其中的一个（小的）子集：详情见<a href="https://doc.babylonjs.com/advanced_topics/mutliPlatTextures#khronos-texture-container-format--ktx-files" target="_blank" rel="noopener noreferrer">这里的表格<ExternalLinkIcon/></a>。因此，为了支持广泛的设备，你需要以多种不同的格式提供资产，Babylon.js会根据目标设备的能力选择合适的格式。</p>
<p>为一个给定的资产生成和维护这么多的格式可能有点乏味，所以容器文件 container files 已经被创建。这些文件既可以包含同一资产的多种格式，也可以转码为多种格式，作为本文的主题，我们要处理的是<strong>KTX2容器文件格式</strong>。</p>
<h2 id="ktx2-容器" tabindex="-1"><a class="header-anchor" href="#ktx2-容器" aria-hidden="true">#</a> KTX2 容器</h2>
<p><strong>KTX</strong>是<strong>Khronos Texture Container</strong>的缩写，目前的版本是<a href="http://github.khronos.org/KTX-Specification/#basisu_gd" target="_blank" rel="noopener noreferrer">v2.0<ExternalLinkIcon/></a>（我们不会讨论v1版本），相关的文件格式扩展名为**.ktx2**。</p>
<p>这个文件实际上并不包含同一资产的不同格式，而是一个数据的通用表示 universal representation，可以转码为目标设备支持的任何格式——我们说的是<strong>转码</strong>而不是<strong>扩展</strong>，因为数据本身没有被扩展，它们被转换为另一种压缩格式，一种你的目标设备所支持的格式（通用表示法本身就是压缩的）。</p>
<p>目前，通用表示法是通过使用一种被称为<a href="https://github.com/BinomialLLC/basis_universal#basis_universal" target="_blank" rel="noopener noreferrer">Basis Universal<ExternalLinkIcon/></a>（简称BasisU）的压缩算法产生的，该算法由一家名为Binomial的公司创建。这种算法支持两种模式。</p>
<ul>
<li>ETC1S：原始的低/中质量模式，产生较小的文件大小。对图像、照片、地图数据或反照率/镜面等纹理效果最好，但对任何非真彩色数据（如法线图、金属/透明度图等）效果不佳。</li>
<li>UASTC：高质量模式，可用于任何类型的纹理，甚至可用于非彩色数据地图。</li>
</ul>
<p>在这种压缩的基础上，数据可以通过使用<a href="https://facebook.github.io/zstd/" target="_blank" rel="noopener noreferrer">Zstandard<ExternalLinkIcon/></a>压缩方案在UASTC情况下进一步压缩。然而，请注意，这个额外的压缩通道可以产生更小的.ktx2文件大小，但不会产生更小的GPU压缩纹理! 用Zstandard压缩的数据将在CPU端被扩展，然后将被转码为GPU纹理。</p>
<p>请注意，.ktx2 文件也可以存储 GPU 压缩的非通用数据，但就 Babylon.js 而言，它仅处理上面列出的 ETC1S 和 UASTC 通用压缩方案。</p>
<h2 id="babylon-js-支持-ktx2-文件" tabindex="-1"><a class="header-anchor" href="#babylon-js-支持-ktx2-文件" aria-hidden="true">#</a> Babylon.js 支持 .ktx2 文件</h2>
<p>在Babylon.js方面，使用这样的文件是很容易的：只要通过指向你想使用的.ktx2文件来创建一个纹理实例，就像你使用任何其他标准图片格式（png、jpg等）一样！</p>
<p>KTX2格式也通过<a href="https://github.com/KhronosGroup/glTF/pull/1751" target="_blank" rel="noopener noreferrer">KHR_texture_basisu扩展<ExternalLinkIcon/></a>在glTF世界中使用：这个扩展让你能够将 .ktx2 文件用于 .gltf/.glb 文件使用的图片，并且由 Babylon.js 支持。</p>
<p>Babylon.js的KTX2实现是作为一个外部包（<a href="https://github.com/BabylonJS/Babylon.js/tree/master/ktx2Decoder" target="_blank" rel="noopener noreferrer">KTX2解码器<ExternalLinkIcon/></a>）来开发的，设计得很小（最小化的.js文件小于22kb）而且很有效率。根据.ktx2文件中数据的通用表示和目标设备支持的压缩格式，正确的模块被用于转码。只要有可能，就会使用<a href="https://github.com/KhronosGroup/Universal-Texture-Transcoders" target="_blank" rel="noopener noreferrer">通用纹理转码器<ExternalLinkIcon/></a>（UTT），因为它们既非常快又小。对于UTT不支持的转码格式（尚未），则使用<a href="https://github.com/KhronosGroup/KTX-Software/releases" target="_blank" rel="noopener noreferrer">MSC Basis Transcoder<ExternalLinkIcon/></a>模块。</p>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<p>现在你知道为什么应该使用.ktx2文件，那就实际生成它们！</p>
<p>Khronos 提供了可用于生成/检查/转储 .ktx2 文件的<a href="https://github.com/KhronosGroup/KTX-Software/releases" target="_blank" rel="noopener noreferrer">命令行工具<ExternalLinkIcon/></a>：</p>
<ul>
<li><strong>toktx.exe</strong>是主要工具，用于从.png、.jpg文件生成.ktx2文件。有几个选项，只要输入toktx.exe就可以显示它们</li>
<li><strong>ktxinfo.exe</strong>将以人类可读的形式显示关于.ktx2文件的有用数据。</li>
<li><strong>ktx2check.exe</strong>将检查你的.ktx2文件是否是一个有效文件</li>
<li><strong>ktxsc.exe</strong>将允许你更新现有.ktx2文件的一些参数（改变压缩方案，添加Zstandard压缩，等等）</li>
</ul>
</template>
