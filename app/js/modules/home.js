import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './components/header-component'
import HomeSplashComponent from './components/home-splash-component'
import FooterComponent from './components/footer-component'
import SectionComponent from './components/section-component'

const Home = React.createClass({
  render: () => {
    return (
      <div>
        <HeaderComponent/>
        <HomeSplashComponent/>
        <FooterComponent/>
      </div>
    )
  }
});

export default Home;
