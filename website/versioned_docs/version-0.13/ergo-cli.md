---
id: ergo-cli
title: Ergo CLI
original_id: ergo-cli
---

To install the Ergo command-line interface (CLI):

```term
    npm install -g @accordproject/ergo-cli@0.13
```

This will install `ergoc`, the Ergo compiler, `ergorun` to run your contracts locally on your machine, and `ergotop` which is a _read-eval-print-loop_ utility to write Ergo interactively.

## ergoc

### Usage

Compile an Ergo contract to a target platform

```term
    ergoc [options] [cto files] [ergo files]

    Options:
      --version       Show version and exit
      --target <lang> Target language (default: es6) (available: es5,es6,cicero,java)
      --link          Adds the Ergo runtime to the target code (for es5,es6 and cicero only)
      --monitor       Produce compilation time information
      --warnings      Print warnings
      --help          Show help and exit
```

`ergoc` takes your input models (cto files) and input contracts (ergo files) and generates code for execution. By default it generates JavaScript code (ES6 compliant).

### Examples

For instance, to compile the helloworld contract to JavaScript:

```term
    $ ergoc ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo
    Compiling Ergo './examples/volumediscount/logic.ergo' -- creating './examples/volumediscount/logic.js'
```

To compile the helloworld contract to JavaScript and link the Ergo runtime for execution:

```term
    $ ergoc ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo --link
    Compiling Ergo './examples/volumediscount/logic.ergo' -- creating './examples/volumediscount/logic.js'
```

To compile the helloworld contract to Java:

```term
    $ ergoc ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo --target java
    Compiling Ergo './examples/volumediscount/logic.ergo' -- creating './examples/volumediscount/logic.java'
```

## ergorun

### Usage

Invoke an ergo contract

```term
    ergorun --contract [file] --state [file] --request [file] [ctos] [ergos]

    Options:
      --help          Show help                                            [boolean]
      --version       Show version number                                  [boolean]
      --contract      path to the contract data                           [required]
      --request       path to the request data                    [array] [required]
      --state         path to the state data                [string] [default: null]
      --warnings      print warnings                      [boolean] [default: false]
      --contractname                                                      [required]
      --verbose, -v                                                 [default: false]
```

`ergorun` lets you invoke your Ergo contract. You need to pass the CTO and Ergo files, the name of the contract that you want to execute, and JSON files for: the contract parameters, the current state of the contract, and for the request.

### Examples

For instance, to send one request to the `volumediscount` contract:

```term
    $ ergorun ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo --contractname org.accordproject.volumediscount.VolumeDiscount --contract ./examples/volumediscount/contract.json --request ./examples/volumediscount/request.json --state ./examples/volumediscount/state.json
    02:33:50 - info: {"response":{"discountRate":2.8,"$class":"org.accordproject.volumediscount.VolumeDiscountResponse"},"state":{"$class":"org.accordproject.cicero.contract.AccordContractState","stateId":"1"},"emit":[]}
```

If contract invokation is successful, `ergorun` will print out the response, the new contract state and any emitted events.

## ergotop (REPL)

### Starting the REPL

`ergotop` is a convenient tool to try-out Ergo contracts in an interactive way. You can write commands, or expressions and see the result. It is often called the Ergo REPL, for _read-eval-print-loop_, since it literally: reads your input Ergo from the command-line, evaluates it, prints the result and loops back to read your next input.

To start the REPL:

```
    $ ergotop
    02:39:37 - info: Logging initialized. 2018-09-25T06:39:37.209Z
    ergo$ 
```

It should print the prompt `ergo$` which indicates it is ready to read your command. For instance:

```ergo
    ergo$ return 42
    Response. 42 : Integer
```

`ergotop` prints back both the resulting value and its type. You can then keep typing commands:

```ergo
    ergo$ return "hello " ++ "world!"
    Response. "hello world!" : String
    ergo$ define constant pi = 3.14
    ergo$ return pi ^ 2.0
    Response. 9.8596 : Double
```

If your expression is not valid, or not well-typed, it will return an error:

```ergo
    ergo$ return if true else "hello"
    Parse error (at line 1 col 15). 
    return if true else "hello"
                   ^^^^        
    ergo$ return if "hello" then 1 else 2
    Type error (at line 1 col 10). 'if' condition not boolean.
    return if "hello" then true else false
              ^^^^^^^
```

If what you are trying to write is too long to fit on one line, you can use `\` to go to a new line:

```ergo
    ergo$ define function squares(l:Double[]) : Double[] { \
      ...   return \
      ...     foreach x in l return x * x \
      ... }
    ergo$ return squares([2.3,4.5,6.7])
    Response. [5.29, 20.25, 44.89] : Double[]
```

### Loading files

You can load CTO and Ergo files to use in your REPL session. Once the REPL is launched you will have to import the corresponding namespace. For instance, if you want to use the `compoundInterestMultiple` function defined in the `./examples/promissory-note/money.ergo` file, you can do it as follows:

```ergo
$ ergotop ./examples/promissory-note/money.ergo 
08:45:26 - info: Logging initialized. 2018-09-25T12:45:26.481Z
ergo$ import org.accordproject.ergo.money.*
ergo$ return compoundInterestMultiple(0.035, 100.0)
Response. 1.00946960405 : Double
ergo$ 
```

### Calling contracts

To call a contract, you first needs to _instantiate_ it, which means setting its parameters and initializing its state. You can do this by using the `set contract` and `call init` commands respectively. Here is an example using the `volumediscount` template:

```ergo
$ ergotop ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo 
ergo$ import org.accordproject.cicero.contract.*
ergo$ import org.accordproject.cicero.runtime.*
ergo$ import org.accordproject.volumediscount.*
ergo$ set contract VolumeDiscount over TemplateModel{ \
  ...   firstVolume: 1.0, \
  ...   secondVolume: 10.0, \
  ...   firstRate: 3.0, \
  ...   secondRate: 2.9, \
  ...   thirdRate: 2.8 \
  ... }
ergo$ call init(Request{})
Response. unit : Unit
State. AccordContractState{stateId: "1"} : AccordContractState
```

You can then invoke clauses of the contract:

```ergo
ergo$ call volumediscount(VolumeDiscountRequest{ netAnnualChargeVolume : 0.1 })
Response. VolumeDiscountResponse{discountRate: 3.0} : VolumeDiscountResponse
ergo$ call volumediscount(VolumeDiscountRequest{ netAnnualChargeVolume : 10.5 })
Response. VolumeDiscountResponse{discountRate: 2.8} : VolumeDiscountResponse
```

You can also invoke the contract without explicitly naming the clause by simply sending a request. The Ergo engine dispatches that request to the first clause which can handle it:
```ergo
ergo$ send VolumeDiscountRequest{ netAnnualChargeVolume : 0.1 }
Response. VolumeDiscountResponse{discountRate: 3.0} : VolumeDiscountResponse
ergo$ send VolumeDiscountRequest{ netAnnualChargeVolume : 10.5 }
Response. VolumeDiscountResponse{discountRate: 2.8} : VolumeDiscountResponse
```

