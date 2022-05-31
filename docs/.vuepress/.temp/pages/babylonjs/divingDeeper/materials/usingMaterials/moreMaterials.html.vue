<template><h1 id="凹凸、不透明度、平铺及细节贴图" tabindex="-1"><a class="header-anchor" href="#凹凸、不透明度、平铺及细节贴图" aria-hidden="true">#</a> 凹凸、不透明度、平铺及细节贴图</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#凹凸贴图-bump-map">凹凸贴图 Bump Map</RouterLink></li><li><RouterLink to="#凹凸贴图示例">凹凸贴图示例</RouterLink></li><li><RouterLink to="#翻转法线贴图">翻转法线贴图</RouterLink></li><li><RouterLink to="#不透明度-opacitytexture">不透明度 opacityTexture</RouterLink></li><li><RouterLink to="#平铺-tiling">平铺 Tiling</RouterLink></li><li><RouterLink to="#偏移-offsetting">偏移 Offsetting</RouterLink></li><li><RouterLink to="#细节贴图-details-maps">细节贴图 Details maps</RouterLink></li></ul></nav>
<p>使用几行额外的代码就可以实现一系列的纹理效果。</p>
<h2 id="凹凸贴图-bump-map" tabindex="-1"><a class="header-anchor" href="#凹凸贴图-bump-map" aria-hidden="true">#</a> 凹凸贴图 Bump Map</h2>
<p>凹凸贴图是一种在渲染的表面上模拟凹凸的技术。这些都是通过从图片生成法线贴图来实现的。方法可以在网上找到，搜索 &quot;法线贴图生成器 normal map generator&quot;可以找到免费和付费的方法。</p>
<p>法线贴图和原始图片：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbump.png&amp;w=1920&amp;q=75" alt=""></p>
<p>凹凸贴图可以与颜色一起使用；也可以与它的原始贴图或另一张贴图一起使用，如下图：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbump_spheres.png&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="凹凸贴图示例" tabindex="-1"><a class="header-anchor" href="#凹凸贴图示例" aria-hidden="true">#</a> 凹凸贴图示例</h2>
<p>只要在现有的纹理上添加一个<code v-pre>bumpTexture</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO NORMAL MAP"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#20OAV9#23" target="_blank" rel="noopener noreferrer">凹凸贴图示例<ExternalLinkIcon/></a></p>
<h2 id="翻转法线贴图" tabindex="-1"><a class="header-anchor" href="#翻转法线贴图" aria-hidden="true">#</a> 翻转法线贴图</h2>
<p>在材质上使用 <code v-pre>invertNormalMapX</code> 和/或 <code v-pre>invertNormalMapY。</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO NORMAL MAP"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>invertNormalMapX <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>invertNormalMapY <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不透明度-opacitytexture" tabindex="-1"><a class="header-anchor" href="#不透明度-opacitytexture" aria-hidden="true">#</a> 不透明度 opacityTexture</h2>
<p>材质的不透明度可以使用具有不同透明度的图片进行控制。以下带有透明度渐变的PNG图片可以使用<code v-pre>opacityTexture</code>应用到材质中。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdegrade_map.png&amp;w=1920&amp;q=75" alt=""></p>
<p>对材质应用相同的渐变，如下图所示。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdegraded_plane.png&amp;w=1920&amp;q=75" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>opacityTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO OPACITY MAP"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#20OAV9#24" target="_blank" rel="noopener noreferrer">不透明度贴图示例<ExternalLinkIcon/></a></p>
<h2 id="平铺-tiling" tabindex="-1"><a class="header-anchor" href="#平铺-tiling" aria-hidden="true">#</a> 平铺 Tiling</h2>
<p>当材质应用于网格时，用于纹理的图片根据坐标定位。字母 u 和 v 用于坐标，而不是已经用于 3D 轴的 x、y。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fcrate.png&amp;w=1920&amp;q=75" alt=""></p>
<p>要平铺图片，可以使用纹理的 <code v-pre>uScale</code> 和/或 <code v-pre>vScale</code> 属性来设置每个方向的平铺数量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>uScale <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>vScale <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="偏移-offsetting" tabindex="-1"><a class="header-anchor" href="#偏移-offsetting" aria-hidden="true">#</a> 偏移 Offsetting</h2>
<p>要在网格上偏移纹理，请使用纹理的 <code v-pre>uOffset</code> 和 <code v-pre>vOffset</code> 属性来设置每个方向的偏移。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>uOffset <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>vOffset <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#20OAV9#25" target="_blank" rel="noopener noreferrer">平铺和偏移示例<ExternalLinkIcon/></a></p>
<h2 id="细节贴图-details-maps" tabindex="-1"><a class="header-anchor" href="#细节贴图-details-maps" aria-hidden="true">#</a> 细节贴图 Details maps</h2>
<p>细节贴图（也叫次级贴图 secondary map）通常用于在近距离观看时为常规的主纹理添加额外的细节。</p>
<p>例如，请看这个没有细节贴图的大理石纹理：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdetailmap_without.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>由于纹理被放大，可以看到大面积相同的颜色，没有细节。</p>
<p>使用细节贴图改进后:</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdetailmap_with.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>上图中使用的细节贴图只包含一个反射率（漫反射）通道，该通道在主纹理上被平铺了10次。</p>
<p>你也可以在细节贴图中添加一个法线通道。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdetailmap_bump_without.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdetailmap_bump_with.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>第一张图是主图+凹凸纹理，没有细节贴图，第二张图是主图+凹凸纹理+细节贴图，有反射率和法线通道。</p>
</template>
