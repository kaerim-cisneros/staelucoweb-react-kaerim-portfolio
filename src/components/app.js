import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "./nav-bars/logo";
import NavigationBar from './nav-bars/nav-bar';

import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Gallery from './pages/gallery';
import Contact from './pages/contact';


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
             <Route path="/skills" component={Skills} />
             <Route path="/gallery" component={Gallery} />
             <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        
       
        

      </div>
      
      
     
    );
  }
}
