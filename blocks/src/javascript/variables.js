import { JavaScript } from 'blockly'

JavaScript['variables_get'] = block => {
  // Variable getter.
  const code = JavaScript.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
  return [code, JavaScript.ORDER_ATOMIC];
};

JavaScript['variables_set'] = block => {
  // Variable setter.
  const argument0 = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ASSIGNMENT) || '0';
  const varName = JavaScript.nameDB_.getName(block.getFieldValue('VAR'), 'VARIABLE');
  return `
  ${varName} = ${argument0};`
};
