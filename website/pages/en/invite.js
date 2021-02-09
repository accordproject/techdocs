/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Invite extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [documentation on this site.](${docUrl(
          'accordproject.html',
          language
        )})`,
        title: 'Browse Docs',
      },
      {
        content: 'Ask questions about the documentation and project',
        title: 'Join the community',
      },
      {
        content: "Find out what's new with this project",
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Join the Accord Project Slack Community</h2>
            </header>
            <p>Please complete the form below to receive an email to join the Accord Project Slack community.</p>
            <form action="https://docs.accordproject.org/.netlify/functions/invite" method="POST">
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname"/>
              <br/>

              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname"/>
              <br/>

              <label for="email">Email:</label>
              <input type="text" id="email" name="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required/>
              <br/>

              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Invite;
