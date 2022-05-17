import { JavaScript } from 'blockly';

JavaScript['time_after'] = (block) => {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `0`
  const doCb = `()=> {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('time_after', [`
  // time_after block
  async function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, doCb) { 
    await BABYLON.Tools.DelayAsync(Number(${value}) * 1000);
    doCb();
  }`]);
  return `
  ${fun}(${value}, ${doCb});`
}

JavaScript['time_every_frame'] = block => {
  return `
  appInstance.scene.onBeforeRenderObservable.add(()=>{
    ${JavaScript.statementToCode(block, 'DO_CB')}
  })`
}

JavaScript['get_delta_time'] = block => {
  return [`appInstance.engine.getDeltaTime() / 1000`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['create_timer'] = block => {
  const seconds = JavaScript.valueToCode(block, 'SECONDS', JavaScript.ORDER_NONE);
  const doCb = JavaScript.statementToCode(block, 'DO_CB', JavaScript.ORDER_NONE);

  return [`window.setInterval(() => {${doCb}}, ${seconds} * 1000)`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['remove_timer'] = block => {
  const timer = JavaScript.valueToCode(block, 'TIMER', JavaScript.ORDER_NONE);
  if (!timer) return '';
  return `
  clearInterval(${timer});`
}