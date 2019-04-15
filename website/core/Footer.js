/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="70"
                height="50"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('accordproject.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('accordproject-installation.html')}>
              Installation
            </a>
            <a href={this.docUrl('spec-overview.html')}>
              Template Specification
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html')}>
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/cicero"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://accord-project.slack.com/messages/C7U521CTG">Slack</a>
            <a
              href="https://twitter.com/accordhq"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://medium.com/@accordhq">Blog</a>
            <a href="https://github.com/accordproject">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/accordproject/cicero/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
        <p/>
        <section className="copyright">The materials on this site are for informational purposes only and do not constitute legal advice. The Accord Project is not a law firm or a substitute for an attorney or law firm. The Accord Project cannot provide any kind of advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms, or strategies. The information provided is not intended to create, and receipt or use of it does not constitute, a lawyer-client relationship. Users should not act upon this information without seeking professional counsel.</section>
      </footer>
    );
  }
}

module.exports = Footer;
