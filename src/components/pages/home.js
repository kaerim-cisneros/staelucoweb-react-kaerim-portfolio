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
              <h1>KAERIM</h1>
              <h1>CISNEROS</h1>
            </div>

            <div className="home-image">
                A picture goes here
            </div>
            <div className="home-skills">
              <div className="home-link-wrapper">
                  <NavLink to="/gallery/web-design" activeClassName="nav-link-active">
                        <h1>Web Design</h1>
                    </NavLink>
              </div>
              <div className="home-link-wrapper">
                  <NavLink to="/gallery/photography" activeClassName="nav-link-active">
                        <h1>Photography</h1>
                    </NavLink>
              </div>
              <div className="home-link-wrapper">
                  <NavLink to="/gallery/videos" activeClassName="nav-link-active">
                        <h1>Videos</h1>
                    </NavLink>
              </div>
            </div> 
        </div>
       
      )
    }    
}

export default Home;
