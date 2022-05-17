import { JavaScript } from 'blockly';

JavaScript['math_vector2'] = (block) => {
  const x = JavaScript.valueToCode(block, 'X', JavaScript.ORDER_NONE) || `0`;
  const y = JavaScript.valueToCode(block, 'Y', JavaScript.ORDER_NONE) || `0`;

  return [`new BABYLON.Vector3(${x}, ${y})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['math_vector3'] = (block) => {
  const x = JavaScript.valueToCode(block, 'X', JavaScript.ORDER_NONE) || `0`;
  const y = JavaScript.valueToCode(block, 'Y', JavaScript.ORDER_NONE) || `0`;
  const z = JavaScript.valueToCode(block, 'Z', JavaScript.ORDER_NONE) || `0`;

  return [`new BABYLON.Vector3(${x}, ${y}, ${z})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['field_vector2'] = (block) => {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');

  return [`new BABYLON.Vector2(${x}, ${y})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['field_vector3'] = (block) => {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  const z = block.getFieldValue('Z');

  return [`new BABYLON.Vector3(${x}, ${y}, ${z})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['field_vector4'] = (block) => {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  const z = block.getFieldValue('Z');
  const w = block.getFieldValue('W');

  return [`new BABYLON.Vector4(${x}, ${y}, ${z}, ${w})`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['math_clone_vector'] = (block) => {
  const vec = JavaScript.valueToCode(block, 'VECTOR', JavaScript.ORDER_NONE);
  if (!vec) return ''
  return [`${vec}.clone()`, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['math_arithmetic_vector'] = (block) => {
  const vectorA = JavaScript.valueToCode(block, 'VECTOR_A', JavaScript.ORDER_NONE);
  const vectorB = JavaScript.valueToCode(block, 'VECTOR_B', JavaScript.ORDER_NONE);
  const method = block.getFieldValue('METHOD')

  switch (method) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
    case 'scale':
      return [`${vectorA}.${method}(${vectorB})`, JavaScript.ORDER_FUNCTION_CALL]
    case 'Cross':
    case 'Dot':
    case 'Distance':
    case 'Center':
      return [`BABYLON.Vector3.${method}(${vectorA}, ${vectorB})`, JavaScript.ORDER_FUNCTION_CALL]
    case 'normalize':
    case 'negate':
    case 'length':
      return [`${vectorA}.${method}()`, JavaScript.ORDER_FUNCTION_CALL]
  }
}