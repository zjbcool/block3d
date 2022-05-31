import{_ as c,r as o,o as r,c as l,a as n,d as a,w as p,F as i,b as s,e as u}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u53CC\u9762\u6750\u8D28",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53CC\u9762\u6750\u8D28","aria-hidden":"true"},"#"),s(" \u53CC\u9762\u6750\u8D28")],-1),h={class:"table-of-contents"},m=s("FrontUVs \u548C BackUVs"),_=s("\u53CC\u9762\u793A\u4F8B"),b=u(`<p>\u5E73\u9762\u7F51\u683C\u90FD\u6709\u6B63\u9762\u548C\u80CC\u9762\uFF0C\u6BD4\u5982\u5E73\u9762plane\u3001\u5706\u76D8disc\u6216\u591A\u8FB9\u5F62polygon\u3002\u6240\u6709\u8FD9\u4E9B\u7F51\u683C\u90FD\u6709\u4E24\u4E2A\u9762\uFF0C\u53EA\u6709\u5F53\u9009\u9879<code>sideOrientation</code>\u88AB\u8BBE\u7F6E\u4E3A<code>BABYLON.Mesh.DOUBLESIDE</code>\u65F6\uFF0C\u624D\u80FD\u770B\u5230\u8FD9\u4E24\u4E2A\u9762\u3002</p><p>\u7136\u800C\uFF0C\u5F88\u591A\u7F51\u683C\u90FD\u6709<code>sideOrientation</code>\u9009\u9879\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E5F\u9002\u7528\u4E8E\u5B83\u4EEC\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u628A\u524D\u9762\u5F53\u6210\u5916\u9762\uFF0C\u540E\u9762\u5F53\u6210\u91CC\u9762\u3002</p><p>\u8981\u6709\u524D\u540E\u4E0D\u540C\u7684\u7EB9\u7406\uFF0C\u524D\u9762\u548C\u540E\u9762\u7684\u56FE\u7247\u5FC5\u987B\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u4E2A\u6587\u4EF6\u4E00\u6837</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fdifferent-material-front-back%2Fcard.jpg&amp;w=1920&amp;q=75" alt=""></p><p>\u7136\u540E\u4F7F\u7528<code>frontUVs</code>\u548C<code>backUVs</code>\u9009\u9879\u5C06\u5176\u5206\u5272\u3002</p><h2 id="frontuvs-\u548C-backuvs" tabindex="-1"><a class="header-anchor" href="#frontuvs-\u548C-backuvs" aria-hidden="true">#</a> FrontUVs \u548C BackUVs</h2><p><code>frontUVs</code>\u548C<code>backUVs</code>\u7684\u5F62\u5F0F\u90FD\u662F<code>Vector4(u0, v0, u1, v1)</code>\uFF0C\u5176\u4E2D0&lt;= u0, v0, u1, v1 &lt;= 1\uFF0C(u0, v0)\u662F\u56FE\u50CF\u526A\u5207\u77E9\u5F62\u7684\u5DE6\u4E0B\u65B9\u5750\u6807\uFF0C(u1, v1)\u662F\u53F3\u4E0A\u65B9\u5750\u6807\u3002</p><p>\u4E3A\u4E86\u5206\u5272\u4E0A\u9762\u7684\u56FE\u7247\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// front image = half the whole image along the width </span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// back image = second half along the width</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u653E\u5165\u9009\u9879\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> plane <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreatePlane</span><span class="token punctuation">(</span><span class="token string">&quot;plane&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0.665</span><span class="token punctuation">,</span> <span class="token literal-property property">sideOrientation</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Mesh<span class="token punctuation">.</span><span class="token constant">DOUBLESIDE</span><span class="token punctuation">,</span> <span class="token literal-property property">frontUVs</span><span class="token operator">:</span> f<span class="token punctuation">,</span> <span class="token literal-property property">backUVs</span><span class="token operator">:</span> b<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8981\u8003\u8651\u5230\u56FE\u7247\u90E8\u5206\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u6BD4\u4F8B\u3002</p><p>\u7136\u540E\u53EA\u9700\u521B\u5EFA\u4E00\u4E2A<code>StandardMaterial</code>\u5E76\u5C06\u7EB9\u7406\u8BBE\u7F6E\u5230\u56FE\u7247\u4E0A\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mat<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;URL to Image File&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
plane<span class="token punctuation">.</span>material <span class="token operator">=</span> mat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53CC\u9762\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u53CC\u9762\u793A\u4F8B" aria-hidden="true">#</a> \u53CC\u9762\u793A\u4F8B</h2>`,15),v={href:"https://playground.babylonjs.com/#LXZPJK#3",target:"_blank",rel:"noopener noreferrer"},f=s("\u6251\u514B\u724C\u793A\u4F8B"),g={href:"https://playground.babylonjs.com/#4G18GY#2",target:"_blank",rel:"noopener noreferrer"},y=s("\u591A\u8FB9\u5F62\u793A\u4F8B"),B={href:"https://playground.babylonjs.com/#165IV6#74",target:"_blank",rel:"noopener noreferrer"},w=s("\u5706\u67F1\u793A\u4F8B"),V={href:"https://playground.babylonjs.com/#K6M44R#3",target:"_blank",rel:"noopener noreferrer"},j=s("\u7403\u4F53\u5916\u90E8\u793A\u4F8B"),x={href:"https://playground.babylonjs.com/#K6M44R#4",target:"_blank",rel:"noopener noreferrer"},L=s("\u7403\u4F53\u5185\u90E8\u793A\u4F8B");function U(O,N){const t=o("RouterLink"),e=o("ExternalLinkIcon");return r(),l(i,null,[k,n("nav",h,[n("ul",null,[n("li",null,[a(t,{to:"#frontuvs-\u548C-backuvs"},{default:p(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#\u53CC\u9762\u793A\u4F8B"},{default:p(()=>[_]),_:1})])])]),b,n("p",null,[n("a",v,[f,a(e)])]),n("p",null,[n("a",g,[y,a(e)])]),n("p",null,[n("a",B,[w,a(e)])]),n("p",null,[n("a",V,[j,a(e)])]),n("p",null,[n("a",x,[L,a(e)])])],64)}var F=c(d,[["render",U],["__file","frontAndBackUVs.html.vue"]]);export{F as default};