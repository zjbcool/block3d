import {
  Blocks,
  FieldCheckbox,
  FieldDropdown,
  FieldImage,
  ALIGN_RIGHT,
  Msg,
} from 'blockly';
import { updateShadow } from '../util/util';
import { createSurroundCheckMixin, createContextMenuBlockMixin } from './mixins';
import MenuGenerator from './tweak_pane_menu_generator';
import sliderIcon from '../media/slider.svg';
import listIcon from '../media/list.svg';
import checkboxIcon from '../media/checkbox.svg';
import textIcon from '../media/text.svg';
import colorIcon from '../media/color.svg';
import buttonIcon from '../media/button.svg';

Msg.GUI_CREATE_TOOLTIP = "options接收一个对象参数，其中的container属性是界面所要挂载的DOM元素。"
Msg.GUI_CREATE_HELP_URL = "https://cocopon.github.io/tweakpane/getting-started.html"

Blocks['create_tweak_pane'] = {
  init() {
    this.appendDummyInput()
      .appendField("create pane");
    const title = this.appendValueInput('TITLE')
      .appendField('title')
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('tweak_pane_style');
    this.setTooltip('Create an instance of a pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#create-tweak-pane');
    updateShadow(title, 'TEXT', '')
  }
}

Blocks['pane_add_folder'] = {
  init() {
    const title = this.appendValueInput('TITLE')
      .appendField("add folder")
      .appendField('title')
      .setCheck('String');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle('tweak_pane_style');
    this.setTooltip('Add folder to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-folder');
    updateShadow(title, 'TEXT', '')

  }
}

Blocks['pane_slider_options'] = {
  init() {
    const _this = this;
    const value = this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new FieldDropdown(() => MenuGenerator.sliderOptions.generatMenu(), option => MenuGenerator.sliderOptions.updateShape(_this, _this.getInput('VALUE'), option)), 'KEY')
      .appendField('to')
      .setCheck(null);
    this.setStyle('tweak_pane_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.mixin(createSurroundCheckMixin('object_create'));
    updateShadow(value, 'TEXT', '')
  }
}

Blocks['pane_add_slider'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(sliderIcon, 18, 18))
      .appendField("add slider")
      .appendField("to")
      .setCheck(null);
    const label = this.appendValueInput('LABEL')
      .appendField('label')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendValueInput('OPTIONS')
      .appendField("options")
      .setAlign(ALIGN_RIGHT)
      .setCheck('Object');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on change");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add slider to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-slider');
    this.mixin(createContextMenuBlockMixin('pane_slider_options', 'option'));
    updateShadow(label, 'TEXT', '')
  }
}

Blocks['pane_add_list'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(listIcon, 18, 18))
      .appendField("add list")
      .appendField("to")
      .setCheck(null);
    const label = this.appendValueInput('LABEL')
      .appendField('label')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendValueInput('OPTIONS')
      .appendField("options")
      .setAlign(ALIGN_RIGHT)
      .setCheck('Object');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on change");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add list to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-list');
    this.mixin(createContextMenuBlockMixin('pane_get_value', 'get value'));
    updateShadow(label, 'TEXT', '')

  }
}

Blocks['pane_add_checkbox'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(checkboxIcon, 18, 18))
      .appendField("add checkbox")
      .appendField("to")
      .setCheck(null);
    const label = this.appendValueInput('LABEL')
      .appendField('label')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendDummyInput()
      .appendField("checked")
      .appendField(new FieldCheckbox('TRUE'), 'CHECKED')
      .setAlign(ALIGN_RIGHT);
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on change");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add checkbox to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-checkbox');
    this.mixin(createContextMenuBlockMixin('pane_get_value', 'get value'));
    updateShadow(label, 'TEXT', '')

  }
}

Blocks['pane_add_text'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(textIcon, 18, 18))
      .appendField("add text")
      .appendField("to")
      .setCheck(null);
    const label = this.appendValueInput('LABEL')
      .appendField('label')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    const text = this.appendValueInput('TEXT')
      .appendField('text')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on change");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add text to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-text');
    this.mixin(createContextMenuBlockMixin('pane_get_value', 'get value'));
    updateShadow(label, 'TEXT', '')
    updateShadow(text, 'TEXT', '')

  }
}

Blocks['pane_add_color'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(colorIcon, 18, 18))
      .appendField("add color")
      .appendField("to")
      .setCheck(null);
    const label = this.appendValueInput('LABEL')
      .appendField('label')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    const hex = this.appendValueInput('COLOR')
      .appendField('hex')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on change");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add color to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-color');
    this.mixin(createContextMenuBlockMixin('pane_get_value', 'get value'));
    updateShadow(label, 'TEXT', '')
    updateShadow(hex, 'TEXT', '#ff0000')

  }
}

Blocks['pane_add_button'] = {
  init() {
    this.appendValueInput('FOLDER')
      .appendField(new FieldImage(buttonIcon, 18, 18))
      .appendField("add button")
      .appendField("to")
      .setCheck(null);
    const title = this.appendValueInput('TITLE')
      .appendField('title')
      .setAlign(ALIGN_RIGHT)
      .setCheck('String');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("on click");
    this.setStyle('tweak_pane_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add button to the pane');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-add-button');
    updateShadow(title, 'TEXT', '');
  }
}

Blocks['pane_get_value'] = {
  init() {
    this.appendDummyInput()
      .appendField("get value");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setStyle('tweak_pane_style');
    this.setTooltip("");
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/tweakpane.html#pane-get-value");
  }
}

