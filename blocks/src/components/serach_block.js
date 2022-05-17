import { Blocks, utils, Xml, Workspace, Block, getMainWorkspace, selected } from 'blockly';
import { LitElement, html, css } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import debounce from '../util/debounce';

// Registers the SearchBlock element

export class SearchBlock extends LitElement {
  static styles = css`
  .search-container {
    position: absolute;
    top: 20px;
    left: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    z-index: 9999;
    background-color: rgb(33, 33, 33);
  }

  .search-bar {
    display: flex;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    background: #212121;
    color: #9a9a9a;
    border-radius: 4px;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
    margin: 0;
    max-height: 400px;
    overflow: hidden;
  }
  .input-text {
    height: 30px;
    width: 100%;
    font-size: inherit;
    padding: 5px;
    color: #eeeeee;
    border: 1px solid #505050;
    background-color: #0c0c0c;
  }
  .dropdown {
    padding: 6px;
    border-bottom: 1px solid rgb(51, 51, 51);
    cursor: pointer;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dropdown:nth-child(1),
  .dropdown-select,
  .dropdown:hover {
    background-color: #5c5c5c;
    color: #c8c8c8;
  }
  .hide {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }`;

  static properties = {
    workspace: {},
    options: { state: true },
    isVisible: {},
    currIndex: {},
    selectedBlock: {}
  };
  /**
   * @param {Workspace} workspace 工作区实例
   * @param {array} options 所有候选元素
   * @param {boolean} isVisible 搜索框显示状态
   * @param {number} currIndex 当前候选元素的索引
   * @param {Block} selectedBlock 当前工作区选中的block
   */
  constructor() {
    super();
    this.workspace = null;
    this.options = [];
    this.isVisible = false;
    this.currIndex = 0;
    this.selectedBlock = null;
  }
  searchRef = createRef();

  render() {
    const _this = this;
    return html`
  <div class="search-container ${this.isVisible ? 'show' : 'hide'}">
    <div class="search-bar">
      <input ${ref(this.searchRef)} class="input-text" type="text" @input="${debounce(200, true, _this.serach_)}" placeholder="search block">
    </div>
    <ul id="serachDropdown" @click="${this.selectItem_}">
      ${_this.options.map(option => html`<li class='dropdown'>${option}</li>`)}
    </ul>
  </div>`;
  }

  connectedCallback() {
    super.connectedCallback()
    // 显示搜索框
    addEventListener('keydown', this.onKeyDown_);
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this.onKeyDown_);
  }

  onKeyDown_ = e => {
    const dropdown = this.renderRoot.querySelectorAll('.dropdown');
    // ctrl + shift + F 切换搜索框
    if (e.key === 'F' && e.shiftKey && e.ctrlKey) this.onToggle_()
    // esc关闭搜索框
    if (e.key === 'Escape') this.display(false)

    switch (e.key) {
      case 'Enter':
        this.onEnter_()
        break
      case 'ArrowDown':
        this.onArrowDown_(dropdown)
        break
      case 'ArrowUp':
        this.onArrowUp_(dropdown)
        break
    }
  }

  display(isVisible) {
    const searchInput = this.searchRef.value;
    this.isVisible = isVisible;
    this.options.length = 0;
    this.currIndex = 0;
    // 有选中的block时，保存起来，用于创建拼图时的位置参考
    selected && (this.selectedBlock = selected, selected.unselect())
    setTimeout(() => {
      if (this.isVisible) {
        searchInput.focus();
        searchInput.value = '';
      }
    }, 50);
  }
  /**
   * 搜索框显示隐藏切换
   * @param {*} searchInput 
   */
  onToggle_ = () => {
    this.searchRef.value.value = '';
    this.isVisible = !this.isVisible;
    this.display(this.isVisible);
  }
  /**
   * Enter键确认创建选中的拼图
   */
  onEnter_ = () => {
    const selOption = this.options[this.currIndex];
    if (selOption) {
      setTimeout(() => {
        this.createBlock(getMainWorkspace(), selOption);
        this.display(false)
      }, 200)
    }
  }
  /**
   * 在候选菜单中移动
   * @param {*} dropdown 
   * @returns 
   */
  onArrowDown_ = dropdown => {
    if (!this.options.length) return;
    dropdown.forEach(li => li.classList.contains('dropdown-select') && li.classList.remove('dropdown-select'))
    this.currIndex += 1;
    this.currIndex === this.options.length && (this.currIndex = 0);
    dropdown[this.currIndex].classList.add('dropdown-select')
  }
  /**
   * 在候选菜单中移动
   * @param {*} dropdown 
   * @returns 
   */
  onArrowUp_ = dropdown => {
    if (!this.options.length) return;
    dropdown.forEach(li => li.classList.contains('dropdown-select') && li.classList.remove('dropdown-select'));
    this.currIndex -= 1;
    this.currIndex < 0 && (this.currIndex = this.options.length - 1);
    dropdown[this.currIndex].classList.add('dropdown-select')
  }
  /**
   * 鼠标按下时创建选中的拼图
   * @param {Event} e 
   */
  selectItem_ = e => {
    const item = e.target.innerText;
    this.createBlock(getMainWorkspace(), item);
    this.display(false);
  }
  /**
   * 获取搜索结果
   * @param {Event} e 
   */
  serach_ = e => {
    const input = e.target.value.toLowerCase().trim().split(' ');
    this.options = this.getBlockType(input);
    !e.target.value && (this.options.length = 0);
  }
  /**
   * 通过提供的查询数组找到block数组
   * 
   * @param {string[]} inputList 查询数组
   * @returns {string[]} 过滤后的数组
   */
  getBlockType(inputList) {
    /**
     * typeNameMap
     * [{type: 'get_tab_arg', zhName: '获取选项卡参数'}]
     * 不确定是否开发中文版拼图搜索
     */
    // const typeNameMap = Object.entries(Blocks).map(item => {
    //   return { type: item[0], zhName: item[1].zhName }
    // })

    const allTypes = Object.keys(Blocks);
    // 排除的block
    const blockRemove = [
      'variables_set',
      'variables_get',
      'field_vector2',
      'field_vector3',
      'field_vector4',
      'field_color2',
      'field_color3',
      'field_color4',
      'empty_object',
      'empty_array',
      'emptyBlock',
      'text_create_join_item',
      'text_create_join_container',
      'text_create_join_item_container',
      'text_prompt',
      'lists_create_width_item',
      'lists_create_empty',
      'lists_create_width',
      'lists_create_width_container',
      'procedures_mutatorcontainer',
      'procedures_mutatorarg',
    ]
    for (let blockDel of blockRemove) {
      allTypes.splice(allTypes.indexOf(blockDel), 1)
    }

    const blocks = [];
    for (let block of allTypes) {
      const blockStr = block.replace('_', ' ');
      const isAt = inputList.every(word => blockStr.includes(word));
      isAt && blocks.push(block);
      // 搜索结果限制为8个
      if (blocks.length >= 8) break
    }
    return blocks
  }
  /**
   * 在工作区创建拼图
   * @param {Workspace} workspace 
   * @param {Block} type block type
   */
  createBlock(workspace, type) {
    const wsMetrics = workspace.getMetrics();
    const xmlBlock = utils.xml.createElement('block');
    xmlBlock.setAttribute('type', type);
    const newBlock = Xml.domToBlock(xmlBlock, workspace);

    if (this.selectedBlock) {
      // 移动到所选块附近
      const targetPos = this.selectedBlock.getRelativeToSurfaceXY().clone();
      targetPos.translate(20, this.selectedBlock.getHeightWidth().height + 20)
      newBlock.moveTo(targetPos);
    } else {
      // 移动到工作区中心
      newBlock.moveTo(new utils.Coordinate(wsMetrics.viewWidth / 2 + wsMetrics.viewLeft, wsMetrics.viewHeight / 2 + wsMetrics.viewTop));
    }
    workspace.centerOnBlock(newBlock.id)
    setTimeout(() => {
      newBlock.select();
    }, 50)
  }
}

customElements.define('search-block', SearchBlock);