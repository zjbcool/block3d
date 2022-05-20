import {
  inject,
  Themes
} from 'blockly';
import { CodeTab } from './code_tab';
import { BlockTab } from './block_tab';
import { EventDispatcher } from './event_dispatcher';
import toolboxMain from '../category/toolbox_main';
// import setLocale from '../msg/set_locale';

/**
 * 管理选项卡/工作区
 */
class TabManager extends EventDispatcher {
  /**
   * 带选项卡的工作区
   * @param {HTMLDivElement | string} editorContainer 容器
   * @param {string} lang 语言
   */
  constructor(editorContainer, lang) {
    super();
    this.editorContainer = editorContainer instanceof HTMLDivElement ? editorContainer : document.querySelector(editorContainer);
    this.editorContent = document.createElement('div');
    this.editorTab = document.createElement('div');

    this.tabContainer = document.createElement('ul');
    // 语言
    this.lang = lang ? lang : 'en';

    this.tabDialog = null;
    this.btnAdd = null;
    this.btnRemove = null;
    this.tabs = [];
    this.active = null;
    // 默认main
    this.mainTab = null;
    this.customTabs = null;
    this.init();
  }
  async init() {
    this.editorContent.className = 'editor-content';
    this.editorContent.id = 'editorContent';
    this.editorContainer.appendChild(this.editorContent);

    this.editorTab.className = 'editor-tab';
    this.editorTab.id = 'editorTab';
    this.editorContainer.appendChild(this.editorTab);

    this.tabContainer.className = 'tab-container';
    this.editorTab.appendChild(this.tabContainer);

    this.mainTab = await this.addTab('main', 'block');
    // 增加
    this.btnAdd = document.createElement('div');
    this.btnAdd.className = 'tab-btn';
    this.btnAdd.innerHTML = '+';
    this.btnAdd.title = this.lang === 'zh' ? '新建选项卡' : 'Create a new tab';
    this.tabContainer.appendChild(this.btnAdd);

    const tabDialog = document.createElement('tab-dialog');
    tabDialog.lang = this.lang;
    document.body.appendChild(tabDialog);
    this.tabDialog = tabDialog;

    this.btnAdd.addEventListener('click', this.doAddTab);
    // 移除
    this.btnRemove = document.createElement('div');
    this.btnRemove.className = 'tab-btn';
    this.btnRemove.innerHTML = '-';
    this.btnRemove.title = this.lang === 'zh' ? '删除选项卡' : 'Remove tab';
    this.tabContainer.appendChild(this.btnRemove);
    this.btnRemove.addEventListener('click', this.doRemoveTab);
    // 激活
    this.tabContainer.addEventListener('click', this.doActiveTab);

    window.addEventListener('resize', this.resize);
  }

  doAddTab = () => {
    const _this = this;
    this.tabDialog.display(true);
    this.tabDialog.getData = async (data) => {
      const { tabTitle, tabType } = data;
      if (!tabTitle || !tabType) return;
      const newTab = await _this.addTab(tabTitle, tabType);

      _this.setActive(newTab);
      _this.dispatchEvent({ type: 'add' });
      _this.tabDialog.display(false);
    }
  }

  doRemoveTab = () => {
    if (this.active === this.mainTab) return;
    const confirm = window.confirm(`${this.lang == 'zh' ? '删除选项卡：' : 'remove the tab: '}` + this.active.title);
    if (!confirm) return;
    const index = this.removeTab();
    this.setActive(this.tabs[index - 1]);
    this.dispatchEvent({ type: 'remove' });
  }

  doRenameTab = () => {
    const newName = window.prompt(this.lang == 'zh' ? '新名字：' : 'new name: ');
    if (!newName) return;
    this.renameTab(newName);
    this.dispatchEvent({ type: 'rename' });
  }

  doActiveTab = (event) => {
    event.stopPropagation();
    const uid = event.target.dataset['uid'];
    const tab = this.getTabByUid(uid);
    if (tab) {
      this.setActive(tab);
      this.dispatchEvent({ type: 'active' });
    }
  }
  /**
   * 
   * @param {string} title 选项卡名称
   * @param {string} type 类型 block | code
   * @returns {BlockTab | CodeTab} 拼图编辑器或代码编辑器
   */
  async addTab(title, type) {
    let newTab;
    if (type === 'block') {
      newTab = new BlockTab(title);

      this.active ? this.active.tabElem.insertAdjacentElement('afterend', newTab.tabElem) : this.tabContainer.appendChild(newTab.tabElem);
      newTab.workspaceElem = document.createElement('div');
      newTab.workspaceElem.className = 'workspace-container';
      this.editorContent.appendChild(newTab.workspaceElem);
      // setLocale(this.lang);
      newTab.workspace = inject(newTab.workspaceElem, {
        toolbox: toolboxMain,
        path: '/',
        theme: Themes.Dark,
        grid: {
          spacing: 20,
          length: 4,
          colour: '#ffffff1a',
          snap: true
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true
          },
          drag: true,
          wheel: false
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 1.0,
          minScale: 0.5,
          scaleSpeed: 1.2,
          pinch: true
        },
        trashcan: false,
        oneBasedIndex: false,
        renderer: 'geras'
      });

      // 
      newTab.workspace.registerButtonCallback('guiDocumentBtn', () => {
        window.open('https://cocopon.github.io/tweakpane/getting-started.html')
      })

    } else if (type === 'code') {
      newTab = new CodeTab(title);
      this.active ? this.active.tabElem.insertAdjacentElement('afterend', newTab.tabElem) : this.tabContainer.appendChild(newTab.tabElem);
      newTab.editorElem = document.createElement('div');
      newTab.editorElem.className = 'workspace-container';
      this.editorContent.appendChild(newTab.editorElem);

      newTab.editor = await this.createCodeEditor(newTab.editorElem);
    }
    this.active ? this.tabs.splice(this.tabs.indexOf(this.active) + 1, 0, newTab) : this.tabs.push(newTab);
    this.setActive(newTab);
    newTab.type = type;
    return newTab;
  }
  /**
   * 重命名选项卡标题
   * @param {string} newTitle 
   * @returns 
   */
  renameTab(newTitle) {
    const hasExist = this.tabs.find(item => item.title == newTitle);
    if (this.active.title === newTitle || this.active === this.mainTab || hasExist) return false;
    this.active.title = newTitle;
    this.active.tabElem.title = newTitle;
    this.active.tabElem.innerText = newTitle;
    return true;
  }
  /**
   * 创建代码编辑器
   * @param {HTMLDivElement} elem 
   * @returns 
   */
  createCodeEditor(elem) {
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
      const defaultValue = `  // 内置变量: BABYLON
  const { engine, scene, camera, glob } = BABYLON.apps[0];

  function createBox() {
    const mesh = BABYLON.MeshBuilder.CreateBox('box', scene);
    const mat = new BABYLON.PBRMaterial('pbr', scene);
    mesh.material = mat;
  }

  createBox();
`
      const options = {
        value: defaultValue,
        language: 'javascript',
        fontSize: 18,
        tabSize: 2,
        readOnly: false,
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
        /**
         * 添加代码补全，由于babylon_d.ts过大，通过回调函数在调用时添加
         * 回调函数实现如下代码：
         * monaco.languages.typescript.javascriptDefaults.addExtraLib(babylon_d_ts);
         * monaco.languages.typescript.javascriptDefaults.addExtraLib(appInstance_d_ts);
         */
        _this.addExtralLib(monaco)
        // 创建编辑器
        resolve(monaco.editor.create(elem, options));
      });

    })
  }
  addExtralLib() { }

  removeTab() {
    if (this.tabs.length === 1) return;
    const tab = this.active;
    const index = this.tabs.indexOf(tab);
    tab.dispose();
    this.tabs.splice(index, 1);
    return index;
  }

  save() {
    return this.tabs.map(tab => tab.save());
  }

  async loadJson(jsonData) {
    const titles = Object.keys(jsonData);
    if (jsonData['main']) {
      titles.shift();
    }
    // 1-加载选项卡
    for (let title of titles) {
      let blockTab, codeTab;
      switch (jsonData[title].type) {
        case 'block':
          blockTab = await this.addTab(title, 'block');
          break;
        case 'code':
          codeTab = await this.addTab(title, 'code');
          break;
      }
      // 2-加载工作区
      blockTab && blockTab.load(jsonData[title].data);
      codeTab && codeTab.setValue(jsonData[title].data);
    }
    // 3-加载main工作区
    this.mainTab.load(jsonData['main'].data);
  }

  resize = () => {
    this.tabs.forEach(tab => tab.resize())
  }

  setActive(tab) {
    if (!tab) return;
    this.tabs.forEach(tab => {
      tab.focus(false);
    });
    tab.focus(true);
    this.active = tab;
  }

  getTabByUid(uid) {
    return this.tabs.find(tab => tab.id == uid);
  }

  getTabByTitle(title) {
    return this.tabs.find(tab => tab.title == title);
  }

  dispose() {
    window.removeEventListener('resize', this.resize);
    this.btnAdd.removeEventListener('click', this.doAddTab);
    this.btnRemove.removeEventListener('click', this.doRemoveTab);
    this.tabContainer.removeEventListener('click', this.doActiveTab);

    this.editorContent.removeChild(this.editorContent);
    this.editorContent.removeChild(this.editorTab);
  }
}

export {
  TabManager
}