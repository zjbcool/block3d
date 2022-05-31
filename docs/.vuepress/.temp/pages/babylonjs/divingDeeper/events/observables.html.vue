<template><h1 id="观察器-observables" tabindex="-1"><a class="header-anchor" href="#观察器-observables" aria-hidden="true">#</a> 观察器 Observables</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#如何使用观察器">如何使用观察器</RouterLink></li><li><RouterLink to="#介绍">介绍</RouterLink></li><li><RouterLink to="#观察器的方法和属性">观察器的方法和属性</RouterLink></li><li><RouterLink to="#创建观察器">创建观察器</RouterLink></li><li><RouterLink to="#添加观察者">添加观察者</RouterLink></li><li><RouterLink to="#场景观察器">场景观察器</RouterLink></li><li><RouterLink to="#基于观察器的延时函数">基于观察器的延时函数</RouterLink><ul><li><RouterLink to="#setandstarttimer">setAndStartTimer</RouterLink></li><li><RouterLink to="#advanced-timer">Advanced Timer</RouterLink></li></ul></li></ul></nav>
<h2 id="如何使用观察器" tabindex="-1"><a class="header-anchor" href="#如何使用观察器" aria-hidden="true">#</a> 如何使用观察器</h2>
<p>对于许多创建Babylon.js项目的人来说，只需要GUI和场景观察器，尤其是 scene.onPointerObservable。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Babylon.js提供了很多事件（如scene.beforeRender），在v2.4版之前，没有一个统一的方法来处理它们。从v2.4开始，我们引入了（当然是在不破坏向后兼容性的前提下）一种新的模式：观察器 Observables。</p>
<p>它有两个部分：观察器 Observable和观察者 Observer。观察器是一个对象的属性，代表一个给定的事件（比如beforeRender）。想让自己的代码在响应这种事件时运行的用户会给相应的观察器注册一个观察者。然后，观察器的职责就是在适当的时候执行观察者。</p>
<p>实现者使用一个观察器来创建一个属性，这个属性将触发所有注册的观察者。泛型T被用来将给定的数据类型从观察器传达给观察者。</p>
<p>大多数用户会简单地将自己的观察者添加到Babylon.js提供的观察器s中。但也可以创建你自己的观察器（下面是一个简单的例子）。对于那些想深入研究的人，请看<a href="https://doc.babylonjs.com/typedoc/classes/babylon.observable" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a>。</p>
<ul>
<li><a href="https://playground.babylonjs.com/#6IGFM2" target="_blank" rel="noopener noreferrer">自定义观察器<ExternalLinkIcon/></a> - 在主球体上添加了一个可观察变量--onXChange。两个从球体和它们必须采取的行动构成了两个观察者，当观察到主球体的X位置变化时，它们会做出反应。</li>
</ul>
<h2 id="观察器的方法和属性" tabindex="-1"><a class="header-anchor" href="#观察器的方法和属性" aria-hidden="true">#</a> 观察器的方法和属性</h2>
<p>如下：</p>
<ul>
<li>add(): 添加一个观察者</li>
<li>addOnce(): 添加一个观察者，该观察者将被执行一次，然后删除。</li>
<li>remove(): 删除一个之前注册的观察者。</li>
<li>removeCallback(): 与上述相同，但给出回调，而不是观察者实例。</li>
<li>notifyObservers(): 用来通知所有注册的观察者。</li>
<li>notifyObserversWithPromise(): 调用它将执行每个回调，期等它是一个promise或返回一个值。如果在链中的任何地方有个函数失败了，promise将失败，执行将不会继续。</li>
<li>hasObservers：一个属性，如果至少有一个观察者被注册，则返回true。</li>
<li>hasSpecificMask(mask)：一个函数，如果至少有一个观察者用这个mask注册，则返回true。</li>
<li>clear(): 用于移除所有的观察者</li>
<li>clone(): 简单地克隆对象，但不包括注册的观察者。</li>
</ul>
<p>静态方法如下：</p>
<ul>
<li>FromPromise(): 从一个Promise中创建一个观察器。</li>
</ul>
<p>许多Babylon.js对象有一系列可用的观察器。这里是一个<a href="https://doc.babylonjs.com/search?bjsq=observable" target="_blank" rel="noopener noreferrer">无序列表<ExternalLinkIcon/></a>，来自文档的搜索工具，并有API的链接。</p>
<h2 id="创建观察器" tabindex="-1"><a class="header-anchor" href="#创建观察器" aria-hidden="true">#</a> 创建观察器</h2>
<p>为了给Babylon.js提供的Observable添加一个Observer，没有必要创建一个新的Observable，但你可能希望创建自己的Observable。特别是，Observables对于连接外部库到Babylon.js非常有用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> io <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"socket.io-client"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">"/admin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> onConnectObservable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> text1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>GUI<span class="token punctuation">.</span>TextBlock</span><span class="token punctuation">;</span>

socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"connect"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  onConnectObservable<span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

onConnectObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  text1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">"Connected"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一个实用方法 Observable.FromPromise 可以从 Promise 创建一个 Observable：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> onStatusObservable <span class="token operator">=</span> Observable<span class="token punctuation">.</span><span class="token function">FromPromise</span><span class="token punctuation">(</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">"/ping"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

onStatusObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">statusText</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  text1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">"Server status: "</span> <span class="token operator">+</span> statusText<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建你自己的Observables可以帮助减少不同组件之间的耦合。你可以创建多个独立的组件，然后简单地用一个父组件将它们连接起来，而不是组件的层次结构相互依赖。</p>
<h2 id="添加观察者" tabindex="-1"><a class="header-anchor" href="#添加观察者" aria-hidden="true">#</a> 添加观察者</h2>
<p>观察者 Observer 由一个设置为监听观察器的对象和对观察器的做出响应的对象组成。</p>
<p>在下面的例子中，球体和它的缩放变化通过Observable.add()方法创建了一个观察者。</p>
<p>设置观察器，在每一帧场景开始渲染前通知其观察者。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sphere<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>

  alpha <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#UP2O8#0" target="_blank" rel="noopener noreferrer">添加观察者示例<ExternalLinkIcon/></a></p>
<p>要移除一个观察者，你需要在它的创建过程中存储它，以便用移除来引用它。下面的例子在观察者被告知第一帧渲染之前就将其删除。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer <span class="token operator">=</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sphere<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>

  alpha <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#UP2O8#1" target="_blank" rel="noopener noreferrer">移除观察者示例<ExternalLinkIcon/></a></p>
<p>下面的例子在渲染周期中删除了观察者。由于不可能删除一个不存在的观察者，所以需要检查观察器是否仍然拥有观察者。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer <span class="token operator">=</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sphere<span class="token punctuation">.</span>scaling<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>

  alpha <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span>hasObservers <span class="token operator">&amp;&amp;</span> alpha <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="场景观察器" tabindex="-1"><a class="header-anchor" href="#场景观察器" aria-hidden="true">#</a> 场景观察器</h2>
<p>TheBabylon.js场景对象有超过20个观察器，在不同的条件下 &quot;发射&quot;。它们中的大多数在每一帧/渲染中都会被检查，而且是以一种确定的/可预测的顺序或次序进行的。下面是在每个渲染循环中检查的场景观察器的列表......按照它们被检查的顺序。</p>
<ul>
<li>onBeforeAnimationsObservable</li>
<li>onAfterAnimationsObservable</li>
<li>onBeforePhysicsObservable</li>
<li>onAfterPhysicsObservable</li>
<li>onBeforeRenderObservable</li>
<li>onBeforeRenderTargetsRenderObservable</li>
<li>onAfterRenderTargetsRenderObservable</li>
<li>onBeforeCameraRenderObservable</li>
<li>onBeforeActiveMeshesEvaluationObservable</li>
<li>onAfterActiveMeshesEvaluationObservable</li>
<li>onBeforeParticlesRenderingObservable</li>
<li>onAfterParticlesRenderingObservable</li>
<li>onBeforeRenderTargetsRenderObservable</li>
<li>onAfterRenderTargetsRenderObservable</li>
<li>onBeforeDrawPhaseObservable</li>
<li>onAfterDrawPhaseObservable</li>
<li>onAfterCameraRenderObservable</li>
<li>onAfterRenderObservable</li>
</ul>
<p>场景对象还有观察者：onReady、onDataLoaded、onDispose，但它们不发生在渲染/帧内。</p>
<p>另外，当使用<a href="https://doc.babylonjs.com/divingDeeper/animation/advanced_animations#deterministic-lockstep" target="_blank" rel="noopener noreferrer">deterministic lock step<ExternalLinkIcon/></a>时，<a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#onbeforestepobservable" target="_blank" rel="noopener noreferrer">onBeforeStepObservable<ExternalLinkIcon/></a>和<a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#onafterstepobservable" target="_blank" rel="noopener noreferrer">onAfterStepObservable<ExternalLinkIcon/></a>是可用的。</p>
<p>然而，最有用的观察器或许是检查屏幕指针发生了什么，无论是用鼠标还是用手指或控制器，<a href="https://doc.babylonjs.com/typedoc/classes/babylon.scene#onpointerobservable" target="_blank" rel="noopener noreferrer">scene.onPointerObservable<ExternalLinkIcon/></a>。关于这个问题的更多细节，请看<a href="https://doc.babylonjs.com/divingDeeper/scene/interactWithScenes" target="_blank" rel="noopener noreferrer">Interactions HowTo<ExternalLinkIcon/></a>。</p>
<h2 id="基于观察器的延时函数" tabindex="-1"><a class="header-anchor" href="#基于观察器的延时函数" aria-hidden="true">#</a> 基于观察器的延时函数</h2>
<p>从Babylon 4.2开始，增加了一种为函数设置延迟调用的新方法。这个方法是使用观察器来计算延迟时间。想想看，一个setTimeout函数，但在babylon的上下文中。最好的解释方法是展示一个例子。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// classic set timeout:</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// code running here is not guaranteed to be called inside the render loop</span>
  <span class="token comment">// Actually, it is most likely that it will be called OUTSIDE the render loop</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// the new and simple way</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">setAndStartTimer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">contextObservable</span><span class="token operator">:</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">,</span>
  <span class="token function-variable function">onEnded</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// code running here is guaranteed to run inside the beforeRender loop</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setandstarttimer" tabindex="-1"><a class="header-anchor" href="#setandstarttimer" aria-hidden="true">#</a> setAndStartTimer</h3>
<p>正如你在例子中所看到的，babylon计时器是以一个观察器作为上下文。这个观察器是这段代码中最重要的部分--观察器是剩余时间函数被调用的上下文，它负责计算完成前的delta时间。简单解释一下，这些是我们之前实现的函数的步骤。</p>
<ol>
<li>设置time=0，给scene.onBeforeRenderObservable添加一个观察者。</li>
<li>等待观察者被调用。</li>
<li>在观察者中 - 检查从开始计时以来的时间是否大于超时时间</li>
<li>如果否，转到2</li>
<li>如果是，则调用onEnded，删除观察者。</li>
<li>完成</li>
</ol>
<p>该函数的API的完整示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">setAndStartTimer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">contextObservable</span><span class="token operator">:</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">,</span>
  <span class="token function-variable function">breakCondition</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// this will check if we need to break before the timeout has reached</span>
    <span class="token keyword">return</span> scene<span class="token punctuation">.</span><span class="token function">isDisposed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onEnded</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// this will run when the timeout has passed</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onTick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// this will run</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onAborted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// this function will run when the break condition has met (premature ending)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所理解的，这里可以使用任何观察者，但是有些观察者并没有什么意义。例如，如果我们使用pointer down观察器，那么在下一次调用观察器之前可能需要很长的时间，这使得它不切实际。但是如果你需要在接下来的2分钟内处理pointer down的输入，你就可以这样使用它。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> gameIsOn <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">setAndStartTimer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contextObservable</span><span class="token operator">:</span> scene<span class="token punctuation">.</span>onPointerObservable<span class="token punctuation">,</span>
    <span class="token literal-property property">observableParameters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>PointerEventTypes<span class="token punctuation">.</span><span class="token constant">POINTERDOWN</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">breakCondition</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// break if the game ended prior to this timeout</span>
        <span class="token keyword">return</span> <span class="token operator">!</span>gameIsOn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onEnded</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'time is over'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onTick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// data.payload is the pointerInfo object from the onPointerObservable</span>
        <span class="token function">doSomethingWithTheData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个更实际的例子可以用来让用户触摸某样东西3秒（同时表示计数3秒）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> guiButton <span class="token operator">=</span> <span class="token comment">// created a GUI button</span>
<span class="token keyword">const</span> guiButtonMaterial <span class="token operator">=</span> <span class="token operator">...</span> <span class="token comment">// get the material</span>
<span class="token keyword">let</span> pressed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function-variable function">onPointerDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    pressed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">setAndStartTimer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// 设置超时时间3s</span>
        <span class="token literal-property property">contextObservable</span><span class="token operator">:</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable<span class="token punctuation">,</span>
        <span class="token function-variable function">breakCondition</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// break if no longer pressed</span>
            <span class="token keyword">return</span> <span class="token operator">!</span>pressed<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onEnded</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Button pressed!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// back to a black button</span>
            guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onTick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// turn it slowly green on each call to the registered observer</span>
            guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>data<span class="token punctuation">.</span>completeRate<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onAborted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// Aborted, back to a black button</span>
            guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

scene<span class="token punctuation">.</span><span class="token function-variable function">onPointerUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    pressed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="advanced-timer" tabindex="-1"><a class="header-anchor" href="#advanced-timer" aria-hidden="true">#</a> Advanced Timer</h3>
<p>除了这个快速功能外，你可以使用AdvancedTimer类，它带来了更多的灵活性，但也更啰嗦。这个对象本身是可重复使用的，所以它最终可以省去一些不需要的调用和对象的创建。一个使用AdvancedTimer的例子类似这样。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> guiButton <span class="token operator">=</span> <span class="token comment">// created a GUI button</span>
<span class="token keyword">const</span> guiButtonMaterial <span class="token operator">=</span> <span class="token operator">...</span> <span class="token comment">// get the material</span>
<span class="token keyword">const</span> advancedTimer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>AdvancedTimer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contextObservable</span><span class="token operator">:</span> scene<span class="token punctuation">.</span>onBeforeRenderObservable
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
advancedTimer<span class="token punctuation">.</span>onEachCountObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// turn it slowly green on each call to the registered observer</span>
    guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>data<span class="token punctuation">.</span>completeRate<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
advancedTimer<span class="token punctuation">.</span>onTimerAbortedObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// Aborted, back to a black button</span>
    guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
advancedTimer<span class="token punctuation">.</span>onTimerEndedObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// back to a black button</span>
    guiButtonMaterial<span class="token punctuation">.</span>diffuseColor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Button pressed!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

scene<span class="token punctuation">.</span><span class="token function-variable function">onPointerDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    advancedTimer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

scene<span class="token punctuation">.</span><span class="token function-variable function">onPointerUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    advancedTimer<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
