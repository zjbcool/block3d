import { LitElement, html, css } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js';
import { dialogStyle } from '../dialog_style'

export class PublishDialog extends LitElement {
  static styles = [
    dialogStyle,
    css`
    :host {
      display: none;
    }
    .content-box {
      padding: 10px;
      border: var(--border);
      overflow-x: hidden;
      overflow-y: auto;
      max-height: 160px;
      display: flex;
      flex-flow: column nowrap;
      user-select: none;
    }
    `]

  static properties = {
    lang: {},
  }

  constructor() {
    super()
    this.lang = 'zh'
  }

  langRef = createRef()
  enableBabylonRef = createRef()
  enableLoadersRef = createRef()
  enablePepRef = createRef()
  enableGUIRef = createRef()
  enableTweakpaneRef = createRef()
  titleRef = createRef()
  iconRef = createRef()
  descRef = createRef()
  minifyRef = createRef()

  render() {
    const _this = this
    const data = {}
    data.header = _this.lang === 'zh' ? '发布' : 'Publish'
    data.modules = _this.lang === 'zh' ? '模块:' : 'Modules:'
    data.moduleBabylonTitle = _this.lang === 'zh' ? '核心模块' : 'The core module'
    data.enableGLTF2FielLoaderTitle = _this.lang === 'zh' ? '用于加载.glTF/.glb文件' : 'Allows you to load .glTF/.glb type file'
    data.enableObjFileLoaderTitle = _this.lang === 'zh' ? '用于加载.obj文件' : 'Allows you to load .obj type file'
    data.enableStlFileLoaderTitle = _this.lang === 'zh' ? '用于加载.stl文件' : 'Allows you to load .stl type file'
    data.modulePepTitle = _this.lang === 'zh' ? '用于兼容触屏设备' : 'Allows you to use a touch screen'
    data.moduleGuiTitle = _this.lang === 'zh' ? '用于创建用户界面' : 'Used for creating  user interface'
    data.moduleTweakpaneTitle = _this.lang === 'zh' ? '用于生成参数调试面板' : 'A compact pane library for fine-tuning parameters and monitoring value changes'
    data.app = _this.lang === 'zh' ? '应用:' : 'App:'
    data.lang = _this.lang === 'zh' ? '语言' : 'Language'
    data.appLang = _this.lang === 'zh' ? 'zh-CN' : 'en'
    data.appTitle = _this.lang === 'zh' ? '标题' : 'Title'
    data.appIcon = _this.lang === 'zh' ? '图标' : 'Icon'
    data.appDescription = _this.lang === 'zh' ? '描述' : 'Description'
    data.appDescriptionContent = _this.lang === 'zh' ? 'Block3D是一款低代码Web3D应用开发工具' : 'Block3d is a Low-Code Web3D app development tool'
    data.build = _this.lang === 'zh' ? '构建:' : 'Build:'
    data.minify = _this.lang === 'zh' ? '压缩JS文件' : 'Minify JS file'

    return html`
<div class="dialog-bg" id="publishDialog">
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-header-text">${data.header}</div>
      <div class="dialog-header-close" @click="${this.close}">
      </div>
    </div>
    <div class="dialog-content">
      <form action="">
        <div class="dialog-text">${data.modules}</div>
        <div class="content-box">
          <label for="enableBabylon" title="${data.moduleBabylonTitle}">
            <input type="checkbox" class="checkbox" name="enableBabylon" checked disabled id="enableBabylon">
            <span>Babylon</span>
          </label>
          <label for="enablePep" title="${data.modulePepTitle}">
          <input type="checkbox" class="checkbox" name="enablePep" checked id="enablePep">
          <span>PEP</span>
          </label>
          <label for="enableGLTF2FielLoader" title="${data.enableGLTF2FielLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableGLTF2FielLoader" id="enableGLTF2FielLoader">
            <span>glTF 2.0 Loader</span>
          </label>
          <label for="enableObjFileLoader" title="${data.enableObjFileLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableObjFileLoader" id="enableObjFileLoader">
            <span>Obj Loader</span>
          </label>
          <label for="enableStlFileLoader" title="${data.enableStlFileLoaderTitle}">
            <input type="checkbox" class="checkbox" name="enableStlFileLoader" id="enableStlFileLoader">
            <span>Stl Loader</span>
          </label>
          <label for="enableGUI" title="${data.moduleGuiTitle}">
            <input type="checkbox" class="checkbox" name="enableGUI" id="enableGUI">
            <span>GUI</span>
          </label>
          <label for="enableTweakpane" title="${data.moduleTweakpaneTitle}">
            <input type="checkbox" class="checkbox" name="enableTweakpane" id="enableTweakpane">
            <span>TweakPane</span>
          </label>
        </div>

        <div class="dialog-text">${data.app}</div>
        <div class="content-box">
          <div class="dialog-row">
            <label for="indexLang" class="${this.lang === 'zh' ? 'dialog-text w-40' : 'dialog-text w-100'}">
              ${data.lang}
            </label>
            <input ${ref(this.langRef)} type="text" class="input-text" value="${data.appLang}" name="indexLang">
          </div>
          <div class="dialog-row">
            <label for="indexTitle" class="${this.lang === 'zh' ? 'dialog-text w-40' : 'dialog-text w-100'}">
              ${data.appTitle}
            </label>
            <input ${ref(this.titleRef)} type="text" class="input-text" value="Block3D" name="indexTitle" id="indexTitle">
          </div>
          <div class="dialog-row">
            <label for="indexIcon" class="${this.lang === 'zh' ? 'dialog-text w-40' : 'dialog-text w-100'}">
              ${data.appIcon}
            </label>
            <input ${ref(this.iconRef)} type="text" class="input-text" value="./assets/media/logo.svg" name="indexIcon" id="indexIcon">
          </div>
          <div class="dialog-row">
            <label for="indexDescription" class="${this.lang === 'zh' ? 'dialog-text w-40' : 'dialog-text w-100'}">
              ${data.appDescription}
            </label>
            <input ${ref(this.descRef)} type="text" class="input-text" value="${data.appDescriptionContent}"
              name="indexDescription" id="indexDescription">
          </div>
        </div>

        <div class="dialog-text">${data.build}</div>
        <div class="dialog-content">
          <label for="enableMinifyJSFile" title="${data.minify}">
            <input ${ref(this.minifyRef)} type="checkbox" class="checkbox" name="enableMinifyJSFile" id="enableMinifyJSFile">
            <span>
              ${data.minify}
            </span>
          </label>
        </div>

        <input type="submit" value="OK" class="button" @click="${this._submit}">
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

  getInput() {
    // 要加载的模块
    const enableBabylon = this.renderRoot.getElementById('enableBabylon').checked;
    const enablePep = this.renderRoot.getElementById('enablePep').checked;
    const enableGLTF2FielLoader = this.renderRoot.getElementById('enableGLTF2FielLoader').checked;
    const enableObjFileLoader = this.renderRoot.getElementById('enableObjFileLoader').checked;
    const enableStlFileLoader = this.renderRoot.getElementById('enableStlFileLoader').checked;
    const enableGUI = this.renderRoot.getElementById('enableGUI').checked;
    const enableTweakpane = this.renderRoot.getElementById('enableTweakpane').checked;
    // inex.html 语言
    const indexLang = this.langRef.value.value;
    // inex.html 标题
    const indexTitle = this.titleRef.value.value;
    // index.html 图标
    const indexIcon = this.iconRef.value.value;
    // index.html 描述
    const indexDescription = this.descRef.value.value;
    // 压缩JS文件
    const enableMinifyJSFile = this.minifyRef.value.checked;
    // options
    return {
      lang: indexLang,
      title: indexTitle,
      icon: indexIcon,
      description: indexDescription,
      modules: [
        {
          enabled: enableBabylon,
          module: 'babylon.js'
        },
        {
          enabled: enablePep,
          module: 'pep.min.js'
        },
        {
          enabled: enableGLTF2FielLoader,
          module: 'babylon.glTF2FileLoader.min.js'
        },
        {
          enabled: enableObjFileLoader,
          module: 'babylon.objFileLoader.min.js'
        },
        {
          enabled: enableStlFileLoader,
          module: 'babylon.stlFileLoader.min.js'
        },
        {
          enabled: enableGUI,
          module: 'babylon.gui.min.js'
        },
        {
          enabled: enableTweakpane,
          module: 'tweakpane-3.0.7.min.js'
        },
      ],
      enableMinifyJSFile: enableMinifyJSFile,
    }
  }
  /**
   * 发布
   */
  _submit = async (e) => {
    e.preventDefault();
    this.onsubmit && this.onsubmit();
  }
  onsubmit() { }

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

customElements.define('publish-dialog', PublishDialog);