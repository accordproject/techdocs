---
id: tutorial-apap
title: With an Agreement Server
---

This tutorial walks through the full lifecycle of deploying a template and running it as a live agreement using the [Accord Project Agreement Protocol (APAP)](ref-apap.md). By the end you will have:

- started a local APAP server
- deployed the [Late Delivery and Penalty](https://github.com/accordproject/demo-template) demo template
- created an agreement from it
- generated an HTML document
- triggered the contract logic and received a response

All requests are shown as `curl` commands. Any HTTP client (Postman, Insomnia, your own code) works equally well. The APAP repository also publishes a generated [TypeScript client](https://github.com/accordproject/apap/tree/main/client/typescript) for use in Node.js applications.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- The [APAP repository](https://github.com/accordproject/apap) cloned locally
- The [demo-template repository](https://github.com/accordproject/demo-template) cloned locally (for the template source files)

## Step 1 — Start the server

Clone the APAP repository and start the reference implementation:

```bash
git clone https://github.com/accordproject/apap
cd apap/server
cp .env_example .env          # edit with your Postgres credentials if needed
docker compose up -d
npx drizzle-kit push          # initialise the database schema (first run only)
```

The server is now listening at `http://localhost:9000`.

> If you prefer to run without Docker, set the `POSTGRES_URL` environment variable to a Postgres connection string, then run `npm install && npm start` inside the `server/` directory.

## Step 2 — Check server capabilities

Before making any requests, ask the server what features it supports:

```bash
curl http://localhost:9000/capabilities
```

```json
["TEMPLATE_MANAGE", "AGREEMENT_MANAGE", "AGREEMENT_CONVERT_HTML", "SHARED_MODEL_MANAGE"]
```

This tells you which operations are available. The tutorial requires at least `TEMPLATE_MANAGE`, `AGREEMENT_MANAGE`, and `AGREEMENT_CONVERT_HTML`. If you also want to run contract logic in Step 6, the server must advertise `AGREEMENT_TRIGGER` and `LOGIC_TYPESCRIPT`.

See the [Agreement Protocol reference](ref-apap.md#capabilities) for the full list of capability identifiers.

## Step 3 — Deploy a template

A template combines the contract text, Concerto data model, and optional TypeScript logic into a single object managed by the server.

The following deploys a text-only version of the [Late Delivery and Penalty](https://github.com/accordproject/demo-template) clause. The `templateText` field contains the TemplateMark source directly; the `ctoFiles` field contains the Concerto model that defines the clause's variables.

```bash
curl --request POST \
  --url http://localhost:9000/templates \
  --header 'Content-Type: application/json' \
  --data '{
    "uri": "resource:org.accordproject.protocol@1.0.0.Template#latedelivery-v1",
    "author": "alice",
    "displayName": "Late Delivery and Penalty",
    "version": "1.0.0",
    "description": "Clause imposing a penalty for late delivery of goods.",
    "license": "Apache-2.0",
    "metadata": {
      "$class": "org.accordproject.protocol@1.0.0.TemplateMetadata",
      "runtime": "typescript",
      "template": "clause",
      "cicero": "0.25.x"
    },
    "templateModel": {
      "$class": "org.accordproject.protocol@1.0.0.TemplateModel",
      "typeName": "io.clause.latedeliveryandpenalty@0.1.0.TemplateModel",
      "model": {
        "$class": "org.accordproject.protocol@1.0.0.CtoModel",
        "ctoFiles": [{
          "filename": "model.cto",
          "contents": "namespace io.clause.latedeliveryandpenalty@0.1.0\nimport org.accordproject.time@0.3.0.{Duration,TemporalUnit} from https://models.accordproject.org/time@0.3.0.cto\nimport org.accordproject.contract@0.2.0.Clause from https://models.accordproject.org/accordproject/contract@0.2.0.cto\nimport org.accordproject.runtime@0.2.0.{Request,Response} from https://models.accordproject.org/accordproject/runtime@0.2.0.cto\n@template\nasset TemplateModel extends Clause {\n  o Boolean forceMajeure\n  o Duration penaltyDuration\n  o Double penaltyPercentage\n  o Double capPercentage\n  o Duration termination\n  o TemporalUnit fractionalPart\n}\ntransaction LateDeliveryAndPenaltyRequest extends Request {\n  o Boolean forceMajeure\n  o DateTime agreedDelivery\n  o DateTime deliveredAt optional\n  o Double goodsValue\n}\ntransaction LateDeliveryAndPenaltyResponse extends Response {\n  o Double penalty\n  o Boolean buyerMayTerminate\n}"
        }]
      }
    },
    "text": {
      "$class": "org.accordproject.protocol@1.0.0.Text",
      "templateText": "Late Delivery and Penalty\n----\nIn case of delayed delivery{{#if forceMajeure}}, except for Force Majeure cases,{{/if}} the Seller shall pay to the Buyer for every _{{% return `${penaltyDuration.amount} ${penaltyDuration.unit}` %}} of delay_ a penalty of {{penaltyPercentage}}% of the total value of the Equipment.\n1. Any fractional part of a {{fractionalPart}} is to be considered a full {{fractionalPart}}.\n1. The total penalty shall not exceed {{capPercentage}}% of the total value.\n1. If the delay is more than {{% return `${termination.amount} ${termination.unit}` %}}, the Buyer is entitled to terminate this Contract."
    },
    "logic": null
  }'
```

The server responds with the stored template, including a numeric `id`:

```json
{
  "id": 1,
  "uri": "resource:org.accordproject.protocol@1.0.0.Template#latedelivery-v1",
  "displayName": "Late Delivery and Penalty",
  ...
}
```

Note the `id` — you will use it in subsequent requests.

> To deploy the template **with executable logic**, add the TypeScript source from `archives/latedeliveryandpenalty-typescript/logic/logic.ts` in the `logic.codes` array with `"type": "TYPESCRIPT"`. See the [reference implementation README](https://github.com/accordproject/apap/tree/main/server#trigger-an-agreement) for the full payload.

## Step 4 — Create an agreement

An agreement is an instance of a template filled in with deal-specific data. Create one by `POST`ing to `/agreements` and referencing the template URI:

```bash
curl --request POST \
  --url http://localhost:9000/agreements \
  --header 'Content-Type: application/json' \
  --data '{
    "uri": "apap://agreements/latedelivery-acme-2025",
    "template": "resource:org.accordproject.protocol@1.0.0.Template#latedelivery-v1",
    "agreementStatus": "DRAFT",
    "data": {
      "$class": "io.clause.latedeliveryandpenalty@0.1.0.TemplateModel",
      "$identifier": "c88e5ed7-c3e0-4249-a99c-ce9278684ac8",
      "clauseId": "c88e5ed7-c3e0-4249-a99c-ce9278684ac8",
      "forceMajeure": true,
      "penaltyDuration": {
        "$class": "org.accordproject.time@0.3.0.Duration",
        "amount": 2,
        "unit": "days"
      },
      "penaltyPercentage": 10.5,
      "capPercentage": 55,
      "termination": {
        "$class": "org.accordproject.time@0.3.0.Duration",
        "amount": 15,
        "unit": "days"
      },
      "fractionalPart": "days"
    }
  }'
```

```json
{
  "id": 1,
  "uri": "apap://agreements/latedelivery-acme-2025",
  "template": "resource:org.accordproject.protocol@1.0.0.Template#latedelivery-v1",
  "agreementStatus": "DRAFT",
  "data": { ... },
  "state": null,
  "signatures": null,
  "historyEntries": null
}
```

Note the agreement `id` for use in the next steps.

## Step 5 — Generate the contract document

Convert the agreement to HTML by merging the template text with the agreement data:

```bash
curl --request POST \
  --url http://localhost:9000/agreements/1/convert/html \
  --header 'Content-Type: application/json' \
  --data '{}'
```

The server evaluates any inline template expressions (the `{{% return ... %}}` blocks) and substitutes all variables, returning a rendered HTML document:

```html
<html><head><meta charset="UTF-8"></head>
<body><div class="document">
<div class="clause" name="top" elementType="io.clause.latedeliveryandpenalty@0.1.0.TemplateModel">
<h2>Late Delivery and Penalty</h2>
<p>In case of delayed delivery, except for Force Majeure cases, the Seller shall
pay to the Buyer for every <em>2 days of delay</em> a penalty of 10.5% of the
total value of the Equipment.</p>
<ol>
<li><p>Any fractional part of a days is to be considered a full days.</p></li>
<li><p>The total penalty shall not exceed 55.0% of the total value.</p></li>
<li><p>If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.</p></li>
</ol>
</div></div></body></html>
```

This HTML can be rendered directly in a browser, converted to PDF, or embedded in a contract management UI.

## Step 6 — Trigger the contract logic

If the template was deployed with TypeScript logic (see the note in Step 3), you can send a trigger payload to execute it. This models a real-world event reaching a signed contract — for example, a buyer reporting that goods arrived late.

```bash
curl --request POST \
  --url http://localhost:9000/agreements/1/trigger \
  --header 'Content-Type: application/json' \
  --data '{
    "payload": {
      "goodsValue": 200
    }
  }'
```

The server runs the TypeScript `trigger()` method from the template logic and returns the response:

```json
{
  "result": {
    "penalty": 5250,
    "buyerMayTerminate": true,
    "$timestamp": "2025-07-08T21:42:52.719Z",
    "$class": "io.clause.latedeliveryandpenalty@0.1.0.LateDeliveryAndPenaltyResponse"
  },
  "isError": false
}
```

`penalty` and `buyerMayTerminate` are computed by the contract logic from the agreement data (`penaltyPercentage`, `capPercentage`, etc.) and the trigger payload (`goodsValue`). If an error occurs during execution, `isError` is `true` and `errorMessage` contains the details.

## Step 7 — Manage the agreement lifecycle

### Update an agreement

Use `PUT` to modify fields. Partial updates are supported — include only the fields you want to change:

```bash
curl --request PUT \
  --url http://localhost:9000/agreements/1 \
  --header 'Content-Type: application/json' \
  --data '{ "agreementStatus": "SIGNING" }'
```

### Retrieve an agreement

```bash
curl http://localhost:9000/agreements/1
```

### List and filter agreements

```bash
# All agreements
curl http://localhost:9000/agreements

# Filter by status; paginate
curl 'http://localhost:9000/agreements?agreementStatus=DRAFT&limit=20&page=1'
```

### Delete resources

```bash
curl --request DELETE --url http://localhost:9000/agreements/1
curl --request DELETE --url http://localhost:9000/templates/1
```

## What next?

- Read the [Agreement Protocol reference](ref-apap.md) for the complete API surface, including shared models, capabilities, and the MCP integration.
- Explore the [TypeScript client library](https://github.com/accordproject/apap/tree/main/client/typescript) to call APAP from a Node.js application without writing raw HTTP requests.
- Write your own template logic using the [Template Logic guide](logic-typescript.md), then deploy it via APAP for production use.
- Use the [Template Playground](https://playground.accordproject.org) to draft and test templates before deploying them to a server.
