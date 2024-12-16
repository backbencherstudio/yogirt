import React, { useRef, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { RiPauseLargeLine } from "react-icons/ri";


const VideoTwo = () => {

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
    <div className='' >
     <div>
     <div className="relative w-full h-[544px] group border border-[#12C6D8] mt-6 lg:mt-0" onMouseLeave = {handleMouseOut}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover "
        muted
      >
        <source src="videos/video2.mp4" type="video/mp4" />
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
                        <h2 className=" text-[18px] font-[700] uppercase font-sans">“<span className='font-plexs'>Progressive AI has been a game-changer for us!</span>”</h2>
                        <p className="text-[#D2D2D5] text-[16px] mt-6 font-helvetica">With their predictive analytics solution, we’ve achieved a level of accuracy and insight that wasn’t possible before. Our stockout rates have plummeted, and our sales are growing as a direct result. The team at Progressive AI went above and beyond, guiding us every step of the way!</p>
            </div>
    
          </div>
        )}
      </div>
       </div>
       <div className="title text-white">
                <h2 className="mt-[20px] text-[20px]">David</h2>
                <p className="mt-[10] text-[#D2D2D5] text-4">Head of Data Analytics at RetailPlus</p>
            </div>
     </div>
    </div>

  );
};

export default VideoTwo;
