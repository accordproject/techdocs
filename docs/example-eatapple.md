---
id: example-eatapple
title: A Late Payment Clause
---

## Late Payment Penalty

Late payment clauses are one of the most common provisions in commercial contracts. They protect sellers by automatically calculating a penalty when a buyer pays an invoice after the agreed due date.

For this example, let us look at the template text for a late payment clause written in natural language:

```markdown
Late Payment Clause between [{buyer}] (the Buyer) and [{seller}] (the Seller).
Payment of [{amount}] USD is due within [{paymentDays}] days of invoice date.
If payment is not received by the due date, a late penalty of [{penaltyRate}]%
per month will be applied to the outstanding balance.
```

The text captures the key commercial terms and includes variables such as `buyer`, `seller`, `amount`, `paymentDays`, and `penaltyRate`.

The second component of a smart legal template is the model, which is
expressed using the [Concerto modeling language](https://github.com/accordproject/concerto).
The model describes the variables of the contract, as well as the data
structures used when executing the contract logic. In our example,
this includes the contract data (`LatePaymentContract`), the input request
(`PaymentReceived`) containing the invoice and payment dates, and the
response (`PaymentOutcome`) reporting any penalty due.

```concerto
namespace org.accordproject.latepayment

@AccordTemplateModel("late-payment")
concept LatePaymentContract {
  o String buyer
  o String seller
  o Double amount
  o Integer paymentDays
  o Double penaltyRate
}

transaction PaymentReceived {
  o DateTime invoiceDate
  o DateTime paymentDate
}

transaction PaymentOutcome {
  o Double penalty
  o String message
}
```

The last component of a smart legal template is the TypeScript logic. In our example, the `trigger` method receives a `PaymentReceived` request, calculates how many days late the payment is, and returns a `PaymentOutcome` with the penalty amount.

```typescript
class LatePayment extends TemplateLogic<LatePaymentContract> {
  async trigger(data: LatePaymentContract, request: PaymentReceived, state: IState): Promise<TriggerResponse> {
    const dueDate = new Date(request.invoiceDate);
    dueDate.setDate(dueDate.getDate() + data.paymentDays);

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLate = Math.floor(
      (new Date(request.paymentDate).getTime() - dueDate.getTime()) / msPerDay
    );

    if (daysLate <= 0) {
      return {
        result: {
          $class: 'org.accordproject.latepayment.PaymentOutcome',
          penalty: 0,
          message: 'Payment received on time. No penalty applies.'
        }
      };
    }

    const monthsLate = daysLate / 30;
    const penalty = data.amount * (data.penaltyRate / 100) * monthsLate;

    return {
      result: {
        $class: 'org.accordproject.latepayment.PaymentOutcome',
        penalty: Math.round(penalty * 100) / 100,
        message: `Payment is ${daysLate} day(s) late. A penalty of $${penalty.toFixed(2)} USD applies.`
      }
    };
  }
}
```

This example illustrates several important ideas.

The due date is derived at runtime from the `invoiceDate` in the request plus the `paymentDays` agreed in the contract. This shows how contract data and request data are combined in the logic.

The penalty calculation uses a pro-rata monthly rate: `amount × (penaltyRate / 100) × (daysLate / 30)`. The contract terms — `amount` and `penaltyRate` — come from the contract data (`data`), while the invoice and payment dates come from the request (`request`).

When payment is on time (`daysLate <= 0`) the clause returns a zero penalty. Otherwise it returns the calculated penalty along with a descriptive message, giving the counterparty a clear, auditable result.

