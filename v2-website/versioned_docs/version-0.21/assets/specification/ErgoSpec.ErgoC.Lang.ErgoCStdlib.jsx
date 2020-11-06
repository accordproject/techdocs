<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoC.Lang.ErgoCStdlib</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoC.Lang.ErgoCStdlib"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoC.Lang.ErgoCStdlib</h1>
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
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html">
          Qcert.Common.CommonSystem
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html">
          ErgoSpec.Backend.Model.DateTimeModelPart
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html">
          ErgoSpec.Backend.Model.ErgoEnhancedModel
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ForeignErgo.html">
          ErgoSpec.Backend.ForeignErgo
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html">
          ErgoSpec.Backend.Model.ErgoBackendModel
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
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCStdlib">ErgoCStdlib</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="empty_sigc">empty_sigc</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">params</span>:
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
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkSigC">mkSigC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#x">x</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#params">params</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_naked_closure">mk_naked_closure</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">params</span>:
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
      ) (<span className="id">body</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#mkFuncC">mkFuncC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#empty_sigc">empty_sigc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#params">params</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#body">body</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">op</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_naked_closure">
          mk_naked_closure
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("<span className="id">p1</span>"::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#op">op</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p1</span>")).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_binary_expr">mk_binary_expr</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_naked_closure">
          mk_naked_closure
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("<span className="id">p1</span>"::"
      <span className="id">p2</span>"::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#e">e</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">op</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary_expr">
          mk_binary_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#op">op</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p1</span>") (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p2</span>")).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_stdlib_table">ergo_stdlib_table</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="backend_compose_table">backend_compose_table</a>
      </span>{" "}
      (<span className="id">t1</span> <span className="id">t2</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#app">List.app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#t1">t1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#t2">t2</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="foreign_unary_operator_table">foreign_unary_operator_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.dateTime</span>"%
      <span className="id">string</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeDayOfMonth</span>
      ",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_DAY">
          date_time_DAY
        </a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeMonth</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_MONTH">
          date_time_MONTH
        </a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeQuarter</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_QUARTER">
          date_time_QUARTER
        </a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeYear</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_YEAR">
          date_time_YEAR
        </a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="foreign_binary_operator_table">foreign_binary_operator_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeIsAfter</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeIsBefore</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeSubtract</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeAdd</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeDiff</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
          bop_date_time_duration
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeDiffDays</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;:: ("
      <span className="id">
        org.accordproject.ergo.stdlib.dateTimeDiffSeconds
      </span>
      ",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="foreign_function_table">foreign_function_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeIsSame</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary_expr">
          mk_binary_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNeg">
          OpNeg
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p1</span>") (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p2</span>"))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.dateTimeDuration</span>",
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary_expr">
          mk_binary_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">v1</span>"%<span className="id">string</span>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpToString">
          OpToString
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p1</span>"%<span className="id">string</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">v2</span>"%<span className="id">string</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpStringConcat">
          OpStringConcat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          dstring
        </a>
      </span>{" "}
      "-"%<span className="id">string</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">p2</span>"%<span className="id">string</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpStringConcat">
          OpStringConcat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">v1</span>"%<span className="id">string</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">v2</span>"%<span className="id">string</span>))))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="foreign_table">foreign_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#backend_compose_table">
          backend_compose_table
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#foreign_function_table">
          foreign_function_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#backend_compose_table">
          backend_compose_table
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#foreign_unary_operator_table">
          foreign_unary_operator_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#foreign_binary_operator_table">
          foreign_binary_operator_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unary_operator_table">unary_operator_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.toString</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpToString">
          OpToString
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.integerAbs</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatUnary">
          OpNatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#NatAbs">
          NatAbs
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.integerLog2</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatUnary">
          OpNatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#NatLog2">
          NatLog2
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.integerSqrt</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatUnary">
          OpNatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#NatSqrt">
          NatSqrt
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">
        org.accordproject.ergo.stdlib.integerToDouble
      </span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatOfNat">
          OpFloatOfNat
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.sqrt</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatSqrt">
          FloatSqrt
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.exp</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatExp">
          FloatExp
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.log</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatLog">
          FloatLog
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.log10</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatLog10">
          FloatLog10
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.ceil</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatCeil">
          FloatCeil
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.floor</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatFloor">
          FloatFloor
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.abs</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatUnary">
          OpFloatUnary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#FloatAbs">
          FloatAbs
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.max</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMax">
          OpFloatBagMax
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.min</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMin">
          OpFloatBagMin
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.average</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatMean">
          OpFloatMean
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.sum</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatSum">
          OpFloatSum
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">
        org.accordproject.ergo.stdlib.doubleToInteger
      </span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatTruncate">
          OpFloatTruncate
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.truncate</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatTruncate">
          OpFloatTruncate
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.distinct</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDistinct">
          OpDistinct
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.count</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.flatten</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_unary">mk_unary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFlatten">
          OpFlatten
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="binary_operator_table">binary_operator_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.integerMod</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpNatBinary">
          OpNatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#NatRem">
          NatRem
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.integerMin</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpNatBinary">
          OpNatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#NatMin">
          NatMin
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.integerMax</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpNatBinary">
          OpNatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#NatMax">
          NatMax
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.minPair</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpFloatBinary">
          OpFloatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#FloatMin">
          FloatMin
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.maxPair</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpFloatBinary">
          OpFloatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#FloatMax">
          FloatMax
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">org.accordproject.ergo.stdlib.arrayAdd</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpBagUnion">
          OpBagUnion
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:: ("
      <span className="id">
        org.accordproject.ergo.stdlib.arraySubstract
      </span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_binary">mk_binary</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpBagDiff">
          OpBagDiff
        </a>
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
        <a name="builtin_table">builtin_table</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">org.accordproject.ergo.stdlib.now</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#mk_naked_closure">
          mk_naked_closure
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>{" "}
      "<span className="id">now</span>"))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_stdlib">ergoc_stdlib</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ergo_stdlib_table">
          ergo_stdlib_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#backend_compose_table">
          backend_compose_table
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#foreign_table">
          foreign_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#backend_compose_table">
          backend_compose_table
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#builtin_table">
          builtin_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#backend_compose_table">
          backend_compose_table
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#unary_operator_table">
          unary_operator_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#binary_operator_table">
          binary_operator_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#prov">prov</a>
      </span>
      ))).
      <br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCStdlib.html#ErgoCStdlib">ErgoCStdlib</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  