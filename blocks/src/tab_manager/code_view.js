// 显示代码
export class CodeView {
  constructor(elem) {
    this.elem = elem instanceof HTMLDivElement ? elem : document.querySelector(elem);
    this.lang = 'zh'
    this.isVisible = false
    this._isVisible = false
    this.editor = null
    window.addEventListener('resize', this._resize);
  }

  get isVisible() {
    return this._isVisible
  }
  /**
   * @param {boolean} flag 
   */
  set isVisible(flag) {
    if (flag) {
      this.elem.style.display = 'block'
      this._isVisible = true
    } else {
      this.elem.style.display = 'none'
      this._isVisible = false
    }
  }

  async createEditor() {
    this.editor = await this._create()
    return this.editor
  }
  /**
   * 创建代码编辑器
   * @param {HTMLDivElement} elem 
   * @returns IStandaloneCodeEditor
   */
  _create() {
    const _this = this
    return new Promise(resolve => {
      require.config({
        paths: {
          vs: '/js/monaco-editor/min/vs'
        },
        'vs/nls': {
          availableLanguages: { '*': 'zh-cn' }
        }
      });
      // 配置：https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorConstructionOptions.html
      const options = {
        value: '',
        language: 'javascript',
        fontSize: 18,
        tabSize: 2,
        readOnly: true,
        theme: 'vs-dark',
        scrollbar: {
          useShadows: false,
          vertical: 'hidden',
          horizontal: 'visible',
          verticalScrollbarSize: 0,
          horizontalScrollbarSize: 10,
        }
      }

      require(['vs/editor/editor.main'], (monaco) => {
        // 验证设置
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: false
        });
        // 编译选项
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.ES6,
          allowNonTsExtensions: true
        });
        // 创建编辑器
        resolve(monaco.editor.create(_this.elem, options));
      });

    })
  }

  resize() {
    this.isVisible && this.editor && this.editor.layout()
  }

  connectedCallback() {
    super.connectedCallback()
    addEventListener('resize', this._resize);
  }

  dispose() {
    this.editor && this.editor.dispose()
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.resize()
  }
}