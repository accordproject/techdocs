---
id: logic-ergo
title: Ergo Overview
original_id: logic-ergo
---

## Language Goals

Ergo aims to: 
- have contracts and clauses as first-class elements of the language
- help legal-tech developers quickly and safely write computable legal contracts
- be modular, facilitating reuse of existing contract or clause logic
- ensure safe execution: the language should prevent run-time errors and non-terminating logic
- be blockchain neutral: the same contract logic can be executed either on and off chain on a variety of distributed ledger technologies
- be formally specified: the meaning of contracts should be well defined so it can be verified, and preserved during execution
- be consistent with the [Accord Project Template Specification](accordproject-specification)

## Design Choices

To achieve those goals the design of Ergo is based on the following
principles:

- Ergo contracts have a class-like structure with clauses akin to methods
- Ergo can handle types (concepts, transactions, etc) defined with the [Concerto Modeling Language](https://github.com/accordproject/concerto) (so called CML models), as mandated by the Accord Project Template Specification
- Ergo borrows from strongly-typed functional programming languages: clauses have a well-defined type signature (input and output), they are functions without side effects
- The compiler guarantees error-free execution for well-typed Ergo programs
- Clauses and functions are written in an expression language with limited expressiveness (it allows conditional and bounded iteration)
- Most of the compiler is written in Coq as a stepping stone for formal specification and verification

## Status

- The current implementation is considered *in development*, we welcome contributions (be it bug reports, suggestions for new features or improvements, or pull requests)
- The current compiler targets JavaScript (either standalone or for use in Cicero Templates and Hyperledger Fabric) and Java (experimental)

## This Guide

Ergo provides a simple expression language to describe computation. From those expressions, one can write functions, clauses, and then whole contract logic. This guide explains most of the Ergo concepts starting from simple expressions all the way to contracts.

Ergo is a _strongly typed_ language, which means it checks that the expressions you use are consistent (e.g., you can take the square root of `3.14` but not of `"pi!"`). The type system is here to help you write better and safer contract logic, but it also takes a little getting used to. This page also introduces Ergo types and how to work with them.

