---
id: markup-cicero
title: Overview
---

## Markup Templating for Smart Contracts

In order to make a contract or clause executable, there needs to be a link to relate the Template Model to the natural language text of the contract or clause. A markup language is used to insert bindings to the Template Model into the Text. Together, the marked-up Text and Template Model is referred to as the Template Grammar. The Template Grammar defines a syntactically valid contract or clause.

The Accord Project markup language is called CiceroMark. It supports:
1. Rich text annotations based on [CommonMark](https://commonmark.org) - a standard specification for Markdown
2. Template variables and blocks for structured content _in the style of_ [Handlebars](https://handlebarsjs.com), including [Concerto](https://www.accordproject.org/projects/concerto/) models
3. Formulas written as embedded [Ergo](https://docs.accordproject.org/docs/logic-ergo.html) expressions

CiceroMark is similar to Handlebars with two key differences:
- it is a template language for CommonMark rather than HTML
- it uses Ergo as an expression language rather than JavaScript


### An Extensible Framework for Contracts

The CiceroMark markup language is used to turn contracts from static, unstructured, text into structured, machine-readable, documents. Contractual documents may take one of three evolutionary forms:

1. Text: Natural language formats such as .docx or .pdf
2. Text + Model: Defining variables in text using data models, capable of being rendered as structured data objects in formats such as JSON
3. Text + Model + Logic: Adding logic expressions and functions to structured data objects to define dynamic functionality, such as calculating values

The markup language is intended to act as a standard format for expressing contracts in a natively computable manner; namely forms 2 and 3. It is built to be compatible and extensible with other industry standard schemas and domain models:

- [FpML](https://www.fpml.org/) for sharing derivatives data - see [FpML5 Confirmation Model](https://models.accordproject.org/fpml5/confirmation.html)
- [CommonMark](https://commonmark.org/) - see [CommonMark Model](https://models.accordproject.org/markdown/commonmark.html)
- [ISDA CDM](https://www.isda.org/2019/10/14/isda-common-domain-model/) - see [CDM Model](https://models.accordproject.org/isda/org.isda.cdm.html)
- IETF standards e.g. [RFC 5545](https://tools.ietf.org/html/rfc5545) - see [Calendar Model](https://models.accordproject.org/calendar/calendar.html)
- ISO standards e.g. [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) - see [Geo Model](https://models.accordproject.org/geo.html)

As such, CiceroMark acts as an extensible framework for computable contracts; providing support for existing and future standards, schemas, and models. It is intended that CiceroMark will be used as a foundation upon which extensions for various contract types are built as industries increasingly define domain models and support smart contracts.  

### Features

- Extensibility: New industry models and [statements](https://docs.accordproject.org/docs/logic-module.html) can be easily defined to extend the functionality of the markup language for new domains, contract types, industry standards etc.
- Compatibility: Works with industry standard schemas and domain models
- Understandability: Extends existing, established, templating approaches (e.g. Handlebars)
- Modularity: **WIP**

## Example

Here is an example using a simple fixed-rate interest clause.

```tem
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}
```

This example illustrates:
1. Rich text annotations: e.g., `## Fixed rate loan` for level 2 heading, and `*fixed interest*` for italics.
2. Template variables: e.g., `{{loanAmount}}` is the amount for the loan.
3. Formulas written in Ergo: e.g., `{{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}` which calculates the monthly payment based on the `loanAmount`, `rate`, and `loanDuration` variables.

## Parsing contract text to generate data

A sample text can either be parsed to generate the deal data in JSON format, or generated from the deal data in JSON.

### Parsing

The sample text must correspond to the grammar for parsing to succeed.

Consider the following sample text:
```md
## Fixed rate loan

This is a _fixed interest_ loan to the amount of 100000
at the yearly interest rate of 2.5%
with a loan term of 15,
and monthly payments of {{I'm not sure which amount right now}}
```

You can use the Cicero command-line to parse that text and extract the variables for the template:
```js
$ cicero parse --out data.json
09:09:15 - info: Using current directory as template folder
09:09:15 - info: Loading a default sample.md file.
09:09:18 - info: Creating file: data.json
09:09:18 - info:
{
  "$class": "org.accordproject.interests.TemplateModel",
  "clauseId": "1055c2eb-1cf7-438d-81c7-ec7a91374d9e",
  "loanAmount": 100000,
  "rate": 2.5,
  "loanDuration": 15
}
```

Note that parsing is resilient to variations in the markdown annotations. In the above example, the template uses `*fixed interest*` to indicates italics, but the sample uses `_fixed interest_`. Parsing still succeeds since those are equivalent.

Note also that the sample uses `{{ ... }}` to indicate the part of the text corresponding to expressions. Those need not be

**TBD**

## Drafting contract text from data
