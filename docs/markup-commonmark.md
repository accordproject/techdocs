---
id: markup-commonmark
title: Rich Text Markup
---

## Formatting

<!--Fonts-->
## Fonts

### Italic
To italicize text, simply add one asterisk `*` or underscore `_` both before and after the relevant text. For example, `_Donoghue v Stevenson_ is a landmark tort law case.` will be shown as:
```md
_Donoghue v Stevenson_ is a landmark tort law case.
```

### Bold
To bold text, simply add two asterisks `**` or two underscores `__` both before and after the relevant text. For example, `**Price** is defined in the Appendix.` will be shown as:
```md
**Price** is defined in the Appendix.
```

### Bold and Italic
To bold _and_ italicize text, add `***` both before and after the relevant text. For example, `*** WARNING***: This product contains chemicals that may cause cancer.` will be shown as:
```md
***WARNING***: This product contains chemicals that may cause cancer.
```

### Using \* or \_ in text
To avoid creating bold or italic when using `*` or `_`, place a backslash `\` in the front, like: `\*` or `\_`. In fact, any punctuation character that is used for a special purpose may be 'escaped' by placing a backslash in front of it.  

<!--Paragraphs-->
## Paragraphs
To start a new paragraph, insert one or more blank lines. (In other words, all paragraphs in markdown need to have one or more blank lines between them.) For a **line break**, add either a backslash `\` or two blank spaces at the end of the line. For example:   
`This is the first paragraph.

This is the second paragraph.

This is a\ line\ break.` will be shown as:

```md
This is the first paragraph.

This is the second paragraph.

This is a\ line\ break.
```

<!--Heading and Titles-->
## Headings

### Using hash `#`
Headings from `h1` through `h6` are constructed with a `#` for each level:
```
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

Renders to:

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

### Using underlines
Alternatively, headings 1 and 2 can be represented by using `=` and `-`:
```
Heading 1
=========

Heading 2
---------
```

Renders to:
Heading 1
=========

Heading 2
---------


<!--Perhaps less useful for generating contracts-->
## Additional Features

<!--Lists-->
## Lists

### Unordered Lists
To create an unordered list, use asterisks `*`, plus `+`, or hyphens `-` in the beginning as list markers. For example:
```
* Carrots
* Broccoli
* Potatoes
```

Renders to:
* Carrots
* Broccoli
* Potatoes

*Tip*: To use these characters without creating a list, simply include a backslash `\` in the beginning, like `\*`, `\+`, or `\-`.

### Ordered Lists
To create an ordered list, use numbers followed by period `.`. For example:
```
1. One
2. Two
3. Three
```

will be shown as:
1. One
2. Two
3. Three

> Sometimes lists change, and when they do it's a pain to re-order all of the numbers. Markdown solves this problem by allowing you to simply use 1. before each item in the list. Like this...

### Nested Lists

**TBD**

<!--Blockquotes-->
## Blockquote
To create a blockquote (used for defining a section of quoting text from another source within the document), start a line with greater than `>` before the text. For example:
```
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
```

Renders to:
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.


<!--Inserting Links-->
## Inserting Links
**TBD**

### Autolinks

### In-Line links

[Link](http://a.com)

### Link Titles

[Link][1]
⋮
[1]: http://b.org

### Cross-referencing

<!--Inserting images-->
## Inserting Images
**TBD**  

![Image](http://url/a.png)

![Image][1]
⋮
[1]: http://url/b.jpg

<!--Code-->
## Code

### In-line Code
`Inline code` with backticks

### Code Block
```
# code block
print '3 backticks or'
print 'indent 4 spaces'
```

····# code block
····print '3 backticks or'
····print 'indent 4 spaces'


<!--Horizontal Rule-->
## Horizontal Rule
A horizontal rule may be used to create a "thematic break" between paragraph-level elements. In markdown, you can use of the following for this purpose:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

This renders to:

___

---

***

<!--References:
Commonmark official page and tutorial: https://commonmark.org/help/
OpenLaw Beginner's Guide: https://docs.openlaw.io/beginners-guide/
Markdown cheatsheet: https://gist.github.com/jonschlinkert/5854601
-->
