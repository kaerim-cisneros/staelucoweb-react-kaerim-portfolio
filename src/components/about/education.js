import React, { Component } from "react";

import bottegaLogo from "../../../static/assets/img/bottega-logo.jpg"
import uvmLogo from "../../../static/assets/img/uvm-logo.png"

class Education extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="education">
            <div className="education-wrp">
                <div className="education-wrp-img-left">
                    <div className="education-wrp-img-left-logo-wrapper">
                        <img src={bottegaLogo} />
                    </div>
                    <div className="education-wrp-img-left-txt-wrapper">
                        <div className="school">
                            Bottega
                        </div>
                        <div className="place">
                            Lehi, UT 2019
                        </div>
                        <div className="title">
                            Graduated Full-stack Developent <br /> with Javascript, Python, React
                        </div>
                    </div>
                </div>
                <div className="education-wrp-img-left">
                    <div className="education-wrp-img-left-logo-wrapper">
                        <img src={uvmLogo} />
                    </div>
                    <div className="education-wrp-img-left-txt-wrapper">
                        <div className="school">
                            Universidad del Valle de Mexico
                        </div>
                        <div className="place">
                            Naucalpan, Mexico 2009
                        </div>
                        <div className="title">
                            Graduate BS Communication <br /> ephasis Media Communication
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      )
    }    
}

export default Education;