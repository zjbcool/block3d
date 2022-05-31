<template><h1 id="在远程服务器上渲染场景" tabindex="-1"><a class="header-anchor" href="#在远程服务器上渲染场景" aria-hidden="true">#</a> 在远程服务器上渲染场景</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#在远程服务器上渲染场景和截屏">在远程服务器上渲染场景和截屏</RouterLink></li><li><RouterLink to="#创建想要渲染的babylon场景">创建想要渲染的Babylon场景</RouterLink></li><li><RouterLink to="#使用puppeteer">使用Puppeteer</RouterLink></li><li><RouterLink to="#配置使用gpu">配置使用GPU</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></nav>
<h2 id="在远程服务器上渲染场景和截屏" tabindex="-1"><a class="header-anchor" href="#在远程服务器上渲染场景和截屏" aria-hidden="true">#</a> 在远程服务器上渲染场景和截屏</h2>
<p>从服务器端捕获Babylon场景（如GLTF模型）的图片，对以下情况很有用：</p>
<ul>
<li>远程渲染场景，在不支持浏览器的设备上进行显示</li>
<li>服务器端测试</li>
<li>创建一个3D模型图片的目录</li>
</ul>
<p>要实现此功能，请按照以下步骤进行：</p>
<h2 id="创建想要渲染的babylon场景" tabindex="-1"><a class="header-anchor" href="#创建想要渲染的babylon场景" aria-hidden="true">#</a> 创建想要渲染的Babylon场景</h2>
<p>创建一个本地服务器托管的场景，或使用playground，例如：<a href="https://playground.babylonjs.com/#PN1NNI#1" target="_blank" rel="noopener noreferrer">初始化场景<ExternalLinkIcon/></a></p>
<h2 id="使用puppeteer" tabindex="-1"><a class="header-anchor" href="#使用puppeteer" aria-hidden="true">#</a> 使用Puppeteer</h2>
<p><a href="https://github.com/GoogleChrome/puppeteer" target="_blank" rel="noopener noreferrer">Puppeteer<ExternalLinkIcon/></a> 是一个 npm 包，可用于运行无头 headless 版本的 chrome 并与之互动。这样一来，用Babylon编写的在浏览器中运行的相同代码在puppeteer中也应该以同样的方式运行。</p>
<p>创建一个浏览器实例并加载页面：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">"https://playground.babylonjs.com/frame.html#PN1NNI#1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将JS注入页面：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token string">"BABYLON.Engine.LastCreatedScene.activeCamera.alpha = 1.4;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对页面截图</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'./public/example.png'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置使用gpu" tabindex="-1"><a class="header-anchor" href="#配置使用gpu" aria-hidden="true">#</a> 配置使用GPU</h2>
<p>传统服务器虚拟机不提供对GPU的访问，当它们提供访问时，设置适当的驱动程序可能很难授予puppeteer访问权限。一种有效的方法是使用<a href="https://docs.microsoft.com/en-us/azure/virtual-machines/windows/n-series-driver-setup#nvidia-grid-drivers" target="_blank" rel="noopener noreferrer">Azure NV virtual machine running Windows and installing grid drivers<ExternalLinkIcon/></a>。</p>
<p>一旦虚拟机设置完毕，puppeteer必须被配置为在非无头模式下运行，以便利用GPU渲染器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Don't disable the gpu</span>
<span class="token keyword">var</span> args <span class="token operator">=</span> puppeteer<span class="token punctuation">.</span><span class="token function">defaultArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=></span> arg <span class="token operator">!==</span> <span class="token string">'--disable-gpu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Run in non-headless mode</span>
args <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=></span> arg <span class="token operator">!==</span> <span class="token string">'--headless'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Use desktop graphics</span>
args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"--use-gl=desktop"</span><span class="token punctuation">)</span>
<span class="token comment">// Lanch pupeteer with custom arguments</span>
<span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ignoreDefaultArgs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    args
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个初始设置之后，按照上述相同的步骤进行操作。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p><a href="https://github.com/TrevorDev/babylonServer" target="_blank" rel="noopener noreferrer">源代码<ExternalLinkIcon/></a></p>
</template>
