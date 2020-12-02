---
id: model-properties
title: Properties
original_id: model-properties
---

Class declarations contain properties. Each property has a type which can either be a type defined in the same namespace, an imported type, or a primitive type.

### Primitive types

Concerto supports the following primitive types:

|Type | Description|
|--- | ---|   
|`String` | a UTF8 encoded String.
|`Double` | a double precision 64 bit numeric value.
|`Integer` | a 32 bit signed whole number.
|`Long` | a 64 bit signed whole number.
|`DateTime` | an ISO-8601 compatible time instance, with optional time zone and UTZ offset.
|`Boolean` | a Boolean value, either true or false.

### Meta Properties

|Property|Description|
|---|---|
|`[]` | declares that the property is an array|
|`optional` | declares that the property is not required for the instance to be valid|
| `default` | declares a default value for the property, if no value is specified|
| `range` | declares a valid range for numeric properties|
| `regex` | declares a validation regex for string properties|

`String` fields may include an optional regular expression, which is used to validate the contents of the field. Careful use of field validators allows Concerto to perform rich data validation, leading to fewer errors and less boilerplate application code.

The example below validates that a `String` variable starts with `abc`:

```
  o String myString regex=/abc.*/ 
```

`Double`, `Long` or `Integer` fields may include an optional range expression, which is used to validate the contents of the field. Both the lower and upper bound are optional, however at least one must be specified. The upper bound must be greater than or equal to the lower bound.

```
  o Integer intLowerUpper range=[-1,1] // greater than or equal to -1 and less than 1
  o Integer intLower range=[-1,] // greater than or equal to -1
  o Integer intUpper range=[,1] // less than 1
```

#### Example

```
asset Vehicle {
  o String model default="F150"
  o String make default="FORD"
  o Integer year default=2016 range=[1990,] optional // model year must be 1990 or higher
  o String V5cID regex=/^[A-z][A-z][0-9]{7}/
}
```
