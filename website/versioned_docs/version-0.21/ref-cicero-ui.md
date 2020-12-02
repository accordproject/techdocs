---
id: ref-cicero-ui
title: Cicero UI Reference
original_id: ref-cicero-ui
---

Accord Project publishes [React](https://reactjs.org) user interface components for use in web-applications. Please refer to the cicero-ui project [on GitHub](https://github.com/accordproject/cicero-ui) for detailed usage instructions.

You can preview these components in [Template Studio v2](https://accordproject-studio.netlify.com).

![Template-Studio-V2](/docs/assets/reference/tsv2.png)

## Contract Editor

The Contract Editor component provides a rich-text content editor for contract text with embedded clauses.

> Note that the contract editor does not currently support the full expressiveness of Cicero Templates. Please refer to the Limitations section for details.

### Limitations

The contract editor does not support templates which use the following CiceroMark features:

* Lists containing [nested lists](markup-commonmark#nested-lists)
* Templates [list blocks](markup-blocks#list-blocks)

## Error Logger

The Error Logger component is used to display structured error messages from the Contract Editor.

## Navigation

The Navigation component displays an outline view for a contract, allowing the user to quickly navigate between sections.

## Template Library

The Template Library component displays a vertical list of template metadata, and allows the user to add a clause (instance of a template) to a contract.
