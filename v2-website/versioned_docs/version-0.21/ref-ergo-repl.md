---
id: ref-ergo-repl
title: Read-Eval-Print Loop
original_id: ref-ergo-repl
---

`ergotop` is a convenient tool to try-out Ergo contracts in an interactive way. You can write commands, or expressions and see the result. It is often called the Ergo REPL, for _read-eval-print-loop_, since it literally: reads your input Ergo from the command-line, evaluates it, prints the result and loops back to read your next input.

## Starting the REPL

To start the REPL:

```
$ ergotop
Welcome to ERGOTOP version 0.20.0
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
    return if "hello" then 1 else 2
              ^^^^^^^
```

If what you are trying to write is too long to fit on one line, you can use `\` to go to a new line:

```ergo
    ergo$ define function squares(l:Double[]) : Double[] { \
      ...   return \
      ...     foreach x in l return x * x \
      ... }
    ergo$ return squares([2.4,4.5,6.7])
    Response. [5.76, 20.25, 44.89] : Double[]
```

## Loading files

You can load CTO and Ergo files to use in your REPL session. Once the REPL is launched you will have to import the corresponding namespace. For instance, if you want to use the `compoundInterestMultiple` function defined in the `./examples/promissory-note/money.ergo` file, you can do it as follows:

```ergo
$ ergotop ./examples/promissory-note/logic/money.ergo
Welcome to ERGOTOP version 0.20.0

ergo$ import org.accordproject.ergo.money.*
ergo$ return compoundInterestMultiple(0.035, 100)
Response. 1.00946960405 : Double
```

## Calling contracts

To call a contract, you first needs to _instantiate_ it, which means setting its parameters and initializing its state. You can do this by using the `set contract` and `call init` commands respectively. Here is an example using the `volumediscount` template:

```ergo
$ ergotop ./examples/volumediscount/model/model.cto ./examples/volumediscount/logic/logic.ergo
ergo$ import org.accordproject.cicero.contract.*
ergo$ import org.accordproject.volumediscount.*
ergo$ set contract VolumeDiscount over VolumeDiscountContract {firstVolume: 1.0, secondVolume: 10.0, firstRate: 3.0, secondRate: 2.9, thirdRate: 2.8, contractId: "0", parties: none }
ergo$ call init()
Response. unit : Unit
State. AccordContractState{stateId: "org.accordproject.cicero.contract.AccordContractState#1"} : AccordContractState
```

You can then invoke clauses of the contract:

```ergo
ergo$ call volumediscount(VolumeDiscountRequest{ netAnnualChargeVolume : 0.1 })
Response. VolumeDiscountResponse{discountRate: 3.0} : VolumeDiscountResponse
ergo$ call volumediscount(VolumeDiscountRequest{ netAnnualChargeVolume : 10.5 })
Response. VolumeDiscountResponse{discountRate: 2.8} : VolumeDiscountResponse
```

You can also invoke the contract without explicitly naming the clause by sending a request. The Ergo engine dispatches that request to the first clause which can handle it:
```ergo
ergo$ send VolumeDiscountRequest{ netAnnualChargeVolume : 0.1 }
Response. VolumeDiscountResponse{discountRate: 3.0} : VolumeDiscountResponse
ergo$ send VolumeDiscountRequest{ netAnnualChargeVolume : 10.5 }
Response. VolumeDiscountResponse{discountRate: 2.8} : VolumeDiscountResponse
```
