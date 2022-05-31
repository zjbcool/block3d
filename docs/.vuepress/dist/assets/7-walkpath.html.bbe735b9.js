import{_ as c,r as p,o as u,c as l,a as n,d as a,w as i,F as k,b as s,e}from"./app.090844ca.js";const r={},d=n("h1",{id:"\u884C\u8D70\u5728\u6751\u5E84",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u884C\u8D70\u5728\u6751\u5E84","aria-hidden":"true"},"#"),s(" \u884C\u8D70\u5728\u6751\u5E84")],-1),m={class:"table-of-contents"},v=s("\u884C\u8D70\u5728\u6751\u5E84"),b=e(`<h2 id="\u884C\u8D70\u5728\u6751\u5E84-1" tabindex="-1"><a class="header-anchor" href="#\u884C\u8D70\u5728\u6751\u5E84-1" aria-hidden="true">#</a> \u884C\u8D70\u5728\u6751\u5E84</h2><p>\u7F51\u683C\u6709\u4E00\u4E2A movePOV \u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u76F8\u5BF9\u4E8E\u5176\u671D\u5411\u79FB\u52A8\u7F51\u683C\u3002\u901A\u5E38\uFF0C\u65B0\u5EFA\u7F51\u683C\u671D\u5411 -z \u65B9\u5411\u3002\u8981\u5C06\u7F51\u683C\u6CBF\u5176\u671D\u5411\u5411\u79FB\u52A8 6 \u4E2A\u5355\u4F4D\uFF0C\u8BF7\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mesh<span class="token punctuation">.</span><span class="token function">movePOV</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u5206\u522B\u662F\u5411\u53F3\u3001\u5411\u4E0A\u548C\u5411\u524D\u79FB\u52A8\u7684\u8DDD\u79BB\uFF0C\u901A\u5E38\u8FD9\u4E9B\u662F\u7F51\u683C\u5C40\u90E8\u7A7A\u95F4\u4E2D\u7684 -x \u8F74\u3001y \u8F74\u548C -z \u8F74\u3002</p><p>\u5728 Babylon.js \u4E2D\uFF0C\u6E32\u67D3\u4E0B\u4E00\u5E27\u4E4B\u524D\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//code to execute</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u7269\u4F53\u7684\u5C5E\u6027\u53EF\u4EE5\u9010\u5E27\u5730\u6539\u53D8\u3002</p><p>\u4E0B\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u8DEF\u5F84\u52A8\u753B\u3002\u6211\u4EEC\u8BA9\u5C0F\u7403\u6CBF\u4E09\u89D2\u5F62\uFF08\u8FB9\u957F\u4E3A4\u7684\u7B49\u8170\u76F4\u89D2\u4E09\u89D2\u5F62\uFF09\u7684\u8FB9\u8FD0\u52A8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sphere <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateSphere</span><span class="token punctuation">(</span><span class="token string">&quot;sphere&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">diameter</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//end points for the line sequence in an array</span>
<span class="token comment">//y component can be non zero</span>
<span class="token keyword">const</span> points <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>points<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//close the triangle;</span>

<span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateLines</span><span class="token punctuation">(</span><span class="token string">&quot;triangle&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">points</span><span class="token operator">:</span> points<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u53E6\u4E00\u79CD\u63A7\u5236\u7269\u4F53\u65CB\u8F6C\u7684\u65B9\u6CD5\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mesh<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>axis<span class="token punctuation">,</span> angle<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Space<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u5728\u6BCF\u4E2A\u6E32\u67D3\u5E27\u4E4B\u524D\u751F\u6210\u52A8\u753B\uFF0C\u7403\u4F53\u5C06\u79FB\u52A8 0.05 \u7684\u8DDD\u79BB\u3002\u5F53\u5B83\u884C\u8FDB\u7684\u8DDD\u79BB\u5927\u4E8E 4 \u65F6\uFF0C\u7403\u4F53\u5C06\u8F6C\u52A8\uFF0C\u5927\u4E8E 8 \u65F6\u5B83\u5C06\u518D\u6B21\u8F6C\u52A8\uFF0C\u5F53\u5927\u4E8E\u5468\u957F\u65F6\uFF0C\u5B83\u5C06\u91CD\u7F6E\u5E76\u91CD\u65B0\u5F00\u59CB\u3002</p><p>\u6211\u4EEC\u4F7F\u7528\u5C5E\u6027 turn \u548C distance \u8BBE\u7F6E\u4E86\u4E00\u4E2A\u8DDF\u8E2A\u5BF9\u8C61\u6570\u7EC4\u3002\u5728\u884C\u8FDB\u6307\u5B9A\u7684\u603B\u8DDD\u79BB\u540E\uFF0C\u7403\u4F53\u5C06\u65CB\u8F6C\u6307\u5B9A\u7684\u8F6C\u5F2F\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">slide</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">turn<span class="token punctuation">,</span> dist</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//after covering dist apply turn</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>turn <span class="token operator">=</span> turn<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dist <span class="token operator">=</span> dist<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">slide</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u7B2C1\u6761\u8FB9\u957F 4</span>
track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">slide</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u4E0A\u7B2C2\u6761\u8FB9\u957F\uFF0C\u7ED3\u679C\u662F4+4=8</span>
track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">slide</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u4E0A\u7B2C3\u6761\u8FB9\uFF0C\u5468\u957F\u4E3A8 + Math.sqrt(4+4)))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u5F53\u8FBE\u5230\u6240\u9700\u8DDD\u79BB\u65F6\uFF0C\u5C31\u8FDB\u884C\u4E00\u6B21\u8F6C\u5F2F\uFF0C\u6570\u7EC4\u7D22\u5F15\u6307\u9488 p \u589E\u52A0 1\u3002\u6A21\u8FD0\u7B97\u7B26 % \u7528\u4E8E\u5728\u6570\u7EC4\u672B\u5C3E\u5C06\u6307\u9488\u91CD\u7F6E\u4E3A\u96F6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>distance <span class="token operator">&gt;</span> track<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">.</span>dist<span class="token punctuation">)</span> <span class="token punctuation">{</span>        
    sphere<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Axis<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token punctuation">,</span> track<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">.</span>turn<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Space<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p <span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>
    p <span class="token operator">%=</span> track<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u9632\u6B62\u7D2F\u79EF\u6D6E\u70B9\u9519\u8BEF\uFF0C\u6BCF\u5F53\u7D22\u5F15\u6307\u9488\u91CD\u7F6E\u4E3A 0 \u65F6\uFF0C\u7403\u4F53\u7684\u4F4D\u7F6E\u548C\u65CB\u8F6C\u4E5F\u4F1A\u91CD\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    sphere<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//reset to initial conditions</span>
    sphere<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Zero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//prevents error accumulation </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),h={href:"https://playground.babylonjs.com/#N9IZ8M#1",target:"_blank",rel:"noopener noreferrer"},g=s("\u5C0F\u7403\u6CBF\u4E09\u89D2\u5F62\u7684\u8FB9\u8FD0\u52A8"),f=e(`<p>\u63A7\u5236\u89D2\u8272\u5728\u6751\u5E84\u884C\u8D70\u7A0D\u5FAE\u6709\u70B9\u68D8\u624B\uFF0C\u9700\u8981\u5728\u8F6C\u5F2F\u548C\u8DDD\u79BB\u4E0A\u53CD\u590D\u8BD5\u9A8C\u3002\u5728\u65CB\u8F6C\u65B9\u6CD5\u4E2D\u4F7F\u7528\u5EA6\u6570\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u5F27\u5EA6\u7684\u539F\u56E0\u4E4B\u4E00\u662F\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E24\u4E2A\u5EA6\u6570\u66F4\u5BB9\u6613\u8FDB\u884C\u8C03\u6574\u3002</p><p>\u7531\u4E8E\u4ECE .babylon \u6587\u4EF6\u5BFC\u5165\u7684\u89D2\u8272 dude \u5DF2\u7ECF\u4F7F\u7528 rotationQuaternion \u800C\u4E0D\u662F\u65CB\u8F6C\u8BBE\u7F6E\u4E86\u5176\u65CB\u8F6C\uFF0C\u6211\u4EEC\u4F7F\u7528 rotate \u65B9\u6CD5\u6765\u91CD\u7F6E\u89D2\u8272\u65B9\u5411\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dude<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dude<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Axis<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Tools<span class="token punctuation">.</span><span class="token function">ToRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Space<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> startRotation <span class="token operator">=</span> dude<span class="token punctuation">.</span>rotationQuaternion<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//use clone so that variables are independent not linked copies</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    dude<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dude<span class="token punctuation">.</span>rotationQuaternion <span class="token operator">=</span> startRotation<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B={href:"https://playground.babylonjs.com/#KBS9I5#81",target:"_blank",rel:"noopener noreferrer"},_=s("\u89D2\u8272\u884C\u8D70\u52A8\u753B");function y(w,j){const o=p("RouterLink"),t=p("ExternalLinkIcon");return u(),l(k,null,[d,n("nav",m,[n("ul",null,[n("li",null,[a(o,{to:"#\u884C\u8D70\u5728\u6751\u5E84-1"},{default:i(()=>[v]),_:1})])])]),b,n("p",null,[n("a",h,[g,a(t)])]),f,n("p",null,[n("a",B,[_,a(t)])])],64)}var x=c(r,[["render",y],["__file","7-walkpath.html.vue"]]);export{x as default};
