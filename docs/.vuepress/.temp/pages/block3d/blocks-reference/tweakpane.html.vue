<template><h1 id="tweakpane" tabindex="-1"><a class="header-anchor" href="#tweakpane" aria-hidden="true">#</a> TweakPane</h1>
<p>该分类拼图用于实现参数调试面板，虽然Block3D内置的场景查看器具备调参功能，但是有时你可能也会需要可订制的参数面板。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#create-tweak-pane">create_tweak_pane</RouterLink></li><li><RouterLink to="#pane-add-folder">pane_add_folder</RouterLink></li><li><RouterLink to="#pane-add-slider">pane_add_slider</RouterLink></li><li><RouterLink to="#pane-add-list">pane_add_list</RouterLink></li><li><RouterLink to="#pane-add-checkbox">pane_add_checkbox</RouterLink></li><li><RouterLink to="#pane-add-text">pane_add_text</RouterLink></li><li><RouterLink to="#pane-add-color">pane_add_color</RouterLink></li><li><RouterLink to="#pane-add-button">pane_add_button</RouterLink></li><li><RouterLink to="#pane-get-value">pane_get_value</RouterLink></li></ul></nav>
<h2 id="create-tweak-pane" tabindex="-1"><a class="header-anchor" href="#create-tweak-pane" aria-hidden="true">#</a> create_tweak_pane</h2>
<p>创建面板。参数<code v-pre>title</code>为面板标题，可以为空。只能创建一个面板。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_tweak_pane.png" alt="create_tweak_pane"></p>
<h2 id="pane-add-folder" tabindex="-1"><a class="header-anchor" href="#pane-add-folder" aria-hidden="true">#</a> pane_add_folder</h2>
<p>在面板上添加折叠菜单，用于管理控件。参数<code v-pre>title</code>为面板标题，可以为空。</p>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_folder.png" alt="pane_add_folder"></p>
<h2 id="pane-add-slider" tabindex="-1"><a class="header-anchor" href="#pane-add-slider" aria-hidden="true">#</a> pane_add_slider</h2>
<p>添加滑块控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>label - 该控件的标签名</li>
<li>options - 滑块参数，接收一个对象参数，通过拼图右键菜单的<code v-pre>创建 option</code>可创建选项拼图
<ul>
<li>main - 最小值</li>
<li>max - 最大值</li>
<li>step - 步进值</li>
<li>value - 默认值</li>
</ul>
</li>
<li>onChange - 当控件的值发生改变时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_slider.png" alt="pane_add_slider"></p>
<h2 id="pane-add-list" tabindex="-1"><a class="header-anchor" href="#pane-add-list" aria-hidden="true">#</a> pane_add_list</h2>
<p>添加下拉菜单控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>label - 该控件的标签名</li>
<li>options - 菜单项，接收一个对象参数，<code v-pre>key</code>为菜单选项，<code v-pre>value</code>为该选项的值</li>
<li>onChange - 当控件的值发生改变时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_list.png" alt="pane_add_list"></p>
<h2 id="pane-add-checkbox" tabindex="-1"><a class="header-anchor" href="#pane-add-checkbox" aria-hidden="true">#</a> pane_add_checkbox</h2>
<p>添加单选框控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>label - 该控件的标签名</li>
<li>checked - 单选框默认值</li>
<li>onChange - 当控件的值发生改变时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_checkbox.png" alt="pane_add_checkbox"></p>
<h2 id="pane-add-text" tabindex="-1"><a class="header-anchor" href="#pane-add-text" aria-hidden="true">#</a> pane_add_text</h2>
<p>添加文本控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>label - 该控件的标签名</li>
<li>text - 文本内容</li>
<li>onChange - 当控件的值发生改变时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_text.png" alt="pane_add_text"></p>
<h2 id="pane-add-color" tabindex="-1"><a class="header-anchor" href="#pane-add-color" aria-hidden="true">#</a> pane_add_color</h2>
<p>添加拾色器控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>label - 该控件的标签名</li>
<li>hex - 默认的16进制颜色值</li>
<li>onChange - 当控件的值发生改变时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_color.png" alt="pane_add_color"></p>
<h2 id="pane-add-button" tabindex="-1"><a class="header-anchor" href="#pane-add-button" aria-hidden="true">#</a> pane_add_button</h2>
<p>添加按钮控件。</p>
<p>参数：</p>
<ul>
<li>to - 用于指定折叠菜单，可以为空</li>
<li>title - 按钮名称</li>
<li>onClick - 当触发按钮时，执行该插槽中的拼图</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/pane_add_button.png" alt="pane_add_button"></p>
<h2 id="pane-get-value" tabindex="-1"><a class="header-anchor" href="#pane-get-value" aria-hidden="true">#</a> pane_get_value</h2>
<p>获取控件的值。</p>
<p><img src="https://cdn.zjbku.com/blocks/pane_get_value.png" alt="pane_get_value"></p>
</template>
