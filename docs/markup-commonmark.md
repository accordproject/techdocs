---
id: markup-commonmark
title: Rich Text Markup
---

The following guide is not normative; the official specification can be found on the official [CommonMark page](https://commonmark.org/).

# Formatting
## Fonts
### Italic
To italicize text, simply add one asterisk `*` or underscore `_` both before and after the relevant text.

For example,
```md
_Donoghue v Stevenson_ is a landmark tort law case.
```

will be shown as:

>_Donoghue v Stevenson_ is a landmark tort law case.

### Bold
To bold text, simply add two asterisks `**` or two underscores `__` both before and after the relevant text.

For example,
```md
**Price** is defined in the Appendix.
```

will be shown as:

> **Price** is defined in the Appendix.


### Bold and Italic
To bold _and_ italicize text, add `***` both before and after the relevant text.

For example,
```md
***WARNING***: This product contains chemicals that may cause cancer.
```
will be shown as:

> ***WARNING***: This product contains chemicals that may cause cancer.


### Using \* or \_ in text
To avoid creating bold or italic when using `*` or `_` in a sentence, place a backslash `\` in the front, like: `\*` or `\_`. In fact, any punctuation character that is used for a special purpose may be 'escaped' by placing a backslash in front of it.

## Paragraphs
To start a new paragraph, insert one or more blank lines. (In other words, all paragraphs in markdown need to have one or more blank lines between them.)

For example:

```md
This is the first paragraph.

This is the second paragraph.
This is not a second paragraph.
```
will be shown as:

>This is the first paragraph.
>
>This is the second paragraph.
>This is not a second paragraph.


## Headings

### Using hash `#`
Headings from `h1` through `h6` are constructed with a `#` for each level:

```md
# h1 US Constitution
## h2 Statutes enacted by Congress
### h3 Rules promulgated by federal agencies
#### h4 State constitution
##### h5 Laws enacted by state legislature
###### h6 Local laws and ordinances
```

### Using underlines
Alternatively, headings 1 and 2 can be represented by using `=` and `-`:

```md
Linux Foundation
================

Accord Project
--------------
```


# Additional Features

## Lists

### Unordered Lists
To create an unordered list, use asterisks `*`, plus `+`, or hyphens `-` in the beginning as list markers.

For example:
```md
* Cicero
* Ergo
* Concerto
```

Renders to:
>* Cicero
>* Ergo
>* Concerto

*Tip*: To use these characters without creating a list, simply include a backslash `\` in the beginning, like `\*`, `\+`, or `\-`.

### Ordered Lists
To create an ordered list, use numbers followed by period `.`.

For example:
```md
1. One
2. Two
3. Three
```

will be shown as:
>1. One
>2. Two
>3. Three

<!-- Sometimes lists change, and when they do it's a pain to re-order all of the numbers. Markdown solves this problem by allowing you to simply use 1. before each item in the list. Like this...-->

### Nested Lists

To create a list within another, indent each item in the sublist by four spaces.

For example:
```md
1. Matters related to the business
    - enter into an agreement...
    - enter into any abnormal contracts...
2. Matters related to the assets
    - sell or otherwise dispose...
    - mortage, ...
```

will be rendered to:
>1. Matters related to the business
>    - enter into an agreement...
>    - enter into any abnormal contracts...
>2. Matters related to the assets
>    - sell or otherwise dispose...
>    - mortgage, ...


## Horizontal Rule

A horizontal rule may be used to create a "thematic break" between paragraph-level elements. In markdown, you can use of the following for this purpose:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

For example,
```md
___
---
***
```

This renders to:

>___
>
>---
>
>***

<!--References:
Commonmark official page and tutorial: https://commonmark.org/help/
OpenLaw Beginner's Guide: https://docs.openlaw.io/beginners-guide/
Markdown cheatsheet: https://gist.github.com/jonschlinkert/5854601
Headings example: http://www.nyc.gov/html/conflicts/downloads/pdf2/municipal_ethics_laws_ny_state/introduction_to_american_law.pdf
-->
