---
id: cicero-concepts
title: Cicero Concepts
---

# Template 

A template is composed of three elements: 

- Template Grammar, the natural language text for the template 
- Template Model, the data model that backs the template 
- Logic, the executable business logic for the template

![Cicero Template](assets/template.png)

When combined these three elements allow templates to be edited, analyzed, queried and executed.

Open Source Accord Project templates are published to the Template Library:
https://templates.accordproject.org

Templates may either be stored on disk in a directory structure, or may be archived into a `.cta` file (Cicero Template Archive).

# Template Grammar 

The template grammar for a template captures the natural language structure of the template. It is
UTF-8 text with markup to introduce named variables.

Here is a simple template grammar:

```
   Late Delivery and Penalty. In case of delayed delivery[{" except for Force
   Majeure cases,":? forceMajeure}] the Seller shall pay to the Buyer for every
   [{penaltyDuration}] of delay penalty amounting to [{penaltyPercentage}]% of
   the total value of the Equipment whose delivery has been delayed. Any
   fractional part of a [{fractionalPart}] is to be considered a full
   [{fractionalPart}]. The total amount of penalty shall not however, exceed
   [{capPercentage}]% of the total value of the Equipment involved in late
   delivery. If the delay is more than [{termination}], the Buyer is entitled to
   terminate this Contract.
```

Variables in template grammars are enclosed in ``[{`` and ``}]``.

# Template Model

The model for a template captures the names and types of the variables. 
Template models are expressed using the [Hyperledger Composer Modeling Language](https://hyperledger.github.io/composer/latest/reference/cto_language.html), a runtime neutral, 
text-based data-definition (schema) language.

Here is a sample template model for a clause template:

```
/**
 * Defines the data model for the LateDeliveryAndPenalty template.
 * This defines the structure of the abstract syntax tree that the parser for the template
 * must generate from input source text.
 */
asset LateDeliveryAndPenaltyClause extends AccordClause {
  /**
   * Does the clause include a force majeure provision?
   */
  o Boolean forceMajeure optional

  /**
   * For every penaltyDuration that the goods are late
   */
  o Duration penaltyDuration

  /**
   * Seller pays the buyer penaltyPercentage % of the value of the goods
   */
  o Double penaltyPercentage

  /**
   * Up to capPercentage % of the value of the goods
   */
  o Double capPercentage

  /**
   * If the goods are >= termination late then the buyer may terminate the contract
   */
  o Duration termination

  /**
   * Fractional part of a ... is considered a whole ...
   */
  o TemporalUnit fractionalPart
}
```

# Template Logic 

The logic for a template is written as a set of Ergo functions. The Ergo functions are
invoked by the Cicero engine when transactions are received for processing and return a response. Both the 
incoming requests and responses are modeled types.

Below is a sample Ergo function that operates *over* the `LateDeliveryAndPenaltyClause` model. It contains a single clause called `latedeliveryandpenalty` that produces a `LateDeliveryAndPenaltyResponse` in response to a `LateDeliveryAndPenaltyRequest`. This contract is stateless and does not emit events. See below for a description of contract state and events.

```
contract LateDeliveryAndPenalty over LateDeliveryAndPenaltyClause {
  clause latedeliveryandpenalty(request : LateDeliveryAndPenaltyRequest) : LateDeliveryAndPenaltyResponse throws Error {
    // Guard against calling late delivery clause too early
    define variable agreed = request.agreedDelivery;
    enforce momentIsBefore(agreed,now()) else
    throw new Error{ message : "Cannot exercise late delivery before delivery date" };
    
    enforce !contract.forceMajeure or !request.forceMajeure else
    return new LateDeliveryAndPenaltyResponse{
      penalty: 0.0,
      buyerMayTerminate: true
    }
    ;

    // Calculate the time difference between current date and agreed upon date
    define variable diff = momentDiffDays(now,agreed);
    // Penalty formula
    define variable penalty =
      (diff / contract.penaltyDuration.amount) * contract.penaltyPercentage/100.0 * request.goodsValue;
    // Penalty may be capped
    define variable capped = min([penalty, contract.capPercentage/100.0 * request.goodsValue]);
    // Return the response with the penalty and termination determination
    return new LateDeliveryAndPenaltyResponse{
      penalty: capped,
      buyerMayTerminate: diff > contract.termination.amount
    }
  }
}
```

You can view and download the latest Late Delivery and Penalty template [here](https://templates.accordproject.org/latedeliveryandpenalty@0.2.0.html).

# Template Library

Templates may be organized into a Template Library, typically stored on GitHub (either public or private).
For example, here is the source of the Open Source Accord Project template library:
https://github.com/accordproject/cicero-template-library

The template library is published to:
https://templates.accordproject.org

# Contract 

Contract is an instance of a Contract Template, where the variables for the template have been set to specific values.
A Contract may be instantiated by either parsing natural language text that conforms to the structure of the 
template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the
template.

A Contract is composed of a set of Clauses. A Contract has state.

# Contract State

Many contracts require state, for example, to remember the last time a contracting party made a payment. A contract may optionally be attached to a state object, giving the logic of the contract read and write access to the contract state.

# Clause 

Clause is an instance of a Clause Template, where the variables for the template have been set to specific values.
A Clause may be instantiated by either parsing natural language text that conforms to the structure of the 
template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the
template.

The logic for a Clause is implemented as a function, each of which takes a request and produces a response. The logic for a clause may optionally emit events. A clause has access to the properties and the state of its owning contract.

# Transaction

Transactions are used to model the interactions between a contract or clause and the real world. Transactions are used for both inbound messages and as the synchronous return values from the logic of clauses or contracts.

Example inbound transactions:

- A party has made a payment
- A party has signed for the goods, accepting delivery
- A temperature sensor reading from a shipping container
- A location of a truck from a GPS sensor

Example return value transactions:

- Cost of shipping the goods (minus late penalty) was $256
- Party A has breached the terms of the contract
- Volume discount for this quarter is now 3.5%

# Event

The logic of a contract or clause may optionally emit events. Events are typically used by the contract to indicate that some asynchronous action should occur in the real-world, such as notifying a party to the contract that they need to take some action, or even, triggering an automated payment or invoice.

# Engine 

Cicero includes a Node.js VM based execution engine. The engine routes incoming transactions to template functions,
performs data validation, executes the functions within a sandboxed environment, and then validates the response
before the response, updated state and emitted events to the caller.

![Execution Context](assets/execution_context.png)