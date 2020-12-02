---
id: spec-overview
title: Overview
original_id: spec-overview
---

This specification defines the structure of Accord Project Templates: legally enforceable natural language text that is bound to executable business logic.

> Version: 0.8 (Working Draft)

## Goals

Accord Project templates bind legally enforceable natural language text to executable business logic. They provide the foundational technology for legal professionals to formalise a set of legally enforceable executable clauses and contracts.

The templates are designed to be easy and quick to create from existing legal contracts by legal professionals, and then made executable by legal technologists or programmers using the [Ergo](logic-ergo) domain specific language.

Templates may support one or more locales, allowing the template to be edited or visualized in different languages, whilst preserving a single locale-neutral executable representation.

Executable clauses are easy to hash for storage in content-based addressing systems (out of scope for this specification).

The [reference engine](https://github.com/accordproject/cicero) for the Accord Project Template Specification is designed to be easily embeddable across a wide-variety of form factors: web, middleware, SaaS, on-blockchain execution and off-blockchain execution.
The templates, clauses and the engine are designed to integrate into a traditional DevOps practices and CI/CD, including unit and system testing and code coverage analysis.

