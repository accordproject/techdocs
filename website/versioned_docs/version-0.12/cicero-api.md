---
id: cicero-api
title: Cicero API
original_id: cicero-api
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

<a name="module_cicero-engine"></a>

## cicero-engine
Clause Engine


* [cicero-engine](#module_cicero-engine)
    * [.Engine](#module_cicero-engine.Engine)
        * [new Engine()](#new_module_cicero-engine.Engine_new)
        * [.execute(clause, request, state, currentTime)](#module_cicero-engine.Engine+execute) ⇒ <code>Promise</code>
        * [.init(clause, currentTime)](#module_cicero-engine.Engine+init) ⇒ <code>Promise</code>
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
    * [.execute(clause, request, state, currentTime)](#module_cicero-engine.Engine+execute) ⇒ <code>Promise</code>
    * [.init(clause, currentTime)](#module_cicero-engine.Engine+init) ⇒ <code>Promise</code>
    * [.getErgoEngine()](#module_cicero-engine.Engine+getErgoEngine) ⇒ <code>ErgoEngine</code>

<a name="new_module_cicero-engine.Engine_new"></a>

#### new Engine()
Create the Engine.

<a name="module_cicero-engine.Engine+execute"></a>

#### engine.execute(clause, request, state, currentTime) ⇒ <code>Promise</code>
Execute a clause, passing in the request object

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>Promise</code> - a promise that resolves to a result for the clause  

| Param | Type | Description |
| --- | --- | --- |
| clause | <code>Clause</code> | the clause to execute |
| request | <code>object</code> | the request, a JS object that can be deserialized using the Composer serializer. |
| state | <code>object</code> | the contract state, a JS object that can be deserialized using the Composer serializer. |
| currentTime | <code>string</code> | the definition of 'now' |

<a name="module_cicero-engine.Engine+init"></a>

#### engine.init(clause, currentTime) ⇒ <code>Promise</code>
Initialize a clause

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>Promise</code> - a promise that resolves to a result for the clause initialization  

| Param | Type | Description |
| --- | --- | --- |
| clause | <code>Clause</code> | the clause to execute |
| currentTime | <code>string</code> | the definition of 'now' |

<a name="module_cicero-engine.Engine+getErgoEngine"></a>

#### engine.getErgoEngine() ⇒ <code>ErgoEngine</code>
Provides access to the Ergo engine.

**Kind**: instance method of [<code>Engine</code>](#module_cicero-engine.Engine)  
**Returns**: <code>ErgoEngine</code> - the underlying Ergo Engine  
<a name="module_cicero-core"></a>

## cicero-core
Cicero Core - defines the core data types for Cicero.


* [cicero-core](#module_cicero-core)
    * [.Clause](#module_cicero-core.Clause)
    * [.Contract](#module_cicero-core.Contract)
    * [.DateTimeFormatParser](#module_cicero-core.DateTimeFormatParser)
        * [.parseDateTimeFormatField(field)](#module_cicero-core.DateTimeFormatParser.parseDateTimeFormatField) ⇒ <code>string</code>
        * [.buildDateTimeFormatRule(formatString)](#module_cicero-core.DateTimeFormatParser.buildDateTimeFormatRule) ⇒ <code>Object</code>
    * [.Metadata](#module_cicero-core.Metadata)
        * [new Metadata(packageJson, readme, samples, request)](#new_module_cicero-core.Metadata_new)
        * [.getTemplateType()](#module_cicero-core.Metadata+getTemplateType) ⇒ <code>number</code>
        * [.getRuntime()](#module_cicero-core.Metadata+getRuntime) ⇒ <code>string</code>
        * [.getErgoVersion()](#module_cicero-core.Metadata+getErgoVersion) ⇒ <code>string</code>
        * [.getCiceroVersion()](#module_cicero-core.Metadata+getCiceroVersion) ⇒ <code>string</code>
        * [.satisfiesCiceroVersion(version)](#module_cicero-core.Metadata+satisfiesCiceroVersion) ⇒ <code>string</code>
        * [.getSamples()](#module_cicero-core.Metadata+getSamples) ⇒ <code>object</code>
        * [.getRequest()](#module_cicero-core.Metadata+getRequest) ⇒ <code>object</code>
        * [.getSample(locale)](#module_cicero-core.Metadata+getSample) ⇒ <code>string</code>
        * [.getREADME()](#module_cicero-core.Metadata+getREADME) ⇒ <code>String</code>
        * [.getPackageJson()](#module_cicero-core.Metadata+getPackageJson) ⇒ <code>object</code>
        * [.getName()](#module_cicero-core.Metadata+getName) ⇒ <code>string</code>
        * [.getKeywords()](#module_cicero-core.Metadata+getKeywords) ⇒ <code>Array</code>
        * [.getDescription()](#module_cicero-core.Metadata+getDescription) ⇒ <code>string</code>
        * [.getVersion()](#module_cicero-core.Metadata+getVersion) ⇒ <code>string</code>
        * [.getIdentifier()](#module_cicero-core.Metadata+getIdentifier) ⇒ <code>string</code>
        * [.createTargetMetadata(runtimeName)](#module_cicero-core.Metadata+createTargetMetadata) ⇒ <code>object</code>
    * [.ParserManager](#module_cicero-core.ParserManager)
        * [new ParserManager(template)](#new_module_cicero-core.ParserManager_new)
        * _instance_
            * [.getParser()](#module_cicero-core.ParserManager+getParser) ⇒ <code>object</code>
            * [.getTemplateAst()](#module_cicero-core.ParserManager+getTemplateAst) ⇒ <code>object</code>
            * [.setGrammar(grammar)](#module_cicero-core.ParserManager+setGrammar)
            * [.buildGrammar(templatizedGrammar)](#module_cicero-core.ParserManager+buildGrammar)
            * [.buildGrammarRules(ast, templateModel, prefix, parts)](#module_cicero-core.ParserManager+buildGrammarRules)
            * [.handleBinding(templateModel, parts, inputRule, element)](#module_cicero-core.ParserManager+handleBinding)
            * [.cleanChunk(input)](#module_cicero-core.ParserManager+cleanChunk) ⇒ <code>string</code>
            * [.findFirstBinding(propertyName, elements)](#module_cicero-core.ParserManager+findFirstBinding) ⇒ <code>int</code>
            * [.getGrammar()](#module_cicero-core.ParserManager+getGrammar) ⇒ <code>String</code>
            * [.getTemplatizedGrammar()](#module_cicero-core.ParserManager+getTemplatizedGrammar) ⇒ <code>String</code>
        * _static_
            * [.getProperty(templateModel, propertyName)](#module_cicero-core.ParserManager.getProperty) ⇒ <code>\*</code>
            * [.compileGrammar(sourceCode)](#module_cicero-core.ParserManager.compileGrammar) ⇒ <code>object</code>
    * *[.Template](#module_cicero-core.Template)*
        * *[new Template(packageJson, readme, samples, request)](#new_module_cicero-core.Template_new)*
        * _instance_
            * *[.validate()](#module_cicero-core.Template+validate)*
            * *[.getTemplateModel()](#module_cicero-core.Template+getTemplateModel) ⇒ <code>ClassDeclaration</code>*
            * *[.getIdentifier()](#module_cicero-core.Template+getIdentifier) ⇒ <code>String</code>*
            * *[.getMetadata()](#module_cicero-core.Template+getMetadata) ⇒ <code>Metadata</code>*
            * *[.getName()](#module_cicero-core.Template+getName) ⇒ <code>String</code>*
            * *[.getVersion()](#module_cicero-core.Template+getVersion) ⇒ <code>String</code>*
            * *[.getDescription()](#module_cicero-core.Template+getDescription) ⇒ <code>String</code>*
            * *[.getHash()](#module_cicero-core.Template+getHash) ⇒ <code>string</code>*
            * *[.toArchive([language], [options])](#module_cicero-core.Template+toArchive) ⇒ <code>Promise.&lt;Buffer&gt;</code>*
            * *[.getParserManager()](#module_cicero-core.Template+getParserManager) ⇒ <code>ParserManager</code>*
            * *[.getTemplateLogic()](#module_cicero-core.Template+getTemplateLogic) ⇒ <code>TemplateLogic</code>*
            * *[.getIntrospector()](#module_cicero-core.Template+getIntrospector) ⇒ <code>Introspector</code>*
            * *[.getFactory()](#module_cicero-core.Template+getFactory) ⇒ <code>Factory</code>*
            * *[.getSerializer()](#module_cicero-core.Template+getSerializer) ⇒ <code>Serializer</code>*
            * *[.getRequestTypes()](#module_cicero-core.Template+getRequestTypes) ⇒ <code>Array</code>*
            * *[.getResponseTypes()](#module_cicero-core.Template+getResponseTypes) ⇒ <code>Array</code>*
            * *[.getEmitTypes()](#module_cicero-core.Template+getEmitTypes) ⇒ <code>Array</code>*
            * *[.getStateTypes()](#module_cicero-core.Template+getStateTypes) ⇒ <code>Array</code>*
            * *[.hasLogic()](#module_cicero-core.Template+hasLogic) ⇒ <code>boolean</code>*
        * _static_
            * *[.fromDirectory(path, [options])](#module_cicero-core.Template.fromDirectory) ⇒ <code>Promise.&lt;Template&gt;</code>*
            * *[.fromArchive(buffer)](#module_cicero-core.Template.fromArchive) ⇒ <code>Promise.&lt;Template&gt;</code>*
            * *[.fromUrl(url, options)](#module_cicero-core.Template.fromUrl) ⇒ <code>Promise</code>*
            * *[.instanceOf(classDeclaration, fqt)](#module_cicero-core.Template.instanceOf) ⇒ <code>boolean</code>*
    * *[.TemplateInstance](#module_cicero-core.TemplateInstance)*
        * *[new TemplateInstance(template)](#new_module_cicero-core.TemplateInstance_new)*
        * _instance_
            * *[.setData(data)](#module_cicero-core.TemplateInstance+setData)*
            * *[.getData()](#module_cicero-core.TemplateInstance+getData) ⇒ <code>object</code>*
            * *[.getDataAsComposerObject()](#module_cicero-core.TemplateInstance+getDataAsComposerObject) ⇒ <code>object</code>*
            * *[.parse(text, currentTime)](#module_cicero-core.TemplateInstance+parse)*
            * *[.generateText()](#module_cicero-core.TemplateInstance+generateText) ⇒ <code>string</code>*
            * *[.getIdentifier()](#module_cicero-core.TemplateInstance+getIdentifier) ⇒ <code>String</code>*
            * *[.getTemplate()](#module_cicero-core.TemplateInstance+getTemplate) ⇒ <code>Template</code>*
            * *[.getTemplateLogic()](#module_cicero-core.TemplateInstance+getTemplateLogic) ⇒ <code>TemplateLogic</code>*
            * *[.toJSON()](#module_cicero-core.TemplateInstance+toJSON) ⇒ <code>object</code>*
        * _static_
            * *[.pad(n, width, z)](#module_cicero-core.TemplateInstance.pad) ⇒ <code>string</code>*
            * *[.convertDateTimes(obj, utcOffset)](#module_cicero-core.TemplateInstance.convertDateTimes) ⇒ <code>\*</code>*
    * *[.TemplateLoader](#module_cicero-core.TemplateLoader)*
        * *[.loadZipFileContents(zip, path, json, required)](#module_cicero-core.TemplateLoader.loadZipFileContents) ⇒ <code>Promise.&lt;string&gt;</code>*
        * *[.loadZipFilesContents(zip, regex)](#module_cicero-core.TemplateLoader.loadZipFilesContents) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
        * *[.loadFileContents(path, fileName, json, required)](#module_cicero-core.TemplateLoader.loadFileContents) ⇒ <code>Promise.&lt;string&gt;</code>*
        * *[.loadFilesContents(path, regex)](#module_cicero-core.TemplateLoader.loadFilesContents) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
        * *[.fromArchive(Template, buffer)](#module_cicero-core.TemplateLoader.fromArchive) ⇒ <code>Promise.&lt;Template&gt;</code>*
        * *[.fromUrl(Template, url, options)](#module_cicero-core.TemplateLoader.fromUrl) ⇒ <code>Promise</code>*
        * *[.fromDirectory(Template, path, [options])](#module_cicero-core.TemplateLoader.fromDirectory) ⇒ <code>Promise.&lt;Template&gt;</code>*
    * [.TemplateSaver](#module_cicero-core.TemplateSaver)
        * [.toArchive(template, [language], [options])](#module_cicero-core.TemplateSaver.toArchive) ⇒ <code>Promise.&lt;Buffer&gt;</code>

<a name="module_cicero-core.Clause"></a>

### cicero-core.Clause
A Clause is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  
<a name="module_cicero-core.Contract"></a>

### cicero-core.Contract
A Contract is executable business logic, linked to a natural language (legally enforceable) template.
A Clause must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the clause (an instance of the template model) by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  
<a name="module_cicero-core.DateTimeFormatParser"></a>

### cicero-core.DateTimeFormatParser
Parses a date/time format string

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* [.DateTimeFormatParser](#module_cicero-core.DateTimeFormatParser)
    * [.parseDateTimeFormatField(field)](#module_cicero-core.DateTimeFormatParser.parseDateTimeFormatField) ⇒ <code>string</code>
    * [.buildDateTimeFormatRule(formatString)](#module_cicero-core.DateTimeFormatParser.buildDateTimeFormatRule) ⇒ <code>Object</code>

<a name="module_cicero-core.DateTimeFormatParser.parseDateTimeFormatField"></a>

#### DateTimeFormatParser.parseDateTimeFormatField(field) ⇒ <code>string</code>
Given a format field (like HH or D) this method returns
a logical name for the field. Note the logical names
have been picked to align with the moment constructor that takes an object.

**Kind**: static method of [<code>DateTimeFormatParser</code>](#module_cicero-core.DateTimeFormatParser)  
**Returns**: <code>string</code> - the field designator  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | the input format field |

<a name="module_cicero-core.DateTimeFormatParser.buildDateTimeFormatRule"></a>

#### DateTimeFormatParser.buildDateTimeFormatRule(formatString) ⇒ <code>Object</code>
Converts a format string to a Nearley action

**Kind**: static method of [<code>DateTimeFormatParser</code>](#module_cicero-core.DateTimeFormatParser)  
**Returns**: <code>Object</code> - the tokens and action and name to use for the Nearley rule  

| Param | Type | Description |
| --- | --- | --- |
| formatString | <code>string</code> | the input format string |

<a name="module_cicero-core.Metadata"></a>

### cicero-core.Metadata
Defines the metadata for a Template, including the name, version, README markdown.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* [.Metadata](#module_cicero-core.Metadata)
    * [new Metadata(packageJson, readme, samples, request)](#new_module_cicero-core.Metadata_new)
    * [.getTemplateType()](#module_cicero-core.Metadata+getTemplateType) ⇒ <code>number</code>
    * [.getRuntime()](#module_cicero-core.Metadata+getRuntime) ⇒ <code>string</code>
    * [.getErgoVersion()](#module_cicero-core.Metadata+getErgoVersion) ⇒ <code>string</code>
    * [.getCiceroVersion()](#module_cicero-core.Metadata+getCiceroVersion) ⇒ <code>string</code>
    * [.satisfiesCiceroVersion(version)](#module_cicero-core.Metadata+satisfiesCiceroVersion) ⇒ <code>string</code>
    * [.getSamples()](#module_cicero-core.Metadata+getSamples) ⇒ <code>object</code>
    * [.getRequest()](#module_cicero-core.Metadata+getRequest) ⇒ <code>object</code>
    * [.getSample(locale)](#module_cicero-core.Metadata+getSample) ⇒ <code>string</code>
    * [.getREADME()](#module_cicero-core.Metadata+getREADME) ⇒ <code>String</code>
    * [.getPackageJson()](#module_cicero-core.Metadata+getPackageJson) ⇒ <code>object</code>
    * [.getName()](#module_cicero-core.Metadata+getName) ⇒ <code>string</code>
    * [.getKeywords()](#module_cicero-core.Metadata+getKeywords) ⇒ <code>Array</code>
    * [.getDescription()](#module_cicero-core.Metadata+getDescription) ⇒ <code>string</code>
    * [.getVersion()](#module_cicero-core.Metadata+getVersion) ⇒ <code>string</code>
    * [.getIdentifier()](#module_cicero-core.Metadata+getIdentifier) ⇒ <code>string</code>
    * [.createTargetMetadata(runtimeName)](#module_cicero-core.Metadata+createTargetMetadata) ⇒ <code>object</code>

<a name="new_module_cicero-core.Metadata_new"></a>

#### new Metadata(packageJson, readme, samples, request)
Create the Metadata.
<p>
<strong>Note: Only to be called by framework code. Applications should
retrieve instances from [Template](Template)</strong>
</p>


| Param | Type | Description |
| --- | --- | --- |
| packageJson | <code>object</code> | the JS object for package.json (required) |
| readme | <code>String</code> | the README.md for the template (may be null) |
| samples | <code>object</code> | the sample text for the template in different locales, |
| request | <code>object</code> | the JS object for the sample request represented as an object whose keys are the locales and whose values are the sample text. For example:  {      default: 'default sample text',      en: 'sample text in english',      fr: 'exemple de texte français'  } Locale keys (with the exception of default) conform to the IETF Language Tag specification (BCP 47). THe `default` key represents sample template text in a non-specified language, stored in a file called `sample.txt`. |

<a name="module_cicero-core.Metadata+getTemplateType"></a>

#### metadata.getTemplateType() ⇒ <code>number</code>
Returns either a 0 (for a contract template), or 1 (for a clause template)

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>number</code> - the template type  
<a name="module_cicero-core.Metadata+getRuntime"></a>

#### metadata.getRuntime() ⇒ <code>string</code>
Returns the name of the runtime target for this template, or null if this template
has not been compiled for a specific runtime.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the name of the runtime  
<a name="module_cicero-core.Metadata+getErgoVersion"></a>

#### metadata.getErgoVersion() ⇒ <code>string</code>
Returns the Ergo version that the Ergo code in this template is compatible with. This
is null for templates that do not contain source Ergo code.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the version of Ergo  
<a name="module_cicero-core.Metadata+getCiceroVersion"></a>

#### metadata.getCiceroVersion() ⇒ <code>string</code>
Returns the version of Cicero that this template is compatible with.
i.e. which version of the runtime was this template built for?
The version string conforms to the semver definition

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the semantic version  
<a name="module_cicero-core.Metadata+satisfiesCiceroVersion"></a>

#### metadata.satisfiesCiceroVersion(version) ⇒ <code>string</code>
Only returns true if the current cicero version satisfies the target version of this template

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the semantic version  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | the cicero version to check against |

<a name="module_cicero-core.Metadata+getSamples"></a>

#### metadata.getSamples() ⇒ <code>object</code>
Returns the samples for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>object</code> - the sample files for the template  
<a name="module_cicero-core.Metadata+getRequest"></a>

#### metadata.getRequest() ⇒ <code>object</code>
Returns the sample request for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>object</code> - the sample request for the template  
<a name="module_cicero-core.Metadata+getSample"></a>

#### metadata.getSample(locale) ⇒ <code>string</code>
Returns the sample for this template in the given locale. This may be null.
If no locale is specified returns the default sample if it has been specified.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the sample file for the template in the given locale or null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locale | <code>string</code> | <code>null</code> | the IETF language code for the language. |

<a name="module_cicero-core.Metadata+getREADME"></a>

#### metadata.getREADME() ⇒ <code>String</code>
Returns the README.md for this template. This may be null if the template does not have a README.md

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>String</code> - the README.md file for the template or null  
<a name="module_cicero-core.Metadata+getPackageJson"></a>

#### metadata.getPackageJson() ⇒ <code>object</code>
Returns the package.json for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>object</code> - the Javascript object for package.json  
<a name="module_cicero-core.Metadata+getName"></a>

#### metadata.getName() ⇒ <code>string</code>
Returns the name for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the name of the template  
<a name="module_cicero-core.Metadata+getKeywords"></a>

#### metadata.getKeywords() ⇒ <code>Array</code>
Returns the name for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>Array</code> - the name of the template  
<a name="module_cicero-core.Metadata+getDescription"></a>

#### metadata.getDescription() ⇒ <code>string</code>
Returns the description for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the description of the template  
<a name="module_cicero-core.Metadata+getVersion"></a>

#### metadata.getVersion() ⇒ <code>string</code>
Returns the version for this template.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the description of the template  
<a name="module_cicero-core.Metadata+getIdentifier"></a>

#### metadata.getIdentifier() ⇒ <code>string</code>
Returns the identifier for this template, formed from name@version.

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the identifier of the template  
<a name="module_cicero-core.Metadata+createTargetMetadata"></a>

#### metadata.createTargetMetadata(runtimeName) ⇒ <code>object</code>
Return new Metadata for a target runtime

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>object</code> - the new Metadata  

| Param | Type | Description |
| --- | --- | --- |
| runtimeName | <code>string</code> | the target runtime name |

<a name="module_cicero-core.ParserManager"></a>

### cicero-core.ParserManager
Generates and manages a Nearley parser for a template.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* [.ParserManager](#module_cicero-core.ParserManager)
    * [new ParserManager(template)](#new_module_cicero-core.ParserManager_new)
    * _instance_
        * [.getParser()](#module_cicero-core.ParserManager+getParser) ⇒ <code>object</code>
        * [.getTemplateAst()](#module_cicero-core.ParserManager+getTemplateAst) ⇒ <code>object</code>
        * [.setGrammar(grammar)](#module_cicero-core.ParserManager+setGrammar)
        * [.buildGrammar(templatizedGrammar)](#module_cicero-core.ParserManager+buildGrammar)
        * [.buildGrammarRules(ast, templateModel, prefix, parts)](#module_cicero-core.ParserManager+buildGrammarRules)
        * [.handleBinding(templateModel, parts, inputRule, element)](#module_cicero-core.ParserManager+handleBinding)
        * [.cleanChunk(input)](#module_cicero-core.ParserManager+cleanChunk) ⇒ <code>string</code>
        * [.findFirstBinding(propertyName, elements)](#module_cicero-core.ParserManager+findFirstBinding) ⇒ <code>int</code>
        * [.getGrammar()](#module_cicero-core.ParserManager+getGrammar) ⇒ <code>String</code>
        * [.getTemplatizedGrammar()](#module_cicero-core.ParserManager+getTemplatizedGrammar) ⇒ <code>String</code>
    * _static_
        * [.getProperty(templateModel, propertyName)](#module_cicero-core.ParserManager.getProperty) ⇒ <code>\*</code>
        * [.compileGrammar(sourceCode)](#module_cicero-core.ParserManager.compileGrammar) ⇒ <code>object</code>

<a name="new_module_cicero-core.ParserManager_new"></a>

#### new ParserManager(template)
Create the ParserManager.


| Param | Type | Description |
| --- | --- | --- |
| template | <code>object</code> | the template instance |

<a name="module_cicero-core.ParserManager+getParser"></a>

#### parserManager.getParser() ⇒ <code>object</code>
Gets a parser object for this template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>object</code> - the parser for this template  
<a name="module_cicero-core.ParserManager+getTemplateAst"></a>

#### parserManager.getTemplateAst() ⇒ <code>object</code>
Gets the AST for the template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>object</code> - the AST for the template  
<a name="module_cicero-core.ParserManager+setGrammar"></a>

#### parserManager.setGrammar(grammar)
Set the grammar for the template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  

| Param | Type | Description |
| --- | --- | --- |
| grammar | <code>String</code> | the grammar for the template |

<a name="module_cicero-core.ParserManager+buildGrammar"></a>

#### parserManager.buildGrammar(templatizedGrammar)
Build a grammar from a template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  

| Param | Type | Description |
| --- | --- | --- |
| templatizedGrammar | <code>String</code> | the annotated template |

<a name="module_cicero-core.ParserManager+buildGrammarRules"></a>

#### parserManager.buildGrammarRules(ast, templateModel, prefix, parts)
Build grammar rules from a template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  

| Param | Type | Description |
| --- | --- | --- |
| ast | <code>object</code> | the AST from which to build the grammar |
| templateModel | <code>ClassDeclaration</code> | the type of the parent class for this AST |
| prefix | <code>String</code> | A unique prefix for the grammar rules |
| parts | <code>Object</code> | Result object to acculumate rules and required sub-grammars |

<a name="module_cicero-core.ParserManager+handleBinding"></a>

#### parserManager.handleBinding(templateModel, parts, inputRule, element)
Utility method to generate a grammar rule for a variable binding

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  

| Param | Type | Description |
| --- | --- | --- |
| templateModel | <code>ClassDeclaration</code> | the current template model |
| parts | <code>\*</code> | the parts, where the rule will be added |
| inputRule | <code>\*</code> | the rule we are processing in the AST |
| element | <code>\*</code> | the current element in the AST |

<a name="module_cicero-core.ParserManager+cleanChunk"></a>

#### parserManager.cleanChunk(input) ⇒ <code>string</code>
Cleans a chunk of text to make it safe to include
as a grammar rule. We need to remove linefeeds and
escape any '"' characters.

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>string</code> - cleaned text  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | the input text from the template |

<a name="module_cicero-core.ParserManager+findFirstBinding"></a>

#### parserManager.findFirstBinding(propertyName, elements) ⇒ <code>int</code>
Finds the first binding for the given property

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>int</code> - the index of the element or -1  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | the name of the property |
| elements | <code>Array.&lt;object&gt;</code> | the result of parsing the template_txt. |

<a name="module_cicero-core.ParserManager+getGrammar"></a>

#### parserManager.getGrammar() ⇒ <code>String</code>
Get the (compiled) grammar for the template

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>String</code> - - the grammar for the template  
<a name="module_cicero-core.ParserManager+getTemplatizedGrammar"></a>

#### parserManager.getTemplatizedGrammar() ⇒ <code>String</code>
Returns the templatized grammar

**Kind**: instance method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>String</code> - the contents of the templatized grammar  
<a name="module_cicero-core.ParserManager.getProperty"></a>

#### ParserManager.getProperty(templateModel, propertyName) ⇒ <code>\*</code>
Throws an error if a template variable doesn't exist on the model.

**Kind**: static method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>\*</code> - the property  

| Param | Type | Description |
| --- | --- | --- |
| templateModel | <code>\*</code> | the model for the template |
| propertyName | <code>String</code> | the name of the property |

<a name="module_cicero-core.ParserManager.compileGrammar"></a>

#### ParserManager.compileGrammar(sourceCode) ⇒ <code>object</code>
Compiles a Nearley grammar to its AST

**Kind**: static method of [<code>ParserManager</code>](#module_cicero-core.ParserManager)  
**Returns**: <code>object</code> - the AST for the grammar  

| Param | Type | Description |
| --- | --- | --- |
| sourceCode | <code>string</code> | the source text for the grammar |

<a name="module_cicero-core.Template"></a>

### *cicero-core.Template*
A template for a legal clause or contract. A Template has a template model, request/response transaction types,
a template grammar (natural language for the template) as well as Ergo code for the business logic of the
template.

**Kind**: static abstract class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* *[.Template](#module_cicero-core.Template)*
    * *[new Template(packageJson, readme, samples, request)](#new_module_cicero-core.Template_new)*
    * _instance_
        * *[.validate()](#module_cicero-core.Template+validate)*
        * *[.getTemplateModel()](#module_cicero-core.Template+getTemplateModel) ⇒ <code>ClassDeclaration</code>*
        * *[.getIdentifier()](#module_cicero-core.Template+getIdentifier) ⇒ <code>String</code>*
        * *[.getMetadata()](#module_cicero-core.Template+getMetadata) ⇒ <code>Metadata</code>*
        * *[.getName()](#module_cicero-core.Template+getName) ⇒ <code>String</code>*
        * *[.getVersion()](#module_cicero-core.Template+getVersion) ⇒ <code>String</code>*
        * *[.getDescription()](#module_cicero-core.Template+getDescription) ⇒ <code>String</code>*
        * *[.getHash()](#module_cicero-core.Template+getHash) ⇒ <code>string</code>*
        * *[.toArchive([language], [options])](#module_cicero-core.Template+toArchive) ⇒ <code>Promise.&lt;Buffer&gt;</code>*
        * *[.getParserManager()](#module_cicero-core.Template+getParserManager) ⇒ <code>ParserManager</code>*
        * *[.getTemplateLogic()](#module_cicero-core.Template+getTemplateLogic) ⇒ <code>TemplateLogic</code>*
        * *[.getIntrospector()](#module_cicero-core.Template+getIntrospector) ⇒ <code>Introspector</code>*
        * *[.getFactory()](#module_cicero-core.Template+getFactory) ⇒ <code>Factory</code>*
        * *[.getSerializer()](#module_cicero-core.Template+getSerializer) ⇒ <code>Serializer</code>*
        * *[.getRequestTypes()](#module_cicero-core.Template+getRequestTypes) ⇒ <code>Array</code>*
        * *[.getResponseTypes()](#module_cicero-core.Template+getResponseTypes) ⇒ <code>Array</code>*
        * *[.getEmitTypes()](#module_cicero-core.Template+getEmitTypes) ⇒ <code>Array</code>*
        * *[.getStateTypes()](#module_cicero-core.Template+getStateTypes) ⇒ <code>Array</code>*
        * *[.hasLogic()](#module_cicero-core.Template+hasLogic) ⇒ <code>boolean</code>*
    * _static_
        * *[.fromDirectory(path, [options])](#module_cicero-core.Template.fromDirectory) ⇒ <code>Promise.&lt;Template&gt;</code>*
        * *[.fromArchive(buffer)](#module_cicero-core.Template.fromArchive) ⇒ <code>Promise.&lt;Template&gt;</code>*
        * *[.fromUrl(url, options)](#module_cicero-core.Template.fromUrl) ⇒ <code>Promise</code>*
        * *[.instanceOf(classDeclaration, fqt)](#module_cicero-core.Template.instanceOf) ⇒ <code>boolean</code>*

<a name="new_module_cicero-core.Template_new"></a>

#### *new Template(packageJson, readme, samples, request)*
Create the Template.
Note: Only to be called by framework code. Applications should
retrieve instances from [Template.fromArchive](Template.fromArchive) or [Template.fromDirectory](Template.fromDirectory).


| Param | Type | Description |
| --- | --- | --- |
| packageJson | <code>object</code> | the JS object for package.json |
| readme | <code>String</code> | the readme in markdown for the template (optional) |
| samples | <code>object</code> | the sample text for the template in different locales |
| request | <code>object</code> | the JS object for the sample request |

<a name="module_cicero-core.Template+validate"></a>

#### *template.validate()*
Verifies that the template is well formed.
Throws an exception with the details of any validation errors.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
<a name="module_cicero-core.Template+getTemplateModel"></a>

#### *template.getTemplateModel() ⇒ <code>ClassDeclaration</code>*
Returns the template model for the template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>ClassDeclaration</code> - the template model for the template  
**Throws**:

- <code>Error</code> if no template model is found, or multiple template models are found

<a name="module_cicero-core.Template+getIdentifier"></a>

#### *template.getIdentifier() ⇒ <code>String</code>*
Returns the identifier for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - the identifier of this template  
<a name="module_cicero-core.Template+getMetadata"></a>

#### *template.getMetadata() ⇒ <code>Metadata</code>*
Returns the metadata for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Metadata</code> - the metadata for this template  
<a name="module_cicero-core.Template+getName"></a>

#### *template.getName() ⇒ <code>String</code>*
Returns the name for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - the name of this template  
<a name="module_cicero-core.Template+getVersion"></a>

#### *template.getVersion() ⇒ <code>String</code>*
Returns the version for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - the version of this template. Use semver module
to parse.  
<a name="module_cicero-core.Template+getDescription"></a>

#### *template.getDescription() ⇒ <code>String</code>*
Returns the description for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - the description of this template  
<a name="module_cicero-core.Template+getHash"></a>

#### *template.getHash() ⇒ <code>string</code>*
Gets a content based SHA-256 hash for this template. Hash
is based on the metadata for the template plus the contents of
all the models and all the script files.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>string</code> - the SHA-256 hash in hex format  
<a name="module_cicero-core.Template+toArchive"></a>

#### *template.toArchive([language], [options]) ⇒ <code>Promise.&lt;Buffer&gt;</code>*
Persists this template to a Cicero Template Archive (cta) file.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - the zlib buffer  

| Param | Type | Description |
| --- | --- | --- |
| [language] | <code>string</code> | target language for the archive (should be 'ergo') |
| [options] | <code>Object</code> | JSZip options |

<a name="module_cicero-core.Template+getParserManager"></a>

#### *template.getParserManager() ⇒ <code>ParserManager</code>*
Provides access to the parser manager for this template.
The parser manager can convert template data to and from
natural language text.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>ParserManager</code> - the ParserManager for this template  
<a name="module_cicero-core.Template+getTemplateLogic"></a>

#### *template.getTemplateLogic() ⇒ <code>TemplateLogic</code>*
Provides access to the template logic for this template.
The template logic encapsulate the code necessary to
execute the clause or contract.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>TemplateLogic</code> - the TemplateLogic for this template  
<a name="module_cicero-core.Template+getIntrospector"></a>

#### *template.getIntrospector() ⇒ <code>Introspector</code>*
Provides access to the Introspector for this template. The Introspector
is used to reflect on the types defined within this template.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Introspector</code> - the Introspector for this template  
<a name="module_cicero-core.Template+getFactory"></a>

#### *template.getFactory() ⇒ <code>Factory</code>*
Provides access to the Factory for this template. The Factory
is used to create the types defined in this template.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Factory</code> - the Factory for this template  
<a name="module_cicero-core.Template+getSerializer"></a>

#### *template.getSerializer() ⇒ <code>Serializer</code>*
Provides access to the Serializer for this template. The Serializer
is used to serialize instances of the types defined within this template.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Serializer</code> - the Serializer for this template  
<a name="module_cicero-core.Template+getRequestTypes"></a>

#### *template.getRequestTypes() ⇒ <code>Array</code>*
Provides a list of the input types that are accepted by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Array</code> - a list of the request types  
<a name="module_cicero-core.Template+getResponseTypes"></a>

#### *template.getResponseTypes() ⇒ <code>Array</code>*
Provides a list of the response types that are returned by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Array</code> - a list of the response types  
<a name="module_cicero-core.Template+getEmitTypes"></a>

#### *template.getEmitTypes() ⇒ <code>Array</code>*
Provides a list of the emit types that are emitted by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Array</code> - a list of the emit types  
<a name="module_cicero-core.Template+getStateTypes"></a>

#### *template.getStateTypes() ⇒ <code>Array</code>*
Provides a list of the state types that are expected by this Template. Types use the fully-qualified form.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Array</code> - a list of the state types  
<a name="module_cicero-core.Template+hasLogic"></a>

#### *template.hasLogic() ⇒ <code>boolean</code>*
Returns true if the template has logic, i.e. has more than one script file.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>boolean</code> - true if the template has logic  
<a name="module_cicero-core.Template.fromDirectory"></a>

#### *Template.fromDirectory(path, [options]) ⇒ <code>Promise.&lt;Template&gt;</code>*
Builds a Template from the contents of a directory.
The directory must include a package.json in the root (used to specify
the name, version and description of the template).

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise.&lt;Template&gt;</code> - a Promise to the instantiated template  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | to a local directory |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |

<a name="module_cicero-core.Template.fromArchive"></a>

#### *Template.fromArchive(buffer) ⇒ <code>Promise.&lt;Template&gt;</code>*
Create a template from an archive.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise.&lt;Template&gt;</code> - a Promise to the template  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Buffer</code> | the buffer to a Cicero Template Archive (cta) file |

<a name="module_cicero-core.Template.fromUrl"></a>

#### *Template.fromUrl(url, options) ⇒ <code>Promise</code>*
Create a template from an URL.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise</code> - a Promise to the template  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | the URL to a Cicero Template Archive (cta) file |
| options | <code>object</code> | <code> </code> | additional options |

<a name="module_cicero-core.Template.instanceOf"></a>

#### *Template.instanceOf(classDeclaration, fqt) ⇒ <code>boolean</code>*
Check to see if a ClassDeclaration is an instance of the specified fully qualified
type name.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>boolean</code> - True if classDeclaration an instance of the specified fully
qualified type name, false otherwise.  
**Internal**:   

| Param | Type | Description |
| --- | --- | --- |
| classDeclaration | <code>ClassDeclaration</code> | The class to test |
| fqt | <code>String</code> | The fully qualified type name. |

<a name="module_cicero-core.TemplateInstance"></a>

### *cicero-core.TemplateInstance*
A TemplateInstance is an instance of a Clause or Contract template. It is executable business logic, linked to
a natural language (legally enforceable) template.
A TemplateInstance must be constructed with a template and then prior to execution the data for the clause must be set.
Set the data for the TemplateInstance by either calling the setData method or by
calling the parse method and passing in natural language text that conforms to the template grammar.

**Kind**: static abstract class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* *[.TemplateInstance](#module_cicero-core.TemplateInstance)*
    * *[new TemplateInstance(template)](#new_module_cicero-core.TemplateInstance_new)*
    * _instance_
        * *[.setData(data)](#module_cicero-core.TemplateInstance+setData)*
        * *[.getData()](#module_cicero-core.TemplateInstance+getData) ⇒ <code>object</code>*
        * *[.getDataAsComposerObject()](#module_cicero-core.TemplateInstance+getDataAsComposerObject) ⇒ <code>object</code>*
        * *[.parse(text, currentTime)](#module_cicero-core.TemplateInstance+parse)*
        * *[.generateText()](#module_cicero-core.TemplateInstance+generateText) ⇒ <code>string</code>*
        * *[.getIdentifier()](#module_cicero-core.TemplateInstance+getIdentifier) ⇒ <code>String</code>*
        * *[.getTemplate()](#module_cicero-core.TemplateInstance+getTemplate) ⇒ <code>Template</code>*
        * *[.getTemplateLogic()](#module_cicero-core.TemplateInstance+getTemplateLogic) ⇒ <code>TemplateLogic</code>*
        * *[.toJSON()](#module_cicero-core.TemplateInstance+toJSON) ⇒ <code>object</code>*
    * _static_
        * *[.pad(n, width, z)](#module_cicero-core.TemplateInstance.pad) ⇒ <code>string</code>*
        * *[.convertDateTimes(obj, utcOffset)](#module_cicero-core.TemplateInstance.convertDateTimes) ⇒ <code>\*</code>*

<a name="new_module_cicero-core.TemplateInstance_new"></a>

#### *new TemplateInstance(template)*
Create the Clause and link it to a Template.


| Param | Type | Description |
| --- | --- | --- |
| template | <code>Template</code> | the template for the clause |

<a name="module_cicero-core.TemplateInstance+setData"></a>

#### *templateInstance.setData(data)*
Set the data for the clause

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | the data for the clause, must be an instance of the template model for the clause's template. This should be a plain JS object and will be deserialized and validated into the Composer object before assignment. |

<a name="module_cicero-core.TemplateInstance+getData"></a>

#### *templateInstance.getData() ⇒ <code>object</code>*
Get the data for the clause. This is a plain JS object. To retrieve the Composer
object call getComposerData().

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>object</code> - - the data for the clause, or null if it has not been set  
<a name="module_cicero-core.TemplateInstance+getDataAsComposerObject"></a>

#### *templateInstance.getDataAsComposerObject() ⇒ <code>object</code>*
Get the data for the clause. This is a Composer object. To retrieve the
plain JS object suitable for serialization call toJSON() and retrieve the `data` property.

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>object</code> - - the data for the clause, or null if it has not been set  
<a name="module_cicero-core.TemplateInstance+parse"></a>

#### *templateInstance.parse(text, currentTime)*
Set the data for the clause by parsing natural language text.

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the data for the clause |
| currentTime | <code>string</code> | the definition of 'now' (optional) |

<a name="module_cicero-core.TemplateInstance+generateText"></a>

#### *templateInstance.generateText() ⇒ <code>string</code>*
Generates the natural language text for a clause; combining the text from the template
and the clause data.

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>string</code> - the natural language text for the clause; created by combining the structure of
the template with the JSON data for the clause.  
<a name="module_cicero-core.TemplateInstance+getIdentifier"></a>

#### *templateInstance.getIdentifier() ⇒ <code>String</code>*
Returns the identifier for this clause. The identifier is the identifier of
the template plus '-' plus a hash of the data for the clause (if set).

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>String</code> - the identifier of this clause  
<a name="module_cicero-core.TemplateInstance+getTemplate"></a>

#### *templateInstance.getTemplate() ⇒ <code>Template</code>*
Returns the template for this clause

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>Template</code> - the template for this clause  
<a name="module_cicero-core.TemplateInstance+getTemplateLogic"></a>

#### *templateInstance.getTemplateLogic() ⇒ <code>TemplateLogic</code>*
Returns the template logic for this clause

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>TemplateLogic</code> - the template for this clause  
<a name="module_cicero-core.TemplateInstance+toJSON"></a>

#### *templateInstance.toJSON() ⇒ <code>object</code>*
Returns a JSON representation of the clause

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>object</code> - the JS object for serialization  
<a name="module_cicero-core.TemplateInstance.pad"></a>

#### *TemplateInstance.pad(n, width, z) ⇒ <code>string</code>*
Left pads a number

**Kind**: static method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>string</code> - the left padded string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| n | <code>\*</code> |  | the number |
| width | <code>\*</code> |  | the number of chars to pad to |
| z | <code>string</code> | <code>&quot;0&quot;</code> | the pad character |

<a name="module_cicero-core.TemplateInstance.convertDateTimes"></a>

#### *TemplateInstance.convertDateTimes(obj, utcOffset) ⇒ <code>\*</code>*
Recursive function that converts all instances of ParsedDateTime
to a Moment.

**Kind**: static method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>\*</code> - the converted object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |
| utcOffset | <code>number</code> | the default utcOffset |

<a name="module_cicero-core.TemplateLoader"></a>

### *cicero-core.TemplateLoader*
A utility class to create templates from data sources.

**Kind**: static abstract class of [<code>cicero-core</code>](#module_cicero-core)  
**Interal**:   

* *[.TemplateLoader](#module_cicero-core.TemplateLoader)*
    * *[.loadZipFileContents(zip, path, json, required)](#module_cicero-core.TemplateLoader.loadZipFileContents) ⇒ <code>Promise.&lt;string&gt;</code>*
    * *[.loadZipFilesContents(zip, regex)](#module_cicero-core.TemplateLoader.loadZipFilesContents) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
    * *[.loadFileContents(path, fileName, json, required)](#module_cicero-core.TemplateLoader.loadFileContents) ⇒ <code>Promise.&lt;string&gt;</code>*
    * *[.loadFilesContents(path, regex)](#module_cicero-core.TemplateLoader.loadFilesContents) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
    * *[.fromArchive(Template, buffer)](#module_cicero-core.TemplateLoader.fromArchive) ⇒ <code>Promise.&lt;Template&gt;</code>*
    * *[.fromUrl(Template, url, options)](#module_cicero-core.TemplateLoader.fromUrl) ⇒ <code>Promise</code>*
    * *[.fromDirectory(Template, path, [options])](#module_cicero-core.TemplateLoader.fromDirectory) ⇒ <code>Promise.&lt;Template&gt;</code>*

<a name="module_cicero-core.TemplateLoader.loadZipFileContents"></a>

#### *TemplateLoader.loadZipFileContents(zip, path, json, required) ⇒ <code>Promise.&lt;string&gt;</code>*
Loads a required file from the zip, displaying an error if missing

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise to the contents of the zip file or null if it does not exist and
required is false  
**Internal**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| zip | <code>\*</code> |  | the JSZip instance |
| path | <code>string</code> |  | the file path within the zip |
| json | <code>boolean</code> | <code>false</code> | if true the file is converted to a JS Object using JSON.parse |
| required | <code>boolean</code> | <code>false</code> | whether the file is required |

<a name="module_cicero-core.TemplateLoader.loadZipFilesContents"></a>

#### *TemplateLoader.loadZipFilesContents(zip, regex) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
Loads the contents of all files in the zip that match a regex

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - a promise to an array of objects with the name and contents of the zip files  
**Internal**:   

| Param | Type | Description |
| --- | --- | --- |
| zip | <code>\*</code> | the JSZip instance |
| regex | <code>RegExp</code> | the regex to use to match files |

<a name="module_cicero-core.TemplateLoader.loadFileContents"></a>

#### *TemplateLoader.loadFileContents(path, fileName, json, required) ⇒ <code>Promise.&lt;string&gt;</code>*
Loads a required file from a directory, displaying an error if missing

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise to the contents of the file or null if it does not exist and
required is false  
**Internal**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>\*</code> |  | the root path |
| fileName | <code>string</code> |  | the relative file name |
| json | <code>boolean</code> | <code>false</code> | if true the file is converted to a JS Object using JSON.parse |
| required | <code>boolean</code> | <code>false</code> | whether the file is required |

<a name="module_cicero-core.TemplateLoader.loadFilesContents"></a>

#### *TemplateLoader.loadFilesContents(path, regex) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>*
Loads the contents of all files under a path that match a regex
Note that any directories called node_modules are ignored.

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;Array.&lt;object&gt;&gt;</code> - a promise to an array of objects with the name and contents of the files  
**Internal**:   

| Param | Type | Description |
| --- | --- | --- |
| path | <code>\*</code> | the file path |
| regex | <code>RegExp</code> | the regex to match files |

<a name="module_cicero-core.TemplateLoader.fromArchive"></a>

#### *TemplateLoader.fromArchive(Template, buffer) ⇒ <code>Promise.&lt;Template&gt;</code>*
Create a template from an archive.

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;Template&gt;</code> - a Promise to the template  

| Param | Type | Description |
| --- | --- | --- |
| Template | <code>\*</code> | the type to construct |
| buffer | <code>Buffer</code> | the buffer to a Cicero Template Archive (cta) file |

<a name="module_cicero-core.TemplateLoader.fromUrl"></a>

#### *TemplateLoader.fromUrl(Template, url, options) ⇒ <code>Promise</code>*
Create a template from an URL.

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise</code> - a Promise to the template  

| Param | Type | Description |
| --- | --- | --- |
| Template | <code>\*</code> | the type to construct |
| url | <code>String</code> | the URL to a Cicero Template Archive (cta) file |
| options | <code>object</code> | additional options |

<a name="module_cicero-core.TemplateLoader.fromDirectory"></a>

#### *TemplateLoader.fromDirectory(Template, path, [options]) ⇒ <code>Promise.&lt;Template&gt;</code>*
Builds a Template from the contents of a directory.
The directory must include a package.json in the root (used to specify
the name, version and description of the template).

**Kind**: static method of [<code>TemplateLoader</code>](#module_cicero-core.TemplateLoader)  
**Returns**: <code>Promise.&lt;Template&gt;</code> - a Promise to the instantiated template  

| Param | Type | Description |
| --- | --- | --- |
| Template | <code>\*</code> | the type to construct |
| path | <code>String</code> | to a local directory |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |

<a name="module_cicero-core.TemplateSaver"></a>

### cicero-core.TemplateSaver
A utility to persist templates to data sources.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Internal**:   
<a name="module_cicero-core.TemplateSaver.toArchive"></a>

#### TemplateSaver.toArchive(template, [language], [options]) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Persists this template to a Cicero Template Archive (cta) file.

**Kind**: static method of [<code>TemplateSaver</code>](#module_cicero-core.TemplateSaver)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - the zlib buffer  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>Template</code> | the template to persist |
| [language] | <code>string</code> | target language for the archive (should be 'ergo') |
| [options] | <code>Object</code> | JSZip options |

