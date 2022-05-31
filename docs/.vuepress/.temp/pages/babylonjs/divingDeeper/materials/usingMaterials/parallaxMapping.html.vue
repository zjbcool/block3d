<template><h1 id="视差贴图-parallax-mapping" tabindex="-1"><a class="header-anchor" href="#视差贴图-parallax-mapping" aria-hidden="true">#</a> 视差贴图 Parallax Mapping</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#什么是视差贴图">什么是视差贴图？</RouterLink></li><li><RouterLink to="#视差贴图-parallax-mapping-1">视差贴图 Parallax Mapping</RouterLink></li><li><RouterLink to="#视差遮蔽贴图-pom-parallax-occlusion-mapping-pom">视差遮蔽贴图 (POM) Parallax Occlusion Mapping (POM)</RouterLink></li><li><RouterLink to="#babylon-js的视差贴图">Babylon.js的视差贴图</RouterLink></li></ul></nav>
<p>从Babylon.js v2.4开始，我们引入了视差贴图。</p>
<p><a href="https://playground.babylonjs.com/#10I31V#23" target="_blank" rel="noopener noreferrer">视差贴图示例<ExternalLinkIcon/></a></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fparallax-mapping.jpg&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="什么是视差贴图" tabindex="-1"><a class="header-anchor" href="#什么是视差贴图" aria-hidden="true">#</a> 什么是视差贴图？</h2>
<p>视差贴图 Parallax Mapping 是一种算法，它基于高度贴图，在材质的纹理上应用一个偏移，以突出几何体表面的浮雕效果。</p>
<p>虽然这种技术是独立于法线Normal贴图（又称凹凸Bump）的，但经常与它一起使用。原因很简单，执行视差贴图所需的高度贴图在大多数情况下是在法线贴图纹理的Alpha通道中编码的。(使用视差贴图需要一个漫反射纹理）。</p>
<p>有很多技术是基于视差映射原理的，Babylon.js支持其中的两种。</p>
<h2 id="视差贴图-parallax-mapping-1" tabindex="-1"><a class="header-anchor" href="#视差贴图-parallax-mapping-1" aria-hidden="true">#</a> 视差贴图 Parallax Mapping</h2>
<p>核心算法是在高度图的基础上对纹理UV坐标进行偏移计算。这个算法执行起来非常快，如果你已经在使用Bump，你几乎可以认为它是白送的。</p>
<h2 id="视差遮蔽贴图-pom-parallax-occlusion-mapping-pom" tabindex="-1"><a class="header-anchor" href="#视差遮蔽贴图-pom-parallax-occlusion-mapping-pom" aria-hidden="true">#</a> 视差遮蔽贴图 (POM) Parallax Occlusion Mapping (POM)</h2>
<p>传统的视差贴图是根据高度图的一个样本来计算偏移量的，而Occlusion版本会对高度图进行多次循环采样，以达到一个更精确的位置，计算出的像素应该反映什么。</p>
<p>其结果比传统的视差法更逼真，但可能会有性能上的影响，需要考虑。</p>
<h2 id="babylon-js的视差贴图" tabindex="-1"><a class="header-anchor" href="#babylon-js的视差贴图" aria-hidden="true">#</a> Babylon.js的视差贴图</h2>
<p>可通过以下材质使用视差贴图：</p>
<ul>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.standardmaterial" target="_blank" rel="noopener noreferrer">StandardMaterial<ExternalLinkIcon/></a></li>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.pbrmaterial" target="_blank" rel="noopener noreferrer">PBRMaterial<ExternalLinkIcon/></a></li>
</ul>
<p>在Babylon.js中，我们认为视差贴图是法线贴图的延伸，因此要从前者中获益，你必须启用后者。原因是我们只支持将高度贴图编码到法线贴图的Alpha通道中，如上所述。</p>
<p>你有三个属性可以和视差算法一起工作。</p>
<ul>
<li>useParallax：启用凹凸上的视差贴图。如果你没有指定凹凸纹理 bumpTexture，这个属性就不会有任何影响。</li>
<li>useParallaxOcclusion：启用视差遮蔽，设置这个属性时，必须同时将useParallax设置为true。</li>
<li>parallaxScaleBias：应用一个缩放系数，决定高度贴图应该代表哪个 &quot;深度&quot;。在视差中，0.05和0.1之间的值是合理的，你可以使用视差遮蔽达到0.2。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"mtl01"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    material<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> stoneDiffuseTexture<span class="token punctuation">;</span>
    material<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> stoneNormalsHeightTexture<span class="token punctuation">;</span> <span class="token comment">// 必须指定凹凸贴图</span>
    material<span class="token punctuation">.</span>useParallax <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    material<span class="token punctuation">.</span>useParallaxOcclusion <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    material<span class="token punctuation">.</span>parallaxScaleBias <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span> <span class="token comment">// 0.05 - 0.1</span>
    material<span class="token punctuation">.</span>specularPower <span class="token operator">=</span> <span class="token number">1000.0</span><span class="token punctuation">;</span>
	material<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中stoneNormalHeightTexture是一张法线贴图，其Alpha通道中一张高度图：</p>
<p><img src="http://i.imgur.com/zVGaZNi.png" alt=""></p>
</template>
