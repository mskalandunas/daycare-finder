import React from 'react';
import ReactDOM from 'react-dom';

const HeaderComponent = React.createClass({
  render: () => {
    return (
      <section>
        <nav className="nav" style={{position: 'fixed', width: '100%'}}>

          <div className="nav-left">
            <a className="nav-item" href="#">
              <h1 className="logo">Baby Dump</h1>
            </a>
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
              <a className="button is-primary is-inverted" >
                <span>Sign-in</span>
              </a>
              <a className="button is-primary" href="#">
                <span>Join</span>
              </a>
            </span>
          </div>
        </nav>


        <header className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-6">
                  <h2 className="subtitle">The easiest way to find a convenient &amp; high-quality daycare for your kids.</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default HeaderComponent;
