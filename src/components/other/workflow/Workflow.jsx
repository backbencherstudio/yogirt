import React, { useState, useEffect, useRef } from "react";

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepperRef = useRef(null);

  const steps = [
    {
      title: "[ 001//005 ]",
      description: "Initial Consultation",
      details: "We start with a deep dive in your business, find your needs, and list your goals.",
      icon:"images/work1.png",
      side: "left",
    },
    {
      title: "[ 002//005 ]",
      description: "Customized Proposal and Agreement",
      details: "A detailed custom proposal will be developed that includes the strategy and required AI solutions. ",
      icon:"images/work2.png",
      side: "right",
    },
    {
      title: "[ 003//005 ]",
      description: "Proof of Concept",
      details: "A prototype will be created to show the impact and future of your business with our proposed solutions.",
      icon:"images/work3.png",
      side: "left",
    },
    {
      title: "[ 004//005 ]",
      description: "Solution Implementation and Training",
      details: "Post approval, we deploy the solution and train your team to operate it, ensuring seamless adoption.",
      icon:"images/work4.png",
      side: "right",
    },
    {
      title: "[ 005//005 ]",
      description: "Ongoing support and Optimisation",
      details: "To boost performance of our AI solutions, we provide regular maintenance, upgrades, and optimization.",
      icon:"images/work5.png",
      side: "left",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current) {
        // const h = "100px"
        const { top, height } = stepperRef.current.getBoundingClientRect();
        const totalHeight = (height  )- window.innerHeight;
        // const scrollProgress = Math.max(0, Math.min(1.1, -top * 1 / (totalHeight ))); // Added extra 100px for smooth final step focus

        if(window.innerWidth >= 1024 ){

          const scrollProgress = Math.max(
            0,
            Math.min(1.1, ( -top + window.innerHeight * 0.2) / (totalHeight * 1.2))
          );
          setScrollProgress(scrollProgress);
        }
        if(window.innerWidth < 1024 && window.innerWidth >= 768 ){

          const scrollProgress = Math.max(
            0,
            Math.min(1.1, ( -top + window.innerHeight * 1) / (totalHeight * 1.1))
          );
          setScrollProgress(scrollProgress);
        }
        if(window.innerWidth <= 768 ){

          const scrollProgress = Math.max(
            0,
            Math.min(1.1, ( -top + window.innerHeight * 0.3) / (totalHeight * 1.2))
          );
          setScrollProgress(scrollProgress);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (stepperRef.current) {
  //       const { top, height } = stepperRef.current.getBoundingClientRect();
  //       const totalHeight = height - window.innerHeight;
  //       const scrollProgress = Math.max(0, Math.min(1, -top / totalHeight));
  //       setScrollProgress(scrollProgress);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (stepperRef.current) {
  //       const { top, height } = stepperRef.current.getBoundingClientRect();
  //       const scrollProgress = Math.max(
  //         0,
  //         Math.min(1, -top / (height - window.innerHeight))
  //       );
  //       setScrollProgress(scrollProgress);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const calculateStepProgress = (index) => {
  //   const stepTriggerPoint = index / (steps.length - 1);
  //   return Math.max(
  //     0,
  //     Math.min(1, (scrollProgress - stepTriggerPoint) / (1 / steps.length))
  //   );
  // };
  // const calculateStepProgress = (index) => {
  //   const stepTriggerPoint = index / steps.length;
  //   return Math.max(
  //     0,
  //     Math.min(1, (scrollProgress - stepTriggerPoint) * steps.length)
  //   );
  // };
  const calculateStepProgress = (index) => {
    const stepTriggerPoint = index / steps.length ;
    const stepCompletion = (scrollProgress - stepTriggerPoint) * steps.length;
    return Math.max(0, Math.min(1, stepCompletion));
  };
  

  return (
    <div className="bg-[#021214] py-20 lg:py-[200px] ">
      <div className="max-w-[1320px]  mx-auto px-4">
              <div className="text-[#12C6D8] uppercase xl:w-[1021px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 004// Our Workflow ]</p>
                <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs uppercase">Take a sneak peak in our  <span className="text-[#12C6D8]" >tried and tested process</span> of helping business reach their peak potential with AI.</h2>
              </div>
            </div>
      <div
      ref={stepperRef}
      className="relative max-w-[1320px]  mx-auto px-4 2xl:pt-[250px] xl:pt-[300px] lg:pt-[275px] md:pt-[150px] pt-[150px]  "
    >
      
      {/* Vertical Progress Line */}
      <div
        className="absolute lg:left-1/2 top-0 bottom-0 w-[1px] bg-[#12c6d826] transform sm:-translate-x-1/2 "
        style={{
          background: `linear-gradient(to bottom, 
            #12C6D8 ${scrollProgress * 100}%, 
            #12c6d826 ${scrollProgress * 100}%
          )`,
        }}
      />

      {steps.map((step, index) => {
        const stepProgress = calculateStepProgress(index);
        const isLeft = step.side === "left";
        const isFocused = stepProgress === 1; // Full progress
        const isComing = stepProgress > 0 && stepProgress < 1; // Partially visible

        return (
          <div
            key={index}
            className={`flex items-start mb-16  relative ${
              isLeft ? "lg:pr-16" : "lg:pl-16"
            }`}
          >
            {/* Step Marker */}
            <div
              className={`
                absolute top-0 w-[15px] h-[15px] rounded-full z-10 border-[1px] 
                ${isFocused ? "bg-[#12C6D8] " : "bg-[#06373A] "}
                ${isLeft ? "lg:left-1/2 -translate-x-1/2" : "  -left-4 lg:left-[unset] lg:right-1/2 translate-x-1/2"}
              `}
            />

            {/* Step Content */}
            <div
              className={` 
                2xl:w-[30%] xl:w-[40%] lg:w-[42%] w-full rounded-lg shadow-md transition-all duration-300 
                ${
                  isLeft
                    ? "lg:mr-auto sm:ml-[10%] ml-[30px] text-left"
                    : "lg:ml-auto sm:mr-[10%] ml-[30px] "
                }
                ${
                  isFocused
                    ? "bg-[#032528] text-white" // Focused state (red background)
                    : isComing &&
                     "bg-[#032528] backdrop-blur " // Coming state (yellow background)
                    // : "bg-gray-100" // Default state
                }
              `}
              style={{
                transform: `translateX(${
                  window.innerWidth < 500 // Check screen width
                    ? -10 // Use fixed -10px translateX for small screens
                    : stepProgress > 0
                    ? isLeft
                      ? -stepProgress * 40
                      : stepProgress * 40
                    : isLeft
                    ? -40
                    : 40
                }px)`,
                opacity: stepProgress,
              }}
            >
              <div
                className={`border-b  ${
                  isFocused ? "bg-[#12C6D8] border-[#12C6D8]" : "border-[#12C6D8] "
                }`}
              >
                <h3
                  className={`lg:text-[18px] text-[16px] font-bold p-4 font-plexs leading-[150%] ${
                    isFocused ? "text-white" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
             <div className="p-4 flex gap-[14px]">
            <div className="work-icon ">
                  <div className="w-[64px] h-[64px]">
                  <img className={`p-2 ${isFocused ? "bg-[#12C6D8] ": "bg-[#064146]"} ` } src={step.icon} alt="" />
                  </div>
            </div>
             <div className="work-text uppercase">
             <p
                className={`mb-[16px] font-[500] font-plexs lg:text-[18px] text-[16px] ${
                  isFocused ? "text-[#fff]" : "text-white"
                }`}
              >
                {step.description}
              </p>
              <p
                className={`text-[16px]  font-[400]  ${
                  isFocused ? "text-[#D2D2D5]" : "text-[#D2D2D5]"
                }`}
              >
                {step.details}
              </p>
             </div>
             </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default TimelineSection;
