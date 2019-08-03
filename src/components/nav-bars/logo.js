import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logo extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
    <div className="nav-wrp logo-wrp">
            
        <div className="logo">
            <NavLink exact to="/"> 
                <img src /> {/*todo*/}
            </NavLink>
        </div>        
        
    </div>
     );
    }
}