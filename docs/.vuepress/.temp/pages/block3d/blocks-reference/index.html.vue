<template><h1 id="拼图参考" tabindex="-1"><a class="header-anchor" href="#拼图参考" aria-hidden="true">#</a> 拼图参考</h1>
<p>拼图系统是Block3D可视化编程的特色，它是帮助3D设计师实现交互的主要方式。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#拼图是什么">拼图是什么？</RouterLink></li><li><RouterLink to="#拼图分类">拼图分类</RouterLink></li><li><RouterLink to="#如何创建拼图">如何创建拼图？</RouterLink></li><li><RouterLink to="#拼图常用操作">拼图常用操作</RouterLink><ul><li><RouterLink to="#拼图快捷菜单">拼图快捷菜单</RouterLink></li><li><RouterLink to="#工作区快捷菜单">工作区快捷菜单</RouterLink></li></ul></li><li><RouterLink to="#拼图设计理念">拼图设计理念</RouterLink></li></ul></nav>
<h2 id="拼图是什么" tabindex="-1"><a class="header-anchor" href="#拼图是什么" aria-hidden="true">#</a> 拼图是什么？</h2>
<p>拼图是图形化的代码片段。用户只需控制拼图上的各种组件（值、单选框、下拉菜单、扩展选项等）来定义拼图的功能，然后通过插槽与其它拼图结合，从而实现复杂的编程。</p>
<p><img src="https://cdn.zjbku.com/blocks/scene_assets_manager_1.png" alt="scene_assets_manager_1"></p>
<h2 id="拼图分类" tabindex="-1"><a class="header-anchor" href="#拼图分类" aria-hidden="true">#</a> 拼图分类</h2>
<p>Block3D的拼图分为三类：</p>
<ul>
<li>基础拼图 - 基础编程功能</li>
<li>核心拼图 - 核心功能</li>
<li>扩展拼图 - 依赖额外JS库的扩展功能</li>
</ul>
<p>下图是分类图标与名称对照表：</p>
<p><img src="https://cdn.zjbku.com/start/category.jpg" alt="category"></p>
<h2 id="如何创建拼图" tabindex="-1"><a class="header-anchor" href="#如何创建拼图" aria-hidden="true">#</a> 如何创建拼图？</h2>
<p>要创建或者使用拼图有以下几种方式：</p>
<ol>
<li>从工具栏拼图分类中拖拽一个拼图到工作区</li>
<li>使用<RouterLink to="/block3d/diving-deeper/shortcuts.html">快捷键</RouterLink>创建拼图，例如<code v-pre>Shift + T</code>创建文本拼图</li>
<li>从另外一个打开的项目中复制拼图，方法是在选中的拼图上<code v-pre>右键</code>-<code v-pre>复制</code>，然后在当前项目的工作区中<code v-pre>右键</code>-<code v-pre>粘贴</code></li>
<li>通过<code v-pre>菜单</code>-<code v-pre>查找拼图</code>（快捷键<code v-pre>Ctrl+Shift+F</code>），在打开的搜索框中输入拼图的名称，使用方向键选中拼图，按下回车键即可完成创建</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">技巧</p>
<p>拼图的名称由一些通过下划线连接的关键词组成，在使用<code v-pre>查找拼图</code>时，输入关键词可以快速查找。多个关键词要以空格分开。</p>
<p>在拼图的右键菜单中，通过<code v-pre>打印拼图名称</code>可以将拼图名称打印到底部状态栏查看。</p>
</div>
<p><img src="https://cdn.zjbku.com/blocks/search-block.png" alt="search-block"></p>
<h2 id="拼图常用操作" tabindex="-1"><a class="header-anchor" href="#拼图常用操作" aria-hidden="true">#</a> 拼图常用操作</h2>
<h3 id="拼图快捷菜单" tabindex="-1"><a class="header-anchor" href="#拼图快捷菜单" aria-hidden="true">#</a> 拼图快捷菜单</h3>
<p>拼图右键</p>
<p><img src="https://cdn.zjbku.com/blocks/context-menu.png" alt="context-menu"></p>
<h3 id="工作区快捷菜单" tabindex="-1"><a class="header-anchor" href="#工作区快捷菜单" aria-hidden="true">#</a> 工作区快捷菜单</h3>
<p>工作区空白处右键</p>
<p><img src="https://cdn.zjbku.com/blocks/context-menu-1.png" alt="context-menu-1"></p>
<h2 id="拼图设计理念" tabindex="-1"><a class="header-anchor" href="#拼图设计理念" aria-hidden="true">#</a> 拼图设计理念</h2>
<p>Block3D的拼图系统遵循面向对象的编程理念，这比较符合人类的思维习惯。对象可以看成是属性和方法的集合，我们要实现某个功能，首先要创建相应的对象，然后根据需要设置或获取它的属性，再通过调用它自带的某些方法，达到编程的目的。</p>
<p>举个例子，以下拼图创建了一个立方体，并让它可拖拽</p>
<p><img src="https://cdn.zjbku.com/blocks/blocks-example.png" alt="blocks-example"></p>
<p>实现过程：</p>
<ul>
<li>第一步，创建大小为2的立方体对象</li>
<li>第二步，设置立方体位置属性的y值为1</li>
<li>第三步，调用立方体的drag方法，设置沿Y轴拖拽</li>
</ul>
<p>在Block3D中一切皆对象，任何对象都有属性和方法。</p>
<p>接下来，开始你的探索吧！</p>
</template>
