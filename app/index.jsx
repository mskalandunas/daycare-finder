import './css/bulma.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

// Components
import HeaderComponent from './js/components/header-component';
import FooterComponent from './js/components/footer-component';
import SectionComponent from './js/components/section-component';

const App = () => (
  <div>
    <SectionComponent/>
    <SectionComponent/>
    <SectionComponent/>
    <SectionComponent/>
    <FooterComponent/>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'));
