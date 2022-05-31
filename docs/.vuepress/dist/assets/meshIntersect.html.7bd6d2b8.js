import{_ as i,r as c,o as l,c as u,a as n,d as a,w as e,F as r,b as s,e as o}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u7F51\u683C\u76F8\u4EA4-mesh-intersections",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7F51\u683C\u76F8\u4EA4-mesh-intersections","aria-hidden":"true"},"#"),s(" \u7F51\u683C\u76F8\u4EA4 Mesh Intersections")],-1),m={class:"table-of-contents"},h=s("\u7F51\u683C\u78B0\u649E Collisions"),_=s("\u5982\u4F55\u5B9E\u73B0\uFF1F"),b=s("\u4E0E\u7F51\u683C\u76F8\u4EA4 intersectsMesh"),v=s("\u4E0E\u70B9\u76F8\u4EA4 intersectsPoint"),g=o('<h2 id="\u7F51\u683C\u78B0\u649E-collisions" tabindex="-1"><a class="header-anchor" href="#\u7F51\u683C\u78B0\u649E-collisions" aria-hidden="true">#</a> \u7F51\u683C\u78B0\u649E Collisions</h2><p>\u5728\u52A8\u6001\u573A\u666F\u4E2D\uFF0C\u7269\u4F53\u5728\u79FB\u52A8\u5E76\u76F8\u4E92\u4EA4\u53C9\u3002\u4E3A\u4E86\u83B7\u5F97\u6700\u4F73\u7684\u6E32\u67D3\u6548\u679C\uFF0C\u4F60\u4F1A\u60F3\u77E5\u9053\u7F51\u683C\u662F\u4EC0\u4E48\u65F6\u5019\u76F8\u4E92\u63A5\u89E6\u7684\u3002\u5728\u672C\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u53D1\u73B0\u78B0\u649E\u7CFB\u7EDF\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FCollisions%20Intersect%2F10.png&amp;w=1920&amp;q=75" alt=""></p><h2 id="\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\uFF1F</h2><p>\u672C\u6559\u7A0B\u5C06\u5411\u4F60\u5C55\u793A\u4E24\u79CD\u78B0\u649E\u68C0\u6D4B\u7684\u65B9\u6CD5\uFF1A\u7B2C\u4E00\u79CD\u662F\u5728\u4E24\u4E2A\u7F51\u683C\u63A5\u89E6\u65F6\u5F15\u53D1\u78B0\u649E\u4E8B\u4EF6\uFF0C\u53E6\u4E00\u79CD\u662F\u68C0\u6D4B\u4E00\u4E2A\u7F51\u683C\u548C\u4E00\u4E2A\u70B9\u7684\u63A5\u89E6\u3002</p><p>\u6211\u4EEC\u8981\u8BA8\u8BBA\u7684\u662F\u4E0A\u9762\u7684\u573A\u666F\u3002\u7B2C\u4E00\u548C\u7B2C\u4E8C\u4E2A\u7684\u7403\u4F53\u5C06\u4E0E\u65CB\u8F6C\u7684\u5730\u9762\u53D1\u751F\u78B0\u649E\uFF0C\u6700\u540E\u4E00\u4E2A\u7684\u7403\u4F53\u5C06\u4E0E\u4E00\u4E2A\u70B9\u4E0A\u53D1\u751F\u78B0\u649E\u3002</p>',6),f={href:"https://playground.babylonjs.com/#KQV9SA",target:"_blank",rel:"noopener noreferrer"},w=s("\u7F51\u683C\u78B0\u649E\u793A\u4F8B"),B=o(`<h3 id="\u4E0E\u7F51\u683C\u76F8\u4EA4-intersectsmesh" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u7F51\u683C\u76F8\u4EA4-intersectsmesh" aria-hidden="true">#</a> \u4E0E\u7F51\u683C\u76F8\u4EA4 intersectsMesh</h3><p>\u8FD9\u91CC\u7684\u91CD\u70B9\u662F\u68C0\u6D4B\u7403\u4F53\u548C\u5730\u9762\u4E4B\u95F4\u7684\u63A5\u89E6\u3002\u6211\u4EEC\u5C06\u4F7F\u7528 <code>intersectsMesh()</code> \u51FD\u6570\uFF0C\u5B83\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u68C0\u6D4B\u7684\u7F51\u683C\u548C\u76F8\u4EA4\u7684\u7CBE\u5EA6\uFF08\u5E03\u5C14\u503C\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>balloon1<span class="token punctuation">.</span><span class="token function">intersectsMesh</span><span class="token punctuation">(</span>plan1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  balloon1<span class="token punctuation">.</span>material<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color4</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  balloon1<span class="token punctuation">.</span>material<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color4</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u907F\u514D\u56E0\u68C0\u6D4B\u7F51\u683C\u4E0A\u7684\u8FC7\u591A\u7EC6\u8282\u9020\u6210\u6602\u8D35\u7684\u8BA1\u7B97\uFF0CBabylon\u5F15\u64CE\u5728\u7269\u4F53\u5468\u56F4\u521B\u5EFA\u4E00\u4E2A\u8FB9\u754C\u76D2boundingBox\uFF0C\u5E76\u68C0\u6D4B\u8FB9\u754C\u76D2\u4E0E\u78B0\u649E\u7F51\u683C\u4E4B\u95F4\u7684\u4EA4\u96C6\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u8FB9\u754C\u76D2\u7684\u4F8B\u5B50\uFF1A</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FCollisions%20Intersect%2F10-1.png&amp;w=1920&amp;q=75" alt=""></p><p>\u4F46\u662F\u8FD9\u4E2A\u8FB9\u754C\u76D2\u53EF\u4EE5\u66F4\u7CBE\u786E\u6216\u66F4\u4E0D\u7CBE\u786E\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u6709\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u5982\u679C\u8FD9\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E3A &quot;true&quot;\uFF08\u9ED8\u8BA4\u4E3A &quot;false&quot;\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FB9\u754C\u76D2\u5C31\u4F1A\u66F4\u63A5\u8FD1\u4E8E\u7F51\u683C\uFF08OBB\u8FB9\u754C\u7C7B\u578B\uFF09\uFF0C\u4F46\u5B83\u7684\u8BA1\u7B97\u6210\u672C\u66F4\u9AD8\u3002\u6CE8\u610F\uFF0C\u5F53\u7F51\u683C\u65CB\u8F6C\u5230\u4E00\u4E2A\u89D2\u5EA6\u65F6\uFF0C\u8FD9\u79CD\u7C7B\u578B\u7684\u8FB9\u754C\u76D2\u7279\u522B\u6709\u7528\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FCollisions%20Intersect%2F10-2.png&amp;w=1920&amp;q=75" alt=""></p><p>\u56E0\u6B64\uFF0C\u5728\u9009\u62E9\u4E4B\u524D\u8981\u8003\u8651\u5230\u4F60\u9700\u8981\u7684\u78B0\u649E\u7EC6\u8282\u3002</p>`,8),x=s("\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u8FD9\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u770B\u770B\u7EF4\u57FA\u767E\u79D1\u7684\u8FD9\u4E2A\u9875\u9762\uFF0C\u7279\u522B\u662F\u5173\u4E8EAABB\u548COBB\u6A21\u5F0F\uFF1A"),y={href:"https://en.wikipedia.org/wiki/Bounding_volume",target:"_blank",rel:"noopener noreferrer"},F=s("https://en.wikipedia.org/wiki/Bounding_volume"),C=o(`<h3 id="\u4E0E\u70B9\u76F8\u4EA4-intersectspoint" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u70B9\u76F8\u4EA4-intersectspoint" aria-hidden="true">#</a> \u4E0E\u70B9\u76F8\u4EA4 intersectsPoint</h3><p>\u53E6\u4E00\u4E2A\u51FD\u6570\u662F<code>intersectsPoint()</code>\uFF0C\u4E0E\u4E00\u4E2A\u7279\u5B9A\u7684\u70B9\u76F8\u4EA4\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> pointToIntersect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>balloon3<span class="token punctuation">.</span><span class="token function">intersectsPoint</span><span class="token punctuation">(</span>pointToIntersect<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  balloon3<span class="token punctuation">.</span>material<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color4</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728\u573A\u666F\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7CBE\u786E\u7684\u70B9\uFF0C\u5982\u679C\u7403\u4F53\u4E0E\u8FD9\u4E2A\u70B9\u76F8\u4EA4\uFF0C\u65E0\u8BBA\u5728\u7403\u4F53\u7684\u4EC0\u4E48\u5730\u65B9\uFF0C\u4E8B\u4EF6\u5C31\u4F1A\u88AB\u89E6\u53D1\uFF0C\u4ECE\u800C\u6539\u53D8\u7403\u4F53\u7684\u989C\u8272\u3002</p>`,4);function j(I,L){const t=c("RouterLink"),p=c("ExternalLinkIcon");return l(),u(r,null,[k,n("nav",m,[n("ul",null,[n("li",null,[a(t,{to:"#\u7F51\u683C\u78B0\u649E-collisions"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#\u5982\u4F55\u5B9E\u73B0"},{default:e(()=>[_]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u4E0E\u7F51\u683C\u76F8\u4EA4-intersectsmesh"},{default:e(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#\u4E0E\u70B9\u76F8\u4EA4-intersectspoint"},{default:e(()=>[v]),_:1})])])])])]),g,n("p",null,[n("a",f,[w,a(p)])]),B,n("p",null,[x,n("a",y,[F,a(p)])]),C],64)}var q=i(d,[["render",j],["__file","meshIntersect.html.vue"]]);export{q as default};
