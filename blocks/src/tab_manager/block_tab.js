import Blockly from 'blockly';

export class BlockTab {
  constructor(title) {
    this.title = title;
    this.id = Blockly.utils.idGenerator.genUid();
    this.tabElem = document.createElement('li');
    this.tabElem.className = 'tab-item';
    this.tabElem.title = title;
    this.tabElem.dataset['uid'] = this.id;
    this.tabElem.innerText = this.title;
    this.workspace = null;
    this.workspaceElem = null;
    this.type = 'block';
  }

  focus(isFocus) {
    if (this.workspace && this.workspaceElem) {
      this.workspace.setVisible(isFocus);
      this.workspace.markFocused();
      this.workspace.hideChaff(true);
      this.workspaceElem.className = isFocus ? 'workspace-container show' : 'workspace-container hide';
      Blockly.selected && Blockly.selected.unselect();

      isFocus ? this.tabElem.classList.add('tab-active') : this.tabElem.className = 'tab-item';
    }
  }

  load(json) {
    this.workspace && Blockly.serialization.workspaces.load(json, this.workspace);
  }

  save() {
    const _this = this;
    const workspaceJson = Blockly.serialization.workspaces.save(this.workspace);
    const visualLogic = Blockly.JavaScript.workspaceToCode(this.workspace);
    return {
      title: _this.title,
      id: _this.id,
      type: _this.type,
      data: workspaceJson,
      js: visualLogic
    }
  }
  
  resize() {
    this.workspace && Blockly.svgResize(this.workspace)
  }

  onBeforeDispose() { }
  dispose() {
    this.onBeforeDispose && this.onBeforeDispose();
    this.workspace && this.workspace.dispose();
    this.workspace = null;

    this.tabElem.parentNode && this.tabElem.parentNode.removeChild(this.tabElem);
    this.workspaceElem.parentNode && this.workspaceElem.parentNode.removeChild(this.workspaceElem);
  }

  removeUnusedVariables() {
    if (!this.workspace) return;
    const allUsedVars = Blockly.Variables.allUsedVarModels(this.workspace);
    const allVars = this.workspace.getAllVariables();

    for(let varName of allVars) {
      if(!allUsedVars.includes(varName)) {
        varName.workspace.deleteVariableById(varName.getId())
      }
    }
  }

}