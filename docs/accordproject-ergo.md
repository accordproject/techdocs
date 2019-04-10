---
id: accordproject-ergo
title: Introduction to Ergo
---

Ergo is a domain-specific language (DSL) that captures the execution logic of *legal* contracts. 

A DSL is a computer language that's targeted to a particular kind of problem, rather than a general-purpose language that's aimed at any kind of software problem. For example, HTML is a DSL targeted at developing web pages. Similarly, Ergo is a DSL that captures the execution logic of legal contracts. Ergo is intended to be accessible to Lawyers who create the corresponding prose for computable legal contracts. 

It is important that a developer and a lawyer can together agree that clauses in a computable legal contract have the same semantics as the equivalent Ergo code. However, as a programming language, the Ergo syntax also respects programming conventions.

## Language Goals

Ergo aims to: 
- have contracts and clauses as first-class elements of the language
- help legal-tech developers quickly and safely write computable legal contracts
- be modular, facilitating reuse of existing contract or clause logic
- ensure safe execution: the language should prevent run-time errors and non-terminating logic
- be blockchain neutral: the same contract logic can be executed either on and off chain on a variety of distributed ledger technologies
- be formally specified: the meaning of contracts should be well defined so it can be verified, and preserved during execution
- be consistent with the [Accord Project Template Specification](accordproject-specification)

## Design choices

To achieve those goals the design of Ergo is based on the following
principles:

- Ergo contracts have a class-like structure with clauses akin to methods
- Ergo can handle types (concepts, transations, etc) defined with the [Composer Concerto Modeling Language](https://github.com/hyperledger/composer-concerto) (so called CML models), as mandated by the Accord Project Template Specification
- Ergo borrows from strongly-typed functional programming languages: clauses have a well-defined type signature (input and output), they are functions without side effects
- The compiler guarantees error-free execution for well-typed Ergo programs
- Clauses and functions are written in an expression language with limited expressiveness (it allows conditional and bounded iteration)
- Most of the compiler is written in Coq as a stepping stone for formal specification and verification

## Status

- The current implementation is considered *in development*, we welcome contributions (be it bug reports, suggestions for new features or improvements, or pull requests)
- The currently compiler targets JavaScript (either standalone or for use in Cicero Templates and Hyperledger Fabric) and Java (experimental)

