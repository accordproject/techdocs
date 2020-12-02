---
id: accordproject-installation
title: Installation
original_id: accordproject-installation
---

To start working on your own Accord Project templates, you should install the Cicero command-line tools. This will let you author, parse, and execute Accord Project templates.

## Prerequisites

Before you can install Cicero, you must first obtain and configure the following dependency:

* [Node.js v8.x (LTS)](http://nodejs.org): We use Node to generate the documentation, run a
  development web server, run tests, and generate distributable files. Depending on your system,
  you can install Node either from source or as a pre-packaged bundle.

>  We recommend using [nvm](https://github.com/creationix/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) to manage and install Node.js, which makes it easy to change the version of Node.js per project.

## Installing Cicero

To install the latest version:

```bash
npm install -g @accordproject/cicero-cli@0.13
```

To check that Cicero has been properly installed, and display the version number:
```bash
cicero --version
```

To get command line help:
```bash
cicero --help
cicero parse --help
cicero execute --help
```

## Optional Packages

### Template Generator

You may also want to install the template generator tool, which you can use to create an empty template:

```bash
npm install -g yo 
npm install -g @accordproject/generator-cicero-template@0.13
```

### Ergo command line

If you would like to use the Ergo language on its own (i.e., independently of a Cicero template) you can also install the Ergo command-line tools:

```bash
npm install @accordproject/ergo-cli@0.13 -g
```

To check that the Ergo compiler has been installed, display the version number:
```bash
ergoc --version
```

To get command line help:
```bash
ergoc --help
ergorun --help
```

That's it!

## What next?

The following pages provide links to developers tools and resources. You can also browse using the navigation bar to the left to find additional information: tutorials, API reference, the Ergo language guide, etc.

