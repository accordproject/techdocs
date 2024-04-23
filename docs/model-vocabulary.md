---
id: model-vocabulary
title: Vocabulary
---

The Vocabulary module for Concerto optionally allows human-readable labels (Terms) to be associated with model elements. Terms are stored within a locale specific vocabulary YAML file associated with a Concerto namespace.

For example, a Concerto model that defines an enumeration with the values `RED`, `GREEN`, `BLUE` can be associated with an English vocabulary with the terms "Red", "Green", "Blue" and a French Vocabulary with terms "Rouge", "Vert", "Bleue".

The `VocabularyManager` class manages access to a set of Vocabulary files, and includes logic to retrieve the most appropriate term for a requested locale.

### Example Model

```
namespace org.acme

enum Color {
    o RED
    o BLUE
    o GREEN
}

asset Vehicle identified by vin {
    o String vin
    o Color color
}

asset Truck extends Vehicle {
    o Double weight
}
```

### Example Vocabulary Files

#### English - en

```yaml
locale: en
namespace: org.acme
declarations:
  - Color: A color
  - Vehicle: A road vehicle
    properties:
      - vin: Vehicle Identification Number
      - model: Model of the vehicle
  - Truck: A vehicle capable of carrying cargo
    properties:
      - weight: The weight of the truck in KG
```

#### British English - en-gb

```yaml
locale: en-gb
namespace: org.acme
declarations:
  - Truck: A lorry (a vehicle capable of carrying cargo)
  - Color: A colour
  - Milkfloat
```

#### French - fr

```yaml
locale: fr
namespace: org.acme
declarations:
  - Vehicle: Véhicule
    properties:
      - vin: Le numéro d'identification du véhicule (NIV)
```

#### Simplified Chinese zh-cn

```yaml
locale: zh-cn
namespace: org.acme
declarations:
  - Color: 颜色
    properties:
      - RED: 红色
      - GREEN: 绿色
      - BLUE: 蓝色
  - Vehicle: 车辆
    properties:
      - vin: 车辆识别代号
      - color: 颜色
```

As you can see in the vocabularies above, a vocabulary can supplement or override terms from a base vocabulary, as is the case of the `en-gb` vocabulary which redefines and adds terms specific to British English over the generic English `en` vocabulary.

## API Usage

Use the `VocabularyManager` classs to define new vocabularies, retrieve terms for a locale, or to validate
a vocabulary using a `ModelManager`.

### Adding a Vocabulary

Load the YAML file for the Vocabulary and add it to a `VocabularyManager`:

```
vocabularyManager = new VocabularyManager();
const enVocString = fs.readFileSync('./test/org.acme_en.voc', 'utf-8');
vocabularyManager.addVocabulary(enVocString);
```

### Retrieving a Term

Use the `getTerm` method on the `VocabularyManager` to retrieve a term for
a declaration or property within a namespace:

```
const term = vocabularyManager.getTerm('org.acme', 'en-gb', 'Color');
// term.should.equal('A colour');
```

```
const term = vocabularyManager.getTerm('org.acme', 'en-gb', 'Vehicle', 'vin');
// term.should.equal('Vehicle Identification Number');
```

### Resolve a Term using ModelManager Type Hierarchy

The `resolveTerm` method on the `VocabularyManager` may be used to lookup a term
based on the type hierarchy defined by a `ModelManager`. In the example below, the property
`vin` is not defined on the `Truck` declaration but rather on the `Vehicle` super-type.

```
modelManager = new ModelManager();
const model = fs.readFileSync('./test/org.acme.cto', 'utf-8');
modelManager.addModelFile(model);
const term = vocabularyManager.resolveTerm(modelManager, 'org.acme', 'en-gb', 'Truck', 'vin');
// term.should.equal('Vehicle Identification Number');
```

### Validating a Vocabulary Manager

Use the `validate` method on the `VocabularyManager` to detect missing and redudant vocabulary
terms — comparing the terms in the `VocabularyManager` with the declarations in a `ModelManager`.
The return value from `validate` is an object containing information for the missing and additional terms.

> Note that allowing vocabularies to evolve independently of their associated namespace provides definition and translation workflow flexibility.

```
const result = vocabularyManager.validate(modelManager);
// result.missingVocabularies.length.should.equal(1);
// result.missingVocabularies[0].should.equal('org.accordproject');
// result.additionalVocabularies.length.should.equal(1);
// result.additionalVocabularies[0].getNamespace().should.equal('com.example');
// result.vocabularies['org.acme/en'].additionalTerms.should.have.members(['Vehicle.model']);
// result.vocabularies['org.acme/en'].missingTerms.should.have.members(['Color.RED', 'Color.BLUE', 'Color.GREEN', 'Vehicle.color']);
// result.vocabularies['org.acme/en-gb'].additionalTerms.should.have.members(['Milkfloat']);
// result.vocabularies['org.acme/fr'].missingTerms.should.have.members(['Color', 'Vehicle.color', 'Truck']);
// result.vocabularies['org.acme/fr'].additionalTerms.should.have.members([]);
// result.vocabularies['org.acme/zh-cn'].missingTerms.should.have.members(['Truck']);
// result.vocabularies['org.acme/zh-cn'].additionalTerms.should.have.members([]);
```

Please refer to the [reference API](ref-concerto-api) for the `concerto-vocabulary` module for detailed API guidance.
