import React, { useState, useRef, useEffect } from "react";
import ChooseMobile from "./ChooseMobile";
import "./choose.css"

const Chooses = () => {

  const isScrolling = useRef(false); 

    const [currentIndex, setCurrentIndex] = useState(0); 
    const contentRef = useRef(null); 
    const sectionRef = useRef(null);
    const totalContent = 4; 

  const content = [
    {
      title: "[ 001//004 REDUCE INFRASTRUCTURE COSTS ]",
      descript: 'WITH OUR OPTIMIZED ARTIFICIAL INTELLIGENCE SOLUTION, YOU CAN CUT INFRASTRUCTURE COSTS BY UP TO 40%, ALLOWING YOUR BUSINESS TO FOCUS ON SCALABILITY',
      image: "images/frame1.png",
      img2: "images/frame11.png",
      bgimg: "images/frame layer.png"
    },
    {
      title: "[ 002//004 FASTER PROJECT COMPLETION ]",
      descript: 'OUR POWERFUL ARTIFICIAL INTELLIGENCE AUTOMATION SOLUTIONS CAN MULTITTASK AND EXECUTE HOUR AND DAY LONG TASKS IN SECONDS BOOSTING PRODUCTIVITY UP TO 30%',
      image: "images/frame2.png",
      img2: "images/frame2.png",
      bgimg: "images/frame layer.png",
    },
    {
      title: "[ 003//004 REDUCE INFRASTRUCTURE COSTS ]",
      descript: "STUCK IN A RUT? DON'T WORRY, OUR TEAM OF SEASONED Al EXPERTS ARE INTENTIONALLY GLOBAL, ENSURING YOU ALWAYS HAVE SUPPORT. UP TO MINIMIZED DOWNTIME GUARANTEED.",
      image: "images/frame3.png",
      img2: "images/frame3.png",
      bgimg: "images/frame layer.png",
    },
    {
      title: "[ 004//004 DATA PRIVACY AND ETHICAL COMPLIANCE ]",
      descript: 'OUR Al GOVERNANCE SPECIALISTS ENSURE THAT YOU ADHERE TO GLOBAL REGULATORY STANDARDS, REDUCING THE RISK OF DATA BREACHES AND PENALTIES TO KEEP YOUR BUSINESS DATA SECURE AT ALL TIMES.',
      image: "images/frame4.png",
      img2: "images/frame4.png",
      bgimg: "images/frame layer.png",
    },
  ];

  const handleScroll = () => {
    const section = sectionRef.current;
  
    // Calculate the section's scroll position relative to the viewport
    const sectionTop = section.offsetTop; // Top position of the section
    const sectionHeight = section.scrollHeight; // Full height of the section
    const scrollY = window.scrollY;
  
    // Restrict scrollY to be within the section's bounds
    const relativeScrollY = Math.max(0, Math.min(scrollY - sectionTop, sectionHeight - window.innerHeight));
  
    // Divide the relative scroll position into content sections
    const contentHeight = (sectionHeight - window.innerHeight) / totalContent;
    const index = Math.min(Math.floor(relativeScrollY / contentHeight), totalContent - 1);
  
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRef = useRef(null); 

  useEffect(() => {
    if (scrollRef.current) {
      const sectionHeight = scrollRef.current.scrollHeight / totalContent;
      

      if (!isScrolling.current) {
        isScrolling.current = true;
  
    
        scrollRef.current.scrollTo({
          top: currentIndex * sectionHeight,
          behavior: "smooth",
        });
  
   
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    }
  }, [currentIndex]); 
  

  return (
    <div className="bg-[#032124]" >
      <div className=" lg:py-[100px]  lg:pt-[150px] xl:pt-[200px] pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pb-[200px] max-w-[1320px] mx-auto px-5  min-h-[300vh]  relative z-0 font-plexs " ref={sectionRef}>
        <div className=" sticky-0 sticky top-0">
          <div className=" ">
            <div className="">
              <div className="text-[#12C6D8] uppercase xl:w-[1021px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 005// Why Choose Us ]</p>
                <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs mb-[96px] md:mb-[112px] lg:mb-0">AI is a rapidly developing industry, evolving by the minute. Our experts are always researching to keep up and  <span className="text-[#12C6D8]" >deliver the most cutting-edge solutions,</span> ensuring your business gets the best AI has to offer.</h2>
              </div>
            </div>
            <div className="lg:flex hidden lg:h-96 xl:mt-[100px] lg:mt-[60px] mt-[42px]   " ref={contentRef}>
              {/* Left Section - Images */}
              <div className="w-2/4 flex items-center justify-center relative overflow-hidden ">
                {/* Background Frame */}
                <div
                  className="absolute inset-0 z-0 "
                  style={{
                    backgroundImage: `url("images/frame bg.png")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Overlay confined to background */}
                <div
                  className="absolute inset-0 bg-[#12C6D8] z-50 pointer-events-none z-5"
                  style={{
                    maskImage: `url("images/frame bg.png")`,
                    WebkitMaskImage: `url("images/frame bg.png")`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    mixBlendMode: "hue"

                  }}
                ></div>

                {/* Foreground Image */}
                <div className="z-10 relative overflow-hidden modal-animates">
                  <img
                    src={content[currentIndex]?.image}
                    alt={`Image ${currentIndex + 1}`}
                    className="rounded-md transition-all duration-300 h-[320px] "
                   
                  />
                </div>
              </div>

              {/* Middle Section - Scrollbar */}
              <div
              //  ref={contentRef}
              //  onScroll={handleScroll}
                ref={scrollRef}
               
                className="w-[8%] xl:h-[80%] lg:h-[90%] self-center overflow-y-scroll custom-scroll2 "
              >
                <div className="h-[400%] "></div>
              </div>

              {/* Right Section - Content */}
              <div className="w-1/2 flex  ml-[100px] relative "  >
                <div className="">
                  <div  >
                    <h3 className="text-white text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px]  font-[700] leading-[41.6px]">{content[currentIndex]?.title}</h3>
                    <p className="text-[#D2D2D5] text-[16px] lg:text-[18px] leading-[27px] font-helvetica mt-6">{content[currentIndex]?.descript}</p>
                  </div>
                  <div className="absolute bottom-10 w-full">
                    <div className="button-containerNew mt-12 bg-[#12C6D826] text-[18px] w-[50%] font-[500] ">
                      <div className="corner-buttonNew py-1">
                        <span className="text-[16px] lg:text-[18px]">VIEW OUR SERVICE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            {content.map((elements, key) => <ChooseMobile elements={elements} key={key}> </ChooseMobile>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooses;
