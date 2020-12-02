---
id: basic-create
title: Creating a New Template
original_id: basic-create
---

Now that you have executed an existing template, let's create a new template.

> If you would like to contribute your template back into the `cicero-template-library` please start by [forking](https://help.github.com/articles/fork-a-repo/) the `cicero-template-library` project on GitHub. This will make it easy for you to submit a pull request to get your new template added to the library.

Install the template generator::

```
    npm install -g yo
    npm install -g yo @accordproject/generator-cicero-template@0.12
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

## Edit the Transaction Types

Your template expects to receive data as input and will produce data as output. The structure of
this request/response data is captured in the `MyRequest` and `MyResponse` transaction types in your model
namespace. Open up the file `models/model.cto` and edit the definition of the `MyRequest` type to
include all the data you expect to receive from the outside world and that will be used by the
business logic of your template. Similarly edit the definition of the `MyResponse` type to include
all the data that the business logic for your template will compute and would like to return to the
caller.

## Edit the Template Logic

Now edit the business logic of the template itself. This is expressed in the Ergo language, which is a strongly-typed function domain specific language for contract logic. Open the file `lib/logic.ergo`
and edit the `helloworld` clause to perform the calculations your logic requires.

Looking at the Ergo logic for other example templates will help you understand the syntax and capabilities of Ergo.

