<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Ergo.Lang.ErgoMap</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Ergo.Lang.ErgoMap"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Ergo.Lang.ErgoMap</h1>
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
        <a href="ErgoSpec.Common.Utils.Misc.html">ErgoSpec.Common.Utils.Misc</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoMap">ErgoMap</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">N</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      {"{"}
      <span className="id">C</span> : <span className="kwd">Set</span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctx</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#C">C</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt_new_variable_scope</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#C">C</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fn</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#C">C</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.N">N</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">expr</span> : @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.N">N</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap.N">N</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">maybe_fn</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_maybe">elift_maybe</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#maybe_fn">maybe_fn</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">e</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">loc</span>) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">a</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">loc</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">na</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#na">na</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">a</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">o</span>{" "}
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
      <span className="id">loc</span> <span className="id">o</span>) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">o</span>{" "}
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
      <span className="id">loc</span> <span className="id">o</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">c</span>{" "}
      <span className="id">t</span> <span className="id">f</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">loc</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">c</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">t</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">f</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">n</span>{" "}
      <span className="id">t</span> <span className="id">v</span>{" "}
      <span className="id">b</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">v</span>'{" "}
      <span className="id">b</span>' =&gt; (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">loc</span>) <span className="id">n</span>{" "}
      <span className="id">t</span> <span className="id">v</span>'{" "}
      <span className="id">b</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">v</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">n</span> <span className="id">v</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">b</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">rs</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">loc</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">nr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">rs</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">n</span>{" "}
      <span className="id">rs</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">n</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">nr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">rs</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">fn</span>'{" "}
      <span className="id">args</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">fn</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">nv</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nv">nv</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">args</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">gn</span>{" "}
      <span className="id">fn</span>' <span className="id">args</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">gn</span>{" "}
      <span className="id">fn</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">nv</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nv">nv</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">args</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">rs</span>{" "}
      <span className="id">whr</span> <span className="id">fn</span>' =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">loc</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ls</span>{" "}
      <span className="id">nr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#postpend">postpend</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ls">ls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#nr">nr</a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">rs</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">match</span> <span className="id">whr</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">whr</span>' =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">whr</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">fn</span>')
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">expr</span>{" "}
      <span className="id">pes</span> <span className="id">def</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">expr</span>' =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">def</span>' =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">pes</span>' =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">expr</span>'{" "}
      <span className="id">pes</span>' <span className="id">def</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">pe</span>{" "}
      <span className="id">prev</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">pe</span>'{" "}
      <span className="id">prev</span>' =&gt; <span className="id">pe</span>' ::{" "}
      <span className="id">prev</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#pe">pe</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseData">CaseData</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>,{" "}
      <span className="id">e</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#pe">pe</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseWildcard">CaseWildcard</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>,{" "}
      <span className="id">e</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#pe">pe</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLet">CaseLet</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">name</span>{" "}
      <span className="id">_</span>, <span className="id">e</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#pe">pe</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">name</span> <span className="id">expr</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">CaseLetOption</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">name</span>{" "}
      <span className="id">_</span>, <span className="id">e</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#pe">pe</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">name</span> <span className="id">expr</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#prev">prev</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">pes</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">def</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ergo_map_expr">ergo_map_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctx">ctx</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ctxt_new_variable_scope">
          ctxt_new_variable_scope
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#expr">expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoMap.html#ErgoMap">ErgoMap</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  