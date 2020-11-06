---
id: markup-cicero
title: CiceroMark Overview
original_id: markup-cicero
---

## Preliminaries

The Cicero markup language (or CiceroMark) is used to express the natural language text for legal clauses or contracts. As with other markup languages, CiceroMark can express document structure (e.g., headings, paragraphs, lists) as well as formatting useful for readability (e.g., italics, bold, quotations). In addition, CiceroMark can also include variables for the template and calculations based on the values of those variables.

CiceroMark looks like regular [Markdown](https://en.wikipedia.org/wiki/Markdown), with embedded CiceroMark expressions. Let us look again at the [fixed rate loan](https://templates.accordproject.org/fixed-interests-static@0.2.0.html) clause that was used in the [Overview](accordproject) Section of this documentation.

```tem
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}
```

This example illustrates all the key features of CiceroMark:
1. _Markdown_: e.g., `## Fixed rate loan` for level 2 heading, and `*fixed interest*` for italics.
2. _Variable expressions_: e.g., `{{loanAmount}}` which is the amount for the loan.
3. _Ergo expressions_: e.g., `{{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}` which calculates the monthly payment based on the `loanAmount`, `rate`, and `loanDuration` variables.

### Lexical Conventions

CiceroMark is a string of `UTF-8` characters.

:::note
By convention, CiceroMark files have the `.md` extensions for a sample text, or `.tem.md` extension for a grammar.
:::

The two sequences of characters `{{` and `}}` are reserved and used for CiceroMark expressions.

### Markdown

CiceroMark is based on the [CommonMark](https://commonmark.org) markdown syntax.

Except for the two sequences of characters `{{` and `}}` CiceroMark follows the [CommonMark specification](https://spec.commonmark.org/0.29/) (a new line followed by the character `#` is interpreted as a level-1 heading, two new lines followed by text is interpreted as a paragraph, etc).

An introduction to CommonMark can be found in the [Rich Text Markdown](markup-commonmark) Section.

### CiceroMark Expressions

There are three kinds of CiceroMark expressions, which are similar to expressions found in other templating systems such as [Handlebars](https://handlebarsjs.com):
- variable expressions (written `{{variableName}}`) which may include an optional formatting (written `{{variableName as "FORMAT"}}`).
- block expressions which may contain additional text or markup (written `{{#blockName variableName}} ... text and markup ... {{/blockName}}`).
- Ergo expressions (written `{{% ergoExpression %}}`).

Details and examples of CiceroMark expressions can be found in the [Variable Expressions](markup-variables), [Block Expressions](markup-blocks) and [Ergo Expressions](markup-ergo) Sections.

## Processing CiceroMark

There are two main operations on CiceroMark: **drafting** and **parsing**.

Drafting creates text from data in the [JSON](http://json.org) format. Parsing extracts data in the JSON format from text.

We have already illustrated those operations in the [Hello World Template](started-hello) tutorial, but we review them again here with a focus on how they behave with respect to CiceroMark.

### Drafting: From Data to Text

The most direct way to understand CiceroMark is as a way to generate text from input data. Let's consider the following data, which associates values to the variables in the fixed rate loan template.
```json
{
  "$class": "org.accordproject.interests.TemplateModel",
  "clauseId": "1055c2eb-1cf7-438d-81c7-ec7a91374d9e",
  "loanAmount": 100000.0,
  "rate": 2.5,
  "loanDuration": 15
}
```

From the template and that data, one can create the corresponding clause text:

```md
## Fixed rate loan

This is a *fixed interest* loan to the amount of 10000.0
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{667}}
```

:::tip
Going from data to text can be done using the [`cicero draft`](cicero-cli.html#cicero-draft) command.
:::

The variables are replaced by their values in the text, and the Ergo expression which calculates the monthly payment is evaluated (yielding `667` in this example). In most of this guide, we use text generation to illustrate CiceroMark. However we can also use the template to go from text to data.

### Parsing: From Text to Data

Parsing performs the reverse operation and extract data from text. So from the previous clause text:

```md
## Fixed rate loan

This is a *fixed interest* loan to the amount of 150000.0
at the yearly interest rate of 3.5%
with a loan term of 20,
and monthly payments of {{870}}
```

parsing will extract the following deal data in JSON format:
```json
{
  "$class": "org.accordproject.interests.TemplateModel",
  "clauseId": "1055c2eb-1cf7-438d-81c7-ec7a91374d9e",
  "loanAmount": 150000.0,
  "rate": 3.5,
  "loanDuration": 20
}
```

:::tip
Going from text to data can be done using the [`cicero parse`](cicero-cli.html#cicero-parse) command.
:::

Several important remarks are important about parsing.

First, parsing will expect the values corresponding to variable or Ergo expressions to adhere to a specific syntax. Notably, text corresponding to variable expressions with the type `String` have to be quoted with `"`, and text corresponding to Ergo expressions have to be quoted with `{{ ... }}`.

Second, because markdown sometimes allows the same thing to be written in different ways, parsing is resilient to those variations. For instance, the following text uses a [Setext Heading](https://spec.commonmark.org/0.29/#setext-headings) rather than an [ATX Heading](https://spec.commonmark.org/0.29/#atx-headings) and uses `_fixed interest_` rather than `*fixed interest*` for italics, but it will parse with the same grammar and yield the same data:
```md
Fixed rate loan
----

This is a _fixed interest_ loan to the amount of 150000.0
at the yearly interest rate of 3.5%
with a loan term of 20,
and monthly payments of {{870}}
```

Finally, parsing ignores the text corresponding to the Ergo expression `{{870}}` since it only needs to extract the other variables. This means the following text will parse with the same grammar and yield the same data:
```md
Fixed rate loan
----

This is a _fixed interest_ loan to the amount of 150000.0
at the yearly interest rate of 3.5%
with a loan term of 20,
and monthly payments of {{anything else here}}
```

:::tip
For convenience, the command [`cicero normalize`](cicero-cli.html#cicero-normalize) can be used to parse, then re-draft a CiceroMark document, allowing a user to both normalize the markdown and to recalculate the Ergo expressions. For instance, [`cicero normalize`](cicero-cli.html#cicero-normalize) applied to the following document:
```md
## Fixed rate loan

This is a _fixed interest_ loan to the amount of 150000.0
at the yearly interest rate of 3.5%
with a loan term of 20,
and monthly payments of {{anything else here}}
```
yields the normalized document:
```md
Fixed rate loan
----

This is a *fixed interest* loan to the amount of 150000.0
at the yearly interest rate of 3.5%
with a loan term of 20,
and monthly payments of {{870}}
```
:::