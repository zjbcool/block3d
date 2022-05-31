<template><h1 id="创建地面" tabindex="-1"><a class="header-anchor" href="#创建地面" aria-hidden="true">#</a> 创建地面</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#创建地面-1">创建地面</RouterLink></li></ul></nav>
<h2 id="创建地面-1" tabindex="-1"><a class="header-anchor" href="#创建地面-1" aria-hidden="true">#</a> 创建地面</h2>
<p>直接使用如下代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ground <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateGround</span><span class="token punctuation">(</span><span class="token string">"ground"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于我们需要创建一个足够大的地面来放置一些建筑物（盒子），options 参数设置了两个属性，x 方向的宽度和 z 方向的高度。</p>
<p><a href="https://playground.cnbabylon.com/#T7M68G" target="_blank" rel="noopener noreferrer">创建地面示例<ExternalLinkIcon/></a></p>
<p>我们注意到，盒子穿插到地面以下了，这是由于默认新建物体的都位于世界原点。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fground.png&amp;w=1920&amp;q=75" alt=""></p>
<p>将盒子向上移动一点</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>box<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>  <span class="token comment">// 默认盒子高度为1，所以向上移动0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.cnbabylon.com/#Y96GJA" target="_blank" rel="noopener noreferrer">调整盒子位置示例<ExternalLinkIcon/></a></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fhouse0.png&amp;w=1920&amp;q=75" alt=""></p>
<p>接下来，给环境加一上声音。</p>
</template>
