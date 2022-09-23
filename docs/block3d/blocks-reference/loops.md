# 循环 Loops

这类拼图用于执行循环操作。

[[toc]]

## controls_repeat_ext

重复执行`do`插槽中的拼图，通过`times`参数控制执行的次数。

![controls_repeat_ext](https://cdn.zjbku.com/blocks/controls_repeat_ext.png)

## controls_whileUntil

当参数为`while`时，只要指定的条件为`true`，该拼图就会一直执行`do`插槽中的拼图。相反，当参数为`until`时，该拼图在指定的条件值为`false`之后停止运行。

![controls_whileUntil](https://cdn.zjbku.com/blocks/controls_whileUntil.png)

## controls_for

在满足`from` `to` `by`所设定的条件下遍历数组，并针对数组中的每个元素执行`do`槽中的拼图。

![controls_for](https://cdn.zjbku.com/blocks/controls_for.png)

## controls_forEach

遍历数组，并针对数组中的每个元素执行`do`槽中的拼图。每个迭代的元素可以通过自动创建的变量访问。

![controls_forEach](https://cdn.zjbku.com/blocks/controls_forEach.png)

## controls_flow_statements

大多数循环会一直运行，直到满足终止条件或完成所有遍历。`controls_flow_statements`拼图为控制循环行为提供了额外的手段。`break`可以提前退出循环。`continue`可以跳过当前迭代，以便开始循环的下一个迭代。

![controls_flow_statements](https://cdn.zjbku.com/blocks/controls_flow_statements.png)

