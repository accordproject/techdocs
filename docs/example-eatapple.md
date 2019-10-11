---
id: example-eatapple
title: A Healthy Clause
---

## Eat Apples!

The healthy eating clause is inspired by the not so serious [terms of services contract](https://www.grahamcluley.com/page-46-apples-new-ios-agreement-funny-fake-makes-serious-point/).

For this example, let us look first at the template for that legal clause written in natural language:

```markdown
Eating healthy clause between [{employee}] (the Employee) and [{company}] (the Company).
The canteen only sells apple products. Apples, apple juice, apple flapjacks, toffee
apples. Employee gets fired if caught eating anything without apples in it.
THE EMPLOYEE, IF ALLERGIC TO APPLES, SHALL ALWAYS BE HUNGRY.
Apple products at the canteen are subject to a [{tax}]% tax.
```

The text specifies the terms for the legal clause and includes a few
variables such as `employee`, `company` and `tax`.

The second component of a smart legal template is the model, which is
expressed using the [Concerto modeling language](https://github.com/accordproject/concerto).
The model describes the variables of the contract, as well as additional
information required to execute the contract logic. In our example,
this includes the input request for the clause (`Food`), the response
to that request (`Outcome`) and possible events emitted during the
clause execution (`Bill`).

```ergo
namespace org.accordproject.canteen

@AccordTemplateModel("eat-apples")
concept CanteenContract {
  o String employee
  o String company
  o Double tax
}

transaction Food {
  o String produce
  o Double price
}

transaction Outcome {
  o String notice
}

event Bill {
  o String billTo
  o Double amount
}
```

The last component of a smart legal template is the Ergo logic. In our example, it is a single clause `eathealthy` which can be used to process a `Food` request.

```ergo
namespace org.accordproject.canteen

contract EatApples over CanteenContract {
  clause eathealthy(request : Food) : Outcome {
    enforce request.produce = "apple"
    else return Outcome{ notice : "You're fired!" };

    emit Bill{
      billTo: contract.employee,
      amount: request.price * (1.0 + contract.tax / 100.0)
    };
    return Outcome{ notice : "Very healthy!" }
  }
}
```

As in the "Hello World!" example, this is a smart legal contract with
a single clause, but it illustrate a few new ideas.

The `enforce` expression is used to check conditions that must be true
for normal execution of the clause. In this example, the `enforce`
makes sure the food is an apple and if not returns a new outcome
indicating termination of employment.

If the condition is true, the contract proceeds by emitting a bill for
the purchase of the apple. The employee to be billed is obtained from
the contract (`contract.employee`). The total amount is calculated by
adding the tax, which is obtained from the contract (`contract.tax`),
to the purchase price, which is obtained from the request
(`request.price`). The calculation is done using a simple arithmetic
expression (`request.price * (1.0 + contract.tax / 100.0)`).

