import { LitElement, html, css } from 'lit';
import { dialogStyle } from './dialog_style'

export class LoadingScreen extends LitElement {
  static styles = [
    dialogStyle,
    css`
    .load8 .loader,
    .load8 .loader:after {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
    }
    .load8 .loader {
      margin: 60px auto;
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: 1.1em solid rgba(255, 255, 255, 0.2);
      border-right: 1.1em solid rgba(255, 255, 255, 0.2);
      border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
      border-left: 1.1em solid #ffffff;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load8 1.1s infinite linear;
      animation: load8 1.1s infinite linear;
    }
    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `]

  render() {
    return html`
  <div class="dialog-bg load8">
    <div class="loader"></div>
  </div>
    `
  }
  close() {
    this.style.display = 'none'
  }
  open() {
    this.style.display = 'block'
  }
}

customElements.define('loading-screen', LoadingScreen);