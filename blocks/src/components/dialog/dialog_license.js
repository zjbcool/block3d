import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style'


export class activeDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    .tip {
      margin-top: 12px;
      font-size: 14px;
      color: #858585;
    }
    .tip a {
      color: #e16531;
    }
    `]

  static properties = {
    lang: {},
    status: {},
    expires: {},
    leftdays: {},
  }

  constructor() {
    super()
    this.lang = 'zh'
    this.status = 'ACTIVE'
    this.expires = 0
    this.leftdays = 0
  }

  render() {
    const _this = this
    const data = {}
    data.header = _this.lang === 'zh' ? '激活码' : 'Active Key'
    data.activeTitle = _this.lang === 'zh' ? '输入激活码，去除广告' : 'Enter your active key to remove the ads'
    data.inactiveTitle = _this.lang === 'zh' ? '已激活！有效期截至' : 'Actived! valid until '
    data.activeButton = _this.lang === 'zh' ? '激活' : 'Active'
    data.inactiveButton = _this.lang === 'zh' ? '取消激活' : 'Inactive'
    data.activeExpiresTitle = _this.lang === 'zh' ? '已过期！有效期截至' : 'Expired! valid until '

    let dialog;
    let dialogGetKey;
    if (this.lang === 'zh') {
      dialogGetKey = html`
      <div class='tip'>没有激活码？<a href='https://shop.zjbcool.com/product-category/block3d/' target='_blank'>点此</a>获取</div>
      `
    } else {
      dialogGetKey = html`
      <div class='tip'>No active key? Click <a href='https://shop.zjbcool.com/product-category/block3d/' target='_blank'>here</a></div>
      `
    }
    // 未激活
    if (this.status !== 'ACTIVE') {
      dialog = html`
      <div class="dialog-text">${data.activeTitle}</div>
      <input type="text" class="input-text" id="activeCode" name="activeCode" value="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX">
      ${dialogGetKey}
      <input type="submit" value="${data.activeButton}" class="button" @click="${this.submitActiveCode}">
      `
    } else {
      // 已激活，未过期
      if ((Number(this.leftdays) > 0)) {
        dialog = html`
        <div class="dialog-text text-green">${data.inactiveTitle}${this.expires}</div>
        <input type="submit" value="${data.inactiveButton}" class="button" @click="${this.submitInactiveCode}"></input>
        `
      } else {
        // 已激活，过期->用于返回激活对话框
        dialog = html`
        <div class="dialog-text text-red">${data.activeExpiresTitle}${this.expires}</div>
        <input type="submit" value="${data.inactiveButton}" class="button" @click="${this.submitInactiveCode}">
        `
      }
    }

    return html`
  <div class="dialog-bg">
    <div class="dialog">
      <div class="dialog-header">
        <div class="dialog-header-text">${data.header}</div>
        <div class="dialog-header-close" @click="${this.close}">
        </div>
      </div>
      <div class="dialog-content">
        <form action="">${dialog}</form>
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
  getActiveKey() {
    return this.renderRoot.getElementById('activeCode').value
  }
  onactive() { }
  oninactive() { }
  /**
  * 提交激活激活码
  * @param {*} event 
  */
  submitActiveCode = event => {
    event.preventDefault()
    // todo: 节流，错误超过5次间隔30分钟
    this.onactive && this.onactive()
  }
  submitInactiveCode = event => {
    event.preventDefault()
    this.oninactive && this.oninactive()
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

customElements.define('license-dialog', activeDialog);