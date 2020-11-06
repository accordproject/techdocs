<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoC.Lang.ErgoC</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoC.Lang.ErgoC"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoC.Lang.ErgoC</h1>
    <div className="coq">
      <br />
      <div className="doc">
        ErgoC is an intermediate language for the Ergo compiler in which:
        <ul>
          <li>Clauses have been resolved to functions</li>
          <li>This* expressions have been eliminated</li>
          <li>Foreach expressions have only one dimension and no condition</li>
          <li>Match expressions have only two branches </li>
        </ul>
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
        <a name="ErgoC">ErgoC</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="kwd">Syntax</span>.<br />
      <br />
      <div className="doc">Expression </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_expr">ergoc_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="sigc">sigc</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkSigC">mkSigC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="sigc_params">sigc_params</a>
      </span>
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="sigc_output">sigc_output</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Function </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergoc_function">ergoc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkFuncC">mkFuncC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="functionc_annot">functionc_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="functionc_sig">functionc_sig</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#sigc">sigc</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="functionc_body">functionc_body</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="bodyc_annot">bodyc_annot</a>
      </span>{" "}
      (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_body">functionc_body</a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#functionc_annot">
          functionc_annot
        </a>
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
      <div className="doc">Contract </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergoc_contract">ergoc_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkContractC">mkContractC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="contractc_annot">contractc_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="contractc_clauses">contractc_clauses</a>
      </span>{" "}
      :{" "}
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>
      ); {"}"}.<br />
      <br />
      <div className="doc">Declaration </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="ergoc_declaration">ergoc_declaration</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DCExpr">DCExpr</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DCConstant">DCConstant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_expr">ergoc_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DCFunc">DCFunc</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_function">ergoc_function</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DCContract">DCContract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_contract">ergoc_contract</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Module. </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="ergoc_module">ergoc_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkModuleC">mkModuleC</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="modulec_annot">modulec_annot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="modulec_namespace">modulec_namespace</a>
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
        <a name="modulec_declarations">modulec_declarations</a>
      </span>{" "}
      :{" "}
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
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="kwd">Syntax</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoC.Semantics">Semantics</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ErgoC.Semantics">Semantics</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoC.Evaluation">Evaluation</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ErgoC.Evaluation">Evaluation</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ErgoC">ErgoC</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  