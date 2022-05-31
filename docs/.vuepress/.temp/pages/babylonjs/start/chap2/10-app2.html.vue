<template><h1 id="web应用布局" tabindex="-1"><a class="header-anchor" href="#web应用布局" aria-hidden="true">#</a> Web应用布局</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#各种-web-应用布局">各种 Web 应用布局</RouterLink></li></ul></nav>
<h2 id="各种-web-应用布局" tabindex="-1"><a class="header-anchor" href="#各种-web-应用布局" aria-hidden="true">#</a> 各种 Web 应用布局</h2>
<p>虽然你可能希望游戏或应用占据页面的大部分，但你可能会需要一些空间来放一些说明性的内容。这时，只需将 <code v-pre>&lt;canvas&gt;</code> 元素放在 <code v-pre>&lt;div&gt;</code> 中并根据需要排列元素。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>holder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>renderCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">touch-action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span> &lt;!-touch-action="none" for best results from PEP -->
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>instructions<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Instructions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
    Instructions Instructions Instructions Instructions Instructions 
    Instructions Instructions Instructions Instructions Instructions 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的样式</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#holder</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#instructions</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入村庄场景的<a href="https://doc.babylonjs.com/webpages/app3.html" target="_blank" rel="noopener noreferrer">示例应用和说明<ExternalLinkIcon/></a></p>
<p>你当然仍然可以完全从代码创建你的场景</p>
<p>代码创建村庄场景的<a href="https://doc.babylonjs.com/webpages/app4.html" target="_blank" rel="noopener noreferrer">示例应用和说明<ExternalLinkIcon/></a></p>
<p>下一阶段，我们将通过为非常基本的汽车动画来添加动画效果。汽车需要独立于车身转动的车轮。要了解这是如何实现的，我们需要知道如何将轮子作为车体的子物体。</p>
</template>
