<template><h1 id="网格辉光-glowlayer" tabindex="-1"><a class="header-anchor" href="#网格辉光-glowlayer" aria-hidden="true">#</a> 网格辉光 GlowLayer</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#网格辉光效果">网格辉光效果</RouterLink></li><li><RouterLink to="#如何使用">如何使用？</RouterLink></li><li><RouterLink to="#强度控制">强度控制</RouterLink><ul><li><RouterLink to="#颜色强度">颜色强度</RouterLink></li><li><RouterLink to="#模糊度">模糊度</RouterLink></li><li><RouterLink to="#控制每物体的模糊颜色">控制每物体的模糊颜色</RouterLink></li></ul></li><li><RouterLink to="#抗锯齿-anti-aliasing">抗锯齿 Anti Aliasing</RouterLink></li><li><RouterLink to="#网格管理">网格管理</RouterLink><ul><li><RouterLink to="#排除网格">排除网格</RouterLink></li><li><RouterLink to="#仅包含网格">仅包含网格</RouterLink></li></ul></li><li><RouterLink to="#glowlayer-api">GlowLayer API</RouterLink></li></ul></nav>
<h2 id="网格辉光效果" tabindex="-1"><a class="header-anchor" href="#网格辉光效果" aria-hidden="true">#</a> 网格辉光效果</h2>
<p>发光 Emissive 网格等同于自发光网格。材质的发光颜色 emissive color 和纹理 texture 都决定了网格的自发光方式。例如，这可以帮助创建一个磷光的手表表盘。Babylon JS在标准材质和PBR材质中都支持原生的 <code v-pre>emissive</code> 属性。</p>
<p>但是，我们怎样才能轻松地使这些自发光的区域周围发光呢？</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fglow-layer%2Fintroduction.jpg&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h2>
<p>只需要一行代码就可以让场景中所有发光部分发出辉光：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#LRFB2D#1" target="_blank" rel="noopener noreferrer">基础辉光示例<ExternalLinkIcon/></a></p>
<h2 id="强度控制" tabindex="-1"><a class="header-anchor" href="#强度控制" aria-hidden="true">#</a> 强度控制</h2>
<p>默认情况下，辉光层 GlowLayer 强度由材质的发光 emissive 参数决定。它还将使用值为32的模糊度，可能不能满足我们的视觉要求。</p>
<h3 id="颜色强度" tabindex="-1"><a class="header-anchor" href="#颜色强度" aria-hidden="true">#</a> 颜色强度</h3>
<p>为了控制辉光层中颜色的强度，可以使用专用属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
gl<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#LRFB2D#2" target="_blank" rel="noopener noreferrer">辉光强度示例<ExternalLinkIcon/></a></p>
<h3 id="模糊度" tabindex="-1"><a class="header-anchor" href="#模糊度" aria-hidden="true">#</a> 模糊度</h3>
<p>使用创建选项可以控制模糊的形状：</p>
<ul>
<li>mainTextureRatio: 适用于画布尺寸的乘法系数，用于计算生成发光对象的渲染目标 render target 尺寸（越小越快）。</li>
<li>mainTextureFixedSize: 强制执行固定大小的纹理，以确保独立于尺寸的模糊，防止模糊的形状随目标设备的大小而改变。</li>
<li>blurKernelSize：模糊纹理的颗粒有多大。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">mainTextureFixedSize</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token literal-property property">blurKernelSize</span><span class="token operator">:</span> <span class="token number">64</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#LRFB2D#3" target="_blank" rel="noopener noreferrer">模糊度示例<ExternalLinkIcon/></a></p>
<h3 id="控制每物体的模糊颜色" tabindex="-1"><a class="header-anchor" href="#控制每物体的模糊颜色" aria-hidden="true">#</a> 控制每物体的模糊颜色</h3>
<p>默认情况下，辉光层将使用发光纹理和发光颜色来生成每个活动网格的辉光颜色。但是我们可以用下面的回调来覆盖这个行为。</p>
<ul>
<li>customEmissiveColorSelector: (Mesh: Mesh, subMesh: SubMesh, material: Material, result: Color4) =&gt; void: 回调，用于让用户在每个网格的基础上覆盖颜色选择。</li>
<li>customEmissiveTextureSelector(Mesh: Mesh, subMesh: SubMesh, material: Material) =&gt; Texture: 回调，用于让用户在每个网格的基础上覆盖纹理选择。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
gl<span class="token punctuation">.</span><span class="token function-variable function">customEmissiveColorSelector</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mesh<span class="token punctuation">,</span> subMesh<span class="token punctuation">,</span> material<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">"lightsaber"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抗锯齿-anti-aliasing" tabindex="-1"><a class="header-anchor" href="#抗锯齿-anti-aliasing" aria-hidden="true">#</a> 抗锯齿 Anti Aliasing</h2>
<p>根据设置，辉光中可能会出现一些锯齿伪影。为了防止这种情况，你可以在主渲染目标 render target 上指定用于<strong>MSAA</strong>的采样数量。请注意，它只能在支持WebGL2的浏览器上工作。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">mainTextureSamples</span><span class="token operator">:</span> <span class="token number">4</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#LRFB2D#4" target="_blank" rel="noopener noreferrer">辉光抗锯齿示例<ExternalLinkIcon/></a></p>
<h2 id="网格管理" tabindex="-1"><a class="header-anchor" href="#网格管理" aria-hidden="true">#</a> 网格管理</h2>
<p>引入了一些辅助函数以从场景中排除或仅包含一些网格。</p>
<h3 id="排除网格" tabindex="-1"><a class="header-anchor" href="#排除网格" aria-hidden="true">#</a> 排除网格</h3>
<p>为了将网格从辉光层中排除，你可以使用专门的函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
gl<span class="token punctuation">.</span><span class="token function">addExcludedMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#LRFB2D#29" target="_blank" rel="noopener noreferrer">排除网格示例<ExternalLinkIcon/></a></p>
<h3 id="仅包含网格" tabindex="-1"><a class="header-anchor" href="#仅包含网格" aria-hidden="true">#</a> 仅包含网格</h3>
<p>为了在辉光层中仅包含网格的一个子集，可以使用专用函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> gl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GlowLayer</span><span class="token punctuation">(</span><span class="token string">"glow"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
gl<span class="token punctuation">.</span><span class="token function">addIncludedOnlyMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该函数会自动切换模式，只渲染所包含的网格。</p>
<p><a href="https://playground.babylonjs.com/#LRFB2D#30" target="_blank" rel="noopener noreferrer">仅包含网格示例<ExternalLinkIcon/></a></p>
<h2 id="glowlayer-api" tabindex="-1"><a class="header-anchor" href="#glowlayer-api" aria-hidden="true">#</a> GlowLayer API</h2>
<p><a href="https://doc.babylonjs.com/typedoc/classes/babylon.glowlayer" target="_blank" rel="noopener noreferrer">GlowLayer API<ExternalLinkIcon/></a></p>
</template>
