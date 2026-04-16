# Cicero Development Guide

# Cicero Development Guide

## ! Accord Project Development Guide !
We’d love for you to help develop improvements to Accord Project technology! Please refer to the [Accord Project Development guidelines](https://github.com/accordproject/cicero/blob/main/CONTRIBUTING.md) we'd like you to follow.

## Prerequisites
Before building the documentation, ensure you have the following installed:
* **Node.js**: v18 or higher recommended
* **npm**: v9 or higher

## Installation
To build and preview the documentation locally:

```bash
cd ./website
npm install
npm run start

## Creating a new version of the documentation

```
cd ./website
npm install
npm run version `0.23.0`
```
If you want to re-generate the JSDoc API:
```
npm run build:api
```

## Commits
When commiting your changes, it is required you adhere to the [commit message conventions]. This is important because the release notes are automatically generated from these messages.
```bash
git add DEVELOPERS.md
git commit -s -m "doc(dev): improve developer guide formatting and add prerequisites"
git push origin doc/update-dev-guide

[commit message conventions]: https://www.conventionalcommits.org/en/v1.0.0/
