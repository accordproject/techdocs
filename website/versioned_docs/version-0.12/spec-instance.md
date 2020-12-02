---
id: spec-instance
title: Template Instantiation
original_id: spec-instance
---

## Contract

A contract is an instance of a Contract Template, where the variables for the template have been set to specific values. A Contract may be instantiated by either parsing natural language text that conforms to the structure of the template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the template.

A Contract is composed of a set of Clauses. A Contract may have a state. Many contracts require state, for example, to remember the last time a contracting party made a payment. A contract may optionally be attached to a state object, giving the logic of the contract read and write access to the contract state.

## Clause 

Clause is an instance of a Clause Template, where the variables for the template have been set to specific values.
A Clause may be instantiated by either parsing natural language text that conforms to the structure of the 
template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the
template.

The logic for a Clause is implemented as a function, each of which takes a request and produces a response. The logic for a clause may optionally emit events. A clause has access to the properties and the state of its owning contract.

