// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accord Project',
  tagline: 'Open Source Documentation',
  url: 'https://docs.accordproject.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  organizationName: 'accordproject',
  projectName: 'techdocs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          disableVersioning: true,
          editUrl: 'https://github.com/accordproject/techdocs/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    '/css/main.css',
  ],

  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Accord Project',
        logo: {
          alt: 'Accord Project Logo',
          src: 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg',
        },
        style: 'dark',
        items: [
          {
            type: 'doc',
            docId: 'accordproject',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://playground.accordproject.org',
            label: 'Try Online!',
            position: 'left',
          },
          {
            href: 'https://github.com/accordproject',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
