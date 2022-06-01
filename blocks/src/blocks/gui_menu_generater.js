import { DropdownHelper } from '../util/util'

const MenuGenerator = {}

MenuGenerator.controlProps = new DropdownHelper([
  ['alpha', 'alpha', 'NUM', '', 'Gets or sets alpha value for the control (1 means opaque and 0 means entirely transparent)'],
  ['isEnabled', 'isEnabled', 'BOOL', 'TRUE', 'Gets or sets if control is Enabled'],
  ['isHitTestVisible', 'isHitTestVisible', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the control can be hit with pointer events'],
  ['isVisible', 'isVisible', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the control is visible'],
  ['isPointerBlocker', 'isPointerBlocker', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the control can block pointer events'],
  ['scaleX', 'scaleX', 'NUM', '1', 'Gets or sets a value indicating the scale factor on X axis (1 by default)'],
  ['scaleY', 'scaleY', 'NUM', '1', 'Gets or sets a value indicating the scale factor on Y axis (1 by default)'],
  ['transformCenterX', 'transformCenterX', 'NUM', '', 'Gets or sets the transformation center on X axis (0 by default)'],
  ['transformCenterY', 'transformCenterY', 'NUM', '', 'Gets or sets the transformation center on Y axis (0 by default)'],
])

MenuGenerator.advTextureProp = new DropdownHelper([
  ['isBlocking', 'isBlocking', 'BOOL', 'FALSE', 'Is the texture preventing material to render while loading. If false, a default texture will be used instead of the loading one during the preparation step.'],
  ['layerMask', 'layerMask', 'HEX', '10000000', 'Define a mask to restrict the layer to only some of the scene cameras.'],
])

export { MenuGenerator }