<template><h1 id="程序纹理-procedural-textures" tabindex="-1"><a class="header-anchor" href="#程序纹理-procedural-textures" aria-hidden="true">#</a> 程序纹理 Procedural Textures</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#什么是程序纹理">什么是程序纹理？</RouterLink></li><li><RouterLink to="#babylon-js中的程序纹理">Babylon.js中的程序纹理</RouterLink></li><li><RouterLink to="#使用程序纹理">使用程序纹理</RouterLink></li><li><RouterLink to="#noise-procedural-texture">Noise Procedural Texture</RouterLink></li><li><RouterLink to="#使用标准程序纹理">使用标准程序纹理</RouterLink></li></ul></nav>
<h2 id="什么是程序纹理" tabindex="-1"><a class="header-anchor" href="#什么是程序纹理" aria-hidden="true">#</a> 什么是程序纹理？</h2>
<p>在传统的纹理设计中，我们使用二维图片，通常是专门为配合一个物体而制作的图片。想象一下，你正在创建一个中世纪的幻想游戏，在一个矮人酒馆工作，那里有多张 &quot;老式&quot;的大木桌。使用传统的2D贴图，你有3个选择。</p>
<ul>
<li>创建一个纹理，并在所有的桌子上使用它（但每张桌子看起来都一样）</li>
<li>创建一个各种木材纹理的集合，并将它们随机地应用到每张桌子上</li>
<li>为每张桌子创建一个单独的纹理，确保它们看起来都不一样</li>
</ul>
<p>似乎没有一个是好的选择。</p>
<p>下面来看程序纹理。</p>
<p>程序化纹理是一种以编程方式创建纹理的方法。程序性纹理有两种类型：纯代码，以及引用一些传统2D图片的代码，有时被称为 &quot;refMaps &quot;或 &quot;采样器 sampler&quot;图片。</p>
<p>程序性纹理的一个主要优点是，它们是用片段着色器（在Babylon.js的情况下使用GLSL）编写的。这意味着生成纹理的代码是由GPU而不是CPU执行的（也就是说，不是由JavaScript代码执行）。这对性能有巨大的积极影响。</p>
<p>程序纹理可以：</p>
<ul>
<li>只创建一次纹理，并将其放入缓存中</li>
<li>每隔1、2、3、4或更多帧就能创建一个动画纹理（如火）。</li>
</ul>
<p>更多关于 &quot;刷新率 refresh rate&quot;的信息，请参见自定义程序纹理部分......在最下面。</p>
<h2 id="babylon-js中的程序纹理" tabindex="-1"><a class="header-anchor" href="#babylon-js中的程序纹理" aria-hidden="true">#</a> Babylon.js中的程序纹理</h2>
<p>Babylon.js为你提供了一种简单的开箱即用的方式来使用这种纹理。该引擎本身为你提供了标准的默认纹理，你现在就可以使用。它还为你提供了创建自定义程序纹理的能力，并以简单的方式将其打包。</p>
<h2 id="使用程序纹理" tabindex="-1"><a class="header-anchor" href="#使用程序纹理" aria-hidden="true">#</a> 使用程序纹理</h2>
<p>应用程序纹理与使用传统纹理相同。让我们从一个简单的网格（在本例中为圆柱体）开始并将其附加到场景中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cylinder <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Mesh<span class="token punctuation">.</span><span class="token function">CreateCylinder</span><span class="token punctuation">(</span><span class="token string">"mycylinder"</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，创建一个标准材质：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"material"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，创建一个<code v-pre>WoodProceduralTexture</code>对象，需要为它传递一个名称、生成的纹理的大小和场景。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>WoodProceduralTexture</span><span class="token punctuation">(</span><span class="token string">"texture"</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你几乎已经准备好了! 你现在需要做的是将纹理与材质关联起来，例如，作为一个diffuseTexture（或emmissiveTexture，specularTexture，任何其他），然后将材质应用于网格。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> texture<span class="token punctuation">;</span>
cylinder<span class="token punctuation">.</span>material <span class="token operator">=</span> material<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以选择性地改变特殊默认属性的值。下面是一个为WoodProceduralTexture设置两个属性的例子。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>texture<span class="token punctuation">.</span>woodColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.49</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
texture<span class="token punctuation">.</span>ampScale <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="noise-procedural-texture" tabindex="-1"><a class="header-anchor" href="#noise-procedural-texture" aria-hidden="true">#</a> Noise Procedural Texture</h2>
<p><code v-pre>NoiseProceduralTexture</code>在Babylon.js核心引擎中是开箱即用的。</p>
<p>可以用以下代码创建一个:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> noiseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>NoiseProceduralTexture</span><span class="token punctuation">(</span><span class="token string">"perlin"</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>NoiseProceduralTexture暴露了以下属性：</p>
<ul>
<li>brightness（亮度）：获取或设置一个0到1之间的值，表示纹理的整体亮度（默认为0.2）。</li>
<li>octaves（八度）：定义要处理的八度空间的数量（默认为3）。</li>
<li>persistence（持久性）：定义持久性的级别（默认为0.8）</li>
<li>animationSpeedFactor（动画速度系数）：获取或设置动画速度系数（默认为1）</li>
</ul>
<p><a href="https://playground.babylonjs.com/#K9GLE6#49" target="_blank" rel="noopener noreferrer">噪波程序纹理示例<ExternalLinkIcon/></a></p>
<h2 id="使用标准程序纹理" tabindex="-1"><a class="header-anchor" href="#使用标准程序纹理" aria-hidden="true">#</a> 使用标准程序纹理</h2>
<p>Babylon.js也有一些预先建立的程序纹理，它们收集在程序纹理库中： <a href="https://github.com/BabylonJS/Babylon.js/tree/master/proceduralTexturesLibrary" target="_blank" rel="noopener noreferrer">https://github.com/BabylonJS/Babylon.js/tree/master/proceduralTexturesLibrary<ExternalLinkIcon/></a></p>
<p>你可以通过以下方式用于项目中：</p>
<ul>
<li>使用npm通过 npm install --save babylonjs babylonjs-procedural-textures</li>
<li>直接引用：https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js</li>
</ul>
<p>所有的标准程序纹理都可以用相同的方式使用，但它们都有特定的（特殊）属性：</p>
<ul>
<li>WoodProceduralTexture: //doc.babylonjs.com/extensions/woodproceduraltexture</li>
<li>MarbleProceduralTexture: //doc.babylonjs.com/extensions/marbleproceduraltexture</li>
<li>BrickProceduralTexture: //doc.babylonjs.com/extensions/brickproceduraltexture</li>
<li>FireProceduralTexture: //doc.babylonjs.com/extensions/fireproceduraltexture</li>
<li>GrassProceduralTexture: //doc.babylonjs.com/extensions/grassproceduraltexture</li>
<li>RoadProceduralTexture: //doc.babylonjs.com/extensions/roadproceduraltexture</li>
<li>CloudProceduralTexture: //doc.babylonjs.com/extensions/cloudproceduraltexture</li>
</ul>
</template>
