import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MockUserBodyComponent = React.createClass({
  render: () => {
    return (
      <section>
        <header className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                  <h2 className="subtitle">Below you'll find the care centers you've marked as your favorites.</h2>
                </div>
              </div>
              <div className="columns">
                <div className="column is-3"></div>

                <div className="column is-3">
                  <h4>Jim's Daycare</h4>
                </div>

                <div className="column is-3">
                  <h4><span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                  </span></h4>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default MockUserBodyComponent;




