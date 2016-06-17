import React from 'react';
import ReactDOM from 'react-dom';

const FooterComponent = React.createClass({
  render: () => {
    return (
      <section className="footer is-primary" style={{paddingBottom: '40px', backgroundColor: '#8a8acb'}}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <ul className="footer-list-header">
                <li>Schools &amp; Daycares</li>
                <li>Features</li>
                <li>Easy Billing</li>
                <li>Why Baby Dump?</li>
                <li>Getting Started</li>
                <li>Daycare Resources</li>
              </ul>
            </div>
            <div className="column">
              <ul className="footer-list-header">
                <li>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="column">
              <ul className="footer-list-header">
                <li>Baby Dump</li>
                <p>7485 Cherry Blossom Ln.</p>
                <p>Tuscaloosa, WY 82061</p>
                <p>(307) 417-1928</p>
                <p><a href="mailto:hello@babydump.io" target="_blank">hello@babydump.io</a></p>
              </ul>
            </div>
            <div className="column">
              <ul className="footer-icon-list">
                <li>
                  <i className="fa fa-github"></i>
                </li>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container" style={{paddingTop: '40px'}}>
          <div className="content is-mobile" style={{textAlign: 'center', fontWeight: '700'}}>
            <span className="text-color-faded">©2016 Made by <a className="text-color-white" href="https://github.com/dzwell" target="_blank">Daniel</a>
            , <a className="text-color-white" href="https://github.com/flegald" target="_blank">David</a>, and&nbsp;
            <a className="text-color-white" href="http://mikeskalandunas.com" target="_blank">Mike</a>.
            </span>
          </div>
        </div>
      </section>
    )
  }
});

export default FooterComponent;
