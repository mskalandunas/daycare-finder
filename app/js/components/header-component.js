import React from 'react';
import ReactDOM from 'react-dom';

const HeaderComponent = React.createClass({
  render: () => {
    return (
      <header className="hero is-primary is-fullheight" style={{background: 'linear-gradient(to bottom right, #8a8acb, #f9886c)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Baby Dump
            </h1>
            <h2 className="subtitle">
              Find a daycare that works for you.
            </h2>
          </div>
        </div>
      </header>
    )
  }
});

export default HeaderComponent;
