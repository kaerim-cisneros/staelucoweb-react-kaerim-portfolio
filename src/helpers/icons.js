import {
    faGlobeAmericas,
    faBell,
    faPhone,
    faEnvelope,
    faFilePdf,   
    faArrowRight
    
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(faBell, faGlobeAmericas, faPhone, faEnvelope, faFilePdf, faArrowRight);
  };
  
  export default Icons;