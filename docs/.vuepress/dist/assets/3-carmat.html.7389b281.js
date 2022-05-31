import{_ as o,r as a,o as c,c as l,a as n,d as p,w as u,F as r,b as s,e as i}from"./app.090844ca.js";const k={},m=n("h1",{id:"\u6C7D\u8F66\u6750\u8D28",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6C7D\u8F66\u6750\u8D28","aria-hidden":"true"},"#"),s(" \u6C7D\u8F66\u6750\u8D28")],-1),d={class:"table-of-contents"},b=s("\u6C7D\u8F66\u6750\u8D28"),_=i(`<h2 id="\u6C7D\u8F66\u6750\u8D28-1" tabindex="-1"><a class="header-anchor" href="#\u6C7D\u8F66\u6750\u8D28-1" aria-hidden="true">#</a> \u6C7D\u8F66\u6750\u8D28</h2><p>\u6839\u636E\u4E4B\u524D\u6240\u5B66\uFF0C\u6309\u9762\u4E3A\u6A21\u578B\u8D4B\u4E88\u6750\u8D28\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u4EE5\u4E0B\u4E24\u5F20\u8D34\u56FE\u3002</p><p>\u8F66\u8EAB</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fcar.png&amp;w=1920&amp;q=75" alt=""></p><p>\u8F6E\u5B50</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fwheel.png&amp;w=1920&amp;q=75" alt=""></p><p>\u8F66\u8EAB\u7684faceUV</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>faceUV<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.38</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
faceUV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.38</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
faceUV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6E\u5B50\u7684faceUV</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wheelUV<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wheelUV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wheelUV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),h={href:"https://playground.babylonjs.com/#KDPAQ9#13",target:"_blank",rel:"noopener noreferrer"},v=s("\u793A\u4F8B");function g(w,f){const t=a("RouterLink"),e=a("ExternalLinkIcon");return c(),l(r,null,[m,n("nav",d,[n("ul",null,[n("li",null,[p(t,{to:"#\u6C7D\u8F66\u6750\u8D28-1"},{default:u(()=>[b]),_:1})])])]),_,n("p",null,[n("a",h,[v,p(e)])])],64)}var B=o(k,[["render",g],["__file","3-carmat.html.vue"]]);export{B as default};