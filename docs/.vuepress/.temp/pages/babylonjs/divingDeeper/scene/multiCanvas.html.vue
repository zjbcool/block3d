<template><h1 id="多画布工作" tabindex="-1"><a class="header-anchor" href="#多画布工作" aria-hidden="true">#</a> 多画布工作</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#创建视图">创建视图</RouterLink></li><li><RouterLink to="#移除视图">移除视图</RouterLink></li><li><RouterLink to="#相机">相机</RouterLink></li><li><RouterLink to="#事件">事件</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></nav>
<p>从Babylon.js v4.1开始，可以在多个画布上使用一个引擎。</p>
<p>要做到这一点，你需要创建 &quot;视图&quot;。一个视图是由一个画布（目标）和一个可选的相机（视图的定义）定义的。</p>
<p><strong>请注意，当一个视图被注册后，用于初始化引擎的画布就变成了一个 &quot;工作&quot;画布，不再需要直接显示。</strong></p>
<h2 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h2>
<p>要创建一个视图，你需要向引擎注册画布和相机的组合。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> view <span class="token operator">=</span> engine<span class="token punctuation">.</span><span class="token function">registerView</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"renderCanvas1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> camera1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，你也可以在没有相机的情况下使用相同的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> view <span class="token operator">=</span> engine<span class="token punctuation">.</span><span class="token function">registerView</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"renderCanvas1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果相机未定义，则渲染循环将在视图中执行，而不会更改激活场景中的任何内容。</p>
<h2 id="移除视图" tabindex="-1"><a class="header-anchor" href="#移除视图" aria-hidden="true">#</a> 移除视图</h2>
<p>移除已注册的视图，可以使用如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>engine<span class="token punctuation">.</span><span class="token function">unRegisterView</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"renderCanvas1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="相机" tabindex="-1"><a class="header-anchor" href="#相机" aria-hidden="true">#</a> 相机</h2>
<p>如果一个视图被定义了一个摄像机，系统将使用它作为活动摄像机来渲染场景。</p>
<p>如果一个视图有一个定义的摄像机，而底层场景使用了多个活动摄像机（例如，scene.activeCameras.length &gt; 0），则该视图不能被渲染。</p>
<p>那么，你的渲染循环可能是这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">myRenderLoop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>engine<span class="token punctuation">.</span>activeView<span class="token punctuation">.</span>camera <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       mainScene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>engine<span class="token punctuation">.</span>activeView<span class="token punctuation">.</span>target <span class="token operator">===</span> view1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       scene1<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<p>默认情况下，场景将从主渲染画布（用于创建引擎的画布）捕获事件。你可以通过将<code v-pre>engine.inputElement</code>设置为你想用于事件的DOM元素来改变这种行为。</p>
<p>这必须在创建场景之前完成，如果你在创建场景之后完成，你必须运行以下代码。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">detachControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
engine<span class="token punctuation">.</span>inputElement <span class="token operator">=</span> myNewElement<span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">attachControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p><a href="https://www.babylonjs.com/Demos/Views" target="_blank" rel="noopener noreferrer">https://www.babylonjs.com/Demos/Views<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/BabylonJS/Website/blob/master/build/Demos/Views/index.html" target="_blank" rel="noopener noreferrer">源代码<ExternalLinkIcon/></a></p>
</template>
