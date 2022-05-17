import {JavaScript} from 'blockly';
import { wrapFn } from '../util/util';

JavaScript['template_a'] = function (block) {
  const opitons = `{
  value: ${JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`},
  dropdown: \'${block.getFieldValue('DROPDOWN')}\',
  checkbox: ${block.getFieldValue('CHECKBOX') == 'TRUE'},
  cb: ${wrapFn(JavaScript.statementToCode(block, 'DO_CB'))}
}`
  const fun = JavaScript.provideFunction_('blockTemplate1', [`
  // blockTemplate1 block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(opitons) { 
    const {value, dropdown, checkbox, cb} = opitons;
    console.log(value, dropdown, checkbox);
    cb();
  }`]);
  return `
  ${fun}(${opitons});`
}
JavaScript['template_b'] = function (block) {
  const options = `{
  value: ${JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`},
  dropdown: \'${this.getFieldValue('DROPDOWN')}\',
  checkbox: ${this.getFieldValue('CHECKBOX') == 'TRUE'},
  cb: ${wrapFn(JavaScript.statementToCode(block, 'DO_CB'))}
  }`
  const fun = JavaScript.provideFunction_('blockTemplate2', [`
  // blockTemplate2 block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    const {value, dropdown, checkbox, cb} = options;
    console.log(value, dropdown, checkbox);
    cb();
  }`]);
  return `${fun}(${options});\n`
}
JavaScript['template_c'] = function (block) {
  const options = `{
  value: ${JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`},
  dropdown: \'${this.getFieldValue('DROPDOWN')}\',
  checkbox: ${this.getFieldValue('CHECKBOX') == 'TRUE'},
  cb: ${wrapFn(JavaScript.statementToCode(block, 'DO_CB'))}
  }`
  const fun = JavaScript.provideFunction_('blockTemplate3', [`
  // blockTemplate3 block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    const {value, dropdown, checkbox, cb} = options;
    console.log(value, dropdown, checkbox);
    cb();
  }`]);
  return `${fun}(${options});\n`
}