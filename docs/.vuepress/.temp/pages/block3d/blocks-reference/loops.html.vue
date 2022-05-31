<template><h1 id="循环-loops" tabindex="-1"><a class="header-anchor" href="#循环-loops" aria-hidden="true">#</a> 循环 Loops</h1>
<p>这类拼图用于执行循环操作。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#controls-repeat-ext">controls_repeat_ext</RouterLink></li><li><RouterLink to="#controls-whileuntil">controls_whileUntil</RouterLink></li><li><RouterLink to="#controls-for">controls_for</RouterLink></li><li><RouterLink to="#controls-foreach">controls_forEach</RouterLink></li><li><RouterLink to="#controls-flow-statements">controls_flow_statements</RouterLink></li></ul></nav>
<h2 id="controls-repeat-ext" tabindex="-1"><a class="header-anchor" href="#controls-repeat-ext" aria-hidden="true">#</a> controls_repeat_ext</h2>
<p>重复执行<code v-pre>do</code>插槽中的拼图，通过<code v-pre>times</code>参数控制执行的次数。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_repeat_ext.png" alt="controls_repeat_ext"></p>
<h2 id="controls-whileuntil" tabindex="-1"><a class="header-anchor" href="#controls-whileuntil" aria-hidden="true">#</a> controls_whileUntil</h2>
<p>当参数为<code v-pre>while</code>时，只要指定的条件为<code v-pre>true</code>，该拼图就会一直执行<code v-pre>do</code>插槽中的拼图。相反，当参数为<code v-pre>until</code>时，该拼图在指定的条件值为<code v-pre>false</code>之后停止运行。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_whileUntil.png" alt="controls_whileUntil"></p>
<h2 id="controls-for" tabindex="-1"><a class="header-anchor" href="#controls-for" aria-hidden="true">#</a> controls_for</h2>
<p>在满足<code v-pre>from</code> <code v-pre>to</code> <code v-pre>by</code>所设定的条件下遍历数组，并针对数组中的每个元素执行<code v-pre>do</code>槽中的拼图。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_for.png" alt="controls_for"></p>
<h2 id="controls-foreach" tabindex="-1"><a class="header-anchor" href="#controls-foreach" aria-hidden="true">#</a> controls_forEach</h2>
<p>遍历数组，并针对数组中的每个元素执行<code v-pre>do</code>槽中的拼图。每个迭代的元素可以通过自动创建的变量访问。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_forEach.png" alt="controls_forEach"></p>
<h2 id="controls-flow-statements" tabindex="-1"><a class="header-anchor" href="#controls-flow-statements" aria-hidden="true">#</a> controls_flow_statements</h2>
<p>大多数循环会一直运行，直到满足终止条件或完成所有遍历。<code v-pre>controls_flow_statements</code>拼图为控制循环行为提供了额外的手段。<code v-pre>break</code>可以提前退出循环。<code v-pre>continue</code>可以跳过当前迭代，以便开始循环的下一个迭代。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_flow_statements.png" alt="controls_flow_statements"></p>
</template>
