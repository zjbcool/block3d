# 选项卡

[[toc]]

选项卡区域位于编辑区和视图区的中间，它的右侧边缘是可拖拽的，用来改变两侧区域的大小。

选项卡可以作为一组实现特定功能的拼图或代码的容器，允许嵌套。

## 基本操作

除了默认选项卡`main`是不可修改的，用户可以通过菜单栏-`下拉菜单`-`选项卡`下的命令对选项卡执行新建、删除、重命名操作。

还可以通过选项卡下方的`+` `-`按钮，执行新建和删除操作。

![tab-1](https://cdn.zjbku.com/diving-deeper/tab-1.jpg)

## 拼图编辑器和代码编辑器

点击选项卡下方的`+`按钮，打开`新建选项卡`对话框，在`编辑器类型`中有拼图和代码2种类型的编辑器可选。

![create-tab-dialog](https://cdn.zjbku.com/diving-deeper/create-tab-dialog.jpg)

拼图编辑器是我们以后最常使用的编辑器。如果没有特别说明，编辑器就是指拼图编辑器。

在代码编辑器中，可以直接使用JavaScript进行编程，用于扩展拼图功能。它的默认代码会在场景中创建一个立方体：

```js
  // 内置变量: BABYLON
  const { engine, scene, camera, glob } = BABYLON.apps[0];

  function createBox() {
    const mesh = BABYLON.MeshBuilder.CreateBox('box', scene);
    const mat = new BABYLON.PBRMaterial('pbr', scene);
    mesh.material = mat;
  }

  createBox();
```

## 执行选项卡

选项卡中，除了默认的`main`选项卡是自动执行的，用户自行创建的选项卡需要使用`系统 System`分类下的[excute_tab](../blocks-reference/system.md#execute-tab)拼图指定要执行的选项卡。这样做的好处是，用户可以完全控制选项卡的执行时机。

![execute_tab](https://cdn.zjbku.com/blocks/execute_tab.png)

选项卡创建完成后，需要先保存，然后重新从系统分类下拖拽[excute_tab](../blocks-reference/system.md#execute-tab)拼图，在拼图下拉菜单中才会出现新选项。

## 跳转选项卡

我们注意到，选项卡的名称是竖排的，对于英文命名不方便阅读。解决这个问题两种操作：

1. 点击选项卡时，在底部状态栏会显示点击的选项卡名称
2. 在[excute_tab](../blocks-reference/system.md#execute-tab)拼图上使用快捷键`Tab`可以跳转到该拼图指定的选项卡；使用快捷键`Shift` + `Tab`可以从任意选项卡返回`main`选项卡

除了使用快捷键，通过[excute_tab](../blocks-reference/system.md#execute-tab)拼图的右键菜单-`跳转选项卡`也可以实现跳转。

![go-to-tab-menu.jpg](https://cdn.zjbku.com/diving-deeper/go-to-tab-menu.jpg)

## 选项卡内部变量

选项卡内部的变量是独立的。假如`main`选项卡中有一个变量`a`，`custom`选项卡中也有一个变量`a`，这两个变量各自独立，互不影响。

![tab-variable.jpg](https://cdn.zjbku.com/diving-deeper/tab-variable-1.jpg)

执行结果：

```shell
'custom'选项卡中的变量a
'main'选项卡中的变量a
```

如果这是同一个变量，在执行完`custom`选项卡后，变量`a`会被重新赋值，但是，结果变量`a`还是原来的值。说明这是两个不同的变量。

利用选项卡限制变量作用域带来两个好处：
1. 项目复杂，变量增加时，不用担心变量重名问题
2. 可以实现跨项目复制拼图，只需将拼图复制到新建选项卡中，然后执行这个选项卡

## 跨选项卡通信

在一个选项卡中无法访问另一个选项卡中的变量，显然无法直接使用变量实现跨选项卡通信。解决的方法有两个：利用选项卡参数[tab_arg](../blocks-reference/system.md#get-tab-arg)和全局对象[set_get_glob_object](../blocks-reference/system.md#set-get-glob-object)。

### 选项卡参数

选项卡参数可以像函数参数那样，在执行选项卡时向选项卡传递参数，使用系统分类中[tab_arg](../blocks-reference/system.md#get-tab-arg)拼图，可以获取传进来的参数。

例如，我们要从`main`选项卡中，将变量`a`传递给`custom`选项卡：

![tab-arg.jpg](https://cdn.zjbku.com/diving-deeper/tab-arg.jpg)

结果：
```sh
'main'选项卡中的变量a
```

### 全局对象

第2种方法是将值赋给全局对象[set_get_glob_object](../blocks-reference/system.md#set-get-glob-object)，这样在其后任意选项卡中都能直接访问

![glob-obj.jpg](https://cdn.zjbku.com/diving-deeper/glob-obj.jpg)

结果：
```sh
全局对象a
```
