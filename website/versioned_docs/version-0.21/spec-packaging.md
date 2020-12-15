---
id: spec-packaging
title: Packaging
original_id: spec-packaging
---

The artifacts that define a template are:
- Metadata, such as name and version
- CML models, which define the template model, request, response and any required types
- Template grammar for each supported locale
- A sample instance, used to bootstrap editing, for each supported locale
- Executable business logic

Templates are typically packaged and distributed as Cicero Template Archive (`.cta`) files, however they may also be read from: a directory, http(s) URL, the Accord Project [template library](https://templates.accordproject.org),  the npm package manager. Each of these distribution mechanisms support slightly different use cases:

- Directory: useful during testing, allows changes to the template to be quickly tested with no need to re-package
- URL: allows templates to be published to a stable web address
- Accord Project template library maintains a curated set of Open Source templates
- npm: allows dependencies on templates to be easily declared for Node.js and browser based applications. Integrates with CI/CD tools.

## Metadata
The metadata for a Template is stored in the  /package.json text file in JSON format.

```
{
    "name": "latedeliveryandpenalty",
    "displayName": "Late Delivery and Penalty",
    "version": "0.11.1",
    "description": "A sample Late Delivery And Penalty clause.",
    "accordproject": {
        "template": "clause",
        "ergo": "0.9.0",
        "cicero": "^0.13.0"
    },
    "keywords": ["clause", "delivery", "acceptance", "obligation"]
}
```

The name property must consist of `[a-z][A-Z][.]`. It is strongly recommended that the name be prefixed with the domain name of the author of the smart clause, to minimise naming collisions. The version property must be a semantic version of the form `major.minor.micro [0-9].[0-9].[0.9]`. Note that this data format ensures that a Template can be published to the npm package manager for either global or private (enterprise-wide) distribution.

The `accordproject` property of a template specifies the following metadata:
- `template`: must either be `clause` for a clause template or `contract` for a contract templates
- `ergo`: the Ergo version used to to draft the template. This is an npm [semver](https://semver.npmjs.com) specification.
- `cicero`: the Cicero version with which the template is compatible. This is an npm [semver](https://semver.npmjs.com) specification.

The `keywords` property should list words relevant to the template, and can be useful for search and classification.

Note that additional properties such as locales and jurisdictions may be added as future needs arise.

## README.md
The root of the template may also contain a markdown file to explain the purpose and semantics of the template. This file may be displayed by tools to preview the template or provide usage instructions.

## Template Grammars
The grammar files for the template are stored in the  /grammar/ folder.

> Note that support for per-locale grammar files in TBD.

## Data Model

The data model for a smart clause is stored in a set of files under the `/model` folder. The data model files must be in the format defined using the Composer Concerto modeling language. All data models for the template are in-scope and types from all namespaces may be imported.

Using the ability to convert CML models to UML we can even visualise all the required types (model, request, response) we have modelled graphically:

![UML diagram](/docs/assets/cicero-spec-uml.png)

## Execution Logic

The Ergo execution logic for a smart clause is stored under the /lib folder.

