<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.Provenance</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.Provenance"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.Provenance</h1>
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
        <a href="http://coq.inria.fr/library/Coq.ZArith.ZArith.html">ZArith</a>
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
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Provenance">Provenance</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="location_point">location_point</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkLocationPoint">mkLocationPoint</a>
      </span>{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="offset">offset</a>
      </span>
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="line">line</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="column">column</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Numbers.BinNums.html#Z">Z</a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
      <span className="id">
        <a name="location">location</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="mkLocation">mkLocation</a>
      </span>{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="loc_file">loc_file</a>
      </span>
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="loc_start">loc_start</a>
      </span>
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location_point">
          location_point
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a name="loc_end">loc_end</a>
      </span>
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location_point">
          location_point
        </a>
      </span>
      ;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="dummy_location">dummy_location</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">dummy_location_point</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#mkLocationPoint">
          mkLocationPoint
        </a>
      </span>{" "}
      (-1) (-1) (-1) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#mkLocation">mkLocation</a>
      </span>{" "}
      ""{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_location_point">
          dummy_location_point
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_location_point">
          dummy_location_point
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="provenance">provenance</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvFunc">ProvFunc</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">(* Compiled from function *)</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvClause">ProvClause</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">(* Compiled from clause *)</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvThisContract">ProvThisContract</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">
        (* Compiled from{" "}
        <span className="bracket">
          <span className="id">contract</span>
        </span>{" "}
        *)
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvThisClause">ProvThisClause</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">
        (* Compiled from{" "}
        <span className="bracket">
          <span className="id">clause</span>
        </span>{" "}
        *)
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvThisState">ProvThisState</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">
        (* Compiled from{" "}
        <span className="bracket">
          <span className="id">state</span>
        </span>{" "}
        *)
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ProvLoc">ProvLoc</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      <span className="docright">(* Compiled from others *)</span>
      <br />
      &nbsp;&nbsp;.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="dummy_provenance">dummy_provenance</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvLoc">ProvLoc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#dummy_location">
          dummy_location
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="loc_of_provenance">loc_of_provenance</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvFunc">ProvFunc</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvClause">ProvClause</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">_</span> =&gt;{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisContract">
          ProvThisContract
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt; <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisClause">
          ProvThisClause
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt; <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisState">
          ProvThisState
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt; <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvLoc">ProvLoc</a>
      </span>{" "}
      <span className="id">loc</span> =&gt; <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_contract">is_contract</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisContract">
          ProvThisContract
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_clause">is_clause</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisClause">
          ProvThisClause
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="is_state">is_state</a>
      </span>{" "}
      <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#ProvThisState">
          ProvThisState
        </a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_location_point">string_of_location_point</a>
      </span>{" "}
      (<span className="id">lp</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location_point">
          location_point
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
      &nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#lp">lp</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#line">line</a>
      </span>
      )) ++ ":" ++ (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#lp">lp</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#column">column</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_of_location">string_of_location</a>
      </span>{" "}
      (<span className="id">loc</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#location">location</a>
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
      <span className="id">f</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc">loc</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_file">loc_file</a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">file</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#f">f</a>
      </span>{" "}
      ""%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span> ""%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span> (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#f">f</a>
      </span>{" "}
      ++ " ")%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#file">file</a>
      </span>{" "}
      ++
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#string_of_location_point">
          string_of_location_point
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc">loc</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_start">loc_start</a>
      </span>
      )) ++ "-" ++
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#string_of_location_point">
          string_of_location_point
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc">loc</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_end">loc_end</a>
      </span>
      )).
      <br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#Provenance">Provenance</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  