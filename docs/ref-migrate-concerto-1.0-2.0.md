---
id: ref-migrate-concerto-1.0-2.0
title: Concerto 1.0 to 2.0
---

Concerto `2.0` delivers fundamental improvements over previous releases, whilst maintaining a high-degree (though not total!) of backwards compatibility with `1.x`. In particular all of the `1.x` Concerto syntax remains valid in `2.0`.

> The release includes over 75 commits, and over 400 files changed. Thank you to all the contributors!

:::note
We are currently in the process of migrating the Accord Project stack to Concero v2.0. While the migration is underway you may see some components that still depend upon Concerto v1.x.
:::

## Summary of Changes
- Update the Concerto metamodel to [version 0.3](https://models.accordproject.org/concerto/metamodel@0.3.0.html)
- Migrate the Concerto parser from pegjs (no longer maintained) to [peggy](https://peggyjs.org)
- Improvements to Typescript type definitions
- Fixes for JSON Schema generation
- Drop support for Node 12, adding support for Node 16
- Re-organize the code to make `concerto-core` independent of the CTO concrete syntax, moving parsing and CTO generation into the new `concerto-cto` package.
- Add `concerto-util` package for common code
- Add `concerto-vocabulary` package, for managing localized terms for models
- Add `DecoratorManager` to allow decorations on model to be externalized and applied to models

## Summary of API Changes
- Added method `declarationKind()` to concept/asset etc to determine the type
- Removed the method `hasInstance` to perform instanceof checks
- `ModelFile.getAst` to return the metamodel for a model
- `ModelManager.addCTOModel` to add a model as a CTO string to a model manager
- `BaseModelManager` to manager models, independent of CTO syntax
- `BaseModelManager.getAst` to get metamodel for a set of models
- `BaseModelManager.fromAst` to create a ModelManager from a metamodel
