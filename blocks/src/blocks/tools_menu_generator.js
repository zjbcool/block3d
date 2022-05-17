import { DropdownHelper } from '../util/util';

const MenuGenerator = {}

MenuGenerator.gizmoProps = new DropdownHelper([
  ['attachableMeshes', 'attachableMeshes', 'NULL', '', 'Array of meshes which will have the gizmo attached when a pointer selected them. If null, all meshes are attachable. (Default: null)'],
  ['positionGizmoEnabled', 'positionGizmoEnabled', 'BOOL', 'TRUE', 'If the position gizmo is enabled'],
  ['rotationGizmoEnabled', 'rotationGizmoEnabled', 'BOOL', 'TRUE', 'If the rotation gizmo is enabled'],
  ['scaleGizmoEnabled', 'scaleGizmoEnabled', 'BOOL', 'TRUE', 'If the scale gizmo is enabled'],
  ['boundingBoxGizmoEnabled', 'boundingBoxGizmoEnabled', 'BOOL', 'TRUE', 'If the boundingBox gizmo is enabled'],
])

MenuGenerator.features = new DropdownHelper([
  ['Linux', 'LINUX'],
  ['Windows', 'WINDOWS'],
  ['macOS', 'MACOS'],
  ['IOS', 'IOS'],
  ['Android','ANDROID'],
  ['Mobile', 'MOBILE'],
  ['Chrome', 'CHROME'],
  ['Firefox','FIREFOX'],
  ['Edge','EDGE'],
  ['Safari','SAFARI'],
  ['Touch','TOUCH'],
  ['Retina','RETINA'],
  ['WebAudioApi','WEBAUDIO'],
  ['WebGL2.0','WEBGL2'],
  ['doNotTrack','DO_NOT_TRACK'],
])

export default MenuGenerator