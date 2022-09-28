---
id: ref-migrate-concerto-2.0-3.0
title: Concerto 2.0 to 3.0
---

Concerto `3.0` delivers fundamental improvements over previous releases, whilst maintaining a high-degree (though not total!) of backwards compatibility with `2.x`. In particular all of the `2.x` Concerto syntax remains valid in `3.0`.

> View the [Concerto v3.0.0 release changelog](https://github.com/accordproject/concerto/releases/tag/v3.0.0) on GitHub. Thank you to all the contributors!

:::note
We are currently in the process of migrating the Accord Project stack to Concero v3.0. While the migration is underway you may see some components that still depend upon Concerto v2.x.
:::

## Summary of Changes

This new major version allows Concerto models to define an explicit version in a model file, (according to the [Semantic Versioning convention](https://semver.org)). Concerto models can also declare a dependency on an explicit version of another model. This makes it easier to govern changes to model definitions in large-scale deployments.

Version 3 also includes several new features:
- Compatibility Detection. Protect your users when your model changes by ensuring backwards compatibility
- Command Line Tool Enhancements. New concerto generate, concerto version, concerto compare commands.
- .NET Enhancements. Improved code generation for C#. .NET serialization and deserialization tools.

## Strict Mode

One of the major new features in Concerto v3 is the ability to version namespaces, and to import specific versions of a namespace. When Concerto is running in `strict: true` mode **only** versioned namespaces and versioned imports are permitted within CTO files. By default Concerto v3 uses `strict:false`, allowing it to be used with existing (unversioned) CTO files unchanged. 

In `strict:true` mode importing all the types in a namespace is prohibited.

E.g.
```
namespace org.acme@1.0.0

import com.sample.model@1.0.0.* // in strict:true mode this is an error

concept Person {
}
```


It is recommended that you migrate your CTO files to use versioned namespaces. In the future the default setting for `strict` will be `true`, likely followed by deprecation of the `strict:false` behavior and eventual removal of support for unversioned namespaces. You have been warned!


## CLI Enhancements

The `concerto-cli` command line utility has been improved and extended, with support for checking semver compatability of models, incrementing namespace versions, generating code from models, and parser performance improvements.

Please see the updated [CLI documentation](ref-concerto-cli.md) for details.

## Core Enhancements

A new `InMemoryWriter` class is provided which adheres to the `FileWriter` interface, while storing files in memory. This makes it easier to integrate code generation into environments without access to a local filesystem.

### Security Enhancements

The regular expression (regex) engine used by core to validate string values is now pluggable, allowing integrators to protect themselves from recursive regular expressions, or other attacks.

## Tools Enhancements

Many improvemements to code generation have been delivered, including support for versioned namespaces, and much improved C# code generations. In addition, two new code generation targets are available:
- [Mermaid](https://mermaid-js.github.io), a textual format to represent class diagrams
- Markdown, a textual format to provide an overview of a model, including a nested Mermaid format diagram, as [supported by GitHub](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).

## Analysis (New Feature!)

A new package `concerto-analysis` has been delivered, and exposed via the CLI, allowing users to compare two Concerto models, to detect new, updated, and removed model elements. The results of analysis can then be used to update the versions of namespaces, adhering to  semantic versioning best practices.






