---
id: spec-template
title: Template Structure
original_id: spec-template
---

An Accord Project template is composed of three elements: 

- Natural Language, the grammar for the legal text of the template
- Model, the data model that backs the template 
- Logic, the executable business logic for the template

![Cicero Template](/docs/assets/template.png)

When combined these three elements allow templates to be edited, analyzed, queried and executed.

## Model

The first step in converting the late delivery and penalty clause to use Accord Project is to identify the data elements that are captured by the clause (aka variables). These are:
- Whether the clause includes a force majeure provision
- Temporal duration for the penalty provision
- Percentage for the penalty provision
- Maximum penalty percentage (cap)
- Temporal duration after which the buyer may terminate the contract

These data elements comprise the Template Model for the clause. The template model is critical in that it defines formal semantics for the clause, and it is a locale neutral representation of the data that a template requires. It also enables powerful search, filtering and organization of templates, for example by finding all templates related to concept X, or all templates that can process a request of type Y.

They are captured formally using the [Concerto modeling language](https://github.com/hyperledger/composer-concerto) (CML). CML is a lightweight schema language that defines namespaces, types, and relationships between types. It includes first-class support for modeling participants (individuals or companies), assets, transactions, enumerations, concepts, and events, and includes the typical features of an Object Oriented modeling language, including inheritance, meta-annotations (decorators), and field specific validators. CML also defines a serialization of instances to JSON and a validator for instances, making it easy to integrate with a wide variety of JSON-capable external systems.

> Note that while the CML format was originally designed for use in Hyperledger Composer, the Accord Project Specification is not limited to executing on Hyperledger Composer. CML is merely a schema language and can be supported on any distributed ledger, or even non-distributed ledger technology, written in any programming language.

Concerto models may be published to GitHub or any HTTP(S) website, and models can declare dependencies on other models, reducing the technical barrier to entry to creating an eco-system of mutually reinforcing industry standard models.

In CML format the Template Model for the late delivery and penalty clause looks like this:

```ergo
/**
 * Defines the data model for the LateDeliveryAndPenalty template.
 * This defines the structure of the abstract syntax tree that the parser for the template
 * must generate from input source text.
 */
asset TemplateModel extends AccordClause {
  /**
   * Does the clause include a force majeure provision?
   */
  o Boolean forceMajeure

  /**
   * For every penaltyDuration that the goods are late
   */
  o Duration penaltyDuration

  /**
   * Seller pays the buyer penaltyPercentage % of the value of the goods
   */
  o Double penaltyPercentage

  /**
   * Round up to the minimum fraction of a penaltyDuration
   */
  o Duration fractionalPart

  /**
   * Up to capPercentage % of the value of the goods
   */
  o Double capPercentage

  /**
   * If the goods are >= termination late then the buyer may terminate the contract
   */
  o Duration termination
}
```

The template model for the clause captures unambiguously the data types defined by the clause. The Duration data type is imported from an Accord Project namespace, which defines a library of useful reusable basic types for contracts. Only one asset within the model files for the template may extend the `AccordClause` or `AccordContract` base type.

> Terminology: a Template has a Template Model

## Grammar

The next step in making the clause executable is to relate the template model to the natural language text that describes the legally enforceable clause. This is accomplished by taking the natural language for the clause and inserting bindings to the template model, using the Accord Project markup language. We call this the _grammar_ for the template (or template grammar) as it determines what a syntactically valid clause can look like.

Here is the marked-up template:

```md
   Late Delivery and Penalty. In case of delayed delivery[{" except for Force
   Majeure cases,":? forceMajeure}] the Seller shall pay to the Buyer for every
   [{penaltyDuration}] of delay penalty amounting to [{penaltyPercentage}]% of
   the total value of the Equipment whose delivery has been delayed. Any
   fractional part of a [{fractionalPart}] is to be considered a full
   [{fractionalPart}]. The total amount of penalty shall not however, exceed
   [{capPercentage}]% of the total value of the Equipment involved in late
   delivery. If the delay is more than [{termination}], the Buyer is entitled to
   terminate this Contract.
```

The marked-up template is UTF-8 text with markup to introduce named variables. Each variable starts with `[{` and ends with `}]`. Let’s take a look at each variable in turn.

- `[{"except for Force Majeure cases,":? forceMajeure}]` : this variable definition is called a Boolean Assignment. It states that if the optional text “except for Force Majeure cases,” is present in the clause, then the Boolean forceMajeure property on the template model should be set to true. Otherwise the property should be set to false.
- `[{penaltyDuration}]` : this variable definition is a binding. It states that the variable is bound to the  penaltyDuration property in the template model. Implicitly it also states that the variable is of type Duration because that is the type of penaltyDuration in the model.
- `[{penaltyPercentage}]` : another variable binding, this time to the penaltyPercentage property in the model.
- `[{fractionalPart}]` : another variable binding, this time to the fractionalPart property in the model. Note that this occurs twice in the template grammar - however a smart editor for the clause should auto-replace all occurrences.
- `[{capPercentage}]` : this is a binding, setting the capPercentage property on the template model.
- `[{termination}]` : this is a binding, setting the termination property on the template model.

To recap, there are currently 2 kinds of variable definition supported:

1. Boolean Assignment: sets a boolean property in the model based on the presence of text in the clause
2. Binding: set a property in the model based on a value supplied in the clause

> Note: Support for other types of binding may be added in the future as the need arise.

Note that any types within the model may have an associated template grammar file. For example the Duration type may have a template grammar that captures the syntax for how to enter calendar durations in English or French etc. These dependent grammars are merged into the template grammar for the root type for the template (the asset that either extends `AccordClause` or `AccordContract`).

> Terminology: a Template Grammar is a marked-up template that declares variables. Variables are bound to the Template Model. The Template Grammar and the Template Model are used to generate a parser for the template, allowing syntactically valid instances (clauses) to be created.

Reference information for the markup that is supported in Cicero can be found in [Markup Reference](cicero-markup).

## Logic
The last part of the puzzle for the template is to capture the logic of the template in a form that a computer can execute. No, computers cannot (yet) execute the natural language text, with all its interesting legal ambiguities!
Accord Project is extensible and supports pluggable mechanisms to capture the template logic. The accord-engine package acts as a shim, bootstrapping a kernel for a given template logic language.

Accord Project ships with the ability to execute template logic expressed using the [Ergo domain specific language](logic-ergo).

The example below illustrates the [Ergo](logic-ergo) logic for the late delivery and penalty clause.

```
contract LateDeliveryAndPenalty over LateDeliveryAndPenaltyContract {
  clause latedeliveryandpenalty(request : LateDeliveryAndPenaltyRequest) : LateDeliveryAndPenaltyResponse emits PaymentObligation {
    // Guard against calling late delivery clause too early
    let agreed = request.agreedDelivery;
    enforce isBefore(agreed,now()) else
    throw ErgoErrorResponse{ message : "Cannot exercise late delivery before delivery date" };

    // Handling for force majeure
    enforce !contract.forceMajeure or !request.forceMajeure else
    return LateDeliveryAndPenaltyResponse{
      penalty: 0.0,
      buyerMayTerminate: true
    };

    // If force majeure does not apply, calculate the penalty
    let diff = diffDurationAs(now,agreed,"days");
    let diffRatio = divideDuration(diff,durationAs(contract.penaltyDuration,"days"));
    // Penalty formula
    let penalty = diffRatio * contract.penaltyPercentage/100.0 * request.goodsValue;
    // Penalty may be capped
    let capped = min([penalty, contract.capPercentage/100.0 * request.goodsValue]);
    // Return the response with the penalty and termination determination
    return LateDeliveryAndPenaltyResponse{
      penalty: capped,
      buyerMayTerminate: diff.amount > durationAs(contract.termination,"days").amount
    }
  }
}
```

It contains a single clause called `latedeliveryandpenalty` that produces a `LateDeliveryAndPenaltyResponse` in response to a `LateDeliveryAndPenaltyRequest`. This contract is stateless and does not emit events. See below for a description of contract state and events.

