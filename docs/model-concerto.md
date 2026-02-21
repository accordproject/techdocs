---
sidebar_position: 1
---

# Introduction

Concerto is a lightweight data modeling (schema) language and runtime for business concepts.

Here is a simple model, expressed using the Concerto CTO syntax:

```cs
namespace test@1.0.0

enum Country {
   o UK
   o USA
   o FRANCE
   o GERMANY
   o JAPAN
}

concept Address {
   o String street
   o String city
   o String postCode
   o Country country
}

concept Person identified by name  {
  o String name
  o Address address optional
  @description("Height (cm)")
  o Double height range=[0.0,]
  o DateTime dateOfBirth
}
```

And here is the **generated** Plant UML diagram for the model:

![UML diagram](/img/uml.svg)

🏢 Concerto gives you “just enough” expressivity to capture real-world business models, while remaining easy to map to most runtime environments.

⛳ An object-oriented language that is much easier to read and write than JSON/XML Schema, XMI or equivalents.

📄 Serialize your instances to JSON

🍪 Deserialize (and validate) instances from JSON

🔎 Runtime introspection of the model using a powerful set of APIs

🎛 Convert the model to [14+ common data model formats](./category/code-generation)

🕸 Publish your reusable models to any website, including the Accord Project [model repository](https://models.accordproject.org)

Infer models from other formats:

- JSON document
- JSON Schema
- OpenAPI v3 specification

## Accord Project

Concerto is maintained by Accord Project: an open source, non-profit, initiative working to transform contract management and contract automation by digitizing contracts. Accord Project operates under the umbrella of the [Linux Foundation][linuxfound]. The technical charter for the Accord Project can be found [here][charter].

## License <a name="license"></a>

Accord Project source code files are made available under the [Apache License, Version 2.0][apache].
Accord Project documentation files are made available under the [Creative Commons Attribution 4.0 International License][creativecommons] (CC-BY-4.0).

[linuxfound]: https://www.linuxfoundation.org
[charter]: https://github.com/accordproject/governance/blob/main/accord-project-technical-charter.md
[apache]: https://github.com/accordproject/concerto/blob/master/LICENSE
[creativecommons]: http://creativecommons.org/licenses/by/4.0/
