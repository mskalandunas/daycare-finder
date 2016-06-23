import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const HeaderComponent = React.createClass({
  render: () => {
    return (
      <section>
        <nav className="nav" style={{position: 'fixed', width: '100%'}}>
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
            <a className="nav-item" href="#">
              Schools&nbsp;&amp;&nbsp;Daycares
            </a>
            <a className="nav-item" href="#">
              Parents
            </a>
            <a className="nav-item" href="#">
              Our&nbsp;Mission
            </a>
            <a className="nav-item" href="#">
              Who&nbsp;We&nbsp;Are
            </a>
            <span className="nav-item">
              <Link className="button is-primary is-inverted" to="/sign-in">
                <span>Sign-in</span>
              </Link>
              <Link className="button is-primary" to="/sign-up">
                <span>Join</span>
              </Link>
            </span>
          </div>
        </nav>
      </section>
    )
  }
});

export default HeaderComponent;
