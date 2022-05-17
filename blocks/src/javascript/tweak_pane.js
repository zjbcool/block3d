import { JavaScript } from 'blockly';
import { wrapFn } from '../util/util';
import { is_object } from './common_code';

JavaScript['create_tweak_pane'] = block => {
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('create_tweak_pane', [`
  // create_tweak_pane
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(title) { 
    // 删除已经创建的Pane实例
    if(appInstance._glob.gui) {
      appInstance._glob.gui.dispose();
      const elem = document.getElementById('gui-container');
      elem.parentElement.removeChild(elem);
    }
    const container = document.createElement('div');
    container.className = 'gui-container';
    container.id = 'gui-container';
    document.getElementById('renderCanvas').parentElement.appendChild(container);

    const pane = new Tweakpane.Pane({container: container, title: title});
    appInstance._glob.gui = pane;
  }`]);
  return `
  ${fun}(${title});`
}

JavaScript['pane_add_folder'] = block => {
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('pane_add_folder', [`
  // pane_add_folder block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(title) { 
    if(!appInstance._glob.gui) return;
    return appInstance._glob.gui.addFolder({title: title})
  }`]);
  return [`${fun}(${title})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['pane_slider_options'] = JavaScript['object_key_value'];

JavaScript['pane_add_slider'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_NONE) || `\'\'`;
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  JavaScript.provideFunction_('is_object', [is_object]);

  const fun = JavaScript.provideFunction_('pane_add_slider', [`
  // pane_add_slider block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, options, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {
      min: 0,
      max: 1,
      value: 0.5,
    }
    is_object(options) && Object.assign(defaultOptions, options);
    const labels = {};
    labels[label] = defaultOptions.value
    const sliderInput = folder ? folder.addInput(labels, label, defaultOptions) : appInstance._glob.gui.addInput(labels, label, defaultOptions)
    sliderInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`]);
  return `
  ${fun}(${folder}, ${label}, ${options}, ${doCb});`
}

JavaScript['pane_add_list'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_NONE) || `\'\'`;
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  JavaScript.provideFunction_('is_object', [is_object]);

  const fun = JavaScript.provideFunction_('pane_add_list', [`
  // pane_add_list block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, options, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {
      options: {}
    }
    is_object(options) && Object.assign(defaultOptions.options, options);
    const labels = {};
    labels[label] = Object.entries(defaultOptions.options)[0][1];
    const listInput = folder ? folder.addInput(labels, label, defaultOptions) : appInstance._glob.gui.addInput(labels, label, defaultOptions)
    listInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`]);
  return `
  ${fun}(${folder}, ${label}, ${options}, ${doCb});`
}

JavaScript['pane_add_checkbox'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_NONE) || `\'\'`;
  const checked = block.getFieldValue('CHECKED') === 'TRUE';
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('pane_add_checkbox', [`
  // pane_add_checkbox block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, checked, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    defaultOptions[label] = checked;
    const checkboxInput = folder ? folder.addInput(defaultOptions, label) : appInstance._glob.gui.addInput(defaultOptions, label)
    checkboxInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`]);
  return `
  ${fun}(${folder}, ${label}, ${checked}, ${doCb});`
}

JavaScript['pane_add_text'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_NONE) || `\'\'`;
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_NONE) || `\'\'`;
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('pane_add_text', [`
  // pane_add_text block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, text, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    defaultOptions[label] = text;
    const textInput = folder ? folder.addInput(defaultOptions, label) : appInstance._glob.gui.addInput(defaultOptions, label)
    textInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`]);
  return `
  ${fun}(${folder}, ${label}, ${text}, ${doCb});`
}

JavaScript['pane_add_color'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_NONE) || `\'\'`;
  const color = JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_NONE) || `\'\'`;
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('pane_add_color', [`
  // pane_add_color block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, label, color, doCb) { 
    if(!appInstance._glob.gui) return;
    const defaultOptions = {}
    color.substring(0,1) === '#' && (defaultOptions[label] = color);
    const options = {view: 'color'}
    const colorInput = folder ? folder.addInput(defaultOptions, label, options) : appInstance._glob.gui.addInput(defaultOptions, label, options)
    colorInput.on('change', event => {
      appInstance._glob.tweakPanValue = event.value;
      doCb();
    })
  }`]);
  return `
  ${fun}(${folder}, ${label}, ${color}, ${doCb});`
}

JavaScript['pane_add_button'] = block => {
  const folder = JavaScript.valueToCode(block, 'FOLDER', JavaScript.ORDER_NONE) || null;
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_NONE) || `\'\'`;
  const doCb = `() => {${JavaScript.statementToCode(block, 'DO_CB')}}`;

  const fun = JavaScript.provideFunction_('pane_add_button', [`
  // pane_add_button block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(folder, title, doCb) { 
    if(!appInstance._glob.gui) return;
    const options = { title: title }
    const btn = folder ? folder.addButton(options) : appInstance._glob.gui.addButton(options)
    btn.on('click', () => {
      doCb();
    })

  }`]);
  return `
  ${fun}(${folder}, ${title}, ${doCb});`
}

JavaScript['pane_get_value'] = block => {
  return [`appInstance._glob.tweakPanValue`, JavaScript.ORDER_FUNCTION_CALL]
}
