import { Blocks, ALIGN_RIGHT, FieldDropdown, FieldCheckbox, Msg, common, utils, ConnectionType } from 'blockly';
import { updateShadow } from '../util/util';

import {
  createSurroundCheckMixin,
  createContextMenuBlockMixin
} from './mixins'

const xmlUtils = utils.xml;

Blocks['array_create'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField("create array")
      .appendField("isEmpty")
      .appendField(new FieldCheckbox('TRUE', isEmpty => _this.updateShape_(isEmpty)), 'EMPTY');
    this.setInputsInline(true);
    this.setStyle('list_style');
    this.setOutput(true, 'Array');
    this.setTooltip("Create a new array");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-create");
    this.mixin(createContextMenuBlockMixin('array_create_element', 'element', [['ELEMENT', 'TEXT', 'value']]));
    this.updateShape_(true);
  },
  updateShape_(isEmpty) {
    this.getInput('ITEM') && this.removeInput('ITEM');
    isEmpty === 'FALSE' && this.appendStatementInput("ITEM");
  }
}
// 用于影子块
Blocks['empty_array'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField("array");
    this.setInputsInline(true);
    this.setStyle('list_style');
    this.setOutput(true, 'Array');
    this.setTooltip("Create a empty array");
    this.setHelpUrl("");
  }
}

Blocks['array_create_element'] = {
  init() {
    this.appendValueInput('ELEMENT')
      .appendField('element')
      .setCheck(null);
    this.setStyle('list_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('array_create'));
  }
}
// 修改内置blocks
const blocks = common.createBlockDefinitionsFromJsonArray([
  // Block for creating a list with one element repeated.
  {
    'type': 'array_repeat',
    'message0': '%{BKY_LISTS_REPEAT_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'ITEM',
      },
      {
        'type': 'input_value',
        'name': 'NUM',
        'check': 'Number',
      },
    ],
    'output': 'Array',
    'style': 'list_blocks',
    'tooltip': '%{BKY_LISTS_REPEAT_TOOLTIP}',
    'helpUrl': 'https://zjbku.com/block3d/blocks-reference/array.html#array-repeat',
  },
  // Block for reversing a list.
  {
    'type': 'array_reverse',
    'message0': '%{BKY_LISTS_REVERSE_MESSAGE0}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'LIST',
        'check': 'Array',
      },
    ],
    'output': 'Array',
    'inputsInline': true,
    'style': 'list_blocks',
    'tooltip': '%{BKY_LISTS_REVERSE_TOOLTIP}',
    'helpUrl': 'https://zjbku.com/block3d/blocks-reference/array.html#array-reverse',
  },
  // Block for checking if a list is empty
  {
    'type': 'array_is_empty',
    'message0': '%{BKY_LISTS_ISEMPTY_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String', 'Array'],
      },
    ],
    'output': 'Boolean',
    'style': 'list_blocks',
    'tooltip': '%{BKY_LISTS_ISEMPTY_TOOLTIP}',
    'helpUrl': 'https://zjbku.com/block3d/blocks-reference/array.html#array-is-empty',
  },
  // Block for getting the list length
  {
    'type': 'array_length',
    'message0': '%{BKY_LISTS_LENGTH_TITLE}',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String', 'Array'],
      },
    ],
    'output': 'Number',
    'style': 'list_blocks',
    'tooltip': '%{BKY_LISTS_LENGTH_TOOLTIP}',
    'helpUrl': 'https://zjbku.com/block3d/blocks-reference/array.html#array-length',
  },
]);

blocks['array_index_of'] = {
  /**
   * Block for finding an item in the list.
   * @this {Block}
   */
  init: function () {
    const OPERATORS = [
      [Msg['LISTS_INDEX_OF_FIRST'], 'FIRST'],
      [Msg['LISTS_INDEX_OF_LAST'], 'LAST'],
    ];
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/array.html#array-index-of');
    this.setStyle('list_blocks');
    this.setOutput(true, 'Number');
    this.appendValueInput('VALUE').setCheck('Array').appendField(
      Msg['LISTS_INDEX_OF_INPUT_IN_LIST']);
    this.appendValueInput('FIND').appendField(
      new FieldDropdown(OPERATORS), 'END');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    const thisBlock = this;
    this.setTooltip(function () {
      return Msg['LISTS_INDEX_OF_TOOLTIP'].replace(
        '%1', thisBlock.workspace.options.oneBasedIndex ? '0' : '-1');
    });
  },
};

blocks['array_get_index'] = {
  /**
   * Block for getting element at index.
   * @this {Block}
   */
  init: function () {
    const MODE = [
      [Msg['LISTS_GET_INDEX_GET'], 'GET'],
      [Msg['LISTS_GET_INDEX_GET_REMOVE'], 'GET_REMOVE'],
      [Msg['LISTS_GET_INDEX_REMOVE'], 'REMOVE'],
    ];
    this.WHERE_OPTIONS = [
      [Msg['LISTS_GET_INDEX_FROM_START'], 'FROM_START'],
      [Msg['LISTS_GET_INDEX_FROM_END'], 'FROM_END'],
      [Msg['LISTS_GET_INDEX_FIRST'], 'FIRST'],
      [Msg['LISTS_GET_INDEX_LAST'], 'LAST'],
      [Msg['LISTS_GET_INDEX_RANDOM'], 'RANDOM'],
    ];
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/array.html#array-get-index');
    this.setStyle('list_blocks');
    const modeMenu = new FieldDropdown(
      MODE,
      /**
       * @param {*} value The input value.
       * @this {FieldDropdown}
       */
      function (value) {
        const isStatement = (value === 'REMOVE');
        this.getSourceBlock().updateStatement_(isStatement);
      });
    this.appendValueInput('VALUE').setCheck('Array').appendField(
      Msg['LISTS_GET_INDEX_INPUT_IN_LIST']);
    this.appendDummyInput()
      .appendField(modeMenu, 'MODE')
      .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    if (Msg['LISTS_GET_INDEX_TAIL']) {
      this.appendDummyInput('TAIL').appendField(Msg['LISTS_GET_INDEX_TAIL']);
    }
    this.setInputsInline(true);
    this.setOutput(true);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    const thisBlock = this;
    this.setTooltip(function () {
      const mode = thisBlock.getFieldValue('MODE');
      const where = thisBlock.getFieldValue('WHERE');
      let tooltip = '';
      switch (mode + ' ' + where) {
        case 'GET FROM_START':
        case 'GET FROM_END':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_FROM'];
          break;
        case 'GET FIRST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_FIRST'];
          break;
        case 'GET LAST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_LAST'];
          break;
        case 'GET RANDOM':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_RANDOM'];
          break;
        case 'GET_REMOVE FROM_START':
        case 'GET_REMOVE FROM_END':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM'];
          break;
        case 'GET_REMOVE FIRST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST'];
          break;
        case 'GET_REMOVE LAST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST'];
          break;
        case 'GET_REMOVE RANDOM':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM'];
          break;
        case 'REMOVE FROM_START':
        case 'REMOVE FROM_END':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM'];
          break;
        case 'REMOVE FIRST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST'];
          break;
        case 'REMOVE LAST':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST'];
          break;
        case 'REMOVE RANDOM':
          tooltip = Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM'];
          break;
      }
      if (where === 'FROM_START' || where === 'FROM_END') {
        const msg = (where === 'FROM_START') ?
          Msg['LISTS_INDEX_FROM_START_TOOLTIP'] :
          Msg['LISTS_INDEX_FROM_END_TOOLTIP'];
        tooltip += '  ' +
          msg.replace(
            '%1', thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
      }
      return tooltip;
    });
  },
  /**
   * Create XML to represent whether the block is a statement or a value.
   * Also represent whether there is an 'AT' input.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function () {
    const container = xmlUtils.createElement('mutation');
    const isStatement = !this.outputConnection;
    container.setAttribute('statement', isStatement);
    const isAt = this.getInput('AT').type === ConnectionType.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'statement' defaults to false and 'at' defaults to true.
    const isStatement = (xmlElement.getAttribute('statement') === 'true');
    this.updateStatement_(isStatement);
    const isAt = (xmlElement.getAttribute('at') !== 'false');
    this.updateAt_(isAt);
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.

  /**
   * Switch between a value block and a statement block.
   * @param {boolean} newStatement True if the block should be a statement.
   *     False if the block should be a value.
   * @private
   * @this {Block}
   */
  updateStatement_: function (newStatement) {
    const oldStatement = !this.outputConnection;
    if (newStatement !== oldStatement) {
      this.unplug(true, true);
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
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this {Block}
   */
  updateAt_: function (isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Msg['ORDINAL_NUMBER_SUFFIX']) {
        this.appendDummyInput('ORDINAL').appendField(
          Msg['ORDINAL_NUMBER_SUFFIX']);
      }
    } else {
      this.appendDummyInput('AT');
    }
    const menu = new FieldDropdown(
      this.WHERE_OPTIONS,
      /**
       * @param {*} value The input value.
       * @this {FieldDropdown}
       * @returns {null|undefined} Null if the field has been replaced;
       *     otherwise undefined.
       */
      function (value) {
        const newAt = (value === 'FROM_START') || (value === 'FROM_END');
        // The 'isAt' variable is available due to this function being a
        // closure.
        if (newAt !== isAt) {
          const block = this.getSourceBlock();
          block.updateAt_(newAt);
          // This menu has been destroyed and replaced.  Update the
          // replacement.
          block.setFieldValue(value, 'WHERE');
          return null;
        }
        return undefined;
      });
    this.getInput('AT').appendField(menu, 'WHERE');
    if (Msg['LISTS_GET_INDEX_TAIL']) {
      this.moveInputBefore('TAIL', null);
    }
  },
};

blocks['array_set_index'] = {
  /**
   * Block for setting the element at index.
   * @this {Block}
   */
  init: function () {
    const MODE = [
      [Msg['LISTS_SET_INDEX_SET'], 'SET'],
      [Msg['LISTS_SET_INDEX_INSERT'], 'INSERT'],
    ];
    this.WHERE_OPTIONS = [
      [Msg['LISTS_GET_INDEX_FROM_START'], 'FROM_START'],
      [Msg['LISTS_GET_INDEX_FROM_END'], 'FROM_END'],
      [Msg['LISTS_GET_INDEX_FIRST'], 'FIRST'],
      [Msg['LISTS_GET_INDEX_LAST'], 'LAST'],
      [Msg['LISTS_GET_INDEX_RANDOM'], 'RANDOM'],
    ];
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/array.html#array-set-index');
    this.setStyle('list_blocks');
    this.appendValueInput('LIST').setCheck('Array').appendField(
      Msg['LISTS_SET_INDEX_INPUT_IN_LIST']);
    this.appendDummyInput()
      .appendField(new FieldDropdown(MODE), 'MODE')
      .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    this.appendValueInput('TO').appendField(Msg['LISTS_SET_INDEX_INPUT_TO']);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Msg['LISTS_SET_INDEX_TOOLTIP']);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    const thisBlock = this;
    this.setTooltip(function () {
      const mode = thisBlock.getFieldValue('MODE');
      const where = thisBlock.getFieldValue('WHERE');
      let tooltip = '';
      switch (mode + ' ' + where) {
        case 'SET FROM_START':
        case 'SET FROM_END':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_SET_FROM'];
          break;
        case 'SET FIRST':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_SET_FIRST'];
          break;
        case 'SET LAST':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_SET_LAST'];
          break;
        case 'SET RANDOM':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_SET_RANDOM'];
          break;
        case 'INSERT FROM_START':
        case 'INSERT FROM_END':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FROM'];
          break;
        case 'INSERT FIRST':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST'];
          break;
        case 'INSERT LAST':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_LAST'];
          break;
        case 'INSERT RANDOM':
          tooltip = Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM'];
          break;
      }
      if (where === 'FROM_START' || where === 'FROM_END') {
        tooltip += '  ' +
          Msg['LISTS_INDEX_FROM_START_TOOLTIP'].replace(
            '%1', thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
      }
      return tooltip;
    });
  },
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function () {
    const container = xmlUtils.createElement('mutation');
    const isAt = this.getInput('AT').type === ConnectionType.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    const isAt = (xmlElement.getAttribute('at') !== 'false');
    this.updateAt_(isAt);
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.

  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this {Block}
   */
  updateAt_: function (isAt) {
    // Destroy old 'AT' and 'ORDINAL' input.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Msg['ORDINAL_NUMBER_SUFFIX']) {
        this.appendDummyInput('ORDINAL').appendField(
          Msg['ORDINAL_NUMBER_SUFFIX']);
      }
    } else {
      this.appendDummyInput('AT');
    }
    const menu = new FieldDropdown(
      this.WHERE_OPTIONS,
      /**
       * @param {*} value The input value.
       * @this {FieldDropdown}
       * @returns {null|undefined} Null if the field has been replaced;
       *     otherwise undefined.
       */
      function (value) {
        const newAt = (value === 'FROM_START') || (value === 'FROM_END');
        // The 'isAt' variable is available due to this function being a
        // closure.
        if (newAt !== isAt) {
          const block = this.getSourceBlock();
          block.updateAt_(newAt);
          // This menu has been destroyed and replaced.  Update the
          // replacement.
          block.setFieldValue(value, 'WHERE');
          return null;
        }
        return undefined;
      });
    this.moveInputBefore('AT', 'TO');
    if (this.getInput('ORDINAL')) {
      this.moveInputBefore('ORDINAL', 'TO');
    }

    this.getInput('AT').appendField(menu, 'WHERE');
  },
};

blocks['array_get_subarray'] = {
  /**
   * Block for getting sublist.
   * @this {Block}
   */
  init: function () {
    this['WHERE_OPTIONS_1'] = [
      [Msg['LISTS_GET_SUBLIST_START_FROM_START'], 'FROM_START'],
      [Msg['LISTS_GET_SUBLIST_START_FROM_END'], 'FROM_END'],
      [Msg['LISTS_GET_SUBLIST_START_FIRST'], 'FIRST'],
    ];
    this['WHERE_OPTIONS_2'] = [
      [Msg['LISTS_GET_SUBLIST_END_FROM_START'], 'FROM_START'],
      [Msg['LISTS_GET_SUBLIST_END_FROM_END'], 'FROM_END'],
      [Msg['LISTS_GET_SUBLIST_END_LAST'], 'LAST'],
    ];
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/array.html#array-get-sublist');
    this.setStyle('list_blocks');
    this.appendValueInput('LIST').setCheck('Array').appendField(
      Msg['LISTS_GET_SUBLIST_INPUT_IN_LIST']);
    this.appendDummyInput('AT1');
    this.appendDummyInput('AT2');
    if (Msg['LISTS_GET_SUBLIST_TAIL']) {
      this.appendDummyInput('TAIL').appendField(Msg['LISTS_GET_SUBLIST_TAIL']);
    }
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.updateAt_(1, true);
    this.updateAt_(2, true);
    this.setTooltip(Msg['LISTS_GET_SUBLIST_TOOLTIP']);
  },
  /**
   * Create XML to represent whether there are 'AT' inputs.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function () {
    const container = xmlUtils.createElement('mutation');
    const isAt1 = this.getInput('AT1').type === ConnectionType.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    const isAt2 = this.getInput('AT2').type === ConnectionType.INPUT_VALUE;
    container.setAttribute('at2', isAt2);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    const isAt1 = (xmlElement.getAttribute('at1') === 'true');
    const isAt2 = (xmlElement.getAttribute('at2') === 'true');
    this.updateAt_(1, isAt1);
    this.updateAt_(2, isAt2);
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.

  /**
   * Create or delete an input for a numeric index.
   * This block has two such inputs, independent of each other.
   * @param {number} n Specify first or second input (1 or 2).
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this {Block}
   */
  updateAt_: function (n, isAt) {
    // Create or delete an input for the numeric index.
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT' + n);
    this.removeInput('ORDINAL' + n, true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT' + n).setCheck('Number');
      if (Msg['ORDINAL_NUMBER_SUFFIX']) {
        this.appendDummyInput('ORDINAL' + n)
          .appendField(Msg['ORDINAL_NUMBER_SUFFIX']);
      }
    } else {
      this.appendDummyInput('AT' + n);
    }
    const menu = new FieldDropdown(
      this['WHERE_OPTIONS_' + n],
      /**
       * @param {*} value The input value.
       * @this {FieldDropdown}
       * @returns {null|undefined} Null if the field has been replaced;
       *     otherwise undefined.
       */
      function (value) {
        const newAt = (value === 'FROM_START') || (value === 'FROM_END');
        // The 'isAt' variable is available due to this function being a
        // closure.
        if (newAt !== isAt) {
          const block = this.getSourceBlock();
          block.updateAt_(n, newAt);
          // This menu has been destroyed and replaced.
          // Update the replacement.
          block.setFieldValue(value, 'WHERE' + n);
          return null;
        }
      });
    this.getInput('AT' + n).appendField(menu, 'WHERE' + n);
    if (n === 1) {
      this.moveInputBefore('AT1', 'AT2');
      if (this.getInput('ORDINAL1')) {
        this.moveInputBefore('ORDINAL1', 'AT2');
      }
    }
    if (Msg['LISTS_GET_SUBLIST_TAIL']) {
      this.moveInputBefore('TAIL', null);
    }
  },
};

blocks['array_sort'] = {
  /**
   * Block for sorting a list.
   * @this {Block}
   */
  init: function () {
    this.jsonInit({
      'message0': Msg['LISTS_SORT_TITLE'],
      'args0': [
        {
          'type': 'field_dropdown',
          'name': 'TYPE',
          'options': [
            [Msg['LISTS_SORT_TYPE_NUMERIC'], 'NUMERIC'],
            [Msg['LISTS_SORT_TYPE_TEXT'], 'TEXT'],
            [Msg['LISTS_SORT_TYPE_IGNORECASE'], 'IGNORE_CASE'],
          ],
        },
        {
          'type': 'field_dropdown',
          'name': 'DIRECTION',
          'options': [
            [Msg['LISTS_SORT_ORDER_ASCENDING'], '1'],
            [Msg['LISTS_SORT_ORDER_DESCENDING'], '-1'],
          ],
        },
        {
          'type': 'input_value',
          'name': 'LIST',
          'check': 'Array',
        },
      ],
      'output': 'Array',
      'style': 'list_blocks',
      'tooltip': Msg['LISTS_SORT_TOOLTIP'],
      'helpUrl': 'https://zjbku.com/block3d/blocks-reference/array.html#array-sort',
    });
  },
};

blocks['array_split'] = {
  /**
   * Block for splitting text into a list, or joining a list into text.
   * @this {Block}
   */
  init: function () {
    // Assign 'this' to a variable for use in the closures below.
    const thisBlock = this;
    const dropdown = new FieldDropdown(
      [
        [Msg['LISTS_SPLIT_LIST_FROM_TEXT'], 'SPLIT'],
        [Msg['LISTS_SPLIT_TEXT_FROM_LIST'], 'JOIN'],
      ],
      function (newMode) {
        thisBlock.updateType_(newMode);
      });
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/array.html#array-split');
    this.setStyle('list_blocks');
    this.appendValueInput('INPUT').setCheck('String').appendField(
      dropdown, 'MODE');
    const delim = this.appendValueInput('DELIM').setCheck('String').appendField(
      Msg['LISTS_SPLIT_WITH_DELIMITER']);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setTooltip(function () {
      const mode = thisBlock.getFieldValue('MODE');
      if (mode === 'SPLIT') {
        return Msg['LISTS_SPLIT_TOOLTIP_SPLIT'];
      } else if (mode === 'JOIN') {
        return Msg['LISTS_SPLIT_TOOLTIP_JOIN'];
      }
      throw Error('Unknown mode: ' + mode);
    });
    updateShadow(delim, 'TEXT', ',')
  },
  /**
   * Modify this block to have the correct input and output types.
   * @param {string} newMode Either 'SPLIT' or 'JOIN'.
   * @private
   * @this {Block}
   */
  updateType_: function (newMode) {
    const mode = this.getFieldValue('MODE');
    if (mode !== newMode) {
      const inputConnection = this.getInput('INPUT').connection;
      inputConnection.setShadowDom(null);
      const inputBlock = inputConnection.targetBlock();
      if (inputBlock) {
        inputConnection.disconnect();
        if (inputBlock.isShadow()) {
          inputBlock.dispose();
        } else {
          this.bumpNeighbours();
        }
      }
    }
    if (newMode === 'SPLIT') {
      this.outputConnection.setCheck('Array');
      this.getInput('INPUT').setCheck('String');
    } else {
      this.outputConnection.setCheck('String');
      this.getInput('INPUT').setCheck('Array');
    }
  },
  /**
   * Create XML to represent the input and output types.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function () {
    const container = xmlUtils.createElement('mutation');
    container.setAttribute('mode', this.getFieldValue('MODE'));
    return container;
  },
  /**
   * Parse XML to restore the input and output types.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    this.updateType_(xmlElement.getAttribute('mode'));
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.
};

common.defineBlocks(blocks);

Blocks['array_includes'] = {
  init() {
    this.appendValueInput('ARRAY')
      .appendField('in array')
      .setCheck('Array');
    this.appendValueInput('ITEM')
      .appendField('includes')
      .setCheck(null);
    this.setStyle("list_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip("determines whether an array includes a certain value among its entries, returning true or false as appropriate.");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-includes");
  }
}

Blocks['array_for_each'] = {
  init() {
    this.appendValueInput('LIST')
      .appendField('in array')
      .setCheck('Array');
    this.appendDummyInput()
      .appendField('forEach element/index');
    this.appendStatementInput('DO_STATEMENT')
      .appendField('do');
    this.setStyle('list_style');
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip('forEach');
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/array.html#array-for-each");
    this.mixin(createContextMenuBlockMixin('array_element_index', 'element/index'));
  }
}

Blocks['array_element_index'] = {
  init() {
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['element', 'element'],
        ['index', 'index'],
      ]), 'ITEM');
    this.setStyle('list_style');
    this.setInputsInline(!0);
    this.setOutput(true, null);
    this.setTooltip('返回在循环内部每次迭代的元素或索引，仅用于forEach拼图内部');
    this.setHelpUrl("");
    this.mixin(createSurroundCheckMixin(['array_for_each', 'array_find']));
  }
}

Blocks['array_find'] = {
  init() {
    const list = this.appendValueInput('LIST')
      .appendField('in array')
      .setCheck('Array');
    this.appendValueInput('CONDITION')
      .appendField('find element/index');
    this.setStyle('list_style');
    this.setInputsInline(!0);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl("");
    this.mixin(createContextMenuBlockMixin('array_element_index', 'element/index'));
    updateShadow(list, 'ARRAY', '')
  }
}