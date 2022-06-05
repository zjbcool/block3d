import { LitElement, html, css } from 'lit'
import { dialogStyle } from '../dialog_style'

export class AboutDialog extends LitElement {
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
    }
    `]

  static properties = {
    lang: {},
    version: {},
  }

  constructor() {
    super()
    this.lang = 'zh'
    this.version = ''
    this.babylon = ''
    this.blockly = ''
  }

  render() {
    const _this = this;
    const data = {
      header: _this.lang === 'zh' ? '关于' : 'About',
      version: _this.lang === 'zh' ? `版本：${_this.version}` : `Version: ${_this.version}`,
      author: _this.lang === 'zh' ? '作者：宅家呗' : 'Author: zjbku',
      website: _this.lang === 'zh' ? '网站：' : 'Website: ',
      email: _this.lang === 'zh' ? '邮箱：block3d@163.com' : 'E-mail: block3d@163.com',
      discussions: _this.lang === 'zh' ? '讨论: ' : 'Discussions:',
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
          <div class="w-50"><svg t="1646631541330" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6392" width="40" height="40"><path d="M505.969657 60.977793C256.882602 64.310701 57.666374 268.965801 60.97984 518.071276c3.331885 248.990864 207.968565 448.263373 457.054597 444.950931 249.049193-3.351328 448.298166-208.006428 444.9847-457.092459-3.331885-249.010307-207.981868-448.27463-457.04948-444.951955z m50.00488 150.312424c45.849234 0 59.388599 26.612101 59.388599 57.024761 0 38.015825-30.432103 73.15923-82.33317 73.15923-43.436278 0-64.100924-21.861914-62.893423-57.952899 0-30.422893 25.491581-72.231091 85.837994-72.231092zM438.421214 793.912671c-31.331589 0-54.29458-19.006889-32.366151-102.633518l35.947723-148.310838c6.243191-23.76731 7.297197-33.265638 0-33.265637-9.403161 0-50.081629 16.412808-74.097602 32.575929l-15.666818-25.663496c76.224032-63.650669 163.881464-100.987019 201.456245-100.987019 31.332612 0 36.542264 37.059034 20.894889 94.073562l-41.175794 155.912979c-7.297197 27.559683-4.155646 37.058011 3.121083 37.058011 9.423627 0 40.219004-11.4334 70.478168-35.20071l17.754363 23.76731c-74.136487 74.118068-155.032936 102.673427-186.346106 102.673427z" p-id="6393" fill="#6f6f6f"></path></svg></div>
          <div class="dialog-text-wrap">
            <div class="dialog-title">Block3D</div>
            <div class="dialog-text">${data.version}</div>
            <div class="dialog-text">${data.author}</div>
            <div class="dialog-text">${data.website}<a class="text-light" target="_blank" href="https://www.zjbku.com">https://zjbku.com</a></div>
            <div class="dialog-text">${data.email}</div>
            <div class="dialog-text d-flex">${data.discussions}&nbsp;<a class="text-light" target="_blank" href="https://github.com/zjbcool/block3d/discussions"><svg t="1647767915949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9384" width="26" height="26"><path d="M511.542857 14.057143C228.914286 13.942857 0 242.742857 0 525.142857 0 748.457143 143.2 938.285714 342.628571 1008c26.857143 6.742857 22.742857-12.342857 22.742858-25.371429v-88.571428c-155.085714 18.171429-161.371429-84.457143-171.771429-101.6C172.571429 756.571429 122.857143 747.428571 137.714286 730.285714c35.314286-18.171429 71.314286 4.571429 113.028571 66.171429 30.171429 44.685714 89.028571 37.142857 118.857143 29.714286 6.514286-26.857143 20.457143-50.857143 39.657143-69.485715-160.685714-28.8-227.657143-126.857143-227.657143-243.428571 0-56.571429 18.628571-108.571429 55.2-150.514286-23.314286-69.142857 2.171429-128.342857 5.6-137.142857 66.4-5.942857 135.428571 47.542857 140.8 51.771429 37.714286-10.171429 80.8-15.542857 129.028571-15.542858 48.457143 0 91.657143 5.6 129.714286 15.885715 12.914286-9.828571 76.914286-55.771429 138.628572-50.171429 3.314286 8.8 28.228571 66.628571 6.285714 134.857143 37.028571 42.057143 55.885714 94.514286 55.885714 151.2 0 116.8-67.428571 214.971429-228.571428 243.314286a145.714286 145.714286 0 0 1 43.542857 104v128.571428c0.914286 10.285714 0 20.457143 17.142857 20.457143 202.4-68.228571 348.114286-259.428571 348.114286-484.685714 0-282.514286-229.028571-511.2-511.428572-511.2z" p-id="9385" fill="#bfbfbf"></path></svg></a></div>
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

customElements.define('about-dialog', AboutDialog);