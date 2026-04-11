// @ts-check

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accord Project',
  tagline: 'Open Source Documentation',
  url: 'https://docs.accordproject.org',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'accordproject',
  projectName: 'techdocs',
  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
      onBrokenMarkdownImages: 'ignore',
    },
  },
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
          onInlineAuthors: 'ignore',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus.png',
      navbar: {
        title: 'Accord Project',
        logo: {
          alt: 'Accord Project',
          src: 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://studio.accordproject.org',
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Overview', to: '/docs/accordproject'},
              {label: 'Getting Started', to: '/docs/started-installation'},
              {label: 'Template Guides', to: '/docs/markup-ciceromark'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Stack Overflow', href: 'http://stackoverflow.com/questions/tagged/cicero'},
              {label: 'Discord', href: 'https://discord.com/invite/Zm99SKhhtA'},
              {label: 'Twitter', href: 'https://twitter.com/accordhq'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', href: 'https://medium.com/@accordhq'},
              {label: 'GitHub', href: 'https://github.com/accordproject'},
            ],
          },
        ],
        copyright: `Copyright © 2018-${new Date().getFullYear()} Accord Project, LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['typescript', 'json'],
      },
      algolia: {
        appId: 'BH4D9OD16A',
        apiKey: '1679802ddfc315329d6b5f4616b30e51',
        indexName: 'accordproject_api',
      },
    }),
};

module.exports = config;
