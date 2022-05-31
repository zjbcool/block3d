import{_ as s,r as o,o as r,c as h,a as e,d as l,w as a,F as n,b as i,e as d}from"./app.090844ca.js";const c={},p=e("h1",{id:"\u706F\u5149-lights",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u706F\u5149-lights","aria-hidden":"true"},"#"),i(" \u706F\u5149 Lights")],-1),_=e("p",null,"\u8FD9\u7C7B\u62FC\u56FE\u7528\u4E8E\u521B\u5EFA\u706F\u5149\u548C\u9634\u5F71\u3002",-1),u={class:"table-of-contents"},g=i("create_light"),m=i("PointLight"),f=i("DirectionalLight"),b=i("SpotLight"),w=i("HemisphericLight"),S=i("set_get_light_prop"),x=i("create_shadow"),k=i("set_shadow_prop"),C=i("add_shadow_caster"),E=d('<h2 id="create-light" tabindex="-1"><a class="header-anchor" href="#create-light" aria-hidden="true">#</a> create_light</h2><p>\u7528\u4E8E\u521B\u5EFA\u706F\u5149\uFF0C\u7C7B\u578B\u5305\u62EC\uFF1A\u70B9\u5149\u3001\u5E73\u884C\u5149\u3001\u805A\u5149\u706F\u3001\u534A\u7403\u5149\u3002\u4E00\u4E2A\u573A\u666F\u4E2D\u9ED8\u8BA4\u5141\u8BB8\u521B\u5EFA\u6700\u591A6\u76CF\u706F\u5149\u3002</p><h3 id="pointlight" tabindex="-1"><a class="header-anchor" href="#pointlight" aria-hidden="true">#</a> PointLight</h3><p>\u70B9\u5149\u6E90\u662F\u4ECE\u573A\u666F\u4E2D\u67D0\u4E2A\u4F4D\u7F6E\u5411\u56DB\u5468\u53D1\u5C04\u5149\u7EBF\u7684\u706F\u5149\u7C7B\u578B\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>name - \u706F\u5149\u540D\u79F0</li><li>position - \u706F\u5149\u4F4D\u7F6E</li></ul><p><img src="https://cdn.zjbku.com/blocks/create_light.png" alt="create_light"></p><h3 id="directionallight" tabindex="-1"><a class="header-anchor" href="#directionallight" aria-hidden="true">#</a> DirectionalLight</h3><p>\u5E73\u884C\u5149\u7528\u4E8E\u6A21\u62DF\u592A\u9633\u5149\u7EBF\u3002\u867D\u7136\u5176\u4F4D\u7F6E\u4E0D\u5F71\u54CD\u7167\u660E\uFF0C\u4F46\u4F1A\u5BF9\u9634\u5F71\u4EA7\u751F\u5F71\u54CD\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>name - \u706F\u5149\u540D\u79F0</li><li>position - \u706F\u5149\u4F4D\u7F6E</li><li>direction - \u706F\u5149\u65B9\u5411</li></ul><p><img src="https://cdn.zjbku.com/blocks/create_light_direction.png" alt="create_light_direction"></p><h3 id="spotlight" tabindex="-1"><a class="header-anchor" href="#spotlight" aria-hidden="true">#</a> SpotLight</h3><p>\u805A\u5149\u706F\u662F\u4ECE\u573A\u666F\u4E2D\u4E00\u70B9\u5411\u4E00\u4E2A\u6247\u5F62\u8303\u56F4\u53D1\u5C04\u5149\u7EBF\u3002</p><p>\u53C2\u6570\uFF1A</p><ul><li>name - \u706F\u5149\u540D\u79F0</li><li>position - \u706F\u5149\u4F4D\u7F6E</li><li>direction - \u706F\u5149\u65B9\u5411</li><li>angle - \u6247\u5F62\u8303\u56F4\u7684\u89D2\u5EA6</li><li>exponent - \u706F\u5149\u5F3A\u5EA6\u8870\u51CF\u6307\u6570\uFF0C\u9ED8\u8BA42\u6B21\u65B9</li></ul><p><img src="https://cdn.zjbku.com/blocks/create_light_spot.png" alt="create_light_spot"></p><h3 id="hemisphericlight" tabindex="-1"><a class="header-anchor" href="#hemisphericlight" aria-hidden="true">#</a> HemisphericLight</h3><p>\u534A\u7403\u5149\u591A\u7528\u4E8E\u63D0\u4F9B\u73AF\u5883\u7167\u660E\u3002</p><ul><li>name - \u706F\u5149\u540D\u79F0</li><li>direction - \u706F\u5149\u65B9\u5411</li></ul><p><img src="https://cdn.zjbku.com/blocks/create_light_hemispheric.png" alt="create_light_hemispheric"></p><h2 id="set-get-light-prop" tabindex="-1"><a class="header-anchor" href="#set-get-light-prop" aria-hidden="true">#</a> set_get_light_prop</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u6216\u83B7\u53D6\u706F\u5149\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/set_get_light_prop.png" alt="set_get_light_prop"></p><p>\u706F\u5149\u6839\u636E\u5176\u7C7B\u578B\u6709\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u5E38\u7528\u7684\u901A\u7528\u5C5E\u6027\u6709\uFF1A</p><ul><li>diffuse - \u706F\u5149\u989C\u8272</li><li>intensity - \u706F\u5149\u5F3A\u5EA6</li><li>specular - \u9AD8\u5149\u989C\u8272</li><li>shadowEnabled - \u662F\u5426\u4EA7\u751F\u9634\u5F71</li></ul><h2 id="create-shadow" tabindex="-1"><a class="header-anchor" href="#create-shadow" aria-hidden="true">#</a> create_shadow</h2><p>\u4E3A\u6307\u5B9A\u706F\u5149\u521B\u5EFA\u9634\u5F71\uFF0C\u5E76\u6307\u5B9A\u9634\u5F71\u8D34\u56FE\u7684\u5927\u5C0F\u3002</p><p><img src="https://cdn.zjbku.com/blocks/create_shadow.png" alt="create_shadow"></p><h2 id="set-shadow-prop" tabindex="-1"><a class="header-anchor" href="#set-shadow-prop" aria-hidden="true">#</a> set_shadow_prop</h2><p>\u8BBE\u7F6E\u9634\u5F71\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/set_shadow_prop.png" alt="set_shadow_prop"></p><p>\u5C5E\u6027\uFF1A</p><ul><li>bias - \u8BBE\u7F6E\u504F\u79FB\uFF1A\u7528\u4E8E\u6DF1\u5EA6\u7684\u504F\u79FB\uFF08\u5728\u706F\u5149\u65B9\u5411\u4E0A\uFF09</li><li>blurBoxOffset - \u8BBE\u7F6E\u6A21\u7CCA\u6846\u504F\u79FB\uFF1A\u7528\u4E8E\u6A21\u7CCA\u901A\u9053\u4E2D\u7684\u504F\u79FB\u3002\u5982\u679CuseKernelBlur\u4E3Afalse\uFF0C\u5219\u65E0\u6548</li><li>blurKernel - \u8BBE\u7F6E\u6A21\u7CCA\u5185\u6838\uFF1A\u6A21\u7CCA\u901A\u9053\u7684\u5185\u6838\u5927\u5C0F\u3002\u5982\u679CuseKernelBlur\u4E3Atrue\uFF0C\u5219\u65E0\u6548</li><li>blurScale - \u8BBE\u7F6E\u6A21\u7CCA\u6BD4\u4F8B\uFF1A\u6A21\u7CCA\u7EB9\u7406\u76F8\u5BF9\u4E8E\u4E3B\u9634\u5F71\u8D34\u56FE\u7684\u6BD4\u4F8B\u30022\u8868\u793A\u4E00\u534A\u5927\u5C0F\u3002</li><li>contactHardeningLightSizeUVRatio - \u8BBE\u7F6EPCSS\u4E2D\u4F7F\u7528\u7684\u706F\u5149\u5927\u5C0F\uFF08\u5728\u9634\u5F71\u8D34\u56FEuv\u5355\u5143\u4E2D\uFF09\uFF0C\u4EE5\u786E\u5B9A\u906E\u7F69\u641C\u7D22\u533A\u57DF\u548C\u534A\u5F71\u5927\u5C0F\u3002\u4F7F\u7528\u6BD4\u7387\u6709\u52A9\u4E8E\u4FDD\u6301\u5F62\u72B6\u7684\u7A33\u5B9A\u6027\uFF0C\u800C\u4E0D\u53D7\u8D34\u56FE\u5927\u5C0F\u7684\u5F71\u54CD\u3002\u5B83\u4E0D\u8003\u8651\u706F\u5149\u6295\u5F71\uFF0C\u56E0\u4E3A\u5B83\u5728\u706F\u5149\u8BBE\u7F6E\u6216\u706F\u5149\u4F4D\u7F6E\u53D8\u5316\u671F\u95F4\u6709\u592A\u591A\u4E0D\u7A33\u5B9A\u6027\u3002\u5982\u679CUseContactHardingShadow\u4E3Atrue\uFF0C\u5219\u65E0\u6548\u3002</li><li>darkness - \u8BBE\u7F6E\u9634\u5F71\u6697\u5EA6\uFF0C 0\u8868\u793A\u5B8C\u5168\u9ED1\u8272</li><li>depthScale - \u8BBE\u7F6EESM\u6A21\u5F0F\u4E2D\u4F7F\u7528\u7684\u6DF1\u5EA6\u6BD4\u4F8B\u3002\u53EF\u8986\u76D6\u706F\u4E0A\u4FDD\u5B58\u7684\u6BD4\u4F8B\u3002</li><li>filter - \u8BBE\u7F6E\u9634\u5F71\u6A21\u5F0F\uFF08normal\u3001PCF\u3001ESM\u2026\uFF09\u3002\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u8868\u793A\u9634\u5F71\u8D34\u56FE\u4E2D\u5B9A\u4E49\u7684\u4E00\u79CD\u6A21\u5F0F\u3002</li><li>filteringQuality - \u8BBE\u7F6EPCF\u6216PCSS\u8D28\u91CF\u3002\u4EC5\u5F53usePercentageCloserFiltering\u6216usePercentageCloserFiltering\u4E3Atrue\u65F6\u6709\u6548</li><li>mapSize - \u8BBE\u7F6E\u9634\u5F71\u8D34\u56FE\u7684\u5C3A\u5BF8</li><li>normalBias - \u8BBE\u7F6E\u6CD5\u7EBF\u504F\u79FB\uFF1A\u5E94\u7528\u4E8E\u6DF1\u5EA6\u7684\u504F\u79FB\uFF08\u6CBF\u6CD5\u7EBF\u65B9\u5411\u5E76\u4E0E\u706F\u5149/\u6CD5\u7EBF\u89D2\u5EA6\u6210\u6BD4\u4F8B\uFF09</li><li>transparencyShadow - \u5141\u8BB8\u5F00\u542F\u900F\u660E\u9634\u5F71</li><li>useBlurCloseExponentialShadowMap - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3A\u8FC7\u6EE4\u7684\u201Cclose ESM\u201D\uFF08\u4F7F\u7528\u6307\u6570\u7684\u5012\u6570\u6765\u9632\u6B62\u6025\u5267\u8870\u51CF\u7684\u4F2A\u5F71\uFF09</li><li>useBlurExponentialShadowMap - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3A\u8FC7\u6EE4\u7684ESM</li><li>useCloseExponentialShadowMap - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3A\u201Cclose ESM\u201D\uFF08\u4F7F\u7528\u6307\u6570\u7684\u5012\u6570\u6765\u9632\u6B62\u6025\u5267\u8870\u51CF\u4F2A\u5F71\uFF09</li><li>useContactHardeningShadow - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3A\u201CPCSS\u201D\uFF08\u8FB9\u7F18\u786C\u5316\uFF09\u3002</li><li>useExponentialShadowMap - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3AESM</li><li>useKernelBlur - \u8BBE\u7F6E\u6A21\u7CCA\u901A\u9053\u662F\u5185\u6838\u6A21\u7CCA\uFF08\u5982\u679Ctrue\uFF09\u8FD8\u662F\u76D2\u5F0F\u6A21\u7CCA\u3002\u53EA\u5728\u8FC7\u6EE4\u6A21\u5F0F\u4E0B\u6709\u7528\uFF08useBlurExponentialShadowMap...\uFF09\u3002</li><li>usePercentageCloserFiltering - \u5C06\u5F53\u524D\u7684\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3A &quot;PCF&quot;\uFF08percentage closer filtering\uFF09\u3002</li><li>usePoissonSampling - \u5C06\u5F53\u524D\u8FC7\u6EE4\u5668\u8BBE\u7F6E\u4E3APoisson\u91C7\u6837\u3002</li></ul><h2 id="add-shadow-caster" tabindex="-1"><a class="header-anchor" href="#add-shadow-caster" aria-hidden="true">#</a> add_shadow_caster</h2><p>\u8BBE\u7F6E\u53EF\u4EE5\u4EA7\u751F\u9634\u5F71\u7684\u7F51\u683C\u3002</p><p><img src="https://cdn.zjbku.com/blocks/add_shadow_caster.png" alt="add_shadow_caster"></p>',37);function P(L,B){const t=o("RouterLink");return r(),h(n,null,[p,_,e("nav",u,[e("ul",null,[e("li",null,[l(t,{to:"#create-light"},{default:a(()=>[g]),_:1}),e("ul",null,[e("li",null,[l(t,{to:"#pointlight"},{default:a(()=>[m]),_:1})]),e("li",null,[l(t,{to:"#directionallight"},{default:a(()=>[f]),_:1})]),e("li",null,[l(t,{to:"#spotlight"},{default:a(()=>[b]),_:1})]),e("li",null,[l(t,{to:"#hemisphericlight"},{default:a(()=>[w]),_:1})])])]),e("li",null,[l(t,{to:"#set-get-light-prop"},{default:a(()=>[S]),_:1})]),e("li",null,[l(t,{to:"#create-shadow"},{default:a(()=>[x]),_:1})]),e("li",null,[l(t,{to:"#set-shadow-prop"},{default:a(()=>[k]),_:1})]),e("li",null,[l(t,{to:"#add-shadow-caster"},{default:a(()=>[C]),_:1})])])]),E],64)}var z=s(c,[["render",P],["__file","lights.html.vue"]]);export{z as default};
