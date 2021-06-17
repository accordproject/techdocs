---
id: version-0.22-tutorial-templates
title: Templates Deep Dive
original_id: tutorial-templates
---

In the [Getting Started](started-hello) section, we learned how to use the existing [helloworld@0.14.0.cta](https://templates.accordproject.org/archives/helloworld@0.14.0.cta) template archive. Here we take a look inside that archive to understand the structure of Accord Project templates.

## Unpack a Template Archive

A `.cta` archive is nothing more than a zip file containing the components of a template. Let's unzip that archive to see what is inside. First, create a directory in the place where you have downloaded that archive, then run the unzip command in a terminal:

```bash
$ mkdir helloworld
$ mv helloworld@0.14.0.cta helloworld
$ cd helloworld
$ unzip helloworld@0.14.0.cta
Archive:  helloworld@0.14.0.cta
 extracting: package.json            
   creating: text/
 extracting: text/grammar.tem.md     
 extracting: README.md               
 extracting: text/sample.md          
 extracting: request.json            
   creating: model/
 extracting: model/@models.accordproject.org.time@0.2.0.cto  
 extracting: model/@models.accordproject.org.accordproject.money@0.2.0.cto  
 extracting: model/@models.accordproject.org.accordproject.contract.cto  
 extracting: model/@models.accordproject.org.accordproject.runtime.cto  
 extracting: model/@org.accordproject.ergo.options.cto  
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

import org.accordproject.contract.* from https://models.accordproject.org/accordproject/contract.cto
import org.accordproject.runtime.* from https://models.accordproject.org/accordproject/runtime.cto

transaction MyRequest extends Request {
  o String input
}

transaction MyResponse extends Response {
  o String output
}

/**
 * The template model
 */
asset HelloWorldClause extends Clause {
  /**
   * The name for the clause
   */
  o String name
}
```

The `HelloWorldClause` as well as the `Request` and `Response` are types which are specified using the [Concerto modeling language](https://github.com/accordproject/concerto).

The `HelloWorldClause` indicate that the template is for a Clause, and should have a variable `name` of type `String` (i.e., text).

```ergo
asset HelloWorldClause extends Clause {
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
12:21:37 PM - INFO: Using current directory as template folder
12:21:37 PM - INFO: Loading a default text/sample.md file.
12:21:38 PM - INFO: 
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "name": "Fred Blogs",
  "clauseId": "ca447073-242f-4721-a5b9-c5c14b57233d",
  "$identifier": "ca447073-242f-4721-a5b9-c5c14b57233d"
}
$ cicero trigger
12:21:54 PM - INFO: Using current directory as template folder
12:21:54 PM - INFO: Loading a default text/sample.md file.
12:21:54 PM - INFO: Loading a default request.json file.
12:21:55 PM - WARN: A state file was not provided, initializing state. Try the --state flag or create a state.json in the root folder of your template.
12:21:55 PM - INFO: 
{
  "clause": "helloworld@0.14.0-4f8006ff0471176f2b5340500ba40c42adb180f26df50b747d8690c6dad79cfa",
  "request": {
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project"
  },
  "response": {
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project",
    "$timestamp": "2021-06-16T12:21:55.749-04:00"
  },
  "state": {
    "$class": "org.accordproject.runtime.State",
    "$identifier": "3fa15a55-d5db-491c-905a-7fcf5eb64d5f"
  },
  "emit": []
}
```

:::note
Remark that if your template directory contains a valid `sample.md` or valid `request.json`, Cicero will automatically detect those so you do not need to pass them using the `--sample` or `--request` options.
:::
