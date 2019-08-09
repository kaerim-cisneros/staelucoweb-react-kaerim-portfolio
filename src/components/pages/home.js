import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import homeImg from "../../../static/assets/img/home.jpg"

class Home extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className="home">
            
            <div className="home-head">
              <h2>WEB DEVELOPER / PHOTOGRAPHER / DESIGNER</h2>
              <div className="home-head-name"> 
                  <p>Kaerim</p>
                  <p>Cisneros</p>
              </div>
            </div>

            <div className="home-image">
                <div className="home-image-img">
                    <NavLink to="/about"> 
                      <img src={homeImg} />
                    </NavLink>
                </div>  
            </div>
            <div className="home-gallery">
              <div className="home-gallery-links">
                <div className="home-gallery-links-wrp">
                    <NavLink to="/gallery/web-design">
                      PORTFOLIO
                    </NavLink>
                </div>
              </div>  
            </div> 
        </div>
       
      )
    }    
}

export default Home;
