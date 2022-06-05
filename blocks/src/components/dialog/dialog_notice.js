import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style'

export class noticeDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    .dialog-title {
      color: #e16531;
      font-size: 18px;
      font-weight: 800;
    }
    .color-link {
      color: #e16531;
    }`]

  static properties = {
    lang: {},
    latestVersion: {},
    releaseDate: {},
  }

  constructor() {
    super()
    this.lang = 'zh'
    this.currentVersion = ''
    this.latestVersion = ''
    this.releaseDate = ''
  }

  render() {
    const _this = this;
    let date = new Date(_this.releaseDate)
    date = _this.releaseDate ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` : ''

    const data = {
      header: _this.lang === 'zh' ? `消息` : `info`,
      currentVersion: _this.lang === 'zh' ? `当前版本：${_this.currentVersion}` : `Current Version: ${_this.currentVersion}`,
      latestVersion: _this.lang === 'zh' ? `最新版本：` : `Latest Version: `,
      releaseDate: _this.lang === 'zh' ? `发布日期：${date}` : `Release Date: ${date}`,
      downloadLink: `https://github.com/zjbcool/block3d/releases/download/${_this.latestVersion}/block3d-${_this.latestVersion}.zip`,
      changelog: _this.lang === 'zh' ? `更新日志：` : `Changelog: `,
    }
    return html`
  <div class="dialog-bg d-flex">
    <div class="dialog">
      <div class="dialog-header">
        <div class="dialog-header-text">${data.header}</div>
        <div class="dialog-header-close" @click="${this.close}">
        </div>
      </div>
      <div class="dialog-content">
        <div class="d-flex">
          <div class="w-50"><svg t="1654140174333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5284" width="40" height="40"><path d="M882.8 252L515.5 509.3 147.8 251.8c-20.3-14.2-48.5-9.2-62.7 11.1s-9.2 48.5 11.1 62.7l393.2 275.3c0.3 0.2 0.7 0.4 1.1 0.6 1.6 1 3.2 1.9 4.9 2.7 0.9 0.4 1.7 0.9 2.6 1.3 2.3 1 4.7 1.7 7.2 2.3 0.2 0.1 0.4 0.1 0.7 0.2 11.9 2.6 24.8 0.6 35.4-6.9l393.2-275.3c20.3-14.2 25.2-42.4 11.1-62.7-14.3-20.3-42.5-25.3-62.8-11.1z" fill="#6f6f6f" p-id="5285"></path><path d="M842 182H182c-66.3 0-120 53.7-120 120v420c0 66.3 53.7 120 120 120h660c66.3 0 120-53.7 120-120V302c0-66.3-53.7-120-120-120z m30 510c0 33.1-26.9 60-60 60H212c-33.1 0-60-26.9-60-60V332c0-33.1 26.9-60 60-60h600c33.1 0 60 26.9 60 60v360z" fill="#6f6f6f" p-id="5286"></path></svg></div>
          <div class="dialog-text-wrap">
            <div class="dialog-text">${data.currentVersion}</div>
            <div class="dialog-text">
              ${data.latestVersion}<a class="color-link" href=${data.downloadLink} download>${_this.latestVersion}</a>
            </div>
            <div class="dialog-text">${data.releaseDate}</div>
            <div class="dialog-text">
              ${data.changelog}<a class="color-link" href="https://zjbku.com/changelog/" target="_blank">https://zjbku.com/changelog/</a>
            </div>
          </div>
        </div>
        <input type="button" value="OK" class="button" @click="${this.close}">  
      </div>
    </div>
  </div>
    `
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

customElements.define('notice-dialog', noticeDialog);