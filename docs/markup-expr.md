---
id: markup-expr
title: Expressions
---

Ergo Logic
---

In order to make a clause executable, there needs to be logic to act on the information linked between the template model to the natural language text that describes the legally enforceable clause. By defining computable logic based on the bindings between the template model and natural language text for the clause  via the Accord Project Ergo language, we create what we call the template logic. This determines how a syntactically valid clause performs.

Computed Expressions 
---

Computed expressions are like formulas, support generation of the document text, and require [Ergo](https://docs.accordproject.org/docs/logic-ergo.html) knowledge.

Expressions are quoted with `{{% ... %}}`

Many special purpose things in handlebars can be written as Ergo expressions:

### Nested Paths

Computing the paths to values within an object:

```tem
{{% author.name %}}
```

### Helpers

Function calls as helpers:

```tem
{{% roundn(rate,precision) %}}
```

### Literals

Function calls as literals:

```tem
{{% roundn(rate,2) %}}
```

### Iterators

Loop through items in the model inline the document:

```tem
{{% foreach p in products
    return `Product: {{ p.name }}` %}}
```

### Conditionals

Evaluation of an `if...else` statement inline:

```tem
{{% if state = "US"
    then address.state
    else address.country %}}
```

### String Concatenation

Computing the value of string concatenation inline:

```tem
{{% firstName ++ lastName %}}
```

Currently Unsupported
---

Some computed expressions which are at the moment unsupported include the following:

- Some specific conditionals:
```tem
{{% if forceMajeure
    then `This is a force majeure` %}}
```

- Enforce conditionals:
```tem
{{% enforce rate > 0.0 %}}
```

Please visit our [Ergo](https://github.com/accordproject/ergo) and [Cicero](https://github.com/accordproject/cicero) repositories to contribute to supporting these in the future.