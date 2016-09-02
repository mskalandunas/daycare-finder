import React from 'react';
import ReactDOM from 'react-dom';

import MockUserHeaderComponent from './components/mock-user-header-component'
import FooterComponent from './components/footer-component'
import MockUserSectionComponent from './components/mock-user-section-component'
import MockUserBodyComponent from './components/mock-user-body-component'

const MockUserProfile = React.createClass({
  render: () => {
    return (
      <div>
        <MockUserHeaderComponent/>
        <MockUserSectionComponent/>
        <MockUserBodyComponent/>
        <FooterComponent/>
      </div>
    )
  }
});

export default MockUserProfile;
