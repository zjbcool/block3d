import Blockly from 'blockly';
import { advancedOptionsMixin } from '../util/util';
import './dummyBlock';

Blockly.Blocks['template_a'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('puzzle template1');
    this.appendValueInput('VALUE')
      .setCheck(['Number', 'String'])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('value');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('dropdown')
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
      ]), "DROPDOWN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("checkbox")
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'CHECKBOX');
    this.appendStatementInput("DO_CB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("do:");
    this.setStyle("system_style");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}
Blockly.Blocks['template_b'] = {
  init() {
    this.appendDummyInput()
      .appendField("puzzle template 2");
    this.appendStatementInput("DO")
      .appendField("do")
      .setCheck(null);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setStyle("system_style");
    this.setTooltip(Blockly.Msg.TEMPLATE_B_TOOLTIP);
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(["invisibleBlock"]));
    this.mixin(advancedOptionsMixin([
      ["advOps", "advanced options", !1],
      ["enableIfMissed", 'enable "if missed" action', !1]
    ],
      "system_style",
      () => {
        this.updateShape_();
        if (this.getInput("IF_MISSED_DO")) {
          Blockly.Mutator.reconnect(this.ifMissedConnection_, this, "IF_MISSED_DO")
        }
      }
    ));
  },

  updateShape_() {
    const ops = this._boolOptValues;

    ops.enableIfMissed && !this.getInput("IF_MISSED_DO") && this.appendStatementInput("IF_MISSED_DO")
      .appendField("if missed: do")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
    !ops.enableIfMissed && this.getInput("IF_MISSED_DO") && this.removeInput("IF_MISSED_DO");

    ops.advOps && !this.getInput("ADVANCED_OPTION") && this.appendValueInput("ADVANCED_OPTION").appendField("advanced option") && this.moveInputBefore("ADVANCED_OPTION", "DO");
    !ops.advOps && this.getInput("ADVANCED_OPTION") && this.removeInput("ADVANCED_OPTION");
  },

  saveConnections(block) {
    const ifMissedDo = this.getInput("IF_MISSED_DO");
    ifMissedDo && (this.ifMissedConnection_ = ifMissedDo.connection.targetConnection)
  }
}
Blockly.Blocks['template_c'] = {
  init() {
    this.appendDummyInput()
      .appendField("puzzle template 3");
    this.appendDummyInput("ADVANCED_OPTION")
      .appendField("advanced option")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "CHECK_BOX")
    this.appendStatementInput("DO")
      .appendField("do")
      .setCheck(null);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setStyle("system_style");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(["invisibleBlock"]));
    this.mixin(advancedOptionsMixin([
      ["advOps", "advanced options", !1],
      ["enableIfMissed", 'enable "if missed" action', !1]
    ],
      "template",
      () => {
        this.updateShape_();
        if (this.getInput("IF_MISSED_DO")) {
          Blockly.Mutator.reconnect(this.ifMissedConnection_, this, "IF_MISSED_DO")
        }
      }
    ));
    this.updateShape_();
  },

  updateShape_() {
    const opts = this._boolOptValues;

    opts.enableIfMissed && !this.getInput("IF_MISSED_DO") && this.appendStatementInput("IF_MISSED_DO")
      .appendField("if missed: do")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
    !opts.enableIfMissed && this.getInput("IF_MISSED_DO") && this.removeInput("IF_MISSED_DO");
    // 如果Input是DummyInput，可以用setVisible显示或隐藏它
    opts.advOps && this.getInput("ADVANCED_OPTION").setVisible(!0);
    !opts.advOps && this.getInput("ADVANCED_OPTION").setVisible(!1);
  },

  saveConnections(block) {
    const ifMissedDo = this.getInput("IF_MISSED_DO");
    ifMissedDo && (this.ifMissedConnection_ = ifMissedDo.connection.targetConnection)
  }
}


// template_d 带高级选项混入
const ADV_MIXIN = {
  _boolOptValues: {
    advOps: false,
    enableIfMissed: false
  },
  _boolOptLabels: {
    advOps: "advanced options",
    enableIfMissed: 'enable "if missed" action'
  },
  _boolOptColor: 'template_style',
  mutationToDom() {
    let opt, container;
    container = document.createElement("mutation");
    for (opt in this._boolOptValues) {
      container.setAttribute(opt.toLowerCase(), Boolean(this._boolOptValues[opt]))
    };
    return container
  },
  domToMutation(xmlElement) {
    let opt;
    for (opt in this._boolOptValues) {
      this._boolOptValues[opt] = "true" == xmlElement.getAttribute(opt.toLowerCase())
    };
    this.update();
  },
  decompose(workspace) {
    let opt, blockInstance;
    blockInstance = workspace.newBlock("emptyBlock");
    blockInstance.setStyle(this._boolOptColor);
    blockInstance.inputList.forEach((input) => blockInstance.removeInput(input.name));
    for (opt in this._boolOptValues) {
      blockInstance.appendDummyInput()
        .appendField(this._boolOptLabels[opt])
        .appendField(new Blockly.FieldCheckbox(this._boolOptValues[opt] ? "TRUE" : "FALSE"), opt)
        .setAlign(Blockly.ALIGN_RIGHT);
    }
    blockInstance.initSvg();
    return blockInstance
  },
  compose(blockInstance) {
    let opt;
    for (opt in this._boolOptValues) {
      this._boolOptValues[opt] = "TRUE" == blockInstance.getFieldValue(opt);
    }
    this.update();
  },
  update() {
    const ops = this._boolOptValues;

    ops.enableIfMissed && !this.getInput("IF_MISSED_DO") && this.appendStatementInput("IF_MISSED_DO")
      .appendField("if missed: do")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
    !ops.enableIfMissed && this.getInput("IF_MISSED_DO") && this.removeInput("IF_MISSED_DO");

    ops.advOps && !this.getInput("ADVANCED_OPTION") && this.appendValueInput("ADVANCED_OPTION").appendField("advanced option") && this.moveInputBefore("ADVANCED_OPTION", "DO");
    !ops.advOps && this.getInput("ADVANCED_OPTION") && this.removeInput("ADVANCED_OPTION");
  },

  saveConnections() {
    const ifMissedDo = this.getInput("IF_MISSED_DO");
    ifMissedDo && (this.ifMissedConnection_ = ifMissedDo.connection.targetConnection)
  }
}

Blockly.Blocks['template_d'] = {
  init() {
    this.appendDummyInput()
      .appendField("puzzle template 4");
    this.appendStatementInput("DO")
      .appendField("do")
      .setCheck(null);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setStyle("template_style");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setMutator(new Blockly.Mutator(["invisibleBlock"]));
    this.mixin(ADV_MIXIN);
  }
}

Blockly.Blocks['multilineinput_advanced'] = {
  init() {
    this.appendDummyInput()
      .appendField(new Blockly.MultilineInputAdvanced(''), 'EDITOR');
    this.setInputsInline(false);
    this.setStyle('template_style');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('');
    this.setTooltip('');
  }
}