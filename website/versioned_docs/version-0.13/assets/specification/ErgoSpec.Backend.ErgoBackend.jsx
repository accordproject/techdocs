<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.ErgoBackend</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.ErgoBackend"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.ErgoBackend</h1>
    <div className="coq">
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Export</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Utils.html">
          Qcert.Utils.Utils
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Export</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypingRuntime.html">
          Qcert.Common.TypingRuntime
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html">
          ErgoSpec.Backend.Model.ErgoEnhancedModel
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html">
          ErgoSpec.Backend.Model.ErgoBackendRuntime
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html">ErgoSpec.Backend.Lib.ECType</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html">ErgoSpec.Backend.Lib.EData</a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EOperators.html">
          ErgoSpec.Backend.Lib.EOperators
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html">
          ErgoSpec.Backend.Lib.ECodeGen
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoEnhancedBackend">ErgoEnhancedBackend</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html#ErgoBackendRuntime">
          ErgoBackendRuntime.ErgoBackendRuntime
        </a>
      </span>{" "}
      &lt;+{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced">
          ErgoEnhancedModel.CompEnhanced
        </a>
      </span>
      .<br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoData">ErgoData</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EData.html#EData">EData.EData</a>
      </span>
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoEnhancedBackend">
          ErgoEnhancedBackend
        </a>
      </span>
      ).
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoOps">ErgoOps</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.EOperators.html#EOperators">
          EOperators.EOperators
        </a>
      </span>
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoEnhancedBackend">
          ErgoEnhancedBackend
        </a>
      </span>
      ).
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCodeGen">ErgoCodeGen</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECodeGen.html#ECodeGen">
          ECodeGen.ECodeGen
        </a>
      </span>
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoEnhancedBackend">
          ErgoEnhancedBackend
        </a>
      </span>
      ).
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoCTypes">ErgoCTypes</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType">ECType.ECType</a>
      </span>
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoEnhancedBackend">
          ErgoEnhancedBackend
        </a>
      </span>
      ).
      <br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="Defs">Defs</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="zip">zip</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} {"{"}
      <span className="id">B</span>
      {"}"} :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#A">A</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#B">B</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#A">A</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#B">B</a>
      </span>
      )) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.ListAdd.html#zip">
          zip
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergo_data">ergo_data</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#data">ErgoData.data</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ergoc_type">ergoc_type</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>
      {"}"} := @
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#ectype">ErgoCTypes.ectype</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#br">br</a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.ErgoBackend.html#Defs">Defs</a>
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
  