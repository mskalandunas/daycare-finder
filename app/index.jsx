'use strict'

import './css/bulma.css'
import './css/style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './js/views/home'
import SignUp from './js/views/sign-up'
import SignIn from './js/views/sign-in'
import MockUserProfile from './js/views/mock-user-profile'

// Scripts
import './js/scripts/search'

// Routes & Rendering
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/sign-up" component={SignUp}/>
    <Route path="/sign-in" component={SignIn}/>
    <Route path="/mock-user-profile" component={MockUserProfile}/>
  </Router>
), document.getElementById('app'))
