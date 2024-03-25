# Cicero Development Guide

## ❗ Accord Project Development Guide ❗
We'd love for you to help develop improvements to Accord Project technology! Please refer to these Accord Project Development guidelines we'd like you to follow.

## Installation

To build the documentation locally:
```
cd ./website
npm install
npm run start
```
If you want to re-generate the JSDoc API:
```
npm run build:api
```

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

[commit message conventions]: https://www.conventionalcommits.org/en/v1.0.0/
