---
id: ref-concerto-cli
title: Command Line
original_id: ref-concerto-cli
---

Install the `@accordproject/concerto-cli` npm package to access the Concerto command line interface (CLI). After installation you can use the `concerto` command and its sub-commands as described below.

To install the Concerto CLI:
```
npm install -g @accordproject/concerto-cli
```

## Usage

```md
concerto <cmd> [args]

Commands:
  concerto validate  validate JSON against model files
  concerto compile   generate code for a target platform
  concerto get       save local copies of external model dependencies

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
```

## concerto validate
`concerto validate` lets you check whether a JSON sample is a valid instance of the given model.

```md
concerto validate

validate JSON against model files

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --sample       sample JSON to validate                                [string]
  --ctoSystem    system model to be used                                [string]
  --ctoFiles     array of CTO files                                      [array]
  --offline      do not resolve external models       [boolean] [default: false]
```

### Example
For example, using the `validate` command to check the sample `request.json` file from a [Late Delivery and Penalty](https://github.com/accordproject/cicero-template-library/tree/master/src/latedeliveryandpenalty) clause:

```
concerto validate --sample request.json --ctoFiles model/clause.cto
```

returns:

```json
info:
{
  "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
  "forceMajeure": false,
  "agreedDelivery": "2017-12-17T03:24:00.000-05:00",
  "goodsValue": 200,
  "transactionId": "9f241804-118e-439e-bef4-49ee8cf57875",
  "timestamp": "2019-10-29T15:08:46.219Z"
}
```

## concerto compile
`Concerto compile` takes an array of local CTO files, downloads any external dependencies (imports) and then converts all the model to the target format.

```md
concerto compile

generate code for a target platform

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --ctoSystem    system model to be used                                [string]
  --ctoFiles     array of CTO files                           [array] [required]
  --offline      do not resolve external models       [boolean] [default: false]
  --target       target of the code generation  [string] [default: "JSONSchema"]
  --output       output directory path           [string] [default: "./output/"]
```

At the moment, the available target formats are as follows:
- Go Lang: `concerto compile --ctoFiles modelfile.cto --target Go`
- Plant UML: `concerto compile --ctoFiles modelfile.cto --target PlantUML`
- Typescript: `concerto compile --ctoFiles modelfile.cto --target Typescript`
- Java: `concerto compile --ctoFiles modelfile.cto --target Java`
- JSONSchema: `concerto compile --ctoFiles modelfile.cto --target JSONSchema`
- XMLSchema: `concerto compile --ctoFiles modelfile.cto --target XMLSchema`

### Example
For example, using the `compile` command to export the `clause.cto` file from a [Late Delivery and Penalty](https://github.com/accordproject/cicero-template-library/tree/master/src/latedeliveryandpenalty) clause into `Go Lang` format:

```md
cd ./model
concerto compile --ctoFiles clause.cto --target Go
```

returns:
```md
info: Compiled to Go in './output/'.
```

## concerto get
`Concerto get` allows you to resolve and download external models from a set of local CTO files.

```md
concerto get

save local copies of external model dependencies

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
  --ctoFiles     array of local CTO files                     [array] [required]
  --ctoSystem    system model to be used                                [string]
  --output       output directory path                  [string] [default: "./"]
```

### Example
For example, using the `get` command to get the external models in the `clause.cto` file from a [Late Delivery and Penalty](https://github.com/accordproject/cicero-template-library/tree/master/src/latedeliveryandpenalty) clause:

```md
concerto get --ctoFiles clause.cto
```

returns:
```md
info: Loaded external models in './'.
```
