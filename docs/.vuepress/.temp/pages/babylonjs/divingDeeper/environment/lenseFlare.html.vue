<template><h1 id="镜头光晕-lensflare" tabindex="-1"><a class="header-anchor" href="#镜头光晕-lensflare" aria-hidden="true">#</a> 镜头光晕 LensFlare</h1>
<h2 id="如何使用镜头光晕" tabindex="-1"><a class="header-anchor" href="#如何使用镜头光晕" aria-hidden="true">#</a> 如何使用镜头光晕</h2>
<p>Babylon.js 可以简单地创建镜头光晕效果：</p>
<p><a href="https://playground.babylonjs.com/#TQ67L1#5" target="_blank" rel="noopener noreferrer">镜头光晕效果<ExternalLinkIcon/></a></p>
<p>首先需要创建一个 LensFlareSystem：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> lensFlareSystem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>LensFlareSystem</span><span class="token punctuation">(</span><span class="token string">"lensFlareSystem"</span><span class="token punctuation">,</span> myEmitter<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第2个参数定义了镜头光晕的来源（发射器）（可以是相机、灯光或网格）。
然后，你可以用下面的代码将光晕添加到系统中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> flare00 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>LensFlare</span><span class="token punctuation">(</span>
    <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token comment">// size</span>
    <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// position</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// color</span>
    <span class="token string">"textures/flare.png"</span><span class="token punctuation">,</span> <span class="token comment">// texture</span>
    lensFlareSystem <span class="token comment">// lens flare system</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flare01 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>LensFlare</span><span class="token punctuation">(</span><span class="token number">0.075</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.56</span><span class="token punctuation">,</span> <span class="token number">0.72</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"textures/flare3.png"</span><span class="token punctuation">,</span> lensFlareSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flare02 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>LensFlare</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.71</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.95</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"textures/Flare2.png"</span><span class="token punctuation">,</span> lensFlareSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flare03 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>LensFlare</span><span class="token punctuation">(</span><span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token number">0.89</span><span class="token punctuation">,</span> <span class="token number">0.71</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"textures/flare.png"</span><span class="token punctuation">,</span> lensFlareSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要创建一个光晕，必须指定以下参数</p>
<ul>
<li>Size 大小（一个在0和1之间的浮点值）</li>
<li>Position 位置（一个在-1和1之间的浮点值）。值为0时，位于发射器上。大于0的值位于发射器之外，小于0的值位于发射器的后面。</li>
<li>Color 颜色</li>
<li>Texture 纹理</li>
</ul>
<p>Babylon.js 还可以检测遮挡。如果满足以下条件，网格可以遮挡镜头光晕：</p>
<ul>
<li>has a material</li>
<li>isVisible === true</li>
<li>isEnabled() === true</li>
<li>isBlocker === true</li>
</ul>
</template>
