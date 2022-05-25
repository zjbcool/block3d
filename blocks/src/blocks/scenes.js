import {
  Blocks,
  FieldDropdown,
  FieldCheckbox,
  FieldVariable,
  ALIGN_RIGHT,
  Mutator,
  Msg
} from 'blockly';
import { createSurroundCheckMixin, createContextMenuBlockMixin } from './mixins';
import { advancedOptionsMixin, updateShadow } from '../util/util';
import MenuGenerator from './scene_menu_generator';

Blocks['scene_create_custom_preloader'] = {
  init() {
    this.appendDummyInput()
      .appendField("create custom preloader");
    const options = this.appendValueInput("OPTIONS")
      .setAlign(ALIGN_RIGHT)
      .appendField("options")
      .setCheck("Object");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("scenes_style");
    this.setTooltip("for changing background of the entire preloader screen.");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/scenes.html#scene-create-custom-preloader");
    this.mixin(createContextMenuBlockMixin('scene_create_custom_preloader_option', 'option'));
    updateShadow(options, 'OBJECT', '')
  }
}

Blocks['scene_create_custom_preloader_option'] = {
  init() {
    const _this = this;
    const valueInput = this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.customPreloaderOption.generatMenu(), option => MenuGenerator.customPreloaderOption.updateShape(_this, valueInput, option)), 'KEY')
      .appendField('to')
      .setCheck(null);
    this.setStyle('scenes_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('object_create'));
    updateShadow(valueInput, 'TEXT', 'radial-gradient(#eee, #888)')
  }
}

Blocks['scene_update_custom_preloader'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['update', 'update'],
        ['finish', 'finish'],
      ], method => {
        method === 'update' && !_this.getInput('PERCENTAGE') && this.appendValueInput('PERCENTAGE').setCheck('Number')
        method === 'finish' && _this.getInput('PERCENTAGE') && _this.removeInput('PERCENTAGE')
      }), 'METHOD')
      .appendField('custom preloader');
    this.appendValueInput('PERCENTAGE')
      .appendField('percentage')
      .setCheck('Number')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("scenes_style");
    this.setTooltip("Update the preloader progress with percentage");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/scenes.html#scene-update-custom-preloader");
  }
}

Blocks['scene_assets_manager'] = {
  init() {
    this.appendDummyInput()
      .appendField('assets manager');
    this.appendDummyInput()
      .setAlign(ALIGN_RIGHT)
      .appendField("useDefaultPreloader")
      .appendField(new FieldCheckbox('TRUE'), 'USE_DEFAULT_PRELOADER');
    this.appendStatementInput("LOAD_ASSETS")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField('load assets');
    this.appendStatementInput("ON_PROGRESS")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField('on progress');
    this.appendStatementInput("ON_FINISH")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField('on load');
    this.appendStatementInput("ON_READY")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField('on ready');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg.APP_ASSETS_MANAGER_TOOLTIP);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-assets-manager');
    this.mixin(createContextMenuBlockMixin('scene_preloader_percentage', 'percentage'));
  }
}

Blocks['scene_preloader_percentage'] = {
  init() {
    this.appendDummyInput()
      .appendField('percentage')
    this.setInputsInline(false);
    this.setOutput(true, 'Number');
    this.setStyle("scenes_style");
    this.setTooltip("");
    this.setHelpUrl("");
    this.mixin(createSurroundCheckMixin('scene_assets_manager'));
  }
}

Blocks['scene_load_asset'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('load asset')
      .appendField(new FieldDropdown(() => MenuGenerator.assetsType.generatMenu(), type => _this.updateShape(type)), 'TYPE');
    const assetName = this.appendValueInput('ASSET_NAME')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('name');
    const urlInput = this.appendValueInput('URL')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('url');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip(Msg.APP_ADD_TASK_TOOLTIP);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-load-asset');
    this.mixin(createSurroundCheckMixin('scene_assets_manager'));

    updateShadow(assetName, 'TEXT', 'load')
    updateShadow(urlInput, 'TEXT', 'assets/scene/cube.babylon')
  },
  updateShape(type) {
    MenuGenerator.assetsType.updateShape(this, this.getInput('URL'), type)
    this.getInput('SIZE') && this.removeInput('SIZE')
    switch (type) {
      case 'addHDRCubeTextureTask':
      case 'addEquiRectangularCubeTextureAssetTask':
        !this.getInput('SIZE') && (this.appendValueInput('SIZE').appendField('size').setAlign(ALIGN_RIGHT), updateShadow(this.getInput('SIZE'), 'NUM', '1024'))
        break;
    }
  }
}

Blocks['scene_get_loaded_from_asset'] = {
  init() {
    this.appendValueInput('ASSET')
      .appendField('get loaded')
      .appendField(new FieldDropdown(() => MenuGenerator.assetsLoaded.generatMenu()), 'TYPE')
      .appendField('from')
      .setCheck(null);
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-get-loaded-from-asset');
  }
}

Blocks['scene_on_finish_load'] = {
  init() {
    this.appendValueInput('ASSET')
      .appendField('on finish load')
      .setCheck(null);
    this.appendStatementInput('DO_CB');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Callback called when the task is successful');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-on-finish-load');
  }
}

Blocks['set_scene_prop'] = {
  init: function () {
    const _this = this;
    const valueInput = this.appendValueInput('VALUE')
      .appendField('set scene')
      .appendField(new FieldDropdown(() => MenuGenerator.sceneProps.generatMenu(), option => MenuGenerator.sceneProps.updateShape(_this, valueInput, option)), 'KEY')
      .appendField('to');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#set-scene-prop');
    updateShadow(valueInput, 'COLOR3', [0, 0, 0])
  }
}

Blocks['scene_create_default_environment'] = {
  init() {
    this.appendValueInput('OPTIONS')
      .appendField('create environment options')
      .setCheck('Object');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Creates a new environment');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-create-default-environment');
    this.mixin(createContextMenuBlockMixin('scene_create_default_environment_option', 'option'));
    updateShadow(this.getInput('OPTIONS'), 'OBJECT', '')
  }
}

Blocks['scene_update_default_environment'] = {
  init() {
    this.appendValueInput('OPTIONS')
      .appendField('update environment options')
      .setCheck('Object');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Updates the background according to the new options');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-update-default-environment');
    this.mixin(createContextMenuBlockMixin('scene_create_default_environment_option', 'option'));
    updateShadow(this.getInput('OPTIONS'), 'OBJECT', '')
  }
}

Blocks['scene_create_default_environment_option'] = {
  init() {
    const _this = this;
    this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.envOptions.generatMenu(), option => MenuGenerator.envOptions.updateShape(_this, _this.getInput('VALUE'), option)), 'KEY')
      .appendField('to');
    this.setStyle('scenes_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/interfaces/babylon.ienvironmenthelperoptions');
    this.mixin(createSurroundCheckMixin('object_create'));
    MenuGenerator.envOptions.updateShape(_this, _this.getInput('VALUE'), 'backgroundYRotation');
  }
}

Blocks['scene_get_environment_prop'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('get environment')
      .appendField(new FieldDropdown(() => MenuGenerator.envAccessors.generatMenu(), option => MenuGenerator.envAccessors.updateTooltip(_this, option)), 'PROP');
    this.setStyle('scenes_style');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#scene-get-environment-prop')
  }
}

Blocks['create_photo_dome'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('create 360 photo');
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('name');
    const url = this.appendValueInput('URL')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT)
      .appendField('url');
    const options = this.appendValueInput('OPTIONS')
      .setCheck('Object')
      .setAlign(ALIGN_RIGHT)
      .appendField('options');
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg.CREATE_PHOTO_DOME_TOOLTIP);
    this.setHelpUrl('');
    this.mixin(createContextMenuBlockMixin('create_photo_dome_option', 'option'));

    updateShadow(name, 'TEXT', '')
    updateShadow(url, 'TEXT', '')
    updateShadow(options, 'OBJECT', '')
  }
}

Blocks['create_photo_dome_option'] = {
  init() {
    const _this = this;
    const valueInput = this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.photoDomeOptions.generatMenu(), option => MenuGenerator.photoDomeOptions.updateShape(_this, valueInput, option)), 'KEY')
      .appendField('to')
      .setCheck(null);
    this.setStyle('scenes_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('object_create'));
    MenuGenerator.photoDomeOptions.updateShape(_this, valueInput, 'autoPlay')
  }
}
Blocks['app_fullscreen'] = {
  init() {
    this.appendDummyInput()
      .appendField('fullscreen');
    const enabled = this.appendValueInput('ENABLED')
      .appendField('enabled')
      .setCheck('Boolean')
      .setAlign(ALIGN_RIGHT);
    this.appendDummyInput()
      .appendField('pointerLock')
      .appendField(new FieldCheckbox('TRUE'), 'POINTER_LOCK')
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enters or exits Fullscreen mode');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#app-fullscreen');

    updateShadow(enabled, 'BOOL', 'TRUE')
  }
}

Blocks['app_pointer_lock'] = {
  init() {
    this.appendDummyInput()
      .appendField('pointer lock');
    const enabled = this.appendValueInput('ENABLED')
      .appendField('enabled')
      .setCheck('Boolean')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("scenes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Enters or exits Pointerlock mode');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/scenes.html#app-pointer-lock');

    updateShadow(enabled, 'BOOL', 'TRUE')
  }
}