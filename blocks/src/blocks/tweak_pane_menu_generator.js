import { DropdownHelper } from '../util/util';

export default {
  sliderOptions: new DropdownHelper([
    ['min', 'min', 'NUM', '0', 'The lowest value in the slider of permitted values.'],
    ['max', 'max', 'NUM', '1', 'The greatest value in the slider of permitted values.'],
    ['step', 'step', 'NUM', '.1', 'Constraints step of changes.'],
    ['value', 'value', 'NUM', '0.5', 'The selected number.'],
  ]),
}