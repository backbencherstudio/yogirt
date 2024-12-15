import Navbar from "../../components/layout/navbar/Navbar";
import "./home.scss";
import video from "../../assets/video/-cbdd-4d17-b3eb-547afa894685.mp4";
import {} from "../../assets/image/circle.png";
import About from "../about/About";
import OurServices from "../OurServices/OurServices";
import group from "../../assets/image/group.png";
// import Workflow from "../Workflow/Workflow";
import { Typewriter } from "react-simple-typewriter";
import CaseStudies from "../../components/other/case-studies/CaseStudies";
import ClientTestimonials from "../../components/other/client-testimonials/ClientTestimonials";
import FormSchedule from "../../components/other/Form-schedule/FormSchedule";
import FooterHeader from "../../components/other/footer/FooterHeader";
import Footer from "../../components/other/footer/Footer";
import ChooseMobile from "../../components/other/choose-section/ChooseMobile";
import ScrollComponent from "../../components/other/choose-section/Chooses";
// import CaseStudies from "../../components/Case-studies/CaseStudies";
const Home = () => {
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
                Automate Your Business With Custom{" "}
                <span style={{ color: "#12C6D8" }}>
                  <Typewriter
                    words={[
                      "Artificial Intelligence Solutions",
                      "Artificial Intelligence Solutions",
                      "Artificial Intelligence Solutions",
                      "Artificial Intelligence Solutions!",
                    ]}
                    loop={5}
                    cursor
                    // cursorStyle='।'
                    typeSpeed={100}
                    // deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </span>
              </h1>
              <p>
                From Advanced AI Solutions, to Predictive Data Analytics,
                insightful AI Consulting, AI Training, and even AI Compliance,
                our arsenal has all the AI tools you need to disrupt your
                industry.
              </p>

              <div className="button-container">
                <button className="corner-button">
                  <span>Get Started</span>
                </button>
              </div>
            </div>

            <div className="orContent">
              <div class="circle-button"></div>
              <div className="orHero">
                <div className="Profits">
                  <div className="left">
                    <h2>40%</h2>
                    <p>Rise In Profits</p>
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
                <div className="Profits" style={{ marginTop: "23px" }}>
                  <div className="left">
                    <h2>40%</h2>
                    <p>Rise In Profits</p>
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
      <section className="about-me">
        <About />
      </section>

      <img className="divsImage" src={group} alt="" />

      <section>
        <OurServices />
      </section>

      <img className="divsImage" src={group} alt="" />
      {/*
      <section>
        <Workflow />
      </section> 

      <CaseStudies />   */}

      <section>
        <ScrollComponent />
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
