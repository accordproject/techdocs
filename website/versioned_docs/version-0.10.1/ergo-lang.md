---
id: version-0.10.1-ergo-lang
title: Language Guide
original_id: ergo-lang
---

Ergo provides a simple expression language to describe computation. From those expressions one can write functions, clauses, and then whole contract logic. This page explains most of the Ergo concepts starting from simple expressions all the way to contracts.

Ergo is a _strongly typed_ language, which means it checks that the expressions you use are consistent (e.g., you can take the square root of `3.14` but not of `"pi!"`). The type system is here to help you write better and safer contract logic, but it also takes a little getting used to. This page also introduces Ergo types and how to work with them.

## Simple expressions

### Literal values

The simplest kind of expressions in Ergo are literal values.

```ergo
    "John Smith" // a String literal
    1            // an Integer literal
    3.0          // a Double literal
    3.5e-10      // another Double literal
    true         // the Boolean true
    false        // the Boolean false
```

Each line here is a separate expression. At the end of the line, the notation `// write something here` is a _comment_, which means it is a part of your Ergo program which is ignored by the Ergo compiler. It can be useful to document your code.

Every Ergo expression can be _evaluated_, which means it should compute some value. In the case of a literal value, the result of evaluation is simply itself (e.g., the expression `1` evaluates to the integer `1`).

> You can actually see the result of evaluating expressions by trying them out in the [Ergo REPL](https://ergorepl.netlify.com). You just have to prefix them with `return`: for instance, to evaluate the String literal `"John Smith"` type: `return "John Smith"` (followed by clicking the button 'Evaluate') in the REPL. This should answer: `Response. "John Smith" : String`.

### Operators

You can apply operators to values. Those can be used for arithmetics, to compare two values, to concatenate two string values, etc.

```ergo
    1.0 + 2.0 * 3.0      // arithmetic operators on Double
    -1.0
    1 + 2 * 3            // arithmetic operators on Integer
    -1

    1.0 <= 3.0           // comparison operators on Double
    1.0 = 2.0
    2.0 > 1.0
    1 <= 3               // comparison operators on Integer
    1 = 2
    2 > 1.0

    true or false        // Boolean disjunction
    true and false       // Boolean conjunction
    !true                // Negation

    "Hello" ++ " World!" // String concatenation
```

> Again, you can try those in the [Ergo REPL](https://ergorepl.netlify.com). For instance, typing `return true and false` should answer `Response. false : Boolean`, and typing `return 1.0 + 2.0 * 3.0` should answer: `Response. 7.0 : Double`.

### Conditional expressions

Conditional expressions can be used to perform different computations depending on some condition:

```ergo
    if 1.0 < 0.0     // Condition
    then "negative"  // Expression if condition is true
    else "positive"  // Expression if condition is false
```

> Typing `return if 1.0 < 0.0 then "negative" else "positive"` in the [Ergo REPL](https://ergorepl.netlify.com), should answer `Response. "positive" : String`.

See also the [Conditional Expression Reference](ergo-reference.html#condition-expressions)

### Let bindings

Local variables can be declared with `let`:

```ergo
    let x = 1;             // declares and initialize a variable
    x+2                    // rest of the expression, where x is in scope
```

Let bindings give a name to some intermediate result and allows you to reuse the corresponding value in multiple places:

```ergo
   let x = -1.0;           // bind x to the value -1.0
   if x < 0.0              // if x is negative
   then -x                 // then return the opposite of x
   else x                  // else return x
```

> **TechNote:** let bindings in Ergo are immutable, in a way similar to other functional languages. A nice explaination can be found e.g., in the documentation for let bindings in [ReasonML](https://reasonml.github.io/docs/en/let-binding).

## Introducing Types

We have so far talked about types only informally. When we wrote earlier:
```ergo
    "John Smith" // a String literal
    1            // an Integer literal
    ...
```
the comments mention that `"John Smith"` is of type `String`, and that `1` is of type `Integer`.

In reality, the Ergo compiler understands which types your expressions have and can detect whether those expressions apply to the right kinds of values or not.

### Atomic types

The simplest of types are atomic types which describe the various kinds of atomic values allowed in Ergo. Those atomic types are:

```ergo
    Boolean
    String
    Double
    Integer
    DateTime
```

### Type errors

The Ergo compiler understand types and can detect type errors when you write expressions. For instance, if you write: `1.0 + 2.0 * 3.0`, the Ergo compiler checks that the parameters for the operators `+` and `*` are indeed of type `Double`.

If you write `1.0 + 2.0 * "some text"` the Ergo compiler will detect that `"some text"` is of type `String`, which is not of the right type for the operator `*` and return an error.

> Typing `return 1.0 + 2.0 * "some text"` in the [Ergo REPL](https://ergorepl.netlify.com), should answer a type error:
> ```text
> Type error (at line 1 col 13). Operator * expected operands of
> type Double and Double but received operands of type Double and String.
> return 1.0 + 2.0 * "some text"
>              ^^^^^^^^^^^^^^^^^
> ```

### Type annotations

In a let bindings, you can also use a _type annotation_ to indicate which type you expect it to have.

```ergo
    let name : String = "John"; // declares and initialize a string variable
    name ++ " Smith"            // rest of the expression
```
or
```ergo
    let x : Double = 3.1416     // declares and initialize a double variable
    sqrt(x)                     // rest of the expression
```

This can be useful to document your code, or to remember what type you expect from an expression.

Again, the Ergo compiler will return a type error if the annotation is not consistent with the expression that computes the value for that let binding. For instance, the following will return a type error since `"pi!"` is not of type `Double`.

```ergo
    let x : Double = "pi!"; // TYPE ERROR: "pi!" is not a Double
    sqrt(x)
```

> Typing `return let x : Double = "pi!"; sqrt(x)` in the [Ergo REPL](https://ergorepl.netlify.com), should answer a type error:
> ```text
> Type error (at line 1 col 7). The let type annotation Double for
> the name x does not match the actual type String.
> return let x : Double = "pi!"; sqrt(x)
>        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> ```

This becomes particularly useful as your code becomes more complex. For instance the following expression will also trigger a type error:

```ergo
    let rate = 3.5;
    let name : String =
      if rate > 0.0
      then 3.14         // TYPE ERROR: 3.14 is not a String
      else "John";
    name ++ " Smith"
```

Since not all the cases of the `if ... then ... else ...` expressions return a value of type `String` which is the type annotation for `name`.

## Complex Values & Types

So far we only considered atomic values and types, such as string values or integers, which are not sufficient for most contracts. In Ergo, values and types are based on the [Composer Concerto Modeling Language](https://github.com/hyperledger/composer-concerto) (often referred to as CTO files). This provides a rich vocabulary to define the parameters of your contract, the information associated to contract participants, the structure of contract obligation, etc.

In Ergo, you can either import an existing CTO file or declare types directly within your code. Let us look at the different kinds of types you can define and how to create values with those types.

### Arrays

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

### Classes

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

### Records

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
### Enums

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

### Optional types

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

## Advanced Expressions

### Match

Match expressions allow to check an expression against multiple possible
values:

```ergo
    match fruitcode
      with 1 then "Apple"
      with 2 then "Apricot"
      else "Strange Fruit"
```

### Foreach

Foreach expressions allow to apply an expression of every element in
an input array of values and returns a new array:

```ergo
  foreach x in [1.0,-2.0,3.0] return x + 1.0
```

Foreach expressions can have an optional condition of the values being
iterated over:

```ergo
  foreach x in [1.0,-2.0,3.0] where x > 0.0 return x + 1.0
```

## Statements

A clause's body is composed of statements. Statements are a special kind of expression which can manipulate the contract state and emit obligations. Unlike other expressions they may return a response or an error.

### Contract data

When inside a statement, data about the contract -- either the contract parameters, clause parameters or contract state are available using the following Ergo keywords:
```ergo
    contract   // The contract parameters (from a contract template)
    clause     // Local clause parameters (from a clause template)
    state      // The contract state
```

For instance, if your contract template parameters and state information:
```ergo
    // Template parameters
    asset InstallmentSaleContract extends AccordContract {
      o AccordParty BUYER
      o AccordParty SELLER
      o Double INITIAL_DUE
      o Double INTEREST_RATE
      o Double TOTAL_DUE_BEFORE_CLOSING
      o Double MIN_PAYMENT
      o Double DUE_AT_CLOSING
      o Integer FIRST_MONTH
    }
    // Contract state
    enum ContractStatus {
      o WaitingForFirstDayOfNextMonth
      o Fulfilled
    }
    asset InstallmentSaleState extends AccordContractState {
      o ContractStatus status
      o Double balance_remaining
      o Integer next_payment_month
      o Double total_paid
   }
```

You can use the following expressions:
```ergo
    contract.BUYER
    state.balance_remaining
```

### Returning a response

Returning a response from a clause can be done by using a `return` statement:

```ergo
     return 1                       // Return the integer one
     return Payout{ amount: 39.99 } // Return a new Payout object
     return                         // Return nothing
```

> **TechNote:** the [Ergo REPL](https://ergorepl.netlify.com) takes statements as input which is why we had to add `return` to expressions in previous examples.

### Returning a failure

Returning a failure from a clause can be done by using a `throw` statement:
```ergo
    throw ErgoErrorResponse{ message: "This is wrong" }
    define concept MyOwnError extends ErgoErrorResponse{ fee: Double }
    throw MyOwnError{ message: "This is wrong and costs a fee", fee: 29.99 }
```

For convenience, Ergo provides a `failure` function which takes a string as part of its [standard library](ergo-stdlib.html#other-functions), so you can also write:
```ergo
    throw failure("This is wrong")
```

### Enforce statement

Before a contract is enforceable some preconditions must be satisfied:
- Competent parties who have the legal capacity to contract
- Lawful subject matter
- Mutuality of obligation
- Consideration

The constructs below will be used to determine if the preconditions have been met and what actions to take if they are not

```test
Example Prose
    Do the parties have adequate funds to execute this contract?  
```

One can check preconditions in a clause using enforce statements, as
follows:

```ergo
    enforce x >= 0.0                   // Condition
    else throw "Something went wrong"; // Statement if condition is false
    return x+1.0                       // Statement if condition is true
```

The else part of the statement can be ommitted in which case Ergo
returns an error by default.

```ergo
    enforce x >= 0.0;         // Condition
    return x+1.0              // Statement if condition is true
```

### Emitting obligations

When inside a clause or contract, you can emit (one or more) obligations as follows:
```ergo
   emit PaymentObligation{ amount: 29.99, description: "12 red roses" };
   emit PaymentObligation{ amount: 19.99, description: "12 white tulips" };
   return
```

Note that `emit` is always terminated by a `;` followed by another statement.

### Setting the contract state

When inside a clause or contract, you can change the contract state as follows:
```ergo
    set state InstallmentSaleState{
      stateId: "#1",
      status: "WaitingForFirstDayOfNextMonth",
      balance_remaining: contract.INITIAL_DUE,
      total_paid: 0.0,
      next_payment_month: contract.FIRST_MONTH
    };
    return
```

Note that `set state` is always terminated by a `;` followed by another statement.

## Declarations

Now that we have values, types, expressions and statements available, we can start writing more complex Ergo logic using by declaring functions, clauses and contracts.

### Constants and functions

It is possible to declare global constants and functions in Ergo:

```ergo
    define constant pi = 3.1416
    define function area(radius : Double) : Double {
      pi * r * r
    }
    area(1.5)
```

Global variables can also be declared with a type, and the return type of functions can be omitted:

```ergo
    define constant pi : Double = 3.1416
```

The return type of functions can be omitted:

```ergo
    define function area(radius : Double) {
      pi * r * r
    }
```

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

```ergo
    clause fragileGoods(request : DeliveryUpdate) : ContractPrice {
        ... // A statement computing the clause response
    }
```

Inside a contract, the `contract` variable contains the instance of the template model for the current contract.

### Contract Declarations

The legal requirements for a valid contract at law vary by jurisdiction and contract type. The requisite elements that typically necessary for the formation of a legally binding contract are (1) _offer_; (2) _acceptance_; (3) _consideration_; (4) _mutuality of obligation_; (5) _competency and capacity_; and, in certain circumstances, (6) _a written instrument_.

Ergo contacts address consideration, mutuality of obligation, competency and capacity through statements that are described in this document.

Furthermore, an Ergo contract is an immutable written document which obviates a good deal of the issues and conflicts which emerge from existing contracts in use today. In Ergo, a contract:
- represents an agreement between parties creating mutual and enforceable obligations; and
- is a code module that uses conditionals and functions to describe execution by the parties with their obligations. Contracts accept input data either directly from the associated natural language text or through request _transactions_. The contract then uses _clause functions_ to process it, and _return_ a result. 
Once a contract logic has been written within a template, it can be used over and over and over again. 

Instantiated contracts correspond to particular domain agreement. They combine functions and clauses to execute a specific agreement and to allow its automation. Many traditional contracts are “boilerplate” and as such are reusable in their specific legal domain, e.g., sale of goods.

You can declare a contract over a template model as follows. The `TemplateModel` is the data model for the parameters of the contract text.

```ergo
    contract ContractName over TemplateModel {
      clause C1(request : ReqType1) : RespType1 {
        // Statement
      }

      clause C2(request : ReqType2) : RespType2 {
        // Statement
      }
    }
```
 
### Contract State and Obligations

If your contract requires a state, or emits only certain kinds of obligations but not other, you can specify the corresponding types when declaring your contract:

```ergo
    contract ContractName over TemplateModel state MyState {
      clause C1(request : ReqType1) : RespType1 emits MyObligation {
        // Statement
      }

      clause C2(request : ReqType2) : RespType2 {
        // Statement
      }
    }
```

The state is always declared for the whole contract, while obligations can be declared individually for each clause.

## Modularity

Finally, we can place multiple Ergo declarations (functions, contracts, etc) into a library so it can be shared with other developers.

### Namespaces

Each Ergo file starts with a namespace declaration which provides a way to identify it uniquely:
```ergo
    namespace org.acme.mynamespace
```

### Libraries

A library is simply an Ergo file in a namespace which defines useful constants or functions. For instance:

```ergo
    namespace org.accordproject.ergo.money

    define constant days_in_a_year = 365.0
    define function compoundInterests(
      annualInterest : Double,
      numberOfDays : Double
    ) : Double {
        return (1.0 + annualInterest) ^ (numberOfDays / days_in_a_year)
    }   
```

### Import

You can then access this library in another Ergo file using import:
```ergo
namespace org.accordproject.promissorynote

import org.accordproject.cicero.runtime.*
import org.accordproject.time.*           // Imports the DateTime library
import org.accordproject.ergo.money.*     // Imports the money.ergo library

contract PromissoryNote over PromissoryNoteContract {
  clause check(request : Payment) : Result {
    let interestRate = contract.interestRate ?? 3.4;
    let outstanding = contract.amount.doubleValue - request.amountPaid.doubleValue;

    let numberOfDays =
      diffDurationAs(dateTime("17 May 2018 13:53:33 EST"),contract.date,"days").amount;
    let compounded =
      outstanding
    * compoundInterests(interestRate,  // Calls compoundInterests from the library!
                        numberOfDays);

    return Result{
      outstandingBalance: compounded
    }
  }
}
```

> **TechNote:** the namespace and import handling in Ergo allows you to access either existing CTO models or Ergo libraries in the same way.

