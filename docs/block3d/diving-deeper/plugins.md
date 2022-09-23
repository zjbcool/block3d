# 插件 <Badge text="pro"/>

本节内容适合程序员阅读。

[[toc]]

Block3D拼图系统采用谷歌[Blockly](https://developers.google.cn/blockly/)开发，专业版用户可以使用该技术开发拼图插件，实现订制拼图。订制拼图将显示在工具栏最底部。

拼图插件包括两部分：工具箱和拼图。

## 定义工具箱

工具箱是一个`.json`文件，用于定义在Block3D工具栏中显示的拼图分类，它下面应该包含该插件所有的拼图。参考`hello.json`模板：

```json
{
  "kind": "category", // 表示这是一个拼图分类，不可修改
  "name": "订制", // 拼图分类的名称
  "cssConfig": { // 样式，不可修改
    "icon": "extensionsIcon categoryIcon",
    "label": "categoryLabel"
  },
  "colour": "210", // 定义该拼图分类的颜色，0-360
  "contents": [{ // 定义该拼图分类下的所有拼图
      "kind": "label", // 一个标签
      "text": "自定义拼图"
    },
    {
      "kind": "block", // 一个拼图
      "type": "say_hello", // 拼图名称
      "inputs": { // 拼图默认值
        "WORD": {
          "shadow": {
            "type": "text",
            "fields": {
              "TEXT": "hello!"
            }
          }
        }
      }
    }
  ]
}
```

::: tip
实际文件不包含注释
:::

## 定义拼图

拼图是一个或多个`.block`文件，用于定义拼图外观和要生成的JavaScript代码。见`hello.block`模板：

```js
Blockly.Blocks['say_hello'] = {
  init() {
    this.appendValueInput('WORD')
      .appendField('say')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(210);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('扩展拼图示例');
    this.setHelpUrl('https://www.zjbku.com/');
  }
}

Blockly.JavaScript['say_hello'] = block => {
  const word = Blockly.JavaScript.valueToCode(block, 'WORD', Blockly.JavaScript.ORDER_NONE) || `\'\'`;
  return `console.log(${word});
  `
}
```

## 如何使扩展生效？

将上述文件拷贝到`用户\我的文档\block3d\extensions`目录下即可生效。