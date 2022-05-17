import { utils } from 'blockly';

export class CodeTab {
  constructor(title) {
    this.title = title;
    this.id = utils.idGenerator.genUid();
    this.tabElem = document.createElement('li');
    this.tabElem.className = 'tab-item';
    this.tabElem.title = title;
    this.tabElem.dataset['uid'] = this.id;
    this.tabElem.innerText = this.title;
    this.editor = null;
    this.editorElem = null;
    this.type = 'code';
  }
  /**
   * 聚焦当前选项卡
   * @param {boolean} isFocus 
   */
  focus(isFocus) {
    if (this.editor && this.editorElem) {
      this.editorElem.className = isFocus ? 'workspace-container show' : 'workspace-container hide';
      isFocus ? (this.tabElem.classList.add('tab-active'), this.editor.focus()) : this.tabElem.className = 'tab-item';
    }
  }
  /**
   * 设置编辑器代码内容
   * @param {string} value js代码
   */
  setValue(value) {
    if (!this.editor) return;
    this.editor.setValue(value);
  }

  getValue() {
    if (!this.editor) return;
    return this.editor.getValue();
  }

  save() {
    const _this = this;
    const code = this.editor.getValue();
    return {
      title: _this.title,
      id: _this.id,
      type: _this.type,
      data: code,
      js: code
    }
  }
  resize() {
    this.editor && this.editor.layout();
  }
  onBeforeDispose() { }
  dispose() {
    this.onBeforeDispose && this.onBeforeDispose();
    this.editor && this.editor.dispose();
    this.editor = null;

    this.tabElem.parentNode && this.tabElem.parentNode.removeChild(this.tabElem);
    this.editorElem.parentNode && this.editorElem.parentNode.removeChild(this.editorElem);
  }
}