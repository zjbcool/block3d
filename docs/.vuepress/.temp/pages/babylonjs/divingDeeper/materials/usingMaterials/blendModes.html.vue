<template><h1 id="混合模式-blend-modes" tabindex="-1"><a class="header-anchor" href="#混合模式-blend-modes" aria-hidden="true">#</a> 混合模式 Blend Modes</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#现有混合模式">现有混合模式</RouterLink></li><li><RouterLink to="#使用混合模式">使用混合模式</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></nav>
<p>混合模式 <em>blend mode</em> 决定了在渲染网格时如何将新的屏幕像素与现有像素混合。</p>
<p>这听起来很微不足道，因为大多数时候，新的像素只是简单地替换了现有像素，这其实根本不是我们所说的混合 <em>blending</em>。实际上，在alpha混合 alpha-blended 网格的情况下，新的像素并不是简单地覆盖现有的像素：它们是根据网格的透明程度来组合 <em>combined</em> 。这是一个最简单的混合操作的例子（也是默认操作）：<code v-pre>BABYLON.Engine.ALPHA_COMBINE</code>。</p>
<p>其他混合模式的存在，使你可以实现高级的视觉效果。</p>
<h2 id="现有混合模式" tabindex="-1"><a class="header-anchor" href="#现有混合模式" aria-hidden="true">#</a> 现有混合模式</h2>
<table>
<thead>
<tr>
<th style="text-align:left">混合模式</th>
<th style="text-align:left">效果</th>
<th style="text-align:left">其它</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Engine.ALPHA_COMBINE</td>
<td style="text-align:left">这是不透明度混合网格的默认混合模式。混合是由被绘制的像素的alpha值来调节的。</td>
<td style="text-align:left">默认混合模式</td>
</tr>
<tr>
<td style="text-align:left">Engine.ALPHA_ADD</td>
<td style="text-align:left">这种混合模式将显著叠加新像素和现有像素值，出现类似幽灵效果，并使网格背后的东西变亮。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Engine.ALPHA_SUBTRACT</td>
<td style="text-align:left">现有像素值减去新像素值，出现&quot;反向&quot;效果。</td>
<td style="text-align:left">混合不受alpha值的影响。</td>
</tr>
<tr>
<td style="text-align:left">Engine.ALPHA_MULTIPLY</td>
<td style="text-align:left">新的和现有的像素值相乘，渲染的网格背后的东西会变暗。这或多或少与ALPHA_ADD的效果相反。</td>
<td style="text-align:left">混合不受alpha值的影响。</td>
</tr>
<tr>
<td style="text-align:left">Engine.ALPHA_MAXIMIZED</td>
<td style="text-align:left">这种混合模式类似于 ALPHA_ADD，但会产生不那么生动和饱和的效果。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Engine.ALPHA_ONEONE</td>
<td style="text-align:left">这种混合模式与ALPHA_ADD非常相似，只是它不受alpha值影响。用于各种视觉效果。</td>
<td style="text-align:left">混合不受alpha值的影响。</td>
</tr>
</tbody>
</table>
<p>请注意，混合操作实际上是对像素值的R、G和B分量分别进行的简单数学运算，每一个分量都在0和1之间。因此，用ALPHA_SUBTRACT设置的绿色网格（R=0，G=1，B=0）绘制在黄色的网格上（R=1，G=1，B=0），将产生一个红色的数值（R=1，G=0，B=0）。</p>
<h2 id="使用混合模式" tabindex="-1"><a class="header-anchor" href="#使用混合模式" aria-hidden="true">#</a> 使用混合模式</h2>
<p>使用混合模式是通过操纵材质的 <code v-pre>alphaMode</code> 属性，将其设置为上面列出的常量之一来完成的。</p>
<p>这个属性只有在渲染的网格是alpha混合 <em>alpha-blended</em> 的时候才会被使用。这一点非常重要，因为 <code v-pre>alphaMode</code> 属性对不透明的网格完全没有影响，你需要确保你的网格是alpha混合的才能使用它。</p>
<p>你可以通过让一个不透明的网格变得非常透明来强迫它进行alpha混合，就像这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token number">0.9999</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者可以给它的材质指定一个不透明度纹理（即使这个不透明度纹理没有alpha通道）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>material<span class="token punctuation">.</span>opacityTexture <span class="token operator">=</span> material<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>各种混合模式效果：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fblend-modes%2Fblend-modes.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p><a href="https://playground.babylonjs.com/#1MSIXB#4" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
</template>
