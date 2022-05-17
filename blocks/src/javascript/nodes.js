import { JavaScript } from 'blockly';

JavaScript['mesh_selector'] = (block) => {
  const name = block.getFieldValue('NAME');
  if (name === '') return '';
  return [`appInstance.scene.getNodeByName(\'${name}\')`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['camera_selector'] = (block) => {
  const name = block.getFieldValue('NAME');
  if (name === '') return '';
  return [`appInstance.scene.getNodeByName(\'${name}\')`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['light_selector'] = (block) => {
  const name = block.getFieldValue('NAME');
  if (name === '') return '';
  return [`appInstance.scene.getNodeByName(\'${name}\')`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['create_transform_node'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_MEMBER);
  return [`new BABYLON.TransformNode(${name}, appInstance.scene)`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['node_get_all'] = (block) => {
  const type = block.getFieldValue('TYPE');
  return [`appInstance.scene.${type}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['node_get_children'] = (block) => {
  const node = JavaScript.valueToCode(block, 'NODE', JavaScript.ORDER_MEMBER);
  const type = block.getFieldValue('TYPE');
  const typeMap = {
    childMeshes: 'getChildMeshes',
    directChildren: 'getChildren',
    allChildren: 'getDescendants',
  }
  if (!node) return '';
  return [`${node}.${typeMap[type]}()`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['node_parent'] = block => {
  const method = block.getFieldValue('METHOD');
  const node = JavaScript.valueToCode(block, 'NODE', JavaScript.ORDER_NONE);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  if (!node) return '';
  if (method === 'set') {
    return `
  ${node}.parent = ${value};`
  } else if (method === 'get') {
    return [`${node}.parent`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['node_is_child_of'] = (block) => {
  const childNode = JavaScript.valueToCode(block, 'CHILD_NODE', JavaScript.ORDER_MEMBER);
  const parentNode = JavaScript.valueToCode(block, 'PARENT_NODE', JavaScript.ORDER_MEMBER);
  if (!childNode || !parentNode) return '';
  return [`${childNode}.isDescendantOf(${parentNode})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['node_set_enabled'] = (block) => {
  const node = JavaScript.valueToCode(block, 'NODE', JavaScript.ORDER_MEMBER);
  const enabled = JavaScript.valueToCode(block, 'ENABLED', JavaScript.ORDER_MEMBER);
  if (!node) return '';
  return `
  ${node}.setEnabled(${enabled});`
}