<template><h1 id="掌握pbr材质" tabindex="-1"><a class="header-anchor" href="#掌握pbr材质" aria-hidden="true">#</a> 掌握PBR材质</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#introduction">Introduction</RouterLink></li><li><RouterLink to="#从-metallicroughness-到-pbrmaterial">从 MetallicRoughness 到 PBRMaterial</RouterLink></li><li><RouterLink to="#from-specularglossiness-to-pbrmaterial">From SpecularGlossiness To PBRMaterial</RouterLink></li><li><RouterLink to="#opacity">Opacity</RouterLink></li><li><RouterLink to="#refraction-back-compat">Refraction (Back Compat)</RouterLink></li><li><RouterLink to="#sub-surface">Sub Surface</RouterLink></li><li><RouterLink to="#refraction">Refraction</RouterLink></li><li><RouterLink to="#translucency">Translucency</RouterLink></li><li><RouterLink to="#scattering">Scattering</RouterLink></li><li><RouterLink to="#diffusion-profiles">Diffusion profiles</RouterLink></li><li><RouterLink to="#mask">Mask</RouterLink></li><li><RouterLink to="#clear-coat">Clear Coat</RouterLink></li><li><RouterLink to="#anisotropy">Anisotropy</RouterLink></li><li><RouterLink to="#sheen">Sheen</RouterLink></li><li><RouterLink to="#normal-map-parallax">Normal Map / Parallax</RouterLink></li><li><RouterLink to="#lightmaps">LightMaps</RouterLink></li><li><RouterLink to="#image-processing">Image Processing</RouterLink></li><li><RouterLink to="#light-setup">Light Setup</RouterLink></li><li><RouterLink to="#inverse-square-falloff">Inverse Square Falloff</RouterLink></li><li><RouterLink to="#intensitymode">IntensityMode</RouterLink></li><li><RouterLink to="#light-radius">Light Radius</RouterLink></li><li><RouterLink to="#shadows-as-the-standard-material">Shadows (as the standard material)</RouterLink></li><li><RouterLink to="#notes">Notes</RouterLink></li><li><RouterLink to="#specular-aliasing">Specular Aliasing</RouterLink></li><li><RouterLink to="#environment-irradiance">Environment Irradiance</RouterLink></li><li><RouterLink to="#spherical-harmonics">Spherical Harmonics</RouterLink></li><li><RouterLink to="#irradiance-map">Irradiance Map</RouterLink></li><li><RouterLink to="#energy-conservation">Energy Conservation</RouterLink></li><li><RouterLink to="#image-based-lighting-babylon-vs-raytracers">Image Based Lighting: Babylon VS RayTracers</RouterLink></li><li><RouterLink to="#how-to-debug">How to Debug</RouterLink></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>PBR材质的两个简化版本：<code v-pre>PBRSpecularGlossinessMaterial</code>和<code v-pre>PBRMetallicRoughnessMaterial</code>，是PBR的一个很好的介绍，然而使用<code v-pre>PBRMaterial</code>本身将允许你使用以下功能对材质进行更多的控制，例如</p>
<ul>
<li>Refraction 折射</li>
<li>Standard Light Falloff 标准灯光衰减</li>
<li>LightMaps 灯光贴图</li>
<li>Dedicated image processing 专用图片处理</li>
</ul>
<p><a href="https://www.babylonjs.com/demos/pbrrough/" target="_blank" rel="noopener noreferrer">演示场景 - PBR 材质<ExternalLinkIcon/></a></p>
<p>本教程讨论了<code v-pre>PBRMaterial</code>和其简单版本之间的<strong>差异</strong>。</p>
<h2 id="从-metallicroughness-到-pbrmaterial" tabindex="-1"><a class="header-anchor" href="#从-metallicroughness-到-pbrmaterial" aria-hidden="true">#</a> 从 MetallicRoughness 到 PBRMaterial</h2>
<p>为了在金属/粗糙度 Metallic/Roughness 模式下设置 PBRMaterial，必须至少设置以下一个属性（否则默认情况下它会在高光/光泽度 Specular/Glossiness 下工作）：</p>
<ul>
<li>metallic</li>
<li>roughness</li>
<li>metallicTexture</li>
</ul>
<p>为了从<code v-pre>PBRMetallicRoughnessMaterial</code>切换到更大的<code v-pre>PBRMaterial</code>，需要对一些属性进行重命名（为了保持与先前版本的向后兼容，在更丰富的材质中没有进行重命名）。</p>
<table>
<thead>
<tr>
<th style="text-align:left">PBRMetallicRoughnessMaterial</th>
<th style="text-align:left">PBRMaterial</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">baseColor</td>
<td style="text-align:left">albedoColor</td>
</tr>
<tr>
<td style="text-align:left">baseTexture</td>
<td style="text-align:left">albedoTexture</td>
</tr>
<tr>
<td style="text-align:left">metallicRoughnessTexture</td>
<td style="text-align:left">metallicTexture</td>
</tr>
<tr>
<td style="text-align:left">environmentTexture</td>
<td style="text-align:left">reflectionTexture</td>
</tr>
<tr>
<td style="text-align:left">normalTexture</td>
<td style="text-align:left">bumpTexture</td>
</tr>
<tr>
<td style="text-align:left">occlusionTexture</td>
<td style="text-align:left">ambientTexture</td>
</tr>
<tr>
<td style="text-align:left">occlusionTextureStrength</td>
<td style="text-align:left">ambientTextureStrength</td>
</tr>
</tbody>
</table>
<p>由于用于金属 metallic 或粗糙度 roughness 的通道可以定制，为了设置为简化材质，需要添加以下标志。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>useRoughnessFromMetallicTextureAlpha <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>useRoughnessFromMetallicTextureGreen <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>useMetallnessFromMetallicTextureBlue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#2FDQT5#14" target="_blank" rel="noopener noreferrer">Customizing Metallic Surfaces In PBR<ExternalLinkIcon/></a></p>
<p>转换完成，让我们看看这个版本上的自定义选项</p>
<ul>
<li>useRoughnessFromMetallicTextureAlpha: the metallic texture contains the roughness information in its alpha channel.</li>
<li>useRoughnessFromMetallicTextureGreen: the metallic texture contains the roughness information in its green channel (useRoughnessFromMetallicTextureAlpha needs to be false).</li>
<li>useMetallnessFromMetallicTextureBlue: the metallic texture contains the metallic information in its blue channel (it is considered in the red channel by default).</li>
<li>useAmbientOcclusionFromMetallicTextureRed: the metallic texture contains the ambient occlusion information in its red channel.</li>
<li>useAmbientInGrayScale: the ambient occlusion is forced to read only from the red channel of the ambient texture or from the red channel of the metallic texture.</li>
</ul>
<h2 id="from-specularglossiness-to-pbrmaterial" tabindex="-1"><a class="header-anchor" href="#from-specularglossiness-to-pbrmaterial" aria-hidden="true">#</a> From SpecularGlossiness To PBRMaterial</h2>
<p>Setting up the PBRMaterial in Specular/Glossiness mode is different.
The following properties need to be null or undefined:</p>
<ul>
<li>metallic</li>
<li>roughness</li>
<li>metallicTexture</li>
</ul>
<p>To switch from the PBRSpecularGlossinessMaterial to the richer PBRMaterial, a few of the properties need to also be renamed:</p>
<table>
<thead>
<tr>
<th style="text-align:left">PBRSpecularGlossinessMaterial</th>
<th style="text-align:left">PBRMaterial</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">diffuseColor</td>
<td style="text-align:left">albedoColor</td>
</tr>
<tr>
<td style="text-align:left">diffuseTexture</td>
<td style="text-align:left">albedoTexture</td>
</tr>
<tr>
<td style="text-align:left">specularGlossinessTexture</td>
<td style="text-align:left">reflectivityTexture</td>
</tr>
<tr>
<td style="text-align:left">specularColor</td>
<td style="text-align:left">reflectivityColor</td>
</tr>
<tr>
<td style="text-align:left">glossiness</td>
<td style="text-align:left">microSurface</td>
</tr>
<tr>
<td style="text-align:left">normalTexture</td>
<td style="text-align:left">bumpTexture</td>
</tr>
<tr>
<td style="text-align:left">occlusionTexture</td>
<td style="text-align:left">ambientTexture</td>
</tr>
<tr>
<td style="text-align:left">occlusionTextureStrength</td>
<td style="text-align:left">ambientTextureStrength</td>
</tr>
</tbody>
</table>
<p>Also, as the channel used for glossiness can be customized, in order to be setup as the simple material, you will need to add the following flag:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>useMicroSurfaceFromReflectivityMapAlpha <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#Z1VL3V#8" target="_blank" rel="noopener noreferrer">Customizing Glossiness Surfaces In PBR<ExternalLinkIcon/></a></p>
<p>Once the conversion done, let's see the custom options available on this version:</p>
<ul>
<li>microSurfaceTexture: Enables the ability to store the glossiness on the red channel of a separate texture.</li>
<li>useAlphaFromAlbedoTexture: the opacity information is contained in the alpha channel of the albedo texture.</li>
<li>useMicroSurfaceFromReflectivityMapAlpha: the reflectivity texture contains the microSurface or glossiness information in its alpha channel.</li>
<li>useAmbientInGrayScale: the ambient occlusion is forced to read only from the red channel of the ambient texture or from the red channel of the metallic texture.</li>
</ul>
<h2 id="opacity" tabindex="-1"><a class="header-anchor" href="#opacity" aria-hidden="true">#</a> Opacity</h2>
<p>Another interesting addition to the reflection is the ability to keep the most luminous part of the reflection over transparent surface... Yeah, it does not make much sense... Actually, if you look through a window at night from a lit room, you can see the reflection of lights or TV on the glass. This is the same for reflection in the PBR Material. A special property pbr.useRadianceOverAlpha = true; has been added to allow you to control this effect. Not only reflection (AKA radiance) but specular highlights can be seen on top of transparency.</p>
<p>Opacity In PBR</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>glass<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> hdrTexture<span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This behaviour can be turned off through the properties:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>useRadianceOverAlpha <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
useSpecularOverAlpha <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refraction-back-compat" tabindex="-1"><a class="header-anchor" href="#refraction-back-compat" aria-hidden="true">#</a> Refraction (Back Compat)</h2>
<p>Refraction is a little bit like reflection (Please purists, do not kill me now, I only said a little) because it is heavily relying on the environment to change the way the material looks. Basically, if reflection could be compared to seeing the sun and cloud on the surface of a lake, refraction would be seeing weird shaped fish under the surface (through the water). There is more on refraction on the next page.</p>
<p>As refraction is equivalent to how you can see through different materials boundaries, the effect can be controlled via the transparency in BJS. A special property helps you to do it, simply put pbr.linkRefractionWithTransparency=true; in your code and then the alpha will control how refractive the material is. Putting it to false leaves the alpha controlling the default transparency.</p>
<p><a href="https://playground.babylonjs.com/#19JGPR#12" target="_blank" rel="noopener noreferrer">Refraction In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> glass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"glass"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> hdrTexture<span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>refractionTexture <span class="token operator">=</span> hdrTexture<span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>linkRefractionWithTransparency <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">0.52</span><span class="token punctuation">;</span>
glass<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// Fully refractive material</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can still notice some reflection on your material due to the energy conservation. Please note that you should since 4.0 rely on the next section settings to define every thing impacting what happens under the material surface. But no worries we will keep the current setup in place for backward compatibility.</p>
<h2 id="sub-surface" tabindex="-1"><a class="header-anchor" href="#sub-surface" aria-hidden="true">#</a> Sub Surface</h2>
<p>The sub surface section of the material defines everything happening below the surface. It currently supports Refraction and Translucency.</p>
<h2 id="refraction" tabindex="-1"><a class="header-anchor" href="#refraction" aria-hidden="true">#</a> Refraction</h2>
<p>I will not redefine the refraction component here as it has been addressed in the previous section but only highlights the main differences <a href="https://doc.babylonjs.com/divingDeeper/materials/using/reflectionTexture" target="_blank" rel="noopener noreferrer">Here<ExternalLinkIcon/></a></p>
<p>Enabling the refraction would be done through a flag on the sub surface section:</p>
<p>Enabling Refraction In PBR</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isRefractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>refractionIntensity <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
As before you can control the index <span class="token keyword">of</span> <span class="token literal-property property">refraction</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#FEEK7G#24" target="_blank" rel="noopener noreferrer">Controlling The Index Of Refraction<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isRefractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note that here the index of refraction represents the value you can find in the nomenclature and not its inverse like in the legacy setup.</p>
<p>You can control the tint of the material (representing its color below the surface) by configuring two properties:</p>
<ul>
<li>tintColor: defines the color of the tint.</li>
<li>tintColorAtDistance: defines at what distance under the surface the color should be the defined one (simulating absorption through beer lambert law).</li>
</ul>
<p><a href="https://playground.babylonjs.com/#FEEK7G#25" target="_blank" rel="noopener noreferrer">Color Control In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isRefractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default the thickness of the material is understood to be the maxThickness value of the subSurface. You could easily change the thickness by relying on a thickness map:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isRefractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>thicknessTexture <span class="token operator">=</span> texture<span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>minimumThickness <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>maximumThickness <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The actual thickness per pixel would be then = minimumThickness + thicknessTexture.r * maximumThickness. This helps clamping the actual value between a min and max defined by a texture.</p>
<h2 id="translucency" tabindex="-1"><a class="header-anchor" href="#translucency" aria-hidden="true">#</a> Translucency</h2>
<p>The refraction is good to represent the light passing through on low density medium such as beer or wine. But what if your material was more dense like milk where the light would be diffused throughout the material ?</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fextensions%2FPBRSubSurface.png&amp;w=1920&amp;q=75" alt=""></p>
<p>In this case, you can rely on the translucency properties of the material.</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#37" target="_blank" rel="noopener noreferrer">Translucency In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isTranslucencyEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>translucencyIntensity <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sharing some setup with the refraction (it actually makes sense as we are speaking about the same material), you can rely upon the tint color to define the color of the material below the surface:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#27" target="_blank" rel="noopener noreferrer">Tint Color In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isTranslucencyEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The setup will be identical relying on the both previously defined values:</p>
<ul>
<li>tintColor: defines the color of the tint.</li>
<li>tintColorAtDistance: defines at what distance under the surface the color should be the defined one (simulating absorption through beer lambert law).</li>
</ul>
<p>It also fully respect the previously defined thickness configuration: The actual thickness per pixel would be then = minimumThickness + thicknessTexture.r * maximumThickness.</p>
<h2 id="scattering" tabindex="-1"><a class="header-anchor" href="#scattering" aria-hidden="true">#</a> Scattering</h2>
<p>To further add a layer of detail over what really happens beneath the surface of the material, you can add scattering. It simulates all small bounces of the light that takes place inside the material, causing light to go out at a different location than where it entered.</p>
<p>It can be really useful on materials like skin, foliage, wax, dense colored liquids, icecubes, gemstones, etc...</p>
<p>You can use this in addition of translucency to accurately represent the spread of the light inside the material.</p>
<p><a href="https://playground.babylonjs.com/#5H0H89#5" target="_blank" rel="noopener noreferrer">Sub-Surface Scattering In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

scene<span class="token punctuation">.</span><span class="token function">enablePrePassRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enableSubSurfaceForPrePass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>metersPerUnit <span class="token operator">=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isScatteringEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For this effect to be physically accurate, you have to indicate the ratio between scene units and the real world distance in meters, by filling the property metersPerUnit of the scene pre-pass renderer. It is by default set to 1 meter = 1 unit.</p>
<h2 id="diffusion-profiles" tabindex="-1"><a class="header-anchor" href="#diffusion-profiles" aria-hidden="true">#</a> Diffusion profiles</h2>
<p>Pushing realism even further, material volume albedo affects how far light travels inside the material. Thus you can register your material profile as the average volumic albedo that it is made of.</p>
<p>Let's say you want a skin tone diffusion profile, you can add this to your subsurface configuration by doing :</p>
<p>Skin Tone Using A Diffusion Profile In PBR</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>scatteringDiffusionProfile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.750</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can have up to 5 different colors registered as diffusion profiles.</p>
<p>Warning ! Performance and compatibility notice</p>
<p>This effect is using a lot of WebGL 2 structures under the hood, therefore it is only compatible with WebGL 2. Furthermore, please note that the use of subsurface scattering triggers a post-process, and it adds a lot of additionnal work for the GPU.
In other terms, use it wisely, and mind smaller GPUs that won't necessarily have the ressources to run this effect.</p>
<h2 id="mask" tabindex="-1"><a class="header-anchor" href="#mask" aria-hidden="true">#</a> Mask</h2>
<p>Would you wish to define the intensity of the different effects (Refraction or Translucency), you can use the left over channels of the thickness map. Actually, as we are trying to limit the overall number of textures used in the materials we decided to pack the mask information in the g channel for the transluency intensity factor and the alpha channel for the refraction intensity (b has been reserved for the next release).</p>
<p>As this might be counter intuitive considering the black and white texture generated by external tools, we put this feature under an opt-in flag to prevent any surprises:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
sphere<span class="token punctuation">.</span>material <span class="token operator">=</span> pbr<span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isRefractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>isTranslucencyEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>translucencyIntensity <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>thicknessTexture <span class="token operator">=</span> texture<span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>minimumThickness <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>maximumThickness <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>subSurface<span class="token punctuation">.</span>useMaskFromThicknessTexture <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-coat" tabindex="-1"><a class="header-anchor" href="#clear-coat" aria-hidden="true">#</a> Clear Coat</h2>
<p>Clear coat is a way to simulate the coating you can find in automotive car paint for instance. It usually is a transparent layer of paint that can be used to cover the colored coat.</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fextensions%2FPBRClearCoat.png&amp;w=1920&amp;q=75" alt=""></p>
<p>The clear coat is the uppersurface of the material.</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#36" target="_blank" rel="noopener noreferrer">Clear Coat In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As the clear coat is the final interaction layer with the external medium it applies on top of the bump map, which can be amazing to simulate coating above small geometries represented by the bump map:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#28" target="_blank" rel="noopener noreferrer">Clear Coat and Bump Map In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Ensures irradiance is computed per fragment to make the</span>
<span class="token comment">// Bump visible</span>
pbr<span class="token punctuation">.</span>forceIrradianceInFragment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"textures/floor_bump.png"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This goes without saying that sometimes even the coating as some imperfection who can have a different shape than the bump map:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#30" target="_blank" rel="noopener noreferrer">Clear Coat, Imperfections, and Bump Map In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Ensures irradiance is computed per fragment to make the</span>
<span class="token comment">// Bump visible</span>
pbr<span class="token punctuation">.</span>forceIrradianceInFragment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"textures/floor_bump.png"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> coatBump <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">"textures/waterbump.png"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>bumpTexture <span class="token operator">=</span> coatBump<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is all great but what about a different color (all coatings are not transparent, think about the coating around candies). You can control the tint of the clear coat through four properties:</p>
<ul>
<li>isTintEnabled: enables or disables the tint.</li>
<li>tintColor: defines the main color of the tint.</li>
<li>tintColorAtDistance: defines at what distance under the surface the color should be the defined one.</li>
<li>tintThickness: defines the thicness of the coating.</li>
</ul>
<p>It is intuitive enough to understand the thicker the coat is, the darker the color of the surface under the coating would appear. We are following carefully Beer Lambert's law in order to deduce the final color based off the chosen color, the &quot;at distance&quot; and the thickness.</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#7" target="_blank" rel="noopener noreferrer">Clear Coat Thickness In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>isTintEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Teal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>tintColorAtDistance <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>tintThickness <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default the clear coat is fully glossy. Yet, you can define a special roughness value for the coating simulating for instance a used coating:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#7" target="_blank" rel="noopener noreferrer">Clear Coat Roughness In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finally, you can play with the Index of Refraction of the coating to change the fresnel effect applied to the environment. The default configuration represents a polyurethane layer:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#31" target="_blank" rel="noopener noreferrer">Clear Coat Index Of Refraction In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>isTintEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>clearCoat<span class="token punctuation">.</span>indexOfRefraction <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>All of the configuration here can also for convenience be stored in textures:</p>
<ul>
<li>texture: defines the clear coat basic data. r is an intensity factor, and g is a roughness factor.</li>
<li>bumpTexture: defines the clear coat specific bump texture.</li>
<li>tintColorAtDistance: defines at what distance under the surface the color should be the defined one.</li>
<li>tintTexture: defines the clear tint values in a texture. rgb is tint and a is a thickness factor.</li>
</ul>
<h2 id="anisotropy" tabindex="-1"><a class="header-anchor" href="#anisotropy" aria-hidden="true">#</a> Anisotropy</h2>
<p>By default the PBR material is isotropic. This means the shape of the reflection is identical in every direction. Nevertheless, in real life some materials shows really elongated highlights. For instance, looking an old vinyl disc (yes, I am that old), you can see the specular lighting being spread from the center to the border:</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fextensions%2FPBRAnisotropy.png&amp;w=1920&amp;q=75" alt=""></p>
<p><a href="https://youtu.be/Zk0A5UzNLNw" target="_blank" rel="noopener noreferrer">https://youtu.be/Zk0A5UzNLNw<ExternalLinkIcon/></a></p>
<p>In the PBR material, you can enable anisotropy with the following code:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#10" target="_blank" rel="noopener noreferrer">Anisotropy In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note that the anisotropic effect follows the tangent space of the material and thus, it requires it to be well defined. As you can notice in the previous demo, I used a highly tessellated sphere to make the effect look right. The best effect would be achieved by defining the tangents of your meshes.</p>
<p>The anisotropic direction is by default along the tangent direction. You can modify it by using the following parameter:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#32" target="_blank" rel="noopener noreferrer">Modified Anisotropy In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>direction<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>direction<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As usual, you can control all of those parameters by using a dedicated texture. rg is direction (stored like bump map) b is an intensity factor.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>anisotropy<span class="token punctuation">.</span>texture <span class="token operator">=</span> texture<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sheen" tabindex="-1"><a class="header-anchor" href="#sheen" aria-hidden="true">#</a> Sheen</h2>
<p>Some materials have a totally different shapes for the specular lobe. By default in the PBR, material the specular lobe would for instance not be adapted to define the wide specular lobe we can see on fabric materials like satin. This is the main reason we introduced sheen in the material so that you can since 4.0 represents fabric materials relying on the PBR.</p>
<p>In the PBR material, you can enable sheen with the following code:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#33" target="_blank" rel="noopener noreferrer">Sheen In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>intensity <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note that the sheen effect will only be useful on rough dielectric materials (metallic = 0). Actually, if the roughness is small, the shape of the specular lobe is so thin that you would not see any differences with the none sheen specular lobe.</p>
<p>To help with multi color material like special kind of satin, you can control the tint of the sheen with the following code:</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#35" target="_blank" rel="noopener noreferrer">Multi Color In PBR<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>    

pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As usual, you can control all of those parameters by using a dedicated texture. rgb is tint and a is an intensity factor.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pbr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PBRMaterial</span><span class="token punctuation">(</span><span class="token string">"pbr"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>metallic <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>roughness <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>

pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
pbr<span class="token punctuation">.</span>sheen<span class="token punctuation">.</span>texture <span class="token operator">=</span> texture<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="normal-map-parallax" tabindex="-1"><a class="header-anchor" href="#normal-map-parallax" aria-hidden="true">#</a> Normal Map / Parallax</h2>
<p>Normal mapping and Parallax are supported in the exact same way than the standard material. Please, refer to the following links for more information:</p>
<ul>
<li><a href="https://doc.babylonjs.com/divingDeeper/materials/advanced/normalMaps" target="_blank" rel="noopener noreferrer">Normal Map<ExternalLinkIcon/></a></li>
<li><a href="https://doc.babylonjs.com/divingDeeper/materials/using/parallaxMapping" target="_blank" rel="noopener noreferrer">Parallax<ExternalLinkIcon/></a></li>
</ul>
<h2 id="lightmaps" tabindex="-1"><a class="header-anchor" href="#lightmaps" aria-hidden="true">#</a> LightMaps</h2>
<p>LightMaps are available in the same way they are in the standardMaterial by affecting a texture to the lightmapTexture property. This can also be used as a shadowMap instead by switching the dedicated control flag useLightmapAsShadowmap to true.</p>
<h2 id="image-processing" tabindex="-1"><a class="header-anchor" href="#image-processing" aria-hidden="true">#</a> Image Processing</h2>
<p>The Processing Configuration can be applied directly on the material as explained in the image processing documentation.</p>
<h2 id="light-setup" tabindex="-1"><a class="header-anchor" href="#light-setup" aria-hidden="true">#</a> Light Setup</h2>
<p>Always considering what &quot;Nature does&quot;, we reconsidered the BJS light falloff effect in the PBR Material.</p>
<p>Three main properties have been added to offer a better simulation of the lights.</p>
<h2 id="inverse-square-falloff" tabindex="-1"><a class="header-anchor" href="#inverse-square-falloff" aria-hidden="true">#</a> Inverse Square Falloff</h2>
<p>This is a type of falloff that is pretty close from what light does in real life (It is implemented in the best engines like BJS and Unreal, I may oversell it here 😃 )</p>
<p>Compared to the BJS lighting model, instead of playing with an arbitrary range for the lights, the light impact will decrease proportionally to the inverse of the light distance squared.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">float</span> lightDistanceFalloff <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>lightDistanceSquared <span class="token operator">+</span> <span class="token number">0.0001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> lightDistanceFalloff<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>So, the further you are, the bigger your intensity will need to be to reach a surface.</p>
<p>To even go further, the intensity you define on the lights follows physics notions:</p>
<ul>
<li>Point and Spot lights are defined in luminous intensity (candela, m/sr)</li>
<li>Directional and Hemispheric lights in illuminance (nit, cd/m2)</li>
</ul>
<p>To make it compatible with the standard material, you can easily disable this behaviour and use the Physical Falloff like this:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>usePhysicalLightFalloff <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="intensitymode" tabindex="-1"><a class="header-anchor" href="#intensitymode" aria-hidden="true">#</a> IntensityMode</h2>
<p>The lights now have an intensity which enable you to convert the intensity metric from one type to another one. This can help setting up your analytical lights close from real life measure:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Default automatic mode best fitting with the light type.</span>
light<span class="token punctuation">.</span>intensityMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Light<span class="token punctuation">.</span><span class="token constant">INTENSITYMODE_AUTOMATIC</span><span class="token punctuation">;</span>
<span class="token comment">// Lumen (lm)</span>
light<span class="token punctuation">.</span>intensityMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Light<span class="token punctuation">.</span><span class="token constant">INTENSITYMODE_LUMINOUSPOWER</span><span class="token punctuation">;</span>
<span class="token comment">// Candela (lm/sr)</span>
light<span class="token punctuation">.</span>intensityMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Light<span class="token punctuation">.</span><span class="token constant">INTENSITYMODE_LUMINOUSINTENSITY</span><span class="token punctuation">;</span>
<span class="token comment">// Lux (lm/m^2)</span>
light<span class="token punctuation">.</span>intensityMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Light<span class="token punctuation">.</span><span class="token constant">INTENSITYMODE_ILLUMINANCE</span><span class="token punctuation">;</span>
<span class="token comment">// Nit (cd/m^2)</span>
light<span class="token punctuation">.</span>intensityMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Light<span class="token punctuation">.</span><span class="token constant">INTENSITYMODE_LUMINANCE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="light-radius" tabindex="-1"><a class="header-anchor" href="#light-radius" aria-hidden="true">#</a> Light Radius</h2>
<p>Light Radius has been added as a property of each light and controls the fact that in real life most of the lights are not a single point.</p>
<p>Why? Simply because if your material is really glossy, each specular highlights (from the direct lights) will only be seen as a simple dot.</p>
<p><a href="https://playground.babylonjs.com/#19JGPR#10" target="_blank" rel="noopener noreferrer">Small Dot Light Radius Using PBR<ExternalLinkIcon/></a></p>
<p>Now, increasing the light radius makes this dot wider</p>
<p><a href="https://playground.babylonjs.com/#19JGPR#11" target="_blank" rel="noopener noreferrer">Wider Dot Light Radius Using PBR<ExternalLinkIcon/></a></p>
<p>This uses internally a lot of approximation like Tan(theta) is almost theta for small angles so if you try to put bigger radius than a tenth of the light distance you will not see the desired effect.</p>
<h2 id="shadows-as-the-standard-material" tabindex="-1"><a class="header-anchor" href="#shadows-as-the-standard-material" aria-hidden="true">#</a> Shadows (as the standard material)</h2>
<p>Shadows are fully equivalent to the Standard material. All the documentation can be found here: Shadows;</p>
<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2>
<p>You can find below a few notes which could be helpful during the creation of your scenes.</p>
<h2 id="specular-aliasing" tabindex="-1"><a class="header-anchor" href="#specular-aliasing" aria-hidden="true">#</a> Specular Aliasing</h2>
<p>Glossy materials are subject to Specular Aliasing artifacts. These artifacts are usually visible as bright dots flickering on meshes when animating the model or moving the camera.</p>
<p>They could be the result of several factors:</p>
<ul>
<li>Sharp Edges in the geometry</li>
<li>Bump Map Texture</li>
<li>... For more information, you can consult this page about anti-aliasing techniques</li>
</ul>
<p>Babylon version 3.2 includes a simple way to enable Specular anti-aliasing in PBR materials:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>enableSpecularAntiAliasing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#1XJD4C" target="_blank" rel="noopener noreferrer">Specular Aliasing in PBR<ExternalLinkIcon/></a></p>
<h2 id="environment-irradiance" tabindex="-1"><a class="header-anchor" href="#environment-irradiance" aria-hidden="true">#</a> Environment Irradiance</h2>
<p>A big part of the lighting in PBR is assured by the environment texture. This provides two kinds of light contributions, radiance which could be considered alike reflection and irradiance which could be thought as the diffuse component of the Image Based Lighting.</p>
<p>In case you are creating a model rough and not metallic (in metallic workflow) or not specular (in specular glossiness mode), most of the illumination will be provided by both the analytical lights and the environment texture.</p>
<p>In Babylon JS in order to optimize the computation of the irradiance, it is computed in the vertex shader and interpolated in the fragment. Unfortunately, this prevents us to rely on the normal map to realize the computation and then might introduce artifacts by not emphasizing the bumpiness of the surface. It is most of the time acceptable but with rough none reflective material it changes a lot the visual result.</p>
<p>You can see below on the left on rough none reflective model in the default configuration and on the right a model with forceIrradianceInFragment enabled.</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FpbrForceIrradianceInFragment.jpg&amp;w=1920&amp;q=75" alt=""></p>
<p>In order to force the computation of the irradiance in fragment, one can set to true the according parameter:</p>
<p>pbr.forceIrradianceInFragment = true;
Another point is that the irradiance or diffuse part of the IBL could cover your shadows if the environment lighting is strong. You could if you wish reduce its intensity separately from the reflection by scaling the polynomials used to create it:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>onReadyObservable<span class="token punctuation">.</span><span class="token function">addOnce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hdrTexture<span class="token punctuation">.</span>sphericalPolynomial<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spherical-harmonics" tabindex="-1"><a class="header-anchor" href="#spherical-harmonics" aria-hidden="true">#</a> Spherical Harmonics</h2>
<p>As we noticed in 4.0, our fast approach to compute the environment irradiance, may have not been accurate enough in certain use cases. We now, by default, have a more accurate representation of the diffuse IBL. In case you would prefer to focus on speed, you can easily revert to our previous method by switching the sphericalHarmonics property to false:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>brdf<span class="token punctuation">.</span>useSphericalHarmonics <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here is how the difference looks like in live (toggle the Spherical Harmonics switch on and off to see the difference):</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#38" target="_blank" rel="noopener noreferrer">Spherical Harmonics in PBR<ExternalLinkIcon/></a></p>
<p>If you want to hear the full story behind it, you can have a read at our blog post : A tale of a bug.</p>
<h2 id="irradiance-map" tabindex="-1"><a class="header-anchor" href="#irradiance-map" aria-hidden="true">#</a> Irradiance Map</h2>
<p>In some special cases where the environment texture is highly dynamic (like a bright sun having a really high exposure value), the spherical representation of the diffuse IBL might not be enough. Actually, we are for performance reasons limiting the representation to the first 3 bands. A highly dynamic texture can not be represented through 3 bands only. In this case you can rely on a texture instead of a spherical representation.</p>
<p>In order to rely on a texture, you can set the irradianceTexture field of your environmentTexture as follow:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>environmentTexture <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>CubeTexture<span class="token punctuation">.</span><span class="token function">CreateFromPrefilteredData</span><span class="token punctuation">(</span><span class="token string">"specular.dds"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span>environmentTexture<span class="token punctuation">.</span>irradianceTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"irradiance.dds"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Please, note that both textures should have the same properties: Cube vs 2D, Gamma vs Linear, RGBD or the chosen coordinates mode. Those properties do not need to be set on the main environmentTexture to prevent redundancy.</p>
<h2 id="energy-conservation" tabindex="-1"><a class="header-anchor" href="#energy-conservation" aria-hidden="true">#</a> Energy Conservation</h2>
<p>As we knew from the beginning, our PBR lighting model was not energy conservative, thanks to a lot of new white papers on this area, we have been able to introduce a way to embrace energy conservation in real time. This basically means that your rough metallic models will look brighter and closer from what nature does.</p>
<p>In case you would like to turn this feature off, to for instance get a closer cross engine rendering look, you can turn off the energy conservation flag on the PBR material.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pbr<span class="token punctuation">.</span>brdf<span class="token punctuation">.</span>useEnergyConservation <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here is how the difference looks like in live (Left sphere is using energy conservation while the right one does not):</p>
<p><a href="https://playground.babylonjs.com/#FEEK7G#39" target="_blank" rel="noopener noreferrer">Energy Conservation in PBR<ExternalLinkIcon/></a></p>
<h2 id="image-based-lighting-babylon-vs-raytracers" tabindex="-1"><a class="header-anchor" href="#image-based-lighting-babylon-vs-raytracers" aria-hidden="true">#</a> Image Based Lighting: Babylon VS RayTracers</h2>
<p>We spent a lot of time working on the implementation of our IBL environments. We reworked how we generate the DDS prefiltered environments so that we aligned with what perceptual ray tracers and popular game engines like Unity and Unreal are doing with their IBL rendering. We are approximating a perceptual roughness model which drops what is perceived to be 50% rough falls in the middle of middle of the linear ramp for roughness. The GGX algorithm that we use for our lighting calculations has more of a linear roughness scale which loses clarity in reflections quickly (by around 0.3 roughness). We adjusted the falloff to mirror what happens in Arnold ray tracing, which is the renderer we chose as our ground truth for this work:</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FEnvironment%2FRayTracer.png&amp;w=1920&amp;q=75" alt="RayTracer"></p>
<p>We were able to largely match the perceptual falloff from the Arnold ray tracer, while using a prefiltered MIP chain in the DDS ignoring the last two MIP levels. We have some deviation from the high roughness in the ray traced ground truth, but since fully rough materials don't really exist in the real world, there is no way to know if Arnold is right in these areas.</p>
<h2 id="how-to-debug" tabindex="-1"><a class="header-anchor" href="#how-to-debug" aria-hidden="true">#</a> How to Debug</h2>
<p>In order to simplify troubleshooting within the PBR material, a special section has been added to the inspector:</p>
<p>Inspector</p>
<p>You can choose from the exhaustive list of information what you would like to see. You can also use the split position to choose from which horizontal position the debug mode starts on the screen. This can help looking side by side at the different renders. The output factor can be helpful if you are looking at values pretty small as it would help seeing different colors on screen.</p>
<p><a href="https://playground.babylonjs.com/#2FDQT5#104" target="_blank" rel="noopener noreferrer">Using The Inspector with PBR<ExternalLinkIcon/></a></p>
</template>
