import{_ as i,r as c,o as l,c as u,a as n,d as a,w as o,F as r,b as s,e as p}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u52A0\u8F7D\u6A21\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u52A0\u8F7D\u6A21\u578B","aria-hidden":"true"},"#"),s(" \u52A0\u8F7D\u6A21\u578B")],-1),m=n("p",null,"\u672C\u8282\u6559\u7A0B\u4E2D\u7684\u6F14\u793A\u7A0B\u5E8F\uFF0C\u4F8B\u5982\u53EF\u4EE5\u5B9A\u4F4D\u548C\u65CB\u8F6C\u7684\u623F\u5B50\uFF0C\u5173\u4E8E\u5982\u4F55\u4F7F\u7528Babylon.js\u5B9E\u73B0\u8FD9\u6837\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u4F1A\u5728\u4ECB\u7ECD\u5B8C\u52A0\u8F7D\u6A21\u578B\u548C\u5C06\u9879\u76EE\u653E\u5728\u7F51\u9875\u4E0A\u7684\u57FA\u7840\u77E5\u8BC6\u4E4B\u540E\u8BB2\u89E3\u3002",-1),v={class:"table-of-contents"},h=s("\u52A0\u8F7D\u6A21\u578B\u6216\u573A\u666F"),_=s("\u63A5\u4E0B\u6765"),b=s("\u8B66\u544A"),g=p(`<h2 id="\u52A0\u8F7D\u6A21\u578B\u6216\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u6A21\u578B\u6216\u573A\u666F" aria-hidden="true">#</a> \u52A0\u8F7D\u6A21\u578B\u6216\u573A\u666F</h2><p>\u5F53\u628A\u6A21\u578B\u653E\u5165\u573A\u666F\u4E2D\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u5176\u52A0\u8F7D\u5230\u6D4F\u89C8\u5668\u4E2D\uFF0C\u8FD9\u4E2A\u52A0\u8F7D\u7684\u8FC7\u7A0B\u662F\u5F02\u6B65\u7684\u3002\u5728\u5BF9\u6A21\u578B\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u4E4B\u524D\uFF0C\u9700\u8981\u786E\u4FDD\u5B83\u4EEC\u5DF2\u52A0\u8F7D\u3002\u4F7F\u7528 <strong>SceneLoader</strong> \u7684 <strong>ImportMeshAsync</strong> \u65B9\u6CD5\u6267\u884C\u6B64\u64CD\u4F5C\uFF0C\u8BE5\u65B9\u6CD5\u5177\u6709\u4EE5\u4E0B\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span>model name<span class="token punctuation">,</span> folder path<span class="token punctuation">,</span> file name<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u573A\u666Fscene\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u573A\u666F\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u662F\u4E09\u79CD\u7C7B\u578B\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u662F\u8981\u52A0\u8F7D\u6240\u6709\u6A21\u578B\uFF0C\u53EA\u52A0\u8F7D\u4E00\u4E2A\u6A21\u578B\u8FD8\u662F\u6A21\u578B\u5217\u8868\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/relative path/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//empty string all meshes</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">&quot;model1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/relative path/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Name of model for one model</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;model1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;model2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;/relative path/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Array of model names</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u6240\u6709\u4EE3\u7801\u53EA\u4F1A\u52A0\u8F7D\u6A21\u578B\uFF0C\u4F46\u65E0\u6CD5\u64CD\u4F5C\u6A21\u578B\u3002\u73B0\u5728\u53EA\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u4F46\u5728 Promise \u5B8C\u6210\u5E76\u63D0\u4F9B\u7ED3\u679C\u540E\u6CA1\u6709\u4EFB\u4F55\u64CD\u4F5C\u3002</p>`,6),f={href:"https://playground.cnbabylon.com/#0U8K05",target:"_blank",rel:"noopener noreferrer"},y=s("\u52A0\u8F7D\u6A21\u578B\u793A\u4F8B"),q={href:"https://playground.cnbabylon.com/#Z1DLUQ",target:"_blank",rel:"noopener noreferrer"},x=s("\u52A0\u8F7D\u591A\u4E2A\u6A21\u578B\u793A\u4F8B"),B=p(`<p>\u4E3A\u4E86\u5BF9\u7ED3\u679C\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6211\u4EEC\u5728 Promise \u7684\u540E\u9762\u4F7F\u7528 then \u65B9\u6CD5\u8C03\u7528\u5177\u6709 Promise \u7ED3\u679C\u7684\u51FD\u6570\u3002\u7ED3\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4E2D<em>meshes</em>\u5C5E\u6027\u5305\u542B\u6240\u6709\u52A0\u8F7D\u6A21\u578B\u7684\u7F51\u683C\u6570\u636E\u3002\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2Ameshes\u6570\u7EC4\u6216\u5B83\u4EEC\u7684\u540D\u5B57\u6765\u64CD\u4F5C\u6BCF\u4E2A\u7F51\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/relative path/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;myFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>meshes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> myMesh1 <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">getMeshByName</span><span class="token punctuation">(</span><span class="token string">&quot;myMesh_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMesh1<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j={href:"https://playground.babylonjs.com/#GC5UIE",target:"_blank",rel:"noopener noreferrer"},L=s("\u52A0\u8F7D\u5E76\u64CD\u4F5C\u6A21\u578B\u793A\u4F8B"),A=p(`<h2 id="\u63A5\u4E0B\u6765" tabindex="-1"><a class="header-anchor" href="#\u63A5\u4E0B\u6765" aria-hidden="true">#</a> \u63A5\u4E0B\u6765</h2><p>\u5728palyground\u4E0A\u6709\u4E00\u4E2A\u5DE5\u4F5C\u573A\u666F\u662F\u4E00\u56DE\u4E8B\uFF0C\u4F46\u6700\u7EC8\u9700\u8981\u628A\u6E38\u620F\u6216\u5E94\u7528\u7A0B\u5E8F\u90E8\u7F72\u5230\u81EA\u5DF1\u7684\u7F51\u7AD9\u4E0A\u8FD0\u884C\u3002\u8FD9\u91CC\u6211\u4EEC\u4F1A\u63D0\u4F9B\u4E00\u4E2A HTML \u6A21\u677F\u6765\u6267\u884C\u6B64\u64CD\u4F5C\u3002</p><h3 id="\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#\u8B66\u544A" aria-hidden="true">#</a> \u8B66\u544A</h3><p>\u91CD\u70B9\u5F3A\u8C03 - \u4E0D\u540C\u7684\u683C\u5F0F\u4F1A\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u5BFC\u51FA\u6A21\u578B\u3002</p><p>\u5F3A\u8C03 - \u4E0D\u540C\u7684\u683C\u5F0F\u5728\u5BFC\u5165 Babylon.js \u65F6\uFF0C\u53EF\u80FD\u4F1A\u88AB\u6539\u53D8\u3002</p><p>\u8981\u6E05\u695A\u4F7F\u7528\u7684\u683C\u5F0F\u5BF9\u7ED3\u679C\u7684\u5F71\u54CD\u3002\u8FD9\u91CC\u4E0D\u505A\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u4F46\u4EE5\u4E0B\u793A\u4F8B\u8BF4\u660E\u4E86\u4E3A\u4EC0\u4E48\u8FD9\u5F88\u91CD\u8981\u3002</p><ol><li>\u67D0\u4E9B\u8F6F\u4EF6\u4F7F\u7528rotationQuaternion \u96C6\u4FDD\u5B58\u6240\u6709\u7F51\u683C\uFF0C\u9664\u975E\u63D0\u524D\u8BBE\u7F6E\uFF0C\u5426\u5219\u65E0\u6CD5\u4F7F\u7528\u65CB\u8F6C\u65B9\u6CD5</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myMesh<span class="token punctuation">.</span>rotationQuaternion <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//Any version of Babylon.js</span>

myMesh<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//babylon.js versions &gt; 4.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4EE5\u4E0B\u4E24\u79CD\u7C7B\u578B\u4ECE\u5B8C\u5168\u76F8\u540C\u7684\u573A\u666F\u4E2D\u5BFC\u51FA\u5E76\u5BFC\u5165\u5230 Babylon.js</li></ol><p><strong>.babylon</strong> \u683C\u5F0F - \u4E00\u4E2A\u6A21\u578B\u5B58\u50A8\u4E3A\u4E00\u4E2A\u7F51\u683C\uFF0C\u5373\u6BCF\u4E2A\u623F\u5B50\u4E3B\u4F53\u548C\u5C4B\u9876\u5F62\u6210\u4E00\u6240\u623F\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>detached_house
ground
semi_house
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.glb</strong> \u683C\u5F0F - \u6DFB\u52A0\u4E86\u4E00\u4E2A <em><em>root</em></em> \u8282\u70B9\u7528\u6765\u4FDD\u5B58\u6240\u6709\u6A21\u578B\uFF0C\u5E76\u5C06\u6A21\u578B\u90E8\u4EF6\u5B58\u50A8\u4E3A\u5B50\u7F51\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_root_
  detached_house
      detached_house primitive0
      detached_house primitive1
  ground
  semi_house
      semi_house primitive0
      semi_house primitive1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function M(N,I){const t=c("RouterLink"),e=c("ExternalLinkIcon");return l(),u(r,null,[k,m,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#\u52A0\u8F7D\u6A21\u578B\u6216\u573A\u666F"},{default:o(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#\u63A5\u4E0B\u6765"},{default:o(()=>[_]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u8B66\u544A"},{default:o(()=>[b]),_:1})])])])])]),g,n("p",null,[n("a",f,[y,a(e)])]),n("p",null,[n("a",q,[x,a(e)])]),B,n("p",null,[n("a",j,[L,a(e)])]),A],64)}var S=i(d,[["render",M],["__file","3-first-import.html.vue"]]);export{S as default};
