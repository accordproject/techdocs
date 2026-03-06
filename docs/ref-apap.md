---
id: ref-apap
title: Agreement Protocol (APAP)
---

The **Accord Project Agreement Protocol (APAP)** is a REST API specification that standardizes how agreement tools communicate with a server that provides agreement features — template management, document generation, format conversion, logic execution, signing, and more.

The relationship is analogous to the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) in the IDE world: a single APAP-compliant server can be integrated into many different agreement tools (contract management platforms, document editors, AI assistants) without each tool having to re-implement template handling from scratch.

```
Agreement Tool (client)          APAP Server
────────────────────────         ─────────────────────────────────
Contract editor         ──REST──▶ Template management
Document generator               Agreement lifecycle
AI assistant                     Format conversion (HTML, PDF…)
CMS / workflow engine            Logic execution
                                 Signing & audit trail
```

The [reference implementation](https://github.com/accordproject/apap/tree/main/server) is available in the APAP repository. The full [OpenAPI specification](https://github.com/accordproject/apap/blob/main/openapi.json) and generated [client libraries](https://github.com/accordproject/apap/tree/main/client) are also published there.

---

## Core Resources

### Templates

A **Template** is a reusable contract or clause definition. It bundles together the three components of an Accord Project template — text, model, and (optionally) logic — into a single object managed by the server.

Key fields:

| Field | Description |
|---|---|
| `uri` | Unique identifier for the template |
| `author`, `displayName`, `version` | Metadata |
| `templateModel` | Concerto model (inline CTO files or a reference to a SharedModel) |
| `text` | Template text as TemplateMark or plain text |
| `logic` | Optional TypeScript/ES2015/WASM contract logic |
| `sampleRequest` | Optional sample payload for testing logic |

### Agreements

An **Agreement** is a live instance of a Template, created when a user fills in deal data. The server tracks it through its signing lifecycle.

Key fields:

| Field | Description |
|---|---|
| `uri` | Unique identifier for the agreement |
| `template` | Reference to the Template this agreement is based on |
| `data` | The filled-in values, as a Concerto JSON object |
| `agreementStatus` | Current lifecycle stage (see below) |
| `agreementParties` | Parties and their contact/signing details |
| `signatures` | Collected signatures |
| `state` | Runtime state for stateful contracts |
| `historyEntries` | Audit trail of status changes |
| `attachments` | Supporting documents (PDFs, images, etc.) |

### Shared Models

A **SharedModel** is a Concerto data model published independently of any template so that multiple templates can reference the same types. This avoids duplicating type definitions across templates in the same domain.

---

## Agreement Lifecycle

An agreement moves through the following statuses:

```
DRAFT ──▶ SIGNING ──▶ COMPLETED
                          │
                       SUPERSEDED
```

| Status | Meaning |
|---|---|
| `DRAFT` | Created; no signatories have signed yet |
| `SIGNING` | Signed by some but not all signatories |
| `COMPLETED` | All signatories have signed |
| `SUPERSEDED` | Replaced by a subsequent agreement |

Each status transition is recorded as a `HistoryEntry` containing the status, data snapshot, and arbitrary metadata (timestamp, IP address, etc.).

---

## Capabilities

Not every server implements every feature. Before integrating, clients call `GET /capabilities` to discover what the server supports. This prevents tools from depending on features that are not available.

```bash
curl http://localhost:9000/capabilities
```

```json
["TEMPLATE_MANAGE", "AGREEMENT_MANAGE", "AGREEMENT_CONVERT_HTML", "SHARED_MODEL_MANAGE"]
```

The full set of feature identifiers:

| Capability | Meaning |
|---|---|
| `TEMPLATE_MANAGE` | CRUD operations on templates |
| `TEMPLATE_LOGIC` | Templates can include executable logic |
| `TEMPLATE_STATEFUL` | Templates can maintain state between triggers |
| `TEMPLATE_VERIFY_SIGNATURES` | Verify cryptographic signatures on templates |
| `LOGIC_TYPESCRIPT` | TypeScript logic is supported |
| `LOGIC_ES2015` | ES2015 JavaScript logic is supported |
| `LOGIC_WASM` | WebAssembly logic is supported |
| `AGREEMENT_MANAGE` | CRUD operations on agreements |
| `AGREEMENT_TRIGGER` | Send events to agreement logic |
| `AGREEMENT_STATE` | Retrieve the runtime state of an agreement |
| `AGREEMENT_CONVERT_HTML` | Convert agreements to HTML |
| `AGREEMENT_SIGNING` | Send agreements for signature |
| `SHARED_MODEL_MANAGE` | CRUD operations on shared models |

A client should gracefully handle missing capabilities rather than assuming their presence.

---

## Key API Operations

### Deploy a template

```bash
curl --request POST \
  --url http://localhost:9000/templates \
  --header 'Content-Type: application/json' \
  --data '{
    "uri": "resource:org.accordproject.protocol@1.0.0.Template#my-nda",
    "author": "alice",
    "displayName": "Mutual NDA",
    "version": "1.0.0",
    "license": "Apache-2.0",
    "metadata": {
      "$class": "org.accordproject.protocol@1.0.0.TemplateMetadata",
      "runtime": "typescript",
      "template": "clause",
      "cicero": "0.25.x"
    },
    "templateModel": {
      "$class": "org.accordproject.protocol@1.0.0.TemplateModel",
      "typeName": "org.example.nda@1.0.0.NdaContract",
      "model": {
        "$class": "org.accordproject.protocol@1.0.0.CtoModel",
        "ctoFiles": [{ "contents": "namespace org.example.nda@1.0.0\n...", "filename": "model.cto" }]
      }
    },
    "text": {
      "$class": "org.accordproject.protocol@1.0.0.Text",
      "templateText": "This mutual NDA is entered into by {{partyA}} and {{partyB}}..."
    },
    "logic": null
  }'
```

The response includes a server-assigned `id` that is used in subsequent requests.

### List templates

```bash
# All templates
curl http://localhost:9000/templates

# Filter by author; paginate
curl 'http://localhost:9000/templates?author=alice&limit=10&page=1'
```

### Create an agreement from a template

```bash
curl --request POST \
  --url http://localhost:9000/agreements \
  --header 'Content-Type: application/json' \
  --data '{
    "uri": "apap://agreements/nda-acme-2025",
    "template": "resource:org.accordproject.protocol@1.0.0.Template#my-nda",
    "data": {
      "$class": "org.example.nda@1.0.0.NdaContract",
      "partyA": "Acme Corp",
      "partyB": "Example Ltd",
      "effectiveDate": "2025-01-01T00:00:00Z",
      "$identifier": "nda-001"
    },
    "agreementStatus": "DRAFT"
  }'
```

### Convert an agreement to HTML

Once an agreement exists, generate its document text as HTML:

```bash
curl --request POST \
  --url http://localhost:9000/agreements/4/convert/html \
  --header 'Content-Type: application/json' \
  --data '{}'
```

The response is an HTML string with the template variables filled in from the agreement data.

### Trigger agreement logic

For templates that include contract logic, send an event payload to run it:

```bash
curl --request POST \
  --url http://localhost:9000/agreements/8/trigger \
  --header 'Content-Type: application/json' \
  --data '{
    "payload": {
      "goodsValue": 140
    }
  }'
```

```json
{
  "result": {
    "penalty": 3675,
    "buyerMayTerminate": true,
    "$timestamp": "2025-07-08T21:42:52.719Z",
    "$class": "io.clause.latedeliveryandpenalty@0.1.0.LateDeliveryAndPenaltyResponse"
  },
  "isError": false
}
```

If the logic returns an error, `isError` is `true` and `errorMessage` / `errorDetails` are populated.

---

## Reference Implementation

The reference implementation (RI) is a Node.js + Express server backed by PostgreSQL. It is available in the [`server/`](https://github.com/accordproject/apap/tree/main/server) directory of the APAP repository.

### Running with Docker

```bash
# Clone the repo, then:
cp server/.env_example server/.env   # set Postgres credentials
docker compose up
npx drizzle-kit push                 # initialise the database schema (first run only)
```

The server listens on `http://localhost:9000` by default.

### Running locally

```bash
# Set the Postgres connection string in server/.env, then:
cd server
npm install
npm start          # or: npm run dev  (hot-reload)
npx drizzle-kit push   # first run only
```

---

## MCP Support (experimental)

The reference implementation exposes a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) endpoint, allowing AI assistants to interact with templates and agreements directly.

The MCP endpoint is at `/sse` on the running server. Supported operations include browsing templates and agreements as resources, converting agreements to markdown, and triggering agreement logic via natural language.

To connect the RI to Claude:
1. Start the RI and make it reachable from the internet (e.g. via `ngrok`).
2. In Claude settings, add a new custom integration with the URL set to `https://<your-server>/sse`.
3. From a new chat, use the **+** button to add templates or agreements as context, then ask questions or give instructions (e.g. _"convert agreement 4 to markdown"_, _"trigger agreement 8 with goods value 100"_).

To test locally using MCP Inspector:
```bash
npx @modelcontextprotocol/inspector
# Open http://127.0.0.1:6274, select SSE, set URL to http://localhost:9000/sse
```

---

## Further Reading

- [APAP repository](https://github.com/accordproject/apap) — OpenAPI specification, client libraries, and reference implementation
- [Concerto Model guide](https://concerto.accordproject.org) — how to write the data models referenced in templates
- [Template Logic guide](logic-typescript.md) — how to write TypeScript contract logic for executable templates
- [Template Playground](https://playground.accordproject.org) — browser-based tool for authoring templates before deploying them via APAP
