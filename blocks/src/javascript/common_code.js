import {JavaScript} from 'blockly';

const is_object = `
  // common function
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
  }`

export {
  is_object
}