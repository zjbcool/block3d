import{_ as e,c as a,o as l,a as d}from"./app.7818b0d9.js";const k=JSON.parse('{"title":"调参 TweakPane","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建面板 create_tweak_pane","slug":"create-tweak-pane","link":"#create-tweak-pane","children":[]},{"level":2,"title":"添加卷展栏 pane_add_folder","slug":"pane-add-folder","link":"#pane-add-folder","children":[]},{"level":2,"title":"添加滑块 pane_add_slider","slug":"pane-add-slider","link":"#pane-add-slider","children":[]},{"level":2,"title":"添加下拉列表 pane_add_list","slug":"pane-add-list","link":"#pane-add-list","children":[]},{"level":2,"title":"添加单选框 pane_add_checkbox","slug":"pane-add-checkbox","link":"#pane-add-checkbox","children":[]},{"level":2,"title":"添加文本 pane_add_text","slug":"pane-add-text","link":"#pane-add-text","children":[]},{"level":2,"title":"添加拾色器 pane_add_color","slug":"pane-add-color","link":"#pane-add-color","children":[]},{"level":2,"title":"添加按钮 pane_add_button","slug":"pane-add-button","link":"#pane-add-button","children":[]},{"level":2,"title":"获取控件值 pane_get_value","slug":"pane-get-value","link":"#pane-get-value","children":[]}],"relativePath":"block3d/blocks-reference/tweakpane.md"}'),i={name:"block3d/blocks-reference/tweakpane.md"},n=d('<h1 id="调参-tweakpane" tabindex="-1">调参 TweakPane <a class="header-anchor" href="#调参-tweakpane" aria-hidden="true">#</a></h1><p>该分类拼图用于实现参数调试面板，虽然Block3D内置的场景查看器具备调参功能，但是有时你可能也会需要可订制的参数面板。</p><nav class="table-of-contents"><ul><li><a href="#create-tweak-pane">创建面板 create_tweak_pane</a></li><li><a href="#pane-add-folder">添加卷展栏 pane_add_folder</a></li><li><a href="#pane-add-slider">添加滑块 pane_add_slider</a></li><li><a href="#pane-add-list">添加下拉列表 pane_add_list</a></li><li><a href="#pane-add-checkbox">添加单选框 pane_add_checkbox</a></li><li><a href="#pane-add-text">添加文本 pane_add_text</a></li><li><a href="#pane-add-color">添加拾色器 pane_add_color</a></li><li><a href="#pane-add-button">添加按钮 pane_add_button</a></li><li><a href="#pane-get-value">获取控件值 pane_get_value</a></li></ul></nav><h2 id="create-tweak-pane" tabindex="-1">创建面板 create_tweak_pane <a class="header-anchor" href="#create-tweak-pane" aria-hidden="true">#</a></h2><p>创建面板。</p><p>参数：</p><ul><li>标题 - 显示的标题</li><li>选项 - 接收一个对象，可控制面板距离浏览器窗口上、左、右的距离</li></ul><h2 id="pane-add-folder" tabindex="-1">添加卷展栏 pane_add_folder <a class="header-anchor" href="#pane-add-folder" aria-hidden="true">#</a></h2><p>在面板上添加折叠菜单，用于管理控件。参数<code>标签</code>为面板标题，可以为空。</p><h2 id="pane-add-slider" tabindex="-1">添加滑块 pane_add_slider <a class="header-anchor" href="#pane-add-slider" aria-hidden="true">#</a></h2><p>添加滑块控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 该控件的标签名</li><li>选项 - 滑块参数，接收一个对象参数，通过拼图右键菜单的<code>创建 选项</code>可创建选项拼图 <ul><li>最小值</li><li>最大值</li><li>步进值</li><li>值 - 默认值</li></ul></li><li>当改变时 - 当控件的值发生改变时，执行该插槽中的拼图</li></ul><h2 id="pane-add-list" tabindex="-1">添加下拉列表 pane_add_list <a class="header-anchor" href="#pane-add-list" aria-hidden="true">#</a></h2><p>添加下拉菜单控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 该控件的标签名</li><li>选项 - 菜单项，接收一个对象参数，<code>键</code>为菜单选项，<code>值</code>为该选项的值</li><li>当改变时 - 当控件的值发生改变时，执行该插槽中的拼图</li></ul><h2 id="pane-add-checkbox" tabindex="-1">添加单选框 pane_add_checkbox <a class="header-anchor" href="#pane-add-checkbox" aria-hidden="true">#</a></h2><p>添加单选框控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 该控件的标签名</li><li>勾选 - 单选框默认值</li><li>当改变时 - 当控件的值发生改变时，执行该插槽中的拼图</li></ul><h2 id="pane-add-text" tabindex="-1">添加文本 pane_add_text <a class="header-anchor" href="#pane-add-text" aria-hidden="true">#</a></h2><p>添加文本控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 该控件的标签名</li><li>文本 - 文本内容</li><li>当改变时 - 当控件的值发生改变时，执行该插槽中的拼图</li></ul><h2 id="pane-add-color" tabindex="-1">添加拾色器 pane_add_color <a class="header-anchor" href="#pane-add-color" aria-hidden="true">#</a></h2><p>添加拾色器控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 该控件的标签名</li><li>hex - 默认的16进制颜色值</li><li>当改变时 - 当控件的值发生改变时，执行该插槽中的拼图</li></ul><h2 id="pane-add-button" tabindex="-1">添加按钮 pane_add_button <a class="header-anchor" href="#pane-add-button" aria-hidden="true">#</a></h2><p>添加按钮控件。</p><p>参数：</p><ul><li>到 - 用于指定折叠菜单，可以为空</li><li>标签 - 按钮名称</li><li>当点击时 - 当触发按钮时，执行该插槽中的拼图</li></ul><h2 id="pane-get-value" tabindex="-1">获取控件值 pane_get_value <a class="header-anchor" href="#pane-get-value" aria-hidden="true">#</a></h2><p>获取控件的值。</p>',35),t=[n];function r(p,c,h,o,_,s){return l(),a("div",null,t)}const f=e(i,[["render",r]]);export{k as __pageData,f as default};