---
id: tutorial-templates
title: Templates Deep Dive
original_id: tutorial-templates
---

In the [Getting Started](started-hello) section, we learned how to use the existing [helloworld@0.13.0.cta](https://templates.accordproject.org/archives/helloworld@0.13.0.cta) template archive. Here we take a look inside that archive to understand the structure of Accord Project templates.

## Unpack a Template Archive

A `.cta` archive is nothing more than a zip file containing the components of a template. Let's unzip that archive to see what is inside. First, create a directory in the place where you have downloaded that archive, then run the unzip command in a terminal:

```bash
$ mkdir helloworld
$ mv helloworld@0.13.0.cta helloworld
$ cd helloworld
$ unzip helloworld@0.13.0.cta
Archive:  helloworld@0.13.0.cta
 extracting: package.json            
   creating: text/
 extracting: text/grammar.tem.md     
 extracting: README.md               
 extracting: text/sample.md          
 extracting: request.json            
   creating: model/
 extracting: model/@models.accordproject.org.cicero.contract.cto  
 extracting: model/@models.accordproject.org.cicero.runtime.cto  
 extracting: model/@models.accordproject.org.money.cto  
 extracting: model/model.cto         
   creating: logic/
 extracting: logic/logic.ergo        
```

## Template Components

Once you have unziped the archive, the directory should contain the following files and sub-directories:

```text
package.json
    Metadata for the template (name, version, description etc)

README.md
    A markdown file that describes the purpose and correct usage for the template

text/grammar.tem.md
    The default grammar for the template

text/sample.md
    A sample clause or contract text that is valid for the template

model/
    A collection of Concerto model files for the template. They define the Template Model
    and models for the State, Request, Response, and Obligations used during execution.

logic/
    A collection of Ergo files that implement the business logic for the template

test/
    A collection of unit tests for the template

state.json (optional)
    A sample valid state for the clause or contract

request.json (optional)
    A sample valid request to trigger execution for the template
```

In a nutshell, the template archive contains the three main components of the [Template Triangle](accordproject-concepts#what-is-a-template) in the corresponding directories (the natural language text of your clause or contract in the `text` directory, the data model in the `model` directory, and the contract logic in the `logic` directory). Additional files include metadata and samples which can be used to illustrate or test the template.

Let us look at each of those components.

### Template Text

#### Grammar

The file in `text/grammar.tem.md` contains the grammar for the template. It is natural language, with markup to indicate the variable(s) in your Clause or Contract.

```tem
Name of the person to greet: {{name}}.
Thank you!
```

In the `helloworld` template there is only one variable `name` which is indicated between `{{` and `}}`.

#### Sample Text

The file in `text/sample.md` contains a sample valid for that grammar.

```md
Name of the person to greet: "Fred Blogs".
Thank you!
```

### Template Model

The file in `model/model.cto` contains the data model for the template. This includes a description for each of the template variables, including what kind of variable it is (also called their [type](ref-glossary.html#components-of-data-models)).

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

The `TemplateModel` as well as the `Request` and `Response` are types which are specified using the [Concerto modeling language](https://github.com/accordproject/concerto).

The `TemplateModel` indicate that the template is for a Clause, and should have a variable `name` of type `String` (i.e., text).

```ergo
asset TemplateModel extends AccordClause {
  o String name // variable 'name' is of type String
}
```

Types are always declared within a namespace (here `org.accordproject.helloworld`), which provides a mechanism to disambiguate those types amongst multiple model files.

### Template Logic

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

This declares a single `HelloWorld` contract in the `org.accordproject.helloworld` namespace, with one `greet` clause.

It also declares that this contract `HelloWorld` is parameterized over the given `TemplateModel` found in the `models/model.cto` file.

The `greet` clause takes a request of type `MyRequest` as input and returns a response of type `MyResponse`.

The code for the `greet` clause returns a new `MyResponse` response with a single property `output` which is a string. That string is constructed using the string concatenation operator (`++`) in Ergo from the `name` in the contract (`contract.name`) and the input from the request (`request.input`).

## Use the Template

Even after you have unzipped the template archive, you can use that template from the directory directly, in the same way we did from the `.cta` archive in the  [Getting Started](started-hello) section.

For instance you can use `cicero parse` or `cicero trigger` as follows:
```bash
$ cd helloworld
$ cicero parse
15:35:12 - info: Using current directory as template folder
15:35:12 - info: Loading a default text/sample.md file.
15:35:14 - info:
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "7258ecf6-cf64-4f9b-807d-c4a3ae6b83ed",
  "name": "Fred Blogs"
}
$ cicero trigger
15:35:17 - info: Using current directory as template folder
15:35:17 - info: Loading a default text/sample.md file.
15:35:17 - info: Loading a default request.json file.
15:35:19 - warn: A state file was not provided, initializing state. Try the --state flag or create a state.json in the root folder of your template.
15:35:19 - info:
{
  "clause": "helloworld@0.13.0-ba2600ef11675ad55a036361c1d99e1e9df9a6025c0a35dd5fbe3fc20a0edd07",
  "request": {
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project"
  },
  "response": {
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project",
    "transactionId": "2d49bd9e-10b1-4ddd-bca6-79a67fe18c9f",
    "timestamp": "2020-09-22T15:40:03.175Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": []
}
```

:::note
Remark that if your template directory contains a valid `sample.md` or valid `request.json`, Cicero will automatically detect those so you do not need to pass them using the `--sample` or `--request` options.
:::
