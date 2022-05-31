<template><h1 id="离屏画布-offscreen-canvas" tabindex="-1"><a class="header-anchor" href="#离屏画布-offscreen-canvas" aria-hidden="true">#</a> 离屏画布 Offscreen Canvas</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p>离屏画布 offscreen canvas 是一种可以在屏幕外和与主UI线程不同的线程上进行渲染的画布。</p>
<p>如果你的主线程已经被大量用于其他任务，这样做可能真的很有趣。</p>
<p>你可以在这里看到一个演示这个用例的页面：https://www.babylonjs.com/Demos/Offscreen</p>
<p><a href="https://youtu.be/zYrZNROQzKQ" target="_blank" rel="noopener noreferrer">视频教程<ExternalLinkIcon/></a></p>
<p>从Babylon.js v4.1开始，你可以通过初始化一个离屏画布在 worker 内部创建一个引擎。</p>
<p>首先，你需要从你的常规画布中创建一个离屏画布。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"renderCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> canvas<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> canvas<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
<span class="token keyword">var</span> offscreen <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">transferControlToOffscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你需要分离出一个新的worker，并把它发送到离屏画布上。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">canvas</span><span class="token operator">:</span> offscreen<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>offscreen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>worker代码将监听你的消息，获得离屏画布，并以常规方式启动babylon.js。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    canvas <span class="token operator">=</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">.</span>canvas<span class="token punctuation">;</span>
    <span class="token keyword">var</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Engine</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Your scene setup here</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你可以按常规方式使用引擎。</p>
<p>在工作线程中使用Babylon.js的离屏画布的主要注意事项是，你需要做一些特殊的工作来与主线程的引擎进行通信。你将不得不使用我们之前使用的相同的消息传递API在线程之间进行通信。</p>
<p>此外，Babylon.js将无法为你处理输入，因此像<code v-pre>camera.attachControls()</code>这样的API将无法工作，你将不得不向 worker 传递输入信息。</p>
<p>下面是一个通信的例子，你必须设置，以支持画布大小的改变。</p>
<p>在主线程上：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span>canvas<span class="token punctuation">.</span>clientHeight<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在worker线程上：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> engine<span class="token punctuation">;</span>
<span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>data<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，这是个新功能，还没有与每个设备或浏览器兼容。你可以在这里检查当前对离屏画布的支持：<a href="https://caniuse.com/#feat=offscreencanvas" target="_blank" rel="noopener noreferrer">https://caniuse.com/#feat=offscreencanvas<ExternalLinkIcon/></a></p>
<p>如果你想测试兼容性，你可以在使用离屏画布之前添加这个条件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"OffscreenCanvas"</span> <span class="token keyword">in</span> window <span class="token operator">&amp;&amp;</span> <span class="token string">"transferControlToOffscreen"</span> <span class="token keyword">in</span> canvas<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// Ok to use offscreen canvas</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas<ExternalLinkIcon/></a></li>
<li><a href="https://developers.google.com/web/updates/2018/08/offscreen-canvas" target="_blank" rel="noopener noreferrer">https://developers.google.com/web/updates/2018/08/offscreen-canvas<ExternalLinkIcon/></a></li>
</ul>
</template>
