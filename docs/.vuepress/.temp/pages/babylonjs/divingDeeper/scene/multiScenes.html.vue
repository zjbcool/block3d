<template><h1 id="多场景工作" tabindex="-1"><a class="header-anchor" href="#多场景工作" aria-hidden="true">#</a> 多场景工作</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#如何使用多个场景">如何使用多个场景</RouterLink></li><li><RouterLink to="#切换场景">切换场景</RouterLink></li><li><RouterLink to="#多场景叠加">多场景叠加</RouterLink></li></ul></nav>
<h2 id="如何使用多个场景" tabindex="-1"><a class="header-anchor" href="#如何使用多个场景" aria-hidden="true">#</a> 如何使用多个场景</h2>
<p>代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> scene0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> scene1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将相关的相机、灯光和网格放入每个场景中，并在引擎<code v-pre>runRenderLoop</code>中调用它们</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>engine<span class="token punctuation">.</span><span class="token function">runRenderLoop</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  scene0<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scene1<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想让两个场景的网格同时可见，可将 scene1（最后渲染的场景）的 &quot;autoClear &quot;设置为<code v-pre>false</code>。</p>
<p>但是，在你自己的项目中和在playground中存在差异。</p>
<p>在你自己的项目中，为每个场景设置 create scene 函数并在引擎 <code v-pre>runRenderLoop</code>中调用它们是很容易的。比如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">createScene0</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> scene0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Add camera, light and meshes for scene0</span>

    <span class="token keyword">return</span> scene0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">createScene1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> scene1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Add camera, light and meshes for scene1</span>

    <span class="token keyword">return</span> scene1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Any other code</span>
<span class="token keyword">var</span> scene0 <span class="token operator">=</span> <span class="token function">createScene0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> scene1 <span class="token operator">=</span> <span class="token function">createScene1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

engine<span class="token punctuation">.</span><span class="token function">runRenderLoop</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  scene0<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scene1<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Playground 中，createScene 函数由运行 Playground 的代码包裹，因此最简单的方法就是在函数中创建一个新场景并向其添加相机、灯光和网格。此外，playground 有自己的引擎运行渲染循环，需要在运行自己的版本之前停止，技巧是使用 setTimeout。代码如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">createScene</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Add camera, light and meshes for scene</span>

    <span class="token comment">////////OTHER SCENE////////////////////</span>
    <span class="token keyword">var</span> scene1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Add camera, light and meshes for scene</span>

    <span class="token comment">////////CONTROL ENGINE LOOP///////////</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        engine<span class="token punctuation">.</span><span class="token function">stopRenderLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        engine<span class="token punctuation">.</span><span class="token function">runRenderLoop</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            scene1<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> scene<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换场景" tabindex="-1"><a class="header-anchor" href="#切换场景" aria-hidden="true">#</a> 切换场景</h2>
<p>你可能希望用户能够在不同的场景之间进行切换，记住，Babylon GUI是一个很好的设置触发器的方式，这样才能实现。</p>
<p>执行此操作的一种方法的示例是</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> clicks <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> showScene <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> advancedTexture<span class="token punctuation">;</span>
   

<span class="token keyword">var</span> <span class="token function-variable function">createGUI</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">scene<span class="token punctuation">,</span> showScene</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>             
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>showScene<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>            
            advancedTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token constant">GUI</span><span class="token punctuation">.</span>AdvancedDynamicTexture<span class="token punctuation">.</span><span class="token function">CreateFullscreenUI</span><span class="token punctuation">(</span><span class="token string">"UI"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> scene0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>            
            advancedTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token constant">GUI</span><span class="token punctuation">.</span>AdvancedDynamicTexture<span class="token punctuation">.</span><span class="token function">CreateFullscreenUI</span><span class="token punctuation">(</span><span class="token string">"UI"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> scene1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> button <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token constant">GUI</span><span class="token punctuation">.</span>Button<span class="token punctuation">.</span><span class="token function">CreateSimpleButton</span><span class="token punctuation">(</span><span class="token string">"but"</span><span class="token punctuation">,</span> <span class="token string">"Scene "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>clicks <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">"40px"</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">"green"</span><span class="token punctuation">;</span>
    button<span class="token punctuation">.</span>verticalAlignment <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span><span class="token constant">GUI</span><span class="token punctuation">.</span>Control<span class="token punctuation">.</span><span class="token constant">VERTICAL_ALIGNMENT_TOP</span>
    advancedTexture<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>

    
    button<span class="token punctuation">.</span>onPointerUpObservable<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>       
        clicks<span class="token operator">++</span><span class="token punctuation">;</span>                   
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  

<span class="token function">createGUI</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> showScene<span class="token punctuation">)</span><span class="token punctuation">;</span>

engine<span class="token punctuation">.</span><span class="token function">runRenderLoop</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>showScene <span class="token operator">!=</span> <span class="token punctuation">(</span>clicks <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        showScene <span class="token operator">=</span> clicks <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span>          
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>showScene<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>                    
                advancedTexture<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">createGUI</span><span class="token punctuation">(</span>scene0<span class="token punctuation">,</span> showScene<span class="token punctuation">)</span><span class="token punctuation">;</span>
                scene0<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                advancedTexture<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">createGUI</span><span class="token punctuation">(</span>scene1<span class="token punctuation">,</span> showScene<span class="token punctuation">)</span><span class="token punctuation">;</span>
                scene1<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#MXCRPS#1" target="_blank" rel="noopener noreferrer">切换场景示例<ExternalLinkIcon/></a></p>
<h2 id="多场景叠加" tabindex="-1"><a class="header-anchor" href="#多场景叠加" aria-hidden="true">#</a> 多场景叠加</h2>
<p>假设你想做一个第一人称射击游戏类型的项目，有一个代表用户的3D前景，然后有一个代表用户正在追踪的背景场景。在这种情况下，你希望前景和背景中的网格都是可见的。要做到这一点，需要将前景网格绘制在背景之上，也就是说，你不希望在渲染前景时清空渲染画布。在这种情况下，将前景 <code v-pre>autoClear</code> 设置为false。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//other code</span>

<span class="token keyword">var</span> foregroundScene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
foregroundScene<span class="token punctuation">.</span>autoClear <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">//other code</span>

engine<span class="token punctuation">.</span><span class="token function">runRenderLoop</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  backgroundScene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  foregroundScene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#L0IMUD#1" target="_blank" rel="noopener noreferrer">场景叠加示例<ExternalLinkIcon/></a></p>
</template>
