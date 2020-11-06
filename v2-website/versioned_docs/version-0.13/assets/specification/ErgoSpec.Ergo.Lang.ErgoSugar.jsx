<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Ergo.Lang.ErgoSugar</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Ergo.Lang.ErgoSugar"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Ergo.Lang.ErgoSugar</h1>
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoSugar">ErgoSugar</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"}. <br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">
        <span className="bracket">
          <span className="id">expr.field</span>
        </span>{" "}
        is a macro for unbranding followed by field access in a record{" "}
      </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EDot">EDot</a>
      </span>{" "}
      (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar.A">A</a>
      </span>
      ) (<span className="id">s</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_expr">rergo_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_expr">rergo_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Unary.opdot">
          ErgoOps.Unary.opdot
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#s">s</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Unary.opunbrand">
          ErgoOps.Unary.opunbrand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#e">e</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="SReturnEmpty">SReturnEmpty</a>
      </span>{" "}
      (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar.A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_stmt">rergo_stmt</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EFunReturnEmpty">EFunReturnEmpty</a>
      </span>{" "}
      (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar.A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_expr">rergo_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EOptionalDot">EOptionalDot</a>
      </span>{" "}
      (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar.A">A</a>
      </span>
      ) (<span className="id">pname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_expr">rergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#e">e</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">CaseLetOption</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      "$<span className="id">option</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#EDot">EDot</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#pname">pname</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      "$<span className="id">option</span>")))) ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EOptionalDefault">EOptionalDefault</a>
      </span>{" "}
      (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar.A">A</a>
      </span>
      ) (<span className="id">e1</span> <span className="id">e2</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#rergo_expr">rergo_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#e1">e1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">CaseLetOption</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      "$<span className="id">option</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#a">a</a>
      </span>{" "}
      "$<span className="id">option</span>") ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#e2">e2</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#ErgoSugar">ErgoSugar</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  