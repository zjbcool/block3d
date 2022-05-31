# 材质 Material

这类拼图用于创建和操作材质、贴图、颜色。

## create_material

用于创建材质。材质类型包括：标准材质、PBR材质、背景材质。

### StandardMaterial

这是Block3D底层引擎BabylonJS的默认材质。是质量和性能之间的最佳权衡。

![create_material](https://cdn.zjbku.com/blocks/create_material.png)

### PBRMaterial

这是一种基于物理的材质，用于模拟真实的光照。

![create_material_pbr](https://cdn.zjbku.com/blocks/create_material_pbr.png)

### BackgroundMaterial

背景材质用于在场景中创建一个高效的环境。

![create_material_background](https://cdn.zjbku.com/blocks/create_material_background.png)

## set_get_material_prop

用于设置或获取材质属性。

![set_get_material_prop](https://cdn.zjbku.com/blocks/set_get_material_prop.png)

材质属性与三维软件中的材质属性基本一致，例如以下属性：

- alpha - 不透明度
- ambientColor - 环境色
- bumpTexture - 凹凸贴图
- diffuseColor - 漫反射颜色
- diffuseTexture - 漫反射贴图
- emissiveColor - 自发光颜色
- emissiveTexture - 自发光贴图
- lightmapTexture - 灯光贴图
- opacityTexture - 不透明贴图
- reflectionTexture - 反射贴图
- refractionTexture - 折射贴图
- roughness - 粗糙度
- specularColor - 高光颜色
- specularPower - 高光强度
- specularTexture - 高光贴图

## get_material_by_mesh

通过网格获取材质。如果网格被赋予多级材质，则获取第1个材质。

![get_material_by_mesh](https://cdn.zjbku.com/blocks/get_material_by_mesh.png)

## remove_material

从场景中删除材质。在Block3D中删除网格并不会删除其材质，需要使用此拼图手动删除。

![remove_material](https://cdn.zjbku.com/blocks/remove_material.png)

## create_texture

创建纹理。纹理类型包括普通纹理和立方体纹理。

![create_texture](https://cdn.zjbku.com/blocks/create_texture.png)

## remove_texture

删除纹理。在Block3D中删除网格、材质并不会删除其纹理，需要使用此拼图手动删除。

![remove_texture](https://cdn.zjbku.com/blocks/remove_texture.png)

## set_get_texture_prop

用于设置或获取纹理属性。

![set_get_texture_prop](https://cdn.zjbku.com/blocks/set_get_texture_prop.png)

纹理属性与三维软件中的纹理属性一致，普通纹理属性有：

- anisotropicFilteringLevel - 纹理的各向异性过滤级别，需要硬件和浏览器支持，值越高纹理越慢，默认值4是理想选择
- hasAlpha - 是否使用纹理的透明通道
- invertY - 翻转Y轴
- invertZ - 翻转Z轴
- level - 纹理强度
- uAng - 沿u坐标轴旋转的角度
- uOffset - 沿u坐标轴的偏移量
- uRotationCenter - 定义旋转中心（u）
- uScale - 沿u坐标轴的缩放值
- url - 纹理地址
- vAng - 沿v坐标轴旋转的角度
- vOffset - 沿v坐标轴的偏移量
- vRotationCenter - 定义旋转中心（v）
- vScale - 沿v坐标轴的缩放值
- wAng - 沿w坐标轴旋转的角度
- wRotationCenter - 定义旋转中心（w）

## material_color3

创建一个RGB模式的颜色。

![material_color3](https://cdn.zjbku.com/blocks/material_color3.png)

## material_color3_from_hex

从16进制字符串创建一个RGB模式的颜色。

![material_color3_from_hex](https://cdn.zjbku.com/blocks/material_color3_from_hex.png)

## material_color4

创建一个RGBA模式的颜色。

![material_color4](https://cdn.zjbku.com/blocks/material_color4.png)

## material_color4_from_hex

从16进制字符串创建一个RGB模式的颜色。

![material_color4_from_hex](https://cdn.zjbku.com/blocks/material_color4_from_hex.png)