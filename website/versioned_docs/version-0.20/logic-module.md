---
id: logic-module
title: Modules
original_id: logic-module
---

Finally, we can place multiple Ergo declarations (functions, contracts, etc) into a library so it can be shared with other developers.

## Namespaces

Each Ergo file starts with a namespace declaration which provides a way to identify it uniquely:
```ergo
namespace org.acme.mynamespace
```

## Libraries

A library is an Ergo file in a namespace which defines useful constants or functions. For instance:

```ergo
namespace org.accordproject.ergo.money

define constant days_in_a_year = 365.0
define function compoundInterests(
  annualInterest : Double,
  numberOfDays : Double
) : Double {
    return (1.0 + annualInterest) ^ (numberOfDays / days_in_a_year)
}
```

## Import

You can then access this library in another Ergo file using import:
```ergo
namespace org.accordproject.promissorynote

contract PromissoryNote over PromissoryNoteContract {
  clause check(request : Payment) : Result {
        let interestRate = contract.interestRate ?? 3.4;
    enforce interestRate >= 0.0;
    enforce contract.amount.doubleValue >= 0.0;
    let outstanding = contract.amount.doubleValue - request.amountPaid.doubleValue;
    enforce outstanding >= 0.0;

    let numberOfDays =
      diffDurationAs(
        dateTime("17 May 2018 13:53:33 EST"),
        contract.date,
        ~org.accordproject.time.TemporalUnit.days).amount;

    enforce numberOfDays >= 0;

    let compounded =  outstanding
      * compoundInterestMultiple(interestRate, numberOfDays); // Defined in ergo.money module

    return Result{
      outstandingBalance: compounded
    }
  }
}
```

> **TechNote:** the namespace and import handling in Ergo allows you to access either existing CTO models or Ergo libraries in the same way.

