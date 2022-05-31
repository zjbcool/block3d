import{_ as l,r as c,o as i,c as u,a as n,d as a,w as e,F as r,b as s,e as o}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u52A8\u6001\u7EB9\u7406-dynamic-textures",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u52A8\u6001\u7EB9\u7406-dynamic-textures","aria-hidden":"true"},"#"),s(" \u52A8\u6001\u7EB9\u7406 Dynamic Textures")],-1),v={class:"table-of-contents"},m=s("\u521B\u5EFA\u548C\u5E94\u7528"),h=s("\u5199\u5165\u6587\u672C"),b=s("\u753B\u5E03\u65B9\u6CD5"),g=s("\u7ED8\u5236\u66F2\u7EBF"),_=s("\u56FE\u7247"),y=s("\u793A\u4F8B"),f=s("\u6587\u672C\u548C\u533A\u57DF\u5339\u914D"),x=s("\u6587\u672C\u9002\u914D\u533A\u57DF"),w=s("\u533A\u57DF\u9002\u914D\u6587\u672C"),T=s("\u5E8F\u5217\u5316"),j=s("\u52A8\u6001\u7EB9\u7406\u7684\u5DE5\u4F5C\u539F\u7406\u662F\u521B\u5EFA\u4E00\u4E2A\u753B\u5E03\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528"),q={href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",target:"_blank",rel:"noopener noreferrer"},D=s("HTML5\u753B\u5E03"),H=s("\u7684\u6240\u6709\u65B9\u6CD5\u5728\u4E0A\u9762\u7ED8\u753B\u3002"),M=o(`<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fdyntext.png&amp;w=1920&amp;q=75" alt=""></p><h2 id="\u521B\u5EFA\u548C\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u548C\u5E94\u7528" aria-hidden="true">#</a> \u521B\u5EFA\u548C\u5E94\u7528</h2><p>\u53EF\u4EE5\u4F7F\u7528\u53EA\u6709\u4E09\u4E2A\u53C2\u6570\u7684<code>dynamicTexture</code>\u51FD\u6570\u7B80\u5355\u5B9E\u73B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myDynamicTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>DynamicTexture</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> option<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>minmaps</code>\uFF0C <code>sampling mode</code> \u548C <code>texture</code>\u7684\u9ED8\u8BA4\u503C\u53EF\u4EE5\u88AB\u901A\u8FC7\u8D4B\u503C\u88AB\u8986\u76D6\u3002</p><p><code>name</code>\u548C<code>scene</code>\u53C2\u6570\u662F\u663E\u800C\u6613\u89C1\u7684\uFF0C\u800C<code>option</code>\u53C2\u6570\u5219\u51B3\u5B9A\u4E86\u52A8\u6001\u7EB9\u7406\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E09\u4E2A\u503C\u4E4B\u4E00\u3002</p><ul><li>\u4E00\u4E2A\u5DF2\u7ECF\u521B\u5EFA\u7684\u753B\u5E03\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u4F7F\u7528canvas.width\u548Ccanvas.height\u3002</li><li>\u4E00\u4E2A\u5177\u6709\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</li><li>\u4E00\u4E2A\u6570\u5B57\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u90FD\u88AB\u8BBE\u7F6E\u4E3A\u8FD9\u4E2A\u6570\u5B57\u3002</li></ul><p>\u4E00\u65E6\u521B\u5EFA\u4E86\u52A8\u6001\u7EB9\u7406\uFF0C\u5C31\u53EF\u4EE5\u6309\u7167\u901A\u5E38\u7684\u65B9\u5F0F\u5C06\u5176\u4F5C\u4E3A\u6750\u8D28\u7684\u6F2B\u53CD\u5C04\u7EB9\u7406\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;Mat&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>                    
myMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> myDynamicTexture<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> myMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5199\u5165\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u5199\u5165\u6587\u672C" aria-hidden="true">#</a> \u5199\u5165\u6587\u672C</h2><p>\u53EF\u4EE5\u4F7F\u7528<code>drawText</code>\u65B9\u6CD5\uFF0C\u76F4\u63A5\u5C06\u6587\u672C\u5199\u5728\u52A8\u6001\u7EB9\u7406\u4E0A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myDynamicTexture<span class="token punctuation">.</span><span class="token function">drawText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> font<span class="token punctuation">,</span> color<span class="token punctuation">,</span> canvas color<span class="token punctuation">,</span> invertY<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li>text\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8981\u5199\u7684\u5B57\u3002</li><li>x\uFF1A\u6570\u5B57\uFF0C\u4E0E\u5DE6\u624B\u8FB9\u7684\u8DDD\u79BB\u3002</li><li>y\uFF1A\u6570\u5B57\uFF0C\u4E0E\u9876\u90E8\u6216\u5E95\u90E8\u8FB9\u7F18\u7684\u8DDD\u79BB\uFF0C\u53D6\u51B3\u4E8EinvertY\u3002</li><li>font\uFF1A\u5B57\u7B26\u4E32\uFF0C\u5B57\u4F53\u5B9A\u4E49\uFF0C\u5F62\u5F0F\u4E3Afont-style\u3001font-size\u3001font_name\u3002</li><li>invertY\uFF1A\u5E03\u5C14\u503C\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0Cy\u662F\u79BB\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u5F53\u4E3A\u5047\u65F6\uFF0Cy\u662F\u79BB\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u5B57\u6BCD\u53CD\u8F6C\u3002</li><li>update\uFF1A\u5E03\u5C14\u503C\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u52A8\u6001\u7EB9\u7406\u5C06\u7ACB\u5373\u88AB\u66F4\u65B0\u3002</li></ul>`,14),B={href:"https://playground.babylonjs.com/#5ZCGRM#2",target:"_blank",rel:"noopener noreferrer"},W=s("\u7ED8\u5236\u6587\u672C\u793A\u4F8B"),C=o(`<h2 id="\u753B\u5E03\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u753B\u5E03\u65B9\u6CD5" aria-hidden="true">#</a> \u753B\u5E03\u65B9\u6CD5</h2><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u5F97\u753B\u5E03\u4E0A\u4E0B\u6587\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ctx <span class="token operator">=</span> myDynamicTexture<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66B4\u9732\u4E86HTML5\u753B\u5E03\u5143\u7D20\u7684\u6240\u6709\u80FD\u529B\u3002</p><h3 id="\u7ED8\u5236\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u66F2\u7EBF" aria-hidden="true">#</a> \u7ED8\u5236\u66F2\u7EBF</h3><p>\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u4F7F\u7528\u4E8C\u6B21\u66F2\u7EBF\u7ED8\u56FE\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">62.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">62.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5E94\u7528\u7ED8\u56FE\uFF0C\u52A8\u6001\u7EB9\u7406\u9700\u8981\u66F4\u65B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myDynamicTexture<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528<code>invertY</code>\uFF0C\u8BF7\u4F7F\u7528<code>update(false)</code>\u3002</p>`,10),A={href:"https://playground.babylonjs.com/#5ZCGRM#3",target:"_blank",rel:"noopener noreferrer"},L=s("\u7ED8\u5236\u66F2\u7EBF\u793A\u4F8B"),z=o(`<h3 id="\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247" aria-hidden="true">#</a> \u56FE\u7247</h3><p>\u53EF\u4EE5\u4F7F\u7528 <code>drawImage</code> \u65B9\u6CD5\u6DFB\u52A0\u56FE\u7247\u6765\u586B\u5145\u90E8\u5206\u6216\u6574\u4E2A\u753B\u5E03\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u5728\u5C06\u56FE\u7247\u6307\u5B9A\u7ED9\u753B\u5E03\u4E4B\u524D\uFF0C\u5FC5\u987B\u7B49\u5F85\u56FE\u7247\u7684\u52A0\u8F7D\uFF0C\u5E76\u5728\u4E4B\u540E\u66F4\u65B0\u52A8\u6001\u7EB9\u7406\u3002</p><p>\u5BF9\u4E8E\u6574\u4E2A\u56FE\u7247</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;PATH TO IMAGE&#39;</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myDynamicTexture<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4E8E\u90E8\u5206\u56FE\u7247\u7F29\u653E\u5230\u753B\u5E03\u7684\u4E00\u90E8\u5206</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;PATH TO IMAGE&#39;</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> image start x<span class="token punctuation">,</span> image start y<span class="token punctuation">,</span> image width<span class="token punctuation">,</span> image height<span class="token punctuation">,</span> canvas to x<span class="token punctuation">,</span> canvas to y<span class="token punctuation">,</span> destination width<span class="token punctuation">,</span> destination height<span class="token punctuation">)</span><span class="token punctuation">;</span>
myDynamicTexture<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),N={href:"https://playground.babylonjs.com/#5ZCGRM#4",target:"_blank",rel:"noopener noreferrer"},S=s("\u589E\u52A0\u56FE\u7247"),Y=n("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),I={href:"https://playground.babylonjs.com/#5ZCGRM#1",target:"_blank",rel:"noopener noreferrer"},O=s("\u793A\u4F8B"),F=o(`<h2 id="\u6587\u672C\u548C\u533A\u57DF\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u548C\u533A\u57DF\u5339\u914D" aria-hidden="true">#</a> \u6587\u672C\u548C\u533A\u57DF\u5339\u914D</h2><p><strong>\u5BF9\u4E8E\u5355\u884C\u6587\u672C</strong>\uFF0C\u53EF\u4EE5\u5C06\u6587\u672C\u88C5\u5165\u6307\u5B9A\u7684\u533A\u57DF\uFF0C\u6216\u5C06\u4E00\u4E2A\u533A\u57DF\u88C5\u5165\u6307\u5B9A\u7684\u6587\u672C\u3002</p><h3 id="\u6587\u672C\u9002\u914D\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u9002\u914D\u533A\u57DF" aria-hidden="true">#</a> \u6587\u672C\u9002\u914D\u533A\u57DF</h3><p>\u4F60\u6709\u4E00\u4E2A\u6709\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u5E73\u9762\uFF0C<code>planeWidth</code>\u548C<code>planeHeight</code>\uFF0C\u4E3A\u4E86\u5F62\u6210\u52A8\u6001\u7EB9\u7406\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5C06\u5E73\u9762\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u90FD\u4E58\u4EE5\u76F8\u540C\u7684\u6570\u5B57\uFF0C\u4EE5\u4FDD\u6301\u957F\u5BBD\u6BD4\u3002\u4E58\u4EE5\u7684\u6570\u5B57\u5B9A\u4E49\u4E86\u6587\u672C\u7684\u6E05\u6670\u5EA6\uFF0C\u5C0F\u7684\u6570\u5B57\u4F1A\u4EA7\u751F\u6A21\u7CCA\u7684\u6587\u672C\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u521B\u5EFA\u52A8\u6001\u7EB9\u7406\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> DTWidth <span class="token operator">=</span> planeWidth <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> DTHeight <span class="token operator">=</span> planeHeight <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dynamicTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>DynamicTexture</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicTexture&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span>DTWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span>DTHeight<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528\u4EFB\u4F55\u5927\u5C0F\u7684\u5B57\u4F53\u4E66\u5199\u5E76\u6D4B\u91CF\u52A8\u6001\u7EB9\u7406\u4E0A\u7684\u6587\u672C\u5BBD\u5EA6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ctx <span class="token operator">=</span> dynamicTexture<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">//any value will work</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> size <span class="token operator">+</span> <span class="token string">&quot;px &quot;</span> <span class="token operator">+</span> font_type<span class="token punctuation">;</span>
<span class="token keyword">var</span> textWidth <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u5B57\u5BBD\u5EA6\u4E0E\u5E94\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u7684\u6BD4\u4F8B\u53EF\u4EE5\u5E94\u7528\u4E8E\u52A8\u6001\u7EB9\u7406\u5BBD\u5EA6\uFF0C\u4EE5\u786E\u5B9A\u9002\u5408\u8BE5\u5E73\u9762\u7684\u5B57\u4F53\u5927\u5C0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ratio <span class="token operator">=</span> textWidth<span class="token operator">/</span>size<span class="token punctuation">;</span>

<span class="token keyword">var</span> font_size <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>DTWidth <span class="token operator">/</span> ratio<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u613F\u610F\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u4F8B\u5E94\u7528\u4E00\u4E2A\u4E58\u6570\uFF0C\u4E58\u6570\u8D8A\u5927\uFF0C\u6587\u672C\u8D8A\u5C0F\uFF0C\u8FB9\u8DDD\u8D8A\u5927\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> font_size <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>DTWidth <span class="token operator">/</span> <span class="token punctuation">(</span>ratio <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\u8BBE\u7F6E\u5B57\u4F53\u5E76\u7ED8\u5236\u6587\u672C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> font <span class="token operator">=</span> font_size <span class="token operator">+</span> <span class="token string">&quot;px &quot;</span> <span class="token operator">+</span> font_type<span class="token punctuation">;</span>
dynamicTexture<span class="token punctuation">.</span><span class="token function">drawText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> font<span class="token punctuation">,</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u8BBE\u7F6E\u5E76\u5E94\u7528\u5E73\u9762\u7684\u6750\u8D28\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;mat&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mat<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> dynamicTexture<span class="token punctuation">;</span>
plane<span class="token punctuation">.</span>material <span class="token operator">=</span> mat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),E={href:"https://playground.babylonjs.com/#TMHF80#1",target:"_blank",rel:"noopener noreferrer"},G=s("\u5355\u884C\u6587\u672C\u9002\u914D\u533A\u57DF\u793A\u4F8B"),P=o(`<h3 id="\u533A\u57DF\u9002\u914D\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u9002\u914D\u6587\u672C" aria-hidden="true">#</a> \u533A\u57DF\u9002\u914D\u6587\u672C</h3><p>\u53D6\u4E00\u4E2A\u56FA\u5B9A\u9AD8\u5EA6\u7684\u5E73\u9762\u7F51\u683C\uFF0CplaneHeight\u548C\u8BBE\u5B9A\u5B57\u4F53\u5927\u5C0F\u7684\u6587\u5B57\uFF0C\u7136\u540E\u4F60\u53EF\u4EE5\u8BA1\u7B97\u5E73\u9762\u5FC5\u987B\u6709\u591A\u5BBD\u624D\u80FD\u5BB9\u7EB3\u6587\u5B57\u3002\u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u4F60\u9700\u8981\u77E5\u9053\u6587\u5B57\u5728\u52A8\u6001\u7EB9\u7406\u4E0A\u6240\u5360\u7684\u5BBD\u5EA6\u3002\u8FD9\u662F\u7528\u4E00\u4E2A\u4E34\u65F6\u7684\u52A8\u6001\u7EB9\u7406\u548C\u6D4B\u91CF\u6587\u672C\u6765\u8BA1\u7B97\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>DynamicTexture</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicTexture&quot;</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> tmpctx <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tmpctx<span class="token punctuation">.</span>font <span class="token operator">=</span> font<span class="token punctuation">;</span>
<span class="token keyword">var</span> DTWidth <span class="token operator">=</span> tmpctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u52A8\u6001\u7EB9\u7406\u9009\u62E9\u4E00\u4E2A\u9AD8\u5EA6\uFF0CDTHeight\uFF0C\u5E76\u4FDD\u6301\u5E73\u9762\u4E0E\u52A8\u6001\u7EB9\u7406\u7684\u957F\u5BBD\u6BD4\u3002</p><ol><li>\u8BA1\u7B97\u6BD4\u4F8B ratio planeHeight:DTHeight;</li><li>\u4F7F\u7528\u8FD9\u4E2A\u6BD4\u4F8B\u6765\u8BA1\u7B97\u5E73\u9762\u7684\u5BBD\u5EA6Width = DTWidth * ratio;</li><li>\u521B\u5EFA\u52A8\u6001\u7EB9\u7406\uFF0C\u4F5C\u4E3A\u6750\u8D28\u4F7F\u7528\uFF0C\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5206\u522B\u4E3ADTWidth\u548CDTHeight\u3002</li><li>\u5728\u52A8\u6001\u7EB9\u7406\u4E0A\u7ED8\u5236\u6587\u5B57\u3002</li><li>\u521B\u5EFA\u5177\u6709\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u5E73\u9762 planeWidth \u548C planeHeight\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> planeHeight <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> DTHeight <span class="token operator">=</span> <span class="token number">256</span><span class="token punctuation">;</span> <span class="token comment">//or set as wished</span>
<span class="token keyword">var</span> ratio <span class="token operator">=</span> planeHeight<span class="token operator">/</span>DTHeight<span class="token punctuation">;</span>
<span class="token keyword">var</span> planeWidth <span class="token operator">=</span> DTWidth <span class="token operator">*</span> ratio<span class="token punctuation">;</span>

<span class="token keyword">var</span> dynamicTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>DynamicTexture</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicTexture&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span>DTWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span>DTHeight<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> mat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;mat&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mat<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> dynamicTexture<span class="token punctuation">;</span>
dynamicTexture<span class="token punctuation">.</span><span class="token function">drawText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> font<span class="token punctuation">,</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//use of null, null centers the text</span>
    
<span class="token keyword">var</span> plane <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreatePlane</span><span class="token punctuation">(</span><span class="token string">&quot;plane&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span>planeWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span>planeHeight<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
plane<span class="token punctuation">.</span>material <span class="token operator">=</span> mat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),R={href:"https://playground.babylonjs.com/#TMHF80",target:"_blank",rel:"noopener noreferrer"},V=s("\u533A\u57DF\u9002\u914D\u6587\u672C\u793A\u4F8B"),Z=n("h2",{id:"\u5E8F\u5217\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E8F\u5217\u5316","aria-hidden":"true"},"#"),s(" \u5E8F\u5217\u5316")],-1),U=n("p",null,[s("\u52A8\u6001\u7EB9\u7406\u53EF\u4EE5\u4F7F\u7528"),n("code",null,"SceneSerializer.Serialize()"),s("\u4E0E\u573A\u666F\u4E00\u8D77\u5E8F\u5217\u5316\uFF0C\u6216\u8005\u4F7F\u7528"),n("code",null,"SceneSerializer.SerializeMesh()"),s("\u5E8F\u5217\u5316\u4E00\u4E2A\u7F51\u683C\u3002")],-1),J=n("p",null,"\u6CE8\u610F\uFF1A\u8BF7\u786E\u4FDD\u5728\u5E8F\u5217\u5316\u4E4B\u524D\uFF0C\u573A\u666F\u5DF2\u7ECF\u51C6\u5907\u597D\u4E86\u3002",-1),K=s("\u8FD9\u4E2A"),Q={href:"https://playground.babylonjs.com/#FU0ES5",target:"_blank",rel:"noopener noreferrer"},X=s("\u793A\u4F8B"),$=s("\u6F14\u793A\u4E86\u5E8F\u5217\u5316\u4E00\u4E2A\u4E0E\u7F51\u683C\u4E0A\u7684\u6750\u8D28\u76F8\u5173\u7684\u52A8\u6001\u7EB9\u7406\u3002");function nn(sn,an){const t=c("RouterLink"),p=c("ExternalLinkIcon");return i(),u(r,null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#\u521B\u5EFA\u548C\u5E94\u7528"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#\u5199\u5165\u6587\u672C"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#\u753B\u5E03\u65B9\u6CD5"},{default:e(()=>[b]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u7ED8\u5236\u66F2\u7EBF"},{default:e(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#\u56FE\u7247"},{default:e(()=>[_]),_:1})])])]),n("li",null,[a(t,{to:"#\u793A\u4F8B"},{default:e(()=>[y]),_:1})]),n("li",null,[a(t,{to:"#\u6587\u672C\u548C\u533A\u57DF\u5339\u914D"},{default:e(()=>[f]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u6587\u672C\u9002\u914D\u533A\u57DF"},{default:e(()=>[x]),_:1})]),n("li",null,[a(t,{to:"#\u533A\u57DF\u9002\u914D\u6587\u672C"},{default:e(()=>[w]),_:1})])])]),n("li",null,[a(t,{to:"#\u5E8F\u5217\u5316"},{default:e(()=>[T]),_:1})])])]),n("p",null,[j,n("a",q,[D,a(p)]),H]),M,n("p",null,[n("a",B,[W,a(p)])]),C,n("p",null,[n("a",A,[L,a(p)])]),z,n("p",null,[n("a",N,[S,a(p)])]),Y,n("p",null,[n("a",I,[O,a(p)])]),F,n("p",null,[n("a",E,[G,a(p)])]),P,n("p",null,[n("a",R,[V,a(p)])]),Z,U,J,n("p",null,[K,n("a",Q,[X,a(p)]),$])],64)}var en=l(d,[["render",nn],["__file","dynamicTexture.html.vue"]]);export{en as default};
