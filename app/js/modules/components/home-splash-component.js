import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const HomeSplashComponent = React.createClass({
  render: () => {
    return (
      <section>
        <header className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-8">
                  <h1 className="logo title">Baby Dump</h1>
                  <h2 className="subtitle">The easiest way to find a convenient &amp; high-quality daycare for your kids.  Enter your address and wherever you're commuting to in the fields below.</h2>
                </div>
              </div>
              <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-8">
                  <div className="control is-horizontal">
                    <div className="control is-grouped">
                      <p className="control is-expanded">
                        <input id="start-point" className="input input-large input-no-border input-is-primary-focus" type="text" placeholder="Where are you coming from?"/>
                      </p>
                      <p className="control is-expanded">
                        <input id="end-point" className="input input-large input-no-border input-is-primary-focus" type="email" placeholder="Where's your destination?"/>
                      </p>
                      <a className="button is-primary" href="#">
                        <span>Search</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default HomeSplashComponent;
