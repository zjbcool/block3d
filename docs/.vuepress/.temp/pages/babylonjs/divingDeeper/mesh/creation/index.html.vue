<template><h1 id="创建网格-creating-meshes" tabindex="-1"><a class="header-anchor" href="#创建网格-creating-meshes" aria-hidden="true">#</a> 创建网格 Creating Meshes</h1>
<h2 id="不同类型网格的创建" tabindex="-1"><a class="header-anchor" href="#不同类型网格的创建" aria-hidden="true">#</a> 不同类型网格的创建</h2>
<p>你可以创建多种多样的网格。可分为四大类，其中前三类需要用单一的Babylon.js方法来构建。</p>
<ol>
<li>固有模型-通常有通用名称，其形式也是众所周知和公认的。例子包括盒子box、球体sphere、圆锥体cone和平面plane。这些模型是通过一个具有<code v-pre>Create&lt;MeshType&gt;</code>形式的方法来创建的。</li>
<li>参数模型-这些模型没有通用名称，通过数据集形成，往往有不规则的形状。例子包括丝带、挤出物和不规则的凸或凹多边形。它们主要由<code v-pre>Create&lt;MeshType&gt;</code>和<code v-pre>Extrude&lt;MeshType&gt;</code>创建。</li>
<li>多面体-三维规则实体，包括8面体、12面体、20面体和icosphere。创建这些的方法是<code v-pre>createPolyhedron</code>，连同基本模型的数字和更广泛模型的顶点阵列或<code v-pre>createIcoSphere</code>。</li>
<li>自定义-那些你自己设计的，由你自己的顶点集连接成你选择的三角形面的模型。</li>
</ol>
<p>目前创建网格的方法是使用<code v-pre>MeshBuilder</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span>Create<span class="token operator">&lt;</span>MeshType<span class="token operator">></span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项对象会根据网格的类型有不同的属性，可以是空的<code v-pre>{}</code>。场景参数是可选的，默认为当前场景。</p>
<p>有一个旧的方法，为了向后兼容而保留，它使用<code v-pre>Mesh</code>和一串参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Mesh<span class="token punctuation">.</span>Create<span class="token operator">&lt;</span>MeshType<span class="token operator">></span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> required_param1<span class="token punctuation">,</span> required_param2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> optional_parameter1<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当与可选参数一起使用时，场景参数是强制性的。你仍然会在playground中找到这种方法。</p>
</template>
