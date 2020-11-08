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
        "debug": true,
        "docs": {
          "homePageId": "accordproject",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "remarkPlugins": [
            [
              null,
              {
                "sync": true
              }
            ]
          ],
          "sidebarPath": "/home/prakhar/projects/techdocs_og/techdocs/v2-website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "pages": {
          "remarkPlugins": [
            null
          ]
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
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "navbar": {
      "title": "Accord Project",
      "hideOnScroll": true,
      "logo": {
        "alt": "Accord Project Logo",
        "src": "img/accord_icon.png",
        "srcDark": "img/accord_icon_white.png"
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
            }
          ]
        }
      ]
    },
    "image": "img/docusaurus.png",
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2018-2020 Accord Project, LLC.",
      "logo": {
        "alt": "Accord Project Logo",
        "src": "img/accord_icon_white.png",
        "href": "https://accordproject.org\""
      }
    },
    "algolia": {
      "apiKey": "1679802ddfc315329d6b5f4616b30e51",
      "indexName": "accordproject_api",
      "algoliaOptions": {},
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};