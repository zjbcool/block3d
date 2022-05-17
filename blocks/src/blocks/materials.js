import {
  Blocks,
  FieldDropdown,
  FieldNumber,
  Msg,
  ALIGN_RIGHT
} from 'blockly';
import { updateShadow } from '../util/util'
import { createStatementCheckMixin } from './mixins';
import MenuGenerator from './materials_menu_generator';

Msg.MAT_GET_TEX_TITLE = 'get texture';
Msg.MAT_GET_TEX_TOOLTIP = '';
Msg.MAT_GET_TEX_HELP_URL = '';

Blocks['create_material'] = {
  init() {
    this.appendDummyInput()
      .appendField('create')
      .appendField(new FieldDropdown(() => MenuGenerator.materialType.generatMenu()), 'TYPE');
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .appendField('name');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Material');
    this.setTooltip('');
    this.setHelpUrl('');
    updateShadow(name, 'TEXT', '')
  }
}

Blocks['create_node_material_from_json'] = {
  init() {
    this.appendDummyInput()
      .appendField('create NodeMaterial');
    this.appendValueInput('JSON')
      .setCheck('Object')
      .appendField('from JSON');
    const root = this.appendValueInput('ROOT')
      .setCheck(null)
      .appendField('rootUrl');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Material');
    this.setTooltip('');
    this.setHelpUrl('');
    updateShadow(root, 'TEXT', './assets/json')
  }
}

Blocks['set_get_material_prop'] = {
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
      }), 'METHOD')
    this.appendValueInput('MATERIAL')
      .appendField('material')
      .appendField(new FieldDropdown(() => MenuGenerator.materialType.generatMenu(), type => _this.updateKeyField(type)), 'TYPE')
      .setCheck('Material');
    this.appendDummyInput('KEY_INPUT');

    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sets or gets material's properties");
    this.setHelpUrl('');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.updateKeyField('StandardMaterial');
    updateShadow(_this.getInput('VALUE'), 'NUM', '1')
  },
  updateKeyField(type) {
    const _this = this;
    const keyInput = _this.getInput('KEY_INPUT')
    keyInput.removeField('KEY', true)
    keyInput.appendField(new FieldDropdown(() => MenuGenerator[type].generatMenu(), key => {
      _this.getFieldValue('METHOD') === 'set' && MenuGenerator[type].updateShape(_this, _this.getInput('VALUE'), key)
      _this.getFieldValue('METHOD') === 'get' && MenuGenerator[type].updateTooltip(_this, key)
    }), 'KEY');
  }
}

Blocks['get_material_by_mesh'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .setCheck('Mesh')
      .appendField('get material');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Material');
    this.setTooltip('');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
  }
}

Blocks['remove_material'] = {
  init() {
    this.appendValueInput('MATERIAL')
      .appendField('remove material')
      .setCheck('Material');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('');
  }
}

// 贴图
Blocks['create_texture'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('create')
      .appendField(new FieldDropdown(() => MenuGenerator.textureType.generatMenu()), 'TYPE');
    const url = this.appendValueInput('URL')
      .setCheck('String')
      .appendField('url');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Texture');
    this.setTooltip('Create a new texture');
    this.setHelpUrl('');
    updateShadow(url, 'TEXT', './assets/texture/grass.jpg')
  }
}

Blocks['set_get_texture_prop'] = {
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
      }), 'METHOD')
    this.appendValueInput('TEXTURE')
      .appendField(new FieldDropdown(() => MenuGenerator.textureType.generatMenu(), type => _this.updateKeyField(type)), 'TYPE')
      .setCheck('Texture');
    this.appendDummyInput('KEY_INPUT');

    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.updateKeyField('Texture');
    updateShadow(_this.getInput('VALUE'), 'NUM', '4')
  },
  updateKeyField(type) {
    const _this = this;
    const keyInput = _this.getInput('KEY_INPUT')
    keyInput.removeField('KEY', true)
    keyInput.appendField(new FieldDropdown(() => MenuGenerator[type].generatMenu(), key => {
      _this.getFieldValue('METHOD') === 'set' && MenuGenerator[type].updateShape(_this, _this.getInput('VALUE'), key)
      _this.getFieldValue('METHOD') === 'get' && MenuGenerator[type].updateTooltip(_this, key)
    }), 'KEY');
  }
}

Blocks['remove_texture'] = {
  init() {
    this.appendValueInput('TEXTURE')
      .appendField('remove texture')
      .setCheck('Material');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('');
  }
}

// 颜色
Blocks['material_color3'] = {
  init: function () {
    const r = this.appendValueInput('R')
      .setCheck('Number')
      .appendField('R');
    const g = this.appendValueInput('G')
      .setCheck('Number')
      .appendField('G');
    const b = this.appendValueInput('B')
      .setCheck('Number')
      .appendField('B');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color3');
    this.setTooltip(Msg.MAT_GET_TEX_TOOLTIP);
    this.setHelpUrl(Msg.MAT_GET_TEX_HELP_URL);
    updateShadow(r, 'NUM', '255')
    updateShadow(g, 'NUM', '255')
    updateShadow(b, 'NUM', '255')
  }
}

Blocks['material_color4'] = {
  init: function () {
    const r = this.appendValueInput('R')
      .setCheck('Number')
      .appendField('R');
    const g = this.appendValueInput('G')
      .setCheck('Number')
      .appendField('G');
    const b = this.appendValueInput('B')
      .setCheck('Number')
      .appendField('B');
    const a = this.appendValueInput('A')
      .setCheck('Number')
      .appendField('A');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color4');
    this.setTooltip('Used to hold a RBGA color');
    this.setHelpUrl();
    updateShadow(r, 'NUM', '255')
    updateShadow(g, 'NUM', '255')
    updateShadow(b, 'NUM', '255')
    updateShadow(a, 'NUM', '255')
  }
}

Blocks['field_color3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('R')
      .appendField(new FieldNumber('255'), 'R')
      .appendField('G')
      .appendField(new FieldNumber('255'), 'G')
      .appendField('B')
      .appendField(new FieldNumber('255'), 'B');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color3');
    this.setTooltip('Used to hold a RGB color');
    this.setHelpUrl();
  }
}

Blocks['field_color4'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('R')
      .appendField(new FieldNumber('255'), 'R')
      .appendField('G')
      .appendField(new FieldNumber('255'), 'G')
      .appendField('B')
      .appendField(new FieldNumber('255'), 'B')
      .appendField('A')
      .appendField(new FieldNumber('255'), 'A');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color4');
    this.setTooltip('Used to hold a RBGA color');
    this.setHelpUrl();
  }
}

Blocks['material_color3_from_hex'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Color3');
    const hex = this.appendValueInput('HEX')
      .setCheck('String')
      .appendField('from hex');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color3');
    this.setTooltip(Msg.MAT_GET_TEX_TOOLTIP);
    this.setHelpUrl(Msg.MAT_GET_TEX_HELP_URL);
    updateShadow(hex, 'TEXT', '#ff0000')
  }
}

Blocks['material_color4_from_hex'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Color4');
    const hex = this.appendValueInput('HEX')
      .setCheck('String')
      .appendField('from hex');
    this.setStyle("material_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Color4');
    this.setTooltip(Msg.MAT_GET_TEX_TOOLTIP);
    this.setHelpUrl(Msg.MAT_GET_TEX_HELP_URL);
    updateShadow(hex, 'TEXT', '#ffffffff')
  }
}

