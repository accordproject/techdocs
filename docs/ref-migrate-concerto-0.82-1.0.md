---
id: ref-migrate-concerto-0.82-1.0
title: Concerto 0.82 to 1.0
---

Concerto `1.0` delivers fundamental improvements over previous releases, whilst maintaining a high-degree (though not total!) of backwards compatibility with `0.82`. In particular all of the `0.82` Concerto syntax remains valid in `1.0`.

:::note
We are currently in the process of migrating the Accord Project stack to Concero v1.0. Until the migration is complete Concero v1 is tagged as an `alpha` and may undergo minor additional changes and fixes.
:::

## Summary of Breaking Changes

- Systems models are no longer supported
- DateTime values do not preserve the timezone offset and are always converted to UTC
- Validation has been made stricter, which means some previously allowed instances will now fail validation
- The syntax and semantic of relationships has been changed

## Removal of System Models

See: [#62](https://github.com/accordproject/concerto/issues/62)

An advanced feature of prior versions of Concerto was the ability to add a _system model_ to the `ModelManager`, which functioned as an implicit set of base types for concepts, assets, participants etc within the scope of the `ModelManager`. This feature complicated the APIs considerably, and it had the effect of making CTO models non-portable, in as far as they could only be loaded into a `ModelManager` that used the same set of system models.

System models have therefore been removed from Concerto v1 — any base types should now be imported and referenced explicitly into model files.

## Strict Validation

See: [#157](https://github.com/accordproject/concerto/issues/158) [#158](https://github.com/accordproject/concerto/issues/158)

Prior to Concerto v1 validation suffered from some side-effects of JavaScript type-coercion. For example, `"NaN"` would be a valid value for a `Double` field. These edge cases have now been tightened up, so some instances that were valid prior to v1 may now fail validation.

## Identifiers and Relationships

See: [#181](https://github.com/accordproject/concerto/issues/181)

Prior to v1 a relationship could only be declared to an asset, participant, transaction or event (as these must be `identified by`). In v1 two new capabilities have been added:

1. Concepts can now be declared to be `identified by` an identifying field, allowing them to be used with relationships
2. Any type can be declared as `identified` — to automatically create a system `$identifier`  field.

The model below is valid with Concerto v1.

```
namespace org.accordproject

concept Address {
   o String country
}

concept Product identified by sku {
   o String sku
}

concept Order identified {
   o Double ammount
   o Address address
   --> Product product
}
```

## Root of Type Hierarchy

See: [#180](https://github.com/accordproject/concerto/issues/180)

All declared types now have `concerto.Concept` as their super type, and the `concerto` namespace is reserved. Note that the super type for `concerto.Concept` is null.

## Functional API (experimental)

See: [#188](https://github.com/accordproject/concerto/issues/188)

A new streamlined `Concerto` API has been added, to replace some of the existing runtime APIs. Existing runtime APIs have been preserved, but will be progressively removed.

The `Concerto` API is much more functional in nature, and allows plain-old-JavaScript objects to be validated using a `ModelManager` — removing the need to use the `Factory` API to create JS objects prior to validation, or to use the `Serializer` to convert them back to plain-old-JavaScript objects. This should reduce the learning-curve for the library and improve performance.

```
const { ModelManager, Concerto } = require('@accordproject/concerto-core');
const modelManager = new ModelManager();

modelManager.addModelFile( `namespace org.acme.address
concept PostalAddress {
  o String streetAddress optional
  o String postalCode optional
  o String postOfficeBoxNumber optional
  o String addressRegion optional
  o String addressLocality optional
  o String addressCountry optional
}`, 'model.cto');

const postalAddress = {
   $class : 'org.acme.address.PostalAddress',
   streetAddress : '1 Maine Street'
};

const concerto = new Concerto(modelManager);
concerto.validate(postalAddress);
``` 

## API Changes

API additions are prefix by a `>` character, while API removals are prefixed by a `<`.

:::note
A new simplified `Concerto` class has been created to validate JSON data against a Concerto model. The `Concerto` class wraps a `ModelManager` and allows JS objects to be validates without using the `Factory` or `Serializer` classes.
:::

```
> class Concerto {
>    + void constructor() 
>    + void validate(undefined) throws Error
>    + void getModelManager() 
>    + boolean isObject() 
>    + void getTypeDeclaration() 
>    + string getIdentifier() 
>    + boolean isIdentifiable() 
>    + boolean isRelationship() 
>    + void setIdentifier(string) 
>    + string getFullyQualifiedIdentifier() 
>    + string toURI() 
>    + void fromURI(string) throws Error
>    + string getType() 
>    + string getNamespace() 
>    + boolean instanceOf(String) 
> }
```

:::note
`AssetDeclaration` and other stereotypes now extend `IdentifiedDeclaration` rather than `ClassDeclaration`. Methods relating to whether the type can be the target of a relationship have been removed as all types can now be used with relationships, and methods have been added to denote whether a type has an automatic (system) identifying field (primary key), no identifying field, or is using an explicitly defined identifying field.
:::

```
< class AssetDeclaration extends ClassDeclaration {
> class AssetDeclaration extends IdentifiedDeclaration {
<    + boolean isRelationshipTarget() 
<    + string getSystemType() 
<    + boolean isRelationshipTarget() 
<    + boolean isSystemRelationshipTarget() 
<    + boolean isSystemType() 
<    + boolean isSystemCoreType() 
>    + Boolean isIdentified() 
>    + Boolean isSystemIdentified() 
>    + Boolean isExplicitlyIdentified() 
```

```
< class EventDeclaration extends ClassDeclaration {
> class EventDeclaration extends IdentifiedDeclaration {
<    + string getSystemType() 
```

```
> class IdentifiedDeclaration extends ClassDeclaration {
>    + void constructor(ModelFile,Object) throws IllegalModelException
>    + boolean hasInstance(object) 
> }
```

```
< class ParticipantDeclaration extends ClassDeclaration {
> class ParticipantDeclaration extends IdentifiedDeclaration {
<    + boolean isRelationshipTarget() 
<    + string getSystemType() 
```

```
< class TransactionDeclaration extends ClassDeclaration {
> class TransactionDeclaration extends IdentifiedDeclaration {
<    + string getSystemType() 
```

:::note
`ModelFile` has been updated to remove system model files.
:::

```
class ModelFile {
<    + void constructor(ModelManager,string,string,boolean) throws IllegalModelException
>    + void constructor(ModelManager,string,string) throws IllegalModelException
<    + ClassDeclaration[] getDeclarations(Function,Boolean) 
>    + ClassDeclaration[] getDeclarations(Function) 
<    + boolean isSystemModelFile() 
}
```

:::note
`Concept` has been removed, as all types are now identifiable and now extend `Resource`.
:::

```
< class Concept extends Typed {
<    + boolean isConcept() 
< }
```

:::note
`Resource` has extended to capture that some resources are concepts, and are identifiable.
:::

```
class Resource extends Identifiable {
>    + boolean isConcept() 
>    + boolean isIdentifiable() 
}
```

:::note
`ValidatedConcept` has been removed. Users should now call the `validate` method explicitly to validate data.
:::

```
< class ValidatedConcept extends Concept {
<    + void setPropertyValue(string,string) throws Error
<    + void addArrayValue(string,string) throws Error
<    + void validate() throws Error
< }
```

:::note
`ModelLoader` constructor has been updated to remove system models.
:::

```
class ModelLoader {
<    + object loadModelManager(string,string[],object,boolean) 
<    + object loadModelManagerFromModelFiles(string,object[],undefined,object,boolean) 
>    + object loadModelManager(string[],object,boolean) 
>    + object loadModelManagerFromModelFiles(object[],undefined,object,boolean) 
}
```

:::note
`ModelManager` has been updated to remove system models. These are non-breaking changes that remove the last argument to method calls.
:::

```
class ModelManager {
<    + Object addModelFile(string,string,boolean,boolean) throws IllegalModelException
>    + Object addModelFile(string,string,boolean) throws IllegalModelException
<    + Object[] addModelFiles(object[],undefined,boolean,boolean) 
>    + Object[] addModelFiles(object[],undefined,boolean) 
<    + void writeModelsToFileSystem(String,Object,boolean,boolean) 
<    + Object[] getModels(Object,boolean,boolean) 
>    + void writeModelsToFileSystem(String,Object,boolean) 
>    + Object[] getModels(Object,boolean) 
<    + ClassDeclaration[] getSystemTypes() 
}
```

