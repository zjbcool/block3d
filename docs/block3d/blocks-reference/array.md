# 数组 Array

这类拼图用于创建和操作[数组Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。

[[toc]]

## array_create

创建新数组。快捷键：`Shift` + `A`

默认会创建一个空数组，要向数组中添加元素，请执行以下操作：
1. 取消勾选 `isEmpty`
2. 在拼图上执行右键-`创建element`
3. 将新创建的`element`拼图拖入`array_create`拼图，并将要添加到这个数组的元素连接到`element`拼图上

`element`拼图只能应用于`array_create`拼图内部。

![array_create](https://cdn.zjbku.com/blocks/array_create.png)

## array_repeat

创建一个新的数组，其所有成员都是同一个元素。

参数：
- item - 要添加进数组的元素
- repeated - 数组的长度

![array_repeat](https://cdn.zjbku.com/blocks/array_repeat.png)

## array_length

返回一个数组的长度。

![array_length](https://cdn.zjbku.com/blocks/array_length.png)

## array_is_empty

判断一个数组是否为空，若为空返回`true`；否则返回`false`

![array_is_empty](https://cdn.zjbku.com/blocks/array_is_empty.png)

## array_index_of

检查数组中是否包含某元素，如果包含，则返回其索引（数组中元素的索引从0开始）；否则返回-1。

参数：
- first - 表示从前往后查找
- last - 表示从后往前查找

![array_index_of](https://cdn.zjbku.com/blocks/array_index_of.png)

## array_includes

检查数组中是否包含某元素，若包含，返回`true`；否则返回`false`。

![array_includes](https://cdn.zjbku.com/blocks/array_includes.png)

## array_get_index

从指定位置查找或删除元素（数组中的元素从0开始索引）。

参数：
- get - 查找元素，返回元素索引
- get and remove - 查找并删除元素，返回删除元素的索引
- remove - 删除元素

![array_get_index](https://cdn.zjbku.com/blocks/array_get_index.png)

## array_set_index

将元素添加到数组中。

参数：
- set - 将数组中指定位置的元素替换为其他元素（数组的长度保持不变）
- insert - 在指定的位置向数组中添加一个新元素，将移动先前位于该位置的元素（增加数组的长度）

![array_set_index](https://cdn.zjbku.com/blocks/array_set_index.png)

## array_get_sublist

截取两个指定位置之间的数组片段为新数组。不会更改原始数组。

![array_get_sublist](https://cdn.zjbku.com/blocks/array_get_sublist.png)

## array_split

通过拆分文本来创建一个数组，或者相反，将数组的元素连接成文本。

参数：
- delimiter - 分割符号

![array_split](https://cdn.zjbku.com/blocks/array_split.png)

## array_sort

从原始数组创建一个新的数组，其中的元素按升序或降序排序。不会改变原始数组。

参数：
- numeric - 按数字大小排序
- alphabetic - 按字母顺序排序
- alphabetic,ignore case - 按字母排序，不区分大小写
- ascending - 升序
- descending - 降序

![array_sort](https://cdn.zjbku.com/blocks/array_sort.png)

## array_reverse

从原始数组创建一个新数组，其元素按照与原始数组相反顺序排列。不会改变原始数组。

![array_reverse](https://cdn.zjbku.com/blocks/array_reverse.png)

## array_for_each

遍历数组。在拼图上执行右键-`创建element/index`，可创建每次迭代的元素和索引，注意，它只能用于`array_for_each`拼图内部。

![array_for_each](https://cdn.zjbku.com/blocks/array_for_each.png)

