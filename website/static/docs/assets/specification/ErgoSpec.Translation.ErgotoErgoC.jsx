<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgotoErgoC</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgotoErgoC"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.ErgotoErgoC</h1>
    <div className="coq">
      <br />
      <div className="doc">Translates contract logic to calculus </div>
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
        <a href="ErgoSpec.Common.Utils.Misc.html">ErgoSpec.Common.Utils.Misc</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html">ErgoSpec.ErgoC.Lang.ErgoC</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html">
          ErgoSpec.ErgoC.Lang.ErgoCSugar
        </a>
      </span>
      .<br />
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
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgotoErgoC">ErgotoErgoC</a>
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
      <div className="doc">Translate Ergo expression to calculus </div>
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ergo_expr_to_ergoc_expr">ergo_expr_to_ergoc_expr</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#use_contract_not_in_contract_error">
          use_contract_not_in_contract_error
        </a>
      </span>{" "}
      <span className="id">prov</span>
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
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#thisContract">
          thisContract
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
      </span>{" "}
      <span className="id">prov</span> =&gt; <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_clause">
          compilation_context_current_clause
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#not_in_clause_error">
          not_in_clause_error
        </a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">clause_name</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#thisClause">thisClause</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">clause_name</span>)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#thisState">thisState</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">prov</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">u</span>{" "}
      <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">u</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">b</span>{" "}
      <span className="id">e1</span> <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">b</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">e2</span> <span className="id">e3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> <span className="id">e1</span>{" "}
      <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cr</span>{" "}
      <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#is_abstract_class">
          is_abstract_class
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">cr</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">prov</span> ("<span className="id">Cannot</span>{" "}
      <span className="id">create</span> <span className="id">instance</span>{" "}
      <span className="id">of</span> <span className="id">abstract</span>{" "}
      <span className="id">type</span> `" ++ <span className="id">cr</span> ++
      "'"))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ))) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">attname</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#att">att</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#att">att</a>
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#attname">attname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cr</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_rec">init_rec</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_rec</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">att</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ))) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">attname</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#att">att</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#att">att</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#attname">attname</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_rec">init_rec</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>{" "}
      <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fname</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">gname</span>{" "}
      <span className="id">fname</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#cons">
          cons
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">gname</span>{" "}
      <span className="id">fname</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_el">init_el</a>
      </span>{" "}
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e0</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">eccases</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span>{" "}
      <span className="id">acc</span> <span className="id">ecase</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ecase">ecase</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ecase">ecase</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">eccases</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ecdefault</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ec0">ec0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#eccases">eccases</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ecdefault">ecdefault</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ecdefault">ecdefault</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#eccases">eccases</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ec0">ec0</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">foreachs</span>{" "}
      <span className="id">econd</span> <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_e2</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e2</span>) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_e</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">econd</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">econd</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">econd</span>{" "}
      <span className="id">e2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#econd">econd</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e2">e2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">econd</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_e2">init_e2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_e2">init_e2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">foreach</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      ) (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">v</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#foreach">foreach</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">e</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#foreach">foreach</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFlatten">
          OpFlatten
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">single</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#v">v</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#single">single</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#init_e">init_e</a>
      </span>{" "}
      <span className="id">foreachs</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">
        Translate an Ergo statement to an Ergo expression{" "}
      </div>
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ergo_stmt_to_expr">ergo_stmt_to_expr</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">s</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#s">s</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#ESuccess">ESuccess</a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#mkResult">mkResult</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_state">local_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_emit">local_emit</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SFunReturn">SFunReturn</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt; <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">SThrow</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#EError">EError</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">prov</span> (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">_</span>) <span className="id">clname</span>{" "}
      <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_current_contract">
          compilation_context_current_contract
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#call_clause_not_in_contract_error">
          call_clause_not_in_contract_error
        </a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">clname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">coname</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">params</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">clname</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#current_time">current_time</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#thisContract">
          thisContract
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_emit">local_emit</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#current_time">current_time</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#thisContract">
          thisContract
        </a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_state">local_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_emit">local_emit</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">el</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">el</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ) <span className="id">el</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">el</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">coname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">clname</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#params">params</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#el">el</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">e0</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#clause_call_not_on_contract_error">
          clause_call_not_on_contract_error
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#expr_annot">expr_annot</a>
      </span>{" "}
      <span className="id">e0</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">SSetState</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#setState">setState</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEmit">SEmit</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#pushEmit">pushEmit</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SLet">SLet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">vname</span>{" "}
      <span className="id">vtype</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">vname</span>{" "}
      <span className="id">vtype</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SIf">SIf</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> <span className="id">s3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">SEnforce</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">s3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNeg">
          OpNeg
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#EError">EError</a>
      </span>{" "}
      <span className="id">prov</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#enforce_error_content">
          enforce_error_content
        </a>
      </span>{" "}
      <span className="id">prov</span> ""))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">SEnforce</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">s2</span>) <span className="id">s3</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">prov</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNeg">
          OpNeg
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">s3</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">SMatch</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">scases</span> <span className="id">sdefault</span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ec0</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e0</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">sccases</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">proc_one</span>{" "}
      <span className="id">acc</span> <span className="id">scase</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#scase">scase</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#scase">scase</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">scases</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">scdefault</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">sdefault</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ec0</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">sccases</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">scdefault</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ec0">ec0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#sccases">sccases</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#scdefault">scdefault</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#scdefault">scdefault</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#sccases">sccases</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ec0">ec0</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_stmt_to_expr_top">ergo_stmt_to_expr_top</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_state">local_state</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_emit">local_emit</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr">
          ergo_stmt_to_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#e">e</a>
      </span>
      ).
      <br />
      <br />
      <div className="doc">Translate a clause to clause+calculus </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_to_calculus">clause_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tem</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sta</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#set_current_clause">
          set_current_clause
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvClause">ProvClause</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_annot">clause_annot</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">emit_type</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lift_default_emits_type">
          lift_default_emits_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_emits">
          type_signature_emits
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">state_type</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lift_default_state_type">
          lift_default_state_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#sta">sta</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">throw_type</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#default_throws_type">
          default_throws_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">output_type</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">response_type</span>'
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_output">
          type_signature_output
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">response_type</span>
      ' <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">response_type</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">
        let
      </span> <span className="id">success_type</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mk_success_type">
          mk_success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">response_type</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#state_type">state_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#emit_type">emit_type</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">error_type</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mk_error_type">
          mk_error_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#throw_type">throw_type</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mk_output_type">
          mk_output_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#success_type">
          success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#error_type">error_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">body</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_body">clause_body</a>
      </span>
      ) <span className="kwd">with</span>
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">stmt</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr_top">
          ergo_stmt_to_expr_top
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      <span className="id">stmt</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">clname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">params</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#clname">clname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#current_time">current_time</a>
      </span>
      , (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#tem">tem</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#current_time">current_time</a>
      </span>
      , (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#tem">tem</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#state_type">state_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">body</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#clname">clname</a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkFuncC">mkFuncC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkSigC">mkSigC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#params">params</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#output_type">
          output_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#body">body</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#body">body</a>
      </span>
      .<br />
      <br />
      <div className="doc">Translate a function to function+calculus </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_to_calculus">function_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_function">laergo_function</a>
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
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_annot">function_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">body</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_body">function_body</a>
      </span>
      ) <span className="kwd">with</span>
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkFuncC">mkFuncC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_annot">function_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkSigC">mkSigC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_sig">function_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_sig">function_sig</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_output">
          type_signature_output
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#body">body</a>
      </span>
      .<br />
      <br />
      <div className="doc">Translate a contract to a contract+calculus </div>
      <div className="doc">
        For a contract, add 'contract' and 'now' to the comp_context{" "}
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="contract_to_calculus">contract_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_contract">ergoc_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">clauses</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#clause_to_calculus">
          clause_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_template">
          contract_template
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkContractC">mkContractC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_annot">contract_annot</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#clauses">clauses</a>
      </span>
      .<br />
      <br />
      <div className="doc">Translate a statement to a statement+calculus </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="declaration_to_calculus">declaration_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">import</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ergo_type</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">name</span> := <span className="id">ergo_type</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
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
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#name">name</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ) ++
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      ))) <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">prov</span> ("<span className="id">Cannot</span>{" "}
      <span className="id">redefine</span> <span className="id">type</span> `" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#name">name</a>
      </span>{" "}
      ++ "'"))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_add_new_type_declaration">
          compilation_context_add_new_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ergo_type</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">s</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCExpr">DCExpr</a>
      </span>{" "}
      <span className="id">prov</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_stmt_to_expr_top">
          ergo_stmt_to_expr_top
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">s</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCConstant">DCConstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fn</span>{" "}
      <span className="id">f</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCFunc">DCFunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fn</span>) (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#function_to_calculus">
          function_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">f</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cn</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCContract">DCContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cn</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#set_current_contract">
          set_current_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">cn</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#contract_to_calculus">
          contract_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">c</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cn</span>{" "}
      <span className="id">e1</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#set_current_contract">
          set_current_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">cn</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#x">x</a>
      </span>{" "}
      :: (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCConstant">DCConstant</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>
      )) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#DCConstant">DCConstant</a>
      </span>{" "}
      <span className="id">prov</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_expr_to_ergoc_expr">
          ergo_expr_to_ergoc_expr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">e1</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">Translate a module to a module+calculus </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="declarations_calculus">declarations_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
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
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
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
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span> :{" "}
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
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">acc</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">decls</span> :{" "}
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
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">decls</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>{" "}
      ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#decls">decls</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#declaration_to_calculus">
          declaration_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#d">d</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#dl">dl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      )).
      <br />
      <br />
      <div className="doc">Translate a module to a module+calculus </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_calculus">ergo_module_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
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
      <span className="id">res</span> :{" "}
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
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">decls</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#res">res</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkModuleC">mkModuleC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#decls">decls</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#declarations_calculus">
          declarations_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#p">p</a>
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
        <a name="ergo_modules_to_calculus">ergo_modules_to_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">pl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_module_to_calculus">
          ergo_module_to_calculus
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#pl">pl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgotoErgoC.Examples">Examples</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="f1">f1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_function">laergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">rate</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
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
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float_one">
          float_one
        </a>
      </span>
      ))).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="f2">f2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_function">laergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">rate</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
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
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cl1">cl1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">volumediscount</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>"%<span className="id">string</span>,{" "}
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
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_request_absolute_name">
          default_request_absolute_name
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float_zero">
          float_zero
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )))).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cl2">cl2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">volumediscount</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>"%<span className="id">string</span>,{" "}
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
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_request_absolute_name">
          default_request_absolute_name
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )))).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="co1">co1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">TemplateModel</span>"%
      <span className="id">string</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#cl1">cl1</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#cl2">cl2</a>
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
        <a name="dl1">dl1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"%<span className="id">string</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f1">f1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">VolumeDiscount</span>"%
      <span className="id">string</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#co1">co1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="dl2">dl2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"%<span className="id">string</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f1">f1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee2</span>"%<span className="id">string</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#f2">f2</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">VolumeDiscount</span>"%
      <span className="id">string</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#co1">co1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ErgotoErgoC.Examples">
          Examples
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ErgotoErgoC">
          ErgotoErgoC
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
  