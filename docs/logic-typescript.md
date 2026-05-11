---
id: logic-typescript
title: Template Logic
---

An Accord Project template contains two distinct kinds of logic, which the whitepaper *An Introduction to Computable Contracts* distinguishes as follows:

- **Template Logic** — expressions embedded _inside the template text_ that are evaluated when the contract is drafted. These produce computed text at the point they appear.
- **Contract Logic** — a TypeScript class in `logic/logic.ts` that defines the _executable behaviour_ of a signed contract in response to real-world events (requests) sent to it over time.

Both kinds of logic are typed against the same [Concerto model](https://concerto.accordproject.org), which ensures the data flowing between text, logic, and external systems is consistent.

---

## Template Logic

Template logic lives in the template grammar file (`text/grammar.tem.md`). Any `{{% return ... %}}` expression is evaluated during drafting and its return value is rendered into the contract text at that position.

```
Late Delivery and Penalty – {{% return now.toLocaleString() %}}

The Seller shall pay for every _{{% return `${penaltyDuration.amount} ${penaltyDuration.unit}` %}}
of delay_ a penalty of {{penaltyPercentage}}%.
```

The identifiers used inside `{{% ... %}}` are the field names from the template model (`penaltyDuration`, `penaltyPercentage`, etc.). The expression is plain TypeScript — you can call any built-in or imported function. The `{{variable}}` syntax (without `%`) is a simple substitution; `{{% return expr %}}` (with `%`) runs code.

Template logic is stateless and has no access to requests or external events. For anything that happens _after_ signing, use contract logic.

---

## Contract Logic

Contract logic is written in `logic/logic.ts` as a TypeScript class that extends `TemplateLogic`. The runtime calls its methods in response to incoming requests and the results determine the new state of the contract and any obligations it emits.

For language fundamentals (types, interfaces, async/await, etc.) refer to the [TypeScript documentation](https://www.typescriptlang.org/docs/).

### File structure

```
my-template/
  package.json          # "runtime": "typescript"
  logic/
    logic.ts            # your TemplateLogic subclass
    generated/          # Concerto-generated TypeScript interfaces (auto-generated)
  model/
    model.cto           # Concerto data model
  text/
    grammar.tem.md
  request.json          # sample trigger payload
```

The interfaces in `logic/generated/` are produced automatically from `model/model.cto`. Import from there rather than writing them by hand.

### The class skeleton

```typescript
import { IMyRequest, IMyResponse, IMyState, ITemplateModel }
  from './generated/org.example.mytemplate@0.1.0';

// @ts-ignore
class MyLogic extends TemplateLogic<ITemplateModel> {

  /** Called once when the contract is first instantiated. */
  async init(data: ITemplateModel): Promise<{ state: IMyState }> {
    return {
      state: { /* initial state */ }
    };
  }

  /** Called each time a request event is sent to the contract. */
  async trigger(
    data: ITemplateModel,
    request: IMyRequest,
    state: IMyState
  ): Promise<{ result: IMyResponse; state?: IMyState; emit?: object[] }> {
    return {
      result: { /* response */ }
    };
  }
}

export default MyLogic;
```

`data` contains the contract parameters (the values bound from the template text). `request` is the incoming event. `state` is the current persisted state of the contract. All three are typed against the generated interfaces.

The `// @ts-ignore` suppresses the TypeScript error on `TemplateLogic` because the base class is injected by the runtime rather than imported as a normal module.

---

### Accessing contract and request data

Contract parameters come through `data`; the incoming event comes through `request`. Field names match the Concerto model properties.

**Model (`model.cto`):**
```cto
@template
asset LateDeliveryContract extends Clause {
  o Double penaltyPercentage
  o Duration penaltyDuration
  o Duration termination
}

transaction LateDeliveryRequest extends Request {
  o DateTime agreedDelivery
  o Double   goodsValue
  o Boolean  forceMajeure
}

transaction LateDeliveryResponse extends Response {
  o Double  penalty
  o Boolean buyerMayTerminate
}
```

**Logic (`logic/logic.ts`):**
```typescript
async trigger(
  data: ILateDeliveryContract,
  request: ILateDeliveryRequest,
  state: IContractState
): Promise<{ result: ILateDeliveryResponse }> {

  const daysLate = daysBetween(request.agreedDelivery, new Date());
  const penalty  = (data.penaltyPercentage / 100) * request.goodsValue * daysLate;

  return {
    result: {
      $class:             'org.example.LateDeliveryResponse',
      $timestamp:         new Date(),
      penalty:            Math.min(penalty, request.goodsValue * 0.5),
      buyerMayTerminate:  daysLate > data.termination.amount
    }
  };
}
```

---

### Emitting obligations

Obligations (also called events) are returned in the `emit` array. Each entry is a plain object whose `$class` matches an `event` type in your Concerto model.

**Model:**
```cto
event PaymentObligation extends Event {
  o Double amount
  o String description
}
```

**Logic:**
```typescript
async trigger(
  data: IInstallmentContract,
  request: IPaymentRequest,
  state: IInstallmentState
): Promise<{ result: IPaymentResponse; emit?: object[] }> {

  const emit: object[] = [];

  if (request.amount < data.minPayment) {
    emit.push({
      $class:       'org.example.PaymentObligation',
      amount:       data.minPayment - request.amount,
      description:  `Minimum payment not met — ${data.minPayment - request.amount} still due.`
    });
  }

  return {
    result: {
      $class:     'org.example.PaymentResponse',
      $timestamp: new Date(),
      message:    emit.length > 0 ? 'Partial payment recorded.' : 'Payment accepted.'
    },
    emit
  };
}
```

Returning an empty array `emit: []` is equivalent to omitting the field.

---

### Updating state

State persists between trigger calls. To update it, return a `state` object alongside the result. Spread the incoming state first so you only override the fields that change.

**Model:**
```cto
asset InstallmentState extends State {
  o Double  balanceRemaining
  o Integer missedPayments
}
```

**Logic:**
```typescript
async trigger(
  data: IInstallmentContract,
  request: IPaymentRequest,
  state: IInstallmentState
): Promise<{ result: IPaymentResponse; state: IInstallmentState; emit?: object[] }> {

  const missed     = request.amount < data.minPayment;
  const newBalance = state.balanceRemaining - request.amount;

  return {
    result: {
      $class:     'org.example.PaymentResponse',
      $timestamp: new Date(),
      balance:    newBalance,
      message:    newBalance <= 0 ? 'Contract fulfilled.' : `Balance remaining: ${newBalance}`
    },
    state: {
      ...state,
      balanceRemaining: newBalance,
      missedPayments:   state.missedPayments + (missed ? 1 : 0)
    },
    emit: missed ? [{
      $class:      'org.example.PaymentObligation',
      amount:      data.minPayment - request.amount,
      description: 'Minimum payment not met.'
    }] : []
  };
}
```

If `state` is omitted from the return value, the runtime preserves the incoming state unchanged.

---

### Initialization

`init` is called once when the contract is first instantiated, before any `trigger` calls. Use it to set the initial state. If your contract is stateless, omit `init` entirely.

```typescript
async init(data: IInstallmentContract): Promise<{ state: IInstallmentState }> {
  return {
    state: {
      $class:            'org.example.InstallmentState',
      $identifier:       crypto.randomUUID(),
      balanceRemaining:  data.totalDue,
      missedPayments:    0
    }
  };
}
```

---

### Errors and preconditions

Throw a plain `Error` to abort execution and return an error response to the caller. The runtime catches it and surfaces the message.

```typescript
if (request.agreedDelivery > new Date()) {
  throw new Error('Agreed delivery date is in the future — contract cannot be triggered yet.');
}
```

---

## Further reading

- [TypeScript documentation](https://www.typescriptlang.org/docs/) — language reference and handbook
- [Concerto Model guide](https://concerto.accordproject.org) — how to define your template model, state, request, response, and event types
- [demo-template repository](https://github.com/accordproject/demo-template) — a working TypeScript template (`latedeliveryandpenalty-typescript`) you can clone and run locally
- [Template Playground](https://playground.accordproject.org) — edit and test templates in the browser without installing anything
