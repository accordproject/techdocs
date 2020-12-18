---
id: ref-logic-specification
title: Ergo Compiler
original_id: ref-logic-specification
---

A large part of the Ergo compiler is written as a Coq specification
from which the compiler is extracted.

Ultimately, one of our goals is to provide a full formal semantics for
Ergo in Coq, and prove correct as much of the compilation pipeline as
possible.

## Compiler architecture

### Frontend

![Frontend](/docs/assets/architecture/frontend.svg)

### Code generation

![Codegen](/docs/assets/architecture/codegen.svg)

## Code Overview

The Coq source serves a dual purpose: as Ergo's formal semantics and as part of its implementation through extraction. Here are some entry points to the code.

A browsable version of the Coq code (generated using
[coq2html](https://github.com/xavierleroy/coq2html)) is
available. Below are some of the main intermediate represntations and
compilation phases.

### Intermediate representations

- Ergo: [Ergo/Lang/Ergo](/docs/assets/specification/ErgoSpec.Ergo.Lang.Ergo.html)
- Ergo calculus: [ErgoC/Lang/ErgoC](/docs/assets/specification/ErgoSpec.ErgoC.Lang.ErgoC.html)
- Ergo NNRC (Named Nested Relational Calculus): [ErgoNNRC/Lang/ErgoNNRC](/docs/assets/specification/ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html)

### Macro expansion

- Ergo to Ergo: [Ergo/Lang/ErgoExpand](/docs/assets/specification/ErgoSpec.Ergo.Lang.ErgoExpand.html)

### Namespace resolution

- Ergo to Ergo: [Translation/ErgoNameResolve](/docs/assets/specification/ErgoSpec.Translation.ErgoNameResolve.html)

### Translations between intermediate representations

- Ergo to Ergo calculus: [Translation/ErgotoErgoC](/docs/assets/specification/ErgoSpec.Translation.ErgotoErgoC.html)
- ErgoC to Ergo NNRC: [Translation/ErgoCtoErgoNNRC](/docs/assets/specification/ErgoSpec.Translation.ErgoCtoErgoNNRC.html)

### Type checking

- ErgoC to ErgoC with types: [ErgoCType](/docs/assets/specification/ErgoSpec.ErgoC.Lang.ErgoCType.html)

