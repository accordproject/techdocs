/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ReactDOM from 'react-dom';

function Footer() {

    const currentYear = new Date().getFullYear();
    const siteConfig = useDocusaurusContext();
    const footer = siteConfig["siteConfig"]["themeConfig"]["footer"];
    const returnVariable = (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href="https://www.accordproject.org/" className="nav-home">
            {footer["logo"]["src"] && (
              <figure className="site-footer-logo">
                <svg viewBox="0 0 220 35">
                  <g transform="translate(46.830409, 11.323529)">
                    <path d="M64.8,4.6c0-2.3-1.9-4.1-4.1-4.1h-5.5v12.1h2.1V8.7h3.2l1.8,3.8h2.4l-2-4.3C64,7.5,64.8,6.1,64.8,4.6zM60.7,6.5h-3.4V2.7h3.4c1.1,0,1.9,0.8,1.9,1.9C62.6,5.6,61.8,6.5,60.7,6.5z"></path>
                    <path d="M92.4,0.4h-5.5v12.1H89V8.7h3.4c2.3,0,4.1-1.9,4.1-4.1l0,0C96.5,2.3,94.6,0.4,92.4,0.4z M92.4,6.5H89V2.7h3.4c1.1,0,1.9,0.8,1.9,1.9C94.3,5.6,93.4,6.5,92.4,6.5z"></path>
                    <path d="M18.7,10.6c-2.2,0-3.9-1.8-3.9-4.1s1.7-4.1,3.9-4.1c1.3,0,2.5,0.6,3.2,1.6l1.5-1.4c-1.2-1.5-2.9-2.3-4.7-2.3c-3.4,0-6.1,2.8-6.1,6.3s2.8,6.3,6.1,6.3c2,0,3.9-1,5.1-2.8l-1.6-1.3C21.4,9.9,20.1,10.6,18.7,10.6z"></path>
                    <path d="M6.9,0.4H3.8L0.1,12.5h2.2l0.5-1.7h5.1l0.5,1.7h2.2L6.9,0.4z M3.4,8.8l1.9-6.2l1.9,6.2H3.4z"></path>
                    <polygon points="172.7,0.4 163.3,0.4 163.3,2.6 166.9,2.6 166.9,12.5 166.9,12.5 169,12.5 169,12.5 169,2.6 172.7,2.6"></polygon>
                    <path d="M72.4,0.4h-4l0,0l0,0v12.1l0,0h4c3.3,0,6-2.7,6-6S75.8,0.4,72.4,0.4z M76.3,6.5c0,2.1-1.7,3.8-3.8,3.8h-2V2.7h2C74.6,2.7,76.3,4.3,76.3,6.5L76.3,6.5z"></path>
                    <path d="M135.4,0.4L135.4,0.4H128v2.2h5.3v4.9c0,1.7-0.8,3.1-3,3.1c-2,0-3.2-1.6-3.2-1.6l-1.5,1.4c0,0,1.6,2.3,4.6,2.3c3.1,0,5.2-2.1,5.2-5V7.5l0,0l0,0L135.4,0.4L135.4,0.4z"></path>
                    <path d="M32.2,10.6c-2.2,0-3.9-1.8-3.9-4.1s1.7-4.1,3.9-4.1c1.3,0,2.5,0.6,3.2,1.6L37,2.5c-1.2-1.5-2.9-2.3-4.7-2.3c-3.4,0-6.1,2.8-6.1,6.3s2.8,6.3,6.1,6.3c2,0,3.9-1,5.1-2.8l-1.6-1.3C34.9,9.9,33.7,10.6,32.2,10.6z"></path>
                    <path d="M45.8,0.2c-3.4,0-6.1,2.8-6.1,6.3s2.7,6.3,6.1,6.3s6.1-2.8,6.1-6.3S49.2,0.2,45.8,0.2z M45.8,10.6c-2.2,0-3.9-1.9-3.9-4.1s1.7-4.1,3.9-4.1s3.9,1.9,3.9,4.1S48,10.6,45.8,10.6z"></path>
                    <path d="M117.8,0.2c-3.4,0-6.1,2.8-6.1,6.3s2.7,6.3,6.1,6.3s6.1-2.8,6.1-6.3S121.1,0.2,117.8,0.2z M117.8,10.6c-2.2,0-3.9-1.9-3.9-4.1s1.7-4.1,3.9-4.1c2.2,0,3.9,1.9,3.9,4.1S119.9,10.6,117.8,10.6z"></path>
                    <path d="M109,4.6c0-2.3-1.9-4.1-4.1-4.1h-5.5v12.1h2.1V8.7h3.2l1.8,3.8h2.4l-2-4.3C108.2,7.5,109,6.1,109,4.6z M104.9,6.5h-3.4V2.7h3.4c1.1,0,1.9,0.8,1.9,1.9C106.8,5.6,105.9,6.5,104.9,6.5z"></path>
                    <polygon points="147.6,2.6 147.6,0.4 139.1,0.4 139.1,12.5 147.6,12.5 147.6,10.4 141.2,10.4 141.2,7.6 145.9,7.6 145.9,5.4 141.2,5.4 141.2,2.6 	"></polygon>
                    <path d="M156.3,10.6c-2.2,0-3.9-1.8-3.9-4.1s1.7-4.1,3.9-4.1c1.3,0,2.5,0.6,3.2,1.6l1.5-1.4c-1.2-1.5-2.9-2.3-4.7-2.3c-3.4,0-6.1,2.8-6.1,6.3s2.8,6.3,6.1,6.3c2,0,3.9-1,5.1-2.8l-1.6-1.3C159,9.9,157.7,10.6,156.3,10.6z"></path>
                  </g>
                  <path d="M22.7,35h12.4L23.8,0H11.5l3,9.3h-6L0.1,35h12.4l5-16h0.1L22.7,35z M22.1,2.3l9.8,30.3h-7.5L14.6,2.3H22.1z M16.8,16.6h-4.6l-1.6-5h4.6L16.8,16.6z M10.7,32.7H3.3l5.9-18l1.4,4.3h4.5L10.7,32.7z"></path>
                </svg>
              </figure>
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <ul>
              <li>
                <a href={siteConfig["siteConfig"]["baseUrl"] + 'docs/' + 'accordproject'}>Overview</a>
              </li>
              <li>
                <a href={siteConfig["siteConfig"]["baseUrl"] + 'docs/' + 'started-installation'}>Getting Started</a>
              </li>
              <li>
                <a href={siteConfig["siteConfig"]["baseUrl"] + 'docs/' + 'markup-cicero'}>Template Guides</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Community</h5>
            <ul>
              <li>
                <a href={siteConfig["siteConfig"]["baseUrl"] + 'users'}>User Showcase </a>
              </li>
              <li>
                <a href="http://stackoverflow.com/questions/tagged/cicero" target="_blank" rel="noreferrer noopener"> Stack Overflow</a>
              </li>
              <li>
                <a href="https://accord-project-slack-signup.herokuapp.com">Slack</a>
              </li>
              <li>
                <a href="https://twitter.com/accordhq" target="_blank" rel="noreferrer noopener">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>More</h5>
            <ul>
              <li>
                <a href="https://medium.com/@accordhq">Blog</a>
              </li>
              <li>
                <a href="https://vimeo.com/accordproject">Vimeo</a>
              </li>
              <li>
                <a href="https://github.com/accordproject">GitHub</a>
              </li>
              <li>
                <a className="github-button" href={siteConfig["siteConfig"]["customFields"]["repoUrl"]} data-icon="octicon-star" data-count-href="/accordproject/cicero/stargazers" data-show-count={true} data-count-aria-label="# stargazers on GitHub" aria-label="Star this project on GitHub"> Star </a>
              </li>
            </ul>
          </div>
        </section>


        <div className="col-container align-end">
          <div className="col col-twothird">

            <div className="linux-foundation-logo">
              <a href="https://www.linuxfoundation.org/projects/">
                <img src="/img/LF-logo.png" alt="The Linux Foundation Projects"/>
              </a>
            </div>

            <p className="copyright disclaimer">The Accord Project is not a standards setting body or organization. Documentation should be interpreted accordingly.</p>

            <p className="copyright disclaimer">The materials on this site are for informational purposes only and do not constitute legal advice. The Accord Project is not a law firm or a substitute for an attorney or law firm. The Accord Project cannot provide any kind of advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms, or strategies. The information provided is not intended to create, and receipt or use of it does not constitute, a lawyer-client relationship. Users should not act upon this information without seeking professional counsel.</p>
          </div>
          <div className="col">
            <p className="copyright">{footer["copyright"]}</p>
          </div>
        </div>
      </footer>
    );
    if(returnVariable) return returnVariable;
    else "accordproject";
}

export default Footer;
