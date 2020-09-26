---
id: markup-ciceromark
title: CiceroMark
---

## Block Expressions

CiceroMark uses block expressions to identify clauses within the contract text.

### Clause Blocks

Blocks can be used to inline a clause's text within a contract template:

```tem
Payment
-------
{{#clause payment}}
As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time
fee in the amount of "one hundred US Dollars" (100.0 USD) upon execution of this Agreement, payable as
follows: "bank transfer".
{{/clause}}
```

## Ergo Formulas

Ergo formulas in template text are essentially similar to Excel formulas, and enable to create legal text dynamically, based on the other variables in your contract. When your contract expects some part of the text to be the result of evaluating the formula, the corresponding text should be written `{{% resultOfFormula %}}` where `resultOfFormula` can be the expected result of that formula.

### Example

For instance, let us look one more time at [fixed rate loan](https://templates.accordproject.org/fixed-interests-static@0.3.0.html) clause text:

```tem
## Fixed rate loan

This is a _fixed interest_ loan to the amount of £100,000.00
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{%£667.00%}}
```

