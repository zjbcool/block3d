import { DropdownHelper } from "../util/util.js";

const MenuGenerator = {};

MenuGenerator.lightType = new DropdownHelper([
  ['PointLight', 'PointLight'],
  ['DirectionalLight', 'DirectionalLight'],
  ['SpotLight', 'SpotLight'],
  ['HemisphericLight', 'HemisphericLight'],
])

const diffuse = ['diffuse', 'diffuse', 'COLOR3', [0, 0, 0], 'Diffuse gives the basic color to an object.']
const intensity = ['intensity', 'intensity', 'NUM', '1', 'Strength of the light.\nNote: By default it is define in the framework own unit.\nNote: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.']
const specular = ['specular', 'specular', 'COLOR3', [0, 0, 0], 'Specular produces a highlight color on an object.\nNote: This is not affecting PBR materials.']
const intensityMode = ['intensityMode', 'intensityMode', 'NUM', '0', 'Sets the photometric scale used to interpret the intensity.\nThis is only relevant with PBR Materials where the light intensity can be defined in a physical way.']
const lightmapMode = ['lightmapMode', 'lightmapMode', 'NUM', '0', 'Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)']
const position = ['position', 'position', 'VECTOR3', [0, 0, 0], 'Sets or gets the position the shadow will be casted from. Also use as the light position for both point and spot lights.']
const radius = ['radius', 'radius', 'NUM', '0', 'sets the light radius used by PBR Materials to simulate soft area lights.']
const range = ['range', 'range', 'NUM', '0', 'Defines how far from the source the light is impacting in scene units.\nNote: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.']
const shadowEnabled = ['shadowEnabled', 'shadowEnabled', 'BOOL', 'TRUE', 'Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching the current shadow generator.']
const shadowAngle = ['shadowAngle', 'shadowAngle', 'NUM', '0', 'In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback\nThis specifies what angle the shadow will use to be created.\nIt default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.']
const shadowMaxZ = ['shadowMaxZ', 'shadowMaxZ', 'NUM', '10', 'Sets or gets the shadow projection clipping maximum z value.']
const shadowMinZ = ['shadowMinZ', 'shadowMinZ', 'NUM', '1', 'Sets or gets the shadow projection clipping minimum z value.']

MenuGenerator.PointLight = new DropdownHelper([
  diffuse, intensity, specular, intensityMode, lightmapMode, position, radius, range, shadowEnabled, shadowAngle
])

MenuGenerator.DirectionalLight = new DropdownHelper([
  diffuse, intensity, specular, intensityMode, lightmapMode, position, radius, range, shadowEnabled,
  ['shadowFrustumSize', 'shadowFrustumSize', 'NUM', '10', 'Fix frustum size for the shadow generation. This is disabled if the value is 0.'],
  ['shadowOrthoScale', 'shadowOrthoScale', 'NUM', '0.1', 'Sets or gets the shadow projection scale against the optimal computed one. 0.1 by default which means that the projection window is increase by 10% from the optimal size. This does not impact in fixed frustum size (shadowFrustumSize being set)'],
])

MenuGenerator.SpotLight = new DropdownHelper([
  diffuse, intensity, specular, intensityMode,
  ['innerAngle', 'innerAngle', 'NUM', '1', 'Only used in gltf falloff mode, this defines the angle where the directional falloff will start before cutting at angle which could be seen as outer angle.'],
  lightmapMode, radius, range, shadowAngle, shadowEnabled, shadowMaxZ, shadowMinZ,
])

MenuGenerator.HemisphericLight = new DropdownHelper([
  diffuse, intensity, specular, intensityMode, lightmapMode, radius, range, shadowEnabled,
])

MenuGenerator.shadow = new DropdownHelper([
  ['bias', 'bias', 'NUM', '0', 'Sets the bias: offset applied on the depth preventing acnea (in light direction).'],
  ['blurBoxOffset', 'blurBoxOffset', 'NUM', '0', 'Sets the blur box offset: offset applied during the blur pass.\nOnly useful if useKernelBlur = false'],
  ['blurKernel', 'blurKernel', 'NUM', '0', 'Sets the blur kernel: kernel size of the blur pass.\nOnly useful if useKernelBlur = true'],
  ['blurScale', 'blurScale', 'NUM', '1', 'Sets the blur scale: scale of the blurred texture compared to the main shadow map.\n2 means half of the size.'],
  ['contactHardeningLightSizeUVRatio', 'contactHardeningLightSizeUVRatio', 'NUM', '1', 'Sets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.Using a ratio helps keeping shape stability independently of the map size.\nIt does not account for the light projection as it was having too much instability during the light setup or during light position changes.\nOnly valid if useContactHardeningShadow is true.'],
  ['darkness', 'darkness', 'NUM', '0', 'Gets or sets the actual darkness of a shadow'],
  ['depthScale', 'depthScale', 'NUM', '1', 'Sets the depth scale used in ESM mode. This can override the scale stored on the light.'],
  ['filter', 'filter', 'NUM', '0', 'Sets the current mode of the shadow generator (normal, PCF, ESM...).The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE'],
  ['filteringQuality', 'filteringQuality', 'NUM', '0', 'Sets the PCF or PCSS Quality. Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.'],
  ['mapSize', 'mapSize', 'NUM', '512', 'Gets or sets the size of the texture what stores the shadows'],
  ['normalBias', 'normalBias', 'NUM', '0', 'Sets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).'],
  ['transparencyShadow', 'transparencyShadow', 'BOOL', 'FALSE', 'Gets or sets the ability to have transparent shadow'],
  ['useBlurCloseExponentialShadowMap', 'useBlurCloseExponentialShadowMap', 'BOOL', 'FALSE', 'Sets the current filter to filtered "close ESM" (using the inverse of the exponential to prevent steep falloff artifacts).'],
  ['useBlurExponentialShadowMap', 'useBlurExponentialShadowMap', 'BOOL', 'FALSE', 'Gets if the current filter is set to filtered ESM.'],
  ['useCloseExponentialShadowMap', 'useCloseExponentialShadowMap', 'BOOL', 'FALSE', 'Sets the current filter to "close ESM" (using the inverse of the exponential to prevent steep falloff artifacts).'],
  ['useContactHardeningShadow', 'useContactHardeningShadow', 'BOOL', 'FALSE', 'Sets the current filter to "PCSS" (contact hardening).'],
  ['useExponentialShadowMap', 'useExponentialShadowMap', 'BOOL', 'FALSE', 'Sets the current filter is to ESM.'],
  ['useKernelBlur', 'useKernelBlur', 'BOOL', 'FALSE', 'Sets whether the blur pass is a kernel blur (if true) or box blur. Only useful in filtered mode (useBlurExponentialShadowMap...)'],
  ['usePercentageCloserFiltering', 'usePercentageCloserFiltering', 'BOOL', 'FALSE', 'Sets the current filter to "PCF" (percentage closer filtering).'],
  ['usePoissonSampling', 'usePoissonSampling', 'BOOL', 'FALSE', 'Sets the current filter to Poisson Sampling.'],
])

export default MenuGenerator