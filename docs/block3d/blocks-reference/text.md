# 文本 Text

这类拼图用于创建和操作字符串。常见于对象的名称、字符串类型的值，这类拼图可以实现对字符串进行增、删、改、查操作，是经常使用的一类拼图。

[[toc]]

## text

创建文本。快捷键：`Shift` + `T`

![text](/imgs/blocks/text.png)

## text_multiline

创建多行文本。

![text_multiline](/imgs/blocks/text_multiline.png)

## text_join

这个拼图可以将两个或更多文本元素连接成一行。通过该拼图右键-创建element，创建和添加文本元素。如果输入了非文本，例如数字，它们将自动转换为文本。

![text_join](/imgs/blocks/string_join.png)

要增加元素，只需要在该拼图上右键，从弹出的菜单中选中“创建 element”，然后将要连接的元素连接到创建出来的element拼图即可。

![string_join_1](/imgs/blocks/string_join_1.png)

## text_append

在一个文本的末尾追加一个文本。

![text_append](/imgs/blocks/text_append.png)

## text_length

返回文本的长度。

![text_length](/imgs/blocks/text_length.png)

## text_isEmpty

判断文本是否为空，如果为空，返回false，否则返回true。

![text_isEmpty](/imgs/blocks/text_isEmpty.png)

## text_charAt

判断一个文本是否存在于另一个文本中，如果存在返回它的位置（从0开始的索引）。如果不存在，返回-1。

![text_charAt](/imgs/blocks/text_charAt.png)

## text_indexOf

从指定的索引位置获取字符（文本中的字符从0开始索引）。

![text_indexOf](/imgs/blocks/text_indexOf.png)

## text_getSubstring

从两个指定的位置之间提取文本片段（文本中的字符从0开始索引）。

![text_getSubstring](/imgs/blocks/text_getSubstring.png)

## text_changeCase

改变文本的大小写。非字母字符和不带大小写的语言文本（如中文）不受影响。

![text_changeCase](/imgs/blocks/text_changeCase.png)

## text_trim

删除文本中的空格，可以从文本的开头、结尾或两边删除。

![text_trim](/imgs/blocks/text_trim.png)

## text_count

计算某个文本在指定文本中出现的次数。

![text_count](/imgs/blocks/text_count.png)

## text_replace

查找文本，并在找到的地方用指定文本替换它（区分大小写）。

![text_replace](/imgs/blocks/text_replace.png)

## text_reverse

对文本执行反转操作。

![text_reverse](/imgs/blocks/text_reverse.png)

