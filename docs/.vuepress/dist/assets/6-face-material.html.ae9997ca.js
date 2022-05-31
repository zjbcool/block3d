import{_ as c,r as o,o as l,c as r,a as n,d as a,w as e,F as u,b as s,e as i}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u9762\u6750\u8D28",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9762\u6750\u8D28","aria-hidden":"true"},"#"),s(" \u9762\u6750\u8D28")],-1),h={class:"table-of-contents"},m=s("\u7ED9\u623F\u5B50\u7684\u9762\u4E0D\u540C\u7684\u6750\u8D28"),_=s("\u72EC\u680B\u623F\u5B50\u793A\u4F8B"),b=s("\u8054\u6392\u623F\u5B50\u793A\u4F8B"),g=s("\u7EE7\u7EED"),f=i(`<h2 id="\u7ED9\u623F\u5B50\u7684\u9762\u4E0D\u540C\u7684\u6750\u8D28" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u623F\u5B50\u7684\u9762\u4E0D\u540C\u7684\u6750\u8D28" aria-hidden="true">#</a> \u7ED9\u623F\u5B50\u7684\u9762\u4E0D\u540C\u7684\u6750\u8D28</h2><p>\u5728\u76D2\u5B50\u7684\u9009\u9879\u5C5E\u6027\u4E2D\uFF0C\u6709\u4E00\u4E2A <strong>faceUV</strong> \uFF0C\u503C\u7C7B\u578B\u4E3A Vector4 \u6570\u7EC4\u3002\u53EF\u4EE5\u7528\u5B83\u6765\u83B7\u53D6\u56FE\u7247\u7684\u4E00\u90E8\u5206\u7528\u4E8E\u76D2\u5B50\u7684\u4E00\u4E2A\u9762\u3002</p><p>\u5728 <strong>faceUV</strong> \u6570\u7EC4\u4E2D\uFF0C\u80CC\u9762\u7F16\u53F7\u4E3A 0\uFF0C\u6B63\u9762\u7F16\u53F7\u4E3A 1\uFF0C\u53F3\u4FA7\u7F16\u53F7\u4E3A 2\uFF0C\u5DE6\u4FA7\u7F16\u53F7\u4E3A 3\uFF0C\u9876\u90E8\u7F16\u53F7\u4E3A 4\uFF0C\u5E95\u90E8\u7F16\u53F7\u4E3A 5\u3002</p><h2 id="\u72EC\u680B\u623F\u5B50\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u72EC\u680B\u623F\u5B50\u793A\u4F8B" aria-hidden="true">#</a> \u72EC\u680B\u623F\u5B50\u793A\u4F8B</h2><p>\u5148\u770B\u4E0B\u56FE</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fcubehouse.png&amp;w=1920&amp;q=75" alt=""></p><p>\u8FD9\u5F20\u56FE\u7247\u4F9D\u6B21\u5305\u542B\u623F\u5B50\u6B63\u9762\u3001\u53F3\u9762\u3001\u80CC\u9762\u548C\u5DE6\u9762\u7684\u76F8\u540C\u5C3A\u5BF8\u7684\u56FE\u7247\u3002</p><p>\u6BCF\u4E2A\u56FE\u7247\u7684\u5BBD\u5EA6\u662F\u6574\u5F20\u56FE\u7247\u5BBD\u5EA6\u7684 0.25\u3002\u4E3A\u4E86\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u56FE\u7247\u533A\u57DF\uFF0C\u6211\u4EEC\u7ED9\u51FA\u4E86\u4E24\u4E2A\u5750\u6807\uFF0C\u4E00\u4E2A\u7528\u4E8E\u5DE6\u4E0B\u89D2\uFF0C\u4E00\u4E2A\u7528\u4E8E\u53F3\u4E0A\u89D2\u3002\u5BF9\u4E8E\u6574\u5F20\u56FE\u7247\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528 (0, 0) \u548C (1, 1)\uFF0C\u5BF9\u4E8E\u5C40\u90E8\u56FE\u7247\uFF0C\u5750\u6807\u503C\u5C06\u662F 0 \u548C 1 \u4E4B\u95F4\u7684\u5206\u6570\u3002</p><p>\u4F7F\u7528 4 \u7EF4\u5411\u91CF\u8868\u793A\u4E3A\uFF1A</p><p>Vector4\uFF08\u5DE6\u4E0B x\uFF0C\u5DE6\u4E0B y\uFF0C\u53F3\u4E0A x\uFF0C\u53F3\u4E0A y\uFF09</p><p>\u6A21\u578B\u9762\u548C\u5C40\u90E8\u56FE\u7247\u7684\u5BF9\u5E94\u5173\u7CFB\u4E3A\uFF1A</p><table><thead><tr><th style="text-align:left;">\u6A21\u578B\u9762</th><th style="text-align:left;">faceUV\u7D22\u5F15</th><th style="text-align:left;">\u5750\u6807</th></tr></thead><tbody><tr><td style="text-align:left;">\u524D\u9762</td><td style="text-align:left;">1</td><td style="text-align:left;">(0.0, 0.0, 0.25, 1.0)</td></tr><tr><td style="text-align:left;">\u53F3\u9762</td><td style="text-align:left;">2</td><td style="text-align:left;">(0.25, 0, 0.5, 1.0)</td></tr><tr><td style="text-align:left;">\u540E\u9762</td><td style="text-align:left;">0</td><td style="text-align:left;">(0.5, 0.0, 0.75, 1.0)</td></tr><tr><td style="text-align:left;">\u5DE6\u9762</td><td style="text-align:left;">3</td><td style="text-align:left;">(0.75, 0, 1.0, 1.0)</td></tr></tbody></table><p>\u4E0A\u9762\u548C\u4E0B\u9762\u770B\u4E0D\u89C1\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C\u5373\u53EF</p><p>\u4EE3\u7801\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>faceUV <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
faceUV<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u540E</span>
faceUV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u524D</span>
faceUV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53F3</span>
faceUV<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5DE6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u5C5E\u6027 <strong>wrap = true</strong>\uFF0C\u4EE5\u9632\u6B62\u533A\u57DF\u56FE\u7247\u88AB\u65CB\u8F6C\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">faceUV</span><span class="token operator">:</span> faceUV<span class="token punctuation">,</span> <span class="token literal-property property">wrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),x={href:"https://playground.cnbabylon.com/#JVRWH7",target:"_blank",rel:"noopener noreferrer"},y=s("\u9762\u6750\u8D28\u793A\u4F8B"),v=n("p",null,[n("img",{src:"https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fhouse3.png&w=1920&q=75",alt:""})],-1),V=n("h2",{id:"\u8054\u6392\u623F\u5B50\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8054\u6392\u623F\u5B50\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u8054\u6392\u623F\u5B50\u793A\u4F8B")],-1),w=n("p",null,"\u6B64\u65F6\u623F\u5B50\u662F\u4E24\u500D\u5BBD\uFF0C\u5C40\u90E8\u56FE\u7247\u4E5F\u662F\u4E00\u6837\u3002",-1),B=n("p",null,[n("img",{src:"https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fsemihouse.png&w=1920&q=75",alt:""})],-1),F=n("p",null,"\u56FE\u7247\u4E2D\u95F4\u90E8\u5206\u662F\u623F\u5B50\u7684\u5DE6\u53F3\u4E24\u4FA7\uFF0C\u8FD9\u90E8\u5206\u56FE\u7247\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u3002",-1),U={href:"https://playground.cnbabylon.com/#7AU84G",target:"_blank",rel:"noopener noreferrer"},j=s("\u8D34\u56FE\u91CD\u590D\u4F7F\u7528\u793A\u4F8B"),L=n("p",null,[n("img",{src:"https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fhouse4.png&w=1920&q=75",alt:""})],-1),N=n("h2",{id:"\u7EE7\u7EED",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EE7\u7EED","aria-hidden":"true"},"#"),s(" \u7EE7\u7EED")],-1),q=n("p",null,"\u5728\u521B\u5EFA\u4E86\u6211\u4EEC\u7684\u72EC\u7ACB\u5F0F\u548C\u534A\u72EC\u7ACB\u5F0F\u4F4F\u5B85\u4E4B\u540E\uFF0C\u6211\u4EEC\u5E0C\u671B\u5B83\u4EEC\u7684\u8BB8\u591A\u526F\u672C\u5F62\u6210\u6211\u4EEC\u7684\u4E16\u754C\u3002\u6211\u4EEC\u53EF\u4EE5\u5206\u522B\u5236\u4F5C\u76D2\u5B50\u548C\u5C4B\u9876\u7684\u526F\u672C\uFF0C\u4F46\u5982\u679C\u6211\u4EEC\u53EF\u4EE5\u5C06\u76D2\u5B50\u548C\u5C4B\u9876\u7EC4\u5408\u6210\u4E00\u4E2A\u7F51\u683C\uFF0C\u4E00\u5EA7\u623F\u5B50\uFF0C\u90A3\u5C31\u66F4\u5BB9\u6613\u4E86\u3002\u5728\u6211\u4EEC\u8FD9\u6837\u505A\u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u6574\u7406\u4E00\u4E0B\u4EE3\u7801\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6211\u4EEC\u6B63\u5728\u6DFB\u52A0\u7684\u65B0\u4EE3\u7801\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u5C06\u73B0\u6709\u4EE3\u7801\u653E\u5165\u51FD\u6570\u4E2D\u3002",-1),A=n("p",null,"\u73B0\u5728\u6211\u4EEC\u6709\u4E86\u72EC\u680B\u548C\u8054\u6392\u4E24\u7C7B\u623F\u5B50\uFF0C\u901A\u8FC7\u590D\u5236\u53EF\u4EE5\u6784\u6210\u6574\u4E2A\u6751\u5E84\uFF0C\u5728\u6B64\u4E4B\u524D\u5982\u679C\u80FD\u628A\u76D2\u5B50\u548C\u5C4B\u9876\u7ED3\u5408\u6210\u4E00\u4E2A\u6A21\u578B\uFF0C\u90A3\u5C31\u65B9\u4FBF\u591A\u4E86\u3002\u9996\u5148\uFF0C\u6574\u7406\u4E00\u4E0B\u4EE3\u7801\uFF0C\u628A\u521B\u5EFA\u8FC7\u7A0B\u6253\u5305\u8FDB\u51FD\u6570\u3002",-1),O={href:"https://playground.cnbabylon.com/#BLKQDC",target:"_blank",rel:"noopener noreferrer"},Y=s("\u521B\u5EFA\u5EFA\u7B51\u7269\u51FD\u6570\u793A\u4F8B");function C(E,R){const t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r(u,null,[k,n("nav",h,[n("ul",null,[n("li",null,[a(t,{to:"#\u7ED9\u623F\u5B50\u7684\u9762\u4E0D\u540C\u7684\u6750\u8D28"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#\u72EC\u680B\u623F\u5B50\u793A\u4F8B"},{default:e(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#\u8054\u6392\u623F\u5B50\u793A\u4F8B"},{default:e(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#\u7EE7\u7EED"},{default:e(()=>[g]),_:1})])])]),f,n("p",null,[n("a",x,[y,a(p)])]),v,V,w,B,F,n("p",null,[n("a",U,[j,a(p)])]),L,N,q,A,n("p",null,[n("a",O,[Y,a(p)])])],64)}var M=c(d,[["render",C],["__file","6-face-material.html.vue"]]);export{M as default};