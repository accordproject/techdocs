---
id: tutorial-create
title: Template Generator
original_id: tutorial-create
---

Now that you have executed an existing template, let's create a new template from scratch. To facilitate the creation of new templates, Cicero comes with a template generator.

## The template generator

### Install the generator

If you haven't already done so, first install the template generator::

```bash
npm install -g yo
npm install -g yo @accordproject/generator-cicero-template
```

### Run the generator:

You can now try the template generator by running the following command in a terminal window:
```bash
yo @accordproject/cicero-template
```
This will ask you a series of questions. Give your generator a name (no spaces) and then supply a namespace for your template model (again,no spaces). The generator will then create the files and directories required for a basic template (similar to the helloworld template).

Here is an example of how it should look like in your terminal window:
```bash
bash-3.2$ yo @accordproject/cicero-template 

     _-----_     ╭──────────────────────────╮
    |       |    │      Welcome to the      │
    |--(o)--|    │ generator-cicero-templat │
   `---------´   │       e generator!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What is the name of your template? mylease
? Who is the author? me
? What is the namespace for your model? org.acme.lease
   create mylease/README.md
   create mylease/logo.png
   create mylease/package.json
   create mylease/request.json
   create mylease/logic/logic.ergo
   create mylease/model/model.cto
   create mylease/test/logic_default.feature
   create mylease/text/grammar.tem.md
   create mylease/text/sample.md
   create mylease/.cucumber.js
   create mylease/.npmignore
bash-3.2$ 
```

:::tip
You may find it easier to edit the grammar, model and logic for your template in [VSCode](https://code.visualstudio.com/), installing the [Accord Project extension](https://marketplace.visualstudio.com/items?itemName=accordproject.cicero-vscode-extension). The extension gives you syntax highlighting and parser errors within VS Code.

For more information on how to use VS Code with the Accord Project extension, please consult the [Using the VS Code extension](tutorial-vscode) tutorial.
:::

## Test your template

If you have Cicero installed on your machine, you can go into the newly created `mylease` directory and try it with cicero, to make sure the contract text parses:
```bash
bash-3.2$ cicero parse
11:51:40 AM - info: Using current directory as template folder
11:51:40 AM - info: Loading a default text/sample.md file.
11:51:41 AM - info:
{
  "$class": "org.acme.lease.MyContract",
  "name": "Dan",
  "contractId": "635633f9-e188-4d79-a867-6850d8ad6c66"
}
```
And that you can trigger the contract:
```bash
bash-3.2$ cicero trigger 
11:58:22 AM - info: Using current directory as template folder
11:58:22 AM - info: Loading a default text/sample.md file.
11:58:22 AM - info: Loading a default request.json file.
11:58:23 AM - warn: A state file was not provided, initializing state. Try the --state flag or create a state.json in the root folder of your template.
11:58:23 AM - info:
{
  "clause": "mylease@0.0.0-db65db8a6022ef8dbbc25f2fd9fdc2778596d8ff3473a33c0dab66ae76f1d86e",
  "request": {
    "$class": "org.acme.lease.MyRequest",
    "input": "World"
  },
  "response": {
    "$class": "org.acme.lease.MyResponse",
    "output": "Hello Dan World",
    "transactionId": "c5ed5a39-5fd3-4013-b53f-bdd46bd96406",
    "timestamp": "2020-09-22T15:58:23.798Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": []
}
```

The template also comes with a few simple tests which you can run by first doing an `npm install` in the template directory, then by running `npm run test`:
```bash
bash-3.2$ npm install 
bash-3.2$ npm run test 

> mylease@0.0.0 test /Users/jeromesimeon/tmp/mylease
> cucumber-js test -r .cucumber.js

....

1 scenario (1 passed)
3 steps (3 passed)
0m01.257s
bash-3.2$ 
```

## Edit your template

### Update Sample.md

First, replace the contents of `./text/sample.md` with the legal text for the contract or clause that you would like to digitize.

Check that when you run `cicero parse` that the new `./text/sample.md` is now _invalid_ with respect to the grammar.

### Edit the Template Grammar

Now update the grammar in `./text/grammar.tem.md`. Start by replacing the existing grammar, making it identical to the contents of your updated `./text/sample.md`.

Now introduce variables into your template grammar as required. The variables are marked-up using `{{` and `}}` with what is between the braces being the name of your variable.

### Edit the Template Model

All of the variables referenced in your template grammar must exist in your template model. Edit
the file `model/model.cto` to include all your variables, making sure the name of the model property matches the name of the variable in the `./text/grammar.tem.md` file.

Note that the Concerto Modeling Language primitive data types are:

- `String`: for character strings
- `Long` or `Integer`: for integer values
- `DateTime`: for dates and times
- `Double`: for floating points numbers
- `Boolean`: for values that are either true or false

:::tip
Note that you can import common types (address, monetary amount, country code, etc.) from the Accord Project Model Repository: https://models.accordproject.org.
:::

### Edit the Transaction Types

Your template expects to receive data as input and will produce data as output. The structure of
this request/response data is captured in the `MyRequest` and `MyResponse` transaction types in your model
namespace. Open up the file `models/model.cto` and edit the definition of the `MyRequest` type to
include all the data you expect to receive from the outside world and that will be used by the
business logic of your template. Similarly edit the definition of the `MyResponse` type to include
all the data that the business logic for your template will compute and would like to return to the
caller.

### Edit the Template Logic

Now edit the business logic of the template itself. This is expressed in the Ergo language, which is a strongly-typed function domain specific language for contract logic. Open the file `logic/logic.ergo`
and edit the `helloworld` clause to perform the calculations your logic requires.

Looking at the Ergo logic for other example templates will help you understand the syntax and capabilities of Ergo.

## Publishing your template

If you would like to publish your new template in the Accord Project Template Library, please consult the [Template Library](tutorial-library) Section of this documentation.

