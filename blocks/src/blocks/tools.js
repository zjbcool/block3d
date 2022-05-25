import {
  Blocks,
  FieldDropdown,
  FieldCheckbox,
  FieldVariable,
  ALIGN_RIGHT
} from 'blockly';
import MenuGenerator from './tools_menu_generator';

import {
  createStatementCheckMixin,
} from './mixins';
import { updateShadow } from '../util/util';

Blocks['display_axes'] = {
  init() {
    this.appendDummyInput()
      .appendField('display axes');
    const size = this.appendValueInput('SIZE')
      .appendField('size')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.appendValueInput('PARENT')
      .appendField('parent')
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
    this.setStyle('tools_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('It is often useful to be able to quickly display world and local axes to see position and rotation for example. ');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tools.html#display-axis');
    updateShadow(size, 'NUM', '1')
  }
}

// Blocks['display_vertex_normal'] = {
//   init() {
//     this.appendDummyInput()
//       .appendField('display vertex normal');
//     const mesh = this.appendValueInput('MESH')
//       .appendField('mesh')
//       .setCheck('Mesh')
//       .setAlign(ALIGN_RIGHT);
//     const size = this.appendValueInput('SIZE')
//       .appendField('size')
//       .setCheck('Number')
//       .setAlign(ALIGN_RIGHT);
//     const color = this.appendValueInput('COLOR')
//       .appendField('color')
//       .setCheck('Color3')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle('tools_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Displays the normals for each vertex of a mesh.');
//     this.setHelpUrl('');

//     updateShadow(mesh, 'MESH', '')
//     updateShadow(size, 'NUM', '1')
//     updateShadow(color, 'COLOR3', [0, 1, 0])
//   }
// }
// Blocks['display_face_normal'] = {
//   init() {
//     this.appendDummyInput()
//       .appendField('display face normal');
//     const mesh = this.appendValueInput('MESH')
//       .appendField('mesh')
//       .setCheck('Mesh')
//       .setAlign(ALIGN_RIGHT);
//     const size = this.appendValueInput('SIZE')
//       .appendField('size')
//       .setCheck('Number')
//       .setAlign(ALIGN_RIGHT);
//     const color = this.appendValueInput('COLOR')
//       .appendField('color')
//       .setCheck('Color3')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle('tools_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Displays the normals for each faces of a mesh.');
//     this.setHelpUrl('');

//     updateShadow(mesh, 'MESH', '')
//     updateShadow(size, 'NUM', '1')
//     updateShadow(color, 'COLOR3', [0, 1, 0])
//   }
// }

// Blocks['create_gizmo'] = {
//   init() {

//     this.appendDummyInput()
//       .appendField('create gizmo');
//     const thickness = this.appendValueInput('THICKNESS')
//       .appendField('thickness')
//       .setCheck('Number');
//     this.setStyle("tools_style");
//     this.setInputsInline(true);
//     this.setOutput(true, 'GizmoManager');
//     this.setTooltip("Setups gizmo's in the scene to rotate/scale/position nodes");
//     this.setHelpUrl('')
//     updateShadow(thickness, 'NUM', '1')
//   }
// }

// Blocks['gizmo_properties'] = {
//   init() {
//     const _this = this;
//     const statementCheckMixin = createStatementCheckMixin();

//     this.appendValueInput('GIZMO')
//       .appendField(new FieldDropdown([
//         ['set', 'set'],
//         ['get', 'get'],
//       ], method => {
//         const isSet = method === 'set';
//         statementCheckMixin.updateShape_.call(_this, isSet);
//         statementCheckMixin.updateValueInput_.call(_this, isSet);
//         isSet && MenuGenerator.gizmoProps.updateShape(_this, _this.getInput('VALUE'), _this.getFieldValue('PROP'));
//       }), 'METHOD')
//       .appendField('gizmo')
//       .setCheck('GizmoManager');
//     this.appendDummyInput()
//       .appendField(new FieldDropdown(() => MenuGenerator.gizmoProps.generatMenu(), option => {
//         _this.getFieldValue('METHOD') === 'set' && MenuGenerator.gizmoProps.updateShape(_this, _this.getInput('VALUE'), option)
//       }), 'PROP');
//     this.setStyle("tools_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setHelpUrl('');
//     this.mixin(statementCheckMixin);
//     statementCheckMixin.updateValueInput_.call(_this, true);
//     this.getFieldValue('METHOD') === 'set' && MenuGenerator.gizmoProps.updateShape(_this, _this.getInput('VALUE'), _this.getFieldValue('PROP'));
//   }
// }

Blocks['feature_available'] = {
  init() {
    this.appendDummyInput()
      .appendField('feature available')
      .appendField(new FieldDropdown(() => MenuGenerator.features.generatMenu()), 'FEATURE');
    this.setStyle("tools_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('Check if a feature is available in the user\'s browser.');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tools.html#feature-available');
  }
}