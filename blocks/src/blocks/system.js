import {
  Blocks,
  FieldDropdown,
  FieldTextInput,
  ALIGN_RIGHT,
  Msg,
  utils
} from 'blockly';
import { updateShadow } from '../util/util';

import { createStatementCheckMixin } from './mixins'

Blocks['console_log'] = {
  init() {
    this.appendValueInput('TEXT')
      .appendField(new FieldDropdown([
        ['log', 'log'],
        ['info', 'info'],
      ]), 'METHOD')
      .setCheck(null);
    this.setStyle("system_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/system.html#console-log');
  }
}

Blocks['window_alert'] = {
  /**
   * Block for print statement.
   * @this {Block}
   */
  init() {
    this.appendValueInput('TEXT')
      .appendField('alert')
      .setCheck(null);
    this.setStyle("system_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/system.html#window-alert');
  }
};

/**
 * Common properties for the text_prompt_ext and text_prompt blocks
 * definitions.
 */
const TEXT_PROMPT_COMMON = {
  /**
   * Modify this block to have the correct output type.
   * @param {string} newOp Either 'TEXT' or 'NUMBER'.
   * @private
   * @this {Block}
   */
  updateType_: function (newOp) {
    this.outputConnection.setCheck(newOp === 'NUMBER' ? 'Number' : 'String');
  },
  /**
   * Create XML to represent the output type.
   * Backwards compatible serialization implementation.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function () {
    const container = utils.xml.createElement('mutation');
    container.setAttribute('type', this.getFieldValue('TYPE'));
    return container;
  },
  /**
   * Parse XML to restore the output type.
   * Backwards compatible serialization implementation.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    this.updateType_(xmlElement.getAttribute('type'));
  },
};

Blocks['text_prompt_ext'] = {
  ...TEXT_PROMPT_COMMON,
  /**
   * Block for prompt function (external message).
   * @this {Block}
   */
  init: function () {
    const TYPES = [
      [Msg['TEXT_PROMPT_TYPE_TEXT'], 'TEXT'],
      [Msg['TEXT_PROMPT_TYPE_NUMBER'], 'NUMBER'],
    ];
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/system.html#text-prompt-ext');
    this.setStyle('system_style');
    // Assign 'this' to a variable for use in the closures below.
    const thisBlock = this;
    const dropdown = new FieldDropdown(TYPES, function (newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendValueInput('TEXT')
      .appendField(dropdown, 'TYPE');
    this.setOutput(true, 'String');
    this.setTooltip(function () {
      return (thisBlock.getFieldValue('TYPE') === 'TEXT') ?
        Msg['TEXT_PROMPT_TOOLTIP_TEXT'] :
        Msg['TEXT_PROMPT_TOOLTIP_NUMBER'];
    });
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.
};

Blocks['execute_tab'] = {
  init() {
    const _this = this;
    this.appendDummyInput('TAB_INPUT')
      // .appendField(new FieldImage(tabIcon, 18, 18))
      .appendField('exec tab')
      .appendField(new FieldDropdown(_this.generateTabsMenu()), 'TAB');
    this.appendValueInput('TAB_ARG')
      .appendField('arg')
      .setCheck(null);
    this.setStyle('system_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Execute blocks/codes defined in a tab');
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#execute-tab");
  },
  mutationToDom() {
    const container = utils.xml.createElement('mutation');
    const tabTitle = this.getFieldValue('TAB');
    container.setAttribute('tabTitle', tabTitle);
    return container;
  },
  domToMutation(xmlElement) {
    const tabTitle = xmlElement.getAttribute('tabTitle');
    this.setFieldValue(tabTitle, 'TAB')
  },
  generateTabsMenu() {
    if (!block3d.tabManager.customTabs.length) return [['none', 'none']]
    return block3d.tabManager.customTabs.map(item => [item, item])
  }
}

Blocks['get_tab_arg'] = {
  init() {
    this.appendDummyInput()
      .appendField('tab arg');
    this.setStyle('system_style');
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip('Get tab arg');
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#get-tab-arg");
  }
}

Blocks['get_function_by_name'] = {
  init() {
    const name = this.appendValueInput('NAME')
      .appendField('get function');
    this.setStyle('system_style');
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip('Get a function defined with block');
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#get-function-by-name");
    updateShadow(name, 'TEXT', 'name')
  }
}

Blocks['set_get_glob_object'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && updateShadow(this.getInput('VALUE'), 'TEXT', '')
      }), 'METHOD')
      .appendField('glob')
      .appendField(new FieldTextInput('name'), 'KEY');
    this.setStyle('system_style');
    this.setInputsInline(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true);
    this.setTooltip('Sets or gets key of the global object VARS');
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#set-get-glob-vars");
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(this.getInput('VALUE'), 'TEXT', '')
  }
}

Blocks['set_get_local_storage_item'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    const key = this.appendValueInput('KEY')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && updateShadow(this.getInput('VALUE'), 'TEXT', '')
      }), 'METHOD')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('localStorage');
    this.setStyle('system_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets/gets local storage item");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#set-get-local-storage-item");
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(key, 'TEXT', 'key');
    updateShadow(this.getInput('VALUE'), 'TEXT', '');
  }
}

Blocks['local_storage_remove_item'] = {
  init() {
    const key = this.appendValueInput('KEY')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('remove');
    this.appendDummyInput()
      .appendField('for localStorage');
    this.setStyle('system_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("local storage remove item");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/system.html#local-storage-remove-item");
    updateShadow(key, 'TEXT', 'key')
  }
}

Blocks['advanced_comment'] = {
  init() {
    this.appendDummyInput()
      .appendField('//')
      .appendField(new FieldTextInput('some comments here...'), 'INPUT')
    this.setStyle("system_style");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/system.html#advanced-comment');
  }
}

Blocks['advanced_connect'] = {
  init() {
    this.appendValueInput("INPUT")
      .setCheck(null);
    this.setStyle("system_style");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/system.html#advanced-connect');
  }
}