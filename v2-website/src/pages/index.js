import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Home() {
  const siteConfig = useDocusaurusContext();
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
                    <span className="lead">{siteConfig.taglineLead} </span>{siteConfig.tagline}
                  </h1>
                  <div className="section promoSection">
                    <div className="promoRow">
                      <div className="pluginRowBlock">
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/accordproject.html')}>Overview</Link></button>
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/started-installation.html')}>Getting Started</Link></button>
                        <button className="primary" type="button" style={{margin: "10px"}}><Link to={useBaseUrl('/docs/started-installation.html')}>Try Online</Link></button>
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
                  <Link to={useBaseUrl('/docs/started-installation.html')}>                  <img
                    src='/img/cicero-logo.svg'
                    alt="Cicero"
                    title="Cicero"
                  /></Link>

                  </div>
                  <div className="card__body">
                    <p>
                    Create templates for human-readable and machine-executable contracts using Open Source <Link to={useBaseUrl('/docs/started-installation.html')}>Cicero</Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__image">
                  <Link to={useBaseUrl('/docs/logic-ergo.html')}>                  <img
                    src='/img/ergo-logo.svg'
                    alt="Ergo"
                    title="Ergo"
                  /></Link> 

                  </div>
                  <div className="card__body">
                    <p>
                    Write executable business logic for legal contracts using the <Link to={useBaseUrl('/docs/logic-ergo.html')}>Ergo</Link> domain-specific language.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={useBaseUrl('/docs/model-concerto.html')}>Concerto</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    <p>
                    Model the data for your contracts in a platform neutral format with the <Link to={useBaseUrl('/docs/model-concerto.html')}>Concerto</Link> schema language.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={'https://templates.accordproject.org/'}>Template Library</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    <p>
                    Find user-contributed open source templates in the <Link to={'https://templates.accordproject.org/'}>Template Library</Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}}>
                  <div className="card__header">
                    <h3><Link to={'https://models.accordproject.org/'}>Model Repository</Link></h3>
                   
                  </div>
                  <div className="card__body">
                    <p>
                    Use models from the <Link to={'https://models.accordproject.org/'}>Model Repository</Link> to ensure interoperability between your templates.
                    </p>
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
                    <p>
                    <div className='typeset'>Accord Project Templates are composed of three elements: the Text (the natural language), the Model (the data model), and the Logic (the executable business logic). When combined these three elements allow Accord Project templates to be both <b><em>human-readable</em></b> and <b><em>machine-executable</em></b>.</div>
                    </p>
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
                    <p>
                    <div class="typeset">CiceroMark lets you capture the data in a natural language clause or contract text through <b><em>template variables</em></b>. And it supports rich text <b><em>markdown</em></b> to ensure that your contracts look professional.</div>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="model">
                  <div className="card__image">
                  <img src="/v2-website/static/img/model-uml.png" alt="A diagram with an example of a Concerto model"/>
                  </div>
                  <div className="card__header">
                    <h3>Model</h3>
                   
                  </div>
                  <div className="card__body">
                    <p>
                    <div class="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts.</div>
                    </p>
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
                    <p>
                    <div class="typeset">Ergo is a <em>strongly-typed</em> domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create <strong>safe</strong> smart legal contract logic.</div>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="card" style={{margin: "10px"}} id="model">
                  <div className="card__image">
                  <img src="/v2-website/static/img/model-uml.png" alt="A diagram with an example of a Concerto model"/>
                  </div>
                  <div className="card__header">
                    <h3>Model</h3>
                   
                  </div>
                  <div className="card__body">
                    <p>
                    <div class="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts.</div>
                    </p>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className="mainContainer">
            <div className="card" id="digitize-legal-contracts">
              <div className="card-header">
                Digitize <span class="strong">Legal Contracts</span>
              </div>
              <div className="card-body">
                <div class='typeset'>Use <b><em>open source</em></b> tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
