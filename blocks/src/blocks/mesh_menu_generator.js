import { DropdownHelper } from '../util/util';
const MenuGenerator = {}

MenuGenerator.meshType = new DropdownHelper([
  ['Box', 'Box'],
  ['TiledBox', 'TiledBox'],
  ['Sphere', 'Sphere',],
  ['Cylinder', 'Cylinder'],
  ['Capsule', 'Capsule'],
  ['Plane', 'Plane'],
  ['TiledPlane', 'TiledPlane'],
  ['Disc', 'Disc'],
  ['Torus', 'Torus'],
  ['TorusKnot', 'TorusKnot'],
  ['Ground', 'Ground'],
  ['GroundFromHeightMap', 'GroundFromHeightMap'],
  ['TiledGround', 'TiledGround'],
  ['Lines', 'Lines'],
])

MenuGenerator.Box = new DropdownHelper([
  ['size', 'size', 'NUM', '1', 'MESH_BOX_SIZE_TOOLTIP'],
  ['height', 'height', 'NUM', '1', 'MESH_BOX_HEIGHT_TOOLTIP'],
  ['width', 'width', 'NUM', '1', 'MESH_BOX_WIDTH_TOOLTIP'],
  ['depth', 'depth', 'NUM', '1', 'MESH_BOX_DEPTH_TOOLTIP'],
])

MenuGenerator.TiledBox = new DropdownHelper([
  ['size', 'size', 'NUM', '1', 'MESH_BOX_SIZE_TOOLTIP'],
  ['height', 'height', 'NUM', '1', 'MESH_BOX_HEIGHT_TOOLTIP'],
  ['width', 'width', 'NUM', '1', 'MESH_BOX_WIDTH_TOOLTIP'],
  ['depth', 'depth', 'NUM', '1', 'MESH_BOX_DEPTH_TOOLTIP'],
  ['tileSize', 'tileSize', 'NUM', '1', 'MESH_TILED_BOX_TILE_SIZE_TOOLTIP'],
  ['tileHeight', 'tileHeight', 'NUM', '1', 'MESH_TILED_BOX_TILE_HEIGHT_TOOLTIP'],
  ['tileWidth', 'tileWidth', 'NUM', '1', 'MESH_TILED_BOX_TILE_WIDTH_TOOLTIP'],
])

MenuGenerator.Sphere = new DropdownHelper([
  ['segments', 'segments', 'NUM', '32', 'MESH_SPHERE_SEGMENTS_TOOLTIP'],
  ['diameter', 'diameter', 'NUM', '1', '(number) diameter of the sphere'],
  ['diameterX', 'diameterX', 'NUM', '1', '(number) diameter on X axis, overwrites diameter option'],
  ['diameterY', 'diameterY', 'NUM', '1', '(number) diameter on Y axis, overwrites diameter option'],
  ['diameterZ', 'diameterZ', 'NUM', '1', '(number) diameter on Z axis, overwrites diameter option'],
  ['arc', 'arc', 'NUM', '1', '(number) ratio of the circumference (latitude) between 0 and 1'],
  ['slice', 'slice', 'NUM', '1', '(number) ratio of the height (longitude) between 0 and 1'],
  ['sideOrientation', 'sideOrientation', 'NUM', '0', '(number) side orientation'],
])

MenuGenerator.Cylinder = new DropdownHelper([
  ['height', 'height', 'NUM', '2', '(number) height of the cylinder'],
  ['diameterTop', 'diameterTop', 'NUM', '1', '(number) diameter of the top cap, can be zero to create a cone, overwrites the diameter option'],
  ['diameterBottom', 'diameterBottom', 'NUM', '1', '(number) diameter of the bottom cap, can\'t be zero, overwrites the diameter option'],
  ['diameter', 'diameter', 'NUM', '1', '(number) diameter of both caps'],
  ['tessellation', 'tessellation', 'NUM', '24', '(number) number of radial sides'],
  ['subdivisions', 'subdivisions', 'NUM', '1', '(number) number of rings'],
  ['faceColors', 'faceColors', 'ARRAY', '', '(Color4[]) array of 3 Color4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap'],
  ['faceUV', 'faceUV', 'ARRAY', '', '(Vector4[]) array of 3 Vector4, 0 : bottom cap, 1 : cylinder tube, 2 : top cap'],
  ['arc', 'arc', 'NUM', '1', '(number) ratio of the circumference between 0 and 1'],
  ['hasRings', 'hasRings', 'BOOL', 'FALSE', '(boolean) makes the subdivisions independent from each other, so they become different faces'],
  ['enclose', 'enclose', 'BOOL', 'FALSE', '(boolean) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '(boolean) true if the mesh is updatable'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
])

MenuGenerator.Capsule = new DropdownHelper([
  ['orientation', 'orientation', 'VECTOR3', [0, 1, 0], '(Vector3) Direction of the capsule upon inception.'],
  ['subdivisions', 'subdivisions', 'NUM', '2', '(number) Number of sub segments on the tube section of the capsule running parallel to orientation.'],
  ['tessellation', 'tessellation', 'NUM', '16', '(number) Number of cylindrical segments on the capsule.'],
  ['height', 'height', 'NUM', '1', '(number) Height or length of the capsule.'],
  ['radius', 'radius', 'NUM', '0.25', '(number) Radius of the capsule.'],
  ['capSubdivisions', 'capSubdivisions', 'NUM', '6', '(number) Number of sub segments on the cap sections of the capsule running parallel to orientation.'],
  ['radiusTop', 'radiusTop', 'NUM', '', '(number) Overwrite for the top radius.'],
  ['radiusBottom', 'radiusBottom', 'NUM', '', '(number) Overwrite for the bottom radius.'],
  ['topCapSubdivisions', 'topCapSubdivisions', 'NUM', '', '(number) Overwrite for the top capSubdivisions.'],
  ['bottomCapSubdivisions', 'bottomCapSubdivisions', 'NUM', '', '(number) Overwrite for the bottom capSubdivisions.'],
])

MenuGenerator.Plane = new DropdownHelper([
  ['size', 'size', 'NUM', '1', '(number) side size of the plane'],
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
  ['sourcePlane', 'sourcePlane', 'NULL', '', '(Plane) source plane (math) the mesh will be transformed to'],
])

MenuGenerator.TiledPlane = new DropdownHelper([
  ['size', 'size', 'NUM', '1', '(number) side size of the plane'],
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['tileSize', 'tileSize', 'NUM', '1', '(number) size of each tile side'],
  ['tileHeight', 'tileHeight', 'NUM', '1', '(number) tile height size, overwrites tileSize option'],
  ['tileWidth', 'tileWidth', 'NUM', '1', '(number) tile width size, overwrites tileSize option'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
])

MenuGenerator.Disc = new DropdownHelper([
  ['radius', 'radius', 'NUM', '0.5', '(number) the radius of the disc or polygon'],
  ['tessellation', 'tessellation', 'NUM', '64', '(number) the number of disc/polygon sides'],
  ['arc', 'arc', 'NUM', '1', '(number) ratio of the circumference between 0 and 1'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
])
// 未更新选项
MenuGenerator.Torus = new DropdownHelper([
  ['size', 'size', 'NUM', '1', '(number) side size of the plane'],
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
  ['sourcePlane', 'sourcePlane', 'NULL', '', '(Plane) source plane (math) the mesh will be transformed to'],
])
// 未更新选项
MenuGenerator.TorusKnot = new DropdownHelper([
  ['size', 'size', 'NUM', '1', '(number) side size of the plane'],
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['sideOrientation', 'sideOrientation', 'NUM', '', '(number) side orientation'],
  ['sourcePlane', 'sourcePlane', 'NULL', '', '(Plane) source plane (math) the mesh will be transformed to'],
])

MenuGenerator.Ground = new DropdownHelper([
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['subdivisions', 'subdivisions', 'NUM', '1', '(number) number of square subdivisions'],
])
// 未更新选项
MenuGenerator.GroundFromHeightMap = new DropdownHelper([
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['subdivisions', 'subdivisions', 'NUM', '1', '(number) number of square subdivisions'],
])
// 未更新选项
MenuGenerator.TiledGround = new DropdownHelper([
  ['width', 'width', 'NUM', '1', '(number) size of the width'],
  ['height', 'height', 'NUM', '1', '(number) size of the height'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '	(boolean) true if the mesh is updatable'],
  ['subdivisions', 'subdivisions', 'NUM', '1', '(number) number of square subdivisions'],
])

MenuGenerator.Lines = new DropdownHelper([
  ['points', 'points', 'ARRAY', '', '(Vector3[]) array of Vector3, the path of the line REQUIRED'],
  ['updatable', 'updatable', 'BOOL', 'FALSE', '(boolean) true if the mesh is updatable'],
  ['instance', 'instance', 'NULL', '', '(LineMesh) an instance of a line mesh to be updated'],
  ['colors', 'colors', 'COLOR4', [0, 0, 0, 1], '(Color4[]) array of Color4, each point color'],
  ['useVertexAlpha', 'useVertexAlpha', 'BOOL', 'TRUE', '(boolean) false if the alpha blending is not required (faster)'],
])

MenuGenerator.meshProps = new DropdownHelper([
  ['billboardMode', 'billboardMode', 'NUM', '', 'Gets or sets the billboard mode. Default is 0. \n0	BILLBOARDMODE_NONE	\n1	BILLBOARDMODE_X	\n2	BILLBOARDMODE_Y	\n4	BILLBOARDMODE_Z	\n7	BILLBOARDMODE_ALL'],
  ['checkCollisions', 'checkCollisions', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating that this mesh can be used in the collision engine'],
  ['ellipsoid', 'ellipsoid', 'VECTOR3', [0.5, 1, 0.5], 'Gets or sets the ellipsoid used to impersonate this mesh when using collision engine '],
  ['ellipsoidOffset', 'ellipsoidOffset', 'VECTOR3', [0, 0, 0], 'Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine'],
  ['isPickable', 'isPickable', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions). Default is true'],
  ['isVisible', 'isVisible', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the mesh is visible (renderable). Default is true'],
  ['material', 'material', 'NONE', '', 'Gets or sets current material'],
  ['outlineColor', 'outlineColor', 'COLOR3', [0.0, 0.0, 0.0], 'Defines color to use when rendering outline'],
  ['outlineWidth', 'outlineWidth', 'NUM', '1', 'Define width to use when rendering outline'],
  ['overlayAlpha', 'overlayAlpha', 'NUM', '0.5', 'Defines alpha to use when rendering overlay'],
  ['overlayColor', 'overlayColor', 'COLOR3', [0.0, 0.0, 0.0], 'Defines color to use when rendering overlay'],
  ['receiveShadows', 'receiveShadows', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating that this mesh can receive realtime shadows'],
  ['renderOutline', 'renderOutline', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the outline must be rendered as well'],
  ['renderOverlay', 'renderOverlay', 'BOOL', 'TRUE', 'Gets or sets a boolean indicating if the overlay must be rendered as well'],
  ['showBoundingBox', 'showBoundingBox', 'BOOL', 'FALSE', 'Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)'],
  ['visibility', 'visibility', 'NUM', '1', 'Gets or sets mesh visibility between 0 and 1 (default is 1)'],
])
MenuGenerator.transformProps = new DropdownHelper([
  ['position', 'position', 'VECTOR3', [0.0, 0.0, 0.0], 'Gets or sets the node position (default is (0.0, 0.0, 0.0))'],
  ['rotation', 'rotation', 'VECTOR3', [0.0, 0.0, 0.0], 'Gets or sets the rotation property : a Vector3 defining the rotation value in radians around each local axis X, Y, Z (default is (0.0, 0.0, 0.0)). If rotation quaternion is set, this Vector3 will be ignored and copy from the quaternion'],
  ['scaling', 'scaling', 'VECTOR3', [1.0, 1.0, 1.0], 'Gets or sets a Vector3 depicting the mesh scaling along each local axis X, Y, Z. Default is (1.0, 1.0, 1.0)'],
])
MenuGenerator.draggedOpts = new DropdownHelper([
  ['dragAxis', 'dragAxis', 'VECTOR3', [0, 1, 0], 'The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray\'s origin (eg. camera)'],
  ['dragPlaneNormal', 'dragPlaneNormal', 'VECTOR3', [0, 1, 0], 'The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray\'s origin (eg. camera)'],
  ['enabled', 'enabled', 'BOOL', 'TRUE', 'If the drag behavior will react to drag events (Default: true)'],
  ['moveAttached', 'moveAttached', 'BOOL', 'TRUE', 'If the attached mesh should be moved when dragged'],
  ['updateDragPlane', 'updateDragPlane', 'BOOL', 'TRUE', 'If the drag plane orientation should be updated during the dragging (Default: true)'],
  ['useObjectOrientationForDragging', 'useObjectOrientationForDragging', 'BOOL', 'TRUE', 'If set, the drag plane/axis will be rotated based on the attached mesh\'s world rotation (Default: true)'],
])
MenuGenerator.decalOption = new DropdownHelper([
  ['position', 'position', 'VECTOR3', [0, 0, 0], 'position of the decal (World coordinates)'],
  ['normal', 'normal', 'VECTOR3', [0, 1, 0], 'the normal of the mesh where the decal is applied onto (World coordinates)'],
  ['size', 'size', 'VECTOR3', [1, 1, 1], 'the x, y, z sizes of the decal'],
  ['angle', 'angle', 'ANGLE', '0', 'the angle to rotate the decal'],
])
MenuGenerator.highlightLayerProp = new DropdownHelper([
  ['disableBoundingBoxesFromEffectLayer', 'disableBoundingBoxesFromEffectLayer', 'BOOL', 'TRUE', 'Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer'],
  ['innerGlow', 'innerGlow', 'BOOL', 'TRUE', 'Specifies whether or not the inner glow is ACTIVE in the layer.'],
  ['isEnabled', 'isEnabled', 'BOOL', 'TRUE', 'Specifies whether the highlight layer is enabled or not.'],
  ['outerGlow', 'outerGlow', 'BOOL', 'TRUE', 'Specifies whether or not the outer glow is ACTIVE in the layer.'],
  ['blurHorizontalSize', 'blurHorizontalSize', 'NUM', '1', 'Specifies the horizontal size of the blur.'],
  ['blurVerticalSize', 'blurVerticalSize', 'NUM', '1', 'Specifies the vertical size of the blur.'],
])


export default MenuGenerator