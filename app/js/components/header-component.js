import React from 'react';
import ReactDOM from 'react-dom';

const HeaderComponent = React.createClass({
  render: () => {
    return (
      <section>
        {/*
        <nav className="nav" style={{position: 'fixed', width: '100%', backgroundColor: 'rgba(255,255,255,.5)'}}>
          <div className="nav-left">
            <a className="nav-item" href="#">
              <img src="/images/bulma.png" alt="Bulma logo}"/>
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item" href="#">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a>
            <a className="nav-item" href="#">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <a className="nav-item" href="#">
              Home
            </a>
            <a className="nav-item" href="#">
              Documentation
            </a>
            <a className="nav-item" href="#">
              Blog
            </a>

            <span className="nav-item">
              <a className="button" >
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
              <a className="button is-primary" href="#">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </nav>
      */}


        <header className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-6">
                  <h1 className="title">Baby Dump</h1>
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
