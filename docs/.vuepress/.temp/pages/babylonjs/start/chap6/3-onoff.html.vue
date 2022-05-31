<template><h1 id="切换事件" tabindex="-1"><a class="header-anchor" href="#切换事件" aria-hidden="true">#</a> 切换事件</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p>当我们点击喷泉上的屏幕指针时，我们希望它开始。我们通过向 <strong>onPointerObservable</strong> 添加一个函数来处理 <strong>pointerdown</strong> 事件，该事件在停止和启动之间切换粒子系统。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> switched <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">//on off flag</span>

scene<span class="token punctuation">.</span>onPointerObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pointerInfo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>            
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERDOWN</span><span class="token operator">:</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>pickInfo<span class="token punctuation">.</span>hit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">pointerDown</span><span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>pickInfo<span class="token punctuation">.</span>pickedMesh<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pointerDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mesh</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mesh <span class="token operator">===</span> fountain<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//check that the picked mesh is the fountain</span>
        switched <span class="token operator">=</span> <span class="token operator">!</span>switched<span class="token punctuation">;</span>  <span class="token comment">//toggle switch</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>switched<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            particleSystem<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            particleSystem<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#TC31NV#5" target="_blank" rel="noopener noreferrer">点击切换粒子<ExternalLinkIcon/></a></p>
<p><a href="https://playground.babylonjs.com/#KBS9I5#93" target="_blank" rel="noopener noreferrer">加入喷泉的村庄<ExternalLinkIcon/></a></p>
</template>
