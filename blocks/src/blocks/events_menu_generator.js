import { DropdownHelper } from "../util/util.js";

const MenuGenerator = {};

MenuGenerator.PointerEvent = new DropdownHelper([
  ["pointerdoubletap", "BABYLON.PointerEventTypes.POINTERDOUBLETAP"],
  ["pointerdown", "BABYLON.PointerEventTypes.POINTERDOWN"],
  ["pointermove", "BABYLON.PointerEventTypes.POINTERMOVE"],
  ["pointerpick", "BABYLON.PointerEventTypes.POINTERPICK"],
  ["pointertap", "BABYLON.PointerEventTypes.POINTERTAP"],
  ["pointerup", "BABYLON.PointerEventTypes.POINTERUP"],
  ["pointerwheel", "BABYLON.PointerEventTypes.POINTERWHEEL"],
])

MenuGenerator.Actions = new DropdownHelper([
  ['doNothing', 'DoNothingAction'],
  ['setValue', 'SetValueAction'],
  ['switchBoolean', 'SwitchBooleanAction'],
  ['interpolateValue', 'InterpolateValueAction'],
  ['incrementValue', 'IncrementValueAction'],
  ['executeCode', 'ExecuteCodeAction'],
  ['combine', 'CombineAction'],
])

MenuGenerator.Triggers = new DropdownHelper([
  ['nothing', 'BABYLON.ActionManager.NothingTrigger'],
  ['onPick', 'BABYLON.ActionManager.OnPickTrigger'],
  ['onDoublePick', 'BABYLON.ActionManager.OnDoublePickTrigger'],
  ['onPickDown', 'BABYLON.ActionManager.OnPickDownTrigger'],
  ['onPickUp', 'BABYLON.ActionManager.OnPickUpTrigger'],
  ['onPickOut', 'BABYLON.ActionManager.OnPickOutTrigger'],
  ['onLeftPick', 'BABYLON.ActionManager.OnLeftPickTrigger'],
  ['onRightPick', 'BABYLON.ActionManager.OnRightPickTrigger'],
  ['onCenterPick', 'BABYLON.ActionManager.OnCenterPickTrigger'],
  ['onLongPress', 'BABYLON.ActionManager.OnLongPressTrigger'],
  ['onPointerOver', 'BABYLON.ActionManager.OnPointerOverTrigger'],
  ['onPointerOut', 'BABYLON.ActionManager.OnPointerOutTrigger'],
  ['onIntersectionEnter', 'BABYLON.ActionManager.OnIntersectionEnterTrigger'],
  ['onIntersectionExit', 'BABYLON.ActionManager.OnIntersectionExitTrigger'],
])

MenuGenerator.virtualJoystickOption = new DropdownHelper([
  ['alwaysVisible', 'alwaysVisible', 'BOOL', 'TRUE', 'create_virtual_joystick_option_alwaysVisible_tooltip'],
  ['color', 'color', 'TEXT', 'skyblue', 'create_virtual_joystick_option_color_tooltip'],
  ['containerImage', 'containerImage', 'TEXT', '', 'create_virtual_joystick_option_containerImage_tooltip'],
  ['containerSize', 'containerSize', 'NUM', '100', 'create_virtual_joystick_option_containerSize_tooltip'],
  ['limitToContainer', 'limitToContainer', 'BOOL', 'TRUE', 'create_virtual_joystick_option_limitToContainer_tooltip'],
  ['position', 'position', 'VECTOR2', '', 'create_virtual_joystick_option_position_tooltip'],
  ['puckImage', 'puckImage', 'TEXT', '', 'create_virtual_joystick_option_puckImage_tooltip'],
  ['puckSize', 'puckSize', 'NUM', '40', 'create_virtual_joystick_option_puckSize_tooltip'],
])

export default MenuGenerator;