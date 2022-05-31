<template><h1 id="变量-variables" tabindex="-1"><a class="header-anchor" href="#变量-variables" aria-hidden="true">#</a> 变量 Variables</h1>
<p>变量是一组动态拼图，默认该分类中没有任何拼图，只有点击该分类顶部的<code v-pre>创建变量...</code>按钮，创建了一个变量后，才会在该分类中出现相应的拼图。除此之外，在函数拼图中创建的参数，及在循环拼图中自动创建的循环变量，都会出现在该分类中。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#variables-set-dynamic">variables_set_dynamic</RouterLink></li><li><RouterLink to="#variables-get-dynamic">variables_get_dynamic</RouterLink></li></ul></nav>
<p>变量可以理解为临时保存计算结果的一块计算机内存。比如，我们在场景中创建了一个立方体网格，为了以后继续访问它，可以把它保存到变量<code v-pre>box</code>，在需要时，直接访问这个变量就可以了。</p>
<p><img src="https://cdn.zjbku.com/blocks/variables-example.png" alt="variables-example"></p>
<p>变量只在所属选项卡中有效。比如，变量<code v-pre>box</code>是在<code v-pre>main</code>选项卡中创建的，在另一个选项卡中无法直接访问到它。要访问它可以通过系统拼图下的<RouterLink to="/block3d/blocks-reference/system.html#glob-set-get-vars">glob_set_get_vars</RouterLink>拼图。</p>
<p>一个直到最后都没有使用的变量，Block3D会在下次加载页面时自动清除掉。</p>
<h2 id="variables-set-dynamic" tabindex="-1"><a class="header-anchor" href="#variables-set-dynamic" aria-hidden="true">#</a> variables_set_dynamic</h2>
<p>设置变量的值。快捷键：<code v-pre>Shift</code> + <code v-pre>V</code></p>
<p><img src="https://cdn.zjbku.com/blocks/variables_set_dynamic.png" alt="variables_set_dynamic"></p>
<h2 id="variables-get-dynamic" tabindex="-1"><a class="header-anchor" href="#variables-get-dynamic" aria-hidden="true">#</a> variables_get_dynamic</h2>
<p>获取变量的值。快捷键：<code v-pre>Alt</code> + <code v-pre>Shift</code> + <code v-pre>V</code></p>
<p><img src="https://cdn.zjbku.com/blocks/variables_get_dynamic.png" alt="variables_get_dynamic"></p>
</template>
