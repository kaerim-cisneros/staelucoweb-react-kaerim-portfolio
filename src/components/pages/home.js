import React, { Component } from "react";
import { NavLink } from "react-router-dom";



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
                        Image 350 x 350
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
