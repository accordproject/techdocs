import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Home() {
  const _siteConfig = useDocusaurusContext();
  const siteConfig = _siteConfig.siteConfig;
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <div>
          <div className="heroCover">
            <div className="homeContainer">
              <div className="homeSplashFade">
                <div className="wrapper homeWrapper">
                    <div className="inner">
                    <h1 className="projectTitle">
                    <span className="lead">{siteConfig.customFields.taglineLead} </span>{siteConfig.tagline}
                  </h1>
                  <div className="section promoSection">
                    <div className="promoRow">
                      <div className="pluginRowBlock">
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/')}>Overview</Link></button>
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/started-installation')}>Getting Started</Link></button>
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/started-installation')}>Try Online</Link></button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="features">
              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__image">
                  <Link to={useBaseUrl('/docs/started-installation')}>                  <img
                    src='/img/cicero-logo.svg'
                    alt="Cicero"
                    title="Cicero"
                  /></Link>

                  </div>
                  <div className="card__body">
                    Create templates for human-readable and machine-executable contracts using Open Source <Link to={useBaseUrl('/docs/started-installation')}>Cicero</Link>.
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__image">
                  <Link to={useBaseUrl('/docs/logic-ergo')}>                  <img
                    src='/img/ergo-logo.svg'
                    alt="Ergo"
                    title="Ergo"
                  /></Link> 

                  </div>
                  <div className="card__body">
                    Write executable business logic for legal contracts using the <Link to={useBaseUrl('/docs/logic-ergo')}>Ergo</Link> domain-specific language.
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={useBaseUrl('/docs/model-concerto')}>Concerto</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    Model the data for your contracts in a platform neutral format with the <Link to={useBaseUrl('/docs/model-concerto')}>Concerto</Link> schema language.
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={'https://templates.accordproject.org/'}>Template Library</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    Find user-contributed open source templates in the <Link to={'https://templates.accordproject.org/'}>Template Library</Link>.
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={'https://models.accordproject.org/'}>Model Repository</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    Use models from the <Link to={'https://models.accordproject.org/'}>Model Repository</Link> to ensure interoperability between your templates.
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="templates">
                  <div className="card__image">
                  <img src="/docs/assets/020/template.png" alt="The three elements of Accord Project templates: Text, Model, Logic. These elements form a triangle."/>
                  </div>
                  <div className="card__header">
                    <h3>Templates</h3>
                   
                  </div>
                  <div className="card__body">
                    <div className='typeset'>Accord Proaccordprojectject Templates are composed of three elements: the Text (the natural language), the Model (the data model), and the Logic (the executable business logic). When combined these three elements allow Accord Project templates to be both <b><em>human-readable</em></b> and <b><em>machine-executable</em></b>.</div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="accord">
                  <div className="card__image">
                  <img src="/docs/assets/020/grammar.png" alt="An example of an Accord Project template text. There are 3 paragraphs of a contract with variables in each paragraphs and markdown annotations for formatting"/>
                  </div>
                  <div className="card__header">
                    <h3>Text</h3>
                   
                  </div>
                  <div className="card__body">
                    <div className="typeset">CiceroMark lets you capture the data in a natural language clause or contract text through <b><em>template variables</em></b>. And it supports rich text <b><em>markdown</em></b> to ensure that your contracts look professional.</div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="model">
                  <div className="card__image">
                  <img src="/static/img/model-uml.png" alt="A diagram with an example of a Concerto model"/>
                  </div>
                  <div className="card__header">
                    <h3>Model</h3>
                   
                  </div>
                  <div className="card__body">
                    <div className="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts.</div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="logic">
                  <div className="card__image">
                  <img src="/docs/assets/020/ergo.png" alt="Example of an Ergo file"/>
                  </div>
                  <div className="card__header">
                    <h3>Logic</h3>
                   
                  </div>
                  <div className="card__body">
                    <div className="typeset">Ergo is a <em>strongly-typed</em> domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create <strong>safe</strong> smart legal contract logic.</div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="model">
                  <div className="card__image">
                  <img src="/docs/assets/020/studio.png" alt="An example a template being edited. There is an option to edit the full contract or a single clause. There is also a search bar at the top center for users to search for specific templates."/>
                  </div>
                  <div className="card__header">
                    <h3>Author <span className="strong">and Edit</span></h3>
                   
                  </div>
                  <div className="card__body">
                    <div className="typeset">You can author and test templates online in the Accord Project <a href="https://studio.accordproject.org">Template Studio</a>. Search for existing templates, edit the contract text and execute the logic.</div>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className="mainContainer">
            <div className="card" id="digitize-legal-contracts">
              <div className="card-header">
                Digitize <span className="strong">Legal Contracts</span>
              </div>
              <div className="card-body">
                <div className='typeset'>Use <b><em>open source</em></b> tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
