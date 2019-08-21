import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import AboutNav from "../about/aboutNav";
import Skills from '../about/skills';
import Education from '../about/education';

import aboutImg from "../../../static/assets/img/about.jpg"


class About extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="about">
            <div className="about-wrp">
              <div className="about-wrp-left">
                <div className="header">
                  <h1>About</h1>
                </div>
                <div className="biografy"> 
                  <p>Born and raised in Mexico City, I’m full stack developer, designer, and photographer, based near the Silicon Slopes at Utah, I had worked on react, python, HTML, SASS, graphic design software, and audio-visual production. </p>
                  
                  <p>For several years I’ve been working as a freelance for graphic and web design with a very diverse customer base like insurance brokers (Grupo Cengall, Mexico), restaurants (Mexico), different real estate companies (USA/Mexico), transportation (TyLT, Mexico/USA) and drug stores (Farmacias La Generosa, Mexico). </p>

                  <p>I have worked as a freelance for other audio-visual for different companies in the production department,  I also had a photography exhibit at Mexico City, I’m bilingual and passionate about art, movies and music. </p>


                </div>
                <div className="about-container">
                  <Router>
                    <AboutNav/>
                    <Route render= {({ location }) => (
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={250}
                        classNames="fadeAbout"
                      > 
                    <Switch>
                      <Route path="/skills" component={Skills} />
                      <Route path="/education" component={Education} />
                      
                    </Switch>
                    </CSSTransition>
                   </TransitionGroup>
                  )}/>
                  </Router>
                </div>
              </div>
              <div className="about-wrp-right">
                <div className="about-wrp-right-img">
                  <img src={aboutImg} />
                </div>
              </div>
            </div>
        </div>
       
      )
    }    
}

export default About;