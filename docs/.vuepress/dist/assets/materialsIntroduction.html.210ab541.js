import{_ as c,r as l,o as r,c as i,a,d as s,w as t,F as u,b as n,e as p}from"./app.090844ca.js";const d={},k=a("h1",{id:"\u6750\u8D28\u4ECB\u7ECD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u6750\u8D28\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u6750\u8D28\u4ECB\u7ECD")],-1),m={class:"table-of-contents"},h=n("\u5BF9\u706F\u5149\u7684\u53CD\u5E94"),b=n("\u989C\u8272 Color"),_=n("\u6F2B\u53CD\u5C04\u989C\u8272\u793A\u4F8B Diffuse Color"),v=n("\u73AF\u5883\u8272\u793A\u4F8B Ambient Color"),g=n("\u900F\u660E\u8272\u793A\u4F8B Transparent Color"),f=n("\u7EB9\u7406 Texture"),x=n("\u7EB9\u7406\u793A\u4F8B Texture"),y=n("\u900F\u660E\u7EB9\u7406\u793A\u4F8B Transparent Texture"),w=n("\u7EB9\u7406\u6253\u5305\u5668 Texture Packer"),j=n("\u80CC\u9762\u5254\u9664 Back-Face Culling"),F=n("\u7EBF\u6846 WireFrame"),M=n("\u672C\u5730\u6587\u4EF6\u8BBF\u95EE"),T=p(`<p>\u6750\u8D28\u5141\u8BB8\u7528\u989C\u8272\u548C\u7EB9\u7406\u8986\u76D6\u7F51\u683C\u3002\u4E00\u4E2A\u6750\u8D28\u5982\u4F55\u5448\u73B0\u53D6\u51B3\u4E8E\u573A\u666F\u4E2D\u4F7F\u7528\u7684\u706F\u5149\uFF0C\u4EE5\u53CA\u5B83\u5BF9\u706F\u5149\u7684\u53CD\u5E94\u3002</p><h2 id="\u5BF9\u706F\u5149\u7684\u53CD\u5E94" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u706F\u5149\u7684\u53CD\u5E94" aria-hidden="true">#</a> \u5BF9\u706F\u5149\u7684\u53CD\u5E94</h2><p>\u6750\u8D28\u5BF9\u706F\u5149\u7684\u53CD\u5E94\u6709\u4EE5\u4E0B\u56DB\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u6F2B\u53CD\u5C04 Diffuse - \u5728\u706F\u5149\u4E0B\u770B\u5230\u7684\u6750\u8D28\u7684\u57FA\u672C\u989C\u8272\u6216\u7EB9\u7406\u3002</li><li>\u9AD8\u5149 Specture - \u706F\u5149\u7ED9\u6750\u8D28\u5E26\u6765\u7684\u9AD8\u4EAE\u3002</li><li>\u81EA\u53D1\u5149 Emissive--\u6750\u8D28\u7684\u989C\u8272\u6216\u7EB9\u7406\u5C31\u50CF\u81EA\u5E26\u53D1\u5149\u4E00\u6837\u3002</li><li>\u73AF\u5883\u8272 Ambient - \u6750\u8D28\u7684\u989C\u8272\u6216\u7EB9\u7406\u7531\u73AF\u5883\u80CC\u666F\u7167\u4EAE\u3002</li></ol><p>\u6F2B\u53CD\u5C04\u548C\u9AD8\u5149\u6750\u8D28\u9700\u8981\u521B\u5EFA\u5149\u6E90\u3002</p><p>\u73AF\u5883\u8272\u9700\u8981\u8BBE\u7F6E\u573A\u666F\u7684\u73AF\u5883\u8272 <code>ambientColor</code>\uFF0C\u7ED9\u4E88\u73AF\u5883\u80CC\u666F\u7167\u660E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span>ambientColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u989C\u8272-color" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272-color" aria-hidden="true">#</a> \u989C\u8272 Color</h2><p>\u521B\u5EFA\u6750\u8D28\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;myMaterial&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>diffuseColor</code>\u3001<code>specularColor</code>\u3001<code>emmissiveColor</code>\u548C<code>ambientColor</code>\u4E2D\u7684\u4E00\u4E2A\u3001\u90E8\u5206\u6216\u5168\u90E8\u6765\u8BBE\u7F6E\u6750\u8D28\u7684\u989C\u8272\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u53EA\u6709\u5F53\u573A\u666F\u7684\u73AF\u5883\u989C\u8272<code>ambientColor</code>\u88AB\u8BBE\u7F6E\u540E\uFF0C\u73AF\u5883\u989C\u8272\u624D\u4F1A\u88AB\u5E94\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;myMaterial&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

myMaterial<span class="token punctuation">.</span>diffuseColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>specularColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.87</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>emissiveColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>ambientColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">0.23</span><span class="token punctuation">,</span> <span class="token number">0.98</span><span class="token punctuation">,</span> <span class="token number">0.53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> myMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6F2B\u53CD\u5C04\u989C\u8272\u793A\u4F8B-diffuse-color" tabindex="-1"><a class="header-anchor" href="#\u6F2B\u53CD\u5C04\u989C\u8272\u793A\u4F8B-diffuse-color" aria-hidden="true">#</a> \u6F2B\u53CD\u5C04\u989C\u8272\u793A\u4F8B Diffuse Color</h2><p>\u4E3A\u4E86\u8BA9\u5927\u5BB6\u4E86\u89E3\u6750\u8D28\u7684\u6F2B\u53CD\u5C04\u989C\u8272\u5BF9\u6F2B\u53CD\u5C04\u706F\u5149\u989C\u8272\u7684\u53CD\u5E94\uFF0C\u4E0B\u9762\u7684\u793A\u4F8B\u663E\u793A\u4E86\u4E0D\u540C\u989C\u8272\u7684\u6750\u8D28\u5BF9\u767D\u8272\u3001\u7EA2\u8272\u3001\u7EFF\u8272\u548C\u84DD\u8272\u6F2B\u53CD\u5C04\u805A\u5149\u706F\u7684\u53CD\u5E94\u3002</p>`,14),B={href:"https://playground.babylonjs.com/#20OAV9#325",target:"_blank",rel:"noopener noreferrer"},C=n("\u6750\u8D28\u989C\u8272\u5BF9\u706F\u5149\u989C\u8272\u7684\u53CD\u5E94\u793A\u4F8B"),A=a("p",null,[a("img",{src:"https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fspots1.png&w=1920&q=75",alt:""})],-1),O=a("h2",{id:"\u73AF\u5883\u8272\u793A\u4F8B-ambient-color",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u73AF\u5883\u8272\u793A\u4F8B-ambient-color","aria-hidden":"true"},"#"),n(" \u73AF\u5883\u8272\u793A\u4F8B Ambient Color")],-1),q=a("p",null,"\u5728\u4E0B\u56FE\u4E2D\uFF0C\u6240\u6709\u7684\u7403\u4F53\u90FD\u88AB\u76F8\u540C\u7684\u534A\u7403\u5149\u7167\u4EAE\uFF0C\u6F2B\u53CD\u5C04\u4E3A\u7EA2\u8272\uFF0C\u5730\u9762\u989C\u8272\u4E3A\u7EFF\u8272\u3002\u7B2C\u4E00\u4E2A\u7403\u4F53\u6CA1\u6709\u73AF\u5883\u8272\uFF0C\u4E2D\u95F4\u7403\u4F53\u7684\u6750\u8D28\u4E0A\u7ED9\u4E86\u7EA2\u8272\u73AF\u5883\u8272\uFF0C\u53F3\u8FB9\u7684\u7403\u4F53\u7684\u6750\u8D28\u662F\u7EFF\u8272\u73AF\u5883\u8272\u3002\u573A\u666F\u73AF\u5883\u8272\uFF0C\u5FC5\u987B\u5B58\u5728\uFF0C\u662F\u767D\u8272\u3002",-1),L=a("p",null,"\u5F53\u4E00\u4E2A\u573A\u666F\u7684\u73AF\u5883\u8272 ambient color \u8BBE\u7F6E\u4E3A0\uFF0C\u90A3\u4E48\u65E0\u8BBA\u6750\u8D28\u73AF\u5883\u8272\u4E2D\u7684\u7EA2\u8272\u503C\u662F\u591A\u5C11\uFF0C\u90FD\u4E0D\u4F1A\u6709\u4EFB\u4F55\u5F71\u54CD\u3002",-1),N=a("p",null,[a("img",{src:"https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fambient1.png&w=1920&q=75",alt:""})],-1),Y={href:"https://playground.babylonjs.com/#20OAV9#14",target:"_blank",rel:"noopener noreferrer"},V=n("\u73AF\u5883\u8272\u793A\u4F8B"),E=p(`<h2 id="\u900F\u660E\u8272\u793A\u4F8B-transparent-color" tabindex="-1"><a class="header-anchor" href="#\u900F\u660E\u8272\u793A\u4F8B-transparent-color" aria-hidden="true">#</a> \u900F\u660E\u8272\u793A\u4F8B Transparent Color</h2><p>\u900F\u660E\u5EA6\u662F\u901A\u8FC7\u5C06\u6750\u8D28\u7684alpha\u5C5E\u6027\u4ECE0\uFF08\u4E0D\u53EF\u89C1\uFF09\u8BBE\u7F6E\u4E3A1\uFF08\u4E0D\u900F\u660E\uFF09\u800C\u5B9E\u73B0\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),I={href:"https://playground.babylonjs.com/#20OAV9#16",target:"_blank",rel:"noopener noreferrer"},S=n("\u6750\u8D28\u900F\u660E\u793A\u4F8B"),P=p(`<h2 id="\u7EB9\u7406-texture" tabindex="-1"><a class="header-anchor" href="#\u7EB9\u7406-texture" aria-hidden="true">#</a> \u7EB9\u7406 Texture</h2><p>\u7EB9\u7406\u662F\u901A\u8FC7\u56FE\u7247\u751F\u6210\u7684\u3002</p><p>\u521B\u5EFA\u6750\u8D28\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;myMaterial&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>diffuseTexture</code>\u3001<code>specularTexture</code>\u3001<code>emmissiveTexture</code>\u548C<code>ambientTexture</code>\u4E2D\u7684\u4E00\u4E2A\u3001\u90E8\u5206\u6216\u5168\u90E8\u6765\u8BBE\u7F6E\u6750\u8D28\u7EB9\u7406\u3002\u6CE8\u610F\uFF0C<code>ambientTexture</code>\u662F\u5728<strong>\u6CA1\u6709</strong>\u8BBE\u7F6E\u573A\u666F\u73AF\u5883\u8272\u7684\u60C5\u51B5\u4E0B\u5E94\u7528\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>StandardMaterial</span><span class="token punctuation">(</span><span class="token string">&quot;myMaterial&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

myMaterial<span class="token punctuation">.</span>diffuseTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;PATH TO IMAGE&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>specularTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;PATH TO IMAGE&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>emissiveTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;PATH TO IMAGE&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
myMaterial<span class="token punctuation">.</span>ambientTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token string">&quot;PATH TO IMAGE&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span><span class="token punctuation">;</span>

mesh<span class="token punctuation">.</span>material <span class="token operator">=</span> myMaterial<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u5F53\u6CA1\u6709\u6307\u5B9A\u6CD5\u7EBF\u65F6\uFF0CBabylon\u7684\u6807\u51C6\u6750\u8D28standard material\u5C06\u8BA1\u7B97\u6CD5\u7EBF\u3002</p><h2 id="\u7EB9\u7406\u793A\u4F8B-texture" tabindex="-1"><a class="header-anchor" href="#\u7EB9\u7406\u793A\u4F8B-texture" aria-hidden="true">#</a> \u7EB9\u7406\u793A\u4F8B Texture</h2><p>\u5728\u4E0B\u56FE\u4E2D\uFF0C\u6240\u6709\u7684\u7403\u4F53\u90FD\u88AB\u76F8\u540C\u7684\u534A\u7403\u5149 HemisphericLight \u7167\u4EAE\uFF0Cdiffuse\u4E3A\u7EA2\u8272\uFF0CgroundColor\u4E3A\u7EFF\u8272\u3002\u7B2C\u4E00\u4E2A\u7403\u4F53\u6709\u6F2B\u53CD\u5C04\u7EB9\u7406\uFF0C\u4E2D\u95F4\u7684\u7403\u4F53\u6709\u81EA\u53D1\u5149\u7EB9\u7406\uFF0C\u53F3\u8FB9\u7684\u7403\u4F53\u6750\u8D28\u6709\u7EA2\u8272\u6F2B\u53CD\u5C04\u989C\u8272\u548C\u73AF\u5883\u7EB9\u7406\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Ftexture1.png&amp;w=1920&amp;q=75" alt=""></p>`,10),D={href:"https://playground.babylonjs.com/#20OAV9#15",target:"_blank",rel:"noopener noreferrer"},H=n("\u6750\u8D28\u7684\u6F2B\u53CD\u5C04\u3001\u81EA\u53D1\u5149\u3001\u73AF\u5883\u8272\u7EB9\u7406\u793A\u4F8B"),G=p(`<h2 id="\u900F\u660E\u7EB9\u7406\u793A\u4F8B-transparent-texture" tabindex="-1"><a class="header-anchor" href="#\u900F\u660E\u7EB9\u7406\u793A\u4F8B-transparent-texture" aria-hidden="true">#</a> \u900F\u660E\u7EB9\u7406\u793A\u4F8B Transparent Texture</h2><p>\u5BF9\u4E8E\u989C\u8272\uFF0C\u900F\u660E\u5EA6\u662F\u901A\u8FC7\u8BBE\u7F6E\u6750\u8D28\u7684alpha\u5C5E\u6027\u4ECE0\uFF08\u4E0D\u53EF\u89C1\uFF09\u52301\uFF08\u4E0D\u900F\u660E\uFF09\u5B9E\u73B0\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),R={href:"https://playground.babylonjs.com/#20OAV9#17",target:"_blank",rel:"noopener noreferrer"},W=n("\u900F\u660E\u7EB9\u7406\u793A\u4F8B"),z=p(`<p>\u6B64\u5916\uFF0C\u7528\u4E8E\u7EB9\u7406\u7684\u56FE\u7247\u5982\u679C\u81EA\u5E26\u900F\u660E\u901A\u9053\uFF0C\u6BD4\u5982\u8FD9\u5F20\u6765\u81EAwikimedia commons\u7684\u72D7\u7684\u56FE\u7247\uFF0C\u80CC\u666F\u662F\u900F\u660E\u7684\u3002</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fdog.png&amp;w=1920&amp;q=75" alt=""></p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u7EB9\u7406\u7684<code>hasAlpha</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myMaterial<span class="token punctuation">.</span>diffuseTexture<span class="token punctuation">.</span>hasAlpha <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),J={href:"https://playground.babylonjs.com/#YDO1F#18",target:"_blank",rel:"noopener noreferrer"},K=n("\u56FE\u7247\u900F\u660E\u901A\u9053\u793A\u4F8B"),Q=p('<p>\u4E3A\u4E86\u8BA9\u7ACB\u65B9\u4F53\u7684\u80CC\u9762\u901A\u8FC7\u6B63\u9762\u7684\u900F\u660E\u533A\u57DF\u53EF\u89C1\uFF0C\u8981\u5904\u7406\u80CC\u9762\u5254\u9664\u95EE\u9898\u3002</p><h2 id="\u7EB9\u7406\u6253\u5305\u5668-texture-packer" tabindex="-1"><a class="header-anchor" href="#\u7EB9\u7406\u6253\u5305\u5668-texture-packer" aria-hidden="true">#</a> \u7EB9\u7406\u6253\u5305\u5668 Texture Packer</h2><p>\u4E00\u4E9B\u590D\u6742\u7684\u573A\u666F\u4E2D\u4E00\u4E2A\u6750\u8D28\u5C31\u9700\u8981\u5927\u91CF\u7684\u7EB9\u7406\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C06\u7EB9\u7406\u6253\u5305\u662F\u5F88\u65B9\u4FBF\u7684\u3002\u4F7F\u7528\u7EB9\u7406\u6253\u5305\u5668\u7684\u4F18\u52BF\u5FC5\u987B\u4E0E\u56FA\u5B9A\u5C3A\u5BF8\u7684\u7F29\u653E\u7B49\u9650\u5236\u8FDB\u884C\u6743\u8861\u3002</p><p>\u89C1\u9AD8\u7EA7\u6750\u8D28\u76F8\u5173\u7AE0\u8282\u3002</p><h2 id="\u80CC\u9762\u5254\u9664-back-face-culling" tabindex="-1"><a class="header-anchor" href="#\u80CC\u9762\u5254\u9664-back-face-culling" aria-hidden="true">#</a> \u80CC\u9762\u5254\u9664 Back-Face Culling</h2><p>\u8FD9\u662F\u4E00\u79CD\u6709\u6548\u7ED8\u5236\u4E09\u7EF4\u6A21\u578B\u7684\u4E8C\u7EF4\u6E32\u67D3\u7684\u65B9\u6CD5\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6CA1\u6709\u5FC5\u8981\u7ED8\u5236\u7ACB\u65B9\u4F53\u6216\u5176\u4ED6\u7269\u4F53\u7684\u80CC\u9762\uFF0C\u56E0\u4E3A\u5B83\u88AB\u6B63\u9762\u906E\u6321\u3002\u5728Babylon.js\u4E2D\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A true\u3002\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6709\u5229\u4E8E\u4FDD\u6301\u9AD8\u6027\u80FD\u3002</p><table><thead><tr><th style="text-align:left;">Back Face Culling True</th><th style="text-align:left;">Back Face Culling False</th></tr></thead><tbody><tr><td style="text-align:left;"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbfc2.png&amp;w=1920&amp;q=75" alt=""></td><td style="text-align:left;"><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2Fbfc1.png&amp;w=1920&amp;q=75" alt=""></td></tr></tbody></table>',7),U={href:"https://playground.babylonjs.com/#YDO1F#20",target:"_blank",rel:"noopener noreferrer"},X=n("\u80CC\u9762\u5254\u9664\u793A\u4F8B"),Z=p(`<h2 id="\u7EBF\u6846-wireframe" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6846-wireframe" aria-hidden="true">#</a> \u7EBF\u6846 WireFrame</h2><p>\u663E\u793A\u7F51\u683C\u7EBF\u6846\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>materialSphere1<span class="token punctuation">.</span>wireframe <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2FMaterials%2F04-3.png&amp;w=1920&amp;q=75" alt=""></p><h2 id="\u672C\u5730\u6587\u4EF6\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6587\u4EF6\u8BBF\u95EE" aria-hidden="true">#</a> \u672C\u5730\u6587\u4EF6\u8BBF\u95EE</h2><p>\u8981\u8BB0\u4F4F\u7684\u4E00\u4EF6\u91CD\u8981\u4E8B\u60C5\u662F\uFF0C\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u7F51\u7EDC\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u7F51\u9875\u7684\u672C\u5730\u6587\u4EF6\u3002\u8FD9\u5305\u62EC\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u4EFB\u4F55\u7EB9\u7406\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u670D\u52A1\u5668\u6216\u542F\u7528\u4E86 CORS \u7684\u56FE\u50CF\u6258\u7BA1\u670D\u52A1\u3002</p>`,6);function $(aa,na){const e=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i(u,null,[k,a("nav",m,[a("ul",null,[a("li",null,[s(e,{to:"#\u5BF9\u706F\u5149\u7684\u53CD\u5E94"},{default:t(()=>[h]),_:1})]),a("li",null,[s(e,{to:"#\u989C\u8272-color"},{default:t(()=>[b]),_:1})]),a("li",null,[s(e,{to:"#\u6F2B\u53CD\u5C04\u989C\u8272\u793A\u4F8B-diffuse-color"},{default:t(()=>[_]),_:1})]),a("li",null,[s(e,{to:"#\u73AF\u5883\u8272\u793A\u4F8B-ambient-color"},{default:t(()=>[v]),_:1})]),a("li",null,[s(e,{to:"#\u900F\u660E\u8272\u793A\u4F8B-transparent-color"},{default:t(()=>[g]),_:1})]),a("li",null,[s(e,{to:"#\u7EB9\u7406-texture"},{default:t(()=>[f]),_:1})]),a("li",null,[s(e,{to:"#\u7EB9\u7406\u793A\u4F8B-texture"},{default:t(()=>[x]),_:1})]),a("li",null,[s(e,{to:"#\u900F\u660E\u7EB9\u7406\u793A\u4F8B-transparent-texture"},{default:t(()=>[y]),_:1})]),a("li",null,[s(e,{to:"#\u7EB9\u7406\u6253\u5305\u5668-texture-packer"},{default:t(()=>[w]),_:1})]),a("li",null,[s(e,{to:"#\u80CC\u9762\u5254\u9664-back-face-culling"},{default:t(()=>[j]),_:1})]),a("li",null,[s(e,{to:"#\u7EBF\u6846-wireframe"},{default:t(()=>[F]),_:1})]),a("li",null,[s(e,{to:"#\u672C\u5730\u6587\u4EF6\u8BBF\u95EE"},{default:t(()=>[M]),_:1})])])]),T,a("p",null,[a("a",B,[C,s(o)])]),A,O,q,L,N,a("p",null,[a("a",Y,[V,s(o)])]),E,a("p",null,[a("a",I,[S,s(o)])]),P,a("p",null,[a("a",D,[H,s(o)])]),G,a("p",null,[a("a",R,[W,s(o)])]),z,a("p",null,[a("a",J,[K,s(o)])]),Q,a("p",null,[a("a",U,[X,s(o)])]),Z],64)}var ea=c(d,[["render",$],["__file","materialsIntroduction.html.vue"]]);export{ea as default};
