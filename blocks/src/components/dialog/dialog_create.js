import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style'


export class CreateDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    textarea {
      display: block;
      resize: none;
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      background: #0c0c0c;
      color: var(--color);
      border: var(--border);
    }
    `]

  static properties = {
    lang: {},
    projectName: {},
    description: {},
    isNewWindow: {}
  }

  constructor() {
    super()
    this.lang = 'zh'
    this.projectName = 'my-project'
    this.description = ''
    this.isNewWindow = false
  }

  render() {
    const _this = this
    const data = {}
    data.header = _this.lang === 'zh' ? '新建项目' : 'New Project'
    data.projectName = _this.lang === 'zh' ? '项目名称:' : 'Project Name:'
    data.projectNameTitle = _this.lang === 'zh' ? '用于项目文件夹' : 'Name used for project directory'
    data.description = _this.lang === 'zh' ? '描述:' : 'Description:'
    data.defaultDesc = _this.lang === 'zh' ? '描述性文字...' : 'Comment text...'
    data.option = _this.lang === 'zh' ? '选项:' : 'Option:'
    data.openInNewWindow = _this.lang === 'zh' ? '在新窗口打开' : 'Open in New Window'

    return html`
    <div class="dialog-bg">
      <div class="dialog">
        <div class="dialog-header">
          <div class="dialog-header-text">${data.header}</div>
          <div class="dialog-header-close" @click="${this.close}"></div>
        </div>
        <div class="dialog-content">
          <form action="">
            <div class="dialog-text">${data.projectName}</div>
            <span title="${data.projectNameTitle}">
              <input type="text" class="input-text" id="projectName" name="project">
            </span>

            <div class="dialog-text">${data.description}</div>
            <textarea id="projectDescription" name="desc" placeholder="${data.defaultDesc}"></textarea>

            <div class="dialog-text">${data.option}</div>
            <div class="dialog-content">
              <label for="openInNewWindow">
                <input type="checkbox" class="checkbox" id="openInNewWindow" name="openInNewWindow">
                <span>${data.openInNewWindow}</span>
              </label>
            </div>
            <input type="submit" value="OK" class="button" @click="${this._submite}">
          </form>
        </div>
      </div>
    </div>`
  }

  onclose() { }
  close() {
    this.style.display = 'none'
    this.onclose()
  }
  onopen() { }
  open() {
    this.style.display = 'block'
    this.onopen()
  }

  onsubmit() { }
  _submite = e => {
    e.preventDefault()
    this.projectName = this.renderRoot.querySelector('#projectName').value
    this.description = this.renderRoot.querySelector('#projectDescription').value
    this.isNewWindow = this.renderRoot.querySelector('#openInNewWindow').checked
    this.onsubmit && this.onsubmit()
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
    if (e.key === 'Escape') this.close()
  }
}

customElements.define('create-dialog', CreateDialog);