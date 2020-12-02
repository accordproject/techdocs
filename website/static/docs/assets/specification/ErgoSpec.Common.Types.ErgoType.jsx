<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Types.ErgoType</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Types.ErgoType"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Types.ErgoType</h1>
    <div className="coq">
      <br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html">List</a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html">ErgoSpec.Common.Utils.Names</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html">
          ErgoSpec.Common.Utils.Result
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html">ErgoSpec.Common.Utils.Ast</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoType">ErgoType</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoType.Ast">Ast</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">N</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_type">ergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* any type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeNothing">ErgoTypeNothing</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* nothing type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeUnit">ErgoTypeUnit</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* unit type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeBoolean">ErgoTypeBoolean</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* bool atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeString">ErgoTypeString</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* string atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeDouble">ErgoTypeDouble</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* double atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeLong">ErgoTypeLong</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* long atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeInteger">ErgoTypeInteger</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* integer atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeDateTime">ErgoTypeDateTime</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* date and time atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeClassRef">ErgoTypeClassRef</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* relative class reference *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeOption">ErgoTypeOption</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* optional type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeRecord">ErgoTypeRecord</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      *
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* record type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeArray">ErgoTypeArray</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* array type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* sum type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_annot">type_annot</a>
      </span>{" "}
      (<span className="id">et</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#et">et</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_type_signature">ergo_type_signature</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkErgoTypeSignature">mkErgoTypeSignature</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="type_signature_annot">type_signature_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_signature_params">type_signature_params</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_signature_output">type_signature_output</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_signature_emits">type_signature_emits</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_type_declaration_desc">ergo_type_declaration_desc</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeEnum">ErgoTypeEnum</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeTransaction">ErgoTypeTransaction</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeConcept">ErgoTypeConcept</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeEvent">ErgoTypeEvent</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeAsset">ErgoTypeAsset</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeParticipant">ErgoTypeParticipant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeGlobal">ErgoTypeGlobal</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeFunction">ErgoTypeFunction</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ErgoTypeContract">ErgoTypeContract</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* template type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="docright">(* state type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>
      ) <span className="docright">(* clauses signatures *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_type_declaration">ergo_type_declaration</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkErgoTypeDeclaration">mkErgoTypeDeclaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="type_declaration_annot">type_declaration_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_declaration_name">type_declaration_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_declaration_type">type_declaration_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoType.Ast.Abstract">Abstract</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="type_declaration_is_abstract">type_declaration_is_abstract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl_desc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#is_abstract">is_abstract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#decl_desc">decl_desc</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">isabs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">isabs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">isabs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">isabs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">isabs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeFunction">
          ErgoTypeFunction
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeContract">
          ErgoTypeContract
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.Abstract">
          Abstract
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoType.Ast.Enum">Enum</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="type_declaration_is_enum">type_declaration_is_enum</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast.Enum">Enum</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Ast">Ast</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_type">rergo_type</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_type_signature">rergo_type_signature</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_type_declaration">rergo_type_declaration</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_type_declaration_desc">rergo_type_declaration_desc</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_type">aergo_type</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_type_signature">aergo_type_signature</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_type_declaration_desc">aergo_type_declaration_desc</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_type_declaration">aergo_type_declaration</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_type">lrergo_type</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_type_signature">lrergo_type_signature</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_type_declaration_desc">lrergo_type_declaration_desc</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_type_declaration">lrergo_type_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="laergo_type">laergo_type</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="laergo_type_signature">laergo_type_signature</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="laergo_type_declaration">laergo_type_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="laergo_type_declaration_desc">laergo_type_declaration_desc</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lift_default_emits_type">lift_default_emits_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">emits</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#emits">emits</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">e</span> =&gt; <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_emits_absolute_name">
          default_emits_absolute_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lift_default_state_type">lift_default_state_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">state</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#state">state</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">e</span> =&gt; <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_state_absolute_name">
          default_state_absolute_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_throws_type">default_throws_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_error_absolute_name">
          default_error_absolute_name
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_success_type">mk_success_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">response_type</span>{" "}
      <span className="id">state_type</span> <span className="id">emit_type</span>
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_response">this_response</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#response_type">
          response_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#state_type">state_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#emit_type">emit_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )%<span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_error_type">mk_error_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">throw_type</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#throw_type">throw_type</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_output_type">mk_output_type</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">success_type</span>{" "}
      <span className="id">error_type</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#success_type">
          success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#error_type">error_type</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lift_default_state_name">lift_default_state_name</a>
      </span>{" "}
      (<span className="id">state</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#state">state</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_state_absolute_name">
          default_state_absolute_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">et</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">et</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">r</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">r</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#unresolved_name_error">
          unresolved_name_error
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_annot">type_annot</a>
      </span>{" "}
      <span className="id">et</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoType.Extends">Extends</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fix_nothing">fix_nothing</a>
      </span>{" "}
      (<span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fix_transaction">fix_transaction</a>
      </span>{" "}
      (<span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Transaction</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      , "<span className="id">org.hyperledger.composer.system.Transaction</span>"%
      <span className="id">string</span>) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fix_event">fix_event</a>
      </span>{" "}
      (<span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Event</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      , "<span className="id">org.hyperledger.composer.system.Event</span>"%
      <span className="id">string</span>) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fix_asset">fix_asset</a>
      </span>{" "}
      (<span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Asset</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      , "<span className="id">org.hyperledger.composer.system.Asset</span>"%
      <span className="id">string</span>) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fix_participant">fix_participant</a>
      </span>{" "}
      (<span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Participant</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      , "<span className="id">org.hyperledger.composer.system.Participant</span>"%
      <span className="id">string</span>) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="extends_rel">extends_rel</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fix_none</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:@
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_none">fix_none</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">from</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>
      ,<span className="id">from</span>) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_declaration_desc_extend_rel">
          type_declaration_desc_extend_rel
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">to</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl_desc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration_desc">
          laergo_type_declaration_desc
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#decl_desc">decl_desc</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_nothing">fix_nothing</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_transaction">
          fix_transaction
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_nothing">fix_nothing</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_event">fix_event</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_asset">fix_asset</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_participant">
          fix_participant
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeFunction">
          ErgoTypeFunction
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeContract">
          ErgoTypeContract
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#extends_rel">extends_rel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#fix_nothing">fix_nothing</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#to">to</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_declaration_extend_rel">type_declaration_extend_rel</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_desc_extend_rel">
          type_declaration_desc_extend_rel
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_declarations_extend_rel">type_declarations_extend_rel</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#concat">
          List.concat
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_extend_rel">
          type_declaration_extend_rel
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#decls">decls</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType.Extends">Extends</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoType">ErgoType</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  