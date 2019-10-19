---
id: model-concerto
title: Overview
---

## Principles

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

## Metamodel Components

The Concerto metamodel contains the following:
- [Namespaces](#namespaces)
- [Imports](#imports)
- [Concepts](#concepts)
- [Assets](#assets)
- [Participants](#participants)
- [Transactions](#transactions)
- [Enumerations & Enumeration Values](#enumerations--enumeration-values)
- [Properties & Meta Properties](#properties-and-meta-properties)
- [Relationships](#relationships)
- [Decorators](#decorators)

## Namespaces

Each Concerto file starts with the name of a single namespace, which contains the base definitions of asset, event, participant and transaction. All definitions within a single file belong to the same namespace.

```js
namespace foo
```

## Imports

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

## Enumerations & Enumeration Values

Enumerations are used to capture lists of domain values.

```js
enum Gender {
  o MALE
  o FEMALE
  o OTHER
  o UNKNOWN
}
```

## Properties and Meta Properties

Class declarations contain properties. Each property has a type which can either be a type defined in the same namespace, an imported type, or a primitive type.

### Primitive types

Concerto supports the following primitive types:

   |Type | Description|
   |--- | ---|   
|String | a UTF8 encoded String.
|Double | a double precision 64 bit numeric value.
|Integer | a 32 bit signed whole number.
|Long | a 64 bit signed whole number.
|DateTime | an ISO-8601 compatible time instance, with optional time zone and UTZ offset.
|Boolean | a Boolean value, either true or false.

### Meta Properties

|Property|Description|
|---|---|
|[] | declares that the property is an array|
|optional | declares that the property is not required for the instance to be valid|
| default | declares a default value for the property, if not value is specified|
| range | declares a valid range for numeric properties|
| regex | declares a validation regex for string properties|

String fields may include an optional regular expression, which is used to validate the contents of the field. Careful use of field validators allows Concerto to perform rich data validation, leading to fewer errors and less boilerplate application code.

Double, Long or Integer fields may include an optional range expression, which is used to validate the contents of the field.

## Relationships

A relationship in CML is a tuple composed of:

The namespace of the type being referenced
The type name of the type being referenced
The identifier of the instance being referenced

Hence a relationship could be: `org.example.Vehicle#123456`

This would be a relationship to the `Vehicle` type declared in the `org.example` namespace with the identifier `123456`.

Relationships are unidirectional and deletes do not cascade, ie. removing the relationship has no impact on the thing that is being pointed to. Removing the thing being pointed to does not invalidate the relationship.

Relationships must be resolved to retrieve an instance of the object being referenced. The act of resolution may result in null, if the object no longer exists or the information in the relationship is invalid. Resolution of relationships is outside of the scope of the Model Manager.

A property of a class may be declared as a relationship using the `-->` syntax instead of the `o` syntax. The `o` syntax declares that the class contains (has-a) property of that type, whereas the `-->` syntax declares a typed pointer to an external identifiable instance.

In this example, the model declares that an `Order` has-an array of reference to `OrderLine`s. Deleting the `Order` has no impact on the `OrderLine`. When the `Order` is serialized the JSON only the IDs of the `OrderLines` are stored within the `Order`, not the `OrderLines` themselves.

```js
asset OrderLine identified by orderLineId {
  o String orderLineId
  o String sku
}

asset Order identified by orderId {
  o String orderId
  --> OrderLine[] orderlines
}
```

## Decorators

Model elements may have arbitrary decorators (aka annotations) placed on them. These are available via API and can be useful for tools to extend the model.

```js
@foo("arg1", 2)
asset Order identified by orderId {
  o String orderId
}
```

Decorators have an arbitrary number of arguments. They support arguments of type:
- String
- Boolean
- Number
- Type reference

Resource definitions and properties may be decorated with 0 or more decorations. Note that only a single instance of a decorator is allowed on each element type. I.e. it is invalid to have the @bar decorator listed twice on the same element.

Decorators are accessible at runtime via the `ModelManager` introspect APIs. This allows tools and utilities to use Concerto to describe a core model, while decorating it with sufficient metadata for their own purposes.

The example below retrieves the 3rd argument to the foo decorator attached to the myField property of a class declaration:

```js
const val = myField.getDecorator('foo').getArguments()[2];
```