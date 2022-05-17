import { JavaScript } from 'blockly';

JavaScript['display_inspector'] = block => {
  const display = block.getFieldValue('DISPLAY');
  const scene = block.getFieldValue('SCENE');
  const embedMode = block.getFieldValue('EMBED_MODE') === 'TRUE';

  JavaScript.provideFunction_('createDebugLayerElement', [`
  // used for display_inspector block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}() {
    // remove old
    const oldElem = document.getElementById('debugLayer');
    oldElem && oldElem.parentElement.removeChild(oldElem);

    const debugLayer = document.createElement('div');
    debugLayer.id = 'debugLayer';
    debugLayer.style.width = '100%';
    debugLayer.style.height = '100%';
    document.getElementById('renderCanvas').insertAdjacentElement('afterend', debugLayer);
    return debugLayer;
  }
  `]);

  const sceneMap = {
    default: 'scene',
    GUI: 'overlayScene'
  }

  if (display === 'show') {
    return `
    appInstance.${sceneMap[scene]}.debugLayer.show({
      embedMode: ${embedMode},
      globalRoot: createDebugLayerElement()
    });
    `
  } else {
    return `
    appInstance.${sceneMap[scene]}.debugLayer.hide();`
  }

}