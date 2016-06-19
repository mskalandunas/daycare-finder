import './css/bulma.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

// Components
import HeaderComponent from './js/components/header-component';
import FooterComponent from './js/components/footer-component';
import SectionComponent from './js/components/section-component';
import SignUpComponent from './js/components/sign-up-component';
import SignInComponent from './js/components/sign-in-component';

// Scripts
import './js/scripts/search';

const App = () => (
  <div>
    {/* Landing Page
    <HeaderComponent/>
    <FooterComponent/>
    */}

    {/* Sign In
    <SignUpComponent/>
    */}

    <SignInComponent/>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'));
