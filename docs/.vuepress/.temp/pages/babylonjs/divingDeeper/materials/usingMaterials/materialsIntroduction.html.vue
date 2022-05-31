<template><h1 id="材质介绍" tabindex="-1"><a class="header-anchor" href="#材质介绍" aria-hidden="true">#</a> 材质介绍</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#对灯光的反应">对灯光的反应</RouterLink></li><li><RouterLink to="#颜色-color">颜色 Color</RouterLink></li><li><RouterLink to="#漫反射颜色示例-diffuse-color">漫反射颜色示例 Diffuse Color</RouterLink></li><li><RouterLink to="#环境色示例-ambient-color">环境色示例 Ambient Color</RouterLink></li><li><RouterLink to="#透明色示例-transparent-color">透明色示例 Transparent Color</RouterLink></li><li><RouterLink to="#纹理-texture">纹理 Texture</RouterLink></li><li><RouterLink to="#纹理示例-texture">纹理示例 Texture</RouterLink></li><li><RouterLink to="#透明纹理示例-transparent-texture">透明纹理示例 Transparent Texture</RouterLink></li><li><RouterLink to="#纹理打包器-texture-packer">纹理打包器 Texture Packer</RouterLink></li><li><RouterLink to="#背面剔除-back-face-culling">背面剔除 Back-Face Culling</RouterLink></li><li><RouterLink to="#线框-wireframe">线框 WireFrame</RouterLink></li><li><RouterLink to="#本地文件访问">本地文件访问</RouterLink></li></ul></nav>
<p>材质允许用颜色和纹理覆盖网格。一个材质如何呈现取决于场景中使用的灯光，以及它对灯光的反应。</p>
<h2 id="对灯光的反应" tabindex="-1"><a class="header-anchor" href="#对灯光的反应" aria-hidden="true">#</a> 对灯光的反应</h2>
<p>材质对灯光的反应有以下四种方式：</p>
<ol>
<li>漫反射 Diffuse - 在灯光下看到的材质的基本颜色或纹理。</li>
<li>高光 Specture - 灯光给材质带来的高亮。</li>
<li>自发光 Emissive--材质的颜色或纹理就像自带发光一样。</li>
<li>环境色 Ambient - 材质的颜色或纹理由环境背景照亮。</li>
</ol>
<p>漫反射和高光材质需要创建光源。</p>
<p>环境色需要设置场景的环境色 <code v-pre>ambientColor</code>，给予环境背景照明。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>ambientColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="颜色-color" tabindex="-1"><a class="header-anchor" href="#颜色-color" aria-hidden="true">#</a> 颜色 Color</h2>
<p>创建材质使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code v-pre>diffuseColor</code>、<code v-pre>specularColor</code>、<code v-pre>emmissiveColor</code>和<code v-pre>ambientColor</code>中的一个、部分或全部来设置材质的颜色。请记住，只有当场景的环境颜色<code v-pre>ambientColor</code>被设置后，环境颜色才会被应用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

myMaterial<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.87</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>ambientColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.23</span><span class="token punctuation">,</span> <span class="token number">0.98</span><span class="token punctuation">,</span> <span class="token number">0.53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> myMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="漫反射颜色示例-diffuse-color" tabindex="-1"><a class="header-anchor" href="#漫反射颜色示例-diffuse-color" aria-hidden="true">#</a> 漫反射颜色示例 Diffuse Color</h2>
<p>为了让大家了解材质的漫反射颜色对漫反射灯光颜色的反应，下面的示例显示了不同颜色的材质对白色、红色、绿色和蓝色漫反射聚光灯的反应。</p>
<p><a href="https://playground.babylonjs.com/#20OAV9#325" target="_blank" rel="noopener noreferrer">材质颜色对灯光颜色的反应示例<ExternalLinkIcon/></a></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fspots1.png&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="环境色示例-ambient-color" tabindex="-1"><a class="header-anchor" href="#环境色示例-ambient-color" aria-hidden="true">#</a> 环境色示例 Ambient Color</h2>
<p>在下图中，所有的球体都被相同的半球光照亮，漫反射为红色，地面颜色为绿色。第一个球体没有环境色，中间球体的材质上给了红色环境色，右边的球体的材质是绿色环境色。场景环境色，必须存在，是白色。</p>
<p>当一个场景的环境色 ambient color 设置为0，那么无论材质环境色中的红色值是多少，都不会有任何影响。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fambient1.png&amp;w=1920&amp;q=75" alt=""></p>
<p><a href="https://playground.babylonjs.com/#20OAV9#14" target="_blank" rel="noopener noreferrer">环境色示例<ExternalLinkIcon/></a></p>
<h2 id="透明色示例-transparent-color" tabindex="-1"><a class="header-anchor" href="#透明色示例-transparent-color" aria-hidden="true">#</a> 透明色示例 Transparent Color</h2>
<p>透明度是通过将材质的alpha属性从0（不可见）设置为1（不透明）而实现的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#20OAV9#16" target="_blank" rel="noopener noreferrer">材质透明示例<ExternalLinkIcon/></a></p>
<h2 id="纹理-texture" tabindex="-1"><a class="header-anchor" href="#纹理-texture" aria-hidden="true">#</a> 纹理 Texture</h2>
<p>纹理是通过图片生成的。</p>
<p>创建材质使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code v-pre>diffuseTexture</code>、<code v-pre>specularTexture</code>、<code v-pre>emmissiveTexture</code>和<code v-pre>ambientTexture</code>中的一个、部分或全部来设置材质纹理。注意，<code v-pre>ambientTexture</code>是在<strong>没有</strong>设置场景环境色的情况下应用的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"myMaterial"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

myMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO IMAGE"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>specularTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO IMAGE"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>emissiveTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO IMAGE"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>ambientTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"PATH TO IMAGE"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> myMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当没有指定法线时，Babylon的标准材质standard material将计算法线。</p>
<h2 id="纹理示例-texture" tabindex="-1"><a class="header-anchor" href="#纹理示例-texture" aria-hidden="true">#</a> 纹理示例 Texture</h2>
<p>在下图中，所有的球体都被相同的半球光 HemisphericLight 照亮，diffuse为红色，groundColor为绿色。第一个球体有漫反射纹理，中间的球体有自发光纹理，右边的球体材质有红色漫反射颜色和环境纹理。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Ftexture1.png&amp;w=1920&amp;q=75" alt=""></p>
<p><a href="https://playground.babylonjs.com/#20OAV9#15" target="_blank" rel="noopener noreferrer">材质的漫反射、自发光、环境色纹理示例<ExternalLinkIcon/></a></p>
<h2 id="透明纹理示例-transparent-texture" tabindex="-1"><a class="header-anchor" href="#透明纹理示例-transparent-texture" aria-hidden="true">#</a> 透明纹理示例 Transparent Texture</h2>
<p>对于颜色，透明度是通过设置材质的alpha属性从0（不可见）到1（不透明）实现的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#20OAV9#17" target="_blank" rel="noopener noreferrer">透明纹理示例<ExternalLinkIcon/></a></p>
<p>此外，用于纹理的图片如果自带透明通道，比如这张来自wikimedia commons的狗的图片，背景是透明的。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdog.png&amp;w=1920&amp;q=75" alt=""></p>
<p>在这种情况下，我们将纹理的<code v-pre>hasAlpha</code>属性设置为true。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>hasAlpha <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#YDO1F#18" target="_blank" rel="noopener noreferrer">图片透明通道示例<ExternalLinkIcon/></a></p>
<p>为了让立方体的背面通过正面的透明区域可见，要处理背面剔除问题。</p>
<h2 id="纹理打包器-texture-packer" tabindex="-1"><a class="header-anchor" href="#纹理打包器-texture-packer" aria-hidden="true">#</a> 纹理打包器 Texture Packer</h2>
<p>一些复杂的场景中一个材质就需要大量的纹理。在这种情况下，将纹理打包是很方便的。使用纹理打包器的优势必须与固定尺寸的缩放等限制进行权衡。</p>
<p>见高级材质相关章节。</p>
<h2 id="背面剔除-back-face-culling" tabindex="-1"><a class="header-anchor" href="#背面剔除-back-face-culling" aria-hidden="true">#</a> 背面剔除 Back-Face Culling</h2>
<p>这是一种有效绘制三维模型的二维渲染的方法。通常情况下，没有必要绘制立方体或其他物体的背面，因为它被正面遮挡。在Babylon.js中，默认设置为 true。多数情况下，这有利于保持高性能。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Back Face Culling True</th>
<th style="text-align:left">Back Face Culling False</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbfc2.png&amp;w=1920&amp;q=75" alt=""></td>
<td style="text-align:left"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbfc1.png&amp;w=1920&amp;q=75" alt=""></td>
</tr>
</tbody>
</table>
<p><a href="https://playground.babylonjs.com/#YDO1F#20" target="_blank" rel="noopener noreferrer">背面剔除示例<ExternalLinkIcon/></a></p>
<h2 id="线框-wireframe" tabindex="-1"><a class="header-anchor" href="#线框-wireframe" aria-hidden="true">#</a> 线框 WireFrame</h2>
<p>显示网格线框使用如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>materialSphere1<span class="token punctuation">.</span>wireframe <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2F04-3.png&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="本地文件访问" tabindex="-1"><a class="header-anchor" href="#本地文件访问" aria-hidden="true">#</a> 本地文件访问</h2>
<p>要记住的一件重要事情是，出于安全考虑，网络浏览器不允许访问网页的本地文件。这包括你正在使用的任何纹理文件。你可以使用本地服务器或启用了 CORS 的图像托管服务。</p>
</template>
