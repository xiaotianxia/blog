const htmlTitles = require('./titles/html');
const cssTitles = require('./titles/css');
const jsTitles = require('./titles/js');
const elseTitles = require('./titles/else');
const studyTitles = require('./titles/study');

module.exports = ctx => ({
  base: '/blog/vuepress/',
  dest: '../../vuepress',
  llang: 'zh-CN',
  title: '前端学习笔记',
  description: '前端大乱炖——web前端,HTML5,CSS3,Javascript,SVG,canvas,vue...',
  head: [
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'keywords', content: 'web前端,HTML5,CSS3,Javascript,SVG,canvas,vue...' }],
    ['meta', { name: 'anthor', content: 'Denzel' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    //解决https加载http资源block问题
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: `img-src *` }]
  ],
  theme: '@vuepress/vue',
  markdown: {
    lineNumbers: true,
    toc: true
  },
  themeConfig: {
    repo: 'xiaotianxia',
    logo: '/logo.png',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    searchMaxSuggestions: 10,
    sidebarDepth: 0,
    editLinks: false,
    lastUpdated: '最近更新', // string | boolean
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    nav: [{
        text: 'JS',
        link: '/js/'
      },
      {
        text: 'CSS',
        link: '/css/'
      },
      {
        text: 'HTML',
        link: '/html/'
      },
      {
        text: '其他',
        link: '/else/'
      },
      {
        text: 'study',
        link: '/study/'
      },
    ],
    sidebar: {
      '/html/': [{
        title: 'HTML',
        collapsable: false,
        children: htmlTitles
      }],

      '/css/': [{
        title: 'CSS',
        collapsable: false,
        children: cssTitles
      }],

      '/js/': [{
        title: 'JS',
        collapsable: false,
        children: jsTitles
      }],

      '/else/': [{
        title: '其他',
        collapsable: false,
        children: elseTitles
      }],

      '/study/': [{
        title: 'study',
        collapsable: true,
        children: studyTitles
      }]
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  // chainWebpack: (config, isServer) => {
  //   // config 是 ChainableConfig 的一个实例
  // }
})