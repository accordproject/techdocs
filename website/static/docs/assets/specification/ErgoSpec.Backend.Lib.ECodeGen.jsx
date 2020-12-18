<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.Lib.ECodeGen</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.Lib.ECodeGen"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.Lib.ECodeGen</h1>
    <div className="coq">
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Driver.CompLang.html">
          Qcert.Compiler.Driver.CompLang
        </a>
      </span>
      .<br />
      <br />
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
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html">
          ErgoSpec.Backend.Model.ErgoBackendRuntime
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ECodeGen">ECodeGen</a>
      </span>
      (<span className="id">ergomodel</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html#ErgoBackendModel">
          ErgoBackendModel
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr">nnrc_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          NNRC.nnrc
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_let">nnrc_expr_let</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCLet">
          cNNRC.NNRCLet
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_unshadow">nnrc_expr_unshadow</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCShadow.html#unshadow">
          cNNRCShadow.unshadow
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_subst_const_to_var">
          nnrc_expr_subst_const_to_var
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRCShadow.html#nnrc_subst_const_to_var">
          cNNRCShadow.nnrc_subst_const_to_var
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_javascript_unshadow">
          nnrc_expr_javascript_unshadow
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#nnrcToJSunshadow">
          NNRCtoJavaScript.nnrcToJSunshadow
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_java_unshadow">nnrc_expr_java_unshadow</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#nnrcToJavaunshadow">
          NNRCtoJava.nnrcToJavaunshadow
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.javascript_indent">javascript_indent</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#indent">
          NNRCtoJavaScript.indent
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.javascript_quotel_double">javascript_quotel_double</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#quotel_double">
          NNRCtoJavaScript.quotel_double
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.javascript_eol_newline">javascript_eol_newline</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#eol_newline">
          NNRCtoJavaScript.eol_newline
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.javascript_identifier_sanitizer">
          javascript_identifier_sanitizer
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#jsIdentifierSanitize">
          NNRCtoJavaScript.jsIdentifierSanitize
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.javascript">javascript</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Driver.CompLang.html#javascript">
          CompLang.javascript
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_javascript">nnrc_expr_to_javascript</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#nnrcToJS">
          NNRCtoJavaScript.nnrcToJS
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_javascript_fun">
          nnrc_expr_to_javascript_fun
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#nnrcToJSFun">
          NNRCtoJavaScript.nnrcToJSFun
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_javascript_method">
          nnrc_expr_to_javascript_method
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#nnrcToJSMethod">
          NNRCtoJavaScript.nnrcToJSMethod
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_javascript_fun_lift">
          nnrc_expr_to_javascript_fun_lift
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen.nnrc_expr">
          nnrc_expr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">input_v</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">init_indent</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
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
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen.javascript">
          javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#lift_nnrc_core">
          cNNRC.lift_nnrc_core
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#nnrcToJSFun">
          NNRCtoJavaScript.nnrcToJSFun
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#input_v">input_v</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#init_indent">init_indent</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#quotel">quotel</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#input_v">input_v</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#fname">fname</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc_to_nnrc_core">
          NNRC.nnrc_to_nnrc_core
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#e">e</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.java_indent">java_indent</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#indent">
          NNRCtoJava.indent
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.java_quotel_double">java_quotel_double</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#quotel_double">
          NNRCtoJava.quotel_double
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.java_eol_newline">java_eol_newline</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#eol_newline">
          NNRCtoJava.eol_newline
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.java">java</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Driver.CompLang.html#java">
          CompLang.java
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_java">nnrc_expr_to_java</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#nnrcToJava">
          NNRCtoJava.nnrcToJava
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.nnrc_expr_to_java_method">nnrc_expr_to_java_method</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">input_v</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen.nnrc_expr">
          nnrc_expr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">i</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">eol</span>:
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
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ivs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#nnrcToJavaFun">
          NNRCtoJava.nnrcToJavaFun
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#i">i</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#input_v">input_v</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ivs">ivs</a>
      </span>
      .<br />
      <br />
      <div className="doc">java_data -- Internally data is kept as JSON </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.java_data">java_data</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          ForeignToJava.java_json
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.mk_java_data">mk_java_data</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#mk_java_json">
          ForeignToJava.mk_java_json
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECodeGen.from_java_data">from_java_data</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen.java_data">
          java_data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJava.html#from_java_json">
          NNRCtoJava.from_java_json
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen">ECodeGen</a>
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
  