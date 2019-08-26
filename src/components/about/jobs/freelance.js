import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Freelance extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="job-history">
            <div className="job-history-header">
                <div className="job-history-header-link">      
                    <NavLink exact to="/companies"> 
                        <FontAwesomeIcon icon="arrow-right"/> Companies
                    </NavLink>
                </div>
                <div className="job-history-header-txt">
                    Freelance
                </div>
            </div>
         
        </div>
       
      )
    }    
}

export default Freelance;