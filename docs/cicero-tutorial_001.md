---
id: cicero-tutorial_001
title: Quick Start Tutorial
---

# Tutorial 1 : Quick Start

## Using an existing Template

### Download the Template

You can download a single clause or contract template from https://templates.accordproject.org as a zip file. Once downloaded unzip the archive so you can inspect the contents.

If you have `git` installed you can `git clone` the template library to download all the templates, or you can use the "Download" button inside GitHub:

    git clone https://github.com/accordproject/cicero-template-library

### Parse

Using your terminal `cd` into the directory that contains the template you would like to test. In the example below we use the `helloworld` template.

Use the `cicero parse` command to load a template from a directory on disk and then use
it to parse input text, echoing the result of parsing. By default the file `sample.txt` if parsed. 
If the input text is valid the parsing result will be a JSON serialized instance of the Template Model:

Sample template.tem:

    Name of the person to greet: [{name}]. Thank you!

Sample.txt:

    Name of the person to greet: "Dan". Thank you!

Parsing using the command line:

```
    cd cicero-template-library 
    cicero parse
```

Should print this output:

```
{"$class":"org.accordproject.helloworld.HelloWorldClause","clauseId":"684efa6b-252a-49fb-8942-1124d4d46980","name":"Fred Blogs"}
```

Or, attempting to parse invalid data will result in line and column information for the syntax
error.

Edit `sample.txt` to add text that is not in the grammar file (template.tem) for the template:

Modified text:
```
    FUBAR Name of the person to greet: "Dan". Thank you!
```

Rerun `cicero parse`. The output should now be:


```
    { Error: invalid syntax at line 1 col 1:
    FUBAR  Name of the person to greet: "Dan". 
    ^ Unexpected "F"
```

### Execute

Use the `cicero execute` command to load a template from a directory on disk,
instantiate a clause based on input text (defaults to `sample.txt`), and then invoke the clause using an 
incoming JSON payload (defaults to `data.json`).

data.json::

```
    {
        "$class": "io.clause.helloworld.Request", "input": "World"
    }
```

Commands:

```
    cd cicero-template-library 
    cicero execute
```

The results of execution (a JSON serialized object) are displayed. They include: 

* Details of the clause executed (name, version, SHA256 hash of clause data)
* The incoming request object 
* The output response object
* Output state
* Emitted events

Example:

```
{
    "clause": "helloworld@0.2.0-192e3614d29d9684ec23ad6d3635988e5e37043f5286ed2d1d854dfbf5d2d18e",
    "request": {
        "$class": "org.accordproject.helloworld.MyRequest",
        "input": "Accord Project"
    },
    "response": {
        "$class": "org.accordproject.helloworld.MyResponse",
        "output": "Hello Fred Blogs Accord Project",
        "transactionId": "d4ddaef6-c3a0-4738-b14d-426498aaa04a",
        "timestamp": "2018-06-21T10:36:44.067Z"
    },
    "state": {
        "$class": "org.accordproject.cicero.contract.AccordContractState",
        "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
    },
    "emit": []
}
```

Note that in the response data from the template has been combined with data from the request.

## Creating a New Template

Now that you have executed an existing template, let's create a new template. 

> If you would like to contribute your template back into the `cicero-template-library` please start by [forking](https://help.github.com/articles/fork-a-repo/) the `cicero-template-library` project on GitHub. This will make it easy for you to submit a pull request to get your new template added to the library.

Install the template generator::

```
    npm install -g yo 
    npm install -g yo @accordproject/generator-cicero-template
```

Run the template generator:

```
    yo @accordproject/cicero-template
```

> If you have forked the `cicero-template-library` `cd` into that directory first.

Give your generator a name (no spaces) and then supply a namespace for your template model (again,
no spaces). The generator will then create the files and directories required for a basic template
(based on the helloworld template).

> You may find it easier to edit the grammar, model and logic for your template in VS Code, installing the Accord Project and Hyperledger Composer extensions. The extensions give you syntax highlighting and parser errors within VS Code.

## Update Sample.txt

First, replace the contents of `sample.txt` with the legal text for the contract or clause that you would like to digitize.
Check that when you run `cicero parse` that the `sample.txt` is now invalid with respect to the grammar.

## Edit the Template Grammar

Now update the grammar. Start by replacing the existing grammar, making it identical to the contents of your updated `sample.txt`.

Now introduce variables into your template grammar as required. The variables are marked-up using `[{` and `}]`
with what is between the braces being the name of your variable.

## Edit the Template Model

All of the variables referenced in your template grammar must exist in your template model. Edit
the file `models/model.cto` to include all your variables, making sure the name of the model property matches the name
of the variable in the `template.tem` file.

Note that the Hyperledger Composer Modeling Language primitive data types are:

- String 
- Long 
- Integer 
- DateTime 
- Double 
- Boolean

> Note that you can import common types (address, monetary amount, country code, etc.) from the Accord Project Model Repository: https://models.accordproject.org.

### Edit the Request and Response Transaction Types

Your template expects to receive data as input and will produce data as output. The structure of
this request/response data is captured in the `MyRequest` and `MyResponse` transaction types in your model
namespace. Open up the file `models/model.cto` and edit the definition of the `MyRequest` type to
include all the data you expect to receive from the outside world and that will be used by the
business logic of your template. Similarly edit the definition of the `MyResponse` type to include
all the data that the business logic for your template will compute and would like to return to the
caller.

### Edit the Logic of the Template

Now edit the business logic of the template itself. This is expressed in the Ergo language, which is a strongly-typed function domain specific language for contract logic. Open the file `lib/logic.ergo`
and edit the `helloworld` clause to perform the calculations your logic requires.

Looking at the Ergo logic for other example templates will help you understand the syntax and capabilities of Ergo.