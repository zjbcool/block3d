import { JavaScript } from 'blockly';

// 
JavaScript['pointer_event'] = (block) => {
  const eventType = block.getFieldValue('EVENT_TYPE');
  const hitCb = `()=> {${JavaScript.statementToCode(block, 'HIT_CB')}}`;
  const ignorBackface = block.getFieldValue('IGNOR_BACKFACE') == 'TRUE';

  const fun = JavaScript.provideFunction_('pointer_event', [`
  // pointer_event block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(eventType, ignorBackface, hitCb) { 
    const { scene } = appInstance;
    const camera = scene.activeCamera;
   
    /* 忽略网格背面 */
    function ignorBackfacePredicate(p0, p1, p2, ray) {
      var p0p1 = p0.subtract(p1);
      var p2p1 = p2.subtract(p1);
      var normal = BABYLON.Vector3.Cross(p0p1, p2p1);
      return BABYLON.Vector3.Dot(ray.direction, normal) < 0;
    }

    scene.onPointerObservable.add(()=>{
      const pickingInfo = scene.pick(scene.pointerX, scene.pointerY, undefined, false, camera, ignorBackface ? ignorBackfacePredicate : undefined);
      if (pickingInfo && pickingInfo.hit) {
        appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
        appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
        appInstance._glob.pickedNormal = pickingInfo.getNormal();
        hitCb();
      }
    }, eventType)
  }`]);
  return `
  ${fun}(${eventType}, ${ignorBackface}, ${hitCb});`
}

JavaScript['picking_info'] = (block) => {
  var option = `\'` + block.getFieldValue('OPTION') + `\'`;
  var point_option = `\'` + block.getFieldValue('POINT_OPTION') + `\'`;
  var normal_option = `\'` + block.getFieldValue('NORMAL_OPTION') + `\'`;

  var fun = JavaScript.provideFunction_('picking_info', [`
// picking_info block
function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(option, point_option, normal_option){ 
    if(!appInstance._glob.pickedMesh) return
    switch(option){
        case 'MESH':
            return appInstance._glob.pickedMesh;
        case 'POINT':
          switch(point_option){
            case 'X':
              return appInstance._glob.pickedPoint.x;
            case 'Y':
              return appInstance._glob.pickedPoint.y;
            case 'Z':
              return appInstance._glob.pickedPoint.z;
            case 'XYZ':
              return appInstance._glob.pickedPoint
          }
          break;
        case 'NORMAL':
          switch(normal_option){
            case 'X':
              return appInstance._glob.pickedNormal.x;
            case 'Y':
              return appInstance._glob.pickedNormal.y;
            case 'Z':
              return appInstance._glob.pickedNormal.z;
            case 'XYZ':
              return appInstance._glob.pickedNormal
          }
          break;
    }  
}
     `]);
  return [`${fun}(${option},${point_option},${normal_option})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['keyboard_event'] = block => {
  const type = block.getFieldValue('TYPE');
  const repeat = block.getFieldValue('REPEAT') === 'TRUE';

  return `
  appInstance.scene.onKeyboardObservable.add((eventData) => {
    if (eventData.type == BABYLON.KeyboardEventTypes.${type} && (${repeat} ? true : !eventData.event.repeat )) {
      appInstance._glob.keyInput = {key: eventData.event.key, keyCode: eventData.event.keyCode};
      ${JavaScript.statementToCode(block, 'DO_CB')}
    }
  });`
}

JavaScript['get_key_input'] = (block) => {
  const keyInput = block.getFieldValue('KEY_INPUT')
  return [`appInstance._glob.keyInput.${keyInput}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['on_before_render_event'] = block => {
  return `
  appInstance.scene.onBeforeRenderObservable.add(()=>{
    ${JavaScript.statementToCode(block, 'DO_CB')}
  })`
}

JavaScript['on_delay_event'] = (block) => {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `0`
  const doCb = `()=> {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('on_delay_event', [`
  // on_delay_event block
  async function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, doCb) { 
    await BABYLON.Tools.DelayAsync(${Number(value) * 1000});
    doCb();
  }`]);
  return `
  ${fun}(${value}, ${doCb});`
}

JavaScript['event_create_action'] = (block) => {
  const action = `\'${block.getFieldValue('ACTION')}\'`
  const trigger = block.getFieldValue('TRIGGER')
  const obj = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_NONE) || `\{\}`
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_NONE) || `\'\'`
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `0`
  const duration = JavaScript.valueToCode(block, 'DURATION', JavaScript.ORDER_NONE) || `0`
  const func = JavaScript.valueToCode(block, 'FUNC', JavaScript.ORDER_NONE) || `\'\'`
  const children = JavaScript.valueToCode(block, 'CHILDREN', JavaScript.ORDER_NONE) || `\[\]`
  const intersectsMesh = JavaScript.valueToCode(block, 'INTERSECTS_MESH', JavaScript.ORDER_NONE) || `\'\'`
  const precise = block.getFieldValue('PRECISE') === 'TRUE'

  const options = `{
    action: ${action},
    trigger: ${trigger},
    obj: ${obj},
    key: ${key},
    value: ${value},
    duration: ${duration},
    func: ${func},
    children: ${children},
    intersectsMesh: ${intersectsMesh},
    precise: ${precise},
  }`
  const fun = JavaScript.provideFunction_('event_create_action', [`
  // event_create_action block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    const { action, trigger, obj, key, value, duration, func, children, intersectsMesh, precise } = options;

    let param;
    if (intersectsMesh) {
      param = {
        mesh: intersectsMesh,
        usePreciseIntersection: precise
      }
    }

    switch (action) {
      case 'DoNothingAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          }
        )
      case 'InterpolateValueAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          obj,
          key,
          value,
          duration * 1000
        )
      case 'SwitchBooleanAction':
      case 'SetValueAction':
      case 'IncrementValueAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          obj,
          key,
          value,
        )
      case 'SwitchBooleanAction':
        return new BABYLON[action] (
            {
              trigger: trigger,
              parameter: param
            },
            obj,
            key,
          )
      case 'ExecuteCodeAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          func,
        )
      case 'CombineAction':
        return new BABYLON[action] (
          {
            trigger: trigger,
            parameter: param
          },
          children,
        )
    }

  }`]);
  return [`${fun}(${options})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['event_add_actions'] = (block) => {
  const actions = JavaScript.valueToCode(block, 'ACTIONS', JavaScript.ORDER_NONE);
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE)

  const fun = JavaScript.provideFunction_('event_add_actions', [`
  // event_add_actions block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(actions, mesh) { 
    if(!mesh || !Array.isArray(actions) || !actions.length) return;
    mesh.actionManager = new BABYLON.ActionManager(appInstance.scene);
    let act = mesh.actionManager.registerAction(actions[0]);
    if(actions.length === 1) return;

    for (let i=1; i<actions.length; i++) {
      act = act.then(actions[i])
    }
  }`]);
  return `
  ${fun}(${actions}, ${mesh});`
}

JavaScript['create_custom_event'] = (block) => {
  return [`new BABYLON.Observable()`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['dispatch_custom_event'] = (block) => {
  const evt = JavaScript.valueToCode(block, 'EVENT', JavaScript.ORDER_NONE);
  const customEventData = JavaScript.valueToCode(block, 'CUSTOM_EVENT_DATA', JavaScript.ORDER_NONE) || `\{\}`;
  if (!evt) return '';
  return `
  ${evt}.notifyObservers(${customEventData});`
}

JavaScript['add_custom_event_listener'] = (block) => {
  const evt = JavaScript.valueToCode(block, 'EVENT', JavaScript.ORDER_NONE);
  if (!evt) return '';
  return `
  ${evt}.add((custom_event_data) => {${JavaScript.statementToCode(block, 'DO_CB')}
  });`
}

JavaScript['custom_event_data'] = block => {
  return [`custom_event_data`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['create_virtual_joystick'] = block => {
  const isLeft = block.getFieldValue('IS_LEFT') == 'LEFT'
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`
  return [`new BABYLON.VirtualJoystick(${isLeft}, ${options})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['create_virtual_joystick_option'] = JavaScript['object_key_value']

JavaScript['virtual_joystick_get_delta_position'] = block => {
  const joystick = JavaScript.valueToCode(block, 'JOYSTICK', JavaScript.ORDER_NONE)
  if (!joystick) return ''
  return [`${joystick}.deltaPosition`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['set_virtual_joystick_visible'] = block => {
  const isVisible = block.getFieldValue('IS_VISIBLE') == 'SHOW'
  if (isVisible) {
    return `
  BABYLON.VirtualJoystick.Canvas.style.zIndex = "100";`
  } else {
    return `
  BABYLON.VirtualJoystick.Canvas.style.zIndex = "-1";`
  }

}

JavaScript['create_ray'] = block => {
  const origin = JavaScript.valueToCode(block, 'ORIGIN', JavaScript.ORDER_NONE);
  const direction = JavaScript.valueToCode(block, 'DIRECTION', JavaScript.ORDER_NONE);
  const length = JavaScript.valueToCode(block, 'LENGTH', JavaScript.ORDER_NONE);
  return [`new BABYLON.Ray(${origin}, ${direction}, ${length})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['ray_intersects_mesh'] = block => {
  const ray = JavaScript.valueToCode(block, 'RAY', JavaScript.ORDER_NONE) || `\'\'`;
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const doCb = `()=> {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('ray_intersects_mesh', [`
  // ray_intersects_mesh block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(ray, mesh, doCb) { 
    if(!ray || !mesh) return;

    let pickingInfo;
    if(Array.isArray(mesh)) {
      pickingInfo = ray.intersectsMeshes(mesh, true)[0];
    } else {
      pickingInfo = ray.intersectsMesh(mesh, true);
    }
    if (pickingInfo && pickingInfo.hit) {
      appInstance._glob.pickedMesh = pickingInfo.pickedMesh;
      appInstance._glob.pickedPoint = pickingInfo.pickedPoint;
      appInstance._glob.pickedNormal = pickingInfo.getNormal();
      doCb();
    }
  }`]);
  return `
  ${fun}(${ray}, ${mesh}, ${doCb});`
}