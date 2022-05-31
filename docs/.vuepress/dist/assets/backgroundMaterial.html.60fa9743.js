import{_ as r,r as c,o as l,c as i,a as n,d as s,w as o,F as u,b as a,e as p}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u80CC\u666F\u6750\u8D28-backgroundmaterial",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u80CC\u666F\u6750\u8D28-backgroundmaterial","aria-hidden":"true"},"#"),a(" \u80CC\u666F\u6750\u8D28 BackgroundMaterial")],-1),h={class:"table-of-contents"},b=a("\u4ECB\u7ECD"),m=a("\u6F2B\u53CD\u5C04 Diffuse"),v=a("\u9634\u5F71 Shadows"),_=a("\u4E0D\u900F\u660E\u5EA6 Opacity"),g=a("\u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14 Opacity Fresnel"),f=a("\u53CD\u5C04 Reflection"),y=a("\u955C\u9762 Mirror"),M=a("\u53CD\u5C04\u83F2\u6D85\u5C14 Reflection Fresnel"),x=a("\u6742\u9879\u548C\u989C\u8272"),B=p(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u7531\u4E8E\u5728\u4E00\u4E2A\u573A\u666F\u4E2D\u5E76\u4E0D\u603B\u662F\u9700\u8981\u53EF\u4EE5\u7167\u4EAE\u7684\u6750\u8D28\u3002\u6211\u4EEC\u6B63\u5728\u5F15\u5165\u4E00\u79CD\u65B0\u7684\u65E0\u5149\u548C\u5FEB\u901F\u7684\u6750\u8D28\uFF0C\u4EE5\u89E3\u51B3\u5728\u4F7F\u7528\u6807\u51C6\u6216PBR\u6750\u8D28\u65F6\u53EF\u80FD\u9047\u5230\u7684\u9650\u5236\u3002</p><p>\u80CC\u666F\u6750\u8D28 BackgroundMaterial \u662F\u5B8C\u5168\u65E0\u5149\u7684\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u63A5\u53D7\u9634\u5F71\u6216\u53D7\u5230\u56FE\u7247\u5904\u7406\u4FE1\u606F\u7684\u5F71\u54CD\u3002\u8FD9\u4F7F\u5F97\u5B83\u6700\u9002\u5408\u4F5C\u4E3A\u5929\u7A7A\u76D2\u6216\u5730\u9762\u6750\u8D28\u4F7F\u7528\u3002</p><h2 id="\u6F2B\u53CD\u5C04-diffuse" tabindex="-1"><a class="header-anchor" href="#\u6F2B\u53CD\u5C04-diffuse" aria-hidden="true">#</a> \u6F2B\u53CD\u5C04 Diffuse</h2><p>\u6F2B\u53CD\u5C04\u90E8\u5206\u7528\u4E8E\u7B80\u5355\u5730\u4E3A\u7F51\u683C\u8D4B\u4E88\u989C\u8272\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;textures/grass.jpg&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),j={href:"https://playground.babylonjs.com/#157MGZ",target:"_blank",rel:"noopener noreferrer"},w=a("BackgroundMaterial\u6750\u8D28\u4E4B\u6F2B\u53CD\u5C04"),A=p(`<h3 id="\u9634\u5F71-shadows" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71-shadows" aria-hidden="true">#</a> \u9634\u5F71 Shadows</h3><p>\u8FD9\u79CD\u6750\u8D28\u5C3D\u7BA1\u6CA1\u6709\u88AB\u7167\u4EAE\uFF0C\u4F46\u80FD\u591F\u63A5\u53D7\u9634\u5F71\u3002\u8FD9\u5B9E\u9645\u4E0A\u662F\u5B83\u7684\u4E00\u4E2A\u4F18\u52BF\uFF0C\u4F7F\u9002\u5408\u7528\u4E8E\u5730\u9762\u3002\u5982\u679C\u4F60\u60F3\u51CF\u5C11\u9634\u5F71\u7684\u6570\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E13\u7528\u7684\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>shadowLevel <span class="token operator">=</span> <span class="token number">0.4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),O={href:"https://playground.babylonjs.com/#G3HSAW#3",target:"_blank",rel:"noopener noreferrer"},L=a("BackgroundMaterial\u6750\u8D28\u4E4B\u9634\u5F71"),T=p(`<p>\u4ECEBabylonjs v4.2\u5F00\u59CB\uFF0C\u65B0\u589E\u4E86\u4E00\u4E2A\u65B0\u7684<code>shadowOnly</code>\u5C5E\u6027\uFF0C\u53EA\u6E32\u67D3\u9634\u5F71\uFF0C\u4F7F\u6750\u8D28\u7684\u884C\u4E3A\u7C7B\u4F3C\u4E8E<code>ShadowOnlyMaterial</code>\u6750\u8D28\uFF0C\u4F46\u6CA1\u6709\u5355\u4E00\u5149\u7EBF\u7684\u9650\u5236\u3002</p><p>\u5F53<code>shadowOnly = true</code>\u65F6\uFF0C\u53EF\u4EE5\u7528<code>primaryColor</code>\u6765\u5BF9\u9634\u5F71\u7684\u989C\u8272\u548Calpha\u8FDB\u884C\u7740\u8272\uFF0C\u4EE5\u4F7F\u9634\u5F71\u53D8\u5F97\u66F4\u5F3A\u6216\u66F4\u5F31\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>primaryColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color4</span><span class="token punctuation">(</span><span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>shadowOnly <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={href:"https://playground.babylonjs.com/#G3HSAW#33",target:"_blank",rel:"noopener noreferrer"},S=a("BackgroundMaterial\u6750\u8D28\u4E4B\u9634\u5F71\u989C\u8272"),q=p(`<h3 id="\u4E0D\u900F\u660E\u5EA6-opacity" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u900F\u660E\u5EA6-opacity" aria-hidden="true">#</a> \u4E0D\u900F\u660E\u5EA6 Opacity</h3><p>\u5982\u679C\u4F60\u60F3\u505A\u4E00\u4E2A\u900F\u660E\u7684\u5730\u9762\uFF0C\u800C\u6F2B\u53CD\u5C04\u7EB9\u7406\u5E26\u6709\u900F\u660E\u901A\u9053\uFF0C\u53EF\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>hasAlpha <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Y={href:"https://playground.babylonjs.com/#G3HSAW#149",target:"_blank",rel:"noopener noreferrer"},G=a("BackgroundMaterial\u6750\u8D28\u4E4B\u900F\u660E\u5730\u9762"),F=p(`<h3 id="\u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14-opacity-fresnel" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14-opacity-fresnel" aria-hidden="true">#</a> \u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14 Opacity Fresnel</h3><p>\u6B64\u5916\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u773C\u775B\u63A5\u8FD1\u4E0E\u5730\u9762\u5E73\u9F50\u65F6\uFF0C\u5730\u9762\u4F1A\u6D88\u5931\u3002\u8FD9\u53EF\u4EE5\u9632\u6B62\u8FD9\u79CD\u89D2\u5EA6\u4E0B\u5730\u9762\u53D8\u6210\u4E00\u6761\u786C\u7684\u76F4\u7EBF\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u7981\u7528\u5B83\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>opacityFresnel <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),C={href:"https://playground.babylonjs.com/#G3HSAW#5",target:"_blank",rel:"noopener noreferrer"},W=a("BackgroundMaterial\u6750\u8D28\u4E4B\u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14"),H=p(`<h2 id="\u53CD\u5C04-reflection" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04-reflection" aria-hidden="true">#</a> \u53CD\u5C04 Reflection</h2><p>\u65E0\u5149\u6750\u8D28\u975E\u5E38\u9002\u5408\u521B\u5EFA\u5929\u7A7A\u76D2\u3002\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528\u6807\u51C6\u6750\u8D28\u4E00\u6837\u8BBE\u7F6E\u53CD\u5C04\u7EB9\u7406\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>CubeTexture</span><span class="token punctuation">(</span><span class="token string">&quot;textures/TropicalSunnyDay&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>reflectionTexture<span class="token punctuation">.</span>coordinatesMode <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Texture<span class="token punctuation">.</span><span class="token constant">SKYBOX_MODE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R={href:"https://playground.babylonjs.com/#G3HSAW#150",target:"_blank",rel:"noopener noreferrer"},P=a("BackgroundMaterial\u6750\u8D28\u4E4B\u53CD\u5C04\u7EB9\u7406\uFF08\u84DD\u5929\u73AF\u5883\uFF09"),D=p(`<h3 id="\u955C\u9762-mirror" tabindex="-1"><a class="header-anchor" href="#\u955C\u9762-mirror" aria-hidden="true">#</a> \u955C\u9762 Mirror</h3><p>\u7531\u4E8E\u53EF\u4EE5\u5C06\u53CD\u5C04\u4E0E\u6807\u51C6\u6750\u6599\u8FDB\u884C\u6BD4\u8F83\uFF0C\u56E0\u6B64\u4F7F\u7528\u955C\u5B50\u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E5F\u76F8\u540C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mirror <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>MirrorTexture</span><span class="token punctuation">(</span><span class="token string">&quot;mirror&quot;</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mirror<span class="token punctuation">.</span>mirrorPlane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Plane</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mirror<span class="token punctuation">.</span>renderList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>

backgroundMaterial<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> mirror<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E={href:"https://playground.babylonjs.com/#G3HSAW#9",target:"_blank",rel:"noopener noreferrer"},V=a("BackgroundMaterial\u6750\u8D28\u4E4B\u955C\u9762\u7EB9\u7406"),I=p(`<h3 id="\u53CD\u5C04\u83F2\u6D85\u5C14-reflection-fresnel" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04\u83F2\u6D85\u5C14-reflection-fresnel" aria-hidden="true">#</a> \u53CD\u5C04\u83F2\u6D85\u5C14 Reflection Fresnel</h3><p>\u7531\u4E8E\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u53CD\u5C04\u548C\u6F2B\u53CD\u5C04\uFF0C\u53CD\u5C04\u83F2\u6D85\u5C14\u53EF\u4EE5\u5B9E\u73B0\u66F4\u6C89\u6D78\u5F0F\u7684\u4F53\u9A8C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> backgroundMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>BackgroundMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;backgroundMaterial&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;https://assets.babylonjs.com/environments/backgroundGround.png&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>hasAlpha <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>opacityFresnel <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>shadowLevel <span class="token operator">=</span> <span class="token number">0.4</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mirror <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>MirrorTexture</span><span class="token punctuation">(</span><span class="token string">&quot;mirror&quot;</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
mirror<span class="token punctuation">.</span>mirrorPlane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Plane</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mirror<span class="token punctuation">.</span>renderList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>reflectionTexture <span class="token operator">=</span> mirror<span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>reflectionFresnel <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>reflectionStandardFresnelWeight <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>

ground<span class="token punctuation">.</span>material <span class="token operator">=</span> backgroundMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),K={href:"https://playground.babylonjs.com/#G3HSAW#10",target:"_blank",rel:"noopener noreferrer"},X=a("BackgroundMaterial\u6750\u8D28\u4E4B\u53CD\u5C04\u83F2\u6D85\u5C14"),Z=p(`<h2 id="\u6742\u9879\u548C\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u6742\u9879\u548C\u989C\u8272" aria-hidden="true">#</a> \u6742\u9879\u548C\u989C\u8272</h2><p>\u7531\u4E8E\u6709\u65F6\u6211\u4EEC\u53EA\u9700\u8981\u989C\u8272\uFF0C\u4F60\u53EF\u4EE5\u628A\u7EB9\u7406\u4F5C\u4E3A\u7070\u8272\u6BD4\u4F8B\u7684\u4FE1\u606F\u6765\u4E0E\u989C\u8272\u6DF7\u5408\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>backgroundMaterial<span class="token punctuation">.</span>useRGBColor <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
backgroundMaterial<span class="token punctuation">.</span>primaryColor <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Magenta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),z={href:"https://playground.babylonjs.com/#G3HSAW#11",target:"_blank",rel:"noopener noreferrer"},J=a("\u6DF7\u5408\u7070\u5EA6\u548C\u989C\u8272");function Q(U,$){const e=c("RouterLink"),t=c("ExternalLinkIcon");return l(),i(u,null,[k,n("nav",h,[n("ul",null,[n("li",null,[s(e,{to:"#\u4ECB\u7ECD"},{default:o(()=>[b]),_:1})]),n("li",null,[s(e,{to:"#\u6F2B\u53CD\u5C04-diffuse"},{default:o(()=>[m]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#\u9634\u5F71-shadows"},{default:o(()=>[v]),_:1})]),n("li",null,[s(e,{to:"#\u4E0D\u900F\u660E\u5EA6-opacity"},{default:o(()=>[_]),_:1})]),n("li",null,[s(e,{to:"#\u4E0D\u900F\u660E\u5EA6\u83F2\u6D85\u5C14-opacity-fresnel"},{default:o(()=>[g]),_:1})])])]),n("li",null,[s(e,{to:"#\u53CD\u5C04-reflection"},{default:o(()=>[f]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#\u955C\u9762-mirror"},{default:o(()=>[y]),_:1})]),n("li",null,[s(e,{to:"#\u53CD\u5C04\u83F2\u6D85\u5C14-reflection-fresnel"},{default:o(()=>[M]),_:1})])])]),n("li",null,[s(e,{to:"#\u6742\u9879\u548C\u989C\u8272"},{default:o(()=>[x]),_:1})])])]),B,n("p",null,[n("a",j,[w,s(t)])]),A,n("p",null,[n("a",O,[L,s(t)])]),T,n("p",null,[n("a",N,[S,s(t)])]),q,n("p",null,[n("a",Y,[G,s(t)])]),F,n("p",null,[n("a",C,[W,s(t)])]),H,n("p",null,[n("a",R,[P,s(t)])]),D,n("p",null,[n("a",E,[V,s(t)])]),I,n("p",null,[n("a",K,[X,s(t)])]),Z,n("p",null,[n("a",z,[J,s(t)])])],64)}var an=r(d,[["render",Q],["__file","backgroundMaterial.html.vue"]]);export{an as default};