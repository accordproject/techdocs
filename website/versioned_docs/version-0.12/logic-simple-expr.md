---
id: logic-simple-expr
title: Simple Expressions
original_id: logic-simple-expr
---

## Literal values

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

## Operators

You can apply operators to values. Those can be used for arithmetic operations, to compare two values, to concatenate two string values, etc.

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

## Conditional expressions

Conditional expressions can be used to perform different computations depending on some condition:

```ergo
    if 1.0 < 0.0     // Condition
    then "negative"  // Expression if condition is true
    else "positive"  // Expression if condition is false
```

> Typing `return if 1.0 < 0.0 then "negative" else "positive"` in the [Ergo REPL](https://ergorepl.netlify.com), should answer `Response. "positive" : String`.

See also the [Conditional Expression Reference](ergo-reference.html#condition-expressions)

## Let bindings

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

> **TechNote:** let bindings in Ergo are immutable, in a way similar to other functional languages. A nice explanation can be found e.g., in the documentation for let bindings in [ReasonML](https://reasonml.github.io/docs/en/let-binding).

