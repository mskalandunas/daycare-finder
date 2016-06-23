import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MockUserHeaderComponent = React.createClass({
  render: () => {
    return (
      <section>
        <nav className="nav" style={{position: 'fixed', width: '100%', backgroundColor: '#fff'}}>
          <div className="nav-left">
            <Link className="nav-item" to="/">
              <img src="/img/balloon.png" style={{paddingRight: '5px'}} />
              <h1 className="logo">Baby Dump</h1>
            </Link>
          </div>
          {/*
          <span className="nav-toggle">
            <span>hi 1</span>
            <span>hi 2</span>
            <span>hi 3</span>
          </span>
          */}
          <div className="nav-right nav-menu">
            <span className="nav-item">
              <Link className="is-primary" to="/mock-user-profile">
                <span>Logout&nbsp;hello@babydump.io</span>
              </Link>
            </span>
          </div>
        </nav>
      </section>
    )
  }
});

export default MockUserHeaderComponent;
