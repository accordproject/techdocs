import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import versions from '../../versions.json';

const ciceroGitHub = 'https://github.com/accordproject/cicero/releases';

function toGitHubRelease(version) {
  const minorMatch = version.match(/^\d+\.\d+/);
  const patchMatch = version.match(/^\d+\.\d+\.\d+/);
  if (patchMatch) {
    return `${ciceroGitHub}/v${patchMatch[0]}`;
  }
  if (minorMatch) {
    return `${ciceroGitHub}/v${minorMatch[0]}.0`;
  }
  return ciceroGitHub;
}

export default function Versions() {
  const latestVersion = versions[0];
  return (
    <Layout title="Versions">
      <main className="container margin-vert--lg">
        <h1>Accord Project Versions</h1>
        <p>New versions of Accord Project are released regularly on GitHub.</p>
        <h2 id="latest">Current Version</h2>
        <table>
          <tbody>
            <tr>
              <th>{latestVersion}</th>
              <td><Link to="/docs/accordproject">Documentation</Link></td>
              <td><a href={toGitHubRelease(latestVersion)}>Release Notes</a></td>
            </tr>
          </tbody>
        </table>
        <h2 id="archive">Past Versions</h2>
        <table>
          <tbody>
            {versions.filter((version) => version !== latestVersion).map((version) => (
              <tr key={version}>
                <th>{version}</th>
                <td><Link to={`/docs/${version}/accordproject`}>Documentation</Link></td>
                <td><a href={toGitHubRelease(version)}>Release Notes</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
