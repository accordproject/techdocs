<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Tests.HelloWorld</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Tests.HelloWorld"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Tests.HelloWorld</h1>
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
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
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
        <a href="ErgoSpec.Common.Utils.Result.html">
          ErgoSpec.Common.Utils.Result
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
        <a href="ErgoSpec.Compiler.ErgoCompiler.html">
          ErgoSpec.Compiler.ErgoCompiler
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
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="HelloWorld">HelloWorld</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Open</span>{" "}
      <span className="kwd">Scope</span> <span className="id">string_scope</span>.
      <br />
      &nbsp;&nbsp;
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cl1">cl1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_clause">lrergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">helloworld</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,"<span className="id">Request</span>"))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,"<span className="id">Response</span>")))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">request</span>"))).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="c1">c1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_contract">lrergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,"<span className="id">TemplateModel</span>"))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cl1">cl1</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_funcd1">ergo_funcd1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">lrergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">req</span>",
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_funcd2">ergo_funcd2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">lrergo_function</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkFunc">mkFunc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_clause2">ergo_clause2</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_clause">lrergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">addFee2</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>",{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,"<span className="id">Request</span>"))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,"<span className="id">Response</span>")))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_contractd1">ergo_contractd1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_contract">lrergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#ergo_clause2">ergo_clause2</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="p1">p1</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">org.accordproject.helloworld</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">addFee</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#ergo_funcd1">ergo_funcd1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">HelloWorld</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#c1">c1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      "<span className="id">MyContract</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#ergo_contractd1">
          ergo_contractd1
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_typed_tm">cto_typed_tm</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTODeclaration">
          mkCTODeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">TemplateModel</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTOConcept</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">x</span>",(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_typed_rq">cto_typed_rq</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTODeclaration">
          mkCTODeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">Request</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTOConcept</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">x</span>",(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_typed_rs">cto_typed_rs</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTODeclaration">
          mkCTODeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">Response</span>"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTOConcept</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">x</span>",(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_model">cto_model</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTOPackage">mkCTOPackage</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_typed_tm">cto_typed_tm</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_typed_rq">cto_typed_rq</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_typed_rs">cto_typed_rs</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_typed_top">cto_typed_top</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTODeclaration">
          mkCTODeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">top</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTOConcept</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">x</span>",(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      ))::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_hl">cto_hl</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTOPackage">mkCTOPackage</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#hyperledger_namespace">
          hyperledger_namespace
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_typed_top">cto_typed_top</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ctos">ctos</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_hl">cto_hl</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#cto_model">cto_model</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_stdlib">ergo_stdlib</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      ""{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#stdlib_namespace">
          stdlib_namespace
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNameResolve.html#ergo_typed_top">
          ergo_typed_top
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mls">mls</a>
      </span>
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#ergo_stdlib">ergo_stdlib</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Tests.HelloWorld.html#HelloWorld">HelloWorld</a>
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
  