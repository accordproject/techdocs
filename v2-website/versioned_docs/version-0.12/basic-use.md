---
id: basic-use
title: How to Use a Template
original_id: basic-use
---

The simplest way to work with an Accord Project template is through the Cicero command line interface (CLI). In this tutorial, we explain how to download an existing Accord Project template, create an instance of that template and how to execute the contract logic.

## Install Cicero CLI

In order to access the Cicero command line interface (CLI), first install the `@accordproject/cicero-cli` npm package:

```bash
npm install -g @accordproject/cicero-cli@0.12
```

> If you're new to `npm` the [installation instructions](accordproject-installation) have some more detailed guidance.

## Download a Template

You can download a single clause or contract template from the [Accord Project Template Library](https://templates.accordproject.org) as an archive (`.cta`) file.

If you click on the Template Library link, you should see a Web Page which looks as follows:

![Basic-Use-1](/docs/assets/basic/use1.png)

Scrolling down that page, you can see the index for the open-source templates along with their version, and whether they are a Clause or Contract template.

Click on the link to the `helloworld` template. You should be taken to a page which looks as follows:

![Basic-Use-2](/docs/assets/basic/use2.png)

Then click on the `Download Archive` button under the description for the template (highlighted in the red box in the figure). This should download the latest template archive for the `helloworld` template.

Cicero archives are files with a `.cta` extension, which includes all the different components for the template (the natural language, model and logic).

> Note that the version of `cicero-cli` needs to match the Cicero version that is required by a template.
> * You can check the version of your CLI with `cicero --version`. 
> * You can choose a different version of a template with the *Versions* dropdown in the [Accord Project Template Library](https://templates.accordproject.org).
> * Otherwise, install a specific version of the cli, for example for v0.8, use `npm install -g @accordproject/cicero-cli@0.8`.  

## Parse a Valid Clause Text

Using your terminal `cd` into the directory that contains the template archive you just downloaded, then create a sample clause text `sample.txt` which contains the following text:

```text
Name of the person to greet: "Fred Blogs".
Thank you!
```

The  use the `cicero parse` command in your terminal to load the template and parse your sample clause text. This should be echoing the result of parsing back to your terminal.

```bash
cicero parse --template helloworld@0.10.1.cta --sample sample.txt 
```

> Notes:
> * make sure that the version number in that command matches the one for the archive you have downloaded.
> * `cicero parse` requires network access. Make sure that you are online and that your firewall or proxy allows access to `https://models.accordproject.org`

This should print this output:

```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "aa3b9db9-f25f-41f4-88a4-64baba728bfe",
  "name": "Fred Blogs"
}
```

## Parse a Non-Valid Clause Text

If you attempt to parse invalid data, this same command should return with line and column information for the syntax error.

Edit your `sample.txt` file to add text that is not consistent with the template:

```text
FUBAR Name of the person to greet: "Fred Blogs".
Thank you!
```

Rerun `cicero parse --template helloworld@0.10.1.cta --sample sample.txt`. The output should now be:

```text
18:15:22 - error: invalid syntax at line 1 col 1:

  FUBAR Name of the person to greet: "Fred Blogs".
  ^
Unexpected "F"
```

## Execute the Clause

Use the `cicero execute` command to parse a clause text based (your `sample.txt`) *and* execute the clause logic using an incoming request in JSON format. To do so you need to create two additional files.

First, create a `state.json` file which contains:

```json
{
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
}
```

This is the initial state for your contract.

Then, create a `request.json` file which contains:

```json
{
  "$class": "org.accordproject.helloworld.MyRequest",
  "input": "Accord Project"
}
```

This is the request which you will send to trigger the execution of your contract.

Then use the `cicero execute` command in your terminal to load the template, parse your sample clause text *and* execute the request. This should be echoing the result of execution back to your terminal.

```bash
cicero execute --template helloworld@0.10.1.cta --sample sample.txt --state state.json --request request.json
```

> Note that `cicero execute` requires network access. Make sure that you are online and that your firewall or proxy allows access to `https://models.accordproject.org`

This should print this output:

```json
{
  "clause": "helloworld@0.10.1-d4aab9b009796f56c45872149c1f97a164856b13056f3d503c76d5e519d9f097",
  "request": {
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project",
    "transactionId": "952515b8-eb87-43d7-a582-4afb30eafc6b",
    "timestamp": "2019-04-15T22:44:14.747Z"
  },
  "response": {
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project",
    "transactionId": "b9c1b74b-db46-4213-a4d0-fbc43f9c753b",
    "timestamp": "2019-04-15T22:44:14.759Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": []
}
```

The results of execution displayed back on your terminal is in JSON format, including the following information:

* Details of the `clause` executed (name, version, SHA256 hash of clause data)
* The incoming `request` object (the same request from your `request.json` file)
* The output `response` object
* The output `state` (unchanged in this example)
* An array of `emit`ted events (empty in this example)

## Try Other Examples

That's it! You have successfully parsed and executed your first Accord Project Clause using the `helloworld` template.

Feel free to try the same commands to parse and execute other templates from the Accord Project Library. Note that for each template you can find samples for the text, for the request and for the state on the corresponding Web page. For instance, a sample for the `latedeliveryandpenalty` clause is in the red box in the following image:

![Basic-Use-3](/docs/assets/basic/use3.png)

## To Execute on Different Platforms

Templates may be executed on different platforms, not just from the command line. In the [Advanced Tutorials](advanced-nodejs), you can find information on how to execute a template in a standalone Node.js process, invoked as RESTful services, or deployed as chaincode in Hyperledger Fabric.

