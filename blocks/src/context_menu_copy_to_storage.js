import {
  ContextMenuItems,
  ContextMenuRegistry,
  Msg,
  Xml,
  getMainWorkspace,
  selected
} from 'blockly'

ContextMenuItems.blockCopyToStorage = function () {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const copyToStorageOption = {
    displayText: function () {
      return Msg.COPY_BLOCK;
    },
    preconditionFn: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      if (!scope.block.isInFlyout) {
        return 'enabled';
      } else {
        return 'hidden';
      }
    },
    callback: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      const blockDom = Xml.blockToDomWithXY(scope.block);
      const blockText = Xml.domToText(blockDom);
      localStorage.setItem('block3dBlocksStash', blockText);
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockCopyToStorage',
    weight: 0,
  };
  ContextMenuRegistry.registry.register(copyToStorageOption);
};

ContextMenuItems.blockCutToStorage = function () {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const cutToStorageOption = {
    displayText: function () {
      return Msg.CUT_BLOCK;
    },
    preconditionFn: function (scope) {
      const workspace = getMainWorkspace();
      if (!workspace.options.readOnly && selected &&
        selected.isDeletable() && selected.isMovable() &&
        !workspace.isFlyout && !scope.block.isInFlyout) {
        return 'enabled';
      } else {
        return 'hidden';
      }

    },
    callback: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      if (!selected) {
        // Shouldn't happen but appeases the type system
        return false;
      }
      const blockDom = Xml.blockToDomWithXY(scope.block);
      const blockText = Xml.domToText(blockDom);
      localStorage.setItem('block3dBlocksStash', blockText);
      (/** @type {!BlockSvg} */ (selected)).checkAndDelete();
      return true;
    },
    scopeType: ContextMenuRegistry.ScopeType.BLOCK,
    id: 'blockCutToStorage',
    weight: 0,
  };
  ContextMenuRegistry.registry.register(cutToStorageOption);
};

ContextMenuItems.blockPasteFromStorage = function () {
  /** @type {!ContextMenuRegistry.RegistryItem} */
  const pasteFromStorageOption = {
    displayText: function () {
      return Msg.PASTE_BLOCK;
    },
    preconditionFn: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      if (localStorage.getItem('block3dBlocksStash')) {
        return 'enabled';
      } else {
        return 'hidden';
      }

    },
    callback: function (/** @type {!ContextMenuRegistry.Scope} */ scope) {
      const blockText = localStorage.getItem('block3dBlocksStash');
      const blockDom = Xml.textToDom(blockText);
      Xml.domToBlock(blockDom, getMainWorkspace());
      // 粘贴完成后删除
      localStorage.removeItem('block3dBlocksStash');
    },
    scopeType: ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'blockPasteFromStorage',
    weight: 0,
  };
  ContextMenuRegistry.registry.register(pasteFromStorageOption);
};
// Register the menus
ContextMenuItems.blockCutToStorage();
ContextMenuItems.blockCopyToStorage();
ContextMenuItems.blockPasteFromStorage();

