import { defineConfig } from 'vitepress'
import navbar from './navbar';
import sidebar from './sidebar';

export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  appearance: true,
  outDir: '../../dest-docs',
  title: '宅家呗',
  description: '一款免费的零代码Web3D开发工具',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://cdn.zjbku.com/media/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://cdn.zjbku.com/media/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://cdn.zjbku.com/media/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'mask-icon', href: 'https://cdn.zjbku.com/media/safari-pinned-tab.svg', color: 'e16531' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  themeConfig: {
    siteTitle: 'Block3D',
    logo: 'https://cdn.zjbku.com/logo.svg',
    nav: navbar,
    sidebar: sidebar,
    footer: {
      copyright: '版权所有 © 2022-至今 宅家呗'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjbcool/block3d/discussions' },
      {
        icon: {
          svg: '<svg t="1671941865233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1461" width="24" height="24"><path d="M512 0C229.652 0 0 229.652 0 512c0 10.936 0.006 21.87 1 31.812v-5.936c2.982 59.65 45.708 108.324 102.376 121.248 134.21 21.874 240.636 127.28 263.5 260.5 11.93 58.658 62.61 102.386 124.248 104.376H512c282.344 0 512-229.656 512-512C1024 229.652 794.344 0 512 0z m-52.5 315.688c5.53 0.254 11.096 1.07 16.688 2.436 90.47 22.868 171.996 70.566 235.624 135.188 30.82 31.814 30.82 85.498 0 117.312-63.628 65.616-144.16 113.382-235.624 135.252-43.746 10.936-89.45-14.938-102.376-57.688-11.93-43.742-18.874-89.462-18.874-136.188 0-46.726 6.944-92.44 18.874-135.188a85.2 85.2 0 0 1 85.688-61.124z" p-id="1462"></path></svg>'
        },
        link: 'https://www.ixigua.com/home/3310092926'
      },
      {
        icon: {
          svg: '<svg t="1672403551780" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3706" width="24" height="24"><path d="M277.62384555 63.29685333L435.00733667 220.72888889h153.93678223l157.43203555-157.38348999a48.54518557 48.54518557 0 0 1 68.69143666 68.69143665L726.27844779 220.72888889H827.54370333A169.90814777 169.90814777 0 0 1 997.45185223 390.63703666v388.36148224a169.90814777 169.90814777 0 0 1-169.9081489 169.90814777h-631.08740666A169.90814777 169.90814777 0 0 1 26.54814777 778.9985189v-388.36148224A169.90814777 169.90814777 0 0 1 196.45629667 220.72888889h101.21671112L208.93240889 131.93974557a48.54518557 48.54518557 0 0 1 68.69143666-68.6914378zM827.54370333 317.81925888h-631.08740666a72.81777778 72.81777778 0 0 0-72.47796224 65.82727111L123.6385189 390.63703666v388.36148224a72.81777778 72.81777778 0 0 0 65.82727111 72.4779611L196.45629667 851.81629667h631.08740666a72.81777778 72.81777778 0 0 0 72.47796224-65.8272711L900.3614811 778.9985189v-388.36148224A72.81777778 72.81777778 0 0 0 827.54370333 317.81925888zM317.81925888 463.45481443a48.54518557 48.54518557 0 0 1 48.54518557 48.54518557v97.09036999a48.54518557 48.54518557 0 0 1-97.09037 0v-97.09036999a48.54518557 48.54518557 0 0 1 48.54518443-48.54518557z m388.36148224 0a48.54518557 48.54518557 0 0 1 48.54518443 48.54518557v97.09036999a48.54518557 48.54518557 0 0 1-97.09037 0v-97.09036999a48.54518557 48.54518557 0 0 1 48.54518557-48.54518557z" p-id="3707"></path></svg>'
        },
        link: 'https://space.bilibili.com/213849618'
      },
    ],
    outlineTitle: '目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})