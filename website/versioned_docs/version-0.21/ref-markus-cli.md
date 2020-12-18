---
id: ref-markus-cli
title: Command Line
original_id: ref-markus-cli
---

Install the `@accordproject/markdown-cli` npm package to access the Markdown Transform command line interface (CLI). After installation you can use the `markus` command and its sub-commands as described below.

To install the Markdown CLI:
```bash
npm install -g @accordproject/markdown-cli
```

## Usage

`markus` is a command line tool to debug and use markdown transformations.

```md
markus <cmd> [args]

Commands:
  markus transform  transform between two formats

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
```

## markus transform

The `markus transform` command lets you transform between any two of the supported formats

```md
markus transform

transform between two formats

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v  verbose output                       [boolean] [default: false]
  --help         Show help                                             [boolean]
  --input        path to the input                                      [string]
  --from         source format                    [string] [default: "markdown"]
  --to           target format                  [string] [default: "commonmark"]
  --via          intermediate formats                      [array] [default: []]
  --roundtrip    roundtrip transform                  [boolean] [default: false]
  --output       path to the output file                                [string]
  --model        array of concerto model files                           [array]
  --template     template grammar                                       [string]
  --contract     contract template                    [boolean] [default: false]
  --currentTime  set current time                       [string] [default: null]
  --plugin       path to a parser plugin                                [string]
  --sourcePos    enable source position               [boolean] [default: false]
  --offline      do not resolve external models       [boolean] [default: false]
```

### Example

For example, you can use the `transform` command on the `README.md` file from the [Hello World](https://github.com/accordproject/cicero-template-library/blob/master/src/helloworld) template:

```bash
markus transform --input README.md
```

returns:
```json
{
  "$class": "org.accordproject.commonmark.Document",
  "xmlns": "http://commonmark.org/xml/1.0",
  "nodes": [
    {
      "$class": "org.accordproject.commonmark.Heading",
      "level": "1",
      "nodes": [
        {
          "$class": "org.accordproject.commonmark.Text",
          "text": "Hello World"
        }
      ]
    }, 
    {
      "$class": "org.accordproject.commonmark.Paragraph",
      "nodes": [
        {
          "$class": "org.accordproject.commonmark.Text",
          "text": "This is the Hello World of Accord Project Templates. Executing the clause will simply echo back the text that occurs after the string "
        }, 
        {
          "$class": "org.accordproject.commonmark.Code",
          "text": "Hello"
        }, 
        {
          "$class": "org.accordproject.commonmark.Text",
          "text": " prepended to text that is passed in the request."
        }
      ]
    }
  ]
}
```

### `--from` and `--to` options

You can indicate the source and target formats using the `--from` and `--to` options. For instance, the following transforms from `markdown` to `html`:

```bash
markus transform --from markdown --to html
```

returns:

```md
<html>
<body>
<div class="document">
<h1>Hello World</h1>
<p>This is the Hello World of Accord Project Templates. Executing the clause will simply echo back the text that occurs after the string <code>Hello</code> prepended to text that is passed in the request.</p>
</div>
</body>
</html>
```

### `--via` option

When there are several paths between two formats, you can indicate an intermediate format using the `--via` option. The following transforms from `markdown` to `html` _via_ `slate`:

```bash
markus transform --from markdown --via slate --to html
```

returns:

```md
<html>
<body>
<div class="document">
<h1>Hello World</h1>
<p>This is the Hello World of Accord Project Templates. Executing the clause will simply echo back the text that occurs after the string <code>Hello</code> prepended to text that is passed in the request.</p>
</div>
</body>
</html>
```

### `--roundtrip` option

When the transforms allow, you can roundtrip between two formats, i.e., transform from a source to a target format and back to the source target. For instance, the following transform from `markdown` to `slate` and back to markdown:

```md
markus transform --from markdown --to slate --input README.md --roundtrip
```

returns:

```bash
Hello World
====

This is the Hello World of Accord Project Templates. Executing the clause will simply echo back the text that occurs after the string `Hello` prepended to text that is passed in the request.
```

:::
Roundtripping might result in small changes in the source markdown, but should always be semantically equivalent. In the above example the source ATX heading `# Hello World` has been transformed into a Setext heading equivalent.
:::

### `--model` `--contract` options

When handling [TemplateMark](markdown-templatemark), one has to provide a model using the `--model` option and whether the template is a clause (default) or a contract (using the `--contract` option).

For instance the following converts markdown with the template extension to a TemplateMark document object model:
```bash
markus transform --from markdown_template --to templatemark --model model/model.cto --input text/grammar.tem.md
```

returns:

```json
{
  "$class": "org.accordproject.commonmark.Document",
  "xmlns": "http://commonmark.org/xml/1.0",
  "nodes": [
    {
      "$class": "org.accordproject.templatemark.ClauseDefinition",
      "name": "top",
      "elementType": "org.accordproject.helloworld.HelloWorldClause",
      "nodes": [
        {
          "$class": "org.accordproject.commonmark.Paragraph",
          "nodes": [
            {
              "$class": "org.accordproject.commonmark.Text",
              "text": "Name of the person to greet: "
            }, 
            {
              "$class": "org.accordproject.templatemark.VariableDefinition",
              "name": "name",
              "elementType": "String"
            }, 
            {
              "$class": "org.accordproject.commonmark.Text",
              "text": "."
            }, 
            {
              "$class": "org.accordproject.commonmark.Softbreak"
            }, 
            {
              "$class": "org.accordproject.commonmark.Text",
              "text": "Thank you!"
            }
          ]
        }
      ]
    }
  ]
}
```

### `--template` option

Parsing or drafting contract text using a template can be done using the `--template` option, usually with the corresponding `--model` option to indicate the template model.

For instance, the following parses a markdown with CiceroMark extension to get the correspond contract data:
```bash
markus transform --from markdown_cicero --to data --template text/grammar.tem.md --model model/model.cto --input text/sample.md 
```

returns:

```json
{
  "$class": "org.accordproject.helloworld.HelloWorldClause",
  "name": "Fred Blogs",
  "clauseId": "fc345528-2604-420c-9e02-8d85e03cb65b"
}
```
