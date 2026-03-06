// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['accordproject', 'accordproject-slc', 'accordproject-template', 'accordproject-tour', 'accordproject-faq'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['started-installation', 'started-hello', 'started-resources'],
    },
    {
      type: 'category',
      label: 'Template Guides',
      items: [
        {
          type: 'category',
          label: 'Markdown Text',
          items: ['markup-preliminaries', 'markup-commonmark', 'markup-ciceromark', 'markup-templatemark'],
        },
        {
          type: 'category',
          label: 'Template Logic',
          items: ['logic-typescript'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Using Cicero',
          items: ['tutorial-templates', 'tutorial-library', 'tutorial-create'],
        },
        {
          type: 'category',
          label: 'Template Authoring',
          items: ['tutorial-studio', 'tutorial-vscode'],
        },
        {
          type: 'category',
          label: 'Template Execution',
          items: ['tutorial-nodejs', 'tutorial-apap'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference Manual',
      items: [
        {
          type: 'category',
          label: 'General',
          items: ['ref-glossary', 'ref-errors'],
        },
        {
          type: 'category',
          label: 'Migration',
          items: ['ref-migrate-0.13-0.20', 'ref-migrate-0.20-0.21', 'ref-migrate-0.21-0.22'],
        },
        {
          type: 'category',
          label: 'Cicero Reference',
          items: ['ref-cicero-cli', 'ref-cicero-api', 'ref-cicero-testing'],
        },
        {
          type: 'category',
          label: 'Markdown Transform Reference',
          items: ['ref-markus-cli'],
        },
        {
          type: 'category',
          label: 'Concerto Reference',
          items: ['ref-concerto-decorators', 'ref-concerto-cli', 'ref-concerto-api'],
        },
        {
          type: 'category',
          label: 'Ergo Reference',
          items: ['ref-ergo-stdlib', 'ref-ergo-cli', 'ref-ergo-repl', 'ref-ergo-api', 'ref-ergo-spec'],
        },
        {
          type: 'category',
          label: 'Agreement Protocol',
          items: ['ref-apap'],
        },
        {
          type: 'category',
          label: 'Web Components Reference',
          items: ['ref-web-components-overview'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
