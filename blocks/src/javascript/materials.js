import { JavaScript } from 'blockly';

JavaScript['material_selector'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  return [`appInstance.scene.getMaterialByName(${name})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['all_materials'] = (block) => {
  return [`appInstance.scene.materials`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['create_material'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const type = block.getFieldValue('TYPE');
  let code;
  switch (type) {
    case "StandardMaterial":
      code = `new BABYLON.StandardMaterial(${name}, appInstance.scene)`;
      break;
    case "PBRMaterial":
      code = `new BABYLON.PBRMaterial(${name}, appInstance.scene)`;
      break;
    case "NodeMaterial":
      code = `new BABYLON.NodeMaterial(${name}, appInstance.scene)`;
      break;
    case "BackgroundMaterial":
      code = `new BABYLON.BackgroundMaterial(${name}, appInstance.scene)`;
      break;
  }
  return [code, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['create_node_material_from_json'] = (block) => {
  const json = JavaScript.valueToCode(block, 'JSON', JavaScript.ORDER_NONE);
  const root = JavaScript.valueToCode(block, 'ROOT', JavaScript.ORDER_NONE);
  if (!json) return '';
  return [`BABYLON.NodeMaterial.Parse(JSON.parse(${json}), appInstance.scene, ${root})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['set_get_material_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const mat = JavaScript.valueToCode(block, 'MATERIAL', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || '0';

  if (!mat) return ''

  if (method === 'set') {
    return `
    ${mat}.${key} = ${value};`
  } else if (method === 'get') {
    return [`${mat}.${key}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['remove_material'] = (block) => {
  const mat = JavaScript.valueToCode(block, 'MATERIAL', JavaScript.ORDER_NONE);
  if (!mat) return '';
  return `
  appInstance.scene.removeMaterial(${mat});`
}

JavaScript['get_material_by_mesh'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  if (mesh)
    return [`${mesh}.material`, JavaScript.ORDER_FUNCTION_CALL];
  else
    return ''
}

JavaScript['create_texture'] = (block) => {
  const type = block.getFieldValue('TYPE')
  const url = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_NONE) || `\'\'`
  switch (type) {
    case 'Texture':
      return [`new BABYLON.Texture(${url}, appInstance.scene)`, JavaScript.ORDER_FUNCTION_CALL]
    case 'CubeTexture':
      return [`BABYLON.CubeTexture.CreateFromPrefilteredData(${url}, appInstance.scene)`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['set_get_texture_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const texture = JavaScript.valueToCode(block, 'TEXTURE', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || '0';

  if (!texture) return ''

  if (method === 'set') {
    return `
    ${texture}.${key} = ${value};`
  } else if (method === 'get') {
    return [`${texture}.${key}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['remove_texture'] = (block) => {
  const texture = JavaScript.valueToCode(block, 'TEXTURE', JavaScript.ORDER_NONE);
  if (!texture) return '';
  return `
  appInstance.scene.removeTexture(${texture});`
}

JavaScript['material_get_texture'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  return [`appInstance.scene.getTextureByName(${name})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['material_color3'] = (block) => {
  const r = JavaScript.valueToCode(block, 'R', JavaScript.ORDER_NONE) || `\'\'`;
  const g = JavaScript.valueToCode(block, 'G', JavaScript.ORDER_NONE) || `\'\'`;
  const b = JavaScript.valueToCode(block, 'B', JavaScript.ORDER_NONE) || `\'\'`;

  return [`BABYLON.Color3.FromInts(${r}, ${g}, ${b})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['field_color3'] = (block) => {
  const r = block.getFieldValue('R');
  const g = block.getFieldValue('G');
  const b = block.getFieldValue('B');

  return [`BABYLON.Color3.FromInts(${r}, ${g}, ${b})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['material_color4'] = (block) => {
  const r = JavaScript.valueToCode(block, 'R', JavaScript.ORDER_NONE) || `\'\'`;
  const g = JavaScript.valueToCode(block, 'G', JavaScript.ORDER_NONE) || `\'\'`;
  const b = JavaScript.valueToCode(block, 'B', JavaScript.ORDER_NONE) || `\'\'`;
  const a = JavaScript.valueToCode(block, 'A', JavaScript.ORDER_NONE) || `\'\'`;

  return [`BABYLON.Color4.FromInts(${r}, ${g}, ${b}, ${a})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['field_color4'] = (block) => {
  const r = block.getFieldValue('R');
  const g = block.getFieldValue('G');
  const b = block.getFieldValue('B');
  const a = block.getFieldValue('A');

  return [`BABYLON.Color4.FromInts(${r}, ${g}, ${b}, ${a})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['material_color3_from_hex'] = (block) => {
  let hex = JavaScript.valueToCode(block, 'HEX', JavaScript.ORDER_NONE) || `\'#000000\'`;
  return [`BABYLON.Color3.FromHexString(${hex})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['material_color4_from_hex'] = (block) => {
  let hex = JavaScript.valueToCode(block, 'HEX', JavaScript.ORDER_NONE) || `\'#00000000\'`;
  return [`BABYLON.Color4.FromHexString(${hex})`, JavaScript.ORDER_FUNCTION_CALL];
}