<template><h1 id="网格旋转-mesh-rotation" tabindex="-1"><a class="header-anchor" href="#网格旋转-mesh-rotation" aria-hidden="true">#</a> 网格旋转 Mesh Rotation</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#旋转-rotation">旋转 Rotation</RouterLink></li></ul></nav>
<h2 id="旋转-rotation" tabindex="-1"><a class="header-anchor" href="#旋转-rotation" aria-hidden="true">#</a> 旋转 Rotation</h2>
<p>三维空间中的旋转总是很棘手。应用旋转的顺序和使用的参照系会改变网格的最终方向。在三维建模中，有一系列的应用旋转的惯例。在本节后面会有更多的介绍。</p>
<p>为了具象化表现旋转，在例子中使用了这个不对称的网格</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMesh%2Fpilot.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>改变网格方向最直接的方法是<code v-pre>rotation</code>属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> beta<span class="token punctuation">,</span> gamma<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x  <span class="token operator">=</span>  alpha<span class="token punctuation">;</span> <span class="token comment">//rotation around x axis</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y  <span class="token operator">=</span>  beta<span class="token punctuation">;</span>  <span class="token comment">//rotation around y axis</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>z  <span class="token operator">=</span>  gamma<span class="token punctuation">;</span> <span class="token comment">//rotation around z axis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中alpha、beta和gamma是以弧度表示的角，被称为欧拉角。</p>
<p>有四个问题需要立即回答：</p>
<ol>
<li>旋转中心在哪里？</li>
<li>它们是否沿顺时针或逆时针方向施加？</li>
<li>采用什么参照系？</li>
<li>按照什么顺序？</li>
</ol>
<p>前两个问题很容易回答，因为在创建时，旋转中心是网格的局部原点，而且当向规定轴的正方向看时，旋转总是逆时针。</p>
<p>4 的答案取决于 3，并且在 Babylon.js 中，旋转参照系位于正在旋转的网格的局部空间中。使用以下4组代码中的任何一组都是一样的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> beta<span class="token punctuation">,</span> gamma<span class="token punctuation">)</span><span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x  <span class="token operator">=</span>  alpha<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y  <span class="token operator">=</span>  beta<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>z  <span class="token operator">=</span>  gamma<span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>z  <span class="token operator">=</span>  gamma<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x  <span class="token operator">=</span>  alpha<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y  <span class="token operator">=</span>  beta<span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y  <span class="token operator">=</span>  beta<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>z  <span class="token operator">=</span>  gamma<span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x  <span class="token operator">=</span>  alpha<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺序是 - beta 绕局部 y 轴旋转，然后 alpha 绕局部 x 轴旋转，最后 gamma 绕局部 z 轴旋转。</p>
<p>下图显示了这种旋转顺序。</p>
<p>红色 x 轴，绿色 y 轴，蓝色 z 轴。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Frotateorder.png&amp;w=1920&amp;q=75" alt=""></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Frotateorder.png&amp;w=1920&amp;q=75" alt=""></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Frotateorder.png&amp;w=1920&amp;q=75" alt=""></p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Frotateorder.png&amp;w=1920&amp;q=75" alt=""></p>
<p>从 0 旋转开始，绕 y 旋转 π/2，然后绕 x 旋转 π/2，然后绕 z 旋转 π/2。</p>
<p>但是，有时希望围绕局部空间中 x、y 和 z 轴以外的轴旋转，并设置自己顺序的旋转序列。</p>
</template>
