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
    <img src={props.img_src} alt="project logo image"/>
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
            <Button href={docUrl('accordproject.html', this.props.language)}>Getting Started</Button>
            <Button href="#try">Try Online</Button>
            <Button href="https://github.com/accordproject">GitHub</Button>
            <Button href="https://accord-project-slack-signup.herokuapp.com/">Slack</Button>
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
    <GridBlock align="center" contents={props.children} layout={props.layout} /lt="background image">
  </Container>
);

const Features = props => (
  <Block layout="fourColumn" id="features">
    {[
      {
        content: `Create templates for executable natural-language legal contracts using Open Source Cicero [Template Technology](${siteConfig.baseUrl}docs/basic-use.html).`,
        title: `[![Cicero](${imgUrl('cicero-logo.svg')})](${siteConfig.baseUrl}docs/basic-use.html)`,
      },
      {
        content: `Write executable business logic for legal contracts using the [Ergo](${siteConfig.baseUrl}docs/logic-ergo.html) domain-specific language.`,
        title: `[![Ergo](${imgUrl('ergo-logo.svg')})](${siteConfig.baseUrl}docs/logic-ergo.html)`,
      },
      {
        content: `Use Open Source contract templates from the [Template Library](${siteConfig.baseUrl}docs/accordproject-templates.html).`,
        title: `[Template Library](${siteConfig.baseUrl}docs/accordproject-templates.html)`,
      },
      {
        content: `Use models from the [Model Repository](${siteConfig.baseUrl}docs/accordproject-models.html) to ensure interoperability between templates.`,
        title: `[Model Repository](${siteConfig.baseUrl}docs/accordproject-models.html)`,
      },
  ]}
  </Block>
);

const FeatureCallout = props => (
  <Block id="digitize-legal-contracts">
    {[
      {
        content: "<div class='typeset'>Use open source tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div>",
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
          "<div class='typeset'>Cicero templates are composed of three elements: the Template Grammar (the natural language text for the template), the Template Model (the data model that backs the template), the Logic (the executable business logic for the template). When combined these three elements allow templates to be edited, analyzed, queried and executed.</div>",
        image: imgUrl("../docs/assets/template.png"),
        imageAlt:
          "The three elements of Cicero templates: Model, Natural Language, Logic.These elements all form a triangle.  ",
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
          '<div class="typeset">Create structured clauses and contracts by binding variables in natural language to a data model. Optionally, clauses can be made executable by adding contract logic to the data model.</div>',
        image: imgUrl("grammar.png"),
        imageAlt:
          "An example of a .tem file. There are 3 paragraphs of a contract with binding variables incorporated in each paragraph",
        imageAlign: "left",
        title: 'Natural <span class="strong">Language</span>'
      }
    ]}
  </Block>
);

const Model = props => (
  <Block id="model">
    {[
      {
        content:
          '<div class="typeset">The template model defines the structure of data that are used in the natural language and logic. Accord Project templates use the <a href="https://github.com/hyperledger/composer-concerto">Composer Concerto Modeling Language</a>.</div>',
        image: imgUrl("model-uml.png"),
        imageAlt: "A diagram depicting the Concerto modeling language ",
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
          '<div class="typeset">Ergo is a _strongly-typed_ domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create *safe* smart legal contract logic.</div>',
        image: imgUrl("ergo-vscode.png"),
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
        image: imgUrl("studio.png"),
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

