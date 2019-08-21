import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NoMatch extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="magic-word">
            <div className="magic-word-wrp">
                <NavLink exact to="/"> 
                    Ah ah ah! You didn't say the magic word! 
                </NavLink>
            </div>
        </div>   
      )
    }    
}

export default NoMatch;