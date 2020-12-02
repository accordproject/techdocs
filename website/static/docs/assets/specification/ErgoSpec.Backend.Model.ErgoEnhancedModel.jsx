<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.Model.ErgoEnhancedModel</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.Model.ErgoEnhancedModel"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.Model.ErgoEnhancedModel</h1>
    <div className="coq">
      <br />
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
        <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html">
          EquivDec
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Utils.html">
          Qcert.Utils.Utils
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
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html">
          Qcert.Translation.ForeignToJava
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScript.html">
          Qcert.Translation.ForeignToJavaScript
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScriptAst.html">
          Qcert.Translation.ForeignToJavaScriptAst
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToScala.html">
          Qcert.Translation.ForeignToScala
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignDataToJSON.html">
          Qcert.Common.DataModel.ForeignDataToJSON
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignTypeToJSON.html">
          Qcert.Common.TypeSystem.ForeignTypeToJSON
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToSpark.html">
          Qcert.Translation.ForeignToSpark
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.ForeignReduceOps.html">
          Qcert.NNRCMR.Lang.ForeignReduceOps
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToReduceOps.html">
          Qcert.Translation.ForeignToReduceOps
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.ForeignCloudant.html">
          Qcert.CldMR.Lang.ForeignCloudant
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html">
          Qcert.Translation.ForeignToCloudant
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
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerModel.html">
          Qcert.Compiler.Model.CompilerModel
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html">
          Qcert.Compiler.Model.StringModelPart
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html">
          Qcert.NNRCMR.Lang.NNRCMR
        </a>
      </span>
      .<br />
      <span className="kwd">Require</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html">
          Qcert.CldMR.Lang.CldMR
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html">
          Qcert.Utils.OptimizerLogger
        </a>
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
        <a href="https://querycert.github.io/html/Qcert.cNRAEnv.Lang.cNRAEnv.html">
          Qcert.cNRAEnv.Lang.cNRAEnv
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html">
          Qcert.NRAEnv.Lang.NRAEnv
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html">
          Qcert.NNRSimp.Lang.NNRSimp
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.DNNRCBase.html">
          Qcert.DNNRC.Lang.DNNRCBase
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.tDNNRC.Lang.tDNNRC.html">
          Qcert.tDNNRC.Lang.tDNNRC
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.Dataframe.html">
          Qcert.DNNRC.Lang.Dataframe
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
      <br />
      <span className="kwd">Import</span>{" "}
      <span className="id">ListNotations</span>.<br />
      <br />
      <span className="kwd">Local</span> <span className="kwd">Open</span>{" "}
      <span className="kwd">Scope</span> <span className="id">list_scope</span>.
      <br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="check_subtype_pairs">check_subtype_pairs</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">fr</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">l</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#forallb">
          forallb
        </a>
      </span>{" "}
      (<span className="kwd">fun</span> τ<span className="id">s</span> =&gt;{" "}
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RSubtype.html#subtype_dec">
          subtype_dec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      τ<span className="id">s</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      τ<span className="id">s</span>) <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enforce_unary_op_schema">enforce_unary_op_schema</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">fr</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ts1</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) (<span className="id">tr</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:= <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#check_subtype_pairs">
          check_subtype_pairs
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts1">ts1</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tr">tr</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts1">ts1</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enforce_binary_op_schema">enforce_binary_op_schema</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">fr</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">ts1</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) (<span className="id">ts2</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) (<span className="id">tr</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:= <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#check_subtype_pairs">
          check_subtype_pairs
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts1">ts1</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts2">ts2</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tr">tr</a>
      </span>
      , (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts1">ts1</a>
      </span>
      ), (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ts2">ts2</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_data">enhanced_data</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedstring">enhancedstring</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING">
          STRING
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanceddateTime">enhanceddateTime</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanceddateTimeinterval">enhanceddateTimeinterval</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
          DATE_TIME_DURATION
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanceddateTime_now">enhanceddateTime_now</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_now">
          DATE_TIME_now
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_type">enhanced_type</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedTop">enhancedTop</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedBottom">enhancedBottom</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedString">enhancedString</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedDateTime">enhancedDateTime</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhancedDateTimeInterval">enhancedDateTimeInterval</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_type_to_string">enhanced_type_to_string</a>
      </span>{" "}
      (<span className="id">et</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
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
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#et">et</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>{" "}
      =&gt; "<span className="id">ETop</span>"<br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>{" "}
      =&gt; "<span className="id">EBottom</span>"<br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>{" "}
      =&gt; "<span className="id">EString</span>"<br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>{" "}
      =&gt; "<span className="id">EDateTime</span>"<br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>{" "}
      =&gt; "<span className="id">EDateTimeInterval</span>"<br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="string_to_enhanced_type">string_to_enhanced_type</a>
      </span>{" "}
      (<span className="id">s</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#s">s</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;| "<span className="id">ETop</span>"%
      <span className="id">string</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| "<span className="id">EBottom</span>"%
      <span className="id">string</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| "<span className="id">EString</span>"%
      <span className="id">string</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| "<span className="id">EDateTime</span>"%
      <span className="id">string</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| "<span className="id">EDateTimeInterval</span>"%
      <span className="id">string</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html">
          RelationClasses
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html">
          Equivalence
        </a>
      </span>
      .<br />
      <br />
      <span className="id">
        Existing
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">date_time_foreign_data</span>.<br />
      <span className="id">
        Existing
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">date_time_duration_foreign_data</span>.<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_data">enhanced_foreign_data</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data">
          foreign_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#mk_foreign_data">
          mk_foreign_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof9')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof9">
        &nbsp;&nbsp;<span className="tactic">red</span>.<br />
        &nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#complement">
            complement
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">x</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">y</span>; <span className="tactic">simpl</span>;{" "}
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="id">right</span>;{" "}
        <span className="tactic">inversion</span> 1].
        <br />
        &nbsp;&nbsp;- <span className="id">case_eq</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_eq">
            STRING_eq
          </a>
        </span>{" "}
        <span className="id">s</span> <span className="id">s0</span>).
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">left</span>;{" "}
        <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">f_equal</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_eq_correct">
            StringModelPart.STRING_eq_correct
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">right</span>;{" "}
        <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H0</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_eq_correct">
            StringModelPart.STRING_eq_correct
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span> (@
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html#equiv_dec">
            equiv_dec
          </a>
        </span>{" "}
        <span className="id">_</span> <span className="id">_</span>{" "}
        <span className="id">_</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_dec">
            foreign_data_dec
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
            date_time_foreign_data
          </a>
        </span>
        ) <span className="id">d</span> <span className="id">d0</span>).
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">left</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">right</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span> (@
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html#equiv_dec">
            equiv_dec
          </a>
        </span>{" "}
        <span className="id">_</span> <span className="id">_</span>{" "}
        <span className="id">_</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_dec">
            foreign_data_dec
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
            date_time_duration_foreign_data
          </a>
        </span>
        ) <span className="id">d</span> <span className="id">d0</span>).
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">left</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">right</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof10')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof10">
        &nbsp;&nbsp;<span className="comment">(*&nbsp;normalized?&nbsp;*)</span>
        <br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">a</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#True">True</a>
        </span>
        .<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_normalized">
            foreign_data_normalized
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
            date_time_foreign_data
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_normalized">
            foreign_data_normalized
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
            date_time_duration_foreign_data
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof11')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof11">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">a</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">simpl</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_normalize_normalizes">
            foreign_data_normalize_normalizes
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
            date_time_foreign_data
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_normalize_normalizes">
            foreign_data_normalize_normalizes
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
            date_time_duration_foreign_data
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof12')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof12">
        &nbsp;&nbsp;<span className="id">constructor</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span> 1.
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_tostring">
            STRING_tostring
          </a>
        </span>{" "}
        <span className="id">s</span>).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
            toString
          </a>
        </span>{" "}
        <span className="id">_</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
            foreign_data_tostring
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
            date_time_foreign_data
          </a>
        </span>
        ) <span className="id">d</span>).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
            toString
          </a>
        </span>{" "}
        <span className="id">_</span> (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
            foreign_data_tostring
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
            date_time_duration_foreign_data
          </a>
        </span>
        ) <span className="id">d</span>).
        <br />
        Defined.
      </div>
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="denhanceddateTime">denhanceddateTime</a>
      </span>{" "}
      <span className="id">td</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#td">td</a>
      </span>
      ).
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="denhanceddateTimeinterval">denhanceddateTimeinterval</a>
      </span>{" "}
      <span className="id">td</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#td">td</a>
      </span>
      ).
      <br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html">
          Qcert.Utils.JSON
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="JENHANCED_string">JENHANCED_string</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING">
          STRING
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      .<br />
      <span className="id">
        Extract
      </span> <span className="id">Constant</span>{" "}
      <span className="id">JENHANCED_string</span> =&gt; "(
      <span className="kwd">fun</span> <span className="id">s</span> -&gt;{" "}
      <span className="id">Util.string_of_enhanced_string</span>{" "}
      <span className="id">s</span>)".
      <br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="jenhancedstring">jenhancedstring</a>
      </span>{" "}
      <span className="id">s</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#JENHANCED_string">
          JENHANCED_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#s">s</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op">enhanced_unary_op</a>
      </span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanced_unary_date_time_op">enhanced_unary_date_time_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="onddateTime">onddateTime</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} (<span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      ) (<span className="id">d</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">fd</span>) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#f">f</a>
      </span>{" "}
      <span className="id">fd</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ondstring">ondstring</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} (<span className="id">f</span> :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      ) (<span className="id">d</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dstring">
          dstring
        </a>
      </span>{" "}
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#f">f</a>
      </span>{" "}
      <span className="id">s</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_unary_op_interp">date_time_unary_op_interp</a>
      </span>{" "}
      (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>
      ) (<span className="id">d</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">part</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime">
          onddateTime
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_component">
          DATE_TIME_component
        </a>
      </span>{" "}
      <span className="id">part</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
          denhanceddateTime
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ondstring">
          ondstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_from_string">
          DATE_TIME_from_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTimeinterval">
          denhanceddateTimeinterval
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#ondstring">
          ondstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_from_string">
          DATE_TIME_DURATION_from_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_interp">enhanced_unary_op_interp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation_t">
          brand_relation_t
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_interp">
          date_time_unary_op_interp
        </a>
      </span>{" "}
      <span className="id">f</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_unary_op">enhanced_foreign_unary_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op">
          foreign_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= {"{"}{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_type">
          foreign_unary_op_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_interp">
          foreign_unary_op_interp
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_interp">
          enhanced_unary_op_interp
        </a>
      </span>{" "}
      {"}"}.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof13')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof13">
        &nbsp;&nbsp;<span className="tactic">red</span>;{" "}
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ; <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="id">change</span> ({"{"}
        <span className="id">x</span> = <span className="id">y</span>
        {"}"} + {"{"}
        <span className="id">x</span> &lt;&gt; <span className="id">y</span>
        {"}"}).
        <br />
        &nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        &nbsp;&nbsp;- <span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof14')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof14">
        &nbsp;&nbsp;<span className="id">constructor</span>;{" "}
        <span className="tactic">intros</span> <span className="id">op</span>.
        <br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">op</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op_tostring">
            date_time_unary_op_tostring
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof15')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof15">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">op</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d0</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime">
            onddateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
            denhanceddateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTimeinterval">
            denhanceddateTimeinterval
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">d</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">destruct</span>{" "}
        <span className="id">f</span>; <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op">enhanced_binary_op</a>
      </span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanced_binary_date_time_op">enhanced_binary_date_time_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="onddateTime2">onddateTime2</a>
      </span>{" "}
      {"{"}
      <span className="id">A</span>
      {"}"} (<span className="id">f</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      ) (<span className="id">d1</span> <span className="id">d2</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#A">A</a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">fd1</span>),{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">fd2</span>) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#f">f</a>
      </span>{" "}
      <span className="id">fd1</span> <span className="id">fd2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="rondbooldateTime2">rondbooldateTime2</a>
      </span>{" "}
      (<span className="id">f</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#bool">
          bool
        </a>
      </span>
      ) (<span className="id">d1</span> <span className="id">d2</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dbool">
          dbool
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime2">
          onddateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#f">f</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      ).
      <br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_binary_op_interp">date_time_binary_op_interp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>
      ) (<span className="id">d1</span> <span className="id">d2</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">tp</span>),{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">td</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
          denhanceddateTime
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_plus">
          DATE_TIME_plus
        </a>
      </span>{" "}
      <span className="id">tp</span> <span className="id">td</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">tp</span>),{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">td</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
          denhanceddateTime
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_minus">
          DATE_TIME_minus
        </a>
      </span>{" "}
      <span className="id">tp</span> <span className="id">td</span>))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
          rondbooldateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_ne">
          DATE_TIME_ne
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
          rondbooldateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_lt">
          DATE_TIME_lt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
          bop_date_time_le
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
          rondbooldateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_le">
          DATE_TIME_le
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
          rondbooldateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_gt">
          DATE_TIME_gt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
          bop_date_time_ge
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
          rondbooldateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_ge">
          DATE_TIME_ge
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
          bop_date_time_duration
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTimeinterval">
          denhanceddateTimeinterval
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime2">
          onddateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_duration">
          DATE_TIME_DURATION_duration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime2">
          onddateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_days">
          DATE_TIME_DURATION_days
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
          lift
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime2">
          onddateTime2
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION_seconds">
          DATE_TIME_DURATION_seconds
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_interp">enhanced_binary_op_interp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation_t">
          brand_relation_t
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d1</span> <span className="id">d2</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">f</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_interp">
          date_time_binary_op_interp
        </a>
      </span>{" "}
      <span className="id">f</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_binary_op">enhanced_foreign_binary_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op">
          foreign_binary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= {"{"}{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_type">
          foreign_binary_op_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_interp">
          foreign_binary_op_interp
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_interp">
          enhanced_binary_op_interp
        </a>
      </span>{" "}
      {"}"}.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof16')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof16">
        &nbsp;&nbsp;<span className="tactic">red</span>;{" "}
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ; <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="id">change</span> ({"{"}
        <span className="id">x</span> = <span className="id">y</span>
        {"}"} + {"{"}
        <span className="id">x</span> &lt;&gt; <span className="id">y</span>
        {"}"}).
        <br />
        &nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        &nbsp;&nbsp;- <span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof17')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof17">
        &nbsp;&nbsp;<span className="id">constructor</span>;{" "}
        <span className="tactic">intros</span> <span className="id">op</span>.
        <br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">op</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op_tostring">
            date_time_binary_op_tostring
          </a>
        </span>{" "}
        <span className="id">d</span>).
        <br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof18')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof18">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">op</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rondbooldateTime2">
            rondbooldateTime2
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#onddateTime2">
            onddateTime2
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
            denhanceddateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">destruct</span> <span className="id">d1</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">destruct</span> <span className="id">f</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">destruct</span> <span className="id">d2</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">
          try
        </span>{" "}
        (<span className="tactic">destruct</span> <span className="id">f</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">
          invcs
        </span>{" "}
        <span className="id">H</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_runtime">enhanced_foreign_runtime</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignRuntime.html#foreign_runtime">
          foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignRuntime.html#mk_foreign_runtime">
          mk_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_unary_op">
          enhanced_foreign_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_binary_op">
          enhanced_foreign_binary_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_java_data">enhanced_to_java_data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fd</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          java_json
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fd">fd</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedstring">
          enhancedstring
        </a>
      </span>{" "}
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#mk_java_json">
          mk_java_json
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_tostring">
          STRING_tostring
        </a>
      </span>{" "}
      <span className="id">s</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">tp</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#mk_java_json">
          mk_java_json
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
          date_time_foreign_data
        </a>
      </span>
      .(@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
          foreign_data_tostring
        </a>
      </span>{" "}
      ) <span className="id">tp</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">tp</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#mk_java_json">
          mk_java_json
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
          date_time_duration_foreign_data
        </a>
      </span>
      .(@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
          foreign_data_tostring
        </a>
      </span>{" "}
      ) <span className="id">tp</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_java_unary_op">enhanced_to_java_unary_op</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">indent</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fu</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          java_json
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          java_json
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_java_unary_op">
          date_time_to_java_unary_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#indent">indent</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_java_binary_op">enhanced_to_java_binary_op</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">indent</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fb</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d1</span> <span className="id">d2</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          java_json
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#java_json">
          java_json
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_java_binary_op">
          date_time_to_java_binary_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#indent">indent</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_java">enhanced_foreign_to_java</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#foreign_to_java">
          foreign_to_java
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#mk_foreign_to_java">
          mk_foreign_to_java
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_java_data">
          enhanced_to_java_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_java_unary_op">
          enhanced_to_java_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_java_binary_op">
          enhanced_to_java_binary_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_javascript_data">enhanced_to_javascript_data</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fd</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fd">fd</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedstring">
          enhancedstring
        </a>
      </span>{" "}
      <span className="id">s</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING_tostring">
          STRING_tostring
        </a>
      </span>{" "}
      <span className="id">s</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">tp</span> =&gt; (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
          date_time_foreign_data
        </a>
      </span>
      .(@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
          foreign_data_tostring
        </a>
      </span>{" "}
      ) <span className="id">tp</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">tp</span> =&gt; (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
          toString
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
          date_time_duration_foreign_data
        </a>
      </span>
      .(@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
          foreign_data_tostring
        </a>
      </span>{" "}
      ) <span className="id">tp</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_javascript_unary_op">
          enhanced_to_javascript_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">indent</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fu</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_javascript_unary_op">
          date_time_to_javascript_unary_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#indent">indent</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_javascript_binary_op">
          enhanced_to_javascript_binary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">indent</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nat">nat</a>
      </span>
      ) (<span className="id">eol</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">quotel</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) (<span className="id">fb</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">d1</span> <span className="id">d2</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_javascript_binary_op">
          date_time_to_javascript_binary_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#indent">indent</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#eol">eol</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#quotel">quotel</a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d1">d1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d2">d2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_ajavascript_unary_op">
          enhanced_to_ajavascript_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fu</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e</span>:<span className="id">JsSyntax.expr</span>) :{" "}
      <span className="id">JsSyntax.expr</span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_ajavascript_unary_op">
          date_time_to_ajavascript_unary_op
        </a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#e">e</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_ajavascript_binary_op">
          enhanced_to_ajavascript_binary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fb</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">e1</span> <span className="id">e2</span>:
      <span className="id">JsSyntax.expr</span>) :{" "}
      <span className="id">JsSyntax.expr</span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_to_ajavascript_binary_op">
          date_time_to_ajavascript_binary_op
        </a>
      </span>{" "}
      <span className="id">op</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#e1">e1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#e2">e2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_javascript">
          enhanced_foreign_to_javascript
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScript.html#foreign_to_javascript">
          foreign_to_javascript
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScript.html#mk_foreign_to_javascript">
          mk_foreign_to_javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_javascript_unary_op">
          enhanced_to_javascript_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_javascript_binary_op">
          enhanced_to_javascript_binary_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_ajavascript">
          enhanced_foreign_to_ajavascript
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScriptAst.html#foreign_to_ajavascript">
          foreign_to_ajavascript
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScriptAst.html#mk_foreign_to_ajavascript">
          mk_foreign_to_ajavascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_ajavascript_unary_op">
          enhanced_to_ajavascript_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_ajavascript_binary_op">
          enhanced_to_ajavascript_binary_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_scala_unary_op">enhanced_to_scala_unary_op</a>
      </span>{" "}
      (<span className="id">op</span>:{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      ) (<span className="id">d</span>:{" "}
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
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt; "
      <span className="id">EnhancedModel</span>: <span className="id">date</span>{" "}
      <span className="id">time</span> <span className="id">ops</span>{" "}
      <span className="id">not</span> <span className="id">supported</span>{" "}
      <span className="kwd">for</span> <span className="id">now</span>."
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_scala_spark_datatype">
          enhanced_to_scala_spark_datatype
        </a>
      </span>{" "}
      {"{"}
      <span className="id">ftype</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      {"}"} (<span className="id">ft</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type_type">
          foreign_type_type
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
      &nbsp;&nbsp;"<span className="id">FloatType</span>".
      <br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_scala">enhanced_foreign_to_scala</a>
      </span>{" "}
      {"{"}
      <span className="id">ftype</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      {"}"}:<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToScala.html#foreign_to_scala">
          foreign_to_scala
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>{" "}
      <span className="id">_</span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToScala.html#mk_foreign_to_scala">
          mk_foreign_to_scala
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>{" "}
      <span className="id">_</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_scala_unary_op">
          enhanced_to_scala_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_scala_spark_datatype">
          enhanced_to_scala_spark_datatype
        </a>
      </span>
      .<br />
      <br />
      <br />
      <br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_JSON">enhanced_foreign_to_JSON</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignDataToJSON.html#foreign_to_JSON">
          foreign_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignDataToJSON.html#mk_foreign_to_JSON">
          mk_foreign_to_JSON
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof19')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof19">
        &nbsp;&nbsp;
        <span className="comment">
          (*&nbsp;TODO:&nbsp;For&nbsp;now,&nbsp;we&nbsp;assume&nbsp;that&nbsp;JSON&nbsp;supports&nbsp;floating&nbsp;point&nbsp;*)
        </span>
        <br />
        &nbsp;&nbsp;<span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof20')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof20">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fd</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jstring">
            jstring
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#jenhancedstring">
            jenhancedstring
          </a>
        </span>{" "}
        <span className="id">s</span>)).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jstring">
            jstring
          </a>
        </span>{" "}
        (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
            toString
          </a>
        </span>{" "}
        <span className="id">_</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_foreign_data">
            date_time_foreign_data
          </a>
        </span>
        .(@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
            foreign_data_tostring
          </a>
        </span>{" "}
        ) <span className="id">d</span>)).
        <br />
        &nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jstring">
            jstring
          </a>
        </span>{" "}
        (@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.CoqLibAdd.html#toString">
            toString
          </a>
        </span>{" "}
        <span className="id">_</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_duration_foreign_data">
            date_time_duration_foreign_data
          </a>
        </span>
        .(@
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignData.html#foreign_data_tostring">
            foreign_data_tostring
          </a>
        </span>{" "}
        ) <span className="id">d</span>)).
        <br />
        Defined.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_type">enhanced_numeric_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanced_numeric_int">enhanced_numeric_int</a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="enhanced_numeric_float">enhanced_numeric_float</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Global</span>{" "}
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_type_eqdec">enhanced_numeric_type_eqdec</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html#EqDec">
          EqDec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq">eq</a>
      </span>
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof21')">
        Proof.
      </div>
      <div className="proofscript" id="proof21">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">red</span>.{" "}
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#complement">
            complement
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">change</span> (
        <span className="kwd">forall</span> <span className="id">x</span>{" "}
        <span className="id">y</span> :{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
            enhanced_numeric_type
          </a>
        </span>
        , {"{"}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
        </span>{" "}
        ={" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#y">y</a>
        </span>
        {"}"} + {"{"}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
        </span>{" "}
        &lt;&gt;{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#y">y</a>
        </span>
        {"}"}).
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        &nbsp;&nbsp;Defined.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_cld_numeric_type">enhanced_to_cld_numeric_type</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#cld_numeric_type">
          CldMR.cld_numeric_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#Cld_int">
          CldMR.Cld_int
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#Cld_float">
          CldMR.Cld_float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.
      <br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_reduce_op">enhanced_reduce_op</a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a name="RedOpCount">RedOpCount</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="RedOpSum">RedOpSum</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="RedOpMin">RedOpMin</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="RedOpMax">RedOpMax</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="RedOpArithMean">RedOpArithMean</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="RedOpStats">RedOpStats</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_type_prefix">enhanced_numeric_type_prefix</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt; ""%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt; "<span className="id">F</span>"%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_reduce_op_tostring">enhanced_reduce_op_tostring</a>
      </span>{" "}
      (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      =&gt; "<span className="id">COUNT</span>"%<span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#append">
          append
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type_prefix">
          enhanced_numeric_type_prefix
        </a>
      </span>{" "}
      <span className="id">typ</span>) "<span className="id">FSUM</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#append">
          append
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type_prefix">
          enhanced_numeric_type_prefix
        </a>
      </span>{" "}
      <span className="id">typ</span>) "<span className="id">FMIN</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#append">
          append
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type_prefix">
          enhanced_numeric_type_prefix
        </a>
      </span>{" "}
      <span className="id">typ</span>) "<span className="id">FMAX</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#append">
          append
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type_prefix">
          enhanced_numeric_type_prefix
        </a>
      </span>{" "}
      <span className="id">typ</span>) "<span className="id">FARITHMEAN</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#append">
          append
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type_prefix">
          enhanced_numeric_type_prefix
        </a>
      </span>{" "}
      <span className="id">typ</span>) "<span className="id">FSTATS</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_sum">enhanced_numeric_sum</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatSum">
          OpNatSum
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatSum">
          OpFloatSum
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_min">enhanced_numeric_min</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMin">
          OpNatMin
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMin">
          OpFloatBagMin
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_max">enhanced_numeric_max</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMax">
          OpNatMax
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMax">
          OpFloatBagMax
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_numeric_arith_mean">enhanced_numeric_arith_mean</a>
      </span>{" "}
      (<span className="id">typ</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_type">
          enhanced_numeric_type
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#typ">typ</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMean">
          OpNatMean
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatMean">
          OpFloatMean
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_reduce_op_interp">enhanced_reduce_op_interp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation_t">
          brand_relation_t
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">dl</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      |{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">_</span> |{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">_</span> |{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">_</span> |{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">uop</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_sum">
          enhanced_numeric_sum
        </a>
      </span>{" "}
      <span className="id">typ</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_min">
          enhanced_numeric_min
        </a>
      </span>{" "}
      <span className="id">typ</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_max">
          enhanced_numeric_max
        </a>
      </span>{" "}
      <span className="id">typ</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_arith_mean">
          enhanced_numeric_arith_mean
        </a>
      </span>{" "}
      <span className="id">typ</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperatorsSem.html#unary_op_eval">
          unary_op_eval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#br">br</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#uop">uop</a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dl">dl</a>
      </span>
      ) <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">coll</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dcoll">
          dcoll
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dl">dl</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">count</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperatorsSem.html#unary_op_eval">
          unary_op_eval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#br">br</a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#coll">coll</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">sum</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperatorsSem.html#unary_op_eval">
          unary_op_eval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#br">br</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_sum">
          enhanced_numeric_sum
        </a>
      </span>{" "}
      <span className="id">typ</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#coll">coll</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">min</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperatorsSem.html#unary_op_eval">
          unary_op_eval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#br">br</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_min">
          enhanced_numeric_min
        </a>
      </span>{" "}
      <span className="id">typ</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#coll">coll</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">max</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperatorsSem.html#unary_op_eval">
          unary_op_eval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#br">br</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_max">
          enhanced_numeric_max
        </a>
      </span>{" "}
      <span className="id">typ</span>){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#coll">coll</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">v</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#count">count</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#sum">sum</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min">min</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#max">max</a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">count</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">sum</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">min</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">max</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#drec">
          drec
        </a>
      </span>{" "}
      (("<span className="id">count</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#count">count</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">max</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#max">max</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">min</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min">min</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::("
      <span className="id">sum</span>"%<span className="id">string</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#sum">sum</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#v">v</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_reduce_op">enhanced_foreign_reduce_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.ForeignReduceOps.html#foreign_reduce_op">
          foreign_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.ForeignReduceOps.html#mk_foreign_reduce_op">
          mk_foreign_reduce_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op_interp">
          enhanced_reduce_op_interp
        </a>
      </span>{" "}
      <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof22')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof22">
        &nbsp;&nbsp;<span className="tactic">red</span>;{" "}
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#complement">
            complement
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="id">change</span> (
        <span className="kwd">forall</span> <span className="id">x</span>{" "}
        <span className="id">y</span>:
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
            enhanced_reduce_op
          </a>
        </span>
        , {"{"}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
        </span>{" "}
        ={" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#y">y</a>
        </span>
        {"}"} + {"{"}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
        </span>{" "}
        &lt;&gt;{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#y">y</a>
        </span>
        {"}"}).
        <br />
        &nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>; <span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof23')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof23">
        &nbsp;&nbsp;<span className="id">constructor</span>.<br />
        &nbsp;&nbsp;<span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op_tostring">
            enhanced_reduce_op_tostring
          </a>
        </span>
        .<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof24')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof24">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">op</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="id">invcs</span>{" "}
        <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_min">
            lifted_min
          </a>
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fmin">
            lifted_fmin
          </a>
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_max">
            lifted_max
          </a>
        </span>{" "}
        <span className="kwd">in</span> * .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fmax">
            lifted_fmax
          </a>
        </span>{" "}
        <span className="kwd">in</span> * .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_max">
            lifted_max
          </a>
        </span>{" "}
        <span className="kwd">in</span> * .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fmax">
            lifted_fmax
          </a>
        </span>{" "}
        <span className="kwd">in</span> * .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H2</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H2</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">subst</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="tactic">destruct</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#dsum">
            dsum
          </a>
        </span>{" "}
        <span className="id">dl</span>); <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_min">
            lifted_min
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_max">
            lifted_max
          </a>
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> ((
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Bag.html#bnummin">
            bnummin
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_zbag">
            lifted_zbag
          </a>
        </span>{" "}
        <span className="id">dl</span>))); <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> ((
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Bag.html#bnummax">
            bnummax
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_zbag">
            lifted_zbag
          </a>
        </span>{" "}
        <span className="id">dl</span>))); <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">invcs</span>{" "}
        <span className="id">H2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
        <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;+ <span className="id">case_eq</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fsum">
            lifted_fsum
          </a>
        </span>{" "}
        <span className="id">dl</span>); <span className="tactic">intros</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">rewrite</span> <span className="id">H</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fmin">
            lifted_fmin
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fmax">
            lifted_fmax
          </a>
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> ((
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float_list_min">
            float_list_min
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fbag">
            lifted_fbag
          </a>
        </span>{" "}
        <span className="id">dl</span>))); <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> ((
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#lift">
            lift
          </a>
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float_list_max">
            float_list_max
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.Operators.OperatorsUtils.html#lifted_fbag">
            lifted_fbag
          </a>
        </span>{" "}
        <span className="id">dl</span>))); <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">invcs</span>{" "}
        <span className="id">H2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
        <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Lift.html#some_lift">
            some_lift
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">H</span>{" "}
        <span className="kwd">as</span> [? <span className="id">eqq</span> ?];{" "}
        <span className="tactic">subst</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*{" "}
        <span className="tactic">reflexivity</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_reduce_op">enhanced_to_reduce_op</a>
      </span>{" "}
      (<span className="id">uop</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_op">
          NNRCMR.reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#uop">uop</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatSum">
          OpNatSum
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatSum">
          OpFloatSum
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMin">
          OpNatMin
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMin">
          OpFloatBagMin
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMax">
          OpNatMax
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMax">
          OpFloatBagMax
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMean">
          OpNatMean
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatMean">
          OpFloatMean
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_of_reduce_op">enhanced_of_reduce_op</a>
      </span>{" "}
      (<span className="id">rop</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_op">
          NNRCMR.reduce_op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rop">rop</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpCount">
          OpCount
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatSum">
          OpNatSum
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatSum">
          OpFloatSum
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMin">
          OpNatMin
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMin">
          OpFloatBagMin
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMax">
          OpNatMax
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMax">
          OpFloatBagMax
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpNatMean">
          OpNatMean
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>
      ) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatMean">
          OpFloatMean
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          NNRCMR.RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">_</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_reduce_op">enhanced_foreign_to_reduce_op</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToReduceOps.html#foreign_to_reduce_op">
          foreign_to_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToReduceOps.html#mk_foreign_to_reduce_op">
          mk_foreign_to_reduce_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_reduce_op">
          enhanced_foreign_reduce_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_reduce_op">
          enhanced_to_reduce_op
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_of_reduce_op">
          enhanced_of_reduce_op
        </a>
      </span>{" "}
      <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof25')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof25">
        &nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_op_eval">
            NNRCMR.reduce_op_eval
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">uop</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>.<br />
        Qed.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof26')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof26">
        &nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_op_eval">
            NNRCMR.reduce_op_eval
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">rop</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">f</span>; <span className="id">invcs</span>{" "}
        <span className="id">H1</span>; <span className="tactic">simpl</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">typ</span>; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Local</span> <span className="kwd">Open</span>{" "}
      <span className="kwd">Scope</span> <span className="id">string_scope</span>.
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_spark_reduce_op">enhanced_to_spark_reduce_op</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rop</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">scala_endl</span> <span className="id">quotel</span>:
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
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rop">rop</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      =&gt; ".<span className="id">count</span>().
      <span className="id">toString</span>()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt; ".<span className="id">aggregate</span>(0)(
      <span className="id">_</span> + <span className="id">_.toInt</span>,{" "}
      <span className="id">_</span> + <span className="id">_</span>).
      <span className="id">toString</span>()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt; ".<span className="id">aggregate</span>(0.0)(
      <span className="id">_</span> + <span className="id">_.toDouble</span>,{" "}
      <span className="id">_</span> + <span className="id">_</span>).
      <span className="id">toString</span>()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt; ".<span className="id">aggregate</span>(
      <span className="id">Int.MaxValue</span>)(((<span className="id">x</span>,{" "}
      <span className="id">y</span>) =&gt; <span className="id">Math.min</span>(
      <span className="id">x</span>, <span className="id">y.toInt</span>)),{" "}
      <span className="id">Math.min</span>).<span className="id">toString</span>
      ()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt; ".<span className="id">aggregate</span>(
      <span className="id">Double.MaxValue</span>)(((<span className="id">x</span>
      , <span className="id">y</span>) =&gt; <span className="id">Math.min</span>(
      <span className="id">x</span>, <span className="id">y.toDouble</span>)),{" "}
      <span className="id">Math.min</span>).<span className="id">toString</span>
      ()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".
      <span className="id">aggregate</span>(
      <span className="id">Int.MinValue</span>)(((<span className="id">x</span>,{" "}
      <span className="id">y</span>) =&gt; <span className="id">Math.max</span>(
      <span className="id">x</span>, <span className="id">y.toInt</span>)),{" "}
      <span className="id">Math.max</span>).<span className="id">toString</span>
      ()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".
      <span className="id">aggregate</span>(
      <span className="id">Double.MinValue</span>)(((<span className="id">x</span>
      , <span className="id">y</span>) =&gt; <span className="id">Math.max</span>(
      <span className="id">x</span>, <span className="id">y.toDouble</span>)),{" "}
      <span className="id">Math.max</span>).<span className="id">toString</span>
      ()"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".
      <span className="id">aggregate</span>("""")(
      <span className="id">statsReduce</span>,{" "}
      <span className="id">statsRereduce</span>).
      <span className="id">toString</span>()" ++{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#scala_endl">
          scala_endl
        </a>
      </span>{" "}
      ++
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{" "}
      <span className="id">sc.parallelize</span>(<span className="id">Array</span>
      (<span className="id">res</span>))"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".
      <span className="id">arithmean</span> /*{" "}
      <span className="id">ArithMean</span> <span className="id">must</span>{" "}
      <span className="id">be</span> <span className="id">removed</span>{" "}
      <span className="id">before</span> <span className="id">code</span>{" "}
      <span className="id">generation</span> */"
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.NNRCRuntime.html">
          Qcert.NNRC.NNRCRuntime
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.NNRCMRRuntime.html">
          Qcert.NNRCMR.NNRCMRRuntime
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html">
          Qcert.NNRCMR.Optim.NNRCMRRewrite
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="min_max_to_stats">min_max_to_stats</a>
      </span>{" "}
      <span className="id">avoid</span> (<span className="id">mr</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_reduce">
          mr_reduce
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      <span className="id">op</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">op</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">typ</span> |{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">
        let
      </span> <span className="id">stats_field</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">op</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; "<span className="id">min</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt; "<span className="id">max</span>"%
      <span className="id">string</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">_</span> =&gt; "<span className="id">ERROR</span>"%
      <span className="id">string</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">tmp</span>,{" "}
      <span className="id">avoid</span>) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#fresh_mr_var">
          fresh_mr_var
        </a>
      </span>{" "}
      "<span className="id">stats</span>$"{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#avoid">avoid</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">mr1</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mkMR">
          mkMR
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_input">
          mr_input
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tmp">tmp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_map">
          mr_map
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">typ</span>)))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">x</span> := "
      <span className="id">stats</span>"%<span className="id">string</span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">mr2</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mkMR">
          mkMR
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tmp">tmp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_output">
          mr_output
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#MapScalar">
          MapScalar
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#stats_field">
          stats_field
        </a>
      </span>
      ) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedSingleton">
          RedSingleton
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr1">mr1</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr2">mr2</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arithmean_to_stats">arithmean_to_stats</a>
      </span>{" "}
      <span className="id">avoid</span> (<span className="id">mr</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_reduce">
          mr_reduce
        </a>
      </span>
      ) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      <span className="id">op</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">op</span> <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> (<span className="id">tmp</span>,{" "}
      <span className="id">avoid</span>) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#fresh_mr_var">
          fresh_mr_var
        </a>
      </span>{" "}
      "<span className="id">stats</span>$"{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#avoid">avoid</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">mr1</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mkMR">
          mkMR
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_input">
          mr_input
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tmp">tmp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_map">
          mr_map
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">typ</span>)))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">map</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">match</span> <span className="id">typ</span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_int">
          enhanced_numeric_int
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">zero</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      0) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">x</span> := "
      <span className="id">stats</span>"%<span className="id">string</span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#MapScalar">
          MapScalar
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCIf">
          NNRCIf
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCBinop">
          NNRCBinop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpEqual">
          OpEqual
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">count</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#zero">zero</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#zero">zero</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCBinop">
          NNRCBinop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpNatBinary">
          OpNatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#NatDiv">
          NatDiv
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">sum</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">count</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      )))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_numeric_float">
          enhanced_numeric_float
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">zero</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dnat">
          dnat
        </a>
      </span>{" "}
      0) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">zerof</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCConst">
          NNRCConst
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dfloat">
          dfloat
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Float.html#float_zero">
          float_zero
        </a>
      </span>
      ) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">x</span> := "
      <span className="id">stats</span>"%<span className="id">string</span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#MapScalar">
          MapScalar
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpBag">
          OpBag
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCIf">
          NNRCIf
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCBinop">
          NNRCBinop
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpEqual">
          OpEqual
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">count</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      )){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#zero">zero</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#zerof">zerof</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCBinop">
          NNRCBinop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpFloatBinary">
          OpFloatBinary
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#FloatDiv">
          FloatDiv
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">sum</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatOfNat">
          OpFloatOfNat
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCUnop">
          NNRCUnop
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpDot">
          OpDot
        </a>
      </span>{" "}
      "<span className="id">count</span>"%<span className="id">string</span>) (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.cNNRC.Lang.cNNRC.html#NNRCVar">
          NNRCVar
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#x">x</a>
      </span>
      ))))))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span> <span className="id">mr2</span> :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mkMR">
          mkMR
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tmp">tmp</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr">mr</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_output">
          mr_output
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#map">map</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedSingleton">
          RedSingleton
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr1">mr1</a>
      </span>
      ::
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#mr2">mr2</a>
      </span>
      ::
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="min_max_free_reduce">min_max_free_reduce</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_fun">
          reduce_fun
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">_</span>|
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">_</span>)) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#False">False</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#True">True</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arithmean_free_reduce">arithmean_free_reduce</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#reduce_fun">
          reduce_fun
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOp">
          RedOp
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#RedOpForeign">
          RedOpForeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">_</span>)) =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#False">False</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">
        _
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#True">True</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="min_max_free_mr">min_max_free_mr</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_reduce">
          min_max_free_reduce
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_reduce">
          mr_reduce
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arithmean_free_mr">arithmean_free_mr</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_reduce">
          arithmean_free_reduce
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_reduce">
          mr_reduce
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="min_max_free_mr_chain">min_max_free_mr_chain</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#Forall">
          Forall
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_mr">
          min_max_free_mr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="min_max_free_nnrcmr">min_max_free_nnrcmr</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_mr_chain">
          min_max_free_mr_chain
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_chain">
          mr_chain
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arithmean_free_mr_chain">arithmean_free_mr_chain</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
          list
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr">
          mr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#Forall">
          Forall
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_mr">
          arithmean_free_mr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="arithmean_free_nnrcmr">arithmean_free_nnrcmr</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_mr_chain">
          arithmean_free_mr_chain
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#mr_chain">
          mr_chain
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="to_spark_nnrcmr">to_spark_nnrcmr</a>
      </span>{" "}
      (<span className="id">l</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">avoid</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#get_nnrcmr_vars">
          get_nnrcmr_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">l</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#apply_rewrite">
          apply_rewrite
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_to_stats">
          arithmean_to_stats
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#avoid">avoid</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="to_spark_nnrcmr_prepared">to_spark_nnrcmr_prepared</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_nnrcmr">
          arithmean_free_nnrcmr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_spark">enhanced_foreign_to_spark</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToSpark.html#foreign_to_spark">
          foreign_to_spark
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToSpark.html#mk_foreign_to_spark">
          mk_foreign_to_spark
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_reduce_op">
          enhanced_foreign_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_spark_reduce_op">
          enhanced_to_spark_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#to_spark_nnrcmr">
          to_spark_nnrcmr
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_cloudant">enhanced_foreign_cloudant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.ForeignCloudant.html#foreign_cloudant">
          foreign_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.ForeignCloudant.html#mk_foreign_cloudant">
          mk_foreign_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatSum">
          OpFloatSum
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMin">
          OpFloatBagMin
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpFloatBagMax">
          OpFloatBagMax
        </a>
      </span>
      ).
      <br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_to_cloudant_reduce_op">
          enhanced_to_cloudant_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">rop</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_reduce_op">
          enhanced_reduce_op
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#cld_reduce_op">
          CldMR.cld_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#rop">rop</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpCount">
          RedOpCount
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpCount">
          CldMR.CldRedOpCount
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpSum">
          RedOpSum
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpSum">
          CldMR.CldRedOpSum
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_cld_numeric_type">
          enhanced_to_cld_numeric_type
        </a>
      </span>{" "}
      <span className="id">typ</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpStats">
          RedOpStats
        </a>
      </span>{" "}
      <span className="id">typ</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpStats">
          CldMR.CldRedOpStats
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_cld_numeric_type">
          enhanced_to_cld_numeric_type
        </a>
      </span>{" "}
      <span className="id">typ</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMin">
          RedOpMin
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpStats">
          CldMR.CldRedOpStats
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#Cld_int">
          CldMR.Cld_int
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpMax">
          RedOpMax
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpStats">
          CldMR.CldRedOpStats
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#Cld_int">
          CldMR.Cld_int
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#RedOpArithMean">
          RedOpArithMean
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#CldRedOpStats">
          CldMR.CldRedOpStats
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.CldMR.html#Cld_int">
          CldMR.Cld_int
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="to_cloudant_nnrcmr">to_cloudant_nnrcmr</a>
      </span>{" "}
      (<span className="id">l</span>:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">avoid</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#get_nnrcmr_vars">
          get_nnrcmr_vars
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">l</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#apply_rewrite">
          apply_rewrite
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_to_stats">
          min_max_to_stats
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#avoid">avoid</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">let</span>{" "}
      <span className="id">l</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#apply_rewrite">
          apply_rewrite
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_to_stats">
          arithmean_to_stats
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#avoid">avoid</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>{" "}
      <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#l">l</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="to_cloudant_nnrcmr_prepared">to_cloudant_nnrcmr_prepared</a>
      </span>{" "}
      (<span className="id">src</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.NNRCMR.html#nnrcmr">
          nnrcmr
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_nnrcmr">
          min_max_free_nnrcmr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>{" "}
      /\{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_nnrcmr">
          arithmean_free_nnrcmr
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#src">src</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Program</span>{" "}
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_to_cloudant">enhanced_foreign_to_cloudant</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant">
          foreign_to_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant_reduce_op">
          foreign_to_cloudant_reduce_op
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_to_cloudant_reduce_op">
          enhanced_to_cloudant_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant_prepare_nnrcmr">
          foreign_to_cloudant_prepare_nnrcmr
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#to_cloudant_nnrcmr">
          to_cloudant_nnrcmr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant_nnrcmr_prepared">
          foreign_to_cloudant_nnrcmr_prepared
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#to_cloudant_nnrcmr_prepared">
          to_cloudant_nnrcmr_prepared
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof27')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof27">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#to_cloudant_nnrcmr">
            to_cloudant_nnrcmr
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#to_cloudant_nnrcmr_prepared">
            to_cloudant_nnrcmr_prepared
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_nnrcmr">
            min_max_free_nnrcmr
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_mr_chain">
            min_max_free_mr_chain
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_mr">
            min_max_free_mr
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_reduce">
            min_max_free_reduce
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">split</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#apply_rewrite">
            apply_rewrite
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_to_stats">
            min_max_to_stats
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#mr_chain_apply_rewrite">
            mr_chain_apply_rewrite
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#Forall_forall">
            Forall_forall
          </a>
        </span>
        ; <span className="tactic">intros</span> ? <span className="id">inn</span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          simpl
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_flat_map">
            in_flat_map
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">inn</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">
          destruct
        </span> <span className="id">inn</span> <span className="kwd">as</span> [?
        [<span className="id">inn1</span> <span className="id">inn2</span>]].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#min_max_free_mr">
            min_max_free_mr
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">simpl</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x0</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="id">invcs</span> <span className="id">inn2</span>;{" "}
        <span className="id">invcs</span> <span className="id">H</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> * .
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">f0</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_flat_map">
            in_flat_map
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">inn1</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">
          destruct
        </span> <span className="id">inn1</span> <span className="kwd">as</span>{" "}
        [? [<span className="id">inn1</span> <span className="id">inn3</span>]].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>;{" "}
        <span className="tactic">intuition</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="id">invcs</span> <span className="id">H</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">f0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>;{" "}
        <span className="tactic">intuition</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="id">invcs</span> <span className="id">H0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="id">invcs</span> <span className="id">H</span> |{" "}
        <span className="id">invcs</span> <span className="id">H1</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_flat_map">
            in_flat_map
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">inn1</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">
          destruct
        </span> <span className="id">inn1</span> <span className="kwd">as</span>{" "}
        [? [<span className="id">inn1</span> <span className="id">inn3</span>]].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>;{" "}
        <span className="tactic">intuition</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="id">invcs</span> <span className="id">H</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">destruct</span> <span className="id">f0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">inn3</span>;{" "}
        <span className="tactic">intuition</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="id">invcs</span> <span className="id">H0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="id">invcs</span> <span className="id">H</span> |{" "}
        <span className="id">invcs</span> <span className="id">H1</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H0</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#apply_rewrite">
            apply_rewrite
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.NNRCMR.Optim.NNRCMRRewrite.html#mr_chain_apply_rewrite">
            mr_chain_apply_rewrite
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_nnrcmr">
            arithmean_free_nnrcmr
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_mr_chain">
            arithmean_free_mr_chain
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          simpl
        </span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#Forall_forall">
            Forall_forall
          </a>
        </span>
        ; <span className="tactic">intros</span> ? <span className="id">inn</span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          apply
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html#in_flat_map">
            in_flat_map
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">inn</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">
          destruct
        </span> <span className="id">inn</span> <span className="kwd">as</span> [?
        [<span className="id">inn1</span> <span className="id">inn2</span>]].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#arithmean_free_mr">
            arithmean_free_mr
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">simpl</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x0</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span>{" "}
        <span className="id">mr_reduce</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">try</span> <span className="id">solve</span> [
        <span className="id">invcs</span> <span className="id">inn2</span>;{" "}
        <span className="id">invcs</span> <span className="id">H</span>].
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">r</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> * .
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">f0</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H0</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">intuition</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nraenv_token_type</span> =&gt; "
      <span className="id">Util.nra_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nraenv_startPass">
          OPTIMIZER_LOGGER_nraenv_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nraenv_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">name</span> <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.nra_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nraenv_step">OPTIMIZER_LOGGER_nraenv_step</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nraenv_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">name</span>{" "}
      <span className="id">input</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nra_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nraenv_endPass">
          OPTIMIZER_LOGGER_nraenv_endPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nraenv_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nra_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_nraenv_optimizer_logger">
          foreign_nraenv_optimizer_logger
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_token_type">
          OPTIMIZER_LOGGER_nraenv_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_startPass">
          OPTIMIZER_LOGGER_nraenv_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_step">
          OPTIMIZER_LOGGER_nraenv_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nraenv_endPass">
          OPTIMIZER_LOGGER_nraenv_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrc_token_type</span> =&gt; "
      <span className="id">Util.nrc_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrc_startPass">
          OPTIMIZER_LOGGER_nnrc_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrc_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">name</span> <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.nrc_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrc_step">OPTIMIZER_LOGGER_nnrc_step</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrc_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">name</span>{" "}
      <span className="id">input</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nrc_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrc_endPass">OPTIMIZER_LOGGER_nnrc_endPass</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrc_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nrc_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_nnrc_optimizer_logger">foreign_nnrc_optimizer_logger</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_token_type">
          OPTIMIZER_LOGGER_nnrc_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_startPass">
          OPTIMIZER_LOGGER_nnrc_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_step">
          OPTIMIZER_LOGGER_nnrc_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrc_endPass">
          OPTIMIZER_LOGGER_nnrc_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_expr_token_type</span> =&gt;
      "<span className="id">Util.nnrs_imp_expr_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_expr_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_expr_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_expr_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">name</span> <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_expr_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_expr_step">
          OPTIMIZER_LOGGER_nnrs_imp_expr_step
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_expr_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">name</span>{" "}
      <span className="id">input</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_expr_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_expr_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_expr_endPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_expr_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_expr_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_nnrs_imp_expr_optimizer_logger">
          foreign_nnrs_imp_expr_optimizer_logger
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_expr_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_expr_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_step">
          OPTIMIZER_LOGGER_nnrs_imp_expr_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_expr_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_expr_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type</span> =&gt;
      "<span className="id">Util.nnrs_imp_stmt_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_stmt_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_stmt_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">name</span> <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_stmt_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_stmt_step">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_step
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_stmt_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">name</span>{" "}
      <span className="id">input</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_stmt_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_stmt_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_endPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_stmt_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_stmt_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_nnrs_imp_stmt_optimizer_logger">
          foreign_nnrs_imp_stmt_optimizer_logger
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_step">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_stmt_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_stmt_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_token_type</span> =&gt; "
      <span className="id">Util.nnrs_imp_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">name</span> <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_step">
          OPTIMIZER_LOGGER_nnrs_imp_step
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">name</span>{" "}
      <span className="id">input</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_nnrs_imp_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_endPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_nnrs_imp_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">token</span> <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.nnrs_imp_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_nnrs_imp_optimizer_logger">
          foreign_nnrs_imp_optimizer_logger
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_token_type">
          OPTIMIZER_LOGGER_nnrs_imp_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_startPass">
          OPTIMIZER_LOGGER_nnrs_imp_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_step">
          OPTIMIZER_LOGGER_nnrs_imp_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_nnrs_imp_endPass">
          OPTIMIZER_LOGGER_nnrs_imp_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      <div className="doc">Foreign typing, used to build the basic_model </div>
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_type_join">enhanced_type_join</a>
      </span>{" "}
      (<span className="id">t1</span> <span className="id">t2</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t1">t1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t2">t2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>
      , <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t2">t2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t1">t1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_type_meet">enhanced_type_meet</a>
      </span>{" "}
      (<span className="id">t1</span> <span className="id">t2</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t1">t1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t2">t2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>
      , <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t2">t2</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t1">t1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_subtype">enhanced_subtype</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span> :=
      <br />|{" "}
      <span className="id">
        <a name="enhanced_subtype_top">enhanced_subtype_top</a>
      </span>{" "}
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>
      <br />|{" "}
      <span className="id">
        <a name="enhanced_subtype_bottom">enhanced_subtype_bottom</a>
      </span>{" "}
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedBottom">
          enhancedBottom
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t">t</a>
      </span>
      <br />|{" "}
      <span className="id">
        <a name="enhanced_subtype_refl">enhanced_subtype_refl</a>
      </span>{" "}
      <span className="id">t</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t">t</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#t">t</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_subtype_pre">enhanced_subtype_pre</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#PreOrder">
          PreOrder
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof28')">
        Proof.
      </div>
      <div className="proofscript" id="proof28">
        &nbsp;&nbsp;<span className="id">constructor</span>;{" "}
        <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">x</span>; <span className="id">constructor</span>.
        <br />
        &nbsp;&nbsp;- <span className="tactic">inversion</span>{" "}
        <span className="id">H</span>; <span className="tactic">inversion</span>{" "}
        <span className="id">H0</span>; <span className="tactic">subst</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="id">constructor</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_subtype_post">enhanced_subtype_post</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#PartialOrder">
          PartialOrder
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq">eq</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof29')">
        Proof.
      </div>
      <div className="proofscript" id="proof29">
        &nbsp;&nbsp;<span className="tactic">intros</span>{" "}
        <span className="id">x</span> <span className="id">y</span>;{" "}
        <span className="tactic">split</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">intros</span>;{" "}
        <span className="tactic">subst</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">repeat</span>{" "}
        <span className="tactic">red</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">split</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span> 1.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">inversion</span>{" "}
        <span className="id">H</span>; <span className="tactic">inversion</span>{" "}
        <span className="id">H0</span>; <span className="tactic">congruence</span>
        .<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_type_lattice">enhanced_type_lattice</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lattice.html#Lattice">
          Lattice
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq">eq</a>
      </span>
      <br />
      &nbsp;&nbsp;:= {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lattice.html#join">
          join
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type_join">
          enhanced_type_join
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lattice.html#meet">
          meet
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type_meet">
          enhanced_type_meet
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof30')">
        Proof.
      </div>
      <div className="proofscript" id="proof30">
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span> <span className="id">t3</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t3</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">simpl</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">simpl</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span> <span className="id">t3</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t3</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">red</span>;{" "}
        <span className="tactic">intros</span> <span className="id">t1</span>{" "}
        <span className="id">t2</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">t1</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">t2</span>; <span className="tactic">simpl</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">reflexivity</span>.<br />
        Defined.
      </div>
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_type_olattice">enhanced_type_olattice</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Lattice.html#OLattice">
          OLattice
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq">eq</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_subtype">
          enhanced_subtype
        </a>
      </span>
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof31')">
        Proof.
      </div>
      <div className="proofscript" id="proof31">
        &nbsp;&nbsp;<span className="id">constructor</span>.<br />
        &nbsp;&nbsp;<span className="tactic">split</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">a</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">b</span>; <span className="tactic">inversion</span>{" "}
        1; <span className="tactic">simpl</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">a</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">b</span>; <span className="tactic">inversion</span>{" "}
        1; <span className="tactic">simpl</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">constructor</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_type">enhanced_foreign_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#mk_foreign_type">
          mk_foreign_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof32')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof32">
        &nbsp;&nbsp;<span className="tactic">red</span>.<br />
        &nbsp;&nbsp;<span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.Equivalence.html#equiv">
            equiv
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.RelationClasses.html#complement">
            complement
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="id">change</span> ({"{"}
        <span className="id">x</span> = <span className="id">y</span>
        {"}"} + {"{"}
        <span className="id">x</span> &lt;&gt; <span className="id">y</span>
        {"}"}).
        <br />
        &nbsp;&nbsp;<span className="id">decide</span>{" "}
        <span className="id">equality</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof33')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof33">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">a</span>; <span className="tactic">destruct</span>{" "}
        <span className="id">b</span>; <span className="tactic">try</span>{" "}
        <span className="id">solve</span> [<span className="id">left</span>;{" "}
        <span className="id">constructor</span> |{" "}
        <span className="id">right</span>;{" "}
        <span className="tactic">inversion</span> 1].
        <br />
        Defined.
      </div>
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_type_to_JSON">enhanced_foreign_type_to_JSON</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignTypeToJSON.html#foreign_type_to_JSON">
          foreign_type_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignTypeToJSON.html#mk_foreign_type_to_JSON">
          mk_foreign_type_to_JSON
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof34')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof34">
        &nbsp;&nbsp;<span className="tactic">exact</span> (
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#string_to_enhanced_type">
            string_to_enhanced_type
          </a>
        </span>{" "}
        <span className="id">s</span>).
        <br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof35')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof35">
        &nbsp;&nbsp;<span className="tactic">exact</span> (
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type_to_string">
            enhanced_type_to_string
          </a>
        </span>{" "}
        <span className="id">fd</span>).
        <br />
        Defined.
      </div>
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_has_type">enhanced_has_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span> :=
      <br />|{" "}
      <span className="id">
        <a name="enhanced_has_type_top">enhanced_has_type_top</a>
      </span>{" "}
      <span className="id">fd</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_has_type">
          enhanced_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fd">fd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedTop">
          enhancedTop
        </a>
      </span>
      <br />|{" "}
      <span className="id">
        <a name="enhanced_has_type_string">enhanced_has_type_string</a>
      </span>{" "}
      (<span className="id">s</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING">
          STRING
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_has_type">
          enhanced_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedstring">
          enhancedstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#s">s</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      <br />|{" "}
      <span className="id">
        <a name="enhanced_has_type_dateTime">enhanced_has_type_dateTime</a>
      </span>{" "}
      (<span className="id">tp</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_has_type">
          enhanced_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tp">tp</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      <br />|{" "}
      <span className="id">
        <a name="enhanced_has_type_dateTimeinterval">
          enhanced_has_type_dateTimeinterval
        </a>
      </span>{" "}
      (<span className="id">tp</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
          DATE_TIME_DURATION
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_has_type">
          enhanced_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tp">tp</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_infer_type">enhanced_infer_type</a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_data">
          enhanced_data
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_type">
          enhanced_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:= <span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedstring">
          enhancedstring
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedString">
          enhancedString
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_data_typing">enhanced_foreign_data_typing</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataTyping.ForeignDataTyping.html#foreign_data_typing">
          foreign_data_typing
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataTyping.ForeignDataTyping.html#mk_foreign_data_typing">
          mk_foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_has_type">
          enhanced_has_type
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_infer_type">
          enhanced_infer_type
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">_</span>
      <br />
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof36')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof36">
        &nbsp;&nbsp;<span className="tactic">inversion</span>{" "}
        <span className="id">H</span>; <span className="tactic">subst</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">simpl</span>;{" "}
        <span className="tactic">trivial</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="id">constructor</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof37')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof37">
        &nbsp;&nbsp;<span className="tactic">inversion</span>{" "}
        <span className="id">H0</span>; <span className="tactic">subst</span>;{" "}
        <span className="tactic">simpl</span>.<br />
        &nbsp;&nbsp;- <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">inversion</span>{" "}
        <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">trivial</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof38')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof38">
        &nbsp;&nbsp;<span className="tactic">inversion</span>{" "}
        <span className="id">H</span>; <span className="tactic">inversion</span>{" "}
        <span className="id">H0</span>; <span className="tactic">subst</span>;{" "}
        <span className="tactic">simpl</span>; <span className="tactic">try</span>{" "}
        <span className="id">constructor</span>;{" "}
        <span className="tactic">congruence</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof39')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof39">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>;{" "}
        <span className="id">eexists</span>;{" "}
        <span className="tactic">reflexivity</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof40')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof40">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="id">invcs</span> <span className="id">H</span>;{" "}
        <span className="id">constructor</span>.<br />
        Defined.
      </div>
      <div className="toggleproof" onclick="toggleDisplay('proof41')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof41">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>,{" "}
        <span className="id">H0</span>
        <br />
        &nbsp;&nbsp;; <span className="id">invcs</span>{" "}
        <span className="id">H</span>; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>; <span className="id">constructor</span>.
        <br />
        Defined.
      </div>
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="dnnrc_for_log">dnnrc_for_log</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;:= (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.DNNRCBase.html#dnnrc_base">
          dnnrc_base
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.tDNNRC.Lang.tDNNRC.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#unit">
          unit
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.Dataframe.html#dataframe">
          dataframe
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>{" "}
      : <span className="kwd">Set</span>.<br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_dnnrc_token_type</span> =&gt; "
      <span className="id">Util.dnrc_logger_token_type</span>".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_dnnrc_startPass">
          OPTIMIZER_LOGGER_dnnrc_startPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">forall</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"},{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dnnrc_for_log">
          dnnrc_for_log
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_dnnrc_startPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">br</span> <span className="id">name</span>{" "}
      <span className="id">input</span> -&gt;{" "}
      <span className="id">Logger.dnrc_log_startPass</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_dnnrc_step">OPTIMIZER_LOGGER_dnnrc_step</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">forall</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}, <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dnnrc_for_log">
          dnnrc_for_log
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dnnrc_for_log">
          dnnrc_for_log
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_dnnrc_step</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">br</span> <span className="id">token</span>{" "}
      <span className="id">name</span> <span className="id">input</span>{" "}
      <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.dnrc_log_step</span>{" "}
      <span className="id">token</span> (
      <span className="id">Util.string_of_char_list</span>{" "}
      <span className="id">name</span>) <span className="id">input</span>{" "}
      <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Axiom</span>{" "}
      <span className="id">
        <a name="OPTIMIZER_LOGGER_dnnrc_endPass">
          OPTIMIZER_LOGGER_dnnrc_endPass
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">forall</span> {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"},{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dnnrc_for_log">
          dnnrc_for_log
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="id">Extract</span>{" "}
      <span className="id">Inlined</span> <span className="id">Constant</span>{" "}
      <span className="id">OPTIMIZER_LOGGER_dnnrc_endPass</span> =&gt;
      <br />
      &nbsp;&nbsp;"(<span className="kwd">fun</span>{" "}
      <span className="id">br</span> <span className="id">token</span>{" "}
      <span className="id">output</span> -&gt;{" "}
      <span className="id">Logger.dnrc_log_endPass</span>{" "}
      <span className="id">token</span> <span className="id">output</span>)".
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="foreign_dnnrc_optimizer_logger">
          foreign_dnnrc_optimizer_logger
        </a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dnnrc_for_log">
          dnnrc_for_log
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger_token_type">
          optimizer_logger_token_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_token_type">
          OPTIMIZER_LOGGER_dnnrc_token_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStartPass">
          logStartPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_startPass">
          OPTIMIZER_LOGGER_dnnrc_startPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logStep">
          logStep
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_step">
          OPTIMIZER_LOGGER_dnnrc_step
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#logEndPass">
          logEndPass
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#OPTIMIZER_LOGGER_dnnrc_endPass">
          OPTIMIZER_LOGGER_dnnrc_endPass
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime">EnhancedRuntime</a>
      </span>{" "}
      &lt;:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerRuntime.html#CompilerRuntime">
          CompilerRuntime
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_type">compiler_foreign_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_runtime">
          compiler_foreign_runtime
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignRuntime.html#foreign_runtime">
          foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_java">
          compiler_foreign_to_java
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#foreign_to_java">
          foreign_to_java
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_java">
          enhanced_foreign_to_java
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_javascript">
          compiler_foreign_to_javascript
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScript.html#foreign_to_javascript">
          foreign_to_javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_javascript">
          enhanced_foreign_to_javascript
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_ajavascript">
          compiler_foreign_to_ajavascript
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScriptAst.html#foreign_to_ajavascript">
          foreign_to_ajavascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_ajavascript">
          enhanced_foreign_to_ajavascript
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_scala">
          compiler_foreign_to_scala
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToScala.html#foreign_to_scala">
          foreign_to_scala
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_scala">
          enhanced_foreign_to_scala
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_JSON">
          compiler_foreign_to_JSON
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignDataToJSON.html#foreign_to_JSON">
          foreign_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_JSON">
          enhanced_foreign_to_JSON
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_type_to_JSON">
          compiler_foreign_type_to_JSON
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignTypeToJSON.html#foreign_type_to_JSON">
          foreign_type_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type_to_JSON">
          enhanced_foreign_type_to_JSON
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_reduce_op">
          compiler_foreign_reduce_op
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.ForeignReduceOps.html#foreign_reduce_op">
          foreign_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_reduce_op">
          enhanced_foreign_reduce_op
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_reduce_op">
          compiler_foreign_to_reduce_op
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToReduceOps.html#foreign_to_reduce_op">
          foreign_to_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_reduce_op">
          enhanced_foreign_to_reduce_op
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_spark">
          compiler_foreign_to_spark
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToSpark.html#foreign_to_spark">
          foreign_to_spark
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_spark">
          enhanced_foreign_to_spark
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_cloudant">
          compiler_foreign_cloudant
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.ForeignCloudant.html#foreign_cloudant">
          foreign_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_cloudant">
          enhanced_foreign_cloudant
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_to_cloudant">
          compiler_foreign_to_cloudant
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant">
          foreign_to_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_cloudant">
          enhanced_foreign_to_cloudant
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_nraenv_optimizer_logger">
          compiler_nraenv_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nraenv_optimizer_logger">
          foreign_nraenv_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_nnrc_optimizer_logger">
          compiler_nnrc_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrc_optimizer_logger">
          foreign_nnrc_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_nnrs_imp_expr_optimizer_logger">
          compiler_nnrs_imp_expr_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_expr_optimizer_logger">
          foreign_nnrs_imp_expr_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_nnrs_imp_stmt_optimizer_logger">
          compiler_nnrs_imp_stmt_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_stmt_optimizer_logger">
          foreign_nnrs_imp_stmt_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_nnrs_imp_optimizer_logger">
          compiler_nnrs_imp_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_optimizer_logger">
          foreign_nnrs_imp_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_dnnrc_optimizer_logger">
          compiler_dnnrc_optimizer_logger
        </a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.DNNRCBase.html#dnnrc_base">
          dnnrc_base
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.tDNNRC.Lang.tDNNRC.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#unit">
          unit
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.Dataframe.html#dataframe">
          dataframe
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_dnnrc_optimizer_logger">
          foreign_dnnrc_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedRuntime.compiler_foreign_data_typing">
          compiler_foreign_data_typing
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataTyping.ForeignDataTyping.html#foreign_data_typing">
          foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data_typing">
          enhanced_foreign_data_typing
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#EnhancedRuntime">
          EnhancedRuntime
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="DateTime">DateTime</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign">
          Foreign
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>
      .<br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="DateTimeInterval">DateTimeInterval</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign">
          Foreign
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="isDateTime">isDateTime</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      τ <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;| <span className="id">Foreign</span>₀{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTime">
          enhancedDateTime
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="isDateTimeInterval">isDateTimeInterval</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      τ <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;| <span className="id">Foreign</span>₀{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedDateTimeInterval">
          enhancedDateTimeInterval
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="isNat">isNat</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      τ <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;| <span className="id">Nat</span>₀ =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="isString">isString</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      τ <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;| <span className="id">String</span>₀ =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      <br />
      &nbsp;&nbsp;| <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
          false
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="tuncoll">tuncoll</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      .<br />
      <div className="toggleproof" onclick="toggleDisplay('proof42')">
        Proof.
      </div>
      <div className="proofscript" id="proof42">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span> τ.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">x</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span> (
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#exist">
            exist
          </a>
        </span>{" "}
        (<span className="kwd">fun</span> τ₀ : <span className="id">rtype</span>₀
        =&gt; <span className="id">wf_rtype</span>₀ τ₀ ={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
            true
          </a>
        </span>
        ) <span className="id">x</span> <span className="id">e</span>)). <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">exact</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;Defined.
      </div>
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="date_time_unary_op_has_type">date_time_unary_op_has_type</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tuop_date_time_component">tuop_date_time_component</a>
      </span>{" "}
      <span className="id">part</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_has_type">
          date_time_unary_op_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#part">part</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Nat">
          Nat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tuop_date_time_from_string">tuop_date_time_from_string</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_has_type">
          date_time_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String">
          RType.String
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tuop_date_time_duration_from_string">
          tuop_date_time_duration_from_string
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_has_type">
          date_time_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String">
          RType.String
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_unary_op_type_infer">date_time_unary_op_type_infer</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>
      ) (τ₁:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">part</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Nat">
          Nat
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isString">
          isString
        </a>
      </span>{" "}
      τ₁ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isString">
          isString
        </a>
      </span>{" "}
      τ₁ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_unary_op_type_infer_sub">
          date_time_unary_op_type_infer_sub
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>
      ) (τ₁:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">part</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_unary_op_schema">
          enforce_unary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Nat">
          Nat
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_unary_op_schema">
          enforce_unary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String">
          RType.String
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_unary_op_schema">
          enforce_unary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String">
          RType.String
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="date_time_unary_op_typing_sound">
          date_time_unary_op_typing_sound
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fu</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_unary_op">
          date_time_unary_op
        </a>
      </span>
      ) (τ<span className="kwd">in</span> τ<span className="id">out</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_has_type">
          date_time_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ<span className="kwd">in</span> τ<span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
      <span className="id">din</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#din">din</a>
      </span>{" "}
      ▹ τ<span className="kwd">in</span> -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">exists</span>{" "}
      <span className="id">dout</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_interp">
          date_time_unary_op_interp
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#din">din</a>
      </span>{" "}
      ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      /\{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      ▹ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof43')">
        Proof.
      </div>
      <div className="proofscript" id="proof43">
        &nbsp;&nbsp;<span className="tactic">inversion</span> 1;{" "}
        <span className="tactic">subst</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">try</span>{" "}
        <span className="id">solve</span>[
        <span className="tactic">inversion</span> 1;{" "}
        <span className="tactic">subst</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          try
        </span>{" "}
        <span className="id">invcs</span> <span className="id">H0</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          try
        </span>{" "}
        <span className="id">invcs</span> <span className="id">H3</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          simpl
        </span>; <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTime">
            denhanceddateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#denhanceddateTimeinterval">
            denhanceddateTimeinterval
          </a>
        </span>
        ; <span className="tactic">simpl</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">
          eexists
        </span>; <span className="tactic">split</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          repeat
        </span>{" "}
        <span className="id">constructor</span>].
        <br />
        Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_has_type">enhanced_unary_op_has_type</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tenhanced_unary_date_time_op">tenhanced_unary_date_time_op</a>
      </span>{" "}
      <span className="id">fu</span> τ<span className="kwd">in</span> τ
      <span className="id">out</span>:<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_has_type">
          date_time_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ<span className="kwd">in</span> τ<span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>
      ) τ<span className="kwd">in</span> τ<span className="id">out</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_infer">
          enhanced_unary_op_typing_infer
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">fu</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      ) (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_type_infer">
          date_time_unary_op_type_infer
        </a>
      </span>{" "}
      <span className="id">op</span> τ<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_infer_correct">
          enhanced_unary_op_typing_infer_correct
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fu</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_type">
          foreign_unary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ
      <span className="id">out</span>
      {"}"} :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer">
          enhanced_unary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      τ<span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof44')">
        Proof.
      </div>
      <div className="proofscript" id="proof44">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fu</span>; <span className="tactic">simpl</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">ft</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;{" "}
        <span className="id">constructor</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign_canon">
            Foreign_canon
          </a>
        </span>
        ; <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;{" "}
        <span className="id">constructor</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String_canon">
            String_canon
          </a>
        </span>
        ; <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;{" "}
        <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String_canon">
            String_canon
          </a>
        </span>
        ; <span className="id">constructor</span>.<br />
        &nbsp;&nbsp;Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_infer_least">
          enhanced_unary_op_typing_infer_least
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fu</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_type">
          foreign_unary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ
      <span className="id">out</span>₁ τ<span className="id">out</span>₂{"}"} :
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer">
          enhanced_unary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      τ<span className="id">out</span>₁ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ τ<span className="id">out</span>₂ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;τ<span className="id">out</span>₁ ≤ τ
      <span className="id">out</span>₂.
      <br />
      <div className="toggleproof" onclick="toggleDisplay('proof45')">
        Proof.
      </div>
      <div className="proofscript" id="proof45">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fu</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">destruct</span> <span className="id">ft</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign_canon">
            Foreign_canon
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H0</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H0</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H0</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H1</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H1</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String_canon">
            String_canon
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H0</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H0</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H0</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H1</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H1</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">inversion</span> <span className="id">H</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String_canon">
            String_canon
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H0</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H0</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H0</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H1</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H1</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">reflexivity</span>.<br />
        &nbsp;&nbsp;Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_infer_complete">
          enhanced_unary_op_typing_infer_complete
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">fu</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_type">
          foreign_unary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ
      <span className="id">out</span>
      {"}"} : <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer">
          enhanced_unary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;~{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ₁ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof46')">
        Proof.
      </div>
      <div className="proofscript" id="proof46">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fu</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">congruence</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          unfold
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#not">not</a>
        </span>
        ; <span className="tactic">intros</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H0</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H0</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> <span className="id">H2</span>;{" "}
        <span className="tactic">subst</span>;{" "}
        <span className="tactic">clear</span> <span className="id">H2</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">congruence</span>.
        <br />
        &nbsp;&nbsp;Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_infer_sub">
          enhanced_unary_op_typing_infer_sub
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">fu</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op">
          enhanced_unary_op
        </a>
      </span>
      ) (τ:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">op</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_type_infer_sub">
          date_time_unary_op_type_infer_sub
        </a>
      </span>{" "}
      <span className="id">op</span> τ<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_unary_op_typing_sound">
          enhanced_unary_op_typing_sound
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fu</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_unary_op_type">
          foreign_unary_op_type
        </a>
      </span>
      ) (τ<span className="kwd">in</span> τ<span className="id">out</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ<span className="kwd">in</span> τ<span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
      <span className="id">din</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#din">din</a>
      </span>{" "}
      ▹ τ<span className="kwd">in</span> -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">exists</span>{" "}
      <span className="id">dout</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_interp">
          enhanced_unary_op_interp
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation_brands">
          brand_relation_brands
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#din">din</a>
      </span>{" "}
      ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      /\{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      ▹ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof47')">
        Proof.
      </div>
      <div className="proofscript" id="proof47">
        &nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">eapply</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_unary_op_typing_sound">
            date_time_unary_op_typing_sound
          </a>
        </span>
        ; <span className="tactic">eauto</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_unary_op_typing">
          enhanced_foreign_unary_op_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing">
          foreign_unary_op_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_unary_op">
          enhanced_foreign_unary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data_typing">
          enhanced_foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#model">model</a>
      </span>
      <br />
      &nbsp;&nbsp;:= {"{"}{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_has_type">
          foreign_unary_op_typing_has_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_has_type">
          enhanced_unary_op_has_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_sound">
          foreign_unary_op_typing_sound
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_sound">
          enhanced_unary_op_typing_sound
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_infer">
          foreign_unary_op_typing_infer
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer">
          enhanced_unary_op_typing_infer
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_infer_correct">
          foreign_unary_op_typing_infer_correct
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer_correct">
          enhanced_unary_op_typing_infer_correct
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_infer_least">
          foreign_unary_op_typing_infer_least
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer_least">
          enhanced_unary_op_typing_infer_least
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_infer_complete">
          foreign_unary_op_typing_infer_complete
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer_complete">
          enhanced_unary_op_typing_infer_complete
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_unary_op_typing_infer_sub">
          foreign_unary_op_typing_infer_sub
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_op_typing_infer_sub">
          enhanced_unary_op_typing_infer_sub
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="date_time_binary_op_has_type">date_time_binary_op_has_type</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span>
      <br />
      &nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_plus">tbop_date_time_plus</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_minus">tbop_date_time_minus</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_ne">tbop_date_time_ne</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_lt">tbop_date_time_lt</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_le">tbop_date_time_le</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
          bop_date_time_le
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_gt">tbop_date_time_gt</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_ge">tbop_date_time_ge</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
          bop_date_time_ge
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_duration">tbop_date_time_duration</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
          bop_date_time_duration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_duration_days">tbop_date_time_duration_days</a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tbop_date_time_duration_seconds">
          tbop_date_time_duration_seconds
        </a>
      </span>{" "}
      :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>
      <br />
      .<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_binary_op_type_infer">
          date_time_binary_op_type_infer
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>
      ) (τ₁ τ₂:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTimeInterval">
          isDateTimeInterval
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTimeInterval">
          isDateTimeInterval
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
          bop_date_time_le
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
          bop_date_time_ge
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
          bop_date_time_duration
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₁ &amp;&amp;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
          isDateTime
        </a>
      </span>{" "}
      τ₂ <span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>{" "}
      <span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="date_time_binary_op_typing_sound">
          date_time_binary_op_typing_sound
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fb</span> :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>
      ) (τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
      <span className="id">din</span>₁ <span className="id">din</span>₂ :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">din</span>₁ ▹ τ
      <span className="kwd">in</span>₁ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">din</span>₂ ▹ τ
      <span className="kwd">in</span>₂ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">exists</span>{" "}
      <span className="id">dout</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_interp">
          date_time_binary_op_interp
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      <span className="id">din</span>₁ <span className="id">din</span>₂ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      /\{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      ▹ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof48')">
        Proof.
      </div>
      <div className="proofscript" id="proof48">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">inversion</span> 1;{" "}
        <span className="tactic">subst</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> 1;{" "}
        <span className="tactic">subst</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">inversion</span> 1;{" "}
        <span className="tactic">subst</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          try
        </span>{" "}
        <span className="id">invcs</span> <span className="id">H0</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          try
        </span>{" "}
        <span className="id">invcs</span> <span className="id">H1</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">invcs</span>{" "}
        <span className="id">H3</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          try
        </span>{" "}
        <span className="id">invcs</span> <span className="id">H4</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">
          simpl
        </span>; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">eexists</span>; <span className="tactic">split</span>
        ; <span className="tactic">try</span>{" "}
        <span className="tactic">reflexivity</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">repeat</span>{" "}
        <span className="id">constructor</span>.<br />
        Qed.
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="date_time_binary_op_type_infer_sub">
          date_time_binary_op_type_infer_sub
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_binary_op">
          date_time_binary_op
        </a>
      </span>
      ) (τ₁ τ₂:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
          bop_date_time_le
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
          bop_date_time_ge
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          Bool
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration">
          bop_date_time_duration
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>{" "}
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enforce_binary_op_schema">
          enforce_binary_op_schema
        </a>
      </span>{" "}
      (τ₁,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ) (τ₂,
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          Float
        </a>
      </span>
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Inductive</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_has_type">enhanced_binary_op_has_type</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a name="tenhanced_binary_date_time_op">tenhanced_binary_date_time_op</a>
      </span>{" "}
      <span className="id">fb</span> τ<span className="kwd">in</span>₁ τ
      <span className="kwd">in</span>₂ τ<span className="id">out</span>:<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_has_type">
          date_time_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>
      ) τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span>.<br />
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_infer">
          enhanced_binary_op_typing_infer
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      ) (τ₁ τ₂:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">fb</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_type_infer">
          date_time_binary_op_type_infer
        </a>
      </span>{" "}
      <span className="id">fb</span> τ₁ τ₂
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_infer_correct">
          enhanced_binary_op_typing_infer_correct
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fb</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_type">
          foreign_binary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ₂ τ
      <span className="id">out</span>
      {"}"} :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer">
          enhanced_binary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      τ<span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof49')">
        Proof.
      </div>
      <div className="proofscript" id="proof49">
        &nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fb</span>; <span className="tactic">simpl</span>.
        <br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">destruct</span> τ₂;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
            isDateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTimeInterval">
            isDateTimeInterval
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isNat">isNat</a>
        </span>{" "}
        <span className="kwd">in</span> *<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
        <span className="tactic">destruct</span> <span className="id">x</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">destruct</span>{" "}
        <span className="id">ft</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">destruct</span>{" "}
        <span className="id">x0</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">try</span> (
        <span className="tactic">destruct</span> <span className="id">ft</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">invcs</span>{" "}
        <span className="id">H</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">constructor</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">repeat</span>{" "}
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Nat_canon">
            Nat_canon
          </a>
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">repeat</span>{" "}
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign_canon">
            Foreign_canon
          </a>
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">try</span>{" "}
        <span className="id">constructor</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_infer_least">
          enhanced_binary_op_typing_infer_least
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fb</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_type">
          foreign_binary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ₂ τ
      <span className="id">out</span>₁ τ<span className="id">out</span>₂{"}"} :{" "}
      <br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer">
          enhanced_binary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      τ<span className="id">out</span>₁ -&gt;
      <br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ τ<span className="id">out</span>₂ -&gt;
      <br />
      &nbsp;&nbsp;τ<span className="id">out</span>₁ ≤ τ
      <span className="id">out</span>₂.
      <br />
      <div className="toggleproof" onclick="toggleDisplay('proof50')">
        Proof.
      </div>
      <div className="proofscript" id="proof50">
        &nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fb</span>; <span className="tactic">simpl</span>.
        <br />
        &nbsp;&nbsp;- <span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="tactic">destruct</span> τ₁;{" "}
        <span className="tactic">destruct</span> τ₂;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span> *;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">unfold</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTime">
            isDateTime
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isDateTimeInterval">
            isDateTimeInterval
          </a>
        </span>
        ,{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#isNat">isNat</a>
        </span>{" "}
        <span className="kwd">in</span> *<br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">destruct</span>{" "}
        <span className="id">x</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">destruct</span>{" "}
        <span className="id">ft</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">destruct</span>{" "}
        <span className="id">x0</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">try</span> (
        <span className="tactic">destruct</span> <span className="id">ft</span>;{" "}
        <span className="tactic">simpl</span> <span className="kwd">in</span>{" "}
        <span className="id">H</span>; <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">invcs</span>{" "}
        <span className="id">H</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">repeat</span>{" "}
        <span className="tactic">rewrite</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Foreign_canon">
            Foreign_canon
          </a>
        </span>{" "}
        <span className="kwd">in</span> <span className="id">H0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">invcs</span>{" "}
        <span className="id">H0</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="id">invcs</span>{" "}
        <span className="id">H1</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;; <span className="tactic">reflexivity</span>.
        <br />
        Qed.
      </div>
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_infer_complete">
          enhanced_binary_op_typing_infer_complete
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fb</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_type">
          foreign_binary_op_type
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}τ₁ τ₂ τ
      <span className="id">out</span>
      {"}"} : <br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer">
          enhanced_binary_op_typing_infer
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      -&gt;
      <br />
      &nbsp;&nbsp;~{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fb">fb</a>
      </span>{" "}
      τ₁ τ₂ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof51')">
        Proof.
      </div>
      <div className="proofscript" id="proof51">
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">fb</span>; <span className="tactic">simpl</span>;{" "}
        <span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">intro</span>{" "}
        <span className="id">HH</span>; <span className="id">invcs</span>{" "}
        <span className="id">HH</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">d</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> *; <span className="id">invcs</span>{" "}
        <span className="id">H1</span>; <span className="tactic">simpl</span>{" "}
        <span className="kwd">in</span> <span className="id">H</span>;{" "}
        <span className="tactic">try</span>{" "}
        <span className="tactic">discriminate</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_infer_sub">
          enhanced_binary_op_typing_infer_sub
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">op</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op">
          enhanced_binary_op
        </a>
      </span>
      ) (τ₁ τ₂:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#op">op</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">fb</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_type_infer_sub">
          date_time_binary_op_type_infer_sub
        </a>
      </span>{" "}
      <span className="id">fb</span> τ₁ τ₂
      <br />
      &nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      <span className="kwd">Lemma</span>{" "}
      <span className="id">
        <a name="enhanced_binary_op_typing_sound">
          enhanced_binary_op_typing_sound
        </a>
      </span>{" "}
      {"{"}
      <span className="id">model</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<span className="id">fu</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.ForeignOperators.html#foreign_binary_op_type">
          foreign_binary_op_type
        </a>
      </span>
      ) (τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      τ<span className="kwd">in</span>₁ τ<span className="kwd">in</span>₂ τ
      <span className="id">out</span> -&gt;
      <br />
      &nbsp;&nbsp;<span className="kwd">forall</span>{" "}
      <span className="id">din</span>₁ <span className="id">din</span>₂ :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">din</span>₁ ▹ τ
      <span className="kwd">in</span>₁ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">din</span>₂ ▹ τ
      <span className="kwd">in</span>₂ -&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="id">exists</span>{" "}
      <span className="id">dout</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      ,<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_interp">
          enhanced_binary_op_interp
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation_brands">
          brand_relation_brands
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#fu">fu</a>
      </span>{" "}
      <span className="id">din</span>₁ <span className="id">din</span>₂ ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      /\{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#dout">dout</a>
      </span>{" "}
      ▹ τ<span className="id">out</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof52')">
        Proof.
      </div>
      <div className="proofscript" id="proof52">
        &nbsp;&nbsp;<span className="tactic">intros</span>.<br />
        &nbsp;&nbsp;<span className="tactic">destruct</span>{" "}
        <span className="id">H</span>.<br />
        &nbsp;&nbsp;- <span className="tactic">eapply</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#date_time_binary_op_typing_sound">
            date_time_binary_op_typing_sound
          </a>
        </span>
        ; <span className="tactic">eauto</span>.<br />
        Qed.
      </div>
      <br />
      <span className="kwd">
        Program
      </span> <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_binary_op_typing">
          enhanced_foreign_binary_op_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing">
          foreign_binary_op_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data">
          enhanced_foreign_data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_binary_op">
          enhanced_foreign_binary_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data_typing">
          enhanced_foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#model">model</a>
      </span>
      <br />
      &nbsp;&nbsp;:= {"{"}{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_has_type">
          foreign_binary_op_typing_has_type
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_has_type">
          enhanced_binary_op_has_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_sound">
          foreign_binary_op_typing_sound
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_sound">
          enhanced_binary_op_typing_sound
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_infer">
          foreign_binary_op_typing_infer
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer">
          enhanced_binary_op_typing_infer
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_infer_correct">
          foreign_binary_op_typing_infer_correct
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer_correct">
          enhanced_binary_op_typing_infer_correct
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_infer_least">
          foreign_binary_op_typing_infer_least
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer_least">
          enhanced_binary_op_typing_infer_least
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_infer_complete">
          foreign_binary_op_typing_infer_complete
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer_complete">
          enhanced_binary_op_typing_infer_complete
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.ForeignOperatorsTyping.html#foreign_binary_op_typing_infer_sub">
          foreign_binary_op_typing_infer_sub
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_op_typing_infer_sub">
          enhanced_binary_op_typing_infer_sub
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}.<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_foreign_typing">enhanced_foreign_typing</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"}:<br />
      &nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignTyping.html#foreign_typing">
          foreign_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#model">model</a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignTyping.html#mk_foreign_typing">
          mk_foreign_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">model</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data_typing">
          enhanced_foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_unary_op_typing">
          enhanced_foreign_unary_op_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_binary_op_typing">
          enhanced_foreign_binary_op_typing
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Instance</span>{" "}
      <span className="id">
        <a name="enhanced_basic_model">enhanced_basic_model</a>
      </span>{" "}
      {"{"}
      <span className="id">model</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :<br />
      &nbsp;&nbsp;
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html#basic_model">
          basic_model
        </a>
      </span>
      <br />
      &nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html#mk_basic_model">
          mk_basic_model
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_runtime">
          enhanced_foreign_runtime
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="id">model</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_typing">
          enhanced_foreign_typing
        </a>
      </span>
      .<br />
      <br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="EnhancedForeignType">EnhancedForeignType</a>
      </span>{" "}
      &lt;:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerModel.html#CompilerForeignType">
          CompilerForeignType
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedForeignType.compiler_foreign_type">
          compiler_foreign_type
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#EnhancedForeignType">
          EnhancedForeignType
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.ZArith.ZArith.html">ZArith</a>
      </span>
      .<br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="EnhancedModel">EnhancedModel</a>
      </span>
      (<span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerModel.html#CompilerBrandModel">
          CompilerBrandModel
        </a>
      </span>
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#EnhancedForeignType">
          EnhancedForeignType
        </a>
      </span>
      )) &lt;:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.CompilerModel.html#CompilerModel">
          CompilerModel
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_foreign_type">compiler_foreign_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_basic_model">compiler_basic_model</a>
      </span>{" "}
      : @
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html#basic_model">
          basic_model
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= @
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_basic_model">
          enhanced_basic_model
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#bm.compiler_brand_model">
          bm.compiler_brand_model
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_java">
          compiler_model_foreign_to_java
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJava.html#foreign_to_java">
          foreign_to_java
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_java">
          enhanced_foreign_to_java
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_javascript">
          compiler_model_foreign_to_javascript
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScript.html#foreign_to_javascript">
          foreign_to_javascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_javascript">
          enhanced_foreign_to_javascript
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_ajavascript">
          compiler_model_foreign_to_ajavascript
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToJavaScriptAst.html#foreign_to_ajavascript">
          foreign_to_ajavascript
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_ajavascript">
          enhanced_foreign_to_ajavascript
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_scala">
          compiler_model_foreign_to_scala
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToScala.html#foreign_to_scala">
          foreign_to_scala
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_scala">
          enhanced_foreign_to_scala
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_JSON">
          compiler_model_foreign_to_JSON
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.ForeignDataToJSON.html#foreign_to_JSON">
          foreign_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_JSON">
          enhanced_foreign_to_JSON
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_type_to_JSON">
          compiler_model_foreign_type_to_JSON
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignTypeToJSON.html#foreign_type_to_JSON">
          foreign_type_to_JSON
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type_to_JSON">
          enhanced_foreign_type_to_JSON
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_reduce_op">
          compiler_model_foreign_reduce_op
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRCMR.Lang.ForeignReduceOps.html#foreign_reduce_op">
          foreign_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_reduce_op">
          enhanced_foreign_reduce_op
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_reduce_op">
          compiler_model_foreign_to_reduce_op
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToReduceOps.html#foreign_to_reduce_op">
          foreign_to_reduce_op
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_reduce_op">
          enhanced_foreign_to_reduce_op
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_spark">
          compiler_model_foreign_to_spark
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToSpark.html#foreign_to_spark">
          foreign_to_spark
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_spark">
          enhanced_foreign_to_spark
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_cloudant">
          compiler_model_foreign_cloudant
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.CldMR.Lang.ForeignCloudant.html#foreign_cloudant">
          foreign_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_cloudant">
          enhanced_foreign_cloudant
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_to_cloudant">
          compiler_model_foreign_to_cloudant
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Translation.ForeignToCloudant.html#foreign_to_cloudant">
          foreign_to_cloudant
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_to_cloudant">
          enhanced_foreign_to_cloudant
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_nraenv_optimizer_logger">
          compiler_model_nraenv_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NRAEnv.Lang.NRAEnv.html#nraenv">
          nraenv
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nraenv_optimizer_logger">
          foreign_nraenv_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_nnrc_optimizer_logger">
          compiler_model_nnrc_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRC.Lang.NNRC.html#nnrc">
          nnrc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrc_optimizer_logger">
          foreign_nnrc_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_nnrs_imp_expr_optimizer_logger">
          compiler_model_nnrs_imp_expr_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_expr">
          nnrs_imp_expr
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_expr_optimizer_logger">
          foreign_nnrs_imp_expr_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_nnrs_imp_stmt_optimizer_logger">
          compiler_model_nnrs_imp_stmt_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp_stmt">
          nnrs_imp_stmt
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_stmt_optimizer_logger">
          foreign_nnrs_imp_stmt_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_nnrs_imp_optimizer_logger">
          compiler_model_nnrs_imp_optimizer_logger
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.NNRSimp.Lang.NNRSimp.html#nnrs_imp">
          nnrs_imp
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_nnrs_imp_optimizer_logger">
          foreign_nnrs_imp_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_dnnrc_optimizer_logger">
          compiler_model_dnnrc_optimizer_logger
        </a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"}:{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.OptimizerLogger.html#optimizer_logger">
          optimizer_logger
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.DNNRCBase.html#dnnrc_base">
          dnnrc_base
        </a>
      </span>{" "}
      <span className="id">_</span> (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.tDNNRC.Lang.tDNNRC.html#type_annotation">
          type_annotation
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#unit">
          unit
        </a>
      </span>
      ){" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.DNNRC.Lang.Dataframe.html#dataframe">
          dataframe
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#foreign_dnnrc_optimizer_logger">
          foreign_dnnrc_optimizer_logger
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="EnhancedModel.compiler_model_foreign_data_typing">
          compiler_model_foreign_data_typing
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataTyping.ForeignDataTyping.html#foreign_data_typing">
          foreign_data_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_data_typing">
          enhanced_foreign_data_typing
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#EnhancedModel">
          EnhancedModel
        </a>
      </span>
      .<br />
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced">CompEnhanced</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced">Enhanced</a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Model">Model</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Model.basic_model">basic_model</a>
      </span>{" "}
      (<span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.CommonSystem.html#basic_model">
          basic_model
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:= @
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_basic_model">
          enhanced_basic_model
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#bm">bm</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Model.foreign_type">foreign_type</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.ForeignType.html#foreign_type">
          foreign_type
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_type">
          enhanced_foreign_type
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Model.foreign_typing">foreign_typing</a>
      </span>{" "}
      (<span className="id">bm</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.ForeignTyping.html#foreign_typing">
          foreign_typing
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:= @
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_foreign_typing">
          enhanced_foreign_typing
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#bm">bm</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Model">
          Model
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data">Data</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.dstringblob">dstringblob</a>
      </span>{" "}
      (<span className="id">s</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING">
          STRING
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhancedstring">
          enhancedstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#s">s</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.jstringblob">jstringblob</a>
      </span>{" "}
      (<span className="id">s</span> :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Compiler.Model.StringModelPart.html#STRING">
          STRING
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#json">
          json
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.JSON.html#jstring">
          jstring
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#jenhancedstring">
          jenhancedstring
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#s">s</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.date_time_part">date_time_part</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
          date_time_component
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.date_time_day">date_time_day</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Data.date_time_part">
          date_time_part
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_DAY">
          date_time_DAY
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.date_time_month">date_time_month</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Data.date_time_part">
          date_time_part
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_MONTH">
          date_time_MONTH
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.date_time_quarter">
          date_time_quarter
        </a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Data.date_time_part">
          date_time_part
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_QUARTER">
          date_time_QUARTER
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.date_time_year">date_time_year</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Data.date_time_part">
          date_time_part
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_YEAR">
          date_time_YEAR
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.ddate_time">ddate_time</a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME">
          DATE_TIME
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTime">
          enhanceddateTime
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">
        Definition
      </span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Data.ddate_time_duration">
          ddate_time_duration
        </a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#DATE_TIME_DURATION">
          DATE_TIME_DURATION
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#dforeign">
          dforeign
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanceddateTimeinterval">
          enhanceddateTimeinterval
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#d">d</a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Data">
          Data
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops">Ops</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary">Unary</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.date_time_component">
          date_time_component
        </a>
      </span>{" "}
      (<span className="id">component</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#date_time_component">
          date_time_component
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_component">
          uop_date_time_component
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#component">
          component
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.date_time_from_string">
          date_time_from_string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_from_string">
          uop_date_time_from_string
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.date_time_duration_from_string">
          date_time_duration_from_string
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#OpForeignUnary">
          OpForeignUnary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_unary_date_time_op">
          enhanced_unary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#uop_date_time_duration_from_string">
          uop_date_time_duration_from_string
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.OpDateTimeComponent">
          OpDateTimeComponent
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Unary.date_time_component">
          date_time_component
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.OpDateTimeFromString">
          OpDateTimeFromString
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Unary.date_time_from_string">
          date_time_from_string
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Unary.OpDateTimeIntervalFromString">
          OpDateTimeIntervalFromString
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Unary.date_time_duration_from_string">
          date_time_duration_from_string
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Unary">
          Unary
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary">Binary</a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_plus">
          date_time_plus
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_plus">
          bop_date_time_plus
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_minus">
          date_time_minus
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_minus">
          bop_date_time_minus
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_ne">date_time_ne</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ne">
          bop_date_time_ne
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_lt">date_time_lt</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_lt">
          bop_date_time_lt
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_le">date_time_le</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_le">
          bop_date_time_le
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_gt">date_time_gt</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_gt">
          bop_date_time_gt
        </a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_ge">date_time_ge</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_ge">
          bop_date_time_ge
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_duration_days">
          date_time_duration_days
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_days">
          bop_date_time_duration_days
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.date_time_duration_seconds">
          date_time_duration_seconds
        </a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#OpForeignBinary">
          OpForeignBinary
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#enhanced_binary_date_time_op">
          enhanced_binary_date_time_op
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Model.DateTimeModelPart.html#bop_date_time_duration_seconds">
          bop_date_time_duration_seconds
        </a>
      </span>
      )).
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimePlus">
          OpDateTimePlus
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_plus">
          date_time_plus
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeMinus">
          OpDateTimeMinus
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_minus">
          date_time_minus
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeNe">OpDateTimeNe</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_ne">
          date_time_ne
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeLt">OpDateTimeLt</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_lt">
          date_time_lt
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeLe">OpDateTimeLe</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_le">
          date_time_le
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeGt">OpDateTimeGt</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_gt">
          date_time_gt
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeGe">OpDateTimeGe</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_ge">
          date_time_ge
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeIntervalDays">
          OpDateTimeIntervalDays
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_duration_days">
          date_time_duration_days
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="CompEnhanced.Enhanced.Ops.Binary.OpDateTimeIntervalSeconds">
          OpDateTimeIntervalSeconds
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary.date_time_duration_seconds">
          date_time_duration_seconds
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops.Binary">
          Binary
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced.Ops">
          Ops
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced.Enhanced">
          Enhanced
        </a>
      </span>
      .<br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#CompEnhanced">
          CompEnhanced
        </a>
      </span>
      . <br />
      <br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  