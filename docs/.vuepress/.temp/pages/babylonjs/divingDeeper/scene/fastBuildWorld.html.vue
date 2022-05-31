<template><h1 id="快速构建世界" tabindex="-1"><a class="header-anchor" href="#快速构建世界" aria-hidden="true">#</a> 快速构建世界</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#快速构建世界-1">快速构建世界</RouterLink></li><li><RouterLink to="#助手方法">助手方法</RouterLink></li><li><RouterLink to="#快速构建">快速构建</RouterLink></li><li><RouterLink to="#创建默认相机或灯光">创建默认相机或灯光</RouterLink></li><li><RouterLink to="#创建默认相机">创建默认相机</RouterLink><ul><li><RouterLink to="#访问相机">访问相机</RouterLink></li></ul></li><li><RouterLink to="#创建默认灯光">创建默认灯光</RouterLink><ul><li><RouterLink to="#访问灯光">访问灯光</RouterLink></li></ul></li><li><RouterLink to="#创建默认环境">创建默认环境</RouterLink><ul><li><RouterLink to="#选项参数">选项参数</RouterLink></li><li><RouterLink to="#可用方法">可用方法</RouterLink></li><li><RouterLink to="#环境助手">环境助手</RouterLink></li></ul></li><li><RouterLink to="#创建默认天空盒">创建默认天空盒</RouterLink></li><li><RouterLink to="#导入并快速构建">导入并快速构建</RouterLink><ul><li><RouterLink to="#为世界导入模型">为世界导入模型</RouterLink></li><li><RouterLink to="#使用场景助手导入">使用场景助手导入</RouterLink></li><li><RouterLink to="#导入示例">导入示例</RouterLink></li></ul></li></ul></nav>
<h2 id="快速构建世界-1" tabindex="-1"><a class="header-anchor" href="#快速构建世界-1" aria-hidden="true">#</a> 快速构建世界</h2>
<p>有一些助手（helpers）方法，一旦你把模型放到一个场景中，就会添加相机、灯光和环境，并自动适配到模型上，让你快速查看。然后你可以根据需要进行调整。</p>
<p>对于Babylon.js的初学者来说，<a href="#%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA">快速构建</a>和<a href="#%E5%AF%BC%E5%85%A5%E5%B9%B6%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA">导入并快速构建</a>这两个部分将快速给你一个可查看的世界，是查看模型的一个好方法。因此，它们是初级资料。值得考虑的是，通过Babylon101和部分初级资料的学习，可使本页面的其他信息和细节更容易理解。</p>
<h2 id="助手方法" tabindex="-1"><a class="header-anchor" href="#助手方法" aria-hidden="true">#</a> 助手方法</h2>
<p>以下是一个帮助快速构建世界的 <strong>scene</strong> 对象的方法列表，并附有指向其API描述的链接。</p>
<ul>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultcameraorlight" target="_blank" rel="noopener noreferrer">createDefaultCameraOrLight<ExternalLinkIcon/></a>;</li>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultcamera" target="_blank" rel="noopener noreferrer">createDefaultCamera<ExternalLinkIcon/></a>;</li>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultlight" target="_blank" rel="noopener noreferrer">createDefaultLight<ExternalLinkIcon/></a>;</li>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultenvironment" target="_blank" rel="noopener noreferrer">createDefaultEnvironment<ExternalLinkIcon/></a>;</li>
<li><a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultskybox" target="_blank" rel="noopener noreferrer">createDefaultSkybox<ExternalLinkIcon/></a>;</li>
</ul>
<h2 id="快速构建" tabindex="-1"><a class="header-anchor" href="#快速构建" aria-hidden="true">#</a> 快速构建</h2>
<p>要快速构建世界，只需使用<code v-pre>createDefaultCameraOrLight</code>以及<code v-pre>createDefaultEnvironment</code>，如本例所示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultCameraOrLight</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE" target="_blank" rel="noopener noreferrer">快速构建世界示例<ExternalLinkIcon/></a></p>
<p>通过下面这个例子，你会看到相机是如何在添加了第2个盒子后重新定位来自动适配的——</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#3" target="_blank" rel="noopener noreferrer">具有相机自动适配的快速构建示例<ExternalLinkIcon/></a></p>
<p>关于这些方法的更多信息，包括参数的细节，可以在下面的各个部分找到。</p>
<h2 id="创建默认相机或灯光" tabindex="-1"><a class="header-anchor" href="#创建默认相机或灯光" aria-hidden="true">#</a> 创建默认相机或灯光</h2>
<p>正如在快速构建部分所看到的，助手方法<code v-pre>createDefaultCameraOrLight</code>在一行中同时创建了一个相机和一个灯光。它可以接受的3个参数，与<code v-pre>createDefaultCamera</code>方法相同，第2个参数也是指灯光，当为 true 时将取代任何已有的相机或灯光。访问相机或灯光的方法与各自单独的方法相同，见下文。</p>
<h2 id="创建默认相机" tabindex="-1"><a class="header-anchor" href="#创建默认相机" aria-hidden="true">#</a> 创建默认相机</h2>
<p><code v-pre>createDefaultCamera</code>需要3个布尔参数，默认情况下都设置为false。它们是</p>
<ul>
<li>createArcRotateCamera：默认情况下创建一个free camera，如果为true，则创建一个arc rotate camera。</li>
<li>replace：当为true时，创建的相机将取代已有的活动相机。</li>
<li>attachCameraControls：当为 true 时，将控件附加到画布上。</li>
</ul>
<p>这段代码将创建一个arc rotate camera，取代任何已有的相机，并将相机控件附加到画布上。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultCamera</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#4" target="_blank" rel="noopener noreferrer">相机助手示例（无灯光）<ExternalLinkIcon/></a></p>
<p><a href="https://playground.babylonjs.com/#MJNICE#5" target="_blank" rel="noopener noreferrer">相机助手示例<ExternalLinkIcon/></a></p>
<p>创建free camera:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultCamera</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#6" target="_blank" rel="noopener noreferrer">相机助手示例（free camera）<ExternalLinkIcon/></a></p>
<p>相机将根据每个网格在世界中的大小和位置进行适配。</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#7" target="_blank" rel="noopener noreferrer">相机助手（自动适配）<ExternalLinkIcon/></a></p>
<h3 id="访问相机" tabindex="-1"><a class="header-anchor" href="#访问相机" aria-hidden="true">#</a> 访问相机</h3>
<p>使用助手创建的相机会成为活动相机，因此访问它的最简单方法是使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultCamera</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> helperCamera <span class="token operator">=</span> scene<span class="token punctuation">.</span>activeCamera<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#11" target="_blank" rel="noopener noreferrer">改变活动相机的相机助手示例<ExternalLinkIcon/></a></p>
<p>另一种方法是在创建相机后立即访问助手创建的相机，因为它将是<code v-pre>scene.cameras</code>数组中的最后一个，所以可以使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultCamera</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> helperCamera <span class="token operator">=</span> scene<span class="token punctuation">.</span>cameras<span class="token punctuation">[</span>scene<span class="token punctuation">.</span>cameras<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//OR</span>

<span class="token keyword">var</span> helperCamera <span class="token operator">=</span> scene<span class="token punctuation">.</span>cameras<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>cameras<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>helperCamera<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#8" target="_blank" rel="noopener noreferrer">改变半径和角度的相机助手示例<ExternalLinkIcon/></a></p>
<h2 id="创建默认灯光" tabindex="-1"><a class="header-anchor" href="#创建默认灯光" aria-hidden="true">#</a> 创建默认灯光</h2>
<p><code v-pre>createDefaultLight</code>只需要一个布尔参数，默认设置为false。</p>
<ul>
<li>replace：当为true时，创建的灯光将取代所有现有的灯光；当为false且没有现有的灯光时，将创建一个半球形的灯光；当为false且已经存在的灯光时，不会对场景做任何改变。</li>
</ul>
<p>当这种方法在创建任何其他灯光之前被使用时，那么通常只需使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultLight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="访问灯光" tabindex="-1"><a class="header-anchor" href="#访问灯光" aria-hidden="true">#</a> 访问灯光</h3>
<p>只要你用助手创建了灯光后立即访问它，它将是<code v-pre>scene.lights</code>数组中的最后一个。通过以下方法访问：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultLight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> helperLight <span class="token operator">=</span> scene<span class="token punctuation">.</span>lights<span class="token punctuation">[</span>scene<span class="token punctuation">.</span>lights<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//OR</span>

<span class="token keyword">var</span> helperLight <span class="token operator">=</span> scene<span class="token punctuation">.</span>lights<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>lights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>helperLight<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#9" target="_blank" rel="noopener noreferrer">改变方向和颜色的灯光助手示例<ExternalLinkIcon/></a>、</p>
<h2 id="创建默认环境" tabindex="-1"><a class="header-anchor" href="#创建默认环境" aria-hidden="true">#</a> 创建默认环境</h2>
<p>代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在场景中添加一个天空盒和地面，设置一系列的环境参数，并返回一个<a href="https://doc.babylonjs.com/typedoc/classes/babylon.environmenthelper" target="_blank" rel="noopener noreferrer">环境助手EnvironmentHelper<ExternalLinkIcon/></a> 给场景。</p>
<p>你还会发现下面有一个<a href="#%E5%88%9B%E5%BB%BA%E9%BB%98%E8%AE%A4%E5%A4%A9%E7%A9%BA%E7%9B%92">只用于天空盒</a>的助手。</p>
<p>当你看到以下示例时</p>
<p><a href="https://playground.babylonjs.com/#MJNICE" target="_blank" rel="noopener noreferrer">快速构建示例<ExternalLinkIcon/></a></p>
<p>这并不明显，因为已经添加了一个天空盒和地面。默认的设置是为了使其非常微妙，并有助于给物体带来接地气的感觉。</p>
<p>将相机进一步向外移动，可以看到天空盒的构造。</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#1" target="_blank" rel="noopener noreferrer">天空盒示例<ExternalLinkIcon/></a></p>
<p>你也可以通过使用选项参数并为天空盒纹理和地面颜色设置不同的值来查看天空盒和地面。</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#10" target="_blank" rel="noopener noreferrer">改变天空盒和地面<ExternalLinkIcon/></a></p>
<h3 id="选项参数" tabindex="-1"><a class="header-anchor" href="#选项参数" aria-hidden="true">#</a> 选项参数</h3>
<p>正如你在上面的playground上看到的，<code v-pre>createDefaultEnvironment</code>方法需要一个选项参数。完整选项参数见<a href="https://doc.babylonjs.com/typedoc/interfaces/babylon.ienvironmenthelperoptions" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a></p>
<p>所以，例如:</p>
<p>阻止创建天空盒</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">createSkybox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启地面反射</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">enableGroundMirror</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你看到与地面发生Z字形交错时，提高<code v-pre>groundYBias</code>的值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">groundYBias</span><span class="token operator">:</span> <span class="token number">0.01</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可用方法" tabindex="-1"><a class="header-anchor" href="#可用方法" aria-hidden="true">#</a> 可用方法</h3>
<p>由于<code v-pre>createDefaultEnvironment</code>方法返回一个<code v-pre>environmentalHelper</code>对象，那么这个对象的所有属性和方法（见<a href="https://doc.babylonjs.com/typedoc/classes/babylon.environmenthelper" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a>）都是可用的。</p>
<p>因此，例如，如果环境颜色不理想，你可以在创建后修改它。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
helper<span class="token punctuation">.</span><span class="token function">setMainColor</span><span class="token punctuation">(</span><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#12" target="_blank" rel="noopener noreferrer">改变背景颜色示例<ExternalLinkIcon/></a></p>
<p>或者，例如，如果你希望在创建环境后去除地面，则使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
helper<span class="token punctuation">.</span>ground<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者更新选项参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> helper <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">skyboxTexture</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"/textures/skybox"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
helper<span class="token punctuation">.</span><span class="token function">updateOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MJNICE#13" target="_blank" rel="noopener noreferrer">更新选项参数示例<ExternalLinkIcon/></a></p>
<h3 id="环境助手" tabindex="-1"><a class="header-anchor" href="#环境助手" aria-hidden="true">#</a> 环境助手</h3>
<p>注意：环境助手完全依赖BackgroundMaterial，以尽可能地高效。</p>
<h2 id="创建默认天空盒" tabindex="-1"><a class="header-anchor" href="#创建默认天空盒" aria-hidden="true">#</a> 创建默认天空盒</h2>
<p>当你不想创建一个完整的环境时，可以使用<code v-pre>createDefaultSkybox</code>方法。使用的参数决定了如何创建天空盒。</p>
<p>例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"/assets/textures/SpecularHDR.dds"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">createDefaultSkybox</span><span class="token punctuation">(</span>texture<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，使用的前两个参数给出了天空盒的纹理，并指定使用<a href="https://doc.babylonjs.com/divingDeeper/materials/using/introToPBR" target="_blank" rel="noopener noreferrer">PBR Material<ExternalLinkIcon/></a>（第2个参数，true），而不是标准材质（第2个参数，false - 默认值）。</p>
<p>第3个参数定义了天空盒的缩放（这个值取决于你的场景的缩放），默认值是1000。</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#14" target="_blank" rel="noopener noreferrer">天空盒缩放示例<ExternalLinkIcon/></a></p>
<h2 id="导入并快速构建" tabindex="-1"><a class="header-anchor" href="#导入并快速构建" aria-hidden="true">#</a> 导入并快速构建</h2>
<p>要导入模型并快速构建世界，只需使用<code v-pre>createDefaultCameraOrLight</code>以及<code v-pre>createDefaultEnvironment</code>，如本例所示</p>
<p><a href="https://playground.babylonjs.com/#MJNICE#15" target="_blank" rel="noopener noreferrer">导入并快速构建示例<ExternalLinkIcon/></a></p>
<p>摄像机会自动调整其位置，以便根据模型的比例和位置使世界可见。下面是关于用场景助手导入模型的更多信息。</p>
<h3 id="为世界导入模型" tabindex="-1"><a class="header-anchor" href="#为世界导入模型" aria-hidden="true">#</a> 为世界导入模型</h3>
<p>由于createDefault...助手考虑到了场景中的任何模型，它们只能在模型被加载后应用，所以被放在回调函数中。例如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token string">"https://www.babylonjs.com/Assets/DamagedHelmet/glTF/"</span><span class="token punctuation">,</span> <span class="token string">"DamagedHelmet.gltf"</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">meshes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span><span class="token function">createDefaultCameraOrLight</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就出现了一个问题。当创建场景时，Babylon.js会检查是否有相机。当导入模型时，在模型完成加载之前就会检查相机的存在，所以场景会失败。</p>
<p>解决办法是用<code v-pre>delayCreateScene</code>函数替换<code v-pre>createScene</code>函数。无论是在playground还是在你自己的项目中，都可直接替换。</p>
<p>注意：其它可用<a href="https://doc.babylonjs.com/divingDeeper/importers/loadingFileTypes" target="_blank" rel="noopener noreferrer">scene loader<ExternalLinkIcon/></a>。</p>
<h3 id="使用场景助手导入" tabindex="-1"><a class="header-anchor" href="#使用场景助手导入" aria-hidden="true">#</a> 使用场景助手导入</h3>
<p>本页前面描述的所有助手方法在导入模型时的行为方式完全相同。只要记住在场景加载器的回调中调用它们。</p>
<h3 id="导入示例" tabindex="-1"><a class="header-anchor" href="#导入示例" aria-hidden="true">#</a> 导入示例</h3>
<p><a href="https://playground.babylonjs.com/#10D6YT#33" target="_blank" rel="noopener noreferrer">简单导入并设置环境颜色<ExternalLinkIcon/></a></p>
<p><a href="https://playground.babylonjs.com/#10D6YT#35" target="_blank" rel="noopener noreferrer">导入模糊、反射和阴影<ExternalLinkIcon/></a></p>
</template>
