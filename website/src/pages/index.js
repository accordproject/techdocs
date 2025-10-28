import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Accord Project" description="Accord Project Documentation">
      <main style={{ padding: '3rem 1rem', maxWidth: 960, margin: '0 auto' }}>
        <h1>Accord Project Documentation</h1>
        <p>Welcome! Explore the docs using the sidebar or start here:</p>
        <p>
          <Link className="button button--primary" to="/accordproject">
            Go to Overview
          </Link>
        </p>
      </main>
    </Layout>
  );
}


