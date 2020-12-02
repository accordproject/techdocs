<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.Names</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.Names"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.Names</h1>
    <div className="coq">
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names">Names</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names.ScopedNames">ScopedNames</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="local_name">local_name</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_name">namespace_name</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_prefix">namespace_prefix</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="relative_name">relative_name</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_prefix">
          namespace_prefix
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="absolute_name">absolute_name</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="absolute_name_of_local_name">absolute_name_of_local_name</a>
      </span>{" "}
      (<span className="id">ns</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">ln</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#ns">ns</a>
      </span>{" "}
      ++ "." ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#ln">ln</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="absolute_name_of_relative_name">
          absolute_name_of_relative_name
        </a>
      </span>{" "}
      (<span className="id">local_ns</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">rn</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#rn">rn</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      ,<span className="id">ln</span>) =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_ns">local_ns</a>
      </span>{" "}
      <span className="id">ln</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ns</span>,<span className="id">ln</span>) =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">ns</span> <span className="id">ln</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names.ScopedNames">
          ScopedNames
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names.ReservedNames">ReservedNames</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_main_name">clause_main_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      := "<span className="id">main</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_init_name">clause_init_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      := "<span className="id">init</span>". <br />
      <br />
      <div className="doc">This </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="this_contract">this_contract</a>
      </span>{" "}
      := "<span className="id">contract</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="this_state">this_state</a>
      </span>{" "}
      := "<span className="id">state</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="this_emit">this_emit</a>
      </span>{" "}
      := "<span className="id">emit</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="this_response">this_response</a>
      </span>{" "}
      := "<span className="id">response</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="local_state">local_state</a>
      </span>{" "}
      := "<span className="id">lstate</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="local_emit">local_emit</a>
      </span>{" "}
      := "<span className="id">lemit</span>". <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="current_time">current_time</a>
      </span>{" "}
      := "<span className="id">now</span>". <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names.ReservedNames">
          ReservedNames
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names.TypeNames">TypeNames</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="hyperledger_namespace">hyperledger_namespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "<span className="id">org.hyperledger.composer.system</span>"%
      <span className="id">string</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="stdlib_namespace">stdlib_namespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "<span className="id">org.accordproject.ergo.stdlib</span>"%
      <span className="id">string</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_request_absolute_name">default_request_absolute_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "<span className="id">org.accordproject.cicero.runtime.Request</span>".
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_response_absolute_name">
          default_response_absolute_name
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "<span className="id">org.accordproject.cicero.runtime.Response</span>".
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_emits_absolute_name">default_emits_absolute_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "<span className="id">org.hyperledger.composer.system.Event</span>".
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_state_absolute_name">default_state_absolute_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "
      <span className="id">
        org.accordproject.cicero.contract.AccordContractState
      </span>
      ".
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_error_absolute_name">default_error_absolute_name</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "
      <span className="id">org.accordproject.ergo.stdlib.ErgoErrorResponse</span>
      ".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names.TypeNames">TypeNames</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names.Misc">Misc</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_name_in_table">function_name_in_table</a>
      </span>{" "}
      (<span className="id">tname</span>:
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
      ) (<span className="id">fname</span>:
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#tname">tname</a>
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
        <a href="ErgoSpec.Common.Utils.Names.html#fname">fname</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">tname</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#tname">tname</a>
      </span>{" "}
      ++ "<span className="id">_</span>" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#fname">fname</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names.Misc">Misc</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Names.Namespaces">Namespaces</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="no_namespace">no_namespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      := "".
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names.Namespaces">Namespaces</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#Names">Names</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  