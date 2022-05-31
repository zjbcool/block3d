<template><h1 id="裁切平面-clipping-planes" tabindex="-1"><a class="header-anchor" href="#裁切平面-clipping-planes" aria-hidden="true">#</a> 裁切平面 Clipping Planes</h1>
<h2 id="如何使用裁切平面" tabindex="-1"><a class="header-anchor" href="#如何使用裁切平面" aria-hidden="true">#</a> 如何使用裁切平面</h2>
<p>你可以通过以下所支持的裁切平面之一来裁切一个场景的渲染。</p>
<ul>
<li>scene.clipPlane</li>
<li>scene.clipPlane2</li>
<li>scene.clipPlane3</li>
<li>scene.clipPlane4</li>
</ul>
<p>每个剪辑平面是一个<code v-pre>BABYLON.Plane</code>，你可以像这样定义：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>clipPlane4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Plane</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Plane</code>构造函数的前3个参数定义了平面的法线，最后一个参数定义了与（0,0,0）的距离。</p>
<p><a href="https://playground.babylonjs.com/#Y6W087" target="_blank" rel="noopener noreferrer">裁切平面示例1<ExternalLinkIcon/></a></p>
<p>在一个特定的渲染中，最多可以同时使用4个不同的裁切平面。</p>
<p>如果你想对每个网格应用裁切平面，你可以依靠以下的观察器 Observables。</p>
<ul>
<li>mesh.onBeforeRenderObservable</li>
<li>mesh.onAfterRenderObservable</li>
</ul>
<p>示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sphere<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span>clipPlane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Plane</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sphere<span class="token punctuation">.</span>onAfterRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span>clipPlane <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
