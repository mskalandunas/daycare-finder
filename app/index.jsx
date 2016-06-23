// CSS
import './css/bulma.css'
import './css/style.css'

// React
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Views
import Home from './js/modules/home'
import SignUp from './js/modules/sign-up'
import SignIn from './js/modules/sign-in'
import MockUserProfile from './js/modules/mock-user-profile'

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
