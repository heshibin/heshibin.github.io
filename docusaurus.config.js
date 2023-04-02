const darkTheme = require('prism-react-renderer/themes/dracula');
const lightTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ma chu-码站',
  tagline: 'JAVA个人技术博客笔记',
  url: 'http://machu.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
//   favicon: 'http://cdn.machu.top/github/favicon.ico',
  favicon: 'img/favicon.ico',
  organizationName: 'machu', // Usually your GitHub org/user name.
  projectName: 'JAVA个人技术博客', // Usually your repo name.


  clientModules: [require.resolve('./src/clientModules/routeModules.ts')],

  stylesheets: [
    
  ],
  scripts: [
    // 谷歌广告联盟
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      // src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6880859209937012',
      async: true,
      crossorigin: 'anonymous'
    },
    "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js",
    // "/js/mouse.js",
    // {
    //   src: '/js/emojiCursor.js',
    //   async: true,
    // },
    // {
    //   src: '/js/texiao.js',
    //   async: true,
    // },
    
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/heshibin/heshibin.github.io/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogSidebarTitle: '近期文章',
          blogSidebarCount: 20,
          postsPerPage: 20,
          showReadingTime: true,
          editUrl: 'https://github.com/heshibin/heshibin.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages'
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  // clientModules: [require.resolve('./src/clientModules/routeModules.ts')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ma chu-码站',
        logo: {
          alt: 'My Site Logo',
//           src: 'http://cdn.machu.top/github/logo.svg',
          src: '/img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: '📁 文档',
          },
          {to: '/blog', label: '📖 博客', position: 'left'},
          // {to: '/docs/download', label: '💻 下载', position: 'left'},
          // {to: '/tools/moyurli', label: '🐟 摸鱼人日历', position: 'left'},
          {
            type: 'dropdown',
            label: '⚙️ 在线工具',
            position: 'left',
            items: [
              {
                label: 'JSON在线格式化',
                to: '/tools/json'
              },
              {
                label: '字数统计',
                to: '/tools/word'
              },
              {
                label: '在线加解密工具',
                to: '/tools/sha'
              },
              {
                label: 'Unix时间戳转化',
                to: '/tools/date'
              }
            ]
          },
//           {
//             href: 'https://github.com/heshibin/heshibin',
//             label: 'GitHub',
//             position: 'right',
//           },
        ],
      },
      footer: {
        style: 'dark',
//         links: [
//           {
//             title: '帮助',
//             items: [
//               {
//                 label: '标签',
//                 to: '/docs/tags',
//               },
//             ],
//           },
//           {
//             title: '工具',
//             items: [
//               {
//                 label: 'JSON在线格式化',
//                 to: '/tools/json'
//               },
//               {
//                 label: '字数统计',
//                 to: '/tools/word'
//               },
//               {
//                 label: '在线加解密工具',
//                 to: '/tools/sha'
//               },
//               {
//                 label: 'Unix时间戳转化',
//                 to: '/tools/date'
//               },
//             ],
//           },
//           {
//             title: '更多',
//             items: [
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/heshibin/heshibin.github.io',
//               },
//             ],
//           },
//         ],
        copyright: `Copyright © ${new Date().getFullYear()} Ma Chu, Inc. Built with Docusaurus. <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2022003734号</a>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        magicComments: [
          // 要记得复制默认的高亮类！
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      metadata: [{name: 'keywords', content: 'java machu, 个人技术博客, Blog, JAVA技术栈, 前端技术栈, 中间件, go语言, 数据库, machu，码站，码农之家'},
        {name: 'baidu_union_verify', content: 'dcce3dc098f7f0cdce5f4369fd7551bc'}
      ],
      // 目录标题级别
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
//       announcementBar: {
//         id: 'announcementBar-2',
//         content: ` 🎉 2023新年快乐 🎉 `,
//       }
    }),
});
