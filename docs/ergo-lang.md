---
id: ergo-lang
title: Quick Reference
---

## Types

In Ergo, types are based on the Hyperledger Composer Modeling Language (referred to in this document as CTO models). https://hyperledger.github.io/composer/latest/reference/cto_language.htm. One can either import an existing CTO file, or declare types within Ergo itself. One can either import an existing CTO file, or declare types within Ergo
itself.

As we have seen in previous examples, one can refer to types in variable
declarations or in functions/clauses signatures.

### Atomic types

Here are the base types:

```
    Boolean
    String
    Double
    Long
    Integer
    DateTime
```

### Records

Here is a record (sometimes called a struct in other languages):

```
    { name: String, age: Long } // Record with two attributes:
                                // a name and an age
```

### Arrays

Here are array types:

```
    String[]                      // Array of String values
    Product[]                     // Array of Product (a declared type)
    { name: String, age: Long }[] // Array of records
```

### Enums

Here is how to declare an enumeration:

```
    define enum ProductType {
     DAIRY,
     BEEF,
     VEGETABLES
    }
```

### Classes

Here is how to declare CTO classes (either concepts or transactions in
CTO terminology):

```
    define concept Product {
       id : String
    }
    define concept Car extends Product {
       range : String
    }
    define transaction Response {
       rate : Double,
       penalty : Double
    }
    define enum ProductType {
     DAIRY,
     BEEF,
     VEGETABLES
    }
```

## Declarations

### Global Variables Declarations

It is possible to declare global variables and functions in Ergo:

```
    define variable pi = 3.1416
    define function area(radius Double) : Double {
      pi * r * r
    }
    area(1.5)
```

### Contracts Declarations

You can declare a contract over a template model as follows:

```
    contract ContractName over TemplateModel {
      clause C1(request : ReqType1) : RespType1 {
        // Expression
      }

      clause C2(request : ReqType2) : RespType2 {
        // Expression
      }
    }
```

When inside a contract, the `contract` variable contains the instance
of the Template for the current contract.

When inside a clause, the `clause` variable contains the part of the
Template instance specific to that clause.


## Statements

A clause's body is composed of statements. They may return a response or an error. They may also change the contract state or emit events.

### Return statement

Returning a response from a clause can be done by using a return statement:

```
     return 1                           // Return the integer one
     return new Payout{ amount: 39.99 } // Return a new Payout object
     return                             // Return nothing
```

### Throw statement

Returning an error can be done by using a throw statement:

```
     throw "Something went wrong"          // Return an error as a string
     return new Error{ message: "oops!" }  // Return an error as an object
```

### Enforce statement

Before a contract is enforceable some preconditions must be satisfied:
- Competent parties who have the legal capacity to contract
- Lawful subject matter
- Mutuality of obligation
- Consideration

The constructs below will be used to determine if the preconditions have been met and what actions to take if they are not

```
Example Prose
    Do the parties have adequate funds to execute this contract?  
```

One can check preconditions in a clause using enforce statements, as
follows:

```
    enforce x >= 0                     // Condition
    else throw "Something went wrong"; // Statement if condition is false
    return x+1                         // Statement if condition is true
```

The else part of the statement can be ommitted in which case Ergo
returns an error by default.

```
    enforce x >= 0;           // Condition
    return x+1                // Statement if condition is true
```

## Expressions

Computation in Ergo is written using expressions. Here are the
different kinds of expressions Ergo supports.

### Literal values

```
    "John Smith" // a string literal
    1            // an integer literal
    3.5e-10      // a floating point literal
```

### Operators

```
    1+2*3                // Arithmetic operators
    1 <= 3               // Comparison operators
    1 == 2
    2 > 1
    true or false        // Boolean operators
    true and false
    "Hello" ++ " World!" // String concatenation
```

### Local variable declarations

```
    define variable x = 1; // declares and initialize a variable
    x+2                    // rest of the expression, with variable x in scope
```

Local variables can also be declared with the shorter `let` form:

```
    let x = 1;             // declares and initialize a variable
    x+2                    // rest of the expression, with variable x in scope
```

Local variables can also be declared with a type:


```
    define variable name : String = "John"; // declares and initialize a string variable
    name ++ " Smith"                        // rest of the expression
    define variable x : Double = 3.1416     // declares and initialize a double variable
    sqrt(x)                                 // rest of the expression
```

### Conditional expressions

See also the [Conditional Expression Reference](ergo-conditional-expressions.md)  

```
    if x < 0   // Condition
    then -x+1  // Expression if condition is true
    else x+1   // Expression if condition is false
```

### Match expressions

Match expressions allow to check an expression against multiple possible
values:

```
    match fruitcode
      with 1 then "Apple"
      with 2 then "Apricot"
      else "Strange Fruit"
```

### Foreach expressions

Foreach expressions allow to apply an expression of every element in
an input array of values and returns a new array:

```
foreach x in [1,-2,3] return x+1
```

Foreach expressions can have an optional condition of the values being
iterated over:

```
    foreach x in [1,-2,3] where x > 0 return x+1
```

### Object Creation

Creating objects (such as concepts or events) can be done using
``new`` with the name of the concept and the values for each fields:

```
    new Person{
      name: "John Smith",
      age: 32
    }
```