## Low-Code Contract Authoring — Design Document

Status: Draft

Purpose
-------
Provide a form-driven, low-code authoring layer so legal professionals can define contract structure, draft templates, and enter data without learning Concerto, TemplateMark, or JSON.

High-level Flow
---------------
1. Lawyer defines contract data via guided forms (Add Field → Label, Type, Required)
2. System auto-generates a hidden Concerto `.cto` model
3. Lawyer drafts contract text in the Markdown/Template editor and uses an "Insert Field" toolbar to embed fields (valid TemplateMark inserted automatically)
4. System generates a dynamic, validated data-entry form for execution and simulation

Key Components
--------------
- Form Builder UI: Add/Edit fields, types (Text, Number, Currency, Date, Boolean, Enum), validation rules
- Model Generator: deterministically map form schema -> Concerto `.cto` file (hidden)
- Editor Integration: toolbar button to insert a selected field; inserts correct TemplateMark tokens and formatting
- Form Renderer: produce a dynamic form for data entry with schema-driven validation
- Execution Surface: use existing Cicero/ergo runtime to simulate contract behavior with entered data

Data & Formats
----------------
- Form schema stored as JSON Schema-like structure (id, label, type, required, format, constraints)
- Concerto `.cto` generated from schema; mapping rules recorded for reverse-lookup
- TemplateMark tokens inserted reference the schema variable names

UX Details
----------
- Field naming: auto-generate safe variable names from labels; allow overrides with validation
- Field formatting: offer display formatting (currency symbol, date format) used both for editor insertion and form rendering
- Validation: required, numeric ranges, date ranges, regex for text, enum values
- Preview: live preview of TemplateMark rendering with sample data

Security & Ownership
---------------------
- Generated `.cto` and template files remain part of the user's workspace (or persisted to their account if Save/Resume enabled)
- No sensitive tokens stored client-side; execution uses existing runtime controls

Implementation Notes
--------------------
- Tech stack: React frontend (component library for forms), existing editor used by project (integrate toolbar), Node.js backend for simulation if needed
- Libraries: `ajv` for JSON Schema validation, `react-hook-form` or `formik` for form handling, a small generator to map schema -> `.cto`

Milestones
----------
1. Design & spec (this document)
2. Prototype: form builder + model generator + editor insert (local, client-only)
3. Form renderer + validation + sample execution using static runtime
4. Persistence + Save/Resume integration (GitHub-backed or other)
5. Tests, docs, and demo scenarios

Estimated effort: ~175 hours
