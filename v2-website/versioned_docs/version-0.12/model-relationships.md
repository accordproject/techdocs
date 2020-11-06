---
id: model-relationships
title: Relationships
---

A relationship in Concerto Modeling Language (CML) is a tuple composed of:

1. The namespace of the type being referenced
2. The type name of the type being referenced
3. The identifier of the instance being referenced

Hence a relationship could be: `org.example.Vehicle#123456`

This would be a relationship to the `Vehicle` _type_ declared in the `org.example` _namespace_ with the _identifier_ `123456`.

> A relationship can be defined to any *identifiable* type, that is a type that has been declared with either the `identified by` or `identified` properties.

Relationships are unidirectional and deletes do not cascade, ie. removing the relationship has no impact on the thing that is being pointed to. Removing the thing being pointed to does not invalidate the relationship.

Relationships must be resolved to retrieve an instance of the object being referenced. The act of resolution may result in null, if the object no longer exists or the information in the relationship is invalid. Resolution of relationships is outside of the scope of Concerto.

A property of a class may be declared as a relationship using the `-->` syntax instead of the `o` syntax. The `o` syntax declares that the class contains (has-a) property of that type, whereas the `-->` syntax declares a typed pointer to an external identifiable instance.

In this example, the model declares that an `Order` has-an array of reference to `OrderLines`. Deleting the `Order` has no impact on the `OrderLine`. When the `Order` is serialized the JSON only the IDs of the `OrderLines` are stored within the `Order`, not the `OrderLines` themselves.

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
