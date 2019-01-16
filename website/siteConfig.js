/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Clause Inc.',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/accord_logo.png'.
    image: 'img/clause-logo-sm.png',
    infoLink: 'http://clause.io',
    pinned: true,
  },
  {
      caption: 'ContractPen',
      // You will need to prepend the image path with your baseUrl
      // if it is not '/', like: '/test-site/img/accord_logo.png'.
      image: 'img/contractpen-logo-sm.png',
      infoLink: 'https://contractpen.com',
      pinned: true,
  },
];

const siteConfig = {
  title: 'Accord Project' /* title for your website */,
  tagline: 'Industry-Led Specification and Open Source Code for Smart Legal Contracts',
  url: 'https://docs.accordproject.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'techdocs',
  organizationName: 'accordproject',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'accordproject', label: 'Docs'},
    { href: "https://studio.accordproject.org", label: "Try"},
    { href: "https://github.com/accordproject", label: "GitHub" },
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/accord_icon_white.png',
  footerIcon: 'img/accord_icon_white.png',
  favicon: 'img/favicon/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#008B8B',
    secondaryColor: '#008B8B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Clause Inc.',

  highlight: {
    theme: 'atom-one-light',
    hljs: function(hljs) {
      hljs.registerLanguage('ergo', function(hljs) {
        var ERGO_KEYWORDS = {
            keyword: 'namespace import define function transaction concept event asset ' +
                'participant enum extends contract over clause throws emits state call ' +
                'enforce if then else let foreach return in where throw '+
                'constant match set emit with or and ',
            literal: 'true false unit none',
            built_in: 'flatten now dateTimeIsSame dateTimeIsBefore dateTimeIsAfter ' +
                'dateTimeDiffDays dateTimeDiffSeconds min max average '
          };

        var TYPE = {
          className: 'type',
          begin: '\\b[A-Z]([\\w\']*|{)',
          relevance: 0
        };
        var BLOCK_COMMENT = hljs.COMMENT(
          '/\\*',
          '\\*/',
          {
            contains: ['self']
          }
        );
        var SUBST = {
          className: 'subst',
          begin: /\\\(/, end: '\\)',
          keywords: ERGO_KEYWORDS,
          contains: [] // assigned later
        };
        var NUMBERS = {
            className: 'number',
            begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
            relevance: 0
        };
        var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
          contains: [SUBST, hljs.BACKSLASH_ESCAPE]
        });
        SUBST.contains = [NUMBERS];

        return {
          keywords: ERGO_KEYWORDS,
          contains: [
            QUOTE_STRING_MODE,
            hljs.C_LINE_COMMENT_MODE,
            BLOCK_COMMENT,
            TYPE,
            NUMBERS,
            // {
            //   className: 'function',
            //   beginKeywords: 'function clause', end: '{', excludeEnd: true,
            //   contains: [
            //     hljs.inherit(hljs.TITLE_MODE, {
            //       begin: /[A-Za-z$_][0-9A-Za-z$_]*/,
            //       illegal: /\(/
            //     }),
            //     {
            //       className: 'params',
            //       begin: /\s/, end: /\=\>/, endsParent: true, excludeEnd: true,
            //       keywords: ERGO_KEYWORDS,
            //       contains: [
            //         'self',
            //         NUMBERS,
            //         QUOTE_STRING_MODE,
            //         hljs.C_BLOCK_COMMENT_MODE,
            //         {begin: ':'} // relevance booster
            //       ],
            //       illegal: /["]/
            //     }
            //   ],
            //  illegal: /\[|%/
            //}
          ]
        };
      });
    }
  },

  algolia: {
    apiKey: '1679802ddfc315329d6b5f4616b30e51',
    indexName: 'accordproject_api',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/accordproject/cicero',
};

module.exports = siteConfig;
