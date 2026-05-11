import React from 'react';
import Layout from '@theme/Layout';
import versions from '../../versions.json';

const ciceroGitHub = 'https://github.com/accordproject/cicero/releases';

function toGitHubRelease(version) {
  const patchMatch = version.match(/^\d+\.\d+\.\d+/);
  const minorMatch = version.match(/^\d+\.\d+/);
  if (patchMatch) {
    return ciceroGitHub + '/v' + patchMatch[0];
  } else if (minorMatch) {
    return ciceroGitHub + '/v' + minorMatch[0] + '.0';
  }
  return ciceroGitHub;
}

export default function Versions() {
  const latestVersion = versions[0];
  return (
    <Layout title="Versions" description="Accord Project versions">
      <div className="docMainWrapper wrapper">
        <div className="mainContainer versionsContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Accord Project Versions</h2>
            </header>
            <p>New versions of Accord Project are released regularly on <a href={ciceroGitHub}>GitHub</a>.</p>
            <h3 id="latest">Current Version (Stable)</h3>
            <table className="versions">
              <tbody>
                <tr>
                  <th>{latestVersion}</th>
                  <td><a href="/docs/accordproject">Documentation</a></td>
                  <td><a href={toGitHubRelease(latestVersion)}>Release Notes</a></td>
                </tr>
              </tbody>
            </table>
            <p>This is the documentation for the latest stable version.</p>
            <h3 id="rc">Pre-release Versions</h3>
            <table className="versions">
              <tbody>
                <tr>
                  <th>unstable</th>
                  <td><a href="/docs/next/accordproject">Documentation</a></td>
                  <td><a href={ciceroGitHub}>Release Notes</a></td>
                </tr>
              </tbody>
            </table>
            <p>This is the available documentation for any pre-release version.</p>
            <h3 id="archive">Past Versions</h3>
            <table className="versions">
              <tbody>
                {versions.filter(v => v !== latestVersion).map(version => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td><a href={`/docs/${version}/accordproject`}>Documentation</a></td>
                    <td><a href={toGitHubRelease(version)}>Release Notes</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>You can find older versions of Accord Project on <a href={ciceroGitHub}>GitHub</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
