import { Msg } from 'blockly';
import en from './en';
import tooltip_en from './tooltip_en';

Object.assign(en, tooltip_en);
Object.keys(en).forEach(function (k) {
  Msg[k] = en[k];
});


