import React from "react";
import Logo from "../atom/Logo";
import play from '../../images/Group 2.png'
import Video from "../atom/Video";

const VideoPart = () => {
    const handleVideo=()=>{
      
    }
  
  return (
    <div className="bgvideo">
      <div className="playbg">
      <Logo src={play} className="play" onClick={handleVideo}/>
      </div>
      {/* <Video/> */}
    </div>
  );
};

export default VideoPart;
