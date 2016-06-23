import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import MockUserProfileComponent from './mock-user-profile-component';
import MockUserRatingsComponent from './mock-user-ratings-component';

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
                  <h2 className="subtitle text-align-left">Below you'll find the care centers you've marked as your favorites.  You can also change your email address and password here.</h2>
                </div>
              </div>

              <MockUserProfileComponent/>
              <MockUserRatingsComponent/>

            </div>
          </div>
        </header>
      </section>
    )
  }
});

export default MockUserBodyComponent;




