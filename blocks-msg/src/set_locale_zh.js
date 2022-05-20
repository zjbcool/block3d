import { Msg } from 'blockly';
import zh from './zh';
import tooltip_zh from './tooltip_zh';

Object.assign(zh, tooltip_zh);
Object.keys(zh).forEach(function (k) {
  Msg[k] = zh[k];
});