<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.ErgoC.Lang.ErgoCTypeContext</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.ErgoC.Lang.ErgoCTypeContext"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.ErgoC.Lang.ErgoCTypeContext</h1>
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
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
        <a href="ErgoSpec.ErgoC.Lang.ErgoC.html">ErgoSpec.ErgoC.Lang.ErgoC</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCTypeContext">ErgoCTypeContext</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">br</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}.<br />
      &nbsp;&nbsp;<span className="kwd">Import</span>{" "}
      <span className="id">ErgoCTypes</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="type_context">type_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkEvalContext">mkEvalContext</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="type_context_global_env">type_context_global_env</a>
      </span>{" "}
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
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="type_context_local_env">type_context_local_env</a>
      </span>{" "}
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
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_context_update_global_env">
          type_context_update_global_env
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#mkEvalContext">
          mkEvalContext
        </a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#name">name</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#value">value</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_global_env">
          type_context_global_env
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_local_env">
          type_context_local_env
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_context_update_local_env">type_context_update_local_env</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">value</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#mkEvalContext">
          mkEvalContext
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_global_env">
          type_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#name">name</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#value">value</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_local_env">
          type_context_local_env
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_context_set_local_env">type_context_set_local_env</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">new_local_env</span> :{" "}
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
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context">
          type_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#mkEvalContext">
          mkEvalContext
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#type_context_global_env">
          type_context_global_env
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#new_local_env">
          new_local_env
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="empty_type_context">empty_type_context</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#mkEvalContext">
          mkEvalContext
        </a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#current_time">current_time</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tdateTime">
          tdateTime
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_contract">this_contract</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tunit">tunit</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_state">this_state</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tunit">tunit</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#this_emit">this_emit</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tcoll">tcoll</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.tbottom">tbottom</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.ErgoC.Lang.ErgoCTypeContext.html#ErgoCTypeContext">
          ErgoCTypeContext
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
  