import React, { useState, useRef, useEffect } from "react";
import ChooseMobile from "./ChooseMobile";

const Choose = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const scrollRef = useRef(null);
  const isScrolling = useRef(false); // Prevent rapid scrolling
  // const hasScrolled = useRef(false)
  // const [isFading, setIsFading] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0); // Active content index
    const contentRef = useRef(null); // Sticky content container reference
    const sectionRef = useRef(null); // Main scrollable section reference
    const totalContent = 4; // Total number of content items

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
      const scrollY = window.scrollY - section.offsetTop;

      // Adjust the scroll sensitivity by reducing the "contentHeight"
      const contentHeight = (section.scrollHeight - window.innerHeight) / totalContent;
      const index = Math.min(
        Math.floor(scrollY / contentHeight),
        totalContent - 1
      );
  
      setCurrentIndex(index);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // const handleWheel = (e) => {

  //   if (!hasScrolled.current) {
  //     hasScrolled.current = true; // Ignore the first scroll
  //     return;
  //   }

  //   if (isScrolling.current) return;

  //   isScrolling.current = true;
  //   setTimeout(() => (isScrolling.current = false), 500); // Prevent rapid scrolling

  //   setIsFading(true);

  //   setTimeout(() => {
  //     setCurrentIndex((prevIndex) => {
  //       if (e.deltaY > 0) {
  //         // Scroll down - Clamp at the last index
  //         return Math.min(prevIndex + 1, content.length - 1);
  //       } else if (e.deltaY < 0) {
  //         // Scroll up - Clamp at the first index
  //         return Math.max(prevIndex - 1, 0);
  //       }
  //       return prevIndex; // No scroll
  //     });
  //     setIsFading(false);
  //   }, 300);// Delay to match the animation duration
  // };

  // // Sync scrollbar with `currentIndex`
  const scrollRef = useRef(null); // Reference for horizontal scroll container
  // const isScrolling = useRef(false); 
  useEffect(() => {
    if (scrollRef.current) {
      const sectionHeight = scrollRef.current.scrollHeight / totalContent; // Ensure this calculates the correct section width
      
      // Only scroll if `isScrolling.current` is false (prevents rapid scrolling)
      if (!isScrolling.current) {
        isScrolling.current = true;
  
        // Adjust the horizontal scroll position to match the current content index
        scrollRef.current.scrollTo({
          top: currentIndex * sectionHeight,
          behavior: "smooth", // Smooth scroll
        });
  
        // Reset the isScrolling flag after a short delay to allow smooth scrolling
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    }
  }, [currentIndex]); // Ensure this effect runs whenever `currentIndex` changes
  

  return (
    <div className="bg-[#032124]" >
      <div className=" pt-[48px] lg:py-[100px] max-w-[1320px] mx-auto px-5 vhs  relative z-0 font-plexs " ref={sectionRef}>
        <div className=" sticky-0 sticky top-0">
          <div className=" ">
            <div className="">
              <div className="text-[#12C6D8] uppercase xl:w-[1021px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 005// Why Choose Us ]</p>
                <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs">AI is a rapidly developing industry, evolving by the minute. Our experts are always researching to keep up and  <span className="text-[#12C6D8]" >deliver the most cutting-edge solutions,</span> ensuring your business gets the best AI has to offer.</h2>
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
                    src={content[currentIndex].image}
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
                    <h3 className="text-white text-[20px] sm:text-[24px] md:text-[28px] xl:text-[32px]  font-[700] leading-[41.6px]">{content[currentIndex].title}</h3>
                    <p className="text-[#D2D2D5] text-[16px] lg:text-[18px] leading-[27px] font-helvetica mt-6">{content[currentIndex].descript}</p>
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

export default Choose;
