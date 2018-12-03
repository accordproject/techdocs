---
id: version-0.9.9-ergo-api
title: JavaScript API
original_id: ergo-api
---

## Classes

<dl>
<dt><a href="#Commands">Commands</a></dt>
<dd><p>Utility class that implements the commands exposed by the Ergo CLI.</p>
</dd>
<dt><a href="#Ergo">Ergo</a></dt>
<dd><p>Utility class that implements the internals for Ergo.</p>
</dd>
<dt><a href="#ErgoEngine">ErgoEngine</a></dt>
<dd><p>Utility class that implements the internals for Ergo.</p>
</dd>
</dl>

<a name="Commands"></a>

## Commands
Utility class that implements the commands exposed by the Ergo CLI.

**Kind**: global class  

* [Commands](#Commands)
    * [.execute(ergoPaths, ctoPaths, contractPath, requestsPath, statePath, contractName)](#Commands.execute) ⇒ <code>object</code>
    * [.parseCTOtoFileSync(ctoPath)](#Commands.parseCTOtoFileSync) ⇒ <code>string</code>
    * [.parseCTOtoFile(ctoPath)](#Commands.parseCTOtoFile) ⇒ <code>string</code>

<a name="Commands.execute"></a>

### Commands.execute(ergoPaths, ctoPaths, contractPath, requestsPath, statePath, contractName) ⇒ <code>object</code>
Execute Ergo contract

**Kind**: static method of [<code>Commands</code>](#Commands)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoPaths | <code>Array.&lt;string&gt;</code> | paths to the Ergo modules |
| ctoPaths | <code>Array.&lt;string&gt;</code> | paths to CTO models |
| contractPath | <code>string</code> | path to the contract data in JSON |
| requestsPath | <code>Array.&lt;string&gt;</code> | path to the request transaction in JSON |
| statePath | <code>string</code> | path to the state in JSON |
| contractName | <code>string</code> | of the contract to execute |

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

<a name="Ergo"></a>

## Ergo
Utility class that implements the internals for Ergo.

**Kind**: global class  

* [Ergo](#Ergo)
    * [.parseCTOtoJSON(ctoContent)](#Ergo.parseCTOtoJSON) ⇒ <code>object</code>
    * [.contractCallName(contractName)](#Ergo.contractCallName) ⇒ <code>string</code>
    * [.contractCallNamePromise(contractName)](#Ergo.contractCallNamePromise) ⇒ <code>string</code>
    * [.compileToJavaScript(ergoSources, ctoSources, target, link)](#Ergo.compileToJavaScript) ⇒ <code>string</code>
    * [.compile(ergoSources, ctoSources, target, link)](#Ergo.compile) ⇒ <code>object</code>
    * [.ergoErrorToString(error)](#Ergo.ergoErrorToString) ⇒ <code>string</code>
    * [.ergoVerboseErrorToString(error)](#Ergo.ergoVerboseErrorToString) ⇒ <code>string</code>

<a name="Ergo.parseCTOtoJSON"></a>

### Ergo.parseCTOtoJSON(ctoContent) ⇒ <code>object</code>
Parse CTO to JSON

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>object</code> - The parsed CTO model syntax tree in JSON  

| Param | Type | Description |
| --- | --- | --- |
| ctoContent | <code>string</code> | for CTO model |

<a name="Ergo.contractCallName"></a>

### Ergo.contractCallName(contractName) ⇒ <code>string</code>
Contract call name

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>string</code> - name of the JavaScript class  

| Param | Type | Description |
| --- | --- | --- |
| contractName | <code>string</code> | name of the contract |

<a name="Ergo.contractCallNamePromise"></a>

### Ergo.contractCallNamePromise(contractName) ⇒ <code>string</code>
Contract call name promise

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>string</code> - a promise to the name of the compiled JavaScript class  

| Param | Type | Description |
| --- | --- | --- |
| contractName | <code>string</code> | name of the contract |

<a name="Ergo.compileToJavaScript"></a>

### Ergo.compileToJavaScript(ergoSources, ctoSources, target, link) ⇒ <code>string</code>
Compile Ergo to JavaScript

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>string</code> - The compiled JavaScript code  

| Param | Type | Description |
| --- | --- | --- |
| ergoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | Ergo modules |
| ctoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | CTO models |
| target | <code>string</code> | language (es5|es6|cicero|java) |
| link | <code>boolean</code> | whether to link the javascript runtime |

<a name="Ergo.compile"></a>

### Ergo.compile(ergoSources, ctoSources, target, link) ⇒ <code>object</code>
Compile Ergo

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>object</code> - Promise to the compiled JavaScript code  

| Param | Type | Description |
| --- | --- | --- |
| ergoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | Ergo modules |
| ctoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | CTO models |
| target | <code>string</code> | language (es5|es6|cicero|java) |
| link | <code>boolean</code> | whether to link the javascript runtime |

<a name="Ergo.ergoErrorToString"></a>

### Ergo.ergoErrorToString(error) ⇒ <code>string</code>
Error message

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>string</code> - error message  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | object returned by Ergo compiler |

<a name="Ergo.ergoVerboseErrorToString"></a>

### Ergo.ergoVerboseErrorToString(error) ⇒ <code>string</code>
Error message (verbose)

**Kind**: static method of [<code>Ergo</code>](#Ergo)  
**Returns**: <code>string</code> - verbose error message  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | object returned by Ergo compiler |

<a name="ErgoEngine"></a>

## ErgoEngine
Utility class that implements the internals for Ergo.

**Kind**: global class  

* [ErgoEngine](#ErgoEngine)
    * [.executeErgoCode(ergoCode, codeKind, contractJson, requestJson, stateJson, contractName)](#ErgoEngine.executeErgoCode) ⇒ <code>object</code>
    * [.initErgoCode(ergoCode, codeKind, contractJson, requestJson, contractName)](#ErgoEngine.initErgoCode) ⇒ <code>object</code>
    * [.execute(ergoSources, ctoSources, codeKind, contractJson, requestJson, stateJson, contractName)](#ErgoEngine.execute) ⇒ <code>object</code>
    * [.init(ergoSources, ctoSources, codeKind, contractJson, requestJson, contractName)](#ErgoEngine.init) ⇒ <code>object</code>

<a name="ErgoEngine.executeErgoCode"></a>

### ErgoEngine.executeErgoCode(ergoCode, codeKind, contractJson, requestJson, stateJson, contractName) ⇒ <code>object</code>
Execute Ergo code compiled to ES6

**Kind**: static method of [<code>ErgoEngine</code>](#ErgoEngine)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoCode | <code>string</code> | JavaScript code for ergo logic |
| codeKind | <code>string</code> | either 'es6' or 'es5' |
| contractJson | <code>object</code> | the contract data in JSON |
| requestJson | <code>object</code> | the request transaction in JSON |
| stateJson | <code>object</code> | the state in JSON |
| contractName | <code>string</code> | of the contract to execute |

<a name="ErgoEngine.initErgoCode"></a>

### ErgoEngine.initErgoCode(ergoCode, codeKind, contractJson, requestJson, contractName) ⇒ <code>object</code>
Initialize state

**Kind**: static method of [<code>ErgoEngine</code>](#ErgoEngine)  
**Returns**: <code>object</code> - Promise to the result of initialization  

| Param | Type | Description |
| --- | --- | --- |
| ergoCode | <code>string</code> | JavaScript code for ergo logic |
| codeKind | <code>string</code> | either 'es6' or 'es5' |
| contractJson | <code>object</code> | the contract data in JSON |
| requestJson | <code>object</code> | the request transaction in JSON |
| contractName | <code>string</code> | of the contract to initialize |

<a name="ErgoEngine.execute"></a>

### ErgoEngine.execute(ergoSources, ctoSources, codeKind, contractJson, requestJson, stateJson, contractName) ⇒ <code>object</code>
Execute Ergo (JavaScript)

**Kind**: static method of [<code>ErgoEngine</code>](#ErgoEngine)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | Ergo modules |
| ctoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | CTO models |
| codeKind | <code>string</code> | either 'es6' or 'es5' |
| contractJson | <code>object</code> | the contract data in JSON |
| requestJson | <code>object</code> | the request transaction in JSON |
| stateJson | <code>object</code> | the state in JSON |
| contractName | <code>string</code> | of the contract to execute |

<a name="ErgoEngine.init"></a>

### ErgoEngine.init(ergoSources, ctoSources, codeKind, contractJson, requestJson, contractName) ⇒ <code>object</code>
Initialize Ergo contract state (JavaScript)

**Kind**: static method of [<code>ErgoEngine</code>](#ErgoEngine)  
**Returns**: <code>object</code> - Promise to the result of execution  

| Param | Type | Description |
| --- | --- | --- |
| ergoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | Ergo modules |
| ctoSources | <code>Array.&lt;{name:string, content:string}&gt;</code> | CTO models |
| codeKind | <code>string</code> | either 'es6' or 'es5' |
| contractJson | <code>object</code> | the contract data in JSON |
| requestJson | <code>object</code> | the request transaction in JSON |
| contractName | <code>string</code> | of the contract to execute |

