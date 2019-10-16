---
id: markup-variables-blocks
title: Variables and Blocks
---

Grammar
---

In order to make a clause executable, there needs to be a link to relate the template model to the natural language text that describes the legally enforceable clause. By inserting bindings to the template model into the natural language for the clause via the Accord Project markup language, we create what we call the template grammar. This determines what a syntactically valid clause may look like.

Variables
---

The marked-up template is `UTF-8` text with markup to introduce named variables. Variables create (structured) text and support the parsing and generation of the document text, and do not require Ergo knowledge.

Parsing text translates it into [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON), which then can be used to check the validity in relation to the model. Generating text takes the JSON and translates it back into natural language text.

Each variable starts with `{{` and ends with `}}`:

```handlebars
{{firstName}}                       // Source variable (used for parsing and rendering)
{{deliveryDate as "MMMM, DD YYYY"}} // Source variable with date formatting
```

To see this in more context, we will look at the Late Delivery and Penalty template (found at the [Cicero Template Library](https://templates.accordproject.org/)):

```handlebars
Late Delivery and Penalty. In case of delayed delivery {{" except for Force Majeure cases,"
:? forceMajeure}} the Seller shall pay to the Buyer for every {{penaltyDuration}} of delay 
penalty amounting to {{penaltyPercentage}}% of the total value of the Equipment whose 
delivery has been delayed. Any fractional part of a {{fractionalPart}} is to be considered 
a full {{fractionalPart}}. The total amount of penalty shall not however, exceed 
{{capPercentage}}% of the total value of the Equipment involved in late delivery. If the 
delay is more than {{termination}}, the Buyer is entitled to terminate this Contract.
```

Note that within these variables, we are using camel case named variables. These will be defined in the [Concerto Model](https://docs.accordproject.org/docs/model-concerto.html). This is described a bit more in depth in the [Template Structure](https://docs.accordproject.org/docs/spec-template.html) section of the [Template Specification](https://docs.accordproject.org/docs/spec-overview.html) docs.

This functionality provides us with the ability to bind variables into the natural language, and this concept of a variable extends further than a single value. We can insert a block of variables or even complex [Ergo logic expressions](https://docs.accordproject.org/docs/markup-expr.html),

Block Formulas
---

Variables can be expanded into blocks and conditionals, such as ordered lists or `if...else` formulas. The functionality is extended from basic variables, so these block variables also create (structured) text and support the parsing and generation of the document text, and do not require Ergo knowledge.

Block Formulas of kind `kind` with scope `scope` and parameters `params` are quoted with the following syntax: 

```handlebars
{{#kind scope params}}
...
{{/kind}}
```

### Unordered Lists

```handlebars
{{#ulist rates}}
{{volumeAbove}}$ million <= Volume < {{volumeUpTo}}$ million : {{rate}}%
{{/ulist}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

```json
{
    "$class": "org.accordproject.volumediscountlist.VolumeDiscountRequest",
    "netAnnualChargeVolume": 10.4
}
```

Which results in the following markdown text:

```md
- 0.0$ million <= Volume < 1.0$ million : 3.1%
- 1.0$ million <= Volume < 10.0$ million : 3.1%
- 10.0$ million <= Volume < 50.0$ million : 2.9%
- 50.0$ million <= Volume < 500.0$ million : 2.5%
- 500.0$ million <= Volume < 1000.0$ million : 1.2%
- 1000.0$ million <= Volume < 1000000.0$ million : 0.1%
```

### Ordered Lists

```handlebars
{{#olist rates}}
{{volumeAbove}}$ million <= Volume < {{volumeUpTo}}$ million : {{rate}}%
{{/olist}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

```json
{
    "$class": "org.accordproject.volumediscountlist.VolumeDiscountRequest",
    "netAnnualChargeVolume": 10.4
}
```

Which results in the following markdown text:

```md
1. 0.0$ million <= Volume < 1.0$ million : 3.1%
1. 1.0$ million <= Volume < 10.0$ million : 3.1%
1. 10.0$ million <= Volume < 50.0$ million : 2.9%
1. 50.0$ million <= Volume < 500.0$ million : 2.5%
1. 500.0$ million <= Volume < 1000.0$ million : 1.2%
1. 1000.0$ million <= Volume < 1000000.0$ million : 0.1%
```

### Joined Lists

You create a list with a delimiter
```handlebars
{{#join rates ","}}
{{rate}}
{{/join}}
```

This code is rendered as markdown from a JSON object created through [Concerto](https://docs.accordproject.org/docs/model-concerto.html):

```json
{
    "$class": "org.accordproject.volumediscountlist.VolumeDiscountRequest",
    "netAnnualChargeVolume": 10.4
}
```

Which results in the following markdown text:

```md
3.1, 3.1, 2.9, 2.5, 1.2, 0.1
```

### Clauses

Block variable formulas support clauses to be defined inline within the markdown:

```handlebars
Payment
-------
{{#clause payment}}
As consideration in full for the rights granted herein, Licensee shall pay Licensor a one-time
fee in the amount of {{amountText}} ({{amount}}) upon execution of this Agreement, payable as
follows: {{paymentProcedure}}.
{{/clause}}
```
_Note_: There is no current support for clauses to be be imported.


### With

A `with` block can be utilized to set a context for the variable:

```handlebars
{{#with author}}
{{firstName}} {{lastName}}
{{/with}}
```

This enables a simpler approach to defining different values from the same object. Otherwise, we made need to use a [nested path computed expression](https://docs.accordproject.org/docs/markup-expr.html#nested-paths) for a slightly more verbose approach:

```handlebars
{{% author.firstName %}} {{% author.lastName %}}
```

### Conditionals

On the cusp of Block Variables without venturing into Ergo Expressions, we have support for defining a block with built in conditional logic:

```handlebars
{{#if forceMajeure}}
This is a force majeure
{{/if}}

{{#if isActive}}
  I'm active
{{else}}
  I'm not active
{{/if}}
```

Currently Unsupported
---

Common variables which are at the moment unsupported include the following:

- Tables
- Iterators Blocks
- Comments
- Whitespace control

Please visit our [Ergo](https://github.com/accordproject/ergo) and [Cicero](https://github.com/accordproject/cicero) repositories to contribute to supporting these in the future.