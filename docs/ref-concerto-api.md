---
id: ref-concerto-api
title: Concerto API
---

## Modules

<dl>
<dt><a href="#module_concerto-core">concerto-core</a></dt>
<dd><p>Concerto module. Concerto is a framework for defining domain
specific models.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#levels">levels</a> : <code>Object</code></dt>
<dd><p>Default levels for the npm configuration.</p>
</dd>
<dt><a href="#colorMap">colorMap</a> : <code>Object</code></dt>
<dd><p>Default levels for the npm configuration.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setCurrentTime">setCurrentTime([currentTime], [utcOffset])</a> ⇒ <code>object</code></dt>
<dd><p>Ensures there is a proper current time</p>
</dd>
<dt><a href="#randomNumberInRangeWithPrecision">randomNumberInRangeWithPrecision(userMin, userMax, precision, systemMin, systemMax)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random number within a given range with
a prescribed precision and inside a global range</p>
</dd>
</dl>

<a name="module_concerto-core"></a>

## concerto-core
Concerto module. Concerto is a framework for defining domain
specific models.


* [concerto-core](#module_concerto-core)
    * [.BaseException](#module_concerto-core.BaseException) ⇐ <code>Error</code>
        * [new BaseException(message, component)](#new_module_concerto-core.BaseException_new)
    * [.BaseFileException](#module_concerto-core.BaseFileException) ⇐ <code>BaseException</code>
        * [new BaseFileException(message, fileLocation, fullMessage, fileName, component)](#new_module_concerto-core.BaseFileException_new)
        * [.getFileLocation()](#module_concerto-core.BaseFileException+getFileLocation) ⇒ <code>string</code>
        * [.getShortMessage()](#module_concerto-core.BaseFileException+getShortMessage) ⇒ <code>string</code>
        * [.getFileName()](#module_concerto-core.BaseFileException+getFileName) ⇒ <code>string</code>
    * [.Concerto](#module_concerto-core.Concerto)
        * [new Concerto(modelManager)](#new_module_concerto-core.Concerto_new)
        * [.validate(obj, [options])](#module_concerto-core.Concerto+validate)
        * [.getModelManager()](#module_concerto-core.Concerto+getModelManager) ⇒ <code>\*</code>
        * [.isObject(obj)](#module_concerto-core.Concerto+isObject) ⇒ <code>boolean</code>
        * [.getTypeDeclaration(obj)](#module_concerto-core.Concerto+getTypeDeclaration) ⇒ <code>\*</code>
        * [.getIdentifier(obj)](#module_concerto-core.Concerto+getIdentifier) ⇒ <code>string</code>
        * [.isIdentifiable(obj)](#module_concerto-core.Concerto+isIdentifiable) ⇒ <code>boolean</code>
        * [.isRelationship(obj)](#module_concerto-core.Concerto+isRelationship) ⇒ <code>boolean</code>
        * [.setIdentifier(obj, id)](#module_concerto-core.Concerto+setIdentifier) ⇒ <code>\*</code>
        * [.getFullyQualifiedIdentifier(obj)](#module_concerto-core.Concerto+getFullyQualifiedIdentifier) ⇒ <code>string</code>
        * [.toURI(obj)](#module_concerto-core.Concerto+toURI) ⇒ <code>string</code>
        * [.fromURI(uri)](#module_concerto-core.Concerto+fromURI) ⇒ <code>\*</code>
        * [.getType(obj)](#module_concerto-core.Concerto+getType) ⇒ <code>string</code>
        * [.getNamespace(obj)](#module_concerto-core.Concerto+getNamespace) ⇒ <code>string</code>
    * [.Factory](#module_concerto-core.Factory)
        * [new Factory(modelManager)](#new_module_concerto-core.Factory_new)
        * _instance_
            * [.newResource(ns, type, [id], [options])](#module_concerto-core.Factory+newResource) ⇒ <code>Resource</code>
            * [.newConcept(ns, type, [id], [options])](#module_concerto-core.Factory+newConcept) ⇒ <code>Resource</code>
            * [.newRelationship(ns, type, id)](#module_concerto-core.Factory+newRelationship) ⇒ <code>Relationship</code>
            * [.newTransaction(ns, type, [id], [options])](#module_concerto-core.Factory+newTransaction) ⇒ <code>Resource</code>
            * [.newEvent(ns, type, [id], [options])](#module_concerto-core.Factory+newEvent) ⇒ <code>Resource</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.Factory.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.ModelLoader](#module_concerto-core.ModelLoader)
        * [.loadModelManager(ctoFiles, options)](#module_concerto-core.ModelLoader.loadModelManager) ⇒ <code>object</code>
        * [.loadModelManagerFromModelFiles(modelFiles, [fileNames], options)](#module_concerto-core.ModelLoader.loadModelManagerFromModelFiles) ⇒ <code>object</code>
    * [.ModelManager](#module_concerto-core.ModelManager)
        * [new ModelManager(options)](#new_module_concerto-core.ModelManager_new)
        * _instance_
            * [.validateModelFile(modelFile, fileName)](#module_concerto-core.ModelManager+validateModelFile)
            * [.addModelFile(modelFile, fileName, [disableValidation])](#module_concerto-core.ModelManager+addModelFile) ⇒ <code>Object</code>
            * [.updateModelFile(modelFile, fileName, [disableValidation])](#module_concerto-core.ModelManager+updateModelFile) ⇒ <code>Object</code>
            * [.deleteModelFile(namespace)](#module_concerto-core.ModelManager+deleteModelFile)
            * [.addModelFiles(modelFiles, [fileNames], [disableValidation])](#module_concerto-core.ModelManager+addModelFiles) ⇒ <code>Array.&lt;Object&gt;</code>
            * [.validateModelFiles()](#module_concerto-core.ModelManager+validateModelFiles)
            * [.updateExternalModels([options], [modelFileDownloader])](#module_concerto-core.ModelManager+updateExternalModels) ⇒ <code>Promise</code>
            * [.writeModelsToFileSystem(path, [options])](#module_concerto-core.ModelManager+writeModelsToFileSystem)
            * [.getModels([options])](#module_concerto-core.ModelManager+getModels) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
            * [.clearModelFiles()](#module_concerto-core.ModelManager+clearModelFiles)
            * [.getNamespaces()](#module_concerto-core.ModelManager+getNamespaces) ⇒ <code>Array.&lt;string&gt;</code>
            * [.getAssetDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
            * [.getTransactionDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
            * [.getEventDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
            * [.getParticipantDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
            * [.getEnumDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
            * [.getConceptDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
            * [.getFactory()](#module_concerto-core.ModelManager+getFactory) ⇒ <code>Factory</code>
            * [.getSerializer()](#module_concerto-core.ModelManager+getSerializer) ⇒ <code>Serializer</code>
            * [.getDecoratorFactories()](#module_concerto-core.ModelManager+getDecoratorFactories) ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
            * [.addDecoratorFactory(factory)](#module_concerto-core.ModelManager+addDecoratorFactory)
            * [.derivesFrom(fqt1, fqt2)](#module_concerto-core.ModelManager+derivesFrom) ⇒ <code>boolean</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.ModelManager.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.SecurityException](#module_concerto-core.SecurityException) ⇐ <code>BaseException</code>
        * [new SecurityException(message)](#new_module_concerto-core.SecurityException_new)
    * [.Serializer](#module_concerto-core.Serializer)
        * [new Serializer(factory, modelManager, options)](#new_module_concerto-core.Serializer_new)
        * _instance_
            * [.setDefaultOptions(newDefaultOptions)](#module_concerto-core.Serializer+setDefaultOptions)
            * [.toJSON(resource, [options])](#module_concerto-core.Serializer+toJSON) ⇒ <code>Object</code>
            * [.fromJSON(jsonObject, options)](#module_concerto-core.Serializer+fromJSON) ⇒ <code>Resource</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.Serializer.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.AssetDeclaration](#module_concerto-core.AssetDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new AssetDeclaration(modelFile, ast)](#new_module_concerto-core.AssetDeclaration_new)
        * [.Symbol.hasInstance(object)](#module_concerto-core.AssetDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * *[.ClassDeclaration](#module_concerto-core.ClassDeclaration)*
        * *[new ClassDeclaration(modelFile, ast)](#new_module_concerto-core.ClassDeclaration_new)*
        * _instance_
            * *[._resolveSuperType()](#module_concerto-core.ClassDeclaration+_resolveSuperType) ⇒ <code>ClassDeclaration</code>*
            * *[.isAbstract()](#module_concerto-core.ClassDeclaration+isAbstract) ⇒ <code>boolean</code>*
            * *[.isEnum()](#module_concerto-core.ClassDeclaration+isEnum) ⇒ <code>boolean</code>*
            * *[.isConcept()](#module_concerto-core.ClassDeclaration+isConcept) ⇒ <code>boolean</code>*
            * *[.isEvent()](#module_concerto-core.ClassDeclaration+isEvent) ⇒ <code>boolean</code>*
            * *[.getName()](#module_concerto-core.ClassDeclaration+getName) ⇒ <code>string</code>*
            * *[.getNamespace()](#module_concerto-core.ClassDeclaration+getNamespace) ⇒ <code>String</code>*
            * *[.getFullyQualifiedName()](#module_concerto-core.ClassDeclaration+getFullyQualifiedName) ⇒ <code>string</code>*
            * *[.isIdentified()](#module_concerto-core.ClassDeclaration+isIdentified) ⇒ <code>Boolean</code>*
            * *[.isSystemIdentified()](#module_concerto-core.ClassDeclaration+isSystemIdentified) ⇒ <code>Boolean</code>*
            * *[.isExplicitlyIdentified()](#module_concerto-core.ClassDeclaration+isExplicitlyIdentified) ⇒ <code>Boolean</code>*
            * *[.getIdentifierFieldName()](#module_concerto-core.ClassDeclaration+getIdentifierFieldName) ⇒ <code>string</code>*
            * *[.getOwnProperty(name)](#module_concerto-core.ClassDeclaration+getOwnProperty) ⇒ <code>Property</code>*
            * *[.getOwnProperties()](#module_concerto-core.ClassDeclaration+getOwnProperties) ⇒ <code>Array.&lt;Property&gt;</code>*
            * *[.getSuperType()](#module_concerto-core.ClassDeclaration+getSuperType) ⇒ <code>string</code>*
            * *[.getSuperTypeDeclaration()](#module_concerto-core.ClassDeclaration+getSuperTypeDeclaration) ⇒ <code>ClassDeclaration</code>*
            * *[.getAssignableClassDeclarations()](#module_concerto-core.ClassDeclaration+getAssignableClassDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
            * *[.getAllSuperTypeDeclarations()](#module_concerto-core.ClassDeclaration+getAllSuperTypeDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
            * *[.getProperty(name)](#module_concerto-core.ClassDeclaration+getProperty) ⇒ <code>Property</code>*
            * *[.getProperties()](#module_concerto-core.ClassDeclaration+getProperties) ⇒ <code>Array.&lt;Property&gt;</code>*
            * *[.getNestedProperty(propertyPath)](#module_concerto-core.ClassDeclaration+getNestedProperty) ⇒ <code>Property</code>*
            * *[.toString()](#module_concerto-core.ClassDeclaration+toString) ⇒ <code>String</code>*
        * _static_
            * *[.Symbol.hasInstance(object)](#module_concerto-core.ClassDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>*
    * [.ConceptDeclaration](#module_concerto-core.ConceptDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new ConceptDeclaration(modelFile, ast)](#new_module_concerto-core.ConceptDeclaration_new)
        * _instance_
            * [.isConcept()](#module_concerto-core.ConceptDeclaration+isConcept) ⇒ <code>boolean</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.ConceptDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.Decorator](#module_concerto-core.Decorator)
        * [new Decorator(parent, ast)](#new_module_concerto-core.Decorator_new)
        * [.getParent()](#module_concerto-core.Decorator+getParent) ⇒ <code>ClassDeclaration</code> \| <code>Property</code>
        * [.getName()](#module_concerto-core.Decorator+getName) ⇒ <code>string</code>
        * [.getArguments()](#module_concerto-core.Decorator+getArguments) ⇒ <code>Array.&lt;object&gt;</code>
    * [.DecoratorFactory](#module_concerto-core.DecoratorFactory)
        * *[.newDecorator(parent, ast)](#module_concerto-core.DecoratorFactory+newDecorator) ⇒ <code>Decorator</code>*
    * [.EnumDeclaration](#module_concerto-core.EnumDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new EnumDeclaration(modelFile, ast)](#new_module_concerto-core.EnumDeclaration_new)
        * _instance_
            * [.isEnum()](#module_concerto-core.EnumDeclaration+isEnum) ⇒ <code>boolean</code>
            * [.toString()](#module_concerto-core.EnumDeclaration+toString) ⇒ <code>String</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.EnumDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.EnumValueDeclaration](#module_concerto-core.EnumValueDeclaration) ⇐ <code>Property</code>
        * [new EnumValueDeclaration(parent, ast)](#new_module_concerto-core.EnumValueDeclaration_new)
        * [.Symbol.hasInstance(object)](#module_concerto-core.EnumValueDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.EventDeclaration](#module_concerto-core.EventDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new EventDeclaration(modelFile, ast)](#new_module_concerto-core.EventDeclaration_new)
        * _instance_
            * [.isEvent()](#module_concerto-core.EventDeclaration+isEvent) ⇒ <code>boolean</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.EventDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * *[.IdentifiedDeclaration](#module_concerto-core.IdentifiedDeclaration) ⇐ <code>ClassDeclaration</code>*
        * *[new IdentifiedDeclaration(modelFile, ast)](#new_module_concerto-core.IdentifiedDeclaration_new)*
        * *[.Symbol.hasInstance(object)](#module_concerto-core.IdentifiedDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>*
    * [.Introspector](#module_concerto-core.Introspector)
        * [new Introspector(modelManager)](#new_module_concerto-core.Introspector_new)
        * [.getClassDeclarations()](#module_concerto-core.Introspector+getClassDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
        * [.getClassDeclaration(fullyQualifiedTypeName)](#module_concerto-core.Introspector+getClassDeclaration) ⇒ <code>ClassDeclaration</code>
    * [.ModelFile](#module_concerto-core.ModelFile)
        * [new ModelFile(modelManager, definitions, [fileName])](#new_module_concerto-core.ModelFile_new)
        * _instance_
            * [.isSystemModelFile()](#module_concerto-core.ModelFile+isSystemModelFile) ⇒ <code>Boolean</code>
            * [.isExternal()](#module_concerto-core.ModelFile+isExternal) ⇒ <code>boolean</code>
            * [.getModelManager()](#module_concerto-core.ModelFile+getModelManager) ⇒ <code>ModelManager</code>
            * [.getImports()](#module_concerto-core.ModelFile+getImports) ⇒ <code>Array.&lt;string&gt;</code>
            * [.isDefined(type)](#module_concerto-core.ModelFile+isDefined) ⇒ <code>boolean</code>
            * [.getLocalType(type)](#module_concerto-core.ModelFile+getLocalType) ⇒ <code>ClassDeclaration</code>
            * [.getAssetDeclaration(name)](#module_concerto-core.ModelFile+getAssetDeclaration) ⇒ <code>AssetDeclaration</code>
            * [.getTransactionDeclaration(name)](#module_concerto-core.ModelFile+getTransactionDeclaration) ⇒ <code>TransactionDeclaration</code>
            * [.getEventDeclaration(name)](#module_concerto-core.ModelFile+getEventDeclaration) ⇒ <code>EventDeclaration</code>
            * [.getParticipantDeclaration(name)](#module_concerto-core.ModelFile+getParticipantDeclaration) ⇒ <code>ParticipantDeclaration</code>
            * [.getNamespace()](#module_concerto-core.ModelFile+getNamespace) ⇒ <code>string</code>
            * [.getName()](#module_concerto-core.ModelFile+getName) ⇒ <code>string</code>
            * [.getAssetDeclarations()](#module_concerto-core.ModelFile+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
            * [.getTransactionDeclarations()](#module_concerto-core.ModelFile+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
            * [.getEventDeclarations()](#module_concerto-core.ModelFile+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
            * [.getParticipantDeclarations()](#module_concerto-core.ModelFile+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
            * [.getConceptDeclarations()](#module_concerto-core.ModelFile+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
            * [.getEnumDeclarations()](#module_concerto-core.ModelFile+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
            * [.getDeclarations(type)](#module_concerto-core.ModelFile+getDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
            * [.getAllDeclarations()](#module_concerto-core.ModelFile+getAllDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
            * [.getDefinitions()](#module_concerto-core.ModelFile+getDefinitions) ⇒ <code>string</code>
            * [.getConcertoVersion()](#module_concerto-core.ModelFile+getConcertoVersion) ⇒ <code>string</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.ModelFile.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.ParticipantDeclaration](#module_concerto-core.ParticipantDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new ParticipantDeclaration(modelFile, ast)](#new_module_concerto-core.ParticipantDeclaration_new)
        * [.Symbol.hasInstance(object)](#module_concerto-core.ParticipantDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.Property](#module_concerto-core.Property)
        * [new Property(parent, ast)](#new_module_concerto-core.Property_new)
        * _instance_
            * [.getParent()](#module_concerto-core.Property+getParent) ⇒ <code>ClassDeclaration</code>
            * [.getName()](#module_concerto-core.Property+getName) ⇒ <code>string</code>
            * [.getType()](#module_concerto-core.Property+getType) ⇒ <code>string</code>
            * [.isOptional()](#module_concerto-core.Property+isOptional) ⇒ <code>boolean</code>
            * [.getFullyQualifiedTypeName()](#module_concerto-core.Property+getFullyQualifiedTypeName) ⇒ <code>string</code>
            * [.getFullyQualifiedName()](#module_concerto-core.Property+getFullyQualifiedName) ⇒ <code>string</code>
            * [.getNamespace()](#module_concerto-core.Property+getNamespace) ⇒ <code>string</code>
            * [.isArray()](#module_concerto-core.Property+isArray) ⇒ <code>boolean</code>
            * [.isTypeEnum()](#module_concerto-core.Property+isTypeEnum) ⇒ <code>boolean</code>
            * [.isPrimitive()](#module_concerto-core.Property+isPrimitive) ⇒ <code>boolean</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.Property.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.RelationshipDeclaration](#module_concerto-core.RelationshipDeclaration) ⇐ <code>Property</code>
        * [new RelationshipDeclaration(parent, ast)](#new_module_concerto-core.RelationshipDeclaration_new)
        * _instance_
            * [.toString()](#module_concerto-core.RelationshipDeclaration+toString) ⇒ <code>String</code>
        * _static_
            * [.Symbol.hasInstance(object)](#module_concerto-core.RelationshipDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.TransactionDeclaration](#module_concerto-core.TransactionDeclaration) ⇐ <code>ClassDeclaration</code>
        * [new TransactionDeclaration(modelFile, ast)](#new_module_concerto-core.TransactionDeclaration_new)
        * [.Symbol.hasInstance(object)](#module_concerto-core.TransactionDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>
    * [.Resource](#module_concerto-core.Resource) ⇐ <code>Identifiable</code>
        * [new Resource(modelManager, classDeclaration, ns, type, id, timestamp)](#new_module_concerto-core.Resource_new)
        * [.toString()](#module_concerto-core.Resource+toString) ⇒ <code>String</code>
        * [.isResource()](#module_concerto-core.Resource+isResource) ⇒ <code>boolean</code>
        * [.isConcept()](#module_concerto-core.Resource+isConcept) ⇒ <code>boolean</code>
        * [.isIdentifiable()](#module_concerto-core.Resource+isIdentifiable) ⇒ <code>boolean</code>
        * [.toJSON()](#module_concerto-core.Resource+toJSON) ⇒ <code>Object</code>

<a name="module_concerto-core.BaseException"></a>

### concerto-core.BaseException ⇐ <code>Error</code>
A base class for all Concerto exceptions

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Error</code>  
<a name="new_module_concerto-core.BaseException_new"></a>

#### new BaseException(message, component)
Create the BaseException.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The exception message. |
| component | <code>string</code> | The optional component which throws this error. |

<a name="module_concerto-core.BaseFileException"></a>

### concerto-core.BaseFileException ⇐ <code>BaseException</code>
Exception throws when a Concerto file is semantically invalid

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>BaseException</code>  
**See**: [BaseException](BaseException)  

* [.BaseFileException](#module_concerto-core.BaseFileException) ⇐ <code>BaseException</code>
    * [new BaseFileException(message, fileLocation, fullMessage, fileName, component)](#new_module_concerto-core.BaseFileException_new)
    * [.getFileLocation()](#module_concerto-core.BaseFileException+getFileLocation) ⇒ <code>string</code>
    * [.getShortMessage()](#module_concerto-core.BaseFileException+getShortMessage) ⇒ <code>string</code>
    * [.getFileName()](#module_concerto-core.BaseFileException+getFileName) ⇒ <code>string</code>

<a name="new_module_concerto-core.BaseFileException_new"></a>

#### new BaseFileException(message, fileLocation, fullMessage, fileName, component)
Create an BaseFileException


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | the message for the exception |
| fileLocation | <code>string</code> | the optional file location associated with the exception |
| fullMessage | <code>string</code> | the optional full message text |
| fileName | <code>string</code> | the optional file name |
| component | <code>string</code> | the optional component which throws this error |

<a name="module_concerto-core.BaseFileException+getFileLocation"></a>

#### baseFileException.getFileLocation() ⇒ <code>string</code>
Returns the file location associated with the exception or null

**Kind**: instance method of [<code>BaseFileException</code>](#module_concerto-core.BaseFileException)  
**Returns**: <code>string</code> - the optional location associated with the exception  
<a name="module_concerto-core.BaseFileException+getShortMessage"></a>

#### baseFileException.getShortMessage() ⇒ <code>string</code>
Returns the error message without the location of the error

**Kind**: instance method of [<code>BaseFileException</code>](#module_concerto-core.BaseFileException)  
**Returns**: <code>string</code> - the error message  
<a name="module_concerto-core.BaseFileException+getFileName"></a>

#### baseFileException.getFileName() ⇒ <code>string</code>
Returns the fileName for the error

**Kind**: instance method of [<code>BaseFileException</code>](#module_concerto-core.BaseFileException)  
**Returns**: <code>string</code> - the file name or null  
<a name="module_concerto-core.Concerto"></a>

### concerto-core.Concerto
Runtime API for Concerto.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Concerto](#module_concerto-core.Concerto)
    * [new Concerto(modelManager)](#new_module_concerto-core.Concerto_new)
    * [.validate(obj, [options])](#module_concerto-core.Concerto+validate)
    * [.getModelManager()](#module_concerto-core.Concerto+getModelManager) ⇒ <code>\*</code>
    * [.isObject(obj)](#module_concerto-core.Concerto+isObject) ⇒ <code>boolean</code>
    * [.getTypeDeclaration(obj)](#module_concerto-core.Concerto+getTypeDeclaration) ⇒ <code>\*</code>
    * [.getIdentifier(obj)](#module_concerto-core.Concerto+getIdentifier) ⇒ <code>string</code>
    * [.isIdentifiable(obj)](#module_concerto-core.Concerto+isIdentifiable) ⇒ <code>boolean</code>
    * [.isRelationship(obj)](#module_concerto-core.Concerto+isRelationship) ⇒ <code>boolean</code>
    * [.setIdentifier(obj, id)](#module_concerto-core.Concerto+setIdentifier) ⇒ <code>\*</code>
    * [.getFullyQualifiedIdentifier(obj)](#module_concerto-core.Concerto+getFullyQualifiedIdentifier) ⇒ <code>string</code>
    * [.toURI(obj)](#module_concerto-core.Concerto+toURI) ⇒ <code>string</code>
    * [.fromURI(uri)](#module_concerto-core.Concerto+fromURI) ⇒ <code>\*</code>
    * [.getType(obj)](#module_concerto-core.Concerto+getType) ⇒ <code>string</code>
    * [.getNamespace(obj)](#module_concerto-core.Concerto+getNamespace) ⇒ <code>string</code>

<a name="new_module_concerto-core.Concerto_new"></a>

#### new Concerto(modelManager)
Create a Concerto instance.


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>\*</code> | The this.modelManager to use for validation etc. |

<a name="module_concerto-core.Concerto+validate"></a>

#### concerto.validate(obj, [options])
Validates the instance against its model.

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Throws**:

- <code>Error</code> - if the instance if invalid with respect to the model


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |
| [options] | <code>\*</code> | the validation options |

<a name="module_concerto-core.Concerto+getModelManager"></a>

#### concerto.getModelManager() ⇒ <code>\*</code>
Returns the model manager

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>\*</code> - the model manager associated with this Concerto class  
<a name="module_concerto-core.Concerto+isObject"></a>

#### concerto.isObject(obj) ⇒ <code>boolean</code>
Returns true if the input object is a Concerto object

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>boolean</code> - true if the object has a $class attribute  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+getTypeDeclaration"></a>

#### concerto.getTypeDeclaration(obj) ⇒ <code>\*</code>
Returns the ClassDeclaration for an object, or throws an exception

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>\*</code> - the ClassDeclaration for the type  
**Throw**: <code>Error</code> an error if the object does not have a $class attribute  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+getIdentifier"></a>

#### concerto.getIdentifier(obj) ⇒ <code>string</code>
Gets the identifier for an object

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>string</code> - The identifier for this object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+isIdentifiable"></a>

#### concerto.isIdentifiable(obj) ⇒ <code>boolean</code>
Returns true if the object has an identifier

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>boolean</code> - is the object has been defined with an identifier in the model  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+isRelationship"></a>

#### concerto.isRelationship(obj) ⇒ <code>boolean</code>
Returns true if the object is a relationship. Relationships are strings
of the form: 'resource:org.accordproject.Order#001' (a relationship)
to the 'Order' identifiable, with the id 001.

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>boolean</code> - true if the object is a relationship  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+setIdentifier"></a>

#### concerto.setIdentifier(obj, id) ⇒ <code>\*</code>
Set the identifier for an object. This method does *not* mutate the
input object, use the return object.

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>\*</code> - the input object with the identifier set  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |
| id | <code>string</code> | the new identifier |

<a name="module_concerto-core.Concerto+getFullyQualifiedIdentifier"></a>

#### concerto.getFullyQualifiedIdentifier(obj) ⇒ <code>string</code>
Returns the fully qualified identifier for an object

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>string</code> - the fully qualified identifier  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+toURI"></a>

#### concerto.toURI(obj) ⇒ <code>string</code>
Returns a URI for an object

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>string</code> - the URI for the object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+fromURI"></a>

#### concerto.fromURI(uri) ⇒ <code>\*</code>
Parses a resource URI into typeDeclaration and id components.

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>\*</code> - an object with typeDeclaration and id attributes  
**Throws**:

- <code>Error</code> if the URI is invalid or the type does not exist
in the model manager


| Param | Type | Description |
| --- | --- | --- |
| uri | <code>string</code> | the input URI |

<a name="module_concerto-core.Concerto+getType"></a>

#### concerto.getType(obj) ⇒ <code>string</code>
Returns the short type name

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>string</code> - the short type name  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Concerto+getNamespace"></a>

#### concerto.getNamespace(obj) ⇒ <code>string</code>
Returns the namespace for the object

**Kind**: instance method of [<code>Concerto</code>](#module_concerto-core.Concerto)  
**Returns**: <code>string</code> - the namespace  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | the input object |

<a name="module_concerto-core.Factory"></a>

### concerto-core.Factory
Use the Factory to create instances of Resource: transactions, participants
and assets.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Factory](#module_concerto-core.Factory)
    * [new Factory(modelManager)](#new_module_concerto-core.Factory_new)
    * _instance_
        * [.newResource(ns, type, [id], [options])](#module_concerto-core.Factory+newResource) ⇒ <code>Resource</code>
        * [.newConcept(ns, type, [id], [options])](#module_concerto-core.Factory+newConcept) ⇒ <code>Resource</code>
        * [.newRelationship(ns, type, id)](#module_concerto-core.Factory+newRelationship) ⇒ <code>Relationship</code>
        * [.newTransaction(ns, type, [id], [options])](#module_concerto-core.Factory+newTransaction) ⇒ <code>Resource</code>
        * [.newEvent(ns, type, [id], [options])](#module_concerto-core.Factory+newEvent) ⇒ <code>Resource</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.Factory.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.Factory_new"></a>

#### new Factory(modelManager)
Create the factory.


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | The ModelManager to use for this registry |

<a name="module_concerto-core.Factory+newResource"></a>

#### factory.newResource(ns, type, [id], [options]) ⇒ <code>Resource</code>
Create a new Resource with a given namespace, type name and id

**Kind**: instance method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>Resource</code> - the new instance  
**Throws**:

- <code>TypeNotFoundException</code> if the type is not registered with the ModelManager


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>String</code> | the namespace of the Resource |
| type | <code>String</code> | the type of the Resource |
| [id] | <code>String</code> | an optional string identifier |
| [options] | <code>Object</code> | an optional set of options |
| [options.disableValidation] | <code>boolean</code> | pass true if you want the factory to return a [Resource](Resource) instead of a [ValidatedResource](ValidatedResource). Defaults to false. |
| [options.generate] | <code>String</code> | Pass one of: <dl> <dt>sample</dt><dd>return a resource instance with generated sample data.</dd> <dt>empty</dt><dd>return a resource instance with empty property values.</dd></dl> |
| [options.includeOptionalFields] | <code>boolean</code> | if <code>options.generate</code> is specified, whether optional fields should be generated. |

<a name="module_concerto-core.Factory+newConcept"></a>

#### factory.newConcept(ns, type, [id], [options]) ⇒ <code>Resource</code>
Create a new Concept with a given namespace and type name

**Kind**: instance method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>Resource</code> - the new instance  
**Throws**:

- <code>TypeNotFoundException</code> if the type is not registered with the ModelManager


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>String</code> | the namespace of the Concept |
| type | <code>String</code> | the type of the Concept |
| [id] | <code>String</code> | an optional string identifier |
| [options] | <code>Object</code> | an optional set of options |
| [options.disableValidation] | <code>boolean</code> | pass true if you want the factory to return a [Concept](Concept) instead of a [ValidatedConcept](ValidatedConcept). Defaults to false. |
| [options.generate] | <code>String</code> | Pass one of: <dl> <dt>sample</dt><dd>return a resource instance with generated sample data.</dd> <dt>empty</dt><dd>return a resource instance with empty property values.</dd></dl> |
| [options.includeOptionalFields] | <code>boolean</code> | if <code>options.generate</code> is specified, whether optional fields should be generated. |

<a name="module_concerto-core.Factory+newRelationship"></a>

#### factory.newRelationship(ns, type, id) ⇒ <code>Relationship</code>
Create a new Relationship with a given namespace, type and identifier.
A relationship is a typed pointer to an instance. I.e the relationship
with `namespace = 'org.example'`, `type = 'Vehicle'` and `id = 'ABC' creates`
a pointer that points at an instance of org.example.Vehicle with the id
ABC.

**Kind**: instance method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>Relationship</code> - - the new relationship instance  
**Throws**:

- <code>TypeNotFoundException</code> if the type is not registered with the ModelManager


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>String</code> | the namespace of the Resource |
| type | <code>String</code> | the type of the Resource |
| id | <code>String</code> | the identifier |

<a name="module_concerto-core.Factory+newTransaction"></a>

#### factory.newTransaction(ns, type, [id], [options]) ⇒ <code>Resource</code>
Create a new transaction object. The identifier of the transaction is set to a UUID.

**Kind**: instance method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>Resource</code> - A resource for the new transaction.  

| Param | Type | Description |
| --- | --- | --- |
| ns | <code>String</code> | the namespace of the transaction. |
| type | <code>String</code> | the type of the transaction. |
| [id] | <code>String</code> | an optional string identifier |
| [options] | <code>Object</code> | an optional set of options |
| [options.generate] | <code>String</code> | Pass one of: <dl> <dt>sample</dt><dd>return a resource instance with generated sample data.</dd> <dt>empty</dt><dd>return a resource instance with empty property values.</dd></dl> |
| [options.includeOptionalFields] | <code>boolean</code> | if <code>options.generate</code> is specified, whether optional fields should be generated. |

<a name="module_concerto-core.Factory+newEvent"></a>

#### factory.newEvent(ns, type, [id], [options]) ⇒ <code>Resource</code>
Create a new event object. The identifier of the event is
set to a UUID.

**Kind**: instance method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>Resource</code> - A resource for the new event.  

| Param | Type | Description |
| --- | --- | --- |
| ns | <code>String</code> | the namespace of the event. |
| type | <code>String</code> | the type of the event. |
| [id] | <code>String</code> | an optional string identifier |
| [options] | <code>Object</code> | an optional set of options |
| [options.generate] | <code>String</code> | Pass one of: <dl> <dt>sample</dt><dd>return a resource instance with generated sample data.</dd> <dt>empty</dt><dd>return a resource instance with empty property values.</dd></dl> |
| [options.includeOptionalFields] | <code>boolean</code> | if <code>options.generate</code> is specified, whether optional fields should be generated. |

<a name="module_concerto-core.Factory.Symbol.hasInstance"></a>

#### Factory.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a Factory  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.ModelLoader"></a>

### concerto-core.ModelLoader
Create a ModelManager from model files, with an optional system model.

If a ctoFile is not provided, the Accord Project system model is used.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.ModelLoader](#module_concerto-core.ModelLoader)
    * [.loadModelManager(ctoFiles, options)](#module_concerto-core.ModelLoader.loadModelManager) ⇒ <code>object</code>
    * [.loadModelManagerFromModelFiles(modelFiles, [fileNames], options)](#module_concerto-core.ModelLoader.loadModelManagerFromModelFiles) ⇒ <code>object</code>

<a name="module_concerto-core.ModelLoader.loadModelManager"></a>

#### ModelLoader.loadModelManager(ctoFiles, options) ⇒ <code>object</code>
Load models in a new model manager

**Kind**: static method of [<code>ModelLoader</code>](#module_concerto-core.ModelLoader)  
**Returns**: <code>object</code> - the model manager  

| Param | Type | Description |
| --- | --- | --- |
| ctoFiles | <code>Array.&lt;string&gt;</code> | the CTO files (can be local file paths or URLs) |
| options | <code>object</code> | optional parameters |
| [options.offline] | <code>boolean</code> | do not resolve external models |
| [options.utcOffset] | <code>number</code> | UTC Offset for this execution |

<a name="module_concerto-core.ModelLoader.loadModelManagerFromModelFiles"></a>

#### ModelLoader.loadModelManagerFromModelFiles(modelFiles, [fileNames], options) ⇒ <code>object</code>
Load system and models in a new model manager from model files objects

**Kind**: static method of [<code>ModelLoader</code>](#module_concerto-core.ModelLoader)  
**Returns**: <code>object</code> - the model manager  

| Param | Type | Description |
| --- | --- | --- |
| modelFiles | <code>Array.&lt;object&gt;</code> | An array of Concerto files as strings or ModelFile objects. |
| [fileNames] | <code>Array.&lt;string&gt;</code> | An optional array of file names to associate with the model files |
| options | <code>object</code> | optional parameters |
| [options.offline] | <code>boolean</code> | do not resolve external models |
| [options.utcOffset] | <code>number</code> | UTC Offset for this execution |

<a name="module_concerto-core.ModelManager"></a>

### concerto-core.ModelManager
Manages the Concerto model files.

The structure of [Resource](Resource)s (Assets, Transactions, Participants) is modelled
in a set of Concerto files. The contents of these files are managed
by the [ModelManager](ModelManager). Each Concerto file has a single namespace and contains
a set of asset, transaction and participant type definitions.

Concerto applications load their Concerto files and then call the [addModelFile](ModelManager#addModelFile)
method to register the Concerto file(s) with the ModelManager.

Use the [Concerto](Concerto) class to validate instances.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.ModelManager](#module_concerto-core.ModelManager)
    * [new ModelManager(options)](#new_module_concerto-core.ModelManager_new)
    * _instance_
        * [.validateModelFile(modelFile, fileName)](#module_concerto-core.ModelManager+validateModelFile)
        * [.addModelFile(modelFile, fileName, [disableValidation])](#module_concerto-core.ModelManager+addModelFile) ⇒ <code>Object</code>
        * [.updateModelFile(modelFile, fileName, [disableValidation])](#module_concerto-core.ModelManager+updateModelFile) ⇒ <code>Object</code>
        * [.deleteModelFile(namespace)](#module_concerto-core.ModelManager+deleteModelFile)
        * [.addModelFiles(modelFiles, [fileNames], [disableValidation])](#module_concerto-core.ModelManager+addModelFiles) ⇒ <code>Array.&lt;Object&gt;</code>
        * [.validateModelFiles()](#module_concerto-core.ModelManager+validateModelFiles)
        * [.updateExternalModels([options], [modelFileDownloader])](#module_concerto-core.ModelManager+updateExternalModels) ⇒ <code>Promise</code>
        * [.writeModelsToFileSystem(path, [options])](#module_concerto-core.ModelManager+writeModelsToFileSystem)
        * [.getModels([options])](#module_concerto-core.ModelManager+getModels) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
        * [.clearModelFiles()](#module_concerto-core.ModelManager+clearModelFiles)
        * [.getNamespaces()](#module_concerto-core.ModelManager+getNamespaces) ⇒ <code>Array.&lt;string&gt;</code>
        * [.getAssetDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
        * [.getTransactionDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
        * [.getEventDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
        * [.getParticipantDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
        * [.getEnumDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
        * [.getConceptDeclarations(includeSystemType)](#module_concerto-core.ModelManager+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
        * [.getFactory()](#module_concerto-core.ModelManager+getFactory) ⇒ <code>Factory</code>
        * [.getSerializer()](#module_concerto-core.ModelManager+getSerializer) ⇒ <code>Serializer</code>
        * [.getDecoratorFactories()](#module_concerto-core.ModelManager+getDecoratorFactories) ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
        * [.addDecoratorFactory(factory)](#module_concerto-core.ModelManager+addDecoratorFactory)
        * [.derivesFrom(fqt1, fqt2)](#module_concerto-core.ModelManager+derivesFrom) ⇒ <code>boolean</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.ModelManager.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.ModelManager_new"></a>

#### new ModelManager(options)
Create the ModelManager.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Serializer options |

<a name="module_concerto-core.ModelManager+validateModelFile"></a>

#### modelManager.validateModelFile(modelFile, fileName)
Validates a Concerto file (as a string) to the ModelManager.
Concerto files have a single namespace.

Note that if there are dependencies between multiple files the files
must be added in dependency order, or the addModelFiles method can be
used to add a set of files irrespective of dependencies.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>string</code> | The Concerto file as a string |
| fileName | <code>string</code> | an optional file name to associate with the model file |

<a name="module_concerto-core.ModelManager+addModelFile"></a>

#### modelManager.addModelFile(modelFile, fileName, [disableValidation]) ⇒ <code>Object</code>
Adds a Concerto file (as a string) to the ModelManager.
Concerto files have a single namespace. If a Concerto file with the
same namespace has already been added to the ModelManager then it
will be replaced.
Note that if there are dependencies between multiple files the files
must be added in dependency order, or the addModelFiles method can be
used to add a set of files irrespective of dependencies.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>string</code> | The Concerto file as a string |
| fileName | <code>string</code> | an optional file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.ModelManager+updateModelFile"></a>

#### modelManager.updateModelFile(modelFile, fileName, [disableValidation]) ⇒ <code>Object</code>
Updates a Concerto file (as a string) on the ModelManager.
Concerto files have a single namespace. If a Concerto file with the
same namespace has already been added to the ModelManager then it
will be replaced.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>string</code> | The Concerto file as a string |
| fileName | <code>string</code> | an optional file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.ModelManager+deleteModelFile"></a>

#### modelManager.deleteModelFile(namespace)
Remove the Concerto file for a given namespace

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | The namespace of the model file to delete. |

<a name="module_concerto-core.ModelManager+addModelFiles"></a>

#### modelManager.addModelFiles(modelFiles, [fileNames], [disableValidation]) ⇒ <code>Array.&lt;Object&gt;</code>
Add a set of Concerto files to the model manager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;Object&gt;</code> - The newly added model files (internal).  

| Param | Type | Description |
| --- | --- | --- |
| modelFiles | <code>Array.&lt;object&gt;</code> | An array of Concerto files as strings or ModelFile objects. |
| [fileNames] | <code>Array.&lt;string&gt;</code> | An optional array of file names to associate with the model files |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.ModelManager+validateModelFiles"></a>

#### modelManager.validateModelFiles()
Validates all models files in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
<a name="module_concerto-core.ModelManager+updateExternalModels"></a>

#### modelManager.updateExternalModels([options], [modelFileDownloader]) ⇒ <code>Promise</code>
Downloads all ModelFiles that are external dependencies and adds or
updates them in this ModelManager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Promise</code> - a promise when the download and update operation is completed.  
**Throws**:

- <code>IllegalModelException</code> if the models fail validation


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object passed to ModelFileLoaders |
| [modelFileDownloader] | <code>ModelFileDownloader</code> | an optional ModelFileDownloader |

<a name="module_concerto-core.ModelManager+writeModelsToFileSystem"></a>

#### modelManager.writeModelsToFileSystem(path, [options])
Write all models in this model manager to the specified path in the file system

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | to a local directory |
| [options] | <code>Object</code> | Options object |
| options.includeExternalModels | <code>boolean</code> | If true, external models are written to the file system. Defaults to true |

<a name="module_concerto-core.ModelManager+getModels"></a>

#### modelManager.getModels([options]) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
Gets all the Concerto models

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;{name:string, content:string}&gt;</code> - the name and content of each CTO file  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object |
| options.includeExternalModels | <code>boolean</code> | If true, external models are written to the file system. Defaults to true |

<a name="module_concerto-core.ModelManager+clearModelFiles"></a>

#### modelManager.clearModelFiles()
Remove all registered Concerto files

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
<a name="module_concerto-core.ModelManager+getNamespaces"></a>

#### modelManager.getNamespaces() ⇒ <code>Array.&lt;string&gt;</code>
Get the namespaces registered with the ModelManager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - namespaces - the namespaces that have been registered.  
<a name="module_concerto-core.ModelManager+getAssetDeclarations"></a>

#### modelManager.getAssetDeclarations(includeSystemType) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
Get the AssetDeclarations defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;AssetDeclaration&gt;</code> - the AssetDeclarations defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getTransactionDeclarations"></a>

#### modelManager.getTransactionDeclarations(includeSystemType) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
Get the TransactionDeclarations defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;TransactionDeclaration&gt;</code> - the TransactionDeclarations defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getEventDeclarations"></a>

#### modelManager.getEventDeclarations(includeSystemType) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
Get the EventDeclarations defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;EventDeclaration&gt;</code> - the EventDeclaration defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getParticipantDeclarations"></a>

#### modelManager.getParticipantDeclarations(includeSystemType) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
Get the ParticipantDeclarations defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;ParticipantDeclaration&gt;</code> - the ParticipantDeclaration defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getEnumDeclarations"></a>

#### modelManager.getEnumDeclarations(includeSystemType) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
Get the EnumDeclarations defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;EnumDeclaration&gt;</code> - the EnumDeclaration defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getConceptDeclarations"></a>

#### modelManager.getConceptDeclarations(includeSystemType) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
Get the Concepts defined in this model manager

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;ConceptDeclaration&gt;</code> - the ConceptDeclaration defined in the model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeSystemType | <code>Boolean</code> | <code>true</code> | Include the decalarations of system type in returned data |

<a name="module_concerto-core.ModelManager+getFactory"></a>

#### modelManager.getFactory() ⇒ <code>Factory</code>
Get a factory for creating new instances of types defined in this model manager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Factory</code> - A factory for creating new instances of types defined in this model manager.  
<a name="module_concerto-core.ModelManager+getSerializer"></a>

#### modelManager.getSerializer() ⇒ <code>Serializer</code>
Get a serializer for serializing instances of types defined in this model manager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Serializer</code> - A serializer for serializing instances of types defined in this model manager.  
<a name="module_concerto-core.ModelManager+getDecoratorFactories"></a>

#### modelManager.getDecoratorFactories() ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
Get the decorator factories for this model manager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Array.&lt;DecoratorFactory&gt;</code> - The decorator factories for this model manager.  
<a name="module_concerto-core.ModelManager+addDecoratorFactory"></a>

#### modelManager.addDecoratorFactory(factory)
Add a decorator factory to this model manager.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>DecoratorFactory</code> | The decorator factory to add to this model manager. |

<a name="module_concerto-core.ModelManager+derivesFrom"></a>

#### modelManager.derivesFrom(fqt1, fqt2) ⇒ <code>boolean</code>
Checks if this fully qualified type name is derived from another.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>boolean</code> - True if this instance is an instance of the specified fully
qualified type name, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| fqt1 | <code>String</code> | The fully qualified type name to check. |
| fqt2 | <code>String</code> | The fully qualified type name it is may be derived from. |

<a name="module_concerto-core.ModelManager.Symbol.hasInstance"></a>

#### ModelManager.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a ModelManager  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.SecurityException"></a>

### concerto-core.SecurityException ⇐ <code>BaseException</code>
Class representing a security exception

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>BaseException</code>  
**See**: See [BaseException](BaseException)  
<a name="new_module_concerto-core.SecurityException_new"></a>

#### new SecurityException(message)
Create the SecurityException.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The exception message. |

<a name="module_concerto-core.Serializer"></a>

### concerto-core.Serializer
Serialize Resources instances to/from various formats for long-term storage
(e.g. on the blockchain).

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Serializer](#module_concerto-core.Serializer)
    * [new Serializer(factory, modelManager, options)](#new_module_concerto-core.Serializer_new)
    * _instance_
        * [.setDefaultOptions(newDefaultOptions)](#module_concerto-core.Serializer+setDefaultOptions)
        * [.toJSON(resource, [options])](#module_concerto-core.Serializer+toJSON) ⇒ <code>Object</code>
        * [.fromJSON(jsonObject, options)](#module_concerto-core.Serializer+fromJSON) ⇒ <code>Resource</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.Serializer.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.Serializer_new"></a>

#### new Serializer(factory, modelManager, options)
Create a Serializer.


| Param | Type | Description |
| --- | --- | --- |
| factory | <code>Factory</code> | The Factory to use to create instances |
| modelManager | <code>ModelManager</code> | The ModelManager to use for validation etc. |
| options | <code>object</code> | Serializer options |

<a name="module_concerto-core.Serializer+setDefaultOptions"></a>

#### serializer.setDefaultOptions(newDefaultOptions)
Set the default options for the serializer.

**Kind**: instance method of [<code>Serializer</code>](#module_concerto-core.Serializer)  

| Param | Type | Description |
| --- | --- | --- |
| newDefaultOptions | <code>Object</code> | The new default options for the serializer. |

<a name="module_concerto-core.Serializer+toJSON"></a>

#### serializer.toJSON(resource, [options]) ⇒ <code>Object</code>
<p>
Convert a [Resource](Resource) to a JavaScript object suitable for long-term
peristent storage.
</p>

**Kind**: instance method of [<code>Serializer</code>](#module_concerto-core.Serializer)  
**Returns**: <code>Object</code> - - The Javascript Object that represents the resource  
**Throws**:

- <code>Error</code> - throws an exception if resource is not an instance of
Resource or fails validation.


| Param | Type | Description |
| --- | --- | --- |
| resource | <code>Resource</code> | The instance to convert to JSON |
| [options] | <code>Object</code> | the optional serialization options. |
| [options.validate] | <code>boolean</code> | validate the structure of the Resource with its model prior to serialization (default to true) |
| [options.convertResourcesToRelationships] | <code>boolean</code> | Convert resources that are specified for relationship fields into relationships, false by default. |
| [options.permitResourcesForRelationships] | <code>boolean</code> | Permit resources in the place of relationships (serializing them as resources), false by default. |
| [options.deduplicateResources] | <code>boolean</code> | Generate $id for resources and if a resources appears multiple times in the object graph only the first instance is serialized in full, subsequent instances are replaced with a reference to the $id |
| [options.convertResourcesToId] | <code>boolean</code> | Convert resources that are specified for relationship fields into their id, false by default. |
| [options.utcOffset] | <code>number</code> | UTC Offset for DateTime values. |

<a name="module_concerto-core.Serializer+fromJSON"></a>

#### serializer.fromJSON(jsonObject, options) ⇒ <code>Resource</code>
Create a [Resource](Resource) from a JavaScript Object representation.
The JavaScript Object should have been created by calling the
[toJSON](Serializer#toJSON) API.

The Resource is populated based on the JavaScript object.

**Kind**: instance method of [<code>Serializer</code>](#module_concerto-core.Serializer)  
**Returns**: <code>Resource</code> - The new populated resource  

| Param | Type | Description |
| --- | --- | --- |
| jsonObject | <code>Object</code> | The JavaScript Object for a Resource |
| options | <code>Object</code> | the optional serialization options |
| options.acceptResourcesForRelationships | <code>boolean</code> | handle JSON objects in the place of strings for relationships, defaults to false. |
| options.validate | <code>boolean</code> | validate the structure of the Resource with its model prior to serialization (default to true) |
| [options.utcOffset] | <code>number</code> | UTC Offset for DateTime values. |

<a name="module_concerto-core.Serializer.Symbol.hasInstance"></a>

#### Serializer.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>Serializer</code>](#module_concerto-core.Serializer)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a Serializer  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.AssetDeclaration"></a>

### concerto-core.AssetDeclaration ⇐ <code>ClassDeclaration</code>
AssetDeclaration defines the schema (aka model or class) for
an Asset. It extends ClassDeclaration which manages a set of
fields, a super-type and the specification of an
identifying field.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See [ClassDeclaration](ClassDeclaration)  

* [.AssetDeclaration](#module_concerto-core.AssetDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new AssetDeclaration(modelFile, ast)](#new_module_concerto-core.AssetDeclaration_new)
    * [.Symbol.hasInstance(object)](#module_concerto-core.AssetDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.AssetDeclaration_new"></a>

#### new AssetDeclaration(modelFile, ast)
Create an AssetDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.AssetDeclaration.Symbol.hasInstance"></a>

#### AssetDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>AssetDeclaration</code>](#module_concerto-core.AssetDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a AssetDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.ClassDeclaration"></a>

### *concerto-core.ClassDeclaration*
ClassDeclaration defines the structure (model/schema) of composite data.
It is composed of a set of Properties, may have an identifying field, and may
have a super-type.
A ClassDeclaration is conceptually owned by a ModelFile which
defines all the classes that are part of a namespace.

**Kind**: static abstract class of [<code>concerto-core</code>](#module_concerto-core)  

* *[.ClassDeclaration](#module_concerto-core.ClassDeclaration)*
    * *[new ClassDeclaration(modelFile, ast)](#new_module_concerto-core.ClassDeclaration_new)*
    * _instance_
        * *[._resolveSuperType()](#module_concerto-core.ClassDeclaration+_resolveSuperType) ⇒ <code>ClassDeclaration</code>*
        * *[.isAbstract()](#module_concerto-core.ClassDeclaration+isAbstract) ⇒ <code>boolean</code>*
        * *[.isEnum()](#module_concerto-core.ClassDeclaration+isEnum) ⇒ <code>boolean</code>*
        * *[.isConcept()](#module_concerto-core.ClassDeclaration+isConcept) ⇒ <code>boolean</code>*
        * *[.isEvent()](#module_concerto-core.ClassDeclaration+isEvent) ⇒ <code>boolean</code>*
        * *[.getName()](#module_concerto-core.ClassDeclaration+getName) ⇒ <code>string</code>*
        * *[.getNamespace()](#module_concerto-core.ClassDeclaration+getNamespace) ⇒ <code>String</code>*
        * *[.getFullyQualifiedName()](#module_concerto-core.ClassDeclaration+getFullyQualifiedName) ⇒ <code>string</code>*
        * *[.isIdentified()](#module_concerto-core.ClassDeclaration+isIdentified) ⇒ <code>Boolean</code>*
        * *[.isSystemIdentified()](#module_concerto-core.ClassDeclaration+isSystemIdentified) ⇒ <code>Boolean</code>*
        * *[.isExplicitlyIdentified()](#module_concerto-core.ClassDeclaration+isExplicitlyIdentified) ⇒ <code>Boolean</code>*
        * *[.getIdentifierFieldName()](#module_concerto-core.ClassDeclaration+getIdentifierFieldName) ⇒ <code>string</code>*
        * *[.getOwnProperty(name)](#module_concerto-core.ClassDeclaration+getOwnProperty) ⇒ <code>Property</code>*
        * *[.getOwnProperties()](#module_concerto-core.ClassDeclaration+getOwnProperties) ⇒ <code>Array.&lt;Property&gt;</code>*
        * *[.getSuperType()](#module_concerto-core.ClassDeclaration+getSuperType) ⇒ <code>string</code>*
        * *[.getSuperTypeDeclaration()](#module_concerto-core.ClassDeclaration+getSuperTypeDeclaration) ⇒ <code>ClassDeclaration</code>*
        * *[.getAssignableClassDeclarations()](#module_concerto-core.ClassDeclaration+getAssignableClassDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
        * *[.getAllSuperTypeDeclarations()](#module_concerto-core.ClassDeclaration+getAllSuperTypeDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
        * *[.getProperty(name)](#module_concerto-core.ClassDeclaration+getProperty) ⇒ <code>Property</code>*
        * *[.getProperties()](#module_concerto-core.ClassDeclaration+getProperties) ⇒ <code>Array.&lt;Property&gt;</code>*
        * *[.getNestedProperty(propertyPath)](#module_concerto-core.ClassDeclaration+getNestedProperty) ⇒ <code>Property</code>*
        * *[.toString()](#module_concerto-core.ClassDeclaration+toString) ⇒ <code>String</code>*
    * _static_
        * *[.Symbol.hasInstance(object)](#module_concerto-core.ClassDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>*

<a name="new_module_concerto-core.ClassDeclaration_new"></a>

#### *new ClassDeclaration(modelFile, ast)*
Create a ClassDeclaration from an Abstract Syntax Tree. The AST is the
result of parsing.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>string</code> | the AST created by the parser |

<a name="module_concerto-core.ClassDeclaration+_resolveSuperType"></a>

#### *classDeclaration.\_resolveSuperType() ⇒ <code>ClassDeclaration</code>*
Resolve the super type on this class and store it as an internal property.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>ClassDeclaration</code> - The super type, or null if non specified.  
<a name="module_concerto-core.ClassDeclaration+isAbstract"></a>

#### *classDeclaration.isAbstract() ⇒ <code>boolean</code>*
Returns true if this class is declared as abstract in the model file

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is abstract  
<a name="module_concerto-core.ClassDeclaration+isEnum"></a>

#### *classDeclaration.isEnum() ⇒ <code>boolean</code>*
Returns true if this class is an enumeration.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an enumerated type  
<a name="module_concerto-core.ClassDeclaration+isConcept"></a>

#### *classDeclaration.isConcept() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a concept.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is a concept  
<a name="module_concerto-core.ClassDeclaration+isEvent"></a>

#### *classDeclaration.isEvent() ⇒ <code>boolean</code>*
Returns true if this class is the definition of an event.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an event  
<a name="module_concerto-core.ClassDeclaration+getName"></a>

#### *classDeclaration.getName() ⇒ <code>string</code>*
Returns the short name of a class. This name does not include the
namespace from the owning ModelFile.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - the short name of this class  
<a name="module_concerto-core.ClassDeclaration+getNamespace"></a>

#### *classDeclaration.getNamespace() ⇒ <code>String</code>*
Return the namespace of this class.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>String</code> - namespace - a namespace.  
<a name="module_concerto-core.ClassDeclaration+getFullyQualifiedName"></a>

#### *classDeclaration.getFullyQualifiedName() ⇒ <code>string</code>*
Returns the fully qualified name of this class.
The name will include the namespace if present.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - the fully-qualified name of this class  
<a name="module_concerto-core.ClassDeclaration+isIdentified"></a>

#### *classDeclaration.isIdentified() ⇒ <code>Boolean</code>*
Returns true if this class declaration declares an identifying field
(system or explicit)

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Boolean</code> - true if the class declaration includes an identifier  
<a name="module_concerto-core.ClassDeclaration+isSystemIdentified"></a>

#### *classDeclaration.isSystemIdentified() ⇒ <code>Boolean</code>*
Returns true if this class declaration declares a system identifier
$identifier

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Boolean</code> - true if the class declaration includes a system identifier  
<a name="module_concerto-core.ClassDeclaration+isExplicitlyIdentified"></a>

#### *classDeclaration.isExplicitlyIdentified() ⇒ <code>Boolean</code>*
Returns true if this class declaration declares an explicit identifier

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Boolean</code> - true if the class declaration includes an explicit identifier  
<a name="module_concerto-core.ClassDeclaration+getIdentifierFieldName"></a>

#### *classDeclaration.getIdentifierFieldName() ⇒ <code>string</code>*
Returns the name of the identifying field for this class. Note
that the identifying field may come from a super type.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - the name of the id field for this class  
<a name="module_concerto-core.ClassDeclaration+getOwnProperty"></a>

#### *classDeclaration.getOwnProperty(name) ⇒ <code>Property</code>*
Returns the field with a given name or null if it does not exist.
The field must be directly owned by this class -- the super-type is
not introspected.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Property</code> - the field definition or null if it does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the field |

<a name="module_concerto-core.ClassDeclaration+getOwnProperties"></a>

#### *classDeclaration.getOwnProperties() ⇒ <code>Array.&lt;Property&gt;</code>*
Returns the fields directly defined by this class.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Array.&lt;Property&gt;</code> - the array of fields  
<a name="module_concerto-core.ClassDeclaration+getSuperType"></a>

#### *classDeclaration.getSuperType() ⇒ <code>string</code>*
Returns the FQN of the super type for this class or null if this
class does not have a super type.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - the FQN name of the super type or null  
<a name="module_concerto-core.ClassDeclaration+getSuperTypeDeclaration"></a>

#### *classDeclaration.getSuperTypeDeclaration() ⇒ <code>ClassDeclaration</code>*
Get the super type class declaration for this class.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>ClassDeclaration</code> - the super type declaration, or null if there is no super type.  
<a name="module_concerto-core.ClassDeclaration+getAssignableClassDeclarations"></a>

#### *classDeclaration.getAssignableClassDeclarations() ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
Get the class declarations for all subclasses of this class, including this class.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Array.&lt;ClassDeclaration&gt;</code> - subclass declarations.  
<a name="module_concerto-core.ClassDeclaration+getAllSuperTypeDeclarations"></a>

#### *classDeclaration.getAllSuperTypeDeclarations() ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>*
Get all the super-type declarations for this type.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Array.&lt;ClassDeclaration&gt;</code> - super-type declarations.  
<a name="module_concerto-core.ClassDeclaration+getProperty"></a>

#### *classDeclaration.getProperty(name) ⇒ <code>Property</code>*
Returns the property with a given name or null if it does not exist.
Fields defined in super-types are also introspected.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Property</code> - the field, or null if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the field |

<a name="module_concerto-core.ClassDeclaration+getProperties"></a>

#### *classDeclaration.getProperties() ⇒ <code>Array.&lt;Property&gt;</code>*
Returns the properties defined in this class and all super classes.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Array.&lt;Property&gt;</code> - the array of fields  
<a name="module_concerto-core.ClassDeclaration+getNestedProperty"></a>

#### *classDeclaration.getNestedProperty(propertyPath) ⇒ <code>Property</code>*
Get a nested property using a dotted property path

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Property</code> - the property  
**Throws**:

- <code>IllegalModelException</code> if the property path is invalid or the property does not exist


| Param | Type | Description |
| --- | --- | --- |
| propertyPath | <code>string</code> | The property name or name with nested structure e.g a.b.c |

<a name="module_concerto-core.ClassDeclaration+toString"></a>

#### *classDeclaration.toString() ⇒ <code>String</code>*
Returns the string representation of this class

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>String</code> - the string representation of the class  
<a name="module_concerto-core.ClassDeclaration.Symbol.hasInstance"></a>

#### *ClassDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>*
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a Class Declaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.ConceptDeclaration"></a>

### concerto-core.ConceptDeclaration ⇐ <code>ClassDeclaration</code>
ConceptDeclaration defines the schema (aka model or class) for
an Concept. It extends ClassDeclaration which manages a set of
fields, a super-type and the specification of an
identifying field.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: [ClassDeclaration](ClassDeclaration)  

* [.ConceptDeclaration](#module_concerto-core.ConceptDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new ConceptDeclaration(modelFile, ast)](#new_module_concerto-core.ConceptDeclaration_new)
    * _instance_
        * [.isConcept()](#module_concerto-core.ConceptDeclaration+isConcept) ⇒ <code>boolean</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.ConceptDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.ConceptDeclaration_new"></a>

#### new ConceptDeclaration(modelFile, ast)
Create a ConceptDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.ConceptDeclaration+isConcept"></a>

#### conceptDeclaration.isConcept() ⇒ <code>boolean</code>
Returns true if this class is the definition of a concept.

**Kind**: instance method of [<code>ConceptDeclaration</code>](#module_concerto-core.ConceptDeclaration)  
**Returns**: <code>boolean</code> - true if the class is a concept  
<a name="module_concerto-core.ConceptDeclaration.Symbol.hasInstance"></a>

#### ConceptDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>ConceptDeclaration</code>](#module_concerto-core.ConceptDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a ConceptDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.Decorator"></a>

### concerto-core.Decorator
Decorator encapsulates a decorator (annotation) on a class or property.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Decorator](#module_concerto-core.Decorator)
    * [new Decorator(parent, ast)](#new_module_concerto-core.Decorator_new)
    * [.getParent()](#module_concerto-core.Decorator+getParent) ⇒ <code>ClassDeclaration</code> \| <code>Property</code>
    * [.getName()](#module_concerto-core.Decorator+getName) ⇒ <code>string</code>
    * [.getArguments()](#module_concerto-core.Decorator+getArguments) ⇒ <code>Array.&lt;object&gt;</code>

<a name="new_module_concerto-core.Decorator_new"></a>

#### new Decorator(parent, ast)
Create a Decorator.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> \| <code>Property</code> | the owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.Decorator+getParent"></a>

#### decorator.getParent() ⇒ <code>ClassDeclaration</code> \| <code>Property</code>
Returns the owner of this property

**Kind**: instance method of [<code>Decorator</code>](#module_concerto-core.Decorator)  
**Returns**: <code>ClassDeclaration</code> \| <code>Property</code> - the parent class or property declaration  
<a name="module_concerto-core.Decorator+getName"></a>

#### decorator.getName() ⇒ <code>string</code>
Returns the name of a decorator

**Kind**: instance method of [<code>Decorator</code>](#module_concerto-core.Decorator)  
**Returns**: <code>string</code> - the name of this decorator  
<a name="module_concerto-core.Decorator+getArguments"></a>

#### decorator.getArguments() ⇒ <code>Array.&lt;object&gt;</code>
Returns the arguments for this decorator

**Kind**: instance method of [<code>Decorator</code>](#module_concerto-core.Decorator)  
**Returns**: <code>Array.&lt;object&gt;</code> - the arguments for this decorator or null if it does not have any arguments  
<a name="module_concerto-core.DecoratorFactory"></a>

### concerto-core.DecoratorFactory
An interface for a class that processes a decorator and returns a specific
implementation class for that decorator.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
<a name="module_concerto-core.DecoratorFactory+newDecorator"></a>

#### *decoratorFactory.newDecorator(parent, ast) ⇒ <code>Decorator</code>*
Process the decorator, and return a specific implementation class for that
decorator, or return null if this decorator is not handled by this processor.

**Kind**: instance abstract method of [<code>DecoratorFactory</code>](#module_concerto-core.DecoratorFactory)  
**Returns**: <code>Decorator</code> - The decorator.  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> \| <code>Property</code> | the owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EnumDeclaration"></a>

### concerto-core.EnumDeclaration ⇐ <code>ClassDeclaration</code>
EnumDeclaration defines an enumeration of static values.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See [ClassDeclaration](ClassDeclaration)  

* [.EnumDeclaration](#module_concerto-core.EnumDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new EnumDeclaration(modelFile, ast)](#new_module_concerto-core.EnumDeclaration_new)
    * _instance_
        * [.isEnum()](#module_concerto-core.EnumDeclaration+isEnum) ⇒ <code>boolean</code>
        * [.toString()](#module_concerto-core.EnumDeclaration+toString) ⇒ <code>String</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.EnumDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.EnumDeclaration_new"></a>

#### new EnumDeclaration(modelFile, ast)
Create an AssetDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EnumDeclaration+isEnum"></a>

#### enumDeclaration.isEnum() ⇒ <code>boolean</code>
Returns true if this class is an enumeration.

**Kind**: instance method of [<code>EnumDeclaration</code>](#module_concerto-core.EnumDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an enumerated type  
<a name="module_concerto-core.EnumDeclaration+toString"></a>

#### enumDeclaration.toString() ⇒ <code>String</code>
Returns the string representation of this class

**Kind**: instance method of [<code>EnumDeclaration</code>](#module_concerto-core.EnumDeclaration)  
**Returns**: <code>String</code> - the string representation of the class  
<a name="module_concerto-core.EnumDeclaration.Symbol.hasInstance"></a>

#### EnumDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>EnumDeclaration</code>](#module_concerto-core.EnumDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a Class Declaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.EnumValueDeclaration"></a>

### concerto-core.EnumValueDeclaration ⇐ <code>Property</code>
Class representing a value from a set of enumerated values

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Property</code>  
**See**: See [Property](Property)  

* [.EnumValueDeclaration](#module_concerto-core.EnumValueDeclaration) ⇐ <code>Property</code>
    * [new EnumValueDeclaration(parent, ast)](#new_module_concerto-core.EnumValueDeclaration_new)
    * [.Symbol.hasInstance(object)](#module_concerto-core.EnumValueDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.EnumValueDeclaration_new"></a>

#### new EnumValueDeclaration(parent, ast)
Create a EnumValueDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> | The owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EnumValueDeclaration.Symbol.hasInstance"></a>

#### EnumValueDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>EnumValueDeclaration</code>](#module_concerto-core.EnumValueDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a EnumValueDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.EventDeclaration"></a>

### concerto-core.EventDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of an Event.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.EventDeclaration](#module_concerto-core.EventDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new EventDeclaration(modelFile, ast)](#new_module_concerto-core.EventDeclaration_new)
    * _instance_
        * [.isEvent()](#module_concerto-core.EventDeclaration+isEvent) ⇒ <code>boolean</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.EventDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.EventDeclaration_new"></a>

#### new EventDeclaration(modelFile, ast)
Create an EventDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EventDeclaration+isEvent"></a>

#### eventDeclaration.isEvent() ⇒ <code>boolean</code>
Returns true if this class is the definition of an event

**Kind**: instance method of [<code>EventDeclaration</code>](#module_concerto-core.EventDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an event  
<a name="module_concerto-core.EventDeclaration.Symbol.hasInstance"></a>

#### EventDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>EventDeclaration</code>](#module_concerto-core.EventDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a EventDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.IdentifiedDeclaration"></a>

### *concerto-core.IdentifiedDeclaration ⇐ <code>ClassDeclaration</code>*
IdentifiedDeclaration

**Kind**: static abstract class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See [ClassDeclaration](ClassDeclaration)  

* *[.IdentifiedDeclaration](#module_concerto-core.IdentifiedDeclaration) ⇐ <code>ClassDeclaration</code>*
    * *[new IdentifiedDeclaration(modelFile, ast)](#new_module_concerto-core.IdentifiedDeclaration_new)*
    * *[.Symbol.hasInstance(object)](#module_concerto-core.IdentifiedDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>*

<a name="new_module_concerto-core.IdentifiedDeclaration_new"></a>

#### *new IdentifiedDeclaration(modelFile, ast)*
Create an AssetDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.IdentifiedDeclaration.Symbol.hasInstance"></a>

#### *IdentifiedDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>*
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>IdentifiedDeclaration</code>](#module_concerto-core.IdentifiedDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a AssetDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.Introspector"></a>

### concerto-core.Introspector
Provides access to the structure of transactions, assets and participants.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Introspector](#module_concerto-core.Introspector)
    * [new Introspector(modelManager)](#new_module_concerto-core.Introspector_new)
    * [.getClassDeclarations()](#module_concerto-core.Introspector+getClassDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
    * [.getClassDeclaration(fullyQualifiedTypeName)](#module_concerto-core.Introspector+getClassDeclaration) ⇒ <code>ClassDeclaration</code>

<a name="new_module_concerto-core.Introspector_new"></a>

#### new Introspector(modelManager)
Create the Introspector.


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the ModelManager that backs this Introspector |

<a name="module_concerto-core.Introspector+getClassDeclarations"></a>

#### introspector.getClassDeclarations() ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
Returns all the class declarations for the business network.

**Kind**: instance method of [<code>Introspector</code>](#module_concerto-core.Introspector)  
**Returns**: <code>Array.&lt;ClassDeclaration&gt;</code> - the array of class declarations  
<a name="module_concerto-core.Introspector+getClassDeclaration"></a>

#### introspector.getClassDeclaration(fullyQualifiedTypeName) ⇒ <code>ClassDeclaration</code>
Returns the class declaration with the given fully qualified name.
Throws an error if the class declaration does not exist.

**Kind**: instance method of [<code>Introspector</code>](#module_concerto-core.Introspector)  
**Returns**: <code>ClassDeclaration</code> - the class declaration  
**Throws**:

- <code>Error</code> if the class declaration does not exist


| Param | Type | Description |
| --- | --- | --- |
| fullyQualifiedTypeName | <code>String</code> | the fully qualified name of the type |

<a name="module_concerto-core.ModelFile"></a>

### concerto-core.ModelFile
Class representing a Model File. A Model File contains a single namespace
and a set of model elements: assets, transactions etc.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.ModelFile](#module_concerto-core.ModelFile)
    * [new ModelFile(modelManager, definitions, [fileName])](#new_module_concerto-core.ModelFile_new)
    * _instance_
        * [.isSystemModelFile()](#module_concerto-core.ModelFile+isSystemModelFile) ⇒ <code>Boolean</code>
        * [.isExternal()](#module_concerto-core.ModelFile+isExternal) ⇒ <code>boolean</code>
        * [.getModelManager()](#module_concerto-core.ModelFile+getModelManager) ⇒ <code>ModelManager</code>
        * [.getImports()](#module_concerto-core.ModelFile+getImports) ⇒ <code>Array.&lt;string&gt;</code>
        * [.isDefined(type)](#module_concerto-core.ModelFile+isDefined) ⇒ <code>boolean</code>
        * [.getLocalType(type)](#module_concerto-core.ModelFile+getLocalType) ⇒ <code>ClassDeclaration</code>
        * [.getAssetDeclaration(name)](#module_concerto-core.ModelFile+getAssetDeclaration) ⇒ <code>AssetDeclaration</code>
        * [.getTransactionDeclaration(name)](#module_concerto-core.ModelFile+getTransactionDeclaration) ⇒ <code>TransactionDeclaration</code>
        * [.getEventDeclaration(name)](#module_concerto-core.ModelFile+getEventDeclaration) ⇒ <code>EventDeclaration</code>
        * [.getParticipantDeclaration(name)](#module_concerto-core.ModelFile+getParticipantDeclaration) ⇒ <code>ParticipantDeclaration</code>
        * [.getNamespace()](#module_concerto-core.ModelFile+getNamespace) ⇒ <code>string</code>
        * [.getName()](#module_concerto-core.ModelFile+getName) ⇒ <code>string</code>
        * [.getAssetDeclarations()](#module_concerto-core.ModelFile+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
        * [.getTransactionDeclarations()](#module_concerto-core.ModelFile+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
        * [.getEventDeclarations()](#module_concerto-core.ModelFile+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
        * [.getParticipantDeclarations()](#module_concerto-core.ModelFile+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
        * [.getConceptDeclarations()](#module_concerto-core.ModelFile+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
        * [.getEnumDeclarations()](#module_concerto-core.ModelFile+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
        * [.getDeclarations(type)](#module_concerto-core.ModelFile+getDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
        * [.getAllDeclarations()](#module_concerto-core.ModelFile+getAllDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
        * [.getDefinitions()](#module_concerto-core.ModelFile+getDefinitions) ⇒ <code>string</code>
        * [.getConcertoVersion()](#module_concerto-core.ModelFile+getConcertoVersion) ⇒ <code>string</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.ModelFile.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.ModelFile_new"></a>

#### new ModelFile(modelManager, definitions, [fileName])
Create a ModelFile. This should only be called by framework code.
Use the ModelManager to manage ModelFiles.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the ModelManager that manages this ModelFile |
| definitions | <code>string</code> | The DSL model as a string. |
| [fileName] | <code>string</code> | The optional filename for this modelfile |

<a name="module_concerto-core.ModelFile+isSystemModelFile"></a>

#### modelFile.isSystemModelFile() ⇒ <code>Boolean</code>
Returns true if the ModelFile is a system namespace

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Boolean</code> - true if this is a system model file  
<a name="module_concerto-core.ModelFile+isExternal"></a>

#### modelFile.isExternal() ⇒ <code>boolean</code>
Returns true if this ModelFile was downloaded from an external URI.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>boolean</code> - true iff this ModelFile was downloaded from an external URI  
<a name="module_concerto-core.ModelFile+getModelManager"></a>

#### modelFile.getModelManager() ⇒ <code>ModelManager</code>
Returns the ModelManager associated with this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>ModelManager</code> - The ModelManager for this ModelFile  
<a name="module_concerto-core.ModelFile+getImports"></a>

#### modelFile.getImports() ⇒ <code>Array.&lt;string&gt;</code>
Returns the types that have been imported into this ModelFile.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;string&gt;</code> - The array of imports for this ModelFile  
<a name="module_concerto-core.ModelFile+isDefined"></a>

#### modelFile.isDefined(type) ⇒ <code>boolean</code>
Returns true if the type is defined in the model file

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>boolean</code> - true if the type (asset or transaction) is defined  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | the name of the type |

<a name="module_concerto-core.ModelFile+getLocalType"></a>

#### modelFile.getLocalType(type) ⇒ <code>ClassDeclaration</code>
Returns the type with the specified name or null

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>ClassDeclaration</code> - the ClassDeclaration, or null if the type does not exist  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | the short OR FQN name of the type |

<a name="module_concerto-core.ModelFile+getAssetDeclaration"></a>

#### modelFile.getAssetDeclaration(name) ⇒ <code>AssetDeclaration</code>
Get the AssetDeclarations defined in this ModelFile or null

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>AssetDeclaration</code> - the AssetDeclaration with the given short name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the type |

<a name="module_concerto-core.ModelFile+getTransactionDeclaration"></a>

#### modelFile.getTransactionDeclaration(name) ⇒ <code>TransactionDeclaration</code>
Get the TransactionDeclaration defined in this ModelFile or null

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>TransactionDeclaration</code> - the TransactionDeclaration with the given short name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the type |

<a name="module_concerto-core.ModelFile+getEventDeclaration"></a>

#### modelFile.getEventDeclaration(name) ⇒ <code>EventDeclaration</code>
Get the EventDeclaration defined in this ModelFile or null

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>EventDeclaration</code> - the EventDeclaration with the given short name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the type |

<a name="module_concerto-core.ModelFile+getParticipantDeclaration"></a>

#### modelFile.getParticipantDeclaration(name) ⇒ <code>ParticipantDeclaration</code>
Get the ParticipantDeclaration defined in this ModelFile or null

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>ParticipantDeclaration</code> - the ParticipantDeclaration with the given short name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the type |

<a name="module_concerto-core.ModelFile+getNamespace"></a>

#### modelFile.getNamespace() ⇒ <code>string</code>
Get the Namespace for this model file.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>string</code> - The Namespace for this model file  
<a name="module_concerto-core.ModelFile+getName"></a>

#### modelFile.getName() ⇒ <code>string</code>
Get the filename for this model file. Note that this may be null.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>string</code> - The filename for this model file  
<a name="module_concerto-core.ModelFile+getAssetDeclarations"></a>

#### modelFile.getAssetDeclarations() ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
Get the AssetDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;AssetDeclaration&gt;</code> - the AssetDeclarations defined in the model file  
<a name="module_concerto-core.ModelFile+getTransactionDeclarations"></a>

#### modelFile.getTransactionDeclarations() ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
Get the TransactionDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;TransactionDeclaration&gt;</code> - the TransactionDeclarations defined in the model file  
<a name="module_concerto-core.ModelFile+getEventDeclarations"></a>

#### modelFile.getEventDeclarations() ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
Get the EventDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;EventDeclaration&gt;</code> - the EventDeclarations defined in the model file  
<a name="module_concerto-core.ModelFile+getParticipantDeclarations"></a>

#### modelFile.getParticipantDeclarations() ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
Get the ParticipantDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;ParticipantDeclaration&gt;</code> - the ParticipantDeclaration defined in the model file  
<a name="module_concerto-core.ModelFile+getConceptDeclarations"></a>

#### modelFile.getConceptDeclarations() ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
Get the ConceptDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;ConceptDeclaration&gt;</code> - the ParticipantDeclaration defined in the model file  
<a name="module_concerto-core.ModelFile+getEnumDeclarations"></a>

#### modelFile.getEnumDeclarations() ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
Get the EnumDeclarations defined in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;EnumDeclaration&gt;</code> - the EnumDeclaration defined in the model file  
<a name="module_concerto-core.ModelFile+getDeclarations"></a>

#### modelFile.getDeclarations(type) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
Get the instances of a given type in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;ClassDeclaration&gt;</code> - the ClassDeclaration defined in the model file  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>function</code> | the type of the declaration |

<a name="module_concerto-core.ModelFile+getAllDeclarations"></a>

#### modelFile.getAllDeclarations() ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
Get all declarations in this ModelFile

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>Array.&lt;ClassDeclaration&gt;</code> - the ClassDeclarations defined in the model file  
<a name="module_concerto-core.ModelFile+getDefinitions"></a>

#### modelFile.getDefinitions() ⇒ <code>string</code>
Get the definitions for this model.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>string</code> - The definitions for this model.  
<a name="module_concerto-core.ModelFile+getConcertoVersion"></a>

#### modelFile.getConcertoVersion() ⇒ <code>string</code>
Get the expected concerto version

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>string</code> - The semver range for compatible concerto versions  
<a name="module_concerto-core.ModelFile.Symbol.hasInstance"></a>

#### ModelFile.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative to instanceof that is reliable across different module instances

**Kind**: static method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a ModelFile  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.ParticipantDeclaration"></a>

### concerto-core.ParticipantDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of a Participant.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.ParticipantDeclaration](#module_concerto-core.ParticipantDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new ParticipantDeclaration(modelFile, ast)](#new_module_concerto-core.ParticipantDeclaration_new)
    * [.Symbol.hasInstance(object)](#module_concerto-core.ParticipantDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.ParticipantDeclaration_new"></a>

#### new ParticipantDeclaration(modelFile, ast)
Create an ParticipantDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.ParticipantDeclaration.Symbol.hasInstance"></a>

#### ParticipantDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>ParticipantDeclaration</code>](#module_concerto-core.ParticipantDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a ParticipantDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.Property"></a>

### concerto-core.Property
Property representing an attribute of a class declaration,
either a Field or a Relationship.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Property](#module_concerto-core.Property)
    * [new Property(parent, ast)](#new_module_concerto-core.Property_new)
    * _instance_
        * [.getParent()](#module_concerto-core.Property+getParent) ⇒ <code>ClassDeclaration</code>
        * [.getName()](#module_concerto-core.Property+getName) ⇒ <code>string</code>
        * [.getType()](#module_concerto-core.Property+getType) ⇒ <code>string</code>
        * [.isOptional()](#module_concerto-core.Property+isOptional) ⇒ <code>boolean</code>
        * [.getFullyQualifiedTypeName()](#module_concerto-core.Property+getFullyQualifiedTypeName) ⇒ <code>string</code>
        * [.getFullyQualifiedName()](#module_concerto-core.Property+getFullyQualifiedName) ⇒ <code>string</code>
        * [.getNamespace()](#module_concerto-core.Property+getNamespace) ⇒ <code>string</code>
        * [.isArray()](#module_concerto-core.Property+isArray) ⇒ <code>boolean</code>
        * [.isTypeEnum()](#module_concerto-core.Property+isTypeEnum) ⇒ <code>boolean</code>
        * [.isPrimitive()](#module_concerto-core.Property+isPrimitive) ⇒ <code>boolean</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.Property.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.Property_new"></a>

#### new Property(parent, ast)
Create a Property.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> | the owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.Property+getParent"></a>

#### property.getParent() ⇒ <code>ClassDeclaration</code>
Returns the owner of this property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>ClassDeclaration</code> - the parent class declaration  
<a name="module_concerto-core.Property+getName"></a>

#### property.getName() ⇒ <code>string</code>
Returns the name of a property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>string</code> - the name of this field  
<a name="module_concerto-core.Property+getType"></a>

#### property.getType() ⇒ <code>string</code>
Returns the type of a property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>string</code> - the type of this field  
<a name="module_concerto-core.Property+isOptional"></a>

#### property.isOptional() ⇒ <code>boolean</code>
Returns true if the field is optional

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>boolean</code> - true if the field is optional  
<a name="module_concerto-core.Property+getFullyQualifiedTypeName"></a>

#### property.getFullyQualifiedTypeName() ⇒ <code>string</code>
Returns the fully qualified type name of a property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>string</code> - the fully qualified type of this property  
<a name="module_concerto-core.Property+getFullyQualifiedName"></a>

#### property.getFullyQualifiedName() ⇒ <code>string</code>
Returns the fully name of a property (ns + class name + property name)

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>string</code> - the fully qualified name of this property  
<a name="module_concerto-core.Property+getNamespace"></a>

#### property.getNamespace() ⇒ <code>string</code>
Returns the namespace of the parent of this property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>string</code> - the namespace of the parent of this property  
<a name="module_concerto-core.Property+isArray"></a>

#### property.isArray() ⇒ <code>boolean</code>
Returns true if the field is declared as an array type

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>boolean</code> - true if the property is an array type  
<a name="module_concerto-core.Property+isTypeEnum"></a>

#### property.isTypeEnum() ⇒ <code>boolean</code>
Returns true if the field is declared as an enumerated value

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>boolean</code> - true if the property is an enumerated value  
<a name="module_concerto-core.Property+isPrimitive"></a>

#### property.isPrimitive() ⇒ <code>boolean</code>
Returns true if this property is a primitive type.

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>boolean</code> - true if the property is a primitive type.  
<a name="module_concerto-core.Property.Symbol.hasInstance"></a>

#### Property.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>Property</code>](#module_concerto-core.Property)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a Property  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.RelationshipDeclaration"></a>

### concerto-core.RelationshipDeclaration ⇐ <code>Property</code>
Class representing a relationship between model elements

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Property</code>  
**See**: See  [Property](Property)  

* [.RelationshipDeclaration](#module_concerto-core.RelationshipDeclaration) ⇐ <code>Property</code>
    * [new RelationshipDeclaration(parent, ast)](#new_module_concerto-core.RelationshipDeclaration_new)
    * _instance_
        * [.toString()](#module_concerto-core.RelationshipDeclaration+toString) ⇒ <code>String</code>
    * _static_
        * [.Symbol.hasInstance(object)](#module_concerto-core.RelationshipDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.RelationshipDeclaration_new"></a>

#### new RelationshipDeclaration(parent, ast)
Create a Relationship.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> | The owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.RelationshipDeclaration+toString"></a>

#### relationshipDeclaration.toString() ⇒ <code>String</code>
Returns a string representation of this property

**Kind**: instance method of [<code>RelationshipDeclaration</code>](#module_concerto-core.RelationshipDeclaration)  
**Returns**: <code>String</code> - the string version of the property.  
<a name="module_concerto-core.RelationshipDeclaration.Symbol.hasInstance"></a>

#### RelationshipDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>RelationshipDeclaration</code>](#module_concerto-core.RelationshipDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a RelationshipDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.TransactionDeclaration"></a>

### concerto-core.TransactionDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of an Transaction.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.TransactionDeclaration](#module_concerto-core.TransactionDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new TransactionDeclaration(modelFile, ast)](#new_module_concerto-core.TransactionDeclaration_new)
    * [.Symbol.hasInstance(object)](#module_concerto-core.TransactionDeclaration.Symbol.hasInstance) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.TransactionDeclaration_new"></a>

#### new TransactionDeclaration(modelFile, ast)
Create an TransactionDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.TransactionDeclaration.Symbol.hasInstance"></a>

#### TransactionDeclaration.Symbol.hasInstance(object) ⇒ <code>boolean</code>
Alternative instanceof that is reliable across different module instances

**Kind**: static method of [<code>TransactionDeclaration</code>](#module_concerto-core.TransactionDeclaration)  
**Returns**: <code>boolean</code> - - True, if the object is an instance of a TransactionDeclaration  
**See**: https://github.com/hyperledger/composer-concerto/issues/47  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | The object to test against |

<a name="module_concerto-core.Resource"></a>

### concerto-core.Resource ⇐ <code>Identifiable</code>
Resource is an instance that has a type. The type of the resource
specifies a set of properites (which themselves have types).


Type information in Concerto is used to validate the structure of
Resource instances and for serialization.


Resources are used in Concerto to represent Assets, Participants, Transactions and
other domain classes that can be serialized for long-term persistent storage.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Identifiable</code>  
**Access**: public  
**See**: See [Resource](Resource)  

* [.Resource](#module_concerto-core.Resource) ⇐ <code>Identifiable</code>
    * [new Resource(modelManager, classDeclaration, ns, type, id, timestamp)](#new_module_concerto-core.Resource_new)
    * [.toString()](#module_concerto-core.Resource+toString) ⇒ <code>String</code>
    * [.isResource()](#module_concerto-core.Resource+isResource) ⇒ <code>boolean</code>
    * [.isConcept()](#module_concerto-core.Resource+isConcept) ⇒ <code>boolean</code>
    * [.isIdentifiable()](#module_concerto-core.Resource+isIdentifiable) ⇒ <code>boolean</code>
    * [.toJSON()](#module_concerto-core.Resource+toJSON) ⇒ <code>Object</code>

<a name="new_module_concerto-core.Resource_new"></a>

#### new Resource(modelManager, classDeclaration, ns, type, id, timestamp)
This constructor should not be called directly.
<p>
<strong>Note: Only to be called by framework code. Applications should
retrieve instances from [Factory](Factory)</strong>
</p>


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | The ModelManager for this instance |
| classDeclaration | <code>ClassDeclaration</code> | The class declaration for this instance. |
| ns | <code>string</code> | The namespace this instance. |
| type | <code>string</code> | The type this instance. |
| id | <code>string</code> | The identifier of this instance. |
| timestamp | <code>string</code> | The timestamp of this instance |

<a name="module_concerto-core.Resource+toString"></a>

#### resource.toString() ⇒ <code>String</code>
Returns the string representation of this class

**Kind**: instance method of [<code>Resource</code>](#module_concerto-core.Resource)  
**Returns**: <code>String</code> - the string representation of the class  
<a name="module_concerto-core.Resource+isResource"></a>

#### resource.isResource() ⇒ <code>boolean</code>
Determine if this identifiable is a resource.

**Kind**: instance method of [<code>Resource</code>](#module_concerto-core.Resource)  
**Returns**: <code>boolean</code> - True if this identifiable is a resource,
false if not.  
<a name="module_concerto-core.Resource+isConcept"></a>

#### resource.isConcept() ⇒ <code>boolean</code>
Determine if this identifiable is a concept.

**Kind**: instance method of [<code>Resource</code>](#module_concerto-core.Resource)  
**Returns**: <code>boolean</code> - True if this identifiable is a concept,
false if not.  
<a name="module_concerto-core.Resource+isIdentifiable"></a>

#### resource.isIdentifiable() ⇒ <code>boolean</code>
Determine if this object is identifiable.

**Kind**: instance method of [<code>Resource</code>](#module_concerto-core.Resource)  
**Returns**: <code>boolean</code> - True if this object has an identifiying field
false if not.  
<a name="module_concerto-core.Resource+toJSON"></a>

#### resource.toJSON() ⇒ <code>Object</code>
Serialize this resource into a JavaScript object suitable for serialization to JSON,
using the default options for the serializer. If you need to set additional options
for the serializer, use the [Serializer#toJSON](Serializer#toJSON) method instead.

**Kind**: instance method of [<code>Resource</code>](#module_concerto-core.Resource)  
**Returns**: <code>Object</code> - A JavaScript object suitable for serialization to JSON.  
<a name="levels"></a>

## levels : <code>Object</code>
Default levels for the npm configuration.

**Kind**: global constant  
<a name="colorMap"></a>

## colorMap : <code>Object</code>
Default levels for the npm configuration.

**Kind**: global constant  
<a name="setCurrentTime"></a>

## setCurrentTime([currentTime], [utcOffset]) ⇒ <code>object</code>
Ensures there is a proper current time

**Kind**: global function  
**Returns**: <code>object</code> - if valid, the dayjs object for the current time  

| Param | Type | Description |
| --- | --- | --- |
| [currentTime] | <code>string</code> | the definition of 'now' |
| [utcOffset] | <code>number</code> | UTC Offset for this execution |

<a name="randomNumberInRangeWithPrecision"></a>

## randomNumberInRangeWithPrecision(userMin, userMax, precision, systemMin, systemMax) ⇒ <code>number</code>
Generate a random number within a given range with
a prescribed precision and inside a global range

**Kind**: global function  
**Returns**: <code>number</code> - a number  

| Param | Type | Description |
| --- | --- | --- |
| userMin | <code>\*</code> | Lower bound on the range, inclusive. Defaults to systemMin |
| userMax | <code>\*</code> | Upper bound on the range, inclusive. Defaults to systemMax |
| precision | <code>\*</code> | The precision of values returned, e.g. a value of `1` returns only whole numbers |
| systemMin | <code>\*</code> | Global minimum on the range, takes precidence over the userMin |
| systemMax | <code>\*</code> | Global maximum on the range, takes precidence over the userMax |

