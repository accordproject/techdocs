---
id: basic-templates
title: Take a Look Inside
original_id: basic-templates
---

Now that you have executed an existing template in archive form, let us look inside that archive to understand the structure of that template.

## Unpack a Template Archive

Previously, we downloaded and executed an archive (`helloworld@0.10.1.cta`). A `.cta` archive is nothing more than a zip file containing the components of a template. Let's unzip that archive to see what is inside.

First create a directory in the place where you have downloaded that archive, then use the unzip command in your terminal:

```bash
mkdir helloworld
mv helloworld@0.10.1.cta helloworld
cd helloworld
unzip helloworld@0.10.1.cta
```

## Template Components

The layout of a template is always as follows:

```text
package.json
    Metadata for the template (name, version, description etc)

README.md
    A markdown file that describes the purpose and correct usage for the template

sample.txt (optional)
    A sample clause or contract text that is valid for the template

state.json (optional)
    A sample valid state for the clause or contract

request.json (optional)
    A sample valid request transaction for the template

grammar/template.tem
    The default grammar for the template

models/
    A collection of Concerto model files for the template. They define the Template Model
    and models for the State, Request, Response, and Obligations used during execution.

lib/
    A collection of Ergo files that implement the business logic for the template

test/
    A collection of unit tests for the template
```

In a nutshell, the template archive contains the three main components of a template (the natural language text of your Clause or Contract, the data model for the template, and the executable logic), along with additional metadata and samples which can be used to illustrate or test the template.

Let us look at each of those components.

### Grammar

The file in `grammar/template.tem` contains the grammar for the template. It is natural language, with markup to indicate the variable(s) in your Clause or Contract.

```md
Name of the person to greet: [{name}]. Thank you!
```

In the `helloworld` template there is only one variable `name` which is indicated between `[{` and `}]`.

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

The `TemplateModel` indicate that the template is for a Clause, and should have a variable `name` of type `String` (i.e., text).

```ergo
asset TemplateModel extends AccordClause {
  o String name // variable 'name' is of type String
}
```

Types are always declared within a namespace (here `org.accordproject.helloworld`), which provides a mechanism to disambiguate those types amongst multiple model files.

### Logic

The file in `logic/logic.ergo` contains the executable logic. Each Ergo file is identified by a namespace, and contains declarations (e.g., constants, functions, contracts). Here is the Ergo logic for the `helloworld` template:

```ergo
namespace org.accordproject.helloworld

contract HelloWorld over TemplateModel {
  // Simple Clause
  clause greet(request : MyRequest) : MyResponse {
    return MyResponse{ output: "Hello " ++ contract.name ++ " " ++ request.input }
  }
}
```

This declares a single `HelloWorld` contract in the `org.accordproject.helloworld` namespace, with one `greet`.

The `greet` clause takes a takes a request of type `MyRequest` as input and returns a response of type `MyResponse`.

It also declares that this contract `HelloWorld` is parameterized over the given `TemplateModel` found in the `models/model.cto` file.

The code for the `greet` clause returns a new `MyResponse` with a property `output` which is a string containing the `name` of from the contract (`contract`) and the `input` from the request (`request`). In Ergo, `++` stands for string concatenation.

## Execute the Template

Even after you have unzipped the template archive, you can still parse and execute that template.

## Run Unit Tests

Templates should have unit tests that cover every line of code of their business logic. You may use any of the
popular unit testing frameworks to implement the tests (mocha, chai, sinon etc). Please refer to the
``acceptance-of-delivery`` template for an example template with unit tests.

