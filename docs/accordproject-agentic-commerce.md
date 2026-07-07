---
id: accordproject-agentic-commerce
title: Agentic Commerce
---

## The enforceable-terms layer for autonomous commerce

As AI agents begin to transact on people's behalf, the ecosystem is converging on a layered architecture. Each layer solves a distinct problem, and no single layer solves them all:

- **Identity & trust** — who is this agent, and is it legitimate?
- **Authorization proof** — what did the user authorize the agent to do, and can we prove the agent stayed within those bounds? *(Verifiable Intent, AP2 credentials.)*
- **Payment & checkout transport** — how does the agent create a checkout session and move payment credentials? *(UCP, ACP, Mastercard Agent Pay.)*
- **The agreement** — what are the enforceable terms of the deal, and how do the obligations execute over its lifetime? *(Accord Project.)*

Accord Project is the **agreement** layer. The others authorize and route a transaction; Accord Project defines the contract that transaction rests on — its terms, its computable obligations, and its remedies — in a form that is both machine-executable and legally interpretable.

> **Verifiable Intent proves what an agent was *authorized* to do. Accord Project defines and executes the *agreement* it was authorized to enter.**

```
┌───────────────────────────────────────────────────────────────┐
│  IDENTITY & TRUST        who is the agent?                    │
├───────────────────────────────────────────────────────────────┤
│  AUTHORIZATION PROOF     what was authorized? did the agent   │
│  Verifiable Intent, AP2  stay in bounds? (cryptographic proof)│
├───────────────────────────────────────────────────────────────┤
│  PAYMENT & CHECKOUT      how is the transaction routed and    │
│  UCP, ACP, Agent Pay     settled?                             │
├───────────────────────────────────────────────────────────────┤
│  THE AGREEMENT           what are the enforceable terms, and  │
│  ▶ Accord Project        how do obligations run over time?    │
└───────────────────────────────────────────────────────────────┘
```

## What each layer does — and does not do

Authorization protocols such as [Verifiable Intent](https://verifiableintent.dev/) (VI) are, by their own definition, a portable and independently verifiable record of *what a user authorized an agent to do* and proof that the agent stayed within those bounds. That is a different concern from the agreement itself. Reading the VI specification, its expressive vocabulary for "intent" is a set of transaction-scoped **constraints** — allowed merchants, allowed payees, an amount range, permitted line items, a spending budget, and recurrence limits. This is exactly what an authorization envelope needs, and deliberately no more.

The substance of the deal lives outside that envelope — and inside an Accord Project contract:

| Concern | Authorization layer (e.g. Verifiable Intent) | Accord Project |
|---|---|---|
| Proof an agent was authorized | ✅ Cryptographic delegation chain | — |
| Key binding, selective disclosure | ✅ SD-JWT credential format | — |
| Transaction-scoped spend/merchant limits | ✅ Signed constraints | Can model the same constraints as typed data |
| Substantive terms (warranty, returns, SLA, delivery, liability, data use) | Treated as informational, not enforced | ✅ Typed model + court-readable text |
| Obligations that run **after** settlement | Out of scope (flow ends at settlement) | ✅ Executable logic over the contract lifecycle |
| Remedies and outcomes on breach | Audit *trail* only | ✅ Computable logic that determines the *outcome* |
| Bilateral, negotiated agreement | Unilateral user→agent delegation | ✅ An agreement between parties |

The clean division of labour: authorization proves the agent stayed in bounds; Accord Project defines what the deal *is* and enforces it over time.

## How Accord Project plugs in

Authorization frameworks are designed to be extensible, and they leave open exactly the slot Accord Project fills. AP2, for example, defines a Verifiable Digital Credential (VDC) trust mechanism but leaves the credential format open — which is the slot Verifiable Intent fills. The *enforceable-terms* slot is open in the same way. Three concrete integration patterns:

### 1. A contract as the terms a mandate binds to

Authorization credentials already bind to a checkout artifact by hash (for example, VI binds a `checkout_jwt` via a SHA-256 `checkout_hash`). An Accord Project contract — or its rendered [AgreementMark](markup-templatemark.md) form — can be bound the same way: the credential references the contract by hash, so the user is provably authorizing acceptance of **specific enforceable terms**, not just a list of line items and a merchant name. This gives the "what-you-see-is-what-you-sign" consent surface real legal substance, using the court-readable TemplateMark text as the human-facing artifact.

### 2. Concerto as the schema language for the constraint registry

Authorization constraints are, structurally, a typed-schema problem: dot-notation type discriminators, a versioned registry, namespaced extensibility, and validators that must run in every language a merchant, PSP, or payment network uses. [Concerto](https://concerto.accordproject.org/docs/intro) is built for exactly this. A constraint registry modelled in Concerto generates, from a single source of truth:

| Target | Use case |
|---|---|
| **JSON Schema** | Validating credentials and constraint payloads |
| **TypeScript** | Agent and verifier logic, frontend type safety |
| **Java** | Enterprise backend / processor integration |
| **Go** | High-performance network services |
| **C#** | .NET integrations |

Instead of hand-writing and re-validating constraint types per runtime, the polyglot verifiers a trust framework requires are generated and kept in lockstep.

### 3. Contract logic for the terms authorization can't enforce

Authorization layers explicitly treat descriptive fields (product description, brand, colour, size) and post-settlement behaviour as informational — not subject to automated verification. Accord Project [TypeScript logic](logic-typescript.md) can make many of these enforceable: delivery-date-within-window, total-including-tax-under-budget, warranty conditions, refund and return eligibility, milestone and SLA obligations. The compiler acts as a verification step between agent output and execution, so errors in agent-generated terms surface as compile failures rather than silent runtime bugs in a live contract.

## Immediate vs. autonomous transactions

Authorization frameworks distinguish **human-in-the-loop** transactions (the user confirms the final purchase) from **autonomous** ones (the user sets constraints and the agent acts independently). Accord Project is valuable in both:

- **Human-in-the-loop** — the contract is the terms the user reviews and confirms; its logic computes the figures (totals, schedules, fees) shown at the point of consent.
- **Autonomous** — the contract's typed model can express the same constraints the agent must honour, its logic can enforce the terms the authorization layer treats as informational, and its lifecycle obligations continue to execute long after the agent's authority to *initiate* the transaction has expired.

## Relationship to agentic commerce protocols

Accord Project is transport- and protocol-agnostic and complements, rather than competes with, the emerging protocol stack:

- **[AP2](https://github.com/google-agentic-commerce/AP2)** (Agent Payments Protocol) — defines an abstract credential/mandate framework and leaves the credential format open. Accord Project supplies enforceable terms that a mandate can reference.
- **[UCP](https://github.com/Universal-Commerce-Protocol/ucp)** (Universal Commerce Protocol) — a concrete checkout protocol aligned with AP2, with extension fields for mandate data. A contract reference can ride those fields without changes to core endpoints.
- **[ACP](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol)** (Agentic Commerce Protocol) — a REST checkout and payment-delegation protocol whose extension mechanism can carry a contract reference alongside standard checkout mechanics.

## What Accord Project does not do

To keep the boundary clear: Accord Project is **not** an identity, authorization, or payment layer. It does not issue credentials, perform key binding, or implement selective disclosure — those are the province of Verifiable Intent, AP2, and the payment networks. Accord Project provides the enforceable agreement those layers authorize and settle.

## Status of these integration patterns

The integration patterns above are illustrative of how Accord Project's format aligns with the agentic commerce stack; they describe technical fit, not partnerships or endorsements. Concrete adoption architecture for any specific protocol or trust framework should be developed in coordination with that project's maintainers. If you are working on agentic commerce and want to explore these patterns, [join the community](https://discord.com/invite/Zm99SKhhtA).

## Further reading

- [Overview](accordproject.md) — what Accord Project is
- [AI & Agent Workflows](accordproject-ai.md) — computable contracts as agent infrastructure
- [Smart Legal Contracts](accordproject-slc.md) — how machine-readable and machine-executable contracts work
- [Concerto Documentation](https://concerto.accordproject.org/docs/intro) — the schema DSL and its code generators
- [Template Logic in TypeScript](logic-typescript.md) — writing strongly-typed contract logic
- [APAP Reference](ref-apap.md) — the agreement protocol API, including the MCP endpoint
- [2024 Whitepaper: *An Introduction to Computable Contracts*](https://accordproject.org/whitepaper-2024/)
