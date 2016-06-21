import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MockUserSectionComponent = React.createClass({
  render: () => {
    return (
      <section className="hero is-primary is-bold" style={{paddingTop: '84px'}}>
        <div className="hero-body">
          <div className="container">
            <div id="mc_embed_signup" className="columns is-vcentered">
              <div className="column">
                <h1 className="logo-alt title">Welcome Back, Daniel.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

export default MockUserSectionComponent;



