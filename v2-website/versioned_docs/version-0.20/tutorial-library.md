---
id: tutorial-library
title: Template Library
original_id: tutorial-library
---

This tutorial explains how to get access, and contribute, to all of the public templates available as part of the the [Accord Project Template Library](https://templates.accordproject.org).

## Setting up

### Prerequisites

Accord Project uses [GitHub](https://github.com/) to maintain its open source template library. For this tutorial, you must first obtain and configure the following dependency:

* [Git](https://git-scm.com): a distributed version-control system for
  tracking changes in source code during software development.
* [Lerna](https://lerna.js.org/): A tool for managing JavaScript projects with multiple packages. You can install lerna by running the following command in your terminal:

```bash
npm install -g lerna@^3.15.0
```

### Clone the template library

Once you have `git` installed on your machine, you can run `git clone` to create a version of all the templates:

```bash
git clone https://github.com/accordproject/cicero-template-library
```

Alternatively, you can download the library directly by visiting the [GitHub Repository for the Template Library](https://github.com/accordproject/cicero-template-library) and use the "Download" button as shown on this snapshot:

![Basic-Library-1](/docs/assets/basic/library1.png)

### Install the Library

Once cloned, you can set up the library for development by running the following commands inside your template library directory:

```bash
lerna bootstrap
```

### Running all the template tests

To check that the installation was successful, you can run all the tests for all the Accord Project templates by running:

```bash
lerna run test
```

## Structure of the Repository

You can see the source code for all public Accord Project templates by looking inside the `./src` directory:

```sh
bash-3.2$ ls src
acceptance-of-delivery
car-rental-tr
certificate-of-incorporation
copyright-license
demandforecast
docusign-connect
docusign-po-failure
eat-apples
empty
empty-contract
fixed-interests
...
```

Each of those templates directories have the same structure, as described in the [Templates Deep Dive](tutorial-templates) Section. For instance for the `acceptance-of-delivery` template:
```
$ cd src/acceptance-of-delivery
$ bash-3.2$ ls -laR
./README.md
./package.json

./text:
  ./grammar.tem.md
  ./sample.md

./logic:
   logic.ergo

./model:
   model.cto

./test:
  logic.feature
  logic_default.feature

./request.json
./state.json
```

## Use a Template

To use a template, simply run the same Cicero commands we have seen in the previous tutorials. For instance, to extract the deal data from the `./text/sample.md` text sample for the `acceptance-of-delivery` template, run:

```bash
cicero parse --template ./src/acceptance-of-delivery
```
You should see a response as follows:
```json
{
  "$class": "org.accordproject.acceptanceofdelivery.AcceptanceOfDeliveryClause",
  "clauseId": "9ed9d255-3bb6-4928-be7b-c6305e083246",
  "shipper": "Party A",
  "receiver": "Party B",
  "deliverable": "Widgets",
  "businessDays": 10,
  "attachment": "Attachment X"
}
```

Or, to extract the deal data from the `./text/sample.md` then send the default request in `./request.json` for the `latedeliveryandpenalty` template, run:
```bash
cicero trigger --template ./src/latedeliveryandpenalty
```
You should see a response as follows:

```json
{
  "clause": "latedeliveryandpenalty@0.15.0-988570f09c5da08526a2c0a3bf9a5b6226c6265c267a60be62fdeaeb44661ee3",
  "request": {
    "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
    "forceMajeure": false,
    "agreedDelivery": "2017-12-17T03:24:00-05:00",
    "deliveredAt": null,
    "goodsValue": 200
  },
  "response": {
    "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyResponse",
    "penalty": 110.00000000000001,
    "buyerMayTerminate": true,
    "transactionId": "1e285c3f-0394-4543-aa67-c324d9ad5b6f",
    "timestamp": "2019-11-04T00:05:43.923Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": [
    {
      "$class": "org.accordproject.cicero.runtime.PaymentObligation",
      "amount": {
        "$class": "org.accordproject.money.MonetaryAmount",
        "doubleValue": 110.00000000000001,
        "currencyCode": "USD"
      },
      "description": "Dan should pay penalty amount to Steve",
      "contract": "resource:org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyContract#4be4de30-0aeb-47c6-8791-3a64f4491437",
      "promisor": "resource:org.accordproject.cicero.contract.AccordParty#Dan",
      "promisee": "resource:org.accordproject.cicero.contract.AccordParty#Steve",
      "eventId": "valid",
      "timestamp": "2019-11-04T00:05:43.925Z"
    }
  ]
}
```

## Contribute a New Template

To contribute a change to the Accord Project library, please [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and then create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Note that templates should have unit tests. See any of the `./test` directories in the templates contained in the template library for an examples with unit tests, or consult the [Testing Reference](ref-testing) Section of this documentation.

