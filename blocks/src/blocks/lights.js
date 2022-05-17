import {
  Blocks,
  FieldDropdown,
  FieldCheckbox,
  ALIGN_RIGHT,
  Msg
} from 'blockly';
import { disposeShadowBlock, updateShadow } from '../util/util'
import MenuGenerator from './lights_menu_generator'
import { createStatementCheckMixin } from './mixins';

Blocks['create_light'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('create')
      .appendField(new FieldDropdown(() => MenuGenerator.lightType.generatMenu(), option => _this.updateShap_(option)), 'TYPE');
    this.appendValueInput('NAME')
      .appendField('name')
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
    this.setStyle("lights_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Light');
    this.setTooltip('Creats light.');
    this.updateShap_('PointLight');
  },
  updateShap_(option) {
    const _this = this;
    function removeInput() {
      _this.getInput('POSITION') && (disposeShadowBlock(_this.getInput('POSITION')), _this.removeInput('POSITION'));
      _this.getInput('DIRECTION') && (disposeShadowBlock(_this.getInput('DIRECTION')), _this.removeInput('DIRECTION'));
      _this.getInput('ANGLE') && (disposeShadowBlock(_this.getInput('ANGLE')), _this.removeInput('ANGLE'));
      _this.getInput('EXPONENT') && (disposeShadowBlock(_this.getInput('EXPONENT')), _this.removeInput('EXPONENT'));
    }
    removeInput();
    updateShadow(this.getInput('NAME'), 'TEXT', option.toLowerCase());
    switch (option) {
      case 'PointLight':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setCheck('Vector3')
          .setAlign(ALIGN_RIGHT);
        this.setTooltip(Msg.POINT_LIGHT_TOOLTIP);
        this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.pointlight');
        updateShadow(_this.getInput('POSITION'), 'VECTOR3', [0, 10, -5]);
        break;
      case 'DirectionalLight':
        this.appendValueInput('DIRECTION')
          .appendField('direction')
          .setCheck('Vector3')
          .setAlign(ALIGN_RIGHT);
        this.setTooltip(Msg.DIRECTIONAL_LIGHT_TOOLTIP);
        this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.directionallight');
        updateShadow(_this.getInput('DIRECTION'), 'VECTOR3', [0, -1, 0]);
        break;
      case 'SpotLight':
        this.appendValueInput('POSITION')
          .appendField('position')
          .setCheck('Vector3')
          .setAlign(ALIGN_RIGHT);
        this.appendValueInput('DIRECTION')
          .appendField('direction')
          .setCheck('Vector3')
          .setAlign(ALIGN_RIGHT);
        this.appendValueInput('ANGLE')
          .appendField('angle')
          .setCheck('Number')
          .setAlign(ALIGN_RIGHT);
        this.appendValueInput('EXPONENT')
          .appendField('exponent')
          .setCheck('Number')
          .setAlign(ALIGN_RIGHT);
        this.setTooltip(Msg.SPOT_LIGHT_TOOLTIP);
        this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.spotlight');
        updateShadow(this.getInput('POSITION'), 'VECTOR3', [0, 10, -5]);
        updateShadow(_this.getInput('DIRECTION'), 'VECTOR3', [0, -1, 0]);
        updateShadow(this.getInput('ANGLE'), 'ANGLE', '45');
        updateShadow(this.getInput('EXPONENT'), 'NUM', '2');
        break;
      case 'HemisphericLight':
        this.appendValueInput('DIRECTION')
          .appendField('direction')
          .setCheck('Vector3')
          .setAlign(ALIGN_RIGHT);
        this.setTooltip(Msg.DIRECTIONAL_LIGHT_TOOLTIP);
        this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.directionallight');
        updateShadow(_this.getInput('DIRECTION'), 'VECTOR3', [0, -1, 0]);
        break;
    }
  }
}

Blocks['set_get_light_prop'] = {
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
    const light = this.appendValueInput('LIGHT')
      .appendField('light')
      .appendField(new FieldDropdown(() => MenuGenerator.lightType.generatMenu(), type => _this.updateKeyField(type)), 'TYPE')
      .setCheck('Light');
    this.appendDummyInput('KEY_INPUT');

    this.setStyle("lights_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets light property");
    this.setHelpUrl('');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.updateKeyField('PointLight');
    updateShadow(light, 'LIGHT', '')
    updateShadow(_this.getInput('VALUE'), 'COLOR3', [0, 0, 0])

  },

  updateKeyField(type) {
    const _this = this;
    const keyInput = _this.getInput('KEY_INPUT')
    keyInput.removeField('KEY', true)
    keyInput.appendField(new FieldDropdown(() => MenuGenerator[type].generatMenu(), key => {
      _this.getFieldValue('METHOD') === 'set' && MenuGenerator[type].updateShape(_this, _this.getInput('VALUE'), key)
      _this.getFieldValue('METHOD') === 'get' && MenuGenerator[type].updateTooltip(_this,  key)
    }), 'KEY');
  },
}

Blocks['create_shadow'] = {
  init() {
    this.appendDummyInput()
      .appendField('create shadow');
    const light = this.appendValueInput('LIGHT')
      .appendField('for')
      .setCheck('Light')
      .setAlign(ALIGN_RIGHT);
    const mapSize = this.appendValueInput('MAP_SIZE')
      .appendField('size')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("lights_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Shadow');
    this.setTooltip('Creates a ShadowGenerator object. A ShadowGenerator is the required tool to use the shadows. Each light casting shadows needs to use its own ShadowGenerator.');

    updateShadow(light, 'LIGHT', '')
    updateShadow(mapSize, 'NUM', '1024')
  }
}

Blocks['set_shadow_prop'] = {
  init: function () {
    const _this = this;
    this.appendValueInput('SHADOW')
      .appendField('set shadow')
      .setCheck('Shadow');
    this.appendDummyInput()
      .appendField(new FieldDropdown(() => MenuGenerator.shadow.generatMenu(), type => _this.typeHandle(type)), 'KEY')
      .appendField('to');
    this.appendValueInput('VALUE');
    this.setStyle("lights_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets the shadow property");
    this.setHelpUrl('');
    this.typeHandle('bias');
  },
  typeHandle(type) {
    const valueInput = this.getInput('VALUE');
    disposeShadowBlock(valueInput)
    MenuGenerator.shadow.updateShape(this, valueInput, type)
  }
}

Blocks['add_shadow_caster'] = {
  init() {
    this.appendValueInput('SHADOW')
      .appendField('in shadow')
      .setCheck('Shadow');
    const mesh = this.appendValueInput('MESH')
      .appendField('add shadow caster')
      .setCheck('Mesh')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("lights_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Adds a mesh and its descendants to the list of shadow casters.');
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.shadowgenerator#addshadowcaster');

    updateShadow(mesh, 'MESH', '')
  }
}

