---
id: started-installation
title: Install Cicero
---

To experiment with Accord Project, you can install the Cicero command-line. This will let you author, validate, and run Accord Project templates on your own machine.

:::tip
Prefer not to install anything? You can edit and test contracts and data models entirely in your browser — see [Try It in Your Browser](started-playground.md). This command-line path is for when you want to work locally, automate templates, or integrate them into an application.
:::

## Prerequisites

You must first obtain and configure the following dependency:

- [Node.js (LTS)](https://nodejs.org): We use Node.js to run cicero, generate the documentation, run a development web server, testing, and produce distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

> We recommend using [nvm](https://github.com/nvm-sh/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) to manage and install Node.js, which makes it easy to change the version of Node.js per project.

## Installing Cicero

To install the latest version of the Cicero command-line tools:

```bash
npm install -g @accordproject/cicero-cli
```

> You can install a specific version by appending `@version` at the end of the `npm install` command. For instance to install version `0.24.0` or version `0.13.4`:
>
> ```bash
> npm install -g @accordproject/cicero-cli@0.24.0
> npm install -g @accordproject/cicero-cli@0.13.4
> ```

To check that Cicero has been properly installed, and display the version number:
```bash
cicero --version
```

To get command line help:
```bash
cicero --help
cicero draft --help     # To create text from a template and data
cicero archive --help   # To create a template archive
cicero compile --help   # To generate code for a target platform
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

