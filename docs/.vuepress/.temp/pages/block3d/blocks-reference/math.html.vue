<template><h1 id="数学-math" tabindex="-1"><a class="header-anchor" href="#数学-math" aria-hidden="true">#</a> 数学 Math</h1>
<p>这类拼图用于提供数字、向量等数学方法。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#math-number">math_number</RouterLink></li><li><RouterLink to="#math-angle">math_angle</RouterLink></li><li><RouterLink to="#math-arithmetic">math_arithmetic</RouterLink></li><li><RouterLink to="#math-single">math_single</RouterLink></li><li><RouterLink to="#math-trig">math_trig</RouterLink></li><li><RouterLink to="#math-constant">math_constant</RouterLink></li><li><RouterLink to="#math-number-property">math_number_property</RouterLink></li><li><RouterLink to="#math-round">math_round</RouterLink></li><li><RouterLink to="#math-on-list">math_on_list</RouterLink></li><li><RouterLink to="#math-modulo">math_modulo</RouterLink></li><li><RouterLink to="#math-constrain">math_constrain</RouterLink></li><li><RouterLink to="#math-random-int">math_random_int</RouterLink></li><li><RouterLink to="#math-random-float">math_random_float</RouterLink></li><li><RouterLink to="#math-atan2">math_atan2</RouterLink></li><li><RouterLink to="#math-radians-degrees">math_radians_degrees</RouterLink></li><li><RouterLink to="#math-mix">math_mix</RouterLink></li><li><RouterLink to="#math-remap">math_remap</RouterLink></li><li><RouterLink to="#math-vector2">math_vector2</RouterLink></li><li><RouterLink to="#math-vector3">math_vector3</RouterLink></li><li><RouterLink to="#math-clone-vector">math_clone_vector</RouterLink></li><li><RouterLink to="#math-arithmetic-vector">math_arithmetic_vector</RouterLink></li></ul></nav>
<h2 id="math-number" tabindex="-1"><a class="header-anchor" href="#math-number" aria-hidden="true">#</a> math_number</h2>
<p>用于提供各种数字。支持整数、浮点数，及科学计数法。快捷键：<code v-pre>Shift</code> + <code v-pre>N</code></p>
<p><img src="https://cdn.zjbku.com/blocks/math_number.png" alt="math_number"></p>
<h2 id="math-angle" tabindex="-1"><a class="header-anchor" href="#math-angle" aria-hidden="true">#</a> math_angle</h2>
<p>用于方便地输入角度（单位：度）。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_angle.png" alt="math_angle"></p>
<h2 id="math-arithmetic" tabindex="-1"><a class="header-anchor" href="#math-arithmetic" aria-hidden="true">#</a> math_arithmetic</h2>
<p>用于执行基本的算术运算：加法（+）减法（-）乘法（*）除法（/），以及指数运算 (^)。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_arithmetic.png" alt="math_arithmetic"></p>
<h2 id="math-single" tabindex="-1"><a class="header-anchor" href="#math-single" aria-hidden="true">#</a> math_single</h2>
<p>用于执行以下数学运算：<a href="https://baike.baidu.com/item/%E5%B9%B3%E6%96%B9%E6%A0%B9/79171?fr=aladdin" target="_blank" rel="noopener noreferrer">平方根<ExternalLinkIcon/></a>（√）、<a href="https://baike.baidu.com/item/%E7%BB%9D%E5%AF%B9%E5%80%BC" target="_blank" rel="noopener noreferrer">绝对值<ExternalLinkIcon/></a>又称模数（|x|）、负（-）、<a href="https://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E5%AF%B9%E6%95%B0/270475?fromtitle=LN" target="_blank" rel="noopener noreferrer">自然对数<ExternalLinkIcon/></a>（ln）、<a href="https://baike.baidu.com/item/%E5%AF%B9%E6%95%B0%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">log10<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E6%8C%87%E6%95%B0/1196326#viewPageContent" target="_blank" rel="noopener noreferrer">自然指数<ExternalLinkIcon/></a>（e^）和十的乘方（10^）。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_single.png" alt="math_single"></p>
<p>注意，浮点运算并不总是100%准确，在比较数值时可能会产生不可预测的结果。为了消除这些精度问题，可以使用带精度的四舍五入。</p>
<h2 id="math-trig" tabindex="-1"><a class="header-anchor" href="#math-trig" aria-hidden="true">#</a> math_trig</h2>
<p>计算三角函数正弦（sin）、余弦（cos）和正切（tan）的值，以及它们的反对应的反正弦（asin）、反余弦（acos）和反正切（atan）的值。拼图需要（或返回）以度表示的值。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_trig.png" alt="math_trig"></p>
<h2 id="math-constant" tabindex="-1"><a class="header-anchor" href="#math-constant" aria-hidden="true">#</a> math_constant</h2>
<p>返回以下数学常数：派（π）、欧拉数e、黄金比率（φ）、2的平方根、1/2的平方根和无穷大值（∞）。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_constant.png" alt="math_constant"></p>
<h2 id="math-number-property" tabindex="-1"><a class="header-anchor" href="#math-number-property" aria-hidden="true">#</a> math_number_property</h2>
<p>检查数字是偶数、奇数、素数、整数、正数、负数，还是可以被其他数字整除。如果是，返回true；否则返回false。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_number_property.png" alt="math_number_property"></p>
<h2 id="math-round" tabindex="-1"><a class="header-anchor" href="#math-round" aria-hidden="true">#</a> math_round</h2>
<p>用于将一个数四舍五入。</p>
<p>参数：</p>
<ul>
<li>round - 将一个数字舍入到最接近的整数：2.49四舍五入值为2，2.5四舍五入值为3。</li>
<li>round up - 将数字向上舍入到最接近的整数：2.1四舍五入值为3。</li>
<li>round down - 将数字向下舍入到最接近的整数：2.9四舍五入值为2。</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/math_round.png" alt="math_round"></p>
<h2 id="math-on-list" tabindex="-1"><a class="header-anchor" href="#math-on-list" aria-hidden="true">#</a> math_on_list</h2>
<p>对列表里的数字执行指定操作。</p>
<p>参数：</p>
<ul>
<li>sum - 计算列表中所有数字的和。</li>
<li>min - 查找最小的数字。</li>
<li>max - 查找最大的数字。</li>
<li>average - 查找算术平均值（所有数字的总和除以列表的长度）。</li>
<li>median - 查找中间值（当所有数字从最小到最大排序时作为中间数）。</li>
<li>modes - 查找模（作为列表中出现频率最高的数字列表）。</li>
<li>standard deviation - 计算标准偏差（作为算术平均值的平方偏差平均值的平方根）。</li>
<li>random item - 返回随机选择的项。</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/math_on_list.png" alt="math_on_list"></p>
<h2 id="math-modulo" tabindex="-1"><a class="header-anchor" href="#math-modulo" aria-hidden="true">#</a> math_modulo</h2>
<p>返回一个数除以另一个数之后的余数（也称为模运算）。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_modulo.png" alt="math_modulo"></p>
<h2 id="math-constrain" tabindex="-1"><a class="header-anchor" href="#math-constrain" aria-hidden="true">#</a> math_constrain</h2>
<p>将数字限制在指定范围内。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_constrain.png" alt="math_constrain"></p>
<h2 id="math-random-int" tabindex="-1"><a class="header-anchor" href="#math-random-int" aria-hidden="true">#</a> math_random_int</h2>
<p>返回指定数字之间的随机整数（包含最大最小值）。最大最小值可以不是整数，因为这个拼图默认会执行四舍五入。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_random_int.png" alt="math_random_int"></p>
<h2 id="math-random-float" tabindex="-1"><a class="header-anchor" href="#math-random-float" aria-hidden="true">#</a> math_random_float</h2>
<p>返回一个介于0（包含）到1（排除）之间的随机浮点数。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_random_float.png" alt="math_random_float"></p>
<h2 id="math-atan2" tabindex="-1"><a class="header-anchor" href="#math-atan2" aria-hidden="true">#</a> math_atan2</h2>
<p>返回以弧度表示的 y/x 的反正切值。计算时atan2 比 atan 稳定。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_atan2.png" alt="math_atan2"></p>
<h2 id="math-radians-degrees" tabindex="-1"><a class="header-anchor" href="#math-radians-degrees" aria-hidden="true">#</a> math_radians_degrees</h2>
<p>角度和弧度相互转换。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_radians_degrees.png" alt="math_radians_degrees"></p>
<h2 id="math-mix" tabindex="-1"><a class="header-anchor" href="#math-mix" aria-hidden="true">#</a> math_mix</h2>
<p>返回数字A和B通过系数alpha混合的插值。混合系数的范围是0-1。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_mix.png" alt="math_mix"></p>
<h2 id="math-remap" tabindex="-1"><a class="header-anchor" href="#math-remap" aria-hidden="true">#</a> math_remap</h2>
<p>将数字从一个取值范围映射到另一个取值范围。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_remap.png" alt="math_remap"></p>
<h2 id="math-vector2" tabindex="-1"><a class="header-anchor" href="#math-vector2" aria-hidden="true">#</a> math_vector2</h2>
<p>根据指定的 x 和 y 坐标创建一个新的 Vector2。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_vector2.png" alt="math_vector2"></p>
<h2 id="math-vector3" tabindex="-1"><a class="header-anchor" href="#math-vector3" aria-hidden="true">#</a> math_vector3</h2>
<p>根据指定的 x y z坐标创建一个新的 Vector3。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_vector3.png" alt="math_vector3"></p>
<h2 id="math-clone-vector" tabindex="-1"><a class="header-anchor" href="#math-clone-vector" aria-hidden="true">#</a> math_clone_vector</h2>
<p>从指定向量克隆一个新向量。</p>
<p><img src="https://cdn.zjbku.com/blocks/math_clone_vector.png" alt="math_clone_vector"></p>
<h2 id="math-arithmetic-vector" tabindex="-1"><a class="header-anchor" href="#math-arithmetic-vector" aria-hidden="true">#</a> math_arithmetic_vector</h2>
<p><img src="https://cdn.zjbku.com/blocks/math_arithmetic_vector.png" alt="math_arithmetic_vector"></p>
<p>Vector3的各种运算：</p>
<ul>
<li>add - 返回一个新的Vector3，结果是两个向量的和</li>
<li>center - 返回一个新的Vector3，结果是两个向量的中点</li>
<li>cross - 返回一个新的Vector3，结果是两个向量的叉积</li>
<li>distance - 返回一个数字，结果是两个向量的距离</li>
<li>divide - 返回一个新的Vector3，结果是两个向量相除</li>
<li>dot - 返回一个新的Vector3，结果是两个向量的点积</li>
<li>length - 返回一个数字，结果指定向量的模（长度）</li>
<li>multiply - 返回一个新的Vector3，结果是两个向量的数量积</li>
<li>negate - 返回一个新的Vector3，结果当前向量的负向量</li>
<li>normalize - 归一化当前Vector3。这是一个原地操作</li>
<li>scale - 返回一个新的Vector3，结果是当前Vector3乘以浮点数</li>
<li>subtract - 返回一个新的Vector3，结果是两个向量相减</li>
</ul>
</template>
