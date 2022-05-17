
/**
 * 可拖拽分割线
 */
export class Gutter {
  /**
   * 
   * @param {HTMLDivElement | string} leftElem 左边元素
   * @param {HTMLDivElement | string} gutterElem 分割线
   * @param {HTMLDivElement | string} rightElem 右边元素
   */
  constructor(leftElem, gutterElem, rightElem) {
    this.leftElem = leftElem instanceof HTMLDivElement ? leftElem : document.querySelector(leftElem);
    this.gutterElem = gutterElem instanceof HTMLDivElement ? gutterElem : document.querySelector(gutterElem);
    this.rightElem = rightElem instanceof HTMLDivElement ? rightElem : document.querySelector(rightElem);
    /**
     * 分割线宽度，px
     */
    this.gutterWidth = 6;
    /**
     * 容器宽度
     */
    this.fullWidth = this.leftElem.offsetWidth + this.gutterWidth + this.rightElem.offsetWidth;
    /**
     * 拖拽状态
     */
    this.isMove = false;
    /**
     * 分割线初始位置
     */
    this.gutterOffsetLeft = this.gutterElem.offsetLeft;
    /**
     * 拖拽的距离
     */
    this.dragDistanceX = 0;
    /**
     * 按下时指针位置
     */
    this.pointerStartX = 0;
    /**
     * 拖拽的距离相对于容器宽度的百分比
     */
    this.gutterPosition = 50;
    /**
     * 记录是否处理一侧全屏状态
     */
    this.isLeftFullscreen = false;
    this.isRightFullscreen = false;

    window.addEventListener('resize', this.resize);
    this.gutterElem.addEventListener('pointerdown', this.down);
  }

  down = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.isMove = false;
    this.rightElem.style.pointerEvents = 'none';

    this.gutterOffsetLeft = this.gutterElem.offsetLeft;
    this.pointerStartX = e.clientX;
    this.dragDistanceX = 0;

    document.addEventListener('pointermove', this.move);
    document.addEventListener('pointerup', this.up);
  }

  move = (e) => {
    this.isMove = true;
    this.dragDistanceX = this.gutterOffsetLeft + e.clientX - this.pointerStartX;
    let percentX = this.dragDistanceX / this.fullWidth * 100;

    if (percentX < 10) percentX = 10;
    if (percentX > 90) percentX = 90;

    this.gutterElem.style.cursor = 'col-resize';
    this.leftElem.style.cursor = 'col-resize';
    this.rightElem.style.cursor = 'col-resize';
    document.body.style.cursor = 'col-resize';

    this.gutterElem.style.left = `${percentX}%`; // 百分比
    this.leftElem.style.width = percentX + '%';
    this.rightElem.style.width = `calc(${100 - percentX}% - ${this.gutterWidth}px)`;

    this.gutterPosition = percentX;
    this.onMove && this.onMove();
  }

  up = (e) => {
    this.gutterElem.style.cursor = '';
    this.leftElem.style.cursor = '';
    this.rightElem.style.cursor = '';
    document.body.style.cursor = '';

    this.isMove = false;
    this.rightElem.style.pointerEvents = 'auto';
    this.onStop && this.onStop();
    document.removeEventListener('pointermove', this.move);
    document.removeEventListener('pointerup', this.up);
  }

  onStop() { }
  onMove() { }

  resize = () => {
    this.fullWidth = this.leftElem.offsetWidth + this.gutterWidth + this.rightElem.offsetWidth;
  }
  /**
   * 获取分割线的位置百分比
   * @returns {number} 分割线位置
   */
  getPosition() { return this.gutterPosition.toFixed() }
  /**
   * 设置分割线位置百分比
   * @param {number} position 位置百分比
   */
  setPosition(position) {
    this.leftElem.style.width = position + '%';
    this.gutterElem.style.left = `${position}%`; // 百分比
    this.rightElem.style.width = `calc(${100 - position}% - ${this.gutterWidth}px)`;
  }
  /**
   * 一侧全屏
   * @param {string} side 'left' | 'right'
   */
  fullscreen(side) {
    if (side === 'left') {
      this.leftElem.style.width = '100%';
      this.gutterElem.style.left = 0;
      this.rightElem.style.width = 0;
      this.isLeftFullscreen = true;
      this.isRightFullscreen = false;
    } else if (side === 'right') {
      this.leftElem.style.width = 0;
      this.gutterElem.style.left = `-${this.gutterWidth}px`;
      this.rightElem.style.width = '100%';
      this.isLeftFullscreen = false;
      this.isRightFullscreen = true;
    }
  }

  dispose() {
    window.removeEventListener('resize', this.resize);
    this.gutterElem.removeEventListener('pointerdown', this.down);
  }
}
