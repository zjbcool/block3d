import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style';
import buttonIcon from '../../media/button.svg';

export class SettingsDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    .title-info {
      color: #808080;
    }
    .dialog-select-folder {
      position: absolute;
      right: 18px;
      background: center / contain no-repeat url(/media/folder.svg);
      width: 22px;
      height: 36px;
      display: inline-block;
      cursor: pointer;
      display: none;
    }
    `]

  static properties = {
    lang: {},
    host: {},
    port: {},
    projects: {},
    autoopen: {},
    save: {},
    external: {},
  }

  constructor() {
    super()
    this.lang = 'zh'
    this.host = 'localhost'
    this.port = '3001'
    this.projects = './projects'
    this.autoopen = 'false'
    this.save = 'false'
    this.external = 'false'
  }

  render() {
    const _this = this
    const data = {}
    data.header = _this.lang === 'zh' ? '设置' : 'Settings'
    data.host = _this.lang === 'zh' ? '主机' : 'HOST'
    data.hostTitle = _this.lang === 'zh' ? '设置主机地址' : 'Sets the host'
    data.port = _this.lang === 'zh' ? '端口' : 'PORT'
    data.portTitle = _this.lang === 'zh' ? '设置端口' : 'Sets the port'
    data.projectsDir = _this.lang === 'zh' ? '项目路径' : 'Projects directory'
    data.projectsTitle = _this.lang === 'zh' ? '设置项目文件夹所在的位置' : 'Sets the location of the projects folder'
    data.option = _this.lang === 'zh' ? '选项' : 'Option'
    data.autoOpen = _this.lang === 'zh' ? '自动打开' : 'Auto open'
    data.autoOpenTitle = _this.lang === 'zh' ? '运行Block3D时自动打开浏览器' : 'Open the browser automatically when Block3D starts'
    data.autoSave = _this.lang === 'zh' ? '自动保存' : 'Auto save'
    data.autoSaveTitle = _this.lang === 'zh' ? '每隔5分钟保存工作区' : 'Save the workspace every 5 minutes'
    data.externalServerInterface = _this.lang === 'zh' ? '开启外部服务器接口' : 'Enable external server interface'
    data.externalServerInterfaceTitle = _this.lang === 'zh' ? '用于在移动浏览器上测试应用' : 'Used for testing app on Mobile Browsers'
    data.info = _this.lang === 'zh' ? '注：重启生效' : 'Tips: need restart'

    return html`
<div class="dialog-bg d-flex">
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">${data.header}</div>
      <div class="dialog-header-close" @click="${_this.close}">
      </div>
    </div>
    <div class="dialog-content">
      <form action="">
        <div class="dialog-text">${data.host}</div>
        <span title="${data.hostTitle}">
          <input type="text" class="input-text" id="setHost" name="setHost" .value=${this.host}>
        </span>
        <div class="dialog-text">${data.port}</div>
        <span title="${data.portTitle}">
          <input type="text" class="input-text" id="setPort" name="setPort" .value=${this.port}>
        </span>
        <div class="dialog-text">${data.projectsDir}</div>
        <span title="${data.projectsTitle}">
          <input type="text" class="input-text" id="setProjectsFolder" name="setProjectsFolder" .value=${this.projects}>
          <div id="dialog-select-folder" class="dialog-select-folder"></div>
        </span>
        <div class="dialog-text">${data.option}</div>
        <div class="dialog-content">
          <label for="open">
            <input type="checkbox" class="checkbox" ?checked=${this.autoopen == 'true'} name="open" id="open">
            <span title="${data.autoOpenTitle}">${data.autoOpen}</span>
          </label>
          <label for="save">
            <input type="checkbox" class="checkbox" ?checked=${this.save == 'true'} name="save" id="save">
            <span title="${data.autoSaveTitle}">${data.autoSave}</span>
          </label>
          <label for="enableExternalServerInterface">
            <input type="checkbox" class="checkbox" ?checked=${this.external == 'true'} name="enableExternalServerInterface" id="enableExternalServerInterface">
            <span title="${data.externalServerInterfaceTitle}">${data.externalServerInterface}</span>
          </label>
        </div>
        <p class="title-info">${data.info}</p>
        <input type="submit" value="OK" class="button" @click="${this._submitAppSettings}">
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
  /**
   * 提交设置
  */
  _submitAppSettings = async event => {
    event.preventDefault();
    const _this = this;
    const setting = {
      APP_HOST: _this.renderRoot.getElementById('setHost').value,
      APP_PORT: _this.renderRoot.getElementById('setPort').value,
      PROJECTS_FOLDER: _this.renderRoot.getElementById('setProjectsFolder').value,
      AUTO_OPEN: _this.renderRoot.getElementById('open').checked,
      AUTO_SAVE: _this.renderRoot.getElementById('save').checked,
      EXTERNAL_SERVER: _this.renderRoot.getElementById('enableExternalServerInterface').checked,
    }

    const fetchSettings = await fetch('/api/settings', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setting)
    });
    const rep = await fetchSettings.text();
    if (rep === 'ok') {
      _this.style.display = 'none'
    }
  }
  /**
   * 自动保存
   * @param {object} workspaceData 工作区数据
   * @param {number} minutes 自动保存间隔，分钟
   */
  autoSave(workspaceData, minutes) {
    if (this.save == 'true') {
      setInterval(async () => {
        await fetch('/api/autosave', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(workspaceData)
        })
      }, minutes * 60 * 1000);
    }

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

customElements.define('settings-dialog', SettingsDialog);