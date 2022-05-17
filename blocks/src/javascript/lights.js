import { JavaScript } from 'blockly';

JavaScript['create_light'] = block => {
  const type = block.getFieldValue('TYPE');
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`
  const position = JavaScript.valueToCode(block, 'POSITION', JavaScript.ORDER_NONE) || `\'\'`
  const direction = JavaScript.valueToCode(block, 'DIRECTION', JavaScript.ORDER_NONE) || `\'\'`
  const angle = JavaScript.valueToCode(block, 'ANGLE', JavaScript.ORDER_NONE) || `\'\'`
  const exponent = JavaScript.valueToCode(block, 'EXPONENT', JavaScript.ORDER_NONE) || `\'\'`
  let code;
  switch (type) {
    case 'PointLight':
      code = `new BABYLON.PointLight(${name}, ${position}, appInstance.scene)`;
      break;
    case 'DirectionalLight':
      code = `new BABYLON.DirectionalLight(${name}, ${direction}, appInstance.scene)`
      break;
    case 'SpotLight':
      code = `new BABYLON.SpotLight(${name}, ${position}, ${direction}, ${Math.PI / 180 * angle}, ${exponent}, appInstance.scene)`
      break;
    case 'HemisphericLight':
      code = `new BABYLON.HemisphericLight(${name}, ${direction}, appInstance.scene)`
      break;
  }
  return [`${code}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['set_get_light_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const light = JavaScript.valueToCode(block, 'LIGHT', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || '0';

  if (!light) return '';

  if (method === 'set') {
    return `
  ${light}.${key} = ${value};`
  } else if (method === 'get') {
    return [`${light}.${key}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['create_shadow'] = block => {
  const mapSize = JavaScript.valueToCode(block, 'MAP_SIZE', JavaScript.ORDER_NONE) || `\'\'`
  const light = JavaScript.valueToCode(block, 'LIGHT', JavaScript.ORDER_NONE) || `\'\'`

  if (mapSize && light) {
    return [`new BABYLON.ShadowGenerator(${mapSize}, ${light})`, JavaScript.ORDER_FUNCTION_CALL]
  } else {
    return ''
  }
}

JavaScript['set_shadow_prop'] = (block) => {
  const shadow = JavaScript.valueToCode(block, 'SHADOW', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || '0';

  if (shadow) {
    return `
    ${shadow}.${key} = ${value};`
  } else {
    return ''
  }
}

JavaScript['add_shadow_caster'] = block => {
  const shadowGenerator = JavaScript.valueToCode(block, 'SHADOW', JavaScript.ORDER_NONE) || `\'\'`
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`

  if (shadowGenerator && mesh) {
    return `
    ${shadowGenerator}.addShadowCaster(${mesh});`
  } else {
    return ''
  }
}

