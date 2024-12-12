import React, { useRef, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import "./Clients.css"
import { RiPauseLargeLine } from "react-icons/ri";


const VideoBackground = () => {

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
      setIsPlaying(true); 
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when mouse leaves
      setIsPlaying(false); // Mark as paused
    }
  };

  return (
    <div className=''>
     <div>
     <div className="relative w-full h-[544px] group border border-[#12C6D8] z-0 group" onMouseLeave = {handleMouseOut}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover "
        muted
      >
        <source src="videos/videos.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 z-10">
        {( 
            <div>

              {!isPlaying ? (<button
              onClick={handlePlay}
              className=" group-hover:block hidden text-xl text-white transition duration-300  top-4 lg:left-8 left-4 absolute  bg-transparent button-containerNew"
            > 
            <div className='flex items-center gap-1 corner-buttonNew  btn-video py-[8px] px-[16px] uppercase '> <FaPlay className='' /> <span></span> Play Video</div>
            </button>) : (<button
              onClick={handleMouseOut}
              className=" group-hover:block hidden text-xl text-white transition duration-300  top-4 lg:left-8 left-4 absolute  bg-transparent button-containerNew"
            > 
            <div className='flex items-center gap-1 corner-buttonNew btn-video py-[8px] px-[16px] uppercase '> <RiPauseLargeLine className='' /> <span></span> Pause Video</div>
            </button>)}
            
            <div className='bottom-4 absolute lg:left-8 lg:right-8 left-4 right-4'>
                        <h2 className="card-title text-[16px] md:text-[18px] font-[700] uppercase">Our customer engagement levels have never been higher!</h2>
                        <p className="text-[#D2D2D5] text-[14px] md:text-[16px] mt-3 md:mt-4 lg:mt-6 font-helvetica">The AI training and support from Progressive AI empowered our team to develop personalized marketing campaigns that resonated deeply with our customers. The measurable growth we’ve seen in engagement rates speaks volumes about their approach. Thank you, Progressive AI!</p>
            </div>
    
          </div>
        )}
      </div>
       </div>
       <div className="title text-white">
                <h2 className="mt-[20px] text-[20px]">MICHAEL T</h2>
                <p className="my-[10] text-[#D2D2D5] text-4">FineServe Solution</p>
            </div>
     </div>
    </div>

  );
};

export default VideoBackground;
