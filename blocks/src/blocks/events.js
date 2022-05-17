import {
  Blocks,
  FieldDropdown,
  FieldCheckbox,
  ALIGN_RIGHT,
} from 'blockly';
import { updateShadow } from '../util/util';
import {
  createBlockWithContextMenuMixin,
  createSurroundCheckMixin
} from './mixins';
import MenuGenerator from './events_menu_generator';

Blocks['pointer_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('on event of')
      .appendField(new FieldDropdown(() => MenuGenerator.PointerEvent.generatMenu()), "EVENT_TYPE");
    this.appendDummyInput()
      .setAlign(ALIGN_RIGHT)
      .appendField("ignorBackface")
      .appendField(new FieldCheckbox('TRUE'), 'IGNOR_BACKFACE');
    this.appendStatementInput("HIT_CB")
      .setCheck(null)
      .appendField("do")
      .setAlign(ALIGN_RIGHT);
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.mixin(createBlockWithContextMenuMixin('picking_info', 'picked'));
  }
}

Blocks['picking_info'] = {
  init() {
    this.appendDummyInput("DUMMY")
      .appendField("picked")
      .appendField(new FieldDropdown([
        ["mesh", "MESH"],
        ["point", "POINT"],
        ["normal", "NORMAL"],
      ], option => this.updateShape_(option)), "OPTION");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("events_style");
    this.setTooltip("Returns the information(mesh/point/normal) where the user has clicked.");
    this.setHelpUrl("https://zjbcool.com/v3d-plugins/teleport/teleport.html#picked-object2");
  },

  updateShape_(option) {
    var dummy = this.getInput('DUMMY');
    var point_option = this.getFieldValue('POINT_OPTION');
    var normal_option = this.getFieldValue('NORMAL_OPTION');
    switch (option) {
      case 'MESH':
        if (point_option) {
          dummy.removeField("POINT_OPTION");
        }
        if (normal_option) {
          dummy.removeField("NORMAL_OPTION");
        }
        break;
      case 'POINT':
        if (!point_option) {
          dummy.appendField(new FieldDropdown([
            ["x", "X"],
            ["y", "Y"],
            ["z", "Z"],
            ["xyz", "XYZ"]
          ]), "POINT_OPTION");
        }
        if (normal_option) {
          dummy.removeField("NORMAL_OPTION");
        }
        break;
      case 'NORMAL':
        if (point_option) {
          dummy.removeField("POINT_OPTION");
        }
        if (!normal_option) {
          dummy.appendField(new FieldDropdown([
            ["x", "X"],
            ["y", "Y"],
            ["z", "Z"],
            ["xyz", "XYZ"]
          ]), "NORMAL_OPTION");
        }
        break;
    }
  }

}

Blocks['keyboard_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('on event of')
      .appendField(new FieldDropdown([
        ['keydown', 'KEYDOWN'],
        ['keyup', 'KEYUP'],
      ]), 'TYPE')
      .appendField('repeat')
      .appendField(new FieldCheckbox('TRUE'), 'REPEAT');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("do");
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The keyboard event");
    this.setHelpUrl("");
    this.mixin(createBlockWithContextMenuMixin('get_key_input', 'key input'));
  }
}

Blocks['get_key_input'] = {
  init() {
    this.appendDummyInput()
      .appendField('get')
      .appendField(new FieldDropdown([
        ['key', 'key'],
        ['keyCode', 'keyCode'],
      ]), 'KEY_INPUT');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("events_style");
    this.setTooltip("Returns the key/keyCode the user has pressed.");
    this.setHelpUrl("");
  }
}

Blocks['event_create_action'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField("create action")
      .appendField(new FieldDropdown(() => MenuGenerator.Actions.generatMenu(), action => _this.updateShape(action)), 'ACTION');
    this.appendDummyInput("EVENT")
      .appendField("event")
      .appendField(new FieldDropdown(() => MenuGenerator.Triggers.generatMenu(), param => _this.updateParam(param)), 'TRIGGER')
      .setAlign(ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("events_style");
    this.setTooltip("Actions are a simple way to add interactions in your scenes. An action is launched when its trigger is fired. ");
    this.setHelpUrl("");

  },
  updateParam(param) {
    this.getInput('INTERSECTS_MESH') && this.removeInput('INTERSECTS_MESH');
    this.getInput('PRECISE_INPUT') && this.removeInput('PRECISE_INPUT');
    switch (param) {
      case 'BABYLON.ActionManager.OnIntersectionEnterTrigger':
      case 'BABYLON.ActionManager.OnIntersectionExitTrigger':
        const intersectsMesh = this.appendValueInput('INTERSECTS_MESH')
          .appendField('intersectsMesh')
          .setCheck('Mesh')
          .setAlign(ALIGN_RIGHT);
        this.appendDummyInput('PRECISE_INPUT')
          .appendField('precise')
          .appendField(new FieldCheckbox('TRUE'), 'PRECISE')
          .setAlign(ALIGN_RIGHT);
        updateShadow(intersectsMesh, 'MESH', '')

        this.getInput('OBJECT') && (this.moveInputBefore('PRECISE_INPUT', 'OBJECT'), this.moveInputBefore('INTERSECTS_MESH', 'PRECISE_INPUT'))
        this.getInput('CHILDREN') && (this.moveInputBefore('PRECISE_INPUT', 'CHILDREN'), this.moveInputBefore('INTERSECTS_MESH', 'PRECISE_INPUT'))
        break;
    }
  },
  updateShape(action) {
    this.removeDynamicInput();
    switch (action) {
      case 'SwitchBooleanAction':
        this.appendObjectKey();
        break;
      case 'SetValueAction':
      case 'IncrementValueAction':
        this.appendObjectKey();
        this.appendValue();
        break;
      case 'InterpolateValueAction':
        this.appendObjectKey();
        this.appendValue();
        this.appendDuration();
        break;
      case 'ExecuteCodeAction':
        this.appendValueInput('FUNC').appendField('func').setCheck(null).setAlign(ALIGN_RIGHT);
        break;
      case 'CombineAction':
        this.appendCombineActions();
        break;
    }
  },
  appendObjectKey() {
    const obj = this.appendValueInput('OBJECT').appendField('object').setCheck(null).setAlign(ALIGN_RIGHT);
    const key = this.appendValueInput('KEY').appendField('key').setCheck(null).setAlign(ALIGN_RIGHT);
    updateShadow(obj, 'OBJECT', '');
    updateShadow(key, 'TEXT', '');
  },
  appendValue() {
    const value = this.appendValueInput('VALUE').appendField('value').setCheck(null).setAlign(ALIGN_RIGHT);
    updateShadow(value, 'TEXT', '');
  },
  appendDuration() {
    const duration = this.appendValueInput('DURATION').appendField('duration').setCheck(null).setAlign(ALIGN_RIGHT);
    updateShadow(duration, 'NUM', '1');
  },
  appendCombineActions() {
    const children = this.appendValueInput('CHILDREN').appendField('actions').setCheck('Array').setAlign(ALIGN_RIGHT);
    updateShadow(children, 'ARRAY', '');
  },
  removeDynamicInput() {
    this.getInput('OBJECT') && this.removeInput('OBJECT')
    this.getInput('KEY') && this.removeInput('KEY')
    this.getInput('VALUE') && this.removeInput('VALUE')
    this.getInput('DURATION') && this.removeInput('DURATION')
    this.getInput('FUNC') && this.removeInput('FUNC')
    this.getInput('CHILDREN') && this.removeInput('CHILDREN')
  }
}


Blocks['event_add_actions'] = {
  init() {
    const actions = this.appendValueInput('ACTIONS')
      .appendField('add actions')
      .setCheck('Array');
    const mesh = this.appendValueInput('MESH')
      .appendField('to')
      .setAlign(ALIGN_RIGHT)
      .setCheck('Mesh');
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Add actions to a mesh");
    this.setHelpUrl("");
    updateShadow(actions, 'ARRAY', '')
    updateShadow(mesh, 'MESH', '')
  }
}

Blocks['create_custom_event'] = {
  init() {
    this.appendDummyInput()
      .appendField('create custom event');
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blocks['dispatch_custom_event'] = {
  init() {
    this.appendValueInput('EVENT')
      .appendField('dispatch event');
    const data = this.appendValueInput('CUSTOM_EVENT_DATA')
      .appendField('data')
      .setCheck('Object')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    updateShadow(data, 'OBJECT', '')
  }
}

Blocks['add_custom_event_listener'] = {
  init: function () {
    this.appendValueInput('EVENT')
      .appendField('add listener for event');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("do");
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.mixin(createBlockWithContextMenuMixin('custom_event_data', 'custom event data'));
  }
}

Blocks['custom_event_data'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('custom event data');
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("");
    this.setHelpUrl("");
    this.mixin(createSurroundCheckMixin('add_custom_event_listener'));
  }
}

// Blocks['create_virtual_joystick'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField('create virtual joystick');
//     this.appendDummyInput()
//       .appendField(new FieldDropdown([
//         ['left', 'LEFT'],
//         ['right', 'RIGHT']
//       ]), 'IS_LEFT')
//       .setAlign(ALIGN_RIGHT);
//     const options = this.appendValueInput('OPTIONS')
//       .appendField('options')
//       .setCheck('Object')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle("events_style");
//     this.setInputsInline(true);
//     this.setOutput(true, 'VirtualJoystick');
//     this.setTooltip("Creates a new virtual joystick");
//     this.setHelpUrl("");
//     this.mixin(createBlockWithContextMenuMixin('create_virtual_joystick_option', 'option'));
//     updateShadow(options, 'OBJECT', '')
//   }
// }

// Blocks['create_virtual_joystick_option'] = {
//   init() {
//     const _this = this;
//     const valueInput = this.appendValueInput('VALUE')
//       .appendField('set')
//       .appendField(new FieldDropdown(() => MenuGenerator.virtualJoystickOption.generatMenu(), option => MenuGenerator.virtualJoystickOption.updateShape(_this, valueInput, option)), 'KEY')
//       .appendField('to')
//       .setCheck(null);
//     this.setStyle('events_style');
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('');
//     this.setHelpUrl('');
//     this.mixin(createSurroundCheckMixin('object_create'));
//     updateShadow(valueInput, 'BOOL', 'TRUE')
//   }
// }

// Blocks['virtual_joystick_get_delta_position'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField('get joystick deltaPosition');
//     this.appendValueInput('JOYSTICK')
//       .setCheck('VirtualJoystick')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle("events_style");
//     this.setInputsInline(true);
//     this.setOutput(true, ['Vector3', 'Object']);
//     this.setTooltip("Gets the offset value for the position (ie. the change of the position value)");
//     this.setHelpUrl("");
//   }
// }

// Blocks['set_virtual_joystick_visible'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField('set joystick')
//       .appendField(new FieldDropdown([
//         ['hide', 'HIDE'],
//         ['show', 'SHOW']
//       ]), 'IS_VISIBLE');
//     this.setStyle("events_style");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip("Set the joystick visible or not");
//     this.setHelpUrl("");
//   }
// }

Blocks['create_ray'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('create ray');
    const origin = this.appendValueInput('ORIGIN')
      .appendField('origin')
      .setCheck('Vector3')
      .setAlign(ALIGN_RIGHT);
    const direction = this.appendValueInput('DIRECTION')
      .appendField('direction')
      .setCheck('Vector3')
      .setAlign(ALIGN_RIGHT);
    const length = this.appendValueInput('LENGTH')
      .appendField('length')
      .setCheck('Number')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Ray');
    this.setTooltip("Creates a new ray");
    this.setHelpUrl("");
    updateShadow(origin, 'VECTOR3', [0, 0, 0])
    updateShadow(direction, 'VECTOR3', [0, 0, 1])
    updateShadow(length, 'NUM', '100')
  }
}

Blocks['ray_intersects_mesh'] = {
  init: function () {
    this.appendValueInput('RAY')
      .appendField('ray')
      .setCheck('Ray');
    const mesh = this.appendValueInput('MESH')
      .appendField('intersects mesh(s)')
      .setCheck(['Mesh', 'Array'])
      .setAlign(ALIGN_RIGHT);
    this.appendStatementInput('DO_CB')
      .appendField('do')
      .setAlign(ALIGN_RIGHT);
    this.setStyle("events_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Checks if ray intersects a mesh or meshes.");
    this.setHelpUrl("");
    updateShadow(mesh, 'MESH', '')
    this.mixin(createBlockWithContextMenuMixin('picking_info', 'picked'));
  }
}

