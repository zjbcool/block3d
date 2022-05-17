import { LitElement, html, css } from 'lit';
import { dialogStyle } from './dialog_style'

export class EditorMenu extends LitElement {
  static styles = [
    dialogStyle,
    css`
    * {
      margin: 0;
      padding: 0;
    }
    
    .menu {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg);
      border-bottom: var(--border);
    }
    
    .menu-left {
      flex: 0 0 auto;
      margin-right: auto;
      margin-left: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    
    .menu-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
    }
    
    .menu-right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
    }
    
    @media (max-width: 768px) {
      .logo-text {
        display: none;
      }
      .menu-right {
        display: none;
      }
    }
    
    .logo {
      width: 26px;
      height: 26px;
    }
    
    .logo-text {
      color: var(--color);
      margin-left: 6px;
      font-size: 22px;
    }
    
    .a-block {
      display: block;
    }
    
    .btn {
      width: 55px;
      height: 55px;
      cursor: pointer;
    }
    
    .btn:hover {
      background-color: white;
    }
    
    .btn:active {
      transform: scale(0.95);
    }
    
    .btn-icon {
      width: 100%;
      height: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
    }
    
    .btn-icon:hover {
      filter: invert(100%);
    }
    
    .btn-icon img {
      filter: invert(100%);
      user-select: none;
    }
    
    .btn-active {
      transform: scale(0.95);
      background-color: white;
    }
    
    .btn-active .btn-icon:hover {
      filter: invert(0);
    }
    
    .btn-active .btn-icon img {
      filter: invert(0);
    }
    
    .dropdown-root {
      position: relative;
    }
    
    .dropdown-content {
      position: absolute;
      top: 55px;
      width: var(--dropdown-width);
      z-index: 100;
      background-color: var(--bg);
      filter: drop-shadow(0px 0px 5px black);
    }
    
    .dropdown-label {
      position: relative;
      height: 35px;
      line-height: 35px;
      padding: 5px 5px 5px 10px;
      color: var(--color);
      font-size: 16px;
      text-align: start;
      cursor: pointer;
      user-select: none;
    }
    
    .dropdown-label:hover {
      background-color: var(--bg-light);
    }
    
    .dropdown-shortcut {
      position: absolute;
      right: 10px;
      pointer-events: none;
    }
    
    .dropdown-offical-version {
      border-radius: 4px;
      font-size: 0.5rem;
      padding: 0 0.2rem;
      border: 1px solid #aaa;
      pointer-events: none;
    }
    
    .dropdown-submenu-root {
      overflow: hidden;
    }
    
    .dropdown-submenu-root:hover {
      overflow: visible;
    }
    
    .dropdown-submenu {
      position: absolute;
      left: var(--dropdown-width);
      top: 0;
      width: var(--dropdown-width);
      display: block;
      background-color: var(--bg);
      border-left: 1px solid #151515;
    }
    
    .dropdown-separator {
      border-bottom: var(--border);
      height: 0;
      margin: 3px 7px;
    }
  `]

  static properties = {
    name: {},
    lang: {},
    dropdownShown: {},
    leftdays: {},
  };

  constructor() {
    super();
    this.name = 'Block3D';
    this.lang = 'zh';
    this.dropdownShown = false;
    this.leftdays = 0;
  }


  render() {
    const data = {
      TITLE_NEW: this.lang === 'zh' ? '新建' : 'new',
      TITLE_OPEN: this.lang === 'zh' ? '打开 Ctrl+O' : 'open Ctrl+O',
      TITLE_SAVE: this.lang === 'zh' ? '保存 Ctrl+S' : 'save Ctrl+S',
      TITLE_MENU: this.lang === 'zh' ? '菜单' : 'menu',
      TITLE_VIEW_HREF: this.lang === 'zh' ? '?view=scene' : '?view=code',
      TITLE_LANG: this.lang === 'zh' ? '语言' : 'Language',
      TITLE_LANG_HREF: this.lang === 'zh' ? '?lang=en' : '?lang=zh',
      TITLE_LANG_ICON: this.lang === 'zh' ? '/media/English.svg' : '/media/Chinese.svg',
      TITLE_HELP: this.lang === 'zh' ? '帮助' : 'help',
      TITLE_WEBSITE: 'https://www.zjbku.com/',
      TITLE_HELP_HREF: 'https://www.zjbku.com/block3d/index.html',

      DROPDOWN_OPEN_FOLDER: this.lang === 'zh' ? "打开文件夹" : 'Open folder',
      DROPDOWN_SAVE_AS_TEXT: this.lang === 'zh' ? "另存为..." : 'Save as...',
      DROPDOWN_SAVE_AS_TITLE: this.lang === 'zh' ? "将当前项目另存为新项目" : 'save current project as a new one',
      DROPDOWN_PUBLISH_TEXT: this.lang === 'zh' ? "发布..." : 'Publish...',
      DROPDOWN_PUBLISH_TITLE: this.lang === 'zh' ? "发布并在新窗口运行应用" : 'publish and run app in new window',
      DROPDOWN_RUN_APP_TEXT: this.lang === 'zh' ? "运行..." : 'Run...',
      DROPDOWN_RUN_APP_TITLE: this.lang === 'zh' ? "在新窗口运行应用" : 'run app in new window',
      DROPDOWN_REMOVE_APP_TEXT: this.lang === 'zh' ? "删除..." : 'Remove...',
      DROPDOWN_REMOVE_APP_TITLE: this.lang === 'zh' ? "删除当前项目" : 'remove current project',

      DROPDOWN_TOOLS_TEXT: this.lang === 'zh' ? "工具" : 'Tools',
      DROPDOWN_TABS_TEXT: this.lang === 'zh' ? "选项卡" : 'Tabs',

      DROPDOWN_SETTING_TEXT: this.lang === 'zh' ? "设置..." : 'Settings...',
      DROPDOWN_SETTING_TITLE: this.lang === 'zh' ? "设置编辑器" : 'the settings for the editor',
      DROPDOWN_RENAME_TAB_TITLE: this.lang === 'zh' ? "重命名激活选项卡" : 'Rename tha active tab',
      DROPDOWN_HIDE_LEFT_AREA_TEXT: this.lang === 'zh' ? "隐藏/显示编辑器" : 'Hide/Hide editor',
      DROPDOWN_SEARCH_BLOCK_TEXT: this.lang === 'zh' ? "查找拼图..." : 'Search block...',
      DROPDOWN_ACTIVE_TEXT: this.lang === 'zh' ? "激活码..." : 'Active key...',
      DROPDOWN_ACTIVE_TITLE: this.lang === 'zh' ? "去除广告" : 'remove ads',
      DROPDOWN_ABOUT_TEXT: this.lang === 'zh' ? "关于" : 'About',

      DROPDOWN_INSPECTOR_TEXT: this.lang === 'zh' ? "场景查看器" : 'Scene Inspector',
      TOOLS_GUI_DEITOR_TEXT: this.lang === 'zh' ? "GUI编辑器" : 'GUI Editor',
      TOOLS_NME_TEXT: this.lang === 'zh' ? "节点材质编辑器" : 'NodeMaterial Editor',
      TOOLS_SANDBOX_TEXT: this.lang === 'zh' ? "沙盒" : 'Sandbox',

      DROPDOWN_TABS_ADD_TEXT: this.lang === 'zh' ? "创建选项卡..." : 'Create New Tab...',
      DROPDOWN_TABS_REMOVE_TEXT: this.lang === 'zh' ? "删除选项卡..." : 'Remove Tab...',
      DROPDOWN_TABS_RENAME_TEXT: this.lang === 'zh' ? "重命名选项卡..." : 'Rename Tab...',
    }
    return html`
  <div class="menu">
    <a class="menu-left" href="${data.TITLE_WEBSITE}" target="_blank">
      <svg t="1648263165405" class="icon" viewBox="0 0 1177 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1147" width="32" height="32"><path d="M655.43387233 716.09142666L655.43387233 835.93511336a18.96260896 18.96260896 0 0 1-10.42943493 18.07768662Q535.08451596 917.34791325 425.16459449 981.18869544a19.46827783 19.46827783 0 0 1-21.74379139 0Q292.99521198 917.03186951 182.69603786 853.31750437A17.19276507 17.19276507 0 0 1 172.89869043 836.8832438l0-258.14431269a17.12955617 17.12955617 0 0 1 9.92376525-16.30784352c25.28347834-14.34837375 50.06128701-28.8863742 75.02872161-43.36116497 4.42460848-2.52834758 8.78600889-5.30953003 14.79083449-8.91242589-5.05669599-3.35006103-8.78600889-6.32086938-12.64173876-8.40675702-25.28347834-14.66441751-50.5669567-29.45525199-75.85043503-43.74041682A19.9107394 19.9107394 0 0 1 172.89869043 438.35241831q0.37925185-126.41739093 0-253.2140345a20.47961719 20.47961719 0 0 1 12.00965207-20.10036535Q292.99521198 102.90387128 400.44999393 40.07442767a24.14572196 24.14572196 0 0 1 27.68540893-1e-8q107.45478277 63.20869546 215.66806926 124.90038269a20.35320018 20.35320018 0 0 1 11.63040021 20.28999127c-0.50566968 24.3353479 0 48.67069579 0 73.06925181 0 3.72931289 0.44246076 7.45862576 0.82171261 12.64173876 4.55102632-2.21230465 7.6482525-3.53968695 10.61906087-5.24632111 26.67406958-15.3597131 53.47455614-30.71942619 80.02220871-46.33197412a16.87672133 16.87672133 0 0 1 18.96260895 0q110.36238222 64.093617 220.85118226 127.68156511a19.97394751 19.97394751 0 0 1 11.06152161 19.59469567q-0.50566968 126.41739093 0 253.27724262a20.66924314 20.66924314 0 0 1-11.82002613 20.22678315q-108.46612132 62.26056502-216.5529908 125.21642564a22.31266916 22.31266916 0 0 1-25.97877396 0c-26.04198285-15.80217388-52.6528435-30.71942619-79.13728713-45.95272147-2.08588682-0.82171342-4.67744332-1.51700902-8.84921699-3.35006102zM741.77695039 732.52568723a81.4127999 81.4127999 0 0 0 1.13775639-9.41809558c0-71.10978281 0-142.2195648-0.31604375-213.3293476A16.37105246 16.37105246 0 0 0 735.45608101 497.76859199c-61.56526942-36.09216514-123.44658257-71.6786606-185.26468682-107.45478196a82.17130442 82.17130442 0 0 0-8.3435481-3.28685292L541.84784609 492.71189681a15.17008718 15.17008718 0 0 0 9.22846965 15.17008635c30.78263511 17.38239103 61.12280863 35.58649544 91.96865186 52.90567835a21.61737357 21.61737357 0 0 1 12.64173956 21.68058251c-0.6320867 30.15054759 0 60.36430411-0.37925265 90.57806062a15.29650418 15.29650418 0 0 0 8.72279996 15.48613091c23.26079963 12.64173878 46.07913928 26.61086065 69.15031298 39.88468693 2.27551275 1.3905912 4.93027817 2.40193058 8.59638294 4.10856475z m-127.23910437-156.18868668c-4.61423441-2.90760026-7.20579092-4.74065225-9.86055632-6.32086939-22.81833887-13.14740846-45.76309555-25.91556504-68.26539146-39.44222614a15.17008718 15.17008718 0 0 0-17.76164366-1e-8c-30.71942619 18.14089553-61.81810424 35.64970437-92.53752962 53.79059988a20.66924314 20.66924314 0 0 1-23.5136353 0c-31.22509587-18.45693928-63.20869546-36.34499998-94.24416459-54.73873033a12.13606989 12.13606989 0 0 0-14.15874782-0.5688786c-23.95609525 14.28516483-48.228235 28.06466078-72.31074808 42.09699159a68.07576472 68.07576472 0 0 0-6.32086939 5.24632192c2.21230465 1.70663497 3.16043511 2.5915565 4.23498259 3.2236432q94.11774758 54.61231332 188.61474781 108.84537398a15.61254793 15.61254793 0 0 0 12.64173877-0.63208672c44.81496509-25.28347834 89.18746942-51.00941747 133.55997373-76.29289579 19.34186081-11.44077428 38.62051272-22.75513076 59.92184334-35.20724358z m-185.89677348-25.28347835c3.9189388-1.95946981 5.94161753-2.84439135 7.90108654-3.98214771 21.8702084-12.64173878 43.42437388-26.10519098 65.80025276-37.92521712a21.55416546 21.55416546 0 0 0 13.14740845-22.81833887c-0.6320867-38.30446976 0-76.60893876-0.56887859-114.91340852a26.35802582 26.35802582 0 0 1 15.9285917-26.80048738c30.34017353-16.75030432 60.36430411-34.25911314 90.13559985-52.02075603a17.06634807 17.06634807 0 0 0 7.33220876-11.94644397c0.75850452-22.3758781 0.37925185-44.75175617 1e-8-67.19084318a61.56526942 61.56526942 0 0 0-1.45380016-8.53317401c-4.10856555 2.08588681-7.26899984 3.53968695-10.23980899 5.2463219Q526.86738567 262.18978414 436.54215908 314.46337497a15.54933902 15.54933902 0 0 0-8.97563401 15.42292202L427.56652507 540.24483542c0.18962593 2.84439135 0.69529561 5.94161752 1.07454747 10.68226976z" fill="#e16531" p-id="1148"></path></svg>
      <p class="logo-text">${this.name}</p>
    </a>
    <div class="menu-center">
      <div class="btn" id="create" title="${data.TITLE_NEW}" @click="${this._oncreate}">
        <div class="btn-icon"><img src="/media/new.svg" alt="new"></div>
      </div>
      <div class="btn" id="open" title="${data.TITLE_OPEN}" @click="${this._onopen}">
        <div class="btn-icon"><img src="/media/open.svg" alt="open"></div>
      </div>
      <div class="btn" id="save" title="${data.TITLE_SAVE}" @click="${this._onsave}">
        <div class="btn-icon"><img src="/media/save.svg" alt="save"></div>
      </div>

      <div class="dropdown-root">
        <div class="${this.dropdownShown ? 'btn btn-active' : 'btn'}" id="menu" title="${data.TITLE_MENU}" @click="${() => this.dropdownShown = !this.dropdownShown}">
          <div class="btn-icon"><img src="/media/menu.svg" alt="menu"></div>
        </div>
        <div class="${this.dropdownShown ? 'dropdown-content d-block' : 'd-none'}" id="dropdownContent" @click="${this._onDropdown}">
          <p class="dropdown-label" title="${data.DROPDOWN_OPEN_FOLDER}" id="openFolder">
            ${data.DROPDOWN_OPEN_FOLDER}<span class="dropdown-shortcut">Alt+Shift+R</span>
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_SAVE_AS_TITLE}" id="saveAs">
            ${data.DROPDOWN_SAVE_AS_TEXT}<span class="dropdown-shortcut">Ctrl+Shift+S</span>
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_REMOVE_APP_TITLE}" id="removeApp">
            ${data.DROPDOWN_REMOVE_APP_TEXT}
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_PUBLISH_TITLE}" id="publishApp">
            ${data.DROPDOWN_PUBLISH_TEXT}
            <span class="dropdown-shortcut">Ctrl+P</span>
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_RUN_APP_TITLE}" id="runApp">
            ${data.DROPDOWN_RUN_APP_TEXT}
          </p>
        
          <div class="dropdown-separator"></div>
        
          <div class="dropdown-root dropdown-submenu-root" id="dropdownTools">
            <p class="dropdown-label">
              ${data.DROPDOWN_TOOLS_TEXT}
              <span class="dropdown-shortcut"><img src="/media/right.svg" alt=""></span>
            </p>
            <div class="dropdown-submenu">
              <p class="dropdown-label" id="inspectorTool">
                ${data.DROPDOWN_INSPECTOR_TEXT}
                <span class="dropdown-shortcut">Ctrl+I Alt+I</span>
              </p>
              <a href="/tools/guiEditor/index.html" target="_blank">
                <p class="dropdown-label">${data.TOOLS_GUI_DEITOR_TEXT}</p>
              </a>
              <a href="/tools/nodeEditor/index.html" target="_blank">
                <p class="dropdown-label">${data.TOOLS_NME_TEXT}</p>
              </a>
            </div>
          </div>

          <div class="dropdown-root dropdown-submenu-root" id="dropdownTabs">
            <p class="dropdown-label">
              ${data.DROPDOWN_TABS_TEXT}
              <span class="dropdown-shortcut"><img src="/media/right.svg" alt=""></span>
            </p>
            <div class="dropdown-submenu">
              <p class="dropdown-label" id="addTab">${data.DROPDOWN_TABS_ADD_TEXT}</p>
              <p class="dropdown-label" id="removeTab">${data.DROPDOWN_TABS_REMOVE_TEXT}</p>
              <p class="dropdown-label" id="renameTab">${data.DROPDOWN_TABS_RENAME_TEXT}</p>
            </div>
          </div>

          <p class="dropdown-label" title="${data.DROPDOWN_HIDE_LEFT_AREA_TEXT}" id="hideEditor">
            ${data.DROPDOWN_HIDE_LEFT_AREA_TEXT}<span class="dropdown-shortcut">Alt+Shift+H</span>
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_SEARCH_BLOCK_TEXT}" id="searchBlock">
            ${data.DROPDOWN_SEARCH_BLOCK_TEXT}<span class="dropdown-shortcut">Ctrl+Shift+F</span>
          </p>
        
          <div class="dropdown-separator"></div>
        
          <p class="dropdown-label" title="${data.DROPDOWN_ACTIVE_TITLE}" id="licenseKey">
            ${data.DROPDOWN_ACTIVE_TEXT}
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_SETTING_TITLE}" id="setting">
            ${data.DROPDOWN_SETTING_TEXT}
          </p>
          <p class="dropdown-label" title="${data.DROPDOWN_ABOUT_TEXT}" id="about">
            ${data.DROPDOWN_ABOUT_TEXT}
          </p>
        </div>
      </div>

    </div>
    <div class="menu-right">
      <a class="btn a-block" title="${data.TITLE_LANG}" href="${data.TITLE_LANG_HREF}">
        <div class="btn-icon"><img src="${data.TITLE_LANG_ICON}" alt="language"></div>
      </a>
      <a class="btn a-block" title="${data.TITLE_HELP}" href="${data.TITLE_HELP_HREF}" target="_blank">
        <div class="btn-icon"><img src="/media/help.svg" alt="help"></div>
      </a>
    </div>
  </div>
    `
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._handleDropdown);
    addEventListener('keydown', this._handleDropdown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._handleDropdown);
    window.removeEventListener('keydown', this._handleDropdown);
  }

  /**
   * 点击空白区域或按下Esc键，关闭下拉菜单
   * @param {HTMLEvent} e 
   */
  _handleDropdown = e => {
    e.target && (e.target !== this) && (this.dropdownShown = false);
    e.key && (e.key === 'Escape') && (this.dropdownShown = false);
  }

  oncreate() { }
  _oncreate() { this.oncreate() }

  onopen() { }
  _onopen() { this.onopen() }

  onsave() { }
  _onsave() { this.onsave() }

  ondropdown() { }
  _onDropdown = e => {
    this.ondropdown(e.target.id)
  }
}

customElements.define('editor-menu', EditorMenu);

