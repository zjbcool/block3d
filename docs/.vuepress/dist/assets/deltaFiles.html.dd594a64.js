import{_ as l,r as e,o as i,c as u,a as n,d as a,w as p,F as r,b as s,e as o}from"./app.090844ca.js";const k={},d=n("h1",{id:"\u8BB0\u5F55\u573A\u666F\u4FEE\u6539",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BB0\u5F55\u573A\u666F\u4FEE\u6539","aria-hidden":"true"},"#"),s(" \u8BB0\u5F55\u573A\u666F\u4FEE\u6539")],-1),m={class:"table-of-contents"},v=s("\u8BB0\u5F55\u4FEE\u6539"),b=s("\u793A\u4F8B"),h=s("\u4F7F\u7528\u67E5\u770B\u5668 Inspector"),g=s("\u9650\u5236"),y=o(`<p>\u4ECEBabylon.js v4.2\u5F00\u59CB\uFF0C\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u573A\u666F\u4F7F\u7528\u589E\u91CF\u4FEE\u6539\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5&quot;\u8BB0\u5F55&quot;\u5BF9\u4E00\u4E2A\u573A\u666F\u6240\u505A\u7684\u6240\u6709\u4FEE\u6539\uFF0C\u5E76\u5728\u4EE5\u540E\u91CD\u65B0\u5E94\u7528\u8FD9\u4E9B\u4FEE\u6539\u3002</p><p>\u5F53\u4F60\u4ECE\u4E00\u4E2A.babylon\u6216.gltf\u6587\u4EF6\u4E2D\u52A0\u8F7D\u4E00\u4E2A\u573A\u666F\uFF0C\u5E76\u4E14\u4F60\u60F3\u5BF9\u5B83\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u8FD9\u4E00\u70B9\u7279\u522B\u6709\u7528\uFF08\u65E0\u9700\u4ECE\u4F60\u7684DCC\u5DE5\u5177\u4E2D\u91CD\u65B0\u5BFC\u51FA\u573A\u666F\uFF09\u3002</p><h2 id="\u8BB0\u5F55\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u4FEE\u6539" aria-hidden="true">#</a> \u8BB0\u5F55\u4FEE\u6539</h2><p>\u8981\u8BB0\u5F55\u5BF9\u4E00\u4E2A\u573A\u666F\u6240\u505A\u7684\u4FEE\u6539\uFF0C\u53EA\u9700\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684<code>SceneRecorder</code>\u5E76\u8C03\u7528\u5B83\u7684<code>track()</code>\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> recorder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>SceneRecorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

recorder<span class="token punctuation">.</span><span class="token function">track</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7684\u503C\u662F\u4E00\u4E2AJSON\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u4E0B\u8F7D\u6216\u4EE5\u540E\u518D\u4F7F\u7528\u3002</p><p>\u8981\u4E0B\u8F7D\u5B83\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528\u5DE5\u5177\u7C7B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Tools<span class="token punctuation">.</span><span class="token function">Download</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>delta<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;delta.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u628A\u5B83\u5E94\u7528\u4E8E\u4F60\u7684\u573A\u666F\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528<code>ApplyDelta</code>\u9759\u6001\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneRecorder<span class="token punctuation">.</span><span class="token function">ApplyDelta</span><span class="token punctuation">(</span>delta<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u4F8B\u5B50\u6765\u770B\u770B\u5B83\u7684\u5B9E\u9645\u6548\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>FreeCamera</span><span class="token punctuation">(</span><span class="token string">&quot;camera1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Zero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
camera<span class="token punctuation">.</span><span class="token function">attachControl</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HemisphericLight</span><span class="token punctuation">(</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
light<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0.7</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> sphere <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateSphere</span><span class="token punctuation">(</span><span class="token string">&quot;sphere&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">diameter</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">segments</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> ground <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateGround</span><span class="token punctuation">(</span><span class="token string">&quot;ground&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Instantiate the recorder</span>
<span class="token keyword">var</span> recorder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>SceneRecorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

recorder<span class="token punctuation">.</span><span class="token function">track</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Let&#39;s make some changes</span>
sphere<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>clearColor<span class="token punctuation">.</span>r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

light<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> light2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HemisphericLight</span><span class="token punctuation">(</span><span class="token string">&quot;light2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

ground<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Now we can get the delta file</span>
<span class="token keyword">let</span> delta <span class="token operator">=</span> recorder<span class="token punctuation">.</span><span class="token function">getDelta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Just to see the changes, we are updating the value so we can see what the delta is doing</span>
ground <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateGround</span><span class="token punctuation">(</span><span class="token string">&quot;ground&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
light2<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>clearColor<span class="token punctuation">.</span>r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
light<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

<span class="token comment">// Apply the delta</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneRecorder<span class="token punctuation">.</span><span class="token function">ApplyDelta</span><span class="token punctuation">(</span>delta<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),_={href:"https://playground.babylonjs.com/#MPD4TQ#1",target:"_blank",rel:"noopener noreferrer"},w=s("\u589E\u91CF\u4FEE\u6539\u793A\u4F8B"),B=o('<h2 id="\u4F7F\u7528\u67E5\u770B\u5668-inspector" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u67E5\u770B\u5668-inspector" aria-hidden="true">#</a> \u4F7F\u7528\u67E5\u770B\u5668 Inspector</h2><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u67E5\u770B\u5668\u6765\u8BB0\u5F55delta\u3002\u8981\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u8BF7\u8DF3\u5230 Tools \u9009\u9879\u5361\uFF0C\u9009\u62E9 Replay \u90E8\u5206\u7684[Start recording] \u6309\u94AE\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fscene%2Finspector-record.jpg&amp;w=1920&amp;q=75" alt=""></p><p>\u5B8C\u6210\u5F55\u5236\u540E\uFF0C\u8F6C\u5230\u540C\u4E00\u4F4D\u7F6E\u5E76\u70B9\u51FB [Generate delta file]\uFF1A</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fscene%2Finspector-generate.jpg&amp;w=1920&amp;q=75" alt=""></p><p>\u8FD9\u5C06\u628A\u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730\u3002</p><h2 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h2><p>\u8BB0\u5F55\u5668\u6709\u4E00\u4E9B\u9650\u5236\u5728\u8FD9\u91CC\u5217\u51FA\uFF1A</p><ul><li>\u5B83\u5C06\u53EA\u8BB0\u5F55\u7B80\u5355\u7684\u503C\uFF08array, colors, vectors, boolean, number\uFF09\u3002</li><li>\u5B83\u4E0D\u4F1A\u8BB0\u5F55\u5927\u7684\u72B6\u6001\u53D8\u5316\uFF0C\u6BD4\u5982\u3002 <ul><li>\u66F4\u65B0\u4E00\u4E2A\u7F51\u683C\u7684\u6750\u8D28\u5C5E\u6027</li><li>\u66F4\u65B0\u7F51\u683C\u7684\u9AA8\u67B6\u5C5E\u6027</li><li>\u66F4\u65B0\u7F51\u683C\u7684\u51E0\u4F55\u5F62\u72B6</li></ul></li></ul>',9);function f(L,N){const t=e("RouterLink"),c=e("ExternalLinkIcon");return i(),u(r,null,[d,n("nav",m,[n("ul",null,[n("li",null,[a(t,{to:"#\u8BB0\u5F55\u4FEE\u6539"},{default:p(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#\u793A\u4F8B"},{default:p(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#\u4F7F\u7528\u67E5\u770B\u5668-inspector"},{default:p(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#\u9650\u5236"},{default:p(()=>[g]),_:1})])])]),y,n("p",null,[n("a",_,[w,a(c)])]),B],64)}var j=l(k,[["render",f],["__file","deltaFiles.html.vue"]]);export{j as default};