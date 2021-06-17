---
id: version-0.22-ref-ergo-cli
title: Command Line
original_id: ref-ergo-cli
---

Install the `@accordproject/ergo-cli` npm package to access the Ergo command line interface (CLI). After installation you can use the ergo command and its sub-commands as described below.

To install the Ergo CLI:
```
npm install -g @accordproject/ergo-cli
```

This will install `ergo`, to compile and run contracts locally on your machine, and `ergotop`, which is a _read-eval-print-loop_ utility to write Ergo interactively.

## Ergo

### Usage

```md
ergo <command>

Commands:
  ergo trigger     send a request to the contract
  ergo invoke      invoke a clause of the contract
  ergo initialize  initialize the state for a contract
  ergo compile     compile a contract

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
```

## ergo trigger

`ergo trigger` allows you to send a request to the contract.

```md
Usage: ergo trigger --data [file] --state [file] --request [file] [cto files] [ergo files]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --data         path to the contract data                            [required]
  --state        path to the state data                 [string] [default: null]
  --currentTime  set current time                       [string] [default: null]
  --utcOffset    set UTC offset                         [number] [default: null]
  --request      path to the request data                     [array] [required]
  --template     path to the template directory         [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]
```

### Example

For example, using the `trigger` command for the [Volume Discount example](https://github.com/accordproject/ergo/tree/master/tests/volumediscount) in the [Ergo Directory](https://github.com/accordproject/ergo):

```md
ergo trigger --template ./tests/volumediscount --data ./tests/volumediscount/data.json --request ./tests/volumediscount/request.json --state ./tests/volumediscount/state.json
```

returns:

```json
{
  "clause": "orgXaccordprojectXvolumediscountXVolumeDiscount",
  "request": {
    "$class": "org.accordproject.volumediscount.VolumeDiscountRequest",
    "netAnnualChargeVolume": 10.4
  },
  "response": {
    "$class": "org.accordproject.volumediscount.VolumeDiscountResponse",
    "discountRate": 2.8,
    "$timestamp": "2021-06-17T09:36:53.847-04:00"
  },
  "state": {
    "$class": "org.accordproject.runtime.State",
    "$identifier": "7c19d1e3-1f70-4b30-8c3d-086dc45b1dd1"
  },
  "emit": []
}
```

As the `request` was sent for an annual charge volume of 10.4, which falls into the third discount rate category (as specified in the `data.json` file), the `response` returns with a discount rate of 2.8%.

## ergo invoke

`ergo invoke` allows you to invoke a specific clause of the contract. The main difference between `ergo invoke` and `ergo trigger` is that `ergo invoke` sends data to a specific clause, whereas `ergo trigger` lets the contract choose which clause to invoke. This is why `--clauseName` (the name of the contract you want to execute) is a required field for `ergo invoke`.

You need to pass the CTO and Ergo files (`--template`), the name of the contract that you want to execute (`--clauseName`), and JSON files for: the contract data (`--data`), the contract parameters (`--params`), the current state of the contract (`--state`), and the request.

If contract invocation is successful, `ergorun` will print out the response, the new contract state and any emitted events.

```md
Usage: ergo invoke --data [file] --state [file] --params [file] [cto files] [ergo files]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --clauseName   the name of the clause to invoke                     [required]
  --data         path to the contract data                            [required]
  --state        path to the state data                      [string] [required]
  --currentTime  set current time                       [string] [default: null]
  --utcOffset    set UTC offset                         [number] [default: null]
  --params       path to the parameters        [string] [required] [default: {}]
  --template     path to the template directory         [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]
```

### Example

For example, using the `invoke` command for the [Volume Discount example](https://github.com/accordproject/ergo/tree/master/tests/volumediscount) in the [Ergo Directory](https://github.com/accordproject/ergo):

```md
ergo invoke --template ./tests/volumediscount --clauseName volumediscount --data ./tests/volumediscount/data.json --params ./tests/volumediscount/params.json --state ./tests/volumediscount/state.json
```

returns:

```json
{
  "clause": "orgXaccordprojectXvolumediscountXVolumeDiscount",
  "params": {
    "request": {
      "$class": "org.accordproject.volumediscount.VolumeDiscountRequest",
      "netAnnualChargeVolume": 10.4
    }
  },
  "response": {
    "$class": "org.accordproject.volumediscount.VolumeDiscountResponse",
    "discountRate": 2.8,
    "$timestamp": "2021-06-17T09:38:03.189-04:00"
  },
  "state": {
    "$class": "org.accordproject.runtime.State",
    "$identifier": "b757ad1f-e011-4fda-9b37-e7157512300f"
  },
  "emit": []
}
```

Although this looks very similar to what `ergo trigger` returns, it is important to note that `--clauseName volumediscount` was specifically invoked.

## ergo initialize
`ergo initialize` allows you to obtain the initial state of the contract. This is the state of the contract without requests or responses.

```md
Usage: ergo intialize --data [file] --params [file] [cto files] [ergo files]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --data         path to the contract data                            [required]
  --currentTime  set current time                       [string] [default: null]
  --utcOffset    set UTC offset                         [number] [default: null]
  --params       path to the parameters                 [string] [default: null]
  --template     path to the template directory         [string] [default: null]
  --warnings     print warnings                       [boolean] [default: false]
```

### Example

For example, using the `initialize` command for the [Volume Discount example](https://github.com/accordproject/ergo/tree/master/tests/volumediscount) in the [Ergo Directory](https://github.com/accordproject/ergo):

```md
ergo initialize --template ./tests/volumediscount --data ./tests/volumediscount/data.json
```

returns:

```json
{
  "clause": "orgXaccordprojectXvolumediscountXVolumeDiscount",
  "params": {
  },
  "response": null,
  "state": {
    "$class": "org.accordproject.runtime.State",
    "$identifier": "af4f0f49-2658-4465-87f4-780e7d2e38a8"
  },
  "emit": []
}
```

## ergo compile
`ergo compile` takes your input models (`.cto` files) and input contracts (`.ergo` files) and allows you to compile a contract into a target platform. By default, Ergo compiles to JavaScript (ES6 compliant) for execution.


```md
Usage: ergo compile --target [lang] --link --monitor --warnings [cto files] [ergo files]

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --target       Target platform (available: es5,es6,cicero,java)
                                                       [string] [default: "es6"]
  --link         Link the Ergo runtime with the target code (es5,es6,cicero
                 only)                                [boolean] [default: false]
  --monitor      Produce compilation time information [boolean] [default: false]
  --warnings     print warnings                       [boolean] [default: false]
```

### Example
For example, using the `compile` command on the [Volume Discount example](https://github.com/accordproject/ergo/tree/master/tests/volumediscount) in the [Ergo Directory](https://github.com/accordproject/ergo):

```md
ergo compile ./tests/volumediscount/model/model.cto ./tests/volumediscount/logic/logic.ergo
```

returns:

```md
Compiling Ergo './tests/volumediscount/logic/logic.ergo' --  './tests/volumediscount/logic/logic.js'
```

Which means a new `logic.js` file is located in the `./tests/volumediscount/logic` directory.

To compile the contract to Javascript and **link the Ergo runtime for execution**:
```md
ergo compile ./tests/volumediscount/model/model.cto ./tests/volumediscount/logic/logic.ergo --link
```

returns:

```md
Compiling Ergo './tests/volumediscount/logic/logic.ergo' --  './tests/volumediscount/logic/logic.js'
```

