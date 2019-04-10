---
id: basic-templates
title: Take a look inside
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

In a nutshell, the template archive contains the three main components of a template (the natural language text of your Clause or Contract, the data model for the template, and the executable logic), along with additional metadata and samples which can be used to illustrate or test the template.

Let us look at each of the main components.

### Grammar

The file in `grammar/template.tem` contains the grammar for the template. It is mostly natural language, with some markup to indicate the variable in your Clause or Contract.

```md
Name of the person to greet: [{name}]. Thank you!
```

In the `helloworld` template there is only one variable `name`.

### Model

The file in `models/model.cto` contains the data model for the template. This includes a description for each of the template variables, including what kind of variable it is (also called their type).

Here is the model for the `helloworld` template:

```ergo
namespace org.accordproject.helloworld

import org.accordproject.cicero.contract.* from https://models.accordproject.org/cicero/contract.cto
import org.accordproject.cicero.runtime.* from https://models.accordproject.org/cicero/runtime.cto

asset TemplateModel extends AccordClause {
  o String name // variable 'name' is of type String
}

transaction MyRequest extends Request {
  o String input
}

transaction MyResponse extends Response {
  o String output
}
```

The `TemplateModel` as well as the `Request` and `Response` are types which are specified using the [Composer Concerto modeling language](https://github.com/hyperledger/composer-concerto).

### Logic

The file in `logic/logic.ergo` contains the executable logic. Each Ergo file is identified by a namespace, and contains declarations (e.g., constants, functions, contracts). Here is the Ergo logic for the `helloworld` template:

```ergo
namespace org.accordproject.helloworld

contract HelloWorld over TemplateModel {
  // Simple Clause
  clause greet(request : MyRequest) : MyResponse {
    return Response{ output: "Hello " ++ contract.name ++ " " ++ request.input }
  }
}
```

This declares a single `HelloWorld` contract with one `greet` clause in the `org.accordproject.helloworld`.

It also declares that the contract `HelloWorld` is parameterized over the given `TemplateModel` found in the `models/model.cto` file.

The `greet` clause takes a `Request` as input and returns a `Response`.

The code for the `greet` clause returns a new `Response` with a property `output` which is a string containing the property `name` of from the contract (`contract`) and the property `input` from the request (`request`). `++` stands for string concatenation in Ergo.

### Unit Tests

Templates should have unit tests that cover every line of code of their business logic. You may use any of the
popular unit testing frameworks to implement the tests (mocha, chai, sinon etc). Please refer to the
``acceptance-of-delivery`` template for an example template with unit tests.

