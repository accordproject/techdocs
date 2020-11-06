---
id: spec-execution
title: Contract Execution
original_id: spec-execution
---

## Interfacing the Template with the Outside World

Given the template grammar and the template model above we can now edit (parameterise) the template to create a clause (an instance of the template).

Next we need to ground the template to events that are happening in the real-world: packages are getting shipped, delivered, signed-for etc. We want those transactions to be routed to the template, so that it is aware of them and can take appropriate action. In this case the action is simply to calculate the penalty amount and signal whether the buyer may terminate the contract.

## Transactions

Transactions are used to model the interactions between a contract or clause and the real world. Transactions are used for both inbound messages (requests) and as the synchronous return values (responses) from the logic of clauses or contracts.

### Requests

Example of requests include:

- A party has made a payment
- A party has signed for the goods, accepting delivery
- A temperature sensor reading from a shipping container
- A location of a truck from a GPS sensor

Accord Project uses CML again to define the structure of the data that the template requires from the outside world. For the late delivery and penalty clause, this looks as follows:

```
/**
 * Defines the input data required by the template
 */
transaction LateDeliveryAndPenaltyRequest {

  /**
   * Are we in a force majeure situation? 
   */
  o Boolean forceMajeure

  /**
   * What was the agreed delivery date for the goods?
   */
  o DateTime agreedDelivery

  /**
   * If the goods have been delivered, when were they delivered?
   * the “optional” keyword means that if the goods have not yet been delivered, the deliveredAt parameter may be omitted from the request.
   */
  o DateTime deliveredAt optional

  /**
   * What is the value of the goods?
   */
  o Double goodsValue
}
```

Given an instance of LateDeliveryAndPenaltyRequest the clause can calculate the current penalty amount and whether the buyer may terminate. The result of that calculation can be returned back to the caller as a response.

### Responses

Example responses:

- Cost of shipping the goods (minus late penalty) was $256
- Party A has breached the terms of the contract
- Volume discount for this quarter is now 3.5%

Accord Project uses CML again to define the structure of the data that the template returns to the outside world. For the late delivery and penalty clause, this looks as follows:

```
/**
 * Defines the output data for the template
 */
transaction LateDeliveryAndPenaltyResponse {
  /**
   * The penalty to be paid by the seller.
   * In a scenario where deliveredAt was omitted, we might expect “penalty” to be NULL.
   * Arguably, “penalty” should also be an “optional” type, to distinguish between a scenario where penalty is undefined, and a scenario where penalty is known to be 0.
   */
  o Double penalty

  /**
   * Whether the buyer may terminate the contract 
   */
  o Boolean buyerMayTerminate
}
```

Here we are simply stating that execution this template will produce an instance of LateDeliveryAndPenaltyResponse.

### Event

The logic of a contract or clause may optionally emit events. Events are typically used by the contract to indicate that some asynchronous action should occur in the real-world, such as notifying a party to the contract that they need to take some action, or even, triggering an automated payment or invoice.

## State

A contract template may optionally be stateful, and declare a state type.

## Emitted Types

The logic for a template may optionally emit event types.

