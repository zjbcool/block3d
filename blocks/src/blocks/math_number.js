import {
  Blocks,
  FieldAngle,
  FieldDropdown,
  ALIGN_RIGHT
} from 'blockly';
import { updateShadow } from '../util/util';

Blocks['math_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new FieldAngle('15'), 'ANGLE');
    this.setStyle("math_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip("A number.");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/math_number.html#math-angle");
  }
}

Blocks['math_radians_degrees'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('to')
      .appendField(new FieldDropdown([
        ['radians', 'radians'],
        ['degrees', 'degrees'],
      ], method => {
        updateShadow(value, method === 'degrees' ? 'NUM' : 'ANGLE', '');
      }), 'METHOD');
    const value = this.appendValueInput('VALUE')
      .setCheck('Number');
    this.setStyle("math_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip("");
    this.setHelpUrl("");
    updateShadow(value, 'ANGLE', '');
  }
}

Blocks['math_mix'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('mix');
    const a = this.appendValueInput('A')
      .setCheck('Number');
    const b = this.appendValueInput('B')
      .setCheck('Number')
      .appendField('and');
    const mix = this.appendValueInput('ALPHA')
      .setCheck('Number')
      .appendField('with');
    this.setStyle("math_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip("Returns interpolates between a and b via alpha");
    this.setHelpUrl("");

    updateShadow(a, 'NUM', '0');
    updateShadow(b, 'NUM', '1');
    updateShadow(mix, 'NUM', '0.5');
  }
}

Blocks['math_remap'] = {
  init() {
    this.appendDummyInput()
      .appendField("remap");
    const input = this.appendValueInput("INPUT")
      .appendField("input")
      .setCheck("Number")
      .setAlign(ALIGN_RIGHT);
    const inputStart = this.appendValueInput("SOURCE_MIN")
      .appendField("fromMin")
      .setCheck("Number")
      .setAlign(ALIGN_RIGHT);
    const inputEnd = this.appendValueInput("SOURCE_MAX")
      .appendField("fromMax")
      .setCheck("Number")
      .setAlign(ALIGN_RIGHT);
    const resultStart = this.appendValueInput("TARGET_MIN")
      .appendField("toMin")
      .setCheck("Number")
      .setAlign(ALIGN_RIGHT);
    const resultEnd = this.appendValueInput("TARGET_MAX")
      .appendField("toMax")
      .setCheck("Number")
      .setAlign(ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setStyle("math_style");
    this.setOutput(true, "Number");
    this.setTooltip("Map a range number to another one.");
    this.setHelpUrl("");

    updateShadow(input, 'NUM', '100');
    updateShadow(inputStart, 'NUM', '0');
    updateShadow(inputEnd, 'NUM', '255');
    updateShadow(resultStart, 'NUM', '0');
    updateShadow(resultEnd, 'NUM', '1');
  }
}

