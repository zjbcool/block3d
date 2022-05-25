import {
  Blocks,
  FieldDropdown,
  ALIGN_RIGHT,
} from 'blockly';
import MenuGenerator from './gui_menu_generater';
import {
  createStatementCheckMixin,
} from './mixins';
import { updateShadow } from '../util/util';

Blocks['create_fullscreen_UI'] = {
  init() {
    this.appendDummyInput()
      .appendField('create fullscreen UI')
    const name = this.appendValueInput('NAME')
      .appendField('name')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT);
    const jsonObj = this.appendValueInput('JSON')
      .appendField('from JSON')
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setOutput(true)
    this.setTooltip('Recreate the content of the GUI from a JSON object');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#create-fullscreen-ui');

    updateShadow(name, 'TEXT', '')
  }
}

Blocks['gui_get_control'] = {
  init() {
    this.appendDummyInput()
      .appendField('get control')
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT);
    this.appendValueInput('ADT')
      .appendField('from UI')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setOutput(true, ["Control", "Object"]);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#gui-get-control');

    updateShadow(name, 'TEXT', '')
  }
}

Blocks['gui_control_prop'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    let isSet;

    this.appendValueInput('CONTROL')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && MenuGenerator.controlProps.updateShape(_this, _this.getInput('VALUE'), _this.getFieldValue('PROP'));
        !isSet && MenuGenerator.controlProps.updateTooltip(_this, _this.getFieldValue('PROP'));
      }), 'METHOD')
      .appendField('control')
      .setCheck('Control')
    this.appendDummyInput()
      .appendField(new FieldDropdown(() => MenuGenerator.controlProps.generatMenu(), option => {
        isSet && MenuGenerator.controlProps.updateShape(_this, _this.getInput('VALUE'), option)
      }), 'PROP')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#gui-control-prop');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(_this.getInput('VALUE'), 'NUM', '');
  }
}

Blocks['gui_get_control_value'] = {
  init() {
    this.appendValueInput('CONTROL')
      .appendField('get control')
      .setCheck('Control');
    this.appendDummyInput()
      .appendField('value')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setOutput(true, ['Number', 'String', 'Boolean', 'Color3']);
    this.setTooltip('Returns the value of the control.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#gui-get-control-value');
  }
}

Blocks['gui_get_child_controls'] = {
  init() {
    this.appendValueInput('CONTROL')
      .appendField('get control')
      .setCheck('Control');
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['directChildren', 'directChildren'],
        ['allChildren', 'allChildren'],
      ]), 'CHILDREN');
    this.appendDummyInput()
      .appendField('type')
      .appendField(new FieldDropdown([
        ['none', 'none'],
        ['TextBlock', 'TextBlock'],
        ['InputText', 'InputText'],
        ['InputPassword', 'InputPassword'],
        ['Button', 'Button'],
        ['Checkbox', 'Checkbox'],
        ['RadioButton', 'RadioButton'],
        ['ColorPicker', 'ColorPicker'],
        ['Slider', 'Slider'],
        ['ImageBasedSlider', 'ImageBasedSlider'],
      ]), 'TYPE');
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setTooltip('Will return all controls that have this control as ascendant');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#gui-get-child-controls');
  }
}

Blocks['gui_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('on event of')
      .appendField(new FieldDropdown([
        ['pointerClick', 'pointerClick'],
        ['pointerDown', 'pointerDown'],
        ['pointerEnter', 'pointerEnter'],
        ['pointerMove', 'pointerMove'],
        ['pointerOut', 'pointerOut'],
        ['pointerUp', 'pointerUp'],
        ['textChanged', 'textChanged'],
        ['valueChanged', 'valueChanged'],
        ['wheel', 'wheel'],
      ]), "EVENT_TYPE");
    this.appendValueInput('CONTROL')
      .appendField("for control")
      .setAlign(ALIGN_RIGHT)
      .setCheck("Control");
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .appendField("do")
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/gui.html#gui-event");
  }
}

Blocks['gui_move_control_to_vector'] = {
  init() {
    this.appendValueInput('CONTROL')
      .appendField('move control')
      .setCheck(null);
    const target = this.appendValueInput('TARGET')
      .appendField('to')
      .setCheck('Vector3')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("gui_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/gui.html#gui-move-control-to-vector');

    updateShadow(target, 'VECTOR3', [0, 0, 0])
  }
}