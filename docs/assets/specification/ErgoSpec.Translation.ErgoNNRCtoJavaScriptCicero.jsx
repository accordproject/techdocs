<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">
      Module ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero
    </h1>
    <div className="coq">
      <br />
      <div className="doc">Translates contract logic to calculus </div>
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html">
          ErgoSpec.Translation.ErgoNNRCtoJavaScript
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoNNRCtoJavaScriptCicero">ErgoNNRCtoJavaScriptCicero</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string_scope</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="accord_annotation">accord_annotation</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">clause_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">request_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">response_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">emit_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">state_type</span>:
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
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;"/**" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " *{" "}
      <span className="id">Execute</span> <span className="id">the</span>{" "}
      <span className="id">smart</span> <span className="id">clause</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">param</span> {"{"}
      <span className="kwd">Context</span>
      {"}"} <span className="id">context</span> - <span className="id">the</span>{" "}
      <span className="id">Accord</span> <span className="id">context</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">param</span> {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#request_type">
          request_type
        </a>
      </span>{" "}
      ++ "{"}"} <span className="id">context.request</span> -{" "}
      <span className="id">the</span> <span className="id">incoming</span>{" "}
      <span className="id">request</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">param</span> {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#response_type">
          response_type
        </a>
      </span>{" "}
      ++ "{"}"} <span className="id">context.response</span> -{" "}
      <span className="id">the</span> <span className="id">response</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">param</span> {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#emit_type">
          emit_type
        </a>
      </span>{" "}
      ++ "{"}"} <span className="id">context.emit</span> -{" "}
      <span className="id">the</span> <span className="id">emitted</span>{" "}
      <span className="id">events</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">param</span> {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#state_type">
          state_type
        </a>
      </span>{" "}
      ++ "{"}"} <span className="id">context.state</span> -{" "}
      <span className="id">the</span> <span className="id">state</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#clause_name">
          clause_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>{" "}
      <span className="kwd">then</span> " * @
      <span className="id">AccordClauseLogicInit</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>{" "}
      <span className="kwd">else</span> "")
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " * @
      <span className="id">AccordClauseLogic</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " */" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      .<br />
      <br />
      <div className="doc">
        Note: this adjusts the external interface to that currently expected in
        Cicero. Namely:
        <ul>
          <li>This serialized/deserialized ErgoType objects to/from JSON</li>
          <li>
            This applies the result from the functional call to the call as
            effects to the input context
          </li>
          <li>This turns an error response into a JavaScript exception</li>
        </ul>
      </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="wrapper_function">wrapper_function</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fun_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">request_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">response_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">emit_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">state_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">clause_name</span>:
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">state_init</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#clause_name">
          clause_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{"{"} '$
      <span className="id">class</span>': '
      <span className="id">
        org.accordproject.cicero.contract.AccordContractState
      </span>
      ', '<span className="id">stateId</span>' : '
      <span className="id">
        org.accordproject.cicero.contract.AccordContractState
      </span>
      #1' {"}"}"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">serializer.toJSON</span>(
      <span className="id">context.state</span>,{"{"}
      <span className="id">permitResourcesForRelationships</span>:
      <span className="id">true</span>
      {"}"})"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#accord_annotation">
          accord_annotation
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#clause_name">
          clause_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#request_type">
          request_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#response_type">
          response_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#emit_type">
          emit_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#state_type">
          state_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#quotel">
          quotel
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "<span className="id">
        function
      </span>{" "}
      " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#fun_name">
          fun_name
        </a>
      </span>{" "}
      ++ "(<span className="id">context</span>) {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">
        let
      </span>{" "}
      <span className="id">pcontext</span> = {"{"} '
      <span className="id">request</span>' :{" "}
      <span className="id">serializer.toJSON</span>(
      <span className="id">context.request</span>,{"{"}
      <span className="id">permitResourcesForRelationships</span>:
      <span className="id">true</span>
      {"}"}), '<span className="id">state</span>': " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#state_init">
          state_init
        </a>
      </span>{" "}
      ++ ", '<span className="id">contract</span>':{" "}
      <span className="id">serializer.toJSON</span>(
      <span className="id">context.contract</span>,{"{"}
      <span className="id">permitResourcesForRelationships</span>:
      <span className="id">true</span>
      {"}"}), '<span className="id">emit</span>':{" "}
      <span className="id">context.emit</span>, '<span className="id">now</span>':{" "}
      <span className="id">context.now</span>
      {"}"};" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " //
      <span className="id">logger.info</span>('<span className="id">ergo</span>{" "}
      <span className="id">context</span>: '+
      <span className="id">JSON.stringify</span>(
      <span className="id">pcontext</span>))" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">
        let
      </span>{" "}
      <span className="id">result</span> = <span className="id">new</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>{" "}
      ++ "()." ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#clause_name">
          clause_name
        </a>
      </span>{" "}
      ++ "(<span className="id">pcontext</span>);" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">if</span> (
      <span className="id">result.hasOwnProperty</span>('
      <span className="id">left</span>')) {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " //
      <span className="id">logger.info</span>('<span className="id">ergo</span>{" "}
      <span className="id">result</span>: '+
      <span className="id">JSON.stringify</span>(
      <span className="id">result</span>))" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "{" "}
      <span className="id">context.response</span> ={" "}
      <span className="id">serializer.fromJSON</span>(
      <span className="id">result.left.response</span>, {"{"}
      <span className="id">validate</span>: <span className="id">false</span>,{" "}
      <span className="id">acceptResourcesForRelationships</span>:{" "}
      <span className="id">true</span>
      {"}"},{"{"}
      <span className="id">permitResourcesForRelationships</span>:
      <span className="id">true</span>
      {"}"});" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "{" "}
      <span className="id">context.state</span> ={" "}
      <span className="id">serializer.fromJSON</span>(
      <span className="id">result.left.state</span>, {"{"}
      <span className="id">validate</span>: <span className="id">false</span>,{" "}
      <span className="id">acceptResourcesForRelationships</span>:{" "}
      <span className="id">true</span>
      {"}"});" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">
        let
      </span>{" "}
      <span className="id">emitResult</span> = [];" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">for</span> (
      <span className="kwd">let</span> <span className="id">i</span> = 0;{" "}
      <span className="id">i</span> &lt;{" "}
      <span className="id">result.left.emit.length</span>;{" "}
      <span className="id">i</span>++) {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "{" "}
      <span className="id">emitResult.push</span>(
      <span className="id">serializer.fromJSON</span>(
      <span className="id">result.left.emit</span>[<span className="id">i</span>],{" "}
      {"{"}
      <span className="id">validate</span>: <span className="id">false</span>,{" "}
      <span className="id">acceptResourcesForRelationships</span>:{" "}
      <span className="id">true</span>
      {"}"}));" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " {"}"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "{" "}
      <span className="id">context.emit</span> ={" "}
      <span className="id">emitResult</span>;" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="kwd">
        return
      </span>{" "}
      <span className="id">context</span>;" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " {"}"}{" "}
      <span className="kwd">else</span> {"{"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " <span className="id">
        throw
      </span>{" "}
      <span className="id">new</span> <span className="id">Error</span>(
      <span className="id">result.right.message</span>);" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ " {"}"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "{"}"}" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="apply_wrapper_function">apply_wrapper_function</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_state_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">signature</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
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
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span> '(
      <span className="id">clause_name</span>,{" "}
      <span className="id">request_type</span>,{" "}
      <span className="id">response_type</span>,{" "}
      <span className="id">emit_type</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#signature">
          signature
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">fun_name</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>{" "}
      ++ "<span className="id">_</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>{" "}
      <span className="id">clause_name</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#wrapper_function">
          wrapper_function
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#fun_name">
          fun_name
        </a>
      </span>{" "}
      <span className="id">request_type</span>{" "}
      <span className="id">response_type</span>{" "}
      <span className="id">emit_type</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_state_type">
          contract_state_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>{" "}
      <span className="id">clause_name</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#quotel">
          quotel
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="wrapper_functions">wrapper_functions</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">signatures</span>:
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) *{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#concat">
          String.concat
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">sig</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#apply_wrapper_function">
          apply_wrapper_function
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#signatures">
          signatures
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#sig">sig</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#quotel">
          quotel
        </a>
      </span>
      ) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#signatures">
          signatures
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="javascript_of_module_with_dispatch">
          javascript_of_module_with_dispatch
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">signatures</span>:
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
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
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      ) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#wrapper_functions">
          wrapper_functions
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#signatures">
          signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#quotel">
          quotel
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScript.html#javascript_of_declarations">
          javascript_of_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#modulen_declarations">
          modulen_declarations
        </a>
      </span>
      ) 0 0{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#quotel">
          quotel
        </a>
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
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#eol">eol</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="filter_signatures">filter_signatures</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">namespace</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sigs</span>:
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_signature">
          laergo_type_signature
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#sigs">
          sigs
        </a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">fname</span>,
      <span className="id">sig</span>) :: <span className="id">rest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">fname</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_main_name">
          clause_main_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">params</span> :={" "}
      <span className="id">sig</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">outtype</span> :={" "}
      <span className="id">sig</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_output">
          type_signature_output
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">emitstype</span> :={" "}
      <span className="id">sig</span>.(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_emits">
          type_signature_emits
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#params">
          params
        </a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (
      <span className="id">_</span>,<span className="id">reqtype</span>)::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">reqtype</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#outtype">
          outtype
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#emitstype">
          emitstype
        </a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">reqname</span>,{" "}
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
      <span className="id">_</span> <span className="id">outname</span>),{" "}
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
      <span className="id">_</span> <span className="id">emitsname</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>,<span className="id">reqname</span>,
      <span className="id">outname</span>,<span className="id">emitsname</span>)
      :: (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">reqname</span>,{" "}
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
      <span className="id">_</span> <span className="id">outname</span>),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">emitsname</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_emits_absolute_name">
          default_emits_absolute_name
        </a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fname</span>,<span className="id">reqname</span>,
      <span className="id">outname</span>,
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#emitsname">
          emitsname
        </a>
      </span>
      ) :: (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">_</span>, <span className="id">_</span>,{" "}
      <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">_</span> :: <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">rest</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="filter_signatures_with_state">filter_signatures_with_state</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">namespace</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_state_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sigs</span>:
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_state_type">
          contract_state_type
        </a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#sigs">
          sigs
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_state_absolute_name">
          default_state_absolute_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
      <span className="id">_</span> <span className="id">statename</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures">
          filter_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#namespace">
          namespace
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#sigs">
          sigs
        </a>
      </span>
      , <span className="id">statename</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , "")
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_module_to_javascript_cicero">
          ergoc_module_to_javascript_cicero
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_name</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">contract_state_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">ergo_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">sigs</span>:{" "}
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type_signature">
          ergo_type_signature
        </a>
      </span>
      ))
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
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#javascript_of_module_with_dispatch">
          javascript_of_module_with_dispatch
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_name">
          contract_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#filter_signatures_with_state">
          filter_signatures_with_state
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoNNRC.Lang.ErgoNNRC.html#modulen_namespace">
          modulen_namespace
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#contract_state_type">
          contract_state_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#sigs">
          sigs
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#p">p</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_eol_newline">
          ErgoCodeGen.javascript_eol_newline
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_quotel_double">
          ErgoCodeGen.javascript_quotel_double
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.ErgoNNRCtoJavaScriptCicero.html#ErgoNNRCtoJavaScriptCicero">
          ErgoNNRCtoJavaScriptCicero
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
  