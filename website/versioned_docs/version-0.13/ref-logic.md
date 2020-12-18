---
id: ref-logic
title: Ergo Language Reference
original_id: ref-logic
---

## Lexical conventions

### File Extension

Ergo files have the ``.ergo`` extension.

### Blanks

Blank characters (such as space, tabulation, carriage return) are
ignored but they are used to separate identifiers.

### Comments

Comments come in two forms. Single line comments are introduced by the
two characters `//` and are terminated by the end of the current
line. Multi-line comments start with the two characters `/*` and are
terminated by the two characters `*/`. Multi-line comments can be
nested.

Here are examples of comments:

```ergo
    // This is a single line comment
    /* This comment spans multiple lines
       and it can also be /* nested */ */
```

### Reserved words

The following are reserved as keywords in Ergo. They cannot be used as identifiers.

```text
namespace, import, define, function, transaction, concept, event, asset,
participant, enum, extends, contract, over, clause, throws, emits, state, call,
enforce, if, then, else, let, foreach, return, in, where, throw,
constant, match, set, emit, with, or, and, true, false, unit, none
```

## Condition Expressions

Conditional statements, conditional expressions and conditional constructs are features of a programming language which perform different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false.  Conditional expressions (also known as `if` statements) allow us to conditionally execute Ergo code depending on the value of a test condition. If the test condition evaluates to `true` then the code on the `then` branch is evaluated. Otherwise, when the test condition evaluates to `false` then the `else` branch is evaluated.

### Example

```ergo
if delayInDays > 15.0 then
  BuyerMayTerminateResponse{};
else 
  BuyerMayNotTerminateResponse{}
```

### Legal Prose

For example, this corresponds to a conditional logic statement in legal
prose.

    If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.

### Syntax

```ergo
    if expression1 then     // Condition
      expression2           // Expression if condition is true
    else
      expression3           // Expression if condition is false
```

Where `expression1` is an Ergo expression that evaluates to a Boolean
value (i.e. `true` or `false`), and `expression2` and `expression3` are
Ergo expressions.

> Note that as with all Ergo expressions, new lines and indentation
> don't change the meaning of your code. However it is good practice to
> standardise the way that you using whitespace in your code to make it
> easier to read.

### Usage

If statements can be chained , i.e., `if ... then .... else if ... then ... else ...` to build more compound conditionals.

```ergo
if request.netAnnualChargeVolume < contract.firstVolume then
  return VolumeDiscountResponse{ discountRate: contract.firstRate }
else if request.netAnnualChargeVolume < contract.secondVolume then 
  return VolumeDiscountResponse{ discountRate: contract.secondRate }
else 
  return VolumeDiscountResponse{ discountRate: contract.thirdRate }
```

Conditional expressions can also be used as expressions, e.g., inside a constant declaration:

```ergo
define constant price = 42;
define constant message =  if price >i 100 then "High price" else "Low Price";
message;
```

The value of message after running this code will be `"Low Price"`.

### Related

-   [Match expression](ergo-reference#match-expressions) - where many
    alternative conditions check the same variable

## Match Expressions

Match expressions allow us to check an expression against multiple
possible values or patterns. If a match is found, then Ergo will
evaluate the corresponding expression.

> Match expressions are similar to `switch` statements in other
> programming languages

### Example

```ergo
match request.status
  with "CREATED" then
    new PayOut{ amount : contract.deliveryPrice }
  with "ARRIVED" then
    new PayOut{ amount : contract.deliveryPrice - shockPenalty }
  else
    new PayOut{ amount : 0.0 }
```

### Legal Prose

> Example needed.

### Syntax

```ergo
match expression0        
  with pattern1 then       // Repeat this line
    expression1            //    and this line
  else
    expression2
```

### Usage

You can use a match expression to look for patterns based on the type of
an expression.

```ergo
match response
    with let b1 : BuyerMayTerminateResponse then
        // Do something with b1
    with let b2 : BuyerMayNotTerminateResponse then
        // Do something with b2
    else
        // Do a default action
```

You can use it to match against an optional value.

```ergo
match maybe_response
    with let? b1 : BuyerMayTerminateResponse then
        // Do something when there is a response
    else
        // Do something else when there is no response
```

Often a match expression is a more concise way to represent a
conditional expression with a repeating, regular condition. For example:

```ergo
    if x = 1 then
      ...
    else if x = 2 then
      ...
    else if x = 3 then
      ...
    else if x = 4 then
      ...
    else
      ...
```

This is equivalent to the match expression:

```ergo
    match x
      with 1 then
        ...
      with 2 then
        ...
      with 3 then
        ...
      with 4 then
        ...
      else
        ...
```
