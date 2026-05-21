---
id: ref-cicero-cli
title: Command Line
---

Install the `@accordproject/cicero-cli` npm package to access the Cicero command line interface (CLI). After installation you can use the `cicero` command and its sub-commands as described below.

To install the Cicero CLI:
```
npm install -g @accordproject/cicero-cli
```

## Usage

```md
cicero <cmd> [args]

Commands:
  cicero verify   verify the template signatures of the template
                  author/developer
  cicero archive  create a template archive
  cicero draft    create sample text by merging a template with data
  cicero compile  generate code for a target platform
  cicero get      save local copies of external dependencies

Options:
      --version  Show version number                                   [boolean]
  -v, --verbose                                                 [default: false]
      --help     Show help                                             [boolean]
```

## cicero verify

`cicero verify` verifies the digital signatures of the template's author and developer.

```md
cicero verify

verify the template signatures of the template author/developer

Options:
      --version   Show version number                                  [boolean]
  -v, --verbose                                                 [default: false]
      --help      Show help                                            [boolean]
      --template  path to the template                                  [string]
      --warnings  print warnings                      [boolean] [default: false]
```

## cicero archive

`cicero archive` creates a Cicero Template Archive (`.cta`) file from a template stored in a local directory. The archive can optionally be signed using a p12 keystore.

```md
cicero archive

create a template archive

Options:
      --version     Show version number                                [boolean]
  -v, --verbose                                                 [default: false]
      --help        Show help                                          [boolean]
      --template    path to the template                                [string]
      --target      the target language of the archive  [string] [default: null]
      --output      file name for new archive           [string] [default: null]
      --warnings    print warnings                    [boolean] [default: false]
      --keystore    p12 keystore path                   [string] [default: null]
      --passphrase  p12 keystore passphrase             [string] [default: null]
```

## cicero draft

`cicero draft` creates sample text by merging a template with contract data. Use `--format` to choose the output format (for example `markdown` or `html`), and `--output` to write the result to a file instead of printing it to the console.

```md
cicero draft

create sample text by merging a template with data

Options:
      --version      Show version number                               [boolean]
  -v, --verbose                                                 [default: false]
      --help         Show help                                         [boolean]
      --template     path to the template                               [string]
      --data         path to the JSON data for the template             [string]
      --output       path to the output file            [string] [default: null]
      --format       the output format (e.g. markdown, html)
                                                  [string] [default: "markdown"]
      --currentTime  set the current time               [string] [default: null]
      --warnings     print warnings                   [boolean] [default: false]
```

## cicero compile

`cicero compile` generates code for a target platform. It loads a template from a directory on disk and then attempts to generate versions of the template model in the specified format. The available formats include: `Go`, `PlantUML`, `Typescript`, `Java`, and `JSONSchema`.

```md
cicero compile

generate code for a target platform

Options:
      --version   Show version number                                  [boolean]
  -v, --verbose                                                 [default: false]
      --help      Show help                                            [boolean]
      --template  path to the template                                  [string]
      --target    target of the code generation [string] [default: "JSONSchema"]
      --output    path to the output directory   [string] [default: "./output/"]
      --warnings  print warnings                      [boolean] [default: false]
```

## cicero get

`cicero get` saves local copies of a template's external model dependencies.

```md
cicero get

save local copies of external dependencies

Options:
      --version   Show version number                                  [boolean]
  -v, --verbose                                                 [default: false]
      --help      Show help                                            [boolean]
      --template  path to the template                                  [string]
      --output    output directory path                                 [string]
```
