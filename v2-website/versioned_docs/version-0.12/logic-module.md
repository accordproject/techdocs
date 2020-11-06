---
id: logic-module
title: Modularity
original_id: logic-module
---

Finally, we can place multiple Ergo declarations (functions, contracts, etc) into a library so it can be shared with other developers.

## Namespaces

Each Ergo file starts with a namespace declaration which provides a way to identify it uniquely:
```ergo
    namespace org.acme.mynamespace
```

## Libraries

A library is simply an Ergo file in a namespace which defines useful constants or functions. For instance:

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

import org.accordproject.cicero.runtime.*
import org.accordproject.time.*           // Imports the DateTime library
import org.accordproject.ergo.money.*     // Imports the money.ergo library

contract PromissoryNote over PromissoryNoteContract {
  clause check(request : Payment) : Result {
    let interestRate = contract.interestRate ?? 3.4;
    let outstanding = contract.amount.doubleValue - request.amountPaid.doubleValue;

    let numberOfDays =
      diffDurationAs(dateTime("17 May 2018 13:53:33 EST"),contract.date,"days").amount;
    let compounded =
      outstanding
    * compoundInterests(interestRate,  // Calls compoundInterests from the library!
                        numberOfDays);

    return Result{
      outstandingBalance: compounded
    }
  }
}
```

> **TechNote:** the namespace and import handling in Ergo allows you to access either existing CTO models or Ergo libraries in the same way.

