---
id: ref-cicero-testing
title: Template Testing
---

Cicero uses [Cucumber](https://cucumber.io/docs) for writing template tests, which provides a human readable syntax.

This documents the syntax available to write Cicero tests.

## Test Structure

Tests are located in the `./test/` directory for each template, which contains files with the `.feature` extension.

Each file has the following structure:

```gherkin
Feature: Name of the template being tested
  Description for the test

  Background:
    Given that the contract says
"""
Text of the contract instance.
"""

  Scenario: Description for scenario 1
    [[First Scenario Sequence]]

  Scenario: Description for scenario 2
    [[Second Scenario Sequence]]

etc.
```

Each scenario can be thought of as a description for the behavior of the clause or contract template for the contract given as background.

Each scenario corresponds to one call to the contract. I.e., for a given current time, request and contract state, it says what the expected result of executing the contract should be. This can be either:
- A response, a new contract state, and a list of emitted obligations
- An error

## Scenarios

A complete scenario is described in the [Gherkin Syntax](https://cucumber.io/docs/gherkin/reference/) through a sequence of **Step**.

Each step starts with a keyword, either **Given**, **When**, **And**, or **Then**:

- **Given**, **When** and **And** are used to specify the input for a call to the contract;
- **Then** and **And** are used to specify the expected result.

### Request and Response

The simplest kind of scenario specifies the response expected for a given request.

For instance, the following scenario describes the expected response for a given request to the [helloworld template](https://templates.accordproject.org/helloworld@0.10.1.html):

```gherkin
  Scenario: The contract should say Hello to Betty Buyer, from the ACME Corporation
    When it receives the request
"""
{
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "ACME Corporation"
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Betty Buyer ACME Corporation"
}
"""
```

Both the request and the response are written inside triple quotes `"""` using JSON. If the request or response is not valid wrt. to the data model, this will result in a failing test.

:::warning
While the syntax for each scenario uses _pseudo_ natural language (e.g., `When it receives the request`), the tests use very specific sentences as illustrated in this guide.
:::

### Defaults

You can use the sample contract `sample.txt` and request `request.json` provided with a template by using specific steps.

For instance, the following scenario describes the expected response for the default contract text when sending the default request to the [helloworld template](https://templates.accordproject.org/helloworld@0.10.1.html):
```gherkin
Feature: HelloWorld
  This describe the expected behavior for the Accord Project's "Hello World!" contract

  Background:
    Given the default contract

  Scenario: The contract should say Hello to Fred Blogs, from the Accord Project, for the default request
    When it receives the default request
    Then it should respond with
"""
{
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project"
}
"""
```

### Errors

Whenever appropriate, it is good practice to include both successful executions, as well as scenarios for cases when a call to a template might fail. This can be written using a **Then** step that describes the error.

For instance, the following scenario describes an expected error for a given request to the [Interest Rate Swap](https://templates.accordproject.org/interest-rate-swap@0.4.1.html) template:
```gherkin
Feature: Interest Rate Swap
  This describes the expected behavior for the Accord Project's interest rate swap contract

  Background:
    Given that the contract says
"""
INTEREST RATE SWAP TRANSACTION LETTER AGREEMENT
"Deutsche Bank"
 
Date: 06/30/2005
To: "MagnaChip Semiconductor S.A."
Attention: Swaps Documentation Department
Our Reference: "Global No. N397355N"
Re: Interest Rate Swap Transaction
 
Ladies and Gentlemen:

The purpose of this letter agreement is to set forth the terms and conditions of the Transaction entered into between "Deutsche Bank" and "MagnaChip Semiconductor S.A." (“Counterparty”) on the Trade Date specified below (the “Transaction”). This letter agreement constitutes a “Confirmation” as referred to in the Agreement specified below.

The definitions and provisions contained in the 2000 ISDA Definitions (the “Definitions”) as published by the International Swaps and Derivatives Association, Inc. are incorporated by reference herein. In the event of any inconsistency between the Definitions and this Confirmation, this Confirmation will govern.
 
For the purpose of this Confirmation, all references in the Definitions or the Agreement to a “Swap Transaction” shall be deemed to be references to this Transaction.
 
1. This Confirmation evidences a complete and binding agreement between "Deutsche Bank" (“Party A”) and Counterparty (“Party B”) as to the terms of the Transaction to which this Confirmation relates. In addition, Party A and Party B agree to use all reasonable efforts to negotiate, execute and deliver an agreement in the form of the ISDA 2002 Master Agreement with such modifications as Party A and Party B will in good faith agree (the “ISDA Form” or the “Agreement”). Upon execution by the parties of such Agreement, this Confirmation will supplement, form a part of and be subject to the Agreement. All provisions contained or incorporated by reference in such Agreement upon its execution shall govern this Confirmation except as expressly modified below. Until Party A and Party B execute and deliver the Agreement, this Confirmation, together with all other documents referring to the ISDA Form (each a “Confirmation”) confirming Transactions (each a “Transaction”) entered into between us (notwithstanding anything to the contrary in a Confirmation) shall supplement, form a part of, and be subject to an agreement in the form of the ISDA Form as if Party A and Party B had executed an agreement on the Trade Date of the first such Transaction between us in such form, with the Schedule thereto (i) specifying only that (a) the governing law is English law, provided, that such choice of law shall be superseded by any choice of law provision specified in the Agreement upon its execution, and (b) the Termination Currency is U.S. Dollars and (ii) incorporating the addition to the definition of “Indemnifiable Tax” contained in (page 49 of) the ISDA “User’s Guide to the 2002 ISDA Master Agreements”.
2. The terms of the particular Transaction to which this Confirmation relates are as follows:
 
Notional Amount: 300000000.00 USD
Trade Date: 06/23/2005
Effective Date: 06/27/2005
Termination Date: 06/18/2008

Fixed Amounts:
Fixed Rate Payer: "Counterparty"
Fixed Rate Payer Period End Dates: "The 15th day of March, June, September and December of each year, commencing September 15, 2005, through and including the Termination Date with No Adjustment"
Fixed Rate Payer Payment Dates: "The 15th day of March, June, September and December of each year, commencing September 15, 2005, through and including the Termination Date"
Fixed Rate: -4.09%
Fixed Rate Day Count Fraction: "30" "360"
Fixed Rate Payer Business Days:"New York"
Fixed Rate Payer Business Day Convention: "Modified Following"

Floating Amounts: 
Floating Rate Payer: "DBAG"
Floating Rate Payer Period End Dates: "The 15th day of March, June, September and December of each year, commencing September 15, 2005, through and including the Termination Date with No Adjustment"
Floating Rate Payer Payment Dates: "The 15th day of March, June, September and December of each year, commencing September 15, 2005, through and including the Termination Date"
Floating Rate for initial Calculation Period: 3.41%
Floating Rate Option: "USD-LIBOR-BBA"
Designated Maturity: "Three months"
Spread: "None"
Floating Rate Day Count Fraction: "30" "360"
Reset Dates: "The first Floating Rate Payer Business Day of each Calculation Period or Compounding Period, if Compounding is applicable."
Compounding: "Inapplicable"
Floating Rate Payer Business Days: "New York"
Floating Rate Payer Business Day Convention: "Modified Following"
"""

  Scenario: The fixed rate is negative
    When it receives the request
"""
{
    "$class": "org.accordproject.isda.irs.RateObservation"
}
"""
    Then it should reject the request with the error "[Ergo] Fixed rate cannot be negative"
```

The reason for the error is that the contract has been defined with a negative interest rate (the line: `Fixed Rate: -4.09%` in the contract given as **Background** for the scenario).

### State Change

For templates which assume and can modify the contract state, the scenario should also include pre- and post- conditions for that state. In addition, some steps are available to define scenarios that specify the expected initial step for the contract.

For instance, the following scenario for the [Installment Sale](https://templates.accordproject.org/installment-sale@0.12.1.html) template describes the expected initial state and execution of one installment:
```gherkin
Feature: Installment Sale
  This describe the expected behavior for the Accord Project's installment sale contract

  Background:
    Given that the contract says
"""
"Dan" agrees to pay to "Ned" the total sum e10000, in the manner following:

E500 is to be paid at closing, and the remaining balance of E9500 shall be paid as follows:

E500 or more per month on the first day of each and every month, and continuing until the entire balance, including both principal and interest, shall be paid in full -- provided, however, that the entire balance due plus accrued interest and any other amounts due here-under shall be paid in full on or before 24 months.

Monthly payments, which shall start on month 3, include both principal and interest with interest at the rate of 1.5%, computed monthly on the remaining balance from time to time unpaid.

"""

  Scenario: The contract should be in the correct initial state
    Then the initial state of the contract should be
"""
{
  "$class": "org.accordproject.installmentsale.InstallmentSaleState",
  "status" : "WaitingForFirstDayOfNextMonth",
  "balance_remaining" : 10000.00,
  "total_paid" : 0.00,
  "next_payment_month" : 3,
  "stateId": "#1"
}
"""

  Scenario: The contract accepts a first payment, and maintain the remaining balance
    Given the state
"""
{
  "$class": "org.accordproject.installmentsale.InstallmentSaleState",
  "status" : "WaitingForFirstDayOfNextMonth",
  "balance_remaining" : 10000.00,
  "total_paid" : 0.00,
  "next_payment_month" : 3,
  "stateId": "#1"
}
"""
    When it receives the request
"""
{
    "$class": "org.accordproject.installmentsale.Installment",
    "amount": 2500.00
}
"""
    Then it should respond with
"""
{
  "total_paid": 2500,
  "balance": 7612.499999999999,
  "$class": "org.accordproject.installmentsale.Balance"
}
"""
    And the new state of the contract should be
"""
{
  "$class": "org.accordproject.installmentsale.InstallmentSaleState",
  "status" : "WaitingForFirstDayOfNextMonth",
  "balance_remaining" : 7612.499999999999,
  "total_paid" : 2500,
  "next_payment_month" : 4,
  "stateId": "#1"
}
"""

```

### Current Time

The logic for some clause or contract templates is time-dependent. It can be useful to specify multiple scenarios for the behavior under different date and time assumptions. This can be described with an additional **When** step to set the current time to a specific value.

For instance, the following shows two scenarios for the [IP Payment](https://templates.accordproject.org/ip-payment@0.10.1.html) template, which describe its expected behavior for two distinct current times:

```gherkin
Feature: IP Payment Contract
  This describes the expected behavior for the Accord Project’s IP Payment Contract contract

  Background:
    Given the default contract

  Scenario: Payment of a specified amount should be made
    When the current time is "2019-03-04T16:34:00-05:00"
    And it receives the request
"""
{
    "$class": "org.accordproject.ippayment.PaymentRequest",
    "netSaleRevenue": 1200,
    "sublicensingRevenue": 450,
    "permissionGrantedBy": "2018-04-05T00:00:00-05:00"
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.ippayment.PayOut",
    "totalAmount": 77.4,
    "dueBy": "2018-04-12T00:00:00.000-05:00"
}
"""

  Scenario: Payment of a specified amount should be made
    When the current time is "2019-03-01T16:34:00-02:00"
    And it receives the request
"""
{
    "$class": "org.accordproject.ippayment.PaymentRequest",
    "netSaleRevenue": 1550,
    "sublicensingRevenue": 225,
    "permissionGrantedBy": "2018-04-05T00:00:00-05:00"
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.ippayment.PayOut",
    "totalAmount": 81.45,
    "dueBy": "2018-04-12T03:00:00.000-02:00"
}
"""
```

### Emitting Obligations

If the template execution emits obligations, those can also be specified in the scenario as one of the **Then** steps.

For instance, the following shows a scenario for the [Rental Deposit](https://templates.accordproject.org/ip-payment@0.10.1.html) template, which describes the expected list of obligations that should be emitted for a given request:
```gherkin
Feature: Rental Deposit
  This describe the expected behavior for the Accord Project's rental deposit contract

  Background:
    Given the default contract

  Scenario: The property was inspected and there was damage
    When the current time is "2018-01-02T16:34:00Z"
    And it receives the default request
    Then it should respond with
"""
{
   "$class": "org.accordproject.rentaldeposit.PropertyInspectionResponse",
    "balance": {
      "$class": "org.accordproject.money.MonetaryAmount",
      "currencyCode" : "USD",
      "doubleValue" : 1550
    }
}
"""
    And the following obligations should have been emitted
"""
[
    {
        "$class": "org.accordproject.cicero.runtime.PaymentObligation",
        "amount": {
            "$class": "org.accordproject.money.MonetaryAmount",
            "doubleValue": 1550,
            "currencyCode": "USD"
        }
    }
]
"""
```