<template><h1 id="文本-text" tabindex="-1"><a class="header-anchor" href="#文本-text" aria-hidden="true">#</a> 文本 Text</h1>
<p>这类拼图用于创建和操作字符串。常见于对象的名称、字符串类型的值，这类拼图可以实现对字符串进行增、删、改、查操作，是经常使用的一类拼图。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#text">text</RouterLink></li><li><RouterLink to="#text-multiline">text_multiline</RouterLink></li><li><RouterLink to="#text-join">text_join</RouterLink></li><li><RouterLink to="#text-append">text_append</RouterLink></li><li><RouterLink to="#text-length">text_length</RouterLink></li><li><RouterLink to="#text-isempty">text_isEmpty</RouterLink></li><li><RouterLink to="#text-charat">text_charAt</RouterLink></li><li><RouterLink to="#text-indexof">text_indexOf</RouterLink></li><li><RouterLink to="#text-getsubstring">text_getSubstring</RouterLink></li><li><RouterLink to="#text-changecase">text_changeCase</RouterLink></li><li><RouterLink to="#text-trim">text_trim</RouterLink></li><li><RouterLink to="#text-count">text_count</RouterLink></li><li><RouterLink to="#text-replace">text_replace</RouterLink></li><li><RouterLink to="#text-reverse">text_reverse</RouterLink></li></ul></nav>
<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2>
<p>创建文本。快捷键：<code v-pre>Shift</code> + <code v-pre>T</code></p>
<p><img src="https://cdn.zjbku.com/blocks/text.png" alt="text"></p>
<h2 id="text-multiline" tabindex="-1"><a class="header-anchor" href="#text-multiline" aria-hidden="true">#</a> text_multiline</h2>
<p>创建多行文本。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_multiline.png" alt="text_multiline"></p>
<h2 id="text-join" tabindex="-1"><a class="header-anchor" href="#text-join" aria-hidden="true">#</a> text_join</h2>
<p>这个拼图可以将两个或更多文本元素连接成一行。通过该拼图右键-创建element，创建和添加文本元素。如果输入了非文本，例如数字，它们将自动转换为文本。</p>
<p><img src="https://cdn.zjbku.com/blocks/string_join.png" alt="text_join"></p>
<p>要增加元素，只需要在该拼图上右键，从弹出的菜单中选中“创建 element”，然后将要连接的元素连接到创建出来的element拼图即可。</p>
<p><img src="https://cdn.zjbku.com/blocks/string_join_1.png" alt="string_join_1"></p>
<h2 id="text-append" tabindex="-1"><a class="header-anchor" href="#text-append" aria-hidden="true">#</a> text_append</h2>
<p>在一个文本的末尾追加一个文本。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_append.png" alt="text_append"></p>
<h2 id="text-length" tabindex="-1"><a class="header-anchor" href="#text-length" aria-hidden="true">#</a> text_length</h2>
<p>返回文本的长度。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_length.png" alt="text_length"></p>
<h2 id="text-isempty" tabindex="-1"><a class="header-anchor" href="#text-isempty" aria-hidden="true">#</a> text_isEmpty</h2>
<p>判断文本是否为空，如果为空，返回false，否则返回true。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_isEmpty.png" alt="text_isEmpty"></p>
<h2 id="text-charat" tabindex="-1"><a class="header-anchor" href="#text-charat" aria-hidden="true">#</a> text_charAt</h2>
<p>判断一个文本是否存在于另一个文本中，如果存在返回它的位置（从0开始的索引）。如果不存在，返回-1。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_charAt.png" alt="text_charAt"></p>
<h2 id="text-indexof" tabindex="-1"><a class="header-anchor" href="#text-indexof" aria-hidden="true">#</a> text_indexOf</h2>
<p>从指定的索引位置获取字符（文本中的字符从0开始索引）。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_indexOf.png" alt="text_indexOf"></p>
<h2 id="text-getsubstring" tabindex="-1"><a class="header-anchor" href="#text-getsubstring" aria-hidden="true">#</a> text_getSubstring</h2>
<p>从两个指定的位置之间提取文本片段（文本中的字符从0开始索引）。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_getSubstring.png" alt="text_getSubstring"></p>
<h2 id="text-changecase" tabindex="-1"><a class="header-anchor" href="#text-changecase" aria-hidden="true">#</a> text_changeCase</h2>
<p>改变文本的大小写。非字母字符和不带大小写的语言文本（如中文）不受影响。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_changeCase.png" alt="text_changeCase"></p>
<h2 id="text-trim" tabindex="-1"><a class="header-anchor" href="#text-trim" aria-hidden="true">#</a> text_trim</h2>
<p>删除文本中的空格，可以从文本的开头、结尾或两边删除。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_trim.png" alt="text_trim"></p>
<h2 id="text-count" tabindex="-1"><a class="header-anchor" href="#text-count" aria-hidden="true">#</a> text_count</h2>
<p>计算某个文本在指定文本中出现的次数。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_count.png" alt="text_count"></p>
<h2 id="text-replace" tabindex="-1"><a class="header-anchor" href="#text-replace" aria-hidden="true">#</a> text_replace</h2>
<p>查找文本，并在找到的地方用指定文本替换它（区分大小写）。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_replace.png" alt="text_replace"></p>
<h2 id="text-reverse" tabindex="-1"><a class="header-anchor" href="#text-reverse" aria-hidden="true">#</a> text_reverse</h2>
<p>对文本执行反转操作。</p>
<p><img src="https://cdn.zjbku.com/blocks/text_reverse.png" alt="text_reverse"></p>
</template>
