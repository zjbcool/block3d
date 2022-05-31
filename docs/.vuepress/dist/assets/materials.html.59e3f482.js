import{_ as e,e as a}from"./app.090844ca.js";const r={},t=a('<h1 id="\u6750\u8D28-material" tabindex="-1"><a class="header-anchor" href="#\u6750\u8D28-material" aria-hidden="true">#</a> \u6750\u8D28 Material</h1><p>\u8FD9\u7C7B\u62FC\u56FE\u7528\u4E8E\u521B\u5EFA\u548C\u64CD\u4F5C\u6750\u8D28\u3001\u8D34\u56FE\u3001\u989C\u8272\u3002</p><h2 id="create-material" tabindex="-1"><a class="header-anchor" href="#create-material" aria-hidden="true">#</a> create_material</h2><p>\u7528\u4E8E\u521B\u5EFA\u6750\u8D28\u3002\u6750\u8D28\u7C7B\u578B\u5305\u62EC\uFF1A\u6807\u51C6\u6750\u8D28\u3001PBR\u6750\u8D28\u3001\u80CC\u666F\u6750\u8D28\u3002</p><h3 id="standardmaterial" tabindex="-1"><a class="header-anchor" href="#standardmaterial" aria-hidden="true">#</a> StandardMaterial</h3><p>\u8FD9\u662FBlock3D\u5E95\u5C42\u5F15\u64CEBabylonJS\u7684\u9ED8\u8BA4\u6750\u8D28\u3002\u662F\u8D28\u91CF\u548C\u6027\u80FD\u4E4B\u95F4\u7684\u6700\u4F73\u6743\u8861\u3002</p><p><img src="https://cdn.zjbku.com/blocks/create_material.png" alt="create_material"></p><h3 id="pbrmaterial" tabindex="-1"><a class="header-anchor" href="#pbrmaterial" aria-hidden="true">#</a> PBRMaterial</h3><p>\u8FD9\u662F\u4E00\u79CD\u57FA\u4E8E\u7269\u7406\u7684\u6750\u8D28\uFF0C\u7528\u4E8E\u6A21\u62DF\u771F\u5B9E\u7684\u5149\u7167\u3002</p><p><img src="https://cdn.zjbku.com/blocks/create_material_pbr.png" alt="create_material_pbr"></p><h3 id="backgroundmaterial" tabindex="-1"><a class="header-anchor" href="#backgroundmaterial" aria-hidden="true">#</a> BackgroundMaterial</h3><p>\u80CC\u666F\u6750\u8D28\u7528\u4E8E\u5728\u573A\u666F\u4E2D\u521B\u5EFA\u4E00\u4E2A\u9AD8\u6548\u7684\u73AF\u5883\u3002</p><p><img src="https://cdn.zjbku.com/blocks/create_material_background.png" alt="create_material_background"></p><h2 id="set-get-material-prop" tabindex="-1"><a class="header-anchor" href="#set-get-material-prop" aria-hidden="true">#</a> set_get_material_prop</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u6216\u83B7\u53D6\u6750\u8D28\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/set_get_material_prop.png" alt="set_get_material_prop"></p><p>\u6750\u8D28\u5C5E\u6027\u4E0E\u4E09\u7EF4\u8F6F\u4EF6\u4E2D\u7684\u6750\u8D28\u5C5E\u6027\u57FA\u672C\u4E00\u81F4\uFF0C\u4F8B\u5982\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><ul><li>alpha - \u4E0D\u900F\u660E\u5EA6</li><li>ambientColor - \u73AF\u5883\u8272</li><li>bumpTexture - \u51F9\u51F8\u8D34\u56FE</li><li>diffuseColor - \u6F2B\u53CD\u5C04\u989C\u8272</li><li>diffuseTexture - \u6F2B\u53CD\u5C04\u8D34\u56FE</li><li>emissiveColor - \u81EA\u53D1\u5149\u989C\u8272</li><li>emissiveTexture - \u81EA\u53D1\u5149\u8D34\u56FE</li><li>lightmapTexture - \u706F\u5149\u8D34\u56FE</li><li>opacityTexture - \u4E0D\u900F\u660E\u8D34\u56FE</li><li>reflectionTexture - \u53CD\u5C04\u8D34\u56FE</li><li>refractionTexture - \u6298\u5C04\u8D34\u56FE</li><li>roughness - \u7C97\u7CD9\u5EA6</li><li>specularColor - \u9AD8\u5149\u989C\u8272</li><li>specularPower - \u9AD8\u5149\u5F3A\u5EA6</li><li>specularTexture - \u9AD8\u5149\u8D34\u56FE</li></ul><h2 id="get-material-by-mesh" tabindex="-1"><a class="header-anchor" href="#get-material-by-mesh" aria-hidden="true">#</a> get_material_by_mesh</h2><p>\u901A\u8FC7\u7F51\u683C\u83B7\u53D6\u6750\u8D28\u3002\u5982\u679C\u7F51\u683C\u88AB\u8D4B\u4E88\u591A\u7EA7\u6750\u8D28\uFF0C\u5219\u83B7\u53D6\u7B2C1\u4E2A\u6750\u8D28\u3002</p><p><img src="https://cdn.zjbku.com/blocks/get_material_by_mesh.png" alt="get_material_by_mesh"></p><h2 id="remove-material" tabindex="-1"><a class="header-anchor" href="#remove-material" aria-hidden="true">#</a> remove_material</h2><p>\u4ECE\u573A\u666F\u4E2D\u5220\u9664\u6750\u8D28\u3002\u5728Block3D\u4E2D\u5220\u9664\u7F51\u683C\u5E76\u4E0D\u4F1A\u5220\u9664\u5176\u6750\u8D28\uFF0C\u9700\u8981\u4F7F\u7528\u6B64\u62FC\u56FE\u624B\u52A8\u5220\u9664\u3002</p><p><img src="https://cdn.zjbku.com/blocks/remove_material.png" alt="remove_material"></p><h2 id="create-texture" tabindex="-1"><a class="header-anchor" href="#create-texture" aria-hidden="true">#</a> create_texture</h2><p>\u521B\u5EFA\u7EB9\u7406\u3002\u7EB9\u7406\u7C7B\u578B\u5305\u62EC\u666E\u901A\u7EB9\u7406\u548C\u7ACB\u65B9\u4F53\u7EB9\u7406\u3002</p><p><img src="https://cdn.zjbku.com/blocks/create_texture.png" alt="create_texture"></p><h2 id="remove-texture" tabindex="-1"><a class="header-anchor" href="#remove-texture" aria-hidden="true">#</a> remove_texture</h2><p>\u5220\u9664\u7EB9\u7406\u3002\u5728Block3D\u4E2D\u5220\u9664\u7F51\u683C\u3001\u6750\u8D28\u5E76\u4E0D\u4F1A\u5220\u9664\u5176\u7EB9\u7406\uFF0C\u9700\u8981\u4F7F\u7528\u6B64\u62FC\u56FE\u624B\u52A8\u5220\u9664\u3002</p><p><img src="https://cdn.zjbku.com/blocks/remove_texture.png" alt="remove_texture"></p><h2 id="set-get-texture-prop" tabindex="-1"><a class="header-anchor" href="#set-get-texture-prop" aria-hidden="true">#</a> set_get_texture_prop</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u6216\u83B7\u53D6\u7EB9\u7406\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/set_get_texture_prop.png" alt="set_get_texture_prop"></p><p>\u7EB9\u7406\u5C5E\u6027\u4E0E\u4E09\u7EF4\u8F6F\u4EF6\u4E2D\u7684\u7EB9\u7406\u5C5E\u6027\u4E00\u81F4\uFF0C\u666E\u901A\u7EB9\u7406\u5C5E\u6027\u6709\uFF1A</p><ul><li>anisotropicFilteringLevel - \u7EB9\u7406\u7684\u5404\u5411\u5F02\u6027\u8FC7\u6EE4\u7EA7\u522B\uFF0C\u9700\u8981\u786C\u4EF6\u548C\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u503C\u8D8A\u9AD8\u7EB9\u7406\u8D8A\u6162\uFF0C\u9ED8\u8BA4\u503C4\u662F\u7406\u60F3\u9009\u62E9</li><li>hasAlpha - \u662F\u5426\u4F7F\u7528\u7EB9\u7406\u7684\u900F\u660E\u901A\u9053</li><li>invertY - \u7FFB\u8F6CY\u8F74</li><li>invertZ - \u7FFB\u8F6CZ\u8F74</li><li>level - \u7EB9\u7406\u5F3A\u5EA6</li><li>uAng - \u6CBFu\u5750\u6807\u8F74\u65CB\u8F6C\u7684\u89D2\u5EA6</li><li>uOffset - \u6CBFu\u5750\u6807\u8F74\u7684\u504F\u79FB\u91CF</li><li>uRotationCenter - \u5B9A\u4E49\u65CB\u8F6C\u4E2D\u5FC3\uFF08u\uFF09</li><li>uScale - \u6CBFu\u5750\u6807\u8F74\u7684\u7F29\u653E\u503C</li><li>url - \u7EB9\u7406\u5730\u5740</li><li>vAng - \u6CBFv\u5750\u6807\u8F74\u65CB\u8F6C\u7684\u89D2\u5EA6</li><li>vOffset - \u6CBFv\u5750\u6807\u8F74\u7684\u504F\u79FB\u91CF</li><li>vRotationCenter - \u5B9A\u4E49\u65CB\u8F6C\u4E2D\u5FC3\uFF08v\uFF09</li><li>vScale - \u6CBFv\u5750\u6807\u8F74\u7684\u7F29\u653E\u503C</li><li>wAng - \u6CBFw\u5750\u6807\u8F74\u65CB\u8F6C\u7684\u89D2\u5EA6</li><li>wRotationCenter - \u5B9A\u4E49\u65CB\u8F6C\u4E2D\u5FC3\uFF08w\uFF09</li></ul><h2 id="material-color3" tabindex="-1"><a class="header-anchor" href="#material-color3" aria-hidden="true">#</a> material_color3</h2><p>\u521B\u5EFA\u4E00\u4E2ARGB\u6A21\u5F0F\u7684\u989C\u8272\u3002</p><p><img src="https://cdn.zjbku.com/blocks/material_color3.png" alt="material_color3"></p><h2 id="material-color3-from-hex" tabindex="-1"><a class="header-anchor" href="#material-color3-from-hex" aria-hidden="true">#</a> material_color3_from_hex</h2><p>\u4ECE16\u8FDB\u5236\u5B57\u7B26\u4E32\u521B\u5EFA\u4E00\u4E2ARGB\u6A21\u5F0F\u7684\u989C\u8272\u3002</p><p><img src="https://cdn.zjbku.com/blocks/material_color3_from_hex.png" alt="material_color3_from_hex"></p><h2 id="material-color4" tabindex="-1"><a class="header-anchor" href="#material-color4" aria-hidden="true">#</a> material_color4</h2><p>\u521B\u5EFA\u4E00\u4E2ARGBA\u6A21\u5F0F\u7684\u989C\u8272\u3002</p><p><img src="https://cdn.zjbku.com/blocks/material_color4.png" alt="material_color4"></p><h2 id="material-color4-from-hex" tabindex="-1"><a class="header-anchor" href="#material-color4-from-hex" aria-hidden="true">#</a> material_color4_from_hex</h2><p>\u4ECE16\u8FDB\u5236\u5B57\u7B26\u4E32\u521B\u5EFA\u4E00\u4E2ARGB\u6A21\u5F0F\u7684\u989C\u8272\u3002</p><p><img src="https://cdn.zjbku.com/blocks/material_color4_from_hex.png" alt="material_color4_from_hex"></p>',47);function i(l,o){return t}var h=e(r,[["render",i],["__file","materials.html.vue"]]);export{h as default};
