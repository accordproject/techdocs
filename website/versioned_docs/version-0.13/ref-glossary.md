---
id: ref-glossary
title: Glossary
---

## Variable

Variables function as ‘placeholders’ for information to be added when a template is used. Variables are the information that will change between usages of a Template. Here as an example of the text of a contract with three Variables defined:

```
Upon the signing of this Agreement, {{buyer}} shall pay {{amount}} to {{seller}}.
```

## Data Model

A Data Model is used to express the variables that are contained within a Template in a structured way. A Data Model provides us with the structure of the ‘fields’ in the contract which are completed when the templated is used for an agreement. For example, ‘Price’ would be a variable name against which a value, say $100, is entered. This enables us to create a contract document that has a definite structure underlying it rather than simply lines of text.

The Data Model is used to create a machine-readable representation of the text of the contract. It does this by creating a link with the text of the contract by defining the Variables that should exist within the contract along with an associated data type. The linkage between the text and the data model is created by referencing the variable in both the model and the text.


For example, if the text is:
```
Upon the signing of this Agreement, {{buyer}} shall pay {{amount}} to {{seller}}.
```

The model will include `buyer`, `amount`, and `seller`. A data type and a value is assigned against each of these variables.

### Components of Data Models

Data models consist of two core components:

- Variable Name: The name of the ‘placeholder’ for data to be added into a template to create an instance of the contract. By naming variables, we are able to specify what data should be entered into that placeholder in the contract.
- Data Type: The data type defines what type, or format, of data should be inserted in the ‘placeholder’.


The **value** is the actual data that is input into the ‘placeholder’. The value is displayed instead of the name of the variable in the Text. For example:

```md
Upon the signing of this Agreement, "Steve" shall pay 100.0 USD to "Dan".
```

In the model, this is represented as:

  | Variable Name | Data type | Value |
  |---------------|-----------|-------|
  | buyer  | `String` | Steve |
  | amount | `MonetaryAmount` | 100.0 USD |
  | seller | `String` | Dan |

 Here, `amount` should be a combination of a decimalized value (a double) and a currency code, as opposed to an alphanumeric value, and `buyer` and `seller` should be a combination of alphanumeric characters. This ensures that invalid data cannot be added into the contract, much like letters cannot be added into a credit card section of a web form.
