import {
  Blocks,
  ALIGN_RIGHT,
  Msg
} from 'blockly';
import { createSurroundCheckMixin, createContextMenuBlockMixin } from './mixins';

Blocks['text_item'] = {
  init() {
    this.appendValueInput('ELEMENT')
      .appendField('element')
      .setCheck(null);
    this.setStyle('text_style');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://zjbku.com/block3d/blocks-reference/text.html#text');
    this.mixin(createSurroundCheckMixin('text_join'));
  }
}

Blocks['text_join'] = {
  init() {
    this.appendDummyInput()
      .appendField("join text");
    this.appendStatementInput("ITEM")
      .setCheck(null)
      .setAlign(ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setStyle('text_style');
    this.setOutput(true, 'String');
    this.setTooltip(Msg['text_join_tooltip'])
    this.setHelpUrl("https://zjbku.com/block3d/blocks-reference/text.html#text-multiline");
    this.mixin(createContextMenuBlockMixin('text_item', 'element', [['ELEMENT', 'TEXT', 'value']]));
  }
}
