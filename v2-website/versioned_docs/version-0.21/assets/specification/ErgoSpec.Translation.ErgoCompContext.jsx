<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgoCompContext</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgoCompContext"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.ErgoCompContext</h1>
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
        <a href="ErgoSpec.Common.Utils.Result.html">
          ErgoSpec.Common.Utils.Result
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
        <a href="ErgoSpec.Common.Types.ErgoType.html">
          ErgoSpec.Common.Types.ErgoType
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html">ErgoSpec.ErgoC.Lang.ErgoC</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html">
          ErgoSpec.ErgoC.Lang.ErgoCTypeContext
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html">
          ErgoSpec.ErgoC.Lang.ErgoCStdlib
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html">
          ErgoSpec.Translation.ErgoNameResolve
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCompContext">ErgoCompContext</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">bm</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_group_env">function_group_env</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="compilation_context">compilation_context</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkCompCtxt">mkCompCtxt</a>
      </span>{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_namespace">compilation_context_namespace</a>
      </span>
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ; <span className="docright">(* for name resolution *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_function_env">
          compilation_context_function_env
        </a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ); <span className="docright">(* functions in scope *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#function_group_env">
          function_group_env
        </a>
      </span>
      ; <span className="docright">(* functions groups in scope *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_global_env">
          compilation_context_global_env
        </a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ); <span className="docright">(* global variables in scope *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_local_env">compilation_context_local_env</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ); <span className="docright">(* local variables in scope *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_params_env">
          compilation_context_params_env
        </a>
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
      </span>
      ; <span className="docright">(* function parameters in scope *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ; <span className="docright">(* current contract in scope if any *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ; <span className="docright">(* current clause in scope if any *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_type_ctxt">compilation_context_type_ctxt</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      ; <span className="docright">(* the type context *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>{" "}
      :{" "}
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
      ; <span className="docright">(* type declarations *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>{" "}
      :{" "}
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
      ; <span className="docright">(* type declarations *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_ctxt_of_compilation_context">
          namespace_ctxt_of_compilation_context
        </a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
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
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_namespace">
          compilation_context_update_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#nsctxt">nsctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_function_env">
          compilation_context_update_function_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#name">name</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#value">value</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_function_group_env">update_function_group_env</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">gname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fn</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fg_env</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#function_group_env">
          function_group_env
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#function_group_env">
          function_group_env
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
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
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fg_env">fg_env</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#gname">gname</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">t</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#update_first">
          update_first
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fg_env">fg_env</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#gname">gname</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fname">fname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fn">fn</a>
      </span>
      )::<span className="id">t</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#gname">gname</a>
      </span>
      ,((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fname">fname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fn">fn</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#fg_env">fg_env</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_function_group_env">
          compilation_context_update_function_group_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">coname</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">clname</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#update_function_group_env">
          update_function_group_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#coname">coname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#clname">clname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#value">value</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_global_env">
          compilation_context_update_global_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#name">name</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#value">value</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_local_env">
          compilation_context_update_local_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#name">name</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#value">value</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_set_local_env">
          compilation_context_set_local_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">new_local_env</span> :{" "}
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#new_local_env">
          new_local_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_params_env">
          compilation_context_update_params_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">param</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#param">param</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_set_params_env">
          compilation_context_set_params_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">params</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#params">params</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="set_namespace_in_compilation_context">
          set_namespace_in_compilation_context
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_namespace">
          compilation_context_update_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#new_ergo_module_namespace">
          new_ergo_module_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#namespace_ctxt_of_compilation_context">
          namespace_ctxt_of_compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ns">ns</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="set_current_contract">set_current_contract</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">cname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#cname">cname</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="set_current_clause">set_current_clause</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">cname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#cname">cname</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_type_ctxt">
          compilation_context_update_type_ctxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#nctxt">nctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_update_type_declarations">
          compilation_context_update_type_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">old_decls</span>:
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
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">new_decls</span>:
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
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#old_decls">
          old_decls
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#new_decls">
          new_decls
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_add_new_type_declaration">
          compilation_context_add_new_type_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#decl">decl</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="init_compilation_context">init_compilation_context</a>
      </span>{" "}
      <span className="id">nsctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#mkCompCtxt">
          mkCompCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#empty_type_context">
          ErgoCTypeContext.empty_type_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_abstract_class">is_abstract_class</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">n</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
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
        <a href="ErgoSpec.Translation.ErgoCompContext.html#n">n</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#ErgoCompContext">
          ErgoCompContext
        </a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  