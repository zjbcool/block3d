# 系统 System

这类拼图涉及浏览器、编辑器层面的操作。

[[toc]]

## console_log

向浏览器控制台或状态栏输出信息。多用于调试。

![console_log](https://cdn.zjbku.com/blocks/console_log.png)

## window_alert

创建弹出对话框。用于确认、提示等操作。会暂时挂起程序执行，直到用户确认。

![window_alert](https://cdn.zjbku.com/blocks/window_alert.png)

## text_prompt_ext

创建输入对话框。用于提交信息。会暂时挂起程序执行，直到用户确认。

![text_prompt_ext](https://cdn.zjbku.com/blocks/text_prompt_ext.png)

## execute_tab

执行选项卡。Block3D编辑器支持创建多个选项卡，选项卡中的拼图和代码不会自动执行，需要使用此拼图指定。

只有编辑器中创建了新的选项卡，并且保存后，该拼图下拉菜单才会显示。

`tab`参数可向选项卡传递参数，可以是任意类型：文本、数字、布尔、数组、对象。

![execute_tab](https://cdn.zjbku.com/blocks/execute_tab.png)

## get_tab_arg

用于接收`execute_tab`拼图传递的参数。该拼图无法在`main`选项卡中使用。

![get_tab_arg](https://cdn.zjbku.com/blocks/get_tab_arg.png)

在使用代码类型的编辑器时，可直接访问`tab_arg`获得参数。

```js
// 代码编辑器
console.log(tab_arg) // execute_tab拼图参数
```

## get_function_by_name

获取函数分类中已经定义的函数。

![get_function_by_name](https://cdn.zjbku.com/blocks/get_function_by_name.png)

## set_get_glob_object

这是一个全局对象，可用于不同选项卡之间传递参数。

注意，你需要先设置它的值，然后才能访问，否则会返回`undefined`。

![set_get_glob_object](https://cdn.zjbku.com/blocks/set_get_glob_object.png)

## set_get_local_storage_item

用于设置和获取浏览器本地存储空间中的数据。

本地存储的值只支持文本（String）类型，如果要存储的数据为对象类型，需要使用[convert_object_to_json](./object.md#convert-object-to-json)拼图将其转换为JSON；相反，要访问一个JSON类型的本地存储，需要使用[convert_json_to_object](./object.md#convert-json-to-object)拼图将其转换为对象。

![set_get_local_storage_item](https://cdn.zjbku.com/blocks/local_storage_set_get_item.png)

查看本地存储，可在浏览器中通过快捷键`Ctrl` + `Shift` + `I` 或 `F12`打开开发者工具，切换到`应用`选项卡，点击左侧`本地存储空间`。

![localstorage](https://cdn.zjbku.com/blocks/localstorage.jpg)

## local_storage_remove_item

从本地存储中移除元素。

![local_storage_remove_item](https://cdn.zjbku.com/blocks/local_storage_remove_item.png)

## advanced_comment

用于添加单行注释。

![advanced_comment](https://cdn.zjbku.com/blocks/advanced_comment.png)

## advanced_connect

用于连接带返回值的拼图。该拼图不会产生任何代码，仅用于连接，以方便整体操作拼图。

![advanced_connect](https://cdn.zjbku.com/blocks/advanced_connect.png)

## advanced_new_line

用于换行。

![advanced_new_line](https://cdn.zjbku.com/blocks/advanced_new_line.png)
