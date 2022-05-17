import Blockly from 'blockly';

Blockly.Blocks['emptyBlock'] = {
  init: function () {
    this.contextMenu = !1
  }
};

Blockly.Blocks['invisibleBlock'] = {
  init: function () {
    this.translate(-9999, -9999)
  }
};