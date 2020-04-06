<p align="center">
  <a href="https://www.accordproject.org/">
    <img src="assets/APLogo.png" alt="Accord Project Logo" width="400">
  </a>
</p>

<p align="center">
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-24-orange.svg?style=flat-square" alt="Contributors">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/accordproject/cicero?color=bright-green" alt="GitHub license">
  </a>
  <a href="https://accord-project-slack-signup.herokuapp.com/">
    <img src="https://img.shields.io/badge/Accord%20Project-Join%20Slack-blue" alt="Join the Accord Project Slack"/>
  </a>
</p>

## Introduction

Technical Documentation for all Accord Project code. This site uses [Docusaurus](https://docusaurus.io) to generate static HTML.

The site is hosted at: https://docs.accordproject.org

Accord Project is an open source, non-profit, initiative working to transform contract management and contract automation by digitizing contracts. Accord Project operates under the umbrella of the [Linux Foundation][linuxfound]. The technical charter for the Accord Project can be found [here][charter].

## Installation

To build the documentation locally:
```
cd ./website
npm run start
```
If you want to re-generate the JSDoc API:
```
npm run build:api
```

---

Accord Project is an open source, non-profit, initiative working to transform contract management and contract automation by digitizing contracts. Accord Project operates under the umbrella of the [Linux Foundation][linuxfound]. The technical charter for the Accord Project can be found [here][charter].

## Learn More About Accord Project

### Overview
* [Accord Project][apmain]
* [Accord Project News][apnews]
* [Accord Project Blog][apblog]
* [Accord Project Slack][apslack]
* [Accord Project Technical Documentation][apdoc]
* [Accord Project GitHub][apgit]


### Documentation
* [Getting Started with Accord Project][docwelcome]
* [Concepts and High-level Architecture][dochighlevel]
* [How to use the Cicero Templating System][doccicero]
* [How to Author Accord Project Templates][docstudio]
* [Ergo Language Guide][docergo]

### Ecosystem

#### Core libraries:
<table>
  <tr>
    <th headers="blank">Projects</th>
    <th headers="blank">Package name</th>
    <th headers="blank">Version</th>
    <th headers="blank">Description</th>
  </tr>
  <tr>
    <td headers><a href="https://github.com/accordproject/cicero">Cicero</a></td>
    <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-core">cicero-core</a></td>
    <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-core"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-core.svg" alt="npm version"></a></td>
    <td headers>Templates Core</td>
  </tr>
    <tr>
      <td headers></td>
    <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-cli">cicero-cli</a></td>
      <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-cli"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-cli.svg" alt="npm version"></a></td>
      <td headers> Cicero CLI </td>
    </tr>
    <tr>
    <td headers></td>
    <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-engine">cicero-engine</a></td>
    <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-engine"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-engine.svg" alt="npm version"></a></td>
    <td headers>Node.js VM based implementation of Accord Project Template Specification execution</td>
    </tr>
    <tr>
    <td headers></td>
    <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-server">cicero-server</a></td>
    <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-server"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-server.svg" alt="npm version"></a></td>
    <td headers>Wraps the Cicero Engine and exposes it as a RESTful service</td>
    </tr>
    <tr>
    <td headers></td>
    <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-test">cicero-test</a></td>
    <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-test"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-test.svg" alt="npm version"></a></td>
    <td headers> Testing support for Cicero based on cucumber</td>
    </tr>
     <tr>
     <td headers></td>
     <td headers> <a href="https://github.com/accordproject/cicero/tree/master/packages/cicero-tools">cicero-tools</a></td>
     <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-tools"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-tools.svg" alt="npm version"></a></td>
     <td headers>Cicero Tools</td>
     </tr>
      <tr>
      <td headers="co1 c1"></td>
      <td headers="co2 c1"> <a href="https://github.com/accordproject/cicero/tree/master/packages/generator-cicero-template">generator-cicero-template</a></td>
      <td headers="co3 c1"> <a href="https://badge.fury.io/js/%40accordproject%2Fgenerator-cicero-template"><img src="https://badge.fury.io/js/%40accordproject%2Fgenerator-cicero-template.svg" alt="npm version"></a></td>
      <td headers="co4 c1">Code generator for a Cicero Template</td>
      </tr>
      <tr>
      <td headers><a href="https://github.com/accordproject/concerto">Concerto</a></td>
      <td headers><a href="https://github.com/accordproject/concerto/tree/master/packages/concerto-core">concerto-core</a></td>
      <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fconcerto-core"><img src="https://badge.fury.io/js/%40accordproject%2Fconcerto-core.svg" alt="npm version"></a></td>
      <td headers> Core Implementation for the Concerto Modeling Language</td>
      </tr>
      <tr>
      <td headers></td>
      <td headers><a href="https://github.com/accordproject/concerto/tree/master/packages/concerto-tools">concerto-tools</a></td>
      <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fconcerto-tools"><img src="https://badge.fury.io/js/%40accordproject%2Fconcerto-tools.svg" alt="npm version"></a></td>
      <td headers> Tools for the Concerto Modeling Language</td>
  </tr>
  <tr>
   <td headers></td>
   <td headers><a href="https://github.com/accordproject/concerto/tree/master/packages/concerto-cli">concerto-cli</a></td>
   <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fconcerto-cli"><img src="https://badge.fury.io/js/%40accordproject%2Fconcerto-cli.svg" alt="npm version"></a></td>
   <td headers>command-line interface for Concerto</td>
  </tr>
  <tr>
    <td headers><a href="https://github.com/accordproject/ergo">Ergo</a></td>
    <td headers><a href="https://github.com/accordproject/ergo/tree/master/packages/ergo-cli">ergo-cli</a></td>
    <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fergo-cli"><img src="https://badge.fury.io/js/%40accordproject%2Fergo-cli.svg" alt="npm version"></a></td>
    <td headers>Ergo CLI</td>
  </tr>
  <tr>
    <th id="blank"></th>
    <td headers><a href="https://github.com/accordproject/ergo/tree/master/packages/ergo-compiler">ergo-compiler</a></td>
    <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fergo-compiler"><img src="https://badge.fury.io/js/%40accordproject%2Fergo-compiler.svg" alt="npm version"></a></td>
    <td headers>Ergo compiler</td>
  </tr>
  <tr>
   <th id="blank"></th>
   <td headers><a href="https://github.com/accordproject/ergo/tree/master/packages/ergo-test">ergo-test</a></td>
   <td headers><a href="https://badge.fury.io/js/%40accordproject%2ergo-test"><img src="https://badge.fury.io/js/%40accordproject%2Fergo-test.svg" alt="npm version"></a></td>
   <td headers>Ergo test</td>
   </tr>
    <tr>
    <th id="blank"></th>
    <td headers><a href="https://github.com/accordproject/ergo/tree/master/packages/ergo-engine">ergo-engine</a></td>
    <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fergo-engine"><img src="https://badge.fury.io/js/%40accordproject%2Fergo-engine.svg" alt="npm version"></a></td>
    <td headers>Ergo engine</td>
    </tr>
    <tr>
     <td headers><a href="https://docs.accordproject.org/docs/next/markup-cicero.html">Markdown</a></td>
     <td headers><a href="https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-common">markdown-common</a></td>
     <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-common"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-common.svg" alt="npm version"></a></td>
     <td headers>A framework for transforming markdown</td>
    </tr>
     <tr>
     <th id="blank"></th>
     <td headers><a href="https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-slate">markdown-slate</a></td>
     <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-slate"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-slate.svg" alt="npm version"></a></td>
     <td headers>Transform markdown to/from CommonMark DOM</td>
     </tr>
     <tr>
     <td headers></td>
     <td headers><a href="https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-cli"> markdown-cli </a></td>
     <td headers> <a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-cli"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-cli.svg" alt="npm version"></a></td>
     <td headers> CLI for markdown transformations.</td>
    </tr>
     <tr>
      <th id="blank"></th>
      <td headers><a href="https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-cicero">markdown-cicero</a></td>
      <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-cicero"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-cicero.svg" alt="npm version"></a></td>
      <td headers>Markdown extensions for contracts, clauses, variables etc.</td>
      </tr>
       <tr>
      <th id="blank"></th>
       <td headers><a href="https://github.com/accordproject/markdown-transform/tree/master/packages/markdown-html">markdown-html</a></td>
       <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-html"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-html.svg" alt="npm version"></a></td>
       <td headers>Transform CiceroDOM to HTML</td>
       </tr>
 
</table>

#### UI Components:

<table>
  <tr>
    <th  headers="blank">Projects</th>
    <th  headers="blank">Package name</th>
    <th  headers="blank">Version</th>
    <th  headers="blank">Description</th>
  </tr>
    <tr>
      <td headers>Markdown Editor</td>
      <td headers><a href="https://github.com/accordproject/markdown-editor">markdown-editor</a></td>
      <td headers><a href="https://badge.fury.io/js/%40accordproject%2Fmarkdown-editor"><img src="https://badge.fury.io/js/%40accordproject%2Fmarkdown-editor.svg" alt="npm version"></a></td>
      <td headers>WYSIWYG rich text web editor for markdown based on Slate.js</td>
    </tr>
     <tr>
     <td headers="co1 c1">Cicero UI</td>
      <td headers="co2 c1"><a href="https://github.com/accordproject/cicero-ui">cicero-ui</a></td>
      <td headers="co3 c1"> <a href="https://badge.fury.io/js/%40accordproject%2Fcicero-ui"><img src="https://badge.fury.io/js/%40accordproject%2Fcicero-ui.svg" alt="npm version"></a></td>
       <td headers="co4 c1">React UI components for Cicero</td>
     </tr>
     <tr>
     <td headers="co1 c1">Concerto UI</td>
      <td headers="co2 c1"><a href="https://github.com/accordproject/concerto-ui">concerto-ui</a></td>
      <td headers="co3 c1"> <a href="https://badge.fury.io/js/%40accordproject%2Fconcerto-ui-react"><img src="https://badge.fury.io/js/%40accordproject%2Fconcerto-ui-react.svg" alt="npm version"></a></td>
       <td headers="co4 c1">Dynamic web forms generated from Concerto models</td>
     </tr>
</table>

#### Template Editors:

<table>
  <tr>
    <th headers="blank">Projects</th>
    <th headers="blank">Cicero ver.</th>
    <th headers="blank">Description</th>
  </tr>
  <tr>
    <td headers><a href="https://github.com/accordproject/template-studio">Template Studio v1</a></td>
    <td headers> <b>0.13.4</b></td>
    <td headers>Web UI for creating, editing and testing Accord Project templates</td>
  </tr>
  <tr>
    <td headers><a href="https://github.com/accordproject/template-studio-v2">Template Studio v2</a></td>
    <td headers> <b>0.13.4</b></td>
    <td headers>Web UI for creating, editing and testing Accord Project templates</td>
  </tr>
   <tr>
    <td headers><a href="https://github.com/accordproject/cicero-vscode-extension">VSCode Extension</a></td>
    <td headers><b>0.13.4</b></td>
    <td headers>VS Code extension for editing Cicero templates and Ergo logic</td>
   </tr>
</table>


#### Public templates and models:

<table>
  <tr>
    <th headers="blank">Projects</th>
    <th headers="blank">Description</th>
  </tr>
  <tr>
    <td headers><a href="https://github.com/accordproject/models">Models</a></td>
    <td headers>Accord Project Model Library </td>
  </tr>
   <tr>
     <td headers><a href="https://github.com/accordproject/cicero-template-library">Template Library</a></td>
     <td headers>Accord Project Template Library </td>
   </tr>
 
</table>


#### Documentation:

<table>
  <tr>
    <th headers="blank">Project</th>
    <th headers="blank">Repo</th>
  </tr>
  <tr>
    <td headers><a href="https://docs.accordproject.org/">Documentation</a></td>
    <td headers><a href="https://github.com/accordproject/techdocs">techdocs</a></td>
  </tr>
 </table>

## Contributing

The Accord Project technology is being developed as open source. All the software packages are being actively maintained on GitHub and we encourage organizations and individuals to contribute requirements, documentation, issues, new templates, and code.

Find out what’s coming on our [blog][apblog].

Join the Accord Project Technology Working Group [Slack channel][apslack] to get involved!

For code contributions, read our [CONTRIBUTING guide][contributing] and information for [DEVELOPERS][developers].

The Technical Steering Committee (TSC) may be emailed directly at tsc@accordproject.org.

### README Badge

Using Accord Project? Add a README badge to let everyone know: [![accord project](https://img.shields.io/badge/powered%20by-accord%20project-19C6C8.svg)](https://www.accordproject.org/)

```
[![accord project](https://img.shields.io/badge/powered%20by-accord%20project-19C6C8.svg)](https://www.accordproject.org/)
```

## License <a name="license"></a>

Accord Project source code files are made available under the [Apache License, Version 2.0][apache].
Accord Project documentation files are made available under the [Creative Commons Attribution 4.0 International License][creativecommons] (CC-BY-4.0).

Copyright 2018-2019 Clause, Inc. All trademarks are the property of their respective owners. See [LF Projects Trademark Policy](https://lfprojects.org/policies/trademark-policy/).

[linuxfound]: https://www.linuxfoundation.org
[charter]: https://github.com/accordproject/techdocs/blob/master/CHARTER.md
[apmain]: https://accordproject.org/ 
[apworkgroup]: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjZvYzIzZHVrYnI1aDVzbjZnMHJqYmtwaGlfMjAxNzExMTVUMjEwMDAwWiBkYW5AY2xhdXNlLmlv&tmsrc=dan%40clause.io
[apblog]: https://medium.com/@accordhq
[apnews]: https://www.accordproject.org/news/
[apgit]:  https://github.com/accordproject/
[apdoc]: https://docs.accordproject.org/
[apslack]: https://accord-project-slack-signup.herokuapp.com

[docspec]: https://docs.accordproject.org/docs/spec-overview.html
[docwelcome]: https://docs.accordproject.org/docs/accordproject.html
[dochighlevel]: https://docs.accordproject.org/docs/spec-concepts.html
[docergo]: https://docs.accordproject.org/docs/logic-ergo.html
[docstart]: https://docs.accordproject.org/docs/accordproject.html
[doccicero]: https://docs.accordproject.org/docs/basic-use.html
[docstudio]: https://docs.accordproject.org/docs/advanced-latedelivery.html

[contributing]: https://github.com/accordproject/techdocs/blob/master/CONTRIBUTING.md
[developers]: https://github.com/accordproject/techdocs/blob/master/DEVELOPERS.md

[apache]: https://github.com/accordproject/techdocs/blob/master/LICENSE
[creativecommons]: http://creativecommons.org/licenses/by/4.0/

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/4dd3r"><img src="https://avatars1.githubusercontent.com/u/1309899?v=4" width="100px;" alt="4dd3r"/><br /><sub><b>4dd3r</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=4dd3r" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/4katie"><img src="https://avatars2.githubusercontent.com/u/45664641?v=4" width="100px;" alt="4katie"/><br /><sub><b>4katie</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=4katie" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Alexandria"><img src="https://avatars1.githubusercontent.com/u/7613670?v=4" width="100px;" alt="It's Lex "/><br /><sub><b>It's Lex </b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=Alexandria" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/DEBSUBHRO"><img src="https://avatars0.githubusercontent.com/u/42496309?v=4" width="100px;" alt="DEBSUBHRA ROY"/><br /><sub><b>DEBSUBHRA ROY</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=DEBSUBHRO" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/FelixKuehl"><img src="https://avatars1.githubusercontent.com/u/13168478?v=4" width="100px;" alt="Felix Kühl"/><br /><sub><b>Felix Kühl</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=FelixKuehl" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Frozenaught"><img src="https://avatars3.githubusercontent.com/u/34192458?v=4" width="100px;" alt="Nico Britz"/><br /><sub><b>Nico Britz</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=Frozenaught" title="Code">💻</a></td>
    <td align="center"><a href="http://yashgarg.me"><img src="https://avatars2.githubusercontent.com/u/33605526?v=4" width="100px;" alt="Yash Garg"/><br /><sub><b>Yash Garg</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=Yash-Garg" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://contractpen.com/"><img src="https://avatars3.githubusercontent.com/u/41356995?v=4" width="100px;" alt="ContractPen"/><br /><sub><b>ContractPen</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=contractpendev" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/daniloff200"><img src="https://avatars1.githubusercontent.com/u/13692220?v=4" width="100px;" alt="Dmitriy Danilov"/><br /><sub><b>Dmitriy Danilov</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=daniloff200" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dselman"><img src="https://avatars0.githubusercontent.com/u/623108?v=4" width="100px;" alt="Dan Selman"/><br /><sub><b>Dan Selman</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=dselman" title="Code">💻</a></td>
    <td align="center"><a href="http://jolenelanglinais.com"><img src="https://avatars3.githubusercontent.com/u/36460856?v=4" width="100px;" alt="Jolene Langlinais"/><br /><sub><b>Jolene Langlinais</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=irmerk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/javiercanossini"><img src="https://avatars3.githubusercontent.com/u/41113584?v=4" width="100px;" alt="Javier Canossini"/><br /><sub><b>Javier Canossini</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=javiercanossini" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jbesq777"><img src="https://avatars0.githubusercontent.com/u/3835594?v=4" width="100px;" alt="Joseph J Bambara"/><br /><sub><b>Joseph J Bambara</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=jbesq777" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jeromesimeon"><img src="https://avatars0.githubusercontent.com/u/670099?v=4" width="100px;" alt="Jerome Simeon"/><br /><sub><b>Jerome Simeon</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=jeromesimeon" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://lex111.ru/"><img src="https://avatars2.githubusercontent.com/u/4408379?v=4" width="100px;" alt="Alexey Pyltsyn"/><br /><sub><b>Alexey Pyltsyn</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=lex111" title="Code">💻</a></td>
    <td align="center"><a href="http://clause.io"><img src="https://avatars1.githubusercontent.com/u/7544022?v=4" width="100px;" alt="Matt Roberts"/><br /><sub><b>Matt Roberts</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=mttrbrts" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nithilan4"><img src="https://avatars0.githubusercontent.com/u/43860191?v=4" width="100px;" alt="Nithilan Kalidoss"/><br /><sub><b>Nithilan Kalidoss</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=nithilan4" title="Code">💻</a></td>
    <td align="center"><a href="http://oorjitchowdhary.ml"><img src="https://avatars2.githubusercontent.com/u/39333058?v=4" width="100px;" alt="Oorjit Chowdhary"/><br /><sub><b>Oorjit Chowdhary</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=oorjitchowdhary" title="Code">💻</a></td>
    <td align="center"><a href="http://www.clause.io"><img src="https://avatars1.githubusercontent.com/u/9304034?v=4" width="100px;" alt="Peter Hunn"/><br /><sub><b>Peter Hunn</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=peterhunn" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pranjalv9"><img src="https://avatars1.githubusercontent.com/u/55620250?v=4" width="100px;" alt="Pranjal Vyas"/><br /><sub><b>Pranjal Vyas</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=pranjalv9" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ryanctlin"><img src="https://avatars2.githubusercontent.com/u/32078126?v=4" width="100px;" alt="Ryan (Chiungting) Lin"/><br /><sub><b>Ryan (Chiungting) Lin</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=ryanctlin" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://deuexsolutions.com"><img src="https://avatars1.githubusercontent.com/u/6761317?v=4" width="100px;" alt="Sanket Shah"/><br /><sub><b>Sanket Shah</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=shahsank3t" title="Code">💻</a></td>
    <td align="center"><a href="https://steffinstanly.github.io/"><img src="https://avatars0.githubusercontent.com/u/32876873?v=4" width="100px;" alt="Steffin Stanly"/><br /><sub><b>Steffin Stanly</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=steffinstanly" title="Code">💻</a></td>
    <td align="center"><a href="https://sumitkharche.hashnode.dev/"><img src="https://avatars3.githubusercontent.com/u/43902034?v=4" width="100px;" alt="Sumit Kharche"/><br /><sub><b>Sumit Kharche</b></sub></a><br /><a href="https://github.com/accordproject/techdocs/commits?author=sumitkharche" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
