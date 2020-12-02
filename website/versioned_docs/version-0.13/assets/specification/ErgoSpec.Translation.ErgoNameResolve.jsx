<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgoNameResolve</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgoNameResolve"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.ErgoNameResolve</h1>
    <div className="coq">
      <br />
      <div className="doc">
        Ergo is a language for expressing contract logic.{" "}
      </div>
      <br />
      <h1> Abstract Syntax </h1>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html">
          ErgoSpec.Common.Utils.NamespaceContext
        </a>
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html">ErgoSpec.Common.CTO.CTO</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html">
          ErgoSpec.Common.Types.ErgoType
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html">
          ErgoSpec.Translation.CTOtoErgo
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNameResolution">ErgoNameResolution</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="namespace_ctxt_of_ergo_decls">namespace_ctxt_of_ergo_decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">dls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      ) : (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#dls">dls</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">ns</span>' ::{" "}
      <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">ns</span>',{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> ::{" "}
      <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">tname</span> <span className="id">td</span> ::{" "}
      <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ln</span> := <span className="id">td</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ln">ln</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ectxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_is_enum">
          type_declaration_is_enum
        </a>
      </span>{" "}
      <span className="id">td</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_enums">
          update_namespace_context_enums
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">ns</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_type_to_namespace_ctxt">
          add_type_to_namespace_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> ::{" "}
      <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">ln</span>{" "}
      <span className="id">ta</span> <span className="id">cd</span> ::{" "}
      <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">ns</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_constant_to_namespace_ctxt">
          add_constant_to_namespace_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">ln</span>{" "}
      <span className="id">fd</span> :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">ns</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_function_to_namespace_ctxt">
          add_function_to_namespace_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">ln</span>{" "}
      <span className="id">_</span> :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">ns</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_contract_to_namespace_ctxt">
          add_contract_to_namespace_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">ln</span>{" "}
      <span className="id">_</span> :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_ctxt_of_ergo_module">namespace_ctxt_of_ergo_module</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">m</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_decls">
          namespace_ctxt_of_ergo_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_ctxt_of_ergo_modules">
          namespace_ctxt_of_ergo_modules
        </a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ml</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_module">
          namespace_ctxt_of_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ml">ml</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_ctxt_of_cto_packages">
          namespace_ctxt_of_cto_packages
        </a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ctos</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package">cto_package</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">mls</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_package_to_ergo_module">
          cto_package_to_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctos">ctos</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_module">
          namespace_ctxt_of_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#mls">mls</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNameResolution.ResolveImports">ResolveImports</a>
      </span>
      .<br />
      <div className="doc">This applies imports </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_one_import">lookup_one_import</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ic</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#limport_decl">limport_decl</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ic">ic</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ) <span className="id">ns</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">tbl</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">tbl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#import_not_found_error">
          import_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ) <span className="id">ns</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">tbl</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">tbl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportName">ImportName</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span>{" "}
      <span className="id">ln</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ) <span className="id">ns</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">tbl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">tbl</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      ) <span className="id">ln</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#import_name_not_found_error">
          import_name_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span>{" "}
      <span className="id">ln</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">an</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#one_type_to_namespace_table">
          one_type_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">ln</span> <span className="id">an</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#import_not_found_error">
          import_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_one_import">resolve_one_import</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ic</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#limport_decl">limport_decl</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">tbl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_app">
          namespace_table_app
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#lookup_one_import">
          lookup_one_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ic">ic</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_builtin_import">is_builtin_import</a>
      </span>{" "}
      (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>{" "}
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#stdlib_namespace">
          stdlib_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ErgoNameResolution.ResolveImports">
          ResolveImports
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNameResolution.NameResolution">NameResolution</a>
      </span>
      .<br />
      <div className="doc">Name resolution for type declarations </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type">resolve_ergo_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type">lrergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">rn</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_type_name">
          resolve_type_name
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">rn</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">an</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_dec">
          in_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">t</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">r</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">
        let
      </span> <span className="id">initial_map</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ))) <span className="id">r</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">lifted_map</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">t</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>
      )) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#initial_map">
          initial_map
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">prov</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#lifted_map">
          lifted_map
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">t</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">t1</span>{" "}
      <span className="id">t2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">t1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">t2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type_struct">resolve_ergo_type_struct</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span>:
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type">lrergo_type</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">t</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#t">t</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_type_annotation">resolve_type_annotation</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">en</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#en">en</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">rn</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_type_name">
          resolve_type_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">rn</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_extends">resolve_extends</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">en</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#rextends">rextends</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#aextends">aextends</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_type_annotation">
          resolve_type_annotation
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#en">en</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type_signature">resolve_ergo_type_signature</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sig</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_signature">
          lrergo_type_signature
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_signature">
          laergo_type_signature
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">params_types</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sig">sig</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      )) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">output_type</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sig">sig</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_output">
          type_signature_output
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">out_ty</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">out_ty</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">emits_type</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sig">sig</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_emits">
          type_signature_emits
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">emits_ty</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">emits_ty</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sig">sig</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_annot">
          type_signature_annot
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#params_types">
          params_types
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#output_type">
          output_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#emits_type">
          emits_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type_clauses">resolve_ergo_type_clauses</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cls</span>:
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_signature">
          lrergo_type_signature
        </a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_signature">
          laergo_type_signature
        </a>
      </span>
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">r</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#r">r</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_signature">
          resolve_ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#cls">cls</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type_declaration_desc">
          resolve_ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration_desc">
          lrergo_type_declaration_desc
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration_desc">
          laergo_type_declaration_desc
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">l</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">l</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">extends_name</span>{" "}
      <span className="id">ergo_type_struct</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">isabs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_extends">
          resolve_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">extends_name</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_struct</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">extends_name</span>{" "}
      <span className="id">ergo_type_struct</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">isabs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_extends">
          resolve_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">extends_name</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_struct</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">extends_name</span>{" "}
      <span className="id">ergo_type_struct</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">isabs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_extends">
          resolve_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">extends_name</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_struct</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">extends_name</span>{" "}
      <span className="id">ergo_type_struct</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">isabs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_extends">
          resolve_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">extends_name</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_struct</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">isabs</span> <span className="id">extends_name</span>{" "}
      <span className="id">ergo_type_struct</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">isabs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_extends">
          resolve_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">extends_name</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_struct">
          resolve_ergo_type_struct
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_struct</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>{" "}
      <span className="id">ergo_type</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeFunction">
          ErgoTypeFunction
        </a>
      </span>{" "}
      <span className="id">ergo_type_signature</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeFunction">
          ErgoTypeFunction
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_signature">
          resolve_ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ergo_type_signature</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeContract">
          ErgoTypeContract
        </a>
      </span>{" "}
      <span className="id">template_type</span>{" "}
      <span className="id">state_type</span>{" "}
      <span className="id">clauses_sigs</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeContract">
          ErgoTypeContract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">template_type</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">state_type</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_clauses">
          resolve_ergo_type_clauses
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">clauses_sigs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_type_declaration">resolve_ergo_type_declaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">module_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#abstract_ctxt">
          abstract_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#abstract_ctxt">
          abstract_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> '(
      <span className="id">ectxt</span>,<span className="id">actxt</span>,
      <span className="id">decl</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">name</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ectxt</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_is_enum">
          type_declaration_is_enum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#name">name</a>
      </span>{" "}
      :: <span className="id">ectxt</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span> <span className="id">ectxt</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">actxt</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_is_abstract">
          type_declaration_is_abstract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#name">name</a>
      </span>{" "}
      :: <span className="id">actxt</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span> <span className="id">actxt</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">edecl_desc</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_declaration_desc">
          resolve_ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_annot">
          type_declaration_annot
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">k</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#actxt">actxt</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_annot">
          type_declaration_annot
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#name">name</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#k">k</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#edecl_desc">
          edecl_desc
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_pattern">resolve_ergo_pattern</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">lrergo_pattern</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#laergo_pattern">laergo_pattern</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#p">p</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseData">CaseData</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseData">CaseData</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseWildcard">CaseWildcard</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseWildcard">CaseWildcard</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_type_annotation">
          resolve_type_annotation
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLet">CaseLet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLet">CaseLet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_type_annotation">
          resolve_type_annotation
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">CaseLetOption</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">CaseLetOption</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_type_annotation">
          resolve_type_annotation
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">Name resolution for expressions </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="resolve_ergo_expr">resolve_ergo_expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">u</span>{" "}
      <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">u</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">b</span>{" "}
      <span className="id">e1</span> <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">b</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">e2</span> <span className="id">e3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> <span className="id">e1</span>{" "}
      <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rta</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">ta</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rta">rta</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cr</span>{" "}
      <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rcr</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_type_name">
          resolve_type_name
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">cr</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_rec</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">att</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ))) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">attname</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#att">att</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#att">att</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#attname">attname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">prov</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rcr">rcr</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_rec">init_rec</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_rec</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">att</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ))) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">attname</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#att">att</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#att">att</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#attname">attname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_rec">init_rec</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>{" "}
      <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rfname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_function_name">
          resolve_function_name
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,<span className="id">fname</span>) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">prov</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rfname">rfname</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">gname</span>{" "}
      <span className="id">fname</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rgname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_contract_name">
          resolve_contract_name
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">gname</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">prov</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rgname">rgname</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">fname</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">ecases</span> <span className="id">edefault</span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ec0</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e0</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">eccases</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span>{" "}
      <span className="id">acc</span> (<span className="id">ecase</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">lrergo_pattern</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">pcase</span>,{" "}
      <span className="id">pe</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ecase">ecase</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">apcase</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_pattern">
          resolve_ergo_pattern
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#pcase">pcase</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">apcase</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#apcase">apcase</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#pe">pe</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#apcase">apcase</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">ecases</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ecdefault</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">edefault</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ec0</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">eccases</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#laergo_pattern">laergo_pattern</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ecdefault</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ec0">ec0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#eccases">eccases</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ecdefault">
          ecdefault
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ecdefault">
          ecdefault
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#eccases">eccases</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ec0">ec0</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">foreachs</span>{" "}
      <span className="id">econd</span> <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">re2</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e2</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">recond</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">econd</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">econd</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">econd</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">foreach</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">v</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#foreach">foreach</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#foreach">foreach</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#v">v</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_e">init_e</a>
      </span>{" "}
      <span className="id">foreachs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#recond">recond</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#re2">re2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">Name resolution for statements </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="resolve_ergo_stmt">resolve_ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_stmt">lrergo_stmt</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SFunReturn">SFunReturn</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SFunReturn">SFunReturn</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">SThrow</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">SThrow</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">fname</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span> (
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">lrergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e0</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">fname</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">SSetState</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">SSetState</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEmit">SEmit</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEmit">SEmit</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SLet">SLet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rta</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">ta</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SLet">SLet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rta">rta</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SIf">SIf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> <span className="id">s3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SIf">SIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">SEnforce</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">os2</span> <span className="id">s3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rs2</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">os2</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">s2</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">SEnforce</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rs2">rs2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">s3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">SMatch</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">scases</span> <span className="id">sdefault</span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ec0</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e0</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">sccases</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span>{" "}
      <span className="id">acc</span> (<span className="id">scase</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">lrergo_pattern</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_stmt">lrergo_stmt</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">pcase</span>,{" "}
      <span className="id">pe</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#scase">scase</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">apcase</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_pattern">
          resolve_ergo_pattern
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#pcase">pcase</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">apcase</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#apcase">apcase</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#pe">pe</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#apcase">apcase</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">scases</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">scdefault</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">sdefault</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ec0</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">sccases</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#laergo_pattern">laergo_pattern</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">scdefault</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">SMatch</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ec0">ec0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sccases">sccases</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#scdefault">
          scdefault
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#scdefault">
          scdefault
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#sccases">sccases</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ec0">ec0</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">Name resolution for lambdas </div>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_function">resolve_ergo_function</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">module_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">lrergo_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_function">laergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_annot">function_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rbody</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_body">function_body</a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">body</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">body</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_signature">
          resolve_ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_sig">function_sig</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rbody">rbody</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_clause">resolve_ergo_clause</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">module_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_annot">clause_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rcname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rbody</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_body">clause_body</a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">body</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">body</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rcname">rcname</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_signature">
          resolve_ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rbody">rbody</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_clauses">resolve_ergo_clauses</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">module_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_clause">
          resolve_ergo_clause
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#cl">cl</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_contract">resolve_ergo_contract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">module_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_contract">lrergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_annot">contract_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rtemplate</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_template">
          contract_template
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rstate</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">state</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">state</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rtemplate">
          rtemplate
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rstate">rstate</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_clauses">
          resolve_ergo_clauses
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_declaration">resolve_ergo_declaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">module_ns</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ectxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">actxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">tbl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#local_namespace_scope">
          local_namespace_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ns</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">id</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">id</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_one_import">
          resolve_one_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">id</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">td</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ln</span> :={" "}
      <span className="id">td</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ln">ln</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_type_to_namespace_ctxt_current">
          add_type_to_namespace_ctxt_current
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#abstract_ctxt">
          abstract_ctxt
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">ectxt</span>,
      <span className="id">actxt</span>,<span className="id">x</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#xy">xy</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_enums">
          update_namespace_context_enums
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_abstract">
          update_namespace_context_abstract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#actxt">actxt</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">x</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type_declaration">
          resolve_ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#actxt">actxt</a>
      </span>
      , <span className="id">td</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">st</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_stmt">
          resolve_ergo_stmt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">st</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ln</span>{" "}
      <span className="id">ta</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rta</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">ta</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ta</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_type">
          resolve_ergo_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_constant_to_namespace_ctxt_current">
          add_constant_to_namespace_ctxt_current
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ta</span>{" "}
      <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ta">ta</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#rta">rta</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ln</span>{" "}
      <span className="id">fd</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_function_to_namespace_ctxt_current">
          add_function_to_namespace_ctxt_current
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_function">
          resolve_ergo_function
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">fd</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ln</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">an</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">ln</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_contract_to_namespace_ctxt_current">
          add_contract_to_namespace_ctxt_current
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ln</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_contract">
          resolve_ergo_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">c</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">rn</span>{" "}
      <span className="id">e1</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">an</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#an">an</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_expr">
          resolve_ergo_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ectxt">ectxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">e1</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_contract_name">
          resolve_contract_name
        </a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#tbl">tbl</a>
      </span>{" "}
      <span className="id">rn</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_declarations">resolve_ergo_declarations</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_declaration">
          resolve_ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="silently_resolve_ergo_declarations">
          silently_resolve_ergo_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_declarations">
          resolve_ergo_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ErgoNameResolution.NameResolution">
          NameResolution
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNameResolution.Top">Top</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="init_namespace_ctxt">init_namespace_ctxt</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_ctxt">
          empty_namespace_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#no_namespace">no_namespace</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="patch_cto_imports">patch_cto_imports</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#is_builtin_import">
          is_builtin_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span> (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      )) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="patch_ergo_imports">patch_ergo_imports</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt_ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#is_builtin_import">
          is_builtin_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#app">app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      ) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#stdlib_namespace">
          stdlib_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt_ns">ctxt_ns</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#decls">decls</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="new_cto_package_namespace">new_cto_package_namespace</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">m</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#is_builtin_import">
          is_builtin_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span>{" "}
      <span className="id">builtin_cto_imports</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#new_namespace_scope">
          new_namespace_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_module">
          namespace_ctxt_of_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>{" "}
      <span className="kwd">in</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#silently_resolve_ergo_declarations">
          silently_resolve_ergo_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#builtin_cto_imports">
          builtin_cto_imports
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="new_ergo_module_namespace">new_ergo_module_namespace</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#is_builtin_import">
          is_builtin_import
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span>{" "}
      <span className="id">builtin_cto_imports</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#stdlib_namespace">
          stdlib_namespace
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportSelf">ImportSelf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#new_namespace_scope">
          new_namespace_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ns">ns</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#silently_resolve_ergo_declarations">
          silently_resolve_ergo_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#builtin_cto_imports">
          builtin_cto_imports
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_cto_package">resolve_cto_package</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cto</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">m</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_package_to_ergo_module">
          cto_package_to_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#cto">cto</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">module_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#new_namespace_scope">
          new_namespace_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_ergo_module">
          namespace_ctxt_of_ergo_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>{" "}
      <span className="kwd">in</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">declarations</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">nc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#nc">nc</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#nc">nc</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_declarations">
          resolve_ergo_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#patch_cto_imports">
          patch_cto_imports
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#declarations">
          declarations
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_module">resolve_ergo_module</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">m</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">module_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#new_namespace_scope">
          new_namespace_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">declarations</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">nc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#nc">nc</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#nc">nc</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_declarations">
          resolve_ergo_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#patch_ergo_imports">
          patch_ergo_imports
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#module_ns">
          module_ns
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#declarations">
          declarations
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_ergo_modules">resolve_ergo_modules</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ml</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_module">
          resolve_ergo_module
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ml">ml</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_cto_packages">resolve_cto_packages</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctos</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#namespace_ctxt_of_cto_packages">
          namespace_ctxt_of_cto_packages
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctos">ctos</a>
      </span>{" "}
      <span className="kwd">in</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_cto_package">
          resolve_cto_package
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctos">ctos</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="split_ctos_and_ergos">split_ctos_and_ergos</a>
      </span>{" "}
      (<span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#InputCTO">InputCTO</a>
      </span>{" "}
      <span className="id">cto</span> :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">ctos</span>',{" "}
      <span className="id">rest</span>', <span className="id">p</span>') :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#split_ctos_and_ergos">
          split_ctos_and_ergos
        </a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cto</span> :: <span className="id">ctos</span>',{" "}
      <span className="id">rest</span>', <span className="id">p</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#InputErgo">InputErgo</a>
      </span>{" "}
      <span className="id">ml</span> :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">ctos</span>',{" "}
      <span className="id">rest</span>', <span className="id">p</span>') :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#split_ctos_and_ergos">
          split_ctos_and_ergos
        </a>
      </span>{" "}
      <span className="id">rest</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">p</span>'{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#is_builtin_import">
          is_builtin_import
        </a>
      </span>{" "}
      <span className="id">ml</span>.(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> (<span className="id">ctos</span>',{" "}
      <span className="id">ml</span> :: <span className="id">rest</span>',{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span> (<span className="id">ctos</span>',{" "}
      <span className="id">rest</span>',{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ml</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; (<span className="id">ctos</span>',{" "}
      <span className="id">ml</span> :: <span className="id">rest</span>',{" "}
      <span className="id">p</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ErgoNameResolution.Top">
          Top
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNameResolution.Examples">Examples</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_typed1">ergo_typed1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">c1</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">a</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">b</span>", (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      , "<span className="id">c3</span>")))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_typed2">ergo_typed2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">c2</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">c</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">d</span>", (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      , "<span className="id">c1</span>")))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_funcd1">ergo_funcd1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">lrergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_funcd2">ergo_funcd2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">lrergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_clause2">ergo_clause2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_clause">lrergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">addFee2</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_contractd1">ergo_contractd1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_contract">lrergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_clause2">
          ergo_clause2
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module1">ergo_module1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">n1</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ImportAll">ImportAll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">n2</span>")
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_funcd1">
          ergo_funcd1
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">MyContract</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_contractd1">
          ergo_contractd1
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed1">
          ergo_typed1
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed2">
          ergo_typed2
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_typed3">ergo_typed3</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">c3</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">a</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">b</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_typed_top">ergo_typed_top</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">top</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module2">ergo_module2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "" "<span className="id">n2</span>" (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed3">
          ergo_typed3
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_hl">ergo_hl</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      ""{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed_top">
          ergo_typed_top
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_stdlib">ergo_stdlib</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      ""{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#stdlib_namespace">
          stdlib_namespace
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed_top">
          ergo_typed_top
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ml1">ml1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_hl">ergo_hl</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_stdlib">
          ergo_stdlib
        </a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_module2">
          ergo_module2
        </a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_module1">
          ergo_module1
        </a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aml1">aml1</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_modules">
          resolve_ergo_modules
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_ctxt">
          empty_namespace_ctxt
        </a>
      </span>{" "}
      "<span className="id">TEST</span>"){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ml1">ml1</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ml2">ml2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_hl">ergo_hl</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_stdlib">
          ergo_stdlib
        </a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_module2">
          ergo_module2
        </a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aml2">aml2</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_modules">
          resolve_ergo_modules
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_ctxt">
          empty_namespace_ctxt
        </a>
      </span>{" "}
      "<span className="id">TEST</span>"){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ml2">ml2</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aml3">aml3</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">mc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_module">
          resolve_ergo_module
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#mc">mc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_module1">
          ergo_module1
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#aml2">aml2</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ErgoNameResolution.Examples">
          Examples
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ErgoNameResolution">
          ErgoNameResolution
        </a>
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
  