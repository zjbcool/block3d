import { LitElement, html, css } from 'lit';
import { dialogStyle } from './dialog_style'

export class EditorFooter extends LitElement {
  static styles = [
    dialogStyle,
    css`
    * {
      margin: 0;
      padding: 0;
    }
    :host {
      width: 100%;
      height: 22px;
      padding: 0 6px;
      background-color: var(--bg);
      color: var(--color);
      display: inline-flex;
      justify-content: space-between;
      border-top: var(--border);
      z-index: 100;
    }
    .info {
      font-size: 14px;
      color: #eee;
    }
    .footer-left {
      min-width: 100px;
    }
    .footer-middle {
      min-width: 100px;
    }
    .footer-right {
      min-width: 100px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: end;
      gap: 10px;
      user-select: none;
    }
    .copyright {
      color: #858585;
      user-select: none;
    }
    #clearInfo {
      cursor: pointer;
    }
    #playbackControl {
      cursor: pointer;
    }
    .icon-center {
      display: flex;
      align-items: center;
    }
    .w-68 {
      width: 68px;
    }
  `]

  static properties = {
    info: {},
    fps: {},
    running: {},
    lang: {}
  };

  constructor() {
    super();
    this.info = '';
    this.fps = '';
    this.running = true;
    this.lang = 'zh'
  }

  getYear() {
    return new Date().getFullYear()
  }

  render() {
    const copyright = this.lang === 'zh' ? `版权所有© 2022-${this.getYear()} 宅家呗` : `Copyright © 2022-${this.getYear()} zjbku`
    return html`
  <div class="footer-left">
    <p class="copyright">${copyright}</p>
  </div>
  <div class="footer-middle">
    <i class="info">${this.info}</i>
  </div>
  <div class="footer-right">
    <div id="clearInfo" class="icon-center" title=${this.lang == 'zh' ? '清空信息' : 'clear info'}>
      <img @click="${this._clearInfo}" src="/media/clear-info.svg" alt="clear">
    </div>
    <div id="playbackControl" class="icon-center">
      <img @click="${this._playback}" src=${this.running ? "/media/pause.svg" : "/media/play.svg"} alt="playback">
    </div>
    <p class="w-68">FPS:<span>${this.fps}</span></p>
  </div>
    `
  }
  _clearInfo() {
    this.info = ''
  }
  playback() { }
  _playback = () => {
    this.playback && this.playback()
  }
}

customElements.define('editor-footer', EditorFooter);