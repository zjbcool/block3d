import{_ as o,r as l,o as c,c as r,a as e,d as n,w as t,F as i,b as a,e as d}from"./app.090844ca.js";const p={},_=e("h1",{id:"\u573A\u666F-scenes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u573A\u666F-scenes","aria-hidden":"true"},"#"),a(" \u573A\u666F Scenes")],-1),u=e("p",null,"\u8FD9\u7C7B\u62FC\u56FE\u7528\u4E8E\u52A0\u8F7D\u8D44\u4EA7\u3001\u521B\u5EFA\u73AF\u5883\u3001\u63A7\u5236\u573A\u666F\u5C5E\u6027\u3002",-1),h={class:"table-of-contents"},m=a("scene_create_custom_preloader"),g=a("scene_update_custom_preloader"),f=a("scene_assets_manager"),b=a("scene_load_asset"),k=a("scene_get_loaded_from_asset"),x=a("scene_on_finish_load"),v=a("set_scene_prop"),y=a("scene_create_default_environment"),j=a("scene_update_default_environment"),z=a("scene_get_environment_prop"),T=a("app_fullscreen"),C=a("app_pointer_lock"),B=d('<h2 id="scene-create-custom-preloader" tabindex="-1"><a class="header-anchor" href="#scene-create-custom-preloader" aria-hidden="true">#</a> scene_create_custom_preloader</h2><p>\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5668\uFF0C\u53D6\u4EE3\u9ED8\u8BA4\u7684\u52A0\u8F7D\u5668\u3002\u9700\u8981\u53D6\u6D88\u52FE\u9009<a href="#scene-assets-manager">scene_assets_manager</a>\u62FC\u56FE\u7684<code>useDefaultPreloader</code>\u9009\u9879\u624D\u80FD\u751F\u6548\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_create_custom_preloader.png" alt="scene_create_custom_preloader"></p><p><code>options</code>\u53C2\u6570\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B\u63A7\u5236\u52A0\u8F7D\u5668\u5916\u89C2\u7684\u5C5E\u6027\u548C\u503C\uFF1A</p><p><img src="https://cdn.zjbku.com/blocks/scene_create_custom_preloader_1.png" alt="scene_create_custom_preloader_1"></p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\u5939\u4E0B<code>assets/css/index.css</code>\u6837\u5F0F\u6587\u4EF6\u5B9E\u73B0\u540C\u6837\u7684\u6548\u679C\uFF0C\u6B64\u65F6<code>options</code>\u4E0D\u9700\u8981\u4F20\u9012\u53C2\u6570\u3002\u76F8\u5173\u7684\u7C7B\u540D\u6709\uFF1A</p><ul><li>.preloader-background - \u52A0\u8F7D\u5C4F\u80CC\u666F</li><li>.preloader-container - \u52A0\u8F7D\u5668\u5BB9\u5668\uFF0C\u63A7\u5236\u5927\u5C0F</li><li>.preloader-bar - \u8FDB\u5EA6\u6761</li><li>.preloader-logo - LOGO</li></ul><h2 id="scene-update-custom-preloader" tabindex="-1"><a class="header-anchor" href="#scene-update-custom-preloader" aria-hidden="true">#</a> scene_update_custom_preloader</h2><p>\u66F4\u65B0\u52A0\u8F7D\u5668\u8FDB\u5EA6\u6761\u548C\u5728\u52A0\u8F7D\u5B8C\u6210\u65F6\u7ED3\u675F\u52A0\u8F7D\u5668\u3002\u8BE5\u62FC\u56FE\u6240\u9700\u7684<code>percentage</code>\u53EF\u4EE5\u5728<a href="#scene-assets-manager">scene_assets_manager</a>\u62FC\u56FE\u7684\u53F3\u952E\u83DC\u5355\u4E2D\u901A\u8FC7<code>\u521B\u5EFA percentage</code>\u521B\u5EFA\u3002</p><p>\u5C06\u66F4\u65B0\u52A0\u8F7D\u5668\u62FC\u56FE\u653E\u5165<a href="#scene-assets-manager">scene_assets_manager</a>\u62FC\u56FE\u7684<code>on progress</code>\u63D2\u69FD\u4E2D\uFF1B\u5C06\u7ED3\u675F\u52A0\u8F7D\u5668\u62FC\u56FE\u653E\u5165<code>on ready</code>\u63D2\u69FD\u4E2D\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_update_custom_preloader.png" alt="scene_update_custom_preloader"></p><h2 id="scene-assets-manager" tabindex="-1"><a class="header-anchor" href="#scene-assets-manager" aria-hidden="true">#</a> scene_assets_manager</h2><p>\u8BE5\u62FC\u56FE\u7528\u4E8E\u52A0\u8F7DBlock3D\u5E94\u7528\u6240\u9700\u7684\u6240\u6709\u7C7B\u578B\u7684\u8D44\u4EA7\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_assets_manager.png" alt="scene_assets_manager"></p><p>\u53C2\u6570\uFF1A</p><ul><li>useDefaultPreload - \u53D6\u6D88\u52FE\u9009\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5668\uFF0C\u5426\u5219\u4F7F\u7528\u9ED8\u8BA4\u52A0\u8F7D\u5668</li><li>load assets - \u5728\u8BE5\u63D2\u69FD\u4E2D\u4F7F\u7528<a href="#scene-load-asset">scene_load_asset</a>\u62FC\u56FE\u5404\u79CD\u8D44\u4EA7</li><li>on progress - \u8D44\u4EA7\u52A0\u8F7D\u8FDB\u5EA6</li><li>on load - \u8D44\u4EA7\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4F46\u672A\u6E32\u67D3</li><li>on ready - \u573A\u666F\u51C6\u5907\u5B8C\u6210</li></ul><p>\u52A0\u8F7D\u7F51\u683C\uFF1A</p><p><img src="https://cdn.zjbku.com/blocks/scene_assets_manager_1.png" alt="scene_assets_manager_1"></p><h2 id="scene-load-asset" tabindex="-1"><a class="header-anchor" href="#scene-load-asset" aria-hidden="true">#</a> scene_load_asset</h2><p>\u7528\u4E8E\u521B\u5EFA\u52A0\u8F7D\u4EFB\u52A1\uFF0C\u652F\u6301\u4ECE\u672C\u5730\u6216\u8FDC\u7A0B\u670D\u52A1\u5668\u52A0\u8F7D\u8D44\u4EA7\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_load_asset.png" alt="scene_load_asset"></p><p>\u8D44\u4EA7\u7C7B\u578B\uFF1A</p><ul><li>Mesh - \u7F51\u683C\uFF0C3D\u573A\u666F\uFF0C\u652F\u6301<code>.babylon</code> <code>.glTF/.glb</code> <code>.obj</code> <code>.stl</code></li><li>TextFile - <code>.txt</code>\u6587\u672C\u6587\u4EF6</li><li>BinaryFile - \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5982<code>.json</code> <code>.mp3</code></li><li>Image - \u52A0\u8F7D<code>HTMLImage</code></li><li>Texture - \u52A0\u8F7D\u666E\u901A\u8D34\u56FE</li><li>CubeTexture - \u52A0\u8F7D\u7ACB\u65B9\u4F53\u8D34\u56FE</li><li>HDRCubeTexture - \u52A0\u8F7DHDR\u7ACB\u65B9\u4F53\u8D34\u56FE</li><li>EquiRectangularCubeTexture - \u52A0\u8F7D\u7B49\u77E9\u67F1\u72B6\u7ACB\u65B9\u4F53\u8D34\u56FE</li></ul><h2 id="scene-get-loaded-from-asset" tabindex="-1"><a class="header-anchor" href="#scene-get-loaded-from-asset" aria-hidden="true">#</a> scene_get_loaded_from_asset</h2><p>\u7528\u4E8E\u5728\u52A0\u8F7D\u4EFB\u52A1\u6210\u529F\u540E\u83B7\u53D6\u52A0\u8F7D\u7684\u8D44\u4EA7\u3002\u6B64\u62FC\u56FE\u9700\u8981\u5728<a href="#scene-assets-manager">scene_assets_manager</a>\u62FC\u56FE\u7684<code>on load</code>\u63D2\u69FD\u6216<a href="#scene-on-finish-load">scene_on_finish_load</a>\u62FC\u56FE\u7684\u56DE\u8C03\u63D2\u69FD\u4E2D\u8FD0\u884C\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_get_loaded_from_asset.png" alt="scene_get_loaded_from_asset"></p><p>\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><ul><li>meshes - array \u52A0\u8F7D\u7684\u7F51\u683C</li><li>animationGroups - array \u52A0\u8F7D\u7684\u52A8\u753B\u7EC4</li><li>skeletons - array \u52A0\u8F7D\u7684\u9AA8\u9ABC</li><li>text - string \u52A0\u8F7D\u7684\u6587\u672C\u5185\u5BB9</li><li>data - any \u4ECE\u4E8C\u8FDB\u5236\u6587\u4EF6\u52A0\u8F7D\u7684\u6570\u636E</li><li>image - HTMLImage HTML\u7684\u56FE\u7247</li><li>texture - any \u52A0\u8F7D\u7684\u7EB9\u7406</li></ul><h2 id="scene-on-finish-load" tabindex="-1"><a class="header-anchor" href="#scene-on-finish-load" aria-hidden="true">#</a> scene_on_finish_load</h2><p>\u5355\u4E2A\u52A0\u8F7D\u4EFB\u52A1\u6210\u529F\u540E\u6267\u884C\u63D2\u69FD\u4E2D\u7684\u62FC\u56FE\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_on_finish_load.png" alt="scene_on_finish_load"></p><h2 id="set-scene-prop" tabindex="-1"><a class="header-anchor" href="#set-scene-prop" aria-hidden="true">#</a> set_scene_prop</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u573A\u666F\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/set_scene_prop.png" alt="set_scene_prop"></p><p>\u5E38\u7528\u5C5E\u6027\uFF1A</p><ul><li>clearColor - \u8BBE\u7F6E\u80CC\u666F\u989C\u8272</li><li>collisionEnabled - \u5F00\u542F\u78B0\u649E\u68C0\u6D4B</li><li>environmentTexture - \u8BBE\u7F6EPBR\u6750\u8D28\u7684\u53CD\u5C04\u7EB9\u7406</li><li>fogEnable - \u5F00\u542F\u96FE\u6548</li><li>gravity - \u8BBE\u7F6E\u91CD\u529B\u52A0\u901F\u5EA6</li></ul><h2 id="scene-create-default-environment" tabindex="-1"><a class="header-anchor" href="#scene-create-default-environment" aria-hidden="true">#</a> scene_create_default_environment</h2><p>\u521B\u5EFA\u73AF\u5883\uFF0C\u73AF\u5883\u7531\u5929\u7A7A\u76D2\u548C\u5730\u9762\u7EC4\u6210\u3002Block3D\u6709\u4E00\u4E2A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u4F7F\u7528\u6B64\u62FC\u56FE\u4F1A\u4EE3\u66FF\u8FD9\u4E2A\u9ED8\u8BA4\u73AF\u5883\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_create_default_environment.png" alt="scene_create_default_environment"></p><p><code>options</code>\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u53C2\u6570\uFF0C\u5176\u4E2D\u5305\u62EC\u521B\u5EFA\u9ED8\u8BA4\u73AF\u5883\u7684\u5C5E\u6027\uFF0C\u5176\u4E2D\u7684\u4E3B\u8981\u5C5E\u6027\u6709\uFF1A</p><ul><li>cameraContrast - \u76F8\u673A\u5BF9\u6BD4\u5EA6</li><li>cameraExposure - \u76F8\u673A\u66DD\u5149\u5EA6</li><li>createGround - \u662F\u5426\u521B\u5EFA\u5730\u9762</li><li>createSkybox - \u662F\u5426\u521B\u5EFA\u5929\u7A7A\u76D2</li><li>environmentTexture - \u73AF\u5883\u7EB9\u7406\uFF0C\u7528\u4E8EHDR\u7167\u660E\uFF0C\u5F71\u54CDPBR\u6750\u8D28</li><li>groundColor - \u5730\u9762\u989C\u8272</li><li>groundSize - \u5730\u9762\u5927\u5C0F</li><li>groundTexture - \u5730\u9762\u7EB9\u7406\uFF0C\u9ED8\u8BA4\u662F\u4E00\u5F20\u5E26\u900F\u660E\u901A\u9053\u7684png\u56FE\u7247</li><li>skyboxColor - \u5929\u7A7A\u76D2\u989C\u8272</li><li>skyboxSize - \u5929\u7A7A\u76D2\u5927\u5C0F</li><li>skyboxTexture - \u5929\u7A7A\u76D2\u7EB9\u7406\uFF0C\u7528\u4E8E\u80CC\u666F\u56FE\u7247</li></ul><p>\u83B7\u53D6\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u8BE5\u62FC\u56FE\u53F3\u952E\u83DC\u5355<code>\u521B\u5EFA option</code>\u521B\u5EFA\u3002</p><h2 id="scene-update-default-environment" tabindex="-1"><a class="header-anchor" href="#scene-update-default-environment" aria-hidden="true">#</a> scene_update_default_environment</h2><p>\u8BE5\u62FC\u56FE\u7528\u4E8E\u66F4\u65B0\u9ED8\u8BA4\u73AF\u5883\u7684\u53C2\u6570\uFF0C\u4E0D\u4F1A\u53D6\u4EE3\u9ED8\u8BA4\u73AF\u5883\u3002\u53C2\u6570\u4E0E<a href="#scene-create-default-environment">scene_create_default_environment</a>\u76F8\u540C\u3002\u8BE5\u62FC\u56FE\u9700\u8981\u5728<a href="#scene-assets-manager">scene_assets_manager</a>\u62FC\u56FE\u7684<code>on load</code>\u63D2\u69FD\u4E2D\u6267\u884C\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_update_default_environment.png" alt="scene_update_default_environment"></p><h2 id="scene-get-environment-prop" tabindex="-1"><a class="header-anchor" href="#scene-get-environment-prop" aria-hidden="true">#</a> scene_get_environment_prop</h2><p>\u83B7\u53D6\u73AF\u5883\u5C5E\u6027\u3002</p><p><img src="https://cdn.zjbku.com/blocks/scene_get_environment_prop.png" alt="scene_get_environment_prop"></p><ul><li>ground - \u83B7\u53D6\u5730\u9762\u7F51\u683C</li><li>groundMaterial - \u83B7\u53D6\u5730\u9762\u6750\u8D28</li><li>groundTexture - \u83B7\u53D6\u5730\u9762\u7EB9\u7406</li><li>rootMesh - \u73AF\u5883\u6839\u7F51\u683C</li><li>skybox - \u83B7\u53D6\u5929\u7A7A\u76D2\u7F51\u683C</li><li>skyboxMaterial - \u83B7\u53D6\u5929\u7A7A\u76D2\u6750\u8D28</li><li>skyboxTexture - \u83B7\u53D6\u5929\u7A7A\u76D2\u7EB9\u7406</li></ul><h2 id="app-fullscreen" tabindex="-1"><a class="header-anchor" href="#app-fullscreen" aria-hidden="true">#</a> app_fullscreen</h2><p>\u662F\u5426\u5168\u5C4F\u3002\u52FE\u9009<code>pointerLock</code>\u4F1A\u9501\u5B9A\u9F20\u6807\u3002</p><p><img src="https://cdn.zjbku.com/blocks/app_fullscreen.png" alt="app_fullscreen"></p><h2 id="app-pointer-lock" tabindex="-1"><a class="header-anchor" href="#app-pointer-lock" aria-hidden="true">#</a> app_pointer_lock</h2><p>\u662F\u5426\u9501\u5B9A\u9F20\u6807\u3002</p><p><img src="https://cdn.zjbku.com/blocks/app_pointer_lock.png" alt="app_pointer_lock"></p>',55);function D(R,L){const s=l("RouterLink");return c(),r(i,null,[_,u,e("nav",h,[e("ul",null,[e("li",null,[n(s,{to:"#scene-create-custom-preloader"},{default:t(()=>[m]),_:1})]),e("li",null,[n(s,{to:"#scene-update-custom-preloader"},{default:t(()=>[g]),_:1})]),e("li",null,[n(s,{to:"#scene-assets-manager"},{default:t(()=>[f]),_:1})]),e("li",null,[n(s,{to:"#scene-load-asset"},{default:t(()=>[b]),_:1})]),e("li",null,[n(s,{to:"#scene-get-loaded-from-asset"},{default:t(()=>[k]),_:1})]),e("li",null,[n(s,{to:"#scene-on-finish-load"},{default:t(()=>[x]),_:1})]),e("li",null,[n(s,{to:"#set-scene-prop"},{default:t(()=>[v]),_:1})]),e("li",null,[n(s,{to:"#scene-create-default-environment"},{default:t(()=>[y]),_:1})]),e("li",null,[n(s,{to:"#scene-update-default-environment"},{default:t(()=>[j]),_:1})]),e("li",null,[n(s,{to:"#scene-get-environment-prop"},{default:t(()=>[z]),_:1})]),e("li",null,[n(s,{to:"#app-fullscreen"},{default:t(()=>[T]),_:1})]),e("li",null,[n(s,{to:"#app-pointer-lock"},{default:t(()=>[C]),_:1})])])]),B],64)}var H=o(p,[["render",D],["__file","scenes.html.vue"]]);export{H as default};
