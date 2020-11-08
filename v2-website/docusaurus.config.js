module.exports={
  "title": "Accord Project",
  "tagline": "Documentation",
  "url": "https://docs.accordproject.org",
  "baseUrl": "/",
  "organizationName": "accordproject",
  "projectName": "techdocs",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "taglineLead": "Open Source",
    "users": [
      {
        "caption": "Clause Inc.",
        "image": "img/clause-logo-sm.png",
        "infoLink": "http://clause.io",
        "pinned": true
      },
      {
        "caption": "ContractPen",
        "image": "img/contractpen-logo-sm.png",
        "infoLink": "https://contractpen.com",
        "pinned": true
      }
    ],
    "markdownPlugins": [
      null
    ],
    "repoUrl": "https://github.com/accordproject/cicero"
  },
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "debug": true,
        "docs": {
          "homePageId": "accordproject",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "remarkPlugins": [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          "sidebarPath": "/home/prakhar/projects/techdocs_og/techdocs/v2-website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "pages": {
          "remarkPlugins": [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        "theme": {
          "customCss": "/home/prakhar/projects/techdocs_og/techdocs/v2-website/src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ],
        "redirects": [
          {
            "from": "/*.html",
            "to": "/*"
          }
        ]
      }
    ]
  ],
  "themeConfig": {
    "hideableSidebar": true,
    "colorMode": {
      "defaultMode": 'light',
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
    },
    "prism": {
      "theme": require('prism-react-renderer/themes/github'),
      "darkTheme": require('prism-react-renderer/themes/dracula'),
    },
    "navbar": {
      "title": "Accord Project",
      "hideOnScroll": true,
      "logo": {
        "alt": 'Accord Project Logo',
        "src": 'img/accord_icon.png',
        "srcDark": 'img/accord_icon_white.png',
      },
      "items": [
        {
          "to": "docs/",
          "label": "Documentation",
          "position": "left"
        },
        {
          "href": "https://studio.accordproject.org",
          "label": "Try Online!",
          "position": "left"
        },
        {
          "href": "https://github.com/accordproject",
          "label": "GitHub",
          "position": "left"
        },
        {
          "label": "Version",
          "to": "docs",
          "position": "right",
          "items": [
            {
              "label": "0.21",
              "to": "docs/",
              "activeBaseRegex": "docs/(?!0.12|0.13|0.20|0.21|next)"
            },
            {
              "label": "0.20",
              "to": "docs/0.20/"
            },
            {
              "label": "0.13",
              "to": "docs/0.13/"
            },
            {
              "label": "0.12",
              "to": "docs/0.12/"
            },
          ]
        }
      ]
    },
    "image": "img/docusaurus.png",
    "footer": {
      "style": 'dark',
      "links": [],
      "copyright": 'Copyright © 2018-' + new Date().getFullYear() + ' Accord Project, LLC.',
      "logo": {
        "alt": 'Accord Project Logo',
        "src": 'img/accord_icon_white.png',
        "href": 'https://accordproject.org"',
      },
    },
    "algolia": {
      "apiKey": "1679802ddfc315329d6b5f4616b30e51",
      "indexName": "accordproject_api",
      "algoliaOptions": {}
    }
  }
}