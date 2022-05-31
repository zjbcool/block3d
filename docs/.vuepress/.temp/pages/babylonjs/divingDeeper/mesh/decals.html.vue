<template><h1 id="贴花-decals" tabindex="-1"><a class="header-anchor" href="#贴花-decals" aria-hidden="true">#</a> 贴花 Decals</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#创建贴花-createdecal">创建贴花 CreateDecal</RouterLink></li></ul></nav>
<h2 id="创建贴花-createdecal" tabindex="-1"><a class="header-anchor" href="#创建贴花-createdecal" aria-hidden="true">#</a> 创建贴花 CreateDecal</h2>
<p>它们通常用于在网格上添加细节（子弹孔、局部细节等......），贴花是由前一个网格的一个子集产生的，有一个小的偏移，以便出现在它上方。</p>
<p>创建实例:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> decal <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateDecal</span><span class="token punctuation">(</span><span class="token string">"decal"</span><span class="token punctuation">,</span> mesh<span class="token punctuation">,</span>  <span class="token punctuation">{</span><span class="token literal-property property">position</span><span class="token operator">:</span> myPos<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不要忘了<code v-pre>mesh</code>参数；这是贴花所应用的网格。</p>
<p>属性，都是可选的</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">position</td>
<td style="text-align:left">(Vector3) 贴花的位置（世界坐标）</td>
<td style="text-align:left">(0, 0, 0)</td>
</tr>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">(Vector3) 贴花所要应用网格位置的法线（世界坐标）</td>
<td style="text-align:left">Vector3.Up</td>
</tr>
<tr>
<td style="text-align:left">size</td>
<td style="text-align:left">(Vector3) 贴花的x,y,z尺寸</td>
<td style="text-align:left">(1, 1, 1)</td>
</tr>
<tr>
<td style="text-align:left">angle</td>
<td style="text-align:left">(number)  贴花的旋转角度</td>
<td style="text-align:left">0</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// The first parameter can be used to specify which mesh to import. Here we import all meshes</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMesh</span><span class="token punctuation">(</span><span class="token string">"Shcroendiger'scat"</span><span class="token punctuation">,</span> <span class="token string">"/scenes/"</span><span class="token punctuation">,</span> <span class="token string">"SSAOcat.babylon"</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newMeshes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cat <span class="token operator">=</span> newMeshes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Set the target of the camera to the first imported mesh</span>
    camera<span class="token punctuation">.</span>target <span class="token operator">=</span> cat<span class="token punctuation">;</span>

    <span class="token keyword">var</span> decalMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"decalMat"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    decalMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"/textures/impact.png"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
                <span class="token string">"decal"</span><span class="token punctuation">,</span> 
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
    canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"pointerdown"</span><span class="token punctuation">,</span> onPointerDown<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    scene<span class="token punctuation">.</span><span class="token function-variable function">onDispose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        canvas<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"pointerdown"</span><span class="token punctuation">,</span> onPointerDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#1BAPRM#73" target="_blank" rel="noopener noreferrer">贴花示例<ExternalLinkIcon/></a></p>
</template>
