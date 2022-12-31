# 灯光 Lights

这类拼图用于创建灯光和阴影。

[[toc]]

## 灯光

### create_light

用于创建灯光，类型包括：点光、平行光、聚光灯、半球光。一个场景中默认允许创建最多6盏灯光。

#### PointLight

点光源是从场景中某个位置向四周发射光线的灯光类型。

参数：
- 名字 - 灯光名称
- 位置 - 灯光位置

#### DirectionalLight

平行光用于模拟太阳光线。虽然其位置不影响照明，但会对阴影产生影响。

参数：
- 名字 - 灯光名称
- 位置 - 灯光位置
- 方向 - 灯光方向

#### SpotLight

聚光灯是从场景中一点向一个扇形范围发射光线。

参数：
- 名字 - 灯光名称
- 位置 - 灯光位置
- 方向 - 灯光方向
- 角度 - 扇形范围的角度
- 指数 - 灯光强度衰减指数，默认2次方

#### HemisphericLight

半球光多用于提供环境照明。

- 名字 - 灯光名称
- 方向 - 灯光方向

### light_properties_accessors

用于设置或获取灯光属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

灯光根据其类型有不同的属性和访问器。

灯光属性有：
- 漫反射：漫反射，赋予对象基础颜色
- 强度：灯光强度
- 高光：注意: 不会影响PBR材质

灯光访问器：
- 方向：设置或获取灯光方向用于产生阴影
- 仅包含网格：设置或获取仅被灯光影响的网格
- 内角：内角。仅在gltf衰减模式中使用，它定义了在定向衰减开始，在裁切角度（外角）之前的角度，
- 强度模式：设置用于解释灯光强度的比例。它只与PBR材质相关，其中灯光强度可以用物理方式定义
- 灯光贴图模式：设置该光源的灯光贴图模式(应该是Light.LIGHTMAP_x定义的一个常量)
- 位置：设置或获取阴影从什么位置发射。也可以用作点光源和聚光灯的位置
- 半径：设置PBR材质用于模拟柔和的面光灯光半径
- 范围：定义灯光可以影响场景中单位的距离有多远注意: 未用于PBR材质
- 阴影角度：在提供方向的情况下，阴影将不使用立方体纹理，而是模拟一个聚光灯阴影作为衰减。这指定了阴影将使用什么角度来创建。默认为90度
- 启用阴影：设置是否为该光源启用阴影。这可以帮助关闭/打开阴影，而不需要解除当前的阴影生成器
- 阴影最大Z：设置或获取阴影投射裁切最大z值
- 阴影最小Z：设置或获取阴影投射裁切最小z值
- 阴影锥体大小：为阴影生成器固定视锥体大小。如果值为0则禁用
- 阴影正交缩放：设置或获取阴影投影比例。默认为0.1，表示投影窗口从最佳大小增加10%。这不会影响固定视锥大小(shadowFrustumSize设置)

### remove_light

从场景中删除指定的灯光。

## 阴影

### create_shadow

为指定灯光创建阴影，并指定阴影贴图的大小。

### shadow_properties_accessors

用于设置或获取阴影属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。

阴影属性：

- 启用柔和透明阴影: enableSoftTransparentShadow - 启用或禁用基于透明度的不同强度的阴影。启用该选项后，阴影的强度等于网格的可见度。如果在材质上启用了alpha纹理，则纹理中的红色通道也会合并以计算强度（网格可见度乘以纹理红通道）。默认使用的纹理是漫反射，但可以通过设置“使用不透明度贴图用于透明阴影useOpacityTextureForTransparentShadow”来设置为不透明度。注意，根据定义，必须将“透明阴影transparencyShadow”设置为true才能启用“柔和透明阴影SoftTransparentShadow”！
- 强制仅背面: forceBackFacesOnly - 如果为true，则通过渲染网格背面而不是正面生成阴影贴图。这可以帮助解决自阴影问题，因为构成物体背面的几何图形会稍微偏移。另一方面，这也会造成阴影悬浮。
- 视锥体边缘衰减: frustumEdgeFalloff - 控制阴影在视锥体边缘淡出的程度
- 使用不透明度贴图用于透明阴影: useOpacityTextureForTransparentShadow - 如果为true，那么在透明阴影中使用不透明度贴图opacity texture的alpha通道，而不是漫反射通道。

阴影访问器：

- 偏移：bias - 设置偏移: 偏移用于深度防止阴影错误 (在灯光方向上)
- 模糊框偏移：blurBoxOffset - 设置模糊方框偏移：偏移用于模糊通道\n仅当useKernelBlur = false时有效
- 模糊粒度：blurKernel - 设置模糊粒度：模糊通道颗粒大小\n仅当useKernelBlur = true时有效
- 模糊缩放：blurScale - 设置模糊缩放：与主阴影贴图相比，模糊纹理的比例\n2表示半尺寸
- 接触硬化灯光大小UV比率：contactHardeningLightSizeUVRatio - 设置PCSS中使用的灯光大小(在阴影贴图uv单元中)，以确定屏蔽器搜索区域和半影大小。使用一个比例有助于保持形状稳定独立于贴图大小。它不解释光线投影，因为它在光线设置或光线位置变化期间有太多的不稳定性。只有当useContactHardeningShadow为true时才有效
- 暗度：darkness - 设置或获取实际阴影暗度
- 深度缩放：depthScale - 在ESM模式下设置深度比例。这会覆盖存储在灯光中的缩放
- 过滤：filter - 设置或获取当前阴影生成器模式(法线，PCF, ESM…)。返回值是一个数字，它等于阴影贴图中定义的一个可用模式\n0 - NONE\n1 - PCF\n2 - PCSS\n3 - Poisson\n4 - Exponential\n5 - Blurred exponential\n6 - Close exponential\n7 - Blurred close exponential
- 过滤质量：filteringQuality - 设置PCF或PCSS质量。仅当usePercentageCloserFiltering或usePercentageCloserFiltering为true时才有效
- 贴图大小：mapSize - 获取或设置存储阴影的纹理的大小
- 法线偏移：normalBias - 设置法线偏移：偏移用于深度防止阴影错误(沿法线方向并与灯光/法线角度成比例)
- 透明阴影：transparencyShadow - 获取或设置是否开启透明阴影
- 使用模糊近似指数阴影贴图：useBlurCloseExponentialShadowMap - 设置当前过滤模式为filtered "close ESM"（使用指数的倒数来防止急剧衰减伪影）
- 使用模糊指数阴影贴图：useBlurExponentialShadowMap - 获取当前过滤器是否设置为已过滤的ESM
- 使用近似指数阴影贴图：useCloseExponentialShadowMap - 设置当前过滤模式为"close ESM"（使用指数的倒数来防止急剧衰减伪影）
- 使用接触硬化阴影：useContactHardeningShadow - 设置当前过滤模式为"PCSS" (contact hardening).
- 使用指数阴影贴图：useExponentialShadowMap - 设置当前过滤模式为ESM.
- 使用颗粒模糊：useKernelBlur - 设置模糊通道是颗粒模糊(如果为真)还是方框模糊。仅在过滤模式（useBlurExponentialShadowMap等）下有效
- 使用百分比近似过滤：usePercentageCloserFiltering - 设置当前过滤模式为"PCF" (percentage closer filtering).
- 使用泊松采样：usePoissonSampling - 设置当前过滤模式为Poisson采样

### add_shadow_caster

设置可以产生阴影的网格。
