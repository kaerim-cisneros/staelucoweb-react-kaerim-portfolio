import React, { Component } from "react";
import { withRouter } from "react-router";   
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AboutNav extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
    <div className="about-nav">
        <div className="about-nav-links">                
           <div className="about-nav-links-link">
               <NavLink to="/skills" activeClassName="about-nav-links-active">
                    SKILLS
                </NavLink>
            </div>
            /
            <div className="about-nav-links-link">
                <NavLink to="/education" activeClassName="nav-wrp-links-active">
                    EDUCATION
                </NavLink>
            </div>
            /
            <div className="about-nav-links-link">                 
                <NavLink to="/jobs" activeClassName="nav-wrp-links-active">
                   EXPERIENCE
                </NavLink>
            </div>
        </div>
    </div>
     );
    }
}