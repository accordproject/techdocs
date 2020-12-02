---
id: model-api
title: Using the API
original_id: model-api
---

## Install the Core Library

To install the core model library in your project:
```
npm install @accordproject/concerto-core --save
```

Below are examples of API use.

## Validating JSON data using a Model

```js
const ModelManager = require('@accordproject/concerto-core').ModelManager;
const Concerto = require('@accordproject/concerto-core').Concerto;
const modelManager = new ModelManager();
modelManager.addModelFile( `namespace org.acme.address
concept PostalAddress {
  o String streetAddress optional
  o String postalCode optional
  o String postOfficeBoxNumber optional
  o String addressRegion optional
  o String addressLocality optional
  o String addressCountry optional
}`, 'model.cto');

const postalAddress = {
    $class : 'org.acme.address.PostalAddress',
    streetAddress : '1 Maine Street'
};
const concerto = new Concerto(modelManager);
concerto.validate(postalAddress);
```

Now try validating this instance:

```
const postalAddress = {
    $class : 'org.acme.address.PostalAddress',
    missing : '1 Maine Street'
};
```

Validation should fail with the message:

```
Instance undefined has a property named missing which is not declared in org.acme.address.PostalAddress
```

## Runtime introspection of the model

You can use the Concerto `introspect` APIs to retrieve model information at runtime:

```
const typeDeclaration = concerto.getTypeDeclaration(postalAddress);
const fqn = typeDeclaration.getFullyQualifiedName();
console.log(fqn); // should equal 'org.acme.address.PostalAddress'
```

These APIs allow you to examine the declared properties, super types and meta-properies for a modelled type.