---
id: full-contracts
title: Full Contracts
---

This page summarizes support for building full contracts using Accord Project templates, with pointers to detailed guides.

## Advanced Template Markup

Templatemark lets you structure rich, parameterized legal text:

- Variables and formatting using `{{ variable }}`
- Conditionals and branches using `{{#if}}...{{/if}}`
- Lists and repetition using `{{#ulist}}`, `{{#olist}}`, and `{{#each}}`
- Subclauses/sections using block constructs

See:
- Markup preliminaries: `docs/markup-preliminaries.md`
- Templatemark reference: `docs/markup-templatemark.md`
- CiceroMark/markdown semantics: `docs/markup-ciceromark.md`, `docs/markup-commonmark.md`

## Contract Modularity

Break large agreements into reusable parts:

- Import models across namespaces in `.cto` files
- Compose templates via subclauses and include patterns
- Package reusable clauses/templates in libraries

See:
- Template overview: `docs/accordproject-template.md`
- Tutorial and library: `docs/tutorial-templates.md`, `docs/tutorial-library.md`

## Embedded Expressions in Templates

Embed Ergo expressions to compute values at render or execution time using `{{% ... %}}` blocks:

- Inline calculations (e.g., dates, amounts)
- Conditional text and derived fields

See:
- Ergo logic: `docs/logic-ergo.md`, `docs/logic-simple-expr.md`, `docs/logic-advanced-expr.md`
- Statements and modules: `docs/logic-stmt.md`, `docs/logic-module.md`

## End-to-end: From Model to Executable Contract

Typical workflow:

1. Define data with Concerto models (`.cto`)
2. Author the template text with Templatemark (variables, lists, conditionals)
3. Implement logic in Ergo (embedded expressions and/or separate modules)
4. Package and test with Cicero CLI/API

See getting started and tutorials:
- Installation and hello world: `docs/started-installation.md`, `docs/started-hello.md`
- Create and run templates: `docs/tutorial-templates.md`, `docs/tutorial-create.md`, `docs/tutorial-nodejs.md`


