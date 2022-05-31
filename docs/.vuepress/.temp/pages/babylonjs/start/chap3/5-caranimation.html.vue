<template><h1 id="汽车动画" tabindex="-1"><a class="header-anchor" href="#汽车动画" aria-hidden="true">#</a> 汽车动画</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p>同理，实现汽车在村庄的行驶动画。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> animCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Animation</span><span class="token punctuation">(</span><span class="token string">"carAnimation"</span><span class="token punctuation">,</span> <span class="token string">"position.x"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Animation<span class="token punctuation">.</span><span class="token constant">ANIMATIONTYPE_FLOAT</span><span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Animation<span class="token punctuation">.</span><span class="token constant">ANIMATIONLOOPMODE_CYCLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> carKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 

carKeys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

carKeys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

carKeys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token number">210</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

animCar<span class="token punctuation">.</span><span class="token function">setKeys</span><span class="token punctuation">(</span>carKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>

car<span class="token punctuation">.</span>animations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span>animations<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>animCar<span class="token punctuation">)</span><span class="token punctuation">;</span>

scene<span class="token punctuation">.</span><span class="token function">beginAnimation</span><span class="token punctuation">(</span>car<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#KDPAQ9#17" target="_blank" rel="noopener noreferrer">汽车行驶在村庄完整<ExternalLinkIcon/></a></p>
</template>
