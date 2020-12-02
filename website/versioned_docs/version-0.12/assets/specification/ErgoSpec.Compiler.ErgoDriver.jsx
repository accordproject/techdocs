<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Compiler.ErgoDriver</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Compiler.ErgoDriver"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Compiler.ErgoDriver</h1>
    <div className="coq">
      <br />
      <div className="doc">Compilation paths </div>
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
        <a href="ErgoSpec.Backend.ForeignErgo.html">
          ErgoSpec.Backend.ForeignErgo
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
        <a href="ErgoSpec.Common.Utils.Misc.html">ErgoSpec.Common.Utils.Misc</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html">
          ErgoSpec.Common.Utils.NamespaceContext
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
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
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
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html">
          ErgoSpec.Common.Utils.PrintTypedData
        </a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html">
          ErgoSpec.Ergo.Lang.ErgoExpand
        </a>
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html">
          ErgoSpec.ErgoC.Lang.ErgoCTypeContext
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCType.html">
          ErgoSpec.ErgoC.Lang.ErgoCType
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html">
          ErgoSpec.ErgoC.Lang.ErgoCEvalContext
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEval.html">
          ErgoSpec.ErgoC.Lang.ErgoCEval
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html">
          ErgoSpec.Translation.CTOtoErgo
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html">
          ErgoSpec.Translation.ErgoNameResolve
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html">
          ErgoSpec.Translation.ErgotoErgoC
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html">
          ErgoSpec.Translation.ErgoCompContext
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html">
          ErgoSpec.Translation.ErgoCInline
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCtoErgoNNRC.html">
          ErgoSpec.Translation.ErgoCtoErgoNNRC
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html">
          ErgoSpec.Translation.ErgoNNRCtoJavaScript
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html">
          ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJava.html">
          ErgoSpec.Translation.ErgoNNRCtoJava
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver">ErgoDriver</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver.CompilerPre">CompilerPre</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_inputs_opt">resolve_inputs_opt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> '(
      <span className="id">ctos</span>, <span className="id">mls</span>,{" "}
      <span className="id">p</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#split_ctos_and_ergos">
          split_ctos_and_ergos
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#init_namespace_ctxt">
          init_namespace_ctxt
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_cto_packages">
          resolve_cto_packages
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">ctos</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">mls</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ctxt</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">res</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      ++{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_modules">
          resolve_ergo_modules
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ) <span className="id">mls</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">p</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">p</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ctxt</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">rp</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rp">rp</a>
      </span>
      )),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rp">rp</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_module">
          resolve_ergo_module
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ) <span className="id">p</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mls">mls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ctxt</span> =&gt; ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ), (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mls">mls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_inputs">resolve_inputs</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">res</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">op</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">op</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">p</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (<span className="id">mls</span>, <span className="id">p</span>,{" "}
      <span className="id">ctxt</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#no_ergo_module_error">
          no_ergo_module_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>) (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolve_inputs_opt">
          resolve_inputs_opt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_inputs_no_main">resolve_inputs_no_main</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">res</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">op</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">op</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">p</span> =&gt; (<span className="id">mls</span> ++ (
      <span className="id">p</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ), <span className="id">ctxt</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (<span className="id">mls</span>, <span className="id">ctxt</span>)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>) (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolve_inputs_opt">
          resolve_inputs_opt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="just_resolved_inputs">just_resolved_inputs</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">resolved</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolve_inputs_no_main">
          resolve_inputs_no_main
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#x">x</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolved">resolved</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="brand_model_from_inputs">brand_model_from_inputs</a>
      </span>{" "}
      (<span className="id">inputs</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">resolved</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#just_resolved_inputs">
          just_resolved_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">type_decls</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#modules_get_type_decls">
          modules_get_type_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolved">resolved</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#brand_model_of_declarations">
          ErgoTypetoErgoCType.brand_model_of_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#type_decls">type_decls</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver.CompilerPre">
          CompilerPre
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver.CompilerCore">CompilerCore</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="init_compilation_context_from_inputs">
          init_compilation_context_from_inputs
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rinputs</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolve_inputs">
          resolve_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">rinputs</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">p</span>, <span className="id">ns_ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rinputs">rinputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">mls</span>, <span className="id">p</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#init_compilation_context">
          init_compilation_context
        </a>
      </span>{" "}
      <span className="id">ns_ctxt</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rinputs">rinputs</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="init_compilation_context_from_inputs_no_main">
          init_compilation_context_from_inputs_no_main
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">rinputs</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#resolve_inputs_no_main">
          resolve_inputs_no_main
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">rinputs</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">ns_ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rinputs">rinputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">mls</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#init_compilation_context">
          init_compilation_context
        </a>
      </span>{" "}
      <span className="id">ns_ctxt</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rinputs">rinputs</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_ergoc">ergo_module_to_ergoc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">lm</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">p</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ergo_expand_module">
          ergo_expand_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#lm">lm</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#ergo_module_to_calculus">
          ergo_module_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergoc_inline_module">
          ergoc_inline_module
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      ) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pc">pc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">mod</span>,
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">nsctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">sctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">pctypes</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCType.html#ergoc_type_module">
          ergoc_type_module
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mod">mod</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">mod</span>,{" "}
      <span className="id">sctxt</span>') :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mod">mod</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_type_ctxt">
          compilation_context_update_type_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">sctxt</span>')){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pctypes">pctypes</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pc">pc</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_modules_to_ergoc">ergo_modules_to_ergoc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">lm</span>:
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
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_module">ergoc_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_ergoc">
          ergo_module_to_ergoc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#lm">lm</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_declaration_to_ergoc">ergo_declaration_to_ergoc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ld</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ns_ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#namespace_ctxt_of_compilation_context">
          namespace_ctxt_of_compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">am</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#resolve_ergo_declaration">
          resolve_ergo_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ns_ctxt">ns_ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ld">ld</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">amc</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_namespace">
          compilation_context_update_namespace
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#amc">amc</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">p</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ergo_expand_declaration">
          ergo_expand_declaration
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#amc">amc</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgotoErgoC.html#declaration_to_calculus">
          declaration_to_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#am">am</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_declaration_to_ergoc_inlined">
          ergo_declaration_to_ergoc_inlined
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ec</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_declaration_to_ergoc">
          ergo_declaration_to_ergoc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">inlined</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> (<span className="id">x</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">decls</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#x">x</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergoc_inline_declaration">
          ergoc_inline_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decls">decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ec">ec</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> (<span className="id">sctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) (<span className="id">decl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">nsctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCType.html#ergoc_type_decl">
          ergoc_type_decl
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">typ</span>, <span className="id">tctxt</span>') =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      ((<span className="id">typ</span>,
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_type_ctxt">
          compilation_context_update_type_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>{" "}
      <span className="id">tctxt</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inlined">inlined</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_javascript">ergo_module_to_javascript</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript">
          ErgoCodeGen.javascript
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_ergoc">
          ergo_module_to_ergoc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pn</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCtoErgoNNRC.html#ergoc_module_to_nnrc">
          ergoc_module_to_nnrc
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pc">pc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#nnrc_module_to_javascript_top">
          nnrc_module_to_javascript_top
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pn">pn</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_from_inputs">
          compilation_context_from_inputs
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">cinit</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init_compilation_context_from_inputs">
          init_compilation_context_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">init</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">p</span>, <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init">init</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">r</span> =&gt; (
      <span className="id">p</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#r">r</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_modules_to_ergoc">
          ergo_modules_to_ergoc
        </a>
      </span>{" "}
      <span className="id">ctxt</span> <span className="id">mls</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#cinit">cinit</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="compilation_context_from_inputs_no_main">
          compilation_context_from_inputs_no_main
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">cinit</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init_compilation_context_from_inputs_no_main">
          init_compilation_context_from_inputs_no_main
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">init</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">mls</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init">init</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_modules_to_ergoc">
          ergo_modules_to_ergoc
        </a>
      </span>{" "}
      <span className="id">ctxt</span> <span className="id">mls</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#cinit">cinit</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_java">ergo_module_to_java</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.java">
          ErgoCodeGen.java
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_ergoc">
          ergo_module_to_ergoc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">pn</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCtoErgoNNRC.html#ergoc_module_to_nnrc">
          ergoc_module_to_nnrc
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pc">pc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJava.html#nnrc_module_to_java_top">
          nnrc_module_to_java_top
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pn">pn</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver.CompilerCore">
          CompilerCore
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver.CompilerTop">CompilerTop</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_javascript_top">ergo_module_to_javascript_top</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#result_file">result_file</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">bm</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#brand_model_from_inputs">
          brand_model_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">bm</span> :
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">cinit</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#compilation_context_from_inputs">
          compilation_context_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">init</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">p</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init">init</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">res</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_javascript">
          ergo_module_to_javascript
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#mkResultFile">mkResultFile</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#cinit">cinit</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_java_top">ergo_module_to_java_top</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#result_file">result_file</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">bm</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#brand_model_from_inputs">
          brand_model_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">bm</span> :
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">cinit</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#compilation_context_from_inputs">
          compilation_context_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">init</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">p</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init">init</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">res</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_java">
          ergo_module_to_java
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#mkResultFile">mkResultFile</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#cinit">cinit</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_module_to_javascript_cicero_top">
          ergo_module_to_javascript_cicero_top
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#result_file">result_file</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">bm</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#brand_model_from_inputs">
          brand_model_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">bm</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#compilation_context_from_inputs">
          compilation_context_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">init</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">p</span>,{" "}
      <span className="id">ctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init">init</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">res</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ec</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_single_contract">
          lookup_single_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">c</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCInline.html#ergo_contract">
          ergo_contract
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">
        let
      </span> <span className="id">contract_name</span> := (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#c">c</a>
      </span>
      ) <span className="kwd">in</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">sigs</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_contract_signatures">
          lookup_contract_signatures
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#c">c</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">pc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_ergoc">
          ergo_module_to_ergoc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">pn</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCtoErgoNNRC.html#ergoc_module_to_nnrc">
          ergoc_module_to_nnrc
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pc">pc</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#ergoc_module_to_javascript_cicero">
          ergoc_module_to_javascript_cicero
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#contract_name">
          contract_name
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#c">c</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sigs">sigs</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#pn">pn</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ec">ec</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#mkResultFile">mkResultFile</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#res">res</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver.CompilerTop">
          CompilerTop
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver.Interpreter">Interpreter</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkREPLCtxt">mkREPLCtxt</a>
      </span>{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="repl_context_eval_ctxt">repl_context_eval_ctxt</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#eval_context">
          eval_context
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="repl_context_comp_ctxt">repl_context_comp_ctxt</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="init_repl_context">init_repl_context</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">inputs</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">lrergo_input</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mkREPLCtxt">mkREPLCtxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#empty_eval_context">
          ErgoCEvalContext.empty_eval_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#set_namespace_in_compilation_context">
          set_namespace_in_compilation_context
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">org.accordproject.ergotop</span>"%
      <span className="id">string</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#compilation_context_from_inputs_no_main">
          compilation_context_from_inputs_no_main
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#inputs">inputs</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_repl_ctxt_comp_ctxt">update_repl_ctxt_comp_ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mkREPLCtxt">mkREPLCtxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_eval_ctxt">
          repl_context_eval_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_repl_ctxt_type_ctxt">update_repl_ctxt_type_ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_comp_ctxt">
          update_repl_ctxt_comp_ctxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_type_ctxt">
          compilation_context_update_type_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nctxt">nctxt</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_repl_ctxt_eval_ctxt">update_repl_ctxt_eval_ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nctxt</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#eval_context">
          eval_context
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#mkREPLCtxt">mkREPLCtxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nctxt">nctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lift_repl_ctxt">lift_repl_ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">orig_ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">result</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_both">elift_both</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#s">s</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#orig_ctxt">orig_ctxt</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#result">result</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_repl_eval_declaration">ergoc_repl_eval_declaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ) (<span className="id">typed_decl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">nsctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> (
      <span className="id">typ</span>, <span className="id">decl</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typed_decl">typed_decl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEval.html#ergoc_eval_decl">
          ergoc_eval_decl
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_eval_ctxt">
          repl_context_eval_ctxt
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">dctxt</span>',{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ) =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typ">typ</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_eval_ctxt">
          update_repl_ctxt_eval_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">dctxt</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">dctxt</span>',{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">out</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_output">
          unpack_output
        </a>
      </span>{" "}
      <span className="id">out</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typ">typ</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">out</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_eval_ctxt">
          update_repl_ctxt_eval_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">dctxt</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">_</span>, <span className="id">_</span>,{" "}
      <span className="id">state</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">newctxt</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_eval_ctxt">
          update_repl_ctxt_eval_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#eval_context_update_global_env">
          eval_context_update_global_env
        </a>
      </span>{" "}
      <span className="id">dctxt</span>'{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>{" "}
      <span className="id">state</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ty</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">_</span>,{" "}
      <span className="id">_</span>, <span className="id">statety</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ty">ty</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">ctxt1</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_eval_ctxt">
          update_repl_ctxt_eval_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#eval_context_update_global_env">
          eval_context_update_global_env
        </a>
      </span>{" "}
      <span className="id">dctxt</span>'{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>{" "}
      <span className="id">state</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">sctxt1</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt1">ctxt1</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_ctxt">
          compilation_context_type_ctxt
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_type_ctxt">
          update_repl_ctxt_type_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt1">ctxt1</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_update_global_env">
          type_context_update_global_env
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt1">sctxt1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>{" "}
      <span className="id">statety</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_success_type">
          unpack_success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typ">typ</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">ctxt</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#typ">typ</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">out</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#newctxt">newctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_repl_eval_declarations">ergoc_repl_eval_declarations</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ) (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html#ergoc_declaration">
          ergoc_declaration
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">xy</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#last_some_pair">
          last_some_pair
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_context_fold_left">
          elift_context_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergoc_repl_eval_declaration">
          ergoc_repl_eval_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decls">decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_eval_decl_via_calculus">ergo_eval_decl_via_calculus</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_declaration_to_ergoc_inlined">
          ergo_declaration_to_ergoc_inlined
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">decls</span>, <span className="id">sctxt</span>') =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rctxt</span>' :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_comp_ctxt">
          update_repl_ctxt_comp_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">sctxt</span>' <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergoc_repl_eval_declarations">
          ergoc_repl_eval_declarations
        </a>
      </span>{" "}
      <span className="id">rctxt</span>' <span className="id">decls</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_string_of_result">ergo_string_of_result</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">result</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">nsctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_namespace">
          compilation_context_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">global_env</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_eval_ctxt">
          repl_context_eval_ctxt
        </a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCEvalContext.html#eval_context_global_env">
          eval_context_global_env
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">old_state</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          String.string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#global_env">global_env</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_typed_result">
          string_of_typed_result
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#old_state">old_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#result">result</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_repl_eval_decl">ergo_repl_eval_decl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">result</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_eval_decl_via_calculus">
          ergo_eval_decl_via_calculus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">out</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_string_of_result">
          ergo_string_of_result
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#result">result</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#out">out</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#lift_repl_ctxt">
          lift_repl_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#rctxt">rctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#result">result</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver.Interpreter">
          Interpreter
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoDriver.InterpreterHack">InterpreterHack</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="refresh_brand_model_in_comp_ctxt">
          refresh_brand_model_in_comp_ctxt
        </a>
      </span>{" "}
      {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">ctxt</span>:@
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ) :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>{" "}
      * @
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">all_decls</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_type_decls">
          compilation_context_type_decls
        </a>
      </span>
      ) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_new_type_decls">
          compilation_context_new_type_decls
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">new_bm</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#brand_model_of_declarations">
          ErgoTypetoErgoCType.brand_model_of_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#all_decls">all_decls</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">bm</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">new_ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context_update_type_declarations">
          compilation_context_update_type_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#all_decls">all_decls</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#new_ctxt">new_ctxt</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#new_bm">new_bm</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="refresh_brand_model">refresh_brand_model</a>
      </span>{" "}
      {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">ctxt</span>:@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ) :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>{" "}
      * @
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">repl_context</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>{" "}
      * @
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoCompContext.html#compilation_context">
          compilation_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">bm</span>,{" "}
      <span className="id">sctxt</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#xy">xy</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#update_repl_ctxt_comp_ctxt">
          update_repl_ctxt_comp_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#sctxt">sctxt</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#refresh_brand_model_in_comp_ctxt">
          refresh_brand_model_in_comp_ctxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#bm">bm</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context_comp_ctxt">
          repl_context_comp_ctxt
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver.InterpreterHack">
          InterpreterHack
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ErgoDriver">ErgoDriver</a>
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
  