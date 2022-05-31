<template><h1 id="切面数据facetdata" tabindex="-1"><a class="header-anchor" href="#切面数据facetdata" aria-hidden="true">#</a> 切面数据FacetData</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#什么是facetdata">什么是FacetData？</RouterLink></li><li><RouterLink to="#什么是网格切面facet">什么是网格切面facet？</RouterLink></li><li><RouterLink to="#启用切面数据-updatefacetdata">启用切面数据 updateFacetData</RouterLink></li><li><RouterLink to="#切面工具">切面工具</RouterLink><ul><li><RouterLink to="#getfacetposition">getFacetPosition</RouterLink></li><li><RouterLink to="#getfacetnormal">getFacetNormal</RouterLink></li><li><RouterLink to="#注意">注意</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></li><li><RouterLink to="#网格划分-mesh-partitioning">网格划分 Mesh partitioning</RouterLink></li></ul></nav>
<h2 id="什么是facetdata" tabindex="-1"><a class="header-anchor" href="#什么是facetdata" aria-hidden="true">#</a> 什么是FacetData？</h2>
<p><strong>切面数据 FacetData</strong> 是一个可以在网格上启用的功能。</p>
<p>由于它需要一些额外的内存，因此默认情况下未启用。</p>
<p>此功能提供了一些方法和属性来访问网格的每个面，例如面位置、法线或在世界空间的给定区域中检索所有网格面的能力。</p>
<h2 id="什么是网格切面facet" tabindex="-1"><a class="header-anchor" href="#什么是网格切面facet" aria-hidden="true">#</a> 什么是网格切面facet？</h2>
<p>我们在这里使用术语“切面 facet”是为了不与术语“面 face”混淆。</p>
<p>一个网格可以有一些平的面。例如，一个盒子有6个面，所以有6个平的方形面。它的每个面都是在WebGL层面上用2个三角形绘制出来的。</p>
<p>我们将这些基本三角形称为“切面”facets。</p>
<h2 id="启用切面数据-updatefacetdata" tabindex="-1"><a class="header-anchor" href="#启用切面数据-updatefacetdata" aria-hidden="true">#</a> 启用切面数据 updateFacetData</h2>
<p><code v-pre>facetData</code>功能可以适用于任何网格，无论它是由BJS提供的模型（盒子，球体，圆柱体，管子，参数模型等），克隆的或实例，合并的或从外部来源（Blender等）导入的。</p>
<p>要启用这个功能，只需调用一次<code v-pre>updateFacetData()</code>。</p>
<p>如果该网格属于某种父子关系，那么该功能就不会对其父辈或子辈启用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mesh <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateTorusKnot</span><span class="token punctuation">(</span><span class="token string">"t"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span><span class="token function">updateFacetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>facetNb<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦启用该功能，就可以通过只读属性<code v-pre>.facetNb</code>获得网格的总面数。</p>
<p><code v-pre>updateFacetData()</code>方法会创建两个永久数组：网格切面的位置和切面的法线。</p>
<p>此外，它还会根据一些分区对网格进行逻辑划分，并将所有的面保存在这个分区中。</p>
<p>除非之后网格被更新或变形，否则一旦完成后，你就不需要再调用这个方法了。</p>
<p>如果你不再需要这个功能，你可以用<code v-pre>Mesh.disableFacetData()</code>禁用它来释放内存。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span><span class="token function">updateFacetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>isFacetDataEnabled<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// displays "true"</span>
mesh<span class="token punctuation">.</span><span class="token function">disableFacetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>isFacetDataEnabled<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// displays "false"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只读属性<code v-pre>.isFacetDataEnabled</code>会返回该功能的当前状态。</p>
<p>请注意，dispose网格会自动禁用其切面数据。</p>
<h2 id="切面工具" tabindex="-1"><a class="header-anchor" href="#切面工具" aria-hidden="true">#</a> 切面工具</h2>
<h3 id="getfacetposition" tabindex="-1"><a class="header-anchor" href="#getfacetposition" aria-hidden="true">#</a> getFacetPosition</h3>
<p>一个切面的位置是它的重心的位置。</p>
<p>你可以用<code v-pre>getFacetPosition(i)</code>来获取一个网格的第i个切面的位置。它返回一个新的<code v-pre>Vector3</code>，即该切面中心的世界坐标。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pos <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetPosition</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns the world position of the mesh 50th facet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你不想每次调用都指定一个新的<code v-pre>Vector3</code>，你可以使用<code v-pre>getFacetPositionToRef(i, ref)</code>代替。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pos <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Zero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span><span class="token function">getFacetPositionToRef</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> pos<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// stores the facet world position in the variable "pos"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，在包含切面位置的内部数组中，所有存储的坐标都是在网格的局部空间计算的。</p>
<p>如果你需要获取某个切面的局部位置，可以调用<code v-pre>getFacetLocalPositions()</code>来获取切面的位置数组，然后访问第i个元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> localPositions <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetLocalPositions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns the array of facet positions in the local space</span>
<span class="token keyword">var</span> localPos <span class="token operator">=</span> localPositions<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                  <span class="token comment">// Vector3 : the 50th facet local position</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getfacetnormal" tabindex="-1"><a class="header-anchor" href="#getfacetnormal" aria-hidden="true">#</a> getFacetNormal</h3>
<p>切面的法线是与切面平面正交的归一化矢量。</p>
<p>你可以用<code v-pre>getFacetNormal(i)</code>来获取一个网格中第i个切面的法线。它返回一个新的<code v-pre>Vector3</code>，即该切面的法线的世界坐标。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> norm <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetNormal</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns the world normal of the mesh 50th facet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你不想每次调用都指定一个新的<code v-pre>Vector3</code>，可以使用<code v-pre>getFacetNormalToRef(i, ref)</code>代替。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> norm <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Zero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span><span class="token function">getFacetNormalToRef</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> norm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// stores the facet world normal in the variable "norm"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>和位置一样，在包含切面法线的内部数组中，所有存储的坐标都是在网格的局部空间中计算的。</p>
<p>如果你需要获取某个切面的局部法线，可以调用<code v-pre>getFacetLocalNormals()</code>来获取面的局部法线数组，然后访问第i个元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> localNormals <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetLocalNormals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// returns the array of facet normals in the local space</span>
<span class="token keyword">var</span> localPos <span class="token operator">=</span> localNormals<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                  <span class="token comment">// Vector3 : the 50th facet local position</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>所有处理世界坐标的方法都使用网格世界矩阵world matrix。你可能知道，这个矩阵是在渲染调用时自动计算出来的。</p>
<p>如果你在使用世界值调用facetData方法之前，刚刚移动、缩放或旋转了网格，并且你不确定这一点，你可以强制进行世界矩阵的计算。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>rotate<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>               <span class="token comment">// the mesh will be rotated on the next render call, but I need a rotated normal</span>
mesh<span class="token punctuation">.</span><span class="token function">computeWorldMatrix</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// force the world matrix computation</span>
<span class="token keyword">var</span> norm <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetNormal</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns the world normal of the mesh 50th facet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<ul>
<li>显示球体的所有切面法线：<a href="https://playground.babylonjs.com/#1YTZAC" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></li>
<li>只需改变网格形状，环形结:<a href="https://playground.babylonjs.com/#1YTZAC#1" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></li>
<li>更聪明的做法是：在距离网格第10面为2的地方设置一个盒子，并保持在那里，即使网格旋转也是如此，<a href="https://playground.babylonjs.com/#1YTZAC#3" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></li>
<li>当然，你可以给网格添加一些平移，甚至给盒子添加一些旋转，<a href="https://playground.babylonjs.com/#1YTZAC#4" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></li>
</ul>
<p>还需要注意的是，切面的索引与pickingInfo对象使用的<code v-pre>faceId</code>或SPS在可选时使用的<code v-pre>faceId</code>相同。</p>
<p>下面是一个结合了pickingInfo、pickable SPS和facetData面的索引的例子。<a href="https://playground.babylonjs.com/#2FPT1A#119" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
<p>只要点击一下，球就会被定位在点击的面的位置，<strong>而不是点击的点</strong>。</p>
<h2 id="网格划分-mesh-partitioning" tabindex="-1"><a class="header-anchor" href="#网格划分-mesh-partitioning" aria-hidden="true">#</a> 网格划分 Mesh partitioning</h2>
<p>facetData还提供了另一个工具，即网格划分。</p>
<p>网格被逻辑的划分成3D块，在其本地空间中与X、Y和Z轴对齐。</p>
<p>下面是一个关于这个逻辑划分的图示（请等待头骨下载完成）。</p>
<p><a href="https://playground.babylonjs.com/#UZGNA#5" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
<p>为了提高可见度，沿Z轴的平面没有显示。</p>
<p>正如你所看到的，每个轴上默认有10个细分面。</p>
<p>当你调用<code v-pre>updateFacetData()</code>时，所有切面的索引会根据属于每个区块的切面在分割数组中进行排序。</p>
<p>因此，你可以通过<code v-pre>getFacetsAtLocalCoordinates(x, y, z)</code>从某个局部坐标(x, y, z)获得所有面的索引。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> indexes <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetsAtLocalCoordinates</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// returns an array containing the facet indexes</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>indexes <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> worldPos <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getFacetPosition</span><span class="token punctuation">(</span>indexes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// the world position of the first facet in the block</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
