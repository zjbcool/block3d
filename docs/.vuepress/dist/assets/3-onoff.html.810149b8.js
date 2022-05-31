import{_ as e,r as p,o,c,a as n,d as a,F as i,e as l,b as t}from"./app.090844ca.js";const u={},r=l(`<h1 id="\u5207\u6362\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u4E8B\u4EF6" aria-hidden="true">#</a> \u5207\u6362\u4E8B\u4EF6</h1><nav class="table-of-contents"><ul></ul></nav><p>\u5F53\u6211\u4EEC\u70B9\u51FB\u55B7\u6CC9\u4E0A\u7684\u5C4F\u5E55\u6307\u9488\u65F6\uFF0C\u6211\u4EEC\u5E0C\u671B\u5B83\u5F00\u59CB\u3002\u6211\u4EEC\u901A\u8FC7\u5411 <strong>onPointerObservable</strong> \u6DFB\u52A0\u4E00\u4E2A\u51FD\u6570\u6765\u5904\u7406 <strong>pointerdown</strong> \u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u5728\u505C\u6B62\u548C\u542F\u52A8\u4E4B\u95F4\u5207\u6362\u7C92\u5B50\u7CFB\u7EDF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> switched <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">//on off flag</span>

scene<span class="token punctuation">.</span>onPointerObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pointerInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERDOWN</span><span class="token operator">:</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>pickInfo<span class="token punctuation">.</span>hit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">pointerDown</span><span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>pickInfo<span class="token punctuation">.</span>pickedMesh<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pointerDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mesh</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),k={href:"https://playground.babylonjs.com/#TC31NV#5",target:"_blank",rel:"noopener noreferrer"},d=t("\u70B9\u51FB\u5207\u6362\u7C92\u5B50"),v={href:"https://playground.babylonjs.com/#KBS9I5#93",target:"_blank",rel:"noopener noreferrer"},m=t("\u52A0\u5165\u55B7\u6CC9\u7684\u6751\u5E84");function b(f,h){const s=p("ExternalLinkIcon");return o(),c(i,null,[r,n("p",null,[n("a",k,[d,a(s)])]),n("p",null,[n("a",v,[m,a(s)])])],64)}var g=e(u,[["render",b],["__file","3-onoff.html.vue"]]);export{g as default};
