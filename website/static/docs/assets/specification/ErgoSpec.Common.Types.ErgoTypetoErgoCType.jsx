<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Types.ErgoTypetoErgoCType</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Types.ErgoTypetoErgoCType"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Types.ErgoTypetoErgoCType</h1>
    <div className="coq">
      <br />
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
        <a href="ErgoSpec.Common.Types.ErgoType.html">
          ErgoSpec.Common.Types.ErgoType
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoTypetoErgoCType">ErgoTypetoErgoCType</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="expand_hierarchy">expand_hierarchy</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
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
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="expanded_type">expanded_type</a>
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="expand_ctxt">expand_ctxt</a>
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
      * (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_hierarchy">
          expand_hierarchy
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expanded_type">
          expanded_type
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoTypetoErgoCType.ErgoTypeExpansion">ErgoTypeExpansion</a>
      </span>
      .<br />
      <div className="doc">Assumes decls sorted in topological order </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expand_extends">ergo_expand_extends</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">this</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">super</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">localtype</span>:
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
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#super">super</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">hierarchy</span>, <span className="id">etype</span>)
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#super">super</a>
      </span>
      ::<span className="id">hierarchy</span>,<span className="id">etype</span> ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#localtype">
          localtype
        </a>
      </span>
      )) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_decl_expand_extends">ergo_decl_expand_extends</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">this</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decl_desc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration_desc">
          laergo_type_declaration_desc
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl_desc">
          decl_desc
        </a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Transaction</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">rtl</span>)) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Transaction</span>"%
      <span className="id">string</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">super</span>) <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      <span className="id">super</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">rtl</span>)) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">super</span>) <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      <span className="id">super</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Event</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">rtl</span>)) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Event</span>"%
      <span className="id">string</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">super</span>) <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      <span className="id">super</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Asset</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">rtl</span>)) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Asset</span>"%
      <span className="id">string</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">super</span>) <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      <span className="id">super</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Participant</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">rtl</span>)) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      "<span className="id">org.hyperledger.composer.system.Participant</span>"%
      <span className="id">string</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">super</span>) <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends">
          ergo_expand_extends
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#this">this</a>
      </span>{" "}
      <span className="id">super</span> <span className="id">rtl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeGlobal">
          ErgoTypeGlobal
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeFunction">
          ErgoTypeFunction
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeContract">
          ErgoTypeContract
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ergo_expand_extends_in_declarations">
          ergo_expand_extends_in_declarations
        </a>
      </span>{" "}
      (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          List.fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">ctxt</span>{" "}
      <span className="id">decl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_decl_expand_extends">
          ergo_decl_expand_extends
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_type">
          type_declaration_type
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_hierarchy_from_expand">ergo_hierarchy_from_expand</a>
      </span>{" "}
      (<span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#concat">
          List.concat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xyz</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xyz">xyz</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#x">x</a>
      </span>
      )) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xyz">xyz</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ErgoTypetoErgoCType.ErgoTypeExpansion">
          ErgoTypeExpansion
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoTypetoErgoCType.ErgoTypetoErgoCType">ErgoTypetoErgoCType</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Import</span>{" "}
      <span className="id">ErgoCTypes</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enums_ctxt">enums_ctxt</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
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
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ergo_type_to_ergoc_type">ergo_type_to_ergoc_type</a>
      </span>{" "}
      (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type">laergo_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">ErgoTypeAny</a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ttop">ttop</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbottom">tbottom</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tunit">tunit</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbool">tbool</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tstring">tstring</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tfloat">tfloat</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tfloat">tfloat</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tnat">tnat</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tdateTime">
          tdateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">cr</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand">tbrand</a>
      </span>{" "}
      (<span className="id">cr</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">t</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.teither">teither</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#t">t</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tunit">tunit</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">rtl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.trec">trec</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.open_kind">
          open_kind
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort">
          rec_sort
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))) <span className="id">rtl</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort_sorted">
          rec_sort_sorted
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))) <span className="id">rtl</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort">
          rec_sort
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))) <span className="id">rtl</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq_refl">
          eq_refl
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">t</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tcoll">tcoll</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeSum">ErgoTypeSum</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">t1</span>{" "}
      <span className="id">t2</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.teither">teither</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      <span className="id">t1</span>) (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      <span className="id">t2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_ctype_decl_from_expand">ergo_ctype_decl_from_expand</a>
      </span>{" "}
      (<span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_context_decls">
          tbrand_context_decls
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xyz</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xyz">xyz</a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">rtl</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xyz">xyz</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.trec">trec</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.open_kind">
          open_kind
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort">
          rec_sort
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#rtl">rtl</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort_sorted">
          rec_sort_sorted
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#rtl">rtl</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort">
          rec_sort
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_type_to_ergoc_type">
          ergo_type_to_ergoc_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#rtl">rtl</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq_refl">
          eq_refl
        </a>
      </span>
      ))){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ErgoTypetoErgoCType.ErgoTypetoErgoCType">
          ErgoTypetoErgoCType
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoTypetoErgoCType.Translate">Translate</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Import</span>{" "}
      <span className="id">ErgoCTypes</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="brand_relation_maybe">brand_relation_maybe</a>
      </span>{" "}
      <span className="id">hierarchy</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_relation">
          tbrand_relation
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_qresult">
          eresult_of_qresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.mk_tbrand_relation">
          mk_tbrand_relation
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#hierarchy">
          hierarchy
        </a>
      </span>
      ).
      <br />
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="mk_model_type_decls">mk_model_type_decls</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#expand_ctxt">
          expand_ctxt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_context_decls">
          tbrand_context_decls
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_ctype_decl_from_expand">
          ergo_ctype_decl_from_expand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#br">br</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="label_of_decl">label_of_decl</a>
      </span>{" "}
      (<span className="id">decl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl">decl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="name_of_decl">name_of_decl</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#label_of_decl">
          label_of_decl
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="decls_table">decls_table</a>
      </span>{" "}
      (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">d</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#d">d</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_name">
          type_declaration_name
        </a>
      </span>
      ),{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#d">d</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="edge_of_decl">edge_of_decl</a>
      </span>{" "}
      (<span className="id">dt</span>:
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      )) (<span className="id">decl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">outedges</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_declaration_extend_rel">
          type_declaration_extend_rel
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl">decl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decl">decl</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#concat">
          List.concat
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">List.map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt;{" "}
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
          lookup
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#dt">dt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#xy">xy</a>
      </span>
      ) <span className="kwd">with</span> |{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      |{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">x</span> =&gt; <span className="id">x</span> ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">end</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#outedges">
          outedges
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="graph_of_decls">graph_of_decls</a>
      </span>{" "}
      (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">dt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls_table">
          decls_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#edge_of_decl">
          edge_of_decl
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#dt">dt</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="sort_decls">sort_decls</a>
      </span>{" "}
      (<span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#coq_toposort">coq_toposort</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#label_of_decl">
          label_of_decl
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#name_of_decl">
          name_of_decl
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#graph_of_decls">
          graph_of_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="brand_model_of_declarations">brand_model_of_declarations</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
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
      <span className="id">decls</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#sort_decls">
          sort_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">ctxt</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_expand_extends_in_declarations">
          ergo_expand_extends_in_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">hierarchy</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ergo_hierarchy_from_expand">
          ergo_hierarchy_from_expand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">br</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_qresult">
          eresult_of_qresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.mk_tbrand_model">
          mk_tbrand_model
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#mk_model_type_decls">
          mk_model_type_decls
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#br">br</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ctxt">ctxt</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#brand_relation_maybe">
          brand_relation_maybe
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#hierarchy">
          hierarchy
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="force_brand_model_of_declarations">
          force_brand_model_of_declarations
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">decls</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          laergo_type_declaration
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#brand_model_of_declarations">
          brand_model_of_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#decls">decls</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">s</span> =&gt; <span className="id">s</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tempty_brand_model">
          tempty_brand_model
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ErgoTypetoErgoCType.Translate">
          Translate
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoTypetoErgoCType.html#ErgoTypetoErgoCType">
          ErgoTypetoErgoCType
        </a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  