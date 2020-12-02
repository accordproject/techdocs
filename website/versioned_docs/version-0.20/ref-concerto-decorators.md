---
id: ref-concerto-decorators
title: Decorators
---

Decorators are used to add metadata to Concerto model elements, typically to control how variables are edited, printed or transformed.

## Pdf

The `@Pdf` decorator is used to control how a variable is rendered by the `markdown-pdf` transformation, which is used to convert CiceroMark rich text to PDF.

### Attributes

**style** : specifies the style name used to render the variable. Default styles are [defined in the code](https://github.com/accordproject/markdown-transform/blob/master/packages/markdown-pdf/src/PdfTransformer.js#L278) and may be overridden or supplemented via the `options.styles` parameter.

### Example

The example below renders the `title` variable using the PDF background style, which is defined to have the color `white`.

```
asset ExampleClause extends AccordClause {
   @Pdf("style", "background")
   o String title
}
```

## ContractEditor

The `@ContractEditor` decorator is used to control how a variable is edited using the `ContractEditor` React [web-components](https://github.com/accordproject/web-components).

### Attributes

**readOnly** : when set to true the variable value cannot be edited

**fontFamily** : the name of the HTML font-family to use when rendering the variable

**backgroundColor** : the HTML background color to use when rendering the variable

**border** : the HTML border color to use when rendering the variable

### Example

The example below renders the `title` variable using custom font, background color and border color. The variable is read-only and cannot be edited.

```
asset ExampleClause extends AccordClause {
   @ContractEditor("readOnly", true, 
    "fontFamily", "Lucida Console, Courier, monospace",
    "backgroundColor", "#FAE094", "border", '#CCA855' )
   o String title
}
```

## FormEditor

The `@FormEditor` decorator is used to control whether the `ConcertoForm` React [web-components](https://github.com/accordproject/web-components) creates an input field for the variable.

### Attributes

**hide** : when set to true an input field for the variable is not created

### Example

The example specifies that an input field for the `title` variable should not be created by the Concerto Form component. 

```
asset ExampleClause extends AccordClause {
   @FormEditor("hide", true)
   o String title
}
```

## DocuSignTab

The `@DocuSignTab` decorator is used to specify how a variable is mapped to a DocuSign tab. This decorator is not currently supported by existing Accord Project transformations but is reserved for future use, and may be used by upstream consumers.

### Attributes

**type** : the type of the DocuSign tab. See the documentation for DocuSign [EnvelopeRecipientTabs](https://developers.docusign.com/docs/esign-rest-api/reference/Envelopes/EnvelopeRecipientTabs/#tab-types) for the list of supported tab types.

**optional** : whether the tab is optional or required

### Example

The example below maps the `title` variable to the DocuSign tab type `Title` and marks it as optional.

```
asset ExampleClause extends AccordClause {
  @DocuSignTab("type", "Title", "optional", true)
   o String title
}
```
