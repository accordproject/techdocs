---
id: version-0.20-faq-lawyers
title: For Lawyers
original_id: faq-lawyers
---
# What can the Accord Project do for Lawyers?

* ## What is a "Smart Legal Contract" and why would I want to use one?

In the Accord Project a Smart Legal Contract starts with a legal contract with the added ability to incorporate machine readable data and computer code that perform tasks. The variable information such as names, amounts, dates, etc. is tagged with {{__}} so that it can be pulled out of the contract and used by a computer. There is a special schema language called Concerto that lets you describe all of the variable information or data contained in the contract. The data remains tied to the text of the contract and the two are inseparable. The third part of an Accord Project contract is Ergo which is a special computer language that can perform tasks such as verifying addresses, reacting to outside events or interacting with a blockchain.

 These three elements form an Accord Project Contract;

* Cicero template - the plain text of the contract
* Concerto - a representation of the data in the contract
* Ergo - the logic that can perform actions either within the contract or with the outside world

Instead of just being a piece of paper the Smart Legal Contract is a digital contract. It is at home in the digital world.

By combining code, data and legal text Accord Project contracts can;

* be interpreted by Courts 
* reach out to grab data or verify data 
* monitor events through IOT or other sensors
* react to external data such as weather data and market price data


* ## Can I use Word with the Accord Project?

The Accord Project is developing a Word plugin to help with editing Accord Project templates. [Cicero Templates](https://templates.accordproject.org/), the legal language portion of an Accord Project Template are written in [Ciceromark](https://docs.accordproject.org/docs/markup-cicero.html). Ciceromark is plain text and it is a variation of [Markdown](https://commonmark.org/) which is a common text formatting tool. 

The plugin will be able to export a Word document as Ciceromark. 

Currently you can save your file and then use a command line utility call Markdown Transform to convert the docx file to Ciceromark. 

* To install the utility use :
```npm install -g @accordproject/markdown-cli```

* ## I've heard of Ethereum/Solidity smart contracts how is the Accord Project different?

*Smart Contract* code on a blockchain is code that executes on the chain. It is a stored procedure that executes when it receives an input and creates a transaction on the blockchain. It may be linked to a written legal contract and it may interact with the world outside of the blockchain through an oracle or some other means but at heart it is computer code the executes in the blockchain. 

An Accord Project *Smart Contract* is three integrated parts; it is the written legal text, the data that is inserted into the legal text and the computer code that uses the data. Accord Project computer code, Ergo, can be translated to run on a block chain. 

* ## How and where do I run my Accord contract?

Right now the main place to be able to run an Accord Project Contract is at the commercial site [Clause.io](clause.io) and you can test a contract in the [Template Studio](https://studio.accordproject.org/). 

An Accord Contract can integrated into an existing project [Developer Docs](https://docs.accordproject.org/docs/tutorial-nodejs.html) with the help of a developer.

New platforms and ways to integrate will be appearing as smart contracts mature.


* ## I don't like any of the existing templates. Can I create my own?

Yes. Here are instructions [Create your own Template](https://docs.accordproject.org/docs/started-installation.html)


* ## Can I create a template library for my firm or Bar Association?

Yes, Templates and Models are both stored in Github repositories [Template Library](https://github.com/accordproject/cicero-template-library), [Model Library](https://github.com/accordproject/models). The repositories contain javascript wrappers that help display the repositories. Each repository has a src section that holds Templates or Models. The Accord Project has done a lot of work to provide you with a nice package - You just need to add your contracts.

To deploy a library you can either fork or clone the respective depository make your changes and redploy to [Netlify](www.netlify.com), [Azure Storage](https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial-vscode-static-website-node-01?tabs=bash), [S3](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-static-web-host.html). 
