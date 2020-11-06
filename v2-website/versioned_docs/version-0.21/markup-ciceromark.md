---
id: markup-ciceromark
title: CiceroMark
original_id: markup-ciceromark
---

CiceroMark is an extension to CommonMark used to write the text in Accord Project contracts. The extension is limited in scope, and designed to help with parsing clauses inside contracts and the result of formulas.

## Blocks

### Clause Blocks

Clause blocks can be used to identify a specific clause within a contract. Contract blocks are written:
```
{{#clause clauseName}}
...Markdown of the clause...
{{/clause}}
```

### Example

For instance, the following is a valid contract text containing a payment clause:

```tem
## Copyright Notices.

Licensee shall ensure that its use of the Work is marked with the appropriate copyright notices specified by Licensor in a reasonably prominent position in the order and manner provided by Licensor. Licensee shall abide by the copyright laws and what are considered to be sound practices for copyright notice provisions in the Territory. Licensee shall not use any copyright notices that conflict with, confuse, or negate the notices Licensor provides and requires hereunder.

{{#clause payment}}
Payment
-------
As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time
fee in the amount of "one hundred US Dollars" (100.0 USD) upon execution of this Agreement, payable as
follows: "bank transfer".
{{/clause}}

## General.

### Interpretation.

For purposes of this Agreement, (a) the words "include," "includes," and "including" are deemed to be followed by the words "without limitation"; (b) the word "or" is not exclusive; and (c) the words "herein," "hereof," "hereby," "hereto," and "hereunder" refer to this Agreement as a whole. This Agreement is intended to be construed without regard to any presumption or rule requiring construction or interpretation against the party drafting an instrument or causing any instrument to be drafted.
```

## Ergo Formulas

Ergo formulas in template text are essentially similar to Excel formulas. They let you create legal text dynamically based on the other variables in your contract.

If your contract contains the result of evaluating a formula, the corresponding text should be written `{{% resultOfFormula %}}` where `resultOfFormula` is the expected result of that formula.

### Example

For instance, the following is a valid contract text for the [fixed rate loan](https://templates.accordproject.org/fixed-interests@0.5.2.html) template:

```tem
## Fixed rate loan

This is a _fixed interest_ loan to the amount of £100,000.00
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{%£667.00%}}
```
