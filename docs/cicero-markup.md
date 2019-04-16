---
id: cicero-markup
title: Markup Reference
---

## DateTime Formats

### Format Tokens

The following formatting tokens are supported:

Tokens are case-sensitive.

```md
Input        Example.           Description

YYYY         2014               4 or 2 digit year
YY           14                 2 digit year
M            12                 1 or 2 digit month number
MM           04                 2 digit month number
MMM          Feb.               Short month name
MMMM         December           Long month name
D            3                  1 or 2 digit day of month
DD           04                 2 digit day of month
H            3                  1 or 2 digit hours
HH           04                 2 digit hours
mm           59                 2 digit minutes
ss           34                 2 digit seconds
SSS          002                3 digit milliseconds
Z            +01:00             UTC offset
```

### Default Format

The default DateTime format for templates is the `MM/DD/YYYY` format, commonly used in the USA for dates. DateTime format can be customised inline in a template grammar by including an optional format string using the `as` keyword.

Example:

```md
The contract was signed on [{contractDate as "DD/MM/YYYY"}].
```

### Examples

Specifies that the format of the `contractDate` variable for the template grammar is specified in the `DD/MM/YYYY` format, common in Europe.

Note that `Z` must be the last token in the format string.

Examples of formats with a valid date/time:

```md
dateTimeProperty: [{dateTimeProperty as "D MMM YYYY HH:mm:ss.SSSZ"}]
dateTimeProperty: 1 Jan 2018 05:15:20.123+01:02
```

```md
dateTimeProperty: [{dateTimeProperty as "D MMMM YYYY HH:mm:ss.SSSZ"}]
dateTimeProperty: 1 January 2018 05:15:20.123+01:02
```

```md
dateTimeProperty: [{dateTimeProperty as "D-M-YYYY H mm:ss.SSSZ"}]
dateTimeProperty: 31-12-2019 2 59:01.001+01:01
```

```md
dateTimeProperty: [{dateTimeProperty as "DD/MM/YYYY"}]
dateTimeProperty: 01/12/2018
```

```md
dateTimeProperty: [{dateTimeProperty as "DD-MMM-YYYY H mm:ss.SSSZ"}]
dateTimeProperty: 04-Jan-2019 2 59:01.001+01:01
```

