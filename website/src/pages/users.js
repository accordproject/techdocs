import React from 'react';
import Layout from '@theme/Layout';

const users = [
  {
    caption: 'Clause Inc.',
    image: '/img/clause-logo-sm.png',
    infoLink: 'http://clause.io',
  },
  {
    caption: 'ContractPen',
    image: '/img/contractpen-logo-sm.png',
    infoLink: 'https://contractpen.com',
  },
  {
    caption: 'REIV SmartVicForms',
    image: 'https://smartvicforms.com.au/assets/Logo/reiv-smartVicforms%20logo-Full%20Colour.svg',
    infoLink: 'https://smartvicforms.com.au',
  },
  {
    caption: 'beNEXT',
    image: 'https://smartvicforms.com.au/assets/Logo/beNext_orange-darkgreen-logo.svg',
    infoLink: 'https://www.benext.io',
  },
];

export default function Users() {
  const editUrl = 'https://github.com/accordproject/techdocs/edit/master/website/siteConfig.js';
  return (
    <Layout title="Users" description="Companies using Accord Project">
      <div className="mainContainer">
        <div className="showcaseSection">
          <div className="prose">
            <h1>Who's Using This?</h1>
            <p>This project is used by the following companies</p>
          </div>
          <div className="logos">
            {users.map((user, i) => (
              <a href={user.infoLink} key={i}>
                <img src={user.image} alt={user.caption} title={user.caption} />
              </a>
            ))}
          </div>
          <p>Are you using this project?</p>
          <a href={editUrl} className="button">
            Add your company
          </a>
        </div>
      </div>
    </Layout>
  );
}
