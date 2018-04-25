const htmlTitles = require('./titles/html');
const cssTitles = require('./titles/css');
const jsTitles = require('./titles/js');
const elseTitles = require('./titles/else');

module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Denzel\'s blog',
      description: 'Welcome'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'xiaotianxia/blog',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        // label: '简体中文',
        // selectText: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: 'HTML',
            link: '/html/',
          },
          {
            text: 'CSS',
            link: '/css/'
          },
          {
            text: 'JS',
            link: '/js/'
          },
          {
            text: '其他',
            link: '/else/'
          }
        ],

        sidebar: {
          '/html/': [
            {
              title: 'HTML',
              collapsable: false,
              children: htmlTitles
            }
          ],

          '/css/': [
            {
              title: 'CSS',
              collapsable: false,
              children: cssTitles
            }
          ],

          '/js/': [
            {
              title: 'JS',
              collapsable: false,
              children: jsTitles
            }
          ],

          '/else/': [
            {
              title: '其他',
              collapsable: false,
              children: elseTitles
            }
          ]
        }
      }
    }
  }
}