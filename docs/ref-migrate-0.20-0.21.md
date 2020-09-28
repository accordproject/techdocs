---
id: ref-migrate-0.20-0.21
title: 0.20 to 0.21
---

The main change between the `0.20` release and the `0.21` release is the new markdown syntax and parser infrastructure based on [`markdown-it`](https://github.com/markdown-it/markdown-it). While most templates designed for `0.20` should still work on `0.21` some change might be needed to the contract or template text to account for the new syntax.

:::note
Before following those migration instructions, make sure to first install version `0.21` of Cicero, as described in the [Install Cicero](started-installation) Section of this documentation.
:::

## Metadata Changes

You should only have to update the Cicero version in the `package.json` for your template to `^0.21.0`. Remember to also increment the version number for the template itself.

#### Example

After those changes, the `accordproject` field in your `package.json` should look as follows (with the `template` field being either `clause` or `contract` depending on the template):
```js
...
    "accordproject": {
        "template": "clause",
        "cicero": "^0.21.0"
    }
...
```

## Text Changes

Both grammar and sample text for the templates has changed to support rich text annotations through CommonMark and a new syntax for variables. You can find complete information about the new syntax in the [Markdown Text](markup-preliminaries) Section of this documentation. For an existing template, you should apply the following changes.

### Text Grammar Changes

1. Variables should be changed from `[{variableName}]` to `{{variableName}}`
2. Formatted variables should be changed to from `[{variableName as "FORMAT"}]` to `{{variableName as "FORMAT"}}`
3. Boolean variables should be changed to use the new block syntax, from `[{"This is a force majeure":?forceMajeure}]` to `{{#if forceMajeure}}This is a force majeure{{/if}}`
4. Nested clauses should be changed to use the new block syntax, from `[{#payment}]As consideration in full for the rights granted herein...[{/payment}]` to `{{#clause payment}}As consideration in full for the rights granted herein...{{/clause}}`

:::note
1. Template text is now interpreted as CommonMark which may lead to unexpected results if your text includes CommonMark characters or structure (e.g., `#` or `##` now become headings; `1.` or `-` now become lists). You should review both the grammar and samples so they follow the proper [CommonMark](https://commonmark.org) rules.
2. The new lexer reserves `{{` instead of reserving `[{` which means you should avoid using `{{` in your text unless for Accord Project variables.
:::

### Text Samples Changes

You should ensure that any changes to the grammar text is reflected in the samples. Any change in the grammar text outside of variables should be applied to the corresponding `sample.md` files as well.

:::note
You can check that the samples and grammar are in agreement by using the `cicero parse` command.
:::

#### Example

Consider the text grammar for the [late delivery and penalty](https://templates.accordproject.org/latedeliveryandpenalty@0.14.1.html) clause:

```md
Late Delivery and Penalty.
In case of delayed delivery[{" except for Force Majeure cases,":? forceMajeure}]
[{seller}] (the Seller) shall pay to [{buyer}] (the Buyer) for every [{penaltyDuration}]
of delay penalty amounting to [{penaltyPercentage}]% of the total value of the Equipment
whose delivery has been delayed. Any fractional part of a [{fractionalPart}] is to be
considered a full [{fractionalPart}]. The total amount of penalty shall not however,
exceed [{capPercentage}]% of the total value of the Equipment involved in late delivery.
If the delay is more than [{termination}], the Buyer is entitled to terminate this Contract.
```

After applying the above rules to the code for the `0.13` version, and identifying the heading for the clause using the new markdown features, the grammar text becomes:

```tem
## Late Delivery and Penalty.

In case of delayed delivery{{#if forceMajeure}} except for Force Majeure cases,{{/if}}
{{seller}} (the Seller) shall pay to {{buyer}} (the Buyer) for every {{penaltyDuration}}
of delay penalty amounting to {{penaltyPercentage}}% of the total value of the Equipment
whose delivery has been delayed. Any fractional part of a {{fractionalPart}} is to be
considered a full {{fractionalPart}}. The total amount of penalty shall not however,
exceed {{capPercentage}}% of the total value of the Equipment involved in late delivery.
If the delay is more than {{termination}}, the Buyer is entitled to terminate this Contract.
```

To make sure the `sample.md` file parses as well, the heading needs to be similarly identified using markdown:
```md
## Late Delivery and Penalty.

In case of delayed delivery except for Force Majeure cases,
"Dan" (the Seller) shall pay to "Steve" (the Buyer) for every 2 days
of delay penalty amounting to 10.5% of the total value of the Equipment
whose delivery has been delayed. Any fractional part of a days is to be
considered a full days. The total amount of penalty shall not however,
exceed 55% of the total value of the Equipment involved in late delivery.
If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.
```

## Model Changes

There should be no model changes required for this version.

## Logic Changes

There should be no logic changes required for this version.

## API Changes

A number of API changes may affect Node.js applications using Cicero or Ergo packages. The main API changes are:
1. Ergo:
   1. `ergo-engine` package
      - the `Engine.execute()` call has been renamed `Engine.trigger()`
2. Cicero:
   1. `cicero-core` package
      - the `TemplateInstance.generateText()` call has been renamed `TemplateInstance.draft` **and is now an `async` call**
      - the `Metadata.getErgoVersion()` call has been removed
   2. `cicero-engine` package
      - the `Engine.execute()` call has been renamed `Engine.trigger()`
      - the `Engine.generateText()` call has been renamed `Engine.draft()`

## Cicero Server Changes

Cicero server API has been changed to reflect the new underlying Cicero engine. Specifically:
1. The `execute` endpoint has been renamed `trigger`
2. The path to the sample has to include the `text` directory, so instead of `execute/templateName/sample.txt` it should use `trigger/templateName/text%2Fsample.md`

#### Example

Following the [README.md](https://github.com/accordproject/cicero/blob/master/packages/cicero-server/README.md) instructions, instead of calling:
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' http://localhost:6001/execute/latedeliveryandpenalty/sample.txt -d '{ "request": { "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest", "forceMajeure": false,"agreedDelivery": "December 17, 2017 03:24:00", "deliveredAt": null, "goodsValue": 200.00 }, "state": { "$class": "org.accordproject.cicero.contract.AccordContractState", "stateId" : "org.accordproject.cicero.contract.AccordContractState#1"}}'
```

You should call:
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' http://localhost:6001/trigger/latedeliveryandpenalty/sample.md -d '{ "request": { "$class": "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest", "forceMajeure": false,"agreedDelivery": "December 17, 2017 03:24:00", "deliveredAt": null, "goodsValue": 200.00 }, "state": { "$class": "org.accordproject.cicero.contract.AccordContractState", "stateId" : "org.accordproject.cicero.contract.AccordContractState#1"}}'
```

