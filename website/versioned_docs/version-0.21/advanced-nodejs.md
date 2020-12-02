---
id: advanced-nodejs
title: Working with Node.js
original_id: advanced-nodejs
---

## Cicero Node.js API

You can work with Accord Project templates directly in JavaScript using Node.js.

Documentation for the API can be found in [Cicero API](cicero-api).

## Working with Templates

### Import the Template class

To import the Cicero class for templates:

```js
const Template = require('@accordproject/cicero-core').Template;
```

### Load a Template

To create a Template instance in memory call the `fromDirectory`, `fromArchive` or `fromUrl` methods:

```js
    const template = await Template.fromDirectory('./test/data/latedeliveryandpenalty');
```

These methods are asynchronous and return a `Promise`, so you should use `await` to wait for the promise to be resolved.

### Instantiate a Template

Once a Template has been loaded, you can create a Clause based on the Template. You can either instantiate
the Clause using source DSL text (by calling `parse`), or you can set an instance of the template model 
as JSON data (by calling `setData`):

```js
    // load the DSL text for the template
    const testLatePenaltyInput = fs.readFileSync(path.resolve(__dirname, 'data/', 'sample.txt'), 'utf8');

    const clause = new Clause(template);
    clause.parse(testLatePenaltyInput);

    // get the JSON object created from the parse
    const data = clause.getData();
```

OR - create a contract and set the data from a JSON object.

```js
    const clause = new Clause(template);
    clause.setData( {$class: 'org.acme.MyTemplateModel', 'foo': 42 } );
```

## Executing a Template Instance

Once you have instantiated a clause or contract instance, you can execute it.

### Import the Engine class

To execute a Clause you first need to create an instance of the ``Engine`` class:

```js
const Engine = require('@accordproject/cicero-engine').Engine;
```

### Send a request to the contract

You can then call ``execute`` on it, passing in the clause or contract instance, and the request:

```js
    const request = {
        '$class': 'org.accordproject.latedeliveryandpenalty.LateDeliveryAndPenaltyRequest',
        'forceMajeure': false,
        'agreedDelivery': '2017-10-07T16:38:01.412Z',
        'goodsValue': 200,
        'transactionId': '402c8f50-9e61-433e-a7c1-afe61c06ef00',
        'timestamp': '2017-11-12T17:38:01.412Z'
    };
    const state = {};
    state.$class = 'org.accordproject.cicero.contract.AccordContractState';
    state.stateId = 'org.accordproject.cicero.contract.AccordContractState#1';
    const result = await engine.execute(clause, request, state);
```

