import React from 'react'
import playbg from '../../images/Frame 8.png'
import { Player, BigPlayButton, LoadingSpinner } from "video-react";


const Video = () => {
    // const videoRef = useRef();
    // useEffect(() => {
    //   videoRef.current.src =
    //     'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4';
    // }, []);
  return (
    <Player
      playsInline
      poster={playbg}
      // autoPlay
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    ><BigPlayButton position="center"/>
    <LoadingSpinner />
    </Player>
  )
}

export default Video
