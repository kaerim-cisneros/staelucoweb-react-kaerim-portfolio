import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PdfLink extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="pdf-link-wrp">
            <div className="pdf-icon">
                <a href="#" target="_blank">
                    <FontAwesomeIcon icon="file-pdf"/>
                </a>
            </div>
        </div>
       
      )
    }    
}

export default PdfLink;