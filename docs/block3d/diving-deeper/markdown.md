# Markdown项目文档

Block3D支持Markdown语法的项目说明文档，在创建项目对话框的`描述`文本框，可以直接使用Markdown语法书写，或者稍后使用更专业的代码编辑器打开项目目录下自动生成的`README.md`继续编辑。

![markdown-readme](https://cdn.zjbku.com/diving-deeper/markdown-readme.jpg)

## Markdown基础语法

|元素     |Markdown语法|
|---------|-----------|
|[标题][1]|# 一级标题<br>## 二级标题<br>### 三级标题<br>|
|[粗体][2]|\*\*粗体\*\*|
|[斜体][3]|\*斜体\*|
|[引用][4]|\> 引用|
|[有序列表][5]|1. 第一项<br>2. 第二项<br>3. 第三项|
|[无序列表][6]|- 第一项<br>- 第二项<br>- 第三项|
|[代码][7]|\`code\`|
|[分割线][8]|---|
|[链接][9]|`[标题](https://zjbku.com)`|
|[图片][10]|`![文字](img.jpg)`|

## Markdown扩展语法

|元素     |Markdown语法|
|---------|-----------|
|[表格][11]|\|语法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|描述&nbsp;\|<br>\|:-----------\|:-----\|<br>\|Header&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|标题 \|<br>\|Paragraph\|段落 \||
|[代码区块][12]|\```<br>{<br>"firstName": "John",<br>"lastName": "Smith",<br>"age": 25<br>}<br>\```|
|[脚注][13]|一段带脚注的句子。 \[\^1]<br><br>[^1]: 这是脚注。|
|[标题ID][14]|### 大标题 {#custom-id}|
|[定义列表][15]|第一项<br>: 这是第一项的定义|
|[删除线][16]|\~\~\~删除线\~\~\~|
|[任务列表][17]|- [x] 开发拼图<br>- [ ] 录制教程<br>- [ ] 更新文档 |

## 在VSCode中使用Markdown

在VSCode中安装`Markdown All in One`扩展能够方便书写和预览Markdown.

[1]:./markdown-basic-syntax.html#标题
[2]:./markdown-basic-syntax.html#粗体
[3]:./markdown-basic-syntax.html#斜体
[4]:./markdown-basic-syntax.html#引用
[5]:./markdown-basic-syntax.html#有序列表
[6]:./markdown-basic-syntax.html#无序列表
[7]:./markdown-basic-syntax.html#代码
[8]:./markdown-basic-syntax.html#分割线
[9]:./markdown-basic-syntax.html#链接
[10]:./markdown-basic-syntax.html#图片
[11]:./markdown-extended-syntax.html#表格
[12]:./markdown-extended-syntax.html#代码区块
[13]:./markdown-extended-syntax.html#脚注
[14]:./markdown-extended-syntax.html#标题ID
[15]:./markdown-extended-syntax.html#定义列表-definition-lists
[16]:./markdown-extended-syntax.html#删除线
[17]:./markdown-extended-syntax.html#任务列表 