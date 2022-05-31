const { defineUserConfig } = require("vuepress-vite")
const { defaultTheme } = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { pwaPlugin } = require('@vuepress/plugin-pwa')

const navbar = require("./navbar")
const sidebar = require("./sidebar")
const docsearchTranslations = require("./docsearchTranslations")

module.exports = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "宅家呗",
  description: "一款免费的零代码Web3D开发工具",
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#e16531' }],
  ],
  theme: defaultTheme({
    home: "/",
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 0,
    logo: "https://cdn.zjbku.com/logo.svg",
    darkMode: true,
    // logoDark: null,
    toggleSidebar: 'toggle sidebar',
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  debug: false,
  host: "localhost",
  port: 8080,
  open: false,
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
    docsearchPlugin({
      apiKey: 'ee4c06b39b3b48f55e6a7e56ea8ad39d',
      indexName: '',
      appId: 'EFLP9839WD',
      placeholder: '搜索文档',
      translations: docsearchTranslations
    })
  ]
});
