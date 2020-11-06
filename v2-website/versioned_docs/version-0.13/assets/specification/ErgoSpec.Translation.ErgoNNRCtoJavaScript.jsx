<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgoNNRCtoJavaScript</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgoNNRCtoJavaScript"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.ErgoNNRCtoJavaScript</h1>
    <div className="coq">
      <br />
      <div className="doc">Translates ErgoNNRC to JavaScript </div>
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
        <a name="ErgoNNRCtoJavaScript">ErgoNNRCtoJavaScript</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string_scope</span>.<br />
      <br />
      <div className="doc">Top-level expression </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_of_expression">javascript_of_expression</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">i</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.nnrc_expr_javascript_unshadow">
          ErgoCodeGen.nnrc_expr_javascript_unshadow
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      <div className="doc">Top-level constant </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_of_constant">javascript_of_constant</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">v</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">bind</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">i</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> '(
      <span className="id">s1</span>, <span className="id">e1</span>,{" "}
      <span className="id">t2</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.nnrc_expr_to_javascript">
          ErgoCodeGen.nnrc_expr_to_javascript
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#bind">bind</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">v0</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      ("<span className="id">v</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#v">v</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">s1</span> ++ (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_indent">
          ErgoCodeGen.javascript_indent
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>
      ) ++ "<span className="id">var</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#v0">v0</a>
      </span>{" "}
      ++ " = " ++ <span className="id">e1</span> ++ ";" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#v0">v0</a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">t2</span>).
      <br />
      <br />
      <div className="doc">Single method </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_method_of_body">javascript_method_of_body</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">input_v</span> := "<span className="id">context</span>"{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.nnrc_expr_to_javascript_method">
          ErgoCodeGen.nnrc_expr_to_javascript_method
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#input_v">
          input_v
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#e">e</a>
      </span>{" "}
      1{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#input_v">
          input_v
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#fname">fname</a>
      </span>
      ).
      <br />
      <br />
      <div className="doc">Single function </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_function_of_body">javascript_function_of_body</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_expr">nnrc_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">input_v</span> := "<span className="id">context</span>"{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_indent</span> := 0 <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.nnrc_expr_to_javascript_fun_lift">
          ErgoCodeGen.nnrc_expr_to_javascript_fun_lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#e">e</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#fname">fname</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#input_v">
          input_v
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#init_indent">
          init_indent
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_function_of_nnrc_function">
          javascript_function_of_nnrc_function
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function">
          nnrc_function
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">fname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#function_name_in_table">
          function_name_in_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#tname">tname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#functionn_name">
          functionn_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_function_of_body">
          javascript_function_of_body
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#functionn_lambda">
          functionn_lambda
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#lambdan_body">
          lambdan_body
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#fname">fname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_method_of_nnrc_function">
          javascript_method_of_nnrc_function
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function">
          nnrc_function
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">fname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#functionn_name">
          functionn_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_method_of_body">
          javascript_method_of_body
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#f">f</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#functionn_lambda">
          functionn_lambda
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#lambdan_body">
          lambdan_body
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#fname">fname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_methods_of_nnrc_functions">
          javascript_methods_of_nnrc_functions
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fl</span>:
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
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">tname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#multi_append">multi_append</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_method_of_nnrc_function">
          javascript_method_of_nnrc_function
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#fl">fl</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_class_of_nnrc_function_table">
          javascript_class_of_nnrc_function_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ft</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_function_table">
          nnrc_function_table
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">tname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#ft">ft</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#function_tablen_name">
          function_tablen_name
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">class</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#tname">tname</a>
      </span>{" "}
      ++ " {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_methods_of_nnrc_functions">
          javascript_methods_of_nnrc_functions
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#ft">ft</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#function_tablen_funs">
          function_tablen_funs
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#tname">tname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      ) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      "{"}"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="preamble">preamble</a>
      </span>{" "}
      (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;"" ++ "'<span className="id">use</span>{" "}
      <span className="id">strict</span>';" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "/*
      <span className="id">eslint</span>-<span className="id">disable</span>{" "}
      <span className="id">no</span>-<span className="id">unused</span>-
      <span className="id">vars</span>*/" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "/*
      <span className="id">eslint</span>-<span className="id">disable</span>{" "}
      <span className="id">no</span>-<span className="id">undef</span>*/" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "/*
      <span className="id">eslint</span>-<span className="id">disable</span>{" "}
      <span className="id">no</span>-<span className="id">var</span>*/" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="postamble">postamble</a>
      </span>{" "}
      (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;"" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "/*
      <span className="id">eslint</span>-<span className="id">enable</span>{" "}
      <span className="id">no</span>-<span className="id">unused</span>-
      <span className="id">vars</span>*/" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "/*
      <span className="id">eslint</span>-<span className="id">enable</span>{" "}
      <span className="id">no</span>-<span className="id">undef</span>*/" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_of_declaration">javascript_of_declaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">i</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#s">s</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#DNExpr">DNExpr</a>
      </span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_of_expression">
          javascript_of_expression
        </a>
      </span>{" "}
      <span className="id">e</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#DNConstant">DNConstant</a>
      </span>{" "}
      <span className="id">v</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_of_constant">
          javascript_of_constant
        </a>
      </span>{" "}
      <span className="id">v</span> <span className="id">e</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#DNFunc">DNFunc</a>
      </span>{" "}
      <span className="id">f</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_function_of_nnrc_function">
          javascript_function_of_nnrc_function
        </a>
      </span>{" "}
      <span className="id">f</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      ,"<span className="id">null</span>",
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#DNFuncTable">DNFuncTable</a>
      </span>{" "}
      <span className="id">ft</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_class_of_nnrc_function_table">
          javascript_class_of_nnrc_function_table
        </a>
      </span>{" "}
      <span className="id">ft</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      ,"<span className="id">null</span>",
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_of_declarations">javascript_of_declarations</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sl</span> :{" "}
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
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">i</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <span className="kwd">let</span>{" "}
      <span className="id">proc_one</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">s</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_declaration">
          nnrc_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">s0</span>,{" "}
      <span className="id">t0</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#acc">acc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">s1</span>,{" "}
      <span className="id">e1</span>, <span className="id">t1</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_of_declaration">
          javascript_of_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#s">s</a>
      </span>{" "}
      <span className="id">t0</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">s0</span> ++ <span className="id">s1</span>,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">t1</span>) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        let
      </span>{" "}
      '(<span className="id">sn</span>, <span className="id">tn</span>) :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#proc_one">
          proc_one
        </a>
      </span>{" "}
      ("",
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#t">t</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#sl">sl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">sn</span>.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="nnrc_module_to_javascript">nnrc_module_to_javascript</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_module">nnrc_module</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#preamble">
          preamble
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      ) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_of_declarations">
          javascript_of_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#modulen_declarations">
          modulen_declarations
        </a>
      </span>
      ) 0 0{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#quotel">quotel</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#postamble">
          postamble
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#eol">eol</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="nnrc_module_to_javascript_top">nnrc_module_to_javascript_top</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#nnrc_module">nnrc_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#nnrc_module_to_javascript">
          nnrc_module_to_javascript
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#p">p</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_eol_newline">
          ErgoCodeGen.javascript_eol_newline
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_quotel_double">
          ErgoCodeGen.javascript_quotel_double
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#ErgoNNRCtoJavaScript">
          ErgoNNRCtoJavaScript
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
  