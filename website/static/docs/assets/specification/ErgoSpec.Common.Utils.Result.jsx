<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Common.Utils.Result</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Common.Utils.Result"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Common.Utils.Result</h1>
    <div className="coq">
      <br />
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
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Result">Result</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="eerror">eerror</a>
      </span>{" "}
      : <span className="kwd">Set</span> :=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ESystemError">ESystemError</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="EParseError">EParseError</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ECompilationError">ECompilationError</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ETypeError">ETypeError</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="ERuntimeError">ERuntimeError</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eresult">eresult</a>
      </span>{" "}
      (<span className="id">A</span>:<span className="kwd">Set</span>) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Result">
          Result
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="esuccess">esuccess</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="efailure">efailure</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#e">e</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Result.Lift">Lift</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eolift">eolift</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#lift_failure">
          lift_failure
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift">elift</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#lift_failure_in">
          lift_failure_in
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift2">elift2</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#lift_failure_in_two">
          lift_failure_in_two
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift3">elift3</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span> <span className="id">D</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#lift_failure_in_three">
          lift_failure_in_three
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift4">elift4</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span> <span className="id">D</span>{" "}
      <span className="id">E</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#E">E</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#E">E</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">g</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#g">g</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#x">x</a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift3">elift3</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#d">d</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift5">elift5</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span> <span className="id">D</span>{" "}
      <span className="id">E</span> <span className="id">F</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#E">E</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#F">F</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#D">D</a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#E">E</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#F">F</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">x</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">g</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#g">g</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#x">x</a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift4">elift4</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#d">d</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#e">e</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="emaplift">emaplift</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">al</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#lift_failure_map">
          lift_failure_map
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#al">al</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eresult_of_option">eresult_of_option</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">a</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">e</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#result_of_option">
          result_of_option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#e">e</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift_both">elift_both</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">g</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
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
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">s</span>
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
        <a href="ErgoSpec.Common.Utils.Result.html#g">g</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift2_both">elift2_both</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">g</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror">eerror</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
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
      <span className="id">s1</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">s2</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">s1</span> <span className="id">s2</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#g">g</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
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
        <a href="ErgoSpec.Common.Utils.Result.html#g">g</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift_maybe">elift_maybe</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      )) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">s</span>) =&gt; <span className="id">s</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
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
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">e</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eolift2">eolift2</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>{" "}
      <span className="id">C</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) (<span className="id">a</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">b</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift2">elift2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#b">b</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift_fold_left">elift_fold_left</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} {"{"}
      <span className="id">B</span>:<span className="kwd">Set</span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">l</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">proc_one</span> (<span className="id">acc</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">x</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eolift">eolift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">acc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#x">x</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#proc_one">proc_one</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#l">l</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift_context_fold_left_alt">elift_context_fold_left_alt</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} {"{"}
      <span className="id">B</span>:<span className="kwd">Set</span>
      {"}"} {"{"}
      <span className="id">C</span>:<span className="kwd">Set</span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      )) (<span className="id">l</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_fold_left">
          elift_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">mc</span> =&gt; ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>
      )++((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#mc">mc</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#mc">mc</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#l">l</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="elift_context_fold_left">elift_context_fold_left</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} {"{"}
      <span className="id">B</span>:<span className="kwd">Set</span>
      {"}"} {"{"}
      <span className="id">C</span>:<span className="kwd">Set</span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      )) (<span className="id">l</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) (<span className="id">c</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#C">C</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_fold_left">
          elift_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">mc</span> =&gt; ((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>
      )++((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#mc">mc</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ),{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#mc">mc</a>
      </span>
      )) (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#l">l</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eflatmaplift">eflatmaplift</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> <span className="id">B</span>:
      <span className="kwd">Set</span>
      {"}"} (<span className="id">f</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
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
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      )) (<span className="id">al</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
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
        <a href="ErgoSpec.Common.Utils.Result.html#B">B</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift_fold_left">
          elift_fold_left
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="kwd">fun</span> <span className="id">acc</span>{" "}
      <span className="id">c</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#elift">elift</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">mc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#acc">acc</a>
      </span>{" "}
      ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#mc">mc</a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#c">c</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#al">al</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Result.Lift.qcert">qcert</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="eerror_of_qerror">eerror_of_qerror</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">qe</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#qerror">
          qerror
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#qe">qe</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#CompilationError">
          QResult.CompilationError
        </a>
      </span>{" "}
      <span className="id">msg</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="id">msg</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#TypeError">
          QResult.TypeError
        </a>
      </span>{" "}
      <span className="id">msg</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ETypeError">ETypeError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="id">msg</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#UserError">
          QResult.UserError
        </a>
      </span>{" "}
      <span className="id">msg</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">User</span> <span className="id">error</span>{" "}
      <span className="id">occured</span> <span className="kwd">in</span>{" "}
      <span className="id">backend</span>"<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="eresult_of_qresult">eresult_of_qresult</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">a</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#qresult">
          qresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Success">
          Result.Success
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#esuccess">esuccess</a>
      </span>{" "}
      <span className="id">s</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#Failure">
          Result.Failure
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">e</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eerror_of_qerror">
          eerror_of_qerror
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="id">e</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="option_of_eresult">option_of_eresult</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>:<span className="kwd">Set</span>
      {"}"} (<span className="id">a</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Result.html#option_of_result">
          option_of_result
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#a">a</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#Result.Lift.qcert">qcert</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#Result.Lift">Lift</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Result.Fmt">Fmt</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="format_error">format_error</a>
      </span>{" "}
      (<span className="id">name</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">msg</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">loc</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#loc_of_provenance">
          loc_of_provenance
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#name">name</a>
      </span>{" "}
      ++ " <span className="tactic">at</span> " ++ (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#string_of_location">
          string_of_location
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#loc">loc</a>
      </span>
      ) ++ " '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#msg">msg</a>
      </span>{" "}
      ++ "'")%<span className="id">string</span>.<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#Result.Fmt">Fmt</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">Built-in errors </div>
      &nbsp;&nbsp;<span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Result.Builtin">Builtin</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_call_not_on_contract_error">
          clause_call_not_on_contract_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Cannot</span> <span className="id">call</span>{" "}
      <span className="id">a</span> <span className="id">clause</span>{" "}
      <span className="id">except</span> <span className="id">on</span> '
      <span className="id">contract</span>'").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="use_contract_not_in_contract_error">
          use_contract_not_in_contract_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Cannot</span> <span className="id">use</span> '
      <span className="id">contract</span>' <span className="id">variable</span>{" "}
      <span className="id">outside</span> <span className="id">of</span>{" "}
      <span className="id">a</span> <span className="id">contract</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="call_clause_not_in_contract_error">
          call_clause_not_in_contract_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> <span className="id">clname</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">call</span>{" "}
      <span className="id">clause</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#clname">clname</a>
      </span>{" "}
      ++ " <span className="id">outside</span> <span className="id">of</span>{" "}
      <span className="id">a</span> <span className="id">contract</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="not_in_clause_error">not_in_clause_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Cannot</span> <span className="id">use</span> '
      <span className="id">clause</span>' <span className="id">variable</span>{" "}
      <span className="id">outside</span> <span className="id">of</span>{" "}
      <span className="id">a</span> <span className="id">clause</span>").
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="import_not_found_error">import_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">import</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="kwd">Import</span> <span className="id">not</span>{" "}
      <span className="id">found</span>: " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#import">import</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="type_name_not_found_error">type_name_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">ln</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">find</span>{" "}
      <span className="id">type</span> <span className="kwd">with</span>{" "}
      <span className="id">name</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ln">ln</a>
      </span>{" "}
      ++ "'")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="variable_name_not_found_error">variable_name_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">ln</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">find</span>{" "}
      <span className="id">variable</span> <span className="kwd">with</span>{" "}
      <span className="id">name</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ln">ln</a>
      </span>{" "}
      ++ "'")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_name_not_found_error">function_name_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">ln</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">find</span>{" "}
      <span className="id">function</span> <span className="kwd">with</span>{" "}
      <span className="id">name</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ln">ln</a>
      </span>{" "}
      ++ "'")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="contract_name_not_found_error">contract_name_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">ln</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">find</span>{" "}
      <span className="id">contract</span> <span className="kwd">with</span>{" "}
      <span className="id">name</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ln">ln</a>
      </span>{" "}
      ++ "'")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="import_name_not_found_error">import_name_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (
      <span className="id">namespace</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) (<span className="id">name_ref</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">import</span>{" "}
      <span className="id">name</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#name_ref">name_ref</a>
      </span>
      ++ "' <span className="kwd">in</span> <span className="id">CTO</span>{" "}
      <span className="kwd">with</span> <span className="id">namespace</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#namespace">namespace</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">Main clause creation errors </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="main_parameter_mismatch_error">main_parameter_mismatch_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="kwd">Parameter</span> <span className="id">mismatch</span>{" "}
      <span className="id">during</span> <span className="id">main</span>{" "}
      <span className="id">creation</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="main_at_least_one_parameter_error">
          main_at_least_one_parameter_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Cannot</span> <span className="id">create</span>{" "}
      <span className="id">main</span> <span className="kwd">if</span>{" "}
      <span className="id">not</span> <span className="tactic">at</span>{" "}
      <span className="id">least</span> <span className="id">one</span>{" "}
      <span className="id">parameter</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="main_not_a_class_error">main_not_a_class_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">cname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Cannot</span> <span className="id">create</span>{" "}
      <span className="id">main</span> <span className="kwd">for</span>{" "}
      <span className="id">non</span>-<span className="id">class</span>{" "}
      <span className="id">type</span> "++
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#cname">cname</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <div className="doc">Call errors </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_not_found_error">function_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Function</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ "' <span className="id">not</span> <span className="id">found</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_function_not_found_error">eval_function_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Function</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ "' <span className="id">not</span> <span className="id">found</span>{" "}
      <span className="id">during</span> <span className="id">eval</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_not_found_error">clause_not_found_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Clause</span> '" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ "' <span className="id">not</span> <span className="id">found</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="call_params_error">call_params_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="kwd">Parameter</span>{" "}
      <span className="id">mismatch</span> <span className="id">when</span>{" "}
      <span className="id">calling</span> <span className="id">function</span> '"
      ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ "'")).
      <br />
      <br />
      <div className="doc">Other runtime errors </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_unary_op_error">eval_unary_op_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Unary.op">
          ErgoOps.Unary.op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Unary</span> <span className="id">operation</span>{" "}
      <span className="id">failed</span>.").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_binary_op_error">eval_binary_op_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Binary.op">
          ErgoOps.Binary.op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Binary</span> <span className="id">operation</span>{" "}
      <span className="id">failed</span>.").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_if_not_boolean_error">eval_if_not_boolean_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "'<span className="id">If</span>' <span className="id">condition</span>{" "}
      <span className="id">not</span> <span className="id">boolean</span>.").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_match_let_optional_not_on_option_error">
          eval_match_let_optional_not_on_option_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Matched</span> <span className="id">LetOption</span>{" "}
      <span className="id">without</span> <span className="id">an</span>{" "}
      <span className="id">option</span>.").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="eval_foreach_not_on_array_error">
          eval_foreach_not_on_array_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ERuntimeError">
          ERuntimeError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Foreach</span> <span className="id">needs</span>{" "}
      <span className="id">to</span> <span className="id">be</span>{" "}
      <span className="id">called</span> <span className="id">on</span>{" "}
      <span className="id">an</span> <span className="id">array</span>").
      <br />
      <br />
      <div className="doc">System errors </div>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="no_ergo_module_error">no_ergo_module_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">No</span> <span className="id">input</span>{" "}
      <span className="id">ergo</span> <span className="id">found</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="built_in_function_not_found_error">
          built_in_function_not_found_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Built</span> <span className="kwd">in</span>{" "}
      <span className="id">function</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ " <span className="id">not</span> <span className="id">found</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="built_in_function_without_body_error">
          built_in_function_without_body_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> (<span className="id">fname</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Built</span> <span className="kwd">in</span>{" "}
      <span className="id">function</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ " <span className="id">does</span> <span className="id">not</span>{" "}
      <span className="id">have</span> <span className="id">a</span>{" "}
      <span className="id">body</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="TODO">TODO</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span> : <span className="kwd">Set</span>
      {"}"} <span className="id">prov</span> (<span className="id">feature</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Feature</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#feature">feature</a>
      </span>{" "}
      ++ " <span className="id">not</span> <span className="id">implemented</span>
      .")%<span className="id">string</span>).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enforce_error_content">enforce_error_content</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">msg</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
          ErgoData.data
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">message</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#format_error">format_error</a>
      </span>{" "}
      "<span className="id">Enforce</span> <span className="id">Error</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#msg">msg</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dbrand">
          ErgoData.dbrand
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_error_absolute_name">
          default_error_absolute_name
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.drec">
          ErgoData.drec
        </a>
      </span>{" "}
      (("<span className="id">message</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dstring">
          ErgoData.dstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#message">message</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="default_match_error_content">default_match_error_content</a>
      </span>{" "}
      (<span className="id">prov</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Provenance.html#provenance">provenance</a>
      </span>
      ) (<span className="id">msg</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
          ErgoData.data
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">message</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#format_error">format_error</a>
      </span>{" "}
      "<span className="id">DefaultMatch</span> <span className="id">Error</span>"{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#msg">msg</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dbrand">
          ErgoData.dbrand
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Names.html#default_error_absolute_name">
          default_error_absolute_name
        </a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.drec">
          ErgoData.drec
        </a>
      </span>{" "}
      (("<span className="id">message</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dstring">
          ErgoData.dstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#message">message</a>
      </span>
      )::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="unresolved_name_error">unresolved_name_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Unresolved</span> <span className="id">name</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="should_have_one_contract_error">
          should_have_one_contract_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ECompilationError">
          ECompilationError
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Should</span> <span className="id">have</span>{" "}
      <span className="id">exactly</span> <span className="id">one</span>{" "}
      <span className="id">contract</span>").
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="contract_in_calculus_error">contract_in_calculus_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Should</span> <span className="id">not</span>{" "}
      <span className="id">find</span> '<span className="id">contract</span>'{" "}
      <span className="kwd">in</span> <span className="id">Ergo</span>{" "}
      <span className="id">Calculus</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="clause_in_calculus_error">clause_in_calculus_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Should</span> <span className="id">not</span>{" "}
      <span className="id">find</span> '<span className="id">clause</span>'{" "}
      <span className="kwd">in</span> <span className="id">Ergo</span>{" "}
      <span className="id">Calculus</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="state_in_calculus_error">state_in_calculus_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Should</span> <span className="id">not</span>{" "}
      <span className="id">find</span> '<span className="id">state</span>'{" "}
      <span className="kwd">in</span> <span className="id">Ergo</span>{" "}
      <span className="id">Calculus</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="complex_foreach_in_calculus_error">
          complex_foreach_in_calculus_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      "<span className="id">Should</span> <span className="id">only</span>{" "}
      <span className="id">have</span> <span className="id">single</span>{" "}
      <span className="id">loop</span> <span className="id">foreach</span>{" "}
      <span className="kwd">in</span> <span className="id">Ergo</span>{" "}
      <span className="id">Calculus</span>").
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_not_inlined_error">function_not_inlined_error</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> <span className="id">fname</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Function</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ " <span className="id">did</span> <span className="id">not</span>{" "}
      <span className="id">get</span> <span className="id">inlined</span>")).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="function_in_group_not_inlined_error">
          function_in_group_not_inlined_error
        </a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} <span className="id">prov</span> <span className="id">gname</span>{" "}
      <span className="id">fname</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#eresult">eresult</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#A">A</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#efailure">efailure</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#ESystemError">ESystemError</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#prov">prov</a>
      </span>{" "}
      ("<span className="id">Clause</span> " ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#fname">fname</a>
      </span>{" "}
      ++ " <span className="kwd">in</span> <span className="id">contract</span> "
      ++{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#gname">gname</a>
      </span>{" "}
      ++ " <span className="id">did</span> <span className="id">not</span>{" "}
      <span className="id">get</span> <span className="id">inlined</span>")).
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#Result.Builtin">Builtin</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Result.html#Result">Result</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  