import { css } from 'lit'
export const dialogStyle = css`
:root {
  --bg: #333333;
  --bg-light: #555;
  --color: #eeeeee;
  --theme-color: #e16531;

  --border: 1px solid #505050;
  --border-hide: 1px solid #00000000;
  --dropdown-width: 260px;
}
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}
/*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
::-webkit-scrollbar-track {
  background-color: #1e1e1e;
  width: 6px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
/*滚动条的设置*/
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, .2);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  padding: 6px;
}

a {
  text-decoration: none;
}

.input-text,
.dropdown-list {
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  font-size: inherit;
  padding: 5px;
  color: var(--color);
  border: var(--border);
  background-color: #0c0c0c;
  text-overflow: ellipsis;
}

.checkbox {
  cursor: pointer;
  position: relative;
  width: 14px;
  height: 14px;
  font-size: 14px;
}

.checkbox::after {
  position: absolute;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 1px;
  color: var(--theme-color);
  background-color: var(--bg);
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
}

.checkbox:checked::after {
  content: "✓";
  font-size: 12px;
  font-weight: bold;
}

.d-flex {
  display: flex;
}

.d-block {
  display: block;
}

.d-none {
  display: none;
}

.hide {
  visibility: hidden;
}

.show {
  visibility: visible;
}

.w-100 {
  width: 100px;
}
.w-50 {
  width: 50px;
}
.w-40 {
  width: 40px;
}

.text-light {
  color: #ffffff;
}

.text-green {
  color: green;
}

.text-red {
  color: red;
}

.dialog-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog {
  color: var(--color);
  background-color: #1e1e1e;
  width: 400px;
  overflow-y: hidden;
  filter: drop-shadow(0px 0px 15px black);
}

.dialog-header {
  width: 100%;
  height: 20px;
  background-color: var(--bg);
  display: flex;
  align-items: center;
}

.dialog-header-text {
  color: var(--color);
  font-size: 12px;
  padding-left: 10px;
  user-select: none;
}

.dialog-header-close {
  background-image: url(../media/close.svg);
  background-repeat: no-repeat;
  width: 16px;
  height: 14px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
}

.dialog-content {
  padding: 10px;
  border: var(--border);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-flow: column nowrap;
  user-select: none;
}

.dialog-row {
  display: flex;
  flex-flow: row nowrap;
  margin: 2px 0;
}

.dialog-text-wrap {
  display: flex;
  flex-flow: column nowrap;
  user-select: text;
}

.dialog-text {
  margin: 5px 0;
  vertical-align: middle;
  flex: 0 0 auto;
}

.button {
  border: none;
  color: var(--color);
  background-color: var(--bg);
  height: 32px;
  font-size: inherit;
  display: block;
  min-width: 100px;
  padding: 0px 15px;
  margin: 20px auto 10px auto;
  cursor: pointer;
}

.button:active {
  border: var(--border);
}
`;