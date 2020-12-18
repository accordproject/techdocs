---
id: logic-advanced-expr
title: Advanced Expressions
original_id: logic-advanced-expr
---

## Match

### Match against Values

Match expressions allow to check an expression against multiple possible
values:

```ergo
    match fruitcode
      with 1 then "Apple"
      with 2 then "Apricot"
      else "Strange Fruit"
```

Match expressions can also be used to match against enumerated values:
```ergo
    match state
      with NY then "Empire State"
      with NJ then "Garden State"
      else "Far from home state"
```

### Match against Types

Match expressions can be used to match a value against a class type:.

```
define constant products = [
    Product{ id : "Blender" },
    Car{ id : "Batmobile", range: "Infinite" },
    Product{ id : "Cup" }
  ]

foreach p in products
return
  match p
    with let x : Car then "Car (" ++ x.id ++ ") with range " ++ x.range
    with let x : Product then "Product (" ++ x.id ++ ")"
    else "Not a product"
```
Should return the array `["Product (Blender)", "Car (Batmobile) with range Infinite", "Product (Cup)"]`

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

Foreach expressions can iterate over multiple arrays. For example, the following foreach expression returns all all [Pythagorean triples](https://en.wikipedia.org/wiki/Pythagorean_triple):
```ergo
let nums = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];
foreach x in nums
foreach y in nums
foreach z in nums
where (x^2.0 + y^2.0 = z^2.0)
return {a: x, b: y, c: z}
```
and should return the array `[{a: 3.0, b: 4.0, c: 5.0}, {a: 4.0, b: 3.0, c: 5.0}, {a: 6.0, b: 8.0, c: 10.0}, {a: 8.0, b: 6.0, c: 10.0}]`.

## Template Literals

Template literals are similar to [String literals](logic-simple-expr#literal-values) but with the ability to embed Ergo expressions. They are written with between `` ` `` and may contains Ergo expressions inside `{{%` and `%}}`.

The following Ergo expressions illustrates the use of a template literal to construct a String describing the content of a record.
```
let law101 = {
    name: "Law for developers",
    fee: 29.99
  };
`Course "{{% law101.name %}}" (Cost: {{% law101.fee %}})`
```
Should return the string literal `"Course \"Law for developers\" (Cost: 29.99)"`.

## Formatting

One can use template formatting using the `Expr as "FORMAT"` Ergo expression. Supported formats are the same as those available in TemplateMark [Formatted Variables](markup-templatemark#formatted-variables).

For instance:
```
let payment = MonetaryAmount{ currencyCode: USD, doubleValue: 1129.99 };
payment as "K0,0.00"
```
Should return the string literal `"$1,129.99"`.
