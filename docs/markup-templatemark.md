---
id: markup-templatemark
title: TemplateMark
---

TemplateMark is an extension to CommonMark used to write the text in Accord Project templates. The extension includes new markdown for variables, inline and container elements of the markdown and template formulas.

The kind of extension which can be used is based on the _type_ of the variable in the [Concerto Model](model-concerto) for your template. For each type in your model differrent markdown elements apply: variable markdown for atomic types in the model, list blocks for array types in the model, optional blocks for optional types in the model, etc.

## Variables

Standard variables are written `{{variableName}}` where `variableName` is a variable declared in the model.

The following example shows a template text with three variables (`buyer`, `amount`, and `seller`):

```tem
Upon the signing of this Agreement, {{buyer}} shall pay {{amount}} to {{seller}}.
```

The way variables are handled (both during parsing and drafting) is based on their type.

### String Variable

#### Description

If the variable `variableName` has type `String` in the model:
```ergo
o String variableName
```
The corresponding instance should contain text between quotes (`"`).

#### Examples

For example, consider the following model:

```ergo
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
```tem
This Supply Sales Agreement is made between {{supplier}} and {{buyer}}.
```

while the following instance texts do not match:
```md
This Supply Sales Agreement is made between 2019 and 2020.
```
or
```md
This Supply Sales Agreement is made between Steve Supplier and Betty Byer.
```

### Numeric Variable

#### Description

If the variable `variableName` has type `Double`, `Integer` or `Long` in the model:
```ergo
o Double variableName
o Integer variableName2
o Long variableName3
```
The corresponding instance should contain the corresponding number.

#### Examples

For example, consider the following model:

```ergo
asset Template extends AccordClause {
  o Double penaltyPercentage
}
```

the following instance text:
```md
The penalty amount is 10.5% of the total value of the Equipment whose delivery has been delayed.
```

matches the template:
```tem
The penalty amount is {{penaltyPercentage}}% of the total value of the Equipment whose delivery has been delayed.
```

while the following instance texts do not match:
```md
The penalty amount is ten% of the total value of the Equipment whose delivery has been delayed.
```
or
```md
The penalty amount is "10.5"% of the total value of the Equipment whose delivery has been delayed.
```

### Enum Variables

#### Description

If the variable `variableName` has an enumerated type:
```ergo
o EnumType variableName
```

The corresponding instance should contain a corresponding enumerated value without quotes.

#### Examples

For example, consider the following model:
```ergo
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
```tem
Monetary amounts in this contract are denominated in {{currency}}.
```

while the following instance texts do not match:
```md
Monetary amounts in this contract are denominated in "USD".
```
or
```md
Monetary amounts in this contract are denominated in $.
```

## Formatted Variables

Formatted variables are written `{{variableName as "FORMAT"}}` where `variableName` is a variable declared in the model and the `FORMAT` is a type-dependent description for the syntax of the variables in the contract.

The following example shows a template text with one variable with a format `DD/MM/YYYY`.

```tem
The contract was signed on {{contractDate as "DD/MM/YYYY"}}.
```

### DateTime Variables

#### Description

If the variable `variableName` has type `DateTime`:
```ergo
o DateTime variableName
```
The corresponding instance should be a date and time, and can optionally be formatted. The default format is `MM/DD/YYYY`, commonly used in the US.

#### DateTime Formats

The textual representation of a DateTime can be customized by including an optional format string using the `as` keyword directly in a template grammar. The following formatting tokens are supported:

Tokens are case-sensitive.

| Input        | Example            | Description |
|--------------|--------------------|-------------|
| `YYYY`       | `2014`             | 4 or 2 digit year |
| `M`          | `12`               | 1 or 2 digit month number |
| `MM`         | `04`               | 2 digit month number |
| `MMM`        | `Feb.`             | Short month name |
| `MMMM`       | `December`         | Long month name |
| `D`          | `3`                | 1 or 2 digit day of month |
| `DD`         | `04`               | 2 digit day of month |
| `H`          | `3`                | 24 hours (1 or 2 digits) |
| `HH`         | `04`               | 24 hours (2 digits) |
| `h`          | `1`                | 12 hours (1 or 2 digits) |
| `hh`         | `02`               | 12 hours (2 digits) |
| `a`          | `am` or `pm`       | morning/afternoon (lowercase) |
| `A`          | `AM` or `PM`       | morning/afternoon (uppercase) |
| `mm`         | `59`               | 2 digit minutes |
| `ss`         | `34`               | 2 digit seconds |
| `SSS`        | `002`              | 3 digit milliseconds |
| `Z`          | `+01:00`           | UTC offset |

:::note
If `Z` is specified, it must occur as the last token in the format string.
:::

#### Examples

The format of the `contractDate` variable of type `DateTime` can be specified with the `DD/MM/YYYY` format, as is commonly used in Europe.

```tem
The contract was signed on {{contractDate as "DD/MM/YYYY"}}.
The contract was signed on 26/04/2019.
```

Other examples:

```tem
dateTimeProperty: {{dateTimeProperty as "D MMM YYYY HH:mm:ss.SSSZ"}}
dateTimeProperty: 1 Jan 2018 05:15:20.123+01:02
```

```tem
dateTimeProperty: {{dateTimeProperty as "D MMMM YYYY HH:mm:ss.SSSZ"}}
dateTimeProperty: 1 January 2018 05:15:20.123+01:02
```

```tem
dateTimeProperty: {{dateTimeProperty as "D-M-YYYY H mm:ss.SSSZ"}}
dateTimeProperty: 31-12-2019 2 59:01.001+01:01
```

```tem
dateTimeProperty: {{dateTimeProperty as "DD/MM/YYYY"}}
dateTimeProperty: 01/12/2018
```

```tem
dateTimeProperty: {{dateTimeProperty as "DD-MMM-YYYY H mm:ss.SSSZ"}}
dateTimeProperty: 04-Jan-2019 2 59:01.001+01:01
```

### Amount Variables

#### Description

If the variable `variableName` is of type `Integer`, `Long`, `Double` or `MonetaryAmount`:
```ergo
o Integer integerVariable
o Long longVariable
o Double doubleVariable
o MonetaryAmount monetaryVariable
```

The corresponding instance should be a numeric value (with a currency code in the case of monetary amounts), and can optionally be formatted.

#### Amount Formats

The textual representation of an amount can be customized by including an optional format string using the `as` keyword directly in a template grammar. The following formatting tokens are supported:

Tokens are case-sensitive.

| Input        | Example            | Description                        | Type Supported                     |
|--------------|--------------------|------------------------------------|------------------------------------|
| `0,0`        | `3,100,200`        | integer part with `,` separator    | Integer,Long,Double,MonetaryAmount |
| `0 0`        | `3 100 200`        | integer part with ` ` separator    | Integer,Long,Double,MonetaryAmount |
| `0,0.00`     | `3,100,200.95`     | decimal with two digits precision  | Double,MonetaryAmount |
| `0 0,00`     | `3 100 200,95`     | decimal with two digits precision  | Double,MonetaryAmount |
| `0,0.0000`   | `3,100,200.95`     | decimal with four digits precision | Double,MonetaryAmount |
| `CCC`        | `USD`              | currency code                      | MonetaryAmount |
| `K`          | `$`                | currency symbol                    | MonetaryAmount |

The general format for the amount is `0{sep}0({sep}0+)?` where `{sep}` is a single character (e.g., `,` or `.`). The first `{sep}` is used to separate every three digits of the integer part. The second `{sep}` is used as a decimal point. And the number of `0` after the second separator is used to indicate precision (number of digits after the decimal point).


#### Examples

The following examples show formating for `Integer` or `Long` values.

```
The manuscript shall be completed within {{days as "0,0"}} days.
The manuscript shall be completed within 1,001 days.
```

```
The manuscript shall contain at most {{words as "0 0"}} words.
The manuscript shall contain at most 1 500 001 words.
```

The following examples show formatting for `Double` values.

```
The effective range of the device should be at least {{distance as "0,0.00mm"}}.
The effective range of the device should be at least 1,250,400.99mm.
```

```
The effective range of the device should be at least {{distance as "0 0,0000mm"}}.
The effective range of the device should be at least 1 250 400,9900mm.
```

The following examples show formatting for `MonetaryAmount` values.

```
The loan principal is {{principal as "0,0.00 CCC"}}.
The loan principal is 2,000,500,000.00 GBP.
```

```
The loan principal is {{principal as "K0,0.00"}}.
The loan principal is £2,000,500,000.00.
```

```
The loan principal is {{principal as "0 0,00 K"}}.
The loan principal is 2 000 500 000,00 €.
```

## Complex Types Variables

### Duration Types

#### Description

If the variable `variableName` has type `Duration`:
```ergo
import org.accordproject.time.Duration
o Duration variableName
```

The corresponding instance should contain the corresponding duration written with the amount as a number and the duration unit as literal text.

#### Examples

For example, consider the following model:
```ergo
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
```tem
If the delay is more than {{termination}}, the Buyer is entitled to terminate this Contract.
```

while the following instance texts do not match:
```md
If the delay is more than a month, the Buyer is entitled to terminate this Contract.
```
or
```md
If the delay is more than "two weeks", the Buyer is entitled to terminate this Contract.
```

### Other Complex Types

#### Description

If the variable `variableName` has a complex type `ComplexType` (such as an `asset`, a `concept`, etc.)
```ergo
o ComplexType variableName
```

The corresponding instance should contain all fields in the corresponding complex type in the order they occur in the model, separated by a single white space character.

#### Examples

For example, consider the following model:
```ergo
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
```tem
Address of the supplier: {{address}}.
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
Total value of the goods: 50.0 USD.
```

matches the template:
```tem
Total value of the goods: {{amount}}.
```

## Inline Blocks

CiceroMark uses blocks to enable more advanced scenarios, to handle optional or repeated text (e.g., lists), to change the variables in scope for a given section of the text, etc. Inline blocks correspond to inline elements in the markdown.

Inline blocks always have the following syntactic structure: 

```tem
{{#blockName variableName parameters}}...{{/blockName}}
```

where `blockName` indicates which kind of block it is (e.g., conditional block or optional block), `variableName` indicates the template variable which is in scope within the block. For certain blocks, additional `parameters` can be passed to control the behavior of that block (e.g., the `join` block creates text from a list with an optional separator).

### Conditional Blocks

Conditional blocks enables text which depends on a value of a `Boolean` variable in your model:

```tem
{{#if forceMajeure}}This is a force majeure{{/if}}
```

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

### Optional Blocks

Optional blocks enables text which depends on the presence of absence of an `optional` variable in your model:

```tem
{{#optional forceMajeure}}This applies except for Force Majeure cases in a {{miles}} miles radius.{{/optional}}
```

Optional blocks can also include an `else` branch to indicate that some other text should be use when the value of the variable is absent (`null` in the JSON data):

```tem
{{#optional forceMajeure}}This applies except for Force Majeure cases in a {{miles}} miles radius.{{else}}This applies even in case a force majeure.{{/optional}}
```

#### Examples

Drafting text with the second optional block above using the following JSON data:
```json
{
  "$class": "org.accordproject.foo.Status",
  "forceMajeure": {
    "$class": "org.accordproject.foo.Distance",
    "miles": 250
  }
}
```

results in the following markdown text:

```md
This applies except for Force Majeure cases in a 250 miles radius.
```

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.foo.Status",
  "forceMajeure": null
}
```

results in the following markdown text:

```md
This applies even in case a force majeure.
```

### With Blocks

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

### Join Blocks

A `join` block can be used to iterate over a variable containing an array of values, and can use an (optional) separator.

```tem
Discount applies to the following items: {{#join items separator=", "}}{{name}} ({{id}}){{/join}}.
```

#### Example

Drafting text with this block using the following JSON data:
```json
{
  "$class": "org.accordproject.sale.Order",
  "contractId": "31d817e2-d62a-4b70-b395-acd0d5da09f5",
  "items": [{
      "$class": "org.accordproject.slate.Item",
      "id": "111",
      "name": "Pineapple"
    },{
      "$class": "org.accordproject.slate.Item",
      "id": "222",
      "name": "Strawberries"
    },{
      "$class": "org.accordproject.slate.Item",
      "id": "333",
      "name": "Pomegranate"
    }
  ]
}
```

results in the following markdown text:

```md
Discount applies to the following items: Pineapple (111), Strawberries (222), Pomegranate (333).
```

## Container Blocks

CiceroMark uses block expressions to enable more advanced scenarios, to handle optional or repeated text (e.g., lists), to change the variables in scope for a given section of the text, etc.

Container blocks always have the following syntactic structure: 

```tem
{{#blockName variableName parameters}}
...
{{/blockName}}
```

where `blockName` indicates which kind of block it is (e.g., conditional block or list block), `variableName` indicates the template variable which is in scope within the block. For certain blocks, additional `parameters` can be passed to control the behavior of that block (e.g., the `join` block creates text from a list with an optional separator).

### Unordered Lists

```tem
{{#ulist rates}}
{{volumeAbove}}$ M<= Volume < {{volumeUpTo}}$ M : {{rate}}%
{{/ulist}}
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
{{#olist rates}}
{{volumeAbove}}$ M <= Volume < {{volumeUpTo}}$ M : {{rate}}%
{{/olist}}
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

### Clause Blocks

Clause blocks can be used to include a clause template within a contract template:

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

## Ergo Formulas

Ergo formulas in template text are essentially similar to Excel formulas, and enable to create legal text dynamically, based on the other variables in your contract. They are written `{{% ergoExpression %}}` where `ergoExpression` is any valid [Ergo Expression](logic-ergo).

::: note
Formulas allow the template developer to generate arbitrary contract text from other contract and clause variables. They therefore cannot be used to set a template model variable during parsing. In other words formulas are evaluated when drafting a contract but are ignored when parsing the contract text.
:::

### Evaluation Context

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

### Examples

Ergo provides a wide range of capabilities which you can use to construct the text that should be included in the final clause or contract. Below are a few examples for illustrations, but we encourage you to consult the [Ergo Logic](logic-ergo) guide for a more comprehensive overview of Ergo.

#### Path expressions

The contents of complex values can be accessed using the `.` notation.

For instance the following template uses the `.` notation to access the first name and last name of the contract author.

```tem
This contract was drafted by {{% author.name.firstName %}} {{% author.name.lastName %}}
```

#### Built-in Functions

Ergo offers a number of pre-defined functions for a variety of primitive types. Please consult the [Ergo Standard Library](ref-logic-stdlib) reference for the complete list of built-in functions.

For instance the following template uses the `addPeriod` function to automatically include the date at which a lease expires in the text of the contract:

```tem
This lease was signed on {{signatureDate}}, and is valid for a {{leaseTerm}} period.
This lease will expire on {{% addPeriod(signatureDate, leaseTerm) %}}`
```

#### Iterators

Ergo's `foreach` expressions lets you iterate over collections of values.

For instance the following template uses a `foreach` expression combined with the `avg` built-in function to include the average product price in the text of the contract:

```tem
The average price of the products included in this purchase
order is {{% avg(foreach p in products return p.price) %}}.
```

#### Conditionals

Conditional expressions lets you include alternative text based on arbitrary conditions.

For instance, the following template uses a conditional expression to indicate the governing jurisdiction:

```tem
Each party hereby irrevocably agrees that process may be served on it in
any manner authorized by the Laws of {{%
    if address.country = US and getYear(now()) > 1959
    then "the State of " ++ address.state
    else "the Country of " ++ address.country
%}}
```

