<template><h1 id="为pbr使用hdr环境" tabindex="-1"><a class="header-anchor" href="#为pbr使用hdr环境" aria-hidden="true">#</a> 为PBR使用HDR环境</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#使用沙盒创建一个压缩环境纹理">使用沙盒创建一个压缩环境纹理</RouterLink></li><li><RouterLink to="#ibl纹理工具">IBL纹理工具</RouterLink></li><li><RouterLink to="#直接使用-hdr文件">直接使用.hdr文件</RouterLink></li><li><RouterLink to="#外部工具">外部工具</RouterLink><ul><li><RouterLink to="#使用ibl-baker创建dds环境文件">使用IBL Baker创建dds环境文件</RouterLink></li><li><RouterLink to="#使用lys创建dds环境文件">使用LYS创建dds环境文件</RouterLink></li></ul></li><li><RouterLink to="#使用纯立方体纹理-cubetexture">使用纯立方体纹理 CubeTexture</RouterLink></li><li><RouterLink to="#什么是-env">什么是.env</RouterLink></li></ul></nav>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>强烈推荐设置环境纹理的方法是通过 HDR 就绪文件（DDS 或 ENV），其中包含带有预过滤 MipMap 的立方体纹理 cube texture。</p>
<p>要加载一个HDR环境，你可以使用<a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#createdefaultenvironment" target="_blank" rel="noopener noreferrer">createDefaultEnvironment<ExternalLinkIcon/></a>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将从<em>assets.babylonjs.com</em>加载文件<a href="https://assets.babylonjs.com/environments/environmentSpecular.env" target="_blank" rel="noopener noreferrer">environmentSpecular.env<ExternalLinkIcon/></a>。</p>
<p>要加载自定义环境纹理，只需设置<code v-pre>scene.environmentTexture</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> hdrTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span>CreateFromPrefilteredData</span><span class="token punctuation">(</span><span class="token string">"textures/environment.env"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> hdrTexture<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以在<code v-pre>createDefaultEnvironment()</code>中使用一个选项：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">createDefaultEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">environmentTexture</span><span class="token operator">:</span> <span class="token string">"texture-url.env"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在下面详细介绍了创建此类文件的两种支持方式。</p>
<p>从4.2版开始，我们现在直接支持在沙盒中进行预过滤！</p>
<p>.hdr 文件在网络上很容易找到，因此它看起来是最方便的过滤输入。</p>
<h2 id="使用沙盒创建一个压缩环境纹理" tabindex="-1"><a class="header-anchor" href="#使用沙盒创建一个压缩环境纹理" aria-hidden="true">#</a> 使用沙盒创建一个压缩环境纹理</h2>
<p>由于生成的DDS文件可能比较大（512px宽的文件为32Mb），我们在Babylon中引入了一种特殊的方式来打包你的纹理。下面是创建Babylon.js中使用的.env文件的步骤。</p>
<ul>
<li>进入<a href="https://sandbox.babylonjs.com/" target="_blank" rel="noopener noreferrer">沙盒<ExternalLinkIcon/></a></li>
<li>拖入一个PBR场景文件(<a href="https://models.babylonjs.com/PBR_Spheres.glb" target="_blank" rel="noopener noreferrer">例子<ExternalLinkIcon/></a>)</li>
<li>拖入你的.dds环境纹理文件（<a href="https://playground.babylonjs.com/textures/environment.dds" target="_blank" rel="noopener noreferrer">例子<ExternalLinkIcon/></a>）。</li>
<li>打开 &quot;Inspector&quot;，进入 &quot;Tools&quot;，然后点击 Generate .env texture。</li>
</ul>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2Finspector-generate-env-texture.png&amp;w=1920&amp;q=75" alt=""></p>
<p>现在你可以下载并使用你的.env环境，使用以下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"environment.env"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请参阅本页面底部的<a href="#%E4%BB%80%E4%B9%88%E6%98%AF.env">什么是.env</a>（技术深度）部分，以了解更多。</p>
<h2 id="ibl纹理工具" tabindex="-1"><a class="header-anchor" href="#ibl纹理工具" aria-hidden="true">#</a> IBL纹理工具</h2>
<p>如果你有一个.hdr纹理，你可以使用<a href="https://www.babylonjs.com/tools/ibl/" target="_blank" rel="noopener noreferrer">IBL纹理工具<ExternalLinkIcon/></a>，以一种简单的方式将其转换为.env。</p>
<p>只要拖拽你的.hdr文件，等待一下，然后把.env保存在你想要的地方。</p>
<h2 id="直接使用-hdr文件" tabindex="-1"><a class="header-anchor" href="#直接使用-hdr文件" aria-hidden="true">#</a> 直接使用.hdr文件</h2>
<p>如果你想直接使用.hdr文件，而不能从沙盒或外部工具中预过滤成.env或.dds，你可以在你的纹理被加载的那一刻就这样做。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> reflectionTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>HDRCubeTexture</span><span class="token punctuation">(</span><span class="token string">"./textures/environment.hdr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于预过滤是实时实现的，这种方法在加载纹理时将会有小的延迟。因此，最好是使用.env或.dds文件以获得最佳性能。请注意，WebGL2是用于实时预过滤的必要条件。</p>
<p>因为有时你甚至可能想在实时中完全过滤（例如动画反射），你可能想看看<a href="https://doc.babylonjs.com/divingDeeper/environment/reflectionProbes" target="_blank" rel="noopener noreferrer">反射探头的教程<ExternalLinkIcon/></a>。</p>
<h2 id="外部工具" tabindex="-1"><a class="header-anchor" href="#外部工具" aria-hidden="true">#</a> 外部工具</h2>
<p>第一个工具依赖于一个名为IBL Baker的开源框架，而第二个工具则是基于一个名为Lys的专有软件来创建更高的分辨率结果。</p>
<p>注意，如果需要，你可以旋转环境纹理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> hdrRotation <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// in degrees</span>
hdrTexture<span class="token punctuation">.</span><span class="token function">setReflectionTextureMatrix</span><span class="token punctuation">(</span>
    <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Matrix<span class="token punctuation">.</span><span class="token function">RotationY</span><span class="token punctuation">(</span>
        <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Tools<span class="token punctuation">.</span><span class="token function">ToRadians</span><span class="token punctuation">(</span>hdrRotation<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用ibl-baker创建dds环境文件" tabindex="-1"><a class="header-anchor" href="#使用ibl-baker创建dds环境文件" aria-hidden="true">#</a> 使用IBL Baker创建dds环境文件</h3>
<p>IBL Backer地址：<a href="https://github.com/derkreature/IBLBaker" target="_blank" rel="noopener noreferrer">https://github.com/derkreature/IBLBaker<ExternalLinkIcon/></a></p>
<p>克隆仓库后，进入/bin64文件夹并启动IBLBaker.exe。</p>
<p>现在使用<em>Load environment</em>按钮来加载一个HDR图片（也可以使用<a href="https://github.com/sbtron/BabylonJS-glTFLoader/tree/master/src/images" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>图片）。</p>
<p>我们建议使用环境缩放来定义您想要的亮度。</p>
<p>你可能还想通过设置128的镜面分辨率来减少输出尺寸，以确保模糊度下降的正确性。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FIBLbaker_DefaultSettings.png&amp;w=1920&amp;q=75" alt=""></p>
<p>一旦你对整体效果感到满意，只需点击<em>save environment</em>按钮，你就可以开始了! 要选择的文件是SpecularHDR的文件。</p>
<p>请不要忘记写上全名和扩展名，以便使保存工作正常进行。</p>
<h3 id="使用lys创建dds环境文件" tabindex="-1"><a class="header-anchor" href="#使用lys创建dds环境文件" aria-hidden="true">#</a> 使用LYS创建dds环境文件</h3>
<p><a href="https://www.knaldtech.com/lys/" target="_blank" rel="noopener noreferrer">Lys<ExternalLinkIcon/></a> 可以在 <a href="https://www.knaldtech.com/lys/" target="_blank" rel="noopener noreferrer">knaldtech<ExternalLinkIcon/></a> 网站上找到。</p>
<p>使用Lys，生成的mipmaps的输出质量将是一个更高的标准，在粗糙度响应上确实接近Unity标准材质。你可以用Lys生成：128、256或512 px宽的dds立方体纹理。</p>
<p>请遵循以下步骤，以确保响应的物理正确性。</p>
<p>首先，你需要在主窗口中选择以下设置（根据你的选择适应128、256或512的大小）。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FLys_DefaultSettings_Main.png&amp;w=1920&amp;q=75" alt=""></p>
<p>完成后，在首选项 <em>preferences</em> 选项卡中，请设置旧版 dds 模式 <em>legacy dds mode</em>（Babylon.js 不支持 4CC）：</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FLys_DefaultSettings_Prefs.png&amp;w=1920&amp;q=75" alt=""></p>
<p>在导出窗口中，你可以选择适当的选项（将DDS设置为32位应在最后进行，因为我们已经看到它默认为8位，否则就会被退回）。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FLys_DefaultSettings_Export.png&amp;w=1920&amp;q=75" alt=""></p>
<p>最后，你可以通过主标签导出你的纹理。</p>
<p>你已经准备好了，可以在<code v-pre>CubeTexture.CreateFromPrefilteredData</code>函数中使用导出的纹理。</p>
<h2 id="使用纯立方体纹理-cubetexture" tabindex="-1"><a class="header-anchor" href="#使用纯立方体纹理-cubetexture" aria-hidden="true">#</a> 使用纯立方体纹理 CubeTexture</h2>
<p>虽然使用.dds或.env立方体纹理是最好的选择，但你可能仍想依靠经典的立方体纹理（主要是为了尺寸原因）。所以，你也可以这样做。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"textures/TropicalSunnyDay"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这种情况下，你将无法获得HDR渲染，可能会出现一些视觉伪影（主要是在使用光泽度或粗糙度时）。</p>
<h2 id="什么是-env" tabindex="-1"><a class="header-anchor" href="#什么是-env" aria-hidden="true">#</a> 什么是.env</h2>
<p>我们正在解决.env的问题是我们的IBL环境纹理的大小和质量。我们决定实现我们的自定义打包，以简化分享和下载这些资产。这个文件需要跨平台工作以方便部署，因此我们不直接依赖压缩纹理。</p>
<p>然后，我们在一个文件中（类似于DDS或KTX）打包一个json清单头、多项式信息和来自预过滤立方体纹理的.png格式的mipmaps链的所有面（它的压缩效果非常好，在所有浏览器中解码非常快）。</p>
<p>为了保持对png的HDR支持，我们选择依靠RGBD，因为它通过保持[0-1]范围不被触及，提供了比RGBM更好的低范围内的数值分布，知道它通常被使用得更频繁。在需要时，它在运行时的解码也没有LogLUV复杂。对我们来说，这似乎是最好的权衡。</p>
<p>RGBD还在较低的范围内提供了无透明度到低透明度，以防止浏览器依赖alpha的预乘而在最明显的区域丢失数据。我们还从最大范围引入了一个特殊的偏移量，确保我们不会在传统的浏览器中达到有问题的alpha值（当alpha离0太近时，颜色量化会产生不可接受的带状伪影）。</p>
<p>在WebGL2浏览器中，如果支持HalfFloat或FullFloat纹理，我们会将数据解压为HalfFloat或FullFloat纹理，以加快运行时间并允许纠正一些插值。</p>
<p>该文件还将多项式谐波与球形打包，以符合 Babylon 的预期，在内部加快了加载时间，因为不必再计算或转换它们。</p>
<p>由于半浮点/全浮点纹理的渲染到LOD甚至复制到LOD在基于WebGL1的浏览器上并不稳定，我们在片段着色器中实时解包数据。由于RGBD插值不正确，我们用不同的测试案例来确保所产生的视觉伪影是值得运输的。在我们所测试的几组纹理中，它看起来还不错。</p>
<p>作为效果示例，我们现在可以依靠512px立方体大小的纹理，数据量约为3Mb，而解压后的版本为32Mb，没有发现任何质量下降的问题。这也加快了我们到第一帧的时间，因为不再需要计算多项式了。</p>
</template>
