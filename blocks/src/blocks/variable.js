import Blockly from 'blockly'


Blockly.Blocks.variables = {};
Blockly.constants.Variables = {};
Blockly.constants.Variables.HUE = 330;
Blockly.defineBlocksWithJsonArray([{
  type: "variables_get",
  message0: "%1",
  args0: [{
    type: "field_variable",
    name: "VAR",
    variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
  }],
  output: null,
  style: "variable_blocks",
  helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
  tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
  extensions: ["contextMenu_variableSetterGetter_1"]
}, {
  type: "variables_set",
  message0: "%{BKY_VARIABLES_SET}",
  args0: [{
    type: "field_variable",
    name: "VAR",
    variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
  }, {
    type: "input_value",
    name: "VALUE"
  }],
  previousStatement: null,
  nextStatement: null,
  style: "variable_blocks",
  tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
  helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
  extensions: ["contextMenu_variableSetterGetter_1"]
}]);
Blockly.constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
  customContextMenu: function (e) {
    if (this.isInFlyout) "variables_get" != this.type && "variables_get_reporter" != this.type || (t = {
      text: Blockly.Msg.RENAME_VARIABLE,
      enabled: !0,
      callback: Blockly.constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
    }, i = this.getField("VAR").getText(), o = {
      text: Blockly.Msg.DELETE_VARIABLE.replace("%1", i),
      enabled: !0,
      callback: Blockly.constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
    }, e.unshift(t), e.unshift(o));
    else {
      var t, n = "variables_get" == this.type ? (t = "variables_set", Blockly.Msg.VARIABLES_GET_CREATE_SET) : (t = "variables_get", Blockly.Msg.VARIABLES_SET_CREATE_GET),
        o = {
          enabled: 0 < this.workspace.remainingCapacity()
        },
        i = this.getField("VAR").getText();
      o.text = n.replace("%1", i);
      (n = Blockly.utils.xml.createElement("field")).setAttribute("name", "VAR");
      n.appendChild(Blockly.utils.xml.createTextNode(i));
      (i = Blockly.utils.xml.createElement("block")).setAttribute("type", t);
      i.appendChild(n);
      o.callback = Blockly.contextMenu.callbackFactory(this, i);
      e.push(o)
    }
  }
};
Blockly.constants.Variables.RENAME_OPTION_CALLBACK_FACTORY = function (n) {
  return function () {
    var e = n.workspace,
      t = n.getField("VAR").getVariable();
    Blockly.Variables.renameVariable(e, t)
  }
};
Blockly.constants.Variables.DELETE_OPTION_CALLBACK_FACTORY = function (n) {
  return function () {
    var e = n.workspace,
      t = n.getField("VAR").getVariable();
    e.deleteVariableById(t.getId());
    e.refreshToolboxSelection()
  }
};
Blockly.Extensions.registerMixin("contextMenu_variableSetterGetter_1", Blockly.constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
Blockly.constants.VariablesDynamic = {};
Blockly.constants.VariablesDynamic.HUE = 310;
Blockly.defineBlocksWithJsonArray([{
  type: "variables_get_dynamic",
  message0: "%1",
  args0: [{
    type: "field_variable",
    name: "VAR",
    variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
  }],
  output: null,
  style: "variable_dynamic_blocks",
  helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
  tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
  extensions: ["contextMenu_variableDynamicSetterGetter_1"]
}, {
  type: "variables_set_dynamic",
  message0: "%{BKY_VARIABLES_SET}",
  args0: [{
    type: "field_variable",
    name: "VAR",
    variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
  }, {
    type: "input_value",
    name: "VALUE"
  }],
  previousStatement: null,
  nextStatement: null,
  style: "variable_dynamic_blocks",
  tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
  helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
  extensions: ["contextMenu_variableDynamicSetterGetter_1"]
}]);
Blockly.constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
  customContextMenu: function (e) {
    if (this.isInFlyout) "variables_get_dynamic" != this.type && "variables_get_reporter_dynamic" != this.type || (t = {
      text: Blockly.Msg.RENAME_VARIABLE,
      enabled: !0,
      callback: Blockly.constants.Variables.RENAME_OPTION_CALLBACK_FACTORY(this)
    }, r = this.getField("VAR").getText(), i = {
      text: Blockly.Msg.DELETE_VARIABLE.replace("%1", r),
      enabled: !0,
      callback: Blockly.constants.Variables.DELETE_OPTION_CALLBACK_FACTORY(this)
    }, e.unshift(t), e.unshift(i));
    else {
      var t = this.getFieldValue("VAR"),
        n = this.workspace.getVariableById(t).type,
        o = "variables_get_dynamic" == this.type ? (t = "variables_set_dynamic", Blockly.Msg.VARIABLES_GET_CREATE_SET) : (t = "variables_get_dynamic", Blockly.Msg.VARIABLES_SET_CREATE_GET),
        i = {
          enabled: 0 < this.workspace.remainingCapacity()
        },
        r = this.getField("VAR").getText();
      i.text = o.replace("%1", r);
      (o = Blockly.utils.xml.createElement("field")).setAttribute("name", "VAR");
      o.setAttribute("variabletype", n);
      o.appendChild(Blockly.utils.xml.createTextNode(r));
      (r = Blockly.utils.xml.createElement("block")).setAttribute("type", t);
      r.appendChild(o);
      i.callback = Blockly.contextMenu.callbackFactory(this, r);
      e.push(i)
    }
  },
  onchange: function (e) {
    e = this.getFieldValue("VAR");
    e = Blockly.Variables.getVariable(this.workspace, e);
    ("variables_get_dynamic" == this.type ? this.outputConnection : this.getInput("VALUE").connection).setCheck(e.type)
  }
};
Blockly.constants.VariablesDynamic.RENAME_OPTION_CALLBACK_FACTORY = function (n) {
  return function () {
    var e = n.workspace,
      t = n.getField("VAR").getVariable();
    Blockly.Variables.renameVariable(e, t)
  }
};
Blockly.constants.VariablesDynamic.DELETE_OPTION_CALLBACK_FACTORY = function (n) {
  return function () {
    var e = n.workspace,
      t = n.getField("VAR").getVariable();
    e.deleteVariableById(t.getId());
    e.refreshToolboxSelection()
  }
};
Blockly.Extensions.registerMixin("contextMenu_variableDynamicSetterGetter_1", Blockly.constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);