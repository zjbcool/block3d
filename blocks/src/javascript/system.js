import {
  JavaScript
} from 'blockly';

JavaScript['console_log'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_NONE) || `\'\'`;
  switch (method) {
    case 'log':
      return `
  console.log(${text});`
    case 'info':
      return `
  block3d && (block3d.editorFooter.info = ${text});`
  }
}

JavaScript['window_alert'] = (block) => {
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_NONE) || `\'\'`;
  return `
  window.alert(${text});`
}

JavaScript['execute_tab'] = block => {
  const tab_arg = JavaScript.valueToCode(block, 'TAB_ARG', JavaScript.ORDER_NONE);
  const tab = block.getFieldValue('TAB');
  if (tab === 'none') {
    return ''
  } else {
    return `
  tab_${tab}(${tab_arg});`
  }
}

JavaScript['get_tab_arg'] = block => {
  return [`tab_arg`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['get_function_by_name'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE)
  return [JavaScript.nameDB_.getName(name, 'PROCEDURE').slice(1, -1), JavaScript.ORDER_ATOMIC]
}

JavaScript['set_get_glob_object'] = block => {
  const method = block.getFieldValue('METHOD');
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  if (method === 'set')
    return `
  appInstance.glob.${key} = ${value};`
  if (method === 'get')
    return [`appInstance.glob.${key}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['set_get_local_storage_item'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_NONE) || `\'\'`;
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  if (method === 'set')
    return `
  window.localStorage.setItem(${key}, ${value});`
  if (method === 'get')
    return [`window.localStorage.getItem(${key})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['local_storage_remove_item'] = (block) => {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_NONE) || `\'\'`;
  return `
  window.localStorage.removeItem(${key});`
}

JavaScript['advanced_comment'] = (block) => {
  const comment = block.getFieldValue('INPUT');
  return `
  // ${comment}
  `
}
// 用于连接带返回值的block
JavaScript['advanced_connect'] = (block) => {
  const input = JavaScript.valueToCode(block, 'INPUT', JavaScript.ORDER_NONE)
  return `
  ${input};`
}

