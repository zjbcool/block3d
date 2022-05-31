import{_ as l,r as p,o as i,c as u,a as n,d as a,w as o,F as r,b as s,e as c}from"./app.090844ca.js";const k={},d=n("h1",{id:"\u573A\u666F\u4EA4\u4E92",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u573A\u666F\u4EA4\u4E92","aria-hidden":"true"},"#"),s(" \u573A\u666F\u4EA4\u4E92")],-1),v={class:"table-of-contents"},b=s("\u5982\u4F55\u4E0E\u573A\u666F\u4EA4\u4E92"),h=s("\u952E\u76D8\u4EA4\u4E92"),m=s("\u6307\u9488\u4EA4\u4E92"),_=s("\u793A\u4F8B"),g=c(`<h2 id="\u5982\u4F55\u4E0E\u573A\u666F\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4E0E\u573A\u666F\u4EA4\u4E92" aria-hidden="true">#</a> \u5982\u4F55\u4E0E\u573A\u666F\u4EA4\u4E92</h2><p>\u7528\u6237\u4E0E\u573A\u666F\u4EA4\u4E92\u7684\u4E3B\u8981\u65B9\u5F0F\u6709\u4E09\u79CD\uFF1A\u952E\u76D8\u3001<a href="../gui">GUI</a> \u4EE5\u53CA\u76F4\u63A5\u4F7F\u7528\u9F20\u6807\u3001\u89E6\u6478\u6216\u6E38\u620F\u624B\u67C4\u3002\u672C\u8282\u8BB2\u8FF0\u952E\u76D8\u548C\u6307\u9488\u4EA4\u4E92\u7684\u4F7F\u7528\u3002</p><h2 id="\u952E\u76D8\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u4EA4\u4E92" aria-hidden="true">#</a> \u952E\u76D8\u4EA4\u4E92</h2><p>\u901A\u8FC7\u81EA\u5B9A\u4E49\u4EE5\u4E0B\u4EE3\u7801\u6A21\u677F\uFF0C\u53EF\u4EE5\u63A7\u5236\u573A\u666F\u4E2D\u5BF9\u4E0D\u540C\u6309\u952E\u7684\u54CD\u5E94\u3002\u4F7F\u7528\u6309\u952E\u7684 <code>ascii</code> \u4EE3\u7801\u548C\u6309\u952E\u672C\u8EAB\u90FD\u662F\u53EF\u4EE5\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span>onKeyboardObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">kbInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>kbInfo<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>KeyboardEventTypes<span class="token punctuation">.</span><span class="token constant">KEYDOWN</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;KEY DOWN: &quot;</span><span class="token punctuation">,</span> kbInfo<span class="token punctuation">.</span>event<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>KeyboardEventTypes<span class="token punctuation">.</span><span class="token constant">KEYUP</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;KEY UP: &quot;</span><span class="token punctuation">,</span> kbInfo<span class="token punctuation">.</span>event<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6307\u9488\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u4EA4\u4E92" aria-hidden="true">#</a> \u6307\u9488\u4EA4\u4E92</h2>`,6),y=s("\u9996\u5148\u8981\u63D0\u9192\u7684\u662F\uFF0C\u5728Babylon.js\u4E2D\u7684\u89E6\u6478\u4E8B\u4EF6\u662F\u9700\u8981"),f={href:"https://github.com/jquery/PEP",target:"_blank",rel:"noopener noreferrer"},E=s("PEP"),P=s("\u7684\u3002\u8981\u4F7F\u7528PEP\uFF0C\u9700\u8981\uFF1A"),O=c(`<ol><li>\u5B89\u88C5PEP</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/pep/0.4.3/pep.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u963B\u6B62\u6E32\u67D3\u753B\u5E03\u7684\u9ED8\u8BA4\u89E6\u6478\u52A8\u4F5C</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">touch-action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65E0\u8BBA\u6307\u9488\u662F\u4E00\u4E2A\u56FE\u6807\u8FD8\u662F\u4E00\u4E2A\u624B\u6307\uFF0C\u901A\u8FC7\u4FEE\u6539\u4EE5\u4E0B\u4EE3\u7801\u6A21\u677F\uFF0C\u90FD\u5C06\u4F7F\u4F60\u7684\u9879\u76EE\u5BF9\u4E00\u7CFB\u5217\u7684\u6307\u9488\u4E8B\u4EF6\u505A\u51FA\u54CD\u5E94\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span>onPointerObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pointerInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>pointerInfo<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERDOWN</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER DOWN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERUP</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER UP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERMOVE</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER MOVE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERWHEEL</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER WHEEL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERPICK</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER PICK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERTAP</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER TAP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERDOUBLETAP</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;POINTER DOUBLE-TAP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2>`,7),N={href:"https://playground.babylonjs.com/#0XYMA9#1",target:"_blank",rel:"noopener noreferrer"},q=s("\u573A\u666F\u89C2\u5BDF\u5668\u793A\u4F8B"),T={href:"https://playground.babylonjs.com/#7CBW04",target:"_blank",rel:"noopener noreferrer"},B=s("\u7B80\u6613\u62D6\u52A8\u793A\u4F8B"),I={href:"https://playground.babylonjs.com/#XZ0TH6",target:"_blank",rel:"noopener noreferrer"},w=s("\u7B80\u6613\u6309\u952E\u63A7\u5236"),L={href:"https://playground.babylonjs.com/#2SA7J8#7",target:"_blank",rel:"noopener noreferrer"},x=s("\u6846\u9009\u793A\u4F8B");function R(A,j){const e=p("RouterLink"),t=p("ExternalLinkIcon");return i(),u(r,null,[d,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#\u5982\u4F55\u4E0E\u573A\u666F\u4EA4\u4E92"},{default:o(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#\u952E\u76D8\u4EA4\u4E92"},{default:o(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#\u6307\u9488\u4EA4\u4E92"},{default:o(()=>[m]),_:1})]),n("li",null,[a(e,{to:"#\u793A\u4F8B"},{default:o(()=>[_]),_:1})])])]),g,n("p",null,[y,n("a",f,[E,a(t)]),P]),O,n("ul",null,[n("li",null,[n("a",N,[q,a(t)])]),n("li",null,[n("a",T,[B,a(t)])]),n("li",null,[n("a",I,[w,a(t)])]),n("li",null,[n("a",L,[x,a(t)])])])],64)}var K=l(k,[["render",R],["__file","interactWithScenes.html.vue"]]);export{K as default};