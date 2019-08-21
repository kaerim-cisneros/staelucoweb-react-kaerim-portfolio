import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../static/assets/img/logo-kc.png"

export default class Logo extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
    <div className="nav-wrp logo-wrp">
            
        <div className="logo">
            <NavLink exact to="/"> 
                <img src={logo} />
            </NavLink>
        </div>        
        
    </div>
     );
    }
}