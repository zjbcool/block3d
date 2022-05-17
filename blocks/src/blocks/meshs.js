import {
  Blocks,
  FieldDropdown,
  Mutator,
  ALIGN_RIGHT,
  FieldCheckbox
} from 'blockly';
import { advancedOptionsMixin, updateShadow, disposeShadowBlock } from '../util/util.js';
import './dummyBlock';
import {
  createSurroundCheckMixin,
  createStatementCheckMixin,
  CUSTOM_CONTEXT_MENU_MESH_CREATE_SET_SHAPES_OPTION_MIXIN,
  createContextMenuBlockMixin
} from './mixins';
import MenuGenerator from './mesh_menu_generator';

/**
 * 用于mesh_create_set_shapes 拼图右键菜单Create 'option'
 * 不出现在toolbox中
 */
function createSetShapesOption() {
  const typeList = MenuGenerator.meshType.getList(); // ['Box', 'TiledBox', 'Sphere', 'Cylinder', 'Capsule', 'Plane', 'TiledPlane', 'Disc', 'Torus', 'TorusKnot', 'Ground', 'GroundFromHeightMap', 'TiledGround']
  for (let type of typeList) {
    (() => {
      Blocks[`mesh_create_${type.toLowerCase()}_option`] = {
        init() {
          const _this = this;
          const value = this.appendValueInput('VALUE')
            .appendField('set')
            .appendField(new FieldDropdown(() => MenuGenerator[type].generatMenu(), option => MenuGenerator[type].updateShape(_this, value, option)), 'KEY')
            .appendField('to');
          this.setStyle('meshes_style');
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setHelpUrl('https://doc.babylonjs.com/divingDeeper/mesh/creation/set/box');
          this.mixin(createSurroundCheckMixin('object_create'));
          updateShadow(value, 'NUM', '1');
        }
      }
    })(type)
  }
}
createSetShapesOption();
Blocks['mesh_create_set_shapes'] = {
  init: function () {
    const _this = this;
    this.appendDummyInput()
      .appendField('create')
      .appendField(new FieldDropdown(() => MenuGenerator.meshType.generatMenu()), 'TYPE');
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .appendField('name');
    const options = this.appendValueInput('OPTIONS')
      .setCheck('Object')
      .appendField('options');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Mesh');
    this.setTooltip('');
    this.setHelpUrl('');
    this.mixin(CUSTOM_CONTEXT_MENU_MESH_CREATE_SET_SHAPES_OPTION_MIXIN);
    updateShadow(name, 'TEXT', '');
    updateShadow(options, 'OBJECT', '');
  }
}

Blocks['set_get_mesh_prop'] = {
  init() {
    const _this = this;
    let isSet;
    const statementCheckMixin = createStatementCheckMixin();
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        _this.updateKeyField(isSet)
      }), 'METHOD')
    const mesh = this.appendValueInput('MESH')
      .appendField('mesh')
      .setCheck('Mesh');
    this.appendDummyInput('KEY_INPUT')
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('');
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.mixin(statementCheckMixin);
    this.updateKeyField(true);
    updateShadow(_this.getInput('VALUE'), 'NUM', '');
    updateShadow(mesh, 'MESH', '');
  },
  updateKeyField(isSet) {
    const _this = this;
    const keyInput = _this.getInput('KEY_INPUT')
    keyInput.removeField('KEY', true)
    keyInput.appendField(new FieldDropdown(() => MenuGenerator.meshProps.generatMenu(), key => {
      isSet && MenuGenerator.meshProps.updateShape(_this, _this.getInput('VALUE'), key)
      !isSet && MenuGenerator.meshProps.updateTooltip(_this, key)
    }), 'KEY');
  }
}

Blocks['set_get_mesh_transform'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    let isSet;
    const mesh = this.appendValueInput('MESH')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
        isSet && _this.getFieldValue('XYZ') === 'xyz' && updateShadow(_this.getInput('VALUE'), 'VECTOR3', [0, 0, 0]);
        isSet && _this.getFieldValue('XYZ') !== 'xyz' && updateShadow(_this.getInput('VALUE'), 'NUM', '');
      }), 'METHOD')
      .appendField('mesh')
      .setCheck('Mesh');
    this.appendDummyInput()
      .appendField(new FieldDropdown(() => MenuGenerator.transformProps.generatMenu()), 'TRANSFORM');
    this.appendDummyInput('XYZ_INPUT')
      .appendField(new FieldDropdown([
        ['xyz', 'xyz'],
        ['x', 'x'],
        ['y', 'y'],
        ['z', 'z'],
      ], xyz => {
        const valueInput = _this.getInput('VALUE');
        xyz === 'xyz' && updateShadow(valueInput, 'VECTOR3', [0, 0, 0]) || updateShadow(valueInput, 'NUM', '');
      }), 'XYZ');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets or gets the mesh transform.');
    this.setHelpUrl('');
    statementCheckMixin.updateValueInput_.call(_this, true);
    this.mixin(statementCheckMixin);
    updateShadow(_this.getInput('VALUE'), 'VECTOR3', [0, 0, 0]);
    updateShadow(mesh, 'MESH', '')
  }
}

Blocks['translate_mesh'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('translate mesh')
      .setCheck('Mesh');
    const axis = this.appendValueInput('AXIS')
      .appendField('axis')
      .setCheck('Vector3')
      .setAlign(ALIGN_RIGHT);
    const distance = this.appendValueInput('DISTANCE')
      .appendField('distance')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.appendDummyInput()
      .appendField('local')
      .appendField(new FieldCheckbox('TRUE'), 'LOCAL')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Translates the mesh along the axis vector for the passed distance in the given space.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(axis, 'VECTOR3', [0, 1, 0])
    updateShadow(distance, 'NUM', '')
  }
}

Blocks['rotate_mesh'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('rotate mesh')
      .setCheck('Mesh');
    const axis = this.appendValueInput('AXIS')
      .appendField('axis')
      .setCheck('Vector3')
      .setAlign(ALIGN_RIGHT);
    const degree = this.appendValueInput('DEGREE')
      .appendField('degree')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.appendDummyInput()
      .appendField('local')
      .appendField(new FieldCheckbox('TRUE'), 'LOCAL')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(axis, 'VECTOR3', [0, 1, 0])
    updateShadow(degree, 'ANGLE', '')
  }
}

Blocks['rotate_mesh_pov'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('rotate mesh POV')
      .setCheck('Mesh');
    const pitch = this.appendValueInput('PITCH')
      .appendField('pitch')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const yaw = this.appendValueInput('YAW')
      .appendField('yaw')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    const roll = this.appendValueInput('ROLL')
      .appendField('roll')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Perform relative rotation change from the point of view of behind the front of the mesh.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(pitch, 'ANGLE', '')
    updateShadow(yaw, 'ANGLE', '')
    updateShadow(roll, 'ANGLE', '')
  }
}

Blocks['set_mesh_direction'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('set mesh')
      .setCheck('Mesh');
    const direction = this.appendValueInput('DIRECTION')
      .appendField('direction to')
      .setCheck('Vector3');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets this transform node rotation to the given local axis.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(direction, 'VECTOR3', [0, 1, 0])
  }
}

Blocks['mesh_look_at'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('mesh')
      .setCheck('Mesh');
    const point = this.appendValueInput('POINT')
      .appendField('look at')
      .setCheck('Vector3');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Orients a mesh towards a target point. ');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(point, 'VECTOR3', [0, 0, 0])
  }
}

Blocks['remove_mesh'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('remove mesh')
      .setCheck('Mesh');
    this.appendDummyInput()
      .appendField('includeChildren')
      .appendField(new FieldCheckbox('FALSE'), 'INCLUDE_CHILDREN');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns a new Mesh object generated from the current mesh properties.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
  }
}

Blocks['clone_mesh'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('clone mesh')
      .setCheck('Mesh');
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .appendField('name');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Mesh');
    this.setTooltip('Returns a new Mesh object generated from the current mesh properties.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(name, 'TEXT', '')
  }
}

Blocks['mesh_set_parent'] = {
  init: function () {
    const childMesh = this.appendValueInput('CHILD_MESH')
      .appendField('parent mesh')
      .setCheck('Mesh');
    const parentMesh = this.appendValueInput('PARENT_MESH')
      .appendField('to')
      .setCheck('Mesh');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Defines the passed node as the parent of the current node.');
    this.setHelpUrl('');
    updateShadow(childMesh, 'MESH', '')
    updateShadow(parentMesh, 'MESH', '')
  }
}

Blocks['mesh_create_instance'] = {
  init: function () {
    const mesh = this.appendValueInput('MESH')
      .appendField('create instance from')
      .setCheck('Mesh');
    const name = this.appendValueInput('NAME')
      .setCheck('String')
      .appendField('name');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Mesh');
    this.setTooltip('Creates a new InstancedMesh object from the mesh model.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(name, 'TEXT', '')
  }
}

Blocks['mesh_when_dragged_options'] = {
  init() {
    const _this = this;
    this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.draggedOpts.generatMenu(), option => MenuGenerator.draggedOpts.updateShape(_this, _this.getInput('VALUE'), option)), 'KEY')
      .appendField('to');
    this.setStyle('meshes_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('https://doc.babylonjs.com/typedoc/classes/babylon.pointerdragbehavior');
    this.mixin(createSurroundCheckMixin('object_create'));
  }
}

Blocks['drag_mesh'] = {
  init() {
    const _this = this;
    const mesh = this.appendValueInput('MESH')
      .appendField('drag')
      .setCheck('Mesh')
      .setAlign(ALIGN_RIGHT);
    const options = this.appendValueInput('OPTIONS')
      .appendField('options')
      .setCheck('Object')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('');
    this.setMutator(new Mutator(["invisibleBlock"]));

    this.mixin(createContextMenuBlockMixin('mesh_when_dragged_options', 'option'));
    this.mixin(advancedOptionsMixin([
      ["enableCb", "enable callbacks", !1],
    ],
      "meshes_style",
      () => _this.updateShape_()
    ));

    updateShadow(mesh, 'MESH', '')
    updateShadow(options, 'OBJECT', '')
  },
  updateShape_() {
    this.getInput("DRAG_START_DO") && this.removeInput("DRAG_START_DO");
    this.getInput("DRAG_DO") && this.removeInput("DRAG_DO");
    this.getInput("DRAG_END_DO") && this.removeInput("DRAG_END_DO");
    if (this._boolOptValues.enableCb) {
      this.appendStatementInput('DRAG_START_DO')
        .appendField('drag start')
        .setAlign(ALIGN_RIGHT);
      this.appendStatementInput('DRAG_DO')
        .appendField('drag')
        .setAlign(ALIGN_RIGHT);
      this.appendStatementInput('DRAG_END_DO')
        .appendField('drag end')
        .setAlign(ALIGN_RIGHT);
    }
  }
}

Blocks['check_point_behind_mesh'] = {
  init: function () {
    const point = this.appendValueInput('POINT')
      .appendField('check point')
      .setCheck('Vector3');
    const mesh = this.appendValueInput('MESH')
      .setCheck('Mesh')
      .appendField('behind');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('Checks if a pointer is behind of a mesh.');
    this.setHelpUrl('');
    updateShadow(point, 'VECTOR3', [0, 0, 0])
    updateShadow(mesh, 'MESH', '')
  }
}

Blocks['check_intersects_mesh'] = {
  init() {
    const mesh = this.appendValueInput('MESH')
      .appendField('check')
      .setCheck('Mesh');
    const targetMesh = this.appendValueInput('TARGET')
      .appendField('intersects mesh')
      .setCheck('Mesh');
    this.appendDummyInput()
      .appendField('precise')
      .appendField(new FieldCheckbox('FALSE'), 'PRECISE');
    this.appendDummyInput()
      .appendField('includeChildren')
      .appendField(new FieldCheckbox('FALSE'), 'INCLUDE_CHILDREN');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('True if the mesh intersects another mesh or a SolidParticle object');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(targetMesh, 'MESH', '')
  }
}

Blocks['check_intersects_point'] = {
  init() {
    const mesh = this.appendValueInput('MESH')
      .appendField('check')
      .setCheck('Mesh');
    const point = this.appendValueInput('POINT')
      .appendField('intersects point')
      .setCheck('Vector3');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('True if the mesh intersects another mesh or a SolidParticle object');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(point, 'VECTOR3', [0, 0, 0])
  }
}

Blocks['mesh_create_decal'] = {
  init() {
    this.appendDummyInput()
      .appendField('create decal');
    const name = this.appendValueInput('NAME')
      .appendField('name')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT);
    const mesh = this.appendValueInput('MESH')
      .appendField('sourceMesh')
      .setCheck('Mesh')
      .setAlign(ALIGN_RIGHT);
    const texture = this.appendValueInput('TEXTURE')
      .appendField('textureUrl')
      .setCheck('String')
      .setAlign(ALIGN_RIGHT);
    const options = this.appendValueInput('OPTIONS')
      .appendField('options')
      .setCheck('Object')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Mesh');
    this.setTooltip('Creates a decal mesh. A decal is a mesh usually applied as a model onto the surface of another mesh');
    this.setHelpUrl('');
    this.mixin(createContextMenuBlockMixin('mesh_create_decal_option', 'option', [['VALUE', 'VECTOR3', [0, 0, 0]]]));
    updateShadow(name, 'TEXT', '');
    updateShadow(mesh, 'MESH', '');
    updateShadow(texture, 'TEXT', '');
    updateShadow(options, 'OBJECT', '');
  }
}

Blocks['mesh_create_decal_option'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.decalOption.generatMenu(), option => MenuGenerator.decalOption.updateShape(_this, value, option)), 'KEY');
    const value = this.appendValueInput('VALUE')
      .appendField('to');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('mesh_create_decal'));
    updateShadow(value, 'VECTOR3', [0, 0, 0])
  }
}

Blocks['mesh_add_lod_level'] = {
  init() {
    const lodLevel = this.appendValueInput('LOD_MESH')
      .appendField('add LOD level')
      .setCheck(['Mesh', null]);
    const distance = this.appendValueInput('DISTANCE')
      .appendField('distance')
      .setCheck('Number');
    const mesh = this.appendValueInput('MESH')
      .appendField('to')
      .setCheck('Mesh');
    this.setStyle("meshes_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Add a mesh as LOD level triggered at the given distance.');
    this.setHelpUrl('');
    updateShadow(mesh, 'MESH', '')
    updateShadow(distance, 'NUM', '10')
    updateShadow(lodLevel, 'MESH', '')
  }
}

// Blocks['create_highlight_layer'] = {
//   init() {
//     const name = this.appendValueInput('NAME')
//       .appendField('create highlight layer')
//       .setCheck('String');
//     this.setStyle("meshes_style");
//     this.setInputsInline(true);
//     this.setOutput(true, 'HighlightLayer');
//     this.setTooltip('The highlight layer Helps adding a glow effect around a mesh.');
//     this.setHelpUrl('');
//     updateShadow(name, 'TEXT', '')
//   }
// }

// Blocks['set_highlight_layer_prop'] = {
//   init() {
//     const _this = this;
//     this.appendValueInput('LAYER')
//       .appendField('set highlight layer')
//       .setCheck('HighlightLayer');
//     this.appendDummyInput()
//       .appendField(new FieldDropdown(() => MenuGenerator.highlightLayerProp.generatMenu(), option => MenuGenerator.highlightLayerProp.updateShape(_this, value, option)), 'KEY');
//     const value = this.appendValueInput('VALUE')
//       .appendField('to');
//     this.setStyle("meshes_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip('');
//     this.setHelpUrl('');
//     updateShadow(value, 'BOOL', 'TRUE')
//   }
// }

// Blocks['add_mesh_to_highlight_layer'] = {
//   init() {
//     const mesh = this.appendValueInput('MESH')
//       .appendField('add')
//       .setCheck('Mesh');
//     this.appendValueInput('LAYER')
//       .appendField('to highlight layer')
//       .setCheck('HighlightLayer');
//     const color = this.appendValueInput('COLOR')
//       .appendField('color')
//       .setCheck('Color3');
//     this.setStyle("meshes_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip('Add a mesh in the highlight layer in order to make it glow with the chosen color.');
//     this.setHelpUrl('');
//     updateShadow(mesh, 'MESH', '')
//     updateShadow(color, 'COLOR3', [1, 1, 1])
//   }
// }
// Blocks['exclude_mesh_from_highlight_layer'] = {
//   init() {
//     const mesh = this.appendValueInput('MESH')
//       .appendField('exclude')
//       .setCheck('Mesh');
//     this.appendValueInput('LAYER')
//       .appendField('from highlight layer')
//       .setCheck('HighlightLayer');
//     this.setStyle("meshes_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip('Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.');
//     this.setHelpUrl('');
//     updateShadow(mesh, 'MESH', '')
//   }
// }

// Blocks['remove_mesh_from_highlight_layer'] = {
//   init() {
//     const mesh = this.appendValueInput('MESH')
//       .appendField('remove')
//       .setCheck('Mesh');
//     this.appendValueInput('LAYER')
//       .appendField('from highlight layer')
//       .setCheck('HighlightLayer');
//     this.setStyle("meshes_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip('Remove a mesh from the highlight layer in order to make it stop glowing.');
//     this.setHelpUrl('');
//     updateShadow(mesh, 'MESH', '')
//   }
// }