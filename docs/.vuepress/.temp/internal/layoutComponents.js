import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/zjbcool/app_vite/block3d-editor/document/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/zjbcool/app_vite/block3d-editor/document/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
