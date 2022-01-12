---
id: version-0.22-tutorial-nodejs
title: With Node.js
original_id: tutorial-nodejs
---

## Cicero Node.js API

You can work with Accord Project templates directly in JavaScript using Node.js.

Documentation for the API can be found in [Cicero API](ref-cicero-api.html).

## Working with Templates

### Import the Template class

To import the Cicero classes for templates and clauses, we'll also import the Cicero engine and some helper utilities

```js
const fs = require("fs");
const path = require("path");
const { Template, Clause } = require("@accordproject/cicero-core");
const { Engine } = require("@accordproject/cicero-engine");
```

### Load a Template

To create a Template instance in memory call the `fromDirectory`, `fromArchive` or `fromUrl` methods:

```js
const template = await Template.fromDirectory(
  "./test/data/latedeliveryandpenalty"
);
```

These methods are asynchronous and return a `Promise`, so you should use `await` to wait for the promise to be resolved.

> Note that you'll need to wrap this `await` inside an `async` function or use a [top-level await inside a module](https://v8.dev/features/top-level-await)

### Instantiate a Template

Once a Template has been loaded, you can create a Clause based on the Template. You can either instantiate
the Clause using source DSL text (by calling `parse`), or you can set an instance of the template model
as JSON data (by calling `setData`):

```js
// load the DSL text for the template
const testLatePenaltyInput = fs.readFileSync(
  path.resolve(__dirname, "text/", "sample.md"),
  "utf8"
);

const clause = new Clause(template);
clause.parse(testLatePenaltyInput);

// get the JSON object created from the parse
const data = clause.getData();
```

## Executing a Template Instance

Once you have instantiated a clause or contract instance, you can execute it.

### Import the Engine class

To execute a Clause you first need to create an instance of the `Engine` class:

```js
const engine = new Engine();
```

### Send a request to the contract

You can then call `execute` on it, passing in the clause or contract instance, and the request:

```js
const request = {
  $class:
    "org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest",
  forceMajeure: false,
  agreedDelivery: "2017-10-07T16:38:01.412Z",
  goodsValue: 200,
};
const state = {
  $class: "org.accordproject.runtime.State",
};

const result = await engine.trigger(clause, request, state);
console.log(result);
```
