import { JavaScript } from 'blockly';

JavaScript['math_angle'] = (block) => {
  return [`${block.getFieldValue('ANGLE')}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['math_radians_degrees'] = (block) => {
  const method = block.getFieldValue('METHOD')
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `0`;
  switch (method) {
    case 'radians':
      return [`BABYLON.Tools.ToRadians(${value})`, JavaScript.ORDER_FUNCTION_CALL]
    case 'degrees':
      return [`BABYLON.Tools.ToDegrees(${value})`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['math_mix'] = (block) => {
  const a = JavaScript.valueToCode(block, 'A', JavaScript.ORDER_NONE) || `0`;
  const b = JavaScript.valueToCode(block, 'B', JavaScript.ORDER_NONE) || `0`;
  const alpha = JavaScript.valueToCode(block, 'ALPHA', JavaScript.ORDER_NONE) || `0`;
  return [`BABYLON.Tools.Mix(${a}, ${b}, ${alpha})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['math_remap'] = (block) => {
  const input = JavaScript.valueToCode(block, 'INPUT', JavaScript.ORDER_NONE) || '\'\'';
  const sourceMin = JavaScript.valueToCode(block, 'SOURCE_MIN', JavaScript.ORDER_NONE) || '\'\'';
  const sourceMax = JavaScript.valueToCode(block, 'SOURCE_MAX', JavaScript.ORDER_NONE) || '\'\'';
  const targetMin = JavaScript.valueToCode(block, 'TARGET_MIN', JavaScript.ORDER_NONE) || '\'\'';
  const targetMax = JavaScript.valueToCode(block, 'TARGET_MAX', JavaScript.ORDER_NONE) || '\'\'';
  const opts = `{
    input:${input},
    sourceMin:${sourceMin},
    sourceMax:${sourceMax},
    targetMin:${targetMin},
    targetMax:${targetMax},
  }`
  const fun = JavaScript.provideFunction_('math_remap', [`
  // math_remap block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(opts) { 
    return (opts.input - opts.sourceMin) / ((opts.sourceMax - opts.sourceMin) / (opts.targetMax - opts.targetMin)) + opts.targetMin
  }
     `]);

  return [`${fun}(${opts})`, JavaScript.ORDER_FUNCTION_CALL]
}


