import React, { useState, useRef, useEffect } from "react";
import ChooseMobile from "./ChooseMobile";
import "./choose.css"

const Choosess = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const scrollbarRef = useRef(null);
  
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
  
  
    // Ensure we always have valid content by constraining activeIndex
    const safeActiveIndex = Math.min(Math.max(0, activeIndex), content.length - 1);
    const currentContent = content[safeActiveIndex] || content[0];
  
    const calculateProgress = () => {
      if (!containerRef.current) return 0;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      return Math.max(0, Math.min(1, scrollProgress));
    };
  
    const updateScrollThumb = (progress) => {
      if (!scrollbarRef.current) return;
      const scrollbar = scrollbarRef.current;
      const scrollbarHeight = scrollbar.offsetHeight;
      const thumbHeight = scrollbarHeight / content.length;
      const maxTranslate = scrollbarHeight - thumbHeight;
      const translation = progress * maxTranslate;
      const thumb = scrollbar.querySelector('.scroll-thumb');
      if (thumb) {
        thumb.style.transform = `translateY(${translation}px)`;
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const progress = calculateProgress();
        const newIndex = Math.min(
          Math.floor(progress * content.length),
          content.length - 1
        );
        if (newIndex >= 0 && newIndex < content.length) {
          setActiveIndex(newIndex);
          updateScrollThumb(progress);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      if (!scrollbarRef.current) return;
  
      const scrollbar = scrollbarRef.current;
      let isDragging = false;
      let startY = 0;
      let startProgress = 0;
  
      const handleDragStart = (e) => {
        isDragging = true;
        startY = e.clientY;
        startProgress = calculateProgress();
        document.body.style.userSelect = 'none';
      };
  
      const handleDragMove = (e) => {
        if (!isDragging) return;
  
        const deltaY = e.clientY - startY;
        const scrollbarHeight = scrollbar.offsetHeight;
        const progress = Math.max(0, Math.min(1, startProgress + (deltaY / scrollbarHeight)));
  
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
          top: progress * scrollHeight,
          behavior: 'auto'
        });
      };
  
      const handleDragEnd = () => {
        isDragging = false;
        document.body.style.userSelect = '';
      };
  
      scrollbar.addEventListener('mousedown', handleDragStart);
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
  
      return () => {
        scrollbar.removeEventListener('mousedown', handleDragStart);
        window.removeEventListener('mousemove', handleDragMove);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    }, []);
  
    // If content array is empty, don't render anything
    if (!content.length) return null;
  
    return (
      <div className="relative bg-[#032124]">
        <div
          ref={containerRef}
          className=" lg:py-[100px]  lg:pt-[150px] xl:pt-[200px] pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pb-[200px] max-w-[1320px] mx-auto px-4 2xl:px-0  lg:min-h-[400vh]  relative z-0 font-plexs section-container"
        >
          <div className="lg:sticky lg:top-0 lg:h-screen ">
            <div>
              <div className="text-[#12C6D8] uppercase xl:w-[1021px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 005// Why Choose Us ]</p>
                <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs mb-[96px] md:mb-[112px] lg:mb-0">AI is a rapidly developing industry, evolving by the minute. Our experts are always researching to keep up and  <span className="text-[#12C6D8]" >deliver the most cutting-edge solutions,</span> ensuring your business gets the best AI has to offer.</h2>
              </div>
            </div>
  
            <div className="lg:flex hidden lg:h-96 xl:mt-[100px] lg:mt-[60px] mt-[42px]  ">
              {/* Left Image Content */}
              <div className="w-2/4 flex items-center justify-center relative ">
                <div className="relative p-10">
                  <div
                    className="absolute inset-0 z-0 "
                    style={{
                      backgroundImage: `url("images/frame bg.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 bg-[#12C6D8] z-50 pointer-events-none z-5 "
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
                  <div className="z-10 relative overflow-hidden modal-animates">
                    <img
                      src={currentContent.image}
                      alt={`Section ${safeActiveIndex + 1}`}
                      className="rounded-md transition-all duration-300 h-[320px] "
  
                    />
                  </div>
                  {/* <div className="absolute -top-32 -left-32 w-full h-full border border-cyan-400/20 rounded-tr-3xl rounded-bl-3xl" /> */}
                  {/* <div className="relative bg-[#002626] rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                  <img 
                    src={currentContent.image}
                    alt={`Section ${safeActiveIndex + 1}`}
                    className="w-full h-auto object-cover transition-opacity duration-300"
                  />
                </div> */}
                    <div className="absolute " />
  
                    
                  </div>
              </div>
  
              {/* Custom Scrollbar */}
              <div className="relative w-[8%]  lg:h-[90%] custom-scroll2 flex justify-end ">
                <div
                  ref={scrollbarRef}
                  className="w-[1px] h-full bg-cyan-400/20 cursor-pointer relative"
                >
                  <div
                    className="scroll-thumb absolute w-[1px] bg-cyan-400 transition-transform duration-150"
                    style={{
                      height: `${100 / content.length}%`,
                      // left: '1px'
                    }}
                  />
                </div>
              </div>
  
  
              {/* Right Text Content */}
              <div className="w-1/2 flex  ml-[100px] relative "  >
                  <div className="">
                    <div  >
                      <h3 className="text-white text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px]  font-[700] leading-[41.6px]">{currentContent.title}</h3>
                      <p className="text-[#D2D2D5] text-[16px] lg:text-[18px] leading-[27px] font-helvetica mt-6">{currentContent.descript}</p>
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
    );
  };
  
  export default Choosess;


