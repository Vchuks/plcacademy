import React from 'react'
import { useRef, useEffect } from "react";


const Video = () => {
    const videoRef = useRef();
    useEffect(() => {
      videoRef.current.src =
        'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4';
    }, []);
  return (
    <div>
      <video ref={videoRef} controls width="100%" />
    </div>
  )
}

export default Video
