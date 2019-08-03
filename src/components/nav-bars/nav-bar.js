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
            
            <div className="logo">
                <NavLink exact to="/"> 
                  <img src /> {/*todo*/}
                </NavLink>
            </div>        
                        
           <div className="nav-wrp-links-link">
               <NavLink to="/about" activeClassName="nav-wrp-links-active">
                    About
                </NavLink>
            </div>
           
            <div className="nav-wrp-links-link">
                <NavLink to="/gallery" activeClassName="nav-wrp-links-active">
                    Gallery
                </NavLink>
            </div>
            
            <div className="nav-wrp-links-link">                 
                <NavLink to="/contact" activeClassName="nav-wrp-links-active">
                   Contact
                </NavLink>
            </div>

            
        </div>
    </div>
     );
    }
}