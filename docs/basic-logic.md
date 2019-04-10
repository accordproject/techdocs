---
id: basic-logic
title: A Look at Ergo
---

## Hello World

Each Ergo files is a module. A module is identified by a namespace, and contains declarations (e.g., constants, functions, contracts). Here is the “Hello World!” contract in Ergo:

```ergo
namespace org.accordproject.helloworld

contract HelloWorld over TemplateModel {
  // Simple Clause
  clause greet(request : Request) : Response {
    return Response{ output: "Hello " ++ contract.name ++ " " ++ request.input }
  }
}
```

This declares that this module belongs to the `org.accordproject.helloworld` namespace and contains a single `HelloWorld` contract declaration with one `greet` clause.

It also declares that the contract `HelloWorld` is parameterized over a given `TemplateModel`.

The `TemplateModel` as well as the `Request` and `Response` are types which are specified using [Composer Concerto modeling language](https://github.com/hyperledger/composer-concerto).

The `greet` clause takes a `Request` as input and returns a `Response`.

The code for the `greet` clause returns a new `Response` with a property `output` which is a string containing the property `name` of from the contract (`contract`) and the property `input` from the request (`request`). `++` stands for string concatenation in Ergo.

