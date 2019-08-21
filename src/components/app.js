import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./nav-bars/logo";
import NavigationBar from './nav-bars/navBar';
import BottomNavBar from './nav-bars/btmNavBar';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import NoMatch from './pages/magicWord';

import Icons from "../helpers/icons";

Icons();

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <Router>
            <Logo/>
            <NavigationBar/>
            <Route render= {({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={400}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            )}/>
            <BottomNavBar/>
          

          
        </Router>
        
       
        

      </div>
      
      
     
    );
  }
}
