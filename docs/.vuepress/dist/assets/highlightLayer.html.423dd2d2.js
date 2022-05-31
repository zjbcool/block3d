import{_ as l,r as c,o as i,c as u,a as n,d as a,w as e,F as r,b as s,e as o}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u7F51\u683C\u9AD8\u4EAE-highlightlayer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7F51\u683C\u9AD8\u4EAE-highlightlayer","aria-hidden":"true"},"#"),s(" \u7F51\u683C\u9AD8\u4EAE HighlightLayer")],-1),h={class:"table-of-contents"},v=s("\u5982\u4F55\u4F7F\u7F51\u683C\u9AD8\u4EAE"),g=s("\u5982\u4F55\u4F7F\u7528\uFF1F"),m=s("\u9ED8\u8BA4\u7528\u4F8B"),_=s("\u505C\u6B62\u9AD8\u4EAE\u663E\u793A"),b=s("\u81EA\u53D1\u5149\u8F93\u5165"),f=s("\u6DF1\u5165"),y=s("\u91CD\u53E0\u9AD8\u4EAE"),B=s("\u6A21\u7CCA\u5EA6"),L=s("\u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149"),j=s("\u6392\u9664\u7F51\u683C"),w=s("\u591A\u4E2A\u76F8\u673A"),A=s("\u6E32\u67D3\u7EC4 Rendering Groups"),x=s("\u9009\u9879"),N=o(`<h2 id="\u5982\u4F55\u4F7F\u7F51\u683C\u9AD8\u4EAE" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7F51\u683C\u9AD8\u4EAE" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7F51\u683C\u9AD8\u4EAE</h2><p>\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u8BA9\u573A\u666F\u4E2D\u7684\u7F51\u683C\u9AD8\u4EAE\u663E\u793A\u3002\u8FD9\u4E2A\u529F\u80FD\u542C\u8D77\u6765\u5F88\u5BB9\u6613\uFF0C\u4F46\u5B9E\u9645\u8FD8\u8981\u5904\u7406\u8FB9\u7F18\u3001\u6A21\u7CCA\u548C\u6297\u952F\u9F7F\u8FD9\u4E9B\u95EE\u9898\u3002</p><p>\u8FD9\u4E2A\u6559\u7A0B\u5C31\u662F\u89E3\u51B3\u5982\u4F55\u8BA9\u7F51\u683C\u9AD8\u4EAE\u663E\u793A\u7684\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fhighlight-mesh%2Fintroduction.png&amp;w=1920&amp;q=75" alt=""></p><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\uFF1F</h2><p>\u9996\u5148\uFF0C\u5FC5\u987B\u786E\u4FDD\u521B\u5EFA\u7684\u5F15\u64CE\u5F00\u542F\u4E86\u6A21\u677F stencil \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Engine</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stencil</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HighlightLayer \u4F9D\u9760\u6A21\u677F stencil \u6765\u786E\u5B9A\u5B83\u9700\u8981\u7ED8\u5236\u56FE\u7247\u7684\u54EA\u4E2A\u90E8\u5206\u3002</p><h3 id="\u9ED8\u8BA4\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7528\u4F8B" aria-hidden="true">#</a> \u9ED8\u8BA4\u7528\u4F8B</h3><p>\u5BF9\u4E8E\u57FA\u7840\u6A21\u578B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u573A\u666F\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A\u9AD8\u4EAE\u5C42 HighlightLayer\uFF0C\u5E76\u5728\u5176\u4E2D\u6DFB\u52A0\u60F3\u8981\u9AD8\u4EAE\u663E\u793A\u7684\u7F51\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),O=s("\u9AD8\u4EAE\u989C\u8272\u7531 addMesh \u65B9\u6CD5\u7684\u7B2C2\u4E2A\u53C2\u6570\u9A71\u52A8\uFF1A"),Y={href:"https://playground.babylonjs.com/#1KUJ0A#305",target:"_blank",rel:"noopener noreferrer"},q=s("\u793A\u4F8B"),H=s("\u3002"),C=o(`<h3 id="\u505C\u6B62\u9AD8\u4EAE\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u9AD8\u4EAE\u663E\u793A" aria-hidden="true">#</a> \u505C\u6B62\u9AD8\u4EAE\u663E\u793A</h3><p>\u5982\u679C\u4E00\u4E2A\u9AD8\u4EAE\u7684\u7F51\u683C\u4E0D\u518D\u9700\u8981\u9AD8\u4EAE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u5730\u628A\u5B83\u4ECE\u56FE\u5C42\u4E2D\u5220\u9664\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hl<span class="token punctuation">.</span><span class="token function">removeMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),M={href:"https://playground.babylonjs.com/#1KUJ0A#102",target:"_blank",rel:"noopener noreferrer"},R=s("\u505C\u6B62\u9AD8\u4EAE\u793A\u4F8B"),F=o(`<h3 id="\u81EA\u53D1\u5149\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u81EA\u53D1\u5149\u8F93\u5165" aria-hidden="true">#</a> \u81EA\u53D1\u5149\u8F93\u5165</h3><p>\u5982\u679C\u6211\u4EEC\u613F\u610F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u53D1\u5149\u7EB9\u7406 emissive texture \u4F5C\u4E3A\u9AD8\u4EAE\u989C\u8272\u7684\u6765\u6E90\u3002\u53EA\u9700\u5728\u6DFB\u52A0\u7F51\u683C\u65B9\u6CD5\u7684\u7B2C3\u4E2A\u53C2\u6570\u4E2D\u4F20\u5165true\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>hl1<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),K={href:"https://playground.babylonjs.com/#1KUJ0A#57",target:"_blank",rel:"noopener noreferrer"},z=s("\u81EA\u53D1\u5149\u8F93\u5165\u793A\u4F8B"),G=o(`<p>\u6211\u4EEC\u53EF\u4EE5\u6CE8\u610F\u5230\uFF0C\u7403\u4F53\u7684\u4E00\u8FB9\u662F\u9EC4\u8272\u7684\uFF0C\u800C\u53E6\u4E00\u8FB9\u662F\u7070\u8272\u7684\u3002\u989C\u8272\u662F\u4E0D\u5747\u5300\u7684\u3002</p><h2 id="\u6DF1\u5165" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165" aria-hidden="true">#</a> \u6DF1\u5165</h2><h3 id="\u91CD\u53E0\u9AD8\u4EAE" tabindex="-1"><a class="header-anchor" href="#\u91CD\u53E0\u9AD8\u4EAE" aria-hidden="true">#</a> \u91CD\u53E0\u9AD8\u4EAE</h3><p>\u76EE\u524D\u793A\u4F8B\u4E2D\u4E24\u4E2A\u7F51\u683C\u91CD\u53E0\u7684\u90E8\u5206\u6CA1\u6709\u9AD8\u4EAE\u663E\u793A\uFF0C\u6211\u4EEC\u7684\u7B2C1\u4E2A\u9700\u6C42\u662F\uFF0C\u8BA9\u91CD\u53E0\u90E8\u5206\u9AD8\u4EAE\u663E\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hl<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>ground<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S={href:"https://playground.babylonjs.com/#1KUJ0A#1",target:"_blank",rel:"noopener noreferrer"},J=s("\u91CD\u53E0\u90E8\u5206\u6CA1\u6709\u9AD8\u4EAE"),U=o(`<p>\u8FD9\u662F\u9488\u5BF9\u6027\u80FD\u4F18\u5316\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002\u5982\u679C\u6211\u4EEC\u5728\u6027\u80FD\u597D\u7684\u673A\u5668\u4E0A\u8FD0\u884C\uFF0C\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u9AD8\u4EAE\u5C42 HighlightLayer \u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl1<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hl2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl2&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl2<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>ground<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V={href:"https://playground.babylonjs.com/#1KUJ0A#2",target:"_blank",rel:"noopener noreferrer"},E=s("\u91CD\u53E0\u9AD8\u4EAE\u793A\u4F8B"),T=o(`<h3 id="\u6A21\u7CCA\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6A21\u7CCA\u5EA6" aria-hidden="true">#</a> \u6A21\u7CCA\u5EA6</h3><p>\u6211\u4EEC\u7684\u7B2C2\u4E2A\u9700\u6C42\u662F\uFF0C\u80FD\u591F\u5BF9\u9AD8\u4EAE\u90E8\u5206\u7684\u6A21\u7CCA\u5EA6\u8FDB\u884C\u52A8\u753B\u5904\u7406\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u901A\u8FC7\u56FE\u5C42\u7684\u6A21\u7CCA\u5EA6\u5C5E\u6027\u52A8\u6001\u5730\u6539\u53D8\u5B83\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl2&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl2<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>ground<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">registerBeforeRender</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  alpha <span class="token operator">+=</span> <span class="token number">0.06</span><span class="token punctuation">;</span>

  hl2<span class="token punctuation">.</span>blurHorizontalSize <span class="token operator">=</span> <span class="token number">0.3</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>alpha<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.6</span> <span class="token operator">+</span> <span class="token number">0.6</span><span class="token punctuation">;</span>
  hl2<span class="token punctuation">.</span>blurVerticalSize <span class="token operator">=</span> <span class="token number">0.3</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>alpha <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.6</span> <span class="token operator">+</span> <span class="token number">0.6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),I={href:"https://playground.babylonjs.com/#1KUJ0A#4",target:"_blank",rel:"noopener noreferrer"},D=s("\u9AD8\u4EAE\u6A21\u7CCA\u5EA6\u52A8\u753B\u793A\u4F8B"),Q=o(`<h3 id="\u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149" aria-hidden="true">#</a> \u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149</h3><p>\u6700\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u542F\u7528/\u7981\u7528\u9AD8\u5149\u5C42\u7684\u5185\u90E8\u548C\u5916\u90E8\u8F89\u5149\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Add the highlight layer.</span>
<span class="token keyword">var</span> hl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl1<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">White</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hl1<span class="token punctuation">.</span>outerGlow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> hl2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl2&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
hl2<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>ground<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hl2<span class="token punctuation">.</span>innerGlow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),W={href:"https://playground.babylonjs.com/#1KUJ0A#3",target:"_blank",rel:"noopener noreferrer"},P=s("\u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149\u793A\u4F8B"),X=n("p",null,"\u53EF\u4EE5\u6CE8\u610F\u5230\u793A\u4F8B\u4E2D\uFF0C\u767D\u8272\u53EA\u5728\u7403\u4F53\u5185\u90E8\u53D1\u5149\uFF0C\u7EA2\u8272\u53EA\u5728\u5E73\u9762\u5916\u53D1\u5149\u3002",-1),Z=n("h3",{id:"\u6392\u9664\u7F51\u683C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6392\u9664\u7F51\u683C","aria-hidden":"true"},"#"),s(" \u6392\u9664\u7F51\u683C")],-1),$=s("\u5728\u6211\u4EEC\u7684\u573A\u666F\u4E2D\uFF0C\u900F\u660E\u7F51\u683C\u53EF\u80FD\u65E0\u6CD5\u4E0E\u5176\u4ED6\u9AD8\u4EAE\u7684\u7F51\u683C\u4E00\u8D77\u6B63\u786E\u6E32\u67D3\u3002"),nn={href:"https://playground.babylonjs.com/#2FFOYQ#6",target:"_blank",rel:"noopener noreferrer"},sn=s("\u6E32\u67D3\u9519\u8BEF\u793A\u4F8B"),an=s("\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u4ECE\u9AD8\u4EAE\u751F\u6210\u8FC7\u7A0B\u4E2D\u6392\u9664\uFF0C\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002"),tn={href:"https://playground.babylonjs.com/#2FFOYQ#7",target:"_blank",rel:"noopener noreferrer"},en=s("\u6392\u9664\u7F51\u683C\u793A\u4F8B"),pn=o(`<h3 id="\u591A\u4E2A\u76F8\u673A" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u76F8\u673A" aria-hidden="true">#</a> \u591A\u4E2A\u76F8\u673A</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9AD8\u4EAE\u5C42\u5C06\u5E94\u7528\u4E8E\u6240\u6709\u6FC0\u6D3B\u7684\u76F8\u673A\uFF0C\u4F46\u5B83\u4F1A\u5728\u76F8\u673A\u4E0A\u4EA7\u751F\u989D\u5916\u7684\u5904\u7406\uFF0C\u8FD9\u662F\u6CA1\u6709\u5FC5\u8981\u7684\u3002</p><p>\u89E3\u51B3\u65B9\u6CD5\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u5728\u9009\u9879\u4E2D\u6307\u5B9A\u6211\u4EEC\u7684\u9AD8\u4EAE\u4E0E\u4EC0\u4E48\u76F8\u673A\u6709\u5173\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> hl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">camera</span><span class="token operator">:</span> camera <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hl1<span class="token punctuation">.</span><span class="token function">addMesh</span><span class="token punctuation">(</span>sphere<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),on={href:"https://playground.babylonjs.com/#CDHKK#7",target:"_blank",rel:"noopener noreferrer"},cn=s("\u591A\u76F8\u673A\u793A\u4F8B"),ln=o(`<h3 id="\u6E32\u67D3\u7EC4-rendering-groups" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u7EC4-rendering-groups" aria-hidden="true">#</a> \u6E32\u67D3\u7EC4 Rendering Groups</h3><p>\u5982\u679C\u6211\u4EEC\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F9D\u8D56\u6E32\u67D3\u7EC4\uFF0C\u8BF7\u6CE8\u610F\u9AD8\u4EAE\u90E8\u5206\u9700\u8981\u6211\u4EEC\u7684\u573A\u666F\u7684\u6A21\u677F stencil \u548C\u6DF1\u5EA6\u4FE1\u606F depth info \u624D\u80FD\u6B63\u786E\u5DE5\u4F5C\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u7528\u4EE5\u4E0B\u547D\u4EE4\u7981\u6B62\u6E32\u67D3\u7EC4\u4E4B\u95F4\u7684\u6E05\u9664\uFF1A<code>scene.setRenderingAutoClearDepthStencil(1, false, false)</code>\uFF0C\u5176\u4E2D\u7B2C1\u4E2A\u53C2\u6570\u662F\u6E32\u67D3\u7EC4id\uFF0C\u7B2C2\u4E2A\u53C2\u6570\u662F\u9632\u6B62\u7EC4\u95F4\u81EA\u52A8\u6E05\u9664\u6DF1\u5EA6\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u662F\u9632\u6B62\u7EC4\u95F4\u81EA\u52A8\u6E05\u9664\u6A21\u677F\u4FE1\u606F\u3002</p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><p>\u9009\u9879\u5BF9\u8C61\u7684\u53EF\u7528\u6210\u5458\u6709\uFF1A</p><ul><li>mainTextureRatio? : number - \u5E94\u7528\u4E8E\u753B\u5E03\u5C3A\u5BF8\u7684\u4E58\u6CD5\u7CFB\u6570\uFF0C\u4EE5\u8BA1\u7B97\u7528\u4E8E\u751F\u6210\u9AD8\u4EAE\u7269\u4F53\u7684\u6E32\u67D3\u76EE\u6807 render target \u5C3A\u5BF8\uFF08\u8D8A\u5C0F\u8D8A\u5FEB\uFF09\u3002</li><li>mainTextureFixedSize?: number - \u5F3A\u5236\u6267\u884C\u56FA\u5B9A\u5C3A\u5BF8\u7684\u7EB9\u7406\uFF0C\u4EE5\u786E\u4FDD\u4E0D\u53D7\u5C3A\u5BF8\u8C03\u6574\u5F71\u54CD\u7684\u6A21\u7CCA\u3002</li><li>blurTextureSizeRatio? : number - \u5728\u6A21\u7CCA\u7684\u7B2C\u4E00\u6B65\u4E2D\u5E94\u7528\u4E8E\u4E3B\u7EB9\u7406\u5C3A\u5BF8\u7684\u4E58\u6CD5\u7CFB\u6570\uFF0C\u4EE5\u51CF\u5C11\u8981\u6A21\u7CCA\u7684\u56FE\u7247\u7684\u5C3A\u5BF8\uFF08\u8D8A\u5C0F\u8D8A\u5FEB\uFF09\u3002</li><li>blurVerticalSize?: number - \u6A21\u7CCA\u7EB9\u7406\u7684\u5782\u76F4\u6A21\u7CCA\u5EA6\u5927\u5C0F\u3002</li><li>blurHorizontalSize?: number - \u6A21\u7CCA\u7EB9\u7406\u7684\u6C34\u5E73\u6A21\u7CCA\u5EA6\u5927\u5C0F\u3002</li><li>alphaBlendingMode? : number - \u7528\u4E8E\u5E94\u7528\u6A21\u7CCA\u7684Alpha\u6DF7\u5408\u6A21\u5F0F\u3002\u9ED8\u8BA4\u4E3A combine\u3002</li><li>camera? Camera - \u8FDE\u63A5\u5230\u8BE5\u5C42\u7684\u76F8\u673A\uFF08\u53EA\u6709\u8FD9\u4E2A\u76F8\u673A\u53EF\u4EE5\u770B\u5230\u9AD8\u4EAE\uFF09\u3002</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u6784\u5EFA\u9AD8\u4EAE\u5C42\u7684\u8FC7\u7A0B\u4E2D\u4F20\u9012\u5B83\u4EEC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> hl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HighlightLayer</span><span class="token punctuation">(</span><span class="token string">&quot;hl1&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">camera</span><span class="token operator">:</span> myCamera <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),un={href:"https://doc.babylonjs.com/typedoc/classes/babylon.highlightlayer",target:"_blank",rel:"noopener noreferrer"},rn=s("HighlightLayer API");function dn(kn,hn){const t=c("RouterLink"),p=c("ExternalLinkIcon");return i(),u(r,null,[k,n("nav",h,[n("ul",null,[n("li",null,[a(t,{to:"#\u5982\u4F55\u4F7F\u7F51\u683C\u9AD8\u4EAE"},{default:e(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#\u5982\u4F55\u4F7F\u7528"},{default:e(()=>[g]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u9ED8\u8BA4\u7528\u4F8B"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#\u505C\u6B62\u9AD8\u4EAE\u663E\u793A"},{default:e(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#\u81EA\u53D1\u5149\u8F93\u5165"},{default:e(()=>[b]),_:1})])])]),n("li",null,[a(t,{to:"#\u6DF1\u5165"},{default:e(()=>[f]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u91CD\u53E0\u9AD8\u4EAE"},{default:e(()=>[y]),_:1})]),n("li",null,[a(t,{to:"#\u6A21\u7CCA\u5EA6"},{default:e(()=>[B]),_:1})]),n("li",null,[a(t,{to:"#\u5185\u90E8\u8F89\u5149\u548C\u5916\u90E8\u8F89\u5149"},{default:e(()=>[L]),_:1})]),n("li",null,[a(t,{to:"#\u6392\u9664\u7F51\u683C"},{default:e(()=>[j]),_:1})]),n("li",null,[a(t,{to:"#\u591A\u4E2A\u76F8\u673A"},{default:e(()=>[w]),_:1})]),n("li",null,[a(t,{to:"#\u6E32\u67D3\u7EC4-rendering-groups"},{default:e(()=>[A]),_:1})])])]),n("li",null,[a(t,{to:"#\u9009\u9879"},{default:e(()=>[x]),_:1})])])]),N,n("p",null,[O,n("a",Y,[q,a(p)]),H]),C,n("p",null,[n("a",M,[R,a(p)])]),F,n("p",null,[n("a",K,[z,a(p)])]),G,n("p",null,[n("a",S,[J,a(p)])]),U,n("p",null,[n("a",V,[E,a(p)])]),T,n("p",null,[n("a",I,[D,a(p)])]),Q,n("p",null,[n("a",W,[P,a(p)])]),X,Z,n("p",null,[$,n("a",nn,[sn,a(p)])]),n("p",null,[an,n("a",tn,[en,a(p)])]),pn,n("p",null,[n("a",on,[cn,a(p)])]),ln,n("p",null,[n("a",un,[rn,a(p)])])],64)}var gn=l(d,[["render",dn],["__file","highlightLayer.html.vue"]]);export{gn as default};