import {
  ContextMenuItems,
  ContextMenuRegistry,
  Msg
} from 'blockly'
// 在execute_tab拼图上，右键菜单->跳转选项卡 转至该拼图所执行的选项卡
ContextMenuItems.printBlockName = function () {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const printBlockNameOption = {
    displayText: function () {
      return `${Msg.PRINT_BLOCK_NAME}`;
    },
    preconditionFn: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      return 'enabled';
    },
    callback: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      if (block3d) {
        block3d.editorFooter.info = scope.block.type;
        setTimeout(() => {
          block3d.editorFooter.info = ''
        }, 5000)
      }
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'printBlockName',
    weight: 100,
  };
  ContextMenuRegistry.registry.register(printBlockNameOption);
};

ContextMenuItems.printBlockName();