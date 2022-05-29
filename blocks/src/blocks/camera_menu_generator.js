import { DropdownHelper } from "../util/util.js";

const MenuGenerator = {};

MenuGenerator.cameraType = new DropdownHelper([
  ['UniversalCamera', 'UniversalCamera'],
  ['ArcRotateCamera', 'ArcRotateCamera'],
  ['FollowCamera', 'FollowCamera'],
  ['AnaglyphUniversalCamera', 'AnaglyphUniversalCamera'],
  ['AnaglyphArcRotateCamera', 'AnaglyphArcRotateCamera'],
  ['DeviceOrientationCamera', 'DeviceOrientationCamera'],
])

const applyGravity = ['applyGravity', 'applyGravity', 'BOOL', 'TRUE', 'camera_prop_applyGravity_tooltip'],
  angularSensibility = ['angularSensibility', 'angularSensibility', 'NUM', '2000', 'camera_prop_angularSensibility_tooltip'],
  angularSensibilityX = ['angularSensibilityX', 'angularSensibilityX', 'NUM', '1000', 'camera_prop_angularSensibilityX_tooltip'],
  angularSensibilityY = ['angularSensibilityY', 'angularSensibilityY', 'NUM', '1000', 'camera_prop_angularSensibilityY_tooltip'],
  alpha = ['alpha', 'alpha', 'NUM', '1', 'camera_prop_alpha_tooltip'],
  beta = ['beta', 'beta', 'NUM', '1', 'camera_prop_beta_tooltip'],
  cameraDirection = ['cameraDirection', 'cameraDirection', 'VECTOR3', [0, 0, -1], 'camera_prop_cameraDirection_tooltip'],
  cameraRotation = ['cameraRotation', 'cameraRotation', 'VECTOR2', [0, 0], 'camera_prop_cameraRotation_tooltip'],
  checkCollisions = ['checkCollisions', 'checkCollisions', 'BOOL', 'TRUE', 'camera_prop_checkCollisions_tooltip'],
  cameraAcceleration = ['cameraAcceleration', 'cameraAcceleration', 'NUM', '0.005', 'camera_prop_cameraAcceleration_tooltip'],
  collisionRadius = ['collisionRadius', 'collisionRadius', 'VECTOR3', [0, 0, -1], 'camera_prop_collisionRadius_tooltip'],
  ellipsoid = ['ellipsoid', 'ellipsoid', 'VECTOR3', [1, 1, 1], 'camera_prop_ellipsoid_tooltip'],
  ellipsoidOffset = ['ellipsoidOffset', 'ellipsoidOffset', 'VECTOR3', [0, 0, 0], 'camera_prop_ellipsoidOffset_tooltip'],
  fov = ['fov', 'fov', 'NUM', '0.8', 'camera_prop_fov_tooltip'],
  globalPosition = ['globalPosition', 'globalPosition', 'VECTOR3', [0, 0, 0], 'camera_prop_globalPosition_tooltip'],
  heightOffset = ['heightOffset', 'heightOffset', 'NUM', '8', 'camera_prop_heightOffset_tooltip'],
  ignoreParentScaling = ['ignoreParentScaling', 'ignoreParentScaling', 'BOOL', 'TRUE', 'camera_prop_ignoreParentScaling_tooltip'],
  inertia = ['inertia', 'inertia', 'NUM', '0.9', 'camera_prop_inertia_tooltip'],
  inverseRotationSpeed = ['inverseRotationSpeed', 'inverseRotationSpeed', 'NUM', '1', 'camera_prop_inverseRotationSpeed_tooltip'],
  invertRotation = ['invertRotation', 'invertRotation', 'BOOL', 'TRUE', 'camera_prop_invertRotation_tooltip'],
  keysDown = ['keysDown', 'keysDown', 'ARRAY', '', 'camera_prop_keysDown_tooltip'],
  keysDownward = ['keysDownward', 'keysDownward', 'ARRAY', '', '_tooltip'],
  keysLeft = ['keysLeft', 'keysLeft', 'ARRAY', '', 'camera_prop_keysLeft_tooltip'],
  keysRight = ['keysRight', 'keysRight', 'ARRAY', '', 'camera_prop_keysRight_tooltip'],
  keysRotateLeft = ['keysRotateLeft', 'keysRotateLeft', 'ARRAY', '', 'camera_prop_keysRotateLeft_tooltip'],
  keysRotateRight = ['keysRotateRight', 'keysRotateRight', 'ARRAY', '', 'camera_prop_keysRotateRight_tooltip'],
  keysUp = ['keysUp', 'keysUp', 'ARRAY', '', 'camera_prop_keysUp_tooltip'],
  keysUpward = ['keysUpward', 'keysUpward', 'ARRAY', '', 'camera_prop_keysUpward_tooltip'],
  lockedTarget = ['lockedTarget', 'lockedTarget', 'NONE', '', 'camera_prop_lockedTarget_tooltip'],
  lowerAlphaLimit = ['lowerAlphaLimit', 'lowerAlphaLimit', 'NUM', '', 'camera_prop_lowerAlphaLimit_tooltip'],
  lowerBetaLimit = ['lowerBetaLimit', 'lowerBetaLimit', 'NUM', '', 'camera_prop_lowerBetaLimit_tooltip'],
  lowerHeightOffsetLimit = ['lowerHeightOffsetLimit', 'lowerHeightOffsetLimit', 'NUM', '', 'camera_prop_lowerHeightOffsetLimit_tooltip'],
  lowerRadiusLimit = ['lowerRadiusLimit', 'lowerRadiusLimit', 'NUM', '', 'camera_prop_lowerRadiusLimit_tooltip'],
  lowerRotationOffsetLimit = ['lowerRotationOffsetLimit', 'lowerRotationOffsetLimit', 'ANGLE', '', 'camera_prop_lowerRotationOffsetLimit_tooltip'],
  maxCameraSpeed = ['maxCameraSpeed', 'maxCameraSpeed', 'NUM', '8', 'camera_prop_maxCameraSpeed_tooltip'],
  mapPanning = ['mapPanning', 'mapPanning', 'BOOL', 'TRUE', 'camera_prop_mapPanning_tooltip'],
  position = ['position', 'position', 'VECTOR3', [0, 0, 0], 'camera_prop_position_tooltip'],
  panningAxis = ['panningAxis', 'panningAxis', 'VECTOR3', [0, 0, 0], 'camera_prop_panningAxis_tooltip'],
  panningDistanceLimit = ['panningDistanceLimit', 'panningDistanceLimit', 'NUM', '', 'camera_prop_panningDistanceLimit_tooltip'],
  panningInertia = ['panningInertia', 'panningInertia', 'NUM', '', 'camera_prop_panningInertia_tooltip'],
  panningOriginTarget = ['panningOriginTarget', 'panningOriginTarget', 'NONE', '', 'camera_prop_panningOriginTarget_tooltip'],
  pinchToPanMaxDistance = ['pinchToPanMaxDistance', 'pinchToPanMaxDistance', 'NUM', '', 'camera_prop_pinchToPanMaxDistance_tooltip'],
  maxZ = ['maxZ', 'maxZ', 'NUM', '20', 'camera_prop_maxZ_tooltip'],
  minZ = ['minZ', 'minZ', 'NUM', '0.5', 'camera_prop_minZ_tooltip'],
  noRotationConstraint = ['noRotationConstraint', 'noRotationConstraint', 'BOOL', 'TRUE', 'camera_prop_noRotationConstraint_tooltip'],
  radius = ['radius', 'radius', 'NUM', '20', 'camera_prop_radius_tooltip'],
  rotation = ['rotation', 'rotation', 'VECTOR3', [0, 0, 0], 'camera_prop_rotation_tooltip'],
  rotationOffset = ['rotationOffset', 'rotationOffset', 'ANGLE', '', 'camera_prop_rotationOffset_tooltip'],
  speed = ['speed', 'speed', 'NUM', '1', 'camera_prop_speed_tooltip'],
  target = ['target', 'target', 'VECTOR3', [0, 0, 0], 'camera_prop_target_tooltip'],
  targetHost = ['targetHost', 'targetHost', 'MESH', '', 'camera_prop_targetHost_tooltip'],
  targetScreenOffset = ['targetScreenOffset', 'targetScreenOffset', 'VECTOR2', [0, 0], 'camera_prop_targetScreenOffset_tooltip'],
  touchAngularSensibility = ['touchAngularSensibility', 'touchAngularSensibility', 'NUM', '4000', 'camera_prop_touchAngularSensibility_tooltip'],
  touchMoveSensibility = ['touchMoveSensibility', 'touchMoveSensibility', 'NUM', '250', 'camera_prop_touchMoveSensibility_tooltip'],
  upperAlphaLimit = ['upperAlphaLimit', 'upperAlphaLimit', 'NUM', '', 'camera_prop_upperAlphaLimit_tooltip'],
  upperBetaLimit = ['upperBetaLimit', 'upperBetaLimit', 'NUM', '', 'camera_prop_upperBetaLimit_tooltip'],
  upperHeightOffsetLimit = ['upperHeightOffsetLimit', 'upperHeightOffsetLimit', 'NUM', '', 'camera_prop_upperHeightOffsetLimit_tooltip'],
  upperRadiusLimit = ['upperRadiusLimit', 'upperRadiusLimit', 'NUM', '', 'camera_prop_upperRadiusLimit_tooltip'],
  upperRotationOffsetLimit = ['upperRotationOffsetLimit', 'upperRotationOffsetLimit', 'ANGLE', '', 'camera_prop_upperRotationOffsetLimit_tooltip'],
  useNaturalPinchZoom = ['useNaturalPinchZoom', 'useNaturalPinchZoom', 'BOOL', 'TRUE', 'camera_prop_useNaturalPinchZoom_tooltip'],
  wheelDeltaPercentage = ['wheelDeltaPercentage', 'wheelDeltaPercentage', 'NUM', '', 'camera_prop_wheelDeltaPercentage_tooltip'],
  wheelPrecision = ['wheelPrecision', 'wheelPrecision', 'NUM', '3', 'camera_prop_wheelPrecision_tooltip'];

MenuGenerator.UniversalCamera = new DropdownHelper([
  applyGravity, angularSensibility, cameraDirection, cameraRotation, checkCollisions, ellipsoid, ellipsoidOffset, fov, globalPosition, ignoreParentScaling, inertia, inverseRotationSpeed, position, target, invertRotation, keysDown, keysDownward, keysLeft, keysRight, keysRotateLeft, keysRotateRight, keysUp, keysUpward, lockedTarget, maxZ, minZ, noRotationConstraint, rotation, speed, touchAngularSensibility, touchMoveSensibility
]);

MenuGenerator.ArcRotateCamera = new DropdownHelper([
  alpha, beta, cameraDirection, cameraRotation, checkCollisions, collisionRadius, fov, globalPosition, inertia, lockedTarget, lowerAlphaLimit, lowerBetaLimit, lowerRadiusLimit, mapPanning, maxZ, minZ, panningAxis, panningDistanceLimit, panningInertia, panningOriginTarget, pinchToPanMaxDistance, position, radius, speed, target, targetHost, targetScreenOffset, upperAlphaLimit, upperBetaLimit, upperRadiusLimit, useNaturalPinchZoom, wheelDeltaPercentage, wheelPrecision,
]);

MenuGenerator.FollowCamera = new DropdownHelper([
  cameraAcceleration,
  cameraDirection,
  cameraRotation,
  fov,
  globalPosition,
  heightOffset,
  inertia,
  inverseRotationSpeed,
  invertRotation,
  lockedTarget,
  lowerHeightOffsetLimit,
  lowerRadiusLimit,
  lowerRotationOffsetLimit,
  maxCameraSpeed,
  maxZ,
  minZ,
  radius,
  rotation,
  rotationOffset,
  speed,
  upperHeightOffsetLimit,
  upperRadiusLimit,
  upperRotationOffsetLimit,
]);

MenuGenerator.AnaglyphUniversalCamera = MenuGenerator.UniversalCamera;

MenuGenerator.AnaglyphArcRotateCamera = MenuGenerator.ArcRotateCamera;

MenuGenerator.DeviceOrientationCamera = MenuGenerator.UniversalCamera


export default MenuGenerator;