---
id: ref-concerto-api
title: Concerto API
---

## Modules

<dl>
<dt><a href="#module_concerto-core">concerto-core</a></dt>
<dd><p>Concerto core module. Concerto is a framework for defining domain
specific models.</p>
</dd>
<dt><a href="#module_concerto-cto">concerto-cto</a></dt>
<dd><p>Concerto CTO concrete syntax module. Concerto is a framework for defining domain
specific models.</p>
</dd>
<dt><a href="#module_concerto-metamodel">concerto-metamodel</a></dt>
<dd><p>Concerto metamodel management. Concerto is a framework for defining domain
specific models.</p>
</dd>
<dt><a href="#module_concerto-tools">concerto-tools</a></dt>
<dd><p>Concerto Tools module.</p>
</dd>
<dt><a href="#module_concerto-util">concerto-util</a></dt>
<dd><p>Concerto utility module. Concerto is a framework for defining domain
specific models.</p>
</dd>
<dt><a href="#module_concerto-vocabulary">concerto-vocabulary</a></dt>
<dd><p>Concerto vocabulary module. Concerto is a framework for defining domain
specific models.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#AbstractPlugin">AbstractPlugin</a></dt>
<dd><p>Simple plug-in class for code-generation. This lists functions that can be passed to extend the default code-generation behavior.</p>
</dd>
<dt><a href="#EmptyPlugin">EmptyPlugin</a></dt>
<dd><p>Simple plug-in class for code-generation. This lists functions that can be passed to extend the default code-generation behavior.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#rootModelAst">rootModelAst</a> : <code>unknown</code></dt>
<dd></dd>
<dt><a href="#metaModelAst">metaModelAst</a> : <code>unknown</code></dt>
<dd><p>The metamodel itself, as an AST.</p>
</dd>
<dt><a href="#metaModelCto">metaModelCto</a></dt>
<dd><p>The metamodel itself, as a CTO string</p>
</dd>
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
<dt><a href="#newMetaModelManager">newMetaModelManager()</a> ⇒ <code>*</code></dt>
<dd><p>Create a metamodel manager (for validation against the metamodel)</p>
</dd>
<dt><a href="#validateMetaModel">validateMetaModel(input)</a> ⇒ <code>object</code></dt>
<dd><p>Validate metamodel instance against the metamodel</p>
</dd>
<dt><a href="#modelManagerFromMetaModel">modelManagerFromMetaModel(metaModel, [validate])</a> ⇒ <code>object</code></dt>
<dd><p>Import metamodel to a model manager</p>
</dd>
<dt><a href="#randomNumberInRangeWithPrecision">randomNumberInRangeWithPrecision(userMin, userMax, precision, systemMin, systemMax)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random number within a given range with
a prescribed precision and inside a global range</p>
</dd>
<dt><a href="#updateModels">updateModels(models, newModel)</a> ⇒ <code>*</code></dt>
<dd><p>Update models with a new model</p>
</dd>
<dt><a href="#resolveExternal">resolveExternal(models, [options], [fileDownloader])</a> ⇒ <code>Promise</code></dt>
<dd><p>Downloads all ModelFiles that are external dependencies and adds or
updates them in this ModelManager.</p>
</dd>
<dt><a href="#parse">parse(cto, [fileName])</a> ⇒ <code>object</code></dt>
<dd><p>Create decorator argument string from a metamodel</p>
</dd>
<dt><a href="#parseModels">parseModels(files)</a> ⇒ <code>*</code></dt>
<dd><p>Parses an array of model files</p>
</dd>
<dt><a href="#decoratorArgFromMetaModel">decoratorArgFromMetaModel(mm)</a> ⇒ <code>string</code></dt>
<dd><p>Create decorator argument string from a metamodel</p>
</dd>
<dt><a href="#decoratorFromMetaModel">decoratorFromMetaModel(mm)</a> ⇒ <code>string</code></dt>
<dd><p>Create decorator string from a metamodel</p>
</dd>
<dt><a href="#decoratorsFromMetaModel">decoratorsFromMetaModel(mm, prefix)</a> ⇒ <code>string</code></dt>
<dd><p>Create decorators string from a metamodel</p>
</dd>
<dt><a href="#propertyFromMetaModel">propertyFromMetaModel(mm)</a> ⇒ <code>string</code></dt>
<dd><p>Create a property string from a metamodel</p>
</dd>
<dt><a href="#declFromMetaModel">declFromMetaModel(mm)</a> ⇒ <code>string</code></dt>
<dd><p>Create a declaration string from a metamodel</p>
</dd>
<dt><a href="#toCTO">toCTO(metaModel)</a> ⇒ <code>string</code></dt>
<dd><p>Create a model string from a metamodel</p>
</dd>
<dt><a href="#findNamespace">findNamespace(priorModels, namespace)</a> ⇒ <code>*</code></dt>
<dd><p>Find the model for a given namespace</p>
</dd>
<dt><a href="#findDeclaration">findDeclaration(thisModel, name)</a> ⇒ <code>*</code></dt>
<dd><p>Find a declaration for a given name in a model</p>
</dd>
<dt><a href="#createNameTable">createNameTable(priorModels, metaModel)</a> ⇒ <code>object</code></dt>
<dd><p>Create a name resolution table</p>
</dd>
<dt><a href="#resolveName">resolveName(name, table)</a> ⇒ <code>string</code></dt>
<dd><p>Resolve a name using the name table</p>
</dd>
<dt><a href="#resolveTypeNames">resolveTypeNames(metaModel, table)</a> ⇒ <code>object</code></dt>
<dd><p>Name resolution for metamodel</p>
</dd>
<dt><a href="#resolveLocalNames">resolveLocalNames(priorModels, metaModel)</a> ⇒ <code>object</code></dt>
<dd><p>Resolve the namespace for names in the metamodel</p>
</dd>
<dt><a href="#resolveLocalNamesForAll">resolveLocalNamesForAll(allModels)</a> ⇒ <code>object</code></dt>
<dd><p>Resolve the namespace for names in the metamodel</p>
</dd>
<dt><a href="#inferModelFile">inferModelFile(defaultNamespace, defaultType, schema)</a> ⇒ <code>string</code></dt>
<dd><p>Infers a Concerto model from a JSON Schema.</p>
</dd>
<dt><a href="#capitalizeFirstLetter">capitalizeFirstLetter(string)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalize the first letter of a string</p>
</dd>
<dt><a href="#hashCode">hashCode(value)</a> ⇒ <code>number</code></dt>
<dd><p>Computes an integer hashcode value for a string</p>
</dd>
<dt><a href="#isObject">isObject(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is an object</p>
</dd>
<dt><a href="#isBoolean">isBoolean(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is a boolean</p>
</dd>
<dt><a href="#isNull">isNull(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is null</p>
</dd>
<dt><a href="#isArray">isArray(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is an array</p>
</dd>
<dt><a href="#isString">isString(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is a string</p>
</dd>
<dt><a href="#isDateTime">isDateTime(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is a date time</p>
</dd>
<dt><a href="#isInteger">isInteger(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is an integer</p>
</dd>
<dt><a href="#isDouble">isDouble(val)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if val is an integer</p>
</dd>
<dt><a href="#getType">getType(input)</a> ⇒ <code>string</code></dt>
<dd><p>Get the primitive Concerto type for an input</p>
</dd>
<dt><a href="#handleArray">handleArray(typeName, context, input)</a> ⇒ <code>object</code></dt>
<dd><p>Handles an array</p>
</dd>
<dt><a href="#handleType">handleType(name, context, input)</a> ⇒ <code>object</code></dt>
<dd><p>Handles an input type</p>
</dd>
<dt><a href="#removeDuplicateTypes">removeDuplicateTypes(context)</a></dt>
<dd><p>Detect duplicate types and remove them</p>
</dd>
<dt><a href="#inferModel">inferModel(namespace, rootTypeName, input)</a> ⇒ <code>string</code></dt>
<dd><p>Infers a Concerto model from a JSON instance.</p>
</dd>
<dt><a href="#labelToSentence">labelToSentence(labelName)</a> ⇒ <code>string</code></dt>
<dd><p>Inserts correct spacing and capitalization to a camelCase label</p>
</dd>
<dt><a href="#sentenceToLabel">sentenceToLabel(sentence)</a> ⇒ <code>string</code></dt>
<dd><p>Create a camelCase label from a sentence</p>
</dd>
<dt><a href="#writeModelsToFileSystem">writeModelsToFileSystem(files, path, options)</a></dt>
<dd><p>Writes a set of model files to disk</p>
</dd>
<dt><a href="#camelCaseToSentence">camelCaseToSentence(text)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a camel case string to a sentence</p>
</dd>
</dl>

<a name="module_concerto-core"></a>

## concerto-core
Concerto core module. Concerto is a framework for defining domain
specific models.


* [concerto-core](#module_concerto-core)
    * _static_
        * [.AstModelManager](#module_concerto-core.AstModelManager)
            * [new AstModelManager([options])](#new_module_concerto-core.AstModelManager_new)
        * [.BaseModelManager](#module_concerto-core.BaseModelManager)
            * [new BaseModelManager([options], [processFile])](#new_module_concerto-core.BaseModelManager_new)
            * [.isModelManager()](#module_concerto-core.BaseModelManager+isModelManager) ⇒ <code>boolean</code>
            * [.accept(visitor, parameters)](#module_concerto-core.BaseModelManager+accept) ⇒ <code>Object</code>
            * [.validateModelFile(modelFile, [fileName])](#module_concerto-core.BaseModelManager+validateModelFile)
            * [.addModelFile(modelFile, [cto], [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+addModelFile) ⇒ <code>Object</code>
            * [.addModel(modelInput, [cto], [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+addModel) ⇒ <code>Object</code>
            * [.updateModelFile(modelFile, [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+updateModelFile) ⇒ <code>Object</code>
            * [.deleteModelFile(namespace)](#module_concerto-core.BaseModelManager+deleteModelFile)
            * [.addModelFiles(modelFiles, [fileNames], [disableValidation])](#module_concerto-core.BaseModelManager+addModelFiles) ⇒ <code>Array.&lt;Object&gt;</code>
            * [.validateModelFiles()](#module_concerto-core.BaseModelManager+validateModelFiles)
            * [.updateExternalModels([options], [fileDownloader])](#module_concerto-core.BaseModelManager+updateExternalModels) ⇒ <code>Promise</code>
            * [.writeModelsToFileSystem(path, [options])](#module_concerto-core.BaseModelManager+writeModelsToFileSystem)
            * [.getModels([options])](#module_concerto-core.BaseModelManager+getModels) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
            * [.clearModelFiles()](#module_concerto-core.BaseModelManager+clearModelFiles)
            * [.getModelFile(namespace)](#module_concerto-core.BaseModelManager+getModelFile) ⇒ <code>ModelFile</code>
            * [.getNamespaces()](#module_concerto-core.BaseModelManager+getNamespaces) ⇒ <code>Array.&lt;string&gt;</code>
            * [.getType(qualifiedName)](#module_concerto-core.BaseModelManager+getType) ⇒ <code>ClassDeclaration</code>
            * [.getAssetDeclarations()](#module_concerto-core.BaseModelManager+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
            * [.getTransactionDeclarations()](#module_concerto-core.BaseModelManager+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
            * [.getEventDeclarations()](#module_concerto-core.BaseModelManager+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
            * [.getParticipantDeclarations()](#module_concerto-core.BaseModelManager+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
            * [.getEnumDeclarations()](#module_concerto-core.BaseModelManager+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
            * [.getConceptDeclarations()](#module_concerto-core.BaseModelManager+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
            * [.getFactory()](#module_concerto-core.BaseModelManager+getFactory) ⇒ <code>Factory</code>
            * [.getSerializer()](#module_concerto-core.BaseModelManager+getSerializer) ⇒ <code>Serializer</code>
            * [.getDecoratorFactories()](#module_concerto-core.BaseModelManager+getDecoratorFactories) ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
            * [.addDecoratorFactory(factory)](#module_concerto-core.BaseModelManager+addDecoratorFactory)
            * [.derivesFrom(fqt1, fqt2)](#module_concerto-core.BaseModelManager+derivesFrom) ⇒ <code>boolean</code>
            * [.resolveMetaModel(metaModel)](#module_concerto-core.BaseModelManager+resolveMetaModel) ⇒ <code>object</code>
            * [.fromAst(ast)](#module_concerto-core.BaseModelManager+fromAst)
            * [.getAst([resolve])](#module_concerto-core.BaseModelManager+getAst) ⇒ <code>\*</code>
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
        * [.DecoratorManager](#module_concerto-core.DecoratorManager)
            * [.decorateModels(modelManager, decoratorCommandSet)](#module_concerto-core.DecoratorManager.decorateModels) ⇒ <code>ModelManager</code>
            * [.falsyOrEqual(test, value)](#module_concerto-core.DecoratorManager.falsyOrEqual) ⇒ <code>Boolean</code>
            * [.applyDecorator(decorated, type, newDecorator)](#module_concerto-core.DecoratorManager.applyDecorator)
            * [.executeCommand(namespace, declaration, command)](#module_concerto-core.DecoratorManager.executeCommand)
        * [.Factory](#module_concerto-core.Factory)
            * [new Factory(modelManager)](#new_module_concerto-core.Factory_new)
            * _instance_
                * [.newResource(ns, type, [id], [options])](#module_concerto-core.Factory+newResource) ⇒ <code>Resource</code>
                * [.newConcept(ns, type, [id], [options])](#module_concerto-core.Factory+newConcept) ⇒ <code>Resource</code>
                * [.newRelationship(ns, type, id)](#module_concerto-core.Factory+newRelationship) ⇒ <code>Relationship</code>
                * [.newTransaction(ns, type, [id], [options])](#module_concerto-core.Factory+newTransaction) ⇒ <code>Resource</code>
                * [.newEvent(ns, type, [id], [options])](#module_concerto-core.Factory+newEvent) ⇒ <code>Resource</code>
            * _static_
                * [.newId()](#module_concerto-core.Factory.newId) ⇒ <code>string</code>
        * [.AssetDeclaration](#module_concerto-core.AssetDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new AssetDeclaration(modelFile, ast)](#new_module_concerto-core.AssetDeclaration_new)
            * [.declarationKind()](#module_concerto-core.AssetDeclaration+declarationKind) ⇒ <code>string</code>
        * *[.ClassDeclaration](#module_concerto-core.ClassDeclaration)*
            * *[new ClassDeclaration(modelFile, ast)](#new_module_concerto-core.ClassDeclaration_new)*
            * *[._resolveSuperType()](#module_concerto-core.ClassDeclaration+_resolveSuperType) ⇒ <code>ClassDeclaration</code>*
            * *[.validate()](#module_concerto-core.ClassDeclaration+validate)*
            * *[.isAbstract()](#module_concerto-core.ClassDeclaration+isAbstract) ⇒ <code>boolean</code>*
            * *[.getName()](#module_concerto-core.ClassDeclaration+getName) ⇒ <code>string</code>*
            * *[.getNamespace()](#module_concerto-core.ClassDeclaration+getNamespace) ⇒ <code>string</code>*
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
            * *[.isAsset()](#module_concerto-core.ClassDeclaration+isAsset) ⇒ <code>boolean</code>*
            * *[.isParticipant()](#module_concerto-core.ClassDeclaration+isParticipant) ⇒ <code>boolean</code>*
            * *[.isTransaction()](#module_concerto-core.ClassDeclaration+isTransaction) ⇒ <code>boolean</code>*
            * *[.isEvent()](#module_concerto-core.ClassDeclaration+isEvent) ⇒ <code>boolean</code>*
            * *[.isConcept()](#module_concerto-core.ClassDeclaration+isConcept) ⇒ <code>boolean</code>*
            * *[.isEnum()](#module_concerto-core.ClassDeclaration+isEnum) ⇒ <code>boolean</code>*
            * *[.isClassDeclaration()](#module_concerto-core.ClassDeclaration+isClassDeclaration) ⇒ <code>boolean</code>*
        * [.ConceptDeclaration](#module_concerto-core.ConceptDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new ConceptDeclaration(modelFile, ast)](#new_module_concerto-core.ConceptDeclaration_new)
            * [.declarationKind()](#module_concerto-core.ConceptDeclaration+declarationKind) ⇒ <code>string</code>
        * [.Decorator](#module_concerto-core.Decorator)
            * [new Decorator(parent, ast)](#new_module_concerto-core.Decorator_new)
            * [.getParent()](#module_concerto-core.Decorator+getParent) ⇒ <code>ClassDeclaration</code> \| <code>Property</code>
            * [.getName()](#module_concerto-core.Decorator+getName) ⇒ <code>string</code>
            * [.getArguments()](#module_concerto-core.Decorator+getArguments) ⇒ <code>Array.&lt;object&gt;</code>
        * [.DecoratorFactory](#module_concerto-core.DecoratorFactory)
            * *[.newDecorator(parent, ast)](#module_concerto-core.DecoratorFactory+newDecorator) ⇒ <code>Decorator</code>*
        * [.EnumDeclaration](#module_concerto-core.EnumDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new EnumDeclaration(modelFile, ast)](#new_module_concerto-core.EnumDeclaration_new)
            * [.toString()](#module_concerto-core.EnumDeclaration+toString) ⇒ <code>String</code>
            * [.declarationKind()](#module_concerto-core.EnumDeclaration+declarationKind) ⇒ <code>string</code>
        * [.EnumValueDeclaration](#module_concerto-core.EnumValueDeclaration) ⇐ <code>Property</code>
            * [new EnumValueDeclaration(parent, ast)](#new_module_concerto-core.EnumValueDeclaration_new)
            * [.isEnumValue()](#module_concerto-core.EnumValueDeclaration+isEnumValue) ⇒ <code>boolean</code>
        * [.EventDeclaration](#module_concerto-core.EventDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new EventDeclaration(modelFile, ast)](#new_module_concerto-core.EventDeclaration_new)
            * [.declarationKind()](#module_concerto-core.EventDeclaration+declarationKind) ⇒ <code>string</code>
        * *[.IdentifiedDeclaration](#module_concerto-core.IdentifiedDeclaration) ⇐ <code>ClassDeclaration</code>*
            * *[new IdentifiedDeclaration(modelFile, ast)](#new_module_concerto-core.IdentifiedDeclaration_new)*
        * [.IllegalModelException](#module_concerto-core.IllegalModelException) ⇐ <code>BaseFileException</code>
            * [new IllegalModelException(message, [modelFile], [fileLocation], [component])](#new_module_concerto-core.IllegalModelException_new)
        * [.Introspector](#module_concerto-core.Introspector)
            * [new Introspector(modelManager)](#new_module_concerto-core.Introspector_new)
            * [.getClassDeclarations()](#module_concerto-core.Introspector+getClassDeclarations) ⇒ <code>Array.&lt;ClassDeclaration&gt;</code>
            * [.getClassDeclaration(fullyQualifiedTypeName)](#module_concerto-core.Introspector+getClassDeclaration) ⇒ <code>ClassDeclaration</code>
        * [.ModelFile](#module_concerto-core.ModelFile)
            * [new ModelFile(modelManager, ast, [definitions], [fileName])](#new_module_concerto-core.ModelFile_new)
            * [.isModelFile()](#module_concerto-core.ModelFile+isModelFile) ⇒ <code>boolean</code>
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
            * [.getAst()](#module_concerto-core.ModelFile+getAst) ⇒ <code>object</code>
            * [.getConcertoVersion()](#module_concerto-core.ModelFile+getConcertoVersion) ⇒ <code>string</code>
            * [.isCompatibleVersion()](#module_concerto-core.ModelFile+isCompatibleVersion)
        * [.ParticipantDeclaration](#module_concerto-core.ParticipantDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new ParticipantDeclaration(modelFile, ast)](#new_module_concerto-core.ParticipantDeclaration_new)
            * [.declarationKind()](#module_concerto-core.ParticipantDeclaration+declarationKind) ⇒ <code>string</code>
        * [.Property](#module_concerto-core.Property)
            * [new Property(parent, ast)](#new_module_concerto-core.Property_new)
            * [.getParent()](#module_concerto-core.Property+getParent) ⇒ <code>ClassDeclaration</code>
            * [.validate(classDecl)](#module_concerto-core.Property+validate)
            * [.getName()](#module_concerto-core.Property+getName) ⇒ <code>string</code>
            * [.getType()](#module_concerto-core.Property+getType) ⇒ <code>string</code>
            * [.isOptional()](#module_concerto-core.Property+isOptional) ⇒ <code>boolean</code>
            * [.getFullyQualifiedTypeName()](#module_concerto-core.Property+getFullyQualifiedTypeName) ⇒ <code>string</code>
            * [.getFullyQualifiedName()](#module_concerto-core.Property+getFullyQualifiedName) ⇒ <code>string</code>
            * [.getNamespace()](#module_concerto-core.Property+getNamespace) ⇒ <code>string</code>
            * [.isArray()](#module_concerto-core.Property+isArray) ⇒ <code>boolean</code>
            * [.isTypeEnum()](#module_concerto-core.Property+isTypeEnum) ⇒ <code>boolean</code>
            * [.isPrimitive()](#module_concerto-core.Property+isPrimitive) ⇒ <code>boolean</code>
        * [.RelationshipDeclaration](#module_concerto-core.RelationshipDeclaration) ⇐ <code>Property</code>
            * [new RelationshipDeclaration(parent, ast)](#new_module_concerto-core.RelationshipDeclaration_new)
            * [.validate(classDecl)](#module_concerto-core.RelationshipDeclaration+validate)
            * [.toString()](#module_concerto-core.RelationshipDeclaration+toString) ⇒ <code>String</code>
            * [.isRelationship()](#module_concerto-core.RelationshipDeclaration+isRelationship) ⇒ <code>boolean</code>
        * [.TransactionDeclaration](#module_concerto-core.TransactionDeclaration) ⇐ <code>ClassDeclaration</code>
            * [new TransactionDeclaration(modelFile, ast)](#new_module_concerto-core.TransactionDeclaration_new)
            * [.declarationKind()](#module_concerto-core.TransactionDeclaration+declarationKind) ⇒ <code>string</code>
        * *[.Identifiable](#module_concerto-core.Identifiable) ⇐ <code>Typed</code>*
            * *[new Identifiable(modelManager, classDeclaration, ns, type, id, timestamp)](#new_module_concerto-core.Identifiable_new)*
            * *[.getTimestamp()](#module_concerto-core.Identifiable+getTimestamp) ⇒ <code>string</code>*
            * *[.getIdentifier()](#module_concerto-core.Identifiable+getIdentifier) ⇒ <code>string</code>*
            * *[.setIdentifier(id)](#module_concerto-core.Identifiable+setIdentifier)*
            * *[.getFullyQualifiedIdentifier()](#module_concerto-core.Identifiable+getFullyQualifiedIdentifier) ⇒ <code>string</code>*
            * *[.toString()](#module_concerto-core.Identifiable+toString) ⇒ <code>String</code>*
            * *[.isRelationship()](#module_concerto-core.Identifiable+isRelationship) ⇒ <code>boolean</code>*
            * *[.isResource()](#module_concerto-core.Identifiable+isResource) ⇒ <code>boolean</code>*
            * *[.toURI()](#module_concerto-core.Identifiable+toURI) ⇒ <code>String</code>*
        * [.Resource](#module_concerto-core.Resource) ⇐ <code>Identifiable</code>
            * [new Resource(modelManager, classDeclaration, ns, type, id, timestamp)](#new_module_concerto-core.Resource_new)
            * [.toString()](#module_concerto-core.Resource+toString) ⇒ <code>String</code>
            * [.isResource()](#module_concerto-core.Resource+isResource) ⇒ <code>boolean</code>
            * [.isConcept()](#module_concerto-core.Resource+isConcept) ⇒ <code>boolean</code>
            * [.isIdentifiable()](#module_concerto-core.Resource+isIdentifiable) ⇒ <code>boolean</code>
            * [.toJSON()](#module_concerto-core.Resource+toJSON) ⇒ <code>Object</code>
        * *[.Typed](#module_concerto-core.Typed)*
            * *[new Typed(modelManager, classDeclaration, ns, type)](#new_module_concerto-core.Typed_new)*
            * *[.getType()](#module_concerto-core.Typed+getType) ⇒ <code>string</code>*
            * *[.getFullyQualifiedType()](#module_concerto-core.Typed+getFullyQualifiedType) ⇒ <code>string</code>*
            * *[.getNamespace()](#module_concerto-core.Typed+getNamespace) ⇒ <code>string</code>*
            * *[.setPropertyValue(propName, value)](#module_concerto-core.Typed+setPropertyValue)*
            * *[.addArrayValue(propName, value)](#module_concerto-core.Typed+addArrayValue)*
            * *[.instanceOf(fqt)](#module_concerto-core.Typed+instanceOf) ⇒ <code>boolean</code>*
            * *[.toJSON()](#module_concerto-core.Typed+toJSON)*
        * [.ModelLoader](#module_concerto-core.ModelLoader)
            * [.loadModelManager(ctoFiles, options)](#module_concerto-core.ModelLoader.loadModelManager) ⇒ <code>object</code>
            * [.loadModelManagerFromModelFiles(modelFiles, [fileNames], options)](#module_concerto-core.ModelLoader.loadModelManagerFromModelFiles) ⇒ <code>object</code>
        * [.ModelManager](#module_concerto-core.ModelManager)
            * [new ModelManager([options])](#new_module_concerto-core.ModelManager_new)
            * [.addCTOModel(cto, [fileName], [disableValidation])](#module_concerto-core.ModelManager+addCTOModel) ⇒ <code>Object</code>
        * [.SecurityException](#module_concerto-core.SecurityException) ⇐ <code>BaseException</code>
            * [new SecurityException(message)](#new_module_concerto-core.SecurityException_new)
        * [.Serializer](#module_concerto-core.Serializer)
            * [new Serializer(factory, modelManager, [options])](#new_module_concerto-core.Serializer_new)
            * [.setDefaultOptions(newDefaultOptions)](#module_concerto-core.Serializer+setDefaultOptions)
            * [.toJSON(resource, [options])](#module_concerto-core.Serializer+toJSON) ⇒ <code>Object</code>
            * [.fromJSON(jsonObject, [options])](#module_concerto-core.Serializer+fromJSON) ⇒ <code>Resource</code>
        * [.TypeNotFoundException](#module_concerto-core.TypeNotFoundException) ⇐ <code>BaseException</code>
            * [new TypeNotFoundException(typeName, message, component)](#new_module_concerto-core.TypeNotFoundException_new)
            * [.getTypeName()](#module_concerto-core.TypeNotFoundException+getTypeName) ⇒ <code>string</code>
        * [.BaseException](#module_concerto-core.BaseException) ⇐ <code>Error</code>
            * [new BaseException(message, component)](#new_module_concerto-core.BaseException_new)
        * [.BaseFileException](#module_concerto-core.BaseFileException) ⇐ <code>BaseException</code>
            * [new BaseFileException(message, fileLocation, fullMessage, [fileName], [component])](#new_module_concerto-core.BaseFileException_new)
            * [.getFileLocation()](#module_concerto-core.BaseFileException+getFileLocation) ⇒ <code>string</code>
            * [.getShortMessage()](#module_concerto-core.BaseFileException+getShortMessage) ⇒ <code>string</code>
            * [.getFileName()](#module_concerto-core.BaseFileException+getFileName) ⇒ <code>string</code>
        * [.FileDownloader](#module_concerto-core.FileDownloader)
            * [new FileDownloader(fileLoader, getExternalImports, concurrency)](#new_module_concerto-core.FileDownloader_new)
            * [.downloadExternalDependencies(files, [options])](#module_concerto-core.FileDownloader+downloadExternalDependencies) ⇒ <code>Promise</code>
            * [.runJob(job, fileLoader)](#module_concerto-core.FileDownloader+runJob) ⇒ <code>Promise</code>
        * [.TypedStack](#module_concerto-core.TypedStack)
            * [new TypedStack(resource)](#new_module_concerto-core.TypedStack_new)
            * [.push(obj, expectedType)](#module_concerto-core.TypedStack+push)
            * [.pop(expectedType)](#module_concerto-core.TypedStack+pop) ⇒ <code>Object</code>
            * [.peek(expectedType)](#module_concerto-core.TypedStack+peek) ⇒ <code>Object</code>
            * [.clear()](#module_concerto-core.TypedStack+clear)
    * _inner_
        * [~version](#module_concerto-core..version) : <code>Object</code>

<a name="module_concerto-core.AstModelManager"></a>

### concerto-core.AstModelManager
Manages the Concerto model files in AST format.

The structure of [Resource](Resource)s (Assets, Transactions, Participants) is modelled
in a set of Concerto files. The contents of these files are managed
by the [ModelManager](ModelManager). Each Concerto file has a single namespace and contains
a set of asset, transaction and participant type definitions.

Concerto applications load their Concerto files and then call the [addModelFile](ModelManager#addModelFile)
method to register the Concerto file(s) with the ModelManager.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
<a name="new_module_concerto-core.AstModelManager_new"></a>

#### new AstModelManager([options])
Create the ModelManager.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Serializer options |

<a name="module_concerto-core.BaseModelManager"></a>

### concerto-core.BaseModelManager
Manages the Concerto model files.

The structure of [Resource](Resource)s (Assets, Transactions, Participants) is modelled
in a set of Concerto files. The contents of these files are managed
by the [ModelManager](ModelManager). Each Concerto file has a single namespace and contains
a set of asset, transaction and participant type definitions.

Concerto applications load their Concerto files and then call the [addModelFile](ModelManager#addModelFile)
method to register the Concerto file(s) with the ModelManager.

Use the [Concerto](Concerto) class to validate instances.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.BaseModelManager](#module_concerto-core.BaseModelManager)
    * [new BaseModelManager([options], [processFile])](#new_module_concerto-core.BaseModelManager_new)
    * [.isModelManager()](#module_concerto-core.BaseModelManager+isModelManager) ⇒ <code>boolean</code>
    * [.accept(visitor, parameters)](#module_concerto-core.BaseModelManager+accept) ⇒ <code>Object</code>
    * [.validateModelFile(modelFile, [fileName])](#module_concerto-core.BaseModelManager+validateModelFile)
    * [.addModelFile(modelFile, [cto], [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+addModelFile) ⇒ <code>Object</code>
    * [.addModel(modelInput, [cto], [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+addModel) ⇒ <code>Object</code>
    * [.updateModelFile(modelFile, [fileName], [disableValidation])](#module_concerto-core.BaseModelManager+updateModelFile) ⇒ <code>Object</code>
    * [.deleteModelFile(namespace)](#module_concerto-core.BaseModelManager+deleteModelFile)
    * [.addModelFiles(modelFiles, [fileNames], [disableValidation])](#module_concerto-core.BaseModelManager+addModelFiles) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.validateModelFiles()](#module_concerto-core.BaseModelManager+validateModelFiles)
    * [.updateExternalModels([options], [fileDownloader])](#module_concerto-core.BaseModelManager+updateExternalModels) ⇒ <code>Promise</code>
    * [.writeModelsToFileSystem(path, [options])](#module_concerto-core.BaseModelManager+writeModelsToFileSystem)
    * [.getModels([options])](#module_concerto-core.BaseModelManager+getModels) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
    * [.clearModelFiles()](#module_concerto-core.BaseModelManager+clearModelFiles)
    * [.getModelFile(namespace)](#module_concerto-core.BaseModelManager+getModelFile) ⇒ <code>ModelFile</code>
    * [.getNamespaces()](#module_concerto-core.BaseModelManager+getNamespaces) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getType(qualifiedName)](#module_concerto-core.BaseModelManager+getType) ⇒ <code>ClassDeclaration</code>
    * [.getAssetDeclarations()](#module_concerto-core.BaseModelManager+getAssetDeclarations) ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
    * [.getTransactionDeclarations()](#module_concerto-core.BaseModelManager+getTransactionDeclarations) ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
    * [.getEventDeclarations()](#module_concerto-core.BaseModelManager+getEventDeclarations) ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
    * [.getParticipantDeclarations()](#module_concerto-core.BaseModelManager+getParticipantDeclarations) ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
    * [.getEnumDeclarations()](#module_concerto-core.BaseModelManager+getEnumDeclarations) ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
    * [.getConceptDeclarations()](#module_concerto-core.BaseModelManager+getConceptDeclarations) ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
    * [.getFactory()](#module_concerto-core.BaseModelManager+getFactory) ⇒ <code>Factory</code>
    * [.getSerializer()](#module_concerto-core.BaseModelManager+getSerializer) ⇒ <code>Serializer</code>
    * [.getDecoratorFactories()](#module_concerto-core.BaseModelManager+getDecoratorFactories) ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
    * [.addDecoratorFactory(factory)](#module_concerto-core.BaseModelManager+addDecoratorFactory)
    * [.derivesFrom(fqt1, fqt2)](#module_concerto-core.BaseModelManager+derivesFrom) ⇒ <code>boolean</code>
    * [.resolveMetaModel(metaModel)](#module_concerto-core.BaseModelManager+resolveMetaModel) ⇒ <code>object</code>
    * [.fromAst(ast)](#module_concerto-core.BaseModelManager+fromAst)
    * [.getAst([resolve])](#module_concerto-core.BaseModelManager+getAst) ⇒ <code>\*</code>

<a name="new_module_concerto-core.BaseModelManager_new"></a>

#### new BaseModelManager([options], [processFile])
Create the ModelManager.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Serializer options |
| [processFile] | <code>\*</code> | how to obtain a concerto AST from an input to the model manager |

<a name="module_concerto-core.BaseModelManager+isModelManager"></a>

#### baseModelManager.isModelManager() ⇒ <code>boolean</code>
Returns true

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>boolean</code> - true  
<a name="module_concerto-core.BaseModelManager+accept"></a>

#### baseModelManager.accept(visitor, parameters) ⇒ <code>Object</code>
Visitor design pattern

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Object</code> - the result of visiting or null  

| Param | Type | Description |
| --- | --- | --- |
| visitor | <code>Object</code> | the visitor |
| parameters | <code>Object</code> | the parameter |

<a name="module_concerto-core.BaseModelManager+validateModelFile"></a>

#### baseModelManager.validateModelFile(modelFile, [fileName])
Validates a Concerto file (as a string) to the ModelManager.
Concerto files have a single namespace.

Note that if there are dependencies between multiple files the files
must be added in dependency order, or the addModelFiles method can be
used to add a set of files irrespective of dependencies.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>string</code> \| <code>ModelFile</code> | The Concerto file as a string |
| [fileName] | <code>string</code> | a file name to associate with the model file |

<a name="module_concerto-core.BaseModelManager+addModelFile"></a>

#### baseModelManager.addModelFile(modelFile, [cto], [fileName], [disableValidation]) ⇒ <code>Object</code>
Adds a Concerto file (as an AST) to the ModelManager.
Concerto files have a single namespace. If a Concerto file with the
same namespace has already been added to the ModelManager then it
will be replaced.
Note that if there are dependencies between multiple files the files
must be added in dependency order, or the addModelFiles method can be
used to add a set of files irrespective of dependencies.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | Model as a ModelFile object |
| [cto] | <code>string</code> | an optional cto string |
| [fileName] | <code>string</code> | an optional file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.BaseModelManager+addModel"></a>

#### baseModelManager.addModel(modelInput, [cto], [fileName], [disableValidation]) ⇒ <code>Object</code>
Adds a model to the ModelManager.
Concerto files have a single namespace. If a Concerto file with the
same namespace has already been added to the ModelManager then it
will be replaced.
Note that if there are dependencies between multiple files the files
must be added in dependency order, or the addModel method can be
used to add a set of files irrespective of dependencies.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelInput | <code>\*</code> | Model (as a string or object) |
| [cto] | <code>string</code> | an optional cto string |
| [fileName] | <code>string</code> | an optional file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.BaseModelManager+updateModelFile"></a>

#### baseModelManager.updateModelFile(modelFile, [fileName], [disableValidation]) ⇒ <code>Object</code>
Updates a Concerto file (as a string) on the ModelManager.
Concerto files have a single namespace. If a Concerto file with the
same namespace has already been added to the ModelManager then it
will be replaced.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>string</code> \| <code>ModelFile</code> | Model as a string or object |
| [fileName] | <code>string</code> | a file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.BaseModelManager+deleteModelFile"></a>

#### baseModelManager.deleteModelFile(namespace)
Remove the Concerto file for a given namespace

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | The namespace of the model file to delete. |

<a name="module_concerto-core.BaseModelManager+addModelFiles"></a>

#### baseModelManager.addModelFiles(modelFiles, [fileNames], [disableValidation]) ⇒ <code>Array.&lt;Object&gt;</code>
Add a set of Concerto files to the model manager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;Object&gt;</code> - The newly added model files (internal).  

| Param | Type | Description |
| --- | --- | --- |
| modelFiles | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;ModelFile&gt;</code> | An array of models as strings or ModelFile objects. |
| [fileNames] | <code>Array.&lt;string&gt;</code> | A array of file names to associate with the model files |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

<a name="module_concerto-core.BaseModelManager+validateModelFiles"></a>

#### baseModelManager.validateModelFiles()
Validates all models files in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
<a name="module_concerto-core.BaseModelManager+updateExternalModels"></a>

#### baseModelManager.updateExternalModels([options], [fileDownloader]) ⇒ <code>Promise</code>
Downloads all ModelFiles that are external dependencies and adds or
updates them in this ModelManager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Promise</code> - a promise when the download and update operation is completed.  
**Throws**:

- <code>IllegalModelException</code> if the models fail validation


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object passed to ModelFileLoaders |
| [fileDownloader] | <code>FileDownloader</code> | an optional FileDownloader |

<a name="module_concerto-core.BaseModelManager+writeModelsToFileSystem"></a>

#### baseModelManager.writeModelsToFileSystem(path, [options])
Write all models in this model manager to the specified path in the file system

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | to a local directory |
| [options] | <code>Object</code> | Options object |
| options.includeExternalModels | <code>boolean</code> | If true, external models are written to the file system. Defaults to true |

<a name="module_concerto-core.BaseModelManager+getModels"></a>

#### baseModelManager.getModels([options]) ⇒ <code>Array.&lt;{name:string, content:string}&gt;</code>
Gets all the Concerto models

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;{name:string, content:string}&gt;</code> - the name and content of each CTO file  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object |
| options.includeExternalModels | <code>boolean</code> | If true, external models are written to the file system. Defaults to true |

<a name="module_concerto-core.BaseModelManager+clearModelFiles"></a>

#### baseModelManager.clearModelFiles()
Remove all registered Concerto files

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
<a name="module_concerto-core.BaseModelManager+getModelFile"></a>

#### baseModelManager.getModelFile(namespace) ⇒ <code>ModelFile</code>
Get the ModelFile associated with a namespace

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>ModelFile</code> - registered ModelFile for the namespace or null  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace containing the ModelFile |

<a name="module_concerto-core.BaseModelManager+getNamespaces"></a>

#### baseModelManager.getNamespaces() ⇒ <code>Array.&lt;string&gt;</code>
Get the namespaces registered with the ModelManager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - namespaces - the namespaces that have been registered.  
<a name="module_concerto-core.BaseModelManager+getType"></a>

#### baseModelManager.getType(qualifiedName) ⇒ <code>ClassDeclaration</code>
Look up a type in all registered namespaces.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>ClassDeclaration</code> - - the class declaration for the specified type.  
**Throws**:

- <code>TypeNotFoundException</code> - if the type cannot be found or is a primitive type.


| Param | Type | Description |
| --- | --- | --- |
| qualifiedName | <code>string</code> | fully qualified type name. |

<a name="module_concerto-core.BaseModelManager+getAssetDeclarations"></a>

#### baseModelManager.getAssetDeclarations() ⇒ <code>Array.&lt;AssetDeclaration&gt;</code>
Get the AssetDeclarations defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;AssetDeclaration&gt;</code> - the AssetDeclarations defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getTransactionDeclarations"></a>

#### baseModelManager.getTransactionDeclarations() ⇒ <code>Array.&lt;TransactionDeclaration&gt;</code>
Get the TransactionDeclarations defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;TransactionDeclaration&gt;</code> - the TransactionDeclarations defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getEventDeclarations"></a>

#### baseModelManager.getEventDeclarations() ⇒ <code>Array.&lt;EventDeclaration&gt;</code>
Get the EventDeclarations defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;EventDeclaration&gt;</code> - the EventDeclaration defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getParticipantDeclarations"></a>

#### baseModelManager.getParticipantDeclarations() ⇒ <code>Array.&lt;ParticipantDeclaration&gt;</code>
Get the ParticipantDeclarations defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;ParticipantDeclaration&gt;</code> - the ParticipantDeclaration defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getEnumDeclarations"></a>

#### baseModelManager.getEnumDeclarations() ⇒ <code>Array.&lt;EnumDeclaration&gt;</code>
Get the EnumDeclarations defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;EnumDeclaration&gt;</code> - the EnumDeclaration defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getConceptDeclarations"></a>

#### baseModelManager.getConceptDeclarations() ⇒ <code>Array.&lt;ConceptDeclaration&gt;</code>
Get the Concepts defined in this model manager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;ConceptDeclaration&gt;</code> - the ConceptDeclaration defined in the model manager  
<a name="module_concerto-core.BaseModelManager+getFactory"></a>

#### baseModelManager.getFactory() ⇒ <code>Factory</code>
Get a factory for creating new instances of types defined in this model manager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Factory</code> - A factory for creating new instances of types defined in this model manager.  
<a name="module_concerto-core.BaseModelManager+getSerializer"></a>

#### baseModelManager.getSerializer() ⇒ <code>Serializer</code>
Get a serializer for serializing instances of types defined in this model manager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Serializer</code> - A serializer for serializing instances of types defined in this model manager.  
<a name="module_concerto-core.BaseModelManager+getDecoratorFactories"></a>

#### baseModelManager.getDecoratorFactories() ⇒ <code>Array.&lt;DecoratorFactory&gt;</code>
Get the decorator factories for this model manager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>Array.&lt;DecoratorFactory&gt;</code> - The decorator factories for this model manager.  
<a name="module_concerto-core.BaseModelManager+addDecoratorFactory"></a>

#### baseModelManager.addDecoratorFactory(factory)
Add a decorator factory to this model manager.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>DecoratorFactory</code> | The decorator factory to add to this model manager. |

<a name="module_concerto-core.BaseModelManager+derivesFrom"></a>

#### baseModelManager.derivesFrom(fqt1, fqt2) ⇒ <code>boolean</code>
Checks if this fully qualified type name is derived from another.

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>boolean</code> - True if this instance is an instance of the specified fully
qualified type name, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| fqt1 | <code>string</code> | The fully qualified type name to check. |
| fqt2 | <code>string</code> | The fully qualified type name it is may be derived from. |

<a name="module_concerto-core.BaseModelManager+resolveMetaModel"></a>

#### baseModelManager.resolveMetaModel(metaModel) ⇒ <code>object</code>
Resolve the namespace for names in the metamodel

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>object</code> - the resolved metamodel  

| Param | Type | Description |
| --- | --- | --- |
| metaModel | <code>object</code> | the MetaModel |

<a name="module_concerto-core.BaseModelManager+fromAst"></a>

#### baseModelManager.fromAst(ast)
Populates the model manager from a models metamodel AST

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  

| Param | Type | Description |
| --- | --- | --- |
| ast | <code>\*</code> | the metamodel |

<a name="module_concerto-core.BaseModelManager+getAst"></a>

#### baseModelManager.getAst([resolve]) ⇒ <code>\*</code>
Get the full ast (metamodel instances) for a modelmanager

**Kind**: instance method of [<code>BaseModelManager</code>](#module_concerto-core.BaseModelManager)  
**Returns**: <code>\*</code> - the metamodel  

| Param | Type | Description |
| --- | --- | --- |
| [resolve] | <code>boolean</code> | whether to resolve names |

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

<a name="module_concerto-core.DecoratorManager"></a>

### concerto-core.DecoratorManager
Utility functions to work with
[DecoratorCommandSet](https://models.accordproject.org/concerto/decorators.cto)

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.DecoratorManager](#module_concerto-core.DecoratorManager)
    * [.decorateModels(modelManager, decoratorCommandSet)](#module_concerto-core.DecoratorManager.decorateModels) ⇒ <code>ModelManager</code>
    * [.falsyOrEqual(test, value)](#module_concerto-core.DecoratorManager.falsyOrEqual) ⇒ <code>Boolean</code>
    * [.applyDecorator(decorated, type, newDecorator)](#module_concerto-core.DecoratorManager.applyDecorator)
    * [.executeCommand(namespace, declaration, command)](#module_concerto-core.DecoratorManager.executeCommand)

<a name="module_concerto-core.DecoratorManager.decorateModels"></a>

#### DecoratorManager.decorateModels(modelManager, decoratorCommandSet) ⇒ <code>ModelManager</code>
Applies all the decorator commands from the DecoratorCommandSet
to the ModelManager.

**Kind**: static method of [<code>DecoratorManager</code>](#module_concerto-core.DecoratorManager)  
**Returns**: <code>ModelManager</code> - a new model manager with the decorations applied  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the input model manager |
| decoratorCommandSet | <code>\*</code> | the DecoratorCommandSet object |

<a name="module_concerto-core.DecoratorManager.falsyOrEqual"></a>

#### DecoratorManager.falsyOrEqual(test, value) ⇒ <code>Boolean</code>
Compares two values. If the first argument is falsy
the function returns true.

**Kind**: static method of [<code>DecoratorManager</code>](#module_concerto-core.DecoratorManager)  
**Returns**: <code>Boolean</code> - true if the lhs is falsy or test === value  

| Param | Type | Description |
| --- | --- | --- |
| test | <code>string</code> \| <code>null</code> | the value to test (lhs) |
| value | <code>string</code> | the value to compare (rhs) |

<a name="module_concerto-core.DecoratorManager.applyDecorator"></a>

#### DecoratorManager.applyDecorator(decorated, type, newDecorator)
Applies a decorator to a decorated model element.

**Kind**: static method of [<code>DecoratorManager</code>](#module_concerto-core.DecoratorManager)  

| Param | Type | Description |
| --- | --- | --- |
| decorated | <code>\*</code> | the type to apply the decorator to |
| type | <code>string</code> | the command type |
| newDecorator | <code>\*</code> | the decorator to add |

<a name="module_concerto-core.DecoratorManager.executeCommand"></a>

#### DecoratorManager.executeCommand(namespace, declaration, command)
Executes a Command against a ClassDeclaration, adding
decorators to the ClassDeclaration, or its properties, as required.

**Kind**: static method of [<code>DecoratorManager</code>](#module_concerto-core.DecoratorManager)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace for the declaration |
| declaration | <code>\*</code> | the class declaration |
| command | <code>\*</code> | the Command object from the org.accordproject.decoratorcommands model |

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
        * [.newId()](#module_concerto-core.Factory.newId) ⇒ <code>string</code>

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

<a name="module_concerto-core.Factory.newId"></a>

#### Factory.newId() ⇒ <code>string</code>
Create a new ID for an object.

**Kind**: static method of [<code>Factory</code>](#module_concerto-core.Factory)  
**Returns**: <code>string</code> - a new ID  
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
    * [.declarationKind()](#module_concerto-core.AssetDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.AssetDeclaration_new"></a>

#### new AssetDeclaration(modelFile, ast)
Create an AssetDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.AssetDeclaration+declarationKind"></a>

#### assetDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>AssetDeclaration</code>](#module_concerto-core.AssetDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
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
    * *[._resolveSuperType()](#module_concerto-core.ClassDeclaration+_resolveSuperType) ⇒ <code>ClassDeclaration</code>*
    * *[.validate()](#module_concerto-core.ClassDeclaration+validate)*
    * *[.isAbstract()](#module_concerto-core.ClassDeclaration+isAbstract) ⇒ <code>boolean</code>*
    * *[.getName()](#module_concerto-core.ClassDeclaration+getName) ⇒ <code>string</code>*
    * *[.getNamespace()](#module_concerto-core.ClassDeclaration+getNamespace) ⇒ <code>string</code>*
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
    * *[.isAsset()](#module_concerto-core.ClassDeclaration+isAsset) ⇒ <code>boolean</code>*
    * *[.isParticipant()](#module_concerto-core.ClassDeclaration+isParticipant) ⇒ <code>boolean</code>*
    * *[.isTransaction()](#module_concerto-core.ClassDeclaration+isTransaction) ⇒ <code>boolean</code>*
    * *[.isEvent()](#module_concerto-core.ClassDeclaration+isEvent) ⇒ <code>boolean</code>*
    * *[.isConcept()](#module_concerto-core.ClassDeclaration+isConcept) ⇒ <code>boolean</code>*
    * *[.isEnum()](#module_concerto-core.ClassDeclaration+isEnum) ⇒ <code>boolean</code>*
    * *[.isClassDeclaration()](#module_concerto-core.ClassDeclaration+isClassDeclaration) ⇒ <code>boolean</code>*

<a name="new_module_concerto-core.ClassDeclaration_new"></a>

#### *new ClassDeclaration(modelFile, ast)*
Create a ClassDeclaration from an Abstract Syntax Tree. The AST is the
result of parsing.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | the AST created by the parser |

<a name="module_concerto-core.ClassDeclaration+_resolveSuperType"></a>

#### *classDeclaration.\_resolveSuperType() ⇒ <code>ClassDeclaration</code>*
Resolve the super type on this class and store it as an internal property.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>ClassDeclaration</code> - The super type, or null if non specified.  
<a name="module_concerto-core.ClassDeclaration+validate"></a>

#### *classDeclaration.validate()*
Semantic validation of the structure of this class. Subclasses should
override this method to impose additional semantic constraints on the
contents/relations of fields.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Throws**:

- <code>IllegalModelException</code> 

**Access**: protected  
<a name="module_concerto-core.ClassDeclaration+isAbstract"></a>

#### *classDeclaration.isAbstract() ⇒ <code>boolean</code>*
Returns true if this class is declared as abstract in the model file

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is abstract  
<a name="module_concerto-core.ClassDeclaration+getName"></a>

#### *classDeclaration.getName() ⇒ <code>string</code>*
Returns the short name of a class. This name does not include the
namespace from the owning ModelFile.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - the short name of this class  
<a name="module_concerto-core.ClassDeclaration+getNamespace"></a>

#### *classDeclaration.getNamespace() ⇒ <code>string</code>*
Return the namespace of this class.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>string</code> - namespace - a namespace.  
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
**Returns**: <code>string</code> - the name of the id field for this class or null if it does not exist  
<a name="module_concerto-core.ClassDeclaration+getOwnProperty"></a>

#### *classDeclaration.getOwnProperty(name) ⇒ <code>Property</code>*
Returns the field with a given name or null if it does not exist.
The field must be directly owned by this class -- the super-type is
not introspected.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>Property</code> - the field definition or null if it does not exist  

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
<a name="module_concerto-core.ClassDeclaration+isAsset"></a>

#### *classDeclaration.isAsset() ⇒ <code>boolean</code>*
Returns true if this class is the definition of an asset.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isParticipant"></a>

#### *classDeclaration.isParticipant() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a participant.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isTransaction"></a>

#### *classDeclaration.isTransaction() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a transaction.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isEvent"></a>

#### *classDeclaration.isEvent() ⇒ <code>boolean</code>*
Returns true if this class is the definition of an event.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isConcept"></a>

#### *classDeclaration.isConcept() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a concept.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isEnum"></a>

#### *classDeclaration.isEnum() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a enum.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
<a name="module_concerto-core.ClassDeclaration+isClassDeclaration"></a>

#### *classDeclaration.isClassDeclaration() ⇒ <code>boolean</code>*
Returns true if this class is the definition of a enum.

**Kind**: instance method of [<code>ClassDeclaration</code>](#module_concerto-core.ClassDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an asset  
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
    * [.declarationKind()](#module_concerto-core.ConceptDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.ConceptDeclaration_new"></a>

#### new ConceptDeclaration(modelFile, ast)
Create a ConceptDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.ConceptDeclaration+declarationKind"></a>

#### conceptDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>ConceptDeclaration</code>](#module_concerto-core.ConceptDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
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
**Returns**: <code>Array.&lt;object&gt;</code> - the arguments for this decorator  
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
    * [.toString()](#module_concerto-core.EnumDeclaration+toString) ⇒ <code>String</code>
    * [.declarationKind()](#module_concerto-core.EnumDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.EnumDeclaration_new"></a>

#### new EnumDeclaration(modelFile, ast)
Create an EnumDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EnumDeclaration+toString"></a>

#### enumDeclaration.toString() ⇒ <code>String</code>
Returns the string representation of this class

**Kind**: instance method of [<code>EnumDeclaration</code>](#module_concerto-core.EnumDeclaration)  
**Returns**: <code>String</code> - the string representation of the class  
<a name="module_concerto-core.EnumDeclaration+declarationKind"></a>

#### enumDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>EnumDeclaration</code>](#module_concerto-core.EnumDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
<a name="module_concerto-core.EnumValueDeclaration"></a>

### concerto-core.EnumValueDeclaration ⇐ <code>Property</code>
Class representing a value from a set of enumerated values

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Property</code>  
**See**: See [Property](Property)  

* [.EnumValueDeclaration](#module_concerto-core.EnumValueDeclaration) ⇐ <code>Property</code>
    * [new EnumValueDeclaration(parent, ast)](#new_module_concerto-core.EnumValueDeclaration_new)
    * [.isEnumValue()](#module_concerto-core.EnumValueDeclaration+isEnumValue) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.EnumValueDeclaration_new"></a>

#### new EnumValueDeclaration(parent, ast)
Create a EnumValueDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> | The owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EnumValueDeclaration+isEnumValue"></a>

#### enumValueDeclaration.isEnumValue() ⇒ <code>boolean</code>
Returns true if this class is the definition of a enum value.

**Kind**: instance method of [<code>EnumValueDeclaration</code>](#module_concerto-core.EnumValueDeclaration)  
**Returns**: <code>boolean</code> - true if the class is an enum value  
<a name="module_concerto-core.EventDeclaration"></a>

### concerto-core.EventDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of an Event.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.EventDeclaration](#module_concerto-core.EventDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new EventDeclaration(modelFile, ast)](#new_module_concerto-core.EventDeclaration_new)
    * [.declarationKind()](#module_concerto-core.EventDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.EventDeclaration_new"></a>

#### new EventDeclaration(modelFile, ast)
Create an EventDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.EventDeclaration+declarationKind"></a>

#### eventDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>EventDeclaration</code>](#module_concerto-core.EventDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
<a name="module_concerto-core.IdentifiedDeclaration"></a>

### *concerto-core.IdentifiedDeclaration ⇐ <code>ClassDeclaration</code>*
IdentifiedDeclaration

**Kind**: static abstract class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See [ClassDeclaration](ClassDeclaration)  
<a name="new_module_concerto-core.IdentifiedDeclaration_new"></a>

#### *new IdentifiedDeclaration(modelFile, ast)*
Create an IdentifiedDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.IllegalModelException"></a>

### concerto-core.IllegalModelException ⇐ <code>BaseFileException</code>
Exception throws when a composer file is semantically invalid

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>BaseFileException</code>  
**See**: See  [BaseFileException](BaseFileException)  
<a name="new_module_concerto-core.IllegalModelException_new"></a>

#### new IllegalModelException(message, [modelFile], [fileLocation], [component])
Create an IllegalModelException.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | the message for the exception |
| [modelFile] | <code>ModelFile</code> | the modelfile associated with the exception |
| [fileLocation] | <code>Object</code> | location details of the error within the model file. |
| fileLocation.start.line | <code>number</code> | start line of the error location. |
| fileLocation.start.column | <code>number</code> | start column of the error location. |
| fileLocation.end.line | <code>number</code> | end line of the error location. |
| fileLocation.end.column | <code>number</code> | end column of the error location. |
| [component] | <code>string</code> | the component which throws this error |

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
    * [new ModelFile(modelManager, ast, [definitions], [fileName])](#new_module_concerto-core.ModelFile_new)
    * [.isModelFile()](#module_concerto-core.ModelFile+isModelFile) ⇒ <code>boolean</code>
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
    * [.getAst()](#module_concerto-core.ModelFile+getAst) ⇒ <code>object</code>
    * [.getConcertoVersion()](#module_concerto-core.ModelFile+getConcertoVersion) ⇒ <code>string</code>
    * [.isCompatibleVersion()](#module_concerto-core.ModelFile+isCompatibleVersion)

<a name="new_module_concerto-core.ModelFile_new"></a>

#### new ModelFile(modelManager, ast, [definitions], [fileName])
Create a ModelFile. This should only be called by framework code.
Use the ModelManager to manage ModelFiles.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the ModelManager that manages this ModelFile |
| ast | <code>object</code> | The abstract syntax tree of the model as a JSON object. |
| [definitions] | <code>string</code> | The optional CTO model as a string. |
| [fileName] | <code>string</code> | The optional filename for this modelfile |

<a name="module_concerto-core.ModelFile+isModelFile"></a>

#### modelFile.isModelFile() ⇒ <code>boolean</code>
Returns true

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>boolean</code> - true  
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
<a name="module_concerto-core.ModelFile+getAst"></a>

#### modelFile.getAst() ⇒ <code>object</code>
Get the ast for this model.

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>object</code> - The definitions for this model.  
<a name="module_concerto-core.ModelFile+getConcertoVersion"></a>

#### modelFile.getConcertoVersion() ⇒ <code>string</code>
Get the expected concerto version

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
**Returns**: <code>string</code> - The semver range for compatible concerto versions  
<a name="module_concerto-core.ModelFile+isCompatibleVersion"></a>

#### modelFile.isCompatibleVersion()
Check whether this modelfile is compatible with the concerto version

**Kind**: instance method of [<code>ModelFile</code>](#module_concerto-core.ModelFile)  
<a name="module_concerto-core.ParticipantDeclaration"></a>

### concerto-core.ParticipantDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of a Participant.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.ParticipantDeclaration](#module_concerto-core.ParticipantDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new ParticipantDeclaration(modelFile, ast)](#new_module_concerto-core.ParticipantDeclaration_new)
    * [.declarationKind()](#module_concerto-core.ParticipantDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.ParticipantDeclaration_new"></a>

#### new ParticipantDeclaration(modelFile, ast)
Create an ParticipantDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.ParticipantDeclaration+declarationKind"></a>

#### participantDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>ParticipantDeclaration</code>](#module_concerto-core.ParticipantDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
<a name="module_concerto-core.Property"></a>

### concerto-core.Property
Property representing an attribute of a class declaration,
either a Field or a Relationship.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.Property](#module_concerto-core.Property)
    * [new Property(parent, ast)](#new_module_concerto-core.Property_new)
    * [.getParent()](#module_concerto-core.Property+getParent) ⇒ <code>ClassDeclaration</code>
    * [.validate(classDecl)](#module_concerto-core.Property+validate)
    * [.getName()](#module_concerto-core.Property+getName) ⇒ <code>string</code>
    * [.getType()](#module_concerto-core.Property+getType) ⇒ <code>string</code>
    * [.isOptional()](#module_concerto-core.Property+isOptional) ⇒ <code>boolean</code>
    * [.getFullyQualifiedTypeName()](#module_concerto-core.Property+getFullyQualifiedTypeName) ⇒ <code>string</code>
    * [.getFullyQualifiedName()](#module_concerto-core.Property+getFullyQualifiedName) ⇒ <code>string</code>
    * [.getNamespace()](#module_concerto-core.Property+getNamespace) ⇒ <code>string</code>
    * [.isArray()](#module_concerto-core.Property+isArray) ⇒ <code>boolean</code>
    * [.isTypeEnum()](#module_concerto-core.Property+isTypeEnum) ⇒ <code>boolean</code>
    * [.isPrimitive()](#module_concerto-core.Property+isPrimitive) ⇒ <code>boolean</code>

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
<a name="module_concerto-core.Property+validate"></a>

#### property.validate(classDecl)
Validate the property

**Kind**: instance method of [<code>Property</code>](#module_concerto-core.Property)  
**Throws**:

- <code>IllegalModelException</code> 

**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| classDecl | <code>ClassDeclaration</code> | the class declaration of the property |

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
<a name="module_concerto-core.RelationshipDeclaration"></a>

### concerto-core.RelationshipDeclaration ⇐ <code>Property</code>
Class representing a relationship between model elements

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Property</code>  
**See**: See  [Property](Property)  

* [.RelationshipDeclaration](#module_concerto-core.RelationshipDeclaration) ⇐ <code>Property</code>
    * [new RelationshipDeclaration(parent, ast)](#new_module_concerto-core.RelationshipDeclaration_new)
    * [.validate(classDecl)](#module_concerto-core.RelationshipDeclaration+validate)
    * [.toString()](#module_concerto-core.RelationshipDeclaration+toString) ⇒ <code>String</code>
    * [.isRelationship()](#module_concerto-core.RelationshipDeclaration+isRelationship) ⇒ <code>boolean</code>

<a name="new_module_concerto-core.RelationshipDeclaration_new"></a>

#### new RelationshipDeclaration(parent, ast)
Create a Relationship.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| parent | <code>ClassDeclaration</code> | The owner of this property |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.RelationshipDeclaration+validate"></a>

#### relationshipDeclaration.validate(classDecl)
Validate the property

**Kind**: instance method of [<code>RelationshipDeclaration</code>](#module_concerto-core.RelationshipDeclaration)  
**Throws**:

- <code>IllegalModelException</code> 

**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| classDecl | <code>ClassDeclaration</code> | the class declaration of the property |

<a name="module_concerto-core.RelationshipDeclaration+toString"></a>

#### relationshipDeclaration.toString() ⇒ <code>String</code>
Returns a string representation of this property

**Kind**: instance method of [<code>RelationshipDeclaration</code>](#module_concerto-core.RelationshipDeclaration)  
**Returns**: <code>String</code> - the string version of the property.  
<a name="module_concerto-core.RelationshipDeclaration+isRelationship"></a>

#### relationshipDeclaration.isRelationship() ⇒ <code>boolean</code>
Returns true if this class is the definition of a relationship.

**Kind**: instance method of [<code>RelationshipDeclaration</code>](#module_concerto-core.RelationshipDeclaration)  
**Returns**: <code>boolean</code> - true if the class is a relationship  
<a name="module_concerto-core.TransactionDeclaration"></a>

### concerto-core.TransactionDeclaration ⇐ <code>ClassDeclaration</code>
Class representing the definition of an Transaction.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>ClassDeclaration</code>  
**See**: See  [ClassDeclaration](ClassDeclaration)  

* [.TransactionDeclaration](#module_concerto-core.TransactionDeclaration) ⇐ <code>ClassDeclaration</code>
    * [new TransactionDeclaration(modelFile, ast)](#new_module_concerto-core.TransactionDeclaration_new)
    * [.declarationKind()](#module_concerto-core.TransactionDeclaration+declarationKind) ⇒ <code>string</code>

<a name="new_module_concerto-core.TransactionDeclaration_new"></a>

#### new TransactionDeclaration(modelFile, ast)
Create an TransactionDeclaration.

**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the ModelFile for this class |
| ast | <code>Object</code> | The AST created by the parser |

<a name="module_concerto-core.TransactionDeclaration+declarationKind"></a>

#### transactionDeclaration.declarationKind() ⇒ <code>string</code>
Returns the kind of declaration

**Kind**: instance method of [<code>TransactionDeclaration</code>](#module_concerto-core.TransactionDeclaration)  
**Returns**: <code>string</code> - what kind of declaration this is  
<a name="module_concerto-core.Identifiable"></a>

### *concerto-core.Identifiable ⇐ <code>Typed</code>*
Identifiable is an entity with a namespace, type and an identifier.
Applications should retrieve instances from [Factory](Factory)
This class is abstract.

**Kind**: static abstract class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>Typed</code>  
**Access**: protected  

* *[.Identifiable](#module_concerto-core.Identifiable) ⇐ <code>Typed</code>*
    * *[new Identifiable(modelManager, classDeclaration, ns, type, id, timestamp)](#new_module_concerto-core.Identifiable_new)*
    * *[.getTimestamp()](#module_concerto-core.Identifiable+getTimestamp) ⇒ <code>string</code>*
    * *[.getIdentifier()](#module_concerto-core.Identifiable+getIdentifier) ⇒ <code>string</code>*
    * *[.setIdentifier(id)](#module_concerto-core.Identifiable+setIdentifier)*
    * *[.getFullyQualifiedIdentifier()](#module_concerto-core.Identifiable+getFullyQualifiedIdentifier) ⇒ <code>string</code>*
    * *[.toString()](#module_concerto-core.Identifiable+toString) ⇒ <code>String</code>*
    * *[.isRelationship()](#module_concerto-core.Identifiable+isRelationship) ⇒ <code>boolean</code>*
    * *[.isResource()](#module_concerto-core.Identifiable+isResource) ⇒ <code>boolean</code>*
    * *[.toURI()](#module_concerto-core.Identifiable+toURI) ⇒ <code>String</code>*

<a name="new_module_concerto-core.Identifiable_new"></a>

#### *new Identifiable(modelManager, classDeclaration, ns, type, id, timestamp)*
Create an instance.
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

<a name="module_concerto-core.Identifiable+getTimestamp"></a>

#### *identifiable.getTimestamp() ⇒ <code>string</code>*
Get the timestamp of this instance

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>string</code> - The timestamp for this object  
<a name="module_concerto-core.Identifiable+getIdentifier"></a>

#### *identifiable.getIdentifier() ⇒ <code>string</code>*
Get the identifier of this instance

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>string</code> - The identifier for this object  
<a name="module_concerto-core.Identifiable+setIdentifier"></a>

#### *identifiable.setIdentifier(id)*
Set the identifier of this instance

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the new identifier for this object |

<a name="module_concerto-core.Identifiable+getFullyQualifiedIdentifier"></a>

#### *identifiable.getFullyQualifiedIdentifier() ⇒ <code>string</code>*
Get the fully qualified identifier of this instance.
(namespace '.' type '#' identifier).

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>string</code> - the fully qualified identifier of this instance  
<a name="module_concerto-core.Identifiable+toString"></a>

#### *identifiable.toString() ⇒ <code>String</code>*
Returns the string representation of this class

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>String</code> - the string representation of the class  
<a name="module_concerto-core.Identifiable+isRelationship"></a>

#### *identifiable.isRelationship() ⇒ <code>boolean</code>*
Determine if this identifiable is a relationship.

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>boolean</code> - True if this identifiable is a relationship,
false if not.  
<a name="module_concerto-core.Identifiable+isResource"></a>

#### *identifiable.isResource() ⇒ <code>boolean</code>*
Determine if this identifiable is a resource.

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>boolean</code> - True if this identifiable is a resource,
false if not.  
<a name="module_concerto-core.Identifiable+toURI"></a>

#### *identifiable.toURI() ⇒ <code>String</code>*
Returns a URI representation of a reference to this identifiable

**Kind**: instance method of [<code>Identifiable</code>](#module_concerto-core.Identifiable)  
**Returns**: <code>String</code> - the URI for the identifiable  
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
<a name="module_concerto-core.Typed"></a>

### *concerto-core.Typed*
Object is an instance with a namespace and a type.

This class is abstract.

**Kind**: static abstract class of [<code>concerto-core</code>](#module_concerto-core)  
**Access**: protected  

* *[.Typed](#module_concerto-core.Typed)*
    * *[new Typed(modelManager, classDeclaration, ns, type)](#new_module_concerto-core.Typed_new)*
    * *[.getType()](#module_concerto-core.Typed+getType) ⇒ <code>string</code>*
    * *[.getFullyQualifiedType()](#module_concerto-core.Typed+getFullyQualifiedType) ⇒ <code>string</code>*
    * *[.getNamespace()](#module_concerto-core.Typed+getNamespace) ⇒ <code>string</code>*
    * *[.setPropertyValue(propName, value)](#module_concerto-core.Typed+setPropertyValue)*
    * *[.addArrayValue(propName, value)](#module_concerto-core.Typed+addArrayValue)*
    * *[.instanceOf(fqt)](#module_concerto-core.Typed+instanceOf) ⇒ <code>boolean</code>*
    * *[.toJSON()](#module_concerto-core.Typed+toJSON)*

<a name="new_module_concerto-core.Typed_new"></a>

#### *new Typed(modelManager, classDeclaration, ns, type)*
Create an instance.
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

<a name="module_concerto-core.Typed+getType"></a>

#### *typed.getType() ⇒ <code>string</code>*
Get the type of the instance (a short name, not including namespace).

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  
**Returns**: <code>string</code> - The type of this object  
<a name="module_concerto-core.Typed+getFullyQualifiedType"></a>

#### *typed.getFullyQualifiedType() ⇒ <code>string</code>*
Get the fully-qualified type name of the instance (including namespace).

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  
**Returns**: <code>string</code> - The fully-qualified type name of this object  
<a name="module_concerto-core.Typed+getNamespace"></a>

#### *typed.getNamespace() ⇒ <code>string</code>*
Get the namespace of the instance.

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  
**Returns**: <code>string</code> - The namespace of this object  
<a name="module_concerto-core.Typed+setPropertyValue"></a>

#### *typed.setPropertyValue(propName, value)*
Sets a property on this Resource

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  

| Param | Type | Description |
| --- | --- | --- |
| propName | <code>string</code> | the name of the field |
| value | <code>string</code> | the value of the property |

<a name="module_concerto-core.Typed+addArrayValue"></a>

#### *typed.addArrayValue(propName, value)*
Adds a value to an array property on this Resource

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  

| Param | Type | Description |
| --- | --- | --- |
| propName | <code>string</code> | the name of the field |
| value | <code>string</code> | the value of the property |

<a name="module_concerto-core.Typed+instanceOf"></a>

#### *typed.instanceOf(fqt) ⇒ <code>boolean</code>*
Check to see if this instance is an instance of the specified fully qualified
type name.

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  
**Returns**: <code>boolean</code> - True if this instance is an instance of the specified fully
qualified type name, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| fqt | <code>String</code> | The fully qualified type name. |

<a name="module_concerto-core.Typed+toJSON"></a>

#### *typed.toJSON()*
Overriden to prevent people accidentally converting a resource to JSON
without using the Serializer.

**Kind**: instance method of [<code>Typed</code>](#module_concerto-core.Typed)  
**Access**: protected  
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
Manages the Concerto model files in CTO format.

The structure of [Resource](Resource)s (Assets, Transactions, Participants) is modelled
in a set of Concerto files. The contents of these files are managed
by the [ModelManager](ModelManager). Each Concerto file has a single namespace and contains
a set of asset, transaction and participant type definitions.

Concerto applications load their Concerto files and then call the [addModelFile](ModelManager#addModelFile)
method to register the Concerto file(s) with the ModelManager.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.ModelManager](#module_concerto-core.ModelManager)
    * [new ModelManager([options])](#new_module_concerto-core.ModelManager_new)
    * [.addCTOModel(cto, [fileName], [disableValidation])](#module_concerto-core.ModelManager+addCTOModel) ⇒ <code>Object</code>

<a name="new_module_concerto-core.ModelManager_new"></a>

#### new ModelManager([options])
Create the ModelManager.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Serializer options |

<a name="module_concerto-core.ModelManager+addCTOModel"></a>

#### modelManager.addCTOModel(cto, [fileName], [disableValidation]) ⇒ <code>Object</code>
Adds a model in CTO format to the ModelManager.
This is a convenience function equivalent to `addModel` but useful since it avoids having to copy the input CTO.

**Kind**: instance method of [<code>ModelManager</code>](#module_concerto-core.ModelManager)  
**Returns**: <code>Object</code> - The newly added model file (internal).  
**Throws**:

- <code>IllegalModelException</code> 


| Param | Type | Description |
| --- | --- | --- |
| cto | <code>string</code> | a cto string |
| [fileName] | <code>string</code> | an optional file name to associate with the model file |
| [disableValidation] | <code>boolean</code> | If true then the model files are not validated |

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
    * [new Serializer(factory, modelManager, [options])](#new_module_concerto-core.Serializer_new)
    * [.setDefaultOptions(newDefaultOptions)](#module_concerto-core.Serializer+setDefaultOptions)
    * [.toJSON(resource, [options])](#module_concerto-core.Serializer+toJSON) ⇒ <code>Object</code>
    * [.fromJSON(jsonObject, [options])](#module_concerto-core.Serializer+fromJSON) ⇒ <code>Resource</code>

<a name="new_module_concerto-core.Serializer_new"></a>

#### new Serializer(factory, modelManager, [options])
Create a Serializer.


| Param | Type | Description |
| --- | --- | --- |
| factory | <code>Factory</code> | The Factory to use to create instances |
| modelManager | <code>ModelManager</code> | The ModelManager to use for validation etc. |
| [options] | <code>object</code> | Serializer options |

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

#### serializer.fromJSON(jsonObject, [options]) ⇒ <code>Resource</code>
Create a [Resource](Resource) from a JavaScript Object representation.
The JavaScript Object should have been created by calling the
[toJSON](Serializer#toJSON) API.

The Resource is populated based on the JavaScript object.

**Kind**: instance method of [<code>Serializer</code>](#module_concerto-core.Serializer)  
**Returns**: <code>Resource</code> - The new populated resource  

| Param | Type | Description |
| --- | --- | --- |
| jsonObject | <code>Object</code> | The JavaScript Object for a Resource |
| [options] | <code>Object</code> | the optional serialization options |
| options.acceptResourcesForRelationships | <code>boolean</code> | handle JSON objects in the place of strings for relationships, defaults to false. |
| options.validate | <code>boolean</code> | validate the structure of the Resource with its model prior to serialization (default to true) |
| [options.utcOffset] | <code>number</code> | UTC Offset for DateTime values. |

<a name="module_concerto-core.TypeNotFoundException"></a>

### concerto-core.TypeNotFoundException ⇐ <code>BaseException</code>
Error thrown when a Concerto type does not exist.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  
**Extends**: <code>BaseException</code>  
**See**: see [BaseException](BaseException)  

* [.TypeNotFoundException](#module_concerto-core.TypeNotFoundException) ⇐ <code>BaseException</code>
    * [new TypeNotFoundException(typeName, message, component)](#new_module_concerto-core.TypeNotFoundException_new)
    * [.getTypeName()](#module_concerto-core.TypeNotFoundException+getTypeName) ⇒ <code>string</code>

<a name="new_module_concerto-core.TypeNotFoundException_new"></a>

#### new TypeNotFoundException(typeName, message, component)
Constructor. If the optional 'message' argument is not supplied, it will be set to a default value that
includes the type name.


| Param | Type | Description |
| --- | --- | --- |
| typeName | <code>string</code> | fully qualified type name. |
| message | <code>string</code> \| <code>undefined</code> | error message. |
| component | <code>string</code> | the optional component which throws this error |

<a name="module_concerto-core.TypeNotFoundException+getTypeName"></a>

#### typeNotFoundException.getTypeName() ⇒ <code>string</code>
Get the name of the type that was not found.

**Kind**: instance method of [<code>TypeNotFoundException</code>](#module_concerto-core.TypeNotFoundException)  
**Returns**: <code>string</code> - fully qualified type name.  
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
    * [new BaseFileException(message, fileLocation, fullMessage, [fileName], [component])](#new_module_concerto-core.BaseFileException_new)
    * [.getFileLocation()](#module_concerto-core.BaseFileException+getFileLocation) ⇒ <code>string</code>
    * [.getShortMessage()](#module_concerto-core.BaseFileException+getShortMessage) ⇒ <code>string</code>
    * [.getFileName()](#module_concerto-core.BaseFileException+getFileName) ⇒ <code>string</code>

<a name="new_module_concerto-core.BaseFileException_new"></a>

#### new BaseFileException(message, fileLocation, fullMessage, [fileName], [component])
Create an BaseFileException


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | the message for the exception |
| fileLocation | <code>string</code> | the optional file location associated with the exception |
| fullMessage | <code>string</code> | the optional full message text |
| [fileName] | <code>string</code> | the file name |
| [component] | <code>string</code> | the component which throws this error |

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
<a name="module_concerto-core.FileDownloader"></a>

### concerto-core.FileDownloader
Downloads the transitive closure of a set of model files.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.FileDownloader](#module_concerto-core.FileDownloader)
    * [new FileDownloader(fileLoader, getExternalImports, concurrency)](#new_module_concerto-core.FileDownloader_new)
    * [.downloadExternalDependencies(files, [options])](#module_concerto-core.FileDownloader+downloadExternalDependencies) ⇒ <code>Promise</code>
    * [.runJob(job, fileLoader)](#module_concerto-core.FileDownloader+runJob) ⇒ <code>Promise</code>

<a name="new_module_concerto-core.FileDownloader_new"></a>

#### new FileDownloader(fileLoader, getExternalImports, concurrency)
Create a FileDownloader and bind to a FileLoader.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fileLoader | <code>\*</code> |  | the loader to use to download model files |
| getExternalImports | <code>\*</code> |  | a function taking a file and returning new files |
| concurrency | <code>Number</code> | <code>10</code> | the number of model files to download concurrently |

<a name="module_concerto-core.FileDownloader+downloadExternalDependencies"></a>

#### fileDownloader.downloadExternalDependencies(files, [options]) ⇒ <code>Promise</code>
Download all external dependencies for an array of model files

**Kind**: instance method of [<code>FileDownloader</code>](#module_concerto-core.FileDownloader)  
**Returns**: <code>Promise</code> - a promise that resolves to Files[] for the external model files  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;File&gt;</code> | the model files |
| [options] | <code>Object</code> | Options object passed to FileLoaders |

<a name="module_concerto-core.FileDownloader+runJob"></a>

#### fileDownloader.runJob(job, fileLoader) ⇒ <code>Promise</code>
Execute a Job

**Kind**: instance method of [<code>FileDownloader</code>](#module_concerto-core.FileDownloader)  
**Returns**: <code>Promise</code> - a promise to the job results  

| Param | Type | Description |
| --- | --- | --- |
| job | <code>Object</code> | the job to execute |
| fileLoader | <code>Object</code> | the loader to use to download model files. |

<a name="module_concerto-core.TypedStack"></a>

### concerto-core.TypedStack
Tracks a stack of typed instances. The type information is used to detect
overflow / underflow bugs by the caller. It also performs basic sanity
checking on push/pop to make detecting bugs easier.

**Kind**: static class of [<code>concerto-core</code>](#module_concerto-core)  

* [.TypedStack](#module_concerto-core.TypedStack)
    * [new TypedStack(resource)](#new_module_concerto-core.TypedStack_new)
    * [.push(obj, expectedType)](#module_concerto-core.TypedStack+push)
    * [.pop(expectedType)](#module_concerto-core.TypedStack+pop) ⇒ <code>Object</code>
    * [.peek(expectedType)](#module_concerto-core.TypedStack+peek) ⇒ <code>Object</code>
    * [.clear()](#module_concerto-core.TypedStack+clear)

<a name="new_module_concerto-core.TypedStack_new"></a>

#### new TypedStack(resource)
Create the Stack with the resource at the head.


| Param | Type | Description |
| --- | --- | --- |
| resource | <code>Object</code> | the resource to be put at the head of the stack |

<a name="module_concerto-core.TypedStack+push"></a>

#### typedStack.push(obj, expectedType)
Push a new object.

**Kind**: instance method of [<code>TypedStack</code>](#module_concerto-core.TypedStack)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object being visited |
| expectedType | <code>Object</code> | the expected type of the object being pushed |

<a name="module_concerto-core.TypedStack+pop"></a>

#### typedStack.pop(expectedType) ⇒ <code>Object</code>
Push a new object.

**Kind**: instance method of [<code>TypedStack</code>](#module_concerto-core.TypedStack)  
**Returns**: <code>Object</code> - the result of pop  

| Param | Type | Description |
| --- | --- | --- |
| expectedType | <code>Object</code> | the type that should be the result of pop |

<a name="module_concerto-core.TypedStack+peek"></a>

#### typedStack.peek(expectedType) ⇒ <code>Object</code>
Peek the top of the stack

**Kind**: instance method of [<code>TypedStack</code>](#module_concerto-core.TypedStack)  
**Returns**: <code>Object</code> - the result of peek  

| Param | Type | Description |
| --- | --- | --- |
| expectedType | <code>Object</code> | the type that should be the result of pop |

<a name="module_concerto-core.TypedStack+clear"></a>

#### typedStack.clear()
Clears the stack

**Kind**: instance method of [<code>TypedStack</code>](#module_concerto-core.TypedStack)  
<a name="module_concerto-core..version"></a>

### concerto-core~version : <code>Object</code>
**Kind**: inner constant of [<code>concerto-core</code>](#module_concerto-core)  
<a name="module_concerto-cto"></a>

## concerto-cto
Concerto CTO concrete syntax module. Concerto is a framework for defining domain
specific models.

<a name="module_concerto-metamodel"></a>

## concerto-metamodel
Concerto metamodel management. Concerto is a framework for defining domain
specific models.

<a name="module_concerto-tools"></a>

## concerto-tools
Concerto Tools module.

<a name="module_concerto-util"></a>

## concerto-util
Concerto utility module. Concerto is a framework for defining domain
specific models.

<a name="module_concerto-vocabulary"></a>

## concerto-vocabulary
Concerto vocabulary module. Concerto is a framework for defining domain
specific models.


* [concerto-vocabulary](#module_concerto-vocabulary)
    * [.Vocabulary](#module_concerto-vocabulary.Vocabulary)
        * [new Vocabulary(vocabularyManager, voc)](#new_module_concerto-vocabulary.Vocabulary_new)
        * [.getNamespace()](#module_concerto-vocabulary.Vocabulary+getNamespace) ⇒ <code>string</code>
        * [.getLocale()](#module_concerto-vocabulary.Vocabulary+getLocale) ⇒ <code>string</code>
        * [.getIdentifier()](#module_concerto-vocabulary.Vocabulary+getIdentifier) ⇒ <code>string</code>
        * [.getTerms()](#module_concerto-vocabulary.Vocabulary+getTerms) ⇒ <code>Array</code>
        * [.getTerm(declarationName, [propertyName])](#module_concerto-vocabulary.Vocabulary+getTerm) ⇒ <code>string</code>
        * [.validate(modelFile)](#module_concerto-vocabulary.Vocabulary+validate) ⇒ <code>\*</code>
        * [.toJSON()](#module_concerto-vocabulary.Vocabulary+toJSON) ⇒ <code>\*</code>
    * [.VocabularyManager](#module_concerto-vocabulary.VocabularyManager)
        * [new VocabularyManager([options])](#new_module_concerto-vocabulary.VocabularyManager_new)
        * _instance_
            * [.clear()](#module_concerto-vocabulary.VocabularyManager+clear)
            * [.removeVocabulary(namespace, locale)](#module_concerto-vocabulary.VocabularyManager+removeVocabulary)
            * [.addVocabulary(contents)](#module_concerto-vocabulary.VocabularyManager+addVocabulary) ⇒ <code>Vocabulary</code>
            * [.getVocabulary(namespace, locale, [options])](#module_concerto-vocabulary.VocabularyManager+getVocabulary) ⇒ <code>Vocabulary</code>
            * [.getVocabulariesForNamespace(namespace)](#module_concerto-vocabulary.VocabularyManager+getVocabulariesForNamespace) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
            * [.getVocabulariesForLocale(locale)](#module_concerto-vocabulary.VocabularyManager+getVocabulariesForLocale) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
            * [.resolveTerm(modelManager, namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager+resolveTerm) ⇒ <code>string</code>
            * [.getTerm(namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager+getTerm) ⇒ <code>string</code>
            * [.generateDecoratorCommands(modelManager, locale)](#module_concerto-vocabulary.VocabularyManager+generateDecoratorCommands) ⇒ <code>\*</code>
            * [.validate(modelManager, locale)](#module_concerto-vocabulary.VocabularyManager+validate) ⇒ <code>\*</code>
        * _static_
            * [.englishMissingTermGenerator(namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager.englishMissingTermGenerator) ⇒ <code>string</code>
            * [.findVocabulary(requestedLocale, vocabularies, [options])](#module_concerto-vocabulary.VocabularyManager.findVocabulary) ⇒ <code>Vocabulary</code>

<a name="module_concerto-vocabulary.Vocabulary"></a>

### concerto-vocabulary.Vocabulary
A vocabulary for a concerto model

**Kind**: static class of [<code>concerto-vocabulary</code>](#module_concerto-vocabulary)  

* [.Vocabulary](#module_concerto-vocabulary.Vocabulary)
    * [new Vocabulary(vocabularyManager, voc)](#new_module_concerto-vocabulary.Vocabulary_new)
    * [.getNamespace()](#module_concerto-vocabulary.Vocabulary+getNamespace) ⇒ <code>string</code>
    * [.getLocale()](#module_concerto-vocabulary.Vocabulary+getLocale) ⇒ <code>string</code>
    * [.getIdentifier()](#module_concerto-vocabulary.Vocabulary+getIdentifier) ⇒ <code>string</code>
    * [.getTerms()](#module_concerto-vocabulary.Vocabulary+getTerms) ⇒ <code>Array</code>
    * [.getTerm(declarationName, [propertyName])](#module_concerto-vocabulary.Vocabulary+getTerm) ⇒ <code>string</code>
    * [.validate(modelFile)](#module_concerto-vocabulary.Vocabulary+validate) ⇒ <code>\*</code>
    * [.toJSON()](#module_concerto-vocabulary.Vocabulary+toJSON) ⇒ <code>\*</code>

<a name="new_module_concerto-vocabulary.Vocabulary_new"></a>

#### new Vocabulary(vocabularyManager, voc)
Create the Vocabulary


| Param | Type | Description |
| --- | --- | --- |
| vocabularyManager | <code>VocabularyManager</code> | the manager for this vocabulary |
| voc | <code>object</code> | the JSON representation of the vocabulary |

<a name="module_concerto-vocabulary.Vocabulary+getNamespace"></a>

#### vocabulary.getNamespace() ⇒ <code>string</code>
Returns the namespace for the vocabulary

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>string</code> - the namespace for this vocabulary  
<a name="module_concerto-vocabulary.Vocabulary+getLocale"></a>

#### vocabulary.getLocale() ⇒ <code>string</code>
Returns the locale for the vocabulary

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>string</code> - the locale for this vocabulary  
<a name="module_concerto-vocabulary.Vocabulary+getIdentifier"></a>

#### vocabulary.getIdentifier() ⇒ <code>string</code>
Returns the identifier for the vocabulary, composed of the namespace plus the locale

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>string</code> - the identifier for this vocabulary  
<a name="module_concerto-vocabulary.Vocabulary+getTerms"></a>

#### vocabulary.getTerms() ⇒ <code>Array</code>
Returns all the declarations for this vocabulary

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>Array</code> - an array of objects  
<a name="module_concerto-vocabulary.Vocabulary+getTerm"></a>

#### vocabulary.getTerm(declarationName, [propertyName]) ⇒ <code>string</code>
Gets the term for a concept, enum or property

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>string</code> - the term or null if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| declarationName | <code>string</code> | the name of a concept or enum |
| [propertyName] | <code>string</code> | the name of a property (optional) |

<a name="module_concerto-vocabulary.Vocabulary+validate"></a>

#### vocabulary.validate(modelFile) ⇒ <code>\*</code>
Validates a vocabulary against a ModelFile, returning errors for
missing and additional terms.

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>\*</code> - an object with missingTerms and additionalTerms properties  

| Param | Type | Description |
| --- | --- | --- |
| modelFile | <code>ModelFile</code> | the model file for this vocabulary |

<a name="module_concerto-vocabulary.Vocabulary+toJSON"></a>

#### vocabulary.toJSON() ⇒ <code>\*</code>
Converts the object to JSON

**Kind**: instance method of [<code>Vocabulary</code>](#module_concerto-vocabulary.Vocabulary)  
**Returns**: <code>\*</code> - the contens of this vocabulary  
<a name="module_concerto-vocabulary.VocabularyManager"></a>

### concerto-vocabulary.VocabularyManager
A vocabulary manager for concerto models. The vocabulary manager
stores and provides API access to a set of vocabulary files, where each file
is associated with a BCP-47 language tag and a Concerto namespace.

**Kind**: static class of [<code>concerto-vocabulary</code>](#module_concerto-vocabulary)  
**See**: https://datatracker.ietf.org/doc/html/rfc5646#section-2  

* [.VocabularyManager](#module_concerto-vocabulary.VocabularyManager)
    * [new VocabularyManager([options])](#new_module_concerto-vocabulary.VocabularyManager_new)
    * _instance_
        * [.clear()](#module_concerto-vocabulary.VocabularyManager+clear)
        * [.removeVocabulary(namespace, locale)](#module_concerto-vocabulary.VocabularyManager+removeVocabulary)
        * [.addVocabulary(contents)](#module_concerto-vocabulary.VocabularyManager+addVocabulary) ⇒ <code>Vocabulary</code>
        * [.getVocabulary(namespace, locale, [options])](#module_concerto-vocabulary.VocabularyManager+getVocabulary) ⇒ <code>Vocabulary</code>
        * [.getVocabulariesForNamespace(namespace)](#module_concerto-vocabulary.VocabularyManager+getVocabulariesForNamespace) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
        * [.getVocabulariesForLocale(locale)](#module_concerto-vocabulary.VocabularyManager+getVocabulariesForLocale) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
        * [.resolveTerm(modelManager, namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager+resolveTerm) ⇒ <code>string</code>
        * [.getTerm(namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager+getTerm) ⇒ <code>string</code>
        * [.generateDecoratorCommands(modelManager, locale)](#module_concerto-vocabulary.VocabularyManager+generateDecoratorCommands) ⇒ <code>\*</code>
        * [.validate(modelManager, locale)](#module_concerto-vocabulary.VocabularyManager+validate) ⇒ <code>\*</code>
    * _static_
        * [.englishMissingTermGenerator(namespace, locale, declarationName, [propertyName])](#module_concerto-vocabulary.VocabularyManager.englishMissingTermGenerator) ⇒ <code>string</code>
        * [.findVocabulary(requestedLocale, vocabularies, [options])](#module_concerto-vocabulary.VocabularyManager.findVocabulary) ⇒ <code>Vocabulary</code>

<a name="new_module_concerto-vocabulary.VocabularyManager_new"></a>

#### new VocabularyManager([options])
Create the VocabularyManager


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>\*</code> | options to configure vocabulary lookup |
| [options.missingTermGenerator] | <code>\*</code> | A function to call for missing terms. The function should accept namespace, locale, declarationName, propertyName as arguments |

<a name="module_concerto-vocabulary.VocabularyManager+clear"></a>

#### vocabularyManager.clear()
Removes all vocabularies

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
<a name="module_concerto-vocabulary.VocabularyManager+removeVocabulary"></a>

#### vocabularyManager.removeVocabulary(namespace, locale)
Removes a vocabulary from the vocabulary manager

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace for the vocabulary |
| locale | <code>string</code> | the BCP-47 locale identifier |

<a name="module_concerto-vocabulary.VocabularyManager+addVocabulary"></a>

#### vocabularyManager.addVocabulary(contents) ⇒ <code>Vocabulary</code>
Adds a vocabulary to the vocabulary manager

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>Vocabulary</code> - the vocabulary the was added  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | the YAML string for the vocabulary |

<a name="module_concerto-vocabulary.VocabularyManager+getVocabulary"></a>

#### vocabularyManager.getVocabulary(namespace, locale, [options]) ⇒ <code>Vocabulary</code>
Gets a vocabulary for a given namespace plus locale

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>Vocabulary</code> - the vocabulary or null if no vocabulary exists for the locale  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace for the vocabulary |
| locale | <code>string</code> | the BCP-47 locale identifier |
| [options] | <code>\*</code> | options to configure vocabulary lookup |
| [options.localeMatcher] | <code>\*</code> | Pass 'lookup' to find a general vocabulary, if available |

<a name="module_concerto-vocabulary.VocabularyManager+getVocabulariesForNamespace"></a>

#### vocabularyManager.getVocabulariesForNamespace(namespace) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
Gets all the vocabulary files for a given namespace

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>Array.&lt;Vocabulary&gt;</code> - the array of vocabularies  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace |

<a name="module_concerto-vocabulary.VocabularyManager+getVocabulariesForLocale"></a>

#### vocabularyManager.getVocabulariesForLocale(locale) ⇒ <code>Array.&lt;Vocabulary&gt;</code>
Gets all the vocabulary files for a given locale

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>Array.&lt;Vocabulary&gt;</code> - the array of vocabularies  

| Param | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | the BCP-47 locale identifier |

<a name="module_concerto-vocabulary.VocabularyManager+resolveTerm"></a>

#### vocabularyManager.resolveTerm(modelManager, namespace, locale, declarationName, [propertyName]) ⇒ <code>string</code>
Resolve the term for a property, looking up terms from a more general vocabulary
if required, and resolving properties using an object manager, allowing terms defined
on super types to be automatically resolved.

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>string</code> - the term or null if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the model manager |
| namespace | <code>string</code> | the namespace |
| locale | <code>string</code> | the BCP-47 locale identifier |
| declarationName | <code>string</code> | the name of a concept or enum |
| [propertyName] | <code>string</code> | the name of a property (optional) |

<a name="module_concerto-vocabulary.VocabularyManager+getTerm"></a>

#### vocabularyManager.getTerm(namespace, locale, declarationName, [propertyName]) ⇒ <code>string</code>
Gets the term for a concept, enum or property, looking up terms
from a more general vocabulary if required

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>string</code> - the term or null if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace |
| locale | <code>string</code> | the BCP-47 locale identifier |
| declarationName | <code>string</code> | the name of a concept or enum |
| [propertyName] | <code>string</code> | the name of a property (optional) |

<a name="module_concerto-vocabulary.VocabularyManager+generateDecoratorCommands"></a>

#### vocabularyManager.generateDecoratorCommands(modelManager, locale) ⇒ <code>\*</code>
Creates a DecoractorCommandSet with @Term decorators
to decorate all model elements based on the vocabulary for a locale.
Pass the return value to the DecoratorManager.decorateModel to apply
the decorators to a ModelManager.

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>\*</code> - the decorator command set used to decorate the model.  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the Model Manager |
| locale | <code>string</code> | the BCP-47 locale identifier |

<a name="module_concerto-vocabulary.VocabularyManager+validate"></a>

#### vocabularyManager.validate(modelManager, locale) ⇒ <code>\*</code>
Validates the terms in the vocabulary against the namespaces and declarations
within a ModelManager

**Kind**: instance method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>\*</code> - the result of validation  

| Param | Type | Description |
| --- | --- | --- |
| modelManager | <code>ModelManager</code> | the Model Manager |
| locale | <code>string</code> | the BCP-47 locale identifier |

<a name="module_concerto-vocabulary.VocabularyManager.englishMissingTermGenerator"></a>

#### VocabularyManager.englishMissingTermGenerator(namespace, locale, declarationName, [propertyName]) ⇒ <code>string</code>
Computes a term in English based on declaration and property name.

**Kind**: static method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>string</code> - the term or null if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace |
| locale | <code>string</code> | the BCP-47 locale identifier |
| declarationName | <code>string</code> | the name of a concept or enum |
| [propertyName] | <code>string</code> | the name of a property (optional) |

<a name="module_concerto-vocabulary.VocabularyManager.findVocabulary"></a>

#### VocabularyManager.findVocabulary(requestedLocale, vocabularies, [options]) ⇒ <code>Vocabulary</code>
Finds the vocabulary for a requested locale, removing language
identifiers from the locale until the locale matches, or if no
vocabulary is found, null is returned

**Kind**: static method of [<code>VocabularyManager</code>](#module_concerto-vocabulary.VocabularyManager)  
**Returns**: <code>Vocabulary</code> - the most specific vocabulary, or null  

| Param | Type | Description |
| --- | --- | --- |
| requestedLocale | <code>string</code> | the BCP-47 locale identifier |
| vocabularies | <code>Array.&lt;Vocabulary&gt;</code> | the vocabularies to match against |
| [options] | <code>\*</code> | options to configure vocabulary lookup |
| [options.localeMatcher] | <code>\*</code> | Pass 'lookup' to find a general vocabulary, if available |

<a name="AbstractPlugin"></a>

## AbstractPlugin
Simple plug-in class for code-generation. This lists functions that can be passed to extend the default code-generation behavior.

**Kind**: global class  

* [AbstractPlugin](#AbstractPlugin)
    * [.addClassImports(clazz, parameters, options)](#AbstractPlugin+addClassImports)
    * [.addClassAnnotations(clazz, parameters, options)](#AbstractPlugin+addClassAnnotations)
    * [.addClassMethods(clazz, parameters, options)](#AbstractPlugin+addClassMethods)
    * [.addEnumAnnotations(enumDecl, parameters, options)](#AbstractPlugin+addEnumAnnotations)

<a name="AbstractPlugin+addClassImports"></a>

### abstractPlugin.addClassImports(clazz, parameters, options)
Additional imports to generate in classes

**Kind**: instance method of [<code>AbstractPlugin</code>](#AbstractPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |
| options | <code>Object</code> | the visitor options |

<a name="AbstractPlugin+addClassAnnotations"></a>

### abstractPlugin.addClassAnnotations(clazz, parameters, options)
Additional annotations to generate in classes

**Kind**: instance method of [<code>AbstractPlugin</code>](#AbstractPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |
| options | <code>Object</code> | the visitor options |

<a name="AbstractPlugin+addClassMethods"></a>

### abstractPlugin.addClassMethods(clazz, parameters, options)
Additional methods to generate in classes

**Kind**: instance method of [<code>AbstractPlugin</code>](#AbstractPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |
| options | <code>Object</code> | the visitor options |

<a name="AbstractPlugin+addEnumAnnotations"></a>

### abstractPlugin.addEnumAnnotations(enumDecl, parameters, options)
Additional annotations to generate in enums

**Kind**: instance method of [<code>AbstractPlugin</code>](#AbstractPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| enumDecl | <code>EnumDeclaration</code> | the enum being visited |
| parameters | <code>Object</code> | the parameter |
| options | <code>Object</code> | the visitor options |

<a name="EmptyPlugin"></a>

## EmptyPlugin
Simple plug-in class for code-generation. This lists functions that can be passed to extend the default code-generation behavior.

**Kind**: global class  

* [EmptyPlugin](#EmptyPlugin)
    * [.addClassImports(clazz, parameters)](#EmptyPlugin+addClassImports)
    * [.addClassAnnotations(clazz, parameters)](#EmptyPlugin+addClassAnnotations)
    * [.addClassMethods(clazz, parameters)](#EmptyPlugin+addClassMethods)
    * [.addEnumAnnotations(enumDecl, parameters)](#EmptyPlugin+addEnumAnnotations)

<a name="EmptyPlugin+addClassImports"></a>

### emptyPlugin.addClassImports(clazz, parameters)
Additional imports to generate in classes

**Kind**: instance method of [<code>EmptyPlugin</code>](#EmptyPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |

<a name="EmptyPlugin+addClassAnnotations"></a>

### emptyPlugin.addClassAnnotations(clazz, parameters)
Additional annotations to generate in classes

**Kind**: instance method of [<code>EmptyPlugin</code>](#EmptyPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |

<a name="EmptyPlugin+addClassMethods"></a>

### emptyPlugin.addClassMethods(clazz, parameters)
Additional methods to generate in classes

**Kind**: instance method of [<code>EmptyPlugin</code>](#EmptyPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| clazz | <code>ClassDeclaration</code> | the clazz being visited |
| parameters | <code>Object</code> | the parameter |

<a name="EmptyPlugin+addEnumAnnotations"></a>

### emptyPlugin.addEnumAnnotations(enumDecl, parameters)
Additional annotations to generate in enums

**Kind**: instance method of [<code>EmptyPlugin</code>](#EmptyPlugin)  

| Param | Type | Description |
| --- | --- | --- |
| enumDecl | <code>EnumDeclaration</code> | the enum being visited |
| parameters | <code>Object</code> | the parameter |

<a name="rootModelAst"></a>

## rootModelAst : <code>unknown</code>
**Kind**: global constant  
<a name="metaModelAst"></a>

## metaModelAst : <code>unknown</code>
The metamodel itself, as an AST.

**Kind**: global constant  
<a name="metaModelCto"></a>

## metaModelCto
The metamodel itself, as a CTO string

**Kind**: global constant  
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

<a name="newMetaModelManager"></a>

## newMetaModelManager() ⇒ <code>\*</code>
Create a metamodel manager (for validation against the metamodel)

**Kind**: global function  
**Returns**: <code>\*</code> - the metamodel manager  
<a name="validateMetaModel"></a>

## validateMetaModel(input) ⇒ <code>object</code>
Validate metamodel instance against the metamodel

**Kind**: global function  
**Returns**: <code>object</code> - the validated metamodel instance in JSON  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | the metamodel instance in JSON |

<a name="modelManagerFromMetaModel"></a>

## modelManagerFromMetaModel(metaModel, [validate]) ⇒ <code>object</code>
Import metamodel to a model manager

**Kind**: global function  
**Returns**: <code>object</code> - the metamodel for this model manager  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| metaModel | <code>object</code> |  | the metamodel |
| [validate] | <code>boolean</code> | <code>true</code> | whether to perform validation |

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

<a name="updateModels"></a>

## updateModels(models, newModel) ⇒ <code>\*</code>
Update models with a new model

**Kind**: global function  
**Returns**: <code>\*</code> - the updated models  

| Param | Type | Description |
| --- | --- | --- |
| models | <code>\*</code> | existing models |
| newModel | <code>\*</code> | new model |

<a name="resolveExternal"></a>

## resolveExternal(models, [options], [fileDownloader]) ⇒ <code>Promise</code>
Downloads all ModelFiles that are external dependencies and adds or
updates them in this ModelManager.

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise when the download and update operation is completed.  
**Throws**:

- <code>IllegalModelException</code> if the models fail validation


| Param | Type | Description |
| --- | --- | --- |
| models | <code>\*</code> | the AST for all the known models |
| [options] | <code>Object</code> | Options object passed to ModelFileLoaders |
| [fileDownloader] | <code>FileDownloader</code> | an optional FileDownloader |

<a name="parse"></a>

## parse(cto, [fileName]) ⇒ <code>object</code>
Create decorator argument string from a metamodel

**Kind**: global function  
**Returns**: <code>object</code> - the string for the decorator argument  

| Param | Type | Description |
| --- | --- | --- |
| cto | <code>string</code> | the Concerto string |
| [fileName] | <code>string</code> | an optional file name |

<a name="parseModels"></a>

## parseModels(files) ⇒ <code>\*</code>
Parses an array of model files

**Kind**: global function  
**Returns**: <code>\*</code> - the AST / metamodel  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;string&gt;</code> | array of cto files |

<a name="decoratorArgFromMetaModel"></a>

## decoratorArgFromMetaModel(mm) ⇒ <code>string</code>
Create decorator argument string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for the decorator argument  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>object</code> | the metamodel |

<a name="decoratorFromMetaModel"></a>

## decoratorFromMetaModel(mm) ⇒ <code>string</code>
Create decorator string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for the decorator  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>object</code> | the metamodel |

<a name="decoratorsFromMetaModel"></a>

## decoratorsFromMetaModel(mm, prefix) ⇒ <code>string</code>
Create decorators string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for the decorators  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>object</code> | the metamodel |
| prefix | <code>string</code> | indentation |

<a name="propertyFromMetaModel"></a>

## propertyFromMetaModel(mm) ⇒ <code>string</code>
Create a property string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for that property  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>object</code> | the metamodel |

<a name="declFromMetaModel"></a>

## declFromMetaModel(mm) ⇒ <code>string</code>
Create a declaration string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for that declaration  

| Param | Type | Description |
| --- | --- | --- |
| mm | <code>object</code> | the metamodel |

<a name="toCTO"></a>

## toCTO(metaModel) ⇒ <code>string</code>
Create a model string from a metamodel

**Kind**: global function  
**Returns**: <code>string</code> - the string for that model  

| Param | Type | Description |
| --- | --- | --- |
| metaModel | <code>object</code> | the metamodel |

<a name="findNamespace"></a>

## findNamespace(priorModels, namespace) ⇒ <code>\*</code>
Find the model for a given namespace

**Kind**: global function  
**Returns**: <code>\*</code> - the model  

| Param | Type | Description |
| --- | --- | --- |
| priorModels | <code>\*</code> | known models |
| namespace | <code>string</code> | the namespace |

<a name="findDeclaration"></a>

## findDeclaration(thisModel, name) ⇒ <code>\*</code>
Find a declaration for a given name in a model

**Kind**: global function  
**Returns**: <code>\*</code> - the declaration  

| Param | Type | Description |
| --- | --- | --- |
| thisModel | <code>\*</code> | the model |
| name | <code>string</code> | the declaration name |

<a name="createNameTable"></a>

## createNameTable(priorModels, metaModel) ⇒ <code>object</code>
Create a name resolution table

**Kind**: global function  
**Returns**: <code>object</code> - mapping from a name to its namespace  

| Param | Type | Description |
| --- | --- | --- |
| priorModels | <code>\*</code> | known models |
| metaModel | <code>object</code> | the metamodel (JSON) |

<a name="resolveName"></a>

## resolveName(name, table) ⇒ <code>string</code>
Resolve a name using the name table

**Kind**: global function  
**Returns**: <code>string</code> - the namespace for that name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the type to resolve |
| table | <code>object</code> | the name table |

<a name="resolveTypeNames"></a>

## resolveTypeNames(metaModel, table) ⇒ <code>object</code>
Name resolution for metamodel

**Kind**: global function  
**Returns**: <code>object</code> - the metamodel with fully qualified names  

| Param | Type | Description |
| --- | --- | --- |
| metaModel | <code>object</code> | the metamodel (JSON) |
| table | <code>object</code> | the name table |

<a name="resolveLocalNames"></a>

## resolveLocalNames(priorModels, metaModel) ⇒ <code>object</code>
Resolve the namespace for names in the metamodel

**Kind**: global function  
**Returns**: <code>object</code> - the resolved metamodel  

| Param | Type | Description |
| --- | --- | --- |
| priorModels | <code>\*</code> | known models |
| metaModel | <code>object</code> | the MetaModel |

<a name="resolveLocalNamesForAll"></a>

## resolveLocalNamesForAll(allModels) ⇒ <code>object</code>
Resolve the namespace for names in the metamodel

**Kind**: global function  
**Returns**: <code>object</code> - the resolved metamodel  

| Param | Type | Description |
| --- | --- | --- |
| allModels | <code>\*</code> | known models |

<a name="inferModelFile"></a>

## inferModelFile(defaultNamespace, defaultType, schema) ⇒ <code>string</code>
Infers a Concerto model from a JSON Schema.

**Kind**: global function  
**Returns**: <code>string</code> - the Concerto model  

| Param | Type | Description |
| --- | --- | --- |
| defaultNamespace | <code>string</code> | a fallback namespace to use for the model if it can't be infered |
| defaultType | <code>string</code> | a fallback name for the root concept if it can't be infered |
| schema | <code>object</code> | the input json object |

<a name="capitalizeFirstLetter"></a>

## capitalizeFirstLetter(string) ⇒ <code>string</code>
Capitalize the first letter of a string

**Kind**: global function  
**Returns**: <code>string</code> - input with first letter capitalized  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | the input string |

<a name="hashCode"></a>

## hashCode(value) ⇒ <code>number</code>
Computes an integer hashcode value for a string

**Kind**: global function  
**Returns**: <code>number</code> - the hashcode  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input string |

<a name="isObject"></a>

## isObject(val) ⇒ <code>Boolean</code>
Returns true if val is an object

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is an object  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isBoolean"></a>

## isBoolean(val) ⇒ <code>Boolean</code>
Returns true if val is a boolean

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is a boolean  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isNull"></a>

## isNull(val) ⇒ <code>Boolean</code>
Returns true if val is null

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is null  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isArray"></a>

## isArray(val) ⇒ <code>Boolean</code>
Returns true if val is an array

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is an array  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isString"></a>

## isString(val) ⇒ <code>Boolean</code>
Returns true if val is a string

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is a string  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isDateTime"></a>

## isDateTime(val) ⇒ <code>Boolean</code>
Returns true if val is a date time

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is a string  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isInteger"></a>

## isInteger(val) ⇒ <code>Boolean</code>
Returns true if val is an integer

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is a string  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="isDouble"></a>

## isDouble(val) ⇒ <code>Boolean</code>
Returns true if val is an integer

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if val is a string  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the value to test |

<a name="getType"></a>

## getType(input) ⇒ <code>string</code>
Get the primitive Concerto type for an input

**Kind**: global function  
**Returns**: <code>string</code> - the Concerto type  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>\*</code> | the input object |

<a name="handleArray"></a>

## handleArray(typeName, context, input) ⇒ <code>object</code>
Handles an array

**Kind**: global function  
**Returns**: <code>object</code> - the type for the array  

| Param | Type | Description |
| --- | --- | --- |
| typeName | <code>\*</code> | the name of the type being processed |
| context | <code>\*</code> | the processing context |
| input | <code>\*</code> | the input object |

<a name="handleType"></a>

## handleType(name, context, input) ⇒ <code>object</code>
Handles an input type

**Kind**: global function  
**Returns**: <code>object</code> - an object for the type  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>\*</code> | the name of the type being processed |
| context | <code>\*</code> | the processing context |
| input | <code>\*</code> | the input object |

<a name="removeDuplicateTypes"></a>

## removeDuplicateTypes(context)
Detect duplicate types and remove them

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>\*</code> | the context |

<a name="inferModel"></a>

## inferModel(namespace, rootTypeName, input) ⇒ <code>string</code>
Infers a Concerto model from a JSON instance.

**Kind**: global function  
**Returns**: <code>string</code> - the Concerto model  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | the namespace to use for the model |
| rootTypeName | <code>\*</code> | the name for the root concept |
| input | <code>\*</code> | the input json object |

<a name="labelToSentence"></a>

## labelToSentence(labelName) ⇒ <code>string</code>
Inserts correct spacing and capitalization to a camelCase label

**Kind**: global function  
**Returns**: <code>string</code> - - The label text formatted for rendering  

| Param | Type | Description |
| --- | --- | --- |
| labelName | <code>string</code> | the label text to be transformed |

<a name="sentenceToLabel"></a>

## sentenceToLabel(sentence) ⇒ <code>string</code>
Create a camelCase label from a sentence

**Kind**: global function  
**Returns**: <code>string</code> - - The camelCase label  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | the sentence |

<a name="writeModelsToFileSystem"></a>

## writeModelsToFileSystem(files, path, options)
Writes a set of model files to disk

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>\*</code> | the set of files to write, with names and whether they are external |
| path | <code>string</code> | a path to the directory where to write the files |
| options | <code>\*</code> | a set of options |

<a name="camelCaseToSentence"></a>

## camelCaseToSentence(text) ⇒ <code>string</code>
Converts a camel case string to a sentence

**Kind**: global function  
**Returns**: <code>string</code> - modified string  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | input |

