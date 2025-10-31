// Docusaurus v2 configuration migrated from v1 siteConfig.js
// Minimal viable config; follow-ups: Algolia, custom highlight, users page

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accord Project',
  tagline: 'Documentation',
  url: 'https://docs.accordproject.org',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'accordproject',
  projectName: 'techdocs',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            path: '../docs',
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/accordproject/techdocs/edit/main/website/',
            showLastUpdateTime: true,
          },
          blog: false,
          theme: {
            customCss: require.resolve('./static/css/main.css'),
          },
        }
      ),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'Accord Project',
      logo: { alt: 'Accord Project', src: 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg' },
      items: [
        { to: '/', label: 'Documentation', position: 'left' },
        { href: 'https://studio.accordproject.org', label: 'Try Online!', position: 'left' },
        { href: 'https://github.com/accordproject', label: 'GitHub', position: 'right' },
        { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2018-${new Date().getFullYear()} Accord Project, LLC.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      // Placeholder; requires v2 index/app settings
      appId: 'auto',
      apiKey: '1679802ddfc315329d6b5f4616b30e51',
      indexName: 'accordproject_api',
    },
  }),
};

module.exports = config;


