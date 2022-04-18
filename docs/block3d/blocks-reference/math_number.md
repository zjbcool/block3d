# 数字 Number

这类拼图用于创建和操作数字。

[[toc]]

## math_number

用于提供各种数字。支持整数、浮点数，及科学计数法。快捷键：`Shift` + `N`

![math_number](/imgs/blocks/math_number.png)

## math_angle

用于方便地输入角度（单位：度）。

![math_angle](/imgs/blocks/math_angle.png)

## math_arithmetic

用于执行基本的算术运算：加法（+）减法（-）乘法（*）除法（/），以及指数运算 (^)。

![math_arithmetic](/imgs/blocks/math_arithmetic.png)

## math_single

用于执行以下数学运算：[平方根](https://baike.baidu.com/item/%E5%B9%B3%E6%96%B9%E6%A0%B9/79171?fr=aladdin)（√）、[绝对值](https://baike.baidu.com/item/%E7%BB%9D%E5%AF%B9%E5%80%BC)又称模数（|x|）、负（-）、[自然对数](https://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E5%AF%B9%E6%95%B0/270475?fromtitle=LN)（ln）、[log10](https://baike.baidu.com/item/%E5%AF%B9%E6%95%B0%E5%87%BD%E6%95%B0)、[自然指数](https://baike.baidu.com/item/%E8%87%AA%E7%84%B6%E6%8C%87%E6%95%B0/1196326#viewPageContent)（e^）和十的乘方（10^）。

![math_single](/imgs/blocks/math_single.png)

注意，浮点运算并不总是100%准确，在比较数值时可能会产生不可预测的结果。为了消除这些精度问题，可以使用带精度的四舍五入。

## math_trig

计算三角函数正弦（sin）、余弦（cos）和正切（tan）的值，以及它们的反对应的反正弦（asin）、反余弦（acos）和反正切（atan）的值。拼图需要（或返回）以度表示的值。

![math_trig](/imgs/blocks/math_trig.png)

## math_constant

返回以下数学常数：派（π）、欧拉数e、黄金比率（φ）、2的平方根、1/2的平方根和无穷大值（∞）。

![math_constant](/imgs/blocks/math_constant.png)

## math_number_property

检查数字是偶数、奇数、素数、整数、正数、负数，还是可以被其他数字整除。如果是，返回true；否则返回false。

![math_number_property](/imgs/blocks/math_number_property.png)

## math_round

用于将一个数四舍五入。

参数：
- round - 将一个数字舍入到最接近的整数：2.49四舍五入值为2，2.5四舍五入值为3。
- round up - 将数字向上舍入到最接近的整数：2.1四舍五入值为3。 
- round down - 将数字向下舍入到最接近的整数：2.9四舍五入值为2。

![math_round](/imgs/blocks/math_round.png)

## math_on_list

对列表里的数字执行指定操作。

参数：
- sum - 计算列表中所有数字的和。
- min - 查找最小的数字。
- max - 查找最大的数字。
- average - 查找算术平均值（所有数字的总和除以列表的长度）。
- median - 查找中间值（当所有数字从最小到最大排序时作为中间数）。
- modes - 查找模（作为列表中出现频率最高的数字列表）。
- standard deviation - 计算标准偏差（作为算术平均值的平方偏差平均值的平方根）。
- random item - 返回随机选择的项。

![math_on_list](/imgs/blocks/math_on_list.png)

## math_modulo

返回一个数除以另一个数之后的余数（也称为模运算）。

![math_modulo](/imgs/blocks/math_modulo.png)

## math_constrain

将数字限制在指定范围内。

![math_constrain](/imgs/blocks/math_constrain.png)

## math_random_int

返回指定数字之间的随机整数（包含最大最小值）。最大最小值可以不是整数，因为这个拼图默认会执行四舍五入。

![math_random_int](/imgs/blocks/math_random_int.png)

## math_random_float

返回一个介于0（包含）到1（排除）之间的随机浮点数。

![math_random_float](/imgs/blocks/math_random_float.png)

## math_atan2

返回以弧度表示的 y/x 的反正切值。计算时atan2 比 atan 稳定。

![math_atan2](/imgs/blocks/math_atan2.png)
