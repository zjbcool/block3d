<template><h1 id="网格拾取-mesh-picking" tabindex="-1"><a class="header-anchor" href="#网格拾取-mesh-picking" aria-hidden="true">#</a> 网格拾取 Mesh Picking</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#射线-ray">射线 Ray</RouterLink></li><li><RouterLink to="#检测射线-pickwithray">检测射线 pickWithRay</RouterLink></li><li><RouterLink to="#谓词函数-predicate-function">谓词函数 Predicate function</RouterLink></li><li><RouterLink to="#三角谓词-triangle-predicate">三角谓词 Triangle predicate</RouterLink></li><li><RouterLink to="#选择被遮挡物体-multipickwithray">选择被遮挡物体 multiPickWithRay</RouterLink></li><li><RouterLink to="#拾取射线-createpickingray">拾取射线 createPickingRay</RouterLink></li><li><RouterLink to="#调试-rayhelper">调试 RayHelper</RouterLink></li><li><RouterLink to="#练习">练习</RouterLink><ul><li><RouterLink to="#射线检测">射线检测</RouterLink></li><li><RouterLink to="#点击事件">点击事件</RouterLink></li></ul></li></ul></nav>
<h2 id="射线-ray" tabindex="-1"><a class="header-anchor" href="#射线-ray" aria-hidden="true">#</a> 射线 Ray</h2>
<p>射线就像太阳光。用来检测场景中网格和点之间的碰撞或交叉。</p>
<p>在上一个教程中，我们用它来用鼠标选择网格（在3D中一条射线从摄像机到鼠标位置），使用函数<code v-pre>scene.pick(scene.pointerX, scene.pointerY)</code>。</p>
<p>但在这里我们将看到，可以从任何位置和任何方向发出射线。例如，在第三人称射击游戏中：子弹和障碍物之间的碰撞。</p>
<p>相关文档:</p>
<ul>
<li>首先<a href="https://doc.babylonjs.com/typedoc/classes/babylon.ray" target="_blank" rel="noopener noreferrer">创建射线 new Ray()<ExternalLinkIcon/></a></li>
<li>使用<a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#pickwithray" target="_blank" rel="noopener noreferrer">scene.pickWithRay()<ExternalLinkIcon/></a>在场景中发出射线来拾取网格</li>
<li>使用返回的<a href="https://doc.babylonjs.com/typedoc/classes/babylon.pickinginfo" target="_blank" rel="noopener noreferrer">拾取信息<ExternalLinkIcon/></a></li>
</ul>
<h2 id="检测射线-pickwithray" tabindex="-1"><a class="header-anchor" href="#检测射线-pickwithray" aria-hidden="true">#</a> 检测射线 pickWithRay</h2>
<p>在此处查看示例：<a href="https://playground.babylonjs.com/#KNE0O#84" target="_blank" rel="noopener noreferrer">检测射线接触到的第一个网格<ExternalLinkIcon/></a></p>
<p>(下面的描述将参考这个例子。所有的行参考都来自于最新的例子链接)</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fraycast01.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>在我们所有的playground上，想象角色是位于中心的主盒子。它将不断地向前发射激光束，并检测哪个敌人（其他盒子）被击中。</p>
<p>所以用鼠标移动而不是点击，通过函数<code v-pre>mousemovef</code>来转动这个盒子。一条射线在创建时需要：原点、方向和长度。</p>
<p>首先，我们将<code v-pre>box.isPickable</code>设置为<code v-pre>false</code>，以避免射线从内部接触到盒子。因为我们将射线的起点（原点）设置在了盒子的中心。</p>
<p>最重要的部分是算出矢量的正确方向：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">vecToLocal</span><span class="token punctuation">(</span><span class="token parameter">vector<span class="token punctuation">,</span> mesh</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> m <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getWorldMatrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">TransformCoordinates</span><span class="token punctuation">(</span>vector<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> v<span class="token punctuation">;</span>		 
<span class="token punctuation">}</span>

<span class="token keyword">var</span> forward <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
forward <span class="token operator">=</span> <span class="token function">vecToLocal</span><span class="token punctuation">(</span>forward<span class="token punctuation">,</span> box<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> direction <span class="token operator">=</span> forward<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
direction <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Normalize</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们希望得到相对于盒子空间和方向的前向矢量。然后，为了得到方向，我们从原点，即盒子的位置上减去它。函数<code v-pre>vecToLocal</code>的目的是通过将一个向量乘以网格矩阵，以网格的局部空间变换位置。</p>
<p>然后，我们创建具有所有给定元素和长度为100的射线。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Ray</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，如果射线接触到一个网格，我们会得到它的击中点（第68行）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> hit <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个网格被击中，我们就对其进行处理，比如获取网格名称、点的位置等等。在这里，我们改变它的尺寸，因为它更有趣!</p>
<p>如果以后需要在这个盒子上检查射线相交，就不能强制将<code v-pre>box.isPickable</code>设置为<code v-pre>false</code>，可以在盒子前面一点设置射线的原点，再远一点设置方向和长度。</p>
<p><a href="https://playground.babylonjs.com/#KNE0O#17" target="_blank" rel="noopener noreferrer">射线拾取示例<ExternalLinkIcon/></a></p>
<h2 id="谓词函数-predicate-function" tabindex="-1"><a class="header-anchor" href="#谓词函数-predicate-function" aria-hidden="true">#</a> 谓词函数 Predicate function</h2>
<p>这是一个过滤器，用于选择哪些网格可以被选择。</p>
<p><a href="https://playground.babylonjs.com/#KNE0O#18" target="_blank" rel="noopener noreferrer">谓词函数示例<ExternalLinkIcon/></a></p>
<p>下面是代码中新加入的谓词函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">predicate</span><span class="token punctuation">(</span><span class="token parameter">mesh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mesh <span class="token operator">==</span> box2 <span class="token operator">||</span> mesh <span class="token operator">==</span> box<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在参数中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>isPickable</code> false 参数使box不相干，所以必须避开box。为了测试，我们也避开了box2，而允许其他的（默认情况下是box3和box4）。</p>
<p>结果是，只有box3，后面的第二个蓝色盒子，和box4会增长。它的工作原理就像box2对射线来说是透明的一样。</p>
<p><code v-pre>pickWithRay</code>方法还有一个可选的参数。这是一个布尔值<code v-pre>fastCheck</code>（默认为false）。<code v-pre>True</code>将返回与射线相交的第一个网格（按照网格数组的顺序），而不是离射线原点最近的网格。</p>
<h2 id="三角谓词-triangle-predicate" tabindex="-1"><a class="header-anchor" href="#三角谓词-triangle-predicate" aria-hidden="true">#</a> 三角谓词 Triangle predicate</h2>
<p>从Babylon.js v4.0开始，可以定义一个自定义谓词来过滤被选中的三角形，以便对进入的射线进行检测。该谓词将被调用，其中包括每个面的3个顶点和进来的射线。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>pointerX<span class="token punctuation">,</span> scene<span class="token punctuation">.</span>pointerY<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> ray</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 忽略网格背面</span>
    <span class="token keyword">var</span> p0p1 <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> p2p1 <span class="token operator">=</span> p2<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 向量3 vector3</span>
    <span class="token comment">// 叉乘cross是两个向量所在平面的法线方向，大小由两个向量的大小决定</span>
    <span class="token keyword">var</span> normal <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Cross</span><span class="token punctuation">(</span>p0p1<span class="token punctuation">,</span> p2p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 点乘dot是向量1在向量2上的投影，是个数量值，如果该值&lt;0，表示两向量的夹角>90度，也就表示三角面不朝向相机</span>
    <span class="token keyword">return</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Dot</span><span class="token punctuation">(</span>ray<span class="token punctuation">.</span>direction<span class="token punctuation">,</span> normal<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，可以过滤掉所有不朝向相机的三角形。（如果不使用该谓词，将无法点击到中间的小盒子。）</p>
<p><a href="https://playground.babylonjs.com/#EES9W5" target="_blank" rel="noopener noreferrer">三角谓词示例<ExternalLinkIcon/></a></p>
<h2 id="选择被遮挡物体-multipickwithray" tabindex="-1"><a class="header-anchor" href="#选择被遮挡物体-multipickwithray" aria-hidden="true">#</a> 选择被遮挡物体 multiPickWithRay</h2>
<p>如果我们不希望射线在第一个障碍物处停止（可以选中被遮挡住的物体），我们可以使用<code v-pre>scene.multiPickWithRay</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Ray</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hits <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">multiPickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#KNE0O#19" target="_blank" rel="noopener noreferrer">多选示例<ExternalLinkIcon/></a></p>
<p>选择的结果是一个数组。</p>
<p>可以通过循环数组来改变所有的击中的网格。在这个例子中，可以看到两个蓝色方框的大小发生了变化。就像一颗能穿墙的子弹!</p>
<p>另一种方法是直接使用 <code v-pre>Ray</code> 类。</p>
<p>要把射线改为局部空间:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">Transform</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span> → Ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检测交点:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">intersectsMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">,</span> fastCheck<span class="token punctuation">)</span> → PickingInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="拾取射线-createpickingray" tabindex="-1"><a class="header-anchor" href="#拾取射线-createpickingray" aria-hidden="true">#</a> 拾取射线 createPickingRay</h2>
<p>还有一个简便的功能是<code v-pre>scene.createPickingRay</code>。这条特殊的光线是从相机投射出来的，一直到无限远，在光标的方向（相对于虚拟镜头）。令人困惑吗？基本上可以把它看作是一条从相机投出的射线，并由光标 &quot;瞄准&quot;。这是在场景中选中物体的另一种方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Identity() 将世界矩阵重置为4x4单位矩阵。</span>
<span class="token keyword">var</span> ray <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createPickingRay</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>pointerX<span class="token punctuation">,</span> scene<span class="token punctuation">.</span>pointerY<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Matrix<span class="token punctuation">.</span><span class="token function">Identity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token keyword">var</span> hit <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#AC8XPN" target="_blank" rel="noopener noreferrer">拾取射线示例<ExternalLinkIcon/></a></p>
<p>另一种方法是直接使用 <code v-pre>Ray</code> 类。</p>
<p>要把射线改为局部空间:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">Transform</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span> → Ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检测交点:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">intersectsMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">,</span> fastCheck<span class="token punctuation">)</span> → PickingInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="调试-rayhelper" tabindex="-1"><a class="header-anchor" href="#调试-rayhelper" aria-hidden="true">#</a> 调试 RayHelper</h2>
<p>要理解一条射线的原点和方向可能是很困难的。为帮助调试，可以使用<code v-pre>RayHelper</code>。</p>
<p>可以使用一个静态方法来创建和显示一个RayHelper:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>RayHelper<span class="token punctuation">.</span><span class="token function">CreateAndShow</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者分成两步：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> rayHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>RayHelper</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
rayHelper<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>辅助对象也可以附加到网格以跟踪其方向：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> localMeshDirection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> localMeshOrigin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
rayHelper<span class="token punctuation">.</span><span class="token function">attachToMesh</span><span class="token punctuation">(</span>box<span class="token punctuation">,</span> localMeshDirection<span class="token punctuation">,</span> localMeshOrigin<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#ZHDBJ#48" target="_blank" rel="noopener noreferrer">使用辅助对象拾取示例<ExternalLinkIcon/></a></p>
<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2>
<h3 id="射线检测" tabindex="-1"><a class="header-anchor" href="#射线检测" aria-hidden="true">#</a> 射线检测</h3>
<ul>
<li>使用TypeScript</li>
<li>创建环形球阵列</li>
<li>吸附到网格表面</li>
</ul>
<p><a href="https://playground.babylonjs.com/#MY83VZ#3" target="_blank" rel="noopener noreferrer">射线检测示例<ExternalLinkIcon/></a></p>
<h3 id="点击事件" tabindex="-1"><a class="header-anchor" href="#点击事件" aria-hidden="true">#</a> 点击事件</h3>
<ul>
<li>谓词函数</li>
<li>点击事件</li>
</ul>
<p><a href="https://playground.babylonjs.com/#LCF1DD#1" target="_blank" rel="noopener noreferrer">点击事件示例<ExternalLinkIcon/></a></p>
</template>
