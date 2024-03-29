---
id: version-0.30.0-markup-commonmark
title: CommonMark
original_id: markup-commonmark
---

The following CommonMark guide is non normative, but included for convenience. For a more detailed introduction we refer the reader the [CommonMark Webpage](https://commonmark.org/) and [Specification](https://spec.commonmark.org/0.29/).

## Formatting

### Italics

To italicize text, add one asterisk `*` or underscore `_` both before and after the relevant text.

##### Example

```md
_Donoghue v Stevenson_ is a landmark tort law case.
```
will be rendered as:

> _Donoghue v Stevenson_ is a landmark tort law case.

### Bold
To bold text, add two asterisks `**` or two underscores `__` both before and after the relevant text.

##### Example

```md
**Price** is defined in the Appendix.
```

will be rendered as:

> **Price** is defined in the Appendix.


### Bold and Italic
To bold _and_ italicize text, add `***` both before and after the relevant text.

##### Example

```md
***WARNING***: This product contains chemicals that may cause cancer.
```
will be rendered as:

> ***WARNING***: This product contains chemicals that may cause cancer.

## Paragraphs
To start a new paragraph, insert one or more blank lines. (In other words, all paragraphs in markdown need to have one or more blank lines between them.)

##### Example

```md
This is the first paragraph.

This is the second paragraph.
This is not a third paragraph.
```
will be rendered as:

>This is the first paragraph.
>
>This is the second paragraph.
>This is not a third paragraph.


## Headings

### Using `#` (ATX Headings)

Level-1 through level-6 headings from are written with a `#` for each level.

#### Example

```md
# US Constitution
## Statutes enacted by Congress
### Rules promulgated by federal agencies
#### State constitution
##### Laws enacted by state legislature
###### Local laws and ordinances
```

will be rendered as:
> <h1>US Constitution</h1>
> <h2>Statutes enacted by Congress</h2>
> <h3>Rules promulgated by federal agencies</h3>
> <h4>State constitution</h4>
> <h5>Laws enacted by state legislature</h5>
> <h6>Local laws and ordinances</h6>

### Using `=` or `-` (Setext Headings)

Alternatively, headings with level 1 or 2 can be represented by using `=` and `-` under the text of the heading.

#### Example

```md
Linux Foundation
================

Accord Project
--------------
```

will be rendered as:
> <h1>Linux Foundation</h1>
> <h2>Accord Project</h2>

## Lists

### Unordered Lists
To create an unordered list, use asterisks `*`, plus `+`, or hyphens `-` in the beginning as list markers.

#### Example

```md
* Cicero
* Ergo
* Concerto
```

Will be rendered as:
>* Cicero
>* Ergo
>* Concerto

### Ordered Lists

To create an ordered list, use numbers followed by a period `.`.

#### Example

```md
1. One
2. Two
3. Three
```

will be rendered as:
>1. One
>2. Two
>3. Three

### Nested Lists

To create a list within another, indent each item in the sublist by four spaces.

#### Example
```md
1. Matters related to the business
    - enter into an agreement...
    - enter into any abnormal contracts...
2. Matters related to the assets
    - sell or otherwise dispose...
    - mortage, ...
```

will be rendered as:
>1. Matters related to the business
>    - enter into an agreement...
>    - enter into any abnormal contracts...
>2. Matters related to the assets
>    - sell or otherwise dispose...
>    - mortgage, ...

## Tables

To create a table, use pipes `|` to separate each column and use three or more hyphens `---` for each column's header. For compatibility, you should not create a table without a header and add also add a pipe on either end of a row.

#### Example

```md
| Header 1    | Header 2    |
| ----------- | ----------- |
| Column 1    | Column 2    |
```

will be rendered as

>| Header 1    | Header 2    |
>| ----------- | ----------- |
>| Column 1    | Column 2    |

It is not necessary to have identical cell widths for the whole table. The rendered output will look the same irrespective of varying cell widths.

```md
| Header 1    | Header 2    |
| ---------| ---------|
| Column 1    | Column 2      |
```

will be rendered as

>| Header 1    | Header 2    |
>| ---------| ---------|
>| Column 1    | Column 2      |

### Formatting the Tables

A table can contain links, code (words or phrases in backticks (`) only) , formatted text (bold, italics) or images. However, adding lists, headings, blockquotes, code blocks, horizontal rules or nested tables is not possible.

#### Example

```md
| Column1     | Column 2    |
| ----------- | ----------- |
| text | ![ap_logo](https://docs.accordproject.org/docs/assets/020/template.png "AP triangle")       | 
| \`\`\`code block\`\`\`   | **Bold content**     |
| [link](http://clause.io) | *Italics* |
```
will be rendered as 

>| Column1     | Column 2    |
>| ----------- | ----------- |
>| text | ![ap_logo](https://docs.accordproject.org/docs/assets/020/template.png "AP triangle")       | 
>| \`\`\`code block\`\`\`   | **Bold content**     |
>| [link](http://clause.io) | *Italics* |

## Horizontal Rule

A horizontal rule may be used to create a "thematic break" between paragraph-level elements. In markdown, you can create a thematic break using either of the following:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

#### Example

```md
___
---
***
```

Will be rendered as:
>___
>
>---
>
>***

## Escaping

Any markdown character that is used for a special purpose may be _escaped_ by placing a backslash in front of it.

For instance avoid creating bold or italic when using `*` or `_` in a sentence, place a backslash `\` in the front, like: `\*` or `\_`.

#### Example

```md
This is \_not\_ italics but _this_ is!
```
Will be rendered as:
> This is \_not\_ italics but _this_ is!


<!--References:
Commonmark official page and tutorial: https://commonmark.org/help/
OpenLaw Beginner's Guide: https://docs.openlaw.io/beginners-guide/
Markdown cheatsheet: https://gist.github.com/jonschlinkert/5854601
Headings example: http://www.nyc.gov/html/conflicts/downloads/pdf2/municipal_ethics_laws_ny_state/introduction_to_american_law.pdf
-->
