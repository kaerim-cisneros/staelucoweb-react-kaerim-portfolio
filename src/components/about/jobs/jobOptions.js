import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class JobsOptions extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="jobs-options">
            <div className="jobs-options-wrp">
                <div className="jobs-options-wrp-freelance">    
                    <NavLink exact to="/freelance"> 
                        Freelance
                    </NavLink>
                </div>
                <div className="jobs-options-wrp-companies">    
                    <NavLink exact to="/companies"> 
                        Companies
                    </NavLink>
                </div>
            </div>
        </div>
       
      )
    }    
}

export default JobsOptions;