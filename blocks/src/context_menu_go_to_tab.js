import {
  ContextMenuItems,
  ContextMenuRegistry,
  Msg
} from 'blockly'
// 在execute_tab拼图上，右键菜单->跳转选项卡 转至该拼图所执行的选项卡
ContextMenuItems.goToTab = function () {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const goToTabOption = {
    displayText: function () {
      return `${Msg.GO_TO_TAB}`;
    },
    preconditionFn: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      if (!scope.block.isInFlyout && scope.block.type === 'execute_tab') {
        return 'enabled';
      } else {
        return 'hidden';
      }
    },
    callback: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      const tabTitle = scope.block.getFieldValue('TAB');
      const tab = block3d.tabManager.getTabByTitle(tabTitle);
      block3d.tabManager.setActive(tab);
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'goToTab',
    weight: 100,
  };
  ContextMenuRegistry.registry.register(goToTabOption);
};

ContextMenuItems.goToTab();