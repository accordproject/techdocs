---
id: version-0.10.1-accordproject-specification
title: Template Specification
original_id: accordproject-specification
---

- Version: 0.7
- Status: Working Draft

## Overview
This specification defines the structure of Accord Project Templates: legally enforceable natural language text that is bound to executable business logic.

## Goals
Accord Project templates bind legally enforceable natural language text to executable business logic. They provide the foundational technology for legal professionals to formalise a set of legally enforceable executable clauses (smart clauses) and contracts.

The templates are designed to be easy and quick to create from existing legal contracts by legal professionals, and then made executable by legal technologists or programmers using the [Ergo](ergo) domain specific language.

Templates may support one or more locales, allowing the template to be edited or visualized in different languages, whilst preserving a single locale-neutral executable representation.

Executable smart clauses are easy to hash for storage in content-based addressing systems (out of scope for this specification).

Templates support extensible representations of their business logic, with the initial reference implementation based on execution of [Ergo](ergo) code using a Node.js VM. The Accord Project encourages contributors to participate in the creation of business logic languages to capture contract logic, as well as the associated runtimes that can plug into the Accord Project extensibility mechanisms. It is expected that many different paradigms (rule-based, logic inference, temporal, finite state machine, functional) will be tested. It is the opinion of the authors that this phase of experimentation is vital and that it is too early to lock the specification down to a single representation for the business logic for a clause.

The Javascript reference engine for the Accord Project Template Specification is designed to be easily embeddable across a wide-variety of form factors: web, middleware, SaaS, on-blockchain execution and off-blockchain execution.
The templates, clauses and the engine are designed to integrate into a traditional DevOps practices and CI/CD, including unit and system testing and code coverage analysis.

## Key Concepts and High-level Architecture

![Overview](assets/cicero-spec-overview.png)

### Step 1: Creation of Smart Clause Template
A legal professional analyzes a contract to determine the frequently used/standard clauses that are present. Clauses that are amenable to automation are extracted into a smart clause template. The template (more details follow) is comprised of the annotated legal text and an accompanying template data model that defines the assets, participants, concepts and events that are relevant to the clause. The business logic for the smart clause is coded by a developer (with review and in collaboration with the legal professional, or the suitably trained legal professional can code the logic themselves using a legal contract DSL).

> Concept Template Data Model. The variables and expressions in a template are expressed in terms of a typed data model, that captures all the concepts of relevance to the clause. The data model technology allows importing concepts from namespaces, allowing concepts to be shared across templates.

### Step 3: Generation of the Template Parser
The [Cicero Open Source project](https://github.com/accordproject/cicero) contains code that can automatically generate a parser from the annotated template text (template grammar) and the associated template data model. The parser generation is completely automatic and supports customization of types and nested grammars.

### Step 4: Create a Smart Clause
The generated template parser can now be used to dynamically edit and validate source smart clause text (potentially using code completion, error reporting etc). The editor technology can be embedded on a webpage, or executed as a SaaS service, or run within an IDE.

### Concept 5: Smart Clause (instance of a Template) 
The output of the Template Parser is an instance of the Template Model (a JSON abstract syntax tree that can be deployed to the engine). It captures a machine readable (and hashable) representation of all the executable data extracted from the smart clause text.

### Step 6: Invoke Engine with a Request
The application feeds JSON documents to the engine that represents the request instances, which themselves have been modelled in the Template Data Model. These requests represent events of significance to the clause from the outside world.

### Step 7: Execute and Return Response
The engine invokes the business logic for the template, passing in the parameterization data, a context object and the incoming request. The engine validates the response and then returns it to the caller. The structure of the response is modelled in the Template Data Model.

Once a template has been created (Steps 1 to 4), it can be used to _instantiate_ a contract (Step 5) which itself can be executed by the template engine (Steps 5 to 6). Both contract instantiation and execution are shown in greater details on the following figure:

![Execution Context](assets/execution_context.png)

[Cicero](cicero.md), which implements the Accord Project specification, includes a Node.js VM based execution engine for contracts created from Accord Project templates. The engine routes incoming requests to template functions, performs data validation, executes the functions within a sandboxed environment, and then validates the response. It can also update the contract state and emit events and/or contract obligations back to the caller.

## Late Delivery and Penalty

In the rest of this specification, we will use the Late Delivery And Penalty legal clause as an example. It is a common clause in a legal contract related to the delivery of good or services, and in some circumstances may be amenable to automation.

The Late Delivery And Penalty clause in the typical legal contract looks like this:

```text
   Late Delivery and Penalty. In case of delayed delivery except for Force
   Majeure cases, the Seller shall pay to the Buyer for every
   2 weeks of delay penalty amounting to 10.5% of
   the total value of the Equipment whose delivery has been delayed. Any
   fractional part of a week is to be considered a full
   week. The total amount of penalty shall not however, exceed
   55% of the total value of the Equipment involved in late
   delivery. If the delay is more than 10 weeks, the Buyer is entitled to
   terminate this Contract.
```

This specification can be used to convert the late delivery and penalty clause into a reusable fragment (a template), that can be executed by a suitable runtime. The complete template can be found in the [Accord Project Template Library](https://templates.accordproject.org/latedeliveryandpenalty@0.8.1.html).


## Template

An Accord Project template is composed of three elements: 

- Template Grammar, the natural language text for the template 
- Template Model, the data model that backs the template 
- Logic, the executable business logic for the template

![Cicero Template](assets/template.png)

When combined these three elements allow templates to be edited, analyzed, queried and executed.

### Model
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

### Grammar
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

The marked-up template is UTF-8 text with markup to introduce named variables Each variable starts with `[{` and ends with `}]`. Let’s take a look at each variable in turn.

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

### Logic
The last part of the puzzle for the template is to capture the logic of the template in a form that a computer can execute. No, computers cannot (yet) execute the natural language text, with all its interesting legal ambiguities!
Accord Project is extensible and supports pluggable mechanisms to capture the template logic. The accord-engine package acts as a shim, bootstrapping a kernel for a given template logic language.

Accord Project ships with the ability to execute template logic expressed using the [Ergo domain specific language](ergo-lang.md).

The example below illustrates the [Ergo](ergo-lang.md) logic for the late delivery and penalty clause.

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

## Template Instantiation

### Contract

A contract is an instance of a Contract Template, where the variables for the template have been set to specific values. A Contract may be instantiated by either parsing natural language text that conforms to the structure of the template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the template.

A Contract is composed of a set of Clauses. A Contract may have a state. Many contracts require state, for example, to remember the last time a contracting party made a payment. A contract may optionally be attached to a state object, giving the logic of the contract read and write access to the contract state.

### Clause 

Clause is an instance of a Clause Template, where the variables for the template have been set to specific values.
A Clause may be instantiated by either parsing natural language text that conforms to the structure of the 
template grammar, or may be instantiated from a JSON object that is an instance of the Template Model for the
template.

The logic for a Clause is implemented as a function, each of which takes a request and produces a response. The logic for a clause may optionally emit events. A clause has access to the properties and the state of its owning contract.

## Contract Execution

### Interfacing the Template with the Outside World

Given the template grammar and the template model above we can now edit (parameterise) the template to create a clause (an instance of the template).

Next we need to ground the template to events that are happening in the real-world: packages are getting shipped, delivered, signed-for etc. We want those transactions to be routed to the template, so that it is aware of them and can take appropriate action. In this case the action is simply to calculate the penalty amount and signal whether the buyer may terminate the contract.

### Transactions

Transactions are used to model the interactions between a contract or clause and the real world. Transactions are used for both inbound messages (requests) and as the synchronous return values (responses) from the logic of clauses or contracts.

#### Requests

Example of requests include:

- A party has made a payment
- A party has signed for the goods, accepting delivery
- A temperature sensor reading from a shipping container
- A location of a truck from a GPS sensor

Accord Project uses CML again to define the structure of the data that the template requires from the outside world. For the late delivery and penalty clause, this looks as follows:

```
/**
 * Defines the input data required by the template
 */
transaction LateDeliveryAndPenaltyRequest {

  /**
   * Are we in a force majeure situation? 
   */
  o Boolean forceMajeure

  /**
   * What was the agreed delivery date for the goods?
   */
  o DateTime agreedDelivery

  /**
   * If the goods have been delivered, when were they delivered?
   * the “optional” keyword means that if the goods have not yet been delivered, the deliveredAt parameter may be omitted from the request.
   */
  o DateTime deliveredAt optional

  /**
   * What is the value of the goods?
   */
  o Double goodsValue
}
```

Given an instance of LateDeliveryAndPenaltyRequest the clause can calculate the current penalty amount and whether the buyer may terminate. The result of that calculation can be returned back to the caller as a response.

#### Responses

Example responses:

- Cost of shipping the goods (minus late penalty) was $256
- Party A has breached the terms of the contract
- Volume discount for this quarter is now 3.5%

Accord Project uses CML again to define the structure of the data that the template returns to the outside world. For the late delivery and penalty clause, this looks as follows:

```
/**
 * Defines the output data for the template
 */
transaction LateDeliveryAndPenaltyResponse {
  /**
   * The penalty to be paid by the seller.
   * In a scenario where deliveredAt was omitted, we might expect “penalty” to be NULL.
   * Arguably, “penalty” should also be an “optional” type, to distinguish between a scenario where penalty is undefined, and a scenario where penalty is known to be 0.
   */
  o Double penalty

  /**
   * Whether the buyer may terminate the contract 
   */
  o Boolean buyerMayTerminate
}
```

Here we are simply stating that execution this template will produce an instance of LateDeliveryAndPenaltyResponse.

#### Event

The logic of a contract or clause may optionally emit events. Events are typically used by the contract to indicate that some asynchronous action should occur in the real-world, such as notifying a party to the contract that they need to take some action, or even, triggering an automated payment or invoice.

### State

A contract template may optionally be stateful, and declare a state type.

### Emitted Types

The logic for a template may optionally emit event types.

## Packaging

The artefacts that define a template are:
- Metadata, such as name and version
- CML models, which define the template model, request, response and any required types
- Template grammar for each supported locale
- A sample instance, used to bootstrap editing, for each supported locale
- Executable business logic

Templates are typically packaged and distributed as Cicero Template Archive (`.cta`) files, however they may also be read from: a directory, http(s) URL, the Accord Project [template library](https://templates.accordproject.org),  the npm package manager. Each of these distribution mechanisms support slightly different use cases:

- Directory: useful during testing, allows changes to the template to be quickly tested with no need to re-package
- URL: allows templates to be published to a stable web address
- Accord Projecte template library maintains a curated set of Open Source templates
- npm: allows dependencies on templates to be easily declared for Node.js and browser based applications. Integrates with CI/CD tools.

### Metadata
The metadata for a Template is stored in the  /package.json text file in JSON format.

```
{
    "name": "latedeliveryandpenalty",
    "version": "0.4.0",
    "description": "A sample Late Delivery And Penalty clause.",
    "cicero": {
        "template": "clause",
        "language": "ergo",
        "version": "^0.6.0"
    }
}
```

The name property must consist of [a-z][A-Z][.]. It is strongly recommended that the name be prefixed with the domain name of the author of the smart clause, to minimise naming collisions. The version property must be a semantic version of the form major.minor.micro [0-9].[0-9].[0.9]. Note that this data format ensures that a Template can be published to the npm package manager for either global or private (enterprise-wide) distribution.

The `cicero` property of a template specifies the following metadata:
- template: must either be `clause` for a clause template or `contract` for a contract templates
- language: the implementation language for the logic of the language. Current supported values are `ergo` or `javascript`
- version: the compatability statement with a Cicero engine version. This is an npm [semver](https://semver.npmjs.com) specification.

Note that additional properties such as locales and jurisdictions may be added as future needs arise.

### README.md
The root of the template may also contain a markdown file to explain the purpose and semantics of the template. This file may be displayed by tools to preview the template or provide usage instructions.

### Template Grammars
The grammar files for the template are stored in the  /grammar/ folder.

> Note that support for per-locale grammar files in TBD.

### Data Model

The data model for a smart clause is stored in a set of files under the `/model` folder. The data model files must be in the format defined using the Composer Concerto modeling language. All data models for the template are in-scope and types from all namespaces may be imported.

Using the ability to convert CML models to UML we can even visualise all the required types (model, request, response) we have modelled graphically:

![UML diagram](assets/cicero-spec-uml.png)

### Execution Logic
The Ergo execution logic for a smart clause is stored under the /lib folder.

## Template Library

Packaged templates may be organized into a Template Library, typically stored on GitHub (either public or private).  For example, here is the source of the Open Source Accord Project template library: https://templates.accordproject.org

## Links and References

- Composer Concerto : https://github.com/hyperledger/composer-concerto
- Accord Project : https://www.accordproject.org

