import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Home() {
    const _siteConfig = useDocusaurusContext();
    const siteConfig = _siteConfig.siteConfig;
    const returnVariable = (
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <main>
            <div className="docMainWrapper wrapper">
                <div className="container">
                    <div className="post">
                        <header className="postHeader">
                        <h2>Need help?</h2>
                        </header>
                        <p>This project is maintained by a dedicated group of people.</p>
                        </div>

                        <div className="row" id="features">

                            <div className="col-auto">
                                <div className="card" style={{margin: "10px"}}>
                                <div className="card__header">
                                Browse Docs

                                </div>
                                <div className="card__body">
                                    <p>
                                    Learn more using the <Link to={useBaseUrl('/docs/accordproject.html')}>documentation on this site.</Link>.
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="card" style={{margin: "10px"}}>
                                <div className="card__header">
                                Join the community
                                </div>
                                <div className="card__body">
                                    <p>
                                    Ask questions about the documentation and project.
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="card" style={{margin: "10px"}}>
                                <div className="card__header">
                                    Stay up to date
                                
                                </div>
                                <div className="card__body">
                                    <p>
                                    Find out what's new with this project.
                                    </p>
                                </div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </main>
        </Layout>
    );
    if(returnVariable) return returnVariable;
    else "accordproject";
}

export default Home;