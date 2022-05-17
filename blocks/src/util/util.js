
import {
  FieldCheckbox,
  ALIGN_RIGHT,
  Msg
} from 'blockly';

function advancedOptionsMixin(args, color, update) {
  const optValues = {},
    optLabels = {};
  args.forEach((arg) => {
    const [key, label, value] = arg;
    optValues[key] = value;
    optLabels[key] = label;
  });
  return {
    _boolOptValues: optValues,
    _boolOptLabels: optLabels,
    _boolOptColor: color,
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
      update && update.call(this, null)
    },
    decompose(workspace) {
      let opt, blockInstance;
      blockInstance = workspace.newBlock("emptyBlock");
      blockInstance.setStyle(this._boolOptColor);
      blockInstance.inputList.forEach((input) => blockInstance.removeInput(input.name));
      for (opt in this._boolOptValues) {
        blockInstance.appendDummyInput()
          .appendField(this._boolOptLabels[opt])
          .appendField(new FieldCheckbox(this._boolOptValues[opt] ? "TRUE" : "FALSE"), opt)
          .setAlign(ALIGN_RIGHT);
      }
      blockInstance.initSvg();
      return blockInstance
    },
    compose(blockInstance) {
      let opt;
      for (opt in this._boolOptValues) {
        this._boolOptValues[opt] = "TRUE" == blockInstance.getFieldValue(opt);
      }
      update && update.call(this, blockInstance)
    }
  }
}


function wrapFn(contents) {
  return `()=> {${contents}}`;
}

function createXMLElement(dom) {
  return document.implementation.createDocument("", "").createElement(dom)
}

function disposeShadowBlock(input) {
  if (input.connection && input.connection.isConnected()) {
    const shadow = input.connection.targetBlock();
    shadow.isShadow() && shadow.dispose()
  }
}
/**
 * 删除连接到input的块
 * @param {Input} input 
 */
function disposeConnectedBlock(input) {
  if (input.connection && input.connection.isConnected()) {
    const connectedBlock = input.connection.targetBlock();
    input.connection.disconnect();//
    connectedBlock.dispose();
  }
}
/**
 * 取消与父块的连接
 * @param {Block} block 
 */
function disconnectParentBlock(block) {
  block.outputConnection && block.outputConnection.isConnected() && block.outputConnection.disconnect();
  block.nextConnection && block.nextConnection.isConnected() && block.nextConnection.disconnect();
  block.previousConnection && block.previousConnection.isConnected() && block.previousConnection.disconnect();
}

function updateShadow(input, shadowName, shadowValue) {
  if (input.connection) {
    let container = createXMLElement("xml");
    container.innerHTML = setShadowStr(shadowName, shadowValue);
    input.connection.setShadowDom(container.firstElementChild);
    container = input.connection.targetBlock();
    if (null === container) input.connection.respawnShadow_();
    else if (container.isShadow()) {
      container.dispose();
      input.connection.respawnShadow_()
    }
    return input;
  }
}

/**
 * 
 * @param {string} shadowName  NUM | ANGLE | TEXT | BOOL | NONE |
 * @param {string} shadowValue 123 | 45    |'name'| 'TRUE'| ''  |
 * @returns 
 */
function setShadowStr(shadowName, shadowValue) {
  switch (shadowName) {
    case 'NUM':
      return `<shadow type="math_number">
<field name="NUM">${shadowValue}</field>
</shadow>`;
    case 'ANGLE':
      return `<shadow type="math_angle">
<field name="ANGLE">${shadowValue}</field>
</shadow>`;
    case 'TEXT':
      return `<shadow type="text">
<field name="TEXT">${shadowValue}</field>
</shadow>`;
    case 'BOOL':
      return `<shadow type="logic_boolean">
<field name="BOOL">${shadowValue}</field>
</shadow>`;
    case 'NULL':
      return `<shadow type="logic_null"></shadow>`;
    case 'OBJECT':
      return `<shadow type="empty_object"></shadow>`;
    case 'ARRAY':
      return `<shadow type="empty_array"></shadow>`;
    case 'MESH':
      return `<shadow type="mesh_selector">
<field name="NAME">${shadowValue}</field>
</shadow>`;
    case 'CAMERA':
      return `<shadow type="camera_selector">
<field name="NAME">${shadowValue}</field>
</shadow>`;
    case 'LIGHT':
      return `<shadow type="light_selector">
<field name="NAME">${shadowValue}</field>
</shadow>`;
    case 'VECTOR2':
      return `<shadow type="field_vector2">
<field name="X">${shadowValue[0]}</field>
<field name="Y">${shadowValue[1]}</field>
</shadow>`;
    case 'VECTOR3':
      return `<shadow type="field_vector3">
<field name="X">${shadowValue[0]}</field>
<field name="Y">${shadowValue[1]}</field>
<field name="Z">${shadowValue[2]}</field>
</shadow>`;
    case 'VECTOR4':
      return `<shadow type="field_vector4">
<field name="X">${shadowValue[0]}</field>
<field name="Y">${shadowValue[1]}</field>
<field name="Z">${shadowValue[2]}</field>
<field name="W">${shadowValue[3]}</field>
</shadow>`;
    case 'COLOR3':
      return `<shadow type="field_color3">
<field name="R">${shadowValue[0]}</field>
<field name="G">${shadowValue[1]}</field>
<field name="B">${shadowValue[2]}</field>
</shadow>`;
    case 'COLOR4':
      return `<shadow type="field_color4">
<field name="R">${shadowValue[0]}</field>
<field name="G">${shadowValue[1]}</field>
<field name="B">${shadowValue[2]}</field>
<field name="A">${shadowValue[3]}</field>
</shadow>`;
    case 'NONE':
      return;
  }
}
/**
 * 用于FieldDropdown的选项处理
 */
class DropdownHelper {
  /**
   * 
   * @param {array} list 要处理的数组
   * [[显示的选项, 选项，影子块类型，影子块默认值，提示]]
   */
  constructor(list) {
    this._list = list;
    this.shadowToType = {
      NUM: 'Number',
      ANGLE: 'Number',
      TEXT: 'String',
      BOOL: 'Boolean',
      OBJECT: 'Object',
      ARRAY: 'Array',
      MESH: 'Mesh',
      LIGHT: 'Light',
      MATERIAL: 'Material',
      VECTOR2: 'Vector2',
      VECTOR3: 'Vector3',
      VECTOR4: 'Vector4',
      COLOR3: 'Color3',
      COLOR4: 'Color4',
      NONE: null,
      null: null
    }
  }
  getList() {
    // 获取列表参数的第1项，即所有选项
    return this._list.map(item => item[1])
  }
  generatMenu() {
    return this._list.map(item => Array(item[0], item[1]));
  }
  /**
   * 更新类型检查，影子块，提示
   * @param {Block} block 
   * @param {ValueInput} input 
   * @param {string} prop 选项
   */
  updateShape(block, input, prop) {
    this.updateShadow(input, prop);
    this.updateTooltip(block, prop);
  }
  /**
   * 更新类型检查，影子块
   * @param {ValueInput} input 
   * @param {string} prop 选项
   */
  updateShadow(input, prop) {
    if (!input) return;
    const index = this._list.findIndex(item => item[1] == prop);
    const shadowName = this._list[index][2];
    const shadowValue = this._list[index][3];
    disposeShadowBlock(input);
    // 更新类型检查
    input.setCheck(this.shadowToType[shadowName]);
    // 更新影子块
    updateShadow(input, shadowName, shadowValue);
  }
  /**
   * 更新block工具提示
   * @param {Block} block 
   * @param {string} prop 
   * @returns 
   */
  updateTooltip(block, prop) {
    const index = this._list.findIndex(item => item[1] == prop);
    const tooltip = this._list[index][4];
    if (!tooltip) return;

    if (Msg[tooltip]) {
      block.setTooltip(Msg[tooltip]);
    } else {
      block.setTooltip(tooltip);
    }
  }
}

function getSurroundParentOfType(block, type) {
  for (var parentBlock = block.getSurroundParent(); parentBlock && parentBlock.type != type;) parentBlock = parentBlock.getSurroundParent();
  return parentBlock
}

export {
  wrapFn,
  advancedOptionsMixin,
  updateShadow,
  setShadowStr,
  disposeShadowBlock,
  disposeConnectedBlock,
  disconnectParentBlock,
  DropdownHelper,
  getSurroundParentOfType,
}
