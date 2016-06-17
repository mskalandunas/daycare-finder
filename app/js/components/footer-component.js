import React from 'react';
import ReactDOM from 'react-dom';

const FooterComponent = React.createClass({
  render: () => {
    return (
      <section className="footer is-primary" style={{paddingBottom: '40px'}}>
        <div className="container">
          <div className="content is-centered is-mobile">
            <span>Made by <a href="http://mikeskalandunas.com" target="_blank" className="footer-header">Mike </a></span>
            <span>and <a href="https://github.com/dzwell" target="_blank" className="footer-header">Daniel</a>.</span>
          </div>
        </div>
      </section>
    )
  }
});

export default FooterComponent;
