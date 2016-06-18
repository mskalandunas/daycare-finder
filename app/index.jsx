import './css/bulma.css';
import './css/style.css';

// Scripts
// import './js/scripts/classie';
// import './js/scripts/navbar';

import React from 'react';
import ReactDOM from 'react-dom';

// Components
import HeaderComponent from './js/components/header-component';
import FooterComponent from './js/components/footer-component';
import SectionComponent from './js/components/section-component';

const App = () => (
  <div>
    <HeaderComponent/>
    <FooterComponent/>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'));
