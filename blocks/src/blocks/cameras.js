import {
  Blocks,
  Msg,
  FieldDropdown,
  FieldCheckbox,
  ALIGN_RIGHT,
  Mutator
} from 'blockly';
import { updateShadow, disposeShadowBlock, advancedOptionsMixin } from '../util/util.js';
import MenuGenerator from './camera_menu_generator';
import { createStatementCheckMixin } from './mixins';

Blocks['create_camera'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('create')
      .appendField(new FieldDropdown(() => MenuGenerator.cameraType.generatMenu(), option => _this.updateShape_(option)), 'TYPE');
    const name = this.appendValueInput('NAME')
      .appendField('name')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Camera');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#create-camera');
    _this.updateShape_('UniversalCamera');
    updateShadow(name, 'TEXT', '')
  },
  updateShape_(option) {
    const _this = this;
    removeInputs();
    switch (option) {
      case 'UniversalCamera':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.setTooltip(Msg.create_universal_camera_tooltip);
        updateShadow(this.getInput('POSITION'), 'VECTOR3', [0, 0, 0]);
        break;
      case 'ArcRotateCamera':
        this.appendValueInput('ALPHA')
          .appendField('alpha')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('BETA')
          .appendField('beta')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('RADIUS')
          .appendField('radius')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('TARGET')
          .appendField('target')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.setTooltip(Msg.create_arc_rotate_camera_tooltip);
        this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.arcrotatecamera');
        updateShadow(this.getInput('ALPHA'), 'ANGLE', '-90');
        updateShadow(this.getInput('BETA'), 'ANGLE', '90');
        updateShadow(this.getInput('RADIUS'), 'NUM', '20');
        updateShadow(this.getInput('TARGET'), 'VECTOR3', [0, 0, 0]);
        break;
      case 'FollowCamera':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.setTooltip(Msg.create_follow_camera_tooltip);
        updateShadow(this.getInput('POSITION'), 'VECTOR3', [0, 0, 0]);
        break;
      case 'AnaglyphUniversalCamera':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.appendValueInput('INTERAXIAL_DISTANCE')
          .appendField('interaxialDistance')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.setTooltip(Msg.create_anaglyph_universal_camera_tooltip);
        updateShadow(this.getInput('INTERAXIAL_DISTANCE'), 'NUM', '0.033');
        updateShadow(this.getInput('POSITION'), 'VECTOR3', [0, 0, 0]);
        break;
      case 'AnaglyphArcRotateCamera':
        this.appendValueInput('ALPHA')
          .appendField('alpha')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('BETA')
          .appendField('beta')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('RADIUS')
          .appendField('radius')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.appendValueInput('TARGET')
          .appendField('target')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.appendValueInput('INTERAXIAL_DISTANCE')
          .appendField('interaxialDistance')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Number');
        this.setTooltip(Msg.create_anaglyph_arc_rotate_camera_tooltip);
        updateShadow(this.getInput('ALPHA'), 'NUM', '-90');
        updateShadow(this.getInput('BETA'), 'NUM', '90');
        updateShadow(this.getInput('RADIUS'), 'NUM', '20');
        updateShadow(this.getInput('TARGET'), 'VECTOR3', [0, 0, 0]);
        updateShadow(this.getInput('INTERAXIAL_DISTANCE'), 'NUM', '0.033');
        break;
      case 'DeviceOrientationCamera':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setAlign(ALIGN_RIGHT)
          .setCheck('Vector3');
        this.setTooltip(Msg.create_device_orienation_camera_tooltip);
        updateShadow(this.getInput('POSITION'), 'VECTOR3', [0, 0, 0]);
        break;
    }
    function removeInputs() {
      _this.getInput('ALPHA') && (disposeShadowBlock(_this.getInput('ALPHA')), _this.removeInput('ALPHA'));
      _this.getInput('BETA') && (disposeShadowBlock(_this.getInput('BETA')), _this.removeInput('BETA'));
      _this.getInput('RADIUS') && (disposeShadowBlock(_this.getInput('RADIUS')), _this.removeInput('RADIUS'));
      _this.getInput('TARGET') && (disposeShadowBlock(_this.getInput('TARGET')), _this.removeInput('TARGET'));
      _this.getInput('POSITION') && (disposeShadowBlock(_this.getInput('POSITION')), _this.removeInput('POSITION'));
      _this.getInput('INTERAXIAL_DISTANCE') && (disposeShadowBlock(_this.getInput('INTERAXIAL_DISTANCE')), _this.removeInput('INTERAXIAL_DISTANCE'));
    }
  },

}

Blocks['set_get_camera_prop'] = {
  init: function () {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
      }), 'METHOD')
    const camera = this.appendValueInput('CAMERA')
      .appendField(new FieldDropdown(() => MenuGenerator.cameraType.generatMenu(), type => _this.updateKeyField(type)), 'TYPE')
      .setCheck('Camera');
    this.appendDummyInput('KEY_INPUT');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets the camera's property");
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#set-get-camera-prop');
    this.mixin(statementCheckMixin);
    this.updateKeyField('UniversalCamera');
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(camera, 'CAMERA', '')
    updateShadow(_this.getInput('VALUE'), 'BOOL', 'TRUE')
  },

  updateKeyField(type) {
    const _this = this;
    const keyInput = _this.getInput('KEY_INPUT')
    keyInput.removeField('KEY', true)
    keyInput.appendField(new FieldDropdown(() => MenuGenerator[type].generatMenu(), key => {
      _this.getFieldValue('METHOD') === 'set' && MenuGenerator[type].updateShape(_this, _this.getInput('VALUE'), key)
      _this.getFieldValue('METHOD') === 'get' && MenuGenerator[type].updateTooltip(_this, key)
    }), 'KEY');
  },
}

Blocks['set_get_active_camera'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && updateShadow(_this.getInput('VALUE'), 'CAMERA', '');
      }), 'METHOD')
      .appendField('active camera');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Msg.set_get_active_camera_tooltip)
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#set-get-active-camera');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(_this.getInput('VALUE'), 'CAMERA', '')
  }
}

Blocks['remove_camera'] = {
  init() {
    const camera = this.appendValueInput('CAMERA')
      .appendField('remove camera')
      .setCheck('Camera');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg.remove_camera_tooltip);
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#remove-camera');
    updateShadow(camera, 'CAMERA', '')
  }
}

Blocks['autorotate_camera'] = {
  init() {
    this.appendDummyInput()
      .appendField('autorotate')
      .appendField('enabled')
      .appendField(new FieldCheckbox('TRUE'), 'ENABLED');
    const speed = this.appendValueInput('SPEED')
      .appendField('speed')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const waitTime = this.appendValueInput('WAIT_TIME')
      .appendField('wait time')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const spinupTime = this.appendValueInput('SPINUP_TIME')
      .appendField('spinup time')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Create a smooth rotation of an ArcRotateCamera when there is no user interaction.\nspeed: (number) The speed at which the camera rotates around the model.\nwait time (number) The time (seconds) to wait after user interaction before the camera starts rotating\nspin up time: (number) The time (seconds) to take to spin up to the full idle rotation speed.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#autorotate-camera');

    updateShadow(speed, 'NUM', '0.05')
    updateShadow(waitTime, 'NUM', '2')
    updateShadow(spinupTime, 'NUM', '2')
  }
}

Blocks['bounce_camera'] = {
  init() {
    this.appendDummyInput()
      .appendField('bounce');
    const duration = this.appendValueInput('DURATION')
      .appendField('duration')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const minRadius = this.appendValueInput('MIN_RADIUS')
      .appendField('minDistance')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const maxRadius = this.appendValueInput('MAX_RADIUS')
      .appendField('maxDistance')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius\nduration: (number) The duration of the animation, in seconds\nmin distance: (number) Minimum allowed distance of the camera to the target (The camera can not get closer).\nmax distance: (number) Maximum allowed distance of the camera to the target (The camera can not get further).');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#bounce-camera');

    updateShadow(duration, 'NUM', '0.45')
    updateShadow(minRadius, 'NUM', '1')
    updateShadow(maxRadius, 'NUM', '10')
  }
}

Blocks['zoom_camera'] = {
  init() {
    const mesh = this.appendValueInput('MESH')
      .appendField('zoom on')
      .setCheck('Mesh');
    const duration = this.appendValueInput('DURATION')
      .appendField('duration')
      .setCheck('Number');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('(Mesh) Targets the given mesh');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#zoom-camera');
    this.setMutator(new Mutator(["invisibleBlock"]));
    this.mixin(advancedOptionsMixin([
      ["whenFinishedSlot", "when finished slot", !1],
    ],
      "cameras_style",
      () => {
        this.updateShape_();
      }
    ));

    updateShadow(mesh, 'MESH', '')
    updateShadow(duration, 'NUM', '1.5')
  },
  updateShape_() {
    // 删除旧的
    this.getInput('WHEN_FINISH_DO') && this.removeInput('WHEN_FINISH_DO');
    this._boolOptValues.whenFinishedSlot && this.appendStatementInput("WHEN_FINISH_DO")
      .appendField("when finish do")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
  }
}

Blocks['camera_control_enabled'] = {
  init() {
    const camera = this.appendValueInput('CAMERA')
      .appendField('camera control')
      .setCheck('Camera');
    const enabled = this.appendValueInput('ENABLED')
      .appendField('enabled')
      .setCheck('Boolean')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sets the camera control enabled or not.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#camera-control-enabled');

    updateShadow(camera, 'CAMERA', '')
    updateShadow(enabled, 'BOOL', 'TRUE')
  }
}

Blocks['camera_get_forward_ray'] = {
  init() {
    this.appendDummyInput()
      .appendField('get camera forward ray')
    const length = this.appendValueInput('LENGTH')
      .appendField('length')
      .setAlign(ALIGN_RIGHT)
      .setCheck('Number');
    this.setStyle("cameras_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Ray');
    this.setTooltip('Gets a ray in the forward direction from the camera.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/cameras.html#camera-get-forward-ray');
    updateShadow(length, 'NUM', '100')
  },
}
