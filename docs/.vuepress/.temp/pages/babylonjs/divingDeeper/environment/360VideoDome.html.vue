<template><h1 id="_360全景视频" tabindex="-1"><a class="header-anchor" href="#_360全景视频" aria-hidden="true">#</a> 360全景视频</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#videodome">VideoDome</RouterLink></li><li><RouterLink to="#videodome用法">VideoDome用法</RouterLink></li><li><RouterLink to="#fov调节">FOV调节</RouterLink></li><li><RouterLink to="#支持的视频类型">支持的视频类型</RouterLink></li><li><RouterLink to="#_180度视频">180度视频</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>360视频是特定几何体、纹理和材质属性的简单组合；然而，我们并没有把负担放在你身上，让你去弄清楚如何连接它们，而是创造了VideoDome。</p>
<p>请注意，VideoDome还支持180度视频。请阅读下文，了解更多信息。</p>
<h2 id="videodome" tabindex="-1"><a class="header-anchor" href="#videodome" aria-hidden="true">#</a> VideoDome</h2>
<p>VideoDomes在很大程度上依赖于<a href="https://doc.babylonjs.com/divingDeeper/materials/using/videoTexture" target="_blank" rel="noopener noreferrer">VideoTexture<ExternalLinkIcon/></a>类，请查看它的文档，以便清楚参数的含义。视频源本身应该是 &quot;等距矩形&quot;的，如果没有矩形视频源，这个类就不能正常工作。</p>
<h2 id="videodome用法" tabindex="-1"><a class="header-anchor" href="#videodome用法" aria-hidden="true">#</a> VideoDome用法</h2>
<p>在 Playground 中，可以将以下内容复制并粘贴到您的场景中，然后调整选项。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>videoDome <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>VideoDome</span><span class="token punctuation">(</span><span class="token string">"videoDome"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span> options <span class="token operator">></span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项对象中的所有设置都是可选的，但对象本身不是。至少提供一个空对象。</p>
<p>所有的选项都是通过相应的类来实现的，主要是球体的几何形状和VideoTexture：</p>
<ul>
<li>resolution = 32：整数，定义了用于承载视频的球体的分辨率。较低的分辨率在极端视角下有更多的伪影</li>
<li>clickToPlay = false：给视频添加一个点击播放监听器，不妨碍自动播放</li>
<li>autoPlay = true：尝试自动播放视频</li>
<li>loop = true：在结束时自动循环视频</li>
<li>size = 1000：球体的半径，默认为远处剪辑平面的大约一半</li>
<li>poster：在视频加载期间或用户与视频互动之前显示的图像的URL</li>
<li>useDirectMapping = true: 使用直接映射技术来渲染视频。除非你想使用fovMultiplier属性，否则你应该保留这个值</li>
<li>halfDomeMode = false：启用对180视频的支持，而不是360</li>
</ul>
<p><a href="https://playground.babylonjs.com/#SQ5UC1#22" target="_blank" rel="noopener noreferrer">全景视频示例<ExternalLinkIcon/></a></p>
<p>由于iOS禁止自动播放，你应该在用户互动时调用视频播放，使用<code v-pre>videoDome.videoTexture.video.play()</code>。</p>
<h2 id="fov调节" tabindex="-1"><a class="header-anchor" href="#fov调节" aria-hidden="true">#</a> FOV调节</h2>
<p>有时，360视频与摄像机的距离会感觉不舒服，为了帮助解决这个问题，提供了一个基于材质的FOV调整。用以下代码在0.0和2.0之间调整。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>videoDome<span class="token punctuation">.</span>fovMultiplier <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，<code v-pre>fovMultiplier</code>只有在使用<code v-pre>useDirectMapping = false</code>创建选项时才会起作用。</p>
<p>警告，该值离1越远，失真就越明显。视频球高分辨率有助于减少，但不能消除这种情况。</p>
<p><a href="https://playground.babylonjs.com/#SQ5UC1#0" target="_blank" rel="noopener noreferrer">FOV调节示例<ExternalLinkIcon/></a></p>
<h2 id="支持的视频类型" tabindex="-1"><a class="header-anchor" href="#支持的视频类型" aria-hidden="true">#</a> 支持的视频类型</h2>
<p>目前存在几种类型的360视频。最常见的是单目全景 Monoscopic Panoramic、立体并排全景 Stereoscopic Side by Side panoramic 和顶底全景 Top bottom panoramic。</p>
<p>第一种代表了专门用于单目的全景视图。第二种是双目专用的全景视频，而最后一种是分别在视频的顶部和底部包含两个全景视频。</p>
<p>在video Dome中，可以使用以下命令更改适应视频源的类型：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>videoDome<span class="token punctuation">.</span>videoMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>VideoDome<span class="token punctuation">.</span><span class="token constant">MODE_MONOSCOPIC</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
videoDome<span class="token punctuation">.</span>videoMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>VideoDome<span class="token punctuation">.</span><span class="token constant">MODE_SIDEBYSIDE</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
videoDome<span class="token punctuation">.</span>videoMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>VideoDome<span class="token punctuation">.</span><span class="token constant">MODE_TOPBOTTOM</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_180度视频" tabindex="-1"><a class="header-anchor" href="#_180度视频" aria-hidden="true">#</a> 180度视频</h2>
<p>另一种支持 VR 的视频格式是 180 度视频。录制了用户的正面，但背面是黑色的。</p>
<p>有两种方法可以启用 180 视频模式（我们称之为半球模式 half dome mode）：</p>
<ul>
<li>在创建时，在选项中启用 <code v-pre>halfDomeMode</code>：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> videoDome <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>VideoDome</span><span class="token punctuation">(</span>
    <span class="token string">"videoDome"</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">"https://videourl.com/videos/180.mp4"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">resolution</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clickToPlay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">halfDomeMode</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    scene
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将 <code v-pre>videoDome.halfDome</code> 设置为 <code v-pre>true</code>：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> videoDome <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">.</span>
videoDome<span class="token punctuation">.</span>halfDome <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>了解<a href="https://doc.babylonjs.com/typedoc/classes/VideoTexture" target="_blank" rel="noopener noreferrer">VideoTexture<ExternalLinkIcon/></a>。</p>
</template>
