---
id: model-namespaces
title: Namespaces
original_id: model-namespaces
---

Each Concerto file starts with the name of a single namespace, which contains the base definitions of asset, event, participant and transaction. All definitions within a single file belong to the same namespace.

```js
namespace foo
```

### Imports

In order for one namespace to reference types defined in another namespace, the types must be imported. Imports can be either qualified or can use wildcards.

```js
import org.accordproject.address.PostalAddress
```

```js
import org.accordproject.address.*
```

Import also can use the optional `from` declaration to import a model file that has been deployed to a URL.

```js
import org.accordproject.address.PostalAddress from https://models.accordproject.org/address.cto
```

Imports using a `from` declaration can be downloaded into the model manager by calling `modelManager.updateExternalModels`.

The Model Manager will resolve all imports to ensure that the set of declarations that have been loaded are globally consistent. 

