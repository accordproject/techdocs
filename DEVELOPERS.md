# Cicero Development Guide

## ❗ Accord Project Development Guide ❗
We'd love for you to help develop improvements to Cicero technology! Please refer to the [Accord Project Development guidelines][apdev] we'd like you to follow.

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

[apdev]: https://github.com/accordproject/techdocs/blob/master/DEVELOPERS.md
