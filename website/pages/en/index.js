/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Accord Project"/>
  </div>
);

const ProjectTitle = props => (
  <h1 className="projectTitle">
    <span className="lead">{siteConfig.taglineLead} </span>{siteConfig.tagline}
  </h1>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('accordproject.html', this.props.language)}>Overview</Button>
            <Button href={docUrl('started-installation.html', this.props.language)}>Getting Started</Button>
            <Button href="#try">Try Online</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="threeColumn" id="features">
    {[
      {
        content: `Create templates for human-readable and machine-executable contracts using Open Source [Cicero](${siteConfig.baseUrl}docs/started-installation.html).`,
        title: `[![Cicero](${imgUrl('cicero-logo.svg')})](${siteConfig.baseUrl}docs/started-installation.html)`,
      },
      {
        content: `Write executable business logic for legal contracts using the [Ergo](${siteConfig.baseUrl}docs/logic-ergo.html) domain-specific language.`,
        title: `[![Ergo](${imgUrl('ergo-logo.svg')})](${siteConfig.baseUrl}docs/logic-ergo.html)`,
      },
      {
        content: `Model the data for your contracts in a platform neutral format with the [Concerto](${siteConfig.baseUrl}docs/model-concerto.html) schema language.`,
        title: `[Concerto](${siteConfig.baseUrl}docs/model-concerto.html)`,
      },
      {
        content: `Find user-contributed open source templates in the [Template Library](https://templates.accordproject.org/).`,
        title: `[Template Library](https://templates.accordproject.org/)`,
      },
      {
        content: `Use models from the [Model Repository](https://models.accordproject.org/) to ensure interoperability between your templates.`,
        title: `[Model Repository](https://models.accordproject.org/)`,
      },
  ]}
  </Block>
);

const FeatureCallout = props => (
  <Block id="digitize-legal-contracts">
    {[
      {
        content: "<div class='typeset'>Use <b><em>open source</em></b> tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div>",
        title: 'Digitize <span class="strong">Legal Contracts</span>',
      }
    ]}
  </Block>
);

const Templates = props => (
  <Block id="templates">
    {[
      {
        content:
          "<div class='typeset'>Accord Project Templates are composed of three elements: the Text (the natural language), the Model (the data model), and the Logic (the executable business logic). When combined these three elements allow Accord Project templates to be both <b><em>human-readable</em></b> and <b><em>machine-executable</em></b>.</div>",
        image: imgUrl("../docs/assets/020/template.png"),
        imageAlt:
          "The three elements of Accord Project templates: Text, Model, Logic. These elements form a triangle.",
        imageAlign: "right",
        title: "Templates"
      }
    ]}
  </Block>
);


const Grammar = props => (
  <Block background="dark" id="accord">
    {[
      {
        content:
          '<div class="typeset">CiceroMark lets you capture the data in a natural language clause or contract text through <b><em>template variables</em></b>. And it supports rich text <b><em>markdown</em></b> to ensure that your contracts look professional.</div>',
        image: imgUrl("../docs/assets/020/grammar.png"),
        imageAlt:
          "An example of an Accord Project template text. There are 3 paragraphs of a contract with variables in each paragraphs and markdown annotations for formatting",
        imageAlign: "left",
        title: 'Text'
      }
    ]}
  </Block>
);

const Model = props => (
  <Block id="model">
    {[
      {
        content:
          '<div class="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts.</div>',
        image: imgUrl("model-uml.png"),
        imageAlt: "A diagram with an example of a Concerto model",
        imageAlign: "right",
        title: "Model"
      }
    ]}
  </Block>
);

const Logic = props => (
  <Block background="dark" id="logic">
    {[
      {
        content:
          '<div class="typeset">Ergo is a <em>strongly-typed</em> domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create <strong>safe</strong> smart legal contract logic.</div>',
        image: imgUrl("../docs/assets/020/ergo.png"),
        imageAlt: "Example of an Ergo file",
        imageAlign: "left",
        title: "Logic"
      }
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content:
          '<div class="typeset">You can author and test templates online in the Accord Project <a href="https://studio.accordproject.org">Template Studio</a>. Search for existing templates, edit the contract text and execute the logic.</div>',
        image: imgUrl("../docs/assets/020/studio.png"),
        imageAlt:
          "An example a template being edited. There is an option to edit the full contract or a single clause. There is also a search bar at the top center for users to search for specific templates.",
        imageAlign: "right",
        title: 'Author <span class="strong">and Edit</span>'
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom" id="showcase">
      <span class="line line--vertical"></span>
      <h2>{"Who's"} <span className="strong">{"Using This?"}</span></h2>
      <div className="typeset"><p>This project is used by the following companies</p></div>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button button-filled" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="heroCover">
        <HomeSplash language={language} />
        <Features />
        </div>
        <div className="mainContainer">
        <FeatureCallout />
          <Templates />
          <Grammar />
          <Model />
          <Logic />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
