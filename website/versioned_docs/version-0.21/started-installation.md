---
id: started-installation
title: Install Cicero
original_id: started-installation
---

To experiment with Accord Project, you can install the Cicero command-line. This will let you author, validate, and run Accord Project templates on your own machine.

## Prerequisites

You must first obtain and configure the following dependency:

* [Node.js (LTS)](http://nodejs.org): We use Node.js to run cicero, generate the documentation, run a development web server, testing, and produce distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

>  We recommend using [nvm](https://github.com/creationix/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) to manage and install Node.js, which makes it easy to change the version of Node.js per project.

## Installing Cicero

To install the latest version of the Cicero command-line tools:

```bash
npm install -g @accordproject/cicero-cli
```

:::note
You can install a specific version by appending `@version` at the end of the `npm install` command. For instance to install version `0.20.3` or version `0.13.4`:
```bash
npm install -g @accordproject/cicero-cli@0.20.3
npm install -g @accordproject/cicero-cli@0.13.4
```
:::

To check that Cicero has been properly installed, and display the version number:
```bash
cicero --version
```

To get command line help:
```bash
cicero --help
cicero parse --help     // To parse a sample clause/contract
cicero draft --help     // To draft a sample clause/contract
cicero trigger --help   // To send a request to a clause/contract
```

## Optional Packages

### Template Generator

You may also want to install the template generator tool, which you can use to create an empty template:

```bash
npm install -g yo
npm install -g @accordproject/generator-cicero-template
```

## What next?

That's it! Go to the next page to see how to use your new installation of Cicero on a real Accord Project template.

