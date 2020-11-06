<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.Ast</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.Ast"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.Ast</h1>
    <div className="coq">
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
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
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast">Ast</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast.Imports">Imports</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast.Imports.Defn">Defn</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Context
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Context
      </span>{" "}
      {"{"}
      <span className="id">N</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Inductive
      </span>{" "}
      <span className="id">
        <a name="import_decl">import_decl</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ImportAll">ImportAll</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ImportSelf">ImportSelf</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ImportName">ImportName</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="import_annot">import_annot</a>
      </span>{" "}
      (<span className="id">i</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#i">i</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportName">ImportName</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="extends">extends</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports.Defn.N">N</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports.Defn">Defn</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="limport_decl">limport_decl</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rextends">rextends</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aextends">aextends</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#extends">extends</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Imports">Imports</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast.Abstract">Abstract</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_abstract">is_abstract</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Abstract">Abstract</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast.Patterns">Patterns</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ast.Patterns.Defn">Defn</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Context
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Context
      </span>{" "}
      {"{"}
      <span className="id">N</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="type_annotation">type_annotation</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn.N">N</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Inductive
      </span>{" "}
      <span className="id">
        <a name="ergo_pattern">ergo_pattern</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CaseData">CaseData</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
          ErgoData.data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="docright">(* match against value *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CaseWildcard">CaseWildcard</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="docright">(* match anything *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CaseLet">CaseLet</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="docright">(* match against type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CaseLetOption">CaseLetOption</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="docright">(* match against type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns.Defn">Defn</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_pattern">rergo_pattern</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_pattern">aergo_pattern</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_pattern">lrergo_pattern</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="laergo_pattern">laergo_pattern</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast.Patterns">Patterns</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#Ast">Ast</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  