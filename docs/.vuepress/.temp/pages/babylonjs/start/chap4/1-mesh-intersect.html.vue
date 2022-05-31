<template><h1 id="碰撞" tabindex="-1"><a class="header-anchor" href="#碰撞" aria-hidden="true">#</a> 碰撞</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#碰撞-1">碰撞</RouterLink></li></ul></nav>
<h2 id="碰撞-1" tabindex="-1"><a class="header-anchor" href="#碰撞-1" aria-hidden="true">#</a> 碰撞</h2>
<p>查看两个网格是否接触的最简单方法是使用 <strong>intersectsMesh</strong> 方法，如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh1<span class="token punctuation">.</span><span class="token function">intersectMesh</span><span class="token punctuation">(</span>mesh2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果框边界网格1 与框边界网格2 重叠，则为真。每个网格都有一个靠近网格表面的内置边界框，用于检查网格的交集。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fdudebox.png&amp;w=1920&amp;q=75" alt=""></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fcarbox.png&amp;w=1920&amp;q=75" alt=""></p>
<p>由于角色的行走和汽车的路程不是分阶段进行的，因此他们有时会在同一个地方。然而，无法预测在村子里长途跋涉的角色和在短途旅行中的汽车何时可能相交。为了演示 <strong>intersectsMesh</strong> 方法，我们将让角色来回走动穿过汽车的停靠点。</p>
<p>在我们的例子中，如果汽车处于“碰撞”区域而角色不在，我们希望角色停止移动。毕竟，如果他们都在危险区域，角色停下来会很危险。在我们的例子中，由于 Dude 的构造方式，我们需要使用它的一个孩子来检查交集。基本上，Dude 只是头部、躯干、腿和手臂的一个固定节点，它的边界框太小，在这种情况下无法发挥作用。</p>
<p><a href="https://playground.babylonjs.com/#KBS9I5#83" target="_blank" rel="noopener noreferrer">基础碰撞检测<ExternalLinkIcon/></a></p>
</template>
