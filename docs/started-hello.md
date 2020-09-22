---
id: started-hello
title: Hello World Template
---

Once you have installed Cicero, you can try it on an existing Accord Project template. This explains how to create an instance of that template and how to run the contract logic.

## Download a Template

You can download a single clause or contract template from the [Accord Project Template Library](https://templates.accordproject.org) as an archive (`.cta`) file. Cicero archives are files with a `.cta` extension, which includes all the different components for the template (text, model and logic).

If you click on the Template Library link, you should see a Web Page which looks as follows:

![Basic-Use-1](/docs/assets/basic/use1.png)

Scrolling down that page, you can see the index for the open-source templates along with their version, and whether they are a Clause or Contract template.

Click on the link to the `helloworld` template. You should be taken to a page which looks as follows:

![Basic-Use-2](/docs/assets/basic/use2.png)

Then click on the `Download Archive` button under the description for the template (highlighted in the red box in the figure). This should download the latest template archive for the `helloworld` template.

## Parse: Extract Deal Data from Text

You can use Cicero to extract deal data from a contract text using the `cicero parse` command.

### Parse Valid Text

Using your terminal, change into the directory (or `cd` into the directory) that contains the template archive you just downloaded, then create a sample clause text `sample.md` which contains the following text:

```md
Name of the person to greet: "Fred Blogs".
Thank you!
```

Then run the `cicero parse` command in your terminal to load the template and parse your sample clause text. This should be echoing the result of parsing back to your terminal.

```bash
cicero parse --template helloworld@0.13.0.cta --sample sample.md
```

:::note
* Templates are tied to a specific version of the cicero tool. Make sure that the version number output from `cicero --version` is compatible with the template. Look for `^0.21.0` or similar at the top of the template web page.
* `cicero parse` requires network access. Make sure that you are online and that your firewall or proxy allows access to `https://models.accordproject.org`
:::

This should extract the data (or "deal points") from the text and output:

```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "aa3b9db9-f25f-41f4-88a4-64baba728bfe",
  "name": "Fred Blogs"
}
```

You can save the result of `cicero parse` into a file using the `--output` option:
```
cicero parse --template helloworld@0.13.0.cta --sample sample.md --output data.json
```

### Parse Non-Valid Text

If you attempt to parse text which is not valid according to the template, this same command should return an error.

Edit your `sample.md` file to add text that is not consistent with the template:

```text
FUBAR Name of the person to greet: "Fred Blogs".
Thank you!
```

Then run `cicero parse --template helloworld@0.13.0.cta --sample sample.md` again. The output should now be:

```text
2:13:15 AM - error: Parse error at line 1 column 1
FUBAR Name of the person to greet: "Fred Blogs".
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Expected: 'Name of the person to greet: '
```

## Draft: Create Text from Deal Data

You can use Cicero to create new contract text from deal data using the `cicero draft` command.

### Draft from Valid Data

If you have saved the deal data earlier in a `data.json` file, you can edit it to change the name from `Fred Blogs` to `John Doe`, or create a brand new `data.json` file containing:
```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "aa3b9db9-f25f-41f4-88a4-64baba728bfe",
  "name": "John Doe"
}
```

Then run the `cicero draft` command in your terminal:
```
cicero draft --template helloworld@0.13.0.cta --data data.json
```

This should create a new contract text and output:
```
13:17:18 - info: Name of the person to greet: "John Doe".
Thank you!
```

You can save the result of `cicero draft` into a file using the `--output` option:
```
cicero draft --template helloworld@0.13.0.cta --data data.json --output new-sample.md
```

### Draft from Non-Valid Data

If you attempt to draft from data which is not valid according to the template, this same command should return an error.

Edit your `data.json` file so that the `name` variable is missing:
```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "clauseId": "aa3b9db9-f25f-41f4-88a4-64baba728bfe"
}
```

Then run `cicero draft --template helloworld@0.13.0.cta --data data.json` again. The output should now be:
```
13:38:11 - error: Instance org.accordproject.helloworld.HelloWorldClause#6f91e060-f837-4108-bead-63891a91ce3a missing required field name
```

## Trigger: Run the Contract Logic

You can use Cicero to run the logic associated to a contract using the `cicero trigger` command.

### Trigger with a Valid Request

Use the `cicero trigger` command to parse a clause text based (your `sample.md`) *then* send a request to the clause logic.

To do so you, first create one additional file `request.json` which contains:
```json
{
  "$class": "org.accordproject.helloworld.MyRequest",
  "input": "Accord Project"
}
```

This is the request which you will send to trigger the execution of your contract.

Then run the `cicero trigger` command in your terminal to load the template, parse your clause text *and* send the request. This should be echoing the result of execution back to your terminal.

```bash
cicero trigger --template helloworld@0.13.0.cta --sample sample.md --request request.json
```

This should print this output:

```json
13:42:29 - info:
{
  "clause": "helloworld@0.13.0-c03393f7e50865012e6005050fcaccb2716481fa7599905f7306673cf15857cf",
  "request": {
    "$class": "org.accordproject.helloworld.MyRequest",
    "input": "Accord Project"
  },
  "response": {
    "$class": "org.accordproject.helloworld.MyResponse",
    "output": "Hello Fred Blogs Accord Project",
    "transactionId": "ecc56a61-713c-4113-9842-550efb09ac74",
    "timestamp": "2019-11-03T18:42:29.984Z"
  },
  "state": {
    "$class": "org.accordproject.cicero.contract.AccordContractState",
    "stateId": "org.accordproject.cicero.contract.AccordContractState#1"
  },
  "emit": []
}
```

The results of execution displayed back on your terminal is in JSON format. It includes the following information:

* Details of the `clause` being triggered (name, version, SHA256 hash of the template)
* The incoming `request` object (the same request from your `request.json` file)
* The output `response` object
* The output `state` (unchanged in this example)
* An array of `emit`ted events (empty in this example)

That's it! You have successfully parsed and executed your first Accord Project Clause using the `helloworld` template.

### Trigger with a Non-Valid Request

If you attempt to trigger the contract from a request which is not valid according to the template, this same command should return an error.

Edit your `request.json` file so that the `input` variable is missing:
```json
{
  "$class": "org.accordproject.helloworld.MyRequest"
}
```

Then run `cicero trigger --template helloworld@0.13.0.cta --sample sample.md --request request.json ` again. The output should now be:
```
13:47:35 - error: Instance org.accordproject.helloworld.MyRequest#b0b1cbcc-dcae-4758-b9fc-254a43aa10a8 missing required field input
```

## What Next?

### Try Other Templates

Feel free to try the same commands to parse and execute other templates from the Accord Project Library. Note that for each template you can find samples for the text, for the request and for the state on the corresponding Web page. For instance, a sample for the [Late Delivery And Penalty](https://templates.accordproject.org/latedeliveryandpenalty@0.15.0.html) clause is in the red box in the following image:

![Basic-Use-3](/docs/assets/basic/use3.png)

### More About Cicero

You can find more information on how to create or publish Accord Project templates in the [Work with Cicero](tutorial-templates) tutorials.

### Run on Different Platforms

Templates may be executed on different platforms, not only from the command line. You can find more information on how to execute Accord Project templates on different platforms (Node.js, Hyperledger Fabric, etc.) in the [Template Execution](tutorial-nodejs) tutorials.

