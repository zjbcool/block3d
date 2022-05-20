export default {
  // 提示
  // text 分类
  /**
   * text_join block
   */
  text_join_tooltip: 'Join text',
  // advanced 分类
  /**
   * advanced_connect block
   */
  ADVANCED_CONNECT_TOOLTIP: 'This block facilitates connecting other blocks with each other, \n to make it more convenient to move, delete and use them in other blocks.',
  /**
   * advanced_comment block
   */
  ADVANCED_COMMENT_TOOLTIP: 'Comment block',
  /**
   * get_VARS block
   */
  GET_VARS_TOOLTIP: 'return the value with given property of global object',
  /**
   * set_VARS block
   */
  SET_VARS_TOOLTIP: 'set the property of the global object',
  /**
   * create_anonymous_function block
   */
  CREATE_ANONYMOUS_FUNCTION_TOOLTIP: 'create an anonymous function',
  /**
   * set_FUNC block
   */
  SET_FUNC_TOOLTIP: 'set the property of the global object',
  /**
   * get_FUNC block
   */
  EXECUTE_FUNC_TOOLTIP: 'call function',
  // scenes 分类
  /**
   * create_default_environment block
   */
  CREATE_DEFAULT_ENVIRONMENT_TOOLTIP: 'Creates a new environment',
  // lights 分类
  /**
   * create_default_light block
   */
  CREATE_DEFAULT_LIGTH_TOOLTIP: 'Creates a default light for the scene.\nreplace: (boolean) has the default false, when true replaces the existing lights in the scene with a hemispheric light',
  /**
   * create_light block
   */
  POINT_LIGHT_TOOLTIP: 'Creates a PointLight object from the passed name and position (Vector3) and adds it in the scene.\nA PointLight emits the light in every direction.\nIt can cast shadows.',
  DIRECTIONAL_LIGHT_TOOLTIP: 'Creates a DirectionalLight object in the scene, oriented towards the passed direction (Vector3).\nThe directional light is emitted from everywhere in the given direction.\nIt can cast shadows.',
  SPOT_LIGHT_TOOTIP: 'Creates a SpotLight object in the scene. A spot light is a simply light oriented cone.\nIt can cast shadows.\nname: string \nThe light friendly name\nposition: Vector3 \nThe position of the spot light in the scene\ndirection: Vector3 \nThe direction of the light in the scene\nangle: number \nThe cone angle of the light in Radians\nexponent: number \nThe light decay speed with the distance from the emission spot',
  /**
   * create_default_environment_option block 
   * https://doc.babylonjs.com/typedoc/interfaces/babylon.ienvironmenthelperoptions
  */
  ENV_KEY_VALUE_BACKGROUND_Y_ROTATION_TOOLTIP: 'The background rotation around the Y axis of the scene.\n This helps aligning the key lights of your scene with the background. \n 0 by default.',
  ENV_KEY_VALUE_CAMERA_CONTRAST_TOOLTIP: 'The value of the contrast to apply to the scene.\n 1.6 by default if setupImageProcessing is true.',
  ENV_KEY_VALUE_CAMERA_EXPOSURE_TOOLTIP: 'The value of the exposure to apply to the scene.\n 0.6 by default if setupImageProcessing is true.',
  ENV_KEY_VALUE_CREATE_GROUND_TOOLTIP: 'Specifies whether or not to create a ground.\n True by default.',
  ENV_KEY_VALUE_CREATE_SKYBOX_TOOLTIP: 'Specifies whether or not to create a skybox.\n True by default.',
  ENV_KEY_VALUE_ENABLE_GROUND_MIRROR_TOOLTIP: 'Creates a mirror texture attach to the ground.\n false by default.',
  ENV_KEY_VALUE_ENABLE_GROUND_SHADOW_TOOLTIP: 'Enables the ground to receive shadows.\n True by default.',
  ENV_KEY_VALUE_ENVIRONMENT_TEXTURE_TOOLTIP: 'The texture used as your environment texture in the scene.\n Comes from the BabylonJS CDN by default and in use if setupImageProcessing is true.\n Remarks: Can be either a texture or a url.',
  ENV_KEY_VALUE_GROUND_COLOR_TOOLTIP: 'The color mixed in the ground texture by default.\n BabylonJS clearColor by default.',
  ENV_KEY_VALUE_GROUND_MIRROR_AMOUNT_TOOLTIP: 'Specifies the ground mirror visibility amount.\n 1 by default',
  ENV_KEY_VALUE_GROUND_MIRROR_BLUR_KERNEL_TOOLTIP: 'Specifies the ground mirror blur kernel size.\n 64 by default.',
  ENV_KEY_VALUE_GROUND_MIRROR_FALL_OFF_DISTANCE_TOOLTIP: 'Specifies the ground mirror Falloff distance.\n This can helps reducing the size of the reflection.\n 0 by Default.',
  ENV_KEY_VALUE_GROUND_MIRROR_FRESNEL_WEIGHT_TOOLTIP: 'Specifies the ground mirror reflectance weight.\n This uses the standard weight of the background material to setup the fresnel effectof the mirror.\n 1 by default.',
  ENV_KEY_VALUE_GROUND_MIRROR_SIZE_RATIO_TOOLTIP: 'Specifies the ground mirror size ratio.\n 0.3 by default as the default kernel is 64.',
  ENV_KEY_VALUE_GROUND_MIRROR_TEXTURE_TYPE_TOOLTIP: 'Specifies the ground mirror texture type.\n Unsigned Int by Default.',
  ENV_KEY_VALUE_GROUND_OPACITY_TOOLTIP: 'Specifies the ground opacity.\n 1 by default.',
  ENV_KEY_VALUE_GROUND_SHADOW_LEVEL_TOOLTIP: 'Helps preventing the shadow to be fully black on the ground.\n 0.5 by default.',
  ENV_KEY_VALUE_GROUND_SIZE_TOOLTIP: 'Specifies the ground size.\n 15 by default.',
  ENV_KEY_VALUE_GROUND_TEXTURE_TOOLTIP: 'The texture used on the ground for the main color.\n Comes from the BabylonJS CDN by default.\n Remarks: Can be either a texture or a url.',
  ENV_KEY_VALUE_GROUND_Y_BIAS_TOOLTIP: 'Specifies a bias applied to the ground vertical position to prevent z-fighting with the shown objects.',
  ENV_KEY_VALUE_GROUND_ROOT_POSITION_TOOLTIP: 'Default position of the rootMesh if autoSize is not true.',
  ENV_KEY_VALUE_SETUP_IMAGE_PROCESSING_TOOLTIP: 'Sets up the image processing in the scene.\n true by default.',
  ENV_KEY_VALUE_SIZE_AUTO_TOOLTIP: 'Compute automatically the size of the elements to best fit with the scene.',
  ENV_KEY_VALUE_SKYBOX_COLOR_TOOLTIP: 'The color mixed in the skybox texture by default.\n BabylonJS clearColor by default.',
  ENV_KEY_VALUE_SKYBOX_SIZE_TOOLTIP: 'Specifies the skybox size.\n 20 by default.',
  ENV_KEY_VALUE_SKYBOX_TEXTURE_TOOLTIP: 'The texture used on the skybox for the main color.\n Comes from the BabylonJS CDN by default.\n Remarks: Can be either a texture or a url.',
  ENV_KEY_VALUE_TONE_MAPPING_ENABLED_TOOLTIP: 'Specifies whether or not tonemapping should be enabled in the scene.\n true by default if setupImageProcessing is true.',
  /**
   * create_photo_dome block
   */
  CREATE_PHOTO_DOME_TOOLTIP: 'Display a 360 degree photo on an approximately spherical surface, useful for VR applications or skyboxes.',
  // meshes 分类
  /**
   * 创建网格通用
   */
  MESH_FACE_COLORS_TOOLTIP: '(Color4[]) array of 6 Color4, one per box face',
  MESH_FACE_UV_TOOLTIP: '(Vector4[]) array of 6 Vector4, one per box face',
  MESH_UPDATABLE_TOOLTIP: '(boolean) true if the mesh is updatable',
  MESH_SIDE_ORIENTATION_TOOLTIP: '(number) side orientation\n0-front side\n1-back side\n2-double side',
  MESH_FRONT_UVS_TOOLTIP: '(Vector4) ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set',
  MESH_BACK_UVS_TOOLTIP: '(Vector4) ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set',
  /**
   * mesh_create_box_option block
   * https://doc.babylonjs.com/divingDeeper/mesh/creation/set/box
   */
  MESH_BOX_SIZE_TOOLTIP: '(number) size of each box side',
  MESH_BOX_HEIGHT_TOOLTIP: '(number) height size, overwrites size option',
  MESH_BOX_WIDTH_TOOLTIP: '(number) width size, overwrites size option',
  MESH_BOX_DEPTH_TOOLTIP: '(number) depth size, overwrites size option',
  MESH_BOX_WRAP_TOOLTIP: '(boolean) ( BJS 4.0 or >) when true all vertical sides (0, 1, 2, 3) will apply image textures upright',
  MESH_BOX_TOP_BASE_AT_TOOLTIP: '(number) (BJS 4.0 or >) base of top touches side given 0, 1, 2, 3',
  MESH_BOX_BOTTOM_BASE_AT_TOOLTIP: '(number) (BJS 4.0 or >) base of bottom touches side given 0, 1, 2, 3',
  /**
   * mesh_create_tiledbox_option block
   * https://doc.babylonjs.com/divingDeeper/mesh/creation/set/tiled_box
   */
  MESH_TILED_BOX_TILE_SIZE_TOOLTIP: '(number) size of each tile side',
  MESH_TILED_BOX_TILE_HEIGHT_TOOLTIP: '(number) tile height size, overwrites tileSize option',
  MESH_TILED_BOX_TILE_WIDTH_TOOLTIP: '(number) tile width size, overwrites tileSize option',
  MESH_TILED_BOX_PATTERN_TOOLTIP: '(number) how tiles are reflected or rotatedacross a face\n0-NO_FLIP\n1-FLIP_TILE\n2-ROTATE_TILE\n3-FLIP_ROW\n4-ROTATE_ROW\n5-FLIP_N_ROTATE_TILE\n6-FLIP_N_ROTATE_ROW',
  MESH_TILED_BOX_ALIGN_VERTICAL_TOOLTIP: '(number) positions whole tiles at top, bottom or center of a face\n0-CENTER\n1-TOP\n2-BOTTOM',
  MESH_TILED_BOX_ALIGN_HORIZONTAL_TOOLTIP: '(number) positions whole tiles at left, right or center of a face\n0-CENTER\n1-LEFT\n2-RIGHT',
  // cameras 分类
  /**
   * create_camera block
   */
  create_universal_camera_tooltip: 'The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads.\n name: Define the name of the camera in the scene\n position: Define the start position of the camera in the scene',
  create_arc_rotate_camera_tooltip: 'This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.\n Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.\n name: Defines the name of the camera\n alpha: Defines the camera rotation along the longitudinal axis\n beta: Defines the camera rotation along the latitudinal axis\n radius: Defines the camera distance from its target\n target: Defines the camera target',
  create_follow_camera_tooltip: 'A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and an arc rotate version arcFollowCamera are available.\n name: string Define the name of the camera in the scene\n position: Vector3 Define the position of the camera',
  create_anaglyph_universal_camera_tooltip: 'Camera used to simulate anaglyphic rendering (based on UniversalCamera) \n name: string defines camera name \n position: Vector3 defines initial position\n interaxialDistance: number defines distance between each color axis',
  create_anaglyph_arc_rotate_camera_tooltip: 'Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)\n name: string defines camera name\n alpha: number defines alpha angle (in degree)\n beta: number defines beta angle (in degree)\n radius: number defines radius\n target: Vector3 defines camera target\n interaxialDistance: number defines distance between each color axis',
  create_device_orienation_camera_tooltip: 'This is a camera specifically designed to react to device orientation events such as a modern mobile device being tilted forward or back and left or right.\n name: string The name of the camera\n position: Vector3 The start position camera',
  /**
   * set_camera_prop block 
   * 相机属性
   */
  camera_prop_applyGravity_tooltip: 'boolean Enable or disable gravity on the camera.',
  camera_prop_angularSensibilityX_tooltip: 'Gets or Set the pointer angular sensibility along the X axis or how fast is the camera rotating.',
  camera_prop_angularSensibilityY_tooltip: 'Gets or Set the pointer angular sensibility along the Y axis or how fast is the camera rotating.',
  camera_prop_cameraAcceleration_tooltip: 'Define how fast the camera can accelerate to follow it s target.',
  camera_prop_cameraDirection_tooltip: 'Vector3 Define the current direction the camera is moving to',
  camera_prop_cameraRotation_tooltip: 'Vector2 Define the current rotation the camera is rotating to',
  camera_prop_angularSensibility_tooltip: 'Gets or sets the input sensibility for a mouse input. (default is 2000.0) Higher values reduce sensitivity.',
  camera_prop_checkCollisions_tooltip: 'boolean Enable or disable collisions of the camera with the rest of the scene objects.',
  camera_prop_collisionRadius_tooltip: 'Vector3 Defines the collision radius of the camera.\n This simulates a sphere around the camera.',
  camera_prop_ellipsoid_tooltip: 'Vector3 Define the collision ellipsoid of the camera.\n This is helpful to simulate a camera body like the player body around the camera',
  camera_prop_ellipsoidOffset_tooltip: 'Vector3 Define an offset for the position of the ellipsoid around the camera.\n This can be helpful to determine the center of the body near the gravity center of the body\n instead of its head.',
  camera_prop_fov_tooltip: 'Field Of View is set in Radians. (default is 0.8)',
  camera_prop_globalPosition_tooltip: 'Gets the current world space position of the camera.',
  camera_prop_heightOffset_tooltip: 'Define a height offset between the camera and the object it follows. It can help following an object from the top (like a car chasing a plane)',
  camera_prop_ignoreParentScaling_tooltip: 'boolean Gets or sets a boolean indicating that the scaling of the parent hierarchy will not be taken in account by the camera',
  camera_prop_inertia_tooltip: 'Define the default inertia of the camera.',
  camera_prop_inverseRotationSpeed_tooltip: 'number Speed multiplier for inverse camera panning',
  camera_prop_invertRotation_tooltip: 'boolean Reverses mouselook direction to "natural" panning as opposed to traditional direct panning',
  camera_prop_keysDown_tooltip: 'Gets or Set the list of keyboard keys used to control the backward move of the camera.',
  camera_prop_keysDownward_tooltip: 'Gets or Set the list of keyboard keys used to control the downward move of the camera.',
  camera_prop_keysLeft_tooltip: 'Gets or Set the list of keyboard keys used to control the left strafe move of the camera.',
  camera_prop_keysRight_tooltip: 'Gets or Set the list of keyboard keys used to control the right strafe move of the camera.',
  camera_prop_keysRotateLeft_tooltip: 'Gets or Set the list of keyboard keys used to control the left rotation move of the camera.',
  camera_prop_keysRotateRight_tooltip: 'Gets or Set the list of keyboard keys used to control the right rotation move of the camera.',
  camera_prop_keysUp_tooltip: 'Gets or Set the list of keyboard keys used to control the forward move of the camera.',
  camera_prop_keysUpward_tooltip: 'Gets or Set the list of keyboard keys used to control the upward move of the camera.',
  camera_prop_lockedTarget_tooltip: 'Define the current target of the camera as an object or a position. Please note that locking a target will disable panning.',
  camera_prop_lowerAlphaLimit_tooltip: 'Nullable<number> Minimum allowed angle on the longitudinal axis.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_lowerBetaLimit_tooltip: 'number Minimum allowed angle on the latitudinal axis.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_lowerRadiusLimit_tooltip: 'Nullable<number> Minimum allowed distance of the camera to the target (The camera can not get closer).\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_lowerRotationOffsetLimit_tooltip: 'Minimum allowed angle to camera position relative to target object. This can help limiting how the Camera is able to move in the scene.',
  camera_prop_lowerHeightOffsetLimit_tooltip: 'Minimum allowed height of camera position relative to target object.This can help limiting how the Camera is able to move in the scene.',
  camera_prop_maxCameraSpeed_tooltip: 'Define the speed limit of the camera following an object.',
  camera_prop_maxZ_tooltip: 'Define the maximum distance the camera can see to. This is important to note that the depth buffer are not infinite and the further it end the more your scene might encounter depth fighting issue.',
  camera_prop_minZ_tooltip: 'Define the minimum distance the camera can see from. This is important to note that the depth buffer are not infinite and the closer it starts the more your scene might encounter depth fighting issue.',
  camera_prop_position_tooltip: 'Define the current local position of the camera in the scene',
  camera_prop_noRotationConstraint_tooltip: 'Add constraint to the camera to prevent it to move freely in all directions and around all axis.',
  camera_prop_rotation_tooltip: 'Define the current rotation of the camera',
  camera_prop_rotationOffset_tooltip: 'Define a rotation offset between the camera and the object it follows',
  camera_prop_speed_tooltip: 'Define the current speed of the camera',
  camera_prop_target_tooltip: 'Defines the target point of the camera.',
  camera_prop_targetHost_tooltip: 'Defines the target mesh of the camera.The camera looks towards it from the radius distance.Please note that setting a target host will disable panning.',
  camera_prop_touchAngularSensibility_tooltip: 'Defines the touch sensibility for rotation. The higher the faster.',
  camera_prop_touchMoveSensibility_tooltip: 'Defines the touch sensibility for move. The higher the faster.',
  camera_prop_alpha_tooltip: 'number Defines the rotation angle of the camera along the longitudinal axis.',
  camera_prop_beta_tooltip: 'number Defines the rotation angle of the camera along the latitudinal axis.',
  camera_prop_mapPanning_tooltip: 'boolean Defines if camera will eliminate transform on y axis.',
  camera_prop_panningAxis_tooltip: 'Vector3 Defines the allowed panning axis.',
  camera_prop_panningDistanceLimit_tooltip: 'Nullable<number> Defines the maximum distance the camera can pan.\n This could help keeping the camera always in your scene.',
  camera_prop_panningInertia_tooltip: 'number Defines the value of the inertia used during panning.\n 0 would mean stop inertia and one would mean no decelleration at all.',
  camera_prop_panningOriginTarget_tooltip: 'Vector3 Defines the target of the camera before panning.',
  camera_prop_pinchToPanMaxDistance_tooltip: 'number Defines the distance used to consider the camera in pan mode vs pinch/zoom.\n Basically if your fingers moves away from more than this distance you will be considered in pinch mode.',
  camera_prop_radius_tooltip: 'number Defines the radius of the camera from it s target point.',
  camera_prop_targetScreenOffset_tooltip: 'Vector2 Defines a screen offset for the camera position.',
  camera_prop_upperAlphaLimit_tooltip: 'Nullable<number> Maximum allowed angle on the longitudinal axis.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_upperBetaLimit_tooltip: 'number Maximum allowed angle on the latitudinal axis.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_upperHeightOffsetLimit_tooltip: 'Maximum allowed height of camera position relative to target object.This can help limiting how the Camera is able to move in the scene.',
  camera_prop_upperRadiusLimit_tooltip: 'Nullable<number> Maximum allowed distance of the camera to the target (The camera can not get further).\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_upperRotationOffsetLimit_tooltip: 'Maximum allowed angle to camera position relative to target object.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_useNaturalPinchZoom_tooltip: 'Gets or Set the pointer use natural pinch zoom to override the pinch precision and pinch delta percentage. When useNaturalPinchZoom is true, multi touch zoom will zoom in such that any object in the plane at the camera\'s target point will scale perfectly with finger motion.',
  camera_prop_wheelDeltaPercentage_tooltip: 'Gets or Set the mouse wheel delta percentage or how fast is the camera zooming. It will be used instead of pinchDeltaPrecision if different from 0. It defines the percentage of current camera.radius to use as delta when pinch zoom is used.',
  camera_prop_wheelPrecision_tooltip: 'Gets or Set the mouse wheel precision or how fast is the camera zooming.',

  // use_behavior_for_arc_rotate_camera block
  // https://doc.babylonjs.com/divingDeeper/behaviors/cameraBehaviors
  USE_BOUNCING_BEHAVIOR_TOOLTIP: 'The bouncing behavior is designed to produce a small bouncing effect when an ArcRotateCamera reaches the lowerRadiusLimit or the upperRadiusLimit.',
  USE_BOUNCING_BEHAVIOR_PROP_TOOLTIP: 'transitionDuration: Define the duration of the animation, in seconds. The default value is 450ms.\nlowerRadiusTransitionRange: Define the length of the distance animated by the transition when the lower radius is reached. The default value is 2.\nupperRadiusTransitionRange: Define the length of the distance animated by the transition when the upper radius is reached. The default value is -2.',
  USE_AUTO_ROTATION_BEHAVIOR_TOOLTIP: 'The autoRotation behavior is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.',
  USE_AUTO_ROTATION_BEHAVIOR_PROP_TOOLTIP: 'idleRotationSpeed: Speed at which the camera rotates around the mesh\nidleRotationWaitTime: Time (in seconds) to wait after user interaction before the camera starts rotating\nidleRotationSpinupTime: Time (seconds) to take to spin up to the full idle rotation speed\nzoomStopsAnimation: Flag that indicates if user zooming should stop animation',
  USE_FRAMING_BEHAVIOR_TOOLTIP: 'The framing behavior is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera from going under a virtual horizontal plane.',
  USE_FRAMING_BEHAVIOR_PROP_TOOLTIP: 'mode: The behavior can be configured to:\nBABYLON.FramingBehavior.IgnoreBoundsSizeMode: The camera can move all the way towards the mesh\nBABYLON.FramingBehavior.FitFrustumSidesMode: The camera is not allowed to zoom closer to the mesh than the point at which the adjusted bounding sphere touches the frustum sides\nradiusScale: Define the scale applied to the radius (1 by default)\npositionScale: Sets the scale to apply on Y axis to position camera focus. (0.5 by default which means center of bounding box)\ndefaultElevation: Define the angle above/below the horizontal plane to return to when the return to default elevation idle behavior is triggered, in radians (0.3 by default)\nelevationReturnTime: Define the time (in seconds) taken to return to the default beta position (1500 by default). A negative value indicates the camera should not return to the default.\nelevationReturnWaitTime: Define the delay (in seconds) taken before the camera returns to the default beta position (1000 by default)\nzoomStopsAnimation: Define if user zooming should stop animation\nframingTime: Define the transition time when framing the mesh, in seconds (1500 by default)',

  /**
   * set_get_active_camera block
   */
  set_get_active_camera_tooltip: 'Sets or gets the active camera.',
  /**
   * remove_camera block
   */
  remove_camera_tooltip: 'Remove a camera for the list of scene\'s cameras',

  // Events 分类

  /**
   * create_virtual_joystick_option block
   */
  create_virtual_joystick_option_alwaysVisible_tooltip: 'Defines whether or not the joystick container is always visible',
  create_virtual_joystick_option_color_tooltip: 'Color of the joystick && puck',
  create_virtual_joystick_option_containerImage_tooltip: 'Image URL for the joystick\'s container',
  create_virtual_joystick_option_containerSize_tooltip: 'Size of the joystick\'s container',
  create_virtual_joystick_option_limitToContainer_tooltip: 'Defines whether or not to limit the movement of the puck to the joystick\'s container',
  create_virtual_joystick_option_position_tooltip: 'Defines the unmoving position of the joystick container',
  create_virtual_joystick_option_puckImage_tooltip: 'Image URL for the joystick\'s puck',
  create_virtual_joystick_option_puckSize_tooltip: 'Size of the joystick\'s puck',
}