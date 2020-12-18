---
id: logic-advanced-expr
title: Advanced Expressions
original_id: logic-advanced-expr
---

## Match

Match expressions allow to check an expression against multiple possible
values:

```ergo
    match fruitcode
      with 1 then "Apple"
      with 2 then "Apricot"
      else "Strange Fruit"
```

## Foreach

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

