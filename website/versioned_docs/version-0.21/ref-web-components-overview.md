---
id: ref-web-components-overview
title: Overview
original_id: ref-web-components-overview
---

Accord Project publishes [React](https://reactjs.org) user interface components for use in web applications. Please refer to the web-components project [on GitHub](https://github.com/accordproject/web-components) for detailed usage instructions.

You can preview these components in [the project's storybook](https://ap-web-components.netlify.app/).

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

## Library

The Library component displays a vertical list of library item metadata, and allows the user to add an instance of a library item to a contract.
