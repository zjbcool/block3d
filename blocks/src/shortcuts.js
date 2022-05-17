import {
  ShortcutRegistry,
  Variables,
  Xml,
  utils,
  selected,
  clipboard,
  Events
} from 'blockly';

// 快捷键 shift+V 创建并设置变量
const createSetVariableBlockShortcut = {
  name: "createSetVariableBlock",
  callback: (workspace) => {
    Variables.createVariableButtonHandler(workspace, varName => {
      if (!varName) return;
      const wsMetrics = workspace.getMetrics();
      const varModel = workspace.getVariable(varName);
      const fieldDom = Variables.generateVariableFieldDom(varModel);
      const blockDom = utils.xml.createElement('block');
      blockDom.setAttribute('type', 'variables_set');
      blockDom.appendChild(fieldDom);
      const block = Xml.domToBlock(blockDom, workspace);
      if (selected) {
        // 移动到所选块附近
        const targetPos = selected.getRelativeToSurfaceXY().clone();
        targetPos.translate(20, selected.getHeightWidth().height + 20)
        block.moveTo(targetPos);
      } else {
        // 移动到工作区中心
        block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
      }
      workspace.centerOnBlock(block.id)
      setTimeout(() => {
        block.select();
      }, 50)
    });
    return true;
  },
};

ShortcutRegistry.registry.register(createSetVariableBlockShortcut);
const shiftV = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.V, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftV, createSetVariableBlockShortcut.name);

// 快捷键 alt+shift+V 创建并获取变量
const createGetVariableBlockShortcut = {
  name: "createGetVariableBlock",
  callback: (workspace) => {
    Variables.createVariableButtonHandler(workspace, varName => {
      if (!varName) return;
      const wsMetrics = workspace.getMetrics();
      const varModel = workspace.getVariable(varName);
      const fieldDom = Variables.generateVariableFieldDom(varModel);
      const blockDom = utils.xml.createElement('block');
      blockDom.setAttribute('type', 'variables_get');
      blockDom.appendChild(fieldDom);
      const block = Xml.domToBlock(blockDom, workspace);
      if (selected) {
        // 移动到所选块附近
        const targetPos = selected.getRelativeToSurfaceXY().clone();
        targetPos.translate(20, selected.getHeightWidth().height + 20)
        block.moveTo(targetPos);
      } else {
        // 移动到工作区中心
        block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
      }
      workspace.centerOnBlock(block.id)
      setTimeout(() => {
        block.select();
      }, 50)
    });
    return true;
  },
};

ShortcutRegistry.registry.register(createGetVariableBlockShortcut);
const altShiftV = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.V, [utils.KeyCodes.ALT, utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(altShiftV, createGetVariableBlockShortcut.name);

// 快捷键 shift+C 创建advanced_comment拼图
const createAdvancedCommentBlockShortcut = {
  name: "createAdvancedCommentBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockDom = utils.xml.createElement('block');
    blockDom.setAttribute('type', 'advanced_comment');
    const block = Xml.domToBlock(blockDom, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};
ShortcutRegistry.registry.register(createAdvancedCommentBlockShortcut);
const shiftC = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.C, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftC, createAdvancedCommentBlockShortcut.name);

// 快捷键 shift+alt+C 创建connect拼图
const createAdvancedConnectBlockShortcut = {
  name: "createAdvancedConnectBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockDom = utils.xml.createElement('block');
    blockDom.setAttribute('type', 'advanced_connect');
    const block = Xml.domToBlock(blockDom, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createAdvancedConnectBlockShortcut);
const shiftAltC = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.C, [utils.KeyCodes.SHIFT, utils.KeyCodes.ALT]);
ShortcutRegistry.registry.addKeyMapping(shiftAltC, createAdvancedConnectBlockShortcut.name);


// 快捷键 shift+L 创建console.log拼图
const createConsoleLogBlockShortcut = {
  name: "createConsoleLogBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'console_log');

    const value = utils.xml.createElement('value')
    value.setAttribute('name', 'TEXT');
    blockElem.appendChild(value);

    const shadow = utils.xml.createElement('shadow');
    shadow.setAttribute('type', 'text');
    value.appendChild(shadow);

    const field = utils.xml.createElement('field');
    field.setAttribute('name', 'TEXT');
    field.innerHTML = '';
    shadow.appendChild(field);

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createConsoleLogBlockShortcut);
const shiftL = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.L, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftL, createConsoleLogBlockShortcut.name);

// 快捷键 shift+O 创建object_create拼图
const createObjectBlockShortcut = {
  name: "createObjectBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'object_create');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createObjectBlockShortcut);
const shiftO = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.O, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftO, createObjectBlockShortcut.name);

// 快捷键 shift+alt+O 创建object_key_value拼图
const createObjectKeyValueBlockShortcut = {
  name: "createObjectKeyValueBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'object_key_value');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createObjectKeyValueBlockShortcut);
const shiftAltO = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.O, [utils.KeyCodes.SHIFT, utils.KeyCodes.ALT]);
ShortcutRegistry.registry.addKeyMapping(shiftAltO, createObjectKeyValueBlockShortcut.name);

// 快捷键 shift+T 创建text拼图
const createTextShortcut = {
  name: "createTextBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'text');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createTextShortcut);
const shiftT = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.T, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftT, createTextShortcut.name);

// 快捷键 shift+N 创建math_number拼图
const createMathNumberShortcut = {
  name: "createMathNumberBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'math_number');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createMathNumberShortcut);
const shiftN = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.N, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftN, createMathNumberShortcut.name);

// 快捷键 shift+B 创建logic_boolean拼图
const createLogicBooleanShortcut = {
  name: "createLogicBooleanBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'logic_boolean');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createLogicBooleanShortcut);
const shiftB = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.B, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftB, createLogicBooleanShortcut.name);

// 快捷键 shift+A create_array拼图
const createArrayShortcut = {
  name: "createArrayBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'array_create');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createArrayShortcut);
const shiftA = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.A, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftA, createArrayShortcut.name);

// 快捷键 shift+alt+A 创建create_array_element拼图
const createArrayElementShortcut = {
  name: "createArrayElementBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'array_create_element');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createArrayElementShortcut);
const shiftAltA = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.A, [utils.KeyCodes.SHIFT, utils.KeyCodes.ALT]);
ShortcutRegistry.registry.addKeyMapping(shiftAltA, createArrayElementShortcut.name);

// 快捷键 shift+F 创建procedures_defnoreturn拼图
const createFunctionShortcut = {
  name: "createFunctionBlock",
  callback: (workspace) => {
    const wsMetrics = workspace.getMetrics();
    const blockElem = utils.xml.createElement('block');
    blockElem.setAttribute('type', 'procedures_defnoreturn');

    const block = Xml.domToBlock(blockElem, workspace);
    if (selected) {
      // 移动到所选块附近
      const targetPos = selected.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, selected.getHeightWidth().height + 20)
      block.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      block.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(block.id)
    setTimeout(() => {
      block.select();
    }, 50)
    return true;
  },
};

ShortcutRegistry.registry.register(createFunctionShortcut);
const shiftF = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.F, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftF, createFunctionShortcut.name);

// 在拼图'execute_tab'执行Tab键，跳转到选项卡
const goToTabShortcute = {
  name: 'goToTab',
  preconditionFn: function (workspace) {
    if (selected && !selected.isInFlyout && selected.type === 'execute_tab')
      return true
    else
      return false
  },
  callback: function (workspace) {
    const tabTitle = selected.getFieldValue('TAB');
    const tab = block3d.tabManager.getTabByTitle(tabTitle);
    block3d.tabManager.setActive(tab);
    return true;
  },
};
ShortcutRegistry.registry.register(goToTabShortcute);
ShortcutRegistry.registry.addKeyMapping(utils.KeyCodes.TAB, goToTabShortcute.name);

// shift+D 原地复制拼图
const duplicateBlockShortcute = {
  name: 'duplicateBlock',
  preconditionFn: function (workspace) {
    if (selected && !selected.isInFlyout && selected.isDeletable() && selected.isMovable() && selected.isDuplicatable()) return true
  },
  callback: function (workspace) {
    clipboard.duplicate(selected);
    return true;
  },
};
ShortcutRegistry.registry.register(duplicateBlockShortcute);
const shiftD = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.D, [utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(shiftD, duplicateBlockShortcute.name);

// ctrl + D启用/禁用拼图
const enableDisableBlockShortcute = {
  name: 'enableDisableBlock',
  preconditionFn: function (workspace) {
    const block = selected;
    if (block && !block.isInFlyout && workspace.options.disable && block.isEditable()) return true
  },
  callback: function (workspace) {
    const block = selected;
    block.setEnabled(!block.isEnabled());
    return true;
  },
}
ShortcutRegistry.registry.register(enableDisableBlockShortcute);
const ctrlD = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.D, [utils.KeyCodes.CTRL]);
ShortcutRegistry.registry.addKeyMapping(ctrlD, enableDisableBlockShortcute.name);

// alt + shift + F 整理工作区拼图
const cleanUpWorkspaceShortcute = {
  name: 'cleanUpWorkspace',
  preconditionFn: function (workspace) {
    if (workspace.getTopBlocks(false).length > 1) return true
  },
  callback: function (workspace) {
    workspace.cleanUp();
    return true;
  },
}
ShortcutRegistry.registry.register(cleanUpWorkspaceShortcute);
const altShiftF = ShortcutRegistry.registry.createSerializedKey(utils.KeyCodes.F, [utils.KeyCodes.ALT, utils.KeyCodes.SHIFT]);
ShortcutRegistry.registry.addKeyMapping(altShiftF, cleanUpWorkspaceShortcute.name);