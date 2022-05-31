<template><h1 id="系统-system" tabindex="-1"><a class="header-anchor" href="#系统-system" aria-hidden="true">#</a> 系统 System</h1>
<p>这类拼图涉及浏览器、编辑器层面的操作。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#console-log">console_log</RouterLink></li><li><RouterLink to="#window-alert">window_alert</RouterLink></li><li><RouterLink to="#text-prompt-ext">text_prompt_ext</RouterLink></li><li><RouterLink to="#execute-tab">execute_tab</RouterLink></li><li><RouterLink to="#get-tab-arg">get_tab_arg</RouterLink></li><li><RouterLink to="#get-function-by-name">get_function_by_name</RouterLink></li><li><RouterLink to="#set-get-glob-object">set_get_glob_object</RouterLink></li><li><RouterLink to="#set-get-local-storage-item">set_get_local_storage_item</RouterLink></li><li><RouterLink to="#local-storage-remove-item">local_storage_remove_item</RouterLink></li><li><RouterLink to="#advanced-comment">advanced_comment</RouterLink></li><li><RouterLink to="#advanced-connect">advanced_connect</RouterLink></li></ul></nav>
<h2 id="console-log" tabindex="-1"><a class="header-anchor" href="#console-log" aria-hidden="true">#</a> console_log</h2>
<p>向浏览器控制台或状态栏输出信息。多用于调试。</p>
<p><img src="https://cdn.zjbku.com/blocks/console_log.png" alt="console_log"></p>
<h2 id="window-alert" tabindex="-1"><a class="header-anchor" href="#window-alert" aria-hidden="true">#</a> window_alert</h2>
<p>创建弹出对话框。用于确认、提示等操作。会暂时挂起程序执行，直到用户确认。</p>
<p><img src="https://cdn.zjbku.com/blocks/window_alert.png" alt="window_alert"></p>
<h2 id="text-prompt-ext" tabindex="-1"><a class="header-anchor" href="#text-prompt-ext" aria-hidden="true">#</a> text_prompt_ext</h2>
<p>创建输入对话框。用于提交信息。会暂时挂起程序执行，直到用户确认。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_prompt_ext.png" alt="text_prompt_ext"></p>
<h2 id="execute-tab" tabindex="-1"><a class="header-anchor" href="#execute-tab" aria-hidden="true">#</a> execute_tab</h2>
<p>执行选项卡。Block3D编辑器支持创建多个选项卡，选项卡中的拼图和代码不会自动执行，需要使用此拼图指定。</p>
<p>只有编辑器中创建了新的选项卡，并且保存后，该拼图下拉菜单才会显示。</p>
<p><code v-pre>tab</code>参数可向选项卡传递参数，可以是任意类型：文本、数字、布尔、数组、对象。</p>
<p><img src="https://cdn.zjbku.com/blocks/execute_tab.png" alt="execute_tab"></p>
<h2 id="get-tab-arg" tabindex="-1"><a class="header-anchor" href="#get-tab-arg" aria-hidden="true">#</a> get_tab_arg</h2>
<p>用于接收<code v-pre>execute_tab</code>拼图传递的参数。该拼图无法在<code v-pre>main</code>选项卡中使用。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_tab_arg.png" alt="get_tab_arg"></p>
<p>在使用代码类型的编辑器时，可直接访问<code v-pre>tab_arg</code>获得参数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 代码编辑器</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tab_arg<span class="token punctuation">)</span> <span class="token comment">// execute_tab拼图参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-function-by-name" tabindex="-1"><a class="header-anchor" href="#get-function-by-name" aria-hidden="true">#</a> get_function_by_name</h2>
<p>获取函数分类中已经定义的函数。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_function_by_name.png" alt="get_function_by_name"></p>
<h2 id="set-get-glob-object" tabindex="-1"><a class="header-anchor" href="#set-get-glob-object" aria-hidden="true">#</a> set_get_glob_object</h2>
<p>这是一个全局对象，可用于不同选项卡之间传递参数。</p>
<p>注意，你需要先设置它的值，然后才能访问，否则会返回<code v-pre>undefined</code>。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_glob_object.png" alt="set_get_glob_object"></p>
<h2 id="set-get-local-storage-item" tabindex="-1"><a class="header-anchor" href="#set-get-local-storage-item" aria-hidden="true">#</a> set_get_local_storage_item</h2>
<p>用于设置和获取浏览器本地存储空间中的数据。</p>
<p>本地存储的值只支持文本（String）类型，如果要存储的数据为对象类型，需要使用<RouterLink to="/block3d/blocks-reference/object.html#convert-object-to-json">convert_object_to_json</RouterLink>拼图将其转换为JSON；相反，要访问一个JSON类型的本地存储，需要使用<RouterLink to="/block3d/blocks-reference/object.html#convert-json-to-object">convert_json_to_object</RouterLink>拼图将其转换为对象。</p>
<p><img src="https://cdn.zjbku.com/blocks/local_storage_set_get_item.png" alt="set_get_local_storage_item"></p>
<p>查看本地存储，可在浏览器中通过快捷键<code v-pre>Ctrl</code> + <code v-pre>Shift</code> + <code v-pre>I</code> 或 <code v-pre>F12</code>打开开发者工具，切换到<code v-pre>应用</code>选项卡，点击左侧<code v-pre>本地存储空间</code>。</p>
<p><img src="https://cdn.zjbku.com/blocks/localstorage.jpg" alt="localstorage"></p>
<h2 id="local-storage-remove-item" tabindex="-1"><a class="header-anchor" href="#local-storage-remove-item" aria-hidden="true">#</a> local_storage_remove_item</h2>
<p>从本地存储中移除元素。</p>
<p><img src="https://cdn.zjbku.com/blocks/local_storage_remove_item.png" alt="local_storage_remove_item"></p>
<h2 id="advanced-comment" tabindex="-1"><a class="header-anchor" href="#advanced-comment" aria-hidden="true">#</a> advanced_comment</h2>
<p>用于添加单行注释。</p>
<p><img src="https://cdn.zjbku.com/blocks/advanced_comment.png" alt="advanced_comment"></p>
<h2 id="advanced-connect" tabindex="-1"><a class="header-anchor" href="#advanced-connect" aria-hidden="true">#</a> advanced_connect</h2>
<p>用于连接带返回值的拼图。该拼图不会产生任何代码，仅用于连接，以方便整体操作拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/advanced_connect.png" alt="advanced_connect"></p>
</template>
