<template><h1 id="天空盒-skybox" tabindex="-1"><a class="header-anchor" href="#天空盒-skybox" aria-hidden="true">#</a> 天空盒 Skybox</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#关于天空盒">关于天空盒</RouterLink></li><li><RouterLink to="#创建cubetexture">创建CubeTexture</RouterLink></li><li><RouterLink to="#制作或找到天空盒图片">制作或找到天空盒图片</RouterLink></li><li><RouterLink to="#制作天空盒">制作天空盒</RouterLink></li></ul></nav>
<h2 id="关于天空盒" tabindex="-1"><a class="header-anchor" href="#关于天空盒" aria-hidden="true">#</a> 关于天空盒</h2>
<p>可以使用 &quot;天空盒&quot;（<a href="https://en.wikipedia.org/wiki/Skybox_(video_games)" target="_blank" rel="noopener noreferrer">维基<ExternalLinkIcon/></a>）在场景中添加模拟的天空。天空盒是一个围绕着场景的大型标准立方体，在每个面上都画有天空图片。(图片比三维物体更容易和更快地渲染，而且同样适用于远处的风景）。</p>
<p>在 Babylon.js 中，天空盒通常使用 <a href="https://doc.babylonjs.com/typedoc/classes/babylon.cubetexture" target="_blank" rel="noopener noreferrer">CubeTexture<ExternalLinkIcon/></a> 作为大立方体上的伪反射纹理。</p>
<h2 id="创建cubetexture" tabindex="-1"><a class="header-anchor" href="#创建cubetexture" aria-hidden="true">#</a> 创建CubeTexture</h2>
<p><a href="https://doc.babylonjs.com/typedoc/classes/babylon.cubetexture#constructor" target="_blank" rel="noopener noreferrer">CubeTexture构造函数<ExternalLinkIcon/></a>接受一个基本的URL，（默认情况下）附加&quot;_px.jpg&quot;、&quot;_nx.jpg&quot;、&quot;_py.jpg&quot;、&quot;_ny.jpg&quot;、&quot;_pz.jpg &quot;和&quot;_nz.jpg &quot;来加载立方体的+x、-x、+y、-y、+z和-z面。(如果需要的话，这些后缀可以被定制。)</p>
<p>CubeTexture图片需要是正方形的.jpg格式（除非后缀是自定义的）。为了提高效率，请使用2次方的尺寸，如1024x1024。</p>
<p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fcubetexture1.png&amp;w=1920&amp;q=75" alt="cubetexture"></p>
<p>注意，尽管是一个 &quot;纹理&quot;，CubeTexture只能与<code v-pre>reflectionTexture</code>和<code v-pre>refractionTexture</code>一起使用，而不是与其他材质属性如diffuseTexture一起使用。关于天空盒的适当设置，见下文。</p>
<h2 id="制作或找到天空盒图片" tabindex="-1"><a class="header-anchor" href="#制作或找到天空盒图片" aria-hidden="true">#</a> 制作或找到天空盒图片</h2>
<p>这是一组天空盒图片示例：</p>
<table>
<thead>
<tr>
<th style="text-align:center">右</th>
<th style="text-align:center">左</th>
<th style="text-align:center">上</th>
<th style="text-align:center">下</th>
<th style="text-align:center">正</th>
<th style="text-align:center">后</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_px.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_nx.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_py.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_ny.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_pz.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_nz.jpg&amp;w=128&amp;q=75" alt=""></td>
</tr>
<tr>
<td style="text-align:center">skybox_px.jpg</td>
<td style="text-align:center">skybox_nx.jpg</td>
<td style="text-align:center">skybox_py.jpg</td>
<td style="text-align:center">skybox_ny.jpg</td>
<td style="text-align:center">skybox_pz.jpg</td>
<td style="text-align:center">skybox_nz.jpg</td>
</tr>
</tbody>
</table>
<p>请注意，图像在盒子的边缘是无缝匹配的：</p>
<table>
<thead>
<tr>
<th style="text-align:center">后</th>
<th style="text-align:center">左</th>
<th style="text-align:center">正</th>
<th style="text-align:center">右</th>
<th style="text-align:center">后</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_nz.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_nx.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_pz.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_px.jpg&amp;w=128&amp;q=75" alt=""></td>
<td style="text-align:center"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fgetstarted%2Fskybox_nz.jpg&amp;w=128&amp;q=75" alt=""></td>
</tr>
<tr>
<td style="text-align:center">_nz.jpg</td>
<td style="text-align:center">_nx.jpg</td>
<td style="text-align:center">_pz.jpg</td>
<td style="text-align:center">_px.jpg</td>
<td style="text-align:center">_nz.jpg 重复</td>
</tr>
</tbody>
</table>
<p>可以在网上搜索 &quot;天空盒图片&quot;，能找到许多例子。这些通常是一张展开的立方体图片，你需要把它切成6个独立的图片，以便CubeTexture加载。Playground库中的立方体纹理也可能是有用的，而且它们已经是适当的格式了。</p>
<h2 id="制作天空盒" tabindex="-1"><a class="header-anchor" href="#制作天空盒" aria-hidden="true">#</a> 制作天空盒</h2>
<p>立方体纹理必须使用<RouterLink to="/babylonjs/divingDeeper/materials/usingMaterials/reflectionTexture.html">reflectionTexture</RouterLink>来应用，即使天空盒实际上不是反射；将<a href="https://doc.babylonjs.com/typedoc/classes/babylon.texture#coordinatesmode" target="_blank" rel="noopener noreferrer">coordinatesMode<ExternalLinkIcon/></a>设置为 SKYBOX_MODE 来直接在立方体上绘制纹理而不是模拟反射。</p>
<p>在Playground中复制并粘贴以下内容：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> skybox <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>MeshBuilder<span class="token punctuation">.</span><span class="token function">CreateBox</span><span class="token punctuation">(</span><span class="token string">"skyBox"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">1000.0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> skyboxMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">"skyBox"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
skyboxMaterial<span class="token punctuation">.</span>backFaceCulling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
skyboxMaterial<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"textures/skybox"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
skyboxMaterial<span class="token punctuation">.</span>reflectionTexture<span class="token punctuation">.</span>coordinatesMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Texture<span class="token punctuation">.</span><span class="token constant">SKYBOX_MODE</span><span class="token punctuation">;</span>
skyboxMaterial<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skyboxMaterial<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skybox<span class="token punctuation">.</span>material <span class="token operator">=</span> skyboxMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要使用自己的天空盒图片，确保它们可通过网络访问（本地服务器可以），并更改 BABYLON.CubeTexture 调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>skyboxMaterial<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">"URL TO IMAGE DIRECTORY/COMMON PART OF IMAGE FILENAMES"</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://playground.babylonjs.com/#UU7RQ#1" target="_blank" rel="noopener noreferrer">天空盒示例<ExternalLinkIcon/></a></p>
</template>
