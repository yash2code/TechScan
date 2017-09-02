import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
//import Home from './Screens/Home'
import Repos from './components/Repos'
import Nav from './components/Nav'
import TechList from './components/TechList'
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Nav}>
    <IndexRoute component={TechList}/>
    <Route name="technology" path='technology/:lang' component={Repos}/>
    </Route>
  </Router>
  , document.getElementById('root'));