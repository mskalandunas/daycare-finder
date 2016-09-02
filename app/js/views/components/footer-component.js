import React from 'react';
import ReactDOM from 'react-dom';

const FooterComponent = React.createClass({
  render: () => {
    return (
      <section className="footer is-primary" style={{paddingBottom: '40px', backgroundColor: '#4f4fb0'}}>
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <ul className="footer-list-header">
                <li>Schools &amp; Daycares</li>
                <li>Features</li>
                <li>Easy Billing</li>
                <li>Why Baby Dump?</li>
                <li>Getting Started</li>
                <li>Daycare Resources</li>
              </ul>
            </div>
            <div className="column is-2">
              <ul className="footer-list-header">
                <li>About</li>
                <li>Our Team</li>
                <li>Work at Baby Dump</li>
                <li>Press</li>
                <li>Visit Our Blog</li>
              </ul>
            </div>
            <div className="column is-4">
              <ul className="footer-list-header">
                <li>Baby Dump</li>
                <p style={{paddingTop: '10px'}}>7485 Cherry Blossom Ln.</p>
                <p>Tuscaloosa, WY 82061</p>
                <p>(307) 417-1928</p>
                <p><a href="mailto:hello@babydump.io" target="_blank">hello@babydump.io</a></p>
              </ul>
            </div>
            <div className="column is-2 has-text-centered">
              <ul className="footer-icon-list">
                <li>
                  <a href="https://github.com" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container" style={{paddingTop: '40px'}}>
          <div className="content is-mobile" style={{textAlign: 'center'}}>
            <span className="text-color-faded">©2016 Made by <a className="text-color-white" href="https://github.com/dzwell" target="_blank">Daniel</a>
            &nbsp;and&nbsp;
            <a className="text-color-white" href="https://mikeskalandunas.com" target="_blank">Mike</a>.
            </span>
          </div>
        </div>
      </section>
    )
  }
});

export default FooterComponent;
