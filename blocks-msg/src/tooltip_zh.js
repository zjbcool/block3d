export default {
  // 提示
  // text 分类
  /**
   * text_join block
   */
  text_join_tooltip: '这个拼图可以将两个或更多文本元素连接成一行。通过该拼图右键-创建element，创建和添加文本元素',
  // advanced 分类
  /**
   * advanced_connect block
   */
  ADVANCED_CONNECT_TOOLTIP: '该拼图仅用于连接其它拼图, 便于移动、删除和使用',
  /**
   * advanced_comment block
   */
  ADVANCED_COMMENT_TOOLTIP: '注释',
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
  create_universal_camera_tooltip: '漫游相机 可用于第一人称射击游戏，支持键盘、鼠标、触屏和游戏手柄。\n name: 定义场景中相机的名称\n position: 定义相机在场景中的初始位置',
  create_arc_rotate_camera_tooltip: '该相机可围绕前方的目标位置进行旋转（俗称刷锅）。可通过鼠标或触摸事件控制。\n 该相机就像围绕地球旋转的卫星一样，它与目标点的相对位置可通过3个参数控制： alpha (角度) 纬线上的旋转, beta (角度) 经线上的旋转，以及半径 radius 与目标点的距离.\n name: 相机名称\n alpha: 定义相机沿纬线旋转的角度\n beta: 定义相机沿经线旋转的角度\n radius: 定义相机与目标点的位置\n target: 定义相机的目标点',
  create_follow_camera_tooltip: '跟随相机 该相机以一个网格为目标，在其运行时进行跟随。 存在漫游跟随相机和环绕跟随相机两个版本。\n name: string 定义相机在场景中的名称\n position: Vector3 定义相机的位置',
  create_anaglyph_universal_camera_tooltip: '该相机用于模拟立体渲染 (基于UniversalCamera) \n name: string 相机名称 \n position: Vector3 定义初始位置\n interaxialDistance: number 视差，定义两种颜色的距离',
  create_anaglyph_arc_rotate_camera_tooltip: '该相机用于模拟立体渲染 (基于ArcRotateCamera)\n name: string 相机名称\n alpha: number 定义alpha角度\n beta: number 定义beta角度\n radius: number 定义半径\n target: Vector3 定义相机目标\n interaxialDistance: number 视差，定义两种颜色的距离',
  create_device_orienation_camera_tooltip: '重力感应相机 该相机专为响应设备的方向事件而设计，例如手机设备的向前向后，左右倾斜\n name: string 相机名称\n position: Vector3 相机开始位置',
  /**
   * set_camera_prop block
   * 相机属性
   */
  camera_prop_applyGravity_tooltip: 'boolean 开启或关闭相机重力属性',
  camera_prop_angularSensibilityX_tooltip: 'Gets or Set the pointer angular sensibility along the X axis or how fast is the camera rotating.',
  camera_prop_angularSensibilityY_tooltip: 'Gets or Set the pointer angular sensibility along the Y axis or how fast is the camera rotating.',
  camera_prop_cameraAcceleration_tooltip: '定义相机能够以多快的速度加速来跟随它的目标。',
  camera_prop_cameraDirection_tooltip: 'Vector3 定义相机正在移动的方向',
  camera_prop_cameraRotation_tooltip: 'Vector2 定义相机正在旋转的旋转值',
  camera_prop_angularSensibility_tooltip: '设置或获取鼠标转动的敏感度 (默认 2000.0) 值越高敏感度越低',
  camera_prop_checkCollisions_tooltip: 'boolean 开启或关闭相机与场景中其它物体的碰撞',
  camera_prop_collisionRadius_tooltip: 'Vector3 定义相机的碰撞半径。模拟一个围绕相机的椭圆球体',
  camera_prop_ellipsoid_tooltip: 'Vector3 定义相机的椭圆体碰撞体。用于模拟相机实体，如玩家的身体',
  camera_prop_ellipsoidOffset_tooltip: 'Vector3 Define an offset for the position of the ellipsoid around the camera.\n This can be helpful to determine the center of the body near the gravity center of the body\n instead of its head.',
  camera_prop_fov_tooltip: '相机视野，单位弧度 (默认 0.8)',
  camera_prop_globalPosition_tooltip: '获取相机的世界空间位置',
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
  camera_prop_layerMask_tooltip: 'Restricts the camera to viewing objects with the same layerMask. A camera with a layerMask of 1 will render mesh.layerMask & camera.layerMask!== 0',
  camera_prop_lockedTarget_tooltip: 'Define the current target of the camera as an object or a position. Please note that locking a target will disable panning.',
  camera_prop_lowerAlphaLimit_tooltip: 'Nullable<number> 相机在经线方向的最小度数\n 这有助于限制相机在场景中的移动',
  camera_prop_lowerBetaLimit_tooltip: 'number 相机在纬线方向的最小度数\n 这有助于限制相机在场景中的移动',
  camera_prop_lowerRadiusLimit_tooltip: 'Nullable<number> 相机距离目标的最小距离 (相机无法再靠近).\n 这有助于限制相机在场景中的移动',
  camera_prop_lowerRotationOffsetLimit_tooltip: '相机位置相对于目标物体的最小角度。\n 这有助于限制相机在场景中的移动',
  camera_prop_lowerHeightOffsetLimit_tooltip: '相机相对于目标物体的最小高度。这有助于限制相机在场景中的移动',
  camera_prop_maxCameraSpeed_tooltip: '定义相机跟随物体的最大速度。',
  camera_prop_maxZ_tooltip: '定义相机可以观察的最大距离',
  camera_prop_minZ_tooltip: '定义相机可以观察的最小距离',
  camera_prop_position_tooltip: '定义相机在场景的位置（局部坐标）',
  camera_prop_noRotationConstraint_tooltip: '为相机添加约束，阻止相机在所有方向和所有轴向上自由移动',
  camera_prop_rotation_tooltip: '定义当前相机的旋转值',
  camera_prop_rotationOffset_tooltip: '定义相机和相机所跟随物体间的旋转偏移',
  camera_prop_speed_tooltip: '定义当前相机的速度',
  camera_prop_target_tooltip: '定义相机的目标点',
  camera_prop_targetHost_tooltip: '定义相机的目标网格，相机会在半径距离上看向此网格。注意此设置会禁用平移',
  camera_prop_touchAngularSensibility_tooltip: '定义相机转向的触摸敏感度，值越高越快',
  camera_prop_touchMoveSensibility_tooltip: '定义相机移动的触摸敏感度，值越高越快',
  camera_prop_alpha_tooltip: 'number 定义相机沿经线方向的转动度数（弧度）',
  camera_prop_beta_tooltip: 'number 定义相机沿纬线方向的转动度数（弧度）',
  camera_prop_mapPanning_tooltip: 'boolean 定义相机是否排除y轴上的变换',
  camera_prop_panningAxis_tooltip: 'Vector3 定义允许平移的轴',
  camera_prop_panningDistanceLimit_tooltip: 'Nullable<number> 定义最大平移距离\n 这有助于让相机一直在场景中',
  camera_prop_panningInertia_tooltip: 'number 定义平移时的惯性值\n 0 没有惯性；1 一直运动',
  camera_prop_panningOriginTarget_tooltip: 'Vector3 定义平移前相机的目标',
  camera_prop_pinchToPanMaxDistance_tooltip: 'number Defines the distance used to consider the camera in pan mode vs pinch/zoom.\n Basically if your fingers moves away from more than this distance you will be considered in pinch mode.',
  camera_prop_radius_tooltip: 'number 定义相机距离目标点的半径',
  camera_prop_targetScreenOffset_tooltip: 'Vector2 定义相机目标点在屏幕上的偏移',
  camera_prop_upperAlphaLimit_tooltip: 'Nullable<number> 沿纬线方向的最大角度\n 这有助于限制相机在场景中的移动',
  camera_prop_upperBetaLimit_tooltip: 'number 沿经线方向的最大角度\n 这有助于限制相机在场景中的移动',
  camera_prop_upperHeightOffsetLimit_tooltip: 'Maximum allowed height of camera position relative to target object.This can help limiting how the Camera is able to move in the scene.',
  camera_prop_upperRadiusLimit_tooltip: 'Nullable<number> Maximum allowed distance of the camera to the target (The camera can not get further).\n 这有助于限制相机在场景中的移动',
  camera_prop_upperRotationOffsetLimit_tooltip: 'Maximum allowed angle to camera position relative to target object.\n This can help limiting how the Camera is able to move in the scene.',
  camera_prop_useNaturalPinchZoom_tooltip: 'Gets or Set the pointer use natural pinch zoom to override the pinch precision and pinch delta percentage. When useNaturalPinchZoom is true, multi touch zoom will zoom in such that any object in the plane at the camera\'s target point will scale perfectly with finger motion.',
  camera_prop_wheelDeltaPercentage_tooltip: '设置或获取鼠标滚轮delta百分比或相机缩放的速度。 It will be used instead of pinchDeltaPrecision if different from 0. It defines the percentage of current camera.radius to use as delta when pinch zoom is used.',
  camera_prop_wheelPrecision_tooltip: '设置或获取鼠标滚轮的精度或相机缩放的速度',

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
  set_get_active_camera_tooltip: '设置或获取激活相机',
  /**
   * remove_camera block
   */
  remove_camera_tooltip: '从场景中移除相机',

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