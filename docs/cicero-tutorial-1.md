---
id: cicero-tutorial-1
title: Using an existing Template
---

## Install Cicero CLI

In order to access the Cicero command line interface (CLI), install the `@accordproject/cicero-cli` npm package:

`npm i -g @accordproject/cicero-cli`

> If you're new to `npm` the [installation instructions](accordproject-gettingstarted) have some more detailed guidance.

## Download a Template

You can download a single clause or contract template from the [Accord Project Template Library](https://templates.accordproject.org) as a zip file. Once downloaded unzip the archive so you can inspect the contents.

> Note that the version of `cicero-cli` needs to match the Cicero version that is required by a template.
> * You can check the version of your CLI with `cicero --version`. 
> * You can choose a different version of a template with the *Versions* dropdown in the [Accord Project Template Library](https://templates.accordproject.org).
> * Otherwise, install a specific version of the cli, for example for v0.8, use `npm i -g @accordproject/cicero-cli@0.8`.  

If you have `git` installed you can `git clone` the template library to download all the templates, or you can use the "Download" button inside GitHub:

```bash
git clone https://github.com/accordproject/cicero-template-library
```
    
## Parse

Using your terminal `cd` into the directory that contains the template you would like to test. In the example below we use the `helloworld` template.

Use the `cicero parse` command to load a template from a directory on disk and then use
it to parse input text, echoing the result of parsing. By default the file `sample.txt` is parsed.
If the input text is valid the parsing result will be a JSON serialized instance of the Template Model:

For the template in `grammar/template.tem`:

```md
Name of the person to greet: [{name}]. Thank you!
```

and the sample clause in `sample.txt`:

```text
Name of the person to greet: "Dan". Thank you!
```

parsing using the command line:

```bash
cd cicero-template-library/src/helloworld
cicero parse
```

should print this output:

```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "234aedae-bc28-4894-b85a-d370793fee48",
  "name": "Fred Blogs"
}
```

> Note that `cicero parse` requires network access. Make sure that you are online and that your firewall or proxy allows access to `https://models.accordproject.org`

Or, attempting to parse invalid data will result in line and column information for the syntax
error.

Edit `sample.txt` to add text that is not in the grammar file (template.tem) for the template:

Modified text:
```text
FUBAR Name of the person to greet: "Dan". Thank you!
```

Rerun `cicero parse`. The output should now be:


```text
23:08:46 - error: invalid syntax at line 1 col 1:

  FUBAR Name of the person to greet: "Fred Blogs".
  ^
Unexpected "F"
```

## Execute

Use the `cicero execute` command to load a template from a directory on disk,
instantiate a clause based on input text (defaults to `sample.txt`), and then invoke the clause using an
incoming JSON payload (defaults to `request.json`).

request.json::

```json
{
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project"
}
```

Commands:

```bash
cd cicero-template-library/src/helloworld
cicero execute
```

> Note that `cicero execute` requires network access. Make sure that you are online and that your firewall or proxy allows access to `https://models.accordproject.org`

The results of execution (a JSON serialized object) are displayed. They include:

* Details of the clause executed (name, version, SHA256 hash of clause data)
* The incoming request object
* The output response object
* Output state
* Emitted events

Example:

```json
{
  "clause": "helloworld@0.6.0-20ede4c859c12480fd47781d6fafbfac9879b9f9b650f7d24bf2d385d167753e",
  "request": {
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project"
  },
  "response": {
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project",
    "transactionId": "1e1eb427-fb7a-4a94-901b-590d140ed909",
    "timestamp": "2018-09-12T03:10:05.660Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": []
}
```

Note that in the response data from the template has been combined with data from the request.

