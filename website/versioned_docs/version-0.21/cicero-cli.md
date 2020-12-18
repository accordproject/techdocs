---
id: cicero-cli
title: Cicero CLI
original_id: cicero-cli
---

Install the `@accordproject/cicero-cli` npm package to access the Cicero command line interface (CLI). After installation you can use the `cicero` command and its sub-commands as described below.

To install the Cicero CLI:
```
npm install -g @accordproject/cicero-cli@0.20
```

## Usage

```md
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

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]

```

## cicero parse

`cicero parse` loads a template from a directory on disk and then parses input clause (or contract) text using the template. If successful, the template model is printed to console. If there are syntax errors, the line and column and error information are printed.

```md
cicero parse

parse a contract text

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --sample       path to the contract text                              [string]
  --output       path to the output file                                [string]
  --currentTime  set current time                       [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]
```

## cicero draft

`cicero draft` creates contract text from data.

```md
create contract text from data

Options:
  --version        Show version number                                 [boolean]
  --verbose, -v                                                 [default: false]
  --help           Show help                                           [boolean]
  --template       path to the template                                 [string]
  --data           path to the contract data                            [string]
  --output         path to the output file                              [string]
  --currentTime    set current time                     [string] [default: null]
  --wrapVariables  wrap variables as XML tags         [boolean] [default: false]
  --warnings       print warnings                     [boolean] [default: false]
```

## cicero normalize

`cicero normalize` normalizes markdown text by parsing and redrafting the text.

```md
normalize markdown (parse & redraft)

Options:
  --version        Show version number                                 [boolean]
  --verbose, -v                                                 [default: false]
  --help           Show help                                           [boolean]
  --template       path to the template                                 [string]
  --sample         path to the contract text                            [string]
  --overwrite      overwrite the contract text        [boolean] [default: false]
  --output         path to the output file                              [string]
  --currentTime    set current time                     [string] [default: null]
  --warnings       print warnings                     [boolean] [default: false]
  --wrapVariables  wrap variables as XML tags         [boolean] [default: false]
```

## cicero trigger

`cicero trigger` sends a request to the contract.

```md
send a request to the contract

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --sample       path to the contract text                              [string]
  --request      path to the JSON request                                [array]
  --state        path to the JSON state                                 [string]
  --currentTime  set current time                       [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]

```

## cicero invoke

`cicero invoke` invokes a specific clause (`--clauseName`) of the contract.

```md
invoke a clause of the contract

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --sample       path to the contract text                              [string]
  --clauseName   the name of the clause to invoke                       [string]
  --params       path to the parameters                                 [string]
  --state        path to the JSON state                                 [string]
  --currentTime  set current time                       [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]

```

## cicero initialize

`cicero initialize` initializes a clause.

```md
cicero initialize

initialize a clause

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --sample       path to the contract text                              [string]
  --currentTime  initialize with this current time      [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]

```
## cicero archive

`cicero archive` creates a Cicero Template Archive (`.cta`) file from a template stored in a local directory.

```md
cicero archive

create a template archive

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --target       the target language of the archive   [string] [default: "ergo"]
  --output       file name for new archive              [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]

```

## cicero compile

`cicero compile` generates code for a target platform. It loads a template from a directory on disk and then attempts to generate versions of the template model in the specified format. The available formats include: `Go`, `PlantUML`, `Typescript`, `Java`, and `JSONSchema`.

```md
cicero compile

generate code for a target platform

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --target       target of the code generation  [string] [default: "JSONSchema"]
  --output       path to the output directory    [string] [default: "./output/"]
  --warnings     print warnings                       [boolean] [default: false]

```
## cicero get

`cicero get` saves local copies of external dependencies.

```md
cicero get

save local copies of external dependencies

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --template     path to the template                                   [string]
  --output       output directory path                                  [string]
```
