import {
  Blocks,
  ALIGN_RIGHT
} from 'blockly'
import { updateShadow } from '../util/util'

Blocks['time_after'] = {
  init() {
    const value = this.appendValueInput('VALUE')
      .appendField('after')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField('second(s)');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("do");
    this.setStyle("time_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");

    updateShadow(value, 'NUM', '1')
  }
}

Blocks['time_every_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('every frame');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT)
      .appendField("do");
    this.setStyle("time_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blocks['get_delta_time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('get delta time');
    this.setStyle("time_style");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip("Gets the time spent between current and previous frame. Returns a number representing the delta time in seconds.");
    this.setHelpUrl("");
  }
}

Blocks['create_timer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('create timer');
    const seconds = this.appendValueInput('SECONDS')
      .appendField('interval')
      .setCheck('Number')
    this.appendDummyInput()
      .appendField('second(s)');
    this.appendStatementInput('DO_CB')
      .appendField('do');
    this.setStyle("time_style");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/setInterval");
    updateShadow(seconds, 'NUM', '')
  }
}

Blocks['remove_timer'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField('remove timer');
    this.setStyle("time_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Cancels a timer");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/setInterval");
  }
}

