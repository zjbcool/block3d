<template><h1 id="灯光-lights" tabindex="-1"><a class="header-anchor" href="#灯光-lights" aria-hidden="true">#</a> 灯光 Lights</h1>
<p>这类拼图用于创建灯光和阴影。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#create-light">create_light</RouterLink><ul><li><RouterLink to="#pointlight">PointLight</RouterLink></li><li><RouterLink to="#directionallight">DirectionalLight</RouterLink></li><li><RouterLink to="#spotlight">SpotLight</RouterLink></li><li><RouterLink to="#hemisphericlight">HemisphericLight</RouterLink></li></ul></li><li><RouterLink to="#set-get-light-prop">set_get_light_prop</RouterLink></li><li><RouterLink to="#create-shadow">create_shadow</RouterLink></li><li><RouterLink to="#set-shadow-prop">set_shadow_prop</RouterLink></li><li><RouterLink to="#add-shadow-caster">add_shadow_caster</RouterLink></li></ul></nav>
<h2 id="create-light" tabindex="-1"><a class="header-anchor" href="#create-light" aria-hidden="true">#</a> create_light</h2>
<p>用于创建灯光，类型包括：点光、平行光、聚光灯、半球光。一个场景中默认允许创建最多6盏灯光。</p>
<h3 id="pointlight" tabindex="-1"><a class="header-anchor" href="#pointlight" aria-hidden="true">#</a> PointLight</h3>
<p>点光源是从场景中某个位置向四周发射光线的灯光类型。</p>
<p>参数：</p>
<ul>
<li>name - 灯光名称</li>
<li>position - 灯光位置</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/create_light.png" alt="create_light"></p>
<h3 id="directionallight" tabindex="-1"><a class="header-anchor" href="#directionallight" aria-hidden="true">#</a> DirectionalLight</h3>
<p>平行光用于模拟太阳光线。虽然其位置不影响照明，但会对阴影产生影响。</p>
<p>参数：</p>
<ul>
<li>name - 灯光名称</li>
<li>position - 灯光位置</li>
<li>direction - 灯光方向</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/create_light_direction.png" alt="create_light_direction"></p>
<h3 id="spotlight" tabindex="-1"><a class="header-anchor" href="#spotlight" aria-hidden="true">#</a> SpotLight</h3>
<p>聚光灯是从场景中一点向一个扇形范围发射光线。</p>
<p>参数：</p>
<ul>
<li>name - 灯光名称</li>
<li>position - 灯光位置</li>
<li>direction - 灯光方向</li>
<li>angle - 扇形范围的角度</li>
<li>exponent - 灯光强度衰减指数，默认2次方</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/create_light_spot.png" alt="create_light_spot"></p>
<h3 id="hemisphericlight" tabindex="-1"><a class="header-anchor" href="#hemisphericlight" aria-hidden="true">#</a> HemisphericLight</h3>
<p>半球光多用于提供环境照明。</p>
<ul>
<li>name - 灯光名称</li>
<li>direction - 灯光方向</li>
</ul>
<p><img src="https://cdn.zjbku.com/blocks/create_light_hemispheric.png" alt="create_light_hemispheric"></p>
<h2 id="set-get-light-prop" tabindex="-1"><a class="header-anchor" href="#set-get-light-prop" aria-hidden="true">#</a> set_get_light_prop</h2>
<p>用于设置或获取灯光属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_get_light_prop.png" alt="set_get_light_prop"></p>
<p>灯光根据其类型有不同的属性，常用的通用属性有：</p>
<ul>
<li>diffuse - 灯光颜色</li>
<li>intensity - 灯光强度</li>
<li>specular - 高光颜色</li>
<li>shadowEnabled - 是否产生阴影</li>
</ul>
<h2 id="create-shadow" tabindex="-1"><a class="header-anchor" href="#create-shadow" aria-hidden="true">#</a> create_shadow</h2>
<p>为指定灯光创建阴影，并指定阴影贴图的大小。</p>
<p><img src="https://cdn.zjbku.com/blocks/create_shadow.png" alt="create_shadow"></p>
<h2 id="set-shadow-prop" tabindex="-1"><a class="header-anchor" href="#set-shadow-prop" aria-hidden="true">#</a> set_shadow_prop</h2>
<p>设置阴影属性。</p>
<p><img src="https://cdn.zjbku.com/blocks/set_shadow_prop.png" alt="set_shadow_prop"></p>
<p>属性：</p>
<ul>
<li>bias - 设置偏移：用于深度的偏移（在灯光方向上）</li>
<li>blurBoxOffset - 设置模糊框偏移：用于模糊通道中的偏移。如果useKernelBlur为false，则无效</li>
<li>blurKernel - 设置模糊内核：模糊通道的内核大小。如果useKernelBlur为true，则无效</li>
<li>blurScale - 设置模糊比例：模糊纹理相对于主阴影贴图的比例。2表示一半大小。</li>
<li>contactHardeningLightSizeUVRatio - 设置PCSS中使用的灯光大小（在阴影贴图uv单元中），以确定遮罩搜索区域和半影大小。使用比率有助于保持形状的稳定性，而不受贴图大小的影响。它不考虑灯光投影，因为它在灯光设置或灯光位置变化期间有太多不稳定性。如果UseContactHardingShadow为true，则无效。</li>
<li>darkness - 设置阴影暗度， 0表示完全黑色</li>
<li>depthScale - 设置ESM模式中使用的深度比例。可覆盖灯上保存的比例。</li>
<li>filter - 设置阴影模式（normal、PCF、ESM…）。返回值是一个数字，表示阴影贴图中定义的一种模式。</li>
<li>filteringQuality - 设置PCF或PCSS质量。仅当usePercentageCloserFiltering或usePercentageCloserFiltering为true时有效</li>
<li>mapSize - 设置阴影贴图的尺寸</li>
<li>normalBias - 设置法线偏移：应用于深度的偏移（沿法线方向并与灯光/法线角度成比例）</li>
<li>transparencyShadow - 允许开启透明阴影</li>
<li>useBlurCloseExponentialShadowMap - 将当前过滤器设置为过滤的“close ESM”（使用指数的倒数来防止急剧衰减的伪影）</li>
<li>useBlurExponentialShadowMap - 将当前过滤器设置为过滤的ESM</li>
<li>useCloseExponentialShadowMap - 将当前过滤器设置为“close ESM”（使用指数的倒数来防止急剧衰减伪影）</li>
<li>useContactHardeningShadow - 将当前过滤器设置为“PCSS”（边缘硬化）。</li>
<li>useExponentialShadowMap - 将当前过滤器设置为ESM</li>
<li>useKernelBlur - 设置模糊通道是内核模糊（如果true）还是盒式模糊。只在过滤模式下有用（useBlurExponentialShadowMap...）。</li>
<li>usePercentageCloserFiltering - 将当前的过滤器设置为 &quot;PCF&quot;（percentage closer filtering）。</li>
<li>usePoissonSampling - 将当前过滤器设置为Poisson采样。</li>
</ul>
<h2 id="add-shadow-caster" tabindex="-1"><a class="header-anchor" href="#add-shadow-caster" aria-hidden="true">#</a> add_shadow_caster</h2>
<p>设置可以产生阴影的网格。</p>
<p><img src="https://cdn.zjbku.com/blocks/add_shadow_caster.png" alt="add_shadow_caster"></p>
</template>
