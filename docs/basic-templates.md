---
id: basic-templates
title: A look inside a Template
---

Now that you have executed an existing template in archive form, let us look inside that archive to understand the structure of that template.

## Unpacking a template archive

Previously, we downloaded and executed an archive (`helloworld.cta`). This archive is just a zip file, so you can unzip it to see what is inside:

```bash
unzip helloworld.cta
```

## Structure

The layout of a template is always as follows:

```text
package.json
    Metadata for the template (name, version, description etc)

README.md
    A markdown file that describes the purpose and correct usage for the template

request.json (optional)
    A sample valid request transaction for the template

sample.txt (optional)
    A sample clause or contract text that is valid for the template

grammar/template.tem
    The default template grammar for the template

models/
    A collection of Composer Concerto model files for the template. They define the Template Model
    and the Request and Response transactions.

lib/
    A collection of Ergo files that implement the business logic for the template

test/
    A collection of unit tests for the template
```

So really, this really just contains the three main components of a template (the natural language text of your Clause or Contract, the data model for the template, and the executable logic), along with additional metadata and samples which can be used to test the template.

### Grammar

Please refer to the [Template Specification](accordproject-specification#grammar) documentation.

### Model

Please refer to the [Template Specification](accordproject-specification#model) documentation.

### Logic

Please refer to the [Template Specification](accordproject-specification#logic) documentation.

### Unit Tests

Templates should have unit tests that cover every line of code of their business logic. You may use any of the
popular unit testing frameworks to implement the tests (mocha, chai, sinon etc). Please refer to the
``acceptance-of-delivery`` template for an example template with unit tests.

