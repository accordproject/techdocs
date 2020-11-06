---
id: model-api
title: Using the API
original_id: model-api
---

## Install the Core Library

To install the core model library in your project:
```
npm install @accordproject/concerto-core@0.20 --save
```

Below are examples of API use.

## Create a Concerto File

```js
namespace org.acme.address

/**
 * This is a concept
 */
concept PostalAddress {
  o String streetAddress optional
  o String postalCode optional
  o String postOfficeBoxNumber optional
  o String addressRegion optional
  o String addressLocality optional
  o String addressCountry optional
}
```

## Create a Model Manager

```js
const ModelManager = require('@accordproject/concerto-core').ModelManager;

const modelManager = new ModelManager();
modelManager.addModelFile( concertoFileText, 'filename.cto');
```

## Create an Instance

```js
const Factory = require('@accordproject/concerto-core').Factory;

const factory = new Factory(modelManager);
const postalAddress = factory.newConcept('org.acme.address', 'PostalAddress');
postalAddress.streetAddress = '1 Maine Street';
```

## Serialize an Instance to JSON

```js
const Serializer = require('@accordproject/concerto-core').Serializer;

const serializer = new Serializer(factory, modelManager);
const plainJsObject = serializer.toJSON(postalAddress); // instance will be validated
console.log(JSON.stringify(plainJsObject, null, 4);
```

## Deserialize an Instance from JSON

```js
const postalAddress = serializer.fromJSON(plainJsObject); // JSON will be validated
console.log(postalAddress.streetAddress);
```

