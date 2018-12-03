---
id: version-0.9.9-cicero-api
title: JavaScript API
original_id: cicero-api
---

<a name="module_cicero-core"></a>

## cicero-core
Cicero Core - defines the core data types for Cicero.


* [cicero-core](#module_cicero-core)
    * *[.CiceroModelManager](#module_cicero-core.CiceroModelManager)*
        * *[.getModels()](#module_cicero-core.CiceroModelManager+getModels) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>*
    * [.Clause](#module_cicero-core.Clause)
    * [.Contract](#module_cicero-core.Contract)
    * [.FunctionDeclaration](#module_cicero-core.FunctionDeclaration)
        * [new FunctionDeclaration(modelManager, language, name, visibility, returnType, throws, parameterNames, parameterTypes, decorators, functionText)](#new_module_cicero-core.FunctionDeclaration_new)
        * [.getFunctionText()](#module_cicero-core.FunctionDeclaration+getFunctionText) ⇒ <code>string</code>
        * [.getThrows()](#module_cicero-core.FunctionDeclaration+getThrows) ⇒ <code>string</code>
        * [.getLanguage()](#module_cicero-core.FunctionDeclaration+getLanguage) ⇒ <code>string</code>
        * [.getDecorators()](#module_cicero-core.FunctionDeclaration+getDecorators) ⇒ <code>Array.&lt;string&gt;</code>
        * [.getVisibility()](#module_cicero-core.FunctionDeclaration+getVisibility) ⇒ <code>string</code>
        * [.getReturnType()](#module_cicero-core.FunctionDeclaration+getReturnType) ⇒ <code>string</code>
        * [.getName()](#module_cicero-core.FunctionDeclaration+getName) ⇒ <code>string</code>
        * [.getTransactionDeclarationName()](#module_cicero-core.FunctionDeclaration+getTransactionDeclarationName) ⇒ <code>string</code>
        * [.getParameterNames()](#module_cicero-core.FunctionDeclaration+getParameterNames) ⇒ <code>Array.&lt;string&gt;</code>
        * [.getParameterTypes()](#module_cicero-core.FunctionDeclaration+getParameterTypes) ⇒ <code>Array.&lt;string&gt;</code>
    * [.Metadata](#module_cicero-core.Metadata)
        * [new Metadata(packageJson, readme, samples, request)](#new_module_cicero-core.Metadata_new)
        * [.getTemplateType()](#module_cicero-core.Metadata+getTemplateType) ⇒ <code>number</code>
        * [.getLanguage()](#module_cicero-core.Metadata+getLanguage) ⇒ <code>number</code>
        * [.getTargetVersion()](#module_cicero-core.Metadata+getTargetVersion) ⇒ <code>string</code>
        * [.satisfiesTargetVersion()](#module_cicero-core.Metadata+satisfiesTargetVersion) ⇒ <code>string</code>
        * [.getSamples()](#module_cicero-core.Metadata+getSamples) ⇒ <code>object</code>
        * [.getRequest()](#module_cicero-core.Metadata+getRequest) ⇒ <code>object</code>
        * [.getSample(locale)](#module_cicero-core.Metadata+getSample) ⇒ <code>string</code>
        * [.getREADME()](#module_cicero-core.Metadata+getREADME) ⇒ <code>String</code>
        * [.getPackageJson()](#module_cicero-core.Metadata+getPackageJson) ⇒ <code>object</code>
        * [.getName()](#module_cicero-core.Metadata+getName) ⇒ <code>string</code>
        * [.getDescription()](#module_cicero-core.Metadata+getDescription) ⇒ <code>string</code>
        * [.getVersion()](#module_cicero-core.Metadata+getVersion) ⇒ <code>string</code>
        * [.getIdentifier()](#module_cicero-core.Metadata+getIdentifier) ⇒ <code>string</code>
        * [.createTargetMetadata(language)](#module_cicero-core.Metadata+createTargetMetadata) ⇒ <code>object</code>
    * *[.Template](#module_cicero-core.Template)*
        * *[new Template(packageJson, readme, samples, request)](#new_module_cicero-core.Template_new)*
        * _instance_
            * *[.getTemplateModel()](#module_cicero-core.Template+getTemplateModel) ⇒ <code>ClassDeclaration</code>*
            * *[.getIdentifier()](#module_cicero-core.Template+getIdentifier) ⇒ <code>String</code>*
            * *[.getMetadata()](#module_cicero-core.Template+getMetadata) ⇒ <code>Metadata</code>*
            * *[.getParser()](#module_cicero-core.Template+getParser) ⇒ <code>object</code>*
            * *[.getTemplateAst()](#module_cicero-core.Template+getTemplateAst) ⇒ <code>object</code>*
            * *[.setGrammar(grammar)](#module_cicero-core.Template+setGrammar)*
            * *[.buildGrammar(templatizedGrammar)](#module_cicero-core.Template+buildGrammar)*
            * *[.buildGrammarRules(ast, templateModel, prefix, parts)](#module_cicero-core.Template+buildGrammarRules)*
            * *[.cleanChunk(input)](#module_cicero-core.Template+cleanChunk) ⇒ <code>string</code>*
            * *[.findFirstBinding(propertyName, elements)](#module_cicero-core.Template+findFirstBinding) ⇒ <code>int</code>*
            * *[.getGrammar()](#module_cicero-core.Template+getGrammar) ⇒ <code>String</code>*
            * *[.getTemplatizedGrammar()](#module_cicero-core.Template+getTemplatizedGrammar) ⇒ <code>String</code>*
            * *[.getName()](#module_cicero-core.Template+getName) ⇒ <code>String</code>*
            * *[.getVersion()](#module_cicero-core.Template+getVersion) ⇒ <code>String</code>*
            * *[.getDescription()](#module_cicero-core.Template+getDescription) ⇒ <code>String</code>*
            * *[.getHash()](#module_cicero-core.Template+getHash) ⇒ <code>string</code>*
            * *[.toArchive([language], [options])](#module_cicero-core.Template+toArchive) ⇒ <code>Buffer</code>*
            * *[.getIntrospector()](#module_cicero-core.Template+getIntrospector) ⇒ <code>Introspector</code>*
            * *[.getFactory()](#module_cicero-core.Template+getFactory) ⇒ <code>Factory</code>*
            * *[.getSerializer()](#module_cicero-core.Template+getSerializer) ⇒ <code>Serializer</code>*
            * *[.getRequestTypes()](#module_cicero-core.Template+getRequestTypes) ⇒ <code>Array</code>*
            * *[.getResponseTypes()](#module_cicero-core.Template+getResponseTypes) ⇒ <code>Array</code>*
            * *[.getEmitTypes()](#module_cicero-core.Template+getEmitTypes) ⇒ <code>Array</code>*
            * *[.getStateTypes()](#module_cicero-core.Template+getStateTypes) ⇒ <code>Array</code>*
        * _static_
            * *[.instanceOf(classDeclaration, fqt)](#module_cicero-core.Template.instanceOf) ⇒ <code>boolean</code>*
            * *[.compileGrammar(sourceCode)](#module_cicero-core.Template.compileGrammar) ⇒ <code>object</code>*
            * *[.fromArchive(Buffer)](#module_cicero-core.Template.fromArchive) ⇒ <code>Promise</code>*
            * *[.fromUrl(url, options)](#module_cicero-core.Template.fromUrl) ⇒ <code>Promise</code>*
            * *[.fromDirectory(path, [options])](#module_cicero-core.Template.fromDirectory) ⇒ <code>Promise</code>*
    * *[.TemplateInstance](#module_cicero-core.TemplateInstance)*
        * *[new TemplateInstance(template)](#new_module_cicero-core.TemplateInstance_new)*
        * *[.setData(data)](#module_cicero-core.TemplateInstance+setData)*
        * *[.getData()](#module_cicero-core.TemplateInstance+getData) ⇒ <code>object</code>*
        * *[.getDataAsComposerObject()](#module_cicero-core.TemplateInstance+getDataAsComposerObject) ⇒ <code>object</code>*
        * *[.parse(text)](#module_cicero-core.TemplateInstance+parse)*
        * *[.generateText()](#module_cicero-core.TemplateInstance+generateText) ⇒ <code>string</code>*
        * *[.getIdentifier()](#module_cicero-core.TemplateInstance+getIdentifier) ⇒ <code>String</code>*
        * *[.getTemplate()](#module_cicero-core.TemplateInstance+getTemplate) ⇒ <code>Template</code>*
        * *[.toJSON()](#module_cicero-core.TemplateInstance+toJSON) ⇒ <code>object</code>*

<a name="module_cicero-core.CiceroModelManager"></a>

### *cicero-core.CiceroModelManager*
Cicero Model Manager. Bootstraps the ModelManager with system files.

**Kind**: static abstract class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  
<a name="module_cicero-core.CiceroModelManager+getModels"></a>

#### *ciceroModelManager.getModels() ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>*
Gets all the CTO models

**Kind**: instance method of [<code>CiceroModelManager</code>](#module_cicero-core.CiceroModelManager)  
**Returns**: <code>Array.&lt;{name:string, content:string}&gt;</code> - the name and content of each CTO file  
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
<a name="module_cicero-core.FunctionDeclaration"></a>

### cicero-core.FunctionDeclaration
FunctionDeclaration defines a function that has been defined
in a model file. If the name of the function starts with 'on'
then the name of the function denotes the name of a transaction
declaration that the function processes.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  

* [.FunctionDeclaration](#module_cicero-core.FunctionDeclaration)
    * [new FunctionDeclaration(modelManager, language, name, visibility, returnType, throws, parameterNames, parameterTypes, decorators, functionText)](#new_module_cicero-core.FunctionDeclaration_new)
    * [.getFunctionText()](#module_cicero-core.FunctionDeclaration+getFunctionText) ⇒ <code>string</code>
    * [.getThrows()](#module_cicero-core.FunctionDeclaration+getThrows) ⇒ <code>string</code>
    * [.getLanguage()](#module_cicero-core.FunctionDeclaration+getLanguage) ⇒ <code>string</code>
    * [.getDecorators()](#module_cicero-core.FunctionDeclaration+getDecorators) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getVisibility()](#module_cicero-core.FunctionDeclaration+getVisibility) ⇒ <code>string</code>
    * [.getReturnType()](#module_cicero-core.FunctionDeclaration+getReturnType) ⇒ <code>string</code>
    * [.getName()](#module_cicero-core.FunctionDeclaration+getName) ⇒ <code>string</code>
    * [.getTransactionDeclarationName()](#module_cicero-core.FunctionDeclaration+getTransactionDeclarationName) ⇒ <code>string</code>
    * [.getParameterNames()](#module_cicero-core.FunctionDeclaration+getParameterNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getParameterTypes()](#module_cicero-core.FunctionDeclaration+getParameterTypes) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_module_cicero-core.FunctionDeclaration_new"></a>

#### new FunctionDeclaration(modelManager, language, name, visibility, returnType, throws, parameterNames, parameterTypes, decorators, functionText)
Create a FunctionDeclaration


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the ModelManager used to validate this function |
| language | <code>string</code> | the language that the function is written in. E.g. JS. |
| name | <code>string</code> | the name of the function |
| visibility | <code>string</code> | the visibility of the function |
| returnType | <code>string</code> | the return type of the function |
| throws | <code>string</code> | the type that is thrown by the function |
| parameterNames | <code>Array.&lt;string&gt;</code> | the names of parameters of the function |
| parameterTypes | <code>Array.&lt;string&gt;</code> | the type names of parameters of the function |
| decorators | <code>Array.&lt;string&gt;</code> | the function decorators |
| functionText | <code>string</code> | the function as text |

<a name="module_cicero-core.FunctionDeclaration+getFunctionText"></a>

#### functionDeclaration.getFunctionText() ⇒ <code>string</code>
Returns the text of this function.

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the text that defines the function  
<a name="module_cicero-core.FunctionDeclaration+getThrows"></a>

#### functionDeclaration.getThrows() ⇒ <code>string</code>
Returns the type thrown by this function

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the type thrown by the function  
<a name="module_cicero-core.FunctionDeclaration+getLanguage"></a>

#### functionDeclaration.getLanguage() ⇒ <code>string</code>
Returns the programming language that the function is written in

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the language of the function  
<a name="module_cicero-core.FunctionDeclaration+getDecorators"></a>

#### functionDeclaration.getDecorators() ⇒ <code>Array.&lt;string&gt;</code>
Returns the decorators that the function was tagged with

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>Array.&lt;string&gt;</code> - the @ prefixed decorators for the function  
<a name="module_cicero-core.FunctionDeclaration+getVisibility"></a>

#### functionDeclaration.getVisibility() ⇒ <code>string</code>
Returns the visibility of this function

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the visibility of the function (+ is public),
(- is private)  
<a name="module_cicero-core.FunctionDeclaration+getReturnType"></a>

#### functionDeclaration.getReturnType() ⇒ <code>string</code>
Returns the return type for this function

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the return type for the function  
<a name="module_cicero-core.FunctionDeclaration+getName"></a>

#### functionDeclaration.getName() ⇒ <code>string</code>
Returns the name of the function

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the name of the function.  
<a name="module_cicero-core.FunctionDeclaration+getTransactionDeclarationName"></a>

#### functionDeclaration.getTransactionDeclarationName() ⇒ <code>string</code>
Returns the short name of the transaction declaration
that is being processed. This is calculated by removing
the 'on' prefix from the function name.
If the function name does not start with 'on' then null

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>string</code> - the name of the transaction declaration.  
<a name="module_cicero-core.FunctionDeclaration+getParameterNames"></a>

#### functionDeclaration.getParameterNames() ⇒ <code>Array.&lt;string&gt;</code>
Returns the names of the parameters processed by the function.

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>Array.&lt;string&gt;</code> - the names of the parameters.  
<a name="module_cicero-core.FunctionDeclaration+getParameterTypes"></a>

#### functionDeclaration.getParameterTypes() ⇒ <code>Array.&lt;string&gt;</code>
Returns the types of the parameters processed by the function.

**Kind**: instance method of [<code>FunctionDeclaration</code>](#module_cicero-core.FunctionDeclaration)  
**Returns**: <code>Array.&lt;string&gt;</code> - the types of the parameters.  
<a name="module_cicero-core.Metadata"></a>

### cicero-core.Metadata
Defines the metadata for a Template, including the name, version, README markdown.

**Kind**: static class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* [.Metadata](#module_cicero-core.Metadata)
    * [new Metadata(packageJson, readme, samples, request)](#new_module_cicero-core.Metadata_new)
    * [.getTemplateType()](#module_cicero-core.Metadata+getTemplateType) ⇒ <code>number</code>
    * [.getLanguage()](#module_cicero-core.Metadata+getLanguage) ⇒ <code>number</code>
    * [.getTargetVersion()](#module_cicero-core.Metadata+getTargetVersion) ⇒ <code>string</code>
    * [.satisfiesTargetVersion()](#module_cicero-core.Metadata+satisfiesTargetVersion) ⇒ <code>string</code>
    * [.getSamples()](#module_cicero-core.Metadata+getSamples) ⇒ <code>object</code>
    * [.getRequest()](#module_cicero-core.Metadata+getRequest) ⇒ <code>object</code>
    * [.getSample(locale)](#module_cicero-core.Metadata+getSample) ⇒ <code>string</code>
    * [.getREADME()](#module_cicero-core.Metadata+getREADME) ⇒ <code>String</code>
    * [.getPackageJson()](#module_cicero-core.Metadata+getPackageJson) ⇒ <code>object</code>
    * [.getName()](#module_cicero-core.Metadata+getName) ⇒ <code>string</code>
    * [.getDescription()](#module_cicero-core.Metadata+getDescription) ⇒ <code>string</code>
    * [.getVersion()](#module_cicero-core.Metadata+getVersion) ⇒ <code>string</code>
    * [.getIdentifier()](#module_cicero-core.Metadata+getIdentifier) ⇒ <code>string</code>
    * [.createTargetMetadata(language)](#module_cicero-core.Metadata+createTargetMetadata) ⇒ <code>object</code>

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
<a name="module_cicero-core.Metadata+getLanguage"></a>

#### metadata.getLanguage() ⇒ <code>number</code>
Returns either a 0 (for an ergo template), or 1 (for a javascript template)

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>number</code> - the template language  
<a name="module_cicero-core.Metadata+getTargetVersion"></a>

#### metadata.getTargetVersion() ⇒ <code>string</code>
Returns the target semantic version for this template.
i.e. which version of cicero was this template built for?
The version string conforms to the semver definition

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the semantic version  
<a name="module_cicero-core.Metadata+satisfiesTargetVersion"></a>

#### metadata.satisfiesTargetVersion() ⇒ <code>string</code>
Only returns true if the current cicero version satisfies the target version of this template

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>string</code> - the semantic version  
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

| Param | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | the IETF language code for the language |

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

#### metadata.createTargetMetadata(language) ⇒ <code>object</code>
Return new Metadata for a target language

**Kind**: instance method of [<code>Metadata</code>](#module_cicero-core.Metadata)  
**Returns**: <code>object</code> - the new Metadata  

| Param | Type | Description |
| --- | --- | --- |
| language | <code>string</code> | the target language |

<a name="module_cicero-core.Template"></a>

### *cicero-core.Template*
A template for a legal clause or contract. A Template has a template model, request/response transaction types,
a template grammar (natural language for the template) as well as the business logic to execute the
template.

**Kind**: static abstract class of [<code>cicero-core</code>](#module_cicero-core)  
**Access**: public  

* *[.Template](#module_cicero-core.Template)*
    * *[new Template(packageJson, readme, samples, request)](#new_module_cicero-core.Template_new)*
    * _instance_
        * *[.getTemplateModel()](#module_cicero-core.Template+getTemplateModel) ⇒ <code>ClassDeclaration</code>*
        * *[.getIdentifier()](#module_cicero-core.Template+getIdentifier) ⇒ <code>String</code>*
        * *[.getMetadata()](#module_cicero-core.Template+getMetadata) ⇒ <code>Metadata</code>*
        * *[.getParser()](#module_cicero-core.Template+getParser) ⇒ <code>object</code>*
        * *[.getTemplateAst()](#module_cicero-core.Template+getTemplateAst) ⇒ <code>object</code>*
        * *[.setGrammar(grammar)](#module_cicero-core.Template+setGrammar)*
        * *[.buildGrammar(templatizedGrammar)](#module_cicero-core.Template+buildGrammar)*
        * *[.buildGrammarRules(ast, templateModel, prefix, parts)](#module_cicero-core.Template+buildGrammarRules)*
        * *[.cleanChunk(input)](#module_cicero-core.Template+cleanChunk) ⇒ <code>string</code>*
        * *[.findFirstBinding(propertyName, elements)](#module_cicero-core.Template+findFirstBinding) ⇒ <code>int</code>*
        * *[.getGrammar()](#module_cicero-core.Template+getGrammar) ⇒ <code>String</code>*
        * *[.getTemplatizedGrammar()](#module_cicero-core.Template+getTemplatizedGrammar) ⇒ <code>String</code>*
        * *[.getName()](#module_cicero-core.Template+getName) ⇒ <code>String</code>*
        * *[.getVersion()](#module_cicero-core.Template+getVersion) ⇒ <code>String</code>*
        * *[.getDescription()](#module_cicero-core.Template+getDescription) ⇒ <code>String</code>*
        * *[.getHash()](#module_cicero-core.Template+getHash) ⇒ <code>string</code>*
        * *[.toArchive([language], [options])](#module_cicero-core.Template+toArchive) ⇒ <code>Buffer</code>*
        * *[.getIntrospector()](#module_cicero-core.Template+getIntrospector) ⇒ <code>Introspector</code>*
        * *[.getFactory()](#module_cicero-core.Template+getFactory) ⇒ <code>Factory</code>*
        * *[.getSerializer()](#module_cicero-core.Template+getSerializer) ⇒ <code>Serializer</code>*
        * *[.getRequestTypes()](#module_cicero-core.Template+getRequestTypes) ⇒ <code>Array</code>*
        * *[.getResponseTypes()](#module_cicero-core.Template+getResponseTypes) ⇒ <code>Array</code>*
        * *[.getEmitTypes()](#module_cicero-core.Template+getEmitTypes) ⇒ <code>Array</code>*
        * *[.getStateTypes()](#module_cicero-core.Template+getStateTypes) ⇒ <code>Array</code>*
    * _static_
        * *[.instanceOf(classDeclaration, fqt)](#module_cicero-core.Template.instanceOf) ⇒ <code>boolean</code>*
        * *[.compileGrammar(sourceCode)](#module_cicero-core.Template.compileGrammar) ⇒ <code>object</code>*
        * *[.fromArchive(Buffer)](#module_cicero-core.Template.fromArchive) ⇒ <code>Promise</code>*
        * *[.fromUrl(url, options)](#module_cicero-core.Template.fromUrl) ⇒ <code>Promise</code>*
        * *[.fromDirectory(path, [options])](#module_cicero-core.Template.fromDirectory) ⇒ <code>Promise</code>*

<a name="new_module_cicero-core.Template_new"></a>

#### *new Template(packageJson, readme, samples, request)*
Create the Template.
Note: Only to be called by framework code. Applications should
retrieve instances from [Template.fromArchive](Template.fromArchive).


| Param | Type | Description |
| --- | --- | --- |
| packageJson | <code>object</code> | the JS object for package.json |
| readme | <code>String</code> | the readme in markdown for the template (optional) |
| samples | <code>object</code> | the sample text for the template in different locales |
| request | <code>object</code> | the JS object for the sample request |

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
<a name="module_cicero-core.Template+getParser"></a>

#### *template.getParser() ⇒ <code>object</code>*
Gets a parser object for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>object</code> - the parser for this template  
<a name="module_cicero-core.Template+getTemplateAst"></a>

#### *template.getTemplateAst() ⇒ <code>object</code>*
Gets the AST for the template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>object</code> - the AST for the template  
<a name="module_cicero-core.Template+setGrammar"></a>

#### *template.setGrammar(grammar)*
Set the grammar for the template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  

| Param | Type | Description |
| --- | --- | --- |
| grammar | <code>String</code> | the grammar for the template |

<a name="module_cicero-core.Template+buildGrammar"></a>

#### *template.buildGrammar(templatizedGrammar)*
Build a grammar from a template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  

| Param | Type | Description |
| --- | --- | --- |
| templatizedGrammar | <code>String</code> | the annotated template |

<a name="module_cicero-core.Template+buildGrammarRules"></a>

#### *template.buildGrammarRules(ast, templateModel, prefix, parts)*
Build grammar rules from a template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  

| Param | Type | Description |
| --- | --- | --- |
| ast | <code>object</code> | the AST from which to build the grammar |
| templateModel | <code>ClassDeclaration</code> | the type of the parent class for this AST |
| prefix | <code>String</code> | A unique prefix for the grammar rules |
| parts | <code>Object</code> | Result object to acculumate rules |

<a name="module_cicero-core.Template+cleanChunk"></a>

#### *template.cleanChunk(input) ⇒ <code>string</code>*
Cleans a chunk of text to make it safe to include
as a grammar rule. We need to remove linefeeds and
escape any '"' characters.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>string</code> - cleaned text  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | the input text from the template |

<a name="module_cicero-core.Template+findFirstBinding"></a>

#### *template.findFirstBinding(propertyName, elements) ⇒ <code>int</code>*
Finds the first binding for the given property

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>int</code> - the index of the element or -1  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | the name of the property |
| elements | <code>Array.&lt;object&gt;</code> | the result of parsing the template_txt. |

<a name="module_cicero-core.Template+getGrammar"></a>

#### *template.getGrammar() ⇒ <code>String</code>*
Get the (compiled) grammar for the template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - - the grammar for the template  
<a name="module_cicero-core.Template+getTemplatizedGrammar"></a>

#### *template.getTemplatizedGrammar() ⇒ <code>String</code>*
Returns the templatized grammar

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>String</code> - the contents of the templatized grammar  
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
Gets a content based SHA-256 hash for this template

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>string</code> - the SHA-256 hash in hex format  
<a name="module_cicero-core.Template+toArchive"></a>

#### *template.toArchive([language], [options]) ⇒ <code>Buffer</code>*
Store a Template as an archive.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Buffer</code> - buffer  - the zlib buffer  

| Param | Type | Description |
| --- | --- | --- |
| [language] | <code>string</code> | target language for the archive (should be either 'ergo' or 'javascript') |
| [options] | <code>Object</code> | JSZip options |

<a name="module_cicero-core.Template+getIntrospector"></a>

#### *template.getIntrospector() ⇒ <code>Introspector</code>*
Provides access to the Introspector for this business network. The Introspector
is used to reflect on the types defined within this business network.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Introspector</code> - the Introspector for this business network  
<a name="module_cicero-core.Template+getFactory"></a>

#### *template.getFactory() ⇒ <code>Factory</code>*
Provides access to the Factory for this business network. The Factory
is used to create the types defined in this business network.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Factory</code> - the Factory for this business network  
<a name="module_cicero-core.Template+getSerializer"></a>

#### *template.getSerializer() ⇒ <code>Serializer</code>*
Provides access to the Serializer for this business network. The Serializer
is used to serialize instances of the types defined within this business network.

**Kind**: instance method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Serializer</code> - the Serializer for this business network  
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
<a name="module_cicero-core.Template.instanceOf"></a>

#### *Template.instanceOf(classDeclaration, fqt) ⇒ <code>boolean</code>*
Check to see if a ClassDeclaration is an instance of the specified fully qualified
type name.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>boolean</code> - True if classDeclaration an instance of the specified fully
qualified type name, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| classDeclaration | <code>ClassDeclaration</code> | The class to test |
| fqt | <code>String</code> | The fully qualified type name. |

<a name="module_cicero-core.Template.compileGrammar"></a>

#### *Template.compileGrammar(sourceCode) ⇒ <code>object</code>*
Compiles a Nearley grammar to its AST

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>object</code> - the AST for the grammar  

| Param | Type | Description |
| --- | --- | --- |
| sourceCode | <code>string</code> | the source text for the grammar |

<a name="module_cicero-core.Template.fromArchive"></a>

#### *Template.fromArchive(Buffer) ⇒ <code>Promise</code>*
Create a template from an archive.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise</code> - a Promise to the instantiated business network  

| Param | Type | Description |
| --- | --- | --- |
| Buffer | <code>Buffer</code> | the Buffer to a zip or cta archive |

<a name="module_cicero-core.Template.fromUrl"></a>

#### *Template.fromUrl(url, options) ⇒ <code>Promise</code>*
Create a template from an URL.

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise</code> - a Promise to the instantiated business network  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the URL to a zip or cta archive |
| options | <code>object</code> | additional options |

<a name="module_cicero-core.Template.fromDirectory"></a>

#### *Template.fromDirectory(path, [options]) ⇒ <code>Promise</code>*
Builds a Template from the contents of a directory.
The directory must include a package.json in the root (used to specify
the name, version and description of the business network). This method
is designed to work with business networks that refer to external models
using npm dependencies as well as business networks that statically
package their model files.
<p>
If package.json contains a dependencies property then this method will search for
model (CTO) files under the node_modules directory for each dependency that
passes the options.dependencyGlob pattern.
</p>
<p>
If the network depends on an npm module its dependencies (transitive closure)
will also be scanned for model (CTO) files.
</p>
<p>
The directory may optionally contain a README.md file which is accessible from the
BusinessNetworkMetadata.getREADME method.
</p>
<p>
In addition all model files will be added that are not under node_modules
and that pass the options.modelFileGlob pattern. By default you should put
model files under a directory called 'models'.
</p>
<p>
All script (js) files will be added that are not under node_modules and
that pass the options.scriptGlob pattern. By default you should put Javascript
files under the 'lib' directory.
</p>

**Kind**: static method of [<code>Template</code>](#module_cicero-core.Template)  
**Returns**: <code>Promise</code> - a Promise to the instantiated business network  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | to a local directory |
| [options] | <code>Object</code> | an optional set of options to configure the instance. |
| [options.dependencyGlob] | <code>Object</code> | specify the glob pattern used to match the npm dependencies to process. Defaults to ** |
| [options.modelFileGlob] | <code>boolean</code> | specify the glob pattern used to match the model files to include. Defaults to **\/models/**\/*.cto |
| [options.scriptGlob] | <code>boolean</code> | specify the glob pattern used to match the script files to include. Defaults to **\/lib/**\/*.+(js|ergo) |

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
    * *[.setData(data)](#module_cicero-core.TemplateInstance+setData)*
    * *[.getData()](#module_cicero-core.TemplateInstance+getData) ⇒ <code>object</code>*
    * *[.getDataAsComposerObject()](#module_cicero-core.TemplateInstance+getDataAsComposerObject) ⇒ <code>object</code>*
    * *[.parse(text)](#module_cicero-core.TemplateInstance+parse)*
    * *[.generateText()](#module_cicero-core.TemplateInstance+generateText) ⇒ <code>string</code>*
    * *[.getIdentifier()](#module_cicero-core.TemplateInstance+getIdentifier) ⇒ <code>String</code>*
    * *[.getTemplate()](#module_cicero-core.TemplateInstance+getTemplate) ⇒ <code>Template</code>*
    * *[.toJSON()](#module_cicero-core.TemplateInstance+toJSON) ⇒ <code>object</code>*

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

#### *templateInstance.parse(text)*
Set the data for the clause by parsing natural language text.

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the data for the clause |

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
<a name="module_cicero-core.TemplateInstance+toJSON"></a>

#### *templateInstance.toJSON() ⇒ <code>object</code>*
Returns a JSON representation of the clause

**Kind**: instance method of [<code>TemplateInstance</code>](#module_cicero-core.TemplateInstance)  
**Returns**: <code>object</code> - the JS object for serialization  
