---
id: version-0.22-tutorial-library
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
npm install -g lerna
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
bill-of-lading
car-rental-tr
certificate-of-incorporation
company-information
contact-information
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
  "shipper": "resource:org.accordproject.organization.Organization#Party%20A",
  "receiver": "resource:org.accordproject.organization.Organization#Party%20B",
  "deliverable": "Widgets",
  "businessDays": 10,
  "attachment": "Attachment X",
  "clauseId": "f1b1434b-8500-4672-8678-7c5003d8d66b",
  "$identifier": "f1b1434b-8500-4672-8678-7c5003d8d66b"
}
```

Or, to extract the deal data from the `./text/sample.md` then send the default request in `./request.json` for the `latedeliveryandpenalty` template, run:
```bash
cicero trigger --template ./src/latedeliveryandpenalty
```
You should see a response as follows:

```json
{
  "clause": "latedeliveryandpenalty@0.17.0-a4e00f4f161e2d343a239a6854bfce92ecd16d891f8e7bc5a5adaab46d242782",
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
    "$timestamp": "2021-06-16T12:26:18.031-04:00"
  },
  "state": {
    "$class": "org.accordproject.runtime.State",
    "$identifier": "54810499-acad-4a3a-9f78-684b0a3bef65"
  },
  "emit": [
    {
      "$class": "org.accordproject.obligation.PaymentObligation",
      "amount": {
        "$class": "org.accordproject.money.MonetaryAmount",
        "doubleValue": 110.00000000000001,
        "currencyCode": "USD"
      },
      "description": ""resource:org.accordproject.party.Party#Dan" should pay penalty amount to "resource:org.accordproject.party.Party#Steve"",
      "$identifier": "a9482b16-c0dc-4e09-86bc-60bb59b07523",
      "contract": "resource:org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyContract#3fecad6b-442c-49d1-99d8-b963616f61d2",
      "promisor": "resource:org.accordproject.party.Party#Dan",
      "promisee": "resource:org.accordproject.party.Party#Steve",
      "$timestamp": "2021-06-16T12:26:18.032-04:00"
    }
  ]
}
```

## Contribute a New Template

To contribute a change to the Accord Project library, please [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and then create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Note that templates should have unit tests. See any of the `./test` directories in the templates contained in the template library for an examples with unit tests, or consult the [Testing Reference](ref-testing) Section of this documentation.

