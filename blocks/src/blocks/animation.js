import {
  ALIGN_RIGHT,
  Blocks,
  FieldDropdown,
  FieldNumber,
  FieldTextInput,
  FieldCheckbox,
  Mutator
} from 'blockly';
import { updateShadow, advancedOptionsMixin } from '../util/util';
import { createSurroundCheckMixin, createContextMenuBlockMixin, createStatementCheckMixin } from './mixins';
import MenuGenerater from './animation_menu_generater';


// Blocks['create_animation_for_target'] = {
//   init() {
//     this.appendDummyInput()
//       .appendField('create animation');
//     const name = this.appendValueInput('NAME')
//       .appendField('name')
//       .setCheck('String')
//       .setAlign(ALIGN_RIGHT);
//     const target = this.appendValueInput('TARGET')
//       .appendField('target')
//       .setCheck(null)
//       .setAlign(ALIGN_RIGHT);
//     const targetProp = this.appendValueInput('TARGET_PROP')
//       .appendField('targetProp')
//       .setCheck('String')
//       .setAlign(ALIGN_RIGHT);
//     this.appendDummyInput()
//       .appendField('propType')
//       .appendField(new FieldDropdown(() => MenuGenerater.propType.generatMenu()), 'PROP_TYPE')
//       .setAlign(ALIGN_RIGHT);
//     const fps = this.appendValueInput('FPS')
//       .appendField('fps')
//       .setCheck('Number')
//       .setAlign(ALIGN_RIGHT);
//     this.appendDummyInput()
//       .appendField('loop')
//       .appendField(new FieldDropdown(() => MenuGenerater.loopMode.generatMenu()), 'LOOP_MODE')
//       .setAlign(ALIGN_RIGHT);
//     const frames = this.appendValueInput('FRAMES')
//       .appendField('keyFrames')
//       .setCheck('Array')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle('animation_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("");
//     this.setHelpUrl("");
//     this.mixin(createContextMenuBlockMixin('animation_frame_value', 'frame value', [['FRAME', 'NUM', '0'], ['VALUE', 'NUM', '0']]));
//     updateShadow(name, 'TEXT', 'myAni')
//     updateShadow(target, 'MESH', '')
//     updateShadow(targetProp, 'TEXT', 'position.y')
//     updateShadow(fps, 'NUM', '60')
//     updateShadow(frames, 'ARRAY', '')
//   }
// }

// Blocks['begin_animation'] = {
//   init() {
//     this.appendDummyInput()
//       .appendField('begin animation');
//     const target = this.appendValueInput('TARGET')
//       .appendField('target')
//       .setCheck(null)
//       .setAlign(ALIGN_RIGHT);
//     const from = this.appendValueInput('FROM')
//       .appendField('from')
//       .setCheck('Number')
//       .setAlign(ALIGN_RIGHT);
//     const to = this.appendValueInput('TO')
//       .appendField('to')
//       .setCheck('Number')
//       .setAlign(ALIGN_RIGHT);
//     const loop = this.appendValueInput('LOOP')
//       .appendField('loop')
//       .setCheck('Boolean')
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle('animation_style');
//     this.setInputsInline(true);
//     this.setOutput(true, 'Animatable');
//     this.setTooltip('Will start the animation sequence of a given target');
//     this.setHelpUrl('');
//     updateShadow(target, 'MESH', '')
//     updateShadow(from, 'NUM', '0')
//     updateShadow(to, 'NUM', '10')
//     updateShadow(loop, 'BOOL', 'FALSE')

//   }
// }

// Blocks['animation_frame_value'] = {
//   init() {
//     this.appendDummyInput()
//       .appendField('array elem');
//     this.appendValueInput('FRAME')
//       .appendField('frame')
//       .setCheck(null)
//       .setAlign(ALIGN_RIGHT);
//     this.appendValueInput('VALUE')
//       .appendField('value')
//       .setCheck(null)
//       .setAlign(ALIGN_RIGHT);
//     this.setStyle('animation_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('');
//     this.setHelpUrl('');
//     this.mixin(createSurroundCheckMixin('create_array'));
//   }
// }

// Blocks['animation_playback'] = {
//   init() {
//     this.appendValueInput('ANIMATABLE')
//       .appendField(new FieldDropdown([
//         ['pause', 'pause'],
//         ['restart', 'restart'],
//         ['stop', 'stop'],
//         ['reset', 'reset'],
//       ]), 'METHOD')
//       .appendField('animatable')
//       .setCheck('Animatable');
//     this.setStyle('animation_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("local storage save item");
//     this.setHelpUrl("");
//   }
// }

// Blocks['on_animation_end'] = {
//   init() {
//     this.appendValueInput('ANIMATABLE')
//       .appendField('on animation')
//       .setCheck('Animatable');
//     this.appendDummyInput()
//       .appendField('end');
//     this.appendStatementInput('DO_CB');
//     this.setStyle('animation_style');
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("local storage save item");
//     this.setHelpUrl("");
//   }
// }

// 生效的拼图
Blocks['get_animation_group_by_name'] = {
  init() {
    const name = this.appendValueInput('NAME')
      .appendField('get animation group')
      .setCheck('String');
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setOutput('AnimationGroup')
    this.setHelpUrl("");
    updateShadow(name, 'TEXT', '')
  }
}

Blocks['set_get_animaiton_group_prop'] = {
  init() {
    const _this = this;
    const statementCheckMixin = createStatementCheckMixin();
    let isSet;
    this.appendValueInput('ANIMATION_GROUP')
      .appendField(new FieldDropdown([
        ['set', 'set'],
        ['get', 'get'],
      ], method => {
        isSet = method === 'set';
        statementCheckMixin.updateShape_.call(_this, isSet);
        statementCheckMixin.updateValueInput_.call(_this, isSet);
      }), 'METHOD')
      .appendField('animation group')
      .setCheck('AnimationGroup');
    this.appendDummyInput()
      .appendField(new FieldDropdown(() => MenuGenerater.animationGroupProps.generatMenu(), option => {
        isSet && MenuGenerater.animationGroupProps.updateShape(_this, _this.getInput('VALUE'), option);
      }), 'PROP');
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl("");
    this.mixin(statementCheckMixin);
    statementCheckMixin.updateValueInput_.call(_this, true);
    updateShadow(_this.getInput('VALUE'), 'ARRAY', '')
  }
}

Blocks['animation_group_playback'] = {
  init() {
    const _this = this;
    this.appendValueInput('ANIMATION_GROUP')
      .appendField(new FieldDropdown(() => MenuGenerater.animationGroupMethod.generatMenu(), method => _this._updateShape(method)), 'METHOD')
      .appendField('animation group')
      .setCheck(null);
    const dummy = this.appendDummyInput('DUMMY')
      .appendField('loop')
      .appendField(new FieldCheckbox('TRUE'), 'LOOP');
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl("")
    dummy.setVisible(false)
  },

  _updateShape(method) {
    const dummy = this.getInput('DUMMY')
    dummy.setVisible(false)
    if (['start', 'play'].includes(method)) dummy.setVisible(true)
  }
}

Blocks['animation_go_to_frame'] = {
  init() {
    this.appendValueInput('ANIMATION_GROUP')
      .appendField('animation group')
      .setCheck(null);
    const frame = this.appendValueInput('FRAME')
      .appendField('go to frame')
      .setCheck(null);
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Goes to a specific frame in this animation group')
    this.setHelpUrl("");
    updateShadow(frame, 'NUM', '')
  }
}

Blocks['animation_blending'] = {
  init() {
    this.appendValueInput('FROM_ANIMATION_GROUP')
      .appendField('animation blending')
      .appendField('fromAnimGroup')
      .setCheck(null);
    this.appendValueInput('TO_ANIMATION_GROUP')
      .appendField('toAnimGroup')
      .setCheck(null);
    const blendingSpeed = this.appendValueInput('BLENDING_SPEED')
      .appendField('blendingSpeed')
      .setCheck(null);
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('')
    this.setHelpUrl("");
    updateShadow(blendingSpeed, 'NUM', '1')
  }
}

Blocks['transition_animation'] = {
  init() {
    const _this = this;
    this.appendDummyInput()
      .appendField('transition');
    const object = this.appendValueInput('OBJECT')
      .appendField('object')
      .setAlign(ALIGN_RIGHT)
      .setCheck(['Object', 'Mesh', 'Light', 'Camera']);
    const key = this.appendValueInput('KEY')
      .appendField('key')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    const value = this.appendValueInput('VALUE')
      .appendField('value')
      .setAlign(ALIGN_RIGHT)
      .setCheck(null);
    this.appendDummyInput()
      .appendField('type')
      .setAlign(ALIGN_RIGHT)
      .appendField(new FieldDropdown(() => MenuGenerater.propType.generatMenu()), 'TYPE');
    const duration = this.appendValueInput('DURATION')
      .appendField('duration')
      .setAlign(ALIGN_RIGHT)
      .setCheck('Number');
    const fps = this.appendValueInput('FPS')
      .appendField('fps')
      .setAlign(ALIGN_RIGHT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField('easing')
      .setAlign(ALIGN_RIGHT)
      .appendField(new FieldDropdown(() => MenuGenerater.easing.generatMenu()), 'EASING');
    this.setStyle('animation_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Transition property of an host to the target Value");
    this.setHelpUrl("");
    this.setMutator(new Mutator(["invisibleBlock"]));
    this.mixin(advancedOptionsMixin([
      ["enableCb", "enable finish slot", !1],
    ],
      "animation_style",
      () => _this.updateShape_()
    ));
    updateShadow(object, 'OBJECT', '')
    updateShadow(key, 'TEXT', '')
    updateShadow(value, 'NUM', '1')
    updateShadow(duration, 'NUM', '1')
    updateShadow(fps, 'NUM', '60')
  },
  updateShape_() {
    this.getInput("DO_CB") && this.removeInput("DO_CB");
    if (this._boolOptValues.enableCb) {
      this.appendStatementInput('DO_CB')
        .appendField('finish do')
        .setAlign(ALIGN_RIGHT);
    }
  }
}