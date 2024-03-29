---
id: ref-cicero-api
title: Cicero API
---

## Modules

<dl>
<dt><a href="#module_cicero-engine">cicero-engine</a></dt>
<dd><p>Clause Engine</p>
</dd>
<dt><a href="#module_cicero-core">cicero-core</a></dt>
<dd><p>Cicero Core - defines the core data types for Cicero.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Clause">Clause</a></dt>
<dd><p>A Clause is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.</p>
</dd>
<dt><a href="#Contract">Contract</a></dt>
<dd><p>A Contract is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.</p>
</dd>
<dt><a href="#Metadata">Metadata</a></dt>
<dd><p>Defines the metadata for a Template, including the name, version, README markdown.</p>
</dd>
<dt><a href="#Template">Template</a></dt>
<dd><p>A template for a legal clause or contract. A Template has a template model, request/response transaction types,
a template grammar (natural language for the template) as well as Ergo code for the business logic of the
template.</p>
</dd>
<dt><a href="#TemplateInstance">TemplateInstance</a></dt>
<dd><p>A TemplateInstance is an instance of a Clause or Contract template. It is executable business logic, linked to
a natural language (legally enforceable) template.
A TemplateInstance must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the TemplateInstance by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.</p>
</dd>
<dt><a href="#CompositeArchiveLoader">CompositeArchiveLoader</a></dt>
<dd><p>Manages a set of archive loaders, delegating to the first archive
loader that accepts a URL.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isPNG">isPNG(buffer)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks whether the file is PNG</p>
</dd>
<dt><a href="#getMimeType">getMimeType(buffer)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns the mime-type of the file</p>
</dd>
</dl>

<a name="module_cicero-engine"></a>

## cicero-engine
Clause Engine


* [cicero-engine](#module_cicero-engine)
    * [.Engine](#module_cicero-engine.Engine)
        * [new Engine()](#new_module_cicero-engine.Engine_new)
        * [.trigger(clause, request, state, [currentTime], [utcOffset])](#module_cicero-engine.Engine+trigger) ⇒ <code>Promise</code>
        * [.invoke(clause, clauseName, params, state, [currentTime], [utcOffset])](#module_cicero-engine.Engine+invoke) ⇒ <code>Promise</code>
        * [.init(clause, [currentTime], [utcOffset], params)](#module_cicero-engine.Engine+init) ⇒ <code>Promise</code>
        * [.getErgoEngine()](#module_cicero-engine.Engine+getErgoEngine) ⇒ <code>ErgoEngine</code>

<a name="module_cicero-engine.Engine"></a>

### cicero-engine.Engine
<p>
Engine class. Stateless execution of clauses against a request object, returning a response to the caller.
</p>

**Kind**: static class of [<code>cicero-engine</code>](#module_cicero-engine)  
**Access**: public  

* [.Engine](#module_cicero-engine.Engine)
    * [new Engine()](#new_module_cicero-engine.Engine_new)
    * [.trigger(clause, request, state, [currentTime], [utcOffset])](#module_cicero-engine.Engine+trigger) ⇒ <code>Promise</code>
    * [.invoke(clause, clauseName, params, state, [currentTime], [utcOffset])](#module_cicero-engine.Engine+invoke) ⇒ <code>Promise</code>
    * [.init(clause, [currentTime], [utcOffset], params)](#module_cicero-engine.Engine+init) ⇒ <code>Promise</code>
    * [.getErgoEngine()](#module_cicero-engine.Engine+getErgoEngine) ⇒ <code>ErgoEngine</code>

<a name="new_module_cicero-engine.Engine_new"></a>

#### new Engine()
Create the Engine.

<a name="module_cicero-engine.Engine+trigger"></a>

#### engine.trigger(clause, request, state, [currentTime], [utcOffset]) ⇒ <code>Promise</code>
Send a request to a clause for execution

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>Promise</code> - a promise that resolves to a result for the clause  

| Param | Type | Description |
| --- | --- | --- |
| clause | [<code>Clause</code>](#Clause) | the clause |
| request | <code>object</code> | the request, a JS object that can be deserialized using the Composer serializer. |
| state | <code>object</code> | the contract state, a JS object that can be deserialized using the Composer serializer. |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |

<a name="module_cicero-engine.Engine+invoke"></a>

#### engine.invoke(clause, clauseName, params, state, [currentTime], [utcOffset]) ⇒ <code>Promise</code>
Invoke a specific clause for execution

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>Promise</code> - a promise that resolves to a result for the clause  

| Param | Type | Description |
| --- | --- | --- |
| clause | [<code>Clause</code>](#Clause) | the clause |
| clauseName | <code>string</code> | the clause name |
| params | <code>object</code> | the clause parameters, a JS object whose fields that can be deserialized using the Composer serializer. |
| state | <code>object</code> | the contract state, a JS object that can be deserialized using the Composer serializer. |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |

<a name="module_cicero-engine.Engine+init"></a>

#### engine.init(clause, [currentTime], [utcOffset], params) ⇒ <code>Promise</code>
Initialize a clause

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>Promise</code> - a promise that resolves to a result for the clause initialization  

| Param | Type | Description |
| --- | --- | --- |
| clause | [<code>Clause</code>](#Clause) | the clause |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |
| params | <code>object</code> | the clause parameters, a JS object whose fields that can be deserialized using the Composer serializer. |

<a name="module_cicero-engine.Engine+getErgoEngine"></a>

#### engine.getErgoEngine() ⇒ <code>ErgoEngine</code>
Provides access to the underlying Ergo engine.

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>ErgoEngine</code> - the Ergo Engine for this Engine  
<a name="module_cicero-core"></a>

## cicero-core
Cicero Core - defines the core data types for Cicero.

<a name="Clause"></a>

## Clause
A Clause is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: global class  
**Access**: public  
<a name="Contract"></a>

## Contract
A Contract is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: global class  
**Access**: public  
<a name="Metadata"></a>

## Metadata
Defines the metadata for a Template, including the name, version, README markdown.

**Kind**: global class  
**Access**: public  

* [Metadata](#Metadata)
    * [new Metadata(packageJson, readme, samples, request, logo)](#new_Metadata_new)
    * _instance_
        * [.getTemplateType()](#Metadata+getTemplateType) ⇒ <code>number</code>
        * [.getLogo()](#Metadata+getLogo) ⇒ <code>Buffer</code>
        * [.getAuthor()](#Metadata+getAuthor) ⇒ <code>\*</code>
        * [.getRuntime()](#Metadata+getRuntime) ⇒ <code>string</code>
        * [.getCiceroVersion()](#Metadata+getCiceroVersion) ⇒ <code>string</code>
        * [.satisfiesCiceroVersion(version)](#Metadata+satisfiesCiceroVersion) ⇒ <code>string</code>
        * [.getSamples()](#Metadata+getSamples) ⇒ <code>object</code>
        * [.getRequest()](#Metadata+getRequest) ⇒ <code>object</code>
        * [.getSample(locale)](#Metadata+getSample) ⇒ <code>string</code>
        * [.getREADME()](#Metadata+getREADME) ⇒ <code>String</code>
        * [.getPackageJson()](#Metadata+getPackageJson) ⇒ <code>object</code>
        * [.getName()](#Metadata+getName) ⇒ <code>string</code>
        * [.getDisplayName()](#Metadata+getDisplayName) ⇒ <code>string</code>
        * [.getKeywords()](#Metadata+getKeywords) ⇒ <code>Array</code>
        * [.getDescription()](#Metadata+getDescription) ⇒ <code>string</code>
        * [.getVersion()](#Metadata+getVersion) ⇒ <code>string</code>
        * [.getIdentifier()](#Metadata+getIdentifier) ⇒ <code>string</code>
        * [.createTargetMetadata(runtimeName)](#Metadata+createTargetMetadata) ⇒ <code>object</code>
        * [.toJSON()](#Metadata+toJSON) ⇒ <code>object</code>
    * _static_
        * [.checkImage(buffer)](#Metadata.checkImage)
        * [.checkImageDimensions(buffer, mimeType)](#Metadata.checkImageDimensions)

<a name="new_Metadata_new"></a>

### new Metadata(packageJson, readme, samples, request, logo)
Create the Metadata.
<p>
<strong>Note: Only to be called by framework code. Applications should
retrieve instances from [Template](#Template)</strong>
</p>


| Param | Type | Description |
| --- | --- | --- |
| packageJson | <code>object</code> | the JS object for package.json (required) |
| readme | <code>String</code> | the README.md for the template (may be null) |
| samples | <code>object</code> | the sample markdown for the template in different locales, |
| request | <code>object</code> | the JS object for the sample request |
| logo | <code>Buffer</code> | the bytes data for the image represented as an object whose keys are the locales and whose values are the sample markdown. For example:  {      default: 'default sample markdown',      en: 'sample text in english',      fr: 'exemple de texte français'  } Locale keys (with the exception of default) conform to the IETF Language Tag specification (BCP 47). THe `default` key represents sample template text in a non-specified language, stored in a file called `sample.md`. |

<a name="Metadata+getTemplateType"></a>

### metadata.getTemplateType() ⇒ <code>number</code>
Returns either a 0 (for a contract template), or 1 (for a clause template)

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>number</code> - the template type  
<a name="Metadata+getLogo"></a>

### metadata.getLogo() ⇒ <code>Buffer</code>
Returns the logo at the root of the template

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>Buffer</code> - the bytes data of logo  
<a name="Metadata+getAuthor"></a>

### metadata.getAuthor() ⇒ <code>\*</code>
Returns the author for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>\*</code> - the author information  
<a name="Metadata+getRuntime"></a>

### metadata.getRuntime() ⇒ <code>string</code>
Returns the name of the runtime target for this template, or null if this template
has not been compiled for a specific runtime.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the name of the runtime  
<a name="Metadata+getCiceroVersion"></a>

### metadata.getCiceroVersion() ⇒ <code>string</code>
Returns the version of Cicero that this template is compatible with.
i.e. which version of the runtime was this template built for?
The version string conforms to the semver definition

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the semantic version  
<a name="Metadata+satisfiesCiceroVersion"></a>

### metadata.satisfiesCiceroVersion(version) ⇒ <code>string</code>
Only returns true if the current cicero version satisfies the target version of this template

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the semantic version  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | the cicero version to check against |

<a name="Metadata+getSamples"></a>

### metadata.getSamples() ⇒ <code>object</code>
Returns the samples for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>object</code> - the sample files for the template  
<a name="Metadata+getRequest"></a>

### metadata.getRequest() ⇒ <code>object</code>
Returns the sample request for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>object</code> - the sample request for the template  
<a name="Metadata+getSample"></a>

### metadata.getSample(locale) ⇒ <code>string</code>
Returns the sample for this template in the given locale. This may be null.
If no locale is specified returns the default sample if it has been specified.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the sample file for the template in the given locale or null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locale | <code>string</code> | <code>null</code> | the IETF language code for the language. |

<a name="Metadata+getREADME"></a>

### metadata.getREADME() ⇒ <code>String</code>
Returns the README.md for this template. This may be null if the template does not have a README.md

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>String</code> - the README.md file for the template or null  
<a name="Metadata+getPackageJson"></a>

### metadata.getPackageJson() ⇒ <code>object</code>
Returns the package.json for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>object</code> - the Javascript object for package.json  
<a name="Metadata+getName"></a>

### metadata.getName() ⇒ <code>string</code>
Returns the name for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the name of the template  
<a name="Metadata+getDisplayName"></a>

### metadata.getDisplayName() ⇒ <code>string</code>
Returns the display name for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the display name of the template  
<a name="Metadata+getKeywords"></a>

### metadata.getKeywords() ⇒ <code>Array</code>
Returns the keywords for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>Array</code> - the keywords of the template  
<a name="Metadata+getDescription"></a>

### metadata.getDescription() ⇒ <code>string</code>
Returns the description for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the description of the template  
<a name="Metadata+getVersion"></a>

### metadata.getVersion() ⇒ <code>string</code>
Returns the version for this template.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the description of the template  
<a name="Metadata+getIdentifier"></a>

### metadata.getIdentifier() ⇒ <code>string</code>
Returns the identifier for this template, formed from name@version.

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>string</code> - the identifier of the template  
<a name="Metadata+createTargetMetadata"></a>

### metadata.createTargetMetadata(runtimeName) ⇒ <code>object</code>
Return new Metadata for a target runtime

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>object</code> - the new Metadata  

| Param | Type | Description |
| --- | --- | --- |
| runtimeName | <code>string</code> | the target runtime name |

<a name="Metadata+toJSON"></a>

### metadata.toJSON() ⇒ <code>object</code>
Return the whole metadata content, for hashing

**Kind**: instance method of [<code>Metadata</code>](#Metadata)  
**Returns**: <code>object</code> - the content of the metadata object  
<a name="Metadata.checkImage"></a>

### Metadata.checkImage(buffer)
Check the buffer is a png file with the right size

**Kind**: static method of [<code>Metadata</code>](#Metadata)  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | the buffer object |

<a name="Metadata.checkImageDimensions"></a>

### Metadata.checkImageDimensions(buffer, mimeType)
Checks if dimensions for the image are correct.

**Kind**: static method of [<code>Metadata</code>](#Metadata)  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | the buffer object |
| mimeType | <code>string</code> | the mime type of the object |

<a name="Template"></a>

## *Template*
A template for a legal clause or contract. A Template has a template model, request/response transaction types,
a template grammar (natural language for the template) as well as Ergo code for the business logic of the
template.

**Kind**: global abstract class  
**Access**: public  

* *[Template](#Template)*
    * *[new Template(packageJson, readme, samples, request, logo, options, authorSignature)](#new_Template_new)*
    * _instance_
        * *[.validate(options)](#Template+validate)*
        * *[.getTemplateModel()](#Template+getTemplateModel) ⇒ <code>ClassDeclaration</code>*
        * *[.getIdentifier()](#Template+getIdentifier) ⇒ <code>String</code>*
        * *[.getMetadata()](#Template+getMetadata) ⇒ [<code>Metadata</code>](#Metadata)*
        * *[.getName()](#Template+getName) ⇒ <code>String</code>*
        * *[.getDisplayName()](#Template+getDisplayName) ⇒ <code>string</code>*
        * *[.getVersion()](#Template+getVersion) ⇒ <code>String</code>*
        * *[.getDescription()](#Template+getDescription) ⇒ <code>String</code>*
        * *[.getHash()](#Template+getHash) ⇒ <code>string</code>*
        * *[.verifyTemplateSignature()](#Template+verifyTemplateSignature)*
        * *[.signTemplate(p12File, passphrase, timestamp)](#Template+signTemplate)*
        * *[.toArchive([language], [options])](#Template+toArchive) ⇒ <code>Promise.&lt;Buffer&gt;</code>*
        * *[.getParserManager()](#Template+getParserManager) ⇒ <code>ParserManager</code>*
        * *[.getLogicManager()](#Template+getLogicManager) ⇒ <code>LogicManager</code>*
        * *[.getIntrospector()](#Template+getIntrospector) ⇒ <code>Introspector</code>*
        * *[.getFactory()](#Template+getFactory) ⇒ <code>Factory</code>*
        * *[.getSerializer()](#Template+getSerializer) ⇒ <code>Serializer</code>*
        * *[.getRequestTypes()](#Template+getRequestTypes) ⇒ <code>Array</code>*
        * *[.getResponseTypes()](#Template+getResponseTypes) ⇒ <code>Array</code>*
        * *[.getEmitTypes()](#Template+getEmitTypes) ⇒ <code>Array</code>*
        * *[.getStateTypes()](#Template+getStateTypes) ⇒ <code>Array</code>*
        * *[.hasLogic()](#Template+hasLogic) ⇒ <code>boolean</code>*
    * _static_
        * *[.fromDirectory(path, [options])](#Template.fromDirectory) ⇒ [<code>Promise.&lt;Template&gt;</code>](#Template)*
        * *[.fromArchive(buffer, [options])](#Template.fromArchive) ⇒ [<code>Promise.&lt;Template&gt;</code>](#Template)*
        * *[.fromUrl(url, [options])](#Template.fromUrl) ⇒ <code>Promise</code>*
        * *[.instanceOf(classDeclaration, fqt)](#Template.instanceOf) ⇒ <code>boolean</code>*

<a name="new_Template_new"></a>

### *new Template(packageJson, readme, samples, request, logo, options, authorSignature)*
Create the Template.
Note: Only to be called by framework code. Applications should
retrieve instances from [fromArchive](#Template.fromArchive) or [fromDirectory](#Template.fromDirectory).


| Param | Type | Description |
| --- | --- | --- |
| packageJson | <code>object</code> | the JS object for package.json |
| readme | <code>String</code> | the readme in markdown for the template (optional) |
| samples | <code>object</code> | the sample text for the template in different locales |
| request | <code>object</code> | the JS object for the sample request |
| logo | <code>Buffer</code> | the bytes data of logo |
| options | <code>Object</code> | e.g., { warnings: true } |
| authorSignature | <code>Object</code> | object containing template hash, timestamp, author's certificate, signature |

<a name="Template+validate"></a>

### *template.validate(options)*
Verifies that the template is well formed.
Compiles the Ergo logic.
Throws an exception with the details of any validation errors.

**Kind**: instance method of [<code>Template</code>](#Template)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | e.g., { verify: true } |

<a name="Template+getTemplateModel"></a>

### *template.getTemplateModel() ⇒ <code>ClassDeclaration</code>*
Returns the template model for the template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>ClassDeclaration</code> - the template model for the template  
**Throws**:

- <code>Error</code> if no template model is found, or multiple template models are found

<a name="Template+getIdentifier"></a>

### *template.getIdentifier() ⇒ <code>String</code>*
Returns the identifier for this template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - the identifier of this template  
<a name="Template+getMetadata"></a>

### *template.getMetadata() ⇒ [<code>Metadata</code>](#Metadata)*
Returns the metadata for this template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: [<code>Metadata</code>](#Metadata) - the metadata for this template  
<a name="Template+getName"></a>

### *template.getName() ⇒ <code>String</code>*
Returns the name for this template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - the name of this template  
<a name="Template+getDisplayName"></a>

### *template.getDisplayName() ⇒ <code>string</code>*
Returns the display name for this template.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - the display name of the template  
<a name="Template+getVersion"></a>

### *template.getVersion() ⇒ <code>String</code>*
Returns the version for this template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - the version of this template. Use semver module
to parse.  
<a name="Template+getDescription"></a>

### *template.getDescription() ⇒ <code>String</code>*
Returns the description for this template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>String</code> - the description of this template  
<a name="Template+getHash"></a>

### *template.getHash() ⇒ <code>string</code>*
Gets a content based SHA-256 hash for this template. Hash
is based on the metadata for the template plus the contents of
all the models and all the script files.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - the SHA-256 hash in hex format  
<a name="Template+verifyTemplateSignature"></a>

### *template.verifyTemplateSignature()*
verifies the signature stored in the template object using the template hash and timestamp

**Kind**: instance method of [<code>Template</code>](#Template)  
<a name="Template+signTemplate"></a>

### *template.signTemplate(p12File, passphrase, timestamp)*
signs a string made up of template hash and time stamp using private key derived
from the keystore

**Kind**: instance method of [<code>Template</code>](#Template)  

| Param | Type | Description |
| --- | --- | --- |
| p12File | <code>String</code> | encoded string of p12 keystore file |
| passphrase | <code>String</code> | passphrase for the keystore file |
| timestamp | <code>Number</code> | timestamp of the moment of signature is done |

<a name="Template+toArchive"></a>

### *template.toArchive([language], [options]) ⇒ <code>Promise.&lt;Buffer&gt;</code>*
Persists this template to a Cicero Template Archive (cta) file.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - the zlib buffer  

| Param | Type | Description |
| --- | --- | --- |
| [language] | <code>string</code> | target language for the archive (should be 'ergo') |
| [options] | <code>Object</code> | JSZip options and keystore object containing path and passphrase for the keystore |

<a name="Template+getParserManager"></a>

### *template.getParserManager() ⇒ <code>ParserManager</code>*
Provides access to the parser manager for this template.
The parser manager can convert template data to and from
natural language text.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>ParserManager</code> - the ParserManager for this template  
<a name="Template+getLogicManager"></a>

### *template.getLogicManager() ⇒ <code>LogicManager</code>*
Provides access to the template logic for this template.
The template logic encapsulate the code necessary to
execute the clause or contract.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>LogicManager</code> - the LogicManager for this template  
<a name="Template+getIntrospector"></a>

### *template.getIntrospector() ⇒ <code>Introspector</code>*
Provides access to the Introspector for this template. The Introspector
is used to reflect on the types defined within this template.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Introspector</code> - the Introspector for this template  
<a name="Template+getFactory"></a>

### *template.getFactory() ⇒ <code>Factory</code>*
Provides access to the Factory for this template. The Factory
is used to create the types defined in this template.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Factory</code> - the Factory for this template  
<a name="Template+getSerializer"></a>

### *template.getSerializer() ⇒ <code>Serializer</code>*
Provides access to the Serializer for this template. The Serializer
is used to serialize instances of the types defined within this template.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Serializer</code> - the Serializer for this template  
<a name="Template+getRequestTypes"></a>

### *template.getRequestTypes() ⇒ <code>Array</code>*
Provides a list of the input types that are accepted by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Array</code> - a list of the request types  
<a name="Template+getResponseTypes"></a>

### *template.getResponseTypes() ⇒ <code>Array</code>*
Provides a list of the response types that are returned by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Array</code> - a list of the response types  
<a name="Template+getEmitTypes"></a>

### *template.getEmitTypes() ⇒ <code>Array</code>*
Provides a list of the emit types that are emitted by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Array</code> - a list of the emit types  
<a name="Template+getStateTypes"></a>

### *template.getStateTypes() ⇒ <code>Array</code>*
Provides a list of the state types that are expected by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Array</code> - a list of the state types  
<a name="Template+hasLogic"></a>

### *template.hasLogic() ⇒ <code>boolean</code>*
Returns true if the template has logic, i.e. has more than one script file.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>boolean</code> - true if the template has logic  
<a name="Template.fromDirectory"></a>

### *Template.fromDirectory(path, [options]) ⇒ [<code>Promise.&lt;Template&gt;</code>](#Template)*
Builds a Template from the contents of a directory.
The directory must include a package.json in the root (used to specify
the name, version and description of the template).

**Kind**: static method of [<code>Template</code>](#Template)  
**Returns**: [<code>Promise.&lt;Template&gt;</code>](#Template) - a Promise to the instantiated template  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>String</code> |  | to a local directory |
| [options] | <code>Object</code> | <code></code> | an optional set of options to configure the instance. |

<a name="Template.fromArchive"></a>

### *Template.fromArchive(buffer, [options]) ⇒ [<code>Promise.&lt;Template&gt;</code>](#Template)*
Create a template from an archive.

**Kind**: static method of [<code>Template</code>](#Template)  
**Returns**: [<code>Promise.&lt;Template&gt;</code>](#Template) - a Promise to the template  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| buffer | <code>Buffer</code> |  | the buffer to a Cicero Template Archive (cta) file |
| [options] | <code>Object</code> | <code></code> | an optional set of options to configure the instance. |

<a name="Template.fromUrl"></a>

### *Template.fromUrl(url, [options]) ⇒ <code>Promise</code>*
Create a template from an URL.

**Kind**: static method of [<code>Template</code>](#Template)  
**Returns**: <code>Promise</code> - a Promise to the template  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | the URL to a Cicero Template Archive (cta) file |
| [options] | <code>Object</code> | <code></code> | an optional set of options to configure the instance. |

<a name="Template.instanceOf"></a>

### *Template.instanceOf(classDeclaration, fqt) ⇒ <code>boolean</code>*
Check to see if a ClassDeclaration is an instance of the specified fully qualified
type name.

**Kind**: static method of [<code>Template</code>](#Template)  
**Returns**: <code>boolean</code> - True if classDeclaration an instance of the specified fully
qualified type name, false otherwise.  
**Internal**:   

| Param | Type | Description |
| --- | --- | --- |
| classDeclaration | <code>ClassDeclaration</code> | The class to test |
| fqt | <code>String</code> | The fully qualified type name. |

<a name="TemplateInstance"></a>

## *TemplateInstance*
A TemplateInstance is an instance of a Clause or Contract template. It is executable business logic, linked to
a natural language (legally enforceable) template.
A TemplateInstance must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the TemplateInstance by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: global abstract class  
**Access**: public  

* *[TemplateInstance](#TemplateInstance)*
    * *[new TemplateInstance(template)](#new_TemplateInstance_new)*
    * _instance_
        * *[.setData(data)](#TemplateInstance+setData)*
        * *[.getData()](#TemplateInstance+getData) ⇒ <code>object</code>*
        * *[.getEngine()](#TemplateInstance+getEngine) ⇒ <code>object</code>*
        * *[.getDataAsConcertoObject()](#TemplateInstance+getDataAsConcertoObject) ⇒ <code>object</code>*
        * *[.parse(input, [currentTime], [utcOffset], [fileName])](#TemplateInstance+parse)*
        * *[.draft([options], [currentTime], [utcOffset])](#TemplateInstance+draft) ⇒ <code>string</code>*
        * *[.formatCiceroMark(ciceroMarkParsed, options, format)](#TemplateInstance+formatCiceroMark) ⇒ <code>string</code>*
        * *[.getIdentifier()](#TemplateInstance+getIdentifier) ⇒ <code>String</code>*
        * *[.getTemplate()](#TemplateInstance+getTemplate) ⇒ [<code>Template</code>](#Template)*
        * *[.getLogicManager()](#TemplateInstance+getLogicManager) ⇒ <code>LogicManager</code>*
        * *[.toJSON()](#TemplateInstance+toJSON) ⇒ <code>object</code>*
    * _static_
        * *[.ciceroFormulaEval(logicManager, clauseId, ergoEngine, name)](#TemplateInstance.ciceroFormulaEval) ⇒ <code>\*</code>*
        * *[.rebuildParser(parserManager, logicManager, ergoEngine, templateName, grammar)](#TemplateInstance.rebuildParser)*

<a name="new_TemplateInstance_new"></a>

### *new TemplateInstance(template)*
Create the Clause and link it to a Template.


| Param | Type | Description |
| --- | --- | --- |
| template | [<code>Template</code>](#Template) | the template for the clause |

<a name="TemplateInstance+setData"></a>

### *templateInstance.setData(data)*
Set the data for the clause

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | the data for the clause, must be an instance of the template model for the clause's template. This should be a plain JS object and will be deserialized and validated into the Concerto object before assignment. |

<a name="TemplateInstance+getData"></a>

### *templateInstance.getData() ⇒ <code>object</code>*
Get the data for the clause. This is a plain JS object. To retrieve the Concerto
object call getConcertoData().

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>object</code> - - the data for the clause, or null if it has not been set  
<a name="TemplateInstance+getEngine"></a>

### *templateInstance.getEngine() ⇒ <code>object</code>*
Get the current Ergo engine

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>object</code> - - the data for the clause, or null if it has not been set  
<a name="TemplateInstance+getDataAsConcertoObject"></a>

### *templateInstance.getDataAsConcertoObject() ⇒ <code>object</code>*
Get the data for the clause. This is a Concerto object. To retrieve the
plain JS object suitable for serialization call toJSON() and retrieve the `data` property.

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>object</code> - - the data for the clause, or null if it has not been set  
<a name="TemplateInstance+parse"></a>

### *templateInstance.parse(input, [currentTime], [utcOffset], [fileName])*
Set the data for the clause by parsing natural language text.

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | the text for the clause |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |
| [fileName] | <code>string</code> | the fileName for the text (optional) |

<a name="TemplateInstance+draft"></a>

### *templateInstance.draft([options], [currentTime], [utcOffset]) ⇒ <code>string</code>*
Generates the natural language text for a contract or clause clause; combining the text from the template
and the instance data.

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>string</code> - the natural language text for the contract or clause; created by combining the structure of
the template with the JSON data for the clause.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>\*</code> | text generation options. |
| [currentTime] | <code>string</code> | the definition of 'now', defaults to current time |
| [utcOffset] | <code>number</code> | UTC Offset for this execution, defaults to local offset |

<a name="TemplateInstance+formatCiceroMark"></a>

### *templateInstance.formatCiceroMark(ciceroMarkParsed, options, format) ⇒ <code>string</code>*
Format CiceroMark

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>string</code> - the result of parsing and printing back the text  

| Param | Type | Description |
| --- | --- | --- |
| ciceroMarkParsed | <code>object</code> | the parsed CiceroMark DOM |
| options | <code>object</code> | parameters to the formatting |
| format | <code>string</code> | to the text generation |

<a name="TemplateInstance+getIdentifier"></a>

### *templateInstance.getIdentifier() ⇒ <code>String</code>*
Returns the identifier for this clause. The identifier is the identifier of
the template plus '-' plus a hash of the data for the clause (if set).

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>String</code> - the identifier of this clause  
<a name="TemplateInstance+getTemplate"></a>

### *templateInstance.getTemplate() ⇒ [<code>Template</code>](#Template)*
Returns the template for this clause

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: [<code>Template</code>](#Template) - the template for this clause  
<a name="TemplateInstance+getLogicManager"></a>

### *templateInstance.getLogicManager() ⇒ <code>LogicManager</code>*
Returns the template logic for this clause

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>LogicManager</code> - the template for this clause  
<a name="TemplateInstance+toJSON"></a>

### *templateInstance.toJSON() ⇒ <code>object</code>*
Returns a JSON representation of the clause

**Kind**: instance method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>object</code> - the JS object for serialization  
<a name="TemplateInstance.ciceroFormulaEval"></a>

### *TemplateInstance.ciceroFormulaEval(logicManager, clauseId, ergoEngine, name) ⇒ <code>\*</code>*
Constructs a function for formula evaluation based for this template instance

**Kind**: static method of [<code>TemplateInstance</code>](#TemplateInstance)  
**Returns**: <code>\*</code> - A function from formula code + input data to result  

| Param | Type | Description |
| --- | --- | --- |
| logicManager | <code>\*</code> | the logic manager |
| clauseId | <code>string</code> | this instance identifier |
| ergoEngine | <code>\*</code> | the evaluation engine |
| name | <code>string</code> | the name of the formula |

<a name="TemplateInstance.rebuildParser"></a>

### *TemplateInstance.rebuildParser(parserManager, logicManager, ergoEngine, templateName, grammar)*
Utility to rebuild a parser when the grammar changes

**Kind**: static method of [<code>TemplateInstance</code>](#TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| parserManager | <code>\*</code> | the parser manager |
| logicManager | <code>\*</code> | the logic manager |
| ergoEngine | <code>\*</code> | the evaluation engine |
| templateName | <code>string</code> | this template name |
| grammar | <code>string</code> | the new grammar |

<a name="CompositeArchiveLoader"></a>

## CompositeArchiveLoader
Manages a set of archive loaders, delegating to the first archive
loader that accepts a URL.

**Kind**: global class  

* [CompositeArchiveLoader](#CompositeArchiveLoader)
    * [new CompositeArchiveLoader()](#new_CompositeArchiveLoader_new)
    * [.addArchiveLoader(archiveLoader)](#CompositeArchiveLoader+addArchiveLoader)
    * [.clearArchiveLoaders()](#CompositeArchiveLoader+clearArchiveLoaders)
    * *[.accepts(url)](#CompositeArchiveLoader+accepts) ⇒ <code>boolean</code>*
    * [.load(url, options)](#CompositeArchiveLoader+load) ⇒ <code>Promise</code>

<a name="new_CompositeArchiveLoader_new"></a>

### new CompositeArchiveLoader()
Create the CompositeArchiveLoader. Used to delegate to a set of ArchiveLoaders.

<a name="CompositeArchiveLoader+addArchiveLoader"></a>

### compositeArchiveLoader.addArchiveLoader(archiveLoader)
Adds a ArchiveLoader implemenetation to the ArchiveLoader

**Kind**: instance method of [<code>CompositeArchiveLoader</code>](#CompositeArchiveLoader)  

| Param | Type | Description |
| --- | --- | --- |
| archiveLoader | <code>ArchiveLoader</code> | The archive to add to the CompositeArchiveLoader |

<a name="CompositeArchiveLoader+clearArchiveLoaders"></a>

### compositeArchiveLoader.clearArchiveLoaders()
Remove all registered ArchiveLoaders

**Kind**: instance method of [<code>CompositeArchiveLoader</code>](#CompositeArchiveLoader)  
<a name="CompositeArchiveLoader+accepts"></a>

### *compositeArchiveLoader.accepts(url) ⇒ <code>boolean</code>*
Returns true if this ArchiveLoader can process the URL

**Kind**: instance abstract method of [<code>CompositeArchiveLoader</code>](#CompositeArchiveLoader)  
**Returns**: <code>boolean</code> - true if this ArchiveLoader accepts the URL  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the URL |

<a name="CompositeArchiveLoader+load"></a>

### compositeArchiveLoader.load(url, options) ⇒ <code>Promise</code>
Load a Archive from a URL and return it

**Kind**: instance method of [<code>CompositeArchiveLoader</code>](#CompositeArchiveLoader)  
**Returns**: <code>Promise</code> - a promise to the Archive  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the url to get |
| options | <code>object</code> | additional options |

<a name="isPNG"></a>

## isPNG(buffer) ⇒ <code>Boolean</code>
Checks whether the file is PNG

**Kind**: global function  
**Returns**: <code>Boolean</code> - whether the file in PNG  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | buffer of the file |

<a name="getMimeType"></a>

## getMimeType(buffer) ⇒ <code>Object</code>
Returns the mime-type of the file

**Kind**: global function  
**Returns**: <code>Object</code> - the mime-type of the file  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | buffer of the file |

