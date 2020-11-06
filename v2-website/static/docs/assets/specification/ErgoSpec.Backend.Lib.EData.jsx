<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.Lib.EData</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.Lib.EData"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.Lib.EData</h1>
    <div className="coq">
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonRuntime.html">
          Qcert.Common.CommonRuntime
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html">
          Qcert.Utils.JSON
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Data.DatatoJSON.html">
          Qcert.Common.Data.DatatoJSON
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html">
          Qcert.Translation.NNRCtoJavaScript
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html">
          ErgoSpec.Backend.Model.ErgoBackendModel
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html">
          ErgoSpec.Backend.Model.ErgoBackendRuntime
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="EData">EData</a>
      </span>
      (<span className="id">ergomodel</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html#ErgoBackendModel">
          ErgoBackendModel
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.json">json</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#json">
          JSON.json
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.data">data</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          Data.data
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.t">t</a>
      </span>{" "}
      : <span className="kwd">Set</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jnil">jnil</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jnil">
          JSON.jnil
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jnumber">jnumber</a>
      </span>{" "}
      <span className="id">z</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jnumber">
          JSON.jnumber
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#z">z</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jbool">jbool</a>
      </span>{" "}
      <span className="id">b</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jbool">
          JSON.jbool
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#b">b</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jstring">jstring</a>
      </span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jstring">
          JSON.jstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#s">s</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jarray">jarray</a>
      </span>{" "}
      <span className="id">jl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jarray">
          JSON.jarray
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#jl">jl</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.jobject">jobject</a>
      </span>{" "}
      <span className="id">jl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jobject">
          JSON.jobject
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#jl">jl</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dunit">dunit</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dunit">
          Data.dunit
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dnat">dnat</a>
      </span>{" "}
      <span className="id">z</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          Data.dnat
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#z">z</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dfloat">dfloat</a>
      </span>{" "}
      <span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          Data.dfloat
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#f">f</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dbool">dbool</a>
      </span>{" "}
      <span className="id">b</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbool">
          Data.dbool
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#b">b</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dstring">dstring</a>
      </span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          Data.dstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#s">s</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dcoll">dcoll</a>
      </span>{" "}
      <span className="id">dl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          Data.dcoll
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#dl">dl</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.drec">drec</a>
      </span>{" "}
      <span className="id">dl</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#drec">
          Data.drec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#dl">dl</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dleft">dleft</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dleft">
          Data.dleft
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dright">dright</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dright">
          Data.dright
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dbrand">dbrand</a>
      </span>{" "}
      <span className="id">b</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbrand">
          Data.dbrand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#b">b</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dsome">dsome</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dsome">
          Data.dsome
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dnone">dnone</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnone">
          Data.dnone
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.dsuccess">dsuccess</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dleft">
          Data.dleft
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.derror">derror</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.data">data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dright">
          Data.dright
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      <div className="doc">data -&gt; JSON *string* conversion </div>
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.data_to_json_string">data_to_json_string</a>
      </span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          Data.data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#ergomodel.ergo_data_to_json_string">
          ergomodel.ergo_data_to_json_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#s">s</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EData.json_to_json_string">json_to_json_string</a>
      </span>{" "}
      <span className="id">s</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData.json">json</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jsonToJS">
          JSON.jsonToJS
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#s">s</a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData">EData</a>
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
  