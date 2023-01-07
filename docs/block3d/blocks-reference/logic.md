# 逻辑 Logic

这类拼图用于执行逻辑操作。

[[toc]]

## controls_if

当指定条件为真，会执行`do`插槽中的拼图。通过拼图左上角齿轮图标，可以添加多个`else if`或一个`else`条件语句。

## logic_compare

比较两个值并返回一个布尔值。

## logic_operation

执行逻辑与、逻辑或操作。

## logic_negate

执行逻辑非操作。如执行取反操作。

## logic_boolean

返回一个布尔值，`true` 或 `false`

## logic_null

严格地说，空值与逻辑无关。如果变量设置为空，则表示它没有设置为真或假，而是保持`undecided`。

## logic_ternary

判断`检测`插槽中拼图的布尔值，如果结果为真，则返回`若真`插槽中拼图的运算结果；否则返回`若假`插槽中拼图的运算结果。
