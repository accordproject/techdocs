---
id: ref-migrate-0.13-0.20
title: 0.13 to 0.20
---

Much has changed in the `0.20` release. This guide provides step-by-step instructions to port your Accord Project templates from version `0.13` or earlier to version `0.20`.

:::note
Before following those migration instructions, make sure to first install version `0.20` of Cicero, as described in the [Install Cicero](started-installation) Section of this documentation.
:::

## Metadata Changes

You will first need to update the `package.json` in your template. Remove the Ergo version which is now unnecessary, and change the Cicero version to `^0.20.0`.

#### Example

After those changes, the `accordproject` field in your `package.json` should look as follows (with the `template` field being either `clause` or `contract` depending on the template):
```js
...
    "accordproject": {
        "template": "clause",
        "cicero": "^0.20.0"
    }
...
```

## Template Directory Changes

The layout of templates has changed to reflect the conceptual notion of Accord Project templates (as a triangle composed of text, model and logic). To migrate a template directory from version `0.13` or earlier to the new `0.20` layout:
1. Rename your `lib` directory to `logic`
2. Rename your `models` directory to `model`
3. Rename your `grammar` directory to `text`
4. Rename your template grammar from `text/template.tem` to `text/grammar.tem.md`
5. Rename your samples from `sample.txt` to `text/sample.md` (or generally any other `sample*.txt` files to `text/sample*.md`)

#### Example

Consider the [late delivery and penalty](https://templates.accordproject.org/latedeliveryandpenalty@0.14.1.html) clause. After applying those changes, the template directory should look as follows:
```
./.cucumber.js
./README.md
./package.json
./request-forcemajeure.json
./request.json
./state.json

./logic:
./logic/logic.ergo

./model:
./model/clause.cto

./test:
./test/logic.feature
./test/logic_default.feature

./text:
./text/grammar.tem.md
./text/sample-noforcemajeure.md
./text/sample.md
```

## Text Changes

Both grammar and sample text for the templates has changed to support rich text annotations through CommonMark and a new syntax for variables. You can find complete information about the new syntax in the [CiceroMark](markup-cicero) Section of this documentation. For an existing template, you should apply the following changes.

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

:::tip
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

There is no model changes required for this version.

## Logic Changes

Version `0.20` of Ergo has a few new features that are non backward compatible with version `0.13`. Those may require you to change your template logic. The main non-backward compatible feature is the new support for enumerated values.

### Enumerated Values

Enumerated values are now proper values with a proper enum type, and not based on the type `String` anymore.

For instance, consider the enum declaration:
```js
enum Cardsuit {
  o CLUBS
  o DIAMONDS
  o HEARTS
  o SPADES
}
```

In version `0.13` or earlier the Ergo code would write `"CLUBS"` for an enum value and treat the type `Cardsuit` as if it was the type `String`.

As of version `0.20` Ergo writes `CLUBS` for that same enum value and the type `Cardsuit` is now distinct from the type `String`.

If you try to compile Ergo logic written for version `0.13` or earlier that features enumerated values, the compiler will likely throw type errors. You should apply the following changes:

1. Remove the quotes (`"`) around any enum values in your logic. E.g., `"USD"` should now be replaced by `USD` for monetary amounts;
3. If enum values are bound to variables with a type annotation, you should change the type annotation from `String` to the correct enum type. E.g., `let x : String = "DIAMONDS"; ...` should become `let x : Cardsuit = DIAMONDS; ...`;
3. If enum values are passed as parameters in clauses or functions, you should change the type annotation for that parameter from `String` to the correct enum type.
4. In a few cases the same enumerated value may be used in different enum types (e.g., `days` and `weeks` are used in both `TemporalUnit` and `PeriodUnit`). Those two values will now have different types. If you need to distinguish, you can use the fully qualified name for the enum value (e.g., `~org.accordproject.time.TemporalUnit.days` or `~org.accordproject.time.PeriodUnit.days`).

### Other Changes

1. `now` used to return the current time but is treated in `0.20` like any other variables. If your logic used the variable `now` without declaring it, this will raise a `Variable now not found` error. You should change your logic to use the `now()` function instead.

#### Example

Consider the Ergo logic for the [acceptance of delivery](https://templates.accordproject.org/acceptance-of-delivery@0.12.1.html) clause. Applying the above rules to the code for the `0.13` version:

```ergo
  clause acceptanceofdelivery(request : InspectDeliverable) : InspectionResponse {

    let received = request.deliverableReceivedAt;
    enforce isBefore(received,now) else
      throw ErgoErrorResponse{ message : "Transaction time is before the deliverable date." }
    ;

    let dur =
      Duration{
        amount: contract.businessDays,
        unit: "days"
      };
    let status =
      if isAfter(now(), addDuration(received, dur))
      then "OUTSIDE_INSPECTION_PERIOD"
      else if request.inspectionPassed
      then "PASSED_TESTING"
      else "FAILED_TESTING"
    ;
    return InspectionResponse{
      status : status,
      shipper : contract.shipper,
      receiver : contract.receiver
    }
  }
```

results in the following new logic for the `0.20` version:

```ergo
  clause acceptanceofdelivery(request : InspectDeliverable) : InspectionResponse {

    let received = request.deliverableReceivedAt;
    enforce isBefore(received,now()) else                // changed to now()
      throw ErgoErrorResponse{ message : "Transaction time is before the deliverable date." }
    ;

    let dur =
      Duration{
        amount: contract.businessDays,
        unit: ~org.accordproject.time.TemporalUnit.days  // enum value with fully qualified name
      };
    let status =
      if isAfter(now(), addDuration(received, dur))      // changed to now()
      then OUTSIDE_INSPECTION_PERIOD                     // enum value has no quotes
      else if request.inspectionPassed
      then PASSED_TESTING                                // enum value has no quotes
      else FAILED_TESTING                                // enum value has no quotes
    ;
    return InspectionResponse{
      status : status,
      shipper : contract.shipper,
      receiver : contract.receiver
    }
  }
```

## Command Line Changes

The Command Line interface for Cicero and Ergo has been completely overhauled for consistency. Release `0.20` also features new command line interfaces for Concerto and for the new `markdown-transform` project.

If you are familiar with the previous Accord Project command line interfaces (or if you have scripts relying on the previous version of the command line), here is a list of changes:

1. Ergo: A single new `ergo` command replaces both `ergoc` and `ergorun`
   - `ergoc` has been replaced by `ergo compile`
   - `ergorun execute` has been replaced by `ergo trigger`
   - `ergorun init` has been replaced by `ergo initialize`
   - All other `ergorun <command>` commands should use `ergo <command>` instead
2. Cicero:
   - The `cicero execute` command has been replaced by `cicero trigger`
   - The `cicero init` command has been replaced by `cicero initialize`
   - The `cicero generateText` command has been replaced by `cicero draft`
   - the `cicero generate` command has been replaced by `cicero compile`

Note that several options have been renamed for consistency as well. Some of the main option changes are:
1. `--out` and `--outputDirectory` have both been replaced by `--output`
2. `--format` has been replaced by `--target` in the new `cicero compile` command
3. `--contract` has been replaced by `--data` in all `ergo` commands

For more details on the new command line interface, please consult the corresponding [Cicero CLI](cicero-cli), [Concerto CLI](concerto-cli), [Ergo CLI](ergo-cli), and [Markus CLI](markus-cli) Sections in the reference manual.

## API Changes

A number of API changes may affect Node.js applications using Cicero or Ergo packages. The main API changes are:
1. Ergo:
   1. `@accordproject/ergo-engine` package
      - the `Engine.execute()` call has been renamed `Engine.trigger()`
2. Cicero:
   1. `@accordproject/cicero-core` package
      - the `TemplateInstance.generateText()` call has been renamed `TemplateInstance.draft` **and is now an `async` call**
      - the `Metadata.getErgoVersion()` call has been removed
   2. `@accordproject/cicero-engine` package
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

