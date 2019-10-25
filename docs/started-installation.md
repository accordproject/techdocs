---
id: started-installation
title: Install Cicero
---

To experience the full power of Accord Project, you should install the Cicero command-line tools. This will let you author, validate, and run Accord Project templates on your own machine.

## Prerequisites

Before you install Cicero, you must first obtain and configure the following dependency:

* [Node.js v10.x (LTS)](http://nodejs.org): We use Node to generate the documentation, run a development web server, run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

>  We recommend using [nvm](https://github.com/creationix/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) to manage and install Node.js, which makes it easy to change the version of Node.js per project.

## Installing Cicero

To install the latest version:

```bash
npm install -g @accordproject/cicero-cli
```

:::note
You can install a specific version by appending `@version` at the end of the `npm install` command. For instance to install `0.20.0-beta.2`:
```
npm install -g @accordproject/cicero-cli@0.20.0-beta.2
```
:::

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
npm install -g @accordproject/generator-cicero-template
```

### Ergo command line

If you would like to use the Ergo language on its own (i.e., independently of a Cicero template) you can also install the Ergo command-line tools:

```bash
npm install @accordproject/ergo-cli -g
```

To check that the Ergo compiler has been installed, display the version number:
```bash
ergo --version
```

To get command line help:
```bash
ergo compile --help
ergo execute --help
```

## What next?

That's it! Go to the next page to see how to use your new installation of Cicero on a real Accord Project template.

