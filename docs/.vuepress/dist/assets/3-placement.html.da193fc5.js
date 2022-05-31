import{_ as l,r as o,o as i,c as u,a as n,d as a,w as e,F as r,b as s,e as c}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u653E\u7F6E\u7F51\u683C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u653E\u7F6E\u7F51\u683C","aria-hidden":"true"},"#"),s(" \u653E\u7F6E\u7F51\u683C")],-1),b={class:"table-of-contents"},m=s("\u79FB\u52A8\u548C\u7F29\u653E"),v=s("\u5C3A\u5BF8"),h=s("\u4F4D\u7F6E"),_=s("\u65B9\u5411"),x=c(`<h2 id="\u79FB\u52A8\u548C\u7F29\u653E" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u548C\u7F29\u653E" aria-hidden="true">#</a> \u79FB\u52A8\u548C\u7F29\u653E</h2><h3 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h3><p>\u6709\u4E00\u4E9B\u7F51\u683C\u5728\u521B\u5EFA\u65F6\u5C31\u5E26\u6709\u53EF\u4EE5\u8BBE\u7F6E\u7684\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token literal-property property">depth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F51\u683C\u521B\u5EFA\u4E4B\u540E\uFF0C\u6216\u8005\u672C\u8EAB\u4E0D\u5E26\u6709\u5C3A\u5BF8\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7F29\u653E\u6765\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//unit cube</span>
box<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6216</span>
<span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//unit cube</span>
box<span class="token punctuation">.</span>scaling <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">4.2</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4.2</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),g={href:"https://playground.cnbabylon.com/#9C1HIN",target:"_blank",rel:"noopener noreferrer"},f=s("\u5B9A\u4F4D\u7F51\u683C\u793A\u4F8B"),B=c(`<h3 id="\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5411" aria-hidden="true">#</a> \u65B9\u5411</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Tools<span class="token punctuation">.</span><span class="token function">ToRadians</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={href:"https://playground.cnbabylon.com/#NG5NJK",target:"_blank",rel:"noopener noreferrer"},j=s("\u65CB\u8F6C\u793A\u4F8B");function N(w,L){const t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u(r,null,[k,n("nav",b,[n("ul",null,[n("li",null,[a(t,{to:"#\u79FB\u52A8\u548C\u7F29\u653E"},{default:e(()=>[m]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u5C3A\u5BF8"},{default:e(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#\u4F4D\u7F6E"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#\u65B9\u5411"},{default:e(()=>[_]),_:1})])])])])]),x,n("p",null,[n("a",g,[f,a(p)])]),B,n("p",null,[n("a",y,[j,a(p)])])],64)}var A=l(d,[["render",N],["__file","3-placement.html.vue"]]);export{A as default};