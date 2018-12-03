---
id: version-0.9.9-cicero-cli
title: Cicero CLI
original_id: cicero-cli
---

Install the `@accordproject/cicero-cli` npm package to access the Cicero command line interface (CLI). After installation you can use the `cicero` command and its sub-commands as described below.

## cicero parse

Loads a template from a directory on disk and then parses input clause (or contract) text using the template.
If successful the template model is printed to console. If there are syntax errors in the DSL
text the line and column and error information are printed.

```bash
    cicero parse

    Options:
      --help         Show help                                             [boolean]
      --version      Show version number                                   [boolean]
      --template     path to the directory with the template                [string]
      --sample       path to the clause text                                [string]
      --out          path to the output file                                [string]
      --verbose, -v                                                 [default: false]
```

## cicero archive

Creates a Cicero Template Archive (.cta) file from a template stored in a local directory.

```sh
    cicero archive

    Options:
      --help         Show help                                             [boolean]
      --version      Show version number                                   [boolean]
      --template     path to the directory with the template                [string]
      --archiveFile  file name for the archive                              [string]
      --verbose, -v                                                 [default: false]
```

## cicero execute

Loads a template from a directory on disk and then attempts to create a clause (or contract)from a given input
text. If the clause (or contract) is successfully created, it is then executed by the engine, passing in JSON data. If successful the
engine response is printed to the console.

```bash
   cicero execute

   Options:
     --help         Show help                                             [boolean]
     --version      Show version number                                   [boolean]
     --template     path to the directory with the template                [string]
     --sample       path to the clause text                                [string]
     --request      path to the JSON request                                [array]
     --state        path to the JSON state                                 [string]
     --verbose, -v                                                 [default: false]
```
