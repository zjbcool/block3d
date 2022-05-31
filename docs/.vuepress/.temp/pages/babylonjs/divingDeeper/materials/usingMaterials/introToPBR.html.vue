<template><h1 id="基于物体渲染-pbr" tabindex="-1"><a class="header-anchor" href="#基于物体渲染-pbr" aria-hidden="true">#</a> 基于物体渲染 PBR</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#pbrmetallicroughnessmaterial">PBRMetallicRoughnessMaterial</RouterLink></li><li><RouterLink to="#pbrspecularglossinessmaterial">PBRSpecularGlossinessMaterial</RouterLink></li><li><RouterLink to="#灯光">灯光</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>基于物理的渲染 Physically Based Rendering（PBR），其目的是为了模拟现实生活中的照明。</p>
<p>PBR是一组技术，它并不强迫你必须选择一个。在其他技术中，还有例如：</p>
<ul>
<li><a href="http://blog.selfshadow.com/publications/s2012-shading-course/burley/s2012_pbs_disney_brdf_slides_v2.pdf" target="_blank" rel="noopener noreferrer">Disney<ExternalLinkIcon/></a></li>
<li><a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.18.4558&amp;rep=rep1&amp;type=pdf" target="_blank" rel="noopener noreferrer">Ashkimin Shirley BRDF<ExternalLinkIcon/></a></li>
</ul>
<p>在Babylon.js中，PBR是通过 PBRMaterial完成的。这个材质包含了现代基于物理的渲染所需的所有功能。在本教程中，我们看看两个预设的简化版本，让你快速开始使用PBR。</p>
<p>你可以从Babylon.js的主网站上找到一个使用<a href="https://www.babylonjs.com/demos/pbrglossy/" target="_blank" rel="noopener noreferrer">PBRMaterial<ExternalLinkIcon/></a>的效果演示。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fpbr.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>两个额外的材质是<code v-pre>PBRMetallicRoughnessMaterial</code>和<code v-pre>PBRSpecularGlossinessMaterial</code>。它们都实现了一个基于GLTF规范的特定规范。</p>
<ul>
<li><a href="https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#metallic-roughness-material" target="_blank" rel="noopener noreferrer">Metallic roughness convention<ExternalLinkIcon/></a> (推荐的规范)</li>
<li><a href="https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness/README.md" target="_blank" rel="noopener noreferrer">Specular glossiness convention<ExternalLinkIcon/></a></li>
</ul>
<h2 id="pbrmetallicroughnessmaterial" tabindex="-1"><a class="header-anchor" href="#pbrmetallicroughnessmaterial" aria-hidden="true">#</a> PBRMetallicRoughnessMaterial</h2>
<p>这个材质基于5个主要的值：</p>
<ul>
<li>baseColor / baseTexture：基色有两种不同的解释，这取决于金属度 metallic 的值。当材质为金属时，基色为法向入射（F0）下特定测量的反射率值。对于非金属来说，基色代表材质反应的漫反射颜色。</li>
<li>metallic：指定材质的金属度值。也可以用来缩放金属纹理的金属度值。</li>
<li>roughness：指定材质的粗糙度值。也可以用于缩放金属纹理的粗糙度值。</li>
<li>metallicRoughnessTexture：纹理同时包含 B 通道的金属度值和 G 通道的粗糙度值，以保持更好的精度。AO也可以保存在 R 通道中。</li>
<li>environmentTexture：纹理</li>
</ul>
<p>由于你已经非常熟悉Babylon标准材质，现在我们只尝试在这里解决主要的区别，作为最简单的设置；你唯一的变化是实例化一个<code v-pre>PBRMetallicRoughnessMaterial</code>而不是<code v-pre>StandardMaterial</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMetallicRoughnessMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>baseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#2FDQT5" target="_blank" rel="noopener noreferrer">PBR材质示例<ExternalLinkIcon/></a></p>
<p>在这个特定的配置下，你可以看到根本就没有反射（金属性设置为0），也没有镜面（粗糙度设置为1）。</p>
<p>如果我们想引入更多的反射，我们可以直接反过来做：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>baseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在这种情况下，我们需要一些东西来反映。要定义这个环境，只需添加这一行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span>
  <span class="token string">"/textures/environment.dds"</span><span class="token punctuation">,</span>
  scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#2FDQT5#11" target="_blank" rel="noopener noreferrer">带环境纹理的PRB材质示例<ExternalLinkIcon/></a></p>
<p>也许现在有点太反光了，所以让我们添加更多的粗糙度，让它看起来更像金色：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>baseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.4</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span>
  <span class="token string">"/textures/environment.dds"</span><span class="token punctuation">,</span>
  scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#2FDQT5#12" target="_blank" rel="noopener noreferrer">粗糙的镜面反射PBR示例<ExternalLinkIcon/></a></p>
<p>为了更精确地控制对象的金属度和粗糙度，你也可以指定<code v-pre>metallicRoughnessTexture</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>baseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">// set to 1 to only use it from the metallicRoughnessTexture</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">// set to 1 to only use it from the metallicRoughnessTexture</span>
pbr<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span>
  <span class="token string">"/textures/environment.dds"</span><span class="token punctuation">,</span>
  scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallicRoughnessTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"/textures/mr.jpg"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#2FDQT5#13" target="_blank" rel="noopener noreferrer">金属粗糙纹理示例<ExternalLinkIcon/></a></p>
<h2 id="pbrspecularglossinessmaterial" tabindex="-1"><a class="header-anchor" href="#pbrspecularglossinessmaterial" aria-hidden="true">#</a> PBRSpecularGlossinessMaterial</h2>
<p>该材质主要基于以下5个值：</p>
<ul>
<li>diffuseColor / diffuseTexture：指定材质的漫反射颜色</li>
<li>specularColor：指定材质的镜面颜色。这表示材质的反射程度（无到镜面）。</li>
<li>glossiness（光泽度）：指定材质的光泽度。这表示 &quot;反射的锐利程度&quot;。</li>
<li>specularGlossinessTexture：指定材质的镜面颜色RGB和每像素的光泽度A。</li>
<li>environmentTexture：纹理</li>
</ul>
<p>此材质的设置与 PBRMetallicRoughnessMaterial 中使用的设置相当：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRSpecularGlossinessMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>glossiness <span class="token operator">=</span> <span class="token number">0.4</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span>
  <span class="token string">"/textures/environment.dds"</span><span class="token punctuation">,</span>
  scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#Z1VL3V#5" target="_blank" rel="noopener noreferrer">光泽表面PRB示例<ExternalLinkIcon/></a></p>
<p>然后可以使用 specularGlossinessTexture（如 metalRoughnessTexture 纹理）来提供对镜面反射和光泽度的更多控制：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.766</span><span class="token punctuation">,</span> <span class="token number">0.336</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>glossiness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span>
  <span class="token string">"/textures/environment.dds"</span><span class="token punctuation">,</span>
  scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>specularGlossinessTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"/textures/sg.png"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#Z1VL3V#4" target="_blank" rel="noopener noreferrer">光泽度纹理示例<ExternalLinkIcon/></a></p>
<h2 id="灯光" tabindex="-1"><a class="header-anchor" href="#灯光" aria-hidden="true">#</a> 灯光</h2>
<p>动态灯光是你的PBR设置的一个重要部分。你可以决定没有灯光，只用环境纹理来照亮你的场景，或者你可以决定添加额外的光源来增强你的渲染效果。</p>
<p>默认情况下，光的强度是用与源的距离的反平方来计算的。这是一种与现实生活中的光线非常接近的衰减类型。所以，你离得越远，你的强度就需要越大才能到达一个表面。</p>
<p>更进一步说，你在灯光上定义的强度遵循物理学概念：</p>
<ul>
<li>点光源和聚光灯以发光强度(candela, m/sr)定义</li>
<li>平行灯和半球灯以照度(nit, cd/m2)定义</li>
</ul>
<p>你会在掌握PBR中找到更多关于动态照明工作的信息，但首先我们看看如何使用高动态范围（HDR）与PBR一起使用。</p>
</template>
