const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const vsLight = require('prism-react-renderer/themes/vsLight');
const vsDark = require('prism-react-renderer/themes/vsDark');
const duotoneLight = require('prism-react-renderer/themes/duotoneLight');
const duotoneDark = require('prism-react-renderer/themes/duotoneDark');
const oceanicNext = require('prism-react-renderer/themes/oceanicNext');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Exec',
  tagline: 'A collection of document notes',
  url: 'https://machu.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'heshibin', // Usually your GitHub org/user name.
  projectName: 'document notes', // Usually your repo name.

  // plugins: [
  //   // require('path').resolve(__dirname, '../../docusaurus-search-local'),
  //   require.resolve('@cmfcmf/docusaurus-search-local')
  // ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/heshibin/heshibin.github.io/edit/main',
        },
        blog: {
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/heshibin/heshibin.github.io/edit/main',
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Exec',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
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

//           {
//             type: 'localeDropdown',
//             position: 'right',
//           },
//           {
//             href: 'https://github.com/heshibin',
//             label: 'GitHub',
//             position: 'right',
//           },
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: oceanicNext,
        darkTheme: vsDark,
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
      metadata: [{name: 'keywords', content: 'java, 前端, 后端, 中间件, spring, doc, 博客'}],
      // 目录标题级别
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
});
