export default {
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
        "docs": {
          "homePageId": "accordproject",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "/home/prakhar/projects/techdocs_og/techdocs/v2-website/sidebars.json"
        },
        "blog": {
          "path": "blog"
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
        ]
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Accord Project",
      "logo": {
        "src": "img/A-MARK-ACCORDPROJECT-ONELINE-white.svg"
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
            {
              "label": "Master/Unreleased",
              "to": "docs/next/",
              "activeBaseRegex": "docs/next/(?!support|team|resources)"
            }
          ]
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/docusaurus.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2018-2020 Accord Project, LLC.",
      "logo": {
        "src": "img/accord_icon_white.png"
      },
      "style": "light"
    },
    "algolia": {
      "apiKey": "1679802ddfc315329d6b5f4616b30e51",
      "indexName": "accordproject_api",
      "algoliaOptions": {},
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};