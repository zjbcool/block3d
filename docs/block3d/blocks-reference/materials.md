# 材质 Material

这类拼图用于创建和操作材质、贴图、颜色。

[[toc]]

## 材质

### 创建材质 create_material {#create-material}

用于创建材质。材质类型包括：标准材质、PBR材质、节点材质、背景材质。

#### StandardMaterial

这是Block3D底层引擎BabylonJS的默认材质。是质量和性能之间的最佳权衡。

#### PBRMaterial

这是一种基于物理的材质，用于模拟真实的光照。

#### NodeMaterial

通过节点材质编辑器创建的更复杂的材质。

#### BackgroundMaterial

背景材质用于在场景中创建一个高效的环境。

### 材质属性 material_properties_accessors {#material-properties-accessors}

用于设置或获取材质属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

标准材质属性：
- alphaCutOff - 定义alpha测试模式中的alpha极限
- ambientColor - 被环境背景照明照亮的材质的颜色
- ambientTexture - 在其他术语中又称AO贴图，它有助于在材质中添加烘焙的阴影。
- bumpTexture - 凹凸贴图是一种在渲染的表面上模拟凹凸和凹痕的技术。
- diffuseColor - 在灯光下看到的材质的基本颜色。
- diffuseTexture - 在灯光下看到的材质的基本纹理。
- emissiveColor - 定义材质的颜色，就像自带照明一样。即使在没有光线的情况下，也会混合在最终结果中。
- emissiveTexture - 定义材质的贴图，就像自带照明一样。即使在没有光线的情况下，也会混合在最终结果中。
- indexOfRefraction - 在折射的情况下，定义折射率的值。
- lightmapTexture - 复杂的光照在运行时的计算可能会很昂贵。为了节省计算量，灯光贴图可以用来将计算好的光照存储在纹理中，然后应用于给定的网格。
- maxSimultaneousLights - 设置可以用于材质的最大灯光数量
- opacityTexture - 根据一张贴图定义材质的透明度
- parallaxScaleBias - 应用一个缩放系数，决定高度图应该代表哪个"深度"。在视差中，0.05和0.1之间的数值是合理的，使用视差遮蔽可以达到0.2。
- reflectionTexture - 指定用于显示反射的贴图
- refractionTexture - 指定用于显示折射的贴图
- roughness - 用于定义材质中的反射应该有多模糊
- specularColor - 定义在材质中高光的颜色和强度。
- specularPower - 定义材质中高光的锐度。值越大，越锐利，结果越光滑。相反，值越小，越模糊，结果越粗糙。
- specularTexture - 定义在材质中光如何赋予高光颜色和强度。
- twoSidedLighting - 如果设置为真，并且背面剔除为假，则背面的法线会翻转
- useAlphaFromDiffuseTexture - 定义透明是否来自漫反射贴图的alpha通道
- useEmissiveAsIllumination - 若为真，自光发的值会被加到最终结果；否则，会被乘进去
- useGlossinessFromSpecularMapAlpha - 定义是否应从高光贴图alpha通道读取材质的光泽度/粗糙度
- useLightmapAsShadowmap - 在灯光贴图的情况下，定义贴图是否包含灯光或阴影信息。
- useObjectSpaceNormalMap - 允许使用物体空间法线贴图（代替切线空间）
- useParallax - 是否开启视差模式
- useParallaxOcclusion - 是否开启视差遮蔽。若为真，结果比传统的“视差”更真实，但性能会受到影响，需要权衡
- useReflectionFresnelFromSpecular - 若为真，则会自动从材质的高光度中减去菲涅耳值
- useReflectionOverAlpha - 指定材质会在透明表面（仅最亮的表面）上保持反射。汽车玻璃就是一个很好的例子。当路灯反射在上面时，看不到后面是什么
- useSpecularOverAlpha - 指定材质会在透明表面（仅最亮的表面）上保持高光。汽车玻璃就是一个很好的例子。当路灯反射在上面时，看不到后面是什么
- zOffset - 存储Z轴偏移系数值

标准材质状态：
- alpha - 设置或获取材质的alpha值
- alphaMode - 设置或获取alpha模式的值 0	禁用 1	加 2	合并 3	减 4	乘 5	最大值 6	一对一 7	预乘 8	预乘波特杜夫 9	插值 10	滤色模式
- backFaceCulling - 设置或获取剔除状态（true表示启用剔除，false表示禁用）
- transparencyMode - 设置或获取材质的透明度模式。0	不透明1	检测2	混合3	检测和混合
- wireframe - 设置或获取线框模式的状态

PBR材质属性：
- albedoColor - 漫反射颜色
- albedoTexture - 漫反射贴图
- alphaCutOff - 定义alpha测试模式中的alpha极限
- ambientColor - 环境照明中材质的颜色
- ambientTexture - 又名AO贴图
- ambientTextureStrength - 又名AO贴图强度
- bumpTexture - 在一张贴图中存储网格表面法线数据，用于置换网格。
- emissiveColor - 从材质发出的颜色
- emissiveIntensity - 材质发光部分的强度。有助于在不修改发光颜色的情况下控制发光效果。
- emissiveTexture - 自发光贴图
- enableSpecularAntiAliasing - 在PBR着色器中启用高光反射抗锯齿。它将在几何体上为分析照明和IBL照明相互作用。它还会根据凹凸值预先过滤粗糙度贴图。
- environmentBRDFTexture - 让用户定义用于 IBL 的 brdf 查询纹理。
- environmentIntensity - 环境的强度，例如，环境对物体的照射程度，对于粗糙的材质来说是通过谐波，对于有光泽的材质来说是通过反射。
- metallic - 指定金属/粗糙度工作流的金属度数量。也可以用来缩放金属度贴图的金属度值。
- metallicTexture - 用于从高光度/光滑度流程转为金属度/粗糙度流程
- microSurface - 又名光泽度
- microSurfaceTexture - 用于根据当前模式启用从单独通道获取粗糙度/光泽度。灰度表示金属模式下的粗糙度和高光模式下的光泽度。
- opacityTexture - 将alpha值存储在纹理中
- parallaxScaleBias - 控制视差模式的缩放偏移
- reflectionColor - 材质反射的颜色
- reflectionTexture - 将反射值存储在纹理中
- reflectivityColor - 又名高光颜色
- reflectivityTexture - 又名高光贴图
- roughness - 在金属度/粗糙度流程中指定粗糙度，也用于缩放金属度贴图中的粗糙度
- unlit - 无光模式
- useAlphaFromAlbedoTexture - 指定用来做混合的alpha来自漫反射贴图的alpha通道
- useAmbientOcclusionFromMetallicTextureRed - 指定是否金属度贴图的红通道中包含AO信息
- useMetallnessFromMetallicTextureBlue - 指定金属纹理是否在其蓝色通道中包含金属度信息。
- useMicroSurfaceFromReflectivityMapAlpha - 指定反射率贴图是否在其alpha通道中包含光泽度信息。
- useParallax - 允许在视差模式中使用凹凸贴图
- useParallaxOcclusion - 允许在视差遮蔽模式中使用凹凸贴图
- useObjectSpaceNormalMap - 允许使用物体空间法线图（而不是切线空间）。
- useParallax - 是否开启视差模式
- useParallaxOcclusion - 是否开启视差遮蔽。若为真，结果比传统的“视差”更真实，但性能会受到影响，需要权衡
- useRoughnessFromMetallicTextureAlpha - 指定金属度贴图是否在其alpha通道中包含粗糙度信息。
- useRoughnessFromMetallicTextureGreen - S指定金属度贴图是否在其绿色通道中包含粗糙度信息。
- useSpecularOverAlpha - 指定材质会在透明表面（仅最亮的表面）上保持高光。汽车玻璃就是一个很好的例子。当路灯反射在上面时，看不到后面是什么
- zOffset - 存储Z轴偏移系数值

PBR材质状态：
- alpha - 设置或获取材质的alpha值
- alphaMode - 设置或获取alpha模式的值 0	禁用 1	加 2	合并 3	减 4	乘 5	最大值 6	一对一 7	预乘 8	预乘波特杜夫 9	插值 10	滤色模式
- backFaceCulling - 设置或获取剔除状态（true表示启用剔除，false表示禁用）
- transparencyMode - 设置或获取材质的透明度模式。0	不透明1	检测2	混合3	检测和混合
- wireframe - 设置或获取线框模式的状态

节点材质属性：
- maxSimultaneousLights - 设置可以用于材质的最大灯光数量
- zOffset - 存储Z轴偏移系数值

节点材质状态：
- alpha - 设置或获取材质的alpha值
- alphaMode - 设置或获取alpha模式的值 0	禁用 1	加 2	合并 3	减 4	乘 5	最大值 6	一对一 7	预乘 8	预乘波特杜夫 9	插值 10	滤色模式
- backFaceCulling - 设置或获取剔除状态（true表示启用剔除，false表示禁用）
- transparencyMode - 设置或获取材质的透明度模式。0	不透明1	检测2	混合3	检测和混合
- wireframe - 设置或获取线框模式的状态

背景材质属性：
- primaryColor - 主光颜色（与环境贴图相乘）
- reflectionAmount - 在菲涅耳反射的情况下，指定对背景的反射权重。
- reflectionBlur - 反射贴图模糊级别
- reflectionFalloffDistance - 有助于从场景中心指定反射贴图的衰减半径。如果用作镜子，这有助于为反射增加一个很好的衰减效果。
- reflectionFresnel - 有助于指定材质以较低视角从漫反射贴图过渡到反射贴图。有助于在地面上添加镜面贴图。
- reflectionReflectance0 - 指定在较低视角下的反射权重
- reflectionReflectance90 - 指定在垂直视角下的反射权重。
- reflectionTexture - 材质中使用的反射贴图
- sceneCenter - 在不透明度菲涅耳或反射衰减的情况下，用作场景中心。一般为原点，也可以根据你的场景设置而修改。
- shadowLevel - 如果需要，有助于将阴影调整到更柔和的水平。0表示纯黑色的阴影，1表示没有阴影。
- shadowLights - 指定在材质上投射阴影的灯光列表。如果为空，则将包括所有场景阴影灯光。
- shadowOnly - 使材质只渲染阴影

背景材质状态：
- alpha - 设置或获取材质的alpha值
- alphaMode - 设置或获取alpha模式的值 0	禁用 1	加 2	合并 3	减 4	乘 5	最大值 6	一对一 7	预乘 8	预乘波特杜夫 9	插值 10	滤色模式
- backFaceCulling - 设置或获取剔除状态（true表示启用剔除，false表示禁用）
- transparencyMode - 设置或获取材质的透明度模式。0	不透明1	检测2	混合3	检测和混合
- wireframe - 设置或获取线框模式的状态

### 获取材质 get_material_by_name {#get-material-by-name}

根据名字获取材质。

### 销毁材质 dispose_material {#dispose-material}

销毁材质。

## 纹理

### 创建纹理 create_texture {#create-texture}

纹理类型包括普通纹理和立方体纹理。

### 纹理属性 texture_properties_accessors {#texture-properties-accessors}

用于设置或获取纹理属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相
同。

纹理属性：
- anisotropicFilteringLevel - 定义纹理中的各向异性过滤级别，需要兼容的硬件和浏览器(支持各向异性过滤)。越高越好，但会越慢。默认为4，是理想方案
- invertZ - 纹理是否翻转z轴(用于立方体贴图).
- level - 纹理强度
- onDisposeObservable - 当纹理销毁时触发该事件
- onLoadObservable - 当纹理加载完成时触发此事件
- uAng - 定义纹理沿UV坐标的u轴旋转的度数（单位弧度）
- uOffset - 定义纹理沿UV坐标的u轴的偏移值
- uRotationCenter - 定义旋转的中心 (U)
- uScale - 定义纹理沿UV坐标的u轴的缩放值
- rotationY - 设置或获取纹理矩阵沿Y轴的旋转值（弧度
- vAng - 定义纹理沿UV坐标的v轴旋转的度数（单位弧度）
- vOffset - 定义纹理沿UV坐标的v轴的偏移值
- vRotationCenter - 定义旋转的中心 (V)
- vScale - 定义纹理沿UV坐标的v轴的缩放值
- wAng - 定义纹理沿UV坐标的w轴旋转的度数（单位弧度）
- wRotationCenter - 定义旋转的中心 (W)
- wrapR - 贴图平铺方式0-裁切1-重复2-镜像

立方体纹理属性：
- anisotropicFilteringLevel - 定义纹理中的各向异性过滤级别，需要兼容的硬件和浏览器(支持各向异性过滤)。越高越好，但会越慢。默认为4，是理想方案
- invertZ - 纹理是否翻转z轴(用于立方体贴图).
- level - 纹理强度
- onDisposeObservable - 当纹理销毁时触发该事件
- onLoadObservable - 当纹理加载完成时触发此事件
- url - 定义纹理地址

纹理和立方体纹理状态：
- coordinatesMode - 纹理映射方式 0-直接模式1-球形模式2-平面模式3-立方模式4-投射模式5-天空盒模式6-逆立方模式7-等矩圆柱模式8-固定等矩圆柱模式9-固定等矩圆柱镜像模式
- hasAlpha - 定义纹理是否带有透明通道
- invertY - 纹理是否翻转y轴
- wrapU - 贴图平铺方式0-裁切1-重复2-镜像
- wrapV - 贴图平铺方式0-裁切1-重复2-镜像

### 获取纹理大小 get_texture_size {#get-texture-size}

返回纹理尺寸。

参数：
- 大小size - 返回值是一个包含`width` 和 `height`属性的对象
- 宽width - 返回纹理宽度
- 高height - 返回纹理高度
- 宽高比ratio - 返回纹理的宽高比

### 更新纹理 update_texture_url {#update-texture-url}

更新纹理。纹理加载完成时，执行`执行`插槽中的拼图。

### 销毁纹理 dispose_texture {#dispose-texture}

销毁纹理并释放依赖的资源。

## 颜色

### 颜色3 material_color3 {#material-color3}

创建一个RGB模式的颜色。

### 16进制颜色3 material_color3_from_hex {#material-color3-from-hex}

从16进制字符串创建一个RGB模式的颜色。

### 常量颜色3 material_constant_color3 {#material-constant-color3}

创建常量颜色3。

### 颜色4 material_color4 {#material-color4}

创建一个RGBA模式的颜色。

### 从16进制创建颜色4 material_color4_from_hex {#material-color4-from-hex}

从16进制字符串创建RGBA颜色。

### 从颜色3创建颜色4 material_color4_from_color3 {#material-color4-from-color3}

从颜色3和alpha值创建颜色4。