---
id: version-0.4.5-ergo-cli
title: Ergo CLI
original_id: ergo-cli
---

# ergo compile

Compile an Ergo contract to JavaScript

    ergo compile

    Options:
    --help         Show help                                             [boolean]
    --version      Show version number                                   [boolean]
    --ergo         path to the Ergo source
    --cto          path to CTO models                                      [array]
    --target       target language (javascript|javascript_cicero)
                                                    [string] [default: "javascript"]
    --link         link to JavaScript runtime           [boolean] [default: false]
    --verbose, -v                                                 [default: false]

# ergo execute

Execute an ergo contract

    ergo execute

    Options:
    --help          Show help                                            [boolean]
    --version       Show version number                                  [boolean]
    --contract      path to the contract data
    --request       path to the request data                               [array]
    --state         path to the state data                [string] [default: null]
    --ergo          path to the Ergo file
    --cto           path to CTO models                                     [array]
    --contractname  contract name
    --verbose, -v                                                 [default: false]
