---
id: ref-markup
title: Markup Reference
original_id: ref-markup
---

## Markup Syntax

A template is UTF-8 text with markup to introduce named variables. Each variable starts with `[{` and ends with `}]`. There are three kinds of variables:
- Standard variables
- Formatted variables
- Boolean variables

### Standard Variables

Standard variables are written `[{variableName}]` where `variableName` is a variable declared in the model.

The following example shows a template text with three variables (`buyer`, `amount`, and `seller`):

```md
Upon the signing of this Agreement, [{buyer}] shall pay [{amount}] to [{seller}].
```

### Formatted Variables

Formatted variables are written `[{variableName as "FORMAT"}]` where `variableName` is a variable declared in the model and the `FORMAT` is a type-dependent description for the syntax of the variables in the contract.

The following example shows a template text with one variable with a format `DD/MM/YYYY`.

```md
The contract was signed on [{contractDate as "DD/MM/YYYY"}].
```

### Boolean Variables

Boolean variables are written `[{"OPTIONALTEXT":? variableName}] where `variableName` is a variable declared in the model and `OPTIONALTEXT` is text that is optionally present in the contract.

## Instance Text

A template defines the set of clauses or contracts instances which are valid against that template. An instance is UTF-8 text without markup, where variables have been replaced by values.

Except for variables, the instance text has to exactly match the text in the template. The syntax of a value in the instance text for each variable `variableName` depends on the type of that variable.

## String Variable

### Description

If the variable `variableName` has type `String` in the model:
```ergo
o String variableName
```
The corresponding instance should contain text between quotes (`"`).

### Examples

For example, consider the following model:

```md
asset Template extends AccordClause {
  o String buyer
  o String supplier
}
```

the following instance text:
```md
This Supply Sales Agreement is made between "Steve Supplier" and "Betty Byer".
```

matches the template:
```md
This Supply Sales Agreement is made between [{supplier}] and [{buyer}].
```

while the following instance texts do not match:
```md
This Supply Sales Agreement is made between 2019 and 2020.
```
or
```md
This Supply Sales Agreement is made between Steve Supplier and Betty Byer.
```

## Numeric Variable

### Description

If the variable `variableName` has type `Double`, `Integer` or `Long` in the model:
```ergo
o Double variableName
o Integer variableName2
o Long variableName3
```
The corresponding instance should contain the corresponding number.

### Examples

For example, consider the following model:

```md
asset Template extends AccordClause {
  o Double penaltyPercentage
}
```

the following instance text:
```md
The penalty amount is 10.5% of the total value of the Equipment whose delivery has been delayed.
```

matches the template:
```md
The penalty amount is [{penaltyPercentage}]% of the total value of the Equipment whose delivery has been delayed.
```

while the following instance texts do not match:
```md
The penalty amount is ten% of the total value of the Equipment whose delivery has been delayed.
```
or
```md
The penalty amount is "10.5"% of the total value of the Equipment whose delivery has been delayed.
```

## DateTime Variables

### Description

If the variable `variableName` has type `DateTime`:
```ergo
o DateTime variableName
```
The corresponding instance should contain the corresponding date using the format `MM/DD/YYYY`, commonly used in the US.

### DateTime Formats

DateTime format can be customized inline in a template grammar by including an optional format string using the `as` keyword. The following formatting tokens are supported:

Tokens are case-sensitive.

```md
Input        Example.           Description

YYYY         2014               4 or 2 digit year
YY           14                 2 digit year
M            12                 1 or 2 digit month number
MM           04                 2 digit month number
MMM          Feb.               Short month name
MMMM         December           Long month name
D            3                  1 or 2 digit day of month
DD           04                 2 digit day of month
H            3                  1 or 2 digit hours
HH           04                 2 digit hours
mm           59                 2 digit minutes
ss           34                 2 digit seconds
SSS          002                3 digit milliseconds
Z            +01:00             UTC offset
```

> Note that if `Z` is specified, it must occur as the last token in the format string.

### Examples

The format of the `contractDate` variable of type `DateTime` can be specified with the `DD/MM/YYYY` format, as is commonly used in Europe.

```md
The contract was signed on [{contractDate as "DD/MM/YYYY"}].
The contract was signed on 26/04/2019.
```

Other examples:

```md
dateTimeProperty: [{dateTimeProperty as "D MMM YYYY HH:mm:ss.SSSZ"}]
dateTimeProperty: 1 Jan 2018 05:15:20.123+01:02
```

```md
dateTimeProperty: [{dateTimeProperty as "D MMMM YYYY HH:mm:ss.SSSZ"}]
dateTimeProperty: 1 January 2018 05:15:20.123+01:02
```

```md
dateTimeProperty: [{dateTimeProperty as "D-M-YYYY H mm:ss.SSSZ"}]
dateTimeProperty: 31-12-2019 2 59:01.001+01:01
```

```md
dateTimeProperty: [{dateTimeProperty as "DD/MM/YYYY"}]
dateTimeProperty: 01/12/2018
```

```md
dateTimeProperty: [{dateTimeProperty as "DD-MMM-YYYY H mm:ss.SSSZ"}]
dateTimeProperty: 04-Jan-2019 2 59:01.001+01:01
```

## Duration Variables

### Description

If the variable `variableName` has type `Duration`:
```ergo
import org.accordproject.time.Duration
o Duration variableName
```

The corresponding instance should contain the corresponding duration written with the amount as a number and the duration unit as literal text.

### Examples

For example, consider the following model:
```md
asset Template extends AccordClause {
  o Duration termination
}
```

the following instance texts:
```md
If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.
```
and
```md
If the delay is more than 1 week, the Buyer is entitled to terminate this Contract.
```

both match the template:
```md
If the delay is more than [{termination}], the Buyer is entitled to terminate this Contract.
```

while the following instance texts do not match:
```md
If the delay is more than a month, the Buyer is entitled to terminate this Contract.
```
or
```md
If the delay is more than "two weeks", the Buyer is entitled to terminate this Contract.
```

## Enumerated Variables

### Decription

If the variable `variableName` has an enumerated type:
```ergo
o EnumType variableName
```

The corresponding instance should contain a corresponding enumerated value without quotes.

### Examples

For example, consider the following model:
```
import org.accordproject.money.CurrencyCode from https://models.accordproject.org/money.cto
asset Template extends AccordClause {
  o CurrencyCode currency
}

```
the following instance text:
```md
Monetary amounts in this contract are denominated in USD.
```

matches the template:
```md
Monetary amounts in this contract are denominated in [{currency}].
```

while the following instance texts do not match:
```md
Monetary amounts in this contract are denominated in "USD".
```
or
```md
Monetary amounts in this contract are denominated in $.
```

## Complex Variables

### Description

If the variable `variableName` has a complex type `ComplextType` (such as an `asset`, a `concept`, etc.)
```ergo
o ComplextType variableName
```

The corresponding instance should contain all fields in the corresponding complex type in the order they occur in the model, separated by a single white space character.

### Examples

For example, consider the following model:
```md
import org.accordproject.address.PostalAddress from https://models.accordproject.org/address.cto
asset Template extends AccordClause {
  o PostalAddress address
}
```

the following instance text:
```md
Address of the supplier: "555 main street" "10290" "" "NY" "New York" "10001".
```

matches the template:
```md
Address of the supplier: [{address}].
```

Consider the following model:
```md
import org.accordproject.money.MonetaryAmount from https://models.accordproject.org/money.cto
asset Template extends AccordClause {
  o MonetaryAmount amount
}
```

the following instance text:
```md
Total value of the goods: 50 USD.
```

matches the template:
```md
Total value of the goods: [{amount}].
```

