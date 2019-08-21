import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import inLogo from"../../../static/assets/img/contact/in.png";
import fbLogo from"../../../static/assets/img/contact/fb.png";
import ytLogo from"../../../static/assets/img/contact/yt.png";
import ghLogo from"../../../static/assets/img/contact/gh.png";



class Contact extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="contact">
            <div className="contact-wrp">
              <div className="contact-wrp-left">
                <div className="contact-wrp-left-headerone">
                  Let's create
                </div>
                <div className="contact-wrp-left-headertwo">
                  TOGETHER
                </div>
              </div>
              <div className="contact-wrp-right">
                <div className="contact-wrp-right-wrapper">
                  <div className="contact-wrp-right-wrapper-contact-header">
                    Kaerim Cisneros                
                  </div>
                  <div className="contact-wrp-right-wrapper-rows">
                    <div className="contact-wrp-right-wrapper-rows-icon">
                      <FontAwesomeIcon icon="globe-americas"/>
                    </div>
                    <div className="contact-wrp-right-wrapper-rows-text">
                      Eagle Mountain, UT
                    </div>                    
                  </div>
                  <div className="contact-wrp-right-wrapper-rows">
                    <div className="contact-wrp-right-wrapper-rows-icon">
                      <FontAwesomeIcon icon="phone"/>
                    </div>
                    <div className="contact-wrp-right-wrapper-rows-text">
                      385 309 9628
                    </div>                    
                  </div>
                  <div className="contact-wrp-right-wrapper-rows">
                    <div className="contact-wrp-right-wrapper-rows-icon">
                        <FontAwesomeIcon icon="envelope"/>
                    </div>
                    <div className="contact-wrp-right-wrapper-rows-text">
                      <a href="mailto:kaerim.cisneros@gmail.com ? subject=Mail from my Portfolio" target="_blank">
                        Email Me
                      </a>
                    </div>                    
                  </div>
                  <div className="contact-wrp-right-wrapper-contact-social">
                    
                      <div className="contact-wrp-right-wrapper-contact-social-social-icon">
                        <a href="https://www.linkedin.com/in/kaerim-cisneros-b94b70132/" target="_blank">
                          <img src={inLogo} />
                        </a>
                      </div>
                      <div className="contact-wrp-right-wrapper-contact-social-social-icon">
                        <a href= "#" target="_blank">
                          <img src={fbLogo} />
                        </a>
                      </div>
                      <div className="contact-wrp-right-wrapper-contact-social-social-icon">
                        <a href= "#" target="_blank">
                          <img src={ytLogo} />
                        </a>
                      </div>
                      <div className="contact-wrp-right-wrapper-contact-social-social-icon">
                        <a href="https://github.com/kaerim-cisneros" target="_blank">
                          <img src={ghLogo} />
                        </a>
                      </div>
                          
                    </div>           
                  </div>
                </div>
              </div>
            </div>  
       
      )
    }    
}

export default Contact;