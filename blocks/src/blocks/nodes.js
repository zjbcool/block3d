import {
  Blocks,
  FieldImage,
  FieldTextInput,
  FieldDropdown,
  ALIGN_RIGHT,
  FieldCheckbox
} from 'blockly';
import meshIcon from '../media/mesh.svg';
import cameraIcon from '../media/camera.svg';
import lightIcon from '../media/light.svg';

import { updateShadow } from '../util/util';
import { createStatementCheckMixin } from './mixins'


Blocks['mesh_selector'] = {
  init() {
    this.appendDummyInput()
      .appendField(new FieldImage(meshIcon, 18, 18))
      .appendField(new FieldTextInput('<mesh>'), 'NAME')
    this.setStyle("nodes_style");
    this.setInputsInline(false);
    this.setOutput(true, 'Mesh');
    this.setTooltip('Gets a node (Mesh, Camera, Light) using a given name');
    this.setHelpUrl('');
  }
}

Blocks['camera_selector'] = {
  init() {
    this.appendDummyInput()
      .appendField(new FieldImage(cameraIcon, 18, 18))
      .appendField(new FieldTextInput('<camera>'), 'NAME')
    this.setStyle("nodes_style");
    this.setInputsInline(false);
    this.setOutput(true, 'Camera');
    this.setTooltip('Gets a node (Mesh, Camera, Light) using a given name');
    this.setHelpUrl('');
  }
}

Blocks['light_selector'] = {
  init() {
    this.appendDummyInput()
      .appendField(new FieldImage(lightIcon, 18, 18))
      .appendField(new FieldTextInput('<light>'), 'NAME')
    this.setStyle("nodes_style");
    this.setInputsInline(false);
    this.setOutput(true, 'Light');
    this.setTooltip('Gets a node (Mesh, Camera, Light) using a given name');
    this.setHelpUrl('');
  }
}
Blocks['create_transform_node'] = {
  init() {
    this.appendDummyInput()
      .appendField('create transform node');
    const name = this.appendValueInput('NAME')
      .appendField('name')
      .setCheck('String');
    this.setStyle("nodes_style");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.');
    this.setHelpUrl('');
    updateShadow(name, 'TEXT', '')
  }
}

Blocks['node_get_all'] = {
  init() {
    this.appendDummyInput()
      .appendField('get all')
      .appendField(new FieldDropdown([
        ['meshes', 'meshes'],
        ['cameras', 'cameras'],
        ['lights', 'lights'],
      ]), "TYPE")
    this.setStyle("nodes_style");
    this.setInputsInline(false);
    this.setOutput(true, 'Array');
    this.setTooltip('All of the meshes/cameras/lights added to this scene');
    this.setHelpUrl('');
  }
}

Blocks['node_get_children'] = {
  init: function () {
    const node = this.appendValueInput('NODE')
      .appendField('get')
      .setCheck(['Mesh', 'Light', 'Camera']);
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['childMeshes', 'childMeshes'],
        ['directChildren', 'directChildren'],
        ['allChildren', 'allChildren'],
      ]), 'TYPE');
    this.setStyle("nodes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setTooltip('Get children of this node');
    this.setHelpUrl('');

    updateShadow(node, 'MESH', '')
  }
}

Blocks['node_parent'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    const node = this.appendValueInput('NODE')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        const isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && updateShadow(_this.getInput('VALUE'), 'NULL', '');
      }), 'METHOD')
      .setCheck(null);
    this.appendDummyInput()
      .appendField('parent');
    this.setStyle("nodes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Gets or sets the parent of the node (without keeping the current position in the scene)');
    this.setHelpUrl('');
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.getFieldValue('METHOD') === 'set' && updateShadow(_this.getInput('VALUE'), 'NULL', '');
    updateShadow(node, 'MESH', '')
  }
}

Blocks['node_is_child_of'] = {
  init: function () {
    const childNode = this.appendValueInput('CHILD_NODE')
      .appendField('is')
      .setCheck(['Mesh', 'Light', 'Camera']);
    const parentNode = this.appendValueInput('PARENT_NODE')
      .appendField('child of')
      .setCheck(['Mesh', 'Light', 'Camera']);
    this.setStyle("nodes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('Is this node a descendant of the given node? The function will iterate up the hierarchy until the ancestor was found or no more parents defined');
    this.setHelpUrl('');
    updateShadow(childNode, 'MESH', '')
    updateShadow(parentNode, 'MESH', '')
  }
}

Blocks['node_set_enabled'] = {
  init: function () {
    const node = this.appendValueInput('NODE')
      .appendField('set')
      .setCheck(['Mesh', 'Light', 'Camera']);
    const enabled = this.appendValueInput('ENABLED')
      .appendField('enabled')
      .setCheck('Boolean')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("nodes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set the enabled state of this node');
    this.setHelpUrl('');
    updateShadow(node, 'MESH', '')
    updateShadow(enabled, 'BOOL', 'TRUE')
  }
}