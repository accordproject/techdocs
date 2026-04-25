---
id: ref-migrate-concerto-3.0-4.0
title: Concerto 3.0 to 4.0
---

Concerto `4.0` is a major release that modernizes the codebase with TypeScript, introduces new packages for linting and lightweight model consumption, and changes several default behaviors. While most Concerto model syntax remains valid, applications using the Concerto JavaScript API will require updates.

> View the [Concerto v4.0.0 release changelog](https://github.com/accordproject/concerto/releases/tag/v4.0.0) on GitHub. Thank you to all the contributors!

:::caution Breaking Changes
This release contains breaking changes to Node.js version requirements, API defaults, and project structure. Please read this guide carefully before upgrading.
:::

## Summary of Changes

Version 4.0 includes these major changes:

- **Node.js 22+ Required** - Minimum Node.js version increased to 22.x
- **TypeScript Integration** - All packages now include TypeScript configurations and type definitions
- **Strict Mode by Default** - Versioned namespaces and imports are now required by default
- **Maps and Import Aliasing Enabled** - These features are now enabled by default (no longer experimental)
- **Source Code Reorganization** - Source files moved from `lib/` to `src/` directories
- **New Packages** - `@accordproject/concertino` for lightweight client applications and `@accordproject/concerto-linter` for model linting
- **Removed Functional API** - The `Concerto` class has been removed; use `ModelManager` directly

## Node.js Version Requirements

Concerto 4.0 requires Node.js 22.x or later.

**Supported versions:**
- Node.js 22.x (LTS)
- Node.js 24.x

**Removed support for:**
- Node.js 16.x
- Node.js 18.x
- Node.js 20.x

Before upgrading, ensure your environment is running a supported Node.js version:

```bash
node --version
# Should output v22.x.x or higher
```

## API Changes

### Strict Mode Now Default

In Concerto 3.x, strict mode was `false` by default, allowing unversioned namespaces. In 4.0, strict mode is `true` by default, requiring versioned namespaces and explicit imports.

**Before (3.x behavior):**
```javascript
namespace org.acme

import com.sample.model.* // Wildcard imports allowed

concept Person {
  o String name
}
```

**After (4.0 behavior):**
```javascript
namespace org.acme@1.0.0

import com.sample.model@1.0.0.{Person, Address} // Explicit, versioned imports required

concept Employee {
  o String name
}
```

### Maps and Import Aliasing Enabled by Default

In Concerto 3.x, Maps and import aliasing were experimental features that required explicit opt-in. In 4.0, these features are enabled by default.

**Maps are now available without configuration:**
```javascript
namespace org.acme@1.0.0

map PhoneBook {
  o String
  o String
}

concept Person {
  o String name
  o PhoneBook contacts
}
```

**Import aliasing is now available without configuration:**
```javascript
namespace org.acme@1.0.0

import com.other.namespace@1.0.0.{Person as OtherPerson}

concept MyPerson extends OtherPerson {
  o String additionalField
}
```

### Location Nodes Skipped by Default

For improved performance, location information (line and column numbers in the AST) is now skipped by default during parsing.

**Before (3.x):**
```javascript
const modelManager = new ModelManager(); // Location nodes included
```

**After (4.0):**
```javascript
const modelManager = new ModelManager(); // Location nodes skipped by default

// To include location nodes (for tooling that needs source mapping):
const modelManager = new ModelManager({
  skipLocationNodes: false
});
```

### Removed Functional API (Concerto Class)

The `Concerto` class that provided a functional API wrapper has been removed. Use `ModelManager`, `Factory`, and `Serializer` directly.

**Before (3.x):**
```javascript
const { Concerto, ModelManager } = require('@accordproject/concerto-core');

const modelManager = new ModelManager();
modelManager.addCTOModel(model);

const concerto = new Concerto(modelManager);
const validatedObject = concerto.validate(obj);
```

**After (4.0):**
```javascript
const { ModelManager, Serializer, Factory } = require('@accordproject/concerto-core');

const modelManager = new ModelManager();
modelManager.addCTOModel(model);

const factory = modelManager.getFactory();
const serializer = modelManager.getSerializer();

// Create instances using Factory
const person = factory.newConcept('org.acme@1.0.0', 'Person', {
  name: 'Alice'
});

// Serialize/deserialize using Serializer
const json = serializer.toJSON(person);
const restored = serializer.fromJSON(json);
```

### TypeScript Type Definitions

All packages now include TypeScript type definitions. If you're using TypeScript, you'll get improved IntelliSense and type checking.

```typescript
import { ModelManager, ClassDeclaration, Property } from '@accordproject/concerto-core';

const modelManager: ModelManager = new ModelManager();
modelManager.addCTOModel(model);

const personDecl: ClassDeclaration = modelManager.getType('org.acme@1.0.0.Person');
const properties: Property[] = personDecl.getProperties();
```

## Source Code Reorganization

Source files have been moved from `lib/` to `src/` directories across all packages. This change primarily affects:

- Custom build configurations that reference internal paths
- Any code that imports internal modules directly (not recommended)

If you import from the package's public API (e.g., `require('@accordproject/concerto-core')`), no changes are required.

## New Packages

### @accordproject/concertino

A new lightweight package optimized for client applications that need to introspect Concerto models without the full SDK.

**Key features:**
- Flatter structure with denormalized inheritance
- Smaller bundle size
- Lossless conversion to/from Concerto metamodel

```javascript
const { ModelManager } = require('@accordproject/concerto-core');
const { ConcertinoConverter } = require('@accordproject/concertino');

const modelManager = new ModelManager();
modelManager.addCTOModel(model);

const converter = new ConcertinoConverter();

// Get model AST
const ast = modelManager.getModelFile('org.acme@1.0.0').getAst();

// Convert to Concertino format
const concertino = converter.fromConcertoMetamodel({ models: [ast] });

// Convert back to Concerto metamodel
const metamodel = converter.toConcertoMetamodel(concertino);
```

### @accordproject/concerto-linter

A new package for linting Concerto models using customizable Spectral rulesets.

```javascript
const { lintModel } = require('@accordproject/concerto-linter');

const model = `
namespace org.example@1.0.0

asset MyProduct {
  o String ProductId
}
`;

const results = await lintModel(model);
// Returns array of linting violations
```

**Features:**
- Default ruleset with best-practice rules
- Custom ruleset support via Spectral configuration
- Namespace filtering to exclude system namespaces
- JSON AST output for integration with other tools

## Package Version Updates

Update your `package.json` dependencies:

```json
{
  "dependencies": {
    "@accordproject/concerto-core": "^4.0.0",
    "@accordproject/concerto-cto": "^4.0.0",
    "@accordproject/concerto-util": "^4.0.0",
    "@accordproject/concerto-vocabulary": "^4.0.0",
    "@accordproject/concerto-analysis": "^4.0.0"
  }
}
```

**Optional new packages:**
```json
{
  "dependencies": {
    "@accordproject/concertino": "^4.0.0",
    "@accordproject/concerto-linter": "^4.0.0"
  }
}
```

## Migration Checklist

Use this checklist to migrate your application:

### Environment
- [ ] Upgrade Node.js to version 22.x or later
- [ ] Update npm to version 10 or later

### Dependencies
- [ ] Update all `@accordproject/concerto-*` packages to `^4.0.0`
- [ ] Run `npm install` to update `package-lock.json`

### Model Files
- [ ] Add version numbers to all namespaces (e.g., `namespace org.acme` → `namespace org.acme@1.0.0`)
- [ ] Update imports to use versioned namespaces
- [ ] Replace wildcard imports (`*`) with explicit type imports

### Application Code
- [ ] Remove usage of the `Concerto` class; use `ModelManager`, `Factory`, and `Serializer` directly
- [ ] If needed, add `skipLocationNodes: false` option to preserve AST location information
- [ ] Update any code that references internal `lib/` paths to use `src/` paths (or better, use public API only)

### Testing
- [ ] Run your test suite to identify any breaking changes
- [ ] Test model validation with strict mode enabled
- [ ] Verify Maps and import aliasing work as expected if you use these features

## Performance Improvements

Concerto 4.0 includes several performance optimizations:

- **Faster parsing** - Location nodes skipped by default reduces parsing overhead
- **Optimized decorator management** - Improved deep copy performance for decorated models
- **Reduced memory footprint** - Various core operations use less memory

## Getting Help

If you encounter issues during migration:

- **GitHub Issues**: [Report bugs or request help](https://github.com/accordproject/concerto/issues)
- **Discord**: Join the [Accord Project Discord](https://discord.com/invite/Zm99SKhhtA) community
- **Documentation**: Visit [docs.accordproject.org](https://docs.accordproject.org)
