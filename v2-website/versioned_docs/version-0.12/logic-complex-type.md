---
id: logic-complex-type
title: Complex Values & Types
original_id: logic-complex-type
---

So far we only considered atomic values and types, such as string values or integers, which are not sufficient for most contracts. In Ergo, values and types are based on the [Composer Concerto Modeling Language](https://github.com/hyperledger/composer-concerto) (often referred to as CTO files). This provides a rich vocabulary to define the parameters of your contract, the information associated to contract participants, the structure of contract obligation, etc.

In Ergo, you can either import an existing CTO file or declare types directly within your code. Let us look at the different kinds of types you can define and how to create values with those types.

## Arrays

Array types lets you define collections of values and are denoted with `[]` after the type of elements in that collection:

```ergo
    String[]                         // a String array
    Double[]                         // a Double array
```

You can write arrays as follows:
```ergo
    ["pear","apple","strawberries"]  // an array of String values
    [3.14,2.72,1.62]                 // an array of Double values
```

You can construct arrays using other expressions:
```ergo
    let pi = 3.14;
    let e = 2.72;
    let golden = 1.62;
    [pi,e,golden]
```

Ergo also provides functions to manipulate arrays as parts of its [standard library](ergo-stdlib.html#functions-on-arrays):
```ergo
    let pi = 3.14;
    let e = 2.72;
    let golden = 1.62;
    let prettynumbers : Double[] = [pi,e,golden];
    sum(prettynumbers)
```

## Classes

You can declare classes in the Composer Modeling Language (concepts, transactions, events, participants or assets) by importing them from a CTO file or directly within your Ergo program:

```ergo
   define concept Seminar {
     name : String,
     fee : Double
   }
   define asset Product {
     id : String
   }
   define asset Car extends Product {
     range : String
   }
   define transaction Response {
     rate : Double,
     penalty : Double
   }
  define event PaymentObligation{
    amount : Double,
    description : String
  }
```

Once a class type has been defined, you can create an instance of that type using the class name along with the values for each fields:

```ergo
    Seminar{
      name: "Law for developers",
      fee: 29.99
    }
    Car{
      id: "Batmobile4156",
      range: "Unknown"
    }
```

> **TechNote:** When extending an existing class (e.g., `Car extends Product`), the sub-class includes the fields from the super-class. So `Car` includes the field `range` which is locally declared and the field `id` which is declared in `Product`.

You can access the field of a class using the `.` operator:
```ergo
    Seminar{
      name: "Law for developers",
      fee: 29.99
    }.fee                        // Returns 29.99
```

## Records

Sometimes it is convenient to declare a structure without having to declare it first. You can do that using a record, which is similar to a class but without its name:

```ergo
   {
     name : String,  // A record with a name of type String
     fee : Double    // and a fee of type Double
   }
```

You do not need to declare that record, and can directly write an instance of that record as follows:

```ergo
    {
      name: "Law for developers",
      fee: 29.99
    }
```

> Typing `return { name: "Law for developers", fee: 29.99 }` in the [Ergo REPL](https://ergorepl.netlify.com), should answer `Response. {name: "Law for developers", fee: 29.99} : {fee: Double, name: String}`.

You can access the field of a record using the `.` operator:
```ergo
    {
      name: "Law for developers",
      fee: 29.99
    }.fee                        // Returns 29.99
```
## Enums

Here is how to declare an enumerated type:

```ergo
define enum ProductType {
   DAIRY,
   BEEF,
   VEGETABLES
}
```

> **TechNote:** Enumerated types are handled as `String` at the moment.

To create an instance of that enum:
```ergo
"DAIRY"
"BEEF"
```

## Optional types

An optional type can contain a value or not and is indicated with a `?`.

```ergo
Integer?          // An optional integer
PaymentObligation // An optional payment obligation
Double[]?         // An optional array of doubles
```

A an optional value can be either present, written `some(v)`, or absent, written `none`.

```ergo
let i1 : Integer? = some(1); i1
let i2 : Integer? = none; i2
```

To operate on an optional type, you need to say what to do when the value is present and what to do when the value is not present. You can do that with a match statement:

This example:
```ergo
match some(1)
with let? x then "I found 1 :-)"
else "I found nothing :-("
```
should return `"I found 1 :-)"`.

This example:
```
match none
with let? x then "I found 1 :-)"
else "I found nothing :-("
```
should return `"I found nothing :-("`.

For conciseness, a few operators are also available on optional values. One can give a default value when the optional is `none` using the operator `??`. For instance:

```ergo
some(1) ?? 0       // Returns the integer 1
none ?? 0          // Returns the integer 0
```

You can also access the field inside an optional concept or an optional record using the operator `?.`. For instance:

```ergo
some({a:1})?.a     // Returns the optional value: some(1)
none?.a            // Returns the optional value: none
```

