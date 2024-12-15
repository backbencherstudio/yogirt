import React from "react";
import "./about.scss";
const About = () => {
  return (
    <>
      <marquee className={"marquee"}>
        Progressive AI - AI Solutions - Businesses Progressive AI - AI Solutions - Businesses
      </marquee>

      <div className="about-us">
        <p className="title">[ 002// About Us ]</p>
        <div className="desc">
          Progressive AI is an Australian based Artificial intelligence
          solutions and AI consulting provider that{" "}
          <span> helps to automate business processes </span>, create data
          backed strategies and sets businesses up for long term success. Our
          team of global AI engineering experts is dedicated to ensuring you
          attain exponential growth using the power of AI, giving you a head
          start to conquering an evolving business world. AI automation is the
          key to success, and we’re here to help you unlock its best-kept
          secrets.
        </div>
      </div>

      <div class="strateg">
        <div data-aos="fade-up" className="StrategicSolutions left">
          <span>[ Strategic Solutions ]</span>
          <p>
            Achieve your goals with AI solutions developed for your success.
          </p>
        </div>

        <div data-aos="fade-up" className="StrategicSolutions right">
          <span>[ Security & Compliance ]</span>
          <p>AI governance that works to protect sensitive data.</p>
        </div>

        <div data-aos="fade-up" className="StrategicSolutions more-right">
          <span>[ Sustainability ]</span>
          <p>
            Use the latest AI tech to create a lasting impact the right way.
          </p>
        </div>

        <div data-aos="fade-up" className="StrategicSolutions left">
          <span>[ Scalability ]</span>
          <p>Automate your business and meet increasing demands.</p>
        </div>

        <div data-aos="fade-up" className="StrategicSolutions more-right">
          <span>[ Support ]</span>
          <p>24/7 available team, that is dedicated to your growth.</p>
        </div>
      </div>
    </>
  );
};

export default About;
