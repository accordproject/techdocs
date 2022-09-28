---
id: model-namespaces
title: Namespaces
---

Each Concerto file starts with the name and version of a single namespace. A Concerto namespace declares a set of *declarations*. A declaration is one of: enumeration, concept, asset, participant, transaction, event. All declarations within a single file belong to the same namespace.

```js
namespace org.acme@1.0.0 // declares version 1.0.0 of the org.acme namespace
```

### Imports

In order for one namespace to reference types defined in another namespace, the types must be imported for a version of a namespace.

## Simple

```js
import org.accordproject.address@1.0.0.PostalAddress // imports PostalAddress from version 1.0.0 of the org.accordproject.address namespace
```

## Multiple Imports

To import multiple types from the same namespace, use the `{}` syntax:

```js
import org.accordproject.address@1.0.0.{PostalAddress,Country} // imports PostalAddress and Country from version 1.0.0 of the org.accordproject.address namespace
```

## Importing from model published to a public URL

Import also can use the optional `from` declaration to import a model file that has been deployed to a URL.

```js
import org.accordproject.address@1.0.0.PostalAddress from https://models.accordproject.org/address.cto
```

Imports using a `from` declaration can be downloaded into the model manager by calling `modelManager.updateExternalModels`.

The Model Manager will resolve all imports to ensure that the set of declarations that have been loaded are globally consistent. 

## Strict:false mode

For backwards compatability, and when running with `strict:false` imports may import types from unversioned namespaces, or may import all types in a namespace. 

> Please migrate models to use versioned namespaces and imports as this capability will be deprecated and removed in a future major release.

Imports can be either qualified or can use wildcards.

```js
import org.accordproject.address.PostalAddress // import a type from an unversioned namespace
import org.accordproject.address.* // import all types from an unversioned namespace
```

