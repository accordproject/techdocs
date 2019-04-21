---
id: version-0.12.0-ref-testing
title: Testing Reference
original_id: ref-testing
---

Cicero uses Cucumber for writing template tests, which provides a human readable syntax.

This documents the syntax available to write Cicero tests.

## Example

```bash
Feature: Late delivery contract
  This describe the expected behavior for the Accord Project's late delivery and penalty contract

  Background:
    Given that the contract says
"""
Late Delivery and Penalty. In case of delayed delivery except for Force Majeure cases, "Dan" (the Seller) shall pay to "Steve" (the Buyer) for every 2 days of delay penalty amounting to 10.5% of the total value of the Equipment whose delivery has been delayed. Any fractional part of a days is to be considered a full days. The total amount of penalty shall not however, exceed 55% of the total value of the Equipment involved in late delivery. If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.
"""

  Scenario: The contract should not allow the late delivery clause to be triggered when the delivery is on time
    When the current time is "2019-01-11T16:34:00-05:00"
    And it receives the request
"""
{
    "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
    "forceMajeure": false,
    "agreedDelivery": "2019-01-31 03:24:00Z",
    "deliveredAt": null,
    "goodsValue": 200.00
}
"""
    Then it should reject the request with the error "Cannot exercise late delivery before delivery date"

  Scenario: The contract should return the penalty amount but not allow the buyer to terminate
    When the current time is "2019-01-16T16:34:00-05:00"
    And it receives the request
"""
{
    "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
    "forceMajeure": false,
    "agreedDelivery": "2019-01-11T03:24:00Z",
    "deliveredAt": null,
    "goodsValue": 200.00
}
"""
    Then it should respond with
"""
{
  "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyResponse",
  "buyerMayTerminate": false,
  "penalty": 52.5
}
"""

  Scenario: The contract should return the penalty amount and allow the buyer to terminate
    When the current time is "2019-01-11T16:34:00-05:00"
    And it receives the request
"""
{
    "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
    "forceMajeure": false,
    "agreedDelivery": "2018-01-31 03:24:00Z",
    "deliveredAt": null,
    "goodsValue": 200.00
}
"""
    Then it should respond with
"""
{
  "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyResponse",
  "buyerMayTerminate": true,
  "penalty": 110.00000000000001
}
"""
    And the following obligations should have been emitted
"""
[
    {
      "$class": "org.accordproject.cicero.runtime.PaymentObligation",
      "amount": {
        "$class": "org.accordproject.money.MonetaryAmount",
        "doubleValue": 110.00000000000001,
        "currencyCode": "USD"
      },
      "description": "Dan should pay penalty amount to Steve",
      "promisor": "resource:org.accordproject.cicero.contract.AccordParty#Dan",
      "promisee": "resource:org.accordproject.cicero.contract.AccordParty#Steve",
      "eventId": "valid"
    }
]
"""
```

## cicero execute

Loads a template from a directory on disk and then attempts to create a clause (or contract)from a given input
text. If the clause (or contract) is successfully created, it is then executed by the engine, passing in JSON data. If successful the
engine response is printed to the console.

```bash
   cicero execute

   Options:
     --help         Show help                                             [boolean]
     --version      Show version number                                   [boolean]
     --template     path to the directory with the template                [string]
     --sample       path to the clause text                                [string]
     --request      path to the JSON request                                [array]
     --state        path to the JSON state                                 [string]
     --verbose, -v                                                 [default: false]
```

## cicero archive

Creates a Cicero Template Archive (.cta) file from a template stored in a local directory.

```sh
    cicero archive

    Options:
      --help         Show help                                             [boolean]
      --version      Show version number                                   [boolean]
      --template     path to the directory with the template                [string]
      --archiveFile  file name for the archive                              [string]
      --verbose, -v                                                 [default: false]
```

## cicero generate

Loads a template from a directory on disk and then attempts to generate versions of the template model in the specified format.
The available formats include: `Go`, `PlantUML`, `Typescript`, `Java`, and `JSONSchema`.

```bash
   cicero generate

   Options:
     --help             Show help                                         [boolean]
     --version          Show version number                               [boolean]
     --template         path to the directory with the template
                                                            [string] [default: "."]
     --format           format of the code to generate
                                                   [string] [default: "JSONSchema"]
     --outputDirectory  output directory path       [string] [default: "./output/"]
     --verbose, -v                                                 [default: false]
```
