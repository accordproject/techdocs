---
id: model-decorators
title: Decorators
---

Model elements may have arbitrary decorators (aka annotations) placed on them. These are available via API and can be useful for tools to extend the model. Accord Project decorators are defined in the [Decorators Reference](ref-decorators).

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
