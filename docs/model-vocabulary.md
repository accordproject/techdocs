---
id: model-vocabulary
title: Vocabulary
---

The Vocabulary module for Concerto optionally allows human-readable labels (Terms) to be associated with model elements. Terms are stored within a locale specific vocabulary YAML file associated with a Concerto namespace.

For example, a Concerto model that defines an enumeration with the values `RED`, `GREEN`, `BLUE` can be associated with an English vocabulary with the terms "Red", "Green", "Blue" and a French Vocabulary with terms "Rouge", "Vert", "Bleue".

The VocabularyManager class manages access to a set of Vocabulary files, and includes logic to retrieve the most appropriate term for a requested locale.

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

``` yaml
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

``` yaml
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

> Vocabularies may define additional terms, or may be missing terms, for the declarations and properties in their associated namespace. Use the `VocabularyManager.validate` method to detect missing or additional terms. Note that allowing vocabularies to evolve independently of their associated namespace provides definition and translation workflow flexibility.

Please refer to the reference API for the `concerto-vocabulary` module for detailed API guidance.