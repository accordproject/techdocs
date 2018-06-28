---
id: version-0.4.5.2-cicero-cli
title: Cicero CLI
original_id: cicero-cli
---

Install the `@accordproject/cicero-cli` npm package to access the Cicero command line interface (CLI). After installation you can use the `cicero` command and its sub-commands as described below.

# cicero parse

Loads a template from a directory on disk and then parses input DSL text using the template.
If successful the template model is printed to console. If there are syntax errors in the DSL
text the line and column and error information are printed.

Options:

    cicero parse

    Options:
    --help         Show help                                             [boolean]
    --version      Show version number                                   [boolean]
    --template     path to the directory with the template
    --dsl          path to the clause text
    --verbose, -v                                                 [default: false]

# cicero archive

Creates a Cicero Template Archive (.cta) file from a template stored in a local directory.

Options:

    cicero archive

    Options:
    --help         Show help                                             [boolean]
    --version      Show version number                                   [boolean]
    --template     path to the directory with the template                [string]
    --archiveFile  file name for the archive                              [string]
    --verbose, -v                                                 [default: false]

# cicero execute

Loads a template from a directory on disk and then attempts to create a clause from input
DSL text. The clause is then executed by the engine, passing in JSON data. If successful the
engine response is printed to the console.

Options:

    cicero execute

    Options:
    --help         Show help                                             [boolean]
    --version      Show version number                                   [boolean]
    --template     path to the directory with the template
    --dsl          path to the clause text
    --data         path to the request JSON data
    --verbose, -v                                                 [default: false]