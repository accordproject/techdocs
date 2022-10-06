---
id: version-0.30.1-model-concerto
title: Concerto Overview
original_id: model-concerto
---

### Principles

The Concerto Modeling Language (CML) allows you to:
- Define an object-oriented model using a domain-specific language that is much easier to read and write than JSON/XML Schema, XMI or equivalents.
- Optionally edit your models using a powerful [VS Code add-on](https://marketplace.visualstudio.com/items?itemName=accordproject.cicero-vscode-extension) with syntax highlighting and validation
- Create runtime instances of your model
- Serialize your instances to JSON
- Deserialize (and optionally validate) instances from JSON
- Pass JS object instances around your application
- Introspect the model using a powerful set of APIs
- Convert the model to other formats using [concerto-tools](https://github.com/accordproject/concerto/tree/master/packages/concerto-tools)
- Import models from URLs
- Publish your reusable models to any website, including the [Accord Project Open Source model repository](https://models.accordproject.org)

### Metamodel Components

The Concerto metamodel contains the following:
- [Namespaces](model-namespaces.md)
- [Imports](model-namespaces.md#imports)
- [Concepts](model-classes.md#concepts)
- [Assets](model-classes.md#assets)
- [Participants](model-classes.md#participants)
- [Transactions](model-classes.md#transactions)
- [Enumerations](model-enums.md)
- [Properties & Meta Properties](model-properties.md)
- [Relationships](model-relationships.md)
- [Decorators](model-decorators.md)

