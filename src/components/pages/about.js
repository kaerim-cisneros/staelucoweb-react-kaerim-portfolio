import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutNav from "../about/about-nav";
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
                  <p>Kaerim was born an rise in Mexico City where he get in love with cinema, photography, design and computers, at the age of 30 he find love and move to the US with a base in the state of Utah around the Silicon Slope area. </p>
                  *TODO*
                  <p>Se ti ha repartia analisis aterraba brillado testigos aplicado en. Desdenara moralidad proscenio es decretado un emperador el. Dama juan tres fijo suo doy gris como asi. Si fe apoplejia recuerdan extraneza en. Le perezoso se prefirio ma desierto gr ambicion pintados acaricia. Moro anos el va tome echo poca sala ma. Alma suya dias ese vida las nino gato ley. Bajos vicio rollo vez sea arroz mia poder. Nota al para yo idea. </p>

                  <p>Ido orgullo plateas por dientes. Al bajado la yo aunque bebida le. Ley decretado irritante muy inspirado con fin cubiertas. Me region ya griego ahinco en. Inspiraban fantastico gas fantastica chapurraba cementerio por ignorancia tio. Da eh aludia ay.</p>

                </div>
                <div className="about-container">
                  <Router>
                    <AboutNav/>
                    <Switch>
                      <Route path="/skills" component={Skills} />
                      <Route path="/education" component={Education} />
                      
                    </Switch>
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