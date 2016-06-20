import './css/bulma.css'
import './css/style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// Views
import HomeView from './js/modules/home'
import SignUpView from './js/modules/sign-up-view'
import SignInView from './js/modules/sign-in-view'

// Scripts
import './js/scripts/search'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomeView}/>
    <Route path="/sign-up" component={SignUpView}/>
    <Route path="/sign-in" component={SignInView}/>
  </Router>
), document.getElementById('app'))
