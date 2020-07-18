---
id: version-0.20-faq-developers
title: For Developers
original_id: faq-developers
---
# What can the Accord Project do for Developers?

* ## Can I use my favorite editor with the Accord Project?

The Accord Project has developed a plugin for VS-Code that can be installed through the VS-Code marketplace [Accord Project](https://marketplace.visualstudio.com/items?itemName=accordproject.cicero-vscode-extension)

The VSCode extension:

* parses and type-checks '.ergo' files using the Ergo compiler and reports any errors.
* parses and validates '.cto' files using the Concerto parser and reports any errors.
* parses and validates '.md' and '.tem.md' files using the Cicero templates parser and reports any errors.

You can also use any other text editor but you might not have the features available in VSCode

* ## What can I do from the command line with Accord?

The Accord Project tools are written in javascript and can be installed for the command line via Node.

#### The Primary package is the **Cicero** CLI and it can be installed via: 

```npm install -g @accordproject/cicero-cli```

This will give you the basic commands for working with contracts:

```
Commands:
  cicero parse       parse a contract text
  cicero draft       create contract text from data
  cicero normalize   normalize markdown (parse & redraft)
  cicero trigger     send a request to the contract
  cicero invoke      invoke a clause of the contract
  cicero initialize  initialize a clause
  cicero archive     create a template archive
  cicero compile     generate code for a target platform
  cicero get         save local copies of external dependencies
  ```
  Reference materials are at [Cicero CLI Documentation](https://docs.accordproject.org/docs/cicero-cli.html)

#### The schema, or models are handled through **Concerto** which can be installed with:

  ```npm install -g @accordproject/concerto-cli```

  The repo has some documentation: [Concerto-CLI](https://github.com/accordproject/concerto/tree/master/packages/concerto-cli) 

  You can do things like convert Concerto to JSONSchema ```concerto compile --ctoFiles modelfile.cto --target JSONSchema``` and perform other operations on Concerto files.

  Reference materials are at [Concerto CLI REference](https://docs.accordproject.org/docs/cicero-cli.html)

####  **Ergo** is handled with the **Ergo** CLI:

```npm install -g @accordproject/ergo-cli```

It has the following commands for working with your Ergo code:

```
Commands:
  ergo draft       create a contract text from data
  ergo trigger     send a request to the contract
  ergo invoke      invoke a clause of the contract
  ergo initialize  initialize the state for a contract
  ergo compile     compile a contract
  ```

  Reference materials are at [Ergo CLI Documentation](https://docs.accordproject.org/docs/ergo-cli.html).

  A nice thing about Ergo is that there is an included [Repl](https://docs.accordproject.org/docs/ergo-repl.html) which you can start with ```ergotop``. 

#### Markdown Transform:
```npm install -g @accordproject/markdown-cli```    

The legal text portion of the Accord Project is Markdown or a variant of Markdown called [Ciceromark](http://docs.accordproject.org/docs/markup-cicero.html). 

Markdown transform provides and elaborate set of tools for working with and translating Markdown files. You can convert between Markdown and Ciceromark;
*  parse markdown to document object model or json
*  draft from json to Markdown

There are a number of Markdown Transform sub packages that can be installed with [lerna](https://github.com/lerna/lerna):

markdown-transform : High-level API to transform any supported format

markdown-common : converts markdown strings to/from the CommonMark DOM

markdown-cicero : converts CommonMark DOM to/from the CiceroMark DOM

markdown-slate : converts CiceroMark DOM to/from the Slate DOM

markdown-html : converts CiceroMark DOM to/from HTML

markdown-pdf : converts a PDF file to/from a CiceroMark DOM

markdown-docx : converts a DOCX file to a CiceroMark DOM

markdown-cli : command line utilities

markdown-template : converts JSON data and markdown strings to/from TemplateMark

markdown-it-template : plugins to markdown-it for markdown extensions
