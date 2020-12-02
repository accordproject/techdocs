<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Compiler.ErgoCompiler</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Compiler.ErgoCompiler"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Compiler.ErgoCompiler</h1>
    <div className="coq">
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html">
          Qcert.Common.Brands.BrandRelation
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Version.html">ErgoSpec.Version</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html">
          ErgoSpec.Backend.ErgoBackend
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html">
          ErgoSpec.Common.Utils.Provenance
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html">ErgoSpec.Common.Utils.Names</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html">
          ErgoSpec.Common.Utils.Result
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html">ErgoSpec.Common.Utils.Ast</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html">ErgoSpec.Common.CTO.CTO</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html">
          ErgoSpec.Common.Types.ErgoType
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html">
          ErgoSpec.Ergo.Lang.ErgoSugar
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html">
          ErgoSpec.Compiler.ErgoDriver
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCompiler">ErgoCompiler</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_version">ergo_version</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Version.html#ergo_version">Version.ergo_version</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ErgoData">ErgoData</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData">
          ErgoBackend.ErgoData
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ErgoOps">ErgoOps</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps">
          ErgoBackend.ErgoOps
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ErgoCTypes">ErgoCTypes</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCTypes">
          ErgoBackend.ErgoCTypes
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Utils </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.javascript_identifier_sanitizer">
          javascript_identifier_sanitizer
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoCodeGen.javascript_identifier_sanitizer">
          ErgoBackend.ErgoCodeGen.javascript_identifier_sanitizer
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Location </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.location">location</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">
          Provenance.location
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.provenance">provenance</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.loc_of_provenance">loc_of_provenance</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          Provenance.loc_of_provenance
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_func">prov_func</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvFunc">
          Provenance.ProvFunc
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_clause">prov_clause</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvClause">
          Provenance.ProvClause
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_this_contract">prov_this_contract</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisContract">
          Provenance.ProvThisContract
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_this_clause">prov_this_clause</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisClause">
          Provenance.ProvThisClause
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_this_state">prov_this_state</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisState">
          Provenance.ProvThisState
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.prov_loc">prov_loc</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvLoc">
          Provenance.ProvLoc
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Names </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.relative_name">relative_name</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#relative_name">
          Names.relative_name
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Results </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eerror">eerror</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">Result.eerror</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.system_error">system_error</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">
          Result.ESystemError
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.parse_error">parse_error</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#EParseError">
          Result.EParseError
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.compilation_error">compilation_error</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          Result.ECompilationError
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.type_error">type_error</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ETypeError">
          Result.ETypeError
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.runtime_error">runtime_error</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          Result.ERuntimeError
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eresult">eresult</a>
      </span>{" "}
      (<span className="id">A</span>:<span className="kwd">Set</span>) :{" "}
      <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">Result.eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#A">A</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.esuccess">esuccess</a>
      </span>{" "}
      (<span className="id">A</span>:<span className="kwd">Set</span>) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eresult">
          eresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#A">A</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">Result.esuccess</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.efailure">efailure</a>
      </span>{" "}
      (<span className="id">A</span>:<span className="kwd">Set</span>) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eerror">
          eerror
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eresult">
          eresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#A">A</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">Result.efailure</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.result_file">result_file</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Misc.html#result_file">Misc.result_file</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">CTOs </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_type">cto_type</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_type">CTO.lrcto_type</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_declaration_desc">cto_declaration_desc</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration_desc">
          CTO.lrcto_declaration_desc
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_declaration">cto_declaration</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          CTO.lrcto_declaration
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_package">cto_package</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">CTO.lrcto_package</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_boolean">cto_boolean</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTO.CTOBoolean</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_string">cto_string</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOString">CTO.CTOString</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_double">cto_double</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODouble">CTO.CTODouble</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_long">cto_long</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOLong">CTO.CTOLong</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_integer">cto_integer</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOInteger">CTO.CTOInteger</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_dateTime">cto_dateTime</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODateTime">CTO.CTODateTime</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_class_ref">cto_class_ref</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">name_ref</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOClassRef">CTO.CTOClassRef</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#name_ref">name_ref</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_option">cto_option</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ct</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOOption">CTO.CTOOption</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ct">ct</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_array">cto_array</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ct</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOArray">CTO.CTOArray</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ct">ct</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_enum">cto_enum</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOEnum">CTO.CTOEnum</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_transaction">cto_transaction</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.relative_name">
          relative_name
        </a>
      </span>{" "}
      -&gt;{" "}
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
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOTransaction">
          CTO.CTOTransaction
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.cto_concept">cto_concept</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.relative_name">
          relative_name
        </a>
      </span>{" "}
      -&gt;{" "}
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
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_type">
          cto_type
        </a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTO.CTOConcept</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.mk_cto_declaration">mk_cto_declaration</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration_desc">
          cto_declaration_desc
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration">
          cto_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTODeclaration">
          CTO.mkCTODeclaration
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.mk_cto_package">mk_cto_package</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">Ast.import_decl</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_declaration">
          cto_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.cto_package">
          cto_package
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#mkCTOPackage">CTO.mkCTOPackage</a>
      </span>
      .<br />
      <br />
      <div className="doc">Types </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type">ergo_type</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type">
          ErgoType.lrergo_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration_desc">
          ErgoType.lrergo_type_declaration_desc
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_declaration">ergo_type_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          ErgoType.lrergo_type_declaration
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.laergo_type_declaration">laergo_type_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#laergo_type_declaration">
          ErgoType.laergo_type_declaration
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_any">ergo_type_any</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAny">
          ErgoType.ErgoTypeAny
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_nothing">ergo_type_nothing</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeNothing">
          ErgoType.ErgoTypeNothing
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_unit">ergo_type_unit</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeUnit">
          ErgoType.ErgoTypeUnit
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_boolean">ergo_type_boolean</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoType.ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_string">ergo_type_string</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoType.ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_double">ergo_type_double</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoType.ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_long">ergo_type_long</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoType.ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_integer">ergo_type_integer</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoType.ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_dateTime">ergo_type_dateTime</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoType.ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_class_ref">ergo_type_class_ref</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">relative_name</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoType.ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#relative_name">
          relative_name
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_option">ergo_type_option</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">et</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoType.ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#et">et</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_record">ergo_type_record</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">rec</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeRecord">
          ErgoType.ErgoTypeRecord
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#rec">rec</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_array">ergo_type_array</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">et</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoType.ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#et">et</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_enum">ergo_type_enum</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoType.ErgoTypeEnum
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_transaction">ergo_type_transaction</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.relative_name">
          relative_name
        </a>
      </span>{" "}
      -&gt;{" "}
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
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoType.ErgoTypeTransaction
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_type_concept">ergo_type_concept</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.relative_name">
          relative_name
        </a>
      </span>{" "}
      -&gt;{" "}
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
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type">
          ergo_type
        </a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoType.ErgoTypeConcept
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.mk_ergo_type_declaration">
          mk_ergo_type_declaration
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type_declaration_desc">
          ergo_type_declaration_desc
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_type_declaration">
          ergo_type_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          ErgoType.mkErgoTypeDeclaration
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Ergo </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_expr">ergo_expr</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_expr">Ergo.lrergo_expr</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_stmt">ergo_stmt</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_stmt">Ergo.lrergo_stmt</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_function">ergo_function</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_function">
          Ergo.lrergo_function
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_clause">ergo_clause</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_clause">
          Ergo.lrergo_clause
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_declaration">ergo_declaration</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          Ergo.lrergo_declaration
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_contract">ergo_contract</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_contract">
          Ergo.lrergo_contract
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_module">ergo_module</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">
          Ergo.lrergo_module
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_input">ergo_input</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_input">Ergo.lrergo_input</a>
      </span>
      .<br />
      <br />
      <div className="doc">Patterns </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ecasedata">ecasedata</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.data">
          ErgoData.data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">
          Ast.lrergo_pattern
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseData">Ast.CaseData</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ecasewildcard">ecasewildcard</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          Ast.type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">
          Ast.lrergo_pattern
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseWildcard">Ast.CaseWildcard</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ecaselet">ecaselet</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          Ast.type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">
          Ast.lrergo_pattern
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLet">Ast.CaseLet</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ecaseletoption">ecaseletoption</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#type_annotation">
          Ast.type_annotation
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#lrergo_pattern">
          Ast.lrergo_pattern
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#CaseLetOption">
          Ast.CaseLetOption
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Expressions </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ethis_contract">ethis_contract</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">
          Ergo.EThisContract
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ethis_clause">ethis_clause</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">Ergo.EThisClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ethis_state">ethis_state</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">Ergo.EThisState</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.evar">evar</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">Ergo.EVar</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#v">v</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.econst">econst</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">d</span> :
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">Ergo.EConst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#d">d</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.enone">enone</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENone">Ergo.ENone</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.esome">esome</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ESome">Ergo.ESome</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.earray">earray</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">arr</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">Ergo.EArray</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#arr">arr</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eunaryop">eunaryop</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">u</span>{" "}
      <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">Ergo.EUnaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#u">u</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ebinaryop">ebinaryop</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">b</span>{" "}
      <span className="id">e1</span> <span className="id">e2</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">Ergo.EBinaryOp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#b">b</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e2">e2</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eif">eif</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">e2</span> <span className="id">e3</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">Ergo.EIf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e2">e2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e3">e3</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.elet">elet</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">v</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">t</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">
          ErgoType.ergo_type
        </a>
      </span>
      ) (<span className="id">e1</span> <span className="id">e2</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">Ergo.ELet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#v">v</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e2">e2</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.enew">enew</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">n</span>{" "}
      <span className="id">rec</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ENew">Ergo.ENew</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#n">n</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#rec">rec</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.erecord">erecord</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">rec</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">Ergo.ERecord</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#rec">rec</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ecallfun">ecallfun</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">f</span>{" "}
      <span className="id">el</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#ECallFun">Ergo.ECallFun</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#el">el</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ematch">ematch</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">epl</span> <span className="id">ed</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EMatch">Ergo.EMatch</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e0">e0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#epl">epl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ed">ed</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eforeach">eforeach</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">efl</span>{" "}
      <span className="id">ew</span> <span className="id">er</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#EForeach">Ergo.EForeach</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#efl">efl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ew">ew</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#er">er</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.Integer">Integer</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">Z_scope</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.opuminusi">opuminusi</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ebinaryop">
          ebinaryop
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.opminusi">
          ErgoOps.Binary.Integer.opminusi
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.econst">
          econst
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.dnat">
          ErgoData.dnat
        </a>
      </span>{" "}
      0)){" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.Integer">
          Integer
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">Statements </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.sreturn">sreturn</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SReturn">Ergo.SReturn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.efunreturn">efunreturn</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.provenance">
          provenance
        </a>
      </span>
      ) <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.sthrow">sthrow</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SThrow">Ergo.SThrow</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.scallclause">scallclause</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e0</span>{" "}
      <span className="id">c</span> <span className="id">el</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SCallClause">Ergo.SCallClause</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e0">e0</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#c">c</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#el">el</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ssetstate">ssetstate</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SSetState">Ergo.SSetState</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s">s</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.semit">semit</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEmit">Ergo.SEmit</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s">s</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.slet">slet</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">v</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">t</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ergo_type">
          ErgoType.ergo_type
        </a>
      </span>
      ) (<span className="id">e1</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      ) (<span className="id">s2</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SLet">Ergo.SLet</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#v">v</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s2">s2</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.sif">sif</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e1</span>{" "}
      <span className="id">s2</span> <span className="id">s3</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SIf">Ergo.SIf</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s2">s2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s3">s3</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.senforce">senforce</a>
      </span>{" "}
      <span className="id">prov</span> (<span className="id">e1</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      ) (<span className="id">s2</span>:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>
      ) (<span className="id">s3</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SEnforce">Ergo.SEnforce</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s2">s2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s3">s3</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.smatch">smatch</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">e</span>{" "}
      <span className="id">slp</span> <span className="id">sd</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#SMatch">Ergo.SMatch</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#slp">slp</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#sd">sd</a>
      </span>
      .<br />
      <br />
      <div className="doc">Syntactic sugar </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.edot">edot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#EDot">ErgoSugar.EDot</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eoptionaldot">eoptionaldot</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#EOptionalDot">
          ErgoSugar.EOptionalDot
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.eoptionaldefault">eoptionaldefault</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#EOptionalDefault">
          ErgoSugar.EOptionalDefault
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.sreturnempty">sreturnempty</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_stmt">
          ergo_stmt
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#SReturnEmpty">
          ErgoSugar.SReturnEmpty
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.efunreturnempty">efunreturnempty</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">
          Provenance.provenance
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_expr">
          ergo_expr
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.ErgoSugar.html#EFunReturnEmpty">
          ErgoSugar.EFunReturnEmpty
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">Declarations </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dnamespace">dnamespace</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">ns</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DNamespace">Ergo.DNamespace</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ns">ns</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dimport">dimport</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">id</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">Ergo.DImport</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#id">id</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dtype">dtype</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">etd</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">Ergo.DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#etd">etd</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dstmt">dstmt</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DStmt">Ergo.DStmt</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#s">s</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dconstant">dconstant</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">v</span>{" "}
      <span className="id">ta</span> <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DConstant">Ergo.DConstant</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#v">v</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ta">ta</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dfunc">dfunc</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">fn</span>{" "}
      <span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DFunc">Ergo.DFunc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#fn">fn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#f">f</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dcontract">dcontract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cn</span>{" "}
      <span className="id">c</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DContract">Ergo.DContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#cn">cn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#c">c</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.dsetcontract">dsetcontract</a>
      </span>{" "}
      <span className="id">prov</span> <span className="id">cn</span>{" "}
      <span className="id">e</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DSetContract">Ergo.DSetContract</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#cn">cn</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#e">e</a>
      </span>
      .<br />
      <br />
      <div className="doc">Compilation </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_module_to_javascript">
          ergo_module_to_javascript
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_input">
          ergo_input
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">Result.eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.result_file">
          result_file
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_javascript_top">
          ErgoDriver.ergo_module_to_javascript_top
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_module_to_javascript_cicero">
          ergo_module_to_javascript_cicero
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_input">
          ergo_input
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">Result.eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.result_file">
          result_file
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_javascript_cicero_top">
          ErgoDriver.ergo_module_to_javascript_cicero_top
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_module_to_java">ergo_module_to_java</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_input">
          ergo_input
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">Result.eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.result_file">
          result_file
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_module_to_java_top">
          ErgoDriver.ergo_module_to_java_top
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">Brand model </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_brand_model">ergo_brand_model</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.tbrand_model">
          ErgoCTypes.tbrand_model
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_empty_brand_model">ergo_empty_brand_model</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.tempty_brand_model">
          ErgoCTypes.tempty_brand_model
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_brand_model_from_inputs">
          ergo_brand_model_from_inputs
        </a>
      </span>{" "}
      (<span className="id">inputs</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_input">
          ergo_input
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eresult">
          eresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_brand_model">
          ergo_brand_model
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#brand_model_from_inputs">
          ErgoDriver.brand_model_from_inputs
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#inputs">inputs</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_refresh_brand_model">
          ergo_refresh_brand_model
        </a>
      </span>{" "}
      {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_brand_model">
          ergo_brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">
          ErgoDriver.repl_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.eresult">
          eresult
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_brand_model">
          ergo_brand_model
        </a>
      </span>{" "}
      * @
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">
          ErgoDriver.repl_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#refresh_brand_model">
          ErgoDriver.refresh_brand_model
        </a>
      </span>
      .<br />
      <br />
      <div className="doc">REPL </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.init_repl_context">init_repl_context</a>
      </span>{" "}
      {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_brand_model">
          ergo_brand_model
        </a>
      </span>
      {"}"} (<span className="id">inputs</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_input">
          ergo_input
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= @
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#init_repl_context">
          ErgoDriver.init_repl_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#inputs">inputs</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoCompiler.ergo_repl_eval_decl">ergo_repl_eval_decl</a>
      </span>{" "}
      {"{"}
      <span className="id">bm</span>:
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_brand_model">
          ergo_brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">
          ErgoDriver.repl_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler.ergo_declaration">
          ergo_declaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">Result.eresult</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      * (@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#repl_context">
          ErgoDriver.repl_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= (@
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoDriver.html#ergo_repl_eval_decl">
          ErgoDriver.ergo_repl_eval_decl
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#bm">bm</a>
      </span>
      ).
      <br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Compiler.ErgoCompiler.html#ErgoCompiler">
          ErgoCompiler
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
  