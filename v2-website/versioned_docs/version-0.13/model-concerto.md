---
id: model-concerto
title: Concerto Overview
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
- [Namespaces](model-namespaces)
- [Imports](model-namespaces#imports)
- [Concepts](model-classes#concepts)
- [Assets](model-classes#assets)
- [Participants](model-classes#participants)
- [Transactions](model-classes#transactions)
- [Enumerations & Enumeration Values](model-enum)
- [Properties & Meta Properties](model-properties)
- [Relationships](model-relationships)
- [Decorators](model-decorators)

