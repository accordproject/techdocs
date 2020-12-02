<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgoCInline</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgoCInline"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.ErgoCInline</h1>
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Program.Basics.html">Basics</a>
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
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
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
      <br />
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
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html">ErgoSpec.Ergo.Lang.ErgoMap</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html">
          ErgoSpec.ErgoC.Lang.ErgoCStdlib
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html">
          ErgoSpec.Translation.ErgoCompContext
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expr">ergo_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">Ergo.laergo_expr</a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_stmt">ergo_stmt</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">Ergo.laergo_stmt</a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_function">ergo_function</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_function">
          Ergo.laergo_function
        </a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_clause">ergo_clause</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">
          Ergo.laergo_clause
        </a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_contract">ergo_contract</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">
          Ergo.laergo_contract
        </a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_declaration">ergo_declaration</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          Ergo.laergo_declaration
        </a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module">ergo_module</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">
          Ergo.laergo_module
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCInline">ErgoCInline</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_map_expr_sane">ergo_map_expr_sane</a>
      </span>{" "}
      <span className="id">ctxt</span> <span className="id">fn</span>{" "}
      <span className="id">expr</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ctxt</span>{" "}
      <span className="id">name</span> <span className="id">expr</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_local_env">
          compilation_context_update_local_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#name">name</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">ergo_inline_foreach</span>' (
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">expr</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">rs</span>{" "}
      <span className="id">whr</span> <span className="id">fn</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Program.Basics.html#compose">
          compose
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">rcd</span>{" "}
      <span className="id">ker</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFlatten">
          OpFlatten
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span> (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#rcd">rcd</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ) <span className="id">whr</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ker">ker</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">match</span> <span className="id">whr</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">whr</span>' =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">whr</span>' (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">fn</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">fn</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">rs</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_foreach">ergo_inline_foreach</a>
      </span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_map_expr_sane">
          ergo_map_expr_sane
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ergo_inline_foreach</span>'.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">ergo_letify_function</span>'<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">body</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">args</span> :{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#args">args</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#body">body</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">n</span>,
      <span className="id">t</span>,<span className="id">v</span>)::
      <span className="id">rest</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>{" "}
      <span className="id">n</span> <span className="id">t</span>{" "}
      <span className="id">v</span> (
      <span className="id">ergo_letify_function</span>'{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#body">body</a>
      </span>{" "}
      <span className="id">rest</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="keep_param_types">keep_param_types</a>
      </span>{" "}
      (<span className="id">params</span>:
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
      )) :{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#params">params</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="discard_param_types">discard_param_types</a>
      </span>{" "}
      (<span className="id">params</span>:
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
      )) :{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#params">params</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_letify_function">ergo_letify_function</a>
      </span>{" "}
      (<span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">fn</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) (<span className="id">args</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">fndesc</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_body">functionc_body</a>
      </span>
      ) <span className="kwd">with</span>
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
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergoc_stdlib">
          ergoc_stdlib
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fname">fname</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">fn</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_body">functionc_body</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#discard_param_types">
          discard_param_types
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_sig">functionc_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#sigc_params">sigc_params</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#built_in_function_not_found_error">
          built_in_function_not_found_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fname">fname</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_body">functionc_body</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#keep_param_types">
          keep_param_types
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_sig">functionc_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#sigc_params">sigc_params</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">fndesc</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      * (
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      )) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">fnbody</span>,{" "}
      <span className="id">fnparams</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fndesc">fndesc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fnbody">fnbody</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#built_in_function_without_body_error">
          built_in_function_without_body_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fname">fname</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">body</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#zip">zip</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fnparams">fnparams</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#args">args</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">args</span>' =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (<span className="id">ergo_letify_function</span>' (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvFunc">ProvFunc</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fname">fname</a>
      </span>
      ) <span className="id">body</span> <span className="id">args</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#call_params_error">
          call_params_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fname">fname</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fndesc">fndesc</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">ergo_inline_functions</span>' (
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">expr</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_expr">ergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>{" "}
      <span className="id">args</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_env">
          compilation_context_function_env
        </a>
      </span>
      ) <span className="id">fname</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">fn</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_letify_function">
          ergo_letify_function
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>{" "}
      <span className="id">fn</span> <span className="id">args</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#function_not_found_error">
          function_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">gname</span>{" "}
      <span className="id">fname</span> <span className="id">args</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_function_group_env">
          compilation_context_function_group_env
        </a>
      </span>
      ) <span className="id">gname</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">t</span> =&gt;
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
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">t</span> <span className="id">fname</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">fn</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_letify_function">
          ergo_letify_function
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>{" "}
      <span className="id">fn</span> <span className="id">args</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#function_not_found_error">
          function_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#function_not_found_error">
          function_not_found_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_functions">ergo_inline_functions</a>
      </span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_map_expr_sane">
          ergo_map_expr_sane
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ergo_inline_functions</span>'.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_expr">ergo_inline_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_functions">
          ergo_inline_functions
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">ergo_inline_globals</span>'<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">expr</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">name</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_local_env">
          compilation_context_local_env
        </a>
      </span>
      )) <span className="id">name</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_dec">
          in_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">name</span> (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_params_env">
          compilation_context_params_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
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
          String.string_dec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_global_env">
          compilation_context_global_env
        </a>
      </span>
      )) <span className="id">name</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">val</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">val</span>
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
        <a href="ErgoSpec.Translation.ErgoCInline.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_globals">ergo_inline_globals</a>
      </span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_map_expr_sane">
          ergo_map_expr_sane
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ergo_inline_globals</span>'.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_function">ergo_inline_function</a>
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
      <span className="id">fn</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">params</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_sig">functionc_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#sigc_params">sigc_params</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_set_params_env">
          compilation_context_set_params_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#params">params</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_body">functionc_body</a>
      </span>
      ) <span className="kwd">with</span>
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
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">expr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_expr">
          ergo_inline_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_globals">
          ergo_inline_globals
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">expr</span>) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">new_body</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkFuncC">mkFuncC</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_annot">
          functionc_annot
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_sig">functionc_sig</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">new_body</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_inline_clause">ergoc_inline_clause</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">coname</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">clause</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">clname</span>, <span className="id">fn</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#clause">clause</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#clname">clname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_function_group_env">
          compilation_context_update_function_group_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#coname">coname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#clname">clname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_function">
          ergo_inline_function
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#fn">fn</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_inline_contract">ergo_inline_contract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">coname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_contract">ergoc_contract</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_contract">ergoc_contract</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">clauses</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergoc_inline_clause">
          ergoc_inline_clause
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#coname">coname</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#contract">contract</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#contractc_clauses">
          contractc_clauses
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">xy</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkContractC">mkContractC</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#contract">contract</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#contractc_annot">
          contractc_annot
        </a>
      </span>
      ) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#clauses">clauses</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_inline_declaration">ergoc_inline_declaration</a>
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
      <span className="id">decl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCExpr">DCExpr</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">expr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCExpr">DCExpr</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_expr">
          ergo_inline_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">expr</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCConstant">DCConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span>{" "}
      <span className="id">ta</span> <span className="id">expr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCConstant">DCConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span>{" "}
      <span className="id">ta</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_global_env">
          compilation_context_update_global_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">name</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_expr">
          ergo_inline_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">expr</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCFunc">DCFunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span>{" "}
      <span className="id">fn</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCFunc">DCFunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_function_env">
          compilation_context_update_function_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">name</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_function">
          ergo_inline_function
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">fn</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCContract">DCContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCContract">DCContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#xy">xy</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_inline_contract">
          ergo_inline_contract
        </a>
      </span>{" "}
      <span className="id">name</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">c</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_inline_declarations">ergoc_inline_declarations</a>
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
      <span className="id">decls</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergoc_inline_declaration">
          ergoc_inline_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#decls">decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_inline_module">ergoc_inline_module</a>
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
      <span className="id">mod</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">res</span> : (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkModuleC">mkModuleC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#mod">mod</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#modulec_annot">modulec_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#mod">mod</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#modulec_namespace">
          modulec_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#res">res</a>
      </span>
      ),
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#res">res</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergoc_inline_declarations">
          ergoc_inline_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#mod">mod</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#modulec_declarations">
          modulec_declarations
        </a>
      </span>
      )).
      <br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ErgoCInline">
          ErgoCInline
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
  