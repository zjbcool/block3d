# 灯光 Lights

这类拼图用于创建灯光和阴影。

[[toc]]

## create_light

用于创建灯光，类型包括：点光、平行光、聚光灯、半球光。一个场景中默认允许创建最多6盏灯光。

### PointLight

点光源是从场景中某个位置向四周发射光线的灯光类型。

参数：
- name - 灯光名称
- position - 灯光位置

![create_light](https://cdn.zjbku.com/blocks/create_light.png)

### DirectionalLight

平行光用于模拟太阳光线。虽然其位置不影响照明，但会对阴影产生影响。

参数：
- name - 灯光名称
- position - 灯光位置
- direction - 灯光方向

![create_light_direction](https://cdn.zjbku.com/blocks/create_light_direction.png)

### SpotLight

聚光灯是从场景中一点向一个扇形范围发射光线。

参数：
- name - 灯光名称
- position - 灯光位置
- direction - 灯光方向
- angle - 扇形范围的角度
- exponent - 灯光强度衰减指数，默认2次方

![create_light_spot](https://cdn.zjbku.com/blocks/create_light_spot.png)

### HemisphericLight

半球光多用于提供环境照明。

- name - 灯光名称
- direction - 灯光方向

![create_light_hemispheric](https://cdn.zjbku.com/blocks/create_light_hemispheric.png)

## set_get_light_prop

用于设置或获取灯光属性。

![set_get_light_prop](https://cdn.zjbku.com/blocks/set_get_light_prop.png)

灯光根据其类型有不同的属性，常用的通用属性有：

- diffuse - 灯光颜色
- intensity - 灯光强度
- specular - 高光颜色
- shadowEnabled - 是否产生阴影

## create_shadow

为指定灯光创建阴影，并指定阴影贴图的大小。

![create_shadow](https://cdn.zjbku.com/blocks/create_shadow.png)

## set_shadow_prop

设置阴影属性。

![set_shadow_prop](https://cdn.zjbku.com/blocks/set_shadow_prop.png)

属性：

- bias - 设置偏移：用于深度的偏移（在灯光方向上）
- blurBoxOffset - 设置模糊框偏移：用于模糊通道中的偏移。如果useKernelBlur为false，则无效
- blurKernel - 设置模糊内核：模糊通道的内核大小。如果useKernelBlur为true，则无效
- blurScale - 设置模糊比例：模糊纹理相对于主阴影贴图的比例。2表示一半大小。
- contactHardeningLightSizeUVRatio - 设置PCSS中使用的灯光大小（在阴影贴图uv单元中），以确定遮罩搜索区域和半影大小。使用比率有助于保持形状的稳定性，而不受贴图大小的影响。它不考虑灯光投影，因为它在灯光设置或灯光位置变化期间有太多不稳定性。如果UseContactHardingShadow为true，则无效。
- darkness - 设置阴影暗度， 0表示完全黑色
- depthScale - 设置ESM模式中使用的深度比例。可覆盖灯上保存的比例。
- filter - 设置阴影模式（normal、PCF、ESM…）。返回值是一个数字，表示阴影贴图中定义的一种模式。
- filteringQuality - 设置PCF或PCSS质量。仅当usePercentageCloserFiltering或usePercentageCloserFiltering为true时有效
- mapSize - 设置阴影贴图的尺寸
- normalBias - 设置法线偏移：应用于深度的偏移（沿法线方向并与灯光/法线角度成比例）
- transparencyShadow - 允许开启透明阴影
- useBlurCloseExponentialShadowMap - 将当前过滤器设置为过滤的“close ESM”（使用指数的倒数来防止急剧衰减的伪影）
- useBlurExponentialShadowMap - 将当前过滤器设置为过滤的ESM
- useCloseExponentialShadowMap - 将当前过滤器设置为“close ESM”（使用指数的倒数来防止急剧衰减伪影）
- useContactHardeningShadow - 将当前过滤器设置为“PCSS”（边缘硬化）。
- useExponentialShadowMap - 将当前过滤器设置为ESM
- useKernelBlur - 设置模糊通道是内核模糊（如果true）还是盒式模糊。只在过滤模式下有用（useBlurExponentialShadowMap...）。
- usePercentageCloserFiltering - 将当前的过滤器设置为 "PCF"（percentage closer filtering）。
- usePoissonSampling - 将当前过滤器设置为Poisson采样。

## add_shadow_caster

设置可以产生阴影的网格。

![add_shadow_caster](https://cdn.zjbku.com/blocks/add_shadow_caster.png)
