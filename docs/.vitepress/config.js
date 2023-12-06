import { defineConfig } from 'vitepress'
import navbar from './navbar';
import sidebar from './sidebar';

export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  appearance: true,
  title: '宅家呗',
  description: '一款免费的零代码Web3D开发工具',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/media/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/media/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/media/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/media/safari-pinned-tab.svg', color: 'e16531' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  themeConfig: {
    siteTitle: 'Block3D',
    logo: '/media/logo.svg',
    nav: navbar,
    sidebar: sidebar,
    footer: {
      copyright: '版权所有 © 2022-至今 宅家呗'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjbcool/block3d/discussions' },
    ],
    outlineTitle: '目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})