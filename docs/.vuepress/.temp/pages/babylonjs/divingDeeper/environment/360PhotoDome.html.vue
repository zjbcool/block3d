<template><h1 id="_360全景图" tabindex="-1"><a class="header-anchor" href="#_360全景图" aria-hidden="true">#</a> 360全景图</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#photodome">PhotoDome</RouterLink></li><li><RouterLink to="#photodome用法">PhotoDome用法</RouterLink></li><li><RouterLink to="#fov调节">FOV调节</RouterLink></li><li><RouterLink to="#支持的图片类型">支持的图片类型</RouterLink></li><li><RouterLink to="#webvr中的全景图">WebVR中的全景图</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>360照片是特定几何体、纹理和材质属性的简单组合；然而，我们并没有把负担放在你身上，让你去想如何连接它们，而是创造了PhotoDome。</p>
<h2 id="photodome" tabindex="-1"><a class="header-anchor" href="#photodome" aria-hidden="true">#</a> PhotoDome</h2>
<p>PhotoDome 需要一个必须是“等距矩形”的源图片，如果没有等距矩形源，该类将无法正常运行。</p>
<p>等距矩形全景图示例：</p>
<p><img src="https://playground.babylonjs.com/textures/360photo.jpg" alt="360photo"></p>
<h2 id="photodome用法" tabindex="-1"><a class="header-anchor" href="#photodome用法" aria-hidden="true">#</a> PhotoDome用法</h2>
<p>在 Playground 中，可以将以下内容复制并粘贴到你的场景中，然后调整选项。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>photoDome <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PhotoDome</span><span class="token punctuation">(</span><span class="token string">"testdome"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">&lt;</span>options<span class="token operator">></span><span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项对象中的所有设置都是可选的，但对象本身不是。至少要提供一个空对象。所有的选项都是通过相应的类来实现的，主要是球体的几何形状和纹理。</p>
<ul>
<li>resolution = 32: 整数，球体分辨率，较低的分辨率在极端的视野中会有更多的伪影。</li>
<li>size = 1000：创建球体的物理半径，默认为远处剪辑平面的一半左右。</li>
<li>useDirectMapping = true: 使用直接映射技术来渲染视频。除非你想使用<code v-pre>fovMultiplier</code>属性，否则你应该把这个值打开。</li>
</ul>
<p><a href="https://playground.babylonjs.com/#14KRGG#3" target="_blank" rel="noopener noreferrer">全景图示例<ExternalLinkIcon/></a></p>
<h2 id="fov调节" tabindex="-1"><a class="header-anchor" href="#fov调节" aria-hidden="true">#</a> FOV调节</h2>
<p>有时360照片与相机的距离会感觉很不舒服，为了帮助解决这个问题，可以使用基于材质的FOV调整。用以下代码在0.0和2.0之间调整。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>photoDome<span class="token punctuation">.</span>fovMultiplier <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，<code v-pre>fovMultiplier</code>只有在使用<code v-pre>useDirectMapping = false</code>创建选项时才会起作用。</p>
<p>警告，数值离1越远，失真就越明显。照片圆顶上更高的分辨率有助于减少，但不能消除这种情况。</p>
<p><a href="https://playground.babylonjs.com/#14KRGG#4" target="_blank" rel="noopener noreferrer">使用fovMultiplier示例<ExternalLinkIcon/></a></p>
<h2 id="支持的图片类型" tabindex="-1"><a class="header-anchor" href="#支持的图片类型" aria-hidden="true">#</a> 支持的图片类型</h2>
<p>目前存在几种类型的360图像。最常见的是单目全景 Monoscopic Panoramic、立体并排全景 Stereoscopic Side by Side panoramic 和顶底全景 Top bottom panoramic。</p>
<p>第一种代表了专门用于单目的全景视图。第二种是双目专用的全景图，而最后一种是分别在图像的顶部和底部包含两个全景图。</p>
<p>在 Photo Dome 中，可以使用以下命令更改适应图像源的类型：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>photoDome<span class="token punctuation">.</span>imageMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PhotoDome<span class="token punctuation">.</span><span class="token constant">MODE_MONOSCOPIC</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
photoDome<span class="token punctuation">.</span>imageMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PhotoDome<span class="token punctuation">.</span><span class="token constant">MODE_SIDEBYSIDE</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
photoDome<span class="token punctuation">.</span>imageMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PhotoDome<span class="token punctuation">.</span><span class="token constant">MODE_TOPBOTTOM</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#WP9WDU" target="_blank" rel="noopener noreferrer">立体并排全景图示例<ExternalLinkIcon/></a></p>
<p><a href="https://playground.babylonjs.com/#SM3YHE" target="_blank" rel="noopener noreferrer">立体顶底全景图示例<ExternalLinkIcon/></a></p>
<h2 id="webvr中的全景图" tabindex="-1"><a class="header-anchor" href="#webvr中的全景图" aria-hidden="true">#</a> WebVR中的全景图</h2>
<p>你可以将360图片与WebVR结合起来。只需添加以下代码。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vrHelper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultVRExperience</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它默认会在屏幕的右下方创建一个<strong>enterVR</strong>按钮，点击后将开始向HMD渲染。</p>
<p>你可以通过添加以下代码返回到2D视图。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>actionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ActionManager</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// From 2D view to fullscreen VR</span>
scene<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
<span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ExecuteCodeAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnKeyDownTrigger<span class="token punctuation">,</span>
        <span class="token literal-property property">parameter</span><span class="token operator">:</span> <span class="token string">'s'</span> <span class="token comment">//press "s" key</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> vrHelper<span class="token punctuation">.</span><span class="token function">enterVR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// From fullscreenVR to 2D view</span>
scene<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
<span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ExecuteCodeAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnKeyDownTrigger<span class="token punctuation">,</span>
        <span class="token literal-property property">parameter</span><span class="token operator">:</span> <span class="token string">'e'</span> <span class="token comment">//press "e" key</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> vrHelper<span class="token punctuation">.</span><span class="token function">exitVR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> document<span class="token punctuation">.</span><span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
