const darkTheme = require('prism-react-renderer/themes/dracula');
const lightTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '码站',
  tagline: 'A collection of document notes',
  url: 'https://machu.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
//   favicon: 'http://cdn.machu.top/github/favicon.ico',
  favicon: 'img/favicon.ico',
  organizationName: 'heshibin', // Usually your GitHub org/user name.
  projectName: 'document notes', // Usually your repo name.


  clientModules: [require.resolve('./src/clientModules/routeModules.ts')],

  stylesheets: [
    
  ],
  scripts: [
    // 谷歌广告联盟
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6880859209937012',
      async: true,
    },
    "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js",
    "/js/mouse.js",
    {
      src: '/js/emojiCursor.js',
      async: true,
    },
    {
      src: '/js/texiao.js',
      async: true,
    },
    
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/heshibin/heshibin.github.io/edit/main',
        },
        blog: {
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
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
        title: '码站',
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
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/docs/download', label: '下载', position: 'left'},
          {
            type: 'dropdown',
            label: '工具',
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
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '帮助',
            items: [
              {
                label: '标签',
                to: '/docs/tags',
              },
            ],
          },
          {
            title: '工具',
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
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/heshibin/heshibin.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ma Chu, Inc. Built with Docusaurus.`,
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
      metadata: [{name: 'keywords', content: '个人技术博客, java, 前端, 后端, 中间件, spring, go语言, 数据库'}],
      // 目录标题级别
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'announcementBar-2',
        content: '🎉 2023新年快乐 🎉',
      }
    }),
});
