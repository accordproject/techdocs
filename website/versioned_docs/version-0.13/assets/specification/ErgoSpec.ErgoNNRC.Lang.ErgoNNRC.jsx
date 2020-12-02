<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoNNRC.Lang.ErgoNNRC</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoNNRC.Lang.ErgoNNRC"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoNNRC.Lang.ErgoNNRC</h1>
    <div className="coq">
      <br />
      <div className="doc">
        ErgoNNRC is an IL with function tables where the body is written in NNRC.
        It is the main IL interfacing with Q*cert for code-generation.{" "}
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
        <a name="ErgoNNRC">ErgoNNRC</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="kwd">Syntax</span>.<br />
      <br />
      <div className="doc">Expression </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="nnrc_expr">nnrc_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.nnrc_expr">
          ErgoCodeGen.nnrc_expr
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="nnrc_type">nnrc_type</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      . <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="lambdan">lambdan</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkLambdaN">mkLambdaN</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="lambdan_params">lambdan_params</a>
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
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_type">nnrc_type</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="lambdan_output">lambdan_output</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_type">nnrc_type</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="lambdan_body">lambdan_body</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Function </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="nnrc_function">nnrc_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkFuncN">mkFuncN</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="functionn_name">functionn_name</a>
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
        <a name="functionn_lambda">functionn_lambda</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#lambdan">lambdan</a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Function table </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="nnrc_function_table">nnrc_function_table</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkFuncTableN">mkFuncTableN</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="function_tablen_name">function_tablen_name</a>
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
        <a name="function_tablen_funs">function_tablen_funs</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function">
          nnrc_function
        </a>
      </span>
      ; {"}"}.<br />
      <br />
      <div className="doc">Declaration </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="nnrc_declaration">nnrc_declaration</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DNExpr">DNExpr</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DNConstant">DNConstant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DNFunc">DNFunc</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function">
          nnrc_function
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="DNFuncTable">DNFuncTable</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function_table">
          nnrc_function_table
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Module. </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="nnrc_module">nnrc_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkModuleN">mkModuleN</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="modulen_namespace">modulen_namespace</a>
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
        <a name="modulen_declarations">modulen_declarations</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="kwd">Syntax</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNNRC.Semantics">Semantics</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#ErgoNNRC.Semantics">
          Semantics
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNNRC.Evaluation">Evaluation</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#ErgoNNRC.Evaluation">
          Evaluation
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#ErgoNNRC">ErgoNNRC</a>
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
  