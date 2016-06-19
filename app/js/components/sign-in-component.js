import React from 'react';
import ReactDOM from 'react-dom';

const SignInComponent = React.createClass({
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
                  <h1 className="logo title">Sign In</h1>
                  <h2 className="subtitle">Welcome back.</h2>
                </div>
              </div>

              <div className="columns">
                <div className="column is-4"></div>
                <div className="column is-4">


                  <p className="control is-expanded">
                    <input className="input input-large input-no-border" type="text" placeholder="address@email.com"/>
                  </p>

                  <p className="control is-expanded">
                    <input className="input input-large input-no-border" type="password" placeholder="••••••••"/>
                  </p>

                  <a className="button is-primary is-fullwidth" href="#">
                    <span>Sign In</span>
                  </a>

                </div>
              </div>


            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default SignInComponent;
