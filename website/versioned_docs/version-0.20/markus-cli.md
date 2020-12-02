---
id: markus-cli
title: Markdown Transform CLI
original_id: markus-cli
---

Install the `@accordproject/markdown-cli` npm package to access the Markdown Transform command line interface (CLI). After installation you can use the `markus` command and its sub-commands as described below.

To install the Markdown CLI:
```
npm install -g @accordproject/markdown-cli@0.8
```

## Usage

`markus` is a command line tool to debug and use markdown transformations.

```md
markus <cmd> [args]

Commands:
  markus parse      parse and transform sample markdown
  markus draft      create markdown text from data
  markus normalize  normalize markdown in a sample (parse & draft)

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
  --help         Show help                                             [boolean]
```

## markus parse

The `markus parse` command lets you parse markdown and create a document object model from it.

```md
## markus parse

parse and transform a sample markdown

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v  verbose output                       [boolean] [default: false]
  --help         Show help                                             [boolean]
  --sample       path to the markdown text                              [string]
  --output       path to the output file                                [string]
  --cicero       further transform to CiceroMark      [boolean] [default: false]
  --slate        further transform to Slate DOM       [boolean] [default: false]
  --html         further transform to HTML            [boolean] [default: false]
```

### Example

For example, using the `parse` command on the `README.md` file from the [Hello World](https://github.com/accordproject/cicero-template-library/tree/js-release-0.20/src/helloworld) template:

```
markus parse --sample README.md
```

returns:
```json
info:
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

Try the command yourself with this [sample.md](https://github.com/accordproject/markdown-transform/blob/master/packages/markdown-cli/test/data/sample.md) file.

## markus draft

The `markus draft` command lets you take a document object model and generate markdown text from it. It is the reverse of `markus parse`.

```md
## markus draft

create markdown text from data

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v  verbose output                       [boolean] [default: false]
  --help         Show help                                             [boolean]
  --data         path to the data                                       [string]
  --output       path to the output file                                [string]
  --cicero       input data is a CiceroMark DOM       [boolean] [default: false]
  --slate        input data is a Slate DOM            [boolean] [default: false]
  --noWrap       do not wrap CiceroMark variables as XML tags
                                                      [boolean] [default: false]
  --noIndex      do not index ordered lists           [boolean] [default: false]
```

### Example

For example, using the `draft` command for the [sample acceptance.json](https://github.com/accordproject/markdown-transform/blob/master/packages/markdown-cli/test/data/acceptance.json) file:

```md
markus draft --data acceptance.json
```

returns:

```md
Heading
====

And below is a **clause**.

`<clause src="ap://acceptance-of-delivery@0.12.1#721d1aa0999a5d278653e211ae2a64b75fdd8ca6fa1f34255533c942404c5c1f" clauseid="479adbb4-dc55-4d1a-ab12-b6c5e16900c0"/>
Acceptance of Delivery. <variable id="shipper" value="%22Party%20A%22"/> will be deemed to have completed its delivery obligations if in <variable id="receiver" value="%22Party%20B%22"/>'s opinion, the <variable id="deliverable" value="%22Widgets%22"/> satisfies the Acceptance Criteria, and <variable id="receiver" value="%22Party%20B%22"/> notifies <variable id="shipper" value="%22Party%20A%22"/> in writing that it is accepting the <variable id="deliverable" value="%22Widgets%22"/>.

Inspection and Notice. <variable id="receiver" value="%22Party%20B%22"/> will have <variable id="businessDays" value="10"/> Business Days' to inspect and evaluate the <variable id="deliverable" value="%22Widgets%22"/> on the delivery date before notifying <variable id="shipper" value="%22Party%20A%22"/> that it is either accepting or rejecting the <variable id="deliverable" value="%22Widgets%22"/>.

Acceptance Criteria. The "Acceptance Criteria" are the specifications the <variable id="deliverable" value="%22Widgets%22"/> must meet for the <variable id="shipper" value="%22Party%20A%22"/> to comply with its requirements and obligations under this agreement, detailed in <variable id="attachment" value="%22Attachment%20X%22"/>, attached to this agreement.`

```

If you have tried to parse the [sample.md](https://github.com/accordproject/markdown-transform/blob/master/packages/markdown-cli/test/data/sample.md) file, you would see some similarities between `sample.md` and this code block :)

### `--cicero` flag

However, `markus draft --data` may not work if the `.json` file contains `CiceroMark` nodes like Clause or Variables.

For example, trying to use the `draft` command for the [acceptance-cicero.md](https://github.com/accordproject/markdown-transform/blob/master/packages/markdown-cli/test/data/acceptance-cicero.json) using:

```md
markus draft --data acceptance-cicero.json
```

returns the following error:

```md
14:13:13 - error: Namespace is not defined for type org.accordproject.ciceromark.Clause
```

In this case, the problem can be solved by using the `--cicero` flag, to indicate your input has `CiceroMark` nodes. Therefore, the correct command to use will be:
```md
markus draft --data acceptance-cicero.json --cicero
```

## markus normalize

The `markus normalize` command lets you parse markdown and re-draft it from its document object model.

```md
## markus normalize

normalize a sample markdown (parse & redraft)

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v  verbose output                       [boolean] [default: false]
  --help         Show help                                             [boolean]
  --sample       path to the markdown text                              [string]
  --output       path to the output file                                [string]
  --cicero       further transform to CiceroMark      [boolean] [default: false]
  --slate        further transform to Slate DOM       [boolean] [default: false]
  --noWrap       do not wrap variables as XML tags    [boolean] [default: false]
  --noIndex      do not index ordered lists           [boolean] [default: false]
```

### Example

For example, using the `normalize` command on the `README.md` file from the [Hello World](https://github.com/accordproject/cicero-template-library/tree/js-release-0.20/src/helloworld) template:

```md
markus normalize --sample README.md
```

returns:

```md
info:
Hello World
====

This is the Hello World of Accord Project Templates. Executing the clause will simply echo back the text that occurs after the string `Hello` prepended to text that is passed in the request.
```

### Benefits of using `normalize`

In the previous example, using the `normalize` command did not change the `README.md` file much. This is because the `README.md` file was already well formatted.

However, the true benefits of `markus normalize` can be seen when it is used for a `.md` file that is not well formatted.

For example, consider the following markdown text (to try it, please save this as `markus-test.md` on your computer):

```md
## Lists

1. This is number one
1. This is number one, too.
1. This is another number one.
1. This is the fourth number one.
1. Let's see how this gets normalized.

## Paragraphs

This is the first paragraph.








This is the second paragraph, with many lines in between.
```

Using `markdown normalize` on this code:

```md
markus normalize --sample markus-test.md
```

returns:

```md
14:25:50 - info:
Lists
----

1. This is number one
2. This is number one, too.
3. This is another number one.
4. This is the fourth number one.
5. Let's see how this gets normalized.

Paragraphs
----

This is the first paragraph.

This is the second paragraph, with many lines in between.
```
