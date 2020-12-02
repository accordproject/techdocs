<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.PrintTypedData</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.PrintTypedData"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.PrintTypedData</h1>
    <div className="coq">
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.Ascii.html">Ascii</a>
      </span>
      .<br />
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html">
          ErgoSpec.Common.Utils.NamespaceContext
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">JsAst.JsNumber</span>. <br />
      <br />
      <span className="kwd">Local</span> <span className="kwd">Open</span>{" "}
      <span className="kwd">Scope</span> <span className="id">string</span>.<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="PrintTypedData">PrintTypedData</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="print_brand">print_brand</a>
      </span>{" "}
      (<span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">b</span>:
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
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#get_local_part">
          get_local_part
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#b">b</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; "~" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#b">b</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">local_name</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#resolve_type_name">
          resolve_type_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,<span className="id">local_name</span>) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">resolved_b</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">resolved_b</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#b">b</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">local_name</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"~" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#b">b</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"~" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#b">b</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="PrintTypedData.Data">Data</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unpack_output">unpack_output</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">out</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dleft">
          dleft
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#drec">
          drec
        </a>
      </span>{" "}
      (("<span className="id">response</span>",{" "}
      <span className="id">response</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">state</span>", <span className="id">state</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">emit</span>",{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">emits</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">response</span>, <span className="id">emits</span>,{" "}
      <span className="id">state</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fmt_nl">fmt_nl</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#String">
          String.String
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.Ascii.html#ascii_of_N">
          ascii_of_N
        </a>
      </span>{" "}
      10){" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#EmptyString">
          EmptyString
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="fmt_dq">fmt_dq</a>
      </span>{" "}
      := """".
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="string_of_data">string_of_data</a>
      </span>{" "}
      (<span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">d</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">jsonify</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data_to_json_string">
          ErgoData.data_to_json_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_dq">fmt_dq</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">string_of_rec</span> :{" "}
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
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">fun</span> <span className="id">rec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("
      {"{"}"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#concat">
          String.concat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
      "<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">item</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#item">item</a>
      </span>
      ) ++ ": " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#item">item</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rec">rec</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      "{"}"}") <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          dunit
        </a>
      </span>{" "}
      =&gt; "<span className="id">unit</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      <span className="id">z</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Digits.html#Z_to_string10">
          Z_to_string10
        </a>
      </span>{" "}
      <span className="id">z</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      <span className="id">f</span> =&gt; <span className="id">to_string</span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbool">
          dbool
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>{" "}
      =&gt; "<span className="id">true</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbool">
          dbool
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>{" "}
      =&gt; "<span className="id">false</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          dstring
        </a>
      </span>{" "}
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#jsonify">jsonify</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          dstring
        </a>
      </span>{" "}
      <span className="id">s</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">arr</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"["
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#concat">
          String.concat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
      "<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>
      ) <span className="id">arr</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ "]"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dleft">
          dleft
        </a>
      </span>{" "}
      <span className="id">s</span> =&gt; "<span className="id">some</span>(" ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">s</span>) ++ ")"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dright">
          dright
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; "<span className="id">none</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbrand">
          dbrand
        </a>
      </span>{" "}
      (<span className="id">b</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ) <span className="id">d</span>' =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#print_brand">
          print_brand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">b</span> ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">d</span>')
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbrand">
          dbrand
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> =&gt; "???
      <span className="id">more</span> <span className="id">than</span>{" "}
      <span className="id">one</span> <span className="id">brand</span>???"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#drec">
          drec
        </a>
      </span>{" "}
      <span className="id">r</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_rec">
          string_of_rec
        </a>
      </span>{" "}
      <span className="id">r</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          ErgoEnhancedModel.enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">dt</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">dateTime</span>(""" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_to_string">
          DateTimeModelPart.DATE_TIME_to_string
        </a>
      </span>{" "}
      <span className="id">dt</span> ++ """)"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          ErgoEnhancedModel.enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">dti</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">duration</span>(" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_to_string">
          DateTimeModelPart.DATE_TIME_DURATION_to_string
        </a>
      </span>{" "}
      <span className="id">dti</span> ++ ")"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; "???
      <span className="id">UnknownForeign</span>???"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#PrintTypedData.Data">
          Data
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="kwd">Types</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Import</span>{" "}
      <span className="id">ErgoCTypes</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="rtype_to_string">rtype_to_string</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">t</span> : <span className="id">rtype</span>₀) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Bottom</span>₀
      =&gt; "<span className="id">Nothing</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Top</span>₀ =&gt;
      "<span className="id">Any</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Unit</span>₀
      =&gt; "<span className="id">Unit</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Nat</span>₀ =&gt;
      "<span className="id">Integer</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Float</span>₀
      =&gt; "<span className="id">Double</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Bool</span>₀
      =&gt; "<span className="id">Boolean</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">String</span>₀
      =&gt; "<span className="id">String</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Coll</span>₀{" "}
      <span className="id">r</span>' =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">r</span>') ++ "[]"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Rec</span>₀{" "}
      <span className="id">k</span> <span className="id">srl</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">recend</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">k</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Closed">
          Closed
        </a>
      </span>{" "}
      =&gt; ""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="kwd">Open</span> =&gt; " .."
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{"{"}" ++
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#concat">
          String.concat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(",
      ")
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">sr</span> =&gt; ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#sr">sr</a>
      </span>
      ) ++ ": " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#sr">sr</a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">srl</span>)) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#recend">recend</a>
      </span>{" "}
      ++ "{"}"}"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Either
      </span>₀ <span className="id">tl</span> <span className="id">tr</span> =&gt;
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">tl</span>) ++ "?"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Arrow
      </span>₀ <span className="id">tin</span> <span className="id">tout</span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">tin</span>) ++ " -&gt; " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">tout</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">Brand</span>₀ (
      <span className="id">b</span>::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ) =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#print_brand">
          print_brand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">b</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Brand
      </span>₀ <span className="id">_</span> =&gt; "~" ++ "[
      <span className="id">multiple</span>]"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Foreign
      </span>₀{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          ErgoEnhancedModel.enhancedDateTime
        </a>
      </span>{" "}
      =&gt; "<span className="id">DateTime</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Foreign
      </span>₀{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          ErgoEnhancedModel.enhancedDateTimeInterval
        </a>
      </span>{" "}
      =&gt; "<span className="id">Duration</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        Foreign
      </span>₀ <span className="id">_</span> =&gt; "(
      <span className="id">unknown</span> <span className="id">foreign</span>{" "}
      <span className="id">type</span>)"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_type_to_string">ergoc_type_to_string</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">t</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ectype">ectype</a>
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
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#rtype_to_string">
          rtype_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ergoc_type_unpack">
          ergoc_type_unpack
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#t">t</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_result_type">string_of_result_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">result</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#result">result</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; ""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt; " : " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#ergoc_type_to_string">
          ergoc_type_to_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">typ</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unpack_error">unpack_error</a>
      </span>{" "}
      <span className="id">nsctxt</span> <span className="id">kind</span>{" "}
      <span className="id">out</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_provenance">
          dummy_provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">Cannot</span> <span className="id">unpack</span>{" "}
      <span className="id">type</span>: "<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++
      " (<span className="id">expected</span> "<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#kind">kind</a>
      </span>{" "}
      ++ ")").
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unpack_failure_type">unpack_failure_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">out</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">osuccess</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.unteither">
          unteither
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">tl</span>, <span className="id">tr</span>) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">tl</span>, <span className="id">tr</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_option">
          eresult_of_option
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#osuccess">osuccess</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_error">
          unpack_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      "<span className="id">either</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unpack_success_type">unpack_success_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">out</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">osuccess</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.unteither">
          unteither
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">tl</span>, <span className="id">tr</span>) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">tl</span>, <span className="id">tr</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">success</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_option">
          eresult_of_option
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#osuccess">osuccess</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_error">
          unpack_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      "<span className="id">either</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">response</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">success</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_option">
          eresult_of_option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ergoc_type_infer_unary_op">
          ergoc_type_infer_unary_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">response</span>"){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_error">
          unpack_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      "<span className="id">response</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">emit</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">success</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_option">
          eresult_of_option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ergoc_type_infer_unary_op">
          ergoc_type_infer_unary_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">emit</span>"){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_error">
          unpack_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      "<span className="id">emit</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">state</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">success</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult_of_option">
          eresult_of_option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes.ergoc_type_infer_unary_op">
          ergoc_type_infer_unary_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">state</span>"){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_error">
          unpack_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      "<span className="id">state</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      ))) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#success">success</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">r</span>{" "}
      <span className="id">e</span> <span className="id">s</span> =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#r">r</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#e">e</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#s">s</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#response">response</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#emit">emit</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#state">state</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unpack_output_type">unpack_output_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">out</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">x</span>{" "}
      <span className="id">y</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">respt</span>,
      <span className="id">emitt</span>,<span className="id">statet</span>) :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#x">x</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">respt</span>,<span className="id">emitt</span>,
      <span className="id">statet</span>,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#y">y</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_success_type">
          unpack_success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_failure_type">
          unpack_failure_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#out">out</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="kwd">Types</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="PrintTypedData.Both">Both</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Context</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_response">string_of_response</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">response</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">response_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span className="id">Response</span>. "
      ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#response">response</a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#response_type">
          response_type
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_emits">string_of_emits</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">emits</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">emit_type</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#emits">emits</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt; ""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">e1</span> ::{" "}
      <span className="id">erest</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_right">
          fold_right
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">new</span>{" "}
      <span className="id">old</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#old">old</a>
      </span>{" "}
      ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_nl">fmt_nl</a>
      </span>{" "}
      ++ "<span className="id">Emit</span>. " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#new">new</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;("
      <span className="id">Emit</span>. " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">e1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>
      ) <span className="id">erest</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#emit_type">
          emit_type
        </a>
      </span>
      ) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_nl">fmt_nl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_state">string_of_state</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">old_state</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">new_state</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">state_type</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">jsonify</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#old_state">
          old_state
        </a>
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
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_nl">fmt_nl</a>
      </span>{" "}
      ++ "<span className="id">State</span>. " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#jsonify">jsonify</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#new_state">
          new_state
        </a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#state_type">
          state_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">actual_old_state</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data_eq_dec">
          Data.data_eq_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#new_state">
          new_state
        </a>
      </span>{" "}
      <span className="id">actual_old_state</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> ""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_nl">fmt_nl</a>
      </span>{" "}
      ++ "<span className="id">State</span>. " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#jsonify">jsonify</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#new_state">
          new_state
        </a>
      </span>
      ) ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#state_type">
          state_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_typed_data">string_of_typed_data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">old_state</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">data</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">typ</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergoc_type">ergoc_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#data">data</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dright">
          dright
        </a>
      </span>{" "}
      <span className="id">msg</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">
        let
      </span> <span className="id">failure_type</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_failure_type">
          unpack_failure_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">f</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      <span className="id">Failure</span>. " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">msg</span>) ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_result_type">
          string_of_result_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#failure_type">
          failure_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">out</span> =&gt;
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
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">response</span>, <span className="id">emits</span>,{" "}
      <span className="id">state</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> '(<span className="id">response_type</span>
      , <span className="id">emit_type</span>,{" "}
      <span className="id">state_type</span>) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#unpack_success_type">
          unpack_success_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">r</span>,<span className="id">e</span>,
      <span className="id">s</span>) =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">r</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">e</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">s</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_emits">
          string_of_emits
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">emits</span> <span className="id">emit_type</span>)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_response">
          string_of_response
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">response</span>{" "}
      <span className="id">response_type</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_state">
          string_of_state
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#old_state">
          old_state
        </a>
      </span>{" "}
      <span className="id">state</span> <span className="id">state_type</span>)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_data">
          string_of_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">out</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_typed_result">string_of_typed_result</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">nsctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">old_state</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ergo_data">ergo_data</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">result</span> :{" "}
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
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#result">result</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">_</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ) =&gt; ""
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">typ</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">dat</span>) =&gt; (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#string_of_typed_data">
          string_of_typed_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#nsctxt">nsctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#old_state">
          old_state
        </a>
      </span>{" "}
      <span className="id">dat</span> <span className="id">typ</span>) ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#fmt_nl">fmt_nl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#PrintTypedData.Both">
          Both
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.PrintTypedData.html#PrintTypedData">
          PrintTypedData
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
  