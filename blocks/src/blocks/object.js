import {
  Blocks,
  ALIGN_RIGHT,
  FieldTextInput,
  FieldDropdown,
  FieldCheckbox,
} from 'blockly'
import { updateShadow } from '../util/util';
import {
  createSurroundCheckMixin,
  createContextMenuBlockMixin,
  createStatementCheckMixin
} from './mixins'

Blocks['object_create'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField("create object")
      .appendField("isEmpty")
      .appendField(new FieldCheckbox('TRUE', isEmpty => _this.updateShape_(isEmpty)), 'EMPTY');
    this.setInputsInline(true);
    this.setStyle('object_style');
    this.setOutput(true, 'Object');
    this.setTooltip("Creates javascript object.");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/object.html#object-create");
    this.mixin(createContextMenuBlockMixin('object_key_value', 'key/value'));
  },
  updateShape_(isEmpty) {
    this.getInput('ITEM') && this.removeInput('ITEM');
    isEmpty === 'FALSE' && this.appendStatementInput("ITEM");
  }
}

Blocks['empty_object'] = {
  init() {
    this.appendDummyInput()
      .appendField("object");
    this.setInputsInline(true);
    this.setStyle('object_style');
    this.setOutput(true, 'Object');
    this.setTooltip("Creates javascript object.");
    this.setHelpUrl("");
  }
}

Blocks['object_key_value'] = {
  init() {
    const value = this.appendValueInput('VALUE')
      .appendField('key')
      .appendField(new FieldTextInput('key'), 'KEY')
      .appendField('value')
      .setCheck(null);
    this.setStyle('object_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('创建用于对象的键值对, 仅用于create object拼图');
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('object_create'));
    updateShadow(value, 'TEXT', '')
  }
}

Blocks['object_member'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    const obj = this.appendValueInput('OBJECT')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && updateShadow(_this.getInput('VALUE'), 'TEXT', 'value');
      }), 'METHOD')
      .setCheck('Object');
    const key = this.appendValueInput('KEY')
      .appendField('key')
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
    this.setStyle('object_style');
    this.setInputsInline(true);
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets or gets the member of the object.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/object.html#object-member');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(obj, 'OBJECT', '')
    updateShadow(key, 'TEXT', '');
    this.getFieldValue('METHOD') === 'set' && updateShadow(this.getInput('VALUE'), 'TEXT', '');
  },
}

Blocks['object_keys'] = {
  init() {
    const obj = this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField('get keys');
    this.setStyle('object_style');
    this.setInputsInline(true);
    this.setOutput(true, ['List', 'Array']);
    this.setTooltip('Returns all keys of the object.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/object.html#object-keys');
    updateShadow(obj, 'OBJECT', '')
  }
};

Blocks['convert_object_to_json'] = {
  init() {
    const obj = this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField('convert');
    this.appendDummyInput()
      .appendField('to JSON')
    this.setStyle('object_style');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("将对象序列化");
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/object.html#convert-object-to-json');
    updateShadow(obj, 'OBJECT', '')

  }
}

Blocks['convert_json_to_object'] = {
  init() {
    this.appendValueInput('JSON')
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField('convert');
    this.appendDummyInput()
      .appendField('to object')
    this.setStyle('object_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Object');
    this.setTooltip("将JSON解析为对象");
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/object.html#convert-json-to-object');
  }
}