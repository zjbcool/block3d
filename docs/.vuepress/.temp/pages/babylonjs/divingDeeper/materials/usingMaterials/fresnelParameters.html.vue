<template><h1 id="菲涅尔参数" tabindex="-1"><a class="header-anchor" href="#菲涅尔参数" aria-hidden="true">#</a> 菲涅尔参数</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#菲涅尔参数工作原理">菲涅尔参数工作原理</RouterLink></li><li><RouterLink to="#如何使用">如何使用</RouterLink></li></ul></nav>
<p>Babylon.js 1.14 为 StandardMaterial 引入了新参数：<em>FresnelParameters</em>。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FFresnel%2Ffresnel.jpg&amp;w=1920&amp;q=75" alt="FresnelParameters"></p>
<p>共有5个：</p>
<ul>
<li>StandardMaterial.diffuseFresnelParameters</li>
<li>StandardMaterial.opacityFresnelParameters</li>
<li>StandardMaterial.reflectionFresnelParameters</li>
<li>StandardMaterial.emissiveFresnelParameters</li>
<li>StandardMaterial.refractionFresnelParameters</li>
</ul>
<h2 id="菲涅尔参数工作原理" tabindex="-1"><a class="header-anchor" href="#菲涅尔参数工作原理" aria-hidden="true">#</a> 菲涅尔参数工作原理</h2>
<p>菲涅尔项是由StandardMaterial计算的，目的是根据用户视角来改变颜色的应用方式。</p>
<p>例如，你可以通过使用一个简单的菲涅尔来模拟出色的玻璃或反射效果。菲涅尔会让你在边缘有更多的反射，而不是全部在中心。</p>
<p>代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>reflectionFresnelParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FresnelParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后你可以控制反射是在边缘还是在中心应用。例如，如果你希望反射在边缘（默认情况下），你可以用颜色属性来控制它。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>leftColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>rightColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FFresnel%2Ffresnel02.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>通过使用bias和power属性，你可以控制如何根据这个公式沿物体表面计算菲涅尔:</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>finalFresnelTerm <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span>bias <span class="token operator">+</span> fresnelTerm<span class="token punctuation">,</span> power<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，<code v-pre>bias == 0</code>，<code v-pre>power == 1</code>。</p>
<p>例如，下面的代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>reflectionFresnelParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FresnelParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>leftColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>rightColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>power <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FFresnel%2Ffresnel03.jpg&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2>
<p>FresnelParameter 由以下属性定义：</p>
<ul>
<li>isEnabled：激活或关闭菲涅尔效应</li>
<li>leftColor：定义边缘使用的颜色</li>
<li>rightColor：定义在中心使用的颜色</li>
<li>bias：定义应用于计算菲涅耳项的偏移</li>
<li>power：计算应用于菲涅耳项的指数</li>
</ul>
<p>一个简单示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"Scenes/Customs/skybox/TropicalSunnyDay"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>specularPower <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>

<span class="token comment">// Fresnel</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FresnelParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>reflectionFresnelParameters<span class="token punctuation">.</span>bias <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>

material<span class="token punctuation">.</span>emissiveFresnelParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FresnelParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>emissiveFresnelParameters<span class="token punctuation">.</span>bias <span class="token operator">=</span> <span class="token number">0.6</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>emissiveFresnelParameters<span class="token punctuation">.</span>power <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>emissiveFresnelParameters<span class="token punctuation">.</span>leftColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>emissiveFresnelParameters<span class="token punctuation">.</span>rightColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

material<span class="token punctuation">.</span>opacityFresnelParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FresnelParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>opacityFresnelParameters<span class="token punctuation">.</span>leftColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
material<span class="token punctuation">.</span>opacityFresnelParameters<span class="token punctuation">.</span>rightColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#22KZUW#6" target="_blank" rel="noopener noreferrer">菲涅尔折射示例<ExternalLinkIcon/></a></p>
<p><a href="https://playground.babylonjs.com/#AQZJ4C#0" target="_blank" rel="noopener noreferrer">菲涅尔参数示例<ExternalLinkIcon/></a></p>
</template>
