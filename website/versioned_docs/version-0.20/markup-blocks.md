---
id: markup-blocks
title: Block Expressions
original_id: markup-blocks
---

CiceroMark uses block expressions to enable more advanced scenarios, to handle optional or repeated text (e.g., lists), to change the variables in scope for a given section of the text, etc.

Block expressions always have the following syntactic structure: 

```tem
{{#blockName variableName parameters}}
...
{{/blockName}}
```

where `blockName` indicates which kind of block it is (e.g., conditional block or list block), `variableName` indicates the template variable which is in scope within the block. For certain blocks, additional `parameters` can be passed to control the behavior of that block (e.g., the `join` block creates text from a list with an optional separator).

## List Blocks

### Unordered Lists

```tem
{{#ulist rates}}{{volumeAbove}}$ M<= Volume < {{volumeUpTo}}$ M : {{rate}}%{{/ulist}}
```

#### Example

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.volumediscountlist.VolumeDiscountContract",
  "contractId": "19243313-adc2-4ff1-aa41-993816ed2cdc",
  "rates": [
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1,
      "volumeAbove": 0,
      "rate": 3.1
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 10,
      "volumeAbove": 1,
      "rate": 3.1
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 50,
      "volumeAbove": 10,
      "rate": 2.9
    }
  ]
}
```

results in the following markdown text:

```md
- 0.0$ M <= Volume < 1.0$ M : 3.1%
- 1.0$ M <= Volume < 10.0$ M : 3.1%
- 10.0$ M <= Volume < 50.0$ M : 2.9%
```

### Ordered Lists

```tem
{{#olist rates}}{{volumeAbove}}$ M <= Volume < {{volumeUpTo}}$ M : {{rate}}%{{/olist}}
```

#### Example

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.volumediscountlist.VolumeDiscountContract",
  "contractId": "19243313-adc2-4ff1-aa41-993816ed2cdc",
  "rates": [
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1,
      "volumeAbove": 0,
      "rate": 3.1
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 10,
      "volumeAbove": 1,
      "rate": 3.1
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 50,
      "volumeAbove": 10,
      "rate": 2.9
    }
  ]
}
```

results in the following markdown text:
```md
1. 0.0$ M <= Volume < 1.0$ M : 3.1%
2. 1.0$ M <= Volume < 10.0$ M : 3.1%
3. 10.0$ M <= Volume < 50.0$ M : 2.9%
```

## Conditional Blocks

Conditional blocks enables text which depends on a value of a `Boolean` variable in your model:

```tem
{{#if forceMajeure}}This is a force majeure{{/if}}
```

:::note
Conditional blocks replace the notion of conditional variables used in Cicero version `0.13` or earlier. If you need to migrate templates created for a previous version of Cicero, please refer to the [0.13 to 0.20 Migration Guide](ref-migrate-0.13-0.20).
:::

Conditional blocks can also include an `else` branch to indicate that some other text should be use when the value of the variable is `false`:

```tem
{{#if forceMajeure}}This is a force majeure{{else}}This is *not* a force majeure{{/if}}
```

#### Examples

Drafting text with the first conditional block above using the following JSON data:
```json
{
  "$class": "org.accordproject.foo.Status",
  "forceMajeure": true
}
```

results in the following markdown text:

```md
This is a force majeure
```

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.foo.Status",
  "forceMajeure": false
}
```

results in the following markdown text:

```md

```

## Clause Blocks

Blocks can be used to inline a clause's text within a contract template:

```tem
Payment
-------
{{#clause payment}}
As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time
fee in the amount of {{amountText}} ({{amount}}) upon execution of this Agreement, payable as
follows: {{paymentProcedure}}.
{{/clause}}
```

#### Example

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.copyrightlicense.CopyrightLicenseContract",
  "contractId": "944535e8-213c-4649-9e60-cc062cce24e8",
  ...
  "paymentClause": {
    "$class": "org.accordproject.copyrightlicense.PaymentClause",
    "clauseId": "6c7611dc-410c-4134-a9ec-17fb6aad5607",
    "amountText": "one hundred US Dollars",
    "amount": {
      "$class": "org.accordproject.money.MonetaryAmount",
      "doubleValue": 100,
      "currencyCode": "USD"
    },
    "paymentProcedure": "bank transfer"
  }
}
```

results in the following markdown text:

```md
Payment
----

As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time
fee in the amount of "one hundred US Dollars" (100.0 USD) upon execution of this Agreement, payable as
follows: "bank transfer".

```

## With Blocks

A `with` block can be used to changes variables that are in scope in a specific part of a template grammar:

```tem
For the Tenant: {{#with tenant}}{{partyId}}, domiciled at {{address}}{{/with}}
For the Landlord: {{#with landlord}}{{partyId}}, domiciled at {{address}}{{/with}}
```

#### Example

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.rentaldeposit.RentalDepositClause",
  "contractId": "31d817e2-d62a-4b70-b395-acd0d5da09f5",
  "tenant": {
    "$class": "org.accordproject.rentaldeposit.RentalParty",
    "partyId": "Michael",
    "address": "111, main street"
  }
  ...
}
```

results in the following markdown text:

```md
For the Tenant: "Michael", domiciled at "111, main street"
For the Landlord: "Parsa", domiciled at "222, chestnut road"
```

## User Feedback

:::note
Other templating systems, e.g., Handlebars, offer a variety of features which are not currently supported in CiceroMark, such as:
- Iterators Blocks `{{#each}...{{/each}}`
- Comments `{{!-- ... --}}`
- Whitespace control `{{~price~}}`
We welcome user feedback on whether those (or other) features would be useful. Please visit the issues list in the [Cicero](https://github.com/accordproject/cicero) GitHub repository for related discussions or to contribute.
:::

