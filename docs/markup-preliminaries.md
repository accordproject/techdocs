---
id: markup-preliminaries
title: Preliminaries
---

The text for Accord Project templates is written using markdown. It builds on top of the [CommonMark](https://commonmark.org) standard so that any CommonMark document is valid text for a template or contract. Accord Project uses two extensions to the CommonMark markdown: CiceroMark for the contract text, and TemplateMark for the template grammar.

## Lexical Conventions

Accord Project contract or template text is a string of `UTF-8` characters.

:::note
By convention, CiceroMark files have the `.md` extensions, and TemplateMark files have the `.tem.md` extension.
:::

The two sequences of characters `{{` and `}}` are reserved and used for the CiceroMark and TemplateMark extensions to CommonMark. There are three kinds of extensions:
1. variables (written `{{variableName}}`) which may include an optional formatting (written `{{variableName as "FORMAT"}}`).
2. blocks which may contain additional text or markdown (written `{{#blockName variableName}} ... text and markdown ... {{/blockName}}`).
3. formulas (written `{{% expression %}}`).

## CommonMark Extensions

Accord Project uses the [CommonMark specification](https://spec.commonmark.org/0.29/). As with other markup languages, CommonMark can express the document structure (e.g., headings, paragraphs, lists) and formatting useful for readability (e.g., italics, bold, quotations).

An introduction to CommonMark can be found in the [CommonMark](markup-commonmark) Section.

### CiceroMark

CiceroMark is used to express the natural language text for legal clauses or contracts. It is based on CommonMark with two specific extensions to facilitate contract parsing:
1. Clauses within a contract can be identified using a `clause` block:
   ```
   {{#clause clauseName}}
   text of the clause
   {{/clause}}
   ```
2. The result of formulas within a contract or clause can be identified using:
   ```
   {{% result_of_the_formula %}}
   ```

For instance, the following CiceroMark for a loan between `John Smith` and `Jane Doe` includes a title (`Loan agreement`) followed by some text, followed by a fixed rate interest clause. The clause contains the terms for the loan and the result of calculating the monthly payment.
```tem
# Loan agreement

This is a loan agreement between "John Smith" and "Jane Doe", which shall be entered into
by the parties on January 21, 2021 - 3 PM, except in the event of a force majeure.

{{#clause fixedRate}}
## Fixed rate loan

This is a _fixed interest_ loan to the amount of £100,000.00
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{%£667.00%}}
{{/clause}}
```

More information and examples can be found in the [CiceroMark](markup-ciceromark) part of this guide.

### TemplateMark

TemplateMark is used to describe families of contracts or clauses with some variable parts. It is based on CommonMark with several extensions to indicate those variables parts:
1. _Variables_: e.g., `{{loanAmount}}` indicates the amount for a loan.
2. _Template Blocks_: e.g., `{{#if forceMajeure}}, except in the event of a force majeure{{/if}}` indicates some optional text in the contract.
3. _Formulas_: e.g., `{{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}` calculates a monthly payment based on the `loanAmount`, `rate`, and `loanDuration` variables.

For instance, the following TemplateMark for a loan between a `borrower` and a `lender` includes a title (`Loan agreement`) followed by some text, followed by a fixed rate interest clause. This template allows for either taking force majeure into account or not, and calls into a formula to calculate the monthly payment.
```tem
# Loan agreement

This is a loan agreement between {{borrower}} and {{lender}}, which shall be entered into
by the parties on {{date as "MMMM DD, YYYY - h A"}}{{#if forceMajeure}}, except in the event of a force majeure{{/if}}.

{{#clause fixedRate}}
## Fixed rate loan

This is a _fixed interest_ loan to the amount of {{loanAmount as "K0,0.00"}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) as "K0,0.00" %}}
{{/clause}}
```

More information and examples can be found in the [TemplateMark](markup-templatemark) part of this guide.

## Markus & Dingus

In addition to the Cicero command line, you can test your template markdown using the `markus` tool which focuses on parsing/drafting and the online dingus.

### Parsing and Drafting

The contract text, in CiceroMark, and the template text, in TemplateMark are related through two fundamental operations: **drafting** and **parsing**.

Drafting takes the template text and the contract data in [JSON](http://json.org) format and returns a valid contract text.

Parsing takes the template text and the contract text and, if the contract text is valid, returns the contract data in JSON format.

We have already illustrated those operations in the [Hello World Template](started-hello) tutorial, but we review them again here with a focus on how they behave with respect to CiceroMark and TemplateMark.

### Markus

The markus command line tool can be useful to test parsing or drafting in isolation. It can be installed using:

```bash
npm install -g @accordproject/markdown-cli
```

To parse a CiceroMark document using a TemplateMark template, you will also need the corresponding Concerto model, which describe the type of the variables in your template.

For instance the following Concerto model can be used to test the loan example on this page:
```concerto
namespace org.accordproject.loan

import org.accordproject.cicero.contract.* from https://models.accordproject.org/cicero/contract.cto
import org.accordproject.money.MonetaryAmount from https://models.accordproject.org/money.cto
import org.accordproject.time.* from https://models.accordproject.org/v2.0/time.cto

asset LoanTerm extends AccordClause {
  o MonetaryAmount loanAmount
  o Double rate
  o Integer loanDuration
}

asset TemplateModel extends AccordContract {
  o String borrower
  o String lender
	o DateTime date
	o Boolean forceMajeure
  o LoanTerm fixedRate
}
```

#### Drafting

Let's consider the following data, which associates values to the variables in the previous loan template.
```json
{
  "$class": "org.accordproject.loan.TemplateModel",
  "borrower": "John Smith",
  "lender": "Jane Doe",
  "date": "2021-01-21T15:00:00.000-04:00",
  "forceMajeure": true,
  "fixedRate": {
    "$class": "org.accordproject.loan.LoanTerm",
    "loanAmount": {
      "$class": "org.accordproject.money.MonetaryAmount",
      "doubleValue": 100000,
      "currencyCode": "GBP"
    },
    "rate": 2.5,
    "loanDuration": 15,
    "clauseId": "183e9463-4576-45c1-a9ad-723639498359"
  },
  "contractId": "cce372d0-fe55-42e1-a563-3b66c50d2bb5"
}
```

From the template and that data, one can create the corresponding clause text using the following command:
```bash
markus transform --from data --to markdown_cicero --model model.cto --template test.tem.md --input data.json --contract
```

This should result in the new contract text:
```md
Loan agreement
====

This is a loan agreement between "John Smith" and "Jane Doe", which shall be entered into
by the parties on January 21, 2021 - 3 PM, except in the event of a force majeure.

{{#clause fixedRate}}
Fixed rate loan
----

This is a *fixed interest* loan to the amount of £100,000.00
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{% calculate( monthlyPaymentFormula(loanAmount,rate,loanDuration) as "K0,0.00" )(borrower,lender,date,forceMajeure,fixedRate) @ 2020-09-23T15:55:48-04:00 %}}
{{/clause}}
```

:::tip
Going from data to text can be done using the [`cicero draft`](cicero-cli.html#cicero-draft) command.
:::

The variables are replaced by their values in the text, and the Ergo expression which calculates the monthly payment is evaluated (yielding `667` in this example). In most of this guide, we use text generation to illustrate CiceroMark. However we can also use the template to go from text to data.

#### Dingus

The [TemplateMark Dingus](https://templatemark-dingus.netlify.app) is an online tool which lets you edit the markdown and see it rendered as HTML, or as a document object model.

![TemplateMark Dingus](assets/dingus1.png)

You can select whether to parse your text as pure CommonMark (i.e., according to the CommonMark specification), or with the CiceroMark or TemplateMark extensions.

![TemplateMark Dingus](assets/dingus2.png)

You can also inspect the HTML source, or the document object model (abstract syntax tree or AST).

![TemplateMark Dingus](assets/dingus3.png)

For instance, you can open the TemplateMark from the loan example on this page by clicking [this link](https://templatemark-dingus.netlify.app/#md3=%7B%22source%22%3A%22%23%20Loan%20agreement%5Cn%5CnThis%20is%20a%20loan%20agreement%20between%20%7B%7Bborrower%7D%7D%20and%20%7B%7Blender%7D%7D%2C%20which%20shall%20be%20entered%20into%5Cnby%20the%20parties%20on%20%7B%7Bdate%20as%20%5C%22MMMMM%20DD%2C%20YYYY%20-%20hhA%5C%22%7D%7D%7B%7B%23if%20forceMajeure%7D%7D%2C%20except%20in%20the%20event%20of%20a%20force%20majeure%7B%7B%2Fif%7D%7D.%5Cn%5Cn%7B%7B%23clause%20fixedRate%7D%7D%5Cn%23%23%20Fixed%20rate%20loan%5Cn%5CnThis%20is%20a%20_fixed%20interest_%20loan%20to%20the%20amount%20of%20%7B%7BloanAmount%20as%20%5C%22K0%2C0.00%5C%22%7D%7D%5Cnat%20the%20yearly%20interest%20rate%20of%20%7B%7Brate%7D%7D%25%5Cnwith%20a%20loan%20term%20of%20%7B%7BloanDuration%7D%7D%2C%5Cnand%20monthly%20payments%20of%20%7B%7B%25%20monthlyPaymentFormula%28loanAmount%2Crate%2CloanDuration%29%20as%20%5C%22K0%2C0.00%5C%22%20%25%7D%7D%5Cn%7B%7B%2Fclause%7D%7D%5Cn%22%2C%22defaults%22%3A%7B%22templateMark%22%3Atrue%2C%22ciceroMark%22%3Afalse%2C%22html%22%3Atrue%2C%22_highlight%22%3Atrue%2C%22_strict%22%3Afalse%2C%22_view%22%3A%22html%22%7D%7D).

![TemplateMark Dingus](assets/dingus4.png)

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

