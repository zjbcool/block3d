import {
  JavaScript
} from 'blockly'

JavaScript['set_get_active_camera'] = block => {
  const method = block.getFieldValue('METHOD');
  const camera = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE);

  if (method === 'set') {
    if (!camera) return '';
    return `
  appInstance.scene.activeCamera && appInstance.scene.activeCamera.detachControl();
  appInstance.camera = ${camera};
  appInstance.scene.activeCamera = ${camera};
  ${camera}.attachControl(appInstance.canvas, true);`
  } else if (method === 'get') {
    return [`appInstance.scene.activeCamera`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['create_camera'] = block => {
  const type = block.getFieldValue('TYPE');
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const position = JavaScript.valueToCode(block, 'POSITION', JavaScript.ORDER_NONE) || `\'\'`;
  const alpha = JavaScript.valueToCode(block, 'ALPHA', JavaScript.ORDER_NONE) || `\'\'`;
  const beta = JavaScript.valueToCode(block, 'BETA', JavaScript.ORDER_NONE) || `\'\'`;
  const radius = JavaScript.valueToCode(block, 'RADIUS', JavaScript.ORDER_NONE) || `\'\'`;
  const target = JavaScript.valueToCode(block, 'TARGET', JavaScript.ORDER_NONE) || `\'\'`;
  const interaxialDistance = JavaScript.valueToCode(block, 'INTERAXIAL_DISTANCE', JavaScript.ORDER_NONE) || `\'\'`;
  let code;
  switch (type) {
    case 'UniversalCamera':
      code = `new BABYLON.UniversalCamera(${name}, ${position}, appInstance.scene)`;
      break;
    case 'ArcRotateCamera':
      code = `new BABYLON.ArcRotateCamera(${name}, ${alpha * Math.PI / 180}, ${beta * Math.PI / 180}, ${radius}, ${target}, appInstance.scene)`
      break;
    case 'FollowCamera':
      code = `new BABYLON.FollowCamera(${name}, ${position}, appInstance.scene)`;
      break;
    case 'AnaglyphUniversalCamera':
      code = `new BABYLON.AnaglyphUniversalCamera(${name}, ${position}, ${interaxialDistance}, appInstance.scene)`;
      break;
    case 'AnaglyphArcRotateCamera':
      code = `new BABYLON.AnaglyphArcRotateCamera(${name}, ${alpha * Math.PI / 180}, ${beta * Math.PI / 180}, ${radius}, ${target}, ${interaxialDistance}, appInstance.scene)`
      break;
    case 'DeviceOrientationCamera':
      code = `new BABYLON.DeviceOrientationCamera(${name}, ${position}, appInstance.scene)`
      break;
  }
  return [code, JavaScript.ORDER_FUNCTION_CALL];
}

JavaScript['set_get_camera_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const camera = JavaScript.valueToCode(block, 'CAMERA', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || '0';

  if (!camera) return ''
  if (method === 'set') {
    return `
  ${camera}.${key} = ${value};`
  } else if (method === 'get') {
    return [`${camera}.${key}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['remove_camera'] = (block) => {
  const camera = JavaScript.valueToCode(block, 'CAMERA', JavaScript.ORDER_NONE);
  if (!camera) return ''
  return `
    appInstance.scene.removeCamera(${camera});`
}

JavaScript['autorotate_camera'] = block => {
  const speed = JavaScript.valueToCode(block, 'SPEED', JavaScript.ORDER_NONE) || `\'\'`;
  const enabled = block.getFieldValue('ENABLED') == 'TRUE';
  const waitTime = JavaScript.valueToCode(block, 'WAIT_TIME', JavaScript.ORDER_NONE) || `\'\'`;
  const spinupTime = JavaScript.valueToCode(block, 'SPINUP_TIME', JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('autorotate_camera', [`
  // used for autorotate_camera block
  appInstance._glob.autoRotationBehavior = new BABYLON.AutoRotationBehavior();
  
  // autorotate_camera block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(enabled, speed, waitTime, spinupTime) { 
    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };

    if(enabled) {
      appInstance._glob.autoRotationBehavior.idleRotationSpeed = speed;
      appInstance._glob.autoRotationBehavior.idleRotationWaitTime = waitTime * 1000;
      appInstance._glob.autoRotationBehavior.idleRotationSpinupTime = spinupTime * 1000;
      appInstance._glob.autoRotationBehavior.attach(camera);
    } else {
      appInstance._glob.autoRotationBehavior.detach();
    }

  }`]);
  return `
  ${fun}(${enabled}, ${speed}, ${waitTime}, ${spinupTime});`
}

JavaScript['bounce_camera'] = block => {
  const duration = JavaScript.valueToCode(block, 'DURATION', JavaScript.ORDER_NONE) || `\'\'`;
  const minRadius = JavaScript.valueToCode(block, 'MIN_RADIUS', JavaScript.ORDER_NONE) || `\'\'`;
  const maxRadius = JavaScript.valueToCode(block, 'MAX_RADIUS', JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('bounce_camera', [`
  // bounce_camera block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(duration, minRadius, maxRadius) { 
    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };
    camera.lowerRadiusLimit = minRadius;
    camera.upperRadiusLimit = maxRadius;
    const bouncingBehavior = new BABYLON.BouncingBehavior();
    bouncingBehavior.transitionDuration = duration * 1000;
    bouncingBehavior.autoTransitionRange = true;
    bouncingBehavior.attach(camera);

  }`]);
  return `
  ${fun}(${duration}, ${minRadius}, ${maxRadius});`
}

JavaScript['zoom_camera'] = block => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  const duration = JavaScript.valueToCode(block, 'DURATION', JavaScript.ORDER_NONE) || `\'\'`;
  const whenFinishDo = `()=> {${JavaScript.statementToCode(block, 'WHEN_FINISH_DO')}}`;

  const fun = JavaScript.provideFunction_('zoom_camera', [`
  // zoom_camera block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, duration, whenFinishDo) { 
    if(mesh.getClassName() !== 'Mesh') return;

    const camera = appInstance.scene.activeCamera;
    if(camera.getClassName() !== 'ArcRotateCamera') {
      throw new Error('The effect only supports ArcRotateCamera');
    };
    const framingBehavior = new BABYLON.FramingBehavior();
    framingBehavior.mode = 1;
    framingBehavior.framingTime = duration * 1000;
    framingBehavior.zoomStopsAnimation = false;
    framingBehavior.attach(camera);
    framingBehavior.zoomOnMesh(mesh, false, () => {
      whenFinishDo();
    });
  }`]);
  return `
  ${fun}(${mesh}, ${duration}, ${whenFinishDo});`
}

JavaScript['camera_control_enabled'] = block => {
  const enabled = JavaScript.valueToCode(block, 'ENABLED', JavaScript.ORDER_NONE);
  const camera = JavaScript.valueToCode(block, 'CAMERA', JavaScript.ORDER_NONE);
  if (!camera) return ''

  if (enabled === 'true') {
    return `
    ${camera}.attachControl();`
  } else if (enabled === 'false') {
    return `
    ${camera}.detachControl();`
  }
}

JavaScript['camera_get_forward_ray'] = block => {
  const length = JavaScript.valueToCode(block, 'LENGTH', JavaScript.ORDER_NONE);

  return [`appInstance.scene.activeCamera.getForwardRay(${length})`, JavaScript.ORDER_FUNCTION_CALL]
}