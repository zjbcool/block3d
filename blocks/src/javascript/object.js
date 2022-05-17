import { JavaScript } from 'blockly';

JavaScript['object_create'] = (block) => {
  const item = JavaScript.statementToCode(block, 'ITEM').replaceAll('"', '').trim();
  return [`\{${item.substring(0, item.length - 1)}\}`, JavaScript.ORDER_FUNCTION_CALL]
};

JavaScript['empty_object'] = (block) => {
  return [`\{\}`, JavaScript.ORDER_FUNCTION_CALL]
};

JavaScript['object_key_value'] = (block) => {
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  return `\"${key}\: ${value}\, \"`;
}

JavaScript['object_member'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_MEMBER);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_NONE) || 'None';
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || 'None';

  if (!object) return ''
  if (method === 'set') {
    return `
    ${object}[${key}] = ${value};`
  } else if (method === 'get') {
    return [`${object}[${key}]`, JavaScript.ORDER_FUNCTION_CALL]
  }
};

JavaScript['object_keys'] = (block) => {
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_MEMBER) || `\{\}`;
  return [`Object.keys(${object})`, JavaScript.ORDER_FUNCTION_CALL]
};

JavaScript['convert_json_to_object'] = (block) => {
  const json = JavaScript.valueToCode(block, 'JSON', JavaScript.ORDER_NONE);
  if (!json) return '';
  return [`JSON.parse(${json})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['convert_object_to_json'] = (block) => {
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_NONE);
  if(!object) return '';
  return [`JSON.stringify(${object}, null, 2);`, JavaScript.ORDER_FUNCTION_CALL]
}

