<template><h1 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array" aria-hidden="true">#</a> 数组 Array</h1>
<p>这类拼图用于创建和操作<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">数组Array<ExternalLinkIcon/></a>。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#array-create">array_create</RouterLink></li><li><RouterLink to="#array-repeat">array_repeat</RouterLink></li><li><RouterLink to="#array-length">array_length</RouterLink></li><li><RouterLink to="#array-is-empty">array_is_empty</RouterLink></li><li><RouterLink to="#array-index-of">array_index_of</RouterLink></li><li><RouterLink to="#array-includes">array_includes</RouterLink></li><li><RouterLink to="#array-get-index">array_get_index</RouterLink></li><li><RouterLink to="#array-set-index">array_set_index</RouterLink></li><li><RouterLink to="#array-get-sublist">array_get_sublist</RouterLink></li><li><RouterLink to="#array-split">array_split</RouterLink></li><li><RouterLink to="#array-sort">array_sort</RouterLink></li><li><RouterLink to="#array-reverse">array_reverse</RouterLink></li><li><RouterLink to="#array-for-each">array_for_each</RouterLink></li></ul></nav>
<h2 id="array-create" tabindex="-1"><a class="header-anchor" href="#array-create" aria-hidden="true">#</a> array_create</h2>
<p>创建新数组。快捷键：<code v-pre>Shift</code> + <code v-pre>A</code></p>
<p>默认会创建一个空数组，要向数组中添加元素，请执行以下操作：</p>
<ol>
<li>取消勾选 <code v-pre>isEmpty</code></li>
<li>在拼图上执行右键-<code v-pre>创建element</code></li>
<li>将新创建的<code v-pre>element</code>拼图拖入<code v-pre>array_create</code>拼图，并将要添加到这个数组的元素连接到<code v-pre>element</code>拼图上</li>
</ol>
<p><code v-pre>element</code>拼图只能应用于<code v-pre>array_create</code>拼图内部。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_create.png" alt="array_create"></p>
<h2 id="array-repeat" tabindex="-1"><a class="header-anchor" href="#array-repeat" aria-hidden="true">#</a> array_repeat</h2>
<p>创建一个新的数组，其所有成员都是同一个元素。</p>
<p>参数：</p>
<ul>
<li>item - 要添加进数组的元素</li>
<li>repeated - 数组的长度</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_repeat.png" alt="array_repeat"></p>
<h2 id="array-length" tabindex="-1"><a class="header-anchor" href="#array-length" aria-hidden="true">#</a> array_length</h2>
<p>返回一个数组的长度。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_length.png" alt="array_length"></p>
<h2 id="array-is-empty" tabindex="-1"><a class="header-anchor" href="#array-is-empty" aria-hidden="true">#</a> array_is_empty</h2>
<p>判断一个数组是否为空，若为空返回<code v-pre>true</code>；否则返回<code v-pre>false</code></p>
<p><img src="https://cdn.zjbku.com/blocks/array_is_empty.png" alt="array_is_empty"></p>
<h2 id="array-index-of" tabindex="-1"><a class="header-anchor" href="#array-index-of" aria-hidden="true">#</a> array_index_of</h2>
<p>检查数组中是否包含某元素，如果包含，则返回其索引（数组中元素的索引从0开始）；否则返回-1。</p>
<p>参数：</p>
<ul>
<li>first - 表示从前往后查找</li>
<li>last - 表示从后往前查找</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_index_of.png" alt="array_index_of"></p>
<h2 id="array-includes" tabindex="-1"><a class="header-anchor" href="#array-includes" aria-hidden="true">#</a> array_includes</h2>
<p>检查数组中是否包含某元素，若包含，返回<code v-pre>true</code>；否则返回<code v-pre>false</code>。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_includes.png" alt="array_includes"></p>
<h2 id="array-get-index" tabindex="-1"><a class="header-anchor" href="#array-get-index" aria-hidden="true">#</a> array_get_index</h2>
<p>从指定位置查找或删除元素（数组中的元素从0开始索引）。</p>
<p>参数：</p>
<ul>
<li>get - 查找元素，返回元素索引</li>
<li>get and remove - 查找并删除元素，返回删除元素的索引</li>
<li>remove - 删除元素</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_get_index.png" alt="array_get_index"></p>
<h2 id="array-set-index" tabindex="-1"><a class="header-anchor" href="#array-set-index" aria-hidden="true">#</a> array_set_index</h2>
<p>将元素添加到数组中。</p>
<p>参数：</p>
<ul>
<li>set - 将数组中指定位置的元素替换为其他元素（数组的长度保持不变）</li>
<li>insert - 在指定的位置向数组中添加一个新元素，将移动先前位于该位置的元素（增加数组的长度）</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_set_index.png" alt="array_set_index"></p>
<h2 id="array-get-sublist" tabindex="-1"><a class="header-anchor" href="#array-get-sublist" aria-hidden="true">#</a> array_get_sublist</h2>
<p>截取两个指定位置之间的数组片段为新数组。不会更改原始数组。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_get_sublist.png" alt="array_get_sublist"></p>
<h2 id="array-split" tabindex="-1"><a class="header-anchor" href="#array-split" aria-hidden="true">#</a> array_split</h2>
<p>通过拆分文本来创建一个数组，或者相反，将数组的元素连接成文本。</p>
<p>参数：</p>
<ul>
<li>delimiter - 分割符号</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_split.png" alt="array_split"></p>
<h2 id="array-sort" tabindex="-1"><a class="header-anchor" href="#array-sort" aria-hidden="true">#</a> array_sort</h2>
<p>从原始数组创建一个新的数组，其中的元素按升序或降序排序。不会改变原始数组。</p>
<p>参数：</p>
<ul>
<li>numeric - 按数字大小排序</li>
<li>alphabetic - 按字母顺序排序</li>
<li>alphabetic,ignore case - 按字母排序，不区分大小写</li>
<li>ascending - 升序</li>
<li>descending - 降序</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/array_sort.png" alt="array_sort"></p>
<h2 id="array-reverse" tabindex="-1"><a class="header-anchor" href="#array-reverse" aria-hidden="true">#</a> array_reverse</h2>
<p>从原始数组创建一个新数组，其元素按照与原始数组相反顺序排列。不会改变原始数组。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_reverse.png" alt="array_reverse"></p>
<h2 id="array-for-each" tabindex="-1"><a class="header-anchor" href="#array-for-each" aria-hidden="true">#</a> array_for_each</h2>
<p>遍历数组。在拼图上执行右键-<code v-pre>创建element/index</code>，可创建每次迭代的元素和索引，注意，它只能用于<code v-pre>array_for_each</code>拼图内部。</p>
<p><img src="https://cdn.zjbku.com/blocks/array_for_each.png" alt="array_for_each"></p>
</template>
