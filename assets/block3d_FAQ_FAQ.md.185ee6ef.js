import{_ as e,c as t,o as d,a as l}from"./app.4d7dcf0a.js";const _=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"系统安全警告和杀毒软件拦截","slug":"系统安全警告和杀毒软件拦截","link":"#系统安全警告和杀毒软件拦截","children":[]},{"level":2,"title":"执行block3d.exe闪退","slug":"执行block3d-exe闪退","link":"#执行block3d-exe闪退","children":[]},{"level":2,"title":"是否支持c4d等三维软件","slug":"是否支持c4d等三维软件","link":"#是否支持c4d等三维软件","children":[]},{"level":2,"title":"发布后的应用能在本地运行吗？","slug":"发布后的应用能在本地运行吗","link":"#发布后的应用能在本地运行吗","children":[]},{"level":2,"title":"Windows服务器上应用无法正常运行？","slug":"windows服务器上应用无法正常运行","link":"#windows服务器上应用无法正常运行","children":[]},{"level":2,"title":"如何与react vue等前端框架集成","slug":"如何与react-vue等前端框架集成","link":"#如何与react-vue等前端框架集成","children":[]}],"relativePath":"block3d/FAQ/FAQ.md"}'),a={name:"block3d/FAQ/FAQ.md"},c=l('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h1><h2 id="系统安全警告和杀毒软件拦截" tabindex="-1">系统安全警告和杀毒软件拦截 <a class="header-anchor" href="#系统安全警告和杀毒软件拦截" aria-hidden="true">#</a></h2><p>block3d可能因为软件数字证书问题被系统弹窗或杀软拦截，选择信任通过即可。</p><h2 id="执行block3d-exe闪退" tabindex="-1">执行<code>block3d.exe</code>闪退 <a class="header-anchor" href="#执行block3d-exe闪退" aria-hidden="true">#</a></h2><p>执行<code>block3d.exe</code>后没有自动打开浏览器，命令窗口闪退，出现这种问题可能是以下原因：</p><ul><li>windos：不支持win7</li><li>macOS：不支持intel芯片的mac电脑</li><li><code>block3d</code>正在运行，查看任务管理器确认</li><li>确保将<code>chrome</code> <code>edge</code> <code>firefox</code>等现代浏览器设置为默认浏览器</li><li><code>3001</code>端口被占用</li><li>其它情况：在命令行或终端运行<code>block3d</code>，根据错误提示解决</li></ul><h2 id="是否支持c4d等三维软件" tabindex="-1">是否支持c4d等三维软件 <a class="header-anchor" href="#是否支持c4d等三维软件" aria-hidden="true">#</a></h2><p>block3d可以导入<code>.babylon</code> <code>.gltf/.glb</code> <code>.stl</code> <code>.obj</code>格式的3D资产，只要能导出上述格式的三维软件都支持。</p><h2 id="发布后的应用能在本地运行吗" tabindex="-1">发布后的应用能在本地运行吗？ <a class="header-anchor" href="#发布后的应用能在本地运行吗" aria-hidden="true">#</a></h2><p>block3d最终发布是纯静态页面，一般需要部署到服务器才能运行。要在本地运行可以通过<a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">electron</a>发布成桌面应用。</p><h2 id="windows服务器上应用无法正常运行" tabindex="-1">Windows服务器上应用无法正常运行？ <a class="header-anchor" href="#windows服务器上应用无法正常运行" aria-hidden="true">#</a></h2><p>如果控制台提示.gltf .bin .glb .dds 等文件无法找到，可能是服务器缺少MIME类型，可按<a href="https://jingyan.baidu.com/article/3ea51489b2ceea52e61bba24.html" target="_blank" rel="noreferrer">此方法</a>添加以下文件扩展名MIME类型：</p><table><thead><tr><th style="text-align:left;">扩展名</th><th style="text-align:left;">MIME类型</th></tr></thead><tbody><tr><td style="text-align:left;">.gltf</td><td style="text-align:left;">model/gltf+json</td></tr><tr><td style="text-align:left;">.bin</td><td style="text-align:left;">application/octet-stream</td></tr><tr><td style="text-align:left;">.glb</td><td style="text-align:left;">model/gltf-binary</td></tr><tr><td style="text-align:left;">.dds</td><td style="text-align:left;">image/vnd.ms-dds</td></tr></tbody></table><h2 id="如何与react-vue等前端框架集成" tabindex="-1">如何与<code>react</code> <code>vue</code>等前端框架集成 <a class="header-anchor" href="#如何与react-vue等前端框架集成" aria-hidden="true">#</a></h2><p>block3d最终发布的是静态页面，可以通过<code>iframe</code>的方式在任何前端框架中嵌入发布的block3d应用。</p>',15),i=[c];function o(r,n,s,h,b,f){return d(),t("div",null,i)}const x=e(a,[["render",o]]);export{_ as __pageData,x as default};
