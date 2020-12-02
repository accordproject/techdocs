<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.CTO.CTO</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.CTO.CTO"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.CTO.CTO</h1>
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
        </a>
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
        <a name="CTO">CTO</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="CTO.Ast">Ast</a>
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
        <a name="cto_type">cto_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOBoolean">CTOBoolean</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* bool atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOString">CTOString</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* string atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTODouble">CTODouble</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* double atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOLong">CTOLong</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* long atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOInteger">CTOInteger</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* integer atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTODateTime">CTODateTime</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* date and time atomic type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOClassRef">CTOClassRef</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* relative class reference *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOOption">CTOOption</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* optional type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOArray">CTOArray</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="docright">(* array type *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_annot">cto_annot</a>
      </span>{" "}
      (<span className="id">ct</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#ct">ct</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOString">CTOString</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODouble">CTODouble</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOLong">CTOLong</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOInteger">CTOInteger</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODateTime">CTODateTime</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOClassRef">CTOClassRef</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOOption">CTOOption</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOArray">CTOArray</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="cto_declaration_desc">cto_declaration_desc</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOEnum">CTOEnum</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOTransaction">CTOTransaction</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOConcept">CTOConcept</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOEvent">CTOEvent</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOAsset">CTOAsset</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="CTOParticipant">CTOParticipant</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.N">N</a>
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
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="cto_declaration">cto_declaration</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkCTODeclaration">mkCTODeclaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="cto_declaration_annot">cto_declaration_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_declaration_name">cto_declaration_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_declaration_type">cto_declaration_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="cto_package">cto_package</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkCTOPackage">mkCTOPackage</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="cto_package_annot">cto_package_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_package_file">cto_package_file</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_package_namespace">cto_package_namespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_package_imports">cto_package_imports</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast.A">A</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="cto_package_declarations">cto_package_declarations</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration">cto_declaration</a>
      </span>
      ; {"}"}.<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO.Ast">Ast</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rcto_type">rcto_type</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rcto_declaration_desc">rcto_declaration_desc</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rcto_declaration">rcto_declaration</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration">cto_declaration</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rcto_package">rcto_package</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package">cto_package</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrcto_type">lrcto_type</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_type">cto_type</a>
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
        <a name="lrcto_declaration_desc">lrcto_declaration_desc</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_desc">
          cto_declaration_desc
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
        <a name="lrcto_declaration">lrcto_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration">cto_declaration</a>
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
        <a name="lrcto_package">lrcto_package</a>
      </span>{" "}
      : <span className="kwd">Set</span> := @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package">cto_package</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTO">CTO</a>
      </span>
      .<br />
      <br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  