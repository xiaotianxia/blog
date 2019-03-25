const htmlTitles = require('./titles/html');
const cssTitles = require('./titles/css');
const jsTitles = require('./titles/js');
const elseTitles = require('./titles/else');
const studyTitles = require('./titles/study');

module.exports = {
    base: '/blog/vuepress/',
    dest: 'vuepress',
    llang: 'zh-CN',
    title: '前端学习笔记',
    description: '前端学习笔记',
    head: [
        ['meta', { name: 'keywords', content: 'web前端,HTML5,CSS3,Javascript,SVG,canvas' }],
        ['meta', { name: 'anthor', content: 'Denzel' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'xiaotianxia',

        logo: '/hero.png',

        editLinks: false,

        docsDir: 'docs',

        nav: [
            { text: 'JS', link: '/js/' },
            { text: 'CSS', link: '/css/' },
            { text: 'HTML', link: '/html/' },
            { text: '其他', link: '/else/'},
            { text: 'study', link: '/study/'},
        ],

        // search: false,

        searchMaxSuggestions: 10,

        // sidebar: false,

        sidebarDepth: 0,

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
            ],

            '/study/': [
                {
                    title: 'study',
                    collapsable: true,
                    children: studyTitles
                }
            ]
        }
    }
}