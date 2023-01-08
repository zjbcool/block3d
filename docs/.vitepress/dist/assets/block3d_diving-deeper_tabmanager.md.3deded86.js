import{_ as s,c as e,o as a,a as n}from"./app.a8a600a6.js";const F=JSON.parse('{"title":"选项卡","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":2,"title":"拼图编辑器和代码编辑器","slug":"拼图编辑器和代码编辑器","link":"#拼图编辑器和代码编辑器","children":[]},{"level":2,"title":"执行选项卡","slug":"执行选项卡","link":"#执行选项卡","children":[]},{"level":2,"title":"跳转选项卡","slug":"跳转选项卡","link":"#跳转选项卡","children":[]},{"level":2,"title":"选项卡内部变量","slug":"选项卡内部变量","link":"#选项卡内部变量","children":[]},{"level":2,"title":"跨选项卡通信","slug":"跨选项卡通信","link":"#跨选项卡通信","children":[{"level":3,"title":"选项卡参数","slug":"选项卡参数","link":"#选项卡参数","children":[]},{"level":3,"title":"全局对象","slug":"全局对象","link":"#全局对象","children":[]}]}],"relativePath":"block3d/diving-deeper/tabmanager.md"}'),l={name:"block3d/diving-deeper/tabmanager.md"},o=n(`<h1 id="选项卡" tabindex="-1">选项卡 <a class="header-anchor" href="#选项卡" aria-hidden="true">#</a></h1><p>选项卡区域位于编辑区和视图区的中间，它的右侧边缘是可拖拽的，用来改变两侧区域的大小。</p><p>选项卡可以作为一组实现特定功能的拼图或代码的容器，允许嵌套。</p><h2 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-hidden="true">#</a></h2><p>除了默认选项卡<code>main</code>是不可修改的，用户可以通过菜单栏-<code>下拉菜单</code>-<code>选项卡</code>下的命令对选项卡执行新建、删除、重命名操作。</p><p>还可以通过选项卡下方的<code>+</code> <code>-</code>按钮，执行新建和删除操作。</p><p><img src="https://cdn.zjbku.com/diving-deeper/tab-1.jpg" alt="tab-1"></p><h2 id="拼图编辑器和代码编辑器" tabindex="-1">拼图编辑器和代码编辑器 <a class="header-anchor" href="#拼图编辑器和代码编辑器" aria-hidden="true">#</a></h2><p>点击选项卡下方的<code>+</code>按钮，打开<code>新建选项卡</code>对话框，在<code>编辑器类型</code>中有拼图和代码2种类型的编辑器可选。</p><p><img src="https://cdn.zjbku.com/diving-deeper/create-tab-dialog.jpg" alt="create-tab-dialog"></p><p>拼图编辑器是我们以后最常使用的编辑器。如果没有特别说明，编辑器就是指拼图编辑器。</p><p>在代码编辑器中，可以直接使用JavaScript进行编程，用于扩展拼图功能。它的默认代码会在场景中创建一个立方体：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 内置变量: BABYLON</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> engine</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> camera</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> glob </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> BABYLON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apps[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createBox</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mesh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BABYLON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MeshBuilder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CreateBox</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scene</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BABYLON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PBRMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pbr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scene</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">material</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">createBox</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="执行选项卡" tabindex="-1">执行选项卡 <a class="header-anchor" href="#执行选项卡" aria-hidden="true">#</a></h2><p>选项卡中，除了默认的<code>main</code>选项卡是自动执行的，用户自行创建的选项卡需要使用<code>系统 System</code>分类下的<a href="./../blocks-reference/system.html#exec-tab">exec_tab</a>拼图指定要执行的选项卡。这样做的好处是，用户可以完全控制选项卡的执行时机。</p><p><img src="https://cdn.zjbku.com/diving-deeper/exec-tab-min.jpg" alt="execute_tab"></p><p>使用<a href="./../blocks-reference/system.html#return-tab-result">返回选项卡结果 return_tab_result</a>拼图可以从<code>main</code>以外的选项卡内部返回一个值。</p><h2 id="跳转选项卡" tabindex="-1">跳转选项卡 <a class="header-anchor" href="#跳转选项卡" aria-hidden="true">#</a></h2><p>我们注意到，选项卡的名称是竖排的，对于英文命名不方便阅读。解决这个问题两种操作：</p><ol><li>点击选项卡时，在底部状态栏会显示点击的选项卡名称</li><li>在<a href="./../blocks-reference/system.html#exec-tab">exec_tab</a>拼图上使用快捷键<code>Tab</code>可以跳转到该拼图指定的选项卡；使用快捷键<code>Shift</code> + <code>Tab</code>可以从任意选项卡返回<code>main</code>选项卡</li></ol><p>除了使用快捷键，通过<a href="./../blocks-reference/system.html#exec-tab">exec_tab</a>拼图的右键菜单-<code>跳转选项卡</code>也可以实现跳转。</p><h2 id="选项卡内部变量" tabindex="-1">选项卡内部变量 <a class="header-anchor" href="#选项卡内部变量" aria-hidden="true">#</a></h2><p>选项卡内部的变量是独立的。假如<code>main</code>选项卡中有一个变量<code>a</code>，<code>custom</code>选项卡中也有一个变量<code>a</code>，这两个变量各自独立，互不影响。</p><p>利用选项卡限制变量作用域带来两个好处：</p><ol><li>项目复杂，变量增加时，不用担心变量重名问题</li><li>可以安全实现跨项目复制拼图，只需将拼图复制到新建选项卡中，然后执行这个选项卡</li></ol><h2 id="跨选项卡通信" tabindex="-1">跨选项卡通信 <a class="header-anchor" href="#跨选项卡通信" aria-hidden="true">#</a></h2><p>在一个选项卡中无法访问另一个选项卡中的变量，显然无法直接使用变量实现跨选项卡通信。解决的方法有两个：利用选项卡参数<a href="./../blocks-reference/system.html#get-tab-arg">tab_arg</a>和全局对象<a href="./../blocks-reference/system.html#set-get-glob-object">set_get_glob_object</a>。</p><h3 id="选项卡参数" tabindex="-1">选项卡参数 <a class="header-anchor" href="#选项卡参数" aria-hidden="true">#</a></h3><p>选项卡参数可以像函数参数那样，在执行选项卡时向选项卡传递参数，使用系统分类中<a href="./../blocks-reference/system.html#get-tab-arg">tab_arg</a>拼图，可以获取传进来的参数。</p><h3 id="全局对象" tabindex="-1">全局对象 <a class="header-anchor" href="#全局对象" aria-hidden="true">#</a></h3><p>第2种方法是将值赋给全局对象<a href="./../blocks-reference/system.html#set-get-glob-object">set_get_glob_object</a>，这样在其后任意选项卡中都能直接访问。</p>`,31),p=[o];function c(t,r,d,i,y,h){return a(),e("div",null,p)}const A=s(l,[["render",c]]);export{F as __pageData,A as default};
