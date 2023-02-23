import React from "react";
import Logo from "../atom/Logo";
import play from '../../images/Group 2.png'
import Video from "../atom/Video";

const VideoPart = () => {
  const handleVideo=()=>{
    <Video/>
  }
  return (
    <div className="bgvideo">
      
      <div className="playbg">
      {/* <Logo src={play} className="play" onClick={handleVideo}/> */}
      <Video/>
      </div>
    </div>
  );
};

export default VideoPart;
