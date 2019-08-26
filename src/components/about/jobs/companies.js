import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Companies extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="job-history">
            <div className="job-history-header">
                <div className="job-history-header-link">    
                    <NavLink exact to="/freelance"> 
                    <FontAwesomeIcon icon="arrow-right"/> Freelance
                    </NavLink>
                </div>
                <div className="job-history-header-txt">
                Companies
                </div>
            </div>
            
        </div>
       
      )
    }    
}

export default Companies;