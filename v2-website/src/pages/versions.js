import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import versions from '../../versions.json';
const ciceroGitHub = 'https://github.com/accordproject/cicero/releases';

const toGitHubRelease = (version) => {
  const minorMatch = version.match(/^\d+\.\d+/);
  const patchMatch = version.match(/^\d+\.\d+\.\d+/);
  if (patchMatch) {
    return ciceroGitHub + '/v' + patchMatch[0];
  } else if (minorMatch) {
    // XXX Only points to the initial release notes
    return ciceroGitHub + '/v' + minorMatch[0] + '.0';
  } else {
    return ciceroGitHub;
  }
}

function Versions() {
    const _siteConfig = useDocusaurusContext();
    const siteConfig = _siteConfig.siteConfig;
    const latestVersion = versions[0];
    return (
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <main>
        <div className="docMainWrapper wrapper">
            <div className="mainContainer versionsContainer">
            <div className="post">
                <header className="postHeader">
                <h2>{siteConfig.title + ' Versions'}</h2>
                </header>
                <p>New versions of Accord Project are released regularly on <a href={ciceroGitHub}>GitHub</a>.</p>
                <h3 id="latest">Current Version (Stable)</h3>
                <table className="versions">
                <tbody>
                    <tr>
                    <th>{latestVersion}</th>
                    <td>
                        <a href={'/docs/accordproject.html'}>Documentation</a>
                    </td>
                    <td>
                        <a href={toGitHubRelease(latestVersion)}>Release Notes</a>
                    </td>
                    </tr>
                </tbody>
                </table>
                <p>
                This is the documentation for the latest stable version.
                </p>
                <h3 id="rc">Pre-release Versions</h3>
                <table className="versions">
                <tbody>
                    <tr>
                    <th>unstable</th>
                    <td>
                        <a href={'/docs/next/accordproject.html'}>Documentation</a>
                    </td>
                    <td>
                        <a href={ciceroGitHub}>Release Notes</a>
                    </td>
                    </tr>
                </tbody>
                </table>
                <p>This is the available documentation for any pre-release version.</p>
                <h3 id="archive">Past Versions</h3>
                <table className="versions">
                <tbody>
                    {versions.map(
                    version =>
                        version !== latestVersion && (
                        <tr>
                            <th>{version}</th>
                            <td>
                            <a href={`/docs/${version}/accordproject.html`}>Documentation</a>
                            </td>
                            <td>
                            <a href={toGitHubRelease(version)}>Release Notes</a>
                            </td>
                        </tr>                                        
                        )
                    )}
                </tbody>
                </table>
                <p>
                You can find older versions of Accord Project on <a href={ciceroGitHub}>GitHub</a>.
                </p>
            </div>
            </div>
        </div>
        </main>
        </Layout>
    );
}

export default Versions;