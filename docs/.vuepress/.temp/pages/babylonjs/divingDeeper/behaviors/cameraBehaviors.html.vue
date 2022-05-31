<template><h1 id="相机行为" tabindex="-1"><a class="header-anchor" href="#相机行为" aria-hidden="true">#</a> 相机行为</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#回弹行为-bouncingbehavior">回弹行为 BouncingBehavior</RouterLink></li><li><RouterLink to="#自动旋转行为-autorotationbehavior">自动旋转行为 AutoRotationBehavior</RouterLink></li><li><RouterLink to="#框架行为-framingbehavior">框架行为 FramingBehavior</RouterLink></li></ul></nav>
<h2 id="回弹行为-bouncingbehavior" tabindex="-1"><a class="header-anchor" href="#回弹行为-bouncingbehavior" aria-hidden="true">#</a> 回弹行为 BouncingBehavior</h2>
<p>回弹行为（BABYLON.BouncingBehavior）设计为在 ArcRotateCamera 到达 LowerRadiusLimit 或upperRadiusLimit 时产生较小的弹跳效果。</p>
<p>可以使用以下属性配置回弹行为：</p>
<ul>
<li>transitionDuration : 定义动画的持续时间（以毫秒为单位）。默认值为450ms</li>
<li>lowerRadiusTransitionRange : 定义到达下半径时, 由过渡设置动画的距离的长度。默认值为 2</li>
<li>upperRadiusTransitionRange : 定义到达上半径时, 由过渡设置动画的距离的长度。默认值为 -2</li>
<li>autoTransitionRange : 定义一个值，该值表示是否已经自动定义了 LowerRadiusTransitionRange 和 upperRadiusTransitionRange. 转换范围将设置为世界空间中边框对角线的5%</li>
</ul>
<p>您可以使用以下代码轻松在ArcRotateCamera上启用此行为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>camera<span class="token punctuation">.</span>useBouncingBehavior <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在这里找到 <a href="https://playground.babylonjs.com/#6FBD14" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
<h2 id="自动旋转行为-autorotationbehavior" tabindex="-1"><a class="header-anchor" href="#自动旋转行为-autorotationbehavior" aria-hidden="true">#</a> 自动旋转行为 AutoRotationBehavior</h2>
<p>自动旋转行为（BABYLON.AutoRotationBehavior）是在用户没有交互时让 ArcRotateCamera 自动旋转。</p>
<p>可以使用以下属性配置此行为：</p>
<ul>
<li>idleRotationSpeed：相机的旋转速度</li>
<li>idleRotationWaitTime：用户进行操作之后，相机开始旋转之前要等待的时间（以毫秒为单位）</li>
<li>idleRotationSpinupTime：相机旋转达到完全怠速所需的时间（以毫秒为单位）</li>
<li>zoomStopsAnimation：表示用户缩放是否应停止旋转</li>
</ul>
<p>在 ArcRotateCamera 上启用此行为使用以下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>camera<span class="token punctuation">.</span>useAutoRotationBehavior <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在这里找到<a href="https://www.babylonjs-playground.com/#6FBD14#1" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
<h2 id="框架行为-framingbehavior" tabindex="-1"><a class="header-anchor" href="#框架行为-framingbehavior" aria-hidden="true">#</a> 框架行为 FramingBehavior</h2>
<p>框架行为（BABYLON.FramingBehavior）用于将 ArcRotateCamera 的目标设置为物体时进行自动定位。如果要防止相机穿透虚拟水平面，该功能也很有用。</p>
<p>可以使用以下属性配置此行为：</p>
<ul>
<li>mode: 该属性可以配置为：
<ul>
<li>BABYLON.FramingBehavior.IgnoreBoundsSizeMode : 相机可以一直向物体移动</li>
<li>BABYLON.FramingBehavior.FitFrustumSidesMode : 相机不允许缩放到比调整后的边界球接触视锥面的点更靠近物体的位置</li>
</ul>
</li>
<li>radiusScale ：定义应用于半径的比例（默认为1）</li>
<li>positionY：定义物体相对于相机焦点的Y轴偏移量（默认为0）</li>
<li>defaultElevation：定义当相机返回默认行为时, 返回水平面上方/下方的角度 （以弧度为单位, 默认值为0.3）</li>
<li>elevationReturnTime：定义返回默认的Beta位置（默认为1500）所花费的时间（以毫秒为单位）。负值表示相机不应恢复默认值</li>
<li>elevationReturnWaitTime：定义相机返回默认Beta位置（默认为1000）之前的延迟（以毫秒为单位）</li>
<li>zoomStopsAnimation：定义用户缩放时候, 是否应停止动画</li>
<li>framingTime：定义框架时的过渡时间（以毫秒为单位, 默认为1500）</li>
</ul>
<p>您可以使用以下代码轻松在ArcRotateCamera上打开此行为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>camera<span class="token punctuation">.</span>useFramingBehavior <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在这里找到<a href="https://playground.babylonjs.com/#6FBD14#2" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></p>
</template>
