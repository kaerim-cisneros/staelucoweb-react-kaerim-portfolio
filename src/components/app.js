import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "./nav-bars/logo";
import NavigationBar from './nav-bars/nav-bar';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <Router>
          <Logo/>
          <NavigationBar/>
          <Switch>
             <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        
       
        

      </div>
      
      
     
    );
  }
}
