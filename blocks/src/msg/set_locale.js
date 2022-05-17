import { Msg } from 'blockly';
import en from './en';
import zh from './zh';
import tooltip_en from './tooltip_en';
import tooltip_zh from './tooltip_zh';

Object.assign(en, tooltip_en);
Object.assign(zh, tooltip_zh);

function setLocale(locale) {
  Object.keys(locale).forEach(function (k) {
    Msg[k] = locale[k];
  });
};

export default function (lang) {
  switch (lang) {
    case 'en':
      setLocale(en)
      break
    case 'zh':
      setLocale(zh)
      break
  }

}