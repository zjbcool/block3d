<template><h1 id="进入虚拟世界" tabindex="-1"><a class="header-anchor" href="#进入虚拟世界" aria-hidden="true">#</a> 进入虚拟世界</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#在-xr-中查看我们的虚拟村庄世界">在 XR 中查看我们的虚拟村庄世界</RouterLink></li></ul></nav>
<h2 id="在-xr-中查看我们的虚拟村庄世界" tabindex="-1"><a class="header-anchor" href="#在-xr-中查看我们的虚拟村庄世界" aria-hidden="true">#</a> 在 XR 中查看我们的虚拟村庄世界</h2>
<p>再简单不过了 - 我们移除了当前的相机并将其替换为</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xr <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createDefaultXRExperienceAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将在 VR 沉浸式模式下启用 WebXR，包括会话初始化、输入源、相机、传送和场景交互。全部使用我们的 WebXR 默认体验助手。</p>
</template>
