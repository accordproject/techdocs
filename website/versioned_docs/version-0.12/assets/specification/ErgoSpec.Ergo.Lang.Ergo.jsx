<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Ergo.Lang.Ergo</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Ergo.Lang.Ergo"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Ergo.Lang.Ergo</h1>
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
        <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html">
          EquivDec
        </a>
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
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ergo">Ergo</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ergo.Ast">Ast</a>
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
      <div className="doc">Expression </div>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_expr">ergo_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EThisContract">EThisContract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* this contract *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EThisClause">EThisClause</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* this clause *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EThisState">EThisState</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* this state *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EVar">EVar</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* variable *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EConst">EConst</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
          ErgoData.data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* constant *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ENone">ENone</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* none *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ESome">ESome</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* some(e) *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EArray">EArray</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* array constructor *)</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EUnaryOp">EUnaryOp</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Unary.op">
          ErgoOps.Unary.op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* unary operator *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EBinaryOp">EBinaryOp</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Binary.op">
          ErgoOps.Binary.op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* binary operator *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EIf">EIf</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* conditional *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ELet">ELet</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* local variable binding *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ERecord">ERecord</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* create a new record *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ENew">ENew</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* create a new concept/object *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ECallFun">ECallFun</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* function call *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* call function in group *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EMatch">EMatch</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* match-case *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EForeach">EForeach</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="docright">(* foreach with optional where *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="expr_annot">expr_annot</a>
      </span>{" "}
      (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">ENone</a>
      </span>{" "}
      <span className="id">a</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">ESome</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">ENew</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFunInGroup">ECallFunInGroup</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">EMatch</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">EForeach</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">Statement </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_stmt">ergo_stmt</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SReturn">SReturn</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SFunReturn">SFunReturn</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SThrow">SThrow</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SCallClause">SCallClause</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      <span className="docright">(* clause call *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SSetState">SSetState</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SEmit">SEmit</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SLet">SLet</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      <span className="docright">(* local variable *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SIf">SIf</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SEnforce">SEnforce</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      <span className="docright">(* enforce *)</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="SMatch">SMatch</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      )) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="stmt_annot">stmt_annot</a>
      </span>{" "}
      (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#e">e</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SFunReturn">SFunReturn</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">SThrow</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">SSetState</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEmit">SEmit</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SLet">SLet</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SIf">SIf</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">SEnforce</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">SMatch</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">Function </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_function">ergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkFunc">mkFunc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="function_annot">function_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="function_sig">function_sig</a>
      </span>{" "}
      : @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="function_body">function_body</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="body_annot">body_annot</a>
      </span>{" "}
      (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_body">function_body</a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#function_annot">function_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#expr_annot">expr_annot</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">Clause </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_clause">ergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkClause">mkClause</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="clause_annot">clause_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="clause_name">clause_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="clause_sig">clause_sig</a>
      </span>{" "}
      : @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="clause_body">clause_body</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Contract </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_contract">ergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkContract">mkContract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="contract_annot">contract_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="contract_template">contract_template</a>
      </span>{" "}
      : (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="contract_state">contract_state</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="contract_clauses">contract_clauses</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Declaration </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_declaration">ergo_declaration</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DNamespace">DNamespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DImport">DImport</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DType">DType</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt; @
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DStmt">DStmt</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DConstant">DConstant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DFunc">DFunc</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DContract">DContract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DSetContract">DSetContract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="decl_annot">decl_annot</a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">a</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; <span className="id">a</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">Module. </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergo_module">ergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="module_annot">module_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="module_file">module_file</a>
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
        <a name="module_namespace">module_namespace</a>
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
        <a name="module_declarations">module_declarations</a>
      </span>{" "}
      :{" "}
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
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergo_input">ergo_input</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="InputErgo">InputErgo</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_module">ergo_module</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_input">ergo_input</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="InputCTO">InputCTO</a>
      </span>{" "}
      : @
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package">cto_package</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast.N">N</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_input">ergo_input</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Ast">Ast</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_expr">rergo_expr</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_stmt">rergo_stmt</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_function">rergo_function</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_clause">rergo_clause</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_contract">rergo_contract</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_declaration">rergo_declaration</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_module">rergo_module</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_module">ergo_module</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rergo_input">rergo_input</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_input">ergo_input</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_expr">aergo_expr</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="aergo_stmt">aergo_stmt</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arergo_function">arergo_function</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arergo_clause">arergo_clause</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arergo_contract">arergo_contract</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arergo_declaration">arergo_declaration</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arergo_module">arergo_module</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_module">ergo_module</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lrergo_expr">lrergo_expr</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
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
        <a name="lrergo_stmt">lrergo_stmt</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
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
        <a name="lrergo_function">lrergo_function</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
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
        <a name="lrergo_clause">lrergo_clause</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
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
        <a name="lrergo_contract">lrergo_contract</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
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
        <a name="lrergo_declaration">lrergo_declaration</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
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
        <a name="lrergo_module">lrergo_module</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_module">ergo_module</a>
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
        <a name="lrergo_input">lrergo_input</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_input">ergo_input</a>
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
        <a name="laergo_expr">laergo_expr</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
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
        <a name="laergo_stmt">laergo_stmt</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_stmt">ergo_stmt</a>
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
        <a name="laergo_function">laergo_function</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_function">ergo_function</a>
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
        <a name="laergo_clause">laergo_clause</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_clause">ergo_clause</a>
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
        <a name="laergo_contract">laergo_contract</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
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
        <a name="laergo_declaration">laergo_declaration</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_declaration">
          ergo_declaration
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
        <a name="laergo_module">laergo_module</a>
      </span>{" "}
      := @
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_module">ergo_module</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ergo.Lookup">Lookup</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="lookup_clauses_signatures">lookup_clauses_signatures</a>
      </span>{" "}
      (<span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#dl">dl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">cl</span> ::{" "}
      <span className="id">dl</span>' =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cl</span>.(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      ),<span className="id">cl</span>.(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_sig">clause_sig</a>
      </span>
      )) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_clauses_signatures">
          lookup_clauses_signatures
        </a>
      </span>{" "}
      <span className="id">dl</span>'<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_contract_signatures">lookup_contract_signatures</a>
      </span>{" "}
      (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_contract">ergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_clauses_signatures">
          lookup_clauses_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="contract_of_declaration">contract_of_declaration</a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">cn</span>{" "}
      <span className="id">c</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">cn</span>, <span className="id">c</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
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
        <a name="lookup_contracts_in_declarations">
          lookup_contracts_in_declarations
        </a>
      </span>{" "}
      (<span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#filter_some">filter_some</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_of_declaration">
          contract_of_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#dl">dl</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_single_contract_in_declarations">
          lookup_single_contract_in_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
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
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_contracts_in_declarations">
          lookup_contracts_in_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#dl">dl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#should_have_one_contract_error">
          should_have_one_contract_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">c</span> ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">c</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> ::{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#should_have_one_contract_error">
          should_have_one_contract_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_single_contract">lookup_single_contract</a>
      </span>{" "}
      (<span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_single_contract_in_declarations">
          lookup_single_contract_in_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_single_contract_with_state">
          lookup_single_contract_with_state
        </a>
      </span>{" "}
      (<span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ecstate</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ec">ec</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ecstate">ecstate</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lift_default_state_name">
          lift_default_state_name
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ec">ec</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_single_contract_in_declarations">
          lookup_single_contract_in_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.Lookup">Lookup</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Ergo.TypeDeclarations">TypeDeclarations</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="get_type_decls">get_type_decls</a>
      </span>{" "}
      (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">td</span> ::{" "}
      <span className="id">rest</span> =&gt; <span className="id">td</span> :: (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#get_type_decls">get_type_decls</a>
      </span>{" "}
      <span className="id">rest</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> ::{" "}
      <span className="id">rest</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#get_type_decls">get_type_decls</a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="module_get_type_decls">module_get_type_decls</a>
      </span>{" "}
      (<span className="id">m</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#get_type_decls">get_type_decls</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#m">m</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="modules_get_type_decls">modules_get_type_decls</a>
      </span>{" "}
      (<span className="id">m</span>:
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      :=
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_get_type_decls">
          module_get_type_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#m">m</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo.TypeDeclarations">
          TypeDeclarations
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#Ergo">Ergo</a>
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
  