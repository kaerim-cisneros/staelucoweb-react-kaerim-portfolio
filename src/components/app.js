import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./nav-bars/logo";
import NavigationBar from './nav-bars/nav-bar';
import BottomNavBar from './nav-bars/btm-nav-bar';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import NoMatch from './pages/magic-word';

import Icons from "../helpers/icons";

Icons();

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <Router>
          <Logo/>
          <NavigationBar/>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/about" component={About} />
             <Route path="/portfolio" component={Portfolio} />
             <Route path="/contact" component={Contact} />
             <Route component={NoMatch} />
          </Switch>
          <BottomNavBar/>
        </Router>
        
       
        

      </div>
      
      
     
    );
  }
}
