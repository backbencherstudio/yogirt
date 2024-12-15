import React, { useEffect, useState, useRef } from "react";
import ChooseMobile from "./ChooseMobile";

const Choose2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Active content index
  const contentRef = useRef(null); // Sticky content container reference
  const sectionRef = useRef(null); // Main scrollable section reference
  const totalContent = 4; // Total number of content items

  const content = [
    {
      title: "[ 001//004 REDUCE INFRASTRUCTURE COSTS ]",
      descript:
        "WITH OUR OPTIMIZED ARTIFICIAL INTELLIGENCE SOLUTION, YOU CAN CUT INFRASTRUCTURE COSTS BY UP TO 40%, ALLOWING YOUR BUSINESS TO FOCUS ON SCALABILITY",
      image: "images/frame1.png",
    },
    {
      title: "[ 002//004 FASTER PROJECT COMPLETION ]",
      descript:
        "OUR POWERFUL ARTIFICIAL INTELLIGENCE AUTOMATION SOLUTIONS CAN MULTITASK AND EXECUTE HOUR AND DAY LONG TASKS IN SECONDS BOOSTING PRODUCTIVITY UP TO 30%",
      image: "images/frame2.png",
    },
    {
      title: "[ 003//004 REDUCE INFRASTRUCTURE COSTS ]",
      descript:
        "STUCK IN A RUT? DON'T WORRY, OUR TEAM OF SEASONED AI EXPERTS ARE INTENTIONALLY GLOBAL, ENSURING YOU ALWAYS HAVE SUPPORT. MINIMIZED DOWNTIME GUARANTEED.",
      image: "images/frame3.png",
    },
    {
      title: "[ 004//004 DATA PRIVACY AND ETHICAL COMPLIANCE ]",
      descript:
        "OUR AI GOVERNANCE SPECIALISTS ENSURE THAT YOU ADHERE TO GLOBAL REGULATORY STANDARDS, REDUCING THE RISK OF DATA BREACHES AND PENALTIES TO KEEP YOUR BUSINESS DATA SECURE AT ALL TIMES.",
      image: "images/frame4.png",
    },
  ];

  const handleScroll = () => {
    const section = sectionRef.current;
    const contentHeight = section.scrollHeight / totalContent;

    // Calculate scroll position to determine current index
    const scrollY = window.scrollY - section.offsetTop;
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

  return (
    <div className="bg-[#032124] text-white">
      {/* Scrollable Section */}
      <div
        ref={sectionRef}
        className="relative " // Makes the section scrollable
      >
        {/* Sticky Container */}
        <div
          ref={contentRef}
          className="sticky top-0  flex items-center justify-center"
        >
          <div className="flex lg:flex-row flex-col gap-10 items-center max-w-[1200px] px-5">
            {/* Left - Image */}
            <div className="relative w-1/2  flex items-center justify-center overflow-hidden">
              <img
                src={content[currentIndex]?.image}
                alt={`Image ${currentIndex}`}
                className="object-contain h-full transition-transform duration-700"
                style={{
                  opacity: 1,
                  transform: "translateY(0) scale(1)",
                }}
              />
            </div>

            {/* Right - Content */}
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-[32px] font-bold leading-[1.2]">
                {content[currentIndex]?.title}
              </h2>
              <p className="text-[#D2D2D5] text-[18px] leading-[27px] mt-4">
                {content[currentIndex]?.descript}
              </p>
              <button className="mt-6 py-2 px-4 bg-[#12C6D8] text-white rounded hover:bg-[#0ea9be] transition duration-300">
                VIEW OUR SERVICE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="h-screen bg-[#111] flex items-center justify-center">
        <h2 className="text-4xl text-white font-bold">
          🎉 Next Section Content Here
        </h2>
      </div>
    </div>
  );
};

export default Choose2;
