<template><h1 id="编辑器介绍" tabindex="-1"><a class="header-anchor" href="#编辑器介绍" aria-hidden="true">#</a> 编辑器介绍</h1>
<p>Block3D编辑器包含一些实用的工具和功能，本节将介绍其中最重要的，以帮助你更好地使用编辑器。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#选项卡">选项卡</RouterLink><ul><li><RouterLink to="#拼图编辑器和代码编辑器">拼图编辑器和代码编辑器</RouterLink></li><li><RouterLink to="#执行选项卡">执行选项卡</RouterLink></li><li><RouterLink to="#跳转选项卡">跳转选项卡</RouterLink></li><li><RouterLink to="#选项卡内部变量">选项卡内部变量</RouterLink></li><li><RouterLink to="#跨选项卡通信">跨选项卡通信</RouterLink></li></ul></li></ul></nav>
<h2 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h2>
<p>选项卡区域位于编辑区和视图区的中间，它的右侧边缘是可拖拽的，用来改变两侧区域的大小。</p>
<p>选项卡可以作为一组实现特定功能的拼图或代码的容器。默认选项卡名称为<code v-pre>main</code>，是不可修改的。用户可以通过菜单栏-<code v-pre>下拉菜单</code>-<code v-pre>选项卡</code>下的命令菜单新建、删除、重命名选项卡。</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/tab-1.jpg" alt="tab-1"></p>
<h3 id="拼图编辑器和代码编辑器" tabindex="-1"><a class="header-anchor" href="#拼图编辑器和代码编辑器" aria-hidden="true">#</a> 拼图编辑器和代码编辑器</h3>
<p>点击选项卡区域中的<code v-pre>+</code>图标，可以打开<code v-pre>新建选项卡</code>对话框，通过<code v-pre>编辑器类型</code>可以创建拼图和代码2种类型的编辑器。</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/create-tab-dialog.jpg" alt="create-tab-dialog"></p>
<p>拼图编辑器是我们以后最常使用的编辑器。</p>
<p>在代码编辑器中，可以直接使用JavaScript进行编程，用于扩展拼图功能。它的默认代码会在场景中创建一个立方体：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 内置变量: BABYLON</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> engine<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> camera<span class="token punctuation">,</span> glob <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>apps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">createBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">'pbr'</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> mat<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行选项卡" tabindex="-1"><a class="header-anchor" href="#执行选项卡" aria-hidden="true">#</a> 执行选项卡</h3>
<p>选项卡中，除了默认的<code v-pre>main</code>选项卡是自动执行的，用户自行创建的选项卡需要使用<code v-pre>系统 System</code>分类下的<RouterLink to="/block3d/blocks-reference/system.html#execute-tab">excute_tab</RouterLink>拼图指定要执行的选项卡。这样做的好处是，用户可以完全控制选项卡的执行。</p>
<p><img src="https://cdn.zjbku.com/blocks/execute_tab.png" alt="execute_tab"></p>
<p>选项卡创建完成后，需要先保存，然后重新从系统分类下拖拽<RouterLink to="/block3d/blocks-reference/system.html#execute-tab">excute_tab</RouterLink>拼图，在拼图下拉菜单中才会出现新选项。</p>
<h3 id="跳转选项卡" tabindex="-1"><a class="header-anchor" href="#跳转选项卡" aria-hidden="true">#</a> 跳转选项卡</h3>
<p>我们注意到，选项卡的名称是竖排的，对于英文命名不方便阅读。解决这个问题两种操作：</p>
<ol>
<li>点击选项卡时，在底部状态栏会显示点击的选项卡名称</li>
<li>在<RouterLink to="/block3d/blocks-reference/system.html#execute-tab">excute_tab</RouterLink>拼图上使用快捷键<code v-pre>Tab</code>可以跳转到该拼图指定的选项卡；相反，使用快捷键<code v-pre>Shift</code> + <code v-pre>Tab</code>可以从选项卡返回<RouterLink to="/block3d/blocks-reference/system.html#execute-tab">excute_tab</RouterLink>拼图所在的选项卡</li>
</ol>
<p>除了使用快捷键跳转，通过<RouterLink to="/block3d/blocks-reference/system.html#execute-tab">excute_tab</RouterLink>拼图的右键菜单-<code v-pre>跳转选项卡</code>也可以实现跳转。</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/go-to-tab-menu.jpg" alt="go-to-tab-menu.jpg"></p>
<h3 id="选项卡内部变量" tabindex="-1"><a class="header-anchor" href="#选项卡内部变量" aria-hidden="true">#</a> 选项卡内部变量</h3>
<p>选项卡内部的变量是独立的。假如<code v-pre>main</code>选项卡中有一个变量<code v-pre>a</code>，<code v-pre>custom</code>选项卡中也有一个变量<code v-pre>a</code>，这两个变量各自独立，互不影响。</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/tab-variable-1.jpg" alt="tab-variable.jpg"></p>
<p>执行结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">'custom'</span>选项卡中的变量a
<span class="token string">'main'</span>选项卡中的变量a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这是同一个变量，在执行完<code v-pre>custom</code>选项卡后，变量<code v-pre>a</code>会被重新赋值，但是，结果变量<code v-pre>a</code>还是原来的值。说明这是两个不同的变量。</p>
<p>利用选项卡限制变量作用域带来两个好处：</p>
<ol>
<li>项目复杂，变量增加时，不用担心变量重名问题</li>
<li>可以实现跨项目复制拼图，只需将拼图复制到新建选项卡中，然后执行这个选项卡</li>
</ol>
<h3 id="跨选项卡通信" tabindex="-1"><a class="header-anchor" href="#跨选项卡通信" aria-hidden="true">#</a> 跨选项卡通信</h3>
<p>在一个选项卡中无法访问另一个选项卡中的变量，显然无法直接使用变量实现跨选项卡通信。解决的方法有两个：利用选项卡参数<RouterLink to="/block3d/blocks-reference/system.html#get-tab-arg">tab_arg</RouterLink>和全局对象<RouterLink to="/block3d/blocks-reference/system.html#set-get-glob-object">set_get_glob_object</RouterLink>。</p>
<h4 id="选项卡参数" tabindex="-1"><a class="header-anchor" href="#选项卡参数" aria-hidden="true">#</a> 选项卡参数</h4>
<p>选项卡参数可以像函数参数那样，在执行选项卡时向选项卡传递参数，使用系统分类中<RouterLink to="/block3d/blocks-reference/system.html#get-tab-arg">tab_arg</RouterLink>拼图，可以获取传进来的参数。</p>
<p>例如，我们要从<code v-pre>main</code>选项卡中，将变量<code v-pre>a</code>传递给<code v-pre>custom</code>选项卡：</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/tab-arg.jpg" alt="tab-arg.jpg"></p>
<p>结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">'main'</span>选项卡中的变量a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="全局对象" tabindex="-1"><a class="header-anchor" href="#全局对象" aria-hidden="true">#</a> 全局对象</h4>
<p>第2种方法是将值赋给全局对象<RouterLink to="/block3d/blocks-reference/system.html#set-get-glob-object">set_get_glob_object</RouterLink>，这样在其后任意选项卡中都能直接访问</p>
<p><img src="https://cdn.zjbku.com/diving-deeper/glob-obj.jpg" alt="glob-obj.jpg"></p>
<p>结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>全局对象a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
