import React from 'react';
import Layout from '@theme/Layout';

const users = [
  {
    caption: 'Clause Inc.',
    image: '/img/clause-logo-sm.png',
    infoLink: 'http://clause.io',
    pinned: true,
  },
  {
    caption: 'ContractPen',
    image: '/img/contractpen-logo-sm.png',
    infoLink: 'https://contractpen.com',
    pinned: true,
  },

];

function Button({ href, target, children }) {
  return (
    <div className="pluginWrapper buttonWrapper">
      <a className="button" href={href} target={target || '_self'}>
        {children}
      </a>
    </div>
  );
}

function HomeSplash() {
  return (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">
          <div className="inner">
            <h1 className="projectTitle">
              <span className="lead">Smart Legal Contracts, </span>Open Source
            </h1>
            <div className="section promoSection">
              <div className="promoRow">
                <div className="pluginRowBlock">
                  <Button href="/docs/accordproject">Overview</Button>
                  <Button href="/docs/started-installation">Getting Started</Button>
                  <Button href="#try">Try Online</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const coreTools = [
    {
      title: <a href="/docs/started-installation"><img src="/img/cicero-logo.svg" alt="Cicero" /></a>,
      content: 'Create templates for human-readable and machine-executable contracts using Open Source <a href="/docs/started-installation">Cicero</a>.',
    },
    {
      title: <a href="/docs/logic-typescript"><img src="/img/typescript-logo.svg" alt="TypeScript" /></a>,
      content: 'Write executable business logic for legal contracts using <a href="/docs/logic-typescript">TypeScript</a>, with types generated from your Concerto model.',
    },
    {
      title: <a href="https://concerto.accordproject.org/docs/intro"><img src="/img/concerto-logo.svg" alt="Concerto" /></a>,
      content: 'Model the data for your contracts in a platform neutral format with the <a href="https://concerto.accordproject.org/docs/intro">Concerto</a> schema language.',
    },
  ];

  const ecosystemLinks = [
    {
      href: 'https://templates.accordproject.org/',
      label: 'Template Library',
      content: 'Browse user-contributed open source templates',
    },
    {
      href: 'https://models.accordproject.org/',
      label: 'Model Repository',
      content: 'Reuse shared Concerto data models',
    },
  ];

  return (
    <div id="features" className="paddingBottom paddingTop">
      <div className="wrapper">
        <div className="gridBlock">
          {coreTools.map((item, i) => (
            <div key={i} className="blockElement alignCenter threeByGridBlock">
              <div className="blockContent">
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          marginTop: '1.5rem',
          paddingTop: '1rem',
          textAlign: 'center',
          lineHeight: '2',
        }}>
          <span style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: '1.5rem' }}>Ecosystem</span>
          {ecosystemLinks.map((link, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: '#555', margin: '0 1rem' }}>·</span>}
              <a href={link.href} style={{ fontSize: '0.9rem', color: '#aaa' }}>
                {link.label} <span style={{ color: '#666', fontSize: '0.8rem' }}>— {link.content}</span>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentBlock({ id, background, imageAlign, title, content, image, imageAlt }) {
  const bgClass = background === 'dark' ? 'darkBackground' : '';
  const hasImage = !!image;
  const imageAlignClass = imageAlign === 'right' ? 'imageAlignRight' : 'imageAlignLeft';
  const elementClass = hasImage
    ? `blockElement ${imageAlignClass} twoByGridBlock imageAlignSide`
    : 'blockElement twoByGridBlock';

  return (
    <div id={id} className={`paddingBottom paddingTop ${bgClass}`}>
      <div className="wrapper">
        <div className="gridBlock">
          <div className={elementClass}>
            {hasImage && imageAlign === 'left' && (
              <div className="blockImage">
                <img src={image} alt={imageAlt || ''} />
              </div>
            )}
            <div className="blockContent">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            {hasImage && imageAlign !== 'left' && (
              <div className="blockImage">
                <img src={image} alt={imageAlt || ''} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  const pinnedUsers = users.filter(u => u.pinned);
  return null;
  // Disable while this section is rebuilt
  // if (pinnedUsers.length === 0) return null;
  // return (
  //   <div className="productShowcaseSection paddingBottom" id="showcase">
  //     <span className="line line--vertical"></span>
  //     <h2>{"Who's"} <span className="strong">{"Using This?"}</span></h2>
  //     <div className="typeset"><p>This project is used by the following companies</p></div>
  //     <div className="logos">
  //       {pinnedUsers.map((user, i) => (
  //         <a href={user.infoLink} key={i}>
  //           <img src={user.image} alt={user.caption} title={user.caption} />
  //         </a>
  //       ))}
  //     </div>
  //     <div className="more-users">
  //       <a className="button button-filled" href="/users">
  //         More Accord Project Users
  //       </a>
  //     </div>
  //   </div>
  // );
}

export default function Home() {
  return (
    <Layout title="Accord Project Documentation" description="Open Source Documentation for the Accord Project">
      <div>
        <div className="heroCover">
          <HomeSplash />
          <Features />
        </div>
        <div className="mainContainer">
          <ContentBlock
            id="digitize-legal-contracts"
            title='Digitize <span class="strong">Legal Contracts</span>'
            content="<div class='typeset'>Use <b><em>open source</em></b> tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div>"
          />
          <ContentBlock
            id="templates"
            title="Templates"
            content="<div class='typeset'>Accord Project Templates are composed of three elements: the Text (the natural language), the Model (the data model), and the Logic (the executable business logic). When combined these three elements allow Accord Project templates to be both <b><em>human-readable</em></b> and <b><em>machine-executable</em></b>.</div>"
            image="/img/template.png"
            imageAlt="The three elements of Accord Project templates: Text, Model, Logic. These elements form a triangle."
            imageAlign="right"
          />
          <ContentBlock
            id="accord"
            background="dark"
            title="Text"
            content='<div class="typeset">CiceroMark lets you capture the data in a natural language clause or contract text through <b><em>template variables</em></b>. And it supports rich text <b><em>markdown</em></b> to ensure that your contracts look professional.</div>'
            image="/img/grammar.png"
            imageAlt="An example of an Accord Project template text. There are 3 paragraphs of a contract with variables in each paragraphs and markdown annotations for formatting"
            imageAlign="left"
          />
          <ContentBlock
            id="model"
            title="Model"
            content='<div class="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts. <a href="https://concerto.accordproject.org/docs/intro">Learn more about Concerto.</a></div>'
            image="/img/model-uml.png"
            imageAlt="A diagram with an example of a Concerto model"
            imageAlign="right"
          />
          <ContentBlock
            id="logic"
            background="dark"
            title="Logic"
            content='<div class="typeset">Template logic is written in <em>TypeScript</em> using a class-based pattern that integrates directly with the Concerto data model. Logic can be embedded inline in template text or defined in a separate TypeScript class that extends <code>TemplateLogic</code>.</div>'
            image="/img/template_logic.png"
            imageAlt="Example of TypeScript template logic code"
            imageAlign="left"
          />
          <ContentBlock
            id="try"
            title='Template <span class="strong">Playground</span>'
            content='<div class="typeset">You can author and test templates online in the Accord Project <a href="https://playground.accordproject.org">Template Playground</a>. Search for existing templates, edit the contract text and execute the logic.</div>'
            image="/img/template-playground.png"
            imageAlt="An example a template being edited. There is an option to edit the full contract or a single clause. There is also a search bar at the top center for users to search for specific templates."
            imageAlign="right"
          />
          <Showcase />
        </div>
      </div>
    </Layout>
  );
}
