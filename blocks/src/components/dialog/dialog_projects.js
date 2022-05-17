import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style'
import debounce from '../../util/debounce';

export class ProjectsDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    .flex-inline {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    .serach-input {
      height: 32px;
      width: 120px;
      box-sizing: border-box;
      font-size: inherit;
      padding: 2px;
      color: var(--color);
      border: var(--border);
      background-color: rgb(12, 12, 12);
      text-overflow: ellipsis;
    }
    .textarea {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      word-break: break-all;
      overflow-y: auto;
      overflow-x: hidden;
      border: var(--border);
      padding: 6px;
    }

    .dropdown {
      width: 100%;
      box-sizing: border-box;
      font-size: inherit;
      padding: 5px;
      color: var(--color);
      border: var(--border);
      background-color: #0c0c0c;
      text-overflow: ellipsis;
      overflow-y: auto;
    }

    `]

  static properties = {
    lang: {},
    projects: {},
    projectName: {},
    isNewWindow: {},
    detail: {}
  }
  /**
   * 打开项目
   * @param {string} lang 语言
   * @param {string} projectName 项目名称
   * @param {boolean} isNewWindow 新窗口打开
   * @param {string} detail 项目描述，readme.txt
   */
  constructor() {
    super()
    this.lang = 'zh'
    this.projects = []
    this.orignProjects = null
    this.projectName = 'defaultProject'
    this.isNewWindow = false
    this.detail = this.lang === 'zh' ? '无' : 'nothing'
  }

  render() {
    const _this = this
    const data = {}
    data.header = _this.lang === 'zh' ? '打开项目' : 'Open Project'
    data.projectName = _this.lang === 'zh' ? '所有项目:' : 'Projects:'
    data.description = _this.lang === 'zh' ? '描述:' : 'Description:'
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
            <div class="flex-inline">
              <div class="dialog-text">${data.projectName}</div>
              <input id="serachInput" class="serach-input" type="text" placeholder="${this.lang == 'zh' ? '搜索' : 'serach'}" @input="${debounce(200, true, _this._serach)}">
            </div>
            <span>
              <select name="selectedProjectName" class="dropdown" size=10 @change="${this._getSelected}">
                ${this.projects.map(project => html`<option value="${project}" @dblclick="${this._submite}">${project}</option>`)}
              </select>
            </span>

            <div id="description" class="dialog-text">${data.description}</div>
            <div id="detail" class="textarea"></div>

            <div class="dialog-text">${data.option}</div>
            <div class="dialog-content">
              <label for="openInNewWindow">
                <input type="checkbox" class="checkbox" ?checked=${this.isNewWindow} name="openInNewWindow" id="openInNewWindow" @click="${() => this.isNewWindow = !this.isNewWindow}">
                <span>${data.openInNewWindow}</span>
              </label>
            </div>
            <input type="submit" value="${this.lang == 'zh' ? '打开' : 'Open'}" class="button" @click="${this._submite}">
          </form>
        </div>
      </div>
    </div>`
  }
  firstUpdated() {
    this.orignProjects = this.projects;
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
  _getSelected = async e => {
    this.projectName = e.target.value
    const projectName = e.target.value
    const detailElem = this.renderRoot.getElementById('detail')
    // 从readme.md加载描述
    const fetchReadme = await fetch('/api/readme', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName })
    })
    const result = await fetchReadme.text()
    if (result)
      detailElem.innerHTML = result
    else
      detailElem.innerHTML = this.lang === 'zh' ? '无' : 'nothing'
  }
  _serach = e => {
    const inputStr = e.target.value.trim();
    this.projects = this._getSearchResult(inputStr);
    if (!inputStr) this.projects = this.orignProjects
  }

  _getSearchResult(inputStr) {
    const results = [];
    for (let project of this.projects) {
      const isAt = project.includes(inputStr);
      isAt && results.push(project);
    }
    return results
  }

  onsubmit() { }
  _submite = e => {
    e.preventDefault()
    this.onsubmit()
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

customElements.define('projects-dialog', ProjectsDialog);