import { JavaScript } from 'blockly'

JavaScript['text_join'] = (block) => {
  const item = JavaScript.statementToCode(block, 'ITEM').trim();
  if (!item) return '';

  return [`${item.substring(0, item.length - 1)}`, JavaScript.ORDER_FUNCTION_CALL]
};

JavaScript['text_item'] = block => {
  const element = JavaScript.valueToCode(block, 'ELEMENT', JavaScript.ORDER_NONE) || `\'\'`;
  return `${element} + `
}