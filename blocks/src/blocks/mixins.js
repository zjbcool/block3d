import {
  Block,
  Variables,
  utils,
  Msg,
  ContextMenu,
  Events,
  ConnectionType
} from 'blockly'

import { setShadowStr } from '../util/util'

const xmlUtils = utils.xml;

/**
 * 检测当前拼图是否处于指定拼图的内部
 * @param {string | string[]} surroundBlock 当前拼图应处于其内部的拼图
 * @returns 
 */
function createSurroundCheckMixin(surroundBlock) {
  return {
    /**
     * 判断该拼图是否在create object拼图内部
     * @return {Block} 
     * @this {Block}
     */
    getSurround() {
      let block = this;
      do {
        if (block.type == surroundBlock || surroundBlock.includes(block.type)) {
          return block;
        }
        block = block.getSurroundParent();
      } while (block);
      return null;
    },

    /**
     * Called whenever anything on the workspace changes.
     * Add warning if this flow block is not nested inside a loop.
     * @param {!AbstractEvent} e Change event.
     * @this {Block}
     */
    onchange(e) {
      // Don't change state if:
      //   * It's at the start of a drag.
      //   * It's not a move event.
      if (!this.workspace.isDragging || this.workspace.isDragging() ||
        e.type !== Events.BLOCK_MOVE) {
        return;
      }
      const enabled = this.getSurround(this);
      this.setWarningText(
        enabled ? null : `This block may only be used within \"${surroundBlock}\" block.`);
      if (!this.isInFlyout) {
        const group = Events.getGroup();
        // Makes it so the move and the disable event get undone together.
        Events.setGroup(e.group);
        this.setEnabled(enabled);
        Events.setGroup(group);
      }
    }
  };
}

// create_set_shapes 拼图 右键 -> 选项
const CUSTOM_CONTEXT_MENU_MESH_CREATE_SET_SHAPES_OPTION_MIXIN = {
  customContextMenu: function (options) {
    if (!this.isInFlyout) {
      const xmlBlock = utils.xml.createElement('block');
      const shapeType = this.getFieldValue('TYPE');
      xmlBlock.setAttribute('type', `mesh_create_${shapeType.toLowerCase()}_option`);
      const option = {
        enabled: this.workspace.remainingCapacity() > 0,
        text: `${Msg.CREATE_BLOCK} 'option'`,
        callback: ContextMenu.callbackFactory(this, xmlBlock)
      };
      options.push(option);
    }
  },
};

/**
 * 生成在右键菜单中添加创建拼图项目的混入
 * @param {string} type 要创建的拼图类型
 * @param {string} text 在菜单上显示的名称
 * @param {string} valueName 可选，shadow block的Input名称
 * @param {string} shadowName 可选，shadow block的字段名称 <field name = 'shadowName'>shadowStr</field>
 * @param {string} shadowStr 可选，shadow block的值，默认为'value'
 * 
 * 用例:
 * this.mixin(createBlockWithContextMenuMixin('create_array_element', 'create element', 'ELEMENT', 'TEXT', 'value'));
 */
function createBlockWithContextMenuMixin(type, text, valueName, shadowName, shadowStr) {
  return {
    customContextMenu: function (options) {
      if (!this.isInFlyout) {
        const option = {
          enabled: this.workspace.remainingCapacity() > 0,
          text: `${Msg.CREATE_BLOCK} ${text}`
        };
        const xmlBlock = utils.xml.createElement('block');
        xmlBlock.setAttribute('type', type);
        // 创建变量
        if (type === 'variables_get' || type === 'variables_set') {
          valueName = valueName || 'VAR';
          const varModel = this.workspace.getVariableById(this.getFieldValue(valueName));
          const fieldDom = Variables.generateVariableFieldDom(varModel);
          xmlBlock.appendChild(fieldDom);
        } else {
          //创建shadow block
          if (valueName && shadowName && shadowStr) {
            const value = utils.xml.createElement('value')
            value.setAttribute('name', valueName);
            value.innerHTML = setShadowStr(shadowName, shadowStr);
            xmlBlock.appendChild(value)
          }
        }
        option.callback = ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    }
  }
}
/**
 * 右键创建拼图混入
 * @param {string} type 要创建的拼图类型
 * @param {string} text 在菜单上显示的名称
 * 用例:
 * this.mixin(createBlockWithContextMenuMixin('create_array_element', 'create element');
 */
function createContextMenuBlockMixin(type, text) {
  return {
    customContextMenu: function (options) {
      if (!this.isInFlyout) {
        const option = {
          enabled: this.workspace.remainingCapacity() > 0,
          text: `${Msg.CREATE_BLOCK} ${text}`
        };
        const xmlBlock = utils.xml.createElement('block');
        xmlBlock.setAttribute('type', type);

        if (type === 'variables_get' || type === 'variables_set') {
          // 变量字段名称必须为'VAR'
          const varModel = this.workspace.getVariableById(this.getFieldValue('VAR'));
          const fieldDom = Variables.generateVariableFieldDom(varModel);
          xmlBlock.appendChild(fieldDom);
        }
        option.callback = ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    }
  }
}
/**
 * 检测拼图是statement还是value，并改变拼图外观
 * 如果是value，创建一个ValueInput，否则创建DummyInput
 * 用于set/get拼图
 * @returns 
 */
function createStatementCheckMixin() {
  return {
    /**
   * 创建xml表示block是statement还是value
   * 另外，标记'VALUE'input
   * @return {!Element} XML storage element.
   * @this {Block}
   */
    mutationToDom() {
      const container = xmlUtils.createElement('mutation');
      const isStatement = !this.outputConnection;
      container.setAttribute('statement', isStatement);
      const isValueInpute = this.getInput('VALUE').type === ConnectionType.INPUT_VALUE;
      container.setAttribute('valueInput', isValueInpute);
      return container;
    },
    /**
     * 编译 XML 存储 'VALUE' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {Block}
     */
    domToMutation(xmlElement) {
      const isStatement = (xmlElement.getAttribute('statement') === 'true');
      this.updateShape_(isStatement);
      const isValueInpute = (xmlElement.getAttribute('valueInput') !== 'false');
      this.updateValueInput_(isValueInpute);
    },
    updateShape_(newStatement) {
      const oldStatement = !this.outputConnection;
      if (newStatement !== oldStatement) {
        // 从它的上级块上拔下这个块。如果此块是statement，则可选择将下方的块与顶部的块重新连接。
        this.unplug(true);
        // this.unplug(true, true);
        if (newStatement) {
          this.setOutput(false);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        } else {
          this.setPreviousStatement(false);
          this.setNextStatement(false);
          this.setOutput(true);
        }
      }
    },
    updateValueInput_(isValueInpute) {
      this.getInput('VALUE') && this.removeInput('VALUE');
      if (isValueInpute) {
        this.appendValueInput('VALUE').appendField('to');
      } else {
        this.appendDummyInput('VALUE')
      }
    }
  }
}

export {
  createSurroundCheckMixin,
  createBlockWithContextMenuMixin,
  createContextMenuBlockMixin,
  createStatementCheckMixin,
  CUSTOM_CONTEXT_MENU_MESH_CREATE_SET_SHAPES_OPTION_MIXIN,
}