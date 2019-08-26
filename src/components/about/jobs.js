import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import PdfLink from "./pdfLink";
import JobOptions from "./jobs/jobOptions"
import Freelance from "./jobs/freelance"
import Companies from "./jobs/companies"

class Jobs extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="jobs">
            <div className="job-wrp">
                <div className="pdf-download">
                        <PdfLink/>
                </div>
            <Router>
                    <Route render= {({ location }) => (
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={250}
                        classNames="fadeAbout"
                      > 
                        <Switch>
                          <Route path="/jobs" component={JobOptions} />
                          <Route path="/freelance" component={Freelance} />
                          <Route path="/companies" component={Companies} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                    )}/>
            </Router>
                
            </div>
        </div>
       
      )
    }    
}

export default Jobs;