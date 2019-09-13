import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sateluco from "./../../../../static/assets/img/sateluco.jpg"

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
                        Companies <FontAwesomeIcon icon="arrow-right"/>
                    </NavLink>
                </div>
                <div className="job-history-header-txt">
                    Freelance
                </div>
            </div>
            <div className="job-history-wrp">
                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-image">
                        <div className="job-history-wrp-company-image-wrapper">
                            <img src={Sateluco} />
                        </div>
                    </div>
                    <div className="job-history-wrp-company-description">
                        As a freelancer I used the brand Sateluco Producciones the brand have different branches as a the Web Branch, the Graphic Design branch, the Video Branch and Photo KAE as the Photography Branch, originally the brand was created for video and events production but it evolves to cover the needs of my customers. 
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Aram Ledezma Real Estate - Realtypath
                    </div>
                    <div className="job-history-wrp-company-years">
                        Real Estate Agent // 2015 - 2016
                    </div>
                    <div className="job-history-wrp-company-description">
                        Create graphic design for web advertising, design and create newsletters using html, real estate photograpy and video of the house.
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Utah Valley Real Estate Investors Association
                    </div>
                    <div className="job-history-wrp-company-years">
                        Real Estate // 2015
                    </div>
                    <div className="job-history-wrp-company-description">
                        Create graphic design advertising for web usage using Adobe Flash
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        El foCo Estudio - TV Addvetising 
                    </div>
                    <div className="job-history-wrp-company-years">
                        Advertising Agency // 2013
                    </div>
                    <div className="job-history-wrp-company-description">
                        I was production assitent for 2 tv advertising Spot Baraima Spiced and Chantilly Arte en Reposteria.  

                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/watch?v=-c25GV0JNnQ" target="_blank">Spot Baraima</a>
                        </div>
                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/watch?v=uiqn1LVTPZQ" target="_blank">Spot Chantilly</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Veberka Bros. Productions - Passfire
                    </div>
                    <div className="job-history-wrp-company-years">
                        Filmmaker // 2013
                    </div>
                    <div className="job-history-wrp-company-description">
                        I was the fixer for the 13 days of shooting in Mexico on the documental Passfire, we shoot the festivities in the town of Tultepec, Mexico home of the mexican pyrotechnics. 

                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/watch?v=fHEEoRDWusk" target="_blank">Trailer</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Pleyades Day Care
                    </div>
                    <div className="job-history-wrp-company-years">
                        Day Care // 2013
                    </div>
                    <div className="job-history-wrp-company-description">
                        I design posters, student cards and other graphic material using Adobe Ilustrator, Adobe Photoshop. 

                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/watch?v=fHEEoRDWusk" target="_blank">Trailer</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Lomas Verdes 5ta Seccion
                    </div>
                    <div className="job-history-wrp-company-years">
                        HOA // 2012
                    </div>
                    <div className="job-history-wrp-company-description">
                        Code and design of web app from scratch also did some logos and graphic design of presentation cards.
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Grupo Cengall
                    </div>
                    <div className="job-history-wrp-company-years">
                        Insurence Brocker // 2009 2012
                    </div>
                    <div className="job-history-wrp-company-description">
                        Update a legacy web app using HTML, Adobe Flash and CSS www.estoyseguromx.com and www.aseguramimundo, also some graphic design content.

                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.estoyseguromx.com" target="_blank">Estoy Seguro</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        XEIPN Canal Once - Energia
                    </div>
                    <div className="job-history-wrp-company-years">
                        TV Channel // 2008 
                    </div>
                    <div className="job-history-wrp-company-description">
                        For most of the time I help the logistics for the recording of the show, also some times I served as scouter, wardrobe supervisor and was able to direct a chapter.
                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/playlist?list=PLrFkZrRQk9nkT5mH0ygJbvMi3f2T3pVLr" target="_blank">YouTube</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Mantequilla Records
                    </div>
                    <div className="job-history-wrp-company-years">
                        Music Production // 2009 
                    </div>
                    <div className="job-history-wrp-company-description">
                        Helping the recording of the making of and review of the Goliath Festival as a cameraman.
                        <div className="job-history-wrp-company-description-link">
                            <a href="https://www.youtube.com/watch?v=smO1JZ2895c" target="_blank">YouTube</a>
                        </div>
                    </div>
                </div>

                <div className="job-history-wrp-company">
                    <div className="job-history-wrp-company-position">
                        Riff 111
                    </div>
                    <div className="job-history-wrp-company-years">
                        Web Radio // 2007 - 2008 
                    </div>
                    <div className="job-history-wrp-company-description">
                        Producer and host of a radio show called "El Lenguaje del Rock", the show had the objective of play international rock.
                    </div>
                </div>

            </div>
         
        </div>
       
      )
    }    
}

export default Freelance;