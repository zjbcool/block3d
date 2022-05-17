import {
  JavaScript
} from 'blockly';

JavaScript['create_animation_for_target'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const target = JavaScript.valueToCode(block, 'TARGET', JavaScript.ORDER_NONE);
  const targetProp = JavaScript.valueToCode(block, 'TARGET_PROP', JavaScript.ORDER_NONE) || `\'\'`;
  let propType = block.getFieldValue('PROP_TYPE');
  const fps = JavaScript.valueToCode(block, 'FPS', JavaScript.ORDER_NONE) || 60;
  let loopMode = block.getFieldValue('LOOP_MODE');
  const frames = JavaScript.valueToCode(block, 'FRAMES', JavaScript.ORDER_NONE) || `\[\]`;

  propType = animationTypeMap[propType];
  loopMode = aniamtionLoopModeMap[loopMode];

  const fun = JavaScript.provideFunction_('create_animation_for_target', [`
  // create_animation_for_target block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, target, targetProp, propType, fps, loopMode, frames) { 
    const anim = new BABYLON.Animation(name, targetProp, fps, propType, loopMode );
    anim.setKeys(frames);
    target.animations.push(anim);
  }`]);
  return `
  ${fun}(${name}, ${target}, ${targetProp}, ${propType}, ${fps}, ${loopMode}, ${frames});`
}

JavaScript['animation_frame_value'] = block => {
  const frame = JavaScript.valueToCode(block, 'FRAME', JavaScript.ORDER_NONE) || 0;
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || 0;
  return `\{frame: ${frame}, value: ${value}\}, `
}

JavaScript['begin_animation'] = block => {
  const target = JavaScript.valueToCode(block, 'TARGET', JavaScript.ORDER_NONE);
  const from = JavaScript.valueToCode(block, 'FROM', JavaScript.ORDER_NONE) || 0;
  const to = JavaScript.valueToCode(block, 'TO', JavaScript.ORDER_NONE) || 0;
  const loop = JavaScript.valueToCode(block, 'LOOP', JavaScript.ORDER_NONE) || !0;
  if (!target) return '';

  return [`appInstance.scene.beginAnimation(${target}, ${from}, ${to}, ${loop})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['animation_playback'] = block => {
  const animatable = JavaScript.valueToCode(block, 'ANIMATABLE', JavaScript.ORDER_NONE);
  const method = block.getFieldValue('METHOD');
  if (!animatable) return ''
  return `
  ${animatable}.${method}();`
}

JavaScript['on_animation_end'] = block => {
  const animatable = JavaScript.valueToCode(block, 'ANIMATABLE', JavaScript.ORDER_NONE)
  const doCb = JavaScript.statementToCode(block, 'DO_CB')
  if (!animatable) return ''
  return `
  ${animatable}.onAnimationEndObservable.add(() => { ${doCb} });`
}

// 有效的拼图
JavaScript['get_animation_group_by_name'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE)
  if (!name) return ''
  return [`appInstance.scene.getAnimationGroupByName(${name})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['set_get_animaiton_group_prop'] = block => {
  const animGp = JavaScript.valueToCode(block, 'ANIMATION_GROUP', JavaScript.ORDER_NONE)
  const method = block.getFieldValue('METHOD')
  const prop = block.getFieldValue('PROP')
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE)

  if (!animGp) return ''
  if (method === 'set') {
    return `
  ${animGp}.${prop} = ${value};`
  } else if (method === 'get') {
    return [`${animGp}.${prop}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['animation_group_playback'] = block => {
  const animGp = JavaScript.valueToCode(block, 'ANIMATION_GROUP', JavaScript.ORDER_NONE)
  const method = block.getFieldValue('METHOD')
  const loop = block.getFieldValue('LOOP') === 'TRUE'

  if (!animGp) return ''
  let code;
  switch (method) {
    case 'pause':
    case 'reset':
    case 'restart':
    case 'stop':
      code = `
  ${animGp}.${method}();`
      break;
    case 'play':
      code = `
  ${animGp}.play(${loop});`
      break;
    case 'start':
      code = `
  ${animGp}.start(${loop}, 1, ${animGp.from}, ${animGp.to}, true);`
      break;
  }
  return code;
}

JavaScript['animation_go_to_frame'] = block => {
  const animGp = JavaScript.valueToCode(block, 'ANIMATION_GROUP', JavaScript.ORDER_NONE)
  const frame = JavaScript.valueToCode(block, 'FRAME', JavaScript.ORDER_NONE)

  if (!animGp) return ''
  return `
  ${animGp}.goToFrame(${frame});`
}

JavaScript['animation_blending'] = block => {
  const fromAnimGroup = JavaScript.valueToCode(block, 'FROM_ANIMATION_GROUP', JavaScript.ORDER_NONE);
  const toAnimGroup = JavaScript.valueToCode(block, 'TO_ANIMATION_GROUP', JavaScript.ORDER_NONE);
  const blendingSpeed = JavaScript.valueToCode(block, 'BLENDING_SPEED', JavaScript.ORDER_NONE);

  const fun = JavaScript.provideFunction_('animation_blending', [`
  // animation_blending block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(fromAnimGroup, toAnimGroup, blendingSpeed) { 
    const animationBlending = function* (fromAnimGroup, toAnimGroup, blendingSpeed) {
      blendingSpeed = blendingSpeed / 100;
      let fromWeight = 1;
      let toWeight = 0;
    
      while (toWeight < 1) {
        fromWeight -= blendingSpeed;
        toWeight += blendingSpeed;

        fromAnimGroup.stop();
        toAnimGroup.play(true);
    
        fromAnimGroup.setWeightForAllAnimatables(fromWeight);
        toAnimGroup.setWeightForAllAnimatables(toWeight);
        yield;
      }
    }
    appInstance.scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(fromAnimGroup, toAnimGroup, blendingSpeed));
  }`]);
  return `
  ${fun}(${fromAnimGroup}, ${toAnimGroup}, ${blendingSpeed});`
}

JavaScript['transition_animation'] = block => {
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_NONE);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_NONE);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE);
  const type = block.getFieldValue('TYPE');
  const duration = JavaScript.valueToCode(block, 'DURATION', JavaScript.ORDER_NONE);
  const fps = JavaScript.valueToCode(block, 'FPS', JavaScript.ORDER_NONE);
  const easing = block.getFieldValue('EASING');
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('transition_animation', [`
  // transition_animation block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(object, key, value, type, duration, fps, easing, doCb) { 
    const animate = BABYLON.Animation.CreateAnimation(key, type, fps, easing);
    BABYLON.Animation.TransitionTo(key, value, object, appInstance.scene, fps, animate, duration * 1000, () => {
      setTimeout(()=>{
        if(object.hasOwnProperty('animations')) {
          const index = object.animations.indexOf(animate);
          index !== -1 && object.animations.splice(index, 1);
        }
      }, duration)
      doCb();
    })
  }`]);
  return `
  ${fun}(${object}, ${key}, ${value}, ${type}, ${duration}, ${fps}, ${easing}, ${doCb});`
}