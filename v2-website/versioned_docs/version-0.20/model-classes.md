---
id: model-classes
title: Classes
original_id: model-classes
---

## Concepts

Concepts are similar to class declarations in most object-oriented languages, in that they may have a super-type and a set of typed properties:

```js
abstract concept Animal {
  o DateTime dob
}

concept Dog extends Animal {
 o String breed
}
```

Concepts can be declared `abstract` if it should not be instantiated (must be subclassed).

## Assets

An asset is a class declaration that has a single `String` property which acts as an identifier. You can use the `modelManager.getAssetDeclarations` API to look up all assets.

```js
asset Vehicle identified by vin {
  o String vin
}
```

Assets are typically used in your models for the long-lived identifiable Things (or nouns) in the model: cars, orders, shipping containers, products, etc.

## Participants

Participants are class declarations that have a single `String` property acting as an identifier. You can use the `modelManager.getParticipantDeclarations` API to look up all participants.

```js
participant Customer identified by email {
  o String email
}
```

Participants are typically used for the identifiable people or organizations in the model: person, customer, company, business, auditor, etc.

## Transactions

Transactions are similar to participants in that they are also class declarations that have a single `String` property acting as an identifier. You can use the `modelManager.getTransactionDeclarations` API to look up all transactions.

```js
transaction Order identified by orderId {
  o String orderId
}
```

Transactions are typically used in models for the identifiable business events or messages that are submitted by Participants to change the state of Assets: cart check out, change of address, identity verification, place order, etc.

## Events

** TBD **

