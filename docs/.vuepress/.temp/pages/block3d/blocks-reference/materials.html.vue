<template><h1 id="材质-material" tabindex="-1"><a class="header-anchor" href="#材质-material" aria-hidden="true">#</a> 材质 Material</h1>
<p>这类拼图用于创建和操作材质、贴图、颜色。</p>
<h2 id="create-material" tabindex="-1"><a class="header-anchor" href="#create-material" aria-hidden="true">#</a> create_material</h2>
<p>用于创建材质。材质类型包括：标准材质、PBR材质、背景材质。</p>
<h3 id="standardmaterial" tabindex="-1"><a class="header-anchor" href="#standardmaterial" aria-hidden="true">#</a> StandardMaterial</h3>
<p>这是Block3D底层引擎BabylonJS的默认材质。是质量和性能之间的最佳权衡。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_material.png" alt="create_material"></p>
<h3 id="pbrmaterial" tabindex="-1"><a class="header-anchor" href="#pbrmaterial" aria-hidden="true">#</a> PBRMaterial</h3>
<p>这是一种基于物理的材质，用于模拟真实的光照。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_material_pbr.png" alt="create_material_pbr"></p>
<h3 id="backgroundmaterial" tabindex="-1"><a class="header-anchor" href="#backgroundmaterial" aria-hidden="true">#</a> BackgroundMaterial</h3>
<p>背景材质用于在场景中创建一个高效的环境。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_material_background.png" alt="create_material_background"></p>
<h2 id="set-get-material-prop" tabindex="-1"><a class="header-anchor" href="#set-get-material-prop" aria-hidden="true">#</a> set_get_material_prop</h2>
<p>用于设置或获取材质属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_material_prop.png" alt="set_get_material_prop"></p>
<p>材质属性与三维软件中的材质属性基本一致，例如以下属性：</p>
<ul>
<li>alpha - 不透明度</li>
<li>ambientColor - 环境色</li>
<li>bumpTexture - 凹凸贴图</li>
<li>diffuseColor - 漫反射颜色</li>
<li>diffuseTexture - 漫反射贴图</li>
<li>emissiveColor - 自发光颜色</li>
<li>emissiveTexture - 自发光贴图</li>
<li>lightmapTexture - 灯光贴图</li>
<li>opacityTexture - 不透明贴图</li>
<li>reflectionTexture - 反射贴图</li>
<li>refractionTexture - 折射贴图</li>
<li>roughness - 粗糙度</li>
<li>specularColor - 高光颜色</li>
<li>specularPower - 高光强度</li>
<li>specularTexture - 高光贴图</li>
</ul>
<h2 id="get-material-by-mesh" tabindex="-1"><a class="header-anchor" href="#get-material-by-mesh" aria-hidden="true">#</a> get_material_by_mesh</h2>
<p>通过网格获取材质。如果网格被赋予多级材质，则获取第1个材质。</p>
<p><img src="https://cdn.zjbku.com/blocks/get_material_by_mesh.png" alt="get_material_by_mesh"></p>
<h2 id="remove-material" tabindex="-1"><a class="header-anchor" href="#remove-material" aria-hidden="true">#</a> remove_material</h2>
<p>从场景中删除材质。在Block3D中删除网格并不会删除其材质，需要使用此拼图手动删除。</p>
<p><img src="https://cdn.zjbku.com/blocks/remove_material.png" alt="remove_material"></p>
<h2 id="create-texture" tabindex="-1"><a class="header-anchor" href="#create-texture" aria-hidden="true">#</a> create_texture</h2>
<p>创建纹理。纹理类型包括普通纹理和立方体纹理。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_texture.png" alt="create_texture"></p>
<h2 id="remove-texture" tabindex="-1"><a class="header-anchor" href="#remove-texture" aria-hidden="true">#</a> remove_texture</h2>
<p>删除纹理。在Block3D中删除网格、材质并不会删除其纹理，需要使用此拼图手动删除。</p>
<p><img src="https://cdn.zjbku.com/blocks/remove_texture.png" alt="remove_texture"></p>
<h2 id="set-get-texture-prop" tabindex="-1"><a class="header-anchor" href="#set-get-texture-prop" aria-hidden="true">#</a> set_get_texture_prop</h2>
<p>用于设置或获取纹理属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_texture_prop.png" alt="set_get_texture_prop"></p>
<p>纹理属性与三维软件中的纹理属性一致，普通纹理属性有：</p>
<ul>
<li>anisotropicFilteringLevel - 纹理的各向异性过滤级别，需要硬件和浏览器支持，值越高纹理越慢，默认值4是理想选择</li>
<li>hasAlpha - 是否使用纹理的透明通道</li>
<li>invertY - 翻转Y轴</li>
<li>invertZ - 翻转Z轴</li>
<li>level - 纹理强度</li>
<li>uAng - 沿u坐标轴旋转的角度</li>
<li>uOffset - 沿u坐标轴的偏移量</li>
<li>uRotationCenter - 定义旋转中心（u）</li>
<li>uScale - 沿u坐标轴的缩放值</li>
<li>url - 纹理地址</li>
<li>vAng - 沿v坐标轴旋转的角度</li>
<li>vOffset - 沿v坐标轴的偏移量</li>
<li>vRotationCenter - 定义旋转中心（v）</li>
<li>vScale - 沿v坐标轴的缩放值</li>
<li>wAng - 沿w坐标轴旋转的角度</li>
<li>wRotationCenter - 定义旋转中心（w）</li>
</ul>
<h2 id="material-color3" tabindex="-1"><a class="header-anchor" href="#material-color3" aria-hidden="true">#</a> material_color3</h2>
<p>创建一个RGB模式的颜色。</p>
<p><img src="https://cdn.zjbku.com/blocks/material_color3.png" alt="material_color3"></p>
<h2 id="material-color3-from-hex" tabindex="-1"><a class="header-anchor" href="#material-color3-from-hex" aria-hidden="true">#</a> material_color3_from_hex</h2>
<p>从16进制字符串创建一个RGB模式的颜色。</p>
<p><img src="https://cdn.zjbku.com/blocks/material_color3_from_hex.png" alt="material_color3_from_hex"></p>
<h2 id="material-color4" tabindex="-1"><a class="header-anchor" href="#material-color4" aria-hidden="true">#</a> material_color4</h2>
<p>创建一个RGBA模式的颜色。</p>
<p><img src="https://cdn.zjbku.com/blocks/material_color4.png" alt="material_color4"></p>
<h2 id="material-color4-from-hex" tabindex="-1"><a class="header-anchor" href="#material-color4-from-hex" aria-hidden="true">#</a> material_color4_from_hex</h2>
<p>从16进制字符串创建一个RGB模式的颜色。</p>
<p><img src="https://cdn.zjbku.com/blocks/material_color4_from_hex.png" alt="material_color4_from_hex"></p>
</template>
