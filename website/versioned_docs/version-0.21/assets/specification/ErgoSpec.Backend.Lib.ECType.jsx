<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Backend.Lib.ECType</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Backend.Lib.ECType"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Backend.Lib.ECType</h1>
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
        <a href="https://querycert.github.io/html/Qcert.Common.CommonTypes.html">
          Qcert.Common.CommonTypes
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypingRuntime.html">
          Qcert.Common.TypingRuntime
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendRuntime.html">
          ErgoSpec.Backend.Model.ErgoBackendRuntime
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
      <br />
      <span className="kwd">Module</span>{" "}
      <span className="id">
        <a name="ECType">ECType</a>
      </span>
      (<span className="id">ergomodel</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoBackendModel.html#ErgoBackendModel">
          ErgoBackendModel
        </a>
      </span>
      ).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.empty_brand_model">empty_brand_model</a>
      </span>{" "}
      (<span className="id">x</span>:
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#unit">
          unit
        </a>
      </span>
      ) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#empty_brand_model">
          TBrandModel.empty_brand_model
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.record_kind">record_kind</a>
      </span>{" "}
      : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#record_kind">
          RType.record_kind
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.open_kind">open_kind</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.record_kind">
          record_kind
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Open">
          RType.Open
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.closed_kind">closed_kind</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.record_kind">
          record_kind
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Closed">
          RType.Closed
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ectype_struct">ectype_struct</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:= <span className="id">RType.rtype</span>₀.
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ectype">ectype</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          RType.rtype
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.t">t</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} : <span className="kwd">Set</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.sorted_pf_type">sorted_pf_type</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} <span className="id">srl</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.SortingAdd.html#is_list_sorted">
          SortingAdd.is_list_sorted
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#ODT_lt_dec">
          Bindings.ODT_lt_dec
        </a>
      </span>{" "}
      (@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#domain">
          Assoc.domain
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          String.string
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#srl">srl</a>
      </span>
      ) ={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
          true
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbottom">tbottom</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bottom">
          RType.Bottom
        </a>
      </span>
      . <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ttop">ttop</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Top">
          RType.Top
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tunit">tunit</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Unit">
          RType.Unit
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tfloat">tfloat</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Float">
          RType.Float
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tnat">tnat</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Nat">
          RType.Nat
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbool">tbool</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Bool">
          RType.Bool
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tstring">tstring</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#String">
          RType.String
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tdateTime">tdateTime</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTime">
          DateTime
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tduration">tduration</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#DateTimeInterval">
          DateTimeInterval
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tcoll">tcoll</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Coll">
          RType.Coll
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.trec">trec</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.record_kind">
          record_kind
        </a>
      </span>{" "}
      -&gt; <span className="kwd">forall</span> (<span className="id">r</span>:
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
      </span>
      *
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      )),{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.sorted_pf_type">
          sorted_pf_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#r">r</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Rec">
          RType.Rec
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.teither">teither</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Either">
          RType.Either
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tarrow">tarrow</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Arrow">
          RType.Arrow
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbrand">tbrand</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Brand">
          RType.Brand
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.toption">toption</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;:={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Option">
          RType.Option
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_meet">ergoc_type_meet</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RTypeMeetJoin.html#rtype_meet">
          rtype_meet
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_join">ergoc_type_join</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RTypeMeetJoin.html#rtype_join">
          rtype_join
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_subtype">ergoc_type_subtype</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt; <span className="kwd">Prop</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RSubtype.html#subtype">
          subtype
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Theorem</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_subtype_dec">ergoc_type_subtype_dec</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">t1</span> <span className="id">t2</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ergoc_type_subtype">
          ergoc_type_subtype
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t1">t1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t2">t2</a>
      </span>
      {"}"} + {"{"}~{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ergoc_type_subtype">
          ergoc_type_subtype
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t1">t1</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t2">t2</a>
      </span>
      {"}"}.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof53')">
        Proof.
      </div>
      <div className="proofscript" id="proof53">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">apply</span>{" "}
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RSubtype.html#subtype_dec">
            subtype_dec
          </a>
        </span>
        .<br />
        &nbsp;&nbsp;Defined.
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.untcoll">untcoll</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Model.ErgoEnhancedModel.html#tuncoll">
          tuncoll
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.unteither">unteither</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tuneither">
          tuneither
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.untrec">untrec</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.record_kind">
          record_kind
        </a>
      </span>{" "}
      * (
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ))) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec">
          tunrec
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_infer_data">ergoc_type_infer_data</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataModel.Data.html#data">
          data
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          Datatypes.option
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.DataTyping.TDataInfer.html#infer_data_type">
          infer_data_type
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_infer_binary_op">ergoc_type_infer_binary_op</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.BinaryOperators.html#binary_op">
          binary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TOperatorsInferSub.html#infer_binary_op_type_sub">
          infer_binary_op_type_sub
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_infer_unary_op">ergoc_type_infer_unary_op</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} :{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.UnaryOperators.html#unary_op">
          unary_op
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#option">
          option
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TOperatorsInferSub.html#infer_unary_op_type_sub">
          infer_unary_op_type_sub
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.unpack_ergoc_type">unpack_ergoc_type</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype_struct">
          ectype_struct
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>
      .<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbrand_relation">tbrand_relation</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tempty_brand_relation">tempty_brand_relation</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_relation">
          tbrand_relation
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#mkBrand_relation">
          mkBrand_relation
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq_refl">
          eq_refl
        </a>
      </span>{" "}
      <span className="id">_</span>) (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Logic.html#eq_refl">
          eq_refl
        </a>
      </span>{" "}
      <span className="id">_</span>).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.mk_tbrand_relation">mk_tbrand_relation</a>
      </span>{" "}
      :{" "}
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
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>
      ) -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#qresult">
          qresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_relation">
          tbrand_relation
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Schema.Schema.html#mk_brand_relation">
          Schema.mk_brand_relation
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbrand_context_decls">tbrand_context_decls</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandContext.html#brand_context_decls">
          brand_context_decls
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbrand_context">tbrand_context</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandContext.html#brand_context">
          brand_context
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.mk_tbrand_context">mk_tbrand_context</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_context_decls">
          tbrand_context_decls
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_context">
          tbrand_context
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Schema.Schema.html#mk_brand_context">
          mk_brand_context
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#br">br</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tbrand_model">tbrand_model</a>
      </span>{" "}
      : <span className="kwd">Set</span> :={" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      .<br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.mk_tbrand_model">mk_tbrand_model</a>
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_context_decls">
          tbrand_context_decls
        </a>
      </span>{" "}
      -&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Results.QResult.html#qresult">
          qresult
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_model">
          tbrand_model
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Schema.Schema.html#make_brand_model_from_decls_fails">
          Schema.make_brand_model_from_decls_fails
        </a>
      </span>{" "}
      <span className="id">_</span> <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#br">br</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Program</span>{" "}
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.tempty_brand_model">tempty_brand_model</a>
      </span>{" "}
      :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tbrand_model">
          tbrand_model
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;@
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#make_brand_model">
          make_brand_model
        </a>
      </span>{" "}
      <span className="id">_</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.tempty_brand_relation">
          tempty_brand_relation
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandContext.html#mkBrand_context">
          mkBrand_context
        </a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      <span className="id">_</span>) <span className="id">_</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_type_unpack">ergoc_type_unpack</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype_struct">
          ectype_struct
        </a>
      </span>{" "}
      :={" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Specif.html#proj1_sig">
          proj1_sig
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Program</span>{" "}
      <span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.ergoc_closed_from_open">ergoc_closed_from_open</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.untrec">untrec</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">k</span>, <span className="id">fields</span>) =&gt;{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Rec">
          Rec
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Closed">
          Closed
        </a>
      </span>{" "}
      <span className="id">fields</span> <span className="id">_</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <div className="toggleproof" onclick="toggleDisplay('proof54')">
        Next Obligation.
      </div>
      <div className="proofscript" id="proof54">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">assert</span> (
        <span className="id">
          <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.untrec">untrec</a>
        </span>{" "}
        <span className="id">t0</span> ={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        (<span className="id">k</span>, <span className="id">fields</span>)){" "}
        <span className="tactic">by</span> <span className="tactic">auto</span>;{" "}
        <span className="tactic">clear</span>{" "}
        <span className="id">Heq_anonymous</span>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">generalize</span> (
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec_correct">
            tunrec_correct
          </a>
        </span>{" "}
        <span className="id">k</span> <span className="id">t0</span>{" "}
        <span className="id">H</span>); <span className="tactic">intros</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">elim</span>{" "}
        <span className="id">H0</span>; <span className="tactic">clear</span>{" "}
        <span className="id">H0</span>; <span className="tactic">intros</span>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tactic">auto</span>.<br />
        &nbsp;&nbsp;Qed.
      </div>
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.infer_brand_strict">infer_brand_strict</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">b</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brands">
          brands
        </a>
      </span>
      ) (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
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
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span> (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RSubtype.html#subtype_dec">
          subtype_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ergoc_closed_from_open">
          ergoc_closed_from_open
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModelProp.html#brands_type">
          brands_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#b">b</a>
      </span>
      )))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#Brand">
          Brand
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#b">b</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.recminus">recminus</a>
      </span>{" "}
      {"{"}
      <span className="id">br</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brand_relation">
          brand_relation
        </a>
      </span>
      {"}"} (<span className="id">rt</span>:
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
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      )) (<span className="id">sl</span>:
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
      ) :{" "}
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
      </span>
      *
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RType.html#rtype">
          rtype
        </a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#fold_left">
          fold_left
        </a>
      </span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Operators.RecOperators.html#rremove">
          rremove
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#sl">sl</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#rt">rt</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.diff_record_types">diff_record_types</a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">b</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brands">
          brands
        </a>
      </span>
      ) (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :{" "}
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
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
          string
        </a>
      </span>{" "}
      *{" "}
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
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec">
          tunrec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">_</span>, <span className="id">actual_rt</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec">
          tunrec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ergoc_closed_from_open">
          ergoc_closed_from_open
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModelProp.html#brands_type">
          brands_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#b">b</a>
      </span>
      )) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">_</span>, <span className="id">expected_rt</span>)
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span>{" "}
      <span className="id">in_expected_not_in_actual</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.recminus">recminus</a>
      </span>{" "}
      <span className="id">expected_rt</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">actual_rt</span>) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">let</span>{" "}
      <span className="id">in_actual_not_in_expected</span> :={" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.recminus">recminus</a>
      </span>{" "}
      <span className="id">actual_rt</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">expected_rt</span>) <span className="kwd">in</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#in_expected_not_in_actual">
          in_expected_not_in_actual
        </a>
      </span>
      ,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#in_actual_not_in_expected">
          in_actual_not_in_expected
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="ECType.rec_fields_that_are_not_subtype">
          rec_fields_that_are_not_subtype
        </a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">t1</span> <span className="id">t2</span>:
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
      </span>
      *
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      )) :{" "}
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t1">t1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t2">t2</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      , <span className="id">_</span> =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| <span className="id">_</span>,{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;| (<span className="id">name1</span>,
      <span className="id">t1</span>)::<span className="id">rest1</span>, (
      <span className="id">name2</span>,<span className="id">t2</span>)::
      <span className="id">rest2</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">if</span>{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string_dec">
          string_dec
        </a>
      </span>{" "}
      <span className="id">name1</span> <span className="id">name2</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">if</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.RSubtype.html#subtype_dec">
          subtype_dec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t2">t2</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t1">t1</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">then</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#rec_fields_that_are_not_subtype">
          rec_fields_that_are_not_subtype
        </a>
      </span>{" "}
      <span className="id">rest1</span> <span className="id">rest2</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">name1</span>,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t1">t1</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t2">t2</a>
      </span>
      ) ::{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#rec_fields_that_are_not_subtype">
          rec_fields_that_are_not_subtype
        </a>
      </span>{" "}
      <span className="id">rest1</span> <span className="id">rest2</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">else</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#rec_fields_that_are_not_subtype">
          rec_fields_that_are_not_subtype
        </a>
      </span>{" "}
      <span className="id">rest1</span> <span className="id">rest2</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="ECType.fields_that_are_not_subtype">
          fields_that_are_not_subtype
        </a>
      </span>{" "}
      {"{"}
      <span className="id">m</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModel.html#brand_model">
          brand_model
        </a>
      </span>
      {"}"} (<span className="id">b</span>:
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.Brands.BrandRelation.html#brands">
          brands
        </a>
      </span>
      ) (<span className="id">t</span>:
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :{" "}
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
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>{" "}
      *{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ectype">ectype</a>
      </span>
      ) :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec">
          tunrec
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#t">t</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">_</span>, <span className="id">actual_rt</span>) =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.OperatorsTyping.TUtil.html#tunrec">
          tunrec
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.ergoc_closed_from_open">
          ergoc_closed_from_open
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="https://querycert.github.io/html/Qcert.Common.TypeSystem.TBrandModelProp.html#brands_type">
          brands_type
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#b">b</a>
      </span>
      )) <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
          None
        </a>
      </span>{" "}
      =&gt;{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
          Some
        </a>
      </span>{" "}
      (<span className="id">_</span>, <span className="id">expected_rt</span>)
      =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType.rec_fields_that_are_not_subtype">
          rec_fields_that_are_not_subtype
        </a>
      </span>{" "}
      <span className="id">expected_rt</span>{" "}
      <span className="id">actual_rt</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      &nbsp;&nbsp;
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Backend.Lib.ECType.html#ECType">ECType</a>
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
  