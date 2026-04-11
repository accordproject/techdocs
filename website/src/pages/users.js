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
  return (
    <Layout title="Who's Using This?">
      <main className="container margin-vert--lg">
        <h1>Who's Using This?</h1>
        <p>This project is used by the following companies.</p>
        <div className="logo-grid">
          {users.map((user) => (
            <a href={user.infoLink} key={user.caption}>
              <img src={user.image} alt={user.caption} title={user.caption} />
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
}
