import {
  Themes,
  Theme
} from 'blockly';
import styles from './styles'

/**
 * 用于返回分类样式对象或拼图样式对象
 * @param {object[]} styles 样式
 * @param {string} type 可选值'category' | 'block'，代表分类样式色或拼图样式
 * @returns {object} 返回样式对象
 */
function setStyle(styles, type) {
  const styleObj = {};
  styles.forEach(item => {
    const key = Object.keys(item)[0];
    const colour = { colour: item[key] };
    const colourPrimary = { colourPrimary: item[key] };
    const newObj = {};
    newObj[key] = type === 'category' ? colour : colourPrimary;
    Object.assign(styleObj, newObj);
  })
  return styleObj
}

const categoryStyles = setStyle(styles, 'category');
const blockStyles = setStyle(styles, 'block');

// https://developers.google.cn/blockly/guides/configure/web/themes#component_styles
const componentStylesDark = {
  'workspaceBackgroundColour': '#181818',
  'toolboxBackgroundColour': '#212121',
  'toolboxForegroundColour': '#fff',
  'flyoutBackgroundColour': '#333',
  'flyoutForegroundColour': '#fff',
  'flyoutOpacity': '0.92',
  'scrollbarColour': '#fff',
  'scrollbarOpacity': '0.2',
}

const componentStylesLight = {
  'workspaceBackgroundColour': '#eee',
  'toolboxBackgroundColour': '#ddd',
  'toolboxForegroundColour': '#000',
  'flyoutBackgroundColour': '#fff',
  'flyoutForegroundColour': '#000',
  'flyoutOpacity': '0.92',
  'scrollbarColour': '#aaa'
}

Themes['Dark'] = Theme.defineTheme('Dark', {
  'base': Themes.Classic,
  'blockStyles': blockStyles,
  'categoryStyles': categoryStyles,
  'componentStyles': componentStylesDark
});

Themes['Light'] = Theme.defineTheme('Light', {
  'base': Themes.Classic,
  'blockStyles': blockStyles,
  'categoryStyles': categoryStyles,
  'componentStyles': componentStylesLight
});


