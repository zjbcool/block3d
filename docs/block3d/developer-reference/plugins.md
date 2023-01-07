# 插件开发 <Badge text="pro"/>

插件系统是Block3D专业版解锁的功能之一，本文面向专业版开发者介绍插件的开发。

[[toc]]

Block3D拼图插件遵循谷歌[Blockly](https://developers.google.cn/blockly/)标准开发，要开发出灵活、实用的拼图，可能需要花点时间仔细阅读它的文档。一开始，为了降低难度你可以使用[可视化工具](https://developers.google.cn/blockly/guides/create-custom-blocks/blockly-developer-tools)快速定义简单的拼图。

一个拼图插件包括两类文件：工具箱（.json）和拼图(.block)。

## 安装插件

将包含`.json`和`.block`文件的插件文件夹拷贝到windows路径`我的文档\block3d\plugins`，macOS路径`文稿\block3d\plugins`，刷新浏览器即可生效。

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

拼图是一个或多个`.block`文件，用于定义拼图外观和要生成的JavaScript代码。可将前文介绍的可视化工具生成的代码复制进该文件。见`hello.block`模板：

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

