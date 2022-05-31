import{_ as o,r as a,o as c,c as l,a as n,d as t,w as i,F as u,b as s,e as r}from"./app.090844ca.js";const k={},d=n("h1",{id:"\u8D34\u82B1-decals",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8D34\u82B1-decals","aria-hidden":"true"},"#"),s(" \u8D34\u82B1 Decals")],-1),v={class:"table-of-contents"},m=s("\u521B\u5EFA\u8D34\u82B1 CreateDecal"),b=r(`<h2 id="\u521B\u5EFA\u8D34\u82B1-createdecal" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8D34\u82B1-createdecal" aria-hidden="true">#</a> \u521B\u5EFA\u8D34\u82B1 CreateDecal</h2><p>\u5B83\u4EEC\u901A\u5E38\u7528\u4E8E\u5728\u7F51\u683C\u4E0A\u6DFB\u52A0\u7EC6\u8282\uFF08\u5B50\u5F39\u5B54\u3001\u5C40\u90E8\u7EC6\u8282\u7B49......\uFF09\uFF0C\u8D34\u82B1\u662F\u7531\u524D\u4E00\u4E2A\u7F51\u683C\u7684\u4E00\u4E2A\u5B50\u96C6\u4EA7\u751F\u7684\uFF0C\u6709\u4E00\u4E2A\u5C0F\u7684\u504F\u79FB\uFF0C\u4EE5\u4FBF\u51FA\u73B0\u5728\u5B83\u4E0A\u65B9\u3002</p><p>\u521B\u5EFA\u5B9E\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> decal <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateDecal</span><span class="token punctuation">(</span><span class="token string">&quot;decal&quot;</span><span class="token punctuation">,</span> mesh<span class="token punctuation">,</span>  <span class="token punctuation">{</span><span class="token literal-property property">position</span><span class="token operator">:</span> myPos<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u8981\u5FD8\u4E86<code>mesh</code>\u53C2\u6570\uFF1B\u8FD9\u662F\u8D34\u82B1\u6240\u5E94\u7528\u7684\u7F51\u683C\u3002</p><p>\u5C5E\u6027\uFF0C\u90FD\u662F\u53EF\u9009\u7684</p><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">position</td><td style="text-align:left;">(Vector3) \u8D34\u82B1\u7684\u4F4D\u7F6E\uFF08\u4E16\u754C\u5750\u6807\uFF09</td><td style="text-align:left;">(0, 0, 0)</td></tr><tr><td style="text-align:left;">normal</td><td style="text-align:left;">(Vector3) \u8D34\u82B1\u6240\u8981\u5E94\u7528\u7F51\u683C\u4F4D\u7F6E\u7684\u6CD5\u7EBF\uFF08\u4E16\u754C\u5750\u6807\uFF09</td><td style="text-align:left;">Vector3.Up</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">(Vector3) \u8D34\u82B1\u7684x,y,z\u5C3A\u5BF8</td><td style="text-align:left;">(1, 1, 1)</td></tr><tr><td style="text-align:left;">angle</td><td style="text-align:left;">(number) \u8D34\u82B1\u7684\u65CB\u8F6C\u89D2\u5EA6</td><td style="text-align:left;">0</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// The first parameter can be used to specify which mesh to import. Here we import all meshes</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMesh</span><span class="token punctuation">(</span><span class="token string">&quot;Shcroendiger&#39;scat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/scenes/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SSAOcat.babylon&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newMeshes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cat <span class="token operator">=</span> newMeshes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Set the target of the camera to the first imported mesh</span>
    camera<span class="token punctuation">.</span>target <span class="token operator">=</span> cat<span class="token punctuation">;</span>

    <span class="token keyword">var</span> decalMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;decalMat&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    decalMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;/textures/impact.png&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    decalMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>hasAlpha <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    decalMaterial<span class="token punctuation">.</span>zOffset <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">onPointerDown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>button <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// check if we are under a mesh</span>
        <span class="token keyword">var</span> pickInfo <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>pointerX<span class="token punctuation">,</span> scene<span class="token punctuation">.</span>pointerY<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mesh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> mesh <span class="token operator">===</span> cat<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pickInfo<span class="token punctuation">.</span>hit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> decalSize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**************************CREATE DECAL*************************************************/</span>
            <span class="token keyword">var</span> decal <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateDecal</span><span class="token punctuation">(</span>
                <span class="token string">&quot;decal&quot;</span><span class="token punctuation">,</span> 
                cat<span class="token punctuation">,</span> 
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> pickInfo<span class="token punctuation">.</span>pickedPoint<span class="token punctuation">,</span> 
                    <span class="token literal-property property">normal</span><span class="token operator">:</span> pickInfo<span class="token punctuation">.</span><span class="token function">getNormal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                    <span class="token literal-property property">size</span><span class="token operator">:</span> decalSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            decal<span class="token punctuation">.</span>material <span class="token operator">=</span> decalMaterial<span class="token punctuation">;</span>
        <span class="token doc-comment comment">/***************************************************************************************/</span>	
        
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> engine<span class="token punctuation">.</span><span class="token function">getRenderingCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;pointerdown&quot;</span><span class="token punctuation">,</span> onPointerDown<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    scene<span class="token punctuation">.</span><span class="token function-variable function">onDispose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        canvas<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;pointerdown&quot;</span><span class="token punctuation">,</span> onPointerDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f={href:"https://playground.babylonjs.com/#1BAPRM#73",target:"_blank",rel:"noopener noreferrer"},h=s("\u8D34\u82B1\u793A\u4F8B");function y(g,w){const e=a("RouterLink"),p=a("ExternalLinkIcon");return c(),l(u,null,[d,n("nav",v,[n("ul",null,[n("li",null,[t(e,{to:"#\u521B\u5EFA\u8D34\u82B1-createdecal"},{default:i(()=>[m]),_:1})])])]),b,n("p",null,[n("a",f,[h,t(p)])])],64)}var _=o(k,[["render",y],["__file","decals.html.vue"]]);export{_ as default};