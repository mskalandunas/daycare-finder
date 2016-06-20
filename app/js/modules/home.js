import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './components/header-component'
import FooterComponent from './components/footer-component'
import SectionComponent from './components/section-component'

const HomeView = React.createClass({
  render: () => {
    return (
      <div>
        <HeaderComponent/>
        <FooterComponent/>
      </div>
    )
  }
});

export default HomeView;
