---
id: ref-ergo-api
title: Ergo API
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
<dt><a href="#loadTemplate">loadTemplate(template, files)</a> ⇒ <code>Promise.&lt;LogicManager&gt;</code></dt>
<dd><p>Load a template from directory or files</p>
</dd>
<dt><a href="#fromDirectory">fromDirectory(path, [options])</a> ⇒ <code>Promise.&lt;LogicManager&gt;</code></dt>
<dd><p>Builds a LogicManager from a directory.</p>
</dd>
<dt><a href="#fromZip">fromZip(buffer, [options])</a> ⇒ <code>Promise.&lt;LogicManager&gt;</code></dt>
<dd><p>Builds a LogicManager from a Zip.</p>
</dd>
<dt><a href="#fromFiles">fromFiles(files, [options])</a> ⇒ <code>Promise.&lt;LogicManager&gt;</code></dt>
<dd><p>Builds a LogicManager from files.</p>
</dd>
<dt><a href="#validateContract">validateContract(modelManager, contract, utcOffset, options)</a> ⇒ <code>object</code></dt>
<dd><p>Validate contract JSON</p>
</dd>
<dt><a href="#validateInput">validateInput(modelManager, input, utcOffset)</a> ⇒ <code>object</code></dt>
<dd><p>Validate input JSON</p>
</dd>
<dt><a href="#validateStandard">validateStandard(modelManager, input, utcOffset)</a> ⇒ <code>object</code></dt>
<dd><p>Validate standard</p>
</dd>
<dt><a href="#validateInputRecord">validateInputRecord(modelManager, input, utcOffset)</a> ⇒ <code>object</code></dt>
<dd><p>Validate input JSON record</p>
</dd>
<dt><a href="#validateOutput">validateOutput(modelManager, output, utcOffset)</a> ⇒ <code>object</code></dt>
<dd><p>Validate output JSON</p>
</dd>
<dt><a href="#validateOutputArray">validateOutputArray(modelManager, output, utcOffset)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Validate output JSON array</p>
</dd>
<dt><a href="#init">init(engine, logicManager, contractJson, currentTime, utcOffset)</a> ⇒ <code>object</code></dt>
<dd><p>Invoke Ergo contract initialization</p>
</dd>
<dt><a href="#trigger">trigger(engine, logicManager, contractJson, stateJson, currentTime, utcOffset, requestJson)</a> ⇒ <code>object</code></dt>
<dd><p>Trigger the Ergo contract with a request</p>
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
    * [.trigger(template, files, contractInput, stateInput, [currentTime], [utcOffset], requestsInput, warnings)](#Commands.trigger) ⇒ <code>object</code>
    * [.invoke(template, files, clauseName, contractInput, stateInput, [currentTime], [utcOffset], paramsInput, warnings)](#Commands.invoke) ⇒ <code>object</code>
    * [.initialize(template, files, contractInput, [currentTime], [utcOffset], paramsInput, warnings)](#Commands.initialize) ⇒ <code>object</code>
    * [.parseCTOtoFileSync(ctoPath)](#Commands.parseCTOtoFileSync) ⇒ <code>string</code>
    * [.parseCTOtoFile(ctoPath)](#Commands.parseCTOtoFile) ⇒ <code>string</code>

<a name="Commands.trigger"></a>

### Commands.trigger(template, files, contractInput, stateInput, [currentTime], [utcOffset], requestsInput, warnings) ⇒ <code>object</code>
Send a request an Ergo contract

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | template directory |
| files | <code>Array.&lt;string&gt;</code> | input files |
| contractInput | <code>string</code> | the contract data |
| stateInput | <code>string</code> | the contract state |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |
| requestsInput | <code>Array.&lt;string&gt;</code> | the requests |
| warnings | <code>boolean</code> | whether to print warnings |

<a name="Commands.invoke"></a>

### Commands.invoke(template, files, clauseName, contractInput, stateInput, [currentTime], [utcOffset], paramsInput, warnings) ⇒ <code>object</code>
Invoke an Ergo contract's clause

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of invocation  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | template directory |
| files | <code>Array.&lt;string&gt;</code> | input files |
| clauseName | <code>string</code> | the name of the clause to invoke |
| contractInput | <code>string</code> | the contract data |
| stateInput | <code>string</code> | the contract state |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |
| paramsInput | <code>object</code> | the parameters for the clause |
| warnings | <code>boolean</code> | whether to print warnings |

<a name="Commands.initialize"></a>

### Commands.initialize(template, files, contractInput, [currentTime], [utcOffset], paramsInput, warnings) ⇒ <code>object</code>
Invoke init for an Ergo contract

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | template directory |
| files | <code>Array.&lt;string&gt;</code> | input files |
| contractInput | <code>string</code> | the contract data |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |
| paramsInput | <code>object</code> | the parameters for the clause |
| warnings | <code>boolean</code> | whether to print warnings |

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

<a name="loadTemplate"></a>

## loadTemplate(template, files) ⇒ <code>Promise.&lt;LogicManager&gt;</code>
Load a template from directory or files

**Kind**: global function  
**Returns**: <code>Promise.&lt;LogicManager&gt;</code> - a Promise to the instantiated logicmanager  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | template directory |
| files | <code>Array.&lt;string&gt;</code> | input files |

<a name="fromDirectory"></a>

## fromDirectory(path, [options]) ⇒ <code>Promise.&lt;LogicManager&gt;</code>
Builds a LogicManager from a directory.

**Kind**: global function  
**Returns**: <code>Promise.&lt;LogicManager&gt;</code> - a Promise to the instantiated logicmanager  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | to a local directory |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |

<a name="fromZip"></a>

## fromZip(buffer, [options]) ⇒ <code>Promise.&lt;LogicManager&gt;</code>
Builds a LogicManager from a Zip.

**Kind**: global function  
**Returns**: <code>Promise.&lt;LogicManager&gt;</code> - a Promise to the instantiated logicmanager  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | the buffer to a Zip (zip) file |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |

<a name="fromFiles"></a>

## fromFiles(files, [options]) ⇒ <code>Promise.&lt;LogicManager&gt;</code>
Builds a LogicManager from files.

**Kind**: global function  
**Returns**: <code>Promise.&lt;LogicManager&gt;</code> - a Promise to the instantiated logicmanager  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;String&gt;</code> | file names |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |

<a name="validateContract"></a>

## validateContract(modelManager, contract, utcOffset, options) ⇒ <code>object</code>
Validate contract JSON

**Kind**: global function  
**Returns**: <code>object</code> - the validated contract  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| contract | <code>object</code> | the contract JSON |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |
| options | <code>object</code> | parameters for contract variables validation |

<a name="validateInput"></a>

## validateInput(modelManager, input, utcOffset) ⇒ <code>object</code>
Validate input JSON

**Kind**: global function  
**Returns**: <code>object</code> - the validated input  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| input | <code>object</code> | the input JSON |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |

<a name="validateStandard"></a>

## validateStandard(modelManager, input, utcOffset) ⇒ <code>object</code>
Validate standard

**Kind**: global function  
**Returns**: <code>object</code> - the validated input  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| input | <code>object</code> | the input JSON |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |

<a name="validateInputRecord"></a>

## validateInputRecord(modelManager, input, utcOffset) ⇒ <code>object</code>
Validate input JSON record

**Kind**: global function  
**Returns**: <code>object</code> - the validated input  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| input | <code>object</code> | the input JSON record |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |

<a name="validateOutput"></a>

## validateOutput(modelManager, output, utcOffset) ⇒ <code>object</code>
Validate output JSON

**Kind**: global function  
**Returns**: <code>object</code> - the validated output  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| output | <code>object</code> | the output JSON |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |

<a name="validateOutputArray"></a>

## validateOutputArray(modelManager, output, utcOffset) ⇒ <code>Array.&lt;object&gt;</code>
Validate output JSON array

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - the validated output array  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>object</code> | the Concerto model manager |
| output | <code>\*</code> | the output JSON array |
| utcOffset | <code>number</code> | UTC Offset for DateTime values |

<a name="init"></a>

## init(engine, logicManager, contractJson, currentTime, utcOffset) ⇒ <code>object</code>
Invoke Ergo contract initialization

**Kind**: global function  
**Returns**: <code>object</code> - Promise to the initial state of the contract  

| Param | Type | Description |
| --- | --- | --- |
| engine | <code>object</code> | the execution engine |
| logicManager | <code>object</code> | the Template Logic |
| contractJson | <code>object</code> | contract data in JSON |
| currentTime | <code>string</code> | the definition of 'now' |
| utcOffset | <code>utcOffset</code> | UTC Offset for this execution |

<a name="trigger"></a>

## trigger(engine, logicManager, contractJson, stateJson, currentTime, utcOffset, requestJson) ⇒ <code>object</code>
Trigger the Ergo contract with a request

**Kind**: global function  
**Returns**: <code>object</code> - Promise to the response  

| Param | Type | Description |
| --- | --- | --- |
| engine | <code>object</code> | the execution engine |
| logicManager | <code>object</code> | the Template Logic |
| contractJson | <code>object</code> | contract data in JSON |
| stateJson | <code>object</code> | state data in JSON |
| currentTime | <code>string</code> | the definition of 'now' |
| utcOffset | <code>utcOffset</code> | UTC Offset for this execution |
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

