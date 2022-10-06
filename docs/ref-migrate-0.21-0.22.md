---
id: ref-migrate-0.21-0.22
title: Cicero 0.21 to 0.22
---

The main change between the `0.21` release and the `0.22` release is the switch to version `1.0` of the Concerto modeling language and library. This change comes along with a complete revision for the Accord Project "base models" which define key types for: clause and contract data, parties, obligations and requests / responses. We encourage developers to get familiarized with the [new base models](https://github.com/accordproject/models/tree/master/src/accordproject) before switching to Cicero `0.22`.

:::note
Before following those migration instructions, make sure to first install version `0.22` of Cicero, as described in the [Install Cicero](started-installation.md) Section of this documentation.
:::

## Metadata Changes

You should only have to update the Cicero version in the `package.json` for your template to `^0.22.0`. Remember to also increment the version number for the template itself.

#### Example

After those changes, the `accordproject` field in your `package.json` should look as follows (with the `template` field being either `clause` or `contract` depending on the template):
```js
...
    "accordproject": {
        "template": "clause",
        "cicero": "^0.22.0"
    }
...
```

## Text Changes

There should be no text changes required for this version.

## Model Changes

Most templates will require changes to the model and should be re-written against the new base Accord Project models. Most of the changes should be renaming for key classes:

1. Contract and Clause data
   1. the `org.accordproject.cicero.contract.AccordContract` class is now `org.accordproject.contract.Contract` found in https://models.accordproject.org/accordproject/contract.cto
   2. the `org.accordproject.cicero.contract.AccordClause` class is now `org.accordproject.contract.Clause` found in https://models.accordproject.org/accordproject/contract.cto
2. Contract state and parties
   1. the `org.accordproject.cicero.contract.AccordState` class is now `org.accordproject.runtime.State` found in https://models.accordproject.org/accordproject/runtime.cto 
   2. the `org.accordproject.cicero.contract.AccordParty` class is now `org.accordproject.party.Party` found in https://models.accordproject.org/accordproject/party.cto
3. Request and response
   1. the `org.accordproject.cicero.runtime.Request` class is now `org.accordproject.runtime.Request` found in https://models.accordproject.org/accordproject/runtime.cto 
   2. the `org.accordproject.cicero.runtime.Response` class is now `org.accordproject.runtime.Response` found in https://models.accordproject.org/accordproject/runtime.cto 
4. Predefined obligations have been moved to their own model file found in https://models.accordproject.org/accordproject/obligation.cto 

:::warning
Some of the properties in those base classes have changed, e.g., the contract state no longer requires a `stateId`. As a result, corresponding changes to the contract logic in Ergo or to the application code may be required.
:::

### Example

A typical change to a template model might look as follows, from:
```ergo
import org.accordproject.cicero.contract.* from https://models.accordproject.org/cicero/contract.cto
import org.accordproject.cicero.runtime.* from https://models.accordproject.org/cicero/runtime.cto

/**
 * Defines the data model for the Purchase Order Failure
 * template.
 */
asset PurchaseOrderFailure extends AccordContract {
  o AccordParty buyer
  ...
}
```
To:
```ergo
import org.accordproject.contract.* from https://models.accordproject.org/accordproject/contract.cto
import org.accordproject.runtime.* from https://models.accordproject.org/accordproject/runtime.cto
import org.accordproject.party.* from https://models.accordproject.org/accordproject/party.cto
import org.accordproject.obligation.* from https://models.accordproject.org/accordproject/obligation.cto

asset PurchaseOrderFailure extends Contract {
  --> Party buyer
  ...
}
```

## Logic Changes

Minimal changes to the contract logic should be required, however a few changes to the base models may affect your Ergo code. Notably:
1. You should import the new Accord Project core models as needed
2. The contract state no longer requires a `stateId` field.
3. The base contract state has been moved to the runtime model, which may need to be imported

## API Changes

A number of API changes may affect Node.js applications using Cicero or Ergo packages. The main API changes are:
1. Additional `utcOffset` parameter.
   1. `@accordproject/cicero-core` package
      - the `TemplateInstance.parse` and `TemplateInstance.draft` calls take an additional `utcOffset` parameter to specify the current timezone offset
   2. `@accordproject/cicero-engine` package
      - the `Engine.init`, `Engine.invoke` and `Engine.trigger` calls take an additional `utcOffset` parameter to specify the current timezone offset
   3. `@accordproject/ergo-engine` package
      - the `Engine.init`, `Engine.invoke` and `Engine.trigger` calls take an additional `utcOffset` parameter to specify the current timezone offset
2. New `es6` compilation target for Ergo.
   1. `@accordproject/ergo-compiler` package
      -  the `Compiler.compileToJavaScript` compilation target `cicero` has been renamed to `es6`
   2. `@accordproject/cicero-core` package
      -  the `Template.toArchive` compilation target `cicero` has been renamed to `es6`

## CLI Changes

1. Specific UTC timezone offset now needs to be passed using the new option `--utcOffset` option has been removed

## Cicero Server Changes

There should be no text changes required for this version.
