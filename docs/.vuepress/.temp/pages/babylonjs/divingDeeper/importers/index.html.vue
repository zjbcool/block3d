<template><h1 id="加载资产" tabindex="-1"><a class="header-anchor" href="#加载资产" aria-hidden="true">#</a> 加载资产</h1>
<p>内置的文件类型是 <em>.babylon</em> ，Babylon.js无需插件即可加载这些文件。所有其他文件类型都需要一个插件，如本节所述。</p>
<p>可用的文件类型有 gLTF、obj、stl</p>
<p>为了帮助你处理加载的资产，有一个管理器可用。</p>
<p><strong>注意</strong>：由于导入的网格有一个 <code v-pre>rotationQuaternion</code> 设置，在应用旋转之前将 <code v-pre>rotationQuaternion</code> 设置为 <code v-pre>_null</code>。</p>
</template>
