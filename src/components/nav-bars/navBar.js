import React, { Component } from "react";
import { withRouter } from "react-router";   
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
    <div className="nav-wrp">
        
        <div className="nav-wrp-links">
                        
           <div className="nav-wrp-links-link">
               <NavLink to="/about" activeClassName="nav-wrp-links-active">
                    ABOUT
                </NavLink>
            </div>
           
            <div className="nav-wrp-links-link">
                <NavLink to="/portfolio" activeClassName="nav-wrp-links-active">
                    PORTFOLIO
                </NavLink>
            </div>
            
            <div className="nav-wrp-links-link">                 
                <NavLink to="/contact" activeClassName="nav-wrp-links-active">
                   CONTACT
                </NavLink>
            </div>

            
        </div>
    </div>
     );
    }
}