import { JavaScript } from 'blockly';
import { wrapFn } from '../util/util';

JavaScript['scene_create_custom_preloader'] = block => {
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;

  const fun = JavaScript.provideFunction_('create_custom_preloader', [`
  // create_custom_preloader block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(options) { 
    function $(className) {
      var styles = document.styleSheets;
      for (var i = 0; i < styles.length; i++) {
        /**
        * workaround for "DOMException: Failed to read the 'cssRules' property
        * from 'CSSStyleSheet': Cannot access rules"
        */
        try { var cssRules = styles[i].cssRules; }
        catch (e) { continue; }

        for (var j = 0; j < cssRules.length; j++) {
          var cssRule = cssRules[j];
          if (cssRule.selectorText == className)
            return cssRule.style;
        }
      }
    }
    
    const bgElem = $('.preloader-background'),
      logoElem = $('.preloader-logo'),
      barElem = $('.preloader-bar'),
      borderElem = $('.preloader-bar');

    if(options.hasOwnProperty('background')) bgElem.background = options.background;
    if(options.hasOwnProperty('logoImage')) logoElem.background = "center / contain no-repeat url(" + options.logoImage + ")";
    if(options.hasOwnProperty('barBackground')) barElem.background = options.barBackground;
    if(options.hasOwnProperty('barBorder')) borderElem.border = options.barBorder;
    if(options.hasOwnProperty('barHeight')) borderElem.height = options.barHeight;

    appInstance.preloader = new BABYLON.Preloader(appInstance.canvas);
    appInstance.preloader.start();
  }
     `]);
  return `
  ${fun}(${options});`
}
JavaScript['scene_create_custom_preloader_option'] = JavaScript['object_key_value']

JavaScript['scene_update_custom_preloader'] = block => {
  const method = block.getFieldValue('METHOD');
  const percentage = JavaScript.valueToCode(block, 'PERCENTAGE', JavaScript.ORDER_NONE) || 0;
  if (method === 'update') {
    return `
    appInstance.preloader && appInstance.preloader.update(${percentage});`
  } else if (method === 'finish') {
    return `
    appInstance.preloader && appInstance.preloader.finish();`
  }
}

JavaScript['scene_assets_manager'] = (block) => {
  const useDefaultPreloader = block.getFieldValue('USE_DEFAULT_PRELOADER') == 'TRUE';
  const loadAssetsCb = `${wrapFn(JavaScript.statementToCode(block, 'LOAD_ASSETS'))}`,
    onProgressCb = `${wrapFn(JavaScript.statementToCode(block, 'ON_PROGRESS'))}`,
    onFinishCb = `${wrapFn(JavaScript.statementToCode(block, 'ON_FINISH'))}`,
    onReadyCb = `${wrapFn(JavaScript.statementToCode(block, 'ON_READY'))}`;

  const fun = JavaScript.provideFunction_('scene_assets_manager', [`
  // scene_assets_manager block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(useDefaultPreloader, loadAssetsCb, onProgressCb, onFinishCb, onReadyCb) { 
    appInstance.assetsManager = new BABYLON.AssetsManager(appInstance.scene);
    useDefaultPreloader && (appInstance.assetsManager.useDefaultLoadingScreen = true) || (appInstance.assetsManager.useDefaultLoadingScreen = false);
    loadAssetsCb ();
    appInstance.assetsManager.load();

    appInstance.assetsManager.onProgress = (remainingCount, totalCount) => {
      const percentage = ((totalCount - remainingCount) / totalCount * 100).toFixed();
      appInstance._glob.preloaderPercentage = percentage;
      onProgressCb();
    }

    appInstance.assetsManager.onFinish = (tasks) => {
      onFinishCb();
    }

    appInstance.scene.onReadyObservable.add(() => {
      onReadyCb();
    })
  }`]);
  return `
  ${fun}(${useDefaultPreloader}, ${loadAssetsCb}, ${onProgressCb}, ${onFinishCb}, ${onReadyCb});`
}

JavaScript['scene_preloader_percentage'] = block => {
  return [`appInstance._glob.preloaderPercentage`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['scene_load_asset'] = block => {
  const assetName = JavaScript.valueToCode(block, 'ASSET_NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const type = block.getFieldValue('TYPE');
  const url = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_NONE) || `\'\'`;
  const size = JavaScript.valueToCode(block, 'SIZE', JavaScript.ORDER_NONE) || `\'\'`;

  let code;
  switch (type) {
    case 'addMeshTask':
      code = `appInstance.assetsManager.addMeshTask(${assetName}, '', ${BABYLON.Tools.GetFolderPath(url)}\', \'${BABYLON.Tools.GetFilename(url)})`;
      break;
    case 'addEquiRectangularCubeTextureAssetTask':
    case 'addHDRCubeTextureTask':
      code = `appInstance.assetsManager.${type}(${assetName}, ${url}, ${size})`;
      break;
    case 'addBinaryFileTask':
    case 'addCubeTextureTask':
    case 'addImageTask':
    case 'addTextureTask':
    case 'addTextFileTask':
    case 'addTextureTask':
      code = `appInstance.assetsManager.${type}(${assetName}, ${url})`;
      break;
  }
  return [code, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['scene_get_loaded_from_asset'] = block => {
  const asset = JavaScript.valueToCode(block, 'ASSET', JavaScript.ORDER_NONE);
  const type = block.getFieldValue('TYPE');
  if (!asset) return '';

  let code;
  switch (type) {
    case 'animationGroups':
      code = `${asset}.loadedAnimationGroups`;
      break;
    case 'image':
      code = `${asset}.image`;
      break;
    case 'binaryData':
      code = `String.fromCharCode.apply(null, new Uint8Array(${asset}.data))`;
      break;
    case 'meshes':
      code = `${asset}.loadedMeshes`;
      break;
    case 'skeletons':
      code = `${asset}.loadedSkeletons`;
      break;
    case 'text':
      code = `${asset}.text`;
      break;
    case 'texture':
      code = `${asset}.texture`;
      break;
  }
  return [code, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['scene_on_finish_load'] = block => {
  const asset = JavaScript.valueToCode(block, 'ASSET', JavaScript.ORDER_NONE);
  const doCb = JavaScript.statementToCode(block, 'DO_CB');
  if (!asset) return '';
  return `
  ${asset}.onSuccess = task => {
    ${doCb}
  }`
}

JavaScript['set_scene_prop'] = block => {
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  return `
  appInstance.scene.${key} = ${value};`
}

JavaScript['scene_create_default_environment'] = block => {
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;
  return `
  appInstance.env && appInstance.env.dispose()
  appInstance.env = appInstance.scene.createDefaultEnvironment(${options})`
}

JavaScript['scene_update_default_environment'] = block => {
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;
  return `
  appInstance.env.updateOptions(${options});`
}

JavaScript['scene_create_default_environment_option'] = JavaScript['object_key_value']

JavaScript['scene_get_environment_prop'] = block => {
  const prop = block.getFieldValue('PROP');
  return [`appInstance.env.${prop}`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['create_photo_dome'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const url = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_NONE) || `\'\'`;
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;

  return `
  new BABYLON.PhotoDome( ${name}, ${url}, ${options}, appInstance.scene );`
}

JavaScript['create_photo_dome_option'] = JavaScript['object_key_value']

JavaScript['app_fullscreen'] = block => {
  const enabled = JavaScript.valueToCode(block, 'ENABLED', JavaScript.ORDER_NONE);
  const pointerLock = block.getFieldValue('POINTER_LOCK') === 'TRUE';
  if (enabled === 'true')
    return `appInstance.engine.enterFullscreen(${pointerLock});`
  else if (enabled === 'false')
    return `appInstance.engine.exitFullscreen();`
}

JavaScript['app_pointer_lock'] = block => {
  const enabled = JavaScript.valueToCode(block, 'ENABLED', JavaScript.ORDER_NONE);
  if (enabled === 'true')
    return `appInstance.engine.enterPointerlock();`
  else if (enabled === 'false')
    return `appInstance.engine.exitPointerlock();`
}