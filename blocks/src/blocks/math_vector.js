import {
  Blocks,
  FieldNumber,
  FieldDropdown,
  ALIGN_RIGHT
} from 'blockly';
import { updateShadow } from '../util/util';
import MenuGenerator from './math_menu_generator'

Blocks['math_vector2'] = {
  init: function () {
    const x = this.appendValueInput('X')
      .setCheck('Number')
      .appendField('X');
    const y = this.appendValueInput('Y')
      .setCheck('Number')
      .appendField('Y');
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector2');
    this.setTooltip('A vector containing 2 coordinates');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector2');
    updateShadow(x, 'NUM', '');
    updateShadow(y, 'NUM', '');
  }
}

Blocks['math_vector3'] = {
  init: function () {
    const x = this.appendValueInput('X')
      .setCheck('Number')
      .appendField('X');
    const y = this.appendValueInput('Y')
      .setCheck('Number')
      .appendField('Y');
    const z = this.appendValueInput('Z')
      .setCheck('Number')
      .appendField('Z');
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector3');
    this.setTooltip('A Vector3 is the main object used in 3D geometry It can represent etiher the coordinates of a point the space, either a direction. Reminder: js uses a left handed forward facing system');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector3');
    updateShadow(x, 'NUM', '');
    updateShadow(y, 'NUM', '');
    updateShadow(z, 'NUM', '');
  }
}

Blocks['math_vector4'] = {
  init: function () {
    const x = this.appendValueInput('X')
      .setCheck('Number')
      .appendField('X');
    const y = this.appendValueInput('Y')
      .setCheck('Number')
      .appendField('Y');
    const z = this.appendValueInput('Z')
      .setCheck('Number')
      .appendField('Z');
    const w = this.appendValueInput('W')
      .setCheck('Number')
      .appendField('W');
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector4');
    this.setTooltip('Created for EulerAngle class conversion to Quaternion');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector4');
    updateShadow(x, 'NUM', '');
    updateShadow(y, 'NUM', '');
    updateShadow(z, 'NUM', '');
  }
}

Blocks['field_vector2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('X')
      .appendField(new FieldNumber('0'), 'X')
      .appendField('Y')
      .appendField(new FieldNumber('0'), 'Y')
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector2');
    this.setTooltip('A vector containing 2 coordinates');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector2');
  }
}

Blocks['field_vector3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('X')
      .appendField(new FieldNumber('0'), 'X')
      .appendField('Y')
      .appendField(new FieldNumber('0'), 'Y')
      .appendField('Z')
      .appendField(new FieldNumber('0'), 'Z');
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector3');
    this.setTooltip('A Vector3 is the main object used in 3D geometry It can represent etiher the coordinates of a point the space, either a direction. Reminder: js uses a left handed forward facing system');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector3');
  }
}

Blocks['field_vector4'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('X')
      .appendField(new FieldNumber('0'), 'X')
      .appendField('Y')
      .appendField(new FieldNumber('0'), 'Y')
      .appendField('Z')
      .appendField(new FieldNumber('0'), 'Z')
      .appendField('W')
      .appendField(new FieldNumber('0'), 'W');
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, 'Vector4');
    this.setTooltip('Created for EulerAngle class conversion to Quaternion');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector4');
  }
}

Blocks['math_clone_vector'] = {
  init: function () {
    this.appendValueInput('VECTOR')
      .appendField('clone vector')
      .setCheck(['Vector2', 'Vector3', 'Vector4']);
    this.setStyle('math_style');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('Created for EulerAngle class conversion to Quaternion');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.vector4');
  }
}

Blocks['math_arithmetic_vector'] = {
  init() {
    const _this = this
    const vectorA = this.appendValueInput("VECTOR_A")
      .setCheck("Vector3")
      .setAlign(ALIGN_RIGHT);
    this.appendDummyInput('OPERATEOR')
      .appendField(new FieldDropdown(() => MenuGenerator.vectorArithmetic.generatMenu(), method => _this._updateShadpe(method)), 'METHOD');
    const vectorB = this.appendValueInput("VECTOR_B").setAlign(ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setStyle("math_style");
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    updateShadow(vectorA, 'VECTOR3', [1, 1, 1]);
    updateShadow(vectorB, 'VECTOR3', [1, 1, 1]);
  },
  _updateShadpe(method) {
    const _this = this
    this.getInput('VECTOR_B') && this.removeInput('VECTOR_B')
    const methods = ['length', 'negate', 'normalize']
    if (!methods.includes(method)) {
      const vectorB = this.appendValueInput("VECTOR_B").setAlign(ALIGN_RIGHT);
      updateShadow(vectorB, 'VECTOR3', [1, 1, 1])
      MenuGenerator.vectorArithmetic.updateShape(_this, _this.getInput('VECTOR_B'), method)
    }
  }
}