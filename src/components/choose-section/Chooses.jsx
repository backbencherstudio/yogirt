
// const Chooses = () => {

//     return (
//         <div className="pt-[29px]  lg:py-[100px] px-5  md:px-5  bg-[#021617] font-plexs vh relative z-0 " >
//             <div className="sticky-0  padding-correction ">
//                 <div className="case-studies-header text-[#12C6D8] uppercase xl:w-[1021px]">
//                     <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 005// Why Choose Us ]</p>
//                     <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs">AI is a rapidly developing industry, evolving by the minute. Our experts are always researching to keep up and  <span className="text-[#12C6D8]" >deliver the most cutting-edge solutions,</span> ensuring your business gets the best AI has to offer.</h2>
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default Chooses;

import React, { useState, useEffect } from "react";

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];
  
  const contents = [
    { title: "Title 1", description: "Description for content 1." },
    { title: "Title 2", description: "Description for content 2." },
    { title: "Title 3", description: "Description for content 3." },
    { title: "Title 4", description: "Description for content 4." },
  ];

const Chooses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleWheel = (e) => {
    const delta = e.deltaY;

    if (delta > 0 && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (delta < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setScrollProgress(((currentIndex + 1) / images.length) * 100);
  }, [currentIndex, images.length]);

  return (
    <div
      className="scroll-effect-container"
      onWheel={handleWheel}
      style={{ height: "150vh", position: "relative" }}
    >
      <div className="sticky-content" style={{ position: "sticky", top: 0, display: "flex" }}>
        {/* Left Column: Content */}
        <div className="content-column" style={{ flex: 1, padding: "2rem" }}>
          <div className="content-card">
            <h2>{contents[currentIndex].title}</h2>
            <p>{contents[currentIndex].description}</p>
          </div>
        </div>

        {/* Center: Progress Bar */}
        <div
          className="progress-bar"
          style={{
            width: "5px",
            background: "#ccc",
            height: "20%",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              background: "#007bff",
              height: `${scrollProgress}%`,
              transition: "height 0.3s",
            }}
          ></div>
        </div>

        {/* Right Column: Image */}
        <div className="image-column" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              transition: "opacity 0.5s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chooses;
