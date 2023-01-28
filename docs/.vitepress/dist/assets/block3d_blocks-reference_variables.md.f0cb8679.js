import{_ as e,c as a,o as c,a as s}from"./app.9d829298.js";const h=JSON.parse('{"title":"变量 Variables","description":"","frontmatter":{},"headers":[{"level":2,"title":"variables_set_dynamic","slug":"variables-set-dynamic","link":"#variables-set-dynamic","children":[]},{"level":2,"title":"variables_get_dynamic","slug":"variables-get-dynamic","link":"#variables-get-dynamic","children":[]}],"relativePath":"block3d/blocks-reference/variables.md"}'),i={name:"block3d/blocks-reference/variables.md"},t=s('<h1 id="变量-variables" tabindex="-1">变量 Variables <a class="header-anchor" href="#变量-variables" aria-hidden="true">#</a></h1><p>变量是一组动态拼图，默认该分类中没有任何拼图，只有点击该分类顶部的<code>创建变量...</code>按钮，创建了一个变量后，才会在该分类中出现相应的拼图。除此之外，在函数拼图中创建的参数，及在循环拼图中自动创建的循环变量，都会出现在该分类中。</p><p>变量可以理解为临时保存计算结果的一块计算机内存。比如，我们在场景中创建了一个立方体网格，为了以后继续访问它，可以把它保存到变量<code>box</code>，在需要时，直接访问这个变量就可以了。</p><p><img src="https://cdn.zjbku.com/blocks/variables-example.png" alt="variables-example"></p><p>变量只在所属选项卡中有效。比如，变量<code>box</code>是在<code>main</code>选项卡中创建的，在另一个选项卡中无法直接访问到它。要访问它可以通过系统拼图下的<a href="./system.html#glob-set-get-vars">glob_set_get_vars</a>拼图。</p><p>一个直到最后都没有使用的变量，Block3D会在下次加载页面时自动清除掉。</p><h2 id="variables-set-dynamic" tabindex="-1">variables_set_dynamic <a class="header-anchor" href="#variables-set-dynamic" aria-hidden="true">#</a></h2><p>设置变量的值。快捷键：<code>Shift</code> + <code>V</code></p><p><img src="https://cdn.zjbku.com/blocks/variables_set_dynamic.png" alt="variables_set_dynamic"></p><h2 id="variables-get-dynamic" tabindex="-1">variables_get_dynamic <a class="header-anchor" href="#variables-get-dynamic" aria-hidden="true">#</a></h2><p>获取变量的值。快捷键：<code>Alt</code> + <code>Shift</code> + <code>V</code></p><p><img src="https://cdn.zjbku.com/blocks/variables_get_dynamic.png" alt="variables_get_dynamic"></p>',12),r=[t];function d(l,o,n,_,b,p){return c(),a("div",null,r)}const v=e(i,[["render",d]]);export{h as __pageData,v as default};
