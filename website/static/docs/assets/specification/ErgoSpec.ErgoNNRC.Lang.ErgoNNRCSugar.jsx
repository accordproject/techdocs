<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar</h1>
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
        <a href="https://querycert.github.io/html/Qcert.NNRC.NNRCRuntime.html">
          Qcert.NNRC.NNRCRuntime
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
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html">
          ErgoSpec.ErgoNNRC.Lang.ErgoNNRC
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
        <a name="ErgoNNRCSugar">ErgoNNRCSugar</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Open</span>{" "}
      <span className="kwd">Scope</span> <span className="id">string</span>.<br />
      <br />
      <div className="doc">Fresh variables </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fresh_in_match">fresh_in_match</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} (<span className="id">eccases</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#A">A</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      )) (<span className="id">ecdefault</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Fresh.html#fresh_var">
          fresh_var
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"$<span className="kwd">match</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#app">List.app</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#concat">
          List.concat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">eccase</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#eccase">eccase</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#eccases">eccases</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#ecdefault">
          ecdefault
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fresh_in_case">fresh_in_case</a>
      </span>{" "}
      (<span className="id">pattern_expr</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) (<span className="id">else_expr</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Fresh.html#fresh_var">
          fresh_var
        </a>
      </span>{" "}
      "$<span className="tactic">case</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#app">List.app</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#pattern_expr">
          pattern_expr
        </a>
      </span>
      ) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#else_expr">
          else_expr
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fresh_in_lift_error">fresh_in_lift_error</a>
      </span>{" "}
      (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Fresh.html#fresh_var2">
          fresh_var2
        </a>
      </span>{" "}
      "$<span className="id">lifte</span>" "$<span className="id">lifte</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#e">e</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fresh_in_lift_optional">fresh_in_lift_optional</a>
      </span>{" "}
      (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Fresh.html#fresh_var2">
          fresh_var2
        </a>
      </span>{" "}
      "$<span className="id">lifto</span>" "$<span className="id">lifto</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCVars.html#nnrc_free_vars">
          nnrc_free_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#e">e</a>
      </span>
      ).
      <br />
      <br />
      <div className="doc">New Array </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="new_array">new_array</a>
      </span>{" "}
      (<span className="id">el</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#el">el</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">e1</span>::
      <span className="id">erest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">acc</span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCBinop">
          NNRCBinop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpBagUnion">
          OpBagUnion
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#acc">acc</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#e">e</a>
      </span>
      )) <span className="id">erest</span> (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <div className="doc">
        <span className="bracket">
          <span className="id">new</span> <span className="id">Concept</span>
          {"{"} <span className="id">field1</span>:{" "}
          <span className="id">expr1</span>, ...{" "}
          <span className="id">fieldn</span>: <span className="id">exprn</span>{" "}
          {"}"}
        </span>{" "}
        creates a record and brands it with the concept name{" "}
      </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="new_expr">new_expr</a>
      </span>{" "}
      (<span className="id">brand</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">struct_expr</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBrand">
          OpBrand
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#brand">brand</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#struct_expr">
          struct_expr
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNNRCSugar.Examples">Examples</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="el1">el1</a>
      </span>{" "}
      := (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      1))::(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      2))::(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      3))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#ErgoNNRCSugar.Examples">
          Examples
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRCSugar.html#ErgoNNRCSugar">
          ErgoNNRCSugar
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
  