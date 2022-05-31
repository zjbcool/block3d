<template><h1 id="深入layermask" tabindex="-1"><a class="header-anchor" href="#深入layermask" aria-hidden="true">#</a> 深入layermask</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#layermask的含义">layerMask的含义</RouterLink></li><li><RouterLink to="#babylon-js-中的用法">Babylon.js 中的用法</RouterLink></li></ul></nav>
<p><code v-pre>layerMask</code>是一个你可以在许多对象上找到的属性，一开始可能有点难以掌握。本页面应该能让你很好地理解它是如何在Babylon.js对象中工作的。</p>
<h2 id="layermask的含义" tabindex="-1"><a class="header-anchor" href="#layermask的含义" aria-hidden="true">#</a> layerMask的含义</h2>
<p><code v-pre>layerMask</code>是一个可以指定给不同对象（如网格、相机、图层、粒子系统等）的值，用于确定这个对象在另一个对象中的可见性（例如，一个网格是否在相机中可见，或者一个图层是否应该在给定的相机处理后显示）。</p>
<p>对于layerMask，唯一需要理解的两件事是：</p>
<ul>
<li>它可以是 0 到 0xFFFFFFFF 之间的任何数字（或 4294967295，但写 0xFFFFFFFF 更容易）</li>
<li>在计算可见性标志visibility flag时，layerMask 的两个值进行 <strong>AND</strong> 运算，如果结果不为 0，则标志flag为真</li>
</ul>
<p>所以，例如，如果<code v-pre>camera.layerMask = 35</code>，<code v-pre>Mesh.layerMask = 2，35 &amp; 2 == 2 != 0</code>，所以从这个相机中可以看到网格。我们经常用十六进制来表示这些数字，因为这样心算更容易：<code v-pre>35=0x23，2=0x02，35 &amp; 2 == 0x23 &amp; 0x02</code>，从后一种表示方法中，更容易看出结果是2（好吧，至少当你对十六进制有点熟悉时！）。</p>
<h2 id="babylon-js-中的用法" tabindex="-1"><a class="header-anchor" href="#babylon-js-中的用法" aria-hidden="true">#</a> Babylon.js 中的用法</h2>
<p>在Babylon，默认情况下，所有的layerMask属性都是0x0FFFFFFF（对于Camera, Mesh, Layer, ...）。所以，当需要确定一个可见性时，0x0FFFFFFF &amp; 0x0FFFFFFF != 0，所有东西都是可见的（至少从layerMask测试的角度来看）。</p>
<p>正如你所看到的，在layerMask中，有4个比特没有被默认设置（第一个F前面的0）。这是为了简化layerMask的使用，因为一个常见的用法是使一些网格在相机中隐藏起来。为了达到这个目的，你需要在网格上设置一个layerMask，使其与相机的layerMask（默认为0x0FFFFFFF）的和运算为0：你可以使用0x10000000, 0x20000000, 0x40000000或0x80000000。现在你知道为什么用十六进制显示这些数字有帮助了：看到0x10000000 &amp; 0x0FFFFFFF = 0要比看到268435456 &amp; 268435455容易得多!</p>
<p>如果layerMask的默认值是0xFFFFFFFF，你也需要更新你的相机的layerMask以使你的网格从它那里不可见，因为0xFFFFFFFF是一个全1的32位值。因此，0x0FFFFFFF值只是一个默认值，可以帮助你的生活变得更容易一些，但在一般情况下，你可以在相机、网格、图层等的layerMask属性中放入任何值（如上面的35和2的例子），并简单地理解它是如何用来计算可见性的。</p>
</template>
