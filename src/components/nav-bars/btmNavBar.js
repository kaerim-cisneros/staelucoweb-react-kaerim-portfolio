import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class BottomNavBar extends Component {
    constructor() {
      super();
    }
    
    year = moment().year();

    render() {
      return (
        <div className="btm-nav-bar-wrp">  
          <div className="btm-nav-bar">
            <div className="btm-nav-bar-left">
              
                <div className="btm-nav-bar-link">
                  <NavLink to="/about">
                        About
                  </NavLink>
                </div>
              
                <div className="btm-nav-bar-link">
                  <NavLink to="/gallery">
                        Gallery
                  </NavLink>
                </div>
                
                <div className="btm-nav-bar-link">                 
                  <NavLink to="/contact">
                      Contact
                  </NavLink>
                </div>
              
            </div>  
            <div className="btm-nav-bar-center">
              <div className="btm-nav-bar-link">
                  
                  <div className="request">Request your</div>
                  <NavLink to="/contact">
                      Quote <FontAwesomeIcon icon="bell" className="bell" />
                  </NavLink>

                  <div className="sateluco">
                    Sateluco Producciones | Web Branch {moment().year()}
                  </div>
              </div>
            </div>  

            <div className="btm-nav-bar-right">
             
                <div className="btm-nav-bar-link">                 
                  <a href="https://www.linkedin.com/in/kaerim-cisneros-b94b70132/" target="_blank">
                     Linkedin
                  </a>
                </div>

                <div className="btm-nav-bar-link">                 
                  <a href="#" >
                      Facebook
                  </a>
                </div>

                <div className="btm-nav-bar-link">                 
                  <a href="#" >
                    YouTube
                  </a>
                </div>

                <div className="btm-nav-bar-link">                 
                  <a href="https://github.com/kaerim-cisneros" target="_blank">
                    GitHub
                  </a>
                </div>
               
             
             
            </div>  

          </div>
        </div>
      )
    }    
}

export default BottomNavBar;