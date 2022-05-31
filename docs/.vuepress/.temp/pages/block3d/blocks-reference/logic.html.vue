<template><h1 id="逻辑-logic" tabindex="-1"><a class="header-anchor" href="#逻辑-logic" aria-hidden="true">#</a> 逻辑 Logic</h1>
<p>这类拼图用于执行逻辑操作。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#controls-if">controls_if</RouterLink></li><li><RouterLink to="#logic-compare">logic_compare</RouterLink></li><li><RouterLink to="#logic-operation">logic_operation</RouterLink></li><li><RouterLink to="#logic-negate">logic_negate</RouterLink></li><li><RouterLink to="#logic-boolean">logic_boolean</RouterLink></li><li><RouterLink to="#logic-null">logic_null</RouterLink></li><li><RouterLink to="#logic-ternary">logic_ternary</RouterLink></li></ul></nav>
<h2 id="controls-if" tabindex="-1"><a class="header-anchor" href="#controls-if" aria-hidden="true">#</a> controls_if</h2>
<p>当指定条件为真，会执行<code v-pre>do</code>插槽中的拼图。通过拼图左上角齿轮图标，可以添加多个<code v-pre>else if</code>或一个<code v-pre>else</code>条件语句。</p>
<p><img src="https://cdn.zjbku.com/blocks/controls_if.png" alt="controls_if"></p>
<h2 id="logic-compare" tabindex="-1"><a class="header-anchor" href="#logic-compare" aria-hidden="true">#</a> logic_compare</h2>
<p>比较两个值并返回一个布尔值。</p>
<p><img src="https://cdn.zjbku.com/blocks/logic_compare.png" alt="logic_compare"></p>
<h2 id="logic-operation" tabindex="-1"><a class="header-anchor" href="#logic-operation" aria-hidden="true">#</a> logic_operation</h2>
<p>执行逻辑与、逻辑或操作。</p>
<p><img src="https://cdn.zjbku.com/blocks/logic_operation.png" alt="logic_operation"></p>
<h2 id="logic-negate" tabindex="-1"><a class="header-anchor" href="#logic-negate" aria-hidden="true">#</a> logic_negate</h2>
<p>执行逻辑非操作。如执行取反操作。</p>
<p><img src="https://cdn.zjbku.com/blocks/logic_negate.png" alt="logic_negate"></p>
<h2 id="logic-boolean" tabindex="-1"><a class="header-anchor" href="#logic-boolean" aria-hidden="true">#</a> logic_boolean</h2>
<p>返回一个布尔值，<code v-pre>true</code> 或 <code v-pre>false</code></p>
<p><img src="https://cdn.zjbku.com/blocks/logic_boolean.png" alt="logic_boolean"></p>
<h2 id="logic-null" tabindex="-1"><a class="header-anchor" href="#logic-null" aria-hidden="true">#</a> logic_null</h2>
<p>严格地说，空值与逻辑无关。如果变量设置为空，则表示它没有设置为真或假，而是保持<code v-pre>undecided</code>。</p>
<p><img src="https://cdn.zjbku.com/blocks/logic_null.png" alt="logic_null"></p>
<h2 id="logic-ternary" tabindex="-1"><a class="header-anchor" href="#logic-ternary" aria-hidden="true">#</a> logic_ternary</h2>
<p>判断<code v-pre>test</code>插槽中拼图的布尔值，如果结果为真，则返回<code v-pre>if true</code>插槽中拼图的运算结果；否则返回<code v-pre>if false</code>插槽中拼图的运算结果。</p>
<p><img src="https://cdn.zjbku.com/blocks/logic_ternary.png" alt="logic_ternary"></p>
</template>
