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
npm install -g yo @accordproject/generator-cicero-template@0.20
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
? What is the namespace for your model? org.acme.lease
   create mylease/README.md
   create mylease/package.json
   create mylease/request.json
   create mylease/logic/logic.ergo
   create mylease/model/model.cto
   create mylease/test/logic_default.feature
   create mylease/text/grammar.tem.md
   create mylease/text/sample.md
   create mylease/.cucumber.js
   create mylease/.npmignore
```

:::tip
You may find it easier to edit the grammar, model and logic for your template in [VSCode](https://code.visualstudio.com/), installing the [Accord Project extension](https://marketplace.visualstudio.com/items?itemName=accordproject.cicero-vscode-extension). The extension gives you syntax highlighting and parser errors within VS Code.
:::

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

