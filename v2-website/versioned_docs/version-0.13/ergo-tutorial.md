---
id: ergo-tutorial
title: "Ergo: A Tutorial"
original_id: ergo-tutorial
---

## Overview of Accord

Cicero is an Open Source implementation of the Accord Project Template Specification. It defines the structure of natural language templates, bound to a data model, that can be executed using Ergo and request/response JSON messages. You can read the latest user documentation here: http://docs.accordproject.org.

In short with the Accord Project you can take a classic contract, e.g. Word document and use Cicero to define natural language contract and clause templates that can be executed by an event driven computer program (aka Smart contract). For the tutorial, Cicero will be used to define natural language contract and clause templates. These clause templates handle the syllogistic language of contracts.

For example,
```md
 if the goods are more than [{DAYS}] late,
 then notify the supplier of the goods, with the message [{MESSAGE}].
```
DAYS and MESSAGE are variables
 
You can browse the library of Open Source Cicero contract and clause templates at: https://templates.accordproject.org.

So how goes the contract get executed? That is where Ergo comes in Ergo is a strongly-typed functional programming language designed to capture the legal intent of legal contracts and clauses. We will use Ergo to create the contract logic consisting of a contract class with executable embedded clauses. Note: prior to the emergence of Ergo, the Cicero JavaScript component was primary to the execution of code.

Ergo obviates the Cicero JavaScript component for the  execution phase with a new more comprehensive language which we explore in this tutorial.
   
## Cicero

The Open Source Cicero project defines the format of clause and contract templates based on to the Cicero Template Specification. The templates are the link between the natural language of contracts usually composed in a Word document and the specification of a machine executable transaction. Cicero templates define the API by specifying request and response elements for the logic associated with functional transaction executed by Ergo.

Cicero templates are composed of two elements:
* Template Grammar (the natural language text for the template),
* Template Model (the data model that includes the variables contained within the template).
* The Logic (the executable business logic for the template) will be handled by Ergo.

When combined these three elements allow templates to be edited, analyzed, queried and executed.

## Setup Ergo Development environment

Before you can build Ergo, you must install and configure the following dependencies on your machine:

### Git

* Git: The [Github Guide to Installing Git][git-setup] is a good source of information.
 
### Node.js

* Node.js v8.x (LTS): We use Node to generate the documentation, run a development web server, run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.
> Tip: Use nvm (or nvm-windows) to manage and install Node.js, This facilitates a version change of Node.js per project.
* Lerna: This is a tool which helps when handling multiple npm packages in the Ergo repository. To install:
npm install -g lerna@2.11.0
 
### Visual Studio Code

Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript and Node.js and has a rich ecosystem of extensions for other languages (such Ergo). 
 
Follow the platform specific guides below:
See, https://code.visualstudio.com/docs/setup/
* macOS
* Linux
* Windows

#### Install Ergo VisualStudio Plugin
   
### Validate Development Environment and Toolset

Clone https://github.com/accordproject/ergo to your local machine

### Getting started

Install Ergo

The easiest way to install Ergo is as a Node.js package. Once you have Node.js installed on your machine, you can get the Ergo compiler and command-line using the Node.js package manager by typing the following in a terminal:
$ npm install -g @accordproject/ergo-cli@0.13
 
This will install the compiler itself (ergoc) and a command-line tool (ergo) to execute Ergo code. You can check that both have been installed and print the version number by typing the following in a terminal:
```sh
$ ergoc --version
$ ergo --version
```
Then, to get command line help:
```
$ ergoc --help
$ ergo execute --help
```
Compiling your first contract
```ergo
namespace org.accordproject.volumediscount
 
contract VolumeDiscount over VolumeDiscountContract {
   // Clause for volume discount
   clause volumediscount(request : VolumeDiscountRequest) : VolumeDiscountResponse {
        if request.netAnnualChargeVolume < contract.firstVolume
        then return VolumeDiscountResponse{ discountRate: contract.firstRate }
        else if request.netAnnualChargeVolume < contract.secondVolume
        then return VolumeDiscountResponse{ discountRate: contract.secondRate }
        else return VolumeDiscountResponse{ discountRate: contract.thirdRate }
  }
}
```

To compile your first Ergo contract to JavaScript , within Visual Studio code
* Open the folder where you cloned https://github.com/accordproject/ergo
* Use View/Terminal to run the Ergo compiler:
```sh
$ ergoc ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo
Compiling Ergo './examples/volumediscount/logic.ergo' -- creating './examples/volumediscount/logic.js'
```

By default, Ergo compiles to JavaScript for execution. This may change in the future to support other languages. The compiled code for the result in stored as `./examples/volumediscount/logic.js`
 
### Execute a contract
To execute a contract, we pass the necessary parameters including the CTO, Ergo files, the name of a contract and the json files containing request and contract state
ergorun [ctos] [ergos] --contractname [file] --contract [file] --state [file] --request [file]
 
So for example we use ergorun with :
```sh
$ ergorun ./examples/volumediscount/model.cto ./examples/volumediscount/logic.ergo
--contractname org.accordproject.volumediscount.VolumeDiscount
--contract ./examples/volumediscount/contract.json
--request ./examples/volumediscount/request.json
--state ./examples/volumediscount/state.json
```

Here contract.json contains the following values
```json
{
  "$class": "org.accordproject.volumediscount.VolumeDiscountContract",
  "parties": null,
  "contractId": "cr1",
  "firstVolume": 1,
  "secondVolume": 10,
  "firstRate": 3,
  "secondRate": 2.9,
  "thirdRate": 2.8
}
```
 
Request.json contains
```json
{
  "$class": "org.accordproject.volumediscount.VolumeDiscountRequest",
  "netAnnualChargeVolume": 10.4
}
```

logic.ergo contains:
```ergo
namespace org.accordproject.volumediscount
 
contract VolumeDiscount over VolumeDiscountContract {
  // Clause for volume discount
  clause volumediscount(request : VolumeDiscountRequest) : VolumeDiscountResponse {
    if request.netAnnualChargeVolume < contract.firstVolume
    then return VolumeDiscountResponse{ discountRate: contract.firstRate }
    else if request.netAnnualChargeVolume < contract.secondVolume
    then return VolumeDiscountResponse{ discountRate: contract.secondRate }
    else return VolumeDiscountResponse{ discountRate: contract.thirdRate }
  }
}
```
 
Here netAnnualCharge Volume equals 10.4 which is not less than firstVolume and secondVolume which are equal to 1 and 10 respectively so the logic for the volumediscount clause returns thirdRate which equals 2.8 

```
7:31:58 PM - info: Logging initialized. 2018-09-27T23:31:58.623Z
7:31:59 PM - info: {"response":{"discountRate":2.8,"$class":"org.accordproject.volumediscount.VolumeDiscountResponse"},"state":{"$class":"org.accordproject.cicero.contract.AccordContractState","stateId":"1"},"emit":[]}
```

PS D:\Users\jbambara\Github\ergo>
 
## Ergo Development
 
Create Template
Start with basic agreement in natural language and locate the variables
Here in the example see the bold
Volume-Based Card Acceptance Agreement [Abbreviated]
This Agreement is by and between ………..you agree to be bound by the Agreement.
Discount means an amount that we charge you for accepting the Card, which amount is:
(i) a percentage (Discount Rate) of the face amount of the Charge that you submit, or a flat per-
Transaction fee, or a combination of both; and/or
(ii) a Monthly Flat Fee (if you meet our requirements).
 
Transaction Processing and Payments. ………………… less all applicable deductions, rejections, and withholdings, which include:
………………………….
 
SETTLEMENT
a) Settlement Amount. Our agent will pay you according to your payment plan, ……………………..which include:
        (i) the Discount,
…………………………………………..
b) Discount. The Discount is determined according to the following table:
 
| Annual Dollar Volume      | Discount                 |
| Less than $1 million          | 3.00%                    |
| $1 million to $10 million | 2.90%                    |
| Greater than $10 million  | 2.80%                |
Identify the request variables and contract instance variables
Codify the variables with $[{request}] or [{contract instance}]
| Annual Dollar Volume          | Discount                 |
| Less than $[{firstVolume}] million      | [{firstRate}]%                    |
| $[{firstVolume}] million to $[{secondVolume}] million | [{secondRate}]%                    |
| Greater than $[{secondVolume}] million  | [{thirdRate}]%                    |
 
Create Model
Define the model asset which contains the contract instance variables and the transaction request and response. Defines the data model for the VolumeDiscount template. This defines the structure that the parser for the template generates from input source text. See model.cto below:
 namespace org.accordproject.volumediscount
import org.accordproject.cicero.contract.* from https://models.accordproject.org/cicero/contract.cto
import org.accordproject.cicero.runtime.* from https://models.accordproject.org/cicero/runtime.cto
asset VolumeDiscountContract extends AccordContract {
  o Double firstVolume
  o Double secondVolume
  o Double firstRate
  o Double secondRate
  o Double thirdRate
}
transaction VolumeDiscountRequest {
  o Double netAnnualChargeVolume
}
transaction VolumeDiscountResponse {
        o Double discountRate
}
 
Create Logic
The contract logic is accomplished by coding ERGO statements and expressions to consume the request and use contract instance variables to produce the desired response. In our example, request.netAnnualChargeVolume is tested against contract rates to produce the result.
namespace org.accordproject.volumediscount
 
define the contract
contract VolumeDiscount over VolumeDiscountContract {
 
define the contract clause and request : response
 
   clause volumediscount(request : VolumeDiscountRequest) : VolumeDiscountResponse {
 
define the logic ; here we use if /then /else statement to test request parameter against contract instance variable
 and return
 
        if request.netAnnualChargeVolume < contract.firstVolume
        then return VolumeDiscountResponse{ discountRate: contract.firstRate }
        else if request.netAnnualChargeVolume < contract.secondVolume
        then return VolumeDiscountResponse{ discountRate: contract.secondRate }
        else return VolumeDiscountResponse{ discountRate: contract.thirdRate }
  }
 
Ergo Language
As you have seen in this tutorial, Ergo is a domain-specific language (DSL) that captures the execution logic of legal contracts. In this simple example, you see that Ergo aims to have contracts and clauses as first-class elements of the language. To accommodate the maturation of distributed ledger implementations, Ergo will be blockchain neutral, i.e., the same contract logic can be executed either on and off chain on distributed ledger technologies like HyperLedger Fabric. Most importantly, Ergo is consistent with the Accord Protocol Template Specification. Follow the links below to learn more about
Introduction to Ergo
Ergo Language Guide
Ergo Reference Guide


October 12, 2018
