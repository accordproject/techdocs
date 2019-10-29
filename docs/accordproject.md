---
id: accordproject
title: For Business
---

## What is the Accord Project?

Accord Project is an open source, non-profit initiative aimed at transforming contract management and contract automation by digitizing contracts.

The Accord Project defines a notion of a legal template with associated computing logic which is expressive, open-source, and portable. Accord Project templates are similar to a clause or contract template in any document format, but they can be read, interpreted, and run by a computer.

The goal of the Accord Project is to provide a common, standardized format for smart legal contracts.

## What is a Smart Legal Contract?

A Smart Legal Contract is a human-readable and machine-readable agreement that is digital, consisting of natural language and computable components. The machine-readable nature of the document enables it to be interpreted and executed by computers. It is this attribute that makes the document “smart”.

The human-readable nature of the document ensures that signatories, lawyers, contracting parties and others are able to understand the contract as well as enabling that contracts are able to consist of a hybrid of both ‘smart’ and ‘non-smart’ components. For example, a smart legal contract may consist of a smart payment clause with all of the other provisions of the contract (Definitions, Jurisdiction clause, Force Majeure clause, ...) being documented solely in regular natural language text.

A Smart Legal Contract is a general term to refer to two compatible, architectural forms of contract:   

### Machine-Readable Contracts (Text + Model)

By combining Text and a Data Model together, a contract becomes machine-readable. The clause below includes natural language text coupled with variables. Together, these variables form a Data Model for the clause comprised of the 'deal points':

```
## Fixed rate loan // See https://github.com/accordproject/cicero-template-library/tree/js-release-0.20/src/fixed-interests

This is a *fixed interest* loan to the amount of {{loanAmount}} 
at a yearly interest rate of {{rate}}% with a loan term of {{loanDuration}}, 
and monthly payments of {{monthlyPayment}}.
``` 

The Data Model, expressed in the [Concerto] schema language, defines the variables for the template and the associated data types: 

```
  o Double loanAmount // loanAmount is a Double
  o Double rate // rate is a Double 
  o Integer loanDuration // loanDuration is an Integer
```

The defined types provide a validation function for values inserted into the ```{{variable}}``` placeholders and understand the structure of the contract, e.g. 'what type of data is the ```{{rate}}``` variable? For more information on data types see **[WIP]**. 

The Template is then capable of being rendered as a machine-readable representation:

```
{
  "$class": "org.accordproject.interests.TemplateModel",
  "clauseId": "cec0a194-cd45-42f7-ab3e-7a673978602a",
  "loanAmount": 100000,
  "rate": 2.5,
  "loanDuration": 15
}
```

The values entered into the template text are associated with the name of the variable e.g. ```{{rate}} = 2.5%```. This provides the structure for understanding the contract and its contents. 

### Machine-Executable Contracts (Text + Model + Logic)

By additing Logic to a machine-readable contract in the form of expressions - much like spreadsheets - the contract is able to execute operations based upon data sent to the contract as well as triggering operations on external systems:

```
## Fixed rate loan

This is a *fixed interest* loan to the amount of {{loanAmount}} 
at a yearly interest rate of {{rate}}% with a loan term of {{loanDuration}}, 
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}.
``` 

This version is consistent with that above. The difference being that the ```{{monthlyPayment}}``` variable is replaced with an expression (written in [Ergo]) that calculates the monthly interest rate based upon the values of the other variables (i.e. ```{{loanAmount}}, {{rate}}, and {{loanDuration}}```). This expression is a simple example of adding logic to a clause. More complex examples are avilable in the [Model Repository]. 

### What are the Benefits?

It enables a contract to be easily searched, analyzed, queried, and understood. Using a modeled version of a contract, it is possible to extract a host of valuable data about a contract or series of contracts from certain data points (e.g. variables and their values).

In addition, it provides the necessary structure to enable contracts to be “smart” by adding executable logic. Without a structured data model it is difficult to ensure all of the necessary data is present in the contract, the data is valid, and that the logic and the text reflect one another.

For more information about smart legal contracts, and how they are different from "smart contracts", please visit the [Accord Project FAQ Page](https://www.accordproject.org/frequently-asked-questions).

## Why is the Accord Project relevant for Businesses?

Contracting is undergoing a digital transformation driven by a need to deliver customer-centric legal and business solutions faster, and at lower cost. This imperative is fueling the adoption of a broad range of new technologies to improve the efficiency of drafting, managing, and executing legal contracting operations; the Accord Project is proud to be part of that movement.

In addition, contributions from businesses are crucial for the development of the Accord Project. The expertise of stakeholders, such as business professionals and attorneys, is invaluable in improving the functionality and content of the Accord Project's codebase and specifications, to ensure that the templates meet real-world business requirements.

If this interests you, please visit our [Lifecycle and Industry Working Groups](https://www.accordproject.org/liwg) page for more information.

## What are the Accord Projects?

The Accord Project comprises a series of projects

* [Cicero] - Templating Engine
* [Ergo] - Expression Language
* [Concerto] - Modelling Language 
* [CiceroMark] - Markup Language 

![Cicero](https://github.com/accordproject/cicero)
![Ergo](https://github.com/accordproject/ergo)
![Concerto](https://github.com/accordproject/concerto)
![CiceroMark](https://github.com/accordproject/markdown-transformation)
![Model Repository](https://models.accordproject.org/)

