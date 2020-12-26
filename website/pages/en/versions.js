/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const CWD = process.cwd();

const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');
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

class Versions extends React.Component {
  render() {
    const latestVersion = versions[0];
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer versionsContainer">
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
        </Container>
      </div>
    );
  }
}

module.exports = Versions;
