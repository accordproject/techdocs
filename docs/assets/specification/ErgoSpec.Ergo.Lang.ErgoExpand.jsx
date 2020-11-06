<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Ergo.Lang.ErgoExpand</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Ergo.Lang.ErgoExpand"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Ergo.Lang.ErgoExpand</h1>
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
        <a href="ErgoSpec.Common.Utils.Names.html">ErgoSpec.Common.Utils.Names</a>
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
        <a name="ErgoExpand">ErgoExpand</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="create_call">create_call</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">cname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">v0</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparam0</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparamrest</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">callparams</span>:
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
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">zipped</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#zip">zip</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#callparams">callparams</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparam0">effparam0</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparamrest">effparamrest</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#zipped">zipped</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#main_parameter_mismatch_error">
          main_parameter_mismatch_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">SCallClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#cname">cname</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#v0">v0</a>
      </span>{" "}
      ::{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparamrest">effparamrest</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="case_of_sig">case_of_sig</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">v0</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparam0</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparamrest</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">s</span>: (
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
      )) :{" "}
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
        <a href="ErgoSpec.Common.Utils.Ast.html#ergo_pattern">ergo_pattern</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">cname</span> := (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#s">s</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">callparams</span> := (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#s">s</a>
      </span>
      ).(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#type_signature_params">
          type_signature_params
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#callparams">callparams</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#main_at_least_one_parameter_error">
          main_at_least_one_parameter_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">param0</span>,{" "}
      <span className="id">et</span>)::<span className="id">otherparams</span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">et</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">type0</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLet">CaseLet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#v0">v0</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">type0</span>),
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#x">x</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#create_call">create_call</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#cname">cname</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#v0">v0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparam0">effparam0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparamrest">effparamrest</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#callparams">callparams</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="match_of_sigs">match_of_sigs</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">v0</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparam0</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparamrest</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ss</span>:
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
      )) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_stmt">laergo_stmt</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">s</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">SMatch</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparam0">effparam0</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#s">s</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">SThrow</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#default_match_error_content">
          default_match_error_content
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      ""))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eflatmaplift">eflatmaplift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#case_of_sig">case_of_sig</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#v0">v0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparam0">effparam0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparamrest">effparamrest</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ss">ss</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="match_of_sigs_top">match_of_sigs_top</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">effparams</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ergo_expr">ergo_expr</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ss</span>:
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
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparams">effparams</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#main_at_least_one_parameter_error">
          main_at_least_one_parameter_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">effparam0</span> ::{" "}
      <span className="id">effparamrest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">v0</span> := ("$"++
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_main_name">
          clause_main_name
        </a>
      </span>
      )%<span className="id">string</span> <span className="kwd">in</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#match_of_sigs">
          match_of_sigs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#v0">v0</a>
      </span>{" "}
      <span className="id">effparam0</span>{" "}
      <span className="id">effparamrest</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ss">ss</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="filter_init">filter_init</a>
      </span>{" "}
      (<span className="id">sigs</span>:
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
      )) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#filter">
          filter
        </a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">s</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#s">s</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#sigs">sigs</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="create_main_clause_for_contract">
          create_main_clause_for_contract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">sigs</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lookup_contract_signatures">
          lookup_contract_signatures
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">sigs</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#filter_init">filter_init</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#sigs">sigs</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">effparams</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      "<span className="id">request</span>"%<span className="id">string</span> ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">disp</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_main_name">
          clause_main_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>"%<span className="id">string</span>,
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_request_absolute_name">
          default_request_absolute_name
        </a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#disp">disp</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#match_of_sigs_top">
          match_of_sigs_top
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#effparams">effparams</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#sigs">sigs</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_state">default_state</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBrand">
          OpBrand
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_state_absolute_name">
          default_state_absolute_name
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#drec">
          drec
        </a>
      </span>{" "}
      (("<span className="id">stateId</span>",
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          dstring
        </a>
      </span>{" "}
      "1") ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )))%<span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="create_init_clause_for_contract">
          create_init_clause_for_contract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_clause">laergo_clause</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">effparams</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      "<span className="id">request</span>"%<span className="id">string</span> ::{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_body</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">SSetState</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#default_state">
          default_state
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkClause">mkClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeSignature">
          mkErgoTypeSignature
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(("
      <span className="id">request</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_request_absolute_name">
          default_request_absolute_name
        </a>
      </span>
      )::
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
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      ))
      <br />
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
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_emits_absolute_name">
          default_emits_absolute_name
        </a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#init_body">init_body</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_init_clause_to_contract">add_init_clause_to_contract</a>
      </span>{" "}
      (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_annot">contract_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_dec">
          in_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_init_name">
          clause_init_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">cl</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#cl">cl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">init_clause</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#create_init_clause_for_contract">
          create_init_clause_for_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_template">
          contract_template
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#init_clause">init_clause</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_main_clause_to_contract">add_main_clause_to_contract</a>
      </span>{" "}
      (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_contract">laergo_contract</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prov</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_annot">contract_annot</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_dec">
          in_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#clause_main_name">
          clause_main_name
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">cl</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#cl">cl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#clause_name">clause_name</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">
        fun
      </span> <span className="id">main_clause</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkContract">mkContract</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_template">
          contract_template
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_state">contract_state</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#contract_clauses">
          contract_clauses
        </a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#main_clause">main_clause</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#create_main_clause_for_contract">
          create_main_clause_for_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#c">c</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expand_declaration">ergo_expand_declaration</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">DNamespace</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">DStmt</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">DConstant</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">DFunc</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">cn</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">cd</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#add_init_clause_to_contract">
          add_init_clause_to_contract
        </a>
      </span>{" "}
      <span className="id">c</span> <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">dd</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">DContract</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#decl_annot">decl_annot</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      ) <span className="id">cn</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#dd">dd</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#add_main_clause_to_contract">
          add_main_clause_to_contract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#cd">cd</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">DSetContract</a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expand_declarations">ergo_expand_declarations</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_declaration">
          laergo_declaration
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ergo_expand_declaration">
          ergo_expand_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#dl">dl</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">
        Pre-processing. At the moment only add main clauses when missing{" "}
      </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expand_module">ergo_expand_module</a>
      </span>{" "}
      (<span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="kwd">fun</span>{" "}
      <span className="id">ds</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_annot">module_annot</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_file">module_file</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_namespace">
          module_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ds">ds</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ergo_expand_declarations">
          ergo_expand_declarations
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#module_declarations">
          module_declarations
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_expand_modules">ergo_expand_modules</a>
      </span>{" "}
      (<span className="id">pl</span>:
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
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#emaplift">emaplift</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ergo_expand_module">
          ergo_expand_module
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#pl">pl</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoExpand.html#ErgoExpand">ErgoExpand</a>
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
  