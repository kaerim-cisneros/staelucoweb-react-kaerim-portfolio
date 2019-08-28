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
                        Freelance <FontAwesomeIcon icon="arrow-right"/>
                    </NavLink>
                </div>
                <div className="job-history-header-txt">
                Companies
                </div>
            </div>
            <div className="job-history-wrp">
                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-name">
                        Vivint Solar
                    </div>
                    <div className="job-history-wrp-company-position">
                        Customer Care Team Lead
                    </div>
                    <div className="job-history-wrp-company-years">
                        Apr 2018 - Actual
                    </div>
                    <div className="job-history-wrp-company-description">
                        Started as a customer care agent. I move to a different teams such as Outbound, Transfers, Special Opperations where I win the award for agent of the month 2 months in a row, as a Customer Care Team Lead I'm helpinf to the developmnet and grow of the agents, also help to keep the queue down and make desitions about escalated situations, I supervice around 25 agents.
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-name">
                        Sykes
                    </div>
                    <div className="job-history-wrp-company-position">
                        Customer Service Agent for Capital One
                    </div>
                    <div className="job-history-wrp-company-years">
                        Jul 2017 - Apr 2018
                    </div>
                    <div className="job-history-wrp-company-description">
                        I was awarded as top 4 performer of the month for the month of December 2017 also get the awarded for punctuality, I deliver a high standard customer service with the top privacy policies standards, helping customers during emergencies like hurricane Maria and Harvey.
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-name">
                        Match Analysis Mexico
                    </div>
                    <div className="job-history-wrp-company-position">
                        Soccer Analyst
                    </div>
                    <div className="job-history-wrp-company-years">
                        Jan 2014 - Oct 2014
                    </div>
                    <div className="job-history-wrp-company-description">
                        I analyze the statistics of soccer matches for the Liga MX, MLS (Major Professional Soccer Leagues) also some college matches for universities like BYU, Oregon State, etc.
                    </div>
                </div>

            </div>
            
        </div>
       
      )
    }    
}

export default Companies;