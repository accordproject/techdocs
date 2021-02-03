---
id: ref-migrate-0.20-0.21
title: Cicero 0.20 to 0.21
---

The main change between the `0.20` release and the `0.21` release is the new markdown syntax and parser infrastructure based on [`markdown-it`](https://github.com/markdown-it/markdown-it). While most templates designed for `0.20` should still work on `0.21` some changes might be needed to the contract or template text to account for this new syntax.

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

Both the markdown for the grammar and sample text have been updated and consolidated in the `0.21` release and may require some adjustments. You can find complete information about the latest syntax in the [Markdown Text](markup-preliminaries) Section of this documentation. For an existing template, you should apply the following changes.

### Text Grammar Changes

1. Clause or list blocks should have their opening and closing tags on a single line terminated by whitespace. I.e., you should change occurrences of :
   ```
   {{#clause clauseName}}...clause text...{{/clauseName}}
   ```
   to
   ```
   {{#clause clauseName}}
   ...clause text...
   {{/clauseName}}
   ```
   and similarly for ordered and unordeded list blocks (`olist` and `ulist`).
2. Markdown container blocks are no longer supported inside inline blocks (`if` `join` and `with` blocks).

:::tip
We recommend using the new [TemplateMark Dingus](https://templatemark-dingus.netlify.app) to check that your template variables, blocks and formula are properly identified following the new markdown parsing rules.
:::

### Text Samples Changes

1. Nested clause template should be now identified within contract templates using clause blocks. I.e., if you use a `paymentClause`, you should change your text from:
   ```
   ...negate the notices Licensor provides and requires hereunder.

   Payment. As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time fee in the amount of "one hundred US Dollars" (100.0 USD) upon execution of this Agreement, payable as follows: "bank transfer".

   General.
   ...
   ```
   to
   ```
   ...negate the notices Licensor provides and requires hereunder.

   {{#clause paymentClause}}
   Payment. As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time fee in the amount of "one hundred US Dollars" (100.0 USD) upon execution of this Agreement, payable as follows: "bank transfer".
   {{/clause}}

   General.
   ...
   ```
2. The text corresponding to formulas should be changed from `{{ ...text...}}` to `{{% ...text... %}}`.

You should also ensure that any changes to the grammar text is reflected in the samples. Any change in the grammar text outside of variables should be applied to the corresponding `sample.md` files as well.

:::tip
You can check that the samples and grammar are in agreement by using the `cicero parse` command.
:::

## Model Changes

There should be no model changes required for this version.

## Logic Changes

There should be no logic changes required for this version.

## API Changes

A number of API changes may affect Node.js applications using Cicero or Ergo packages. The main API changes are:
1. Cicero:
   1. `@accordproject/cicero-core` package
      - the `ParserManager` class has been completely overhauled and moved to the `@accordproject/@markdown-template` package.

## CLI Changes

1. The `cicero draft --wrapVariables` option has been removed
2. The `ergo draft` command has been removed

## Cicero Server Changes

Cicero server API has been completely overhauled to match the more recent engine interface
1. The contract data is now passed as part of the REST POST request for the `trigger` endpoint

