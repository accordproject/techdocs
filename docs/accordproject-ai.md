---
id: accordproject-ai
title: AI & Agent Workflows
---

## Computable Contracts as Agent Infrastructure

Most contracts today are word-processed documents. The key provisions and data-points within that text are challenging for machines to extract reliably, and the underlying logic is even harder to automate — meaning significant overhead falls on manual human processes to manage, perform, and enforce contractual terms.

The 2024 Accord Project whitepaper, [*An Introduction to Computable Contracts*](https://accordproject.org/whitepaper-2024/), frames this as the "contract gap" — and identifies structured, computable contract formats as both the complement to, and the grounding for, large language model (LLM) based workflows:

> *"Accord Project data formats are useful to have as the output from ML processes so that we can more easily ingest the documents into other tools. Similarly, structured data formats (called Schemas or Domain Models) can also be used to complement the input for some ML processes."*

Accord Project's three-component template architecture — **Text**, **Model**, and **Logic** — maps directly onto how modern AI agents operate. Each component is a format that agents can reliably read, write, validate, and reason over.

This guide covers how agents work *with the contract format* — drafting, validating, and executing templates. For how Accord Project fits the wider agentic commerce stack — where agents *transact* on a user's behalf and authorization layers like Verifiable Intent and AP2 come into play — see the [Agentic Commerce](accordproject-agentic-commerce.md) guide.

---

## Why Markdown?

Accord Project template text is written in **TemplateMark**, a minimal extension of [CommonMark Markdown](markup-commonmark.md). Markdown was chosen deliberately:

- It is a lightweight, textual format focused on semantics rather than layout.
- It has broad cross-platform adoption and an [open specification](https://commonmark.org).
- It is the lingua franca of LLMs — the vast majority of training data for modern language models is Markdown or plain text. Agents that draft, review, or summarise a TemplateMark document are working in a format they already understand at training-data scale.

TemplateMark extends Markdown minimally: `{{variable}}` placeholders for data, and `{{% expression %}}` for computed values. An agent encountering a TemplateMark document needs almost no specialised knowledge to work with it — the additions are self-explanatory in context.

TemplateMark also round-trips cleanly between its Markdown text form and a JSON object form (AgreementMark). This means agents can output structured JSON that the template engine renders to rich text, or they can work directly with the Markdown and have it parsed to JSON downstream.

```tem
## Fixed Rate Loan

This is a *fixed interest* loan to the amount of {{loanAmount}}
at the yearly interest rate of {{rate}}%
with a loan term of {{loanDuration}},
and monthly payments of {{% monthlyPaymentFormula(loanAmount,rate,loanDuration) %}}.
```

An agent can read this, understand the variables, fill values, and produce a rendered agreement — all using formats it already knows.

---

## Why TypeScript?

Contract logic in Accord Project is written in **TypeScript**. From the 2024 whitepaper:

> *"Accord Project templates are therefore strongly-typed. The logic in templates is expressed in TypeScript. TypeScript is a strongly-typed, general purpose programming language, supported by a vibrant Open Source and enterprise community. TypeScript compiles to JavaScript for easy execution on most platforms."*

For agent workflows, TypeScript's strong typing provides a critical safety guarantee:

- **Agents can generate TypeScript logic** for contract calculations and the compiler will catch type errors before execution.
- **Concerto auto-generates TypeScript interfaces** from the schema, so the types the agent codes against are derived directly from the contract's data model — not guessed.
- **Templates compile to TypeScript programs** statically, enforcing type-safety and ensuring no unsafe runtime `eval()` is required.
- **The compiler acts as a verification step** between agent output and deployment — errors in agent-generated logic surface as compile failures, not silent runtime bugs in payment calculations or clause conditions.

```typescript
import { PaymentObligation } from '@accordproject/cicero-core';
import { LoanModel } from '../model/LoanModel';

export class LoanLogic extends TemplateLogic {
  monthlyPaymentFormula(loanAmount: number, rate: number, loanDuration: number): number {
    const monthlyRate = rate / 1200;
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanDuration));
  }
}
```

See the [Template Logic guide](logic-typescript.md) for full documentation.

---

## Why Concerto Schema?

**Concerto** is the schema DSL Accord Project uses to describe the structure of contract data. It is the critical layer that grounds agent output and prevents hallucinations from propagating into contract terms.

When an agent populates template variables, the Concerto schema enforces that:
- `{{rate}}` receives a `Double` — not the string `"January"`
- `{{loanDuration}}` receives an `Integer` — not a floating-point number
- `{{partyAddress}}` receives a structured `Address` object — not free-form text

Invalid values fail at schema validation, not at runtime during contract execution. This is the same principle as JSON Schema for APIs — structured contracts reduce hallucination risk structurally, not just by prompt instruction.

```concerto
namespace org.accordproject.loan

concept LoanModel {
  o Double loanAmount       // floating-point dollar amount
  o Double rate             // annual interest rate as a percentage
  o Integer loanDuration    // term in months
  o Double monthlyPayment   // computed or supplied monthly payment
}
```

Concerto models convert to a wide variety of platform-specific formats, so agent output validated against a Concerto model can be re-validated in any downstream runtime:

| Target | Use case |
|---|---|
| **JSON Schema** | REST API validation, OpenAPI specs |
| **TypeScript** | Contract logic, frontend type safety |
| **Java** | Enterprise backend integration |
| **Go** | High-performance services |
| **C#** | .NET integrations |

Concerto also enables **Schema Inference**: LLMs can create data models from sample contracts or natural language descriptions. See the experimental [Finchbot](https://finchbot.net/) service and Dan Selman's [blog on text-oriented programming](https://blog.selman.org/2023/08/07/text-oriented-programming/) for examples.

See [Concerto documentation](https://concerto.accordproject.org/docs/intro) for full details.

---

## APAP & MCP: Calling Contracts from Agents

The **Agreement Protocol API (APAP)** is a REST interface that exposes Accord Project contract templates as callable services. Any AI assistant or agent orchestration framework can interact with templates over APAP as tool calls.

APAP includes a **Model Context Protocol (MCP) endpoint**, making Accord Project templates directly accessible to MCP-compatible AI clients — including Claude, Cursor, and other tools that support the MCP standard.

Through APAP, an agent can:

- **Draft** a contract by supplying deal terms to a template
- **Validate** that supplied data conforms to the Concerto schema
- **Execute** contract logic against incoming events (e.g. a payment received, a delivery confirmed)
- **Render** the agreement to HTML, PDF, or DOCX

```
POST /triggers/{templateId}
{
  "request": { "loanAmount": 100000, "rate": 2.5, "loanDuration": 15 },
  "state": {},
  "contractData": { ... }
}
```

In an agentic commerce flow, APAP is the interface through which an agent enters and executes the *agreement* — the terms authorized and settled by layers such as Verifiable Intent, AP2, and the payment networks. See [Agentic Commerce](accordproject-agentic-commerce.md) for how these layers fit together.

See the [APAP tutorial](tutorial-apap.md) and [APAP reference](ref-apap.md) for full documentation.

---

## LLM-Assisted Template Authoring

Several tools support human-AI collaboration in template authoring:

- **[Template Playground](https://playground.accordproject.org)** — Browser-based editor for authoring and testing templates. Search existing templates, modify text, and execute logic interactively.
- **[Accord Studio](tutorial-studio.md)** — Full web-based authoring environment with preview and integrated testing.
- **[VS Code Extension](tutorial-vscode.md)** — Syntax highlighting, validation, and execution of templates directly in your editor.

Academic research has validated LLM-to-template pipelines in production scenarios:

- A joint team from National Taiwan Normal University, UCL, and HSBC Business School demonstrated automated [conversion of natural language contracts to Accord Project templates using NLP](https://arxiv.org/abs/2210.08954).
- Northwestern University and Adobe Research published a pipeline using AI-extracted [Obligation Logic Graphs (OLGs)](https://doi.org/10.1145/3594536.3595162) mapped to Accord Project templates, presented at ACM ICAIL 2023.

---

## Agent Skills

[Agent Skills](https://docs.claude.com/en/docs/claude-code/skills) are reusable, model-agnostic packages of instructions that help AI coding agents perform specialised tasks well. A skill is a directory containing a `SKILL.md` file with frontmatter (name, description) and a body describing when and how the skill applies. Compatible agent harnesses — including Claude Code and the Claude Agent SDK — load skills automatically when a user's request matches the skill's description.

The Accord Project maintains a set of Agent Skills in the [`accordproject/skills`](https://github.com/accordproject/skills) repository:

| Skill | What it does |
|---|---|
| [`concerto-author`](https://github.com/accordproject/skills/tree/main/skills/concerto-author) | Author and edit Concerto `.cto` model files. |
| [`concerto-validate`](https://github.com/accordproject/skills/tree/main/skills/concerto-validate) | Validate JSON instances against a Concerto model and explain errors. |
| [`concerto-migrate`](https://github.com/accordproject/skills/tree/main/skills/concerto-migrate) | Migrate Concerto models and data across major versions. |
| [`concerto-codegen`](https://github.com/accordproject/skills/tree/main/skills/concerto-codegen) | Generate code and schema artifacts from a `.cto` model. |
| [`template-author`](https://github.com/accordproject/skills/tree/main/skills/template-author) | Scaffold and edit Accord Project smart legal contract templates. |
| [`template-migrate`](https://github.com/accordproject/skills/tree/main/skills/template-migrate) | Migrate Cicero templates between major versions (e.g. 0.24/0.25 → 0.26). |

To install these skills for Claude Code, use the `skills` CLI:

```
npx skills add accordproject/skills
```

Other agent harnesses load skills from their own configured locations — consult the harness documentation.

---

## Further Reading

- [Agentic Commerce](accordproject-agentic-commerce.md) — how Accord Project is the enforceable-terms layer for autonomous commerce, alongside Verifiable Intent, AP2, UCP, and ACP
- [2024 Whitepaper: *An Introduction to Computable Contracts*](https://accordproject.org/whitepaper-2024/) — the full case for computable contracts as agent infrastructure (also available as [Markdown on GitHub](https://github.com/accordproject/whitepaper-2024/blob/main/whitepaper.md))
- [Smart Legal Contracts](accordproject-slc.md) — how machine-readable and machine-executable contracts work
- [APAP Reference](ref-apap.md) — full API specification including MCP endpoint
- [Template Logic in TypeScript](logic-typescript.md) — writing strongly-typed contract logic
- [Concerto Documentation](https://concerto.accordproject.org/docs/intro) — schema DSL reference
