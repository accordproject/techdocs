<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoC.Lang.ErgoCSugar</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoC.Lang.ErgoCSugar"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoC.Lang.ErgoCSugar</h1>
    <div className="coq">
      <br />
      <div className="doc">
        Ergo is a language for expressing contract logic.{" "}
      </div>
      <br />
      <h1> Syntactic sugar </h1>
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCSugar">ErgoCSugar</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mkResult">mkResult</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) <span className="id">e1</span> <span className="id">e2</span>{" "}
      <span className="id">e3</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_response">this_response</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e1">e1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e2">e2</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e3">e3</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="setState">setState</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) <span className="id">e1</span> <span className="id">e2</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_state">local_state</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e2">e2</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="thisContract">thisContract</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisContract">
          ProvThisContract
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="thisClause">thisClause</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) <span className="id">clause_name</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisClause">
          ProvThisClause
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#clause_name">clause_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpUnbrand">
          OpUnbrand
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="thisState">thisState</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisState">
          ProvThisState
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_state">local_state</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="pushEmit">pushEmit</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) <span className="id">e1</span> <span className="id">e2</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpBagUnion">
          OpBagUnion
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e1">e1</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_emit">local_emit</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e2">e2</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ESuccess">ESuccess</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpLeft">
          OpLeft
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e">e</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EError">EError</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpRight">
          OpRight
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#e">e</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCSugar.html#ErgoCSugar">ErgoCSugar</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  