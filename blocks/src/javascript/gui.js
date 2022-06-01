import {
  JavaScript
} from 'blockly';

JavaScript['create_fullscreen_UI'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE);
  const json = JavaScript.valueToCode(block, 'JSON', JavaScript.ORDER_NONE) || `\{\}`;

  const fun = JavaScript.provideFunction_('create_fullscreen_UI', [`
  // create_fullscreen_UI block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, json) { 
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(name, true, appInstance.scene, BABYLON.Texture.NEAREST_NEAREST);
    advancedTexture.parseContent(JSON.parse(json));
    advancedTexture.rootContainer.scaleX = window.devicePixelRatio;
    advancedTexture.rootContainer.scaleY = window.devicePixelRatio;
    return advancedTexture;
  }`]);
  return [`${fun}(${name}, ${json})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['set_get_advTexture_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const advTexture = JavaScript.valueToCode(block, 'ADV_TEXTURE', JavaScript.ORDER_NONE);
  const prop = block.getFieldValue('PROP');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;

  if (!advTexture) return ''

  if (method === 'set') {
    if (prop == 'layerMask') {
      return `
  ${advTexture}.layer.layerMask = ${value}`
    } else {
      return `
  ${advTexture}.${prop} = ${value};`
    }
  } else if (method === 'get') {
    return [`${advTexture}.${prop}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['gui_get_control'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const adt = JavaScript.valueToCode(block, 'ADT', JavaScript.ORDER_NONE);
  if (!adt) return '';
  return [`${adt}.getControlByName(${name})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['gui_control_prop'] = (block) => {
  const method = block.getFieldValue('METHOD');
  const control = JavaScript.valueToCode(block, 'CONTROL', JavaScript.ORDER_NONE);
  const prop = block.getFieldValue('PROP');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;

  if (!control) return ''

  if (method === 'set') {
    return `
    ${control}.${prop} = ${value};`
  } else if (method === 'get') {
    return [`${control}.${prop}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['gui_get_control_value'] = block => {
  const control = JavaScript.valueToCode(block, 'CONTROL', JavaScript.ORDER_NONE);

  const fun = JavaScript.provideFunction_('gui_get_control_value', [`
  // gui_get_control_value block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(control) {
    if(!control) return;
    const controlType = control.getClassName();
    switch(controlType) {
      case 'TextBlock':
      case 'InputText':
      case 'InputPassword':
        return control.text
      case 'Checkbox':
      case 'RadioButton':
        return control.isChecked
      case 'ColorPicker':
      case 'Slider':
      case 'ImageBasedSlider':
        return control.value
      case 'Button':
        return control.name
    }
  }`]);
  return [`${fun}(${control})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['gui_get_child_controls'] = block => {
  const control = JavaScript.valueToCode(block, 'CONTROL', JavaScript.ORDER_NONE);
  const children = block.getFieldValue('CHILDREN');
  const type = block.getFieldValue('TYPE');

  if (!control)
    return '';
  if (type === 'none') {
    return [`${control}.getDescendants(${children === 'directChildren'})`, JavaScript.ORDER_FUNCTION_CALL]
  } else {
    return [`${control}.getDescendants(${children === 'directChildren'}, control => control.getClassName() === \'${type}\')`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['gui_event'] = (block) => {
  const eventType = block.getFieldValue('EVENT_TYPE');
  const control = JavaScript.valueToCode(block, 'CONTROL', JavaScript.ORDER_NONE) || `\'\'`;
  const doCb = JavaScript.statementToCode(block, 'DO_CB');

  const eventTypeMap = {
    pointerClick: 'onPointerClickObservable',
    pointerDown: 'onPointerDownObservable',
    pointerEnter: 'onPointerEnterObservable',
    pointerMove: 'onPointerMoveObservable',
    pointerOut: 'onPointerOutObservable',
    pointerUp: 'onPointerUpObservable',
    textChanged: 'onTextChangedObservable',
    valueChanged: 'onValueChangedObservable',
    wheel: 'onWheelObservable',
  }

  return `
  ${control}.${eventTypeMap[eventType]}.add(() => {
    ${doCb}
  });`
}

JavaScript['gui_move_control_to_vector'] = block => {
  const control = JavaScript.valueToCode(block, 'CONTROL', JavaScript.ORDER_NONE) || `\'\'`;
  const target = JavaScript.valueToCode(block, 'TARGET', JavaScript.ORDER_NONE) || `\'\'`;

  if (!control) return '';
  return `
  ${control}.moveToVector3(${target}, appInstance.scene);`
}

