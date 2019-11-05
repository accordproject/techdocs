---
id: markup-blocks
title: Block Expressions
---

CiceroMark uses block expressions to enable more advanced scenarios, such as to handle optional or repeated text (e.g., lists), or to change the variable in scope for a given section of the text, etc.

Blocks always have the following syntactic structure: 

```tem
{{#kind scope parameters}}
...
{{/kind}}
```

where `kind` indicates which kind of block it is (e.g., conditional block or list block), `scope` indicates the template variables which is in scope within the block. For certain blocks, additional `parameters` can be passed to control the behavior of that block (e.g., the `join` block creates text from a list with an optional separator).

### Unordered Lists

```tem
{{#ulist rates}}
{{volumeAbove}}$ million <= Volume < {{volumeUpTo}}$ million : {{rate}}%
{{/ulist}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

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
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 500,
      "volumeAbove": 50,
      "rate": 2.5
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1000,
      "volumeAbove": 500,
      "rate": 1.2
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1000000,
      "volumeAbove": 1000,
      "rate": 0.1
    }
  ]
}
```

Which results in the following markdown text:

```md
- 0.0$ million <= Volume < 1.0$ million : 3.1%
- 1.0$ million <= Volume < 10.0$ million : 3.1%
- 10.0$ million <= Volume < 50.0$ million : 2.9%
- 50.0$ million <= Volume < 500.0$ million : 2.5%
- 500.0$ million <= Volume < 1000.0$ million : 1.2%
- 1000.0$ million <= Volume < 1000000.0$ million : 0.1%
```

### Ordered Lists

```tem
{{#olist rates}}
{{volumeAbove}}$ million <= Volume < {{volumeUpTo}}$ million : {{rate}}%
{{/olist}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

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
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 500,
      "volumeAbove": 50,
      "rate": 2.5
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1000,
      "volumeAbove": 500,
      "rate": 1.2
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1000000,
      "volumeAbove": 1000,
      "rate": 0.1
    }
  ]
}
```

Which results in the following markdown text:

```md
1. 0.0$ million <= Volume < 1.0$ million : 3.1%
1. 1.0$ million <= Volume < 10.0$ million : 3.1%
1. 10.0$ million <= Volume < 50.0$ million : 2.9%
1. 50.0$ million <= Volume < 500.0$ million : 2.5%
1. 500.0$ million <= Volume < 1000.0$ million : 1.2%
1. 1000.0$ million <= Volume < 1000000.0$ million : 0.1%
```

### Joined Lists

You create a list with a delimiter
```tem
{{#join rates ","}}
{{volumeUpTo}}
{{/join}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

```json
{
  "$class": "org.accordproject.volumediscountlist.VolumeDiscountContract",
  "contractId": "19243313-adc2-4ff1-aa41-993816ed2cdc",
  "rates": [
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1.5,
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
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 500,
      "volumeAbove": 50,
      "rate": 2.5
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 1000,
      "volumeAbove": 500,
      "rate": 1.2
    },
    {
      "$class": "org.accordproject.volumediscountlist.RateRange",
      "volumeUpTo": 5000,
      "volumeAbove": 1000,
      "rate": 0.1
    }
  ]
}
```

Which results in the following markdown text:

```md
1.5, 10.0, 50.0, 500.0, 1000.0, 5000.0
```

### Clauses

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

### With

A `with` block can be utilized to set a context for the variable:

```tem
{{#with author}}
{{firstName}} {{lastName}}
{{/with}}
```

This enables a simpler approach to defining different values from the same object. Otherwise, we made need to use a [nested path computed expression](https://docs.accordproject.org/docs/markup-expr.html#nested-paths) for a slightly more verbose approach:

```tem
{{% author.firstName %}} {{% author.lastName %}}
```

### Conditionals

On the cusp of Block Variables without venturing into Ergo Expressions, we have support for defining a block with built in conditional logic:

```tem
{{#if forceMajeure}}
This is a force majeure
{{/if}}

{{#if isActive}}
  I'm active
{{else}}
  I'm not active
{{/if}}
```

Currently Unsupported
---

Handlebars offers some additional functionality which is not currently supported in CiceroMark, such as:

- Iterators Blocks `{{#each}...{{/each}}`
- Comments `{{!-- ... --}}`
- Whitespace control `{{~price~}}`

We welcome user feedback on whether those (or others) would be useful to support in the feature. Please visit the [Cicero](https://github.com/accordproject/cicero) repository to contribute.

