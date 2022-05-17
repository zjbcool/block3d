import { LitElement, html, css } from 'lit'

export class TabDialog extends LitElement {
  static styles = css`
  .dialog-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .dialog {
    color: var(--color);
    background-color: #1e1e1e;
    min-width: 350px;
    max-width: 800px;
    max-height: 600px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 15px black);
  }
  .dialog-header {
    width: 100%;
    height: 20px;
    background-color: var(--bg);
    display: flex;
    align-items: center;
  }
  .dialog-header-text {
    color: var(--color);
    font-size: 12px;
    padding-left: 10px;
    user-select: none;
  }
  .dialog-header-close {
    background-image: url(../media/close.svg);
    background-repeat: no-repeat;
    width: 16px;
    height: 14px;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
  }
  .dialog-content {
    padding: 10px;
    border: var(--border);
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 560px;
    display: flex;
    flex-flow: column nowrap;
    user-select: none;
  }
  .input-text {
    height: 30px;
    width: 316px;
    font-size: inherit;
    padding: 2px 5px;
    color: var(--color);
    border: var(--border);
    background-color: #0c0c0c;
  }
  .dialog-row {
    display: flex;
    flex-flow: row nowrap;
    margin: 2px 0;
  }
  
  .dialog-text {
    margin: 5px 0;
    vertical-align: middle;
    flex: 0 0 auto;
  }
  .button {
    border: none;
    color: var(--color);
    background-color: var(--bg);
    height: 32px;
    font-size: inherit;
    display: block;
    min-width: 100px;
    padding: 0px 15px;
    margin: 20px auto 10px auto;
    cursor: pointer;
  }

  .w-100 {
    width: 100px;
  }

  .w-40 {
    width: 40px;
  }
  
  .hide {
    visibility: hidden;
  }
  
  .show {
    visibility: visible;
  }
  `
  static properties = {
    lang: {},
    isVisible: {},
    options: {}
  }
  constructor() {
    super();
    this.lang = 'zh';
    this.isVisible = false;
    this.options = {};
  }
  render() {
    return html`
<div id="createTabDialog" class=${this.isVisible ? 'dialog-bg show' : 'dialog-bg hide'}>
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">
        ${this.lang == 'zh' ? '新建选项卡' : 'create tab'}
      </div>
      <div class="dialog-header-close" @click=${() => this.display(false)}>
      </div>
    </div>
      <form action="" id="createTabForm" class="dialog-content" @submit="${this._onsubmit}">
        <div class="dialog-text">
          ${this.lang == 'zh' ? '标题：' : 'Title:'}
        </div>
        <span title="${this.lang == 'zh' ? '选项卡标题' : 'The title of the tab'}">
          <input type="text" class="input-text" id="tabTitle" name="tabTitle" value="title">
        </span>

        <div class="dialog-text">
          ${this.lang == 'zh' ? '编辑器类型：' : 'Editor Type:'}
        </div>
        <div class="dialog-content" id="tabTypeSelector">
          <div>
            <input type="radio" checked value="block" name="tabType" id="blockType">
            <label for="blockType">
              ${this.lang == 'zh' ? '拼图' : 'Block'}
            </label>
          </div>
          <div>
            <input type="radio" value="code" name="tabType" id="codeType">
            <label for="codeType">
              ${this.lang == 'zh' ? '代码' : 'Code'}
            </label>
          </div>
        </div>

        <input type="submit" value="OK" class="button" id="submitTab">
      </form>
  </div>
</div>
    `
  }

  display(isVisible) {
    this.isVisible = isVisible;
  }

  getData() { }
  _onsubmit = e => {
    e.preventDefault();
    const _this = this;
    const data = new FormData(e.target);
    for (const entry of data) {
      _this.options[entry[0]] = entry[1];
    };
    this.getData(_this.options)
  }

  connectedCallback() {
    super.connectedCallback()
    addEventListener('keydown', this._onclose);
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this._onclose);
  }

  _onclose = e => {
    if (e.key === 'Escape') this.display(false)
  }
}

customElements.define('tab-dialog', TabDialog);