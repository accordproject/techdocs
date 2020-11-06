---
id: logic-decl
title: Declarations
---

Now that we have values, types, expressions and statements available, we can start writing more complex Ergo logic using by declaring functions, clauses and contracts.

## Constants and functions

It is possible to declare global constants and functions in Ergo:

```ergo
define constant pi = 3.1416
define function area(radius : Double) : Double {
   return pi * radius * radius
}
area(1.5)
```

Global variables can also be declared with a type:

```ergo
define constant pi : Double = 3.1416
```

The return type of functions can be omitted:

```ergo
define function area(radius : Double) {
   return pi * radius * radius
}
area(1.5)
```

## Clauses

In Ergo, a logical clause like the example clause noted below is represented as a “function” (akin to a “method” in languages like Java) that resides within its parent contract (akin to a “class” in a language like Java). 

> Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it is reusable , i.e., it can be used over and over and over again. 
> Functions can be "called" from within other functions or from a clause. 
> Functions have to be declared before they can be used. So functions "encapsulate" a task. They combine statements and expressions carried out as instructions which accomplish a specific task to allow their execution using a single line of code. Most programming languages provide libraries of built in functions (i.e., commonly used tasks like computing the square root of a number). 
> Functions accelerate development and facilitate the reuse of code which performs common tasks. 

The declaration of a Clause that contains the clause’s name, request type and return type collectively referred to as the ‘signature’ of the function. 

### Example Prose

Additionally the Equipment should have proper devices on it to record any shock during transportation as any instance of acceleration outside the bounds of -0.5g and 0.5g. Each shock shall reduce the Contract Price by $5.00

### Syntax

```ergo
    clause fragileGoods(request : DeliveryUpdate) : ContractPrice {
        ... // A statement computing the clause response
    }
```

Inside a contract, the `contract` variable contains the instance of the template model for the current contract.

## Contract Declarations

The legal requirements for a valid contract at law vary by jurisdiction and contract type. The requisite elements that typically necessary for the formation of a legally binding contract are (1) _offer_; (2) _acceptance_; (3) _consideration_; (4) _mutuality of obligation_; (5) _competency and capacity_; and, in certain circumstances, (6) _a written instrument_.

Ergo contacts address consideration, mutuality of obligation, competency and capacity through statements that are described in this document.

Furthermore, an Ergo contract is an immutable written document which obviates a good deal of the issues and conflicts which emerge from existing contracts in use today. In Ergo, a contract:
- represents an agreement between parties creating mutual and enforceable obligations; and
- is a code module that uses conditionals and functions to describe execution by the parties with their obligations. Contracts accept input data either directly from the associated natural language text or through request _transactions_. The contract then uses _clause functions_ to process it, and _return_ a result. 
Once a contract logic has been written within a template, it can be used over and over and over again. 

Instantiated contracts correspond to particular domain agreement. They combine functions and clauses to execute a specific agreement and to allow its automation. Many traditional contracts are “boilerplate” and as such are reusable in their specific legal domain, e.g., sale of goods.

You can declare a contract over a template model as follows. The `TemplateModel` is the data model for the parameters of the contract text.

```ergo
    contract ContractName over TemplateModel {
      clause C1(request : ReqType1) : RespType1 {
        // Statement
      }

      clause C2(request : ReqType2) : RespType2 {
        // Statement
      }
    }
```
 
## Contract State and Obligations

If your contract requires a state, or emits only certain kinds of obligations but not other, you can specify the corresponding types when declaring your contract:

```ergo
    contract ContractName over TemplateModel state MyState {
      clause C1(request : ReqType1) : RespType1 emits MyObligation {
        // Statement
      }

      clause C2(request : ReqType2) : RespType2 {
        // Statement
      }
    }
```

The state is always declared for the whole contract, while obligations can be declared individually for each clause.

