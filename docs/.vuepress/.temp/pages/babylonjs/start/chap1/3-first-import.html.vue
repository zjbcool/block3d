<template><h1 id="加载模型" tabindex="-1"><a class="header-anchor" href="#加载模型" aria-hidden="true">#</a> 加载模型</h1>
<p>本节教程中的演示程序，例如可以定位和旋转的房子，关于如何使用Babylon.js实现这样的功能，我们会在介绍完加载模型和将项目放在网页上的基础知识之后讲解。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#加载模型或场景">加载模型或场景</RouterLink></li><li><RouterLink to="#接下来">接下来</RouterLink><ul><li><RouterLink to="#警告">警告</RouterLink></li></ul></li></ul></nav>
<h2 id="加载模型或场景" tabindex="-1"><a class="header-anchor" href="#加载模型或场景" aria-hidden="true">#</a> 加载模型或场景</h2>
<p>当把模型放入场景中时，实际上是将其加载到浏览器中，这个加载的过程是异步的。在对模型执行任何操作之前，需要确保它们已加载。使用 <strong>SceneLoader</strong> 的 <strong>ImportMeshAsync</strong> 方法执行此操作，该方法具有以下形式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span>model name<span class="token punctuation">,</span> folder path<span class="token punctuation">,</span> file name<span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>场景scene参数是可选的，默认为当前场景。第一个参数可以是三种类型，具体取决于是要加载所有模型，只加载一个模型还是模型列表。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/relative path/"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//empty string all meshes</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">"model1"</span><span class="token punctuation">,</span> <span class="token string">"/relative path/"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Name of model for one model</span>
<span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"model1"</span><span class="token punctuation">,</span> <span class="token string">"model2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"/relative path/"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Array of model names</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上所有代码只会加载模型，但无法操作模型。现在只是创建了一个 Promise 对象，但在 Promise 完成并提供结果后没有任何操作。</p>
<p><a href="https://playground.cnbabylon.com/#0U8K05" target="_blank" rel="noopener noreferrer">加载模型示例<ExternalLinkIcon/></a></p>
<p><a href="https://playground.cnbabylon.com/#Z1DLUQ" target="_blank" rel="noopener noreferrer">加载多个模型示例<ExternalLinkIcon/></a></p>
<p>为了对结果进行操作，我们在 Promise 的后面使用 then 方法调用具有 Promise 结果的函数。结果是一个对象，其中<em>meshes</em>属性包含所有加载模型的网格数据。可以使用这个meshes数组或它们的名字来操作每个网格。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>SceneLoader<span class="token punctuation">.</span><span class="token function">ImportMeshAsync</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/relative path/"</span><span class="token punctuation">,</span> <span class="token string">"myFile"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>meshes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> myMesh1 <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">getMeshByName</span><span class="token punctuation">(</span><span class="token string">"myMesh_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMesh1<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#GC5UIE" target="_blank" rel="noopener noreferrer">加载并操作模型示例<ExternalLinkIcon/></a></p>
<h2 id="接下来" tabindex="-1"><a class="header-anchor" href="#接下来" aria-hidden="true">#</a> 接下来</h2>
<p>在palyground上有一个工作场景是一回事，但最终需要把游戏或应用程序部署到自己的网站上运行。这里我们会提供一个 HTML 模板来执行此操作。</p>
<h3 id="警告" tabindex="-1"><a class="header-anchor" href="#警告" aria-hidden="true">#</a> 警告</h3>
<p>重点强调 - 不同的格式会以不同的方式导出模型。</p>
<p>强调 - 不同的格式在导入 Babylon.js 时，可能会被改变。</p>
<p>要清楚使用的格式对结果的影响。这里不做详细介绍，但以下示例说明了为什么这很重要。</p>
<ol>
<li>某些软件使用rotationQuaternion 集保存所有网格，除非提前设置，否则无法使用旋转方法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myMesh<span class="token punctuation">.</span>rotationQuaternion <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//Any version of Babylon.js</span>

myMesh<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//babylon.js versions > 4.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>以下两种类型从完全相同的场景中导出并导入到 Babylon.js</li>
</ol>
<p><strong>.babylon</strong> 格式 - 一个模型存储为一个网格，即每个房子主体和屋顶形成一所房子。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>detached_house
ground
semi_house
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>.glb</strong> 格式 - 添加了一个 <em><em>root</em></em> 节点用来保存所有模型，并将模型部件存储为子网格。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>_root_
  detached_house
      detached_house primitive0
      detached_house primitive1
  ground
  semi_house
      semi_house primitive0
      semi_house primitive1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
