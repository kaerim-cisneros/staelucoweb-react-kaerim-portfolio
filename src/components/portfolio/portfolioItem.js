import React from "react";
import { Link } from "react-router-dom";

export default function(props) {

    const { id, name, description, banner_image_url} = props.item;

  return (
    <div className={`portfolio-wrp-gallery-${description}`}>
      {/*<Link to={`/portfolio/${id}`}>*/}   
        <img src={banner_image_url}/>
      {/*</Link>*/}
      <div className={`portfolio-wrp-gallery-${description}-name`}>
        {name}
       </div>
    </div>
  );
}
