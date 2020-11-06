<div>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Module ErgoSpec.Translation.CTOtoErgo</title>
    <meta
      name="description"
      content="Documentation of Coq module ErgoSpec.Translation.CTOtoErgo"
    />
    <link href="coq2html.css" rel="stylesheet" type="text/css" />
    <h1 className="title">Module ErgoSpec.Translation.CTOtoErgo</h1>
    <div className="coq">
      <br />
      <div className="doc">Translates a CTO to an Ergo module </div>
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
      <br />
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
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html">ErgoSpec.Common.Utils.Ast</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html">ErgoSpec.Common.CTO.CTO</a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html">
          ErgoSpec.Common.Types.ErgoType
        </a>
      </span>
      .<br />
      <span className="kwd">
        Require
      </span> <span className="kwd">Import</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
      </span>
      .<br />
      <br />
      <span className="kwd">Section</span>{" "}
      <span className="id">
        <a name="CTOtoErgo">CTOtoErgo</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Fixpoint</span>{" "}
      <span className="id">
        <a name="cto_type_to_ergo_type">cto_type_to_ergo_type</a>
      </span>{" "}
      (<span className="id">ctd</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_type">lrcto_type</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type">lrergo_type</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#ctd">ctd</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOBoolean">CTOBoolean</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeBoolean">
          ErgoTypeBoolean
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOString">CTOString</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeString">
          ErgoTypeString
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODouble">CTODouble</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDouble">
          ErgoTypeDouble
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOLong">CTOLong</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeLong">
          ErgoTypeLong
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOInteger">CTOInteger</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeInteger">
          ErgoTypeInteger
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTODateTime">CTODateTime</a>
      </span>{" "}
      <span className="id">loc</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeDateTime">
          ErgoTypeDateTime
        </a>
      </span>{" "}
      <span className="id">loc</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOClassRef">CTOClassRef</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">n</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeClassRef">
          ErgoTypeClassRef
        </a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">n</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOOption">CTOOption</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">ct1</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeOption">
          ErgoTypeOption
        </a>
      </span>{" "}
      <span className="id">loc</span> (
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      <span className="id">ct1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOArray">CTOArray</a>
      </span>{" "}
      <span className="id">loc</span> <span className="id">ct1</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeArray">
          ErgoTypeArray
        </a>
      </span>{" "}
      <span className="id">loc</span> (
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      <span className="id">ct1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>.<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_declaration_desc_to_ergo_type_declaration_desc">
          cto_declaration_desc_to_ergo_type_declaration_desc
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">dk</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration_desc">
          lrcto_declaration_desc
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration_desc">
          lrergo_type_declaration_desc
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">match</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#dk">dk</a>
      </span>{" "}
      <span className="kwd">with</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOEnum">CTOEnum</a>
      </span>{" "}
      <span className="id">ls</span> =&gt;{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEnum">
          ErgoTypeEnum
        </a>
      </span>{" "}
      <span className="id">ls</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOTransaction">CTOTransaction</a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span>{" "}
      <span className="id">crec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeTransaction">
          ErgoTypeTransaction
        </a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ))) <span className="id">crec</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOConcept">CTOConcept</a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span>{" "}
      <span className="id">crec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeConcept">
          ErgoTypeConcept
        </a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ))) <span className="id">crec</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOEvent">CTOEvent</a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span>{" "}
      <span className="id">crec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeEvent">
          ErgoTypeEvent
        </a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ))) <span className="id">crec</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOAsset">CTOAsset</a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span>{" "}
      <span className="id">crec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeAsset">
          ErgoTypeAsset
        </a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ))) <span className="id">crec</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;|{" "}
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#CTOParticipant">CTOParticipant</a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span>{" "}
      <span className="id">crec</span> =&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#ErgoTypeParticipant">
          ErgoTypeParticipant
        </a>
      </span>{" "}
      <span className="id">on</span> <span className="id">isabs</span> (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      (<span className="kwd">fun</span> <span className="id">xy</span> =&gt; (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#fst">fst</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ,{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_type_to_ergo_type">
          cto_type_to_ergo_type
        </a>
      </span>{" "}
      (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#snd">snd</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#xy">xy</a>
      </span>
      ))) <span className="id">crec</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="kwd">end</span>. <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_declaration_to_ergo_type_declaration">
          cto_declaration_to_ergo_type_declaration
        </a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#lrergo_type_declaration">
          lrergo_type_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Common.Types.ErgoType.html#mkErgoTypeDeclaration">
          mkErgoTypeDeclaration
        </a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_annot">
          cto_declaration_annot
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_name">
          cto_declaration_name
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_declaration_desc_to_ergo_type_declaration_desc">
          cto_declaration_desc_to_ergo_type_declaration_desc
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_type">
          cto_declaration_type
        </a>
      </span>
      )).
      <br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_declaration_to_ergo_declaration">
          cto_declaration_to_ergo_declaration
        </a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_declaration">
          lrcto_declaration
        </a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DType">DType</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_declaration_annot">
          cto_declaration_annot
        </a>
      </span>
      ) (
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_declaration_to_ergo_type_declaration">
          cto_declaration_to_ergo_type_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      ).
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_import_to_ergo_declaration">
          cto_import_to_ergo_declaration
        </a>
      </span>{" "}
      (<span className="id">d</span>:
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_decl">import_decl</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_declaration">
          lrergo_declaration
        </a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#DImport">DImport</a>
      </span>{" "}
      (
      <span className="id">
        <a href="ErgoSpec.Common.Utils.Ast.html#import_annot">import_annot</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      ){" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#d">d</a>
      </span>
      .<br />
      <br />
      &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
      <span className="id">
        <a name="cto_package_to_ergo_module">cto_package_to_ergo_module</a>
      </span>{" "}
      (<span className="id">p</span>:
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#lrcto_package">lrcto_package</a>
      </span>
      ) :{" "}
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#lrergo_module">lrergo_module</a>
      </span>{" "}
      :=
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Ergo.Lang.Ergo.html#mkModule">mkModule</a>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package_annot">
          cto_package_annot
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package_file">
          cto_package_file
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package_namespace">
          cto_package_namespace
        </a>
      </span>
      )<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_import_to_ergo_declaration">
          cto_import_to_ergo_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package_imports">
          cto_package_imports
        </a>
      </span>
      ))
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++ (
      <span className="id">
        <a href="http://coq.inria.fr/library/Coq.Lists.List.html#map">map</a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#cto_declaration_to_ergo_declaration">
          cto_declaration_to_ergo_declaration
        </a>
      </span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#p">p</a>
      </span>
      .(
      <span className="id">
        <a href="ErgoSpec.Common.CTO.CTO.html#cto_package_declarations">
          cto_package_declarations
        </a>
      </span>
      ))).
      <br />
      <br />
      <span className="kwd">End</span>{" "}
      <span className="id">
        <a href="ErgoSpec.Translation.CTOtoErgo.html#CTOtoErgo">CTOtoErgo</a>
      </span>
      .<br />
    </div>
    <div className="footer">
      <hr />
      Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
    </div>
    <a href="https://github.com/xavierleroy/coq2html/"></a>
  </div>;
  