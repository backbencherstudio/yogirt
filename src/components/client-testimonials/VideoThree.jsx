import React, { useRef, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { RiPauseLargeLine } from "react-icons/ri";


const VideoThree = () => {

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
     <div className="relative w-full h-[544px] group border border-[#12C6D8] mt-6 lg:mt-0" onMouseLeave={handleMouseOut} >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover "
        muted
      >
        <source src="/public/videos/video3.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 ">
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
                      <h2 className=" text-[18px] font-[700] uppercase font-sans">“<span className='font-plexs'>From consultation to <br /> deployment, they exceeded our expectations!</span>”</h2>
                        <p className="text-[#D2D2D5] text-[16px] lg:mt-6 mt-3 font-helvetica">Progressive AI’s expertise in automating our compliance workflow saved us thousands in operational costs. They helped us implement a solution that not only streamlined our operations but also ensured that we remain fully compliant. It was incredible to see their solution in action!</p>
            </div>
    
          </div>
        )}
      </div>
       </div>
       <div className="title text-white">
                <h2 className="mt-[20px] text-[20px]">Priya K.</h2>
                <p className="my-[10] text-[#D2D2D5] text-4">EcommPro</p>
            </div>
     </div>
    </div>

  );
};

export default VideoThree;
