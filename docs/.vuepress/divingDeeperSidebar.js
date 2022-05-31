module.exports = [
  {
    text: '动画 Animation',
    link: '/babylonjs/divingDeeper/animation/',
    collapsable: true,
    children: [
      '/babylonjs/divingDeeper/animation/',
    ]
  },
  {
    text: '音频 Audio',
    link: '/babylonjs/divingDeeper/audio/',
    children: [
      '/babylonjs/divingDeeper/audio/playingSoundsMusic',
    ]
  },
  {
    text: '行为 Behaviors',
    link: '/babylonjs/divingDeeper/behaviors/',
    children: [
      '/babylonjs/divingDeeper/behaviors/cameraBehaviors',
      '/babylonjs/divingDeeper/behaviors/meshBehaviors',
    ]
  },
  {
    text: '环境 Environment',
    link: '/babylonjs/divingDeeper/environment/',
    children: [
      '/babylonjs/divingDeeper/environment/environmentIntroduction',
      '/babylonjs/divingDeeper/environment/skybox',
      '/babylonjs/divingDeeper/environment/backgroundMaterial',
      '/babylonjs/divingDeeper/environment/lenseFlare',
      '/babylonjs/divingDeeper/environment/reflectionProbes',
      '/babylonjs/divingDeeper/environment/360PhotoDome',
      '/babylonjs/divingDeeper/environment/360VideoDome',
    ]
  },
  {
    text: '事件 Events',
    link: '/babylonjs/divingDeeper/events/',
    children: [
      '/babylonjs/divingDeeper/events/actions',
      '/babylonjs/divingDeeper/events/observables',
      '/babylonjs/divingDeeper/events/promises',
      '/babylonjs/divingDeeper/events/coroutines',
    ]
  },
  {
    text: '加载资产 ImportingAssets',
    link: '/babylonjs/divingDeeper/importers/',
    children: [
      '/babylonjs/divingDeeper/importers/loadingFileTypes',
      '/babylonjs/divingDeeper/importers/glTF',
      '/babylonjs/divingDeeper/importers/stl',
      '/babylonjs/divingDeeper/importers/obj',
      '/babylonjs/divingDeeper/importers/incrementalLoading',
      '/babylonjs/divingDeeper/importers/createImporters',
      '/babylonjs/divingDeeper/importers/assetManager',
      '/babylonjs/divingDeeper/importers/assetContainers',
      '/babylonjs/divingDeeper/importers/progressiveglTFLoad',
    ]
  },
  {
    text: '材质 Materials',
    link: '/babylonjs/divingDeeper/materials/',
    children: [
      {
        text: '使用材质',
        link: '/babylonjs/divingDeeper/materials/usingMaterials/',
        children: [
          '/babylonjs/divingDeeper/materials/usingMaterials/materialsIntroduction',
          '/babylonjs/divingDeeper/materials/usingMaterials/moreMaterials',
          '/babylonjs/divingDeeper/materials/usingMaterials/parallaxMapping',
          '/babylonjs/divingDeeper/materials/usingMaterials/texturePerBoxFace',
          '/babylonjs/divingDeeper/materials/usingMaterials/frontAndBackUVs',
          '/babylonjs/divingDeeper/materials/usingMaterials/multiMaterials',
          '/babylonjs/divingDeeper/materials/usingMaterials/dynamicTexture',
          '/babylonjs/divingDeeper/materials/usingMaterials/videoTexture',
          '/babylonjs/divingDeeper/materials/usingMaterials/blendModes',
          '/babylonjs/divingDeeper/materials/usingMaterials/introToPBR',
          '/babylonjs/divingDeeper/materials/usingMaterials/HDREnvironment',
          '/babylonjs/divingDeeper/materials/usingMaterials/masterPBR',
          '/babylonjs/divingDeeper/materials/usingMaterials/reflectionTexture',
          '/babylonjs/divingDeeper/materials/usingMaterials/fresnelParameters',
          '/babylonjs/divingDeeper/materials/usingMaterials/proceduralTextures',
          '/babylonjs/divingDeeper/materials/usingMaterials/ktx2Compression',
        ]
      },
      {
        text: '节点材质',
        link: '/babylonjs/divingDeeper/materials/nodeMaterials/',
        children: [
          '/babylonjs/divingDeeper/materials/nodeMaterials/nodeMaterial',
        ]
      },
      {
        text: '高级材质',
        link: '/babylonjs/divingDeeper/materials/advancedMaterials/',
        children: [
          '/babylonjs/divingDeeper/materials/advancedMaterials/work',
        ]
      },
    ]
  },
  {
    text: '网格 Meshes',
    link: '/babylonjs/divingDeeper/mesh/',
    children: [
      {
        text: '创建网格',
        link: '/babylonjs/divingDeeper/mesh/creation/',
        children: [
          {
            text: '创建固有模型',
            link: '/babylonjs/divingDeeper/mesh/creation/set/',
            children: [
              '/babylonjs/divingDeeper/mesh/creation/set/box',
              '/babylonjs/divingDeeper/mesh/creation/set/tiledBox',
            ]
          },
          {
            text: '创建参数化网格',
            link: '/babylonjs/divingDeeper/mesh/creation/param/',
            children: [
              '/babylonjs/divingDeeper/mesh/creation/param/lines',
            ]
          },
          {
            text: '创建多面体模型',
            link: '/babylonjs/divingDeeper/mesh/creation/polyhedra/',
            children: [
              '/babylonjs/divingDeeper/mesh/creation/polyhedra/polyhedraByNumbers',
            ]
          },
        ]
      },
      {
        text: '网格变换',
        link: '/babylonjs/divingDeeper/mesh/transforms/',
        children: [
          {
            text: '以创建原点为中心',
            link: '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/',
            children: [
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/position',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/rotation',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/addRotations',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/rotationQuaternions',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/targetAlign',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/rotationConventions',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/refFrame',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/coordinate',
              '/babylonjs/divingDeeper/mesh/transforms/centerOrigin/bakingTransforms',
            ]
          },
          {
            text: '父级和轴',
            link: '/babylonjs/divingDeeper/mesh/transforms/parentPivot/',
            children: [
              '/babylonjs/divingDeeper/mesh/transforms/parentPivot/transformNode',
              '/babylonjs/divingDeeper/mesh/transforms/parentPivot/parent',
              '/babylonjs/divingDeeper/mesh/transforms/parentPivot/pivots',
              '/babylonjs/divingDeeper/mesh/transforms/parentPivot/pivot',
            ]
          },
        ]
      },
      {
        text: '拷贝克隆和实例化',
        link: '/babylonjs/divingDeeper/mesh/copies/',
        children: [
          '/babylonjs/divingDeeper/mesh/copies/clones',
          '/babylonjs/divingDeeper/mesh/copies/spsAsClone',
          '/babylonjs/divingDeeper/mesh/copies/instances',
          '/babylonjs/divingDeeper/mesh/copies/thinInstances',
        ]
      },
      {
        text: '交互',
        link: '/babylonjs/divingDeeper/mesh/interactions/',
        children: [
          '/babylonjs/divingDeeper/mesh/interactions/meshIntersect',
          '/babylonjs/divingDeeper/mesh/interactions/meshPicking',
        ]
      },
      '/babylonjs/divingDeeper/mesh/displayBoundingBoxes',
      '/babylonjs/divingDeeper/mesh/decals',
      '/babylonjs/divingDeeper/mesh/highlightLayer',
      '/babylonjs/divingDeeper/mesh/glowLayer',
      '/babylonjs/divingDeeper/mesh/mergeMeshes',
      '/babylonjs/divingDeeper/mesh/facetData',
    ]
  },
  {
    text: '场景 Scene',
    link: '/babylonjs/divingDeeper/scene/',
    children: [
      '/babylonjs/divingDeeper/scene/fastBuildWorld',
      '/babylonjs/divingDeeper/scene/interactWithScenes',
      '/babylonjs/divingDeeper/scene/multiScenes',
      '/babylonjs/divingDeeper/scene/multiCanvas',
      '/babylonjs/divingDeeper/scene/deltaFiles',
      '/babylonjs/divingDeeper/scene/customLoadingScreen',
      '/babylonjs/divingDeeper/scene/optimizeYourScene',
      '/babylonjs/divingDeeper/scene/sceneOptimizer',
      '/babylonjs/divingDeeper/scene/optimizeOctrees',
      '/babylonjs/divingDeeper/scene/optimizeCached',
      '/babylonjs/divingDeeper/scene/reducingMemoryUsage',
      '/babylonjs/divingDeeper/scene/offscreenCanvas',
      '/babylonjs/divingDeeper/scene/renderToPNG',
      '/babylonjs/divingDeeper/scene/renderToVideo',
      '/babylonjs/divingDeeper/scene/clipPlanes',
      '/babylonjs/divingDeeper/scene/renderRemoteScreenshot',
      '/babylonjs/divingDeeper/scene/layermask',

    ]
  },
]
