import React from 'react';
import ReactDOM from 'react-dom';

const FooterComponent = React.createClass({
  render: () => {
    return (
      <section className="footer is-primary" style={{paddingBottom: '40px', backgroundColor: '#8a8acb'}}>
        <div className="container">
          <div className="content is-mobile" style={{textAlign: 'center'}}>
            <span className="text-color-white">Made by <a className="text-color-faded" href="https://github.com/flegald" target="_blank">Daniel</a>
            , <a className="text-color-faded" href="https://github.com/dzwell" target="_blank">David</a>, and&nbsp;
            <a className="text-color-faded" href="http://mikeskalandunas.com" target="_blank">Mike</a>.</span>
          </div>
        </div>
      </section>
    )
  }
});

export default FooterComponent;
