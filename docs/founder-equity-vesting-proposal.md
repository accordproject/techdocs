---
title: Proposal: Founder Equity Vesting Smart Contract Template
---

Problem

In early-stage startups, equity is typically assigned at formation but disputes frequently arise when a founder leaves early. Common protective vesting rules include:

- 4-year vesting duration
- 1-year cliff period
- Monthly equity unlocking
- Exit-based equity adjustments

Currently the Accord Template Library lacks a template to model time-based founder equity vesting and exit conditions. This is a gap in the startup governance domain.

Proposed Template

Add a Founder Equity Vesting smart contract template that can:

- Model vesting schedules (duration, cliff, periodic release)
- Enforce cliff period conditions (no vesting until cliff)
- Calculate vested vs unvested equity at any point in time
- Handle early-exit scenarios and compute recoverable/unvested equity

Supporting Work

I created a working simulation repository that demonstrates the core logic and scenarios:

- https://github.com/Shashidar123/founder-equity-vesting-contract.git

That repository includes a 4-year model, a 1-year cliff, monthly vesting calculations, and sample exit scenarios. It can be translated into an Accord-compatible template by producing:

- a Concerto model describing participants, allocations, and events
- a TemplateMark clause (human-readable contract text) parametrized by schedule and allocation
- Ergo logic implementing the vesting math and exit resolution

Why This Matters

This template adds startup governance and founder agreements to the Accord Template Library — a widely applicable use case for early-stage companies and accelerators. It also demonstrates modeling of time-based financial workflows in Accord.

Future Scope

Related templates that extend this direction:

- Internship Stipend Contract (performance- and time-based payment logic)
- Fee Refund Policy Contract (time-based refund rules for education/bootcamps)
