import {
  Blocks,
  FieldDropdown,
  FieldCheckbox,
  ALIGN_RIGHT,
} from 'blockly';

Blocks['display_inspector'] = {
  init() {
    this.appendDummyInput()
      .appendField(new FieldDropdown([
        ['show', 'show'],
        ['hide', 'hide'],
      ]), 'DISPLAY')
      .appendField('inspector for')
      .appendField(new FieldDropdown([
        ['default', 'default'],
        ['GUI', 'GUI'],
      ]), 'SCENE')
      .appendField('embed')
      .appendField(new FieldCheckbox('TRUE'), 'EMBED_MODE')
      .setAlign(ALIGN_RIGHT);
    this.setStyle('inspector_style');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Displays a debug panel.');
    this.setHelpUrl('');
  }
}