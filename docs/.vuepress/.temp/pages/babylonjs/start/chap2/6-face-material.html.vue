<template><h1 id="面材质" tabindex="-1"><a class="header-anchor" href="#面材质" aria-hidden="true">#</a> 面材质</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#给房子的面不同的材质">给房子的面不同的材质</RouterLink></li><li><RouterLink to="#独栋房子示例">独栋房子示例</RouterLink></li><li><RouterLink to="#联排房子示例">联排房子示例</RouterLink></li><li><RouterLink to="#继续">继续</RouterLink></li></ul></nav>
<h2 id="给房子的面不同的材质" tabindex="-1"><a class="header-anchor" href="#给房子的面不同的材质" aria-hidden="true">#</a> 给房子的面不同的材质</h2>
<p>在盒子的选项属性中，有一个 <strong>faceUV</strong> ，值类型为 Vector4 数组。可以用它来获取图片的一部分用于盒子的一个面。</p>
<p>在 <strong>faceUV</strong> 数组中，背面编号为 0，正面编号为 1，右侧编号为 2，左侧编号为 3，顶部编号为 4，底部编号为 5。</p>
<h2 id="独栋房子示例" tabindex="-1"><a class="header-anchor" href="#独栋房子示例" aria-hidden="true">#</a> 独栋房子示例</h2>
<p>先看下图</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fcubehouse.png&amp;w=1920&amp;q=75" alt=""></p>
<p>这张图片依次包含房子正面、右面、背面和左面的相同尺寸的图片。</p>
<p>每个图片的宽度是整张图片宽度的 0.25。为了指定要使用的图片区域，我们给出了两个坐标，一个用于左下角，一个用于右上角。对于整张图片，我们将使用 (0, 0) 和 (1, 1)，对于局部图片，坐标值将是 0 和 1 之间的分数。</p>
<p>使用 4 维向量表示为：</p>
<p>Vector4（左下 x，左下 y，右上 x，右上 y）</p>
<p>模型面和局部图片的对应关系为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">模型面</th>
<th style="text-align:left">faceUV索引</th>
<th style="text-align:left">坐标</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">前面</td>
<td style="text-align:left">1</td>
<td style="text-align:left">(0.0, 0.0, 0.25, 1.0)</td>
</tr>
<tr>
<td style="text-align:left">右面</td>
<td style="text-align:left">2</td>
<td style="text-align:left">(0.25, 0, 0.5, 1.0)</td>
</tr>
<tr>
<td style="text-align:left">后面</td>
<td style="text-align:left">0</td>
<td style="text-align:left">(0.5, 0.0, 0.75, 1.0)</td>
</tr>
<tr>
<td style="text-align:left">左面</td>
<td style="text-align:left">3</td>
<td style="text-align:left">(0.75, 0, 1.0, 1.0)</td>
</tr>
</tbody>
</table>
<p>上面和下面看不见，使用默认值即可</p>
<p>代码如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>faceUV <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
faceUV<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//后</span>
faceUV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//前</span>
faceUV<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//右</span>
faceUV<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector4</span><span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//左</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置属性 <strong>wrap = true</strong>，以防止区域图片被旋转。代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">"box"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">faceUV</span><span class="token operator">:</span> faceUV<span class="token punctuation">,</span> <span class="token literal-property property">wrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.cnbabylon.com/#JVRWH7" target="_blank" rel="noopener noreferrer">面材质示例<ExternalLinkIcon/></a></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fhouse3.png&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="联排房子示例" tabindex="-1"><a class="header-anchor" href="#联排房子示例" aria-hidden="true">#</a> 联排房子示例</h2>
<p>此时房子是两倍宽，局部图片也是一样。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fsemihouse.png&amp;w=1920&amp;q=75" alt=""></p>
<p>图片中间部分是房子的左右两侧，这部分图片可以重复使用。</p>
<p><a href="https://playground.cnbabylon.com/#7AU84G" target="_blank" rel="noopener noreferrer">贴图重复使用示例<ExternalLinkIcon/></a></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fhouse4.png&amp;w=1920&amp;q=75" alt=""></p>
<h2 id="继续" tabindex="-1"><a class="header-anchor" href="#继续" aria-hidden="true">#</a> 继续</h2>
<p>在创建了我们的独立式和半独立式住宅之后，我们希望它们的许多副本形成我们的世界。我们可以分别制作盒子和屋顶的副本，但如果我们可以将盒子和屋顶组合成一个网格，一座房子，那就更容易了。在我们这样做之前，让我们整理一下代码，以便我们可以专注于我们正在添加的新代码。为此，我们将现有代码放入函数中。</p>
<p>现在我们有了独栋和联排两类房子，通过复制可以构成整个村庄，在此之前如果能把盒子和屋顶结合成一个模型，那就方便多了。首先，整理一下代码，把创建过程打包进函数。</p>
<p><a href="https://playground.cnbabylon.com/#BLKQDC" target="_blank" rel="noopener noreferrer">创建建筑物函数示例<ExternalLinkIcon/></a></p>
</template>
