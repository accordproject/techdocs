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
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    <small>{siteConfig.tagline}</small>
  </h2>
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
          <h2 className="projectTitle">
                <img style={{height: '100px'}} src={imgUrl('accord_logo.png')} />
          </h2>
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('accordproject.html', this.props.language)}>Documentation</Button>
            <Button href="#try">Try It Out</Button>
            <Button href="https://github.com/accordproject">Code</Button>
            <Button href="https://accord-project.slack.com/messages/C7U521CTG">Slack</Button>
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
  <Block layout="fourColumn">
    {[
      {
        content: `Create templates for executable natural-language legal contracts and clauses using Open Source [Cicero template](${siteConfig.baseUrl}docs/cicero.html) technology.`,
        title: `[Cicero](${siteConfig.baseUrl}docs/cicero.html)`,
      },
      {
        content: `Write executable business logic for legal contracts and clauses using the [Ergo](${siteConfig.baseUrl}docs/ergo.html) domain-specific language.`,
        title: `[Ergo](${siteConfig.baseUrl}docs/ergo.html)`,
      },
      {
        content: `Use Open Source contract templates from the [Template Library](${siteConfig.baseUrl}docs/template-library.html).`,
        title: `[Template Library](${siteConfig.baseUrl}docs/template-library.html)`,
      },
      {
        content: `Use Open Source data models from the [Model Repository](${siteConfig.baseUrl}docs/model-repository.html) to ensure interoperability.`,
        title: `[Model Repository](${siteConfig.baseUrl}docs/model-repository.html)`,
      },
  ]}
  </Block>
);

const TryOut = props => (
  <Block background="light" id="try">
    {[
      {
        content: 'You can try Accord Project templates in the <a href="https://studio.accordproject.org">template studio</a>. Search for existing templates, edit the contract text and execute the logic! <br/><br/>Experiment with changes to the natural language or logic and see how it affects the contract\'s behavior.',
        image: imgUrl('studio.png'),
        imageAlign: 'right',
        title: 'Try Online',
      },
    ]}
  </Block>
);


const FeatureCallout = props => (
  <Block background="light">
    {[
      {
        content: "Use Open Source tools and standards from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform.",
        title: 'Digitize Legal Contracts',
      }
    ]}
  </Block>
);

const Templates = props => (
  <Block>
    {[
      {
        content: "Cicero templates are composed of three elements: the Template Grammar (the natural language text for the template), the Template Model (the data model that backs the template), the Logic (the executable business logic for the template). When combined these three elements allow templates to be edited, analyzed, queried and executed.",
        image: imgUrl('../docs/assets/template.png'),
        imageAlign: 'right',
        title: 'Templates',
      },
    ]}
  </Block>
);


const Grammar = props => (
  <Block background="dark" id="accord">
    {[
      {
        content: 'Bind natural language clauses and contracts to their data and logic through a template grammar.',
        image: imgUrl('grammar.png'),
        imageAlign: 'left',
        title: 'Natural Language',
      },
    ]}
  </Block>
);

const Model = props => (
  <Block background="dark">
    {[
      {
        content: 'The template model defines the structure of data that are used in the natural language and logic. Accord Project templates use the <a href="https://github.com/hyperledger/composer-concerto">Composer Concerto Modeling Language</a>.',
        image: imgUrl('model-vscode.png'),
        imageAlign: 'right',
        title: 'Model',
      },
    ]}
  </Block>
);

const Logic = props => (
  <Block background="dark">
    {[
      {
        content: 'Ergo is a _strongly-typed_ domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create *safe* Smart Legal Contract logic.',
        image: imgUrl('ergo-vscode.png'),
        imageAlign: 'left',
        title: 'Logic',
      },
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
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by the following companies</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
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
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Templates />
          <Grammar />
          <Model />
          <Logic />
          <TryOut />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
