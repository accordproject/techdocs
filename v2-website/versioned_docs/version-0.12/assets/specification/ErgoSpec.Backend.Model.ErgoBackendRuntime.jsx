<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.Model.ErgoBackendRuntime</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.Model.ErgoBackendRuntime"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.Model.ErgoBackendRuntime</h1>
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Closure.html">
          Qcert.Utils.Closure
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html">
          Qcert.Common.CommonSystem
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerRuntime.html">
          Qcert.Compiler.Model.CompilerRuntime
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html">
          Qcert.Translation.NNRCtoJavaScript
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html">
          Qcert.cNNRC.Lang.cNNRC
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html">
          ErgoSpec.Backend.Model.DateTimeModelPart
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html">
          ErgoSpec.Backend.Model.ErgoEnhancedModel
        </a>
      </span>
      .<br />
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
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html">
          ErgoSpec.Backend.Model.ErgoBackendModel
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ErgoBackendRuntime">ErgoBackendRuntime</a>
      </span>{" "}
      &lt;:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html#ErgoBackendModel">
          ErgoBackendModel
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Local</span>{" "}
      <span className="kwd">Open</span> <span className="kwd">Scope</span>{" "}
      <span className="id">string</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoBackendRuntime.ergo_foreign_data">ergo_foreign_data</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoBackendRuntime.ergo_data_to_json_string">
          ergo_data_to_json_string
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.NNRCtoJavaScript.html#dataToJS">
          NNRCtoJavaScript.dataToJS
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ErgoBackendRuntime.ergo_foreign_type">ergo_foreign_type</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html#ErgoBackendRuntime">
          ErgoBackendRuntime
        </a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  