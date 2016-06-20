import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const SignUpView = React.createClass({
  render: () => {
    return (
      <section>
        <nav className="nav" style={{position: 'fixed', width: '100%'}}>
          <div className="nav-left">
            <a className="nav-item" href="#">
              <img src="/img/balloon.png" style={{paddingRight: '5px'}} />
              <h1 className="logo">Baby Dump</h1>
            </a>
          </div>
        </nav>
        <header className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4"></div>
                <div className="column is-4">
                  <h1 className="logo title">Sign Up</h1>
                  <h2 className="subtitle">Try us out.</h2>
                </div>
              </div>
              <div className="columns">
                <div className="column is-4"></div>
                <div className="column is-4">
                  <p className="control is-expanded">
                    <input className="input input-large input-no-border input-is-primary-focus" type="text" placeholder="address@email.com"/>
                  </p>
                  <div className="control is-horizontal">
                    <div className="control is-grouped">
                      <p className="control is-expanded">
                        <input className="input input-large input-no-border input-is-primary-focus" type="password" placeholder="••••••••"/>
                      </p>
                      <p className="control is-expanded">
                        <input className="input input-large input-no-border input-is-primary-focus" type="password" placeholder="Confirm Password"/>
                      </p>
                    </div>
                  </div>
                  <a className="button is-primary is-fullwidth" href="#">
                    <span>Join</span>
                  </a>
                  <h2 className="subtitle" style={{paddingTop: '20px'}}>Have an account already?  <Link to="/sign-in">Sign in</Link>.</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default SignUpView;
