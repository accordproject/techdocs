import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Cicero',
    href: '/docs/started-installation',
    body: 'Create templates for human-readable and machine-executable contracts.',
  },
  {
    title: 'Ergo',
    href: '/docs/logic-ergo',
    body: 'Write executable business logic for smart legal contracts.',
  },
  {
    title: 'Concerto',
    href: '/docs/ref-concerto-api',
    body: 'Model contract data in a platform-neutral format.',
  },
  {
    title: 'Template Library',
    href: 'https://templates.accordproject.org/',
    body: 'Find user-contributed open source contract templates.',
  },
  {
    title: 'Model Repository',
    href: 'https://models.accordproject.org/',
    body: 'Reuse models to improve interoperability between templates.',
  },
];

export default function Home() {
  return (
    <Layout title="Accord Project" description="Technical Documentation for the Accord Project">
      <main>
        <section className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">Open Source Documentation</h1>
            <p className="hero__subtitle">Technical documentation for Accord Project tools and templates.</p>
            <div className="hero__actions">
              <Link className="button button--secondary button--lg" to="/docs/accordproject">
                Overview
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/started-installation">
                Getting Started
              </Link>
            </div>
          </div>
        </section>
        <section className="home-section">
          <div className="container">
            <div className="feature-grid">
              {features.map((feature) => (
                <Link className="feature-card" key={feature.title} to={feature.href}>
                  <h2>{feature.title}</h2>
                  <p>{feature.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
