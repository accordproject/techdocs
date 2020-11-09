import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Users() {
    const _siteConfig = useDocusaurusContext();
    const siteConfig = _siteConfig.siteConfig;
    if ((siteConfig.customFields.users || []).length === 0) {
        return null;
      }
      const editUrl = 'https://github.com/accordproject/techdocs/edit/master/website/siteConfig.js';
      const showcase = siteConfig.customFields.users.map((user, i) => {
        return (
          <a href={user.infoLink} key={i}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        );
      });
    return (
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <main>
            <div className="mainContainer">
                <div className="conatiner" padding={['bottom', 'top']}>
                    <div className="showcaseSection">
                        <div className="prose">
                        <h1>Who's Using This?</h1>
                        <p>This project is used by the following companies</p>
                        </div>
                        <div className="logos">{showcase}</div>
                        <p>Are you using this project?</p>
                        <a href={editUrl} className="button">
                        Add your company
                        </a>
                    </div>
                </div>
            </div>
        </main>
        </Layout>
    );
}

export default Users;