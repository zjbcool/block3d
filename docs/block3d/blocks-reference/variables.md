# 变量 Variables

变量是一组动态拼图，默认该分类中没有任何拼图，只有点击该分类顶部的`创建变量...`按钮，创建了一个变量后，才会在该分类中出现相应的拼图。除此之外，在函数拼图中创建的参数，及在循环拼图中自动创建的循环变量，都会出现在该分类中。

[[toc]]

变量可以理解为临时保存计算结果的一块计算机内存。比如，我们在场景中创建了一个立方体网格，为了以后继续访问它，可以把它保存到变量`box`，在需要时，直接访问这个变量就可以了。

![variables-example](https://cdn.zjbku.com/blocks/variables-example.png)

变量只在所属选项卡中有效。比如，变量`box`是在`main`选项卡中创建的，在另一个选项卡中无法直接访问到它。要访问它可以通过系统拼图下的[glob_set_get_vars](./system.md#glob-set-get-vars)拼图。

一个直到最后都没有使用的变量，Block3D会在下次加载页面时自动清除掉。

## variables_set_dynamic

设置变量的值。快捷键：`Shift` + `V`

![variables_set_dynamic](https://cdn.zjbku.com/blocks/variables_set_dynamic.png)

## variables_get_dynamic

获取变量的值。快捷键：`Alt` + `Shift` + `V`

![variables_get_dynamic](https://cdn.zjbku.com/blocks/variables_get_dynamic.png)
