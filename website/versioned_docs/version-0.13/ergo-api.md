---
id: ergo-api
title: Ergo API
original_id: ergo-api
---

## Classes

<dl>
<dt><a href="#Commands">Commands</a></dt>
<dd><p>Utility class that implements the commands exposed by the Ergo CLI.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getJson">getJson(input)</a> ⇒ <code>object</code></dt>
<dd><p>Load a file or JSON string</p>
</dd>
<dt><a href="#setCurrentTime">setCurrentTime(currentTime)</a> ⇒ <code>object</code></dt>
<dd><p>Ensures there is a proper current time</p>
</dd>
<dt><a href="#init">init(engine, templateLogic, contractJson, currentTime)</a> ⇒ <code>object</code></dt>
<dd><p>Invoke Ergo contract initialization</p>
</dd>
<dt><a href="#execute">execute(engine, templateLogic, contractJson, stateJson, currentTime, requestJson)</a> ⇒ <code>object</code></dt>
<dd><p>Execute the Ergo contract with a request</p>
</dd>
<dt><a href="#resolveRootDir">resolveRootDir(parameters)</a> ⇒ <code>string</code></dt>
<dd><p>Resolve the root directory</p>
</dd>
<dt><a href="#compareComponent">compareComponent(expected, actual)</a></dt>
<dd><p>Compare actual and expected result components</p>
</dd>
<dt><a href="#compareSuccess">compareSuccess(expected, actual)</a></dt>
<dd><p>Compare actual result and expected result</p>
</dd>
</dl>

<a name="Commands"></a>

## Commands
Utility class that implements the commands exposed by the Ergo CLI.

**Kind**: global class  

* [Commands](#Commands)
    * [.execute(ergoPaths, ctoPaths, contractName, contractInput, stateInput, currentTime, requestsInput)](#Commands.execute) ⇒ <code>object</code>
    * [.invoke(ergoPaths, ctoPaths, contractName, clauseName, contractInput, stateInput, currentTime, paramsInput)](#Commands.invoke) ⇒ <code>object</code>
    * [.init(ergoPaths, ctoPaths, contractName, contractInput, currentTime, paramsInput)](#Commands.init) ⇒ <code>object</code>
    * [.parseCTOtoFileSync(ctoPath)](#Commands.parseCTOtoFileSync) ⇒ <code>string</code>
    * [.parseCTOtoFile(ctoPath)](#Commands.parseCTOtoFile) ⇒ <code>string</code>

<a name="Commands.execute"></a>

### Commands.execute(ergoPaths, ctoPaths, contractName, contractInput, stateInput, currentTime, requestsInput) ⇒ <code>object</code>
Execute an Ergo contract with a request

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoPaths | <code>Array.&lt;string&gt;</code> | paths to the Ergo modules |
| ctoPaths | <code>Array.&lt;string&gt;</code> | paths to CTO models |
| contractName | <code>string</code> | of the contract |
| contractInput | <code>string</code> | the contract data |
| stateInput | <code>string</code> | the contract state |
| currentTime | <code>string</code> | the definition of 'now' |
| requestsInput | <code>Array.&lt;string&gt;</code> | the requests |

<a name="Commands.invoke"></a>

### Commands.invoke(ergoPaths, ctoPaths, contractName, clauseName, contractInput, stateInput, currentTime, paramsInput) ⇒ <code>object</code>
Invoke an Ergo contract's clause

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of invocation  

| Param | Type | Description |
| --- | --- | --- |
| ergoPaths | <code>Array.&lt;string&gt;</code> | paths to the Ergo modules |
| ctoPaths | <code>Array.&lt;string&gt;</code> | paths to CTO models |
| contractName | <code>string</code> | the contract |
| clauseName | <code>string</code> | the name of the clause to invoke |
| contractInput | <code>string</code> | the contract data |
| stateInput | <code>string</code> | the contract state |
| currentTime | <code>string</code> | the definition of 'now' |
| paramsInput | <code>object</code> | the parameters for the clause |

<a name="Commands.init"></a>

### Commands.init(ergoPaths, ctoPaths, contractName, contractInput, currentTime, paramsInput) ⇒ <code>object</code>
Invoke init for an Ergo contract

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoPaths | <code>Array.&lt;string&gt;</code> | paths to the Ergo modules |
| ctoPaths | <code>Array.&lt;string&gt;</code> | paths to CTO models |
| contractName | <code>string</code> | the contract name |
| contractInput | <code>string</code> | the contract data |
| currentTime | <code>string</code> | the definition of 'now' |
| paramsInput | <code>object</code> | the parameters for the clause |

<a name="Commands.parseCTOtoFileSync"></a>

### Commands.parseCTOtoFileSync(ctoPath) ⇒ <code>string</code>
Parse CTO to JSON File

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>string</code> - The name of the generated CTOJ model file  

| Param | Type | Description |
| --- | --- | --- |
| ctoPath | <code>string</code> | path to CTO model file |

<a name="Commands.parseCTOtoFile"></a>

### Commands.parseCTOtoFile(ctoPath) ⇒ <code>string</code>
Parse CTO to JSON File

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>string</code> - The name of the generated CTOJ model file  

| Param | Type | Description |
| --- | --- | --- |
| ctoPath | <code>string</code> | path to CTO model file |

<a name="getJson"></a>

## getJson(input) ⇒ <code>object</code>
Load a file or JSON string

**Kind**: global function  
**Returns**: <code>object</code> - JSON object  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | either a file name or a json string |

<a name="setCurrentTime"></a>

## setCurrentTime(currentTime) ⇒ <code>object</code>
Ensures there is a proper current time

**Kind**: global function  
**Returns**: <code>object</code> - if valid, the moment object for the current time  

| Param | Type | Description |
| --- | --- | --- |
| currentTime | <code>string</code> | the definition of 'now' |

<a name="init"></a>

## init(engine, templateLogic, contractJson, currentTime) ⇒ <code>object</code>
Invoke Ergo contract initialization

**Kind**: global function  
**Returns**: <code>object</code> - Promise to the initial state of the contract  

| Param | Type | Description |
| --- | --- | --- |
| engine | <code>object</code> | the execution engine |
| templateLogic | <code>object</code> | the Template Logic |
| contractJson | <code>object</code> | contract data in JSON |
| currentTime | <code>string</code> | the definition of 'now' |

<a name="execute"></a>

## execute(engine, templateLogic, contractJson, stateJson, currentTime, requestJson) ⇒ <code>object</code>
Execute the Ergo contract with a request

**Kind**: global function  
**Returns**: <code>object</code> - Promise to the response  

| Param | Type | Description |
| --- | --- | --- |
| engine | <code>object</code> | the execution engine |
| templateLogic | <code>object</code> | the Template Logic |
| contractJson | <code>object</code> | contract data in JSON |
| stateJson | <code>object</code> | state data in JSON |
| currentTime | <code>string</code> | the definition of 'now' |
| requestJson | <code>object</code> | state data in JSON |

<a name="resolveRootDir"></a>

## resolveRootDir(parameters) ⇒ <code>string</code>
Resolve the root directory

**Kind**: global function  
**Returns**: <code>string</code> - root directory used to resolve file names  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>string</code> | Cucumber's World parameters |

<a name="compareComponent"></a>

## compareComponent(expected, actual)
Compare actual and expected result components

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>string</code> | the expected component as specified in the test workload |
| actual | <code>string</code> | the actual component as returned by the engine |

<a name="compareSuccess"></a>

## compareSuccess(expected, actual)
Compare actual result and expected result

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| expected | <code>string</code> | the expected successful result as specified in the test workload |
| actual | <code>string</code> | the successful result as returned by the engine |

