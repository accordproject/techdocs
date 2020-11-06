---
id: accordproject-slc
title: Smart Legal Contracts
---

A Smart Legal Contract is a human-readable _and_ machine-readable agreement that is digital, consisting of natural language and computable components.

The human-readable nature of the document ensures that signatories, lawyers, contracting parties and others are able to understand the contract.

The machine-readable nature of the document enables it to be interpreted and executed by computers, making the document "smart".

Contracts drafted with Accord Project can contain both traditional and machine-readable clauses. For example, a Smart Legal Contract may include a smart payment clause while all of the other provisions of the contract (Definitions, Jurisdiction clause, Force Majeure clause, ...) are being documented solely in regular natural language text.

A Smart Legal Contract is a general term to refer to two compatible, architectural forms of contract:
- Machine-Readable Contracts, which tie legal text to data
- Machine-Executable Contracts, which tie legal text to data and executable code

### Machine-Readable Contracts

By combining Text and a data, a clause or contract becomes machine-readable.

For instance, the clause below for a [fixed rate loan](https://templates.accordproject.org/fixed-interests-static@0.2.0.html) includes natural language text coupled with variables. Together, these variables refer to some data for the clause and correspond to the 'deal points':

```tem
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{monthlyPayment}}.
```

To make sense of the data, a _Data Model_, expressed in the Concerto schema language, defines the variables for the template and their associated Data Types:

```ergo
  o Double loanAmount     // loanAmount is a floating-point number
  o Double rate           // rate is a floating-point number
  o Integer loanDuration  // loanDuration is an integer
  o Double monthlyPayment // monthlyPayment is a floating-point number
```

The Data Types allow a computer to validate values inserted into each of the `{{variable}}` placeholders (e.g., `2.5` is a valid `{{rate}}` but `January` isn't). In other words, the Data Model lets a computer make sense of the structure of (and data in) the clause. To learn more about Data Types see [Concerto Modeling](model-concerto).

The clause data (the 'deal points') can then be capture as a machine-readable representation:

```js
{
  "$class": "org.accordproject.interests.TemplateModel",
  "clauseId": "cec0a194-cd45-42f7-ab3e-7a673978602a",
  "loanAmount": 100000.0,
  "rate": 2.5,
  "loanDuration": 15
  "monthlyPayment": 667.0
}
```

The values entered into the template text are associated with the name of the variable e.g. `{{rate}} = 2.5%`. This provides the structure for understanding the clause and its contents.

### Machine-Executable Contracts

By adding Logic to a machine-readable clause or contract in the form of expressions - much like in a spreadsheet - the contract is able to execute operations based upon data included in the contract.

For instance, the clause below is a variant of the earlier [fixed rate loan](https://templates.accordproject.org/fixed-interests@0.2.0.html). While it is consistent with the previous one, the `{{monthlyPayment}}` variable is replaced with an [Ergo](logic-ergo) expression `monthlyPaymentFormula(loanAmount,rate,loanDuration)` which calculates the monthly interest rate based upon the values of the other variables: `{{loanAmount}}`, `{{rate}}`, and `{{loanDuration}}`.  To learn more about contract Logic see [Ergo Logic](logic-ergo).

```tem
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at a yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}.
```

This is a simple example of the benefits of Machine-Executable contract, here adding logic to ensure that the value of the `{{monthlyPayment}}` in the text is always consistent with the other variables in the clause. In this example, we display the contract text using the underlying [Markup](markup-template) format, instead of the rich-text output that would be found in [editor tools](started-resources#ecosystem-tools) and PDF outputs.

More complex examples, (e.g., how to add post-signature logic which responds to data sent to the contract or which triggers operations on external systems) can be found in the rest of this documentation.

