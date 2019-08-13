import React, { Component } from "react";

import canonLogo from "../../../static/assets/img/skills/canon.jpg"
import cssLogo from "../../../static/assets/img/skills/css.jpg"
import githubLogo from "../../../static/assets/img/skills/github.jpg"
import herokuLogo from "../../../static/assets/img/skills/heroku.jpg"
import htmlLogo from "../../../static/assets/img/skills/html.jpg"
import ilustratorLogo from "../../../static/assets/img/skills/ai.jpg"
import jquerryLogo from "../../../static/assets/img/skills/jquerry.jpg"
import javascriptLogo from "../../../static/assets/img/skills/js.jpg"
import lightroomLogo from "../../../static/assets/img/skills/lr.jpg"
import mongodbLogo from "../../../static/assets/img/skills/mongo.jpg"
import mysqlLogo from "../../../static/assets/img/skills/mysql.jpg"
import nodejsLogo from "../../../static/assets/img/skills/node.jpg"
import photoshopLogo from "../../../static/assets/img/skills/ps.jpg"
import premierLogo from "../../../static/assets/img/skills/pr.jpg"
import pythonLogo from "../../../static/assets/img/skills/python.jpg"
import reactLogo from "../../../static/assets/img/skills/react.jpg"
import reduxLogo from "../../../static/assets/img/skills/redux.jpg"
import sassLogo from "../../../static/assets/img/skills/sass.jpg"
import umlLogo from "../../../static/assets/img/skills/uml.jpg"
import xdLogo from "../../../static/assets/img/skills/xd.jpg"


class Skills extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="skills">
            <div className="skills-wrp"> 
              <div className="skills-wrp-row">
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={canonLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Canon Cameras
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={cssLogo}/> 
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      CSS 3
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={githubLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Git Hub
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={herokuLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Heroku
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-wrp-row">
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={htmlLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      HTML 5
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={ilustratorLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Adobe Ilustrator
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={jquerryLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      jQuery
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={javascriptLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Javascript
                    </div>
                  </div>
                </div>
              </div>     
              <div className="skills-wrp-row">
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={lightroomLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Adobe Lightroom
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={mongodbLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      MongoDB
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={mysqlLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      MySQL
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={nodejsLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Node.js
                    </div>
                  </div>
                </div>
              </div>     
              <div className="skills-wrp-row">
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={photoshopLogo}/>
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Adobe Photoshop
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={premierLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Adobe Premier
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={pythonLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Python
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={reactLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      React
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-wrp-row">
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={reduxLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Redux
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={sassLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      SASS
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={umlLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      UML
                    </div>
                  </div>
                </div>
                <div className="skills-wrp-row-card">
                  <div className="skills-wrp-row-card-front">
                    <img src={xdLogo} />
                  </div>
                  <div className="skills-wrp-row-card-back">
                    <div className="skills-wrp-row-card-back-name">
                      Adobe XD
                    </div>
                  </div>
                </div>
              </div>                    
            </div>
        </div>
       
      )
    }    
}

export default Skills;