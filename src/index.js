import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Repos from './components/Repos'
import Nav from './components/Nav'
import TechList from './components/TechList'
import Profile from './components/Profile'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Nav}>
      <IndexRoute component={TechList} />
      <Route name="technology" path='technology/:lang' component={Repos} />
      <Route name="profile" path='profile/:user' component={Profile} />
    </Route>
  </Router>
  , document.getElementById('root'));