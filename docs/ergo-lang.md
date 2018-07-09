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

### Contract Declarations
The legal requirements for a valid contract at law vary by jurisdiction and contract type. The requisite elements that typically necessary for the formation of a legally binding contract are (1) _offer_; (2) _acceptance_; (3) _consideration_; (4) _mutuality of obligation_; (5) _competency and capacity_; and, in certain circumstances, (6) _a written instrument_.

Ergo contacts address consideration, mutuality of obligation, competency and capacity through statements that are described in this document.

Furthermore, an Ergo contract is an immutable written document which obviates a good deal of the issues and conflicts which emerge from existing contracts in use today. In Ergo, a contract:
- represents an agreement between parties creating mutual and enforceable obligations; and
- is a code module that uses conditionals and functions to describe execution by the parties with their obligations. Contracts accept input data either directly from the associated natural language text or through request _transactions_. The contract then uses _clause functions_ to process it, and _return_ a result. 
Once a contract logic has been written within a template, it can be used over and over and over again. 

Instantiated contracts correspond to particular domain agreement. They combine functions and clauses to execute a specific agreement and to allow its automation. Many traditional contracts are “boilerplate” and as such are reusable in their specific legal domain, e.g., sale of goods.

You can declare a contract over a template model as follows. The `TemplateModel` is the data model for the parameters of the contract text.

    contract ContractName over TemplateModel {
      clause C1(request : ReqType1) : RespType1 {
        // Expression
      }

      clause C2(request : ReqType2) : RespType2 {
        // Expression
      }
    }
    
 
### Clauses
In Ergo, a logical clause like the example clause noted below is represented as a “function” (akin to a “method” in languages like Java) that resides within its parent contract (akin to a “class” in a language like Java). 

> Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it is reusable , i.e., it can be used over and over and over again. 
> Functions can be "called" from within other functions or from a clause. 
> Functions have to be declared before they can be used. So functions "encapsulate" a task. They combine statements and expressions carried out as instructions which accomplish a specific task to allow their execution using a single line of code. Most programming languages provide libraries of built in functions (i.e., commonly used tasks like computing the square root of a number). 
> Functions accelerate development and facilitate the reuse of code which performs common tasks. 

The declaration of a Clause that contains the clause’s name, request type and return type collectively referred to as the ‘signature’ of the function. 

#### Example Prose

Additionally the Equipment should have proper devices on it to record any shock during transportation as any instance of acceleration outside the bounds of -0.5g and 0.5g. Each shock shall reduce the Contract Price by $5.00

#### Syntax

    clause fragileGoods(request DeliveryUpdate) : ContractPrice {
        ... // An expression computing the result of the clause
    }


Inside a contract, the `contract` variable contains the instance of the template model for the current contract.

## Statements

A clause's body is composed of statements. They may return a response or an error. They may also change the contract state or emit events.

### Return statement

Returning a response from a clause can be done by using a return statement:

```
     return 1                           // Return the integer one
     return new Payout{ amount: 39.99 } // Return a new Payout object
     return                             // Return nothing
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
