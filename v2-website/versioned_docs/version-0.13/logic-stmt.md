---
id: logic-stmt
title: Statements
original_id: logic-stmt
---

A clause's body is composed of statements. Statements are a special kind of expression which can manipulate the contract state and emit obligations. Unlike other expressions they may return a response or an error.

## Contract data

When inside a statement, data about the contract -- either the contract parameters, clause parameters or contract state are available using the following Ergo keywords:
```ergo
    contract   // The contract parameters (from a contract template)
    clause     // Local clause parameters (from a clause template)
    state      // The contract state
```

For instance, if your contract template parameters and state information:
```ergo
    // Template parameters
    asset InstallmentSaleContract extends AccordContract {
      o AccordParty BUYER
      o AccordParty SELLER
      o Double INITIAL_DUE
      o Double INTEREST_RATE
      o Double TOTAL_DUE_BEFORE_CLOSING
      o Double MIN_PAYMENT
      o Double DUE_AT_CLOSING
      o Integer FIRST_MONTH
    }
    // Contract state
    enum ContractStatus {
      o WaitingForFirstDayOfNextMonth
      o Fulfilled
    }
    asset InstallmentSaleState extends AccordContractState {
      o ContractStatus status
      o Double balance_remaining
      o Integer next_payment_month
      o Double total_paid
   }
```

You can use the following expressions:
```ergo
    contract.BUYER
    state.balance_remaining
```

## Returning a response

Returning a response from a clause can be done by using a `return` statement:

```ergo
     return 1                       // Return the integer one
     return Payout{ amount: 39.99 } // Return a new Payout object
     return                         // Return nothing
```

> **TechNote:** the [Ergo REPL](https://ergorepl.netlify.com) takes statements as input which is why we had to add `return` to expressions in previous examples.

## Returning a failure

Returning a failure from a clause can be done by using a `throw` statement:
```ergo
    throw ErgoErrorResponse{ message: "This is wrong" }
    define concept MyOwnError extends ErgoErrorResponse{ fee: Double }
    throw MyOwnError{ message: "This is wrong and costs a fee", fee: 29.99 }
```

For convenience, Ergo provides a `failure` function which takes a string as part of its [standard library](ergo-stdlib.html#other-functions), so you can also write:
```ergo
    throw failure("This is wrong")
```

## Enforce statement

Before a contract is enforceable some preconditions must be satisfied:
- Competent parties who have the legal capacity to contract
- Lawful subject matter
- Mutuality of obligation
- Consideration

The constructs below will be used to determine if the preconditions have been met and what actions to take if they are not

```test
Example Prose
    Do the parties have adequate funds to execute this contract?  
```

One can check preconditions in a clause using enforce statements, as
follows:

```ergo
    enforce x >= 0.0                   // Condition
    else throw "Something went wrong"; // Statement if condition is false
    return x+1.0                       // Statement if condition is true
```

The else part of the statement can be omitted in which case Ergo
returns an error by default.

```ergo
    enforce x >= 0.0;         // Condition
    return x+1.0              // Statement if condition is true
```

## Emitting obligations

When inside a clause or contract, you can emit (one or more) obligations as follows:
```ergo
   emit PaymentObligation{ amount: 29.99, description: "12 red roses" };
   emit PaymentObligation{ amount: 19.99, description: "12 white tulips" };
   return
```

Note that `emit` is always terminated by a `;` followed by another statement.

## Setting the contract state

When inside a clause or contract, you can change the contract state as follows:
```ergo
    set state InstallmentSaleState{
      stateId: "#1",
      status: "WaitingForFirstDayOfNextMonth",
      balance_remaining: contract.INITIAL_DUE,
      total_paid: 0.0,
      next_payment_month: contract.FIRST_MONTH
    };
    return
```

Note that `set state` is always terminated by a `;` followed by another statement.

## Printing intermediate results

 For debugging purposes a special `info` statement can be used in your contract logic. For instance, the following indicates that you would like the Ergo execution engine to print out the result of expression `state.status` on the standard output.

 ```ergo
    set state InstallmentSaleState{
      stateId: "#1",
      status: "WaitingForFirstDayOfNextMonth",
      balance_remaining: contract.INITIAL_DUE,
      total_paid: 0.0,
      next_payment_month: contract.FIRST_MONTH
    };
    info(state.status);     // Directive to print to standard output
    return
```