import Navbar from "../../components/layout/navbar/Navbar";
import "./home.scss";
import video from "../../assets/video/-cbdd-4d17-b3eb-547afa894685.mp4";
import {} from "../../assets/image/circle.png";
import About from "../about/About";
import OurServices from "../OurServices/OurServices";
import group from "../../assets/image/group.png";
// import Workflow from "../Workflow/Workflow";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import CaseStudies from "../../components/other/case-studies/CaseStudies";
import ClientTestimonials from "../../components/other/client-testimonials/ClientTestimonials";
import FormSchedule from "../../components/other/Form-schedule/FormSchedule";
import FooterHeader from "../../components/other/footer/FooterHeader";
import Footer from "../../components/other/footer/Footer";
import Chooses from "../../components/other/choose-section/Chooses";
import TimelineSection from "../../components/other/workflow/Workflow";



const Home = () => {

  const typewriterWords = [
    "Artificial Intelligence Solutions",
    "Integration Consulting",
    "Data Analytics",
    " ",
    " ",
  ];

  // Dynamic content arrays for h1, p, and button
  const h1DynamicTexts = [
    "Automate Your Business With Custom",
    "Make Smarter, And Profitable Decisions With Our AI",
    "Get An Edge Over The Competition With Predictive",
    "Get AI Training and Build A Capable Future-Ready Teams",
    "AI Governance And Compliance For A Future-Proof Business",
  ];

  const pDynamicTexts = [
    "From Advanced AI Solutions, to Predictive Data Analytics, insightful AI Consulting, AI Training and even AI Compliance, our arsenal has all the AI tools you need to disrupt your industry.",
    "We provide consultation on how AI can be weaved in your business. Think 10X conversions, increased production efficiency, reduced costs, and more.",
    "Looking to plan for future, and optimize your systems? Identify opportunities, avoids risks, and create strategies with AI powered Predictive analytics.",
    "After implementing our custom AI solutions, our experts will train your team to effectively operate, maintain, and leverage the solutions.",
    "Stay on top of new industry standards and regulations with ethical and responsible AI governance frameworks.",
  ];

  const buttonDynamicTexts = [
    "Get Started",
    "Schedule a free consultation",
    "Start Now",
    "Enquire Now",
    "Enquire Now",
  ];

    // State to manage index of the currently displayed dynamic text
    const [dynamicIndex, setDynamicIndex] = useState(0);


  return (
    <>
      <header className="header relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>

        <Navbar />

        <div className="container">
          <div className="hero-content">
            <div className="main-content">
              <span className="small-title">
                [ 001// Redefining AI Solutions for Tomorrow’s Challenges. ]
              </span>
              <br />
              <h1 className="height-typewriter">
        {h1DynamicTexts[dynamicIndex]}{" "}
        <span style={{ color: "#12C6D8" }}>
          <Typewriter
            words={[
              "Artificial Intelligence Solutions",
              "Integration Consulting",
              "Data Analytics",
              "                    ",
              "                    "
            ]}
            loop={5}
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
            onType={(typedWord) => {
              const resetTypedWord = typedWord % 5;
              const newIndex = typewriterWords.findIndex((word,index) => index === resetTypedWord);
              console.log(newIndex)
              if (newIndex !== -1) {
                setDynamicIndex(newIndex); // Update index dynamically inline
              }
            }}// Update index on word change
          />
        </span>
      </h1>
      <p className="font-helvetica  text-[#E9E9EA] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:mt-6 mt-[16px]">{pDynamicTexts[dynamicIndex]}</p>

      <div className="button-containerNew mt-[32px] ">
        <button className="corner-buttonNew  px-5 uppercase font-plexs lg:text-[18px] text-[14px] sm:text-[15px] md:text-[16px]  font-[500]" style={{background:"#12C6D8"}}>
          <span>{buttonDynamicTexts[dynamicIndex]}</span>
        </button>
      </div>
            </div>

            <div className="orContent">
              <div className="circle-button">
                <img className="rightarrow" src="images/rightArrow.png" alt="" />
              </div>
              <div className="orHero">
                <div className="Profits">
                  <div className="left">
                    <h2 className="text-[20px] sm:text-[24px] md:text-[26px]">40%</h2>
                    <p className="text-[14px] lg:text-[18px] md:text-[16px]">Rise In Profits</p>
                  </div>
                  <span class="arrow ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.9999 0.25C5.58569 0.249986 5.24989 0.585761 5.24988 0.999974C5.24986 1.41419 5.58564 1.74999 5.99985 1.75L11.1891 1.75018L0.469667 12.4697C0.176776 12.7626 0.176778 13.2374 0.469673 13.5303C0.762567 13.8232 1.23744 13.8232 1.53033 13.5303L12.25 2.81058L12.2499 7.99999C12.2499 8.4142 12.5857 8.74999 12.9999 8.75C13.4141 8.75001 13.7499 8.41423 13.7499 8.00001L13.75 1.00025C13.75 0.89122 13.7267 0.78762 13.6849 0.694148C13.6486 0.612734 13.597 0.536467 13.5302 0.469667C13.3789 0.31838 13.1791 0.245238 12.9808 0.25024L5.9999 0.25Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="Profits" style={{ marginTop: "23px" }}>
                  <div className="left">
                    <h2 className="text-[20px] sm:text-[24px] md:text-[26px]">70%</h2>
                    <p className="text-[14px] lg:text-[18px] md:text-[16px]">Work Automation</p>
                  </div>
                  <span class="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.9999 0.25C5.58569 0.249986 5.24989 0.585761 5.24988 0.999974C5.24986 1.41419 5.58564 1.74999 5.99985 1.75L11.1891 1.75018L0.469667 12.4697C0.176776 12.7626 0.176778 13.2374 0.469673 13.5303C0.762567 13.8232 1.23744 13.8232 1.53033 13.5303L12.25 2.81058L12.2499 7.99999C12.2499 8.4142 12.5857 8.74999 12.9999 8.75C13.4141 8.75001 13.7499 8.41423 13.7499 8.00001L13.75 1.00025C13.75 0.89122 13.7267 0.78762 13.6849 0.694148C13.6486 0.612734 13.597 0.536467 13.5302 0.469667C13.3789 0.31838 13.1791 0.245238 12.9808 0.25024L5.9999 0.25Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-overlay top-glass inset-0 h-full w-full object-cover z-0"></div>
        <div className="glass-overlay bottom-glass inset-0 h-full w-full object-cover z-0"></div>
      </header>
      <section className="about-me relative xl:pb-[100px]">
        <About />

     <div className=" ">
     <img className="divsImages  absolute -bottom-[10px] md:-bottom-[12px] lg:-bottom-[16px] xl:-bottom-[22px] 2xl:-bottom-[30px] z-10" src={group} alt="" />
     {/* <img className="divsImage -bottom-[2] scale-y-[-1]" src={group} alt="" /> */}
     </div>
      </section>


      <section className="relative">
        <OurServices />

        <img className="absolute divsImage -bottom-[34px] md:-bottom-[48px] lg:-bottom-[68px] xl:-bottom-[90px] 2xl:-bottom-[118px] scale-y-[-1] " src={group} alt="" />
      </section >


      
     
      <section className="relative">
        <TimelineSection />
        <img className="absolute divsImage -bottom-[34px] md:-bottom-[48px] lg:-bottom-[68px] xl:-bottom-[90px] 2xl:-bottom-[118px] scale-y-[-1] " src={group} alt="" />
      </section> 

        <section> 
        <Chooses> </Chooses> 
        </section>

      <section className="relative ">
        {/* <Choose /> */}
      {/* <div className="relative "> */}
     <img className="absolute divsImage -bottom-[34px] md:-bottom-[48px] lg:-bottom-[68px] xl:-bottom-[90px] 2xl:-bottom-[118px] scale-y-[-1] " src={group} alt="" />
  
     {/* </div> */}
      </section>


      <section  className="overflow-hidden">
        <CaseStudies />
      </section>

        
      <section  className="overflow-hidden">
        <ClientTestimonials />
      </section>

      <section  className="overflow-hidden">
        <FormSchedule />
      </section>

      <section  className="overflow-hidden">
        <FooterHeader />
      </section>
      <section  className="overflow-hidden">
        <Footer />
      </section>
    </>
  );
};

export default Home;

// 114477
