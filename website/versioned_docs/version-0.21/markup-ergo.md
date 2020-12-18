---
id: markup-ergo
title: Ergo Expressions
original_id: markup-ergo
---

CiceroMark allows you to embed computation inside the text of your contract or clause, in the form of Ergo expressions.

## Syntax

Ergo expressions in template text are essentially similar to Excel formulas, and enable to create legal text dynamically, based on the other variables in your contract. They are written `{{% ergoExpression %}}` where `ergoExpression` is any valid [Ergo Expression](logic-ergo).

## Evaluation Context

The context in which expressions within templates text are evaluated includes:
- The contract variables, which can be accessed using the variable name (or `contract.variableName`)
- All constants or functions declared or imported in the main [Ergo module](logic-module) for your template.

#### Fixed Interests Clause

For instance, let us look one more time at [fixed rate loan](https://templates.accordproject.org/fixed-interests-static@0.2.0.html) clause that was used previously:

```tem
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}
```

The [`logic` directory](https://github.com/accordproject/cicero-template-library/tree/master/src/fixed-interests/logic) for that template includes two Ergo modules:
```
./logic/interests.ergo  // Module containing the monthlyPaymentFormula function
./logic/logic.ergo      // Main module
```

A look inside the `logic.ergo` module shows the corresponding import, which ensures the `monthlyPaymentFormula` function is also in scope in the text for the template:
```
namespace org.accordproject.interests

import org.accordproject.loan.interests.*

contract Interests over TemplateModel {
  ...
}
```

## Other Examples

Ergo provides a wide range of capabilities which you can use to construct the text that should be included in the final clause or contract. Below are a few examples for illustrations, but we encourage you to consult the [Ergo Logic](logic-ergo) guide for a more comprehensive overview of Ergo.

### Path expressions

The contents of complex values can be accessed using the `.` notation.

#### Example

For instance the following template uses the `.` notation to access the first name and last name of the contract author.

```tem
This contract was drafted by {{% author.name.firstName %}} {{% author.name.lastName %}}
```

### Built-in Functions

Ergo offers a number of pre-defined functions for a variety of primitive types. Please consult the [Ergo Standard Library](ref-logic-stdlib) reference for the complete list of built-in functions.

#### Example

For instance the following template uses the `addPeriod` function to automatically include the date at which a lease expires in the text of the contract:

```tem
This lease was signed on {{signatureDate}}, and is valid for a {{leaseTerm}} period.
This lease will expire on {{% addPeriod(signatureDate, leaseTerm) %}}`
```

### Iterators

Ergo's `foreach` expressions lets you iterate over collections of values.

#### Example

For instance the following template uses a `foreach` expression combined with the `avg` built-in function to include the average product price in the text of the contract:

```tem
The average price of the products included in this purchase
order is {{% avg(foreach p in products return p.price) %}}.
```

### Conditionals

Conditional expressions lets you include alternative text based on arbitrary conditions.

#### Example

For instance, the following template uses a conditional expression to indicate the governing jurisdiction:

```tem
Each party hereby irrevocably agrees that process may be served on it in
any manner authorized by the Laws of {{%
    if address.country = US and getYear(now()) > 1959
    then "the State of " ++ address.state
    else "the Country of " ++ address.country
%}}
```

