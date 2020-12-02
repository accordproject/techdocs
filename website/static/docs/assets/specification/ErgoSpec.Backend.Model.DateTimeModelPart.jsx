<div>
     <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
     <title>Module ErgoSpec.Backend.Model.DateTimeModelPart</title>
     <meta
       name="description"
       content="Documentation of Coq module ErgoSpec.Backend.Model.DateTimeModelPart"
     />
     <link href="coq2html.css" rel="stylesheet" type="text/css" />
     <h1 className="title">Module ErgoSpec.Backend.Model.DateTimeModelPart</h1>
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
         <a href="http://coq.inria.fr/library/Coq.ZArith.ZArith.html">ZArith</a>
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
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html">
           Equivalence
         </a>
       </span>
       .<br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.Utils.html">
           Qcert.Utils.Utils
         </a>
       </span>
       .<br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html">
           Qcert.Common.DataModel.ForeignData
         </a>
       </span>
       .<br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html">
           Qcert.Common.Operators.ForeignOperators
         </a>
       </span>
       .<br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.JavaScriptAstRuntime.html">
           Qcert.JavaScriptAst.JavaScriptAstRuntime
         </a>
       </span>
       .<br />
       <br />
       <span className="kwd">Import</span>{" "}
       <span className="id">ListNotations</span>.<br />
       <br />
       <div className="doc">
         Defines the foreign support for DateTime Posits axioms for the basic
         data/operators, and defines how they are extracted to ocaml (using helper
         functions defined in qcert/ocaml/...../Util.ml)
       </div>
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION">DATE_TIME_DURATION</a>
       </span>{" "}
       : <span className="kwd">Set</span>.<br />
       <span className="id">
         Extract
       </span> <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION</span> =&gt; "
       <span className="id">DateTime.duration</span>".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_eq">DATE_TIME_DURATION_eq</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_eq</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.deq</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="id">Conjecture</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_eq_correct">DATE_TIME_DURATION_eq_correct</a>
       </span>{" "}
       :<br />
       &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
       <span className="id">f1</span> <span className="id">f2</span>, (
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_eq">
           DATE_TIME_DURATION_eq
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f1">f1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f2">f2</a>
       </span>{" "}
       ={" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
           true
         </a>
       </span>{" "}
       &lt;-&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f1">f1</a>
       </span>{" "}
       ={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f2">f2</a>
       </span>
       ).
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_to_string">DATE_TIME_DURATION_to_string</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_to_string</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">Util.char_list_of_string</span> (
       <span className="id">DateTime.dto_string</span>{" "}
       <span className="id">x</span>))".
       <br />
       <br />
       <span className="kwd">
         Program
       </span> <span className="kwd">Instance</span>{" "}
       <span className="id">
         <a name="date_time_duration_foreign_data">
           date_time_duration_foreign_data
         </a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data">
           foreign_data
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= {"{"}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_type">
           foreign_data_type
         </a>
       </span>{" "}
       :={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>
       {"}"}.<br />
       <div className="toggleproof" onclick="toggleDisplay('proof1')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof1">
         &nbsp;&nbsp;<span className="tactic">intros</span>{" "}
         <span className="id">x</span> <span className="id">y</span>.<br />
         &nbsp;&nbsp;<span className="id">case_eq</span> (
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_eq">
             DATE_TIME_DURATION_eq
           </a>
         </span>{" "}
         <span className="id">x</span> <span className="id">y</span>);{" "}
         <span className="tactic">intros</span> <span className="id">eqq</span>.
         <br />
         &nbsp;&nbsp;+ <span className="id">left</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">f_equal</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">apply</span>{" "}
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_eq_correct">
             DATE_TIME_DURATION_eq_correct
           </a>
         </span>{" "}
         <span className="kwd">in</span> <span className="id">eqq</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">trivial</span>.<br />
         &nbsp;&nbsp;+ <span className="id">right</span>;{" "}
         <span className="tactic">intros</span> <span className="id">eqq2</span>.
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">red</span>{" "}
         <span className="kwd">in</span> <span className="id">eqq2</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">apply</span>{" "}
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_eq_correct">
             DATE_TIME_DURATION_eq_correct
           </a>
         </span>{" "}
         <span className="kwd">in</span> <span className="id">eqq2</span>. <br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">congruence</span>.<br />
         Defined.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof2')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof2">
         &nbsp;&nbsp;<span className="tactic">exact</span>{" "}
         <span className="id">
           <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#True">True</a>
         </span>
         .<br />
         Defined.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof3')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof3">
         &nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
         Qed.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof4')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof4">
         &nbsp;&nbsp;<span className="id">constructor</span>.<br />
         &nbsp;&nbsp;<span className="tactic">intros</span>{" "}
         <span className="id">f</span>.<br />
         &nbsp;&nbsp;<span className="tactic">exact</span> (
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_to_string">
             DATE_TIME_DURATION_to_string
           </a>
         </span>{" "}
         <span className="id">f</span>).
         <br />
         Defined.
       </div>
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME">DATE_TIME</a>
       </span>{" "}
       : <span className="kwd">Set</span>.<br />
       <span className="id">
         Extract
       </span> <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME</span> =&gt; "
       <span className="id">DateTime.dateTime</span>".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_now">DATE_TIME_now</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_now</span> =&gt; "(
       <span className="id">DateTime.now</span> ())".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_eq">DATE_TIME_eq</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_eq</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.eq</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="id">Conjecture</span>{" "}
       <span className="id">
         <a name="DATE_TIME_eq_correct">DATE_TIME_eq_correct</a>
       </span>{" "}
       :<br />
       &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
       <span className="id">f1</span> <span className="id">f2</span>, (
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_eq">
           DATE_TIME_eq
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f1">f1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f2">f2</a>
       </span>{" "}
       ={" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
           true
         </a>
       </span>{" "}
       &lt;-&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f1">f1</a>
       </span>{" "}
       ={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f2">f2</a>
       </span>
       ).
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_to_string">DATE_TIME_to_string</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_to_string</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">Util.char_list_of_string</span> (
       <span className="id">DateTime.to_string</span> <span className="id">x</span>
       ))".
       <br />
       <br />
       <span className="kwd">
         Program
       </span> <span className="kwd">Instance</span>{" "}
       <span className="id">
         <a name="date_time_foreign_data">date_time_foreign_data</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data">
           foreign_data
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= {"{"}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_type">
           foreign_data_type
         </a>
       </span>{" "}
       :={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       {"}"}.<br />
       <div className="toggleproof" onclick="toggleDisplay('proof5')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof5">
         &nbsp;&nbsp;<span className="tactic">intros</span>{" "}
         <span className="id">x</span> <span className="id">y</span>.<br />
         &nbsp;&nbsp;<span className="id">case_eq</span> (
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_eq">
             DATE_TIME_eq
           </a>
         </span>{" "}
         <span className="id">x</span> <span className="id">y</span>);{" "}
         <span className="tactic">intros</span> <span className="id">eqq</span>.
         <br />
         &nbsp;&nbsp;+ <span className="id">left</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">f_equal</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">apply</span>{" "}
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_eq_correct">
             DATE_TIME_eq_correct
           </a>
         </span>{" "}
         <span className="kwd">in</span> <span className="id">eqq</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">trivial</span>.<br />
         &nbsp;&nbsp;+ <span className="id">right</span>;{" "}
         <span className="tactic">intros</span> <span className="id">eqq2</span>.
         <br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">red</span>{" "}
         <span className="kwd">in</span> <span className="id">eqq2</span>.<br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">apply</span>{" "}
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_eq_correct">
             DATE_TIME_eq_correct
           </a>
         </span>{" "}
         <span className="kwd">in</span> <span className="id">eqq2</span>. <br />
         &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">congruence</span>.<br />
         Defined.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof6')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof6">
         &nbsp;&nbsp;<span className="tactic">exact</span>{" "}
         <span className="id">
           <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#True">True</a>
         </span>
         .<br />
         Defined.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof7')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof7">
         &nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
         Qed.
       </div>
       <div className="toggleproof" onclick="toggleDisplay('proof8')">
         Next Obligation.
       </div>
       <div className="proofscript" id="proof8">
         &nbsp;&nbsp;<span className="id">constructor</span>.<br />
         &nbsp;&nbsp;<span className="tactic">intros</span>{" "}
         <span className="id">f</span>.<br />
         &nbsp;&nbsp;<span className="tactic">exact</span> (
         <span className="id">
           <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_to_string">
             DATE_TIME_to_string
           </a>
         </span>{" "}
         <span className="id">f</span>).
         <br />
         Defined.
       </div>
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_from_string">DATE_TIME_from_string</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_from_string</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.from_string</span> (
       <span className="id">Util.string_of_char_list</span>{" "}
       <span className="id">x</span>))".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_from_string">
           DATE_TIME_DURATION_from_string
         </a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_from_string</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.dfrom_string</span> (
       <span className="id">Util.string_of_char_list</span>{" "}
       <span className="id">x</span>))".
       <br />
       <br />
       <span className="kwd">Inductive</span>{" "}
       <span className="id">
         <a name="date_time_component">date_time_component</a>
       </span>
       <br />
       &nbsp;&nbsp;:=
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="date_time_DAY">date_time_DAY</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="date_time_MONTH">date_time_MONTH</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="date_time_QUARTER">date_time_QUARTER</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="date_time_YEAR">date_time_YEAR</a>
       </span>
       .<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_component_tostring">date_time_component_tostring</a>
       </span>{" "}
       (<span className="id">part</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
           date_time_component
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#part">part</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_DAY">
           date_time_DAY
         </a>
       </span>{" "}
       =&gt; "<span className="id">day</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_MONTH">
           date_time_MONTH
         </a>
       </span>{" "}
       =&gt; "<span className="id">month</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_QUARTER">
           date_time_QUARTER
         </a>
       </span>{" "}
       =&gt; "<span className="id">quarter</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_YEAR">
           date_time_YEAR
         </a>
       </span>{" "}
       =&gt; "<span className="id">year</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">
         Global
       </span> <span className="kwd">Instance</span>{" "}
       <span className="id">
         <a name="date_time_component_to_string">date_time_component_to_string</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#ToString">
           ToString
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
           date_time_component
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= {"{"}{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
           toString
         </a>
       </span>{" "}
       :={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component_tostring">
           date_time_component_tostring
         </a>
       </span>{" "}
       {"}"}.<br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_day">DATE_TIME_day</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_day</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.day</span> <span className="id">x</span>)".
       <br />
       &nbsp;&nbsp;
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_month">DATE_TIME_month</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_month</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.month</span> <span className="id">x</span>)".
       <br />
       &nbsp;&nbsp;
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_quarter">DATE_TIME_quarter</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_quarter</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.quarter</span> <span className="id">x</span>
       )".
       <br />
       &nbsp;&nbsp;
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_year">DATE_TIME_year</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_year</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span> -&gt;{" "}
       <span className="id">DateTime.year</span> <span className="id">x</span>)".
       <br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="DATE_TIME_component">DATE_TIME_component</a>
       </span>{" "}
       (<span className="id">part</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
           date_time_component
         </a>
       </span>
       ) (<span className="id">dt</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
       </span>{" "}
       :=
       <br />
       &nbsp;&nbsp;<span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#part">part</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_DAY">
           date_time_DAY
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_day">
           DATE_TIME_day
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#dt">dt</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_MONTH">
           date_time_MONTH
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_month">
           DATE_TIME_month
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#dt">dt</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_QUARTER">
           date_time_QUARTER
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_quarter">
           DATE_TIME_quarter
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#dt">dt</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_YEAR">
           date_time_YEAR
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_year">
           DATE_TIME_year
         </a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#dt">dt</a>
       </span>
       <br />
       &nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Inductive</span>{" "}
       <span className="id">
         <a name="date_time_unary_op">date_time_unary_op</a>
       </span>
       <br />
       &nbsp;&nbsp;:=
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="uop_date_time_component">uop_date_time_component</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
           date_time_component
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
           date_time_unary_op
         </a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="uop_date_time_from_string">uop_date_time_from_string</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="uop_date_time_duration_from_string">
           uop_date_time_duration_from_string
         </a>
       </span>
       <br />
       .<br />
       <br />
       <span className="kwd">Local</span> <span className="kwd">Open</span>{" "}
       <span className="kwd">Scope</span> <span className="id">string</span>.<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_unary_op_tostring">date_time_unary_op_tostring</a>
       </span>{" "}
       (<span className="id">f</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
           date_time_unary_op
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f">f</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
           uop_date_time_component
         </a>
       </span>{" "}
       <span className="id">part</span> =&gt;
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"(
       <span className="id">dateTimeComponent</span>" ++ (
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component_tostring">
           date_time_component_tostring
         </a>
       </span>{" "}
       <span className="id">part</span>) ++ ")"
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
           uop_date_time_from_string
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeFromString</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
           uop_date_time_duration_from_string
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeDurationFromString</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html">
           Qcert.Translation.ForeignToJava
         </a>
       </span>
       .<br />
       <span className="kwd">
         Require
       </span> <span className="kwd">Import</span>{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html">
           Qcert.Translation.NNRCtoJava
         </a>
       </span>
       .<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_component_to_java_string">
           date_time_component_to_java_string
         </a>
       </span>{" "}
       (<span className="id">part</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
           date_time_component
         </a>
       </span>
       ):{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#part">part</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_DAY">
           date_time_DAY
         </a>
       </span>{" "}
       =&gt; "<span className="id">UnaryOperators.day</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_MONTH">
           date_time_MONTH
         </a>
       </span>{" "}
       =&gt; "<span className="id">UnaryOperators.month</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_QUARTER">
           date_time_QUARTER
         </a>
       </span>{" "}
       =&gt; "<span className="id">UnaryOperators.quarter</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_YEAR">
           date_time_YEAR
         </a>
       </span>{" "}
       =&gt; "<span className="id">UnaryOperators.year</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       &nbsp;&nbsp;
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_java_unary_op">date_time_to_java_unary_op</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">indent</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
       </span>
       ) (<span className="id">eol</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">quotel</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) (<span className="id">fu</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
           date_time_unary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">d</span>:
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
           java_json
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
           java_json
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fu">fu</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
           uop_date_time_component
         </a>
       </span>{" "}
       <span className="id">part</span> =&gt;
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_unary_op1">
           mk_java_unary_op1
         </a>
       </span>{" "}
       "<span className="id">date_time_component</span>" (
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component_to_java_string">
           date_time_component_to_java_string
         </a>
       </span>{" "}
       <span className="id">part</span>){" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
           uop_date_time_from_string
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_unary_op0">
           mk_java_unary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_from_string</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
           uop_date_time_duration_from_string
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_unary_op0">
           mk_java_unary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_duration_from_string</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_javascript_unary_op">
           date_time_to_javascript_unary_op
         </a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">indent</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
       </span>
       ) (<span className="id">eol</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">quotel</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) (<span className="id">fu</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
           date_time_unary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">d</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fu">fu</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
           uop_date_time_component
         </a>
       </span>{" "}
       <span className="id">part</span> =&gt; "
       <span className="id">dateTimeComponent</span>(" ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#quotel">quotel</a>
       </span>{" "}
       ++ (
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
           toString
         </a>
       </span>{" "}
       <span className="id">part</span>) ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#quotel">quotel</a>
       </span>{" "}
       ++ ", " ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>{" "}
       ++ ")"
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
           uop_date_time_from_string
         </a>
       </span>{" "}
       =&gt; "<span className="id">dateTimeFromString</span>(" ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>{" "}
       ++ ")"
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
           uop_date_time_duration_from_string
         </a>
       </span>{" "}
       =&gt; "<span className="id">dateTimeDurationFromString</span>(" ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d">d</a>
       </span>{" "}
       ++ ")"
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_ajavascript_unary_op">
           date_time_to_ajavascript_unary_op
         </a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">fu</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
           date_time_unary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">e</span>:<span className="id">JsSyntax.expr</span>) :{" "}
       <span className="id">JsSyntax.expr</span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fu">fu</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
           uop_date_time_component
         </a>
       </span>{" "}
       <span className="id">part</span> =&gt;
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeComponent</span>" [{" "}
       <span className="id">expr_literal</span> (
       <span className="id">literal_string</span> (
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
           toString
         </a>
       </span>{" "}
       <span className="id">part</span>));{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e">e</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
           uop_date_time_from_string
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeFromString</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e">e</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
           uop_date_time_duration_from_string
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeDurationFromString</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e">e</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_plus">DATE_TIME_plus</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_plus</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt;{" "}
       <span className="id">DateTime.plus</span> <span className="id">x</span>{" "}
       <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_minus">DATE_TIME_minus</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_minus</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt;{" "}
       <span className="id">DateTime.minus</span> <span className="id">x</span>{" "}
       <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_ne">DATE_TIME_ne</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_ne</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.ne</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_lt">DATE_TIME_lt</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_lt</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.lt</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_le">DATE_TIME_le</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_le</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.le</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_gt">DATE_TIME_gt</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_gt</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.gt</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_ge">DATE_TIME_ge</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
           bool
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_ge</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt; <span className="id">DateTime.ge</span>{" "}
       <span className="id">x</span> <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_duration">DATE_TIME_DURATION_duration</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
           DATE_TIME_DURATION
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_duration</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt;{" "}
       <span className="id">DateTime.dduration</span> <span className="id">x</span>{" "}
       <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_days">DATE_TIME_DURATION_days</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float">
           float
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_days</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt;{" "}
       <span className="id">DateTime.ddays</span> <span className="id">x</span>{" "}
       <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Axiom</span>{" "}
       <span className="id">
         <a name="DATE_TIME_DURATION_seconds">DATE_TIME_DURATION_seconds</a>
       </span>{" "}
       :{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
           DATE_TIME
         </a>
       </span>{" "}
       -&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float">
           float
         </a>
       </span>
       .<br />
       <span className="id">Extract</span> <span className="id">Inlined</span>{" "}
       <span className="id">Constant</span>{" "}
       <span className="id">DATE_TIME_DURATION_seconds</span> =&gt; "(
       <span className="kwd">fun</span> <span className="id">x</span>{" "}
       <span className="id">y</span> -&gt;{" "}
       <span className="id">DateTime.dseconds</span> <span className="id">x</span>{" "}
       <span className="id">y</span>)".
       <br />
       <br />
       <span className="kwd">Inductive</span>{" "}
       <span className="id">
         <a name="date_time_binary_op">date_time_binary_op</a>
       </span>
       <br />
       &nbsp;&nbsp;:=
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_plus">bop_date_time_plus</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_minus">bop_date_time_minus</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_ne">bop_date_time_ne</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_lt">bop_date_time_lt</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_le">bop_date_time_le</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_gt">bop_date_time_gt</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_ge">bop_date_time_ge</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_duration">bop_date_time_duration</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_duration_days">bop_date_time_duration_days</a>
       </span>
       <br />
       &nbsp;&nbsp;|{" "}
       <span className="id">
         <a name="bop_date_time_duration_seconds">
           bop_date_time_duration_seconds
         </a>
       </span>
       <br />
       .<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_binary_op_tostring">date_time_binary_op_tostring</a>
       </span>{" "}
       (<span className="id">f</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
           date_time_binary_op
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#f">f</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
           bop_date_time_plus
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimePlus</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
           bop_date_time_minus
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeMinus</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
           bop_date_time_ne
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeNe</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
           bop_date_time_lt
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeLt</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
           bop_date_time_le
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeLe</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
           bop_date_time_gt
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeGt</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
           bop_date_time_ge
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeGe</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
           bop_date_time_duration
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeDiff</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
           bop_date_time_duration_days
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeDiffDays</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
           bop_date_time_duration_seconds
         </a>
       </span>{" "}
       =&gt; "<span className="id">DateTimeDiffSeconds</span>"<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="jsFunc">jsFunc</a>
       </span>{" "}
       (<span className="id">name</span> <span className="id">d1</span>{" "}
       <span className="id">d2</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           string
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;:={" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#name">name</a>
       </span>{" "}
       ++ "(" ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       ++ ", " ++{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>{" "}
       ++ ")".
       <br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_java_binary_op">date_time_to_java_binary_op</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">indent</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
       </span>
       ) (<span className="id">eol</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">quotel</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) (<span className="id">fb</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
           date_time_binary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">d1</span> <span className="id">d2</span>:
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
           java_json
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
           java_json
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fb">fb</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
           bop_date_time_plus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_plus</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
           bop_date_time_minus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_minus</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
           bop_date_time_ne
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_ne</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
           bop_date_time_lt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_lt</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
           bop_date_time_le
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_le</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
           bop_date_time_gt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_gt</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
           bop_date_time_ge
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_ge</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
           bop_date_time_duration
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_duration</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
           bop_date_time_duration_days
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_duration_days</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
           bop_date_time_duration_seconds
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#mk_java_binary_op0">
           mk_java_binary_op0
         </a>
       </span>{" "}
       "<span className="id">date_time_duration_seconds</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_javascript_binary_op">
           date_time_to_javascript_binary_op
         </a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">indent</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
       </span>
       ) (<span className="id">eol</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">quotel</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) (<span className="id">fb</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
           date_time_binary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">d1</span> <span className="id">d2</span>:
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       ) :{" "}
       <span className="id">
         <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
           String.string
         </a>
       </span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fb">fb</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
           bop_date_time_plus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointPlus</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
           bop_date_time_minus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointMinus</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
           bop_date_time_ne
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointNe</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
           bop_date_time_lt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointLt</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
           bop_date_time_le
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointLe</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
           bop_date_time_gt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointGt</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
           bop_date_time_ge
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimePointGe</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
           bop_date_time_duration
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimeDuration</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
           bop_date_time_duration_days
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimeDurationDays</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
           bop_date_time_duration_seconds
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#jsFunc">jsFunc</a>
       </span>{" "}
       "<span className="id">dateTimeDurationSeconds</span>"{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d1">d1</a>
       </span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#d2">d2</a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>. <br />
       <br />
       <span className="kwd">Definition</span>{" "}
       <span className="id">
         <a name="date_time_to_ajavascript_binary_op">
           date_time_to_ajavascript_binary_op
         </a>
       </span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">fb</span>:
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
           date_time_binary_op
         </a>
       </span>
       )<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
       <span className="id">e1</span> <span className="id">e2</span>:
       <span className="id">JsSyntax.expr</span>) :{" "}
       <span className="id">JsSyntax.expr</span>
       <br />
       &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#fb">fb</a>
       </span>{" "}
       <span className="kwd">with</span>
       <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
           bop_date_time_plus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointPlus</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
           bop_date_time_minus
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointMinus</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
           bop_date_time_ne
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointNe</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
           bop_date_time_lt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointLt</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
           bop_date_time_le
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointLe</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
           bop_date_time_gt
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointGt</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
           bop_date_time_ge
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimePointGe</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
           bop_date_time_duration
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeDuration</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
           bop_date_time_duration_days
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeDurationDays</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
           bop_date_time_duration_seconds
         </a>
       </span>{" "}
       =&gt;{" "}
       <span className="id">
         <a href="https://querycert.github.io/html/Qcert.JavaScriptAst.Lang.JavaScriptAstUtil.html#call_runtime">
           call_runtime
         </a>
       </span>{" "}
       "<span className="id">dateTimeDurationSeconds</span>" [{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e1">e1</a>
       </span>
       ;{" "}
       <span className="id">
         <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#e2">e2</a>
       </span>{" "}
       ]<br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>. <br />
       <br />
     </div>
     <div className="footer">
       <hr />
       Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
     </div>
     <a href="https://github.com/xavierleroy/coq2html/"></a>
   </div>;
   