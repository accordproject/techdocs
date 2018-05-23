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
    {siteConfig.title}
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
        <Logo img_src={imgUrl('accord_logo.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
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
        image: imgUrl('accord_logo.png'),
        imageAlign: 'top',
        title: 'Cicero',
      },
      {
        content: `Write executable business logic for legal contracts and clauses using the [Ergo](${siteConfig.baseUrl}docs/ergo.html) domain-specific language.`,
        image: imgUrl('ergo-logo.svg'),
        imageAlign: 'top',
        title: 'Ergo',
      },
      {
        content: `Uses the [Verbatim](${siteConfig.baseUrl}docs/verbatim.html) Word Add-in to create Cicero templates from existing legal contracts and clauses without leaving Microsoft Word!`,
        image: imgUrl('microsoft-word-logo.png'),
        imageAlign: 'top',
        title: 'Verbatim',
      },
  ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Digitize Legal Contracts</h2>
    <MarkdownBlock>Use Open Source tools and standards from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform.</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
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

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'You can assemble Smart Legal Contracts from existing Cicero templates [created by the Accord Project community](https://github.com/accordproject/cicero-template-library/tree/master/helloworld), or you can use Accord Project tools to create your own bespoke templates. Get involved by joining the Accord Project Technology Working Group!',
        image: imgUrl('accord_logo.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'Ergo is a strongly-typed functional programming language designed to capture the legal intent of legal contracts and clauses. Use Ergo to create *safe* Smart Legal Contract logic.',
        image: imgUrl('ergo-logo.svg'),
        imageAlign: 'right',
        title: 'Ergo',
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
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
