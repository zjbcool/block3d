<template><h1 id="网格结合" tabindex="-1"><a class="header-anchor" href="#网格结合" aria-hidden="true">#</a> 网格结合</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#父子关系">父子关系</RouterLink></li></ul></nav>
<h2 id="父子关系" tabindex="-1"><a class="header-anchor" href="#父子关系" aria-hidden="true">#</a> 父子关系</h2>
<p>设置网格的父子关系，使用如下代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>messhChild<span class="token punctuation">.</span>parent <span class="token operator">=</span> meshParent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//或</span>
meshChild<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span>meshParent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#KDPAQ9#11" target="_blank" rel="noopener noreferrer">理解父子关系<ExternalLinkIcon/></a></p>
</template>
