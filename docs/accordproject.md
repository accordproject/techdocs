---
id: accordproject
title: Overview
---

## What is the Accord Project?

Accord Project is an open source, non-profit initiative — operating under the umbrella of the [Linux Foundation](https://www.linuxfoundation.org/) — that provides an open, standardized format for **Smart Legal Contracts** (also called Computable Contracts): agreements that can be read and interpreted by people and courts, *and* executed by machines.

An Accord Project template has three components, each a format that both people and software can reliably work with:

- **Text** — the legal prose, written in [TemplateMark](markup-templatemark.md), a minimal extension of [CommonMark Markdown](markup-commonmark.md). It is subject to judicial interpretation, and it is a format modern LLMs already understand at training-data scale.
- **Model** — a strongly-typed data model written in [Concerto](https://concerto.accordproject.org/docs/intro), the schema language that grounds the contract's data and gives it a portable, validated wire format.
- **Logic** — executable [TypeScript](logic-typescript.md) that computes obligations, payments, and outcomes over the life of the agreement.

Together they turn a contract from a static word-processed document — where the key terms are hard for machines to extract and the logic is impossible to run — into a live, machine-executable artifact that remains legally meaningful. Unlike blockchain "smart contracts," an Accord Project contract does not depend on any distributed ledger; it integrates with your existing technology platforms and can operate over the full lifespan of the agreement.

## Why now: the legal foundation for AI agentic commerce

Commerce is entering an agentic era. AI agents are moving from *assisting* people to *acting* for them — planning purchases, comparing terms, and executing transactions autonomously. As they do, a new question comes into focus: **when an agent acts on someone's behalf, what exactly was agreed — and is it enforceable?**

A new trust layer is emerging to answer part of this. Initiatives such as Mastercard and Google's [Verifiable Intent](https://verifiableintent.dev/), Google's [Agent Payments Protocol (AP2)](https://github.com/google-agentic-commerce/AP2), and the [Agentic Commerce Protocol (ACP)](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) give the ecosystem cryptographic **proof of what a user authorized an agent to do**, and proof that the agent stayed within those bounds.

That solves *authorization*. It does not, by itself, produce the **agreement**: the substantive terms, the obligations that run after checkout, and the remedies if something goes wrong — all expressed so that both a machine *and* a court can act on them. That is the layer Accord Project provides.

> **Verifiable Intent proves what an agent was *authorized* to do. Accord Project defines and executes the *agreement* it was authorized to enter.**

The two layers are complementary. An authorization credential can bind to an Accord Project contract as its enforceable terms; the contract's typed model can describe the constraints an agent must honour; and its logic can execute the obligations that outlive the moment of payment. See **[Agentic Commerce](accordproject-agentic-commerce.md)** for how Accord Project fits alongside Verifiable Intent, AP2, UCP, and ACP.

## Who Accord Project is for

The Accord Project format is embodied in a family of open source projects that make up the Accord Project technology stack. Input from platform builders, developers, lawyers, and businesses is what keeps the format grounded in real-world requirements.

### For agent & commerce platforms

If you are building agentic commerce experiences — payment orchestration, checkout, procurement, or autonomous purchasing — Accord Project gives you the **enforceable-terms layer** that authorization protocols deliberately leave open. A contract's terms are machine-executable and legally interpretable at the same time, so an agent-initiated transaction rests on an agreement a court could enforce, not just a record that a click occurred. Read the [Agentic Commerce](accordproject-agentic-commerce.md) guide for the integration patterns.

### For developers

Accord Project is open source and welcomes contributions from anyone. The stack includes a [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=accordproject.cicero-vscode-extension), the [APAP agreement server](https://github.com/accordproject/apap), and a command line interface for working with contracts. You can integrate contracts into existing applications, build new ones, or author contract logic in TypeScript.

If you are building AI agents or LLM-powered applications, Accord Project templates provide a structured, validated, and legally meaningful data layer. Templates can be invoked via the [APAP REST API](ref-apap.md) — including a **Model Context Protocol (MCP) endpoint** — so your agent can author, validate, and execute contracts as tool calls. The [Concerto](https://concerto.accordproject.org/docs/intro) schema language provides a type-safe wire format that significantly reduces hallucination risk in agent-generated contract data. See the [AI & Agent Workflows](accordproject-ai.md) guide for details.

### For lawyers

The template in an Accord Project contract is pure legal text that can be drafted by lawyers and interpreted by courts. An existing contract becomes a template by adding data points between curly braces (the Concerto model), and contract logic can be added as an integral part of the agreement — creating a bridge between prose subject to judicial interpretation and terms a computer can execute. This matters more, not less, as AI systems draft, review, and negotiate contracts on our behalf: a structured, machine-readable format is what lets AI work with contract knowledge reliably rather than by guesswork.

In November 2021, the Law Commission of England and Wales [concluded](https://lawcom.gov.uk/project/smart-contracts/) that the current legal framework is sufficiently robust and adaptable to support smart legal contracts — confirming they are legally binding and enforceable agreements.

### For businesses

Contracting is undergoing a digital transformation driven by the need to deliver legal and business outcomes faster and at lower cost. Accord Project contracts integrate text and data, can operate over their full lifespan, and become part of your digital infrastructure. Expertise from business professionals and attorneys is invaluable in ensuring templates meet real-world requirements — see the [Lifecycle and Industry Working Groups](https://www.accordproject.org/liwg) page to get involved.

## About this documentation

If you are new to Accord Project, start with [Smart Legal Contracts](accordproject-slc.md) and [Templates](accordproject-template.md), then [try it in your browser](started-playground.md). For AI and agent integration, see the [AI & Agent Workflows](accordproject-ai.md) guide; for how Accord Project positions in the agentic commerce stack, see [Agentic Commerce](accordproject-agentic-commerce.md).

To start using Accord Project templates, follow the [Install Cicero](https://docs.accordproject.org/docs/next/started-installation.html) instructions in the _Getting Started_ section.

In-depth guides for the components of a template are in the _Template Guides_ section:
- Learn how to write contract or template text in the [Markdown Text](markup-preliminaries.md) guide
- Learn how to design your data model in the [Concerto Model](https://concerto.accordproject.org/docs/intro) guide
- Learn how to write smart contract logic in the [Template Logic](logic-typescript.md) guide (or the legacy [Ergo Logic](logic-ergo.md) guide for existing Ergo templates)

The documentation also includes step-by-step [Tutorials](tutorial-templates.md) and reference material (APIs, command-line tools, and more) in the [Reference Manual](ref-glossary.md).

## Get involved

The Accord Project technology is developed in the open. We encourage organizations and individuals to contribute requirements, documentation, issues, templates, and code. Read the [CONTRIBUTING guide](https://github.com/accordproject/techdocs/blob/main/CONTRIBUTING.md) and join the welcoming community on [Discord](https://discord.com/invite/Zm99SKhhtA).
