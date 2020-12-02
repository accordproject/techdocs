<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.NamespaceContext</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.NamespaceContext"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.NamespaceContext</h1>
    <div className="coq">
      <br />
      <div className="doc">
        Ergo is a language for expressing contract logic.{" "}
      </div>
      <br />
      <h1> Abstract Syntax </h1>
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
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
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
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="NamespaceContext">NamespaceContext</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="NamespaceContext.NameTable">NameTable</a>
      </span>
      .<br />
      <div className="doc">
        Maps local names to absolute names for a given ErgoType module{" "}
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="name_table">name_table</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ).
      <br />
      <br />
      <div className="doc">
        Maps namespaces to the names tables for that namespace{" "}
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="namespace_table">namespace_table</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkNamespaceTable">mkNamespaceTable</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a name="namespace_table_types">namespace_table_types</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#name_table">
          name_table
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_table_constants">namespace_table_constants</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#name_table">
          name_table
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_table_functions">namespace_table_functions</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#name_table">
          name_table
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_table_contracts">namespace_table_contracts</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#name_table">
          name_table
        </a>
      </span>
      ; {"}"}.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="empty_namespace_table">empty_namespace_table</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="one_type_to_namespace_table">one_type_to_namespace_table</a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ){" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="one_constant_to_namespace_table">
          one_constant_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ){" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="one_function_to_namespace_table">
          one_function_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ){" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="one_contract_to_namespace_table">
          one_contract_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="namespace_table_app">namespace_table_app</a>
      </span>{" "}
      (<span className="id">tbl1</span> <span className="id">tbl2</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#app">app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl1">tbl1</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl2">tbl2</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#app">app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl1">tbl1</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl2">tbl2</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#app">app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl1">tbl1</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl2">tbl2</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#app">app</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl1">tbl1</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl2">tbl2</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_type_name">lookup_type_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#type_name_not_found_error">
          type_name_not_found_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">an</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">an</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_constant_name">lookup_constant_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#variable_name_not_found_error">
          variable_name_not_found_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">an</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">an</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_function_name">lookup_function_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#function_name_not_found_error">
          function_name_not_found_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">an</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">an</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="lookup_contract_name">lookup_contract_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#contract_name_not_found_error">
          contract_name_not_found_error
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">an</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">an</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_type_name">resolve_type_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">rn</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#lookup_type_name">
          lookup_type_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ns</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">ns</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_constant_name">resolve_constant_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">rn</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#lookup_constant_name">
          lookup_constant_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ns</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">ns</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_function_name">resolve_function_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">rn</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#lookup_function_name">
          lookup_function_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ns</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">ns</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="resolve_contract_name">resolve_contract_name</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) (<span className="id">rn</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">relative_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#lookup_contract_name">
          lookup_contract_name
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">ns</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name_of_local_name">
          absolute_name_of_local_name
        </a>
      </span>{" "}
      <span className="id">ns</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#rn">rn</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_type_to_namespace_table">add_type_to_namespace_table</a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_constant_to_namespace_table">
          add_constant_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_function_to_namespace_table">
          add_function_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_contract_to_namespace_table">
          add_contract_to_namespace_table
        </a>
      </span>{" "}
      (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) (<span className="id">tbl</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceTable">
          mkNamespaceTable
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_types">
          namespace_table_types
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_constants">
          namespace_table_constants
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_functions">
          namespace_table_functions
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>
      ,
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      )::
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#tbl">tbl</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_contracts">
          namespace_table_contracts
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#NamespaceContext.NameTable">
          NameTable
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enum_ctxt">enum_ctxt</a>
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
        <a name="abstract_ctxt">abstract_ctxt</a>
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
      &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="namespace_ctxt">namespace_ctxt</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkNamespaceCtxt">mkNamespaceCtxt</a>
      </span>{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_modules">namespace_ctxt_modules</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      );
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_namespace">namespace_ctxt_namespace</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_current_module">namespace_ctxt_current_module</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_enums">namespace_ctxt_enums</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="namespace_ctxt_abstract">namespace_ctxt_abstract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#abstract_ctxt">
          abstract_ctxt
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="empty_namespace_ctxt">empty_namespace_ctxt</a>
      </span>{" "}
      (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_modules">
          update_namespace_context_modules
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">update</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">t</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#update_first">
          update_first
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">t</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      ((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      ) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_current_module">
          update_namespace_context_current_module
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">update</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_current_in_scope">
          update_namespace_context_current_in_scope
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">update</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_current_both">
          update_namespace_context_current_both
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">update</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table">
          namespace_table
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update">update</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_enums">
          update_namespace_context_enums
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ectxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#enum_ctxt">
          enum_ctxt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ectxt">ectxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="update_namespace_context_abstract">
          update_namespace_context_abstract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">actxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#abstract_ctxt">
          abstract_ctxt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#actxt">actxt</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_type_to_namespace_ctxt">add_type_to_namespace_ctxt</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_modules">
          update_namespace_context_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_type_to_namespace_table">
          add_type_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_constant_to_namespace_ctxt">
          add_constant_to_namespace_ctxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_modules">
          update_namespace_context_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_constant_to_namespace_table">
          add_constant_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_function_to_namespace_ctxt">
          add_function_to_namespace_ctxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_modules">
          update_namespace_context_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_function_to_namespace_table">
          add_function_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_contract_to_namespace_ctxt">
          add_contract_to_namespace_ctxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_modules">
          update_namespace_context_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_contract_to_namespace_table">
          add_contract_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_type_to_namespace_ctxt_current">
          add_type_to_namespace_ctxt_current
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_current_both">
          update_namespace_context_current_both
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_type_to_namespace_table">
          add_type_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_constant_to_namespace_ctxt_current">
          add_constant_to_namespace_ctxt_current
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_current_both">
          update_namespace_context_current_both
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_constant_to_namespace_table">
          add_constant_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_function_to_namespace_ctxt_current">
          add_function_to_namespace_ctxt_current
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_current_both">
          update_namespace_context_current_both
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_function_to_namespace_table">
          add_function_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="add_contract_to_namespace_ctxt_current">
          add_contract_to_namespace_ctxt_current
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ln</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#local_name">local_name</a>
      </span>
      ) (<span className="id">an</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#absolute_name">absolute_name</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#update_namespace_context_current_both">
          update_namespace_context_current_both
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#add_contract_to_namespace_table">
          add_contract_to_namespace_table
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ln">ln</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#an">an</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="new_namespace_scope">new_namespace_scope</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_tbl_current_module</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_modules</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_enums</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_abstract</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_ns">prev_ns</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#no_namespace">no_namespace</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_modules">
          prev_modules
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_enums">
          prev_enums
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_abstract">
          prev_abstract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_modules">
          prev_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_ns">prev_ns</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">t</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#update_first">
          update_first
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_modules">
          prev_modules
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_ns">prev_ns</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_table_app">
          namespace_table_app
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_tbl_current_module">
          prev_tbl_current_module
        </a>
      </span>{" "}
      <span className="id">t</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_enums">
          prev_enums
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_abstract">
          prev_abstract
        </a>
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
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_ns">prev_ns</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_tbl_current_module">
          prev_tbl_current_module
        </a>
      </span>
      ) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_modules">
          prev_modules
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#empty_namespace_table">
          empty_namespace_table
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_enums">
          prev_enums
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_abstract">
          prev_abstract
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="local_namespace_scope">local_namespace_scope</a>
      </span>{" "}
      (<span className="id">ctxt</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>
      ) (<span className="id">ns</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#namespace_name">
          namespace_name
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt">
          namespace_ctxt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_ns</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_namespace">
          namespace_ctxt_namespace
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_tbl_current_module</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_module">
          namespace_ctxt_current_module
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_tbl_current_in_scope</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_current_in_scope">
          namespace_ctxt_current_in_scope
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_modules</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_modules">
          namespace_ctxt_modules
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_enums</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_enums">
          namespace_ctxt_enums
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">prev_abstract</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ctxt">ctxt</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#namespace_ctxt_abstract">
          namespace_ctxt_abstract
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#mkNamespaceCtxt">
          mkNamespaceCtxt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_modules">
          prev_modules
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#ns">ns</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_tbl_current_module">
          prev_tbl_current_module
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_tbl_current_in_scope">
          prev_tbl_current_in_scope
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_enums">
          prev_enums
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#prev_abstract">
          prev_abstract
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.NamespaceContext.html#NamespaceContext">
          NamespaceContext
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
  