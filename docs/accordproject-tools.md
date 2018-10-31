---
id: accordproject-tools
title: Installation
---

The quickest way to experiment with Cicero Templates and the Ergo language is through the [Template Studio](https://studio.accordproject.org).

However to experience the full power of Cicero you should install the command-line tools on your own machine.

## Prerequisites

Before you can use the command-line tools, you must install and configure the following dependency:

* [Node.js v8.x (LTS)](http://nodejs.org): We use Node to generate the documentation, run a
  development web server, run tests, and generate distributable files. Depending on your system,
  you can install Node either from source or as a pre-packaged bundle.

  We recommend using [nvm](https://github.com/creationix/nvm) (or
  [nvm-windows](https://github.com/coreybutler/nvm-windows))
  to manage and install Node.js, which makes it easy to change the version of Node.js per project.

## Creating Cicero Templates
If you'd like to build templates yourself, you should install the Cicero command-line tool. This will let you parse and execute your templates.

The [Quickstart tutorial](cicero-tutorial_001.md) shows you how to use this tool.

```
npm install -g @accordproject/cicero-cli
```

To create new templates you will need to install the template generator tool::

```
npm install -g yo 
npm install -g @accordproject/generator-cicero-template
```

To check that the tool has been installed, display the version number:
```
cicero --version
```

To get command line help:
```
cicero --help
cicero parse --help
cicero execute --help
```

## Programming in Ergo

If you'd like to compile and execute Ergo code independently of a Cicero template you should install the Ergo command-line tool.

To install the Ergo compiler and command-line tool, enter the following in a terminal.
```
npm install @accordproject/ergo-cli -g
```

To check that the compiler has been installed, display the version number:
```
ergoc --version
```

To get command line help:
```
ergoc --help
ergoc execute --help
```

## Using Visual Studio Code

An extension is available for the popular open-source code editor [Visual Studio Code](https://code.visualstudio.com/). 
This highlights syntax and parsing errors for Ergo and Template Grammar Files. Syntax highlighting for Hyperledger Composer models is available in a [separate plugin](https://marketplace.visualstudio.com/items?itemName=HyperledgerComposer.composer-support-client).

Install the plugin from the [Visual Studio marketplace](https://marketplace.visualstudio.com/items?itemName=accordproject.accordproject-vscode-plugin).

![VSCode plugin](/img/ergo-vscode.png)
