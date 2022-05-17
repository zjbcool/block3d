import { DropdownHelper } from "../util/util";
const MenuGenerator = {};
MenuGenerator.propType = new DropdownHelper([
  ['Float', 'BABYLON.Animation.ANIMATIONTYPE_FLOAT'],
  ['Vector2', 'BABYLON.Animation.ANIMATIONTYPE_VECTOR2'],
  ['Vector3', 'BABYLON.Animation.ANIMATIONTYPE_VECTOR3'],
  ['Color3', 'BABYLON.Animation.ANIMATIONTYPE_COLOR3'],
])

MenuGenerator.loopMode = new DropdownHelper([
  ['cycle', 'BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE'],
  ['constant', 'BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT'],
  ['relative', 'BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE'],
])

MenuGenerator.easing = new DropdownHelper([
  ['CircleEase', 'new BABYLON.CircleEase()'],
  ['BackEase', 'new BABYLON.BackEase(1)'],
  ['BounceEase', 'new BABYLON.BounceEase(2, 0.1)'],
  ['CubicEase', 'new BABYLON.CubicEase()'],
  ['ElasticEase', 'new BABYLON.ElasticEase(3, 1)'],
  ['ExponentialEase', 'new BABYLON.ExponentialEase(2)'],
  ['PowerEase', 'new BABYLON.PowerEase(2)'],
  ['QuadraticEase', 'new BABYLON.QuadraticEase()'],
  ['QuarticEase', 'new BABYLON.QuarticEase()'],
  ['QuinticEase', 'new BABYLON.QuinticEase()'],
  ['SineEase', 'new BABYLON.SineEase()'],
  ['BezierCurveEase', 'new BABYLON.BezierCurveEase()'],
])

MenuGenerator.animationGroupProps = new DropdownHelper([
  ['animatables', 'animatables', 'ARRAY', '', 'returning the list of animatables controlled by this animation group.'],
  ['children', 'children', 'ARRAY', '', 'Gets the list of target animations'],
  ['from', 'from', 'NUM', 'Gets the first frame'],
  ['isAdditive', 'isAdditive', 'BOOL', 'TRUE', 'Gets or sets if all animations should be evaluated additively'],
  ['isPlaying', 'isPlaying', 'BOOL', 'TRUE', 'Gets a value indicating that the current group is playing'],
  ['isStarted', 'isStarted', 'BOOL', 'TRUE', 'Define if the animations are started'],
  ['loopAnimation', 'loopAnimation', 'BOOL', 'TRUE', 'Gets or sets if all animations should loop or not'],
  ['speedRatio', 'speedRatio', 'NUM', '', 'Gets or sets the speed ratio to use for all animations'],
  ['targetedAnimations', 'targetedAnimations', 'ARRAY', '', 'Gets the targeted animations for this animation group'],
  ['to', 'to', 'NUM', '', 'Gets the last frame'],
])

MenuGenerator.animationGroupMethod = new DropdownHelper([
  ['pause', 'pause'],
  ['play', 'play'],
  ['reset', 'reset'],
  ['restart', 'restart'],
  ['start', 'start'],
  ['stop', 'stop'],
])


export default MenuGenerator
// BABYLON.Animation.ANIMATIONTYPE_COLOR3
// BABYLON.Animation.ANIMATIONTYPE_FLOAT
// BABYLON.Animation.ANIMATIONTYPE_MATRIX
// BABYLON.Animation.ANIMATIONTYPE_QUATERNION
// BABYLON.Animation.ANIMATIONTYPE_VECTOR2
// BABYLON.Animation.ANIMATIONTYPE_VECTOR3

// BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE - Restart the animation from initial value
// BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT - Pause the animation at the final value
// BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE - Repeat the animation incrementing using key value gradients. 