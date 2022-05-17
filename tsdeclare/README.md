# 实现代码提示

将`codeEditor.babylon_d.ts`和`appInstance.d.ts`作为字符串导出，为`monaco`代码编辑器提供代码提示。

## 用法

``` js
// 为代码编辑器添加代码提示
tabManager.addExtralLib = monaco => {
  monaco.languages.typescript.javascriptDefaults.addExtraLib(tsdeclare.babylon_d_ts);
  monaco.languages.typescript.javascriptDefaults.addExtraLib(tsdeclare.appInstance_d_ts);
}
```